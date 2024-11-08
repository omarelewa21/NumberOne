@props(['label', 'name', 'placeholder', 'type' => 'text', 'value'])
<div class="col-md-8 form-group">
    <label for="{{ $name }}">@lang('{{ $label }}')
        {{ array_search(app()->getLocale(), config('app.available_locales')) }}<span style="color:red;">
            *</span>{{ $slot }}</label>
    <input type="text"
        {{ $attributes->merge(['class' => 'form-control', 'value' => '$value ', 'placeholder' => "@lang('admin.categories.title')", 'name' => "$name . ' ' . array_search(app()->getLocale(), config('app.available_locales'))"]) }}>

</div>
