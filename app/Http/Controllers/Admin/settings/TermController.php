<?php

namespace App\Http\Controllers\Admin\settings;

use App\Models\Book;
use App\Models\Term;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TermController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $terms = Term::with('books')->latest()->paginate(10);
        return view('admin.settings.terms.index', ["terms" => $terms]);
    }

    /**
     * Show the form for creating a new resource.w
     */
    public function create()
    {
        return view('admin.settings.terms.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            ['name' => 'required | min: 5', 'active' => 'nullable'],
            ['name' => 'حقل اسم الوحدة مطلوب و أقل عدد حروف 5',]
        );
        Term::create($data);
        session()->flash('success', 'Term created successfully');
        return redirect('/admin/terms/');
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
        $term = Term::find($id);
        return view('admin.settings.terms.edit', ['term' => $term]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate(
            ['name' => 'required | min: 5', 'active' => 'nullable'],
            ['name' => 'حقل اسم الوحدة مطلوب و أقل عدد حروف 5',]
        );
        $term = Term::find($id);
        $term->update($data);
        session()->flash('success', 'Term Edited successfully');
        return redirect('/admin/terms/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $term  = Term::find($id);
        $term->delete();
        return redirect('/admin/terms');
    }

    public function filter($id)
    {
        $books = Book::where('term_id', $id)->paginate(10);
        return view('admin.books.index', ['books' => $books]);
    }
}