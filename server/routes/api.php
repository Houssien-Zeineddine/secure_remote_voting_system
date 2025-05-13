<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GuidelinesController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\AddElectionsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ElectionsController;
use App\Http\Controllers\ImageController;
use App\Http\Middleware\CheckUserType;

Route::group(['prefix' => 'v0.1'], function () {
    
    //login and register public routes, no need for authentication
    Route::group(['prefix' => 'guest'], function(){
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);
    });

    Route::middleware('auth:api')->group(function() {
        Route::middleware('CheckUserType')->group( function () {
            Route::group(['prefix' => 'user'], function() {
                Route::get('/getstats', [DashboardController::class, 'getStats']);
                Route::get('/candidates', [UserController::class, 'getCandidates']);
                Route::post('/editprofile', [UserController::class, 'updateProfile']);
                Route::post('/upload', [ImageController::class, 'upload']);
                Route::get('/getelections', [ElectionsController::class, 'getElections']);                        
                Route::get('/getcampaigns', [CampaignController::class, 'getCampaigns']);
                // Route::get('/guidelines', [GuidelinesController::class, 'index']);
                // Route::get('/settings', [SettingsController::class, 'index']);
                
                Route::middleware('CheckUserType:2')->group(function() {
                    Route::group(['prefix' => 'candidate'], function() {
                        Route::post('/addcampaign', [CampaignController::class, 'addCampaign']);
                        Route::put('/editcampaign', [CampaignController::class, 'editCampaign']);
                    });
                });
                Route::middleware('CheckUserType:1')->group(function() {
                    Route::group(['prefix' => 'admin'], function() {
                        Route::post('/addelections', [ElectionsController::class, 'addElections']);
                        Route::delete('/deleteelections', [ElectionsController::class, 'deleteElections']);
                        Route::put('/candidates', [UserController::class, 'updateCandidate']);
                        Route::put('/addcandidate', [UserController::class, 'addCandidate']);
                    });
                });
            }); 
        });
    });

    Route::middleware('auth:api')->get('/me', function (Request $request) {
        return response()->json($request->user());
    });
    
});