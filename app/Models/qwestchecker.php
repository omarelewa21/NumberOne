<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class qwestchecker extends Model
{
    use HasFactory;
    
    protected $table = 'qwestcheckers'; // Specify the table name if it differs from the pluralized model name.

    // Specify the fillable attributes to protect against mass assignment vulnerabilities.
    protected $fillable = [
        'test_no',
        'date',
        'start_at',
        'end_at',
        'is_active',
         ];
}
