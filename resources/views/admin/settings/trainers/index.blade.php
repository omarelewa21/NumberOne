<x-admin.layout>

    <x-slot:heading>المحاضرين</x-slot:heading>


    <div class="box box-primary">
        <x-admin.box-header action="/admin/trainers/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />

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
                        <center>اسم المحاضر</center>
                    </th>


                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>

                @foreach ($trainers as $trainer)
                    <tr>


                        <td style="width:80px;">
                            <center>{{ $trainer->id }}</center>
                        </td>

                        <td>
                            <center>{{ $trainer->name }} </center>
                        </td>




                        <td>
                            <center>
                                @if ($trainer->deleted_at == null)
                                    <a href="/admin/trainers/{{ $trainer->id }}/edit"
                                        class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                    <a href="/admin/trainers/courses/{{ $trainer->id }}"
                                        class="btn btn-primary edit"><i class="fa fa-search"></i></a>
                                    <button class="btn btn-danger delete"
                                        form="deleteTrainer{{ $trainer->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @else
                                    <a href="/admin/trashed/units/{{ $trainer->id }}/restore"
                                        class="btn btn-primary edit"><i class="fa fa-undo"></i></a>
                                    <button class="btn btn-danger delete"
                                        form="forceDeleteTrainer{{ $trainer->id }}"
                                        onclick="return confirm('Are you sure?')"><i
                                            class="fa fa-trash"></i></button>
                                @endif
                            </center>
                        </td>
                    </tr>
                    <form action="/admin/trainers/{{ $trainer->id }}" class="hidden"
                        id ="deleteTrainer{{ $trainer->id }}" method="POST">
                        @csrf
                        @method('DELETE')
                    </form>
                    <form action="/admin/trashed/trainers/force-delete/{{ $trainer->id }}" class="hidden"
                        id ="forceDeleteTrainer{{ $trainer->id }}" method="POST">
                        @csrf
                    </form>
                @endforeach
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $trainers->links() !!}
                </div>
            </div>
        </div>

</div>

</x-admin.layout>
