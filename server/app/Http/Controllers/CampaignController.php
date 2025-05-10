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

    public function editCampaign(EditCampaign $request) {
        $campaign = new CampaignService;

        $updatedCampaign = $campaign->updateCampaign($request);

        return $this->successResponse($updatedCampaign, 200);
    }
}
