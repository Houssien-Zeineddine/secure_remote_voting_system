<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckUserType {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  mixed  ...$types  // <-- accept user types (IDs or names)
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next, ...$types): Response {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => "Unauthorized"], 401);
        }

        if (empty($types)) {
            return $next($request);
        }

        $userTypeId = $user->user_type;
        $userTypeName = optional($user->userType)->type ?? null;

        if (in_array($userTypeId, $types) || in_array($userTypeName, $types)) {
            return $next($request);
        }

        return response()->json(['message' => 'Unauthorized - invalid user type'], 403);
    }
}
