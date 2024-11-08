<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Term extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
    protected $fillable = ['name', 'active'];
    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
