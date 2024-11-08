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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->longtext('title');
            $table->longtext('slug');
            $table->longtext('short_title');
            $table->text('details');
            $table->unsignedBigInteger('course_id');
            $table->unsignedBigInteger('unit_id');
            $table->unsignedBigInteger('term_id');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('course_id')->references('id')->on('courses')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('unit_id')->references('id')->on('units')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('term_id')->references('id')->on('terms')->constrained()->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
