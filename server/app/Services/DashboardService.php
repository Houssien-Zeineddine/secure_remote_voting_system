<?php

namespace App\Services;

use App\Models\User;
use App\Models\CountedVote;
use App\Models\MaliciousVote;

class DashboardService {
    /**
     * Create a new class instance.
     */
    public function getStats () {
        
        $voter_count = User::count();
        $counted_votes = CountedVote::count();
        $malicious_votes = MaliciousVote::count();
        
        $candidates = User::where('user_type', 2)->get(); //result is an array of candidates
        
        $result = [];

        foreach($candidates as $candidate) {
            $voteCount = CountedVote::where('candidate_id', $candidate->id)->count();

            Result::updateOrCreate(
                ['candidate_id' => $candidate->id],
                ['elections_id' => $electionsId],
                ['counted_votes' => $voteCount]
            );

            $results[] = [
                'candidate_id' => $candidate->id,
                'name' => $candidate->first_name . ' ' . $candidate->middle_name . ' ' . $candidate->last_name,
                'votes' => $voteCount
            ];
        }

        return [
            'total_voters' => $totalVoters,
            'total_counted_votes' => $totalCountedVotes,
            'total_malicious_votes' => $totalMaliciousVotes,
            'results' => $results
        ];
    }
}
