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
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->text('question');
            $table->string('answer0');
            $table->string('answer1');
            $table->string('answer2');
            $table->string('answer3');
            $table->string('right_answer');
            $table->longText('explaination')->nullable();
            $table->unsignedBigInteger('lesson_id');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('lesson_id')->references('id')->on('lessons')->constrained()->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quizzes', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
