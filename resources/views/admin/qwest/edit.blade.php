<x-admin.layout>
    <x-slot:heading>تعديل الاختبار</x-slot:heading>
    <div class="box box-primary">
        <div class="box-body">
            <form action="{{ route('qwestchecker.update', $qwestchecker->id) }}" method="POST">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="test_no">رقم الاختبار</label>
                    <input type="number" class="form-control" id="test_no" name="test_no" value="{{ $qwestchecker->test_no }}" required>
                </div>

                <div class="form-group">
                    <label for="date">التاريخ</label>
                    <input type="date" class="form-control" id="date" name="date" value="{{ $qwestchecker->date }}" required>
                </div>

                <div class="form-group">
                    <label for="start_at">وقت البدء</label>
                    <input type="time" class="form-control" id="start_at" name="start_at" value="{{ $qwestchecker->start_at }}" required>
                </div>

                <div class="form-group">
                    <label for="end_at">وقت الانتهاء</label>
                    <input type="time" class="form-control" id="end_at" name="end_at" value="{{ $qwestchecker->end_at }}" required>
                </div>

                <div class="form-group">
                    <label for="is_active">منشور</label>
                    <select class="form-control" id="is_active" name="is_active">
                        <option value="1" {{ $qwestchecker->is_active ? 'selected' : '' }}>نشط</option>
                        <option value="0" {{ !$qwestchecker->is_active ? 'selected' : '' }}>غير نشط</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">تحديث الاختبار</button>
            </form>
        </div>
    </div>
</x-admin.layout>