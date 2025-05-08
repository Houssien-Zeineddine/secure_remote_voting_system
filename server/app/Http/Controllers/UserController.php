<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\EditProfileRequest;
use App\Http\Requests\RegisterationRequest;
use App\Services\UserService;


class UserController extends Controller {
    public function updateProfile(EditProfileRequest $request) {

        $user = new UserService();

        $updatedUser = $user->updateUser($request);

        return $this->successResponse($updatedUser, 200);
        
    }

    public function getCandidates() {
        $candidates = new UserService();

        $currentCandidates = $candidates->getCandidates();

        return $this->successResponse($currentCandidates, 200);
    }

    public function updateCandidate (RegisterationRequest $request) {
        $candiate = new UserService;
    }
}
