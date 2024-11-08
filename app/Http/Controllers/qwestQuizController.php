<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\qwest;
use App\Models\Quiz;
use App\Models\q_qwest; 
use App\Models\Lesson; 
use Illuminate\Support\Facades\DB;

class qwestQuizController extends Controller
{
public function create(Request $request)
{
 
    // Get today's date
    $today = now()->toDateString();

    // Fetch the first test_no where is_active = 1 and date matches today
    $qwestchecker = DB::table('qwestcheckers')
        ->where('is_active', 1)
        ->whereDate('date', $today)  // Replace 'date_column' with your actual date field name
        ->first();
    // If no active quiz is found, redirect to the quiz not found page
    if (!$qwestchecker) {
        return redirect()->route('quiz.notFound');
    }
    
    // Get the test_no or set to a default value if no result found
    $test_no = $qwestchecker->test_no;

    // Fetch all qwests where test_no equals the specified number
    $qwests = q_qwest::where('test_no', $test_no)->get();

    // Collect all qwest IDs
    $qwest_ids = $qwests->pluck('q_id');

    // Fetch quizzes related to these qwests
    $quizzes = Quiz::whereIn('id', $qwest_ids)->get(); // Assuming 'qwest_id' is the foreign key

    // Fetch the lessons related to the quizzes
    $lesson_ids = $quizzes->pluck('lesson_id'); // Assuming quizzes reference lessons using 'lesson_id'
    $lessons = Lesson::whereIn('id', $lesson_ids)->get(); // Fetch the lessons

    // If you want to retrieve a specific lesson to pass it to the view
    // Assuming you want the first lesson if there are multiple
    $lesson = $lessons->first(); // Get the first lesson (you can modify this as needed)

    // Define the answers (correct answers for each quiz)
    $answers = $quizzes->pluck('right_answer')->toArray(); // Assuming 'right_answer' holds the correct answer

    // Pass the data to the view
    return view('web.qwest.quiz', [
        'qwests' => $qwests,
        'quizzes' => $quizzes,
        'lesson' => $lesson, // Pass the specific lesson instead of all lessons
        'answers' => $answers, // Pass the answers to the view
    ]);
    
}


public function submitResult(Request $request)
    {
        $validated = $request->validate([
            'lesson_id' => 'required|integer',
            'test_no' => 'required|integer',
            'count' => 'required|integer',
            'userid' => 'required|integer',
        ]);

        // Insert into qwests table using Eloquent
        Qwest::create([
            'test_no' => $validated['test_no'],
            'count' => $validated['count'],
            'submit' => 1,
            'userid' => $validated['userid'],
        ]);

        // Redirect or return response
        return redirect()->back()->with('success', 'Results submitted successfully!');
    }


}


