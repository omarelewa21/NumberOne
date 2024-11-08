<?php

namespace Database\Factories;

use App\Models\CourseCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CourseCategory>
 */
class CourseCategoryFactory extends Factory
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
            'name' => [
                'en' => $this->faker->text(20),
                'ar' => $this->faker->text(20),
            ],
            'image_url' => fake()->imageUrl(),
        ];
    }
    public function definition2(): array
    {
        return [
            //
            'name' => [
                'en' => $this->faker->text(20),
                'ar' => $this->faker->text(20),
            ],
            'image_url' => fake()->imageUrl(),
            'parent_id' => CourseCategory::factory(),
        ];
    }
}
