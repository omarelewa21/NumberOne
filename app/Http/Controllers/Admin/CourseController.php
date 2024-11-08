<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\Course;
use App\Models\Khabeer;
use App\Models\Trainer;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $courses = Course::with('category')->latest()->paginate(10);
            return view('admin.courses.index', ['courses' => $courses]);
        } else {
            return redirect('/admin');
        }
    }
    public function filter($id)
    {
        $books = Book::where('course_id', $id)->paginate(10);
        return view('admin.books.index', ['books' => $books]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $categories = CourseCategory::all();
            $languages = Khabeer::available_languages();
            $trainers = Trainer::all();
            return view('admin.courses.create', ['categories' => $categories, 'languages' => $languages, 'trainers' => $trainers]);
        } else {
            return redirect('/admin');
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $data = $request
                ->validate(
                    [
                        'title_en' => 'required | min: 5',
                        'title_ar' => 'required | min: 5',
                        'image_url' => 'nullable | image | mimes:jpeg,png,jpg,gif|max:2048 | nullable',
                        'short_description_en' => 'required | min:5',
                        'short_description_ar' => 'required | min:5',
                        'description_en' => 'required | min:5',
                        'description_ar' => 'required | min:5',
                        'period' => 'nullable',
                        'price' => 'required | numeric',
                        'category_id' => 'required | numeric',
                        'trainer_id' => 'nullable'
                    ],
                    [
                        'title_en' => ' اسم الدرس باللغة الانجليزية : أقل عدد للحروف 5',
                        'title_ar' => ' اسم الدرس باللغة العربية : أقل عدد للحروف 5 ',
                        'short_description_en' => 'الوصف القصير باللغة الإنجليزية مطلوب و أقل عدد 5 حروف',
                        'short_description_ar' => 'الوصف القصير باللغة العربية مطلوب و أقل عدد 5 حروف',
                        'description_en' => 'الوصف  باللغة الإنجليزية مطلوب و أقل عدد 5 حروف',
                        'description_ar' => 'الوصف  باللغة العربية مطلوب و أقل عدد 5 حروف',
                        'price' => 'برجاء إدخال السعر',
                        'category_id' => 'برجاء اختيار القسم',

                    ]
                );
            $data['title'] = ['ar' => $data['title_ar'], 'en' => $data['title_en']];
            unset($data['title_en']);
            unset($data['title_ar']);
            $data['short_description'] = ['ar' => $data['short_description_ar'], 'en' => $data['short_description_en']];
            $data['description'] = ['ar' => $data['description_ar'], 'en' => $data['description_en']];
            if ($request->image_url != null) {
                $data['image_url'] = $request->file('image_url')->store('images/courses', 'public');
            }
            $data['active'] = 1;
            Course::create($data);
            session()->flash('success', 'Image Upload successfully');
            return redirect('/admin/courses');
        } else {
            return redirect('/admin');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $languages = Khabeer::available_languages();
            $categories = CourseCategory::all();
            $trainers  = Trainer::all();
            return view('admin.courses.edit', ['languages' => $languages, 'course' => $course, 'categories' => $categories,  'trainers' => $trainers]);
        } else {
            return redirect('/admin');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $data = $request
                ->validate(
                    [
                        'title_en' => 'required | min: 5',
                        'title_ar' => 'required | min: 5',
                        'image_url' => 'nullable | image | mimes:jpeg,png,jpg,gif|max:2048 | nullable',
                        'short_description_en' => 'required | min:5',
                        'short_description_ar' => 'required | min:5',
                        'description_en' => 'required | min:5',
                        'description_ar' => 'required | min:5',
                        'period' => 'nullable',
                        'price' => 'required | numeric',
                        'category_id' => 'required | numeric',
                        'trainer_id' => 'nullable'
                    ],
                    [
                        'title_en' => ' اسم الدرس باللغة الانجليزية : أقل عدد للحروف 5',
                        'title_ar' => ' اسم الدرس باللغة العربية : أقل عدد للحروف 5 ',
                        'short_description_en' => 'الوصف القصير باللغة الإنجليزية مطلوب و أقل عدد 5 حروف',
                        'short_description_ar' => 'الوصف القصير باللغة العربية مطلوب و أقل عدد 5 حروف',
                        'description_en' => 'الوصف  باللغة الإنجليزية مطلوب و أقل عدد 5 حروف',
                        'description_ar' => 'الوصف  باللغة العربية مطلوب و أقل عدد 5 حروف',
                        'price' => 'برجاء إدخال السعر',
                        'category_id' => 'برجاء اختيار القسم',

                    ]
                );

            $data['title'] = ['ar' => $data['title_ar'], 'en' => $data['title_en']];
            unset($data['title_en']);
            unset($data['title_ar']);
            $data['short_description'] = ['ar' => $data['short_description_ar'], 'en' => $data['short_description_en']];
            $data['description'] = ['ar' => $data['description_ar'], 'en' => $data['description_en']];
            if ($request['image_url'] != null) {
                $data['image_url'] = $request->file('image_url')->store('images/courses', 'public');
            } else {
                $data['image_url'] = $course->image_url;
            }
            $course->update($data);
            session()->flash('success', 'Image Upload successfully');
            return redirect('/admin/courses/' . $course->id . '/edit');
        } else {
            return redirect('/admin');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            if ($course !== null) {

                if (Storage::exists("public/" . $course->image_url)) {
                    Storage::delete("public/" . $course->image_url);
                }
                $course->delete();
                $message = "تم المسح بنجاح";
                return redirect('/admin/courses')->with('message', $message);
            }
            return redirect('/admin/courses');
        } else {
            return redirect('/admin');
        }
    }
    public function deleteImage(string $id)
    {
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $course = Course::find($id);
            if (Storage::exists("public/" . $course->image_url)) {
                Storage::delete("public/" . $course->image_url);
            }
            $course->update(['image_url' => null]);
            return redirect('/admin/courses/' . $course->id . '/edit');
        } else {
            return redirect('/admin');
        }
    }

    public function trashed()
    {
        $courses = Course::onlyTrashed()->paginate(10);
        return view('admin.courses.index', ['courses' => $courses]);
    }

    public function restore($id)
    {
        $courses = Course::onlyTrashed()->paginate(10);
        $course = Course::onlyTrashed()->where('id', $id)->firstOrFail();

        if ($course == null) {
            abort(404);
        } else {
            $course->restore();
        }

        return redirect('/admin/trashed/courses/');
    }
    public function forceDelete($id)
    {

        $courses = Course::onlyTrashed()->paginate(10);

        $course = Course::onlyTrashed()->where('id', $id)->firstOrFail();
        if ($course == null) {
            abort(404);
        } else {

            $course->forceDelete();
        }

        return redirect('/admin/trashed/courses/');
    }
}
