<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::latest()->paginate(10);
        return view('admin.users.index', ['users' => $users]);
    }
    public function edit($id)
    {
        $user = User::find($id);
        return view('admin.users.edit', ['user' => $user]);
    }

    public function getAdmins()
    {
        $users = User::latest()->where('admin', 1)->paginate(10);
        return view('admin.users.index', ['users' => $users]);
    }
}
