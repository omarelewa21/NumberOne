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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('image_url')->nullable();
            $table->text('short_description');
            $table->text('description');
            $table->text('period');
            $table->integer('price');
            $table->unsignedBigInteger('category_id');
            $table->integer('trainer_id')->nullable();
            $table->boolean('active');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('category_id')->references('id')->on('course_categories')->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
