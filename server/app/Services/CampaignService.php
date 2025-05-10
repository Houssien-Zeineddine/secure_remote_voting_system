<?php

namespace App\Services;

use App\Models\Campaign;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CampaignService {
    /**
     * Create a new class instance.
     */
    public function addCampaign(Request $request) {
        $candidate = Auth::user();
        if($candidate->user_type !== 2) {
            abort(403, 'Cannot add campaign');
        }

        $existingCampaign = Campaign::where('user_id', $candidate->id)
                                ->where('elections_id', $validated['elections_id'])
                                ->first();
                                
        if ($existingCampaign) {
            abort(409, 'You already have a campaign for this election');
        }

        $campaign = new Campaign;
        $campaign->user_id = $request->id;
        $campaign->elections_id = $request_elections_id;
        $campaign->save();

        return $campaign;
    }
}
