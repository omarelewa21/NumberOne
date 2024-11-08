<?php

namespace App\Http\Controllers\web;

use App\Models\Book;
use App\Models\Cart;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Khabeer;
use App\Models\SiteConfig;
use App\Models\QuizzResult;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;


class WebController extends Controller
{
    //
    public function home()
    {
        $categories = CourseCategory::has('courses')->get();
        $courses = Course::all();
        return view('web.home', ['courses' => $courses, 'categories' => $categories]);
    }
    public function policy()
    {
        $policy = SiteConfig::firstOrFail()['privacy-policy'];
        return view('web.policy', ['policy' => $policy]);
    }

    public function courseCategory($slug)
    {
        $category = CourseCategory::where('slug', $slug)->firstOrFail();
        $courses = Course::where('category_id', $category->id)->get();
        return view('web.courses.category', ['category' => $category, 'courses' => $courses]);
    }


    public function singleCourse($slug)
    {
        if (Auth::check()) {
            $course = Course::where('slug', $slug)->firstOrFail();
            $isSubscribed =   Subscription::where('user_id',  auth()->user()->id)->where('course_id', $course->id)->get();
            if (!$isSubscribed->isEmpty()) {
                $books = Book::where('course_id', $course->id)->get();
                foreach ($books as $book) {
                    $resultCount = 0;
                    $quizCount = 0;
                    $lessons = $book->lessons;
                    foreach ($lessons as $lesson) {
                        // dd($lesson->results);
                        if (!$lesson->results->isEmpty()) {
                            $resultCount++;
                        }
                        if (!$lesson->quiz->isEmpty()) {
                            $quizCount++;
                        }
                    }
                    
                    $book->progress = $quizCount > 0 ? ($resultCount / $quizCount * 100) : 0;

                }

                return view('web.courses.single', ["books" => $books, "course" => $course, 'subscriber' => 'true']);
            } else {
                return view('web.courses.single', ['subscriber' => 'false', 'course' => $course]);
            }
        } else {
            return redirect('/login');
        }
    }
    public function myCourses()
    {
        $subscribe = Subscription::where('user_id', auth()->user()->id)->get();

        return view('web.courses.myCourses', ['subscribe' => $subscribe]);
    }
    public function singleBook($slug)
    {
        if (Auth::check()) {
            $book = Book::where('slug', $slug)->firstOrFail();
            $course = $book->course;
            $isSubscribed =   Subscription::where('user_id',  auth()->user()->id)->where('course_id', $course->id)->get();
            if (!$isSubscribed->isEmpty()) {
                $lessons = Lesson::where('book_id', $book->id)->get();
                return view('web.books.single', ["book" => $book, "lessons" => $lessons]);
            } else {
                return view('web.courses.single', ['subscriber' => 'false', 'course' => $course]);
            }
        } else {
            return redirect('/login');
        }
    }

    public function  singleLesson($slug)
    {
        if (Auth::check()) {
            $lesson = Lesson::where('slug', $slug)->firstOrFail();
            $course = $lesson->book->course;
            $isSubscribed =   Subscription::where('user_id',  auth()->user()->id)->where('course_id', $course->id)->get();
            if (!$isSubscribed->isEmpty()) {
                $book  = $lesson->book;
                $lessons = $book->lessons;
                $sections = $lesson->lesson_sections;
                return view('web.lessons.single', ['lesson' => $lesson, 'book' => $book, 'lessons' => $lessons, 'sections' => $sections]);
            } else {
                return view('web.courses.single', ['subscriber' => 'false', 'course' => $course]);
            }
        } else {
            return redirect('/login');
        }
    }

  public function  takeQuiz($id)
    {
        if (Auth::check()) {
            $user = auth()->user();
            $lesson = Lesson::find($id);
            $previousresults = QuizzResult::where('user_id', $user->id)->where('lesson_id', $lesson->id)->first();
            $previousresults  === null ? $submit = true : $submit = false;
            $course = $lesson->book->course;
            $isSubscribed =   Subscription::where('user_id',  auth()->user()->id)->where('course_id', $course->id)->get();
            if (!$isSubscribed->isEmpty()) {
                $questions = $lesson->quiz;
                $answers = [];
                foreach ($questions as $question) {
                    $answers[] = $question->right_answer;
                }
                return view('web.lessons.quiz', ['questions' => $questions, 'lesson' => $lesson, 'answers' => $answers, 'submit' => $submit]);
            } else {
                return view('web.courses.single', ['subscriber' => 'false', 'course' => $course]);
            }
        } else {
            return redirect('/login');
        }
    }

    public function subscribe($slug,  User $user)
    {

        $user = auth()->user();
        $course = Course::where('slug', $slug)->firstOrFail();
        if (isset($user)) {
            return view('web.subscribe.form', ['user'  => $user,  'course' => $course]);
        } else {
            return redirect('/login');
        }
    }

    public function addToCart(Request $request,   Course $course, User $user)
    {
        $oldCart = Cart::where('user_id', auth()->user()->id);
        if ($oldCart != null) {
            $oldCart->delete();
        }
        $course = Course::find($request->course_id);
        $data = [];
        $data['course_id'] = $course->id;
        $data['user_id'] = auth()->user()->id;
        $data['price'] = $course->price;
        Cart::create($data);
        return redirect('/cart/');
    }
    public function paymentInfo(Cart $cart,  User $user)
    {

        $user = auth()->user();
        $cart = Cart::where('user_id', $user->id)->firstorFail();
        if (isset($user)) {
            return view('web.subscribe.payment-info', ['user'  => $user,  'cart' => $cart]);
        } else {
            return redirect('/login');
        }
    }
}
