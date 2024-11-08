<?php

namespace App\Http\Controllers\Admin;

use App\Models\Quiz;
use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $quizzes = Quiz::with('lesson')->latest()->paginate(10);
        return view('admin.quizzes.index', ['quizzes' => $quizzes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $lessons  = Lesson::all();
        return view('admin.quizzes.create', ['lessons' => $lessons]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate(
            [
                'lesson_id' => 'required',
                'question.*.question' => 'required',
                'question.*.answer0' => 'required',
                'question.*.answer1' => 'required',
                'question.*.answer2' => 'required',
                'question.*.answer3' => 'required',
                'question.*.right_answer' => 'required',
                'question.*.explaination' => 'nullable',
            ],
            [
                'lesson_id' => 'لابد من اختيار الدرس',
                'question.*.question' => 'حقل السؤال مطلوب',
                'question.*.answer0' => 'حقل الإجابات مطلوب',
                'question.*.answer1' => 'حقل الإجابات مطلوب',
                'question.*.answer2' => 'حقل الإجابات مطلوب',
                'question.*.answer3' => 'حقل الإجابات مطلوب',
                'question.*.right_answer' => 'حقل الإجابة الصحيحة  مطلوب',
            ]
        );
        foreach ($request->question as  $record) {
            $record['lesson_id'] = $request->lesson_id;
            Quiz::create($record);
        }
        return redirect('/admin/quizzes')->with('message', 'Quiz created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $quiz = Quiz::find($id);
        $lessons = Lesson::all();
        return view('admin.quizzes.edit', ['quiz' => $quiz, 'lessons' => $lessons]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
           $quiz = Quiz::find($id);
        $data = $request->validate(
            [
                'lesson_id' => 'required',
                'question' => 'required',
                'answer0' => 'required',
                'answer1' => 'required',
                'answer2' => 'required',
                'answer3' => 'required',
                'right_answer' => 'required',
                'explaination' => 'nullable',
            ],
            [
                'lesson_id' => 'لابد من اختيار الدرس',
                'question' => 'حقل السؤال مطلوب',
                'answer0' => 'حقل الإجابات مطلوب',
                'answer1' => 'حقل الإجابات مطلوب',
                'answer2' => 'حقل الإجابات مطلوب',
                'answer3' => 'حقل الإجابات مطلوب',
                'right_answer' => 'حقل الإجابة الصحيحة  مطلوب',
            ]
        );
        

     
  
       $quiz->update($data);
         $quiz = Quiz::find($id);

        return redirect('/admin/quizzes')->with('message', 'Quiz Edited Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $quiz = Quiz::find($id);
        $quiz->delete();
        return redirect('/admin/quizzes')->with('message', 'Quiz Deleted Successfully');
    }
}
