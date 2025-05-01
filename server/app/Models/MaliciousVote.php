<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MaliciousVote extends Model
{
    protected $fillablle = [
        'user_id',
        'elections_id',
        'candidate_id',
        'cancelation_reason'
    ];
}
