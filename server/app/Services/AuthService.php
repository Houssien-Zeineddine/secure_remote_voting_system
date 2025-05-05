<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;

class AuthService extends Controller
{
    /**
     * Create a new class instance.
     */

    public function registerUser (Request $request) {

        $user = new User; 
        $user->first_name = $request->first_name;
        $user->middle_name = $request->middle_name;
        $user->last_name = $request->last_name;
        $user->birthday = $request->birthday;
        $user->id_number = $request->id_number;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        return $user;
    }
    
}
