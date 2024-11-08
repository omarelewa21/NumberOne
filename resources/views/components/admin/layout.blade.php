@php
    app()->setLocale('ar');
@endphp

<x-admin.head />
<x-admin.header />
<x-admin.sidebar />

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>{{ $heading }}<small><b>{{ !empty($itemCount) ? '(' . $itemCount . ')' : '' }}</b></small></h1>

        <ol class="breadcrumb">
            <li><a href=""><i class="fa fa-dashboard"></i> الرئيسيه</a></li>
            <li class="active">{{ $heading }}</li>
        </ol>
    </section>
    <section class="content">
        {{ $slot }}
    </section><!-- right col -->
</div><!-- /.row (main row) -->
</section><!-- /.content -->
</div><!-- /.content-wrapper -->
<footer class="main-footer">
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="/assets/admin/dist/js/pages/dashboard.js"></script>
    <x-admin.footer />
