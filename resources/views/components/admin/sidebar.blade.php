    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-right image">
                    <img src="/assets/admin/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>{{ Auth::user()->name }}</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> اونلاين</a>
                </div>
            </div>
            <!-- search form -->

            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu">

                <!-- الرئيسية -->
                <li class="header">
                    <h4 style="margin: auto; text-align:center;">قائمة التحكم بالموقع</h4>
                </li>
                <!-- التصنيفات -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-th"></i>
                        <span>التصنيفات</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/courses-categories/create?type=main"><i class="fa fa-square-o"></i>
                                أضف تصنيف </a>
                        </li>
                        <li><a href="/admin/courses-categories/create"><i class="fa fa-square-o"></i> أضف تصنيف
                                فرعي</a></li>
                        <li><a href="/admin/courses-categories/?type=all"><i class="fa fa-square-o"></i> عرض جميع
                                التصنيفات</a></li>
                        <li><a href="/admin/courses-categories/?type=main"><i class="fa fa-square-o"></i> عرض جميع
                                التصنيفات الأساسية</a></li>
                        <li><a href="/admin/courses-categories/"><i class="fa fa-square-o"></i> عرض جميع
                                التصنيفات الفرعية</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-th"></i>
                        <span>المواد</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/courses/create"><i class="fa fa-square-o"></i>
                                أضف مادة </a>
                        </li>

                        <li><a href="/admin/courses/"><i class="fa fa-square-o"></i> عرض جميع المواد
                            </a></li>
                    </ul>
                </li>

                <!-- الكتب -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-book"></i>
                        <span>الكتب و الدروس</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/books/create"><i class="fa fa-square-o"></i> أضف
                                كتاب</a></li>
                        <li><a href="/admin/books/"><i class="fa fa-square-o"></i> عرض
                                جميع الكتب</a></li>
                        <li><a href="/admin/lessons/create"><i class="fa fa-square-o"></i> أضف
                                درس</a></li>
                        <li><a href="/admin/lessons/"><i class="fa fa-square-o"></i> عرض
                                جميع الدروس</a></li>
                    </ul>
                </li>
                <!-- الاسئلة -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-question"></i>
                        <span>الاسئلة</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/quizzes/create"><i class="fa fa-square-o"></i>
                                أضف سؤال</a></li>
                        <li><a href="/admin/quizzes/"><i class="fa fa-square-o"></i>
                                عرض جميع الاسئلة</a></li>

                    </ul>
                </li>
                 <!-- المسابقة -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-trophy"></i>
                        <span>المسابقة</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/qwest/index"><i class="fa fa-square-o"></i>
                                 عرض جميع المسابقات</a></li>
                        <li><a href="/admin/qwest/add-quiz"><i class="fa fa-square-o"></i>
                                اضافة مسابقة</a></li>
                        <li><a href="/admin/qwest/create"><i class="fa fa-square-o"></i>
                                اضافة سؤال</a></li>
                        <li><a href="/admin/qwest/all-qwest"><i class="fa fa-square-o"></i>
                                 عرض جميع الاسئلة</a></li>
                        <li><a href="/admin/qwest/all-users"><i class="fa fa-square-o"></i>
                                كل المتسابقين </a></li>

                    </ul>
                </li>
                <!-- المستخدمين -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-users"></i>
                        <span>المستخدمين</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/users/"><i class="fa fa-square-o"></i>
                                عرض المستخدمين</a></li>
                    </ul>
                </li>
                <!-- الاشتراكات -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-user"></i>
                        <span>الاشتراكات</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        {{-- <li><a href="/assets/admin/pages/subscription/add-subscription.php"><i
                                    class="fa fa-square-o"></i> أضف اشتراك</a></li> --}}
                        <li><a href="/admin/subscriptions"><i class="fa fa-square-o"></i> عرض جميع الاشتراكات</a></li>
                        {{-- <li><a href="/assets/admin/pages/subscription/all-subscripers.php"><i
                                    class="fa fa-square-o"></i> جميع المشتركين</a></li> --}}
                    </ul>
                </li>
                {{-- <!-- البلاغات -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-flag"></i>
                        <span>البلاغات</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/assets/admin/pages/reports/all-reports.php"><i class="fa fa-square-o"></i> جميع
                                البلاغات</a></li>
                        <li><a href="/assets/admin/pages/reports/all-feedback.php"><i class="fa fa-square-o"></i> جميع
                                الاقتراحات</a></li>
                    </ul>
                </li>
                <!-- الرسائل -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-envelope"></i>
                        <span>الرسائل</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/assets/admin/pages/messages/all-messages.php"><i class="fa fa-square-o"></i> عرض
                                الرسائل</a></li>
                    </ul>
                </li> --}}



                <!-- التقارير -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-folder"></i>
                        <span>التقارير</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-square-o"></i> جميع التقارير</a></li>
                    </ul>
                </li>
                <!-- المشرقين -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-users"></i>
                        <span>المشرفين</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        {{-- <li><a href="/assets/admin/pages/supers/add-supers.php"><i class="fa fa-square-o"></i> أضف
                                مشرف</a></li> --}}
                        <li><a href="/admin/admins"><i class="fa fa-square-o"></i>عرض
                                المشرفين </a></li>
                    </ul>
                </li>

                <!-- المحذوفات -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-trash"></i>
                        <span>المحذوفات</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/trashed/courses-categories"><i class="fa fa-square-o"></i> عرض الأقسام
                                المحذوفة</a>
                        </li>
                        <li><a href="/admin/trashed/courses"><i class="fa fa-square-o"></i> عرض المواد المحذوفة</a>
                        </li>
                        <li><a href="/admin/trashed/books"><i class="fa fa-square-o"></i> عرض الكتب المحذوفة</a>
                        </li>
                        <li><a href="/admin/trashed/lessons"><i class="fa fa-square-o"></i> عرض الدروس المحذوفة</a>
                        </li>
                    </ul>
                </li>

                <!-- الإعدادات -->
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-gear"></i>
                        <span>الإعدادات</span>
                        <i class="fa fa-angle-left pull-left"></i>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/admin/units/"><i class="fa fa-folder"></i>
                                الوحدات</a></li>
                    </ul>
                    <ul class="treeview-menu">
                        <li><a href="/admin/terms/"><i class="fa fa-calendar"></i>
                                الفصول الدراسية</a></li>
                    </ul>
                    <ul class="treeview-menu">
                        <li><a href="/admin/trainers/"><i class="fa fa-users"></i>
                                المحاضرين</a></li>
                    </ul>
                    <ul class="treeview-menu">
                        <li><a href="/admin/about"><i class="fa fa-question"></i> عن
                                الموقع</a></li>
                    </ul>
                    <ul class="treeview-menu">
                        <li><a href="/admin/policy"><i class="fa fa-file"></i> سياسات الخصوصية </a></li>
                    </ul>

                    <ul class="treeview-menu">
                        <li><a href="/admin/contacts"><i class="fa fa-phone"></i> بيانات الاتصال مع الادارة
                            </a>
                        </li>
                </li>
            </ul>
            </ul>

        </section>
        <!-- /.sidebar -->
    </aside>
