<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use App\Models\User;

class ImageService {
    /**
     * Create a new class instance.
     */
    
     public function uploadImage (Request $request) {
        $image = $request->file('image');

        $folder = 'images/' . date('Y/m');

        $filename = Str::uuid() . '.' . $image->getClientOriginalExtension();
        
        $path = Storage::disk('public')->putFileAs(
            $folder,
            $image,
            $filename
        );

        $user = Auth::user();
        $user->profile_picture_path = $path;
        $user->save();

        return response()->json([
            'success' => true,
            'url' => Storage::disk('public')->url($path),
            'path' => $path,
        ]);
    }
}
