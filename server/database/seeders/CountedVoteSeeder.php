<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CountedVote;
use App\Models\Elections;
use App\Models\User;

class CountedVoteSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $election = Elections::where('on_going', true)->first();
        $voters = User::inRandomOrder()->take(220)->get();
        $candidates = User::where('user_type', 2)->get();

        CountedVote::factory()
            ->count($voters->count())
            ->sequence(function ($sequence) use ($voters, $election, $candidates) {
                return [
                    'user_id' => $voters[$sequence->index]->id,
                    'elections_id' => $election->id,
                    'candidate_id' => $candidates->random()->id,
                ];
            })
            ->create();      
        }
}
