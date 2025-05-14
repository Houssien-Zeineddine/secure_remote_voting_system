<?php

namespace App\Services;

class LeabanonRegionsService {
    /**
     * Create a new class instance.
     */
    private const REGIONS = [
        'beirut' => [
            'min_lat' => 33.85,
            'max_lat' => 33.93,
            'min_lng' => 35.47,
            'max_lng' => 35.55
        ],
        'south' => [
            'min_lat' => 33.10,
            'max_lat' => 33.60,
            'min_lng' => 35.10,
            'max_lng' => 35.60
        ],
        'mount_lebanon' => [
            'min_lat' => 33.70,
            'max_lat' => 34.20,
            'min_lng' => 35.40,
            'max_lng' => 35.90
        ],
        'bekaa' => [
            'min_lat' => 33.40,
            'max_lat' => 34.40,
            'min_lng' => 35.80,
            'max_lng' => 36.40
        ],
        'north' => [
            'min_lat' => 34.20,
            'max_lat' => 34.70,
            'min_lng' => 35.60,
            'max_lng' => 36.40
        ],
        'whole_country' => [
            'min_lat' => 33.05,
            'max_lat' => 34.70,
            'min_lng' => 35.10,
            'max_lng' => 36.60
        ]
    ];
}
