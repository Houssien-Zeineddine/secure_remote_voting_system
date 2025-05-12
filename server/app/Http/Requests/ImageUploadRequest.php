<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImageUploadRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
     public function rules() {
        return [
            'image' => [
                'required',
                'image',
                'mimes:jpeg,png,jpg,gif,webp',
                'max:5120',
                'dimensions:min_width=100,min_height=100,max_width=5000,max_height=5000'
            ]
        ];
    }

     public function messages() {
        return [
            'image.required' => 'Please select an image to upload',
            'image.image' => 'The file must be an image',
            'image.mimes' => 'Only JPEG, PNG, JPG, GIF, and WEBP formats are allowed',
            'image.max' => 'The image size cannot exceed 5MB',
            'image.dimensions' => 'Image dimensions must be between 100x100 and 5000x5000 pixels',
        ];
    }
}
