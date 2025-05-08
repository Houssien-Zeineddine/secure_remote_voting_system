<?php

namespace App\Services;

use App\Models\User;
use App\Http\Requests\EditProfileRequest;
use Illuminate\Support\Facades\Auth;

class UserService {
    /**
     * Create a new class instance.
     */
    public function updateUser (EditProfileRequest $request) {

        $updatedUser = Auth::user();
        
        $updatedUser->first_name = $request->first_name;
        $updatedUser->middle_name = $request->middle_name;
        $updatedUser->last_name = $request->last_name;
        $updatedUser->birthday = $request->birthday;
        $updatedUser->id_number = $request->id_number;
        $updatedUser->update();

        return $updatedUser;
    }
}
