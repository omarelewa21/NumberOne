<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class q_qwest extends Model
{

    protected $table = 'q_qwests'; 

    protected $fillable = ['q_id', 'test_no', 'is_active'];
    
    
}
