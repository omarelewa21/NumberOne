<x-admin.layout>
    <x-slot:heading>إنشاء وحدة</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/units/search/ " />
        <div class="box-body">

            <form role="form" action="/admin/units" method="POST" enctype="multipart/form-data">
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
                        <label for="name">اسم الوحدة<span style="color:red;">
                                *</span></label>
                        <input type="text" name="name" class="form-control" id="name"
                            placeholder="اسم الوحدة" value="{{ old('name') }}" required>
                    </div>
                    <div class="col-md-8 form-group">
                        <label for="active">النشط<span style="color:red;">
                                *</span></label>
                        <select name="active" id="active">
                            <option value="1">نشط</option>
                            <option value="0">غير نشط</option>
                        </select>
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
