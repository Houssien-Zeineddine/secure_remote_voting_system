<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\EditProfileRequest;
use App\Services\UserService;


class UserController extends Controller {
    public function updateProfile(EditProfileRequest $request) {

        $user = new UserService();

        $updatedUser = $user->updateUser($request);

        return $this->successResponse($updatedUser, 200);
        
    }
}
