<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    use HasTranslations;
    use Sluggable;
    protected $cascadeDeletes = ['books'];
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    protected $fillable = ['title', 'image_url', 'short_description', 'description', 'period', 'price', 'category_id', 'trainer_id', 'active'];
    public $translatable = ['title', 'short_description', 'description'];


    public function category()
    {
        return $this->belongsTo(CourseCategory::class);
    }
    public function trainer()
    {
        return $this->belongsTo(Trainer::class);
    }
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
