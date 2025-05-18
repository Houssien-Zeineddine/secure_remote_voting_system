<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\VoteRequest;
use App\Services\VoteService;

class VoteController extends Controller {
    public function voteToCandidate (VoteRequest $request) {
        $vote = new VoteService();

        $filteredVote = $vote->filterVote($request);

        return $this->successResponse($filteredVote, 200);
    }
}
