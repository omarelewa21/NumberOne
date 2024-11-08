<x-admin.layout>

    <x-slot:heading>إدارة الاختبارات</x-slot:heading>

    <div class="box box-primary">
        <x-admin.box-header action="/quiz/search/?keyword=" addHref="{{ url('admin/qwest/create') }}" />
        <div class="box-body">
            @if (session('message') !== null)
                <div class="alert alert-success">
                    {{ session('message') }}
                </div>
            @endif
            <table class="table table-bordered">
                <tr>
                    <th style="width:80px;">
                        <center>رقم الاختبار</center>
                    </th>
                    <th>
                        <center>التاريخ</center>
                    </th>
                    <th>
                        <center>وقت البدء</center>
                    </th>
                    <th>
                        <center>وقت الانتهاء</center>
                    </th>
                    <th>
                        <center>منشور</center>
                    </th>
                    <th>
                        <center>الإجراءات</center>
                    </th>
                </tr>
                @isset($qwestcheckers)
                    @foreach ($qwestcheckers as $qwestchecker)
                        <tr>
                            <td style="width:80px;">
                                <center>{{ $qwestchecker->test_no }}</center>
                            </td>
                            <td>
                                <center>{{ $qwestchecker->date }}</center>
                            </td>
                            <td>
                                <center>{{ $qwestchecker->start_at }}</center>
                            </td>
                            <td>
                                <center>{{ $qwestchecker->end_at }}</center>
                            </td>
                            <td>
                                <center>{{ $qwestchecker->is_active ? 'نشط' : 'غير نشط' }}</center>
                            </td>
                            <td>
                                <center>
                                    <a href="{{ route('qwestchecker.edit', $qwestchecker->id) }}" class="btn btn-primary edit"><i class="fa fa-edit"></i></a>
                                    <form action="{{ route('qwestchecker.destroy', $qwestchecker->id) }}" class="hidden" id="deleteQwestChecker{{ $qwestchecker->id }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                    </form>
                                    <button class="btn btn-danger delete" form="deleteQwestChecker{{ $qwestchecker->id }}" onclick="return confirm('هل أنت متأكد من حذف هذا الاختبار؟')"><i class="fa fa-trash"></i></button>
                                </center>
                            </td>
                        </tr>
                    @endforeach
                @endisset
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $qwestcheckers->links() !!}
                </div>
            </div>
        </div>
    </div>

</x-admin.layout>