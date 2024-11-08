<x-admin.layout>
    <x-slot:heading>إدارة الاختبارات</x-slot:heading>

    <div class="box box-primary">
        <x-admin.box-header action="/quiz/search/?keyword=" addHref="{{ url('admin/qwest/createmore') }}" />
        <div class="box-body">
            @if (session('message') !== null)
                <div class="alert alert-success">
                    {{ session('message') }}
                </div>
            @endif
            <form action="" method="POST" onsubmit="return confirm('هل أنت متأكد من حذف هذه الاختبارات؟')">
                @csrf
                @method('DELETE')
                <table class="table table-bordered">
                    <tr>
                        <th>
                        </th>
                        <th>رقم الاختبار</th>
                        <th>منشور</th>
                        <th>الإجراءات</th>
                    </tr>
                    @foreach ($qwests as $qwest)
                        <tr>
                            <td>

                            </td>
                            <td>{{ $qwest->test_no }}</td>
                            <td>{{ $qwest->is_active ? 'نشط' : 'غير نشط' }}</td>
                            <td>
                                <a href="{{ route('relatedTests.show', ['test_no' => $qwest->test_no]) }}" class="btn btn-info">
                                    <i class="fa fa-eye"></i> <!-- Eye icon for viewing -->
                                </a>
                                </td>
                        </tr>
                    @endforeach
                </table>

            </form>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $qwests->links() !!}
                </div>
            </div>
        </div>
    </div>
</x-admin.layout>