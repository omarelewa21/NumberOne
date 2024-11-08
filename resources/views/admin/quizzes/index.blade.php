<x-admin.layout>
    <x-slot:heading>الأسئلة</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/quiz/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />
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
                        <center>السؤال</center>
                    </th>

                    <th>
                        <center>الدرس</center>
                    </th>
                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>
               
@if(isset($quizzes))
                @foreach ($quizzes as $quiz)
                @isset($quiz->lesson)
                    <tr>
                        <td style="width:80px;">
                            <center>{{ $quiz->id }}</center>
                        </td>
                        <td>
                            <center>{{ $quiz->question }} </center>
                        </td>

                        <td>{{$quiz->lesson->name ? : ""}}</td>
                        <td>

                            <center>
                                <a href="/admin/quizzes/{{ $quiz->id }}/edit" class="btn btn-primary edit"><i
                                        class="fa fa-edit"></i></a>
                                <button class="btn btn-danger delete" form="deletelesson{{ $quiz->id }}"
                                    onclick="return confirm('Are you sure?')"><i class="fa fa-trash"></i>
                                </button>
                            </center>
                        </td>
                    </tr>
                    <form action="/admin/quizzes/{{ $quiz->id }}" class="hidden"
                        id ="deletelesson{{ $quiz->id }}" method="POST">
                        @csrf
                        @method('DELETE')
                    </form>
                    @endisset
                @endforeach
@endif                
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $quizzes->links() !!}
                </div>
            </div>
    </div>

</div>
</x-admin.layout>
