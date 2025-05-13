<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Elections;
use App\Models\Campaign;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Campaign>
 */
class CampaignFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        return [
            'user_id' => User::factory(),
            'elections_id' => Elections::factory(),
            'campaign' => Campaign::factory()
        ];
    }
}
