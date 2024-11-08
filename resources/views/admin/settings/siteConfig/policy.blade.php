<x-admin.layout>
    <x-slot:heading>تعديل سياسة الخصوصية</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="# " />
        <div class="box-body">

            <form role="form" action="/admin/policy" method="POST" enctype="multipart/form-data">
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
                        <label for="privacy-policy">سياسة الخصوصية<span style="color:red;">
                                *</span></label>
                        <textarea name="privacy-policy" id="" cols="30" rows="10" class="tinymce"> {{ $aboutSite }}</textarea>
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
