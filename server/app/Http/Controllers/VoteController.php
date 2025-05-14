<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserService;

class VoteController extends Controller {
    public function voteToCandidate (Request $request) {
        $vote = new VoteService();

        $filteredVote = $vote->filterVote($request);

        return $this->successResponse($filteredVote, 200);
    }
}
