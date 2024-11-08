<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class qwest extends Model
{
    use HasFactory;
    
    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }
    
    protected $table = 'qwests';

    protected $fillable = [
        'test_no',
        'count',
        'submit',
        'userid',
    ];
}
