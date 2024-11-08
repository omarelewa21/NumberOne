<?php

namespace Database\Factories;

use App\Models\Trainer;
use App\Models\CourseCategory;
use Faker\Provider\ar_EG\Text;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => [
                'en' => $this->faker->sentence($nbWords = 7, $variableNbWords = true),
                'ar' => $this->faker->sentence($nbWords = 7, $variableNbWords = true),
            ],
            'image_url' => fake()->imageUrl(),
            'short_description' => fake()->Text(),
            'description' => fake()->Text(),
            'period' => fake()->numberBetween(20, 50),
            'price' => fake()->numberBetween(1000, 20000),
            'category_id' => CourseCategory::factory(),
            'trainer_id' => Trainer::factory(),
            'active' => fake()->boolean()
        ];
    }
}
