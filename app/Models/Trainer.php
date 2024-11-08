<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Trainer extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    protected $fillable = ['name',];
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
