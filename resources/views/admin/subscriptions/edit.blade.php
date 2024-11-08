<x-admin.layout>

    <x-slot:heading>تعديل درس</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/admin/books/search/ " />
        <div class="box-body">

            <form role="form" action="/admin/lesson-sections/{{ $lessonSection->id }}" method="POST">
                @csrf
                @method('PUT')
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
                        <label for="lesson_id">@lang('admin.lessons.name') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="book_id">
                            <option></option>
                            @foreach ($lessons as $lesson)
                                <option value = "{{ $lesson->id }}"
                                    {{ $lesson->id == $lessonSection->lesson_id ? 'selected=selected' : '' }}>
                                    {{ $lesson->name }}
                                </option>
                            @endforeach
                        </select>
                        @error('book_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="col-md-6 form-group">
                        <label for="title">الموضوع<span style="color:red;"> *</span></label>
                        <input type="text" name="title" class="form-control" id="title" placeholder="الموضوع"
                            value="{{ old('title') ? old('title') : $lessonSection->title }}">
                    </div>




                    <div class="col-md-8 form-group">
                        <label for="content">المحتوى <span style="color:red;"> *</span></label>
                        <textarea rows="5" cols="150" name="content">{!! old('content') ? old('content') : $lessonSection->content !!}</textarea>
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="active">منشور <span style="color:red;"> *</span></label>
                        <input type="checkbox" name="active" value="{{ $lesson->active }}"
                            {{ $lesson->active == 1 ? 'checked' : '' }}>
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
