<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Region;
use App\Models\Elections;

class ElectionsSeeder extends Seeder {
    /**
     * Run the database seeds.
     */

    public function run(): void {
        if (Elections::where('on_going', true)->exists()) {
            $this->command->info('An ongoing election already exists. Skipping creation.');
            return;
        }
        
        $region = Region::inRandomOrder()->first();

        Elections::factory()->create([
            'title' => '2025 Minicipality Elections',
            'description' => 'Lebanese Minicipality Elections ',
            'on_going' => true,
            'region_id' => $region->id,
        ]);
    }
}
