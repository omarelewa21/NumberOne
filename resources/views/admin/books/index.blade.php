<x-admin.layout>

    <x-slot:heading>الكتب</x-slot:heading>


    <div class="box box-primary">
        <x-admin.box-header action="/books/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />
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
                        <center>العنوان</center>
                    </th>
                    <th>
                        <center>المادة</center>
                    </th>
                    <th>
                        <center>الوحدة</center>
                    </th>
                    <th>
                        <center>الفصل الدراسي</center>
                    </th>
                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>


                @isset($books)
                    @foreach ($books as $book)
                        @if ($book->course != null)
                            <tr>
                                <td style="width:80px;">
                                    <center>{{ $book->id }}</center>
                                </td>
                                <td>
                                    <center>{{ $book->getTranslations('title')['ar'] }} </center>
                                </td>

                                <td>{{ $book->course->title }}</td>
                                <td>{{ $book->unit->name }}</td>
                                <td>{{ $book->term->name }}</td>

                                <td>
                                    <center>
                                        @if ($book->deleted_at == null)
                                            <a href="/admin/books/{{ $book->id }}/edit"
                                                class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                            <a href="/admin/book/lessons/{{ $book->id }}"
                                                class="btn btn-primary edit"><i class="fa fa-search"></i></a>
                                            <button class="btn btn-danger delete" form="deletecourse{{ $book->id }}"
                                                onclick="return confirm('Are you sure?')"><i class="fa fa-trash"></i>
                                            </button>
                                        @else
                                            <a href="/admin/trashed/books/{{ $book->id }}/restore"
                                                class="btn btn-primary edit"><i class="fa fa-undo"></i></a>
                                            <button class="btn btn-danger delete"
                                                form="forceDeleteBooks{{ $book->id }}"
                                                onclick="return confirm('Are you sure?')"><i
                                                    class="fa fa-trash"></i></button>
                                        @endif
                                    </center>
                                </td>
                            </tr>
                            <form action="/admin/books/{{ $book->id }}" class="hidden"
                                id ="deletecourse{{ $book->id }}" method="POST">
                                @csrf
                                @method('DELETE')
                            </form>
                            <form action="/admin/trashed/books/force-delete/{{ $book->id }}" class="hidden"
                                id ="forceDeleteBooks{{ $book->id }}" method="POST">
                                @csrf
                            </form>
                        @endif

                    @endforeach
                @endisset
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $books->links() !!}
                </div>
            </div>
    </div>

</div>

</x-admin.layout>
