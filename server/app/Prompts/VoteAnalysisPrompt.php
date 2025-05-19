<?php

namespace App\Prompts;

class VoteAnalysisPrompt
{
    /**
     * Get the prompt template for vote behavior analysis
     *
     * @param int $userId The ID of the user voting
     * @param int $recentVotesCount Number of votes in the last 10 minutes
     * @param string $voteTime The time of the vote
     * @return string The formatted prompt
     */
    public static function getPrompt(int $userId, int $recentVotesCount, string $voteTime): string
    {
        return "A user with ID {$userId} has submitted {$recentVotesCount} votes in the last 10 minutes at {$voteTime}. Analyze this behavior for signs of malicious or bot-like activity. Consider whether the number of votes is unusually high compared to typical user behavior, if vote is coming from the same IP address in a short period after login less than 5 seconds, if the activity is happening at unusual hours (e.g., between 12 AM and 5 AM local time), and if the voting pattern shows signs of automation such as rapid clicking or bulk submissions in a few seconds, or any signs you feel it is a reason for a vote to be malicious. Based on your analysis, respond with a JSON object";
    }
} 