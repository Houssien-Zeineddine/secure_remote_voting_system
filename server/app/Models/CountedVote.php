<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CountedVote extends Model {
    use SoftDeletes, HasFactory;
    
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

    public $timestamps = true;
}
