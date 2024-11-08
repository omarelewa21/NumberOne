<x-admin.layout>
    @if (request()->type == 'main')
        <x-slot:heading>الأقسام الرئيسية</x-slot:heading>
    @elseif (request()->type == 'all')
        <x-slot:heading>الأقسام</x-slot:heading>
    @else
        <x-slot:heading>الأقسام الفرعية</x-slot:heading>
    @endif

    <div class="box box-primary">
        <x-admin.box-header action="/courses-categories/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />

        @if (session('message') !== null)
            <div class="alert alert-success">
                {{ session('message') }}
            </div>
        @endisset
        @if (session('error') !== null)
            <div class="alert alert-danger">
                {{ session('error') }}
            </div>
        @endisset
        <div class="box-body">
            <table class="table table-bordered">
                <tr>
                    <th style="width:80px;">
                        <center>رقم سري</center>
                    </th>
                    <th>
                        <center>الصوره</center>
                    </th>
                    <th>
                        <center>الاسم بالعربي</center>
                    </th>
                    <th>
                        <center>الاسم بالإنجليزية</center>
                    </th>
                    @if (request()->type != 'main')
                        <th>
                            <center>التصنيف الرئيسي</center>
                        </th>
                    @endif
                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>

                @foreach ($categories as $category)
                    <tr>
                        <td style="width:80px;">
                            <center>{{ $category->id }}</center>
                        </td>

                        <td>
                            <center>
                                @isset($category->image_url)
                                    @if (str_contains($category->image_url, 'http'))
                                        <img src="{{ $category->image_url }}" style="width: 100px;"
                                            class="img-thumbnail" />
                                    @else
                                        <img src="{{ URL::to('storage/' . $category->image_url) }}"
                                            style="width: 100px;" class="img-thumbnail" />
                                    @endif
                                @endisset
                            </center>
                        </td>
                        <td>
                            <center>{{ $category->getTranslations('name')['ar'] }} </center>
                        </td>
                        <td>
                            <center>
                                @isset($category->getTranslations('name')['en'])
                                    {{ $category->getTranslations('name')['en'] }}
                                @endisset
                            </center>
                        </td>

                        </td>
                        @if (request()->type != 'main')
                            <td>
                                <center>{{ $category->parent_id != null ? $category->parent->name : 'لا يوجد' }}
                                </center>
                            </td>
                        @endif
                        <td>
                            <center>
                                @if ($category->deleted_at == null)
                                    <a href="/admin/courses-categories/{{ $category->id }}/edit"
                                        class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                    <a href="/admin/course-category/courses/{{ $category->id }}"
                                        class="btn btn-primary edit"><i class="fa fa-search"></i></a>
                                    <button class="btn btn-danger delete"
                                        form="deleteCategory{{ $category->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @else
                                    <a href="/admin/trashed/courses-categories/{{ $category->id }}/restore"
                                        class="btn btn-primary edit"><i class="fa fa-undo"></i></a>
                                    <button class="btn btn-danger delete"
                                        form="forceDeleteCategory{{ $category->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @endif
                            </center>
                        </td>
                    </tr>
                    <form action="/admin/courses-categories/{{ $category->id }}" class="hidden"
                        id ="deleteCategory{{ $category->id }}" method="POST">
                        @csrf
                        @method('DELETE')
                    </form>
                    <form action="/admin/trashed/courses-categories/force-delete/{{ $category->id }}"
                        class="hidden" id ="forceDeleteCategory{{ $category->id }}" method="POST">
                        @csrf
                    </form>
                @endforeach
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $categories->links() !!}
                </div>
            </div>
        </div>

</div>

</x-admin.layout>
