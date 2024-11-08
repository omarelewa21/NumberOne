<x-admin.layout>
    <x-slot:heading>المتسابقين</x-slot:heading>

    <div class="box box-primary">
        <div class="box-body">
            <h3>احصائية مستوى تقدم المتسابقين</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>الاسم</th>
                        <th>مجموع الدروس</th>
                        <th>مجموع الدرجات</th>
                        <th>عدد المسابقات</th>
                        <th>النسبة</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($users as $index => $user)
                        <tr>
                            <td>{{ $index + 1 }}</td> <!-- Incrementing index -->
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->total_tests }}</td>
                            <td>{{ $user->total_count }}</td>
                            <td>{{ $totalRecords }}</td>
                            <td>{{ $user->percentage }}%</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            
            <!-- Pagination links -->
            <div class="text-left px-3">
                {{ $users->links() }}
            </div>
        </div>
    </div>
</x-admin.layout>