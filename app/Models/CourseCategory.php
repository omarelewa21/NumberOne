<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseCategory extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    use HasTranslations;
    use Sluggable;
    protected $cascadeDeletes = ['courses'];
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    protected $fillable = [
        'name',
        'image_url',
        'parent_id'
    ];
    public $translatable = ['name'];


    public function parent()
    {
        return $this->belongsTo(CourseCategory::class);
    }
    public function children()
    {
        return $this->hasMany(CourseCategory::class, 'parent_id')->with('children');
    }

    public function courses()
    {
        return $this->hasMany(Course::class, 'category_id');
    }
}
