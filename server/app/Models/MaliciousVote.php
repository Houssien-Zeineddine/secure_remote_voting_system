<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MaliciousVote extends Model {
    use SoftDeletes, HasFactory;
    
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
