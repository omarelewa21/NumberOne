<?php

namespace App\Http\Controllers\Admin;

use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Models\LessonSection;
use App\Http\Controllers\Controller;

class LessonSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $lessonSections = LessonSection::all();
        return view('admin.lessonSections.index', ['lessonSections' => $lessonSections]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
        $lessons = Lesson::all();
        $lessonSection = LessonSection::find($id);
        // dd($lessonSection);
        return view('admin.lessonSections.edit', ['lessons' => $lessons, 'lessonSection' => $lessonSection]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $lessonSection = LessonSection::find($id);
        $data = $request->validate(
            [
                'title' => 'required',
                'content' => 'required',
            ],
            [
                'title'  => 'اسم القسم مطلوب',
                'content' => 'محتوى قسم الدرس  مطلوب',
            ]
        );
        $data['active'] = $request->input('active', 1);
        $lessonSection->update($data);
        return redirect('/admin/lesson-sections/')->with('message', 'Lesson Section Edited Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $lessonSection = LessonSection::find($id);
        $lessonSection->delete();
        return redirect('/admin/lesson-sections')->with('message', 'Lesson Section Deleted Successfully');
    }
}
