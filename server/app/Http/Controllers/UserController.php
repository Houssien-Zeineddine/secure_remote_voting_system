<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\EditProfileRequest;
use App\Http\Requests\PromoteCandidateRequest;
use App\Http\Requests\RegisterationRequest;
use App\Services\UserService;


class UserController extends Controller {
    public function updateProfile(EditProfileRequest $request) {

        $user = new UserService();

        $updatedUser = $user->updateUser($request);

        return $this->successResponse($updatedUser, 200);
        
    }

    public function getCandidates() {
        $candidates = new UserService;

        $currentCandidates = $candidates->getCandidates();

        return $this->successResponse($currentCandidates, 200);
    }

    public function updateCandidate (Request $request) {
        $candidate = new UserService;

        $updatedCandidate = $candidate->updateCandidate($request);

        return $this->successResponse($updatedCandidate, 200);
    }

    public function addCandidate (PromoteCandidateRequest $request) {
        $user = new UserService;

        $candidate = $user->promoteToCandidate($request);

        return $this->successResponse($candidate, 200);
    }
}
