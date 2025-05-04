<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (DB::table('regions')->count() === 0) {
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
}
