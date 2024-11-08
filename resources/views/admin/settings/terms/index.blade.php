<x-admin.layout>

    <x-slot:heading>الفصول الدراسية</x-slot:heading>


    <div class="box box-primary">
        <x-admin.box-header action="/admin/terms/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />

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
                        <center>اسم الفصل الدراسي</center>
                    </th>
                    <th>
                        <center>نشط</center>
                    </th>

                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>

                @foreach ($terms as $term)
                    <tr>


                        <td style="width:80px;">
                            <center>{{ $term->id }}</center>
                        </td>

                        <td>
                            <center>{{ $term->name }} </center>
                        </td>
                        <td>
                            <center> {{ $term->active == 1 ? 'نشط' : 'غير نشط' }}</center>
                        </td>



                        <td>
                            <center>
                                @if ($term->deleted_at == null)
                                    <a href="/admin/terms/{{ $term->id }}/edit"
                                        class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                    <a href="/admin/terms/books/{{ $term->id }}"
                                        class="btn btn-primary edit"><i class="fa fa-search"></i></a>
                                    <button class="btn btn-danger delete" form="deleteTerm{{ $term->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @else
                                    <a href="/admin/trashed/units/{{ $term->id }}/restore"
                                        class="btn btn-primary edit"><i class="fa fa-undo"></i></a>
                                    <button class="btn btn-danger delete"
                                        form="forceDeleteTerm{{ $term->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @endif
                            </center>
                        </td>
                    </tr>
                    <form action="/admin/terms/{{ $term->id }}" class="hidden"
                        id ="deleteTerm{{ $term->id }}" method="POST">
                        @csrf
                        @method('DELETE')
                    </form>
                    <form action="/admin/trashed/terms/force-delete/{{ $term->id }}" class="hidden"
                        id ="forceDeleteTerm{{ $term->id }}" method="POST">
                        @csrf
                    </form>
                @endforeach
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $terms->links() !!}
                </div>
            </div>
        </div>

</div>

</x-admin.layout>
