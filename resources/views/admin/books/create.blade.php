<x-admin.layout>

    <x-slot:heading>إنشاء كتاب</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/admin/books/search/ " />
        <div class="box-body">

            <form role="form" action="/admin/books" method="POST">
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
                    <div class="col-md-2">

                        <label for="course_id">@lang('admin.courses.title') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="course_id">
                            <option selected></option>
                            @foreach ($courses as $course)
                                <option value = "{{ $course->id }}"
                                    {{ $course->id == old('course_id') ? 'selected' : '' }}>{{ $course->title }}
                                </option>
                            @endforeach
                        </select>
                        @error('course_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="col-md-3">
                        <label for="term_id">@lang('admin.books.term') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="term_id">
                            <option selected></option>
                            @foreach ($terms as $term)
                                <option value = "{{ $term->id }}"
                                    {{ $term->id == old('term_id') ? 'selected' : '' }}>{{ $term->name }}</option>
                            @endforeach
                        </select>
                        @error('term_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-md-3">
                        <label for="">الوحدة<span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="unit_id">
                            <option selected></option>
                            @foreach ($units as $unit)
                                <option value = "{{ $unit->id }}"
                                    {{ $unit->id == old('unit_id') ? 'selected' : '' }}>{{ $unit->name }}</option>
                            @endforeach
                        </select>
                        @error('unit_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="title">الموضوع<span style="color:red;"> *</span></label>
                        <input type="text" name="title" class="form-control" id="title" placeholder="الموضوع"
                            value="{{ old('title') }}">
                    </div>

                    <div class="col-md-8
                            form-group">
                        <label for="short_title">عنوان مختصر<span style="color:red;"> *</span></label>
                    </div>

                    <div class="col-md-8 form-group">
                        <input type="text" name="short_title" class="form-control" id="short_title"
                            placeholder="عنوان مختصر" value="{{ old('short_title') }}">
                    </div>

                    <div class="col-md-8
                            form-group">
                        <label for="details">كتابة تفاصيل للموضوع <span style="color:red;"> *</span></label>
                        <textarea rows="5" cols="150" name="details">{{ old('details') }}</textarea>
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
