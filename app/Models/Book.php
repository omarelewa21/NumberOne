<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    use HasTranslations;
    use Sluggable;
    protected $cascadeDeletes = ['lessons'];
    protected $fillable  = ['title', 'short_title', 'details', 'course_id', 'unit_id', 'term_id'];
    public $translatable = ['title', 'short_title', 'details'];
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
    public function term()
    {
        return $this->belongsTo(Term::class);
    }
    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
