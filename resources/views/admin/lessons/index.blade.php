<x-admin.layout>
    <x-slot:heading>الدروس</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/lesson/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />
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
                        <center>عنوان الدرس</center>
                    </th>

                    <th>
                        <center>الكتاب</center>
                    </th>


                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>

              
                    @foreach ($lessons as $lesson)
                      @isset($lesson->book)
                        <tr>
                            <td style="width:80px;">
                                <center>{{ $lesson->id }}</center>
                            </td>
                            <td>
                                <center>{{ $lesson->name }} </center>
                            </td>
                            <td>
                                <center>{{ $lesson->book->title }}</center>
                            </td>


                            <td>
                                <center>
                                    @if ($lesson->deleted_at == null)
                                        <a href="/admin/lessons/{{ $lesson->id }}/edit" class="btn btn-primary edit"><i
                                                class="fa fa-edit"></i></a>
                                        <a href="/admin/lessson/lesson-sections/{{ $lesson->id }}"
                                            class="btn btn-primary edit"><i class="fa fa-search"></i></a>
                                        <button class="btn btn-danger delete" form="deletelesson{{ $lesson->id }}"
                                            onclick="return confirm('Are you sure?')"><i class="fa fa-trash"></i>
                                        </button>
                                    @else
                                        <a href="/admin/trashed/lessons/{{ $lesson->id }}/restore"
                                            class="btn btn-primary edit"><i class="fa fa-undo"></i></a>
                                        <button class="btn btn-danger delete"
                                            form="forceDeleteLessons{{ $lesson->id }}"
                                            onclick="return confirm('Are you sure?')"><i
                                                class="fa fa-trash"></i></button>
                                    @endif
                                </center>
                            </td>
                        </tr>
                        <form action="/admin/lessons/{{ $lesson->id }}" class="hidden"
                            id ="deletelesson{{ $lesson->id }}" method="POST">
                            @csrf
                            @method('DELETE')
                        </form>
                        <form action="/admin/trashed/lessons/force-delete/{{ $lesson->id }}" class="hidden"
                            id ="forceDeleteLessons{{ $lesson->id }}" method="POST">
                            @csrf
                        </form>
                               @endisset
                    @endforeach
         
            </table>

    </div>

</div>
</x-admin.layout>
