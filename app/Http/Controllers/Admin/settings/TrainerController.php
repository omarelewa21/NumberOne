<?php

namespace App\Http\Controllers\Admin\settings;

use App\Models\Course;
use App\Models\Trainer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TrainerController extends Controller
{
    public function index()
    {
        $trainers = Trainer::with('courses')->latest()->paginate(10);
        return view('admin.settings.trainers.index', ["trainers" => $trainers]);
    }

    /**
     * Show the form for creating a new resource.w
     */
    public function create()
    {
        return view('admin.settings.trainers.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate(
            ['name' => 'required | min: 5',],
            ['name' => 'حقل اسم الوحدة مطلوب و أقل عدد حروف 5',]
        );
        Trainer::create($data);
        session()->flash('success', 'Trainer created successfully');
        return redirect('/admin/trainers/');
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
        $trainer = Trainer::find($id);
        return view('admin.settings.trainers.edit', ['trainer' => $trainer]);
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
        $trainer = Trainer::find($id);
        $trainer->update($data);
        session()->flash('success', 'Trainer Edited successfully');
        return redirect('/admin/trainers/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $trainer  = Trainer::find($id);
        $trainer->delete();
        return redirect('/admin/trainers');
    }

    public function filter($id)
    {
        $courses = Course::where('trainer_id', $id)->paginate(10);
        return view('admin.courses.index', ['courses' => $courses]);
    }
}
