<?php

namespace App\Services;

class CampaignService {
    /**
     * Create a new class instance.
     */
    public function addCampaign(Request $request) {
        $candidate = Auth::user();
        if($candidate->user_type !== 2) {
            abort(403, 'Cannot add campaign');
        }

        $campaign = new Campaign;
        $campaign->user_id = $request->id;
        $campaign->elections_id = $request_elections_id;
        $campaign->save();

        return $campaign;
    }
}
