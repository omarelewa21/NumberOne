<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use App\Models\Term;
use App\Models\Unit;
use App\Models\Course;
use App\Models\Khabeer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Lesson;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::with('course')->latest()->paginate(10);
        return view('admin.books.index', ["books" => $books]);
    }
    public function filter($id)
    {
        $lessons = Lesson::where('book_id', $id)->paginate(10);
        return view('admin.lessons.index', ['lessons' => $lessons]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $languages = Khabeer::available_languages();
        $courses = Course::all();
        $units = Unit::all();
        $terms = Term::all();

        return view('admin.books.create', ['courses' => $courses, 'units' => $units, 'languages' => $languages, 'terms' => $terms]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            [
                'title' => 'required | min: 5',
                'short_title' => 'required | min: 5',
                'details' => 'required|min:5',
                'course_id' => 'required',
                'unit_id' => 'required',
                'term_id' => 'required',
            ],
            [
                'title' => 'حقل الموضوع مطلوب و أقل عدد حروف 5',
                'short_title' => 'حقل عنوان مختصر مطلوب و أقل عدد حروف 5',
                'details' => 'حقل تفاصيل للموضوع مطلوب و أقل عدد حروف 5',
                'course_id' => 'حقل المادة مطلوب ',
                'unit_id' => 'حقل الوحدة مطلوب ',
                'term_id' => 'حقل الفصل الدراسي مطلوب ',
            ]
        );
        Book::create($data);
        session()->flash('success', 'Image Upload successfully');
        return redirect('/admin/books/');
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
        $languages = Khabeer::available_languages();
        $courses = Course::all();
        $units = Unit::all();
        $terms = Term::all();
        $book = Book::find($id);

        return view('admin.books.edit', ['courses' => $courses, 'units' => $units, 'languages' => $languages, 'terms' => $terms, 'book' => $book]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            'title' => 'required',
            'short_title' => 'required',
            'details' => 'required',
            'course_id' => 'required',
            'unit_id' => 'required',
            'term_id' => 'required',
        ]);
        $book = Book::find($id);
        $book->update($data);
        session()->flash('success', 'Book Edited Successfully');
        return redirect('/admin/books/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book  = Book::find($id);
        $book->delete();
        return redirect('/admin/books');
    }


    public function trashed()
    {
        $books = Book::onlyTrashed()->paginate(10);
        return view('admin.books.index', ['books' => $books]);
    }

    public function restore($id)
    {
        $books = Book::onlyTrashed()->paginate(10);
        $book = Book::onlyTrashed()->where('id', $id)->firstOrFail();

        if ($book == null) {
            abort(404);
        } else {
            $book->restore();
        }

        return redirect('/admin/trashed/books/');
    }
    public function forceDelete($id)
    {

        $books = Book::onlyTrashed()->paginate(10);

        $book = Book::onlyTrashed()->where('id', $id)->firstOrFail();
        if ($book == null) {
            abort(404);
        } else {

            $book->forceDelete();
        }

        return redirect('/admin/trashed/books/');
    }
}
