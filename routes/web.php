<?php

use App\Models\Course;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\web\PayController;
use App\Http\Controllers\web\WebController;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Admin\QuizController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\web\SearchController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\LessonController;
use App\Http\Controllers\Admin\SubscriptionController;
use App\Http\Controllers\Admin\LessonSectionController;
use App\Http\Controllers\Admin\settings\TermController;
use App\Http\Controllers\Admin\settings\UnitController;
use App\Http\Controllers\Admin\CourseCategoryController;
use App\Http\Controllers\Admin\settings\SiteConfigController;
use App\Http\Controllers\Admin\settings\TrainerController;
use App\Http\Controllers\QquestController;
use App\Http\Controllers\qwestchickerController;
use App\Http\Controllers\qwestQuizController;
use App\Http\Controllers\moreQwestController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\QuizzResultController;
use App\Models\QuizzResult;


Route::get('/', [WebController::class, 'home'])->name('home');
Route::get('/course/{slug}', [WebController::class, 'singleCourse']);
Route::get('/book/single/{slug}', [WebController::class, 'singleBook']);
Route::get('/lesson/{slug}', [WebController::class, 'singleLesson']);
Route::get('/lesson/{slug}/quiz', [WebController::class, 'takeQuiz']);
Route::get('/course-category/{slug}', [WebController::class, 'courseCategory']);
Route::get('/course/{slug}/subscribe', [WebController::class, 'subscribe']);
Route::post('/subscribe/cart', [WebController::class, 'addToCart']);
Route::get('/privacy-policy', [WebController::class, 'policy']);
Route::get('/search/course', [SearchController::class, 'searchLessons']);
Route::get('/cart', [WebController::class, 'paymentInfo']);
Route::post('/pay', [PayController::class, 'pay']);


// Take Quizz
Route::post('/result/submit', [QuizzResultController::class, 'store']);

Route::get('/admin', function () {
    if (Auth::user() != null) {
        $loggedUser = Auth::user();
        if ($loggedUser['admin'] != 1) {
            return redirect('/');
        } else {
            return view('admin.dashboard');
        }
    } else {
        return redirect('/login');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group(
    ['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth', 'verified']],
    function () {
        Route::resource('/courses-categories', CourseCategoryController::class)->names('courseCategories');
        Route::get('/course-category/courses/{id}', [CourseCategoryController::class, 'filter']);
        Route::post('/courses-categories/{courses_category}/deleteimage', [CourseCategoryController::class, 'deleteImage']);
        Route::resource('courses', CourseController::class)->names('courses');
        Route::post('/courses/{course}/deleteimage', [CourseController::class, 'deleteImage']);
        Route::get('/course/books/{id}', [CourseController::class, 'filter']);
        Route::resource('/books', BookController::class)->names('books');
        Route::get('/book/lessons/{id}', [BookController::class, 'filter']);
        Route::resource('/lessons', LessonController::class)->names('lesson');
        Route::resource('/subscriptions', SubscriptionController::class)->names('subscriptions');
        Route::resource('/lesson-sections', LessonSectionController::class)->names('lessonSections');
        Route::get('/lessson/lesson-sections/{id}', [LessonController::class, 'filter']);
        Route::resource('/quizzes', QuizController::class)->names('quiz');
        Route::resource('/users', UserController::class)->names('user');
        Route::get('/admins', [UserController::class, 'getAdmins']);

        //Settings
        Route::resource('/units', UnitController::class);
        Route::get('/units/books/{id}', [UnitController::class, 'filter']);

        Route::resource('/terms', TermController::class);
        Route::get('/terms/books/{id}', [TermController::class, 'filter']);

        Route::resource('/trainers', TrainerController::class);
        Route::get('/trainers/courses/{id}', [TrainerController::class, 'filter']);

        Route::get('/about', [SiteConfigController::class, 'editAbout']);
        Route::put('/about', [SiteConfigController::class, 'updateAbout']);

        Route::get('/policy', [SiteConfigController::class, 'editPolicy']);
        Route::put('/policy', [SiteConfigController::class, 'updatePolicy']);

        Route::get('/contacts', [SiteConfigController::class, 'editContacts']);
        Route::put('/contacts', [SiteConfigController::class, 'updateContacts']);


        // Trashed
        Route::get('/trashed/courses-categories', [CourseCategoryController::class, 'trashed']);
        Route::get('/trashed/courses', [CourseController::class, 'trashed']);
        Route::get('/trashed/books', [BookController::class, 'trashed']);
        Route::get('/trashed/lessons', [LessonController::class, 'trashed']);


        //Force Delete
        Route::post('/trashed/courses-categories/force-delete/{id}', [CourseCategoryController::class, 'forceDelete']);
        Route::post('/trashed/courses/force-delete/{id}', [CourseController::class, 'forceDelete']);
        Route::post('/trashed/books/force-delete/{id}', [BookController::class, 'forceDelete']);
        Route::post('/trashed/lessons/force-delete/{id}', [LessonController::class, 'forceDelete']);

        // Restore Trashed
        Route::get('/trashed/courses-categories/{id}/restore', [CourseCategoryController::class, 'restore']);
        Route::get('/trashed/courses/{id}/restore', [CourseController::class, 'restore']);
        Route::get('/trashed/books/{id}/restore', [BookController::class, 'restore']);
        Route::get('/trashed/lessons/{id}/restore', [LessonController::class, 'restore']);
    }
);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/my-courses', [WebController::class, 'myCourses']);
    Route::get('/register', [ProfileController::class, 'create'])->name('profile.create');
    Route::post('/admin/logout', [AuthenticatedSessionController::class, 'adminLogout'])
        ->name('adminLogout');
    Route::post('/logout', [AuthenticatedSessionController::class, 'adminLogout'])
        ->name('logout');
});

//qwest 
Route::post('/save-selected-questions', [QquestController::class, 'saveSelectedQuestions'])->name('qwest.saveSelectedQuestions');
Route::post('/save-selected-questions-more', [QquestController::class, 'saveSelectedQuestionsmore'])->name('qwest.saveSelectedQuestionsmore');
Route::get('/admin/qwest/create', [QquestController::class, 'create'])->name('qwest.create');
Route::get('/admin/qwest/createmore', [QquestController::class, 'createmore'])->name('qwest.createmore');
Route::get('/quiz/filter', [QquestController::class, 'filterQuizzes'])->name('quiz.filter');
Route::get('/quiz/filtermore', [QquestController::class, 'filterQuizzesmore'])->name('quiz.filtermore');
Route::get('/admin/qwest/all-users', [MoreQwestController::class, 'index'])->name('qwests.index');
Route::get('/web/qwest/all-qwest-users', [MoreQwestController::class, 'allusers'])->name('qwests.allusers');
Route::delete('admin/qwest/deleteh', [MoreQwestController::class, 'destroy'])->name('qwests.destroy');

//qwest quiz
Route::get('/web/qwest/quiz/{test_no}', [qwestQuizController::class, 'create'])->name('qwestquiz.create')->middleware('checkQuizSubmission');
Route::post('/qwestresult/submit', [qwestQuizController::class, 'submitResult'])->name('qwestresult.submit');
Route::get('/web/qwest/quiz_list', [QwestchickerController::class, 'checkQuizStatus']);
Route::get('/admin/qwest/add-quiz', [QwestchickerController::class, 'create'])->name('qwestchecker.create');
Route::post('/admin/qwest/add-quiz', [QwestchickerController::class, 'store'])->name('qwestchecker.store');
Route::get('/admin/qwest/index', [QwestchickerController::class, 'index'])->name('qwestchecker.index');
Route::get('/admin/qwest/{id}/edit', [QwestchickerController::class, 'edit'])->name('qwestchecker.edit');
Route::delete('/admin/qwest/{id}', [QwestchickerController::class, 'destroy'])->name('qwestchecker.destroy');
Route::put('/admin/qwest/{id}', [QwestchickerController::class, 'update'])->name('qwestchecker.update');
Route::get('/admin/qwest/all-qwest', [QwestchickerController::class, 'allqwest'])->name('allqwest.fetch');
Route::get('/admin/qwest/related_tests_view/{test_no}', [QwestchickerController::class, 'showRelatedTests'])->name('relatedTests.show');
Route::delete('/admin/qwest/related_tests_view/{test_no}', [QwestchickerController::class, 'deleteMultiple'])->name('qqwestchecker.destroy');

// Route for the blocked page
Route::get('/web/qwest/blocked', function () {
    return view('web.qwest.blocked');
})->name('quiz.blocked');

// Route to show a "Quiz Not Found" message
Route::get('/quiz-not-found', function () {
    return view('web.qwest.notFound');  // Show a message to the user
})->name('quiz.notFound');

//route for uploading images for ckeditor
Route::post('/upload-image', [UploadController::class, 'uploadImage'])->name('ckeditor.upload');


Route::get('/{locale?}', function ($locale = null) {
    if (isset($locale) && in_array($locale, config('app.available_locales'))) {
        app()->setLocale($locale);
    }
    return view('auth.login');
});


Route::get('language/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back();
});

Route::get('/courses/{slug}', function ($slug) {
    $course = Course::where('slug', $slug)->first();
});
require __DIR__ . '/auth.php';
