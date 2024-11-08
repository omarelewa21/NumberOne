<?php

namespace App\Http\Controllers;

use auth;
use App\Models\Lesson;
use App\Models\QuizzResult;
use Illuminate\Http\Request;

class QuizzResultController extends Controller
{
    public function store(Request $request)
    {
        $user = auth()->user();
        if ($user != null) {
            $lesson = Lesson::find($request->lesson_id);
            $previousresults = QuizzResult::where('user_id', $user->id)->where('lesson_id', $lesson->id)->first();
            if ($previousresults === null) {
                $data = $request->all();
                $data['lesson_id'] = $lesson->id;
                $data['user_id'] = $user->id;
                $data['result'] = $request->pageHistory2;
                $data['count'] = $request->legnth;
                QuizzResult::create($data);
                return redirect('/book/single/' . $lesson->book->slug);
            }
        }
    }
}
