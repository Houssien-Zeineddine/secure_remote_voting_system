<?php

namespace App\Services;

use App\Models\Campaign;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CampaignService {
    /**
     * Create a new class instance.
     */
    public function getCampaigns() {
        return Campaign::all();
    }

    public function addCampaign(Request $request) {
        $candidate = Auth::user();
        if($candidate->user_type !== 2) {
            abort(403, 'Cannot add campaign');
        }

        $existingCampaign = Campaign::where('user_id', $candidate->id)
                                ->where('elections_id', $candidate->elections_id)
                                ->first();
                                
        if ($existingCampaign) {
            abort(409, 'You already have a campaign for this election');
        }

        $campaign = new Campaign;
        $campaign->user_id = $candidate->id;
        $campaign->elections_id = $request->elections_id;
        $campaign->campaign = $request->campaign;
        $campaign->save();

        return $campaign;
    }

    public function editCampaign(Request $request) {
        $candidate = Auth::user();
        if($candidate->user_type !== 2) {
            abort(403, 'Cannot edit campaign');
        }

        $campaign = Campaign::where('id', $request->campaign_id)
                    ->where('user_id', $candidate->id)
                    ->firstOrFail();


        $campaign->campaign = $request->campaign;

        $campaign->save();

        return $campaign;
    }
}
