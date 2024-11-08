<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\Lesson;
use App\Models\LessonSection;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $lessons = Lesson::all();
        return view('admin.lessons.index', ['lessons' => $lessons]);
    }
    public function filter($id)
    {
        $lessonSections = LessonSection::where('lesson_id', $id)->get();
        return view('admin.lessonSections.index', ['lessonSections' => $lessonSections]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $books  = Book::all();
        return view('admin.lessons.create', ['books' => $books]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $data = $request->validate(
            [
                'book_id' => 'required',
                'name' => 'required',
                'short_title' => 'required',
                'section.*.title' => 'required',
                'section.*.content' => 'required',
            ],
            [
                'book_id' => 'لابد من اختيار الكتاب',
                'name' => 'لابد من إضافة اسم الدرس',
                'short_title' => 'الوصف القصير مطلوب',
                'section.*.title'  => 'اسم القسم مطلوب',
                'section.*.content' => 'محتوى قسم الدرس  مطلوب',
            ]
        );
        $data['active'] = $request->input('active', 1);
        $lesson = Lesson::create($data);
        foreach ($request->section as  $record) {
            $record['lesson_id'] = $lesson->id;
            LessonSection::create($record);
        }

        session()->flash('success', 'Lesson created successfully');
        return redirect('/admin/lessons/')->with('message', 'Lesson Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $lesson = Lesson::find($id);
        $book = $lesson->book;
        $books = Book::all();
        return view('admin.lessons.edit', ['lesson' => $lesson, 'book' => $book, 'books' => $books]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $lesson = Lesson::find($id);
        $data = $request->validate(
            [
                'book_id' => 'required',
                'name' => 'required',
                'short_title' => 'required',
                'section.*.title' => 'required',
                'section.*.content' => 'required',
            ],
            [
                'lesson_id' => 'لابد من اختيار الدرس',
                'name' => 'لابد من إضافة اسم الدرس',
                'short_title' => 'الوصف القصير مطلوب',
                'section.*.title'  => 'اسم القسم مطلوب',
                'section.*.content' => 'محتوى قسم الدرس  مطلوب',
            ]
        );
        $data['active'] = $request->input('active', 1);
        $lesson->update($data);
        return redirect('/admin/lessons/')->with('message', 'Lesson Edited Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $lesson  = Lesson::find($id);
        $lesson->delete();
        return redirect('/admin/lessons')->with('message', 'Lesson Deleted Successfully');
    }
    public function trashed()
    {
        $lessons = Lesson::onlyTrashed()->paginate(10);
        return view('admin.lessons.index', ['lessons' => $lessons]);
    }

    public function restore($id)
    {
        $lessons = Lesson::onlyTrashed()->paginate(10);
        $lesson = Lesson::onlyTrashed()->where('id', $id)->firstOrFail();

        if ($lesson == null) {
            abort(404);
        } else {
            $lesson->restore();
        }

        return redirect('/admin/trashed/lessons/');
    }
    public function forceDelete($id)
    {

        $lessons = Lesson::onlyTrashed()->paginate(10);

        $lesson = Lesson::onlyTrashed()->where('id', $id)->firstOrFail();
        if ($lesson == null) {
            abort(404);
        } else {

            $lesson->forceDelete();
        }

        return redirect('/admin/trashed/lessons/');
    }
}
