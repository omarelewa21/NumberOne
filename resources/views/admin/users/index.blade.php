<x-admin.layout>
    <x-slot:heading>الأسئلة</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/user/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />
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
                        <center>الاسم</center>
                    </th>

                    <th>
                        <center>البريد الالكتروني</center>
                    </th>
                    <th>
                        <center>مشرف</center>
                    </th>
                    <th>
                        <center>تاريخ التسجيل</center>
                    </th>
                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>

                @foreach ($users as $user)
                    <tr>
                        <td style="width:80px;">
                            <center>{{ $user->id }}</center>
                        </td>
                        <td>
                            <center>{{ $user->name }} </center>
                        </td>

                        <td>
                            <center>{{ $user->email }}</center>
                        </td>
                        <td>
                            <center>{{ $user->admin === 1 ? 'نعم' : 'لا' }}</center>
                        </td>
                        <td>
                            <center>{{ $user->created_at }}</center>
                        </td>
                        <td>
                            <center>
                                <a href="/admin/users/{{ $user->id }}/edit" class="btn btn-primary edit"><i
                                        class="fa fa-edit"></i></a>
                                <button class="btn btn-danger delete" form="deletelesson{{ $user->id }}"
                                    onclick="return confirm('Are you sure?')"><i class="fa fa-trash"></i>
                                </button>
                            </center>
                        </td>
                    </tr>
                    <form action="/admin/users/{{ $user->id }}" class="hidden"
                        id ="deletelesson{{ $user->id }}" method="POST">
                        @csrf
                        @method('DELETE')
                    </form>
                @endforeach
            </table>
            <div class="text-left px-3">
                <div class="pagination">
                    {!! $users->links() !!}
                </div>
            </div>
    </div>

</div>
</x-admin.layout>
