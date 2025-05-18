<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Services\ElectionsService;
use App\Http\Requests\AddElectionsRequest;

class ElectionsController extends Controller {
    public function addElections(AddElectionsRequest $request) {
        $elections = new ElectionsService;

        $addedElections = $elections->addElections($request);

        return $this->successResponse($addedElections, 200);
    }

    public function getElections () {
        $elections = new ElectionsService;

        $ongoingElections = $elections->getOngoingElections();

        return $this->successResponse($ongoingElections, 200);
    }

    public function deleteElections (Request $request) {

        $elections = new ElectionsService;

        $deletedElections = $elections->deleteElections($request);

        return $this->successResponse($deletedElections, 200);
    }
}
