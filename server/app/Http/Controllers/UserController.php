<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\EditProfilRequest;
use App\Services\UserService;


class UserController extends Controller {
    public function updateProfile(EditProfile $request) {

        $user = new UserService();

        $updatedUser = $user->updateUser($request);
        // $user = Auth::user();

        // // Update user's profile with validated data
        // $user->update([
        //     'first_name' => $request->first_name,
        //     'middle_name' => $request->middle_name,
        //     'last_name' => $request->last_name,
        //     'birthday' => $request->birthday,
        //     'id_number' => $request->id_number,
        // ]);

        // Return updated user data
        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user
        ], 200);
    }
}
