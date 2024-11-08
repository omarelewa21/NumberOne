<?php

namespace Database\Factories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LessonSection>
 */
class LessonSectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->sentence(),
            "content" => fake()->text(),
            "lesson_id" => Lesson::factory(),
        ];
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
