<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model {
    protected $fillable = [
        'user_id',
        'campaign'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function elections() {
        return $this->belongsTo(Elections::class);
    }
}
