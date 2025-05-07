<?php

namespace Database\Factories;

use App\Models\CountedVote;
use App\Models\User;
use App\Models\Elections;
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

    protected $model = CountedVote::class;

    public function definition(): array {
        return [
            'elections_id' => Elections::factory(),
            'user_id' => User::factory(),
            'candidate_id' => User::factory(),
        ];
    }
}
