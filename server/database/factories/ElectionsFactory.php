<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Elections>
 */
class ElectionsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'regions_id' => $this->faker->numberBetween(1, 6),
        'title' => $this->faker->sentence(3),
        'description' => $this->faker->paragraph(),
        'on_going' => $this->faker->boolean(),
        'deleted_at' -> null,
        ];
    }
}
