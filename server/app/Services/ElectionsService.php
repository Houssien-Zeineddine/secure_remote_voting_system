<?php

namespace App\Services;

use App\Models\Elections;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ElectionsService
{
    /**
     * Create a new class instance.
     */
    public function deleteElections(Request $request) {
        $admin = Auth::user();
        if($admin->user_type !== 1) {
            abort(403, 'Cannot Stop elections');
        }

        $elections = Elections::FindOrFail($request->id);
        $elections->delete();

        return $elections;

    }
}
