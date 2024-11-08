<x-admin.layout>

    <x-slot:heading>تعديل درس</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/admin/books/search/ " />
        <div class="box-body">

            <form role="form" action="/admin/lessons/{{ $lesson->id }}" method="POST">
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

                        <label for="book_id">@lang('admin.lessons.book') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="book_id">
                            <option selected name = "book_id"></option>
                            @foreach ($books as $book)
                                <option value = "{{ $book->id }}"
                                    {{ $book->id == $lesson->book_id ? 'selected=selected' : '' }}>{{ $book->title }}
                                </option>
                            @endforeach
                        </select>
                        @error('book_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="name">الموضوع<span style="color:red;"> *</span></label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="الموضوع"
                            value="{{ old('name') }}">
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="short_title">نظرة عامة<span style="color:red;"> *</span></label>
                    </div>

                    <div class="col-md-8 form-group">
                        <input type="text" name="short_title" class="form-control" id="short_title"
                            placeholder="نظرة عامة"
                            value="{{ old('short_title') ? old('short_title') : $lesson->short_title }}">
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="details">المحتوى <span style="color:red;"> *</span></label>
                        <textarea rows="5" cols="150" name="details">{!! old('details') ? old('details') : $lesson->details !!}</textarea>
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="details">منشور <span style="color:red;"> *</span></label>
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
