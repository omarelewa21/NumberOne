<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
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
            "name" => fake()->sentence(),
            "short_title" => fake()->sentence(),
            "details" => fake()->paragraph(),
            "active" => fake()->numberBetween(0, 1),
            "book_id" => Book::factory(),
        ];
    }
}
