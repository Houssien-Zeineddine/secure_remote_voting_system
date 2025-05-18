<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class LoginTest extends TestCase {
    use RefreshDatabase;

    public function test_login_returns_jwt_token_and_user_data() {
        $this->seed([
            \UsersTypesSeeder::class,
            \AdminSeeder::class,
        ]);

        $credentials = [
            'email' => 'test@example.com',
            'password' => '123456',
        ];

        $response = $this->postJson('/api/v0.1/guest/login', $credentials);

        $response->assertOk()
                 ->assertJsonStructure([
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
                         'email_verified_at',
                         'profile_picture_path',
                         'created_at',
                         'updated_at',
                         'deleted_at',
                     ]
                 ]);

        $this->assertEquals('bearer', $response['token_type']);

        $this->assertEquals('test@example.com', $response['user']['email']);
        $this->assertEquals('Houssien', $response['user']['first_name']);
    }
}
