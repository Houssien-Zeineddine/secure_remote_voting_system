<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VoteRequest extends FormRequest {
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
    public function rules(): array {
        return [
            'user_id' => 'required|exists:users,id',
            'candidate_id' => 'required|exists:users,id',
            'elections_id' => 'required|exists:elections,id',
            'elections_region_id' => 'required|exists:regions,id',
            'latitude' => 'required|numeric|between:33.05,34.70',
            'longitude' => 'required|numeric|between:35.10,36.60',
            'accuracy' => 'required|numeric',
            'timestamp' => 'required|date'
        ];
    }
}
