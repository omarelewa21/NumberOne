<?php

namespace App\Http\Controllers\Admin;

use App\Models\Course;
use App\Models\Khabeer;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;


class CourseCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            if (request()->type == "main") {
                $categories = CourseCategory::where('parent_id', null)->orderBy('id', 'DESC')->paginate(10)->appends(request()->query());
            } elseif (request()->type == "all") {
                $categories = CourseCategory::latest()->orderBy('id', 'DESC')->paginate(10)->appends(request()->query());
            } else {
                $categories = CourseCategory::whereNotNull('parent_id')->orderBy('id', 'DESC')->paginate(10)->appends(request()->query());
            }
            return view('admin.courseCategories.index', ['categories' => $categories]);
        }
    }
    public function filter($id)
    {
        $courses = Course::where('category_id', $id)->paginate(10);
        return view('admin.courses.index', ['courses' => $courses]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $categories = CourseCategory::all();
            $languages = Khabeer::available_languages();
            return view('admin.courseCategories.create', ['categories' => $categories, 'languages' => $languages]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $data = $request->validate(
                [
                    "name_en" => "required",
                    "name_ar" => "required",
                    "parent_id" => "numeric | nullable",
                    'image_url' => 'image | mimes:jpeg,png,jpg,gif|max:2048 | nullable',
                ],
                [
                    'name_en' => 'الاسم بالانجليزية مطلوب',
                    'name_ar' => 'الاسم بالعربية مطلوب',
                ]
            );

            if ($request['image_url'] != null) {
                $data['image_url'] = $request->file('image_url')->store('images/coursesCategory', 'public');
            } else {
                $data['image_url'] = null;
            }
            $data['name'] = ['en' => $data['name_en'], 'ar' => $data['name_ar']];
            CourseCategory::create($data);
            session()->flash('success', 'Image Upload successfully');
            return redirect('/admin/courses-categories/?type=all');
        }
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
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $category = CourseCategory::find($id);
            $categories = CourseCategory::where('id', '!=', $id)->get();
            $languages = Khabeer::available_languages();
            return view('admin.courseCategories.edit', ["category" => $category, 'categories' => $categories, 'languages' => $languages]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $category = CourseCategory::find($id);
            $data = $request->validate(
                [
                    "name_en" => "required",
                    "name_ar" => "required",
                    "parent_id" => "numeric | nullable",
                    'image_url' => 'image | mimes:jpeg,png,jpg,gif|max:2048 | nullable',
                ],
                [
                    'name_en' => 'الاسم بالانجليزية مطلوب',
                    'name_ar' => 'الاسم بالعربية مطلوب',
                ]
            );

            if ($request['image_url'] != null) {
                $data['image_url'] = $request->file('image_url')->store('images/coursesCategory', 'public');
            } else {
                $data['image_url'] = $category->image_url;
            }
            $data['name'] = ['en' => $data['name_en'], 'ar' => $data['name_ar']];
            $category->update($data);
            session()->flash('success', 'Image Upload successfully');
            return redirect('/admin/courses-categories/' . $category->id . '/edit');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $children = CourseCategory::where('parent_id',  $id)->get();
            // dd($children);
            foreach ($children as $child) {
                $child->delete();
            }
            $category = CourseCategory::find($id);
            if (Storage::exists("public/" . $category->image_url)) {
                Storage::delete("public/" . $category->image_url);
            }
            $category->delete();
            $message = "تم المسح بنجاح";
            return redirect('/admin/courses-categories/?type=all')->with('message', $message);
        }
    }

    public function deleteImage(string $id)
    {
        Auth::user()->checkAdmin();
        if (Auth::check() &&  Auth::user()->isAdmin()) {
            $category = CourseCategory::find($id);

            if (Storage::exists("public/" . $category->image_url)) {
                Storage::delete("public/" . $category->image_url);
            }
            $category->update(['image_url' => null]);
            session()->flash('success', 'Image Upload successfully');
            return redirect('/admin/courses-categories/' . $category->id . '/edit');
        }
    }


    public function trashed()
    {
        $categories = CourseCategory::onlyTrashed()->paginate(10);
        return view('admin.courseCategories.index', ['categories' => $categories]);
    }

    public function restore($id)
    {
        $categories = CourseCategory::onlyTrashed()->paginate(10);
        $category = CourseCategory::onlyTrashed()->where('id', $id)->firstOrFail();
        if ($category == null) {
            abort(404);
        } else {
            $category->restore();
        }

        return redirect('/admin/trashed/courses-categories/');
    }
    public function forceDelete($id)
    {
        $categories = CourseCategory::onlyTrashed()->paginate(10);
        $category = CourseCategory::onlyTrashed()->where('id', $id)->firstOrFail();
        if ($category == null) {
            abort(404);
        } else {

            $category->forceDelete();
        }

        return redirect('/admin/trashed/courses-categories/');
    }
}
