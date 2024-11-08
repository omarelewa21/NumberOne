<!DOCTYPE html>
<html lang="{{ session()->get('locale') ? session()->get('locale') : 'ar' }}">

<head>
    <meta charset="UTF-8" />
    <title> نمبر ون {{ $slot != '' ? ' - ' . $slot : '' }}</title>
    <!-- mobile responsive meta -->
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="/assets/web/css/rtl.css">
    <link rel="apple-touch-icon" sizes="57x57" href="/assets/web/img/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/web/img/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/web/img/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/web/img/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/web/img/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/web/img/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/web/img/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/web/img/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/web/img/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/assets/web/img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/web/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/web/img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/web/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="/assets/web/img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/assets/web/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/web/css/style.css">
    <link rel="stylesheet" href="/assets/web/css/responsive.css">
    <link rel="stylesheet" href="/assets/font/fonts-fa.css">


    <style>
        @font-face {
            font-family: Cairo-Regular;
            src: url('/assets/font/Cairo-Regular.ttf');
        }

        @font-face {
            font-family: Cairo-bold;
            font-weight: bold;
            src: url('/assets/font/Cairo-bold.ttf');
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: Cairo-Regular, sans-serif !important;
        }
    </style>
    @if (session()->get('locale') == 'ar')
        <link rel="stylesheet" href="/assets/rtl.css">
    @endif

</head>
