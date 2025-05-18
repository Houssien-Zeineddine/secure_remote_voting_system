<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\UserType;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CandidatesTest extends TestCase {
    use RefreshDatabase;

    public function test_authenticated_user_can_get_all_candidates() {
        $this->seed(\UsersTypesSeeder::class);

        $authUser = User::create([
            'first_name' => 'Auth',
            'middle_name' => 'Test',
            'last_name' => 'User',
            'birthday' => '1990-01-01',
            'id_number' => '111222333',
            'email' => 'authuser@example.com',
            'password' => Hash::make('password'),
            'user_type' => 3, 
        ]);

        $loginResponse = $this->postJson('/api/v0.1/guest/login', [
            'email' => 'authuser@example.com',
            'password' => 'password',
        ]);

        $token = $loginResponse->json('access_token');

        $candidates = User::factory()->count(6)->create([
            'user_type' => 2 
        ]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/v0.1/user/candidates');

        $response->assertStatus(200);
        $response->assertJsonCount(6); 
        $response->assertJsonFragment([
            'user_type' => 2
        ]);
    }
}
