@props(['pageTitle' => ''])
<x-web.head>{{ $pageTitle }}</x-web.head>
<x-web.header />
{{ $slot }}
<x-web.footer />
