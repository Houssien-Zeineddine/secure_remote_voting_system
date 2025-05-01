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
}
