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
                        <center>العنوان</center>
                    </th>
                    <th>
                        <center>اسم الدرس</center>
                    </th>


                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>
                @isset($lessonSections)

                    @foreach ($lessonSections as $lessonSection)
                        <tr>
                            <td style="width:80px;">
                                <center>{{ $lessonSection->id }}</center>
                            </td>
                            <td>
                                <center>{{ $lessonSection->title }} </center>
                            </td>
                            <td>
                                <center>{{ $lessonSection->lesson->name }} </center>
                            </td>


                            <td>
                                <center>
                                    <a href="/admin/lesson-sections/{{ $lessonSection->id }}/edit"
                                        class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                    <button class="btn btn-danger delete"
                                        form="deletelesson-section{{ $lessonSection->id }}"
                                        onclick="return confirm('Are you sure?')"><i class="fa fa-trash"></i>
                                    </button>
                                </center>
                            </td>
                        </tr>
                        <form action="/admin/lesson-sections/{{ $lessonSection->id }}" class="hidden"
                            id ="deletelesson-section{{ $lessonSection->id }}" method="POST">
                            @csrf
                            @method('DELETE')
                        </form>
                    @endforeach
                @endisset
            </table>

    </div>

</div>
</x-admin.layout>
