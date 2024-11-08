<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class CheckQuizSubmission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
// Get the authenticated user's ID
    $userId = auth()->user()->id;

    // Retrieve the test_no from the route parameter
    $testNo = $request->route('test_no');

    // Check if the test_no exists in the database
    $testExists = DB::table('q_qwests')->where('test_no', $testNo)
                                        ->where('is_active', 1)
                                        ->exists();

    // If test_no doesn't exist, block access
    if (!$testExists) {
        return redirect()->route('quiz.notFound'); // Redirect to a page indicating the quiz does not exist
    }

    // Fetch the qwest record for this user and the given test_no
    $qwest = DB::table('qwests')
                ->where('test_no', $testNo)
                ->where('userid', $userId)
                ->first();

    // If no record is found for the current user and test_no, allow access to the quiz
    if (!$qwest) {
        return $next($request); // No record found, so allow access to the quiz page
    }

    // If the record exists and the quiz has already been submitted (submit = 1), block access
    if ($qwest->submit == 1) {
        return redirect()->route('quiz.blocked'); // Redirect to a page indicating the quiz is already submitted
    }

    // Otherwise, allow access to the page (the user can still take the quiz)
    return $next($request);
    }
}
