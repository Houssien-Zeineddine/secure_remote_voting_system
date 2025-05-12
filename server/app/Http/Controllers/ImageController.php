<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ImageUploadRequest;
use App\Services\ImageService;


class ImageController extends Controller {
    public function upload (ImageUploadRequest $request) {
        $image = new ImageService;
        
        $uploadedImage = $image->uploadImage($request);

        return $this->successResponse($uploadedImage, 200);
    }
}
