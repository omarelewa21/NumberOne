@props(['action' => '#', 'addHref' => ''])
@if (
    !str_contains(url()->current(), 'create') &&
        !str_contains(url()->current(), 'edit') &&
        !str_contains(url()->current(), 'trashed') &&
        !str_contains(url()->current(), 'admins') &&
        !str_contains(url()->current(), 'about') &&
        !str_contains(url()->current(), 'privacy-policy') &&
        !str_contains(url()->current(), 'contacts') &&
        !str_contains(url()->current(), 'users'))
    <div class="box-header with-border">

        <form action="{{ $action }}" method="get">
            <div class="row">

                {{-- <div class="col-md-4">
                <input type="text" name="search" class="form-control" placeholder="بحث" value="">
            </div> --}}

                <div class="col-md-4">
                    {{-- <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i> بحث</button> --}}
        </form><!-- end of form -->
        <a {{ $attributes->merge(['href' => $addHref, 'class' => 'btn btn-primary']) }}><i class="fa fa-plus"></i>
            اضافه</a>
    </div>


    </div>


    </div> <!-- end of box header -->
@endif
