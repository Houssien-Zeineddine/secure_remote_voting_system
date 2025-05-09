<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ElectionsController extends Controller {
    public function deleteElections (Request $request) {

        $elections = new ElectionsService();

        $deletedElections = $elections->deleteElections($request);

        return $this->successResponse($currentCandidates, 200);
    }
}
