<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CountedVote;
use App\Models\Elections;
use App\Models\User;

class CountedVoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $election = Elections::where('ongoing', true)->first();
        $users = User::all();
        $candidates = User::where('id', '=', 2)->get();

        CountedVote::factory()
            ->count(223)
            ->sequence(function () use ($users, $election, $candidates) {
                return [
                    'user_id' => $users->random()->id,
                    'elections_id' => $election->id,
                    'candidate_id' => $candidates->random()->id,
                ];
            })
            ->create();
            
        $this->command->info('223 counted votes created successfully.');
    }
}
