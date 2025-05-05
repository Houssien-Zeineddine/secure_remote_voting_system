<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

Route::group(['prefix' => 'v0.1'], function () {
    
    //login and register public routes, no need for authentication
    Route::group(['prefix' => 'guest'], function(){
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);
    });

    Route::middleware('auth:api')->group(function() {
        Route::middleware('CheckUserType')->group( function () {
            Route::group(['prefix' => 'user'], function() {
                Route::get('/dashboard', [DashboardController::class, 'index']);
                Route::get('/candidates', [CandidatesController::class, 'index']);
                Route::get('/guidelines', [GuidelinesController::class, 'index']);
                Route::get('/settings', [SettingsController::class, 'index']);
                
                Route::middleware('CheckUserType:2')->group(function() {
                    Route::group(['prefix' => 'candidate'], function() {
                        Route::post('/addcampaign', [AddCampaignController::class, 'store']);
                    });
                });
                Route::middleware('CheckUserType:1')->group(function() {
                    Route::group(['prefix' => 'admin'], function() {
                        Route::post('/addelections', [AddElectionsController::class, 'store']);
                    });
                });
            }); 
        });
    });
});
