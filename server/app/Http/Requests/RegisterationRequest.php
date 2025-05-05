<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'middle_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'birthday' => 'required|date|before:18 years ago',
            'id_number' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:1|confirmed', //confirmed: Requires a matching password_confirmation field, min is 1 for testing purposes making it easier
        ];
    }

    public function messages():array{
        return [
            'first_name.required' => 'Your first name is required',
            'middle_name.required' => 'Your middle name is required',
            'last_name.required' => 'Your last name is required',
            'id_number.required' => 'Your ID number is required!',
            'birthday.required' => 'Your birthday is required!',
            'email.required' => 'Your email is required!',
            'password.required' => 'Password is needed!',
        ];
    }
}
