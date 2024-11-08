<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class LessonSection extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    protected $fillable = ['title', 'content', 'lesson_id'];
    use Sluggable;
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
