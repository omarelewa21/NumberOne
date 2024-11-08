<x-admin.layout>

    <x-slot:heading>إنشاء مادة</x-slot:heading>
    <div class="box box-primary">
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

            <form role="form" action="/admin/courses" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="box-body">
                    <div class="col-md-8  form-group">
                        <label>@lang('global.course.category')<span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:110%" name="category_id"
                            required>
                            <option value=""></option>
                            @foreach ($categories as $category)
                                <option value="{{ $category->id }}"
                                    {{ $category->id == old('category_id') ? 'selected' : '' }}>
                                    {{ $category->name }}</option>
                            @endforeach
                        </select>
                    </div>

                    @foreach ($languages as $langName => $langsymbol)
                        <div class="col-md-8 form-group">
                            <label for="title_{{ $langsymbol }}"> @lang('admin.courses.title')
                                @lang('global.languagesWith.' . $langsymbol) <span style="color:red;">
                                    *</span></label>
                            <input type="text" name="title_{{ $langsymbol }}" class="form-control"
                                id="title_{{ $langsymbol }}" placeholder="@lang('admin.courses.title') @lang('global.languagesWith.' . $langsymbol)"
                                required value="{{ old('title_' . $langsymbol) }}">
                            @error('title_{{ $langsymbol }}')
                                <span
                                    class="text-red-600
                                text-sm">{{ $message }}</span>
                            @enderror
                        </div>
                    @endforeach
                    @foreach ($languages as $langName => $langsymbol)
                        <div class="col-md-8 form-group">
                            <label for="short_description_{{ $langsymbol }}"> @lang('admin.courses.short_description')
                                @lang('global.languagesWith.' . $langsymbol) <span style="color:red;">
                                    *</span></label>
                            <input type="text" name="short_description_{{ $langsymbol }}" class="form-control"
                                id="short_description_{{ $langsymbol }}"
                                placeholder="@lang('admin.courses.short_description') @lang('global.languagesWith.' . $langsymbol)" required
                                value="{{ old('short_description_' . $langsymbol) }}">
                            @error('short_description_{{ $langsymbol }}')
                                <span class="text-red-600 text-sm">{{ $message }}</span>
                            @enderror
                        </div>
                    @endforeach

                    @foreach ($languages as $langName => $langsymbol)
                        <div class="col-md-8 form-group">
                            <label for="description_{{ $langsymbol }}"> @lang('admin.courses.full_description')
                                @lang('global.languagesWith.' . $langsymbol) <span style="color:red;">
                                    *</span></label>

                            <textarea class="tinyMce" name="description_{{ $langsymbol }}" class="form-control"
                                id="description_{{ $langsymbol }}">{{ old('description_' . $langsymbol) }}</textarea>
                            @error('description_{{ $langsymbol }}')
                                <span class="text-red-600 text-sm">{{ $message }}</span>
                            @enderror
                        </div>
                    @endforeach

                    <div class="col-md-8 form-group">
                        <label for="period"> @lang('admin.courses.period')
                            <span style="color:red;">
                                *</span></label>

                        <input type="text" name="period" class="form-control" id="period"
                            placeholder="@lang('admin.courses.period')" required value={{ old('period') }}>
                        @error('period')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-md-8 form-group">
                        <label for="price"> @lang('admin.courses.price') ( @lang('global.currencies.sr') )
                            <span style="color:red;">
                                *</span></label>

                        <input type="number" name="price" class="form-control" id="price"
                            placeholder="@lang('admin.courses.price') @lang ('global.currencies.sr')" required
                            value={{ old('price') }}>
                        @error('price')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-md-8  form-group">
                        <label>@lang('global.trainer.title')<span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:110%" name="trainer_id" required>
                            <option value=""></option>
                            @foreach ($trainers as $trainer)
                                <option value="{{ $trainer->id }}"
                                    {{ $trainer->id == old('trainer_id') ? 'selected' : '' }}>{{ $trainer->name }}
                                </option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-md-8 form-group">
                        <label for="image_url"> @lang('admin.image')</label>
                        <input type="file" name="image_url"
                            class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        @error('image_url')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
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
