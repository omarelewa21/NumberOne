<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Quiz;
use App\Models\Term;
use App\Models\Unit;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Invoice;
use App\Models\Trainer;
use App\Models\Subscription;
use App\Models\LessonSection;
use App\Models\CourseCategory;
use Database\Factories\SiteConfigFactory;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        SiteConfigFactory::new()->create();
        User::factory(1)->create([
            'name' => 'خبير',
            'email' => 'info@khbeir.com',
        ]);
    //     CourseCategory::factory()->create();
    //     for ($i = 0; $i < 1; $i++) {
    //         CourseCategory::factory()->create([
    //             "parent_id" => fake()->numberBetween(1, 5),
    //         ]);
    //     }
    //     Trainer::factory(5)->create();
    //     for ($i = 1; $i < 5; $i++) {
    //         Unit::factory()->create([
    //             "name" => $i,
    //             "active" => 1
    //         ]);
    //     }
    //     Course::factory(5)->create();
    //     Term::factory()->create(["name" => "الأول"]);
    //     Term::factory()->create(["name" => "الثاني"]);
    //     Term::factory()->create(["name" => "الثالث"]);
    //     Book::factory(1)->create();
    //     Lesson::factory(10)->create();
    //     LessonSection::factory(50)->create();
    //     Quiz::factory(20)->create();
    }
}
