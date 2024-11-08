<x-admin.layout>
    <x-slot:heading>إنشاء قسم</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/courses-categories/search/ " />
        <div class="box-body">
            @isset($error)
                @dd($error)
            @endisset
            <form role="form" action="/admin/courses-categories" method="POST" enctype="multipart/form-data">
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
                    @if (request()->type != 'main')
                        <div class="col-md-8  form-group">
                            <label>القسم الرئيسي<span style="color:red;"> *</span></label>
                            <select class="form-control select2" style="width: 100%; height:110%" name="parent_id">
                                <option value=""></option>
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}"
                                        {{ $category->id == old('parent_id') ? 'selected' : '' }}>
                                        {{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    @endif

                    @foreach ($languages as $langName => $langsymbol)
                        <div class="col-md-8 form-group">
                            <label for="name_{{ $langsymbol }}"> @lang('admin.categories.title')
                                @lang('global.languagesWith.' . $langsymbol) <span style="color:red;">
                                    *</span></label>
                            <input type="text" name="name_{{ $langsymbol }}" class="form-control"
                                id="name_{{ $langsymbol }}" placeholder="@lang('admin.categories.title') @lang('global.languagesWith.' . $langsymbol)"
                                value="{{ old('name_' . $langsymbol) }}">
                            @error('name_{{ $langsymbol }}')
                                <span class="text-red-600 text-sm">{{ $message }}</span>
                            @enderror
                        </div>
                    @endforeach

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
