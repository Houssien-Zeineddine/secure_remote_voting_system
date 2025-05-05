<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterationRequest;
use App\Services\AuthService;

class AuthController extends Controller
{
    public function register(Registeration $request) {
        $registerUser = new AuthService();
        $newUser = $registerUser->registerUser();

        return $this->successResponse($user, 200);
    }
}
