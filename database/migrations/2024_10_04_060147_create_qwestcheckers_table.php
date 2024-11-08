<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('qwestcheckers', function (Blueprint $table) {
            $table->id();
             $table->integer('test_no'); // Test number, unique
            $table->date('date'); // Date of the test
            $table->time('start_at'); // Time when the quiz starts
            $table->time('end_at'); // Time when the quiz ends
            $table->integer('is_active')->default(0); // 0 = Inactive, 1 = Active
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('qwestcheckers');
    }
};
