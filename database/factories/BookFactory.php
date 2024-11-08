<?php

namespace Database\Factories;

use App\Models\Term;
use App\Models\Unit;
use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'short_title' => fake()->text(),
            'details' => fake()->paragraph(),
            'course_id' => Course::factory(),
            'unit_id' => Unit::factory(),
            'term_id' => Term::factory(),
        ];
    }
}
