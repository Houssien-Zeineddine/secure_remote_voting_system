<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterationRequest;
use App\Services\AuthService;

class AuthController extends Controller
{
    public function register(RegisterationRequest $request) {
        dd("anything");
        $registerUser = new AuthService();
        $newUser = $registerUser->registerUser($request);

        dd($newUser);

        return $this->successResponse($newUser, 201);
    }
}
