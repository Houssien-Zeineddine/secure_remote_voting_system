<?php

namespace App\Services;

use App\Models\User;
use App\Http\Requests\EditProfileRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserService {
    /**
     * Create a new class instance.
     */
    public function updateUser (EditProfileRequest $request) {
        $user = Auth::user();
        
        $user->first_name = $request->first_name;
        $user->middle_name = $request->middle_name;
        $user->last_name = $request->last_name;
        $user->birthday = $request->birthday;
        $user->id_number = $request->id_number;
        $user->save();

        return $user;
    }

    public function getCandidates () {
        return User::where('user_type', 2)->get();
    }

    public function updateCandidate (Request $request) {
        $admin = Auth::user();
        if($admin->user_type !== 1) {
            abort(403, 'Cannot update other users');
        }

        $candidate = User::FindOrFail($request->id);
        if ($candidate->user_type !== 2) { 
            abort(400, 'Not a candidate');
        }

        $candidate->user_type = 3;
        $candidate->save();

        return $candidate;
    }

    public function promoteToCandidate (Request $request) {
        $admin = Auth::user();
        if($admin->user_type !== 1) {
            abort(403, 'Cannot update other users');
        }

        $candidate = User::FindOrFail($request->id);
        if($candidate->user_type !== 3) {
            abort(400, 'Cannot promote to a candidate');
        }

        $candidate->user_type = 2;
        $candidate->save();

        return $candidate;

    }
}
