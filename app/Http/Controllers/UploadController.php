<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadImage(Request $request)
    {
        if ($request->hasFile('upload')) {
            $file = $request->file('upload');
            $filename = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('uploads', $filename, 'public'); // Save to storage/app/public/uploads

            return response()->json([
                'url' => Storage::url($filePath) // Return the file URL
            ]);
        }

        return response()->json(['error' => 'No file uploaded'], 400);
    }
}
