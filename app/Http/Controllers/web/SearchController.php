<?php

namespace App\Http\Controllers\web;

use App\Models\Book;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SearchController extends Controller
{
    public function searchLessons(Request $request)
    {
        if (Auth::check()) {
            $book = Book::where('id', $request->search_id)->firstOrFail();
            $course = Course::where('id', $book->course->id)->firstOrFail();
            $isSubscribed =   Subscription::where('user_id',  auth()->user()->id)->where('course_id', $course->id)->get();
            if (!$isSubscribed->isEmpty()) {
                $keyword = $request['keyword'];
                $lessons = Lesson::where('name', 'like', '%' . $keyword . '%')->where('book_id', $book->id)->orWhere('details', 'like', '%' . $keyword . '%')->get();
                return view('web.courses.search', ['lessons' => $lessons, 'book' => $book]);
            } else {
                return view('web.courses.single', ['subscriber' => 'false', 'course' => $course]);
            }
        } else {
            return redirect('/login');
        }
    }
}
