<?php

namespace App\Services;

use Illuminate\Http\Request;

use Prism\Prism\Prism;
use Prism\Prism\Enums\Provider;
use Prism\Prism\Schema\ObjectSchema;
use Prism\Prism\Schema\StringSchema;

use App\Models\CountedVote;
use App\Models\MaliciousVote;

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
            3 => ['lat' => 34.4381, 'lng' => 35.8308, 'radius' => 50], 
            4 => ['lat' => 33.8333, 'lng' => 35.5975, 'radius' => 30], 
            5 => ['lat' => 33.8938, 'lng' => 35.5018, 'radius' => 10], 
            6 => ['lat' => 33.8547, 'lng' => 35.8623, 'radius' => 200], 
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

            if ($analysisResult['is_malicious']) {
                $malicious = MaliciousVote::create([
                    'user_id' => $request->user_id,
                    'elections_id' => $request->elections_id,
                    'candidate_id' => $request->candidate_id,
                    'cancelation_reason' => $analysisResult['reason'],
                ]);
                return $malicious;
            } else {
                $vote = CountedVote::create([
                    'elections_id' => $request->elections_id,
                    'user_id' => $request->user_id,
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

        $prompt = "A user with ID {$request->user_id} has submitted {$recentVotes} votes in the last 10 minutes at {$voteTime}. Determine if this behavior is malicious or indicative of bot-like activity. Respond with JSON: {\"is_malicious\": true/false, \"reason\": \"...\"}.";

        try {
            $response = Prism::provider('openai')
                ->chat()
                ->messages([
                    ['role' => 'system', 'content' => 'You are an AI that detects malicious voting behavior.'],
                    ['role' => 'user', 'content' => $prompt],
                ])
                ->send();

            $content = $response->choices[0]->message['content'] ?? null;

            if ($content) {
                $analysis = json_decode($content, true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    return $analysis;
                } else {
                    Log::error('JSON decoding error: ' . json_last_error_msg());
                }
            } else {
                Log::error('Empty response from OpenAI.');
            }
        } catch (\Exception $e) {
            Log::error('Error analyzing vote behavior: ' . $e->getMessage());
        }

        // Default to non-malicious if analysis fails
        return ['is_malicious' => false, 'reason' => 'Analysis failed or inconclusive.'];
    }
}
