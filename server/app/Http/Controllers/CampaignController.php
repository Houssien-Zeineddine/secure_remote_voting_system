<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CampaignService;

class CampaignController extends Controller {
    public function addCampaign(Request $request) {
        $campaign = new CampaignService;

        $addedCampaign = $campaign->addCampaign($request);

        return $this->successResponse($addedCampaign, 200);
    }
}
