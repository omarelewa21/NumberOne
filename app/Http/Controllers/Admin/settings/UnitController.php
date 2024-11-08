<?php

namespace App\Http\Controllers\Admin\settings;

use App\Models\Book;
use App\Models\Unit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $units = Unit::with('books')->latest()->paginate(10);
        return view('admin.settings.units.index', ["units" => $units]);
    }

    /**
     * Show the form for creating a new resource.w
     */
    public function create()
    {
        return view('admin.settings.units.create');
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
        Unit::create($data);
        session()->flash('success', 'Unit created successfully');
        return redirect('/admin/units/');
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
        $unit = Unit::find($id);
        return view('admin.settings.units.edit', ['unit' => $unit]);
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
        $unit = Unit::find($id);
        $unit->update($data);
        session()->flash('success', 'Unit Edited successfully');
        return redirect('/admin/units/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $unit  = Unit::find($id);
        $unit->delete();
        return redirect('/admin/units');
    }

    public function filter($id)
    {
        $books = Book::where('unit_id', $id)->paginate(10);
        return view('admin.books.index', ['books' => $books]);
    }
}
