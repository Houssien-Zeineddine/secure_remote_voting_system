<?php

namespace Tests\Feature;

use App\Models\Region;
use App\Models\User;
use App\Models\UserType;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SeederTest extends TestCase
{
    use RefreshDatabase; 

    /**
     * A basic feature test example.
     */
    public function regions_seeder_populates_correct_data(): void
    {
        $this->seed(\RegionsSeeder::class);

        $region = Region::all();

        $this->assertCount(6, $regions);

        $this->assertDatabaseHas('regions', [
            'id' => 1, 
            'regions' => 'Beqaa'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 2, 
            'regions' => 'South'
        ]);
        
        $this->assertDatabaseHas('regions', [
            'id' => 3, 
            'regions' => 'North'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 4, 
            'regions' => 'Mount Lebanon'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 5, 
            'regions' => 'Beirut'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 6, 
            'regions' => 'Lebanon'
        ]);
    }

    
}
