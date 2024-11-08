<x-admin.layout>

    <x-slot:heading>الوحدات</x-slot:heading>


    <div class="box box-primary">
        <x-admin.box-header action="/admin/units/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />

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
                        <center>اسم الوحدة</center>
                    </th>
                    <th>
                        <center>نشط</center>
                    </th>

                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>

                @foreach ($units as $unit)
                    <tr>


                        <td style="width:80px;">
                            <center>{{ $unit->id }}</center>
                        </td>

                        <td>
                            <center>{{ $unit->name }} </center>
                        </td>
                        <td>
                            <center> {{ $unit->active == 1 ? 'نشط' : 'غير نشط' }}</center>
                        </td>



                        <td>
                            <center>
                                @if ($unit->deleted_at == null)
                                    <a href="/admin/units/{{ $unit->id }}/edit"
                                        class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                    <a href="/admin/units/books/{{ $unit->id }}"
                                        class="btn btn-primary edit"><i class="fa fa-search"></i></a>
                                    <button class="btn btn-danger delete" form="deleteUnit{{ $unit->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @else
                                    <a href="/admin/trashed/units/{{ $unit->id }}/restore"
                                        class="btn btn-primary edit"><i class="fa fa-undo"></i></a>
                                    <button class="btn btn-danger delete"
                                        form="forceDeleteUnits{{ $unit->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @endif
                            </center>
                        </td>
                    </tr>
                    <form action="/admin/units/{{ $unit->id }}" class="hidden"
                        id ="deleteUnit{{ $unit->id }}" method="POST">
                        @csrf
                        @method('DELETE')
                    </form>
                    <form action="/admin/trashed/units/force-delete/{{ $unit->id }}" class="hidden"
                        id ="forceDeleteUnits{{ $unit->id }}" method="POST">
                        @csrf
                    </form>
                @endforeach
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $units->links() !!}
                </div>
            </div>
        </div>

</div>

</x-admin.layout>
