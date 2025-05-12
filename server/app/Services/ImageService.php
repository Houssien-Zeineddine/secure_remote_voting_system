<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

        $post = new Post();
        $post->image_path = $path;
        $post->save();

        return response()->json([
            'success' => true,
            'url' => Storage::disk('public')->url($path),
            'path' => $path,
        ]);
    }
}
