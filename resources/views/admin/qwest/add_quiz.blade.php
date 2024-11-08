<x-admin.layout>
    <x-slot:heading>إضافة اختبار</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/quiz/search/?keyword=" addHref="{{ url('admin/qwest/create') }}" />

        <div class="box-body">
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('qwestchecker.store') }}" method="POST">
                @csrf

                <div class="form-group">
                    <label for="test_no">رقم الاختبار</label>
                    <input type="number" class="form-control" id="test_no" name="test_no" placeholder="أدخل رقم الاختبار" required>
                </div>

                <div class="form-group">
                    <label for="date">التاريخ</label>
                    <input type="date" class="form-control" id="date" name="date" required>
                </div>

                <div class="form-group">
                    <label for="start_at">وقت البدء</label>
                    <input type="time" class="form-control" id="start_at" name="start_at" required>
                </div>

                <div class="form-group">
                    <label for="end_at">وقت الانتهاء</label>
                    <input type="time" class="form-control" id="end_at" name="end_at" required>
                </div>

                <div class="form-group">
                    <label for="is_active">منشور</label>
                    <select class="form-control" id="is_active" name="is_active">
                        <option value="1">نشط</option>
                        <option value="0">غير نشط</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">إضافة اختبار</button>
            </form>
        </div>
    </div>
</x-admin.layout>