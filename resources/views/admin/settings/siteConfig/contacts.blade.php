<x-admin.layout>
    <x-slot:heading>تعديل وسائل الاتصال</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="# " />
        <div class="box-body">

            <form role="form" action="/admin/contacts" method="POST" enctype="multipart/form-data">
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
                        <label for="phone" class="col-md-2">رقم الهاتف <span style="color:red;">
                                *</span></label>
                        <input type="tel" name="phone" id="phone"
                            value="{{ old('phone') ? old('phone') : $contacts->phone }}">
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="email" class="col-md-2">البريد الالكتروني <span style="color:red;">
                                *</span></label>
                        <input type="text" name="email" id="phone"
                            value="{{ old('email') ? old('email') : $contacts->email }}">
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="address" class="col-md-2">العنوان <span style="color:red;">
                                *</span></label>
                        <input type="text" name="address" id="phone"
                            value="{{ old('address') ? old('address') : $contacts->address }}">
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
