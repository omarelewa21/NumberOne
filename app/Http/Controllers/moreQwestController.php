<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\qwest;
use Illuminate\Support\Facades\Auth;
use App\Models\qwestchecker;
use Illuminate\Support\Facades\DB;



class moreQwestController extends Controller
{
    
    public function index()
    {
    // Get the total sum of all count values across all users
    $totalCount = DB::table('qwests')->sum('count');

    // Get the total number of records in the qwestcheckers table (if needed)
    $totalRecords = DB::table('qwestcheckers')->count();

    // Paginate results and join 'qwests' with 'users' table to get user names and calculate fields
    $users = DB::table('qwests')
        ->join('users', 'qwests.userid', '=', 'users.id') // Assuming the user ID in the 'users' table is 'id'
        ->select(
            'users.name', // Select the user's name
            'qwests.userid',
            DB::raw('SUM(qwests.count) as total_count'),
            DB::raw('COUNT(qwests.test_no) as total_tests'),
            DB::raw('IF(' . $totalCount . ' > 0, ROUND((SUM(qwests.count) / ' . $totalCount . ') * 100, 2), 0) as percentage')
        )
        ->groupBy('qwests.userid', 'users.name') // Group by userid and name
        ->paginate(10); // Use pagination, 10 results per page

    return view('admin.qwest.all-users', compact('users', 'totalRecords'));
}


public function allusers(Request $request)
{
    // Get the total sum of all count values across all users
    $totalCount = DB::table('qwests')->sum('count');

    // Get the total number of records in the qwestcheckers table (if needed)
    $totalRecords = DB::table('qwestcheckers')->count();

    // Paginate results and join 'qwests' with 'users' table to get user names and calculate fields
    $qwests = DB::table('qwests')
        ->join('users', 'qwests.userid', '=', 'users.id') // Assuming the user ID in the 'users' table is 'id'
        ->select(
            'users.name', // Select the user's name
            'qwests.userid',
            DB::raw('SUM(qwests.count) as total_count'),
            DB::raw('COUNT(qwests.test_no) as total_tests'),
            DB::raw('IF(' . $totalCount . ' > 0, ROUND((SUM(qwests.count) / ' . $totalCount . ') * 100, 2), 0) as percentage')
        )
        ->groupBy('qwests.userid', 'users.name') // Group by userid and name
        ->paginate(1); // Use pagination, 1 result per page

    // Check if the request is an AJAX request
    if ($request->ajax()) {
        return response()->json([
            'qwests' => $qwests,
            'totalRecords' => $totalRecords,
            'totalGrades' => $totalCount,
        ]);
    }

    // Regular view response
    return view('web.qwest.all-qwest-users', compact('qwests', 'totalRecords'));
}



    public function destroy(Request $request)
    {
        // Validate the request (assuming you're sending an array of IDs to delete)
        $request->validate([
            'ids' => 'required|array',
        ]);

        // Delete the selected qwests
        Qwest::destroy($request->ids);

        // Redirect back with a success message
        return redirect()->route('qwests.index')->with('message', 'Selected tests have been deleted successfully.');
    }
}
