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
        // return [
        //     'voter_count' => User::count(),
        //     'counted_votes' => CountedVote::count(),
        //     'malicious_votes' => MaliciousVote::count()
        // ];
        
        $candidates = User::where('user_type', 2)->get(); //result is an array of candidates
        
        
    }
}
