<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VoteController extends Controller {
    public function voteToCandidate (Request $rewuest) {
        $vote = new VoteService();

        $filteredVote = $vote->filterVote($request);

        return $this->successResponse($filteredVote, 200);
    }
}
