@php
    $categories = App\Models\CourseCategory::has('courses')->get();
@endphp

<body class="{{ str_replace('_', '-', app()->getLocale()) == 'ar' ? 'rtl' : '' }}">
    <div class="preloader">
        <div class="spinner"></div>
    </div><!-- /.preloader -->

    <header class="header home-page-one ">
        <div class="container">
            <div class="appilo-menu clearfix">
                <nav class="navbar navbar-expand-lg navbar-custom navbar-light">

                    <a class="navbar-brand  mr-auto " href="/">
                        <img src="/assets/web/img/logo.png" alt="خبير" class="default-logo">
                        <img src="/assets/web//img/logo-2.png" alt="خبير" class="stick-logo">
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse navbar-nav" id="navbarToggler">
                        <ul class="ml-auto">
                            <li><a class="nav-link" href="/">الرئيسية</a></li>
                             <li><a class="nav-link" href="/#features">المميزات</a></li>
                            <li><a class="nav-link" href="/my-courses">دوراتي</a>
                            <li><a class="nav-link" href="/web/qwest/quiz_list">المسابقة</a>
                            <li><a class="nav-link" href="/web/qwest/all-qwest-users">احصائيات</a>
                            </li>
                            {{-- <li><a class="nav-link" href="#pricing">الاختبارات</a></li> --}}
                            <li class="dropdown">
                                <a class="nav-link" href="#blog">
                                    أقسام الدورات
                                </a>
                                <ul class="dropdown-menu">
                                    @foreach ($categories as $category)
                                        <li><a href="/course-category/{{ $category->slug }}">{{ $category->name }}</a>
                                        </li>
                                    @endforeach

                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="sign-up-btn">
                        @guest
                            <a href="/register" class="sign-btn">إنشاء حساب</a>
                            <a href="/login" class="sign-btn">دخول</a>
                        @endguest
                        @auth
                            <a href="/profile/" class="sign-btn">الملف الشخصي</a>
                        @endauth
                    </div>
                </nav>
            </div>
    </header><!-- /.header -->
