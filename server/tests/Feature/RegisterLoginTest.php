<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use Tests\TestCase;

class RegisterLoginTest extends TestCase {
    use RefreshDatabase;

    public function test_user_can_register_successfully() {
        // dd(config('database.default'));
        dd(app()->environment(), config('database.default'));

        $email = 'user_' . Str::random(5) . '@example.com';

        $registerPayload = [
            'first_name' => 'houssien',
            'middle_name' => 'mahdi',
            'last_name' => 'zeineddine',
            'birthday' => '1993-10-11',
            'id_number' => '1241115566',
            'email' => $email,
            'password' => '123456',
            'password_confirmation' => '123456',
        ];

        $response = $this->postJson('/api/v0.1/guest/register', $registerPayload);

        $response->assertStatus(200);
        $response->assertJsonFragment([
            'email' => $email,
            'first_name' => 'houssien',
        ]);
    }

    public function test_user_can_login_successfully() {
        $email = 'login_user@example.com';

        // Pre-create user
        $user = User::create([
            'first_name' => 'Login',
            'middle_name' => 'Test',
            'last_name' => 'User',
            'birthday' => '1990-01-01',
            'id_number' => '987654321',
            'email' => $email,
            'password' => Hash::make('password123'),
        ]);

        $response = $this->postJson('/api/v0.1/guest/login', [
            'email' => $email,
            'password' => 'password123',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'user' => [
                'id',
                'user_type',
                'first_name',
                'middle_name',
                'last_name',
                'birthday',
                'id_number',
                'email',
                'profile_picture_path',
                'created_at',
                'updated_at',
            ],
        ]);
    }
}
