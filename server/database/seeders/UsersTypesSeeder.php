<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTypesSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('user_types')->truncate(); 
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        
        DB::table('user_types')->insert([
            ['user_type'=>'admin'],
            ['user_type'=>'candidate'],
            ['user_type'=>'user'],
        ]);
    }
}
