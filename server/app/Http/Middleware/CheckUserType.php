<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckUserType
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();

        if(!$user) {
            return response()->json(['message'=>"Unauthorized"], 401);
        }

        $userTypeId = $user->user_type; 
        $userTypeName = optional($user->userType)->type ?? null;

        if (in_array($userTypeId, $types) || in_array($userTypeName, $types)) {
            return $next($request);
        }

        return response()->json(['message' => 'Unauthorized - invalid user type'], 403);
        
    }
}
