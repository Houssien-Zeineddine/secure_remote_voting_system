<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ElectionsService;

class ElectionsController extends Controller {
    public function deleteElections (Request $request) {

        $elections = new ElectionsService();

        $deletedElections = $elections->deleteElections($request);

        return $this->successResponse($deletedElections, 200);
    }
}
