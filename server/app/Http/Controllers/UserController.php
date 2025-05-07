<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller {
    public function updateProfile(Request $request) {
        // Validate the incoming data
        $request->validate([
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'birthday' => 'required|date',
            'id_number' => 'required|string|max:20',
        ]);

        // Get the currently authenticated user
        $user = Auth::user();

        // Update user's profile with validated data
        $user->update([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'birthday' => $request->birthday,
            'id_number' => $request->id_number,
        ]);

        // Return updated user data
        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user
        ], 200);
    }
}
