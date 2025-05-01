<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users_types')->insert([
            ['user_type'=>'admin'],
            ['user_type'=>'candidate'],
            ['user_type'=>'user'],
        ]);
    }
}
