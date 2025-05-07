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
    
    protected $model = Elections::class;

    public function definition(): array {
        return [
        'regions_id' => $this->faker->numberBetween(1, 6),
        'title' => $this->faker->sentence(3),
        'description' => $this->faker->sentence(),
        'on_going' => $this->faker->boolean(),
        'deleted_at' -> null,
        ];
    }

    public function ongoing() {
        return $this->state(function (array $attributes) {
            return [
                'on_going' => true,
            ];
        });
    }

    public function ended() {
        return $this-state(function (array $attributes) {
            return [
                'on_going' => false,
            ];
        });
    }

    public function deleted() {
        return $this-state(function (array $attributes) {
            return [
                'deleted_at' => now(),
            ];
        });
    }
}
