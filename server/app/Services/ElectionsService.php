<?php

namespace App\Services;

use App\Models\Elections;
use App\Models\Region;
use App\Http\Requests\AddElectionsRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ElectionsService
{
    /**
     * Create a new class instance.
     */

    public function addElections(AddElectionsRequest $request) {
        $admin = Auth::user();
        if($admin->user_type !== 1) {
            return response()->json([
                'message' => 'Unauthorized: Only admins can create elections'
            ], 403);
        }

        $existingElection = Elections::where('on_going', true)->exists();

        if ($existingElection) {
            return response()->json([
                'message' => 'An active election already exists'
            ], 422);
        }

        $region = Region::where('region', $request->region)->firstOrFail();
        
        $addedElections = new Elections;
        $addedElections->region_id = $region->id;
        $addedElections->title = $request->title;
        $addedElections->description = $request->description;
        $addedElections->on_going = true;
        $addedElections->save();

        return $addedElections;
    
    }

    public function getOngoingElections () {
        $ongoingElections = Elections::latest()->get();
        
        return $ongoingElections;
    }

    public function deleteElections(Request $request) {
        $admin = Auth::user();
        if($admin->user_type !== 1) {
            abort(403, 'Cannot Stop elections');
        }

        $elections = Elections::Find($request->id);
        if ($elections) {
            $elections->delete();
        } else {
            return ["message" => "No elections found"];
        }

        return $elections;

    }
}
