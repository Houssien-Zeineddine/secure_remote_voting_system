<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Elections extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'on_going',
    ];

    public function malicious_votes() {
        return $this->hasMany(MaliciousVote::class);
    }

    public function counted_votes() {
        return $this->hasMany(CountedVote::class);
    }

    public function campaigns() {
        return $this->hasMany(Campaign::class);
    }

    public function regions() {
        return $this->belongsTo(Region::class);
    }
}
