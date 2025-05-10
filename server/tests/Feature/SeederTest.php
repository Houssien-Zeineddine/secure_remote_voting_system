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

    public function test_all_seeders_run_successfully () 
    {
        $this->seed(\DatabaseSeeder::class);

        $this->assertDatabaseCount('regions', 6);
        $this->assertDatabaseCount('user_types', 3);
        $this->assertDatabaseHas('users', [
            'email' => 'test@example.com'
        ]);
    }

    public function test_regions_seeder_populates_correct_data(): void
    {
        $this->seed(\RegionsSeeder::class);

        $regions = Region::all();

        $this->assertCount(6, $regions);

        $this->assertDatabaseHas('regions', [
            'id' => 1, 
            'region' => 'Beqaa'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 2, 
            'region' => 'South'
        ]);
        
        $this->assertDatabaseHas('regions', [
            'id' => 3, 
            'region' => 'North'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 4, 
            'region' => 'Mount Lebanon'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 5, 
            'region' => 'Beirut'
        ]);

        $this->assertDatabaseHas('regions', [
            'id' => 6, 
            'region' => 'Lebanon'
        ]);
    }

    public function test_user_types_seeder_populates_correct_data() 
    {
        $this->seed(\UsersTypesSeeder::class);

        $userTypes = UserType::all();

        $this->assertDatabaseHas('user_types', [
            'id' => 1,
            'user_type' => 'admin'
        ]);

        $this->assertDatabaseHas('user_types', [
            'id' => 2,
            'user_type' => 'candidate'
        ]);

        $this->assertDatabaseHas('user_types', [
            'id' => 3,
            'user_type' => 'user'
        ]);
    }

    public function test_admin_user_seeder_creates_admin_account() 
    {
        $this->seed([
            \UsersTypesSeeder::class,
            \AdminSeeder::class,
        ]);

        $adminUser = User::where('email', 'test@example.com')->first();

        $this->assertNotNull($adminUser);
    
        $this->assertDatabaseHas('users', [
            'user_type'=>1,
            'first_name'=>'Houssien',
            'middle_name'=>'Mahdi',
            'last_name'=>'Zeineddine',
            'birthday'=>'1993-10-11',
            'id_number'=>'00012247893469',
            'email'=>'test@example.com',
        ]);
        $this->assertTrue(\Hash::check('123456', $adminUser->password));
    }   
}
