<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MaliciousVote extends Model
{
    protected $fillable = [
        'user_id',
        'elections_id',
        'candidate_id',
        'cancelation_reason'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function election() {
        return $this->belongsTo(Elections::class);
    }
}
