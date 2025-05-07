<?php

namespace Database\Factories;

use App\Models\MaliciousVote;
use App\Models\User;
use App\Models\Elections;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MaliciousVote>
 */
class MaliciouVoteFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = MaliciousVote::class;

    public function definition(): array {
        return [
            'user_id' => User::factory(),
            'elections_id' => Elections::factory(),
            'candidate_id' => User::factory(),
            'cancelation_reason' => $this->faker->sentence(),
        ];
    }
}
