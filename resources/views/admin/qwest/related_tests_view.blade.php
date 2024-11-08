<x-admin.layout>
    <x-slot:heading>إدارة الاختبارات</x-slot:heading>

    <div class="box box-primary">
        <x-admin.box-header action="/quiz/search/?keyword=" addHref="{{ url('admin/qwest/createmore') }}" />
        <div class="box-body">
            <h5> درس رقم {{ $test_no }}</h5>

            <form action="{{ route('qqwestchecker.destroy', $test_no) }}" method="POST" onsubmit="return confirm('هل أنت متأكد من حذف هذه الاختبارات؟')">
                @csrf
                @method('DELETE')
                <table class="table">
                    <tr>
                        <th>
                            <input type="checkbox" id="select-all" onclick="toggle(this)" /> <!-- Select All -->
                        </th>
                        <th>رقم الاختبار</th>
                        <th>منشور</th>
                    </tr>
                    @foreach ($relatedTests as $test)
                        <tr>
                            <td>
                                <input type="checkbox" name="test_no[]" value="{{ $test->test_no }}" />
                            </td>
                            <td>{{ $test->test_no }}</td>
                            <td>{{ $test->is_active ? 'نشط' : 'غير نشط' }}</td>
                        </tr>
                    @endforeach
                </table>
                <button type="submit" class="btn btn-danger">حذف المحدد</button>
            </form>
            
            <!-- Pagination Links -->
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $relatedTests->links() !!} <!-- This will generate pagination links -->
                </div>
            </div>
            
        </div>
    </div>
</x-admin.layout>

<script>
    function toggle(source) {
        checkboxes = document.getElementsByName('test_no[]');
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = source.checked;
        }
    }
</script>