<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionsSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('regions')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

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
