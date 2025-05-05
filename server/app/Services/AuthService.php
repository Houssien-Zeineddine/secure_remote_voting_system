<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\RegisterationRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;

class AuthService extends Controller
{
    /**
     * Create a new class instance.
     */

    public function registerUser (RegisterationRequest $request) {

        $newUser = new User; 
        $newUser->first_name = $request->first_name;
        $newUser->middle_name = $request->middle_name;
        $newUser->last_name = $request->last_name;
        $newUser->birthday = $request->birthday;
        $newUser->id_number = $request->id_number;
        $newUser->email = $request->email;
        $newUser->password = bcrypt($request->password);        
        $newUser->save();

        return $newUser;
    }

    public function loginUser(LoginRequest $request) {
        $token = Auth::attempt($request);
        
        if (!$token) {
            return $this->errorResponse('Invalid Credentials', 422);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken; //createtoken is a method of the User model that saves the token in the database automatically
        $user->access_token = $token;

        return $user;
    }
    
}
