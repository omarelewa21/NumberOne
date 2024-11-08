<?php

namespace App\Models;

use Illuminate\Support\Facades\App;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Khabeer extends Model
{
    use HasFactory;
    public static function available_languages()
    {
        return config('app.available_locales');
    }
}
