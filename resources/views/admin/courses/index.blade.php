<x-admin.layout>

    <x-slot:heading>المواد</x-slot:heading>


    <div class="box box-primary">
        <x-admin.box-header action="/courses-categories/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />
        <div class="box-body">
            @if (session('message') !== null)
                <div class="alert alert-success">
                    {{ session('message') }}
                </div>
            @endisset
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
                @isset($courses)
                    @foreach ($courses as $course)
                        @if ($course->category != null)
                            <tr>
                                <td style="width:80px;">
                                    <center>{{ $course->id }}</center>
                                </td>

                                <td>
                                    <center>
                                        @isset($course->image_url)
                                            @if (str_contains($course->image_url, 'http'))
                                                <img src="{{ $course->image_url }}" style="width: 100px;"
                                                    class="img-thumbnail" />
                                            @else
                                                <img src="{{ URL::to('storage/' . $course->image_url) }}"
                                                    style="width: 100px;" class="img-thumbnail" />
                                            @endif
                                        @endisset
                                    </center>
                                </td>
                                <td>
                                    <center>{{ $course->getTranslations('title')['ar'] }} </center>
                                </td>
                                <td>
                                    <center>
                                        @isset($course->getTranslations('title')['en'])
                                            {{ $course->getTranslations('title')['en'] }}
                                        @endisset
                                    </center>
                                </td>

                                </td>
                                <td>
                                    {{-- @dd($course->category->name) --}}
                                    <center>{{ $course->category->name }}
                                    </center>
                                </td>
                                <td>
                                    <center>
                                        @if ($course->deleted_at == null)
                                            <a href="/admin/courses/{{ $course->id }}/edit"
                                                class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                            <a href="/admin/course/books/{{ $course->id }}"
                                                class="btn btn-primary edit"><i class="fa fa-search"></i></a>
                                            <button class="btn btn-danger delete"
                                                form="deletecourse{{ $course->id }}"
                                                onclick="return confirm('Are you sure?')"><i class="fa fa-trash"></i>
                                            </button>
                                        @else
                                            <a href="/admin/trashed/courses/{{ $course->id }}/restore"
                                                class="btn btn-primary edit"><i class="fa fa-undo"></i></a>
                                            <button class="btn btn-danger delete"
                                                form="forceDeleteCourse{{ $course->id }}"
                                                onclick="return confirm('Are you sure?')"><i
                                                    class="fa fa-trash"></i></button>
                                        @endif
                                    </center>
                                </td>
                            </tr>
                            <form action="/admin/courses/{{ $course->id }}" class="hidden"
                                id ="deletecourse{{ $course->id }}" method="POST">
                                @csrf
                                @method('DELETE')
                            </form>
                            <form action="/admin/trashed/courses/force-delete/{{ $course->id }}" class="hidden"
                                id ="forceDeleteCourse{{ $course->id }}" method="POST">
                                @csrf
                            </form>
                        @endif
                    @endforeach
                @endisset
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $courses->links() !!}
                </div>
            </div>
    </div>

</div>

</x-admin.layout>
