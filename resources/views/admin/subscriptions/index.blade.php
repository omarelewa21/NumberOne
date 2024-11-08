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
                        <center>اسم المستخدم</center>
                    </th>
                    <th>
                        <center>اسم الدورة</center>
                    </th>
                    <th>
                        <center>اكشن</center>
                    </th>
                </tr>
                @isset($subscriptions)


                    @foreach ($subscriptions as $subscription)
                        <tr>
                            <td style="width:80px;">
                                <center>{{ $subscription->id }}</center>
                            </td>
                            <td>
                                <center>{{ $subscription->user->email }} </center>
                            </td>
                            <td>
                                <center>{{ optional($subscription->course)->title }} </center>
                            </td>


                            <td>
                                <center>
                                    {{-- <a href="/admin/lesson-sections/{{ $lessonSection->id }}/edit"
                                    class="btn btn-primary edit"><i class="fa fa-edit"></i></a> --}}
                                    <button class="btn btn-danger delete"
                                        form="delete-subscriptions{{ $subscription->id }}"
                                        onclick="return confirm('Are you sure?')"><i class="fa fa-trash"></i>
                                    </button>
                                </center>
                            </td>
                        </tr>
                        <form action="/admin/subscriptions/{{ $subscription->id }}" class="hidden"
                            id ="delete-subscriptions{{ $subscription->id }}" method="POST">
                            @csrf
                            @method('DELETE')
                        </form>
                    @endforeach
                @endisset
            </table>

    </div>

</div>
</x-admin.layout>
