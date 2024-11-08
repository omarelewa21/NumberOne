<body class="skin-blue sidebar-mini {{ session()->get('locale') == 'ar' ? 'rtl' : '' }}">
    <div class="wrapper">

        <header class="main-header">
            <!-- Logo -->
            <a href="/admin/" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini"><b>خ</b></span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg"><b>خــــــبير</b></span>
            </a>
            <!-- Header Navbar: style can be found in header.less -->
            <nav class="navbar navbar-static-top" role="navigation">
                <!-- Sidebar toggle button-->
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">إظهار/ إخفاء القائمة</span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Messages: style can be found in dropdown.less-->
                        {{-- <li class="dropdown messages-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-envelope-o"></i>
                                <span class="label label-success">4</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">لديك 4 رسائل</li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li><!-- start message -->
                                            <a href="#">
                                                <div class="pull-right">
                                                    <img src="/assets/admin/dist/img/user2-160x160.jpg"
                                                        class="img-circle" alt="User Image">
                                                </div>
                                                <h4>
                                                    فريق الدعم
                                                    <small><i class="fa fa-clock-o"></i> 5 دقائق</small>
                                                </h4>
                                                <p>يوجد لديك تعديل في السؤال</p>
                                            </a>
                                        </li><!-- end message -->
                                        <li>
                                            <a href="#">
                                                <div class="pull-right">
                                                    <img src="/assets/admin/dist/img/user3-128x128.jpg"
                                                        class="img-circle" alt="User Image">
                                                </div>
                                                <h4>
                                                    فريق الدعم للتصميم
                                                    <small><i class="fa fa-clock-o"></i> 2 ساعات</small>
                                                </h4>
                                                <p>لديك تعديل على القائمة الثانية</p>
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="footer"><a href="#">مشاهدة جميع الرسائل</a></li>
                            </ul>
                        </li>
                        <!-- Notifications: style can be found in dropdown.less -->
                        <li class="dropdown notifications-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-bell-o"></i>
                                <span class="label label-warning">10</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">يوجد لديك 10 تنبيهات</li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li>
                                            <a href="#">
                                                <i class="fa fa-users text-aqua"></i> 5 اعضاء انظم اليوم
                                            </a>
                                        </li>


                                        <li>
                                            <a href="#">
                                                <i class="fa fa-shopping-cart text-green"></i> 25 عملية مبيعات
                                            </a>
                                        </li>

                                    </ul>
                                </li>
                                <li class="footer"><a href="#">مشاهدة الكل</a></li>
                            </ul>
                        </li>
                        <!-- Tasks: style can be found in dropdown.less -->
                        <li class="dropdown tasks-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-flag-o"></i>
                                <span class="label label-danger">9</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="header">يوجد لديك 9 بلاغات</li>
                                <li>
                                    <!-- inner menu: contains the actual data -->
                                    <ul class="menu">
                                        <li><!-- Task item -->
                                            <a href="#">
                                                <h3>
                                                    بلاغ عن سؤال
                                                    <small class="pull-left">0%%</small>
                                                </h3>
                                                <div class="progress xs">
                                                    <div class="progress-bar progress-bar-aqua" style="width: 1%"
                                                        role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <span class="sr-only">لم ينجز</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li><!-- end task item -->

                                    </ul>
                                </li>
                                <li class="footer">
                                    <a href="#">مشاهدة الكل</a>
                                </li>
                            </ul>
                        </li> --}}
                        <!-- User Account: style can be found in dropdown.less -->
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="/assets/admin/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                                <span class="hidden-xs">{{ Auth::user()->name }}</span>
                            </a>
                            <ul class="dropdown-menu">
                                <!-- User image -->
                                <li class="user-header">
                                    <img src="/assets/admin/dist/img/user2-160x160.jpg" class="img-circle"
                                        alt="User Image">
                                    <p>
                                        {{ Auth::user()->name }}
                                        <small>عظو منذ - {{ Auth::user()->created_at->format('M-Y') }}</small>
                                    </p>
                                </li>
                                <!-- Menu Body -->

                                <!-- Menu Footer-->
                                <li class="user-footer">
                                    <div class="pull-right">
                                        <a href="/profile/" class="btn btn-default btn-flat">الملف الشخصي</a>
                                    </div>
                                    <div class="pull-left">
                                        <button class="btn btn-default btn-flat" type="submit"
                                            form="header-logout">خروج</button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <!-- Control Sidebar Toggle Button -->

                    </ul>
                </div>
            </nav>
        </header>
        <form class="hidden" method="POST" action="{{ route('adminLogout') }}" id="header-logout">@csrf
        </form>
