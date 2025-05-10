<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CampaignService;
use App\Http\Requests\AddCampaignRequest;

class CampaignController extends Controller {
    public function addCampaign(AddCampaignRequest $request) {
        $campaign = new CampaignService;

        $addedCampaign = $campaign->addCampaign($request);

        return $this->successResponse($addedCampaign, 200);
    }
}
