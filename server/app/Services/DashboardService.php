<?php

namespace App\Services;

use App\Models\User;
use App\Models\CountedVote;
use App\Models\MaliciousVote;
use App\Models\Result;
use App\Models\Elections;

class DashboardService {
    /**
     * Create a new class instance.
     */
    public function getStats () {
        
        $voter_count = User::count();
        $counted_votes = CountedVote::count();
        $malicious_votes = MaliciousVote::count();
        
        $ongoingElections = Elections::latest()->get();
        $elections_id = $ongoingElections[0]->id; 
        
        $candidates = User::where('user_type', 2)->get(); //result is an array of candidates
        
        $result = [];

        foreach($candidates as $candidate) {
            $voteCount = CountedVote::where('candidate_id', $candidate->id)->count();

            Result::updateOrCreate(
                ['candidate_id' => $candidate->id],
                ['elections_id' => $elections_id],
                ['counted_votes' => $voteCount]
            );

            $results[] = [
                'candidate_id' => $candidate->id,
                'name' => $candidate->first_name . ' ' . $candidate->middle_name . ' ' . $candidate->last_name,
                'votes' => $voteCount
            ];
        }

        return [
            'total_voters' => $voter_count,
            'total_counted_votes' => $counted_votes,
            'total_malicious_votes' => $malicious_votes,
            'results' => $results
        ];
    }
}
