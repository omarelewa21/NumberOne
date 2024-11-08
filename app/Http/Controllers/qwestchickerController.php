<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\qwestchecker;
use App\Models\q_qwest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class qwestchickerController extends Controller
{
    public function checkQuizStatus()
    {
        
    // Check if the user is authenticated
    if (!Auth::check()) {
        return redirect()->route('login')->with('error', 'سجل الدخول.');
    }

    // Get the current time in UTC and convert to Riyadh time
    $nowUtc = Carbon::now('UTC');
    $nowLocal = $nowUtc->setTimezone('Asia/Riyadh');

    // 1. Activate quizzes where start_at time has passed and is_active is 0
    QwestChecker::where('is_active', 0)
        ->whereDate('date', '<=', $nowLocal->toDateString())
        ->whereTime('start_at', '<=', $nowLocal->toTimeString())
        ->update(['is_active' => 1]);

    // 2. Deactivate quizzes where end_at time has passed and is_active is 1
    $endedQuizzes = QwestChecker::where('is_active', 1)
        ->whereDate('date', '<=', $nowLocal->toDateString())
        ->whereTime('end_at', '<', $nowLocal->toTimeString())
        ->get();

    // Update q_qwests table for quizzes that have ended
    if ($endedQuizzes->isNotEmpty()) {
        q_qwest::whereIn('test_no', $endedQuizzes->pluck('test_no'))->update(['is_active' => 0]);

        // Deactivate the quizzes in the qwestchecker table
        QwestChecker::whereIn('id', $endedQuizzes->pluck('id'))->update(['is_active' => 0]);
    }

    // 3. Fetch active quizzes for today
    $activeQuizzes = QwestChecker::where('is_active', 1)
        ->whereDate('date', $nowLocal->toDateString())
        ->get();

    // 4. Check if there are active quizzes
    if ($activeQuizzes->isEmpty()) {
        // No active quizzes for today
        $message = "حاليا لا يتوفر اي مشاركات. انتظر قريبا .";
        $timer = null; // No timer needed
        $test_no = null; // No test number available
    } else {
        $message = null;
        // Get the first active quiz for timer display
        $quiz = $activeQuizzes->first();
        $startAt = Carbon::parse($quiz->start_at);
        $endAt = Carbon::parse($quiz->end_at);
        $timer = [
            'start' => $startAt,
            'end' => $endAt,
        ];
        $test_no = $quiz->test_no; // Get the test number
    }

    // Return the view with active quizzes and message
    return view('web.qwest.quiz_list', compact('activeQuizzes', 'message', 'timer', 'test_no'));
}

public function create()
    {
        return view('admin.qwest.add_quiz');
    }

public function store(Request $request)
{
        

    // Validate the incoming request
    $validator = Validator::make($request->all(), [
        'test_no' => 'required|integer',
        'date' => 'required|date',
        'start_at' => 'required|date_format:H:i',
        'end_at' => 'required|date_format:H:i|after:start_at',
        'is_active' => 'required',
    ]);

    if ($validator->fails()) {
        return redirect()->back()
            ->withErrors($validator)
            ->withInput();
    }

    // Create a new quiz
    QwestChecker::create([
        'test_no' => $request->test_no,
        'date' => $request->date,
        'start_at' => $request->start_at,
        'end_at' => $request->end_at,
        'is_active' => $request->is_active,
    ]);

    return redirect()->route('qwestchecker.create')->with('success', 'Quiz added successfully.');
}

public function index()
    {
        // Fetch all QwestChecker records
        $qwestcheckers = QwestChecker::paginate(10); // Adjust the number as needed

        // Return the view with the data
        return view('admin.qwest.index', compact('qwestcheckers'));
    }


public function edit($id)
{
    $qwestchecker = QwestChecker::findOrFail($id);
    return view('admin.qwest.edit', compact('qwestchecker'));
}


public function update(Request $request, $id)
{
    $request->validate([
        'test_no' => 'required|numeric',
        'date' => 'required|date',
        'start_at' => 'required',
        'end_at' => 'required',
        'is_active' => 'required|boolean',
    ]);

    $qwestchecker = QwestChecker::findOrFail($id);
    $qwestchecker->update($request->all());

    q_qwest::where('test_no', $request->test_no)->update(['is_active' => $request->is_active]);

    return redirect()->route('qwestchecker.index')->with('message', 'تم تحديث الاختبار بنجاح');
}


public function destroy($id)
{
    $qwestchecker = QwestChecker::findOrFail($id);
    $qwestchecker->delete();

    return redirect()->route('qwestchecker.index')->with('message', 'تم حذف الاختبار بنجاح');
}

public function moreqwest()
{
    // Fetch all q_wests grouped by test_no
    $qwests = q_qwest::select('test_no', DB::raw('count(*) as total'))
        ->groupBy('test_no')
        ->get();

    return view('admin/qwest/related_tests_view', compact('qwests'));
}

public function showRelatedTests($test_no)
{
    // Fetch all related records based on the test_no
    $relatedTests = q_qwest::where('test_no', $test_no)->paginate(10);

    return view('admin/qwest/related_tests_view', compact('relatedTests', 'test_no'));
}

public function allqwest()
{
   
    // Fetch only test_no and is_active from q_qwests grouped by test_no
    $qwests = q_qwest::groupBy('test_no')
                    ->select('test_no', DB::raw('MAX(is_active) as is_active')) // Fetch test_no and is_active
                    ->paginate(10);  // Add pagination if needed

    // Pass the grouped data to the view
    return view('admin.qwest.all-qwest', compact('qwests'));
}

public function deleteMultiple(Request $request)
{
    // Validate the incoming request
    $request->validate([
        'test_no' => 'required|array', // Expecting an array of test_no to delete
    ]);

    // Fetch all test_no from the request
    $test_nos = $request->input('test_no');

    // Delete all records that match the test_no
    q_qwest::whereIn('test_no', $test_nos)->delete();

    // Optionally, you can also delete from related tables if necessary
    // DB::table('qwestcheckers')->whereIn('test_no', $test_nos)->delete();

    // Redirect back with a success message
    return redirect()->back()->with('message', 'Records deleted successfully.');
}

}
