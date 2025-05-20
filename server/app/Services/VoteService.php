<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Prism\Prism\Prism;
use Prism\Prism\Enums\Provider;
use Prism\Prism\Schema\ObjectSchema;
use Prism\Prism\Schema\StringSchema;
use Prism\Prism\Exceptions\PrismRateLimitedException;

use App\Models\CountedVote;
use App\Models\MaliciousVote;
use App\Prompts\VoteAnalysisPrompt;

class VoteService {
    /**
     * Create a new class instance.
     */
    public function filterVote(Request $request) {
        $latitude = $request->latitude;
        $longitude = $request->longitude;
        $regionId = $request->elections_region_id;

        $regionCoordinates = [
            1 => ['lat' => 33.8547, 'lng' => 35.8623, 'radius' => 50], 
            2 => ['lat' => 33.2721, 'lng' => 35.2033, 'radius' => 50], 
            3 => ['lat' => 34.4381, 'lng' => 35.8308, 'radius' => 500], 
            4 => ['lat' => 33.8333, 'lng' => 35.5975, 'radius' => 30], 
            5 => ['lat' => 33.8938, 'lng' => 35.5018, 'radius' => 10], 
            6 => ['lat' => 33.8547, 'lng' => 35.8623, 'radius' => 20], 
        ];

        $region = $regionCoordinates[$regionId] ?? null;

        if (!$region) {
            return ['message' => 'Invalid region', 'status' => 400];
        };

        $distance = $this->haversineDistance(
            $latitude,
            $longitude,
            $region['lat'],
            $region['lng']
        );

        if ($distance <= $region['radius']) {

            $analysisResult = $this->analyzeVoteBehavior($request);

            if ($analysisResult['status'] === 'malicious') {
                $malicious = MaliciousVote::create([
                    'user_id' => $request->user_id,
                    'elections_id' => $request->elections_id,
                    'candidate_id' => $request->candidate_id,
                    'cancelation_reason' => $analysisResult['result'],
                ]);
                return $malicious;
            } else {
                $vote = CountedVote::create([
                    'user_id' => $request->user_id,
                    'elections_id' => $request->elections_id,
                    'candidate_id' => $request->candidate_id,
                ]);
                return $vote;
            }
        } else {
            $malicious = MaliciousVote::create([
                'user_id' => $request->user_id,
                'elections_id' => $request->elections_id,
                'candidate_id' => $request->candidate_id,
                'cancelation_reason' => 'Location outside election region',
            ]);
            return $malicious;
        }
    }

    private function haversineDistance($lat1, $lon1, $lat2, $lon2) {
        $earthRadius = 6371; // km

        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) * sin($dLat / 2) +
             cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
             sin($dLon / 2) * sin($dLon / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }

    private function analyzeVoteBehavior(Request $request) {
        
        $recentVotes = CountedVote::where('user_id', $request->user_id)
            ->where('created_at', '>=', now()->subMinutes(10))
            ->count();

        $voteTime = now()->format('H:i');
        
        try {
            $prompt = VoteAnalysisPrompt::getPrompt(
                $request->user_id,
                $recentVotes,
                $voteTime
            );

            $schema = new ObjectSchema (
                name: 'vote_validation_check', 
                description: 'Vote validation check', 
                properties: [ 
                    new StringSchema('status', 'counted if validated, malicious if not'), 
                    new StringSchema('result', 'Validated if vote is counted, cancelation reason if vote is canceled')],
                requiredFields: ['validated', 'result']
                );

            $response = Prism::structured()
                ->using(Provider::OpenAI, 'gpt-4o')
                ->withSchema($schema)
                ->withPrompt($prompt)
                ->asStructured();

            $analysisResult = $response->structured;
            
            return $analysisResult;
            
        } catch (PrismRateLimitedException $e) {
            Log::warning('OpenAI rate limit exceeded, using fallback vote analysis', [
                'user_id' => $request->user_id,
                'error' => $e->getMessage()
            ]);
            
            return $this->fallbackVoteAnalysis($recentVotes, $voteTime);
        } catch (\Exception $e) {
            Log::error('Error analyzing vote behavior with AI', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            
            return $this->fallbackVoteAnalysis($recentVotes, $voteTime);
        }
    }
    
    private function fallbackVoteAnalysis($recentVotes, $voteTime) {
        // Convert time to hours for comparison
        $hourMinute = explode(':', $voteTime);
        $hour = (int) $hourMinute[0];
        
        // Check for suspicious voting patterns
        $suspiciousFlags = [];
        
        // Rule 1: Check for high number of recent votes (potential spam)
        if ($recentVotes > 5) {
            $suspiciousFlags[] = "High voting frequency detected ({$recentVotes} votes in 10 minutes)";
        }
        
        // Rule 2: Check for odd hours voting (12AM - 5AM)
        if ($hour >= 0 && $hour < 5) {
            $suspiciousFlags[] = "Voting activity during unusual hours ({$voteTime})";
        }
        
        // Determine result based on flags
        if (count($suspiciousFlags) > 0) {
            return [
                'status' => 'malicious',
                'result' => implode('. ', $suspiciousFlags)
            ];
        }
        
        return [
            'status' => 'counted',
            'result' => 'Vote validated'
        ];
    }
}
