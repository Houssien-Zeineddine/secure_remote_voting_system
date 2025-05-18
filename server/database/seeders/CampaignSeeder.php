<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Elections;
use App\Models\Campaign;
use App\Models\User;

class CampaignSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $election = Elections::where('on_going', true)->first();
        $candidates = User::where('user_type', 2)->get();

        foreach ($candidates as $candidate) {
            Campaign::factory()->create([
                'user_id' => $candidate->id,
                'elections_id' => $election->id,
            ]);
        }
    }
}
