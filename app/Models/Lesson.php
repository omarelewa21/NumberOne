<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lesson extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    protected $cascadeDeletes = ['lesson_sections'];
    protected $fillable = ['name', 'short_title', 'details', 'active', 'book_id'];
    use Sluggable;

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public function book()
    {
        return $this->belongsTo(Book::class);
    }
    public function quiz()
    {
        return $this->hasMany(Quiz::class);
    }
    /**
     * Get the user that owns the Lesson
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function lesson_sections(): HasMany
    {
        return $this->HasMany(LessonSection::class);
    }
    public function results()
    {
        return $this->hasMany(QuizzResult::class);
    }
}
