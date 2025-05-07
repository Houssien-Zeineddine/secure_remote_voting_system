<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CountedVote>
 */
class CountedVoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'elections_id' => Elections::factory(),
            'user_id' => User::factory(),
            'candidate_id' => User::factory(),
        ];
    }
}
