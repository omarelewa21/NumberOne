<x-admin.layout>

    <x-slot:heading>تعديل درس</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/admin/users/search/ " />
        <div class="box-body">



            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <form role="form" action="/admin/users/{{ $user->id }}" method="POST">
                @csrf
                @method('PUT')
                <div class="box-body">
                    <div class="col-md-10">

                        <label for="admin">مشرف <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="lesson_id" required>
                            <option value = "0" {{ $user->id == 0 ? 'selected' : '' }}>لا</option>
                            <option value = "1" {{ $user->id == 1 ? 'selected' : '' }}>نعم</option>
                        </select>
                        @error('lesson_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>



                    <div class="col-md-10 form-group">
                        <label for="question">الاسم<span style="color:red;"> *</span></label>
                        <input type="text" name="question" class="form-control" id="name" placeholder="الاسم"
                            value="{{ $user->name }}" required>
                    </div>
                    <div class="col-md-10 form-group">
                        <label for="email" style="display: block;">البريد الالكتروني<span style="color:red;">
                                *</span></label>
                        <input type="text" name="email" class="form-control" required value={{ $user->email }}>
                    </div>
                    <div class="col-md-10 form-group">
                        <label for="password" style="display: block;">كلمة السر</label>
                        <input type="password" name="email" class="form-control">
                    </div>
                </div>


                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>



                <!-- /.box-body -->

            </form>


        </div>

    </div>

</x-admin.layout>
