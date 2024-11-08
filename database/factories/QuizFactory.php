<?php

namespace Database\Factories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Quiz>
 */
class QuizFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "question" => fake()->sentence(),
            "answer0" => fake()->word(),
            "answer1" => fake()->word(),
            "answer2" => "Right Answer",
            "answer3" => fake()->word(),
            "right_answer" => "Right Answer",
            "explaination" => fake()->text(),
            "lesson_id" => Lesson::factory(),
        ];
    }
}
