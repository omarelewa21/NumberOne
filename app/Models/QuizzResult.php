<?php

namespace App\Models;

use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuizzResult extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    public $fillable = ['lesson_id', 'user_id', 'result', 'count'];

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
