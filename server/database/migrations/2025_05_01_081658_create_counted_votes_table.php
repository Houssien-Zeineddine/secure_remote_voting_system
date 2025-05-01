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
        Schema::create('counted_votes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('elections_id')->constrained('elections');
            $table->foreignId('user_id')->constrained('users');
            $table->integer('candidate_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('counted_votes');
    }
};
