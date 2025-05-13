<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\DashboardService;

class DashboardController extends Controller {
    public function getStats() {
        $stats = new DashboardService;

        $votersStats = $stats->getStats();

        return $this->successResponse($votersStats, 200);
    }
}
