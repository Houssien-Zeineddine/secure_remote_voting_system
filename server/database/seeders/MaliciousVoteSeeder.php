<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MaliciousVoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $election = Elections::where('on_going', true)->first();
        $users = User::all();
        $candidates = User::where('id', '=', 2)->get();

        MaliciousVote::factory()
            ->count(50)
            ->sequence(function () use ($users, $election, $candidates) {
                return [
                    'user_id' => $users->random()->id,
                    'elections_id' => $election->id,
                    'candidate_id' => $candidates->random()->id,
                    'cancelation_reason' => $this->getRandomCancellationReason(),
                ];
            })
            ->create();
            
        $this->command->info('50 malicious votes created successfully.');
    }

    private function getRandomCancellationReason()
    {
        $reasons = [
            'Duplicate vote detected',
            'Voter not eligible',
            'Voting period expired',
            'Invalid credentials',
            'Suspected fraud',
            'Voter already cast ballot',
            'Technical error',
            'Identity verification failed',
        ];
        
        return $reasons[array_rand($reasons)];
    }
}
