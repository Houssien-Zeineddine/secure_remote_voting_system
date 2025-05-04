<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminEmail = 'test@example.com';

        $existingUser = User::where('email', $adminEmail)->first();

        if (!$existingUser) {
            DB::table('users')->insert([
                'user_type'=>1,
                'first_name'=>'Houssien',
                'middle_name'=>'Mahdi',
                'last_name'=>'Zeineddine',
                'birthday'=>'1993-10-11',
                'id_number'=>'00012247893469',
                'email'=>'test@example.com',
                'password'=>bcrypt('123456'),
            ]);
        }
    }
}
