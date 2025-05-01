<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RegionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('regions')->insert([
            ['region'=>'Beqaa'],
            ['region'=>'South'],
            ['region'=>'North'],
            ['region'=>'Mount Lebanon'],
            ['region'=>'Beirut'],
            ['region'=>'Lebanon'],
        ]);
    }
}
