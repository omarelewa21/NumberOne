<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;
use App\Models\q_qwest;
use App\Models\Lesson;
use Illuminate\Support\Facades\Log; // Make sure to include the Log facade

class QquestController extends Controller
{
    public function create()
    {
        // Fetch all quizzes or modify the query as needed
        $quizzes = Quiz::paginate(10); // You can specify the number of items per page
         // Fetch lessons for dropdown filtering
        $lessons = Lesson::select('id', 'name')->get();
        return view('admin.qwest.create', compact('quizzes', 'lessons'));
    }
    
    public function createmore()
    {
        // Fetch all quizzes or modify the query as needed
        $quizzes = Quiz::paginate(10); // You can specify the number of items per page
         // Fetch lessons for dropdown filtering
        $lessons = Lesson::select('id', 'name')->get();
        return view('admin.qwest.createmore', compact('quizzes', 'lessons'));
    }
    
 // Handle the selected questions and save them
    public function saveSelectedQuestions(Request $request)
    {
        
        // Validate the incoming request
            $request->validate([
                'questions' => 'required|array',
                'questions.*' => 'integer',
                'test_no' => 'required|integer|unique:q_qwests,test_no',
                'is_active' => 'required|integer',
            ], [
                'test_no.required' => 'رقم الاختبار مطلوب',
                'test_no.unique' => 'رقم الاختبار محجوز مسبقا قم بتغييره',
            ]);
        
            // Loop through each question ID and save it as a new record
            foreach ($request->questions as $questionId) {
                q_qwest::create([
                    'q_id' => $questionId,  // Assuming 'q_id' is the column name in the database
                    'test_no' => $request->test_no,
                    'is_active' => $request->is_active,
                ]);
            }
        
            return response()->json(['success' => true, 'message' => 'تم الحفظ بنجاح']);
        }
        
        // Handle the selected questions and save them
           public function saveSelectedQuestionsmore(Request $request)
        {
            // Validate the incoming request
            $request->validate([
                'questions' => 'required|array',
                'questions.*' => 'integer',
                'test_no' => 'required|integer',
                'is_active' => 'required|integer',
            ], [
                'test_no.required' => 'رقم الاختبار مطلوب',
            ]);
        
            // Loop through each question ID and save it as a new record
            foreach ($request->questions as $questionId) {
                q_qwest::create([
                    'q_id' => $questionId,  // Assuming 'q_id' is the column name in the database
                    'test_no' => $request->test_no,
                    'is_active' => $request->is_active,
                ]);
            }
        
            return response()->json(['success' => true, 'message' => 'تم الحفظ بنجاح']);
        }
        
        public function filterQuizzes(Request $request)
            {
                $query = Quiz::query();
            
                if ($request->has('lesson_id') && $request->lesson_id != '') {
                    $query->where('lesson_id', $request->lesson_id); // Ensure you have the right column in your quizzes table
                }
            
                $quizzes = $query->paginate(10);
            
                return response()->json(['quizzes' => $quizzes]);
            }
            
            public function filterQuizzesmore(Request $request)
            {
                $query = Quiz::query();
            
                if ($request->has('lesson_id') && $request->lesson_id != '') {
                    $query->where('lesson_id', $request->lesson_id); // Ensure you have the right column in your quizzes table
                }
            
                $quizzes = $query->paginate(10);
            
                return response()->json(['quizzes' => $quizzes]);
            }
}
