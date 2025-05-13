<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Result extends Model{
    use SoftDeletes;
    
    protected $fillable = [
        'user_id',
        'elections_id',
        'candidate_id',
        'counted_votes'
    ];

    public function users() {
        return $this->belongsTo(User::class);
    }

    public function elections() {
        return $this->belongsTo(Elections::class);
    } 

    public $timestamps = true;
}
