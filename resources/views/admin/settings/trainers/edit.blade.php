<x-admin.layout>
    <x-slot:heading>تعديل محاضر</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/trainers/search/ " />
        <div class="box-body">
            @isset($error)
                @dd($error)
            @endisset
            <form role="form" action="/admin/trainers/{{ $trainer->id }}" method="POST" enctype="multipart/form-data">
                @method('PUT')
                @csrf
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


                    <div class="col-md-8 form-group">
                        <label for="name">اسم المحاضر<span style="color:red;">
                                *</span></label>
                        <input type="text" name="name" class="form-control" id="name"
                            placeholder="اسم المحاضر" value="{{ old('name') ? old('name') : $trainer->name }}" required>
                    </div>

                </div>
                <!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>
            </form>


        </div>

    </div>
</x-admin.layout>
