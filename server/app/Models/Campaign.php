<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Campaign extends Model {
    use SoftDeletes;
    
    protected $fillable = [
        'user_id',
        'elections_id',
        'campaign'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function elections() {
        return $this->belongsTo(Elections::class);
    }
}
