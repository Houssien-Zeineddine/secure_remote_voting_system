<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Region extends Model {
    
    public function elections () {
        return $this->hasMany(Elections::class);
    }
}
