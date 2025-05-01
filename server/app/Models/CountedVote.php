<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CountedVote extends Model
{
    protected $fillable = [
        'elections_id',
        'user_id',
        'candidate_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function elections() {
        return $this->belongsTo(Elections::class);
    }
}
