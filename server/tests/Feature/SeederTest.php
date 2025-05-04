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

    public function users_types_seeder_populates_correct_data() 
    {
        $this->seed(\UsersTypesSeeder::class);

        $userTypes = UserType::all;

        $this->assertDatabaseHas('users_types', [
            'id' => 1,
            'user_type' => 'admin'
        ]);

        $this->assertDatabaseHas('users_types', [
            'id' => 2,
            'user_type' => 'candidate'
        ]);

        $this->assertDatabaseHas('users_types', [
            'id' => 3,
            'user_type' => 'voter'
        ]);
    }

    public function admin_user_seeder_creates_admin_account() 
    {
        $this->seed([
            \UsersTypesSeeder::class,
            \AdminSeeder::class,
        ]);

        $adminUser = User::where('email', 'test@example.com')->first();

        $this->assertNotNull($adminUser);
    
        $this->assertDatabaseHas('users', [
            'user_type'=>'1',
            'first_name'=>'Houssien',
            'middle_name'=>'Mahdi',
            'last_name'=>'Zeineddine',
            'birthday'=>'1993-10-11',
            'id_number'=>'00012247893469',
            'email'=>'test@example.com',
            'password'=>bcrypt('123456'),
        ]);
    }   

    public function all_seeders_run_successfully () 
    {
        $this->seed(\DatabaseSeeder::class);

        $this->assertDatabaseCount('regions', 6);
        $this->assertDatabaseCount('users_types', 3);
        $this->assertDatabaseHas('users', [
            'email' => 'test@example.com'
        ]);
    }
}
