<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterationRequest;
use App\Services\AuthService;

class AuthController extends Controller
{
    public function register(RegisterationRequest $request) {
        $registerUser = new AuthService();
        $newUser = $registerUser->registerUser($request);

        return $this->successResponse($newUser, 200);
    }

    public function login(LoginRequest $request) {
        $user = new AuthService();
        $loggedUser = $user->loginUser($request);

        if ($loggedUser instanceof \Illuminate\Http\JsonResponse) {
            return $loggedUser;
        }

        return $this->successResponse($loggedUser, 200);
    }
}
