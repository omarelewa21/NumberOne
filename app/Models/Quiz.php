<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Quiz extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;

    protected $fillable = ['question', 'answer0', 'answer1', 'answer2', 'answer3', 'right_answer', 'lesson_id', 'explaination'];
    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}
