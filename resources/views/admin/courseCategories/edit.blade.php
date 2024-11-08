<x-admin.layout>
    <x-slot:heading>تعديل قسم</x-slot:heading>

    <div class="box box-primary">
        <x-admin.box-header action="/courses-categories/search/ " addHref="/admin/courses-categories/create" />

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
            <form role="form" action="/admin/courses-categories/{{ $category->id }}" method="post"
                enctype="multipart/form-data">
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
                    <div class="col-md-8  form-group">
                        <div class="col-md-12  form-group">
                            <label>القسم الرئيسي<span style="color:red;"> *</span></label>
                            <select class="form-control select2" style="width: 100%;height:110%" name="parent_id">
                                <option value=""></option>
                                @foreach ($categories as $parenCategory)
                                    <option value="{{ $parenCategory->id }}"
                                        {{ $parenCategory->id == $category->parent_id ? 'selected=selected' : '' }}>
                                        {{ $parenCategory->id == old('parent_id') ? 'selected' : '' }}>
                                        {{ $parenCategory->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        @foreach ($languages as $langName => $langsymbol)
                            <div class="col-md-12 form-group">
                                <label for="name_{{ $langsymbol }}"> @lang('admin.categories.title')
                                    @lang('global.languagesWith.' . $langsymbol) <span style="color:red;">
                                        *</span></label>
                                <input type="text" name="name_{{ $langsymbol }}" class="form-control"
                                    id="name_{{ $langsymbol }}"
                                    value="{{ old('name_' . $langsymbol) ? old('name_' . $langsymbol) : $category->getTranslations('name')[$langsymbol] }}">
                            </div>
                        @endforeach

                        <div class="col-md-12
                                    form-group">
                            <label for="image_url"> @lang('admin.image')</label>
                            <input type="file" name="image url"
                                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                            @error('image_url')
                                <span class="text-red-600 text-sm">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="col-md-4">
                        @isset($category->image_url)
                            @if (str_contains($category->image_url, 'http'))
                                <img src="{{ $category->image_url }}" style="width: 90%;" class="img-thumbnail" />
                            @else
                                <img src="{{ URL::to('storage/' . $category->image_url) }}" style="width: 90%;"
                                    class="img-thumbnail" />
                            @endif

                            <button type="submit" form="deleteImage" class="btn btn-danger">مسح الصورة</button>

                        @endisset

                    </div>


                </div>
                <!-- /.box-body -->

                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>
            </form>
            <form class="hidden" action="/admin/courses-categories/{{ $category->id }}/deleteimage" method="POST"
                id="deleteImage">
                @csrf
            </form>


        </div>

    </div>
</x-admin.layout>
