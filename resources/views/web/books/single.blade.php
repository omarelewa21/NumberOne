@php
    $categories = App\Models\CourseCategory::has('courses')->get();
@endphp

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--=============== BOXICONS ===============-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

    <!--=============== CSS ===============-->
    <link rel="stylesheet" href="/assets/web/css/styles.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <title>{{ $book->title }}</title>

</head>

<body>
    <!--=============== HEADER ===============-->
    <header class="header" id="header">
        <nav class="nav container">
            <a class="navbar-brand  mr-auto " href="/">
                <img src="/assets/web/img/logo.png" alt="نمبر ون" class="default-logo">
            </a>
            <ul class="ml-auto light-nav">
                <li><a class="nav-link" href="/">الرئيسية</a></li>
                <li><a class="nav-link" href="#features">المميزات</a></li>
                <li><a class="nav-link" href="/my-courses/">دوراتي</a>
                </li>

            </ul>
            </div>




            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#" class="nav__link active-link">
                            <i class='bx bx-home-alt nav__icon '></i>
                            <span class="nav__name ">الرئيسية</span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a href="#" class="nav__link drawer-link" data-id="drawer-01">
                            <i class='bx bx-book-content nav__icon'></i>
                            <span class="nav__name">المحتوى</span>
                        </a>
                    </li>


                    <li class="nav__item">
                        <a href="#" class="nav__link">
                            <i class='bx bx-up-arrow-circle nav__icon'></i>
                            <span class="nav__name">اعلى</span>
                        </a>
                    </li>
                </ul>
            </div>

            <img src="/assets/web/img/perfil.png" alt="" class="nav__img">
        </nav>
    </header>


    <!--########################################slider left#####################################################-->
    <div class="drawer" data-id="drawer-01">
        <div class="wrapper">
            <div class="ThemeBox2">
                <div class="ThemeBoxHeader2">
                    <span style="font-size:23px; font-weight: 600;">الفهرس</span>
                    <button type="button" class="btn CloseThemeBtn2 close-s">
                        <i class="fas fa-times"></i></button>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="ThemeBoxSubbox2 ThemeBoxSubboxColors2">
                            @foreach ($lessons as $lesson)
                                <h3 class="headerCollapse collapsed"> <a
                                        href = "/lesson/{{ $lesson->slug }}">{{ $lesson->name }} </a></h3>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--########################################slider up#####################################################-->




    <!--=============== HOME ===============-->

    <style>
        @import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
        @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");


        body {
            direction: rtl;
            text-align: right !important;
        }

        .contentContainer {
            width: 95%;
            margin: auto;
            padding: 50px;
        }

        .slide-in {
            z-index: 10;
            /* to position it in front of the other content */
            position: fixed;
            overflow: hidden;
            /* to prevent scrollbar appearing */
            width: 100%;

        }

        .slide-in.from-left {
            bottom: 0;
        }

        .slide-in-content {
            padding: 5px 20px;
            background: #6541c1;
            transition: transform .5s ease;
            /* our nice transition */
            border-radius: 20px 20px 0 0;
            padding-bottom: 29px;

        }

        .slide-in.from-left .slide-in-content {
            transform: translatey(100%);
            -webkit-transform: translatey(100%);
        }


        .slide-in.show .slide-in-content {
            transform: translatey(0);
            -webkit-transform: translatey(0);

        }

        .hide_search .header-search {
            display: none;
        }



        .inline-search-form {
            position: relative;
        }


        [type=button]:not(:disabled),
        [type=reset]:not(:disabled),
        [type=submit]:not(:disabled),
        button:not(:disabled) {
            cursor: pointer
        }


        .inline-search-form input {
            height: 90px;
            border-radius: 50px;
            padding: 0 20px 0 50px;
            outline: none !important;
            border: none;
            width: 100%;
            background: #b31111;
            font-size: 13px;
            font-weight: 500;
            color: #000;
        }

        .inline-search-form input::-webkit-input-placeholder {
            color: #ffc107
        }

        .inline-search-form input:-ms-input-placeholder {
            color: #800b17
        }

        .inline-search-form input::placeholder {
            color: #8A8E98
        }

        .header-search input {
            height: 40px;
            width: 100%;
            background: #F2F5F8;

        }


        .inline-search-form button {
            position: absolute;
            background: none;
            padding: 0;
            outline: none !important;
            border: none;
            top: 60%;
            transform: translateY(-50%);
            left: 20px;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit
        }

        button,
        input {
            overflow: visible;
        }

        button.close {
            position: absolute;
            left: 0;
        }

        @media (min-width: 576px) {

            .form-inline .custom-control-label {
                margin-bottom: 0
            }

        }

        .btn {
            display: inline-block;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
        }


        .ThemeMainBox {
            position: fixed;
            top: 0;
            left: -330px;
            width: 330px;
            height: 100%;
            z-index: 99999;
            /* background-image: url('/_layouts/15/Portal/Images/Trans.png'); */
            background-repeat: repeat;
            background-color: rgba(52, 50, 50, 0.97);
            background-position: center;
            color: #fff;
            padding: 10px;
            z-index: 100000000;
        }

        .ThemeBox {
            position: relative;
        }

        p.ThemeSettingsDesc {
            text-align: center;
            font-size: 24px;
            padding: 40px;
            color: #63d0c8;
        }

        .OpenCloseTheme {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #fff !important;
            font-size: 24px;
            padding: 0;
            line-height: 14px;
            right: -50px;
            top: 90px;
            color: #615e5e;
            cursor: pointer;
            -webkit-box-sizing: inherit !important;
            padding-top: 7px;
            text-align: center;
            -webkit-box-sizing: inherit !important;
            -moz-box-sizing: inherit !important;
            box-sizing: inherit !important;
        }

        button.btn.CloseThemeBtn,
        button.btn.CloseThemeBtn2 {
            background: #e66c45;
            line-height: 20px;
            height: 40px;
            width: 40px;
            text-align: center;
            min-width: inherit;
        }

        .ThemeBoxHeader .btn,
        .ThemeBoxHeader2 .btn {
            float: left;
            margin: 2px;
            color: #fff;
            font-size: 21px;
            transition: all 0.3s;
        }

        .ThemeBoxHeader .btn:hover,
        .ThemeBoxHeader2 .btn:hover {
            margin-top: 0px;
            color: #fff;
            opacity: .8;
        }




        @media only screen and (min-width:769px) and (max-width: 1225px) {
            #FlixWidth {
                margin: 20px;
            }
        }

        @media only screen and (max-width: 768px) {
            body {
                background-color: #fff !important;
            }

            .VideoPlayerDiv {
                background: rgba(255, 255, 255, 0);
                padding: 0;
                padding-bottom: 20px;
            }

            .row {
                margin-right: 0 !important;
                margin-left: 0 !important;
            }

            .HomePageMainPhoto {
                min-height: auto !important;

            }


        }

        @media only screen and (min-width: 769px) {

            .ThemeBoxHeader,
            .ThemeBoxHeader2 {
                margin-bottom: 20px;
            }
        }




        .slideInRight {
            -webkit-animation-name: slideInRight;
            animation-name: slideInRight;
            -webkit-animation-duration: 1s;
            animation-duration: 1s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
        }

        @-webkit-keyframes slideInRight {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
                visibility: visible;
            }

            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            0% {
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
                visibility: visible;
            }

            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }



        .ThemeSelected-NightReading .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .ThemeSelected-NightReading .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .ThemeSelected-NightReading input:checked+.slider {
            background-color: #2196F3;
        }

        .ThemeSelected-NightReading input:focus+.slider {
            box-shadow: 0 0 1px #2196F3;
        }

        .ThemeSelected-NightReading input:checked+.slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        /* Rounded sliders */
        .ThemeSelected-NightReading .slider.round {
            border-radius: 34px;
        }

        .ThemeSelected-NightReading .slider.round:before {
            border-radius: 50%;
        }





        .connectorarrow-tr {
            position: absolute;
            top: -12px;
            right: 20px;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 12px solid #ccc;
            border-top: none;
        }

        .connectorarrow-tr:before {
            top: 2px;
            right: -10px;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #fff;
        }

        .connectorarrow-tm:before,
        .connectorarrow-tr:before {
            position: absolute;
            border-left: 10px solid transparent;
            border-top: none;
            content: "";
        }

        .connectorarrow-rb:before,
        .connectorarrow-rm:before {
            top: -10px;
            border-right: none;
            content: "";
        }

        .connectordot-bl:before,
        .connectordot-bm:before {
            content: "";
            position: absolute;
            border: 2px solid #333;
        }

        .connectorarrow-lb:before,
        .connectorarrow-lm:before {
            position: absolute;
            right: -12px;
            top: -10px;
            border-top: 10px solid transparent;
            border-left: none;
            content: "";
        }

        .connectorarrow-lm:before {
            border-bottom: 10px solid transparent;
            border-right: 10px solid #fff;
        }

        .connectorarrow-lm {
            position: absolute;
            left: -12px;
            top: 50%;
            margin: -12px 0 0;
            border-top: 12px solid transparent;
            border-bottom: 12px solid transparent;
            border-right: 12px solid #ccc;
            border-left: none;
        }

        .connectordot-bm {
            height: 80px;
            width: 2px;
            position: absolute;
            right: 50%;
            bottom: -80px;
            margin-right: -1px;
            background-color: #333;
        }

        .connectordot-bm:before {
            height: 10px;
            width: 10px;
            right: -4px;
            bottom: -5px;
            background-color: #fff;
            -webkit-border-radius: 50%;
            -khtml-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
        }

        .connectorarrow-rm {
            position: absolute;
            right: -12px;
            top: 50%;
            margin: -12px 0 0;
            border-top: 12px solid transparent;
            border-bottom: 12px solid transparent;
            border-left: 12px solid #ccc;
            border-right: none;
        }

        .connectorarrow-rm:before {
            position: absolute;
            right: 2px;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #fff;
        }

        .connectorarrow-bm {
            position: absolute;
            bottom: -12px;
            right: 50%;
            margin: 0 -12px 0 0;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-top: 12px solid #ccc;
            border-bottom: none;
        }

        .connectorarrow-bm:before,
        .connectorarrow-br:before {
            position: absolute;
            border-left: 10px solid transparent;
            border-bottom: none;
            content: "";
        }

        .connectorarrow-bm:before {
            bottom: 2px;
            right: -10px;
            border-right: 10px solid transparent;
            border-top: 10px solid #fff;
        }

        .connectorarrow-tm {
            position: absolute;
            top: -12px;
            right: 50%;
            margin: 0 -12px 0 0;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 12px solid #ccc;
            border-top: none;
        }

        .connectorarrow-tm:before,
        .connectorarrow-tr:before {
            position: absolute;
            border-left: 10px solid transparent;
            border-top: none;
            content: "";
        }

        .connectorarrow-tm:before {
            top: 2px;
            right: -10px;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #fff;
        }






        .ThemeMainBox2 {
            left: -330px;
            width: 330px;
        }

        .ThemeMainBox2 {
            position: fixed;
            top: 0;
            left: -330px;
            width: 330px;
            height: 100%;
            z-index: 99999;
            /* background-image: url('/_layouts/15/Portal/Images/Trans.png'); */
            background-repeat: repeat;
            background-color: rgba(52, 50, 50, 0.97);
            background-position: center;
            color: #fff;
            padding: 10px;
            z-index: 10000000;
        }

        .ThemeBox2 {
            position: relative;
        }

        .ThemeBoxSubboxColors2 h3.headerCollapse:after {
            content: "\f0d7";
            font-size: 16px;
            font-weight: bold;
            position: absolute;
            text-align: center;
            right: auto;
            left: 15px;
            top: 20px;
            font-family: fontAwesome;

        }

        .ThemeBoxSubboxColors2 h3.headerCollapse {
            font-size: 14px;
            background: rgb(0 0 0 / 35%);
            padding: 16px;
            margin-bottom: 2px;
            position: relative;
            color: #fff !important;
        }

        .ThemeBoxSubbox2 h3[aria-expanded="true"] {
            background: #2fab99;
        }

        .ThemeBoxHeader,
        .ThemeBoxHeader2 {
            font-size: 25px;
        }

        .fixed {
            position: fixed;
            width: 100%;
        }

        .c-menue {
            background-color: #FFC107;
            width: 100%;
            height: 70px;
            white-space: nowrap;
            position: relative;
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            box-shadow: 0px 6px 6px 4px rgb(0 0 0 / 48%);
            transition: all 0.3s;
            direction: rtl;

        }


        .c-menue li {
            float: none;
            height: 90%;
            margin: 0 0.25%;
            display: inline-block;
            zoom: 1;
        }

        .c-menue span {
            color: #000;
            font-size: 16px;
            font-weight: 900;

        }

        .c-menue ul {
            padding-top: 15px;
            padding-right: 24px;
            float: right;
        }

        .float_up_50 {
            top: 0px
        }

        .c-menue li.active span {
            color: #fff
        }


        .c-menue::-webkit-scrollbar {
            height: 5px;
            width: 100%;
        }

        /* Track */
        .c-menue::-webkit-scrollbar-track {
            box-shadow: inset 0 0 0px white;
            border-radius: 1px;
        }

        /* Handle */
        .c-menue::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 10px white;
            border-radius: 15px;
        }

        /* Handle on hover */
        .c-menue::-webkit-scrollbar-thumb:hover {
            box-shadow: inset 0 0 20px white;
        }

        .nav-link {
            display: block;
            padding: .5rem .5rem;
        }

        h3 {
            text-align: right;
        }

        p {
            text-align: right;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .drawer {
            position: fixed;
            top: 0;
            left: -330px;
            width: 330px;
            height: 100%;
            z-index: 99999;
            /* background-image: url('/_layouts/15/Portal/Images/Trans.png'); */
            background-repeat: repeat;
            background-color: rgba(52, 50, 50, 0.97);
            background-position: center;
            color: #fff;
            padding: 10px;
            z-index: 10000000;
            transition: left 0.5s ease, opacity 0.5s ease;
            overflow-y: scroll;
            overflow-x: hidden;
            direction: ltr;
        }


        .drawer::-webkit-scrollbar {
            height: 100%;
            width: 10px;
        }

        /* Track */
        .drawer::-webkit-scrollbar-track {
            box-shadow: inset 0 0 0px white;
            border-radius: 1px;
        }

        /* Handle */
        .drawer::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 0px white;
            border-radius: 15px;
        }

        /* Handle on hover */
        .drawer::-webkit-scrollbar-thumb:hover {
            box-shadow: inset 0 0 20px white;
        }


        .ThemeBoxHeader,
        .ThemeBoxHeader2 {
            direction: rtl;
            margin-bottom: 20px;
        }

        .ThemeBox2 {
            position: relative;
        }

        .wrapper {
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;

        }

        .open-drawer {
            left: 0px;
            opacity: 1;
        }


        .close {
            color: white;
        }
    </style>
    <section class="course-overview-sections-wrap">
        <nav class="section1" id="#sec1">
            <div class="c-menue">
                <ul class="navigation">
                    <li class="nav-item active"><a href="#overview"><span class="nav-link">نظرة عامة</span></a>
                    </li>
                    <li class="nav-item"><a href="#contents"><span class="nav-link">محتويات الدورة</span></a>
                    </li>
                    <li class="nav-item"><a href="#lessons"><span class="nav-link">قائمة الدروس</span></a>
                    </li>

                </ul>

            </div>
        </nav>
        <div class="contentContainer">
            <h3 style="margin: 20px 0; text-decoration:underline;">كتاب ({{ $book->title }})</h3>
            <div id="overview" class="texto">
                <h3>نظرة عامة</h3>
                {{ $book->short_title }}
            </div>
            <p style="padding-top: 30px;"></p>

            <div id="contents">

                <h3>التفاصيل</h3>

                {!! $book->details !!}
            </div>


            <p style="padding-top: 10px;"></p>

            <div id="lessons">

                <h3 style="padding-top: 10px;">قائمة الدروس</h3>

                @foreach ($lessons as $lesson)
                    <li><a href= "/lesson/{{ $lesson->slug }}">{{ $lesson->name }}</a></li>
                @endforeach
            </div>


            <p style="padding-top: 10px;"></p>


    </section>
    </div>



    |<footer></footer>

    <!--=============== MAIN JS ===============-->
    <script src="/assets/web/js/main.js"></script>

    <script>
        /*
                                                                                                                                                                                                                                                                                                                                                                                    $(document).keydown(function (event) {
                                                                                                                                                                                                                                                                                                                                                                                    if (event.keyCode == 123) { // Prevent F12
                                                                                                                                                                                                                                                                                                                                                                                        return false;
                                                                                                                                                                                                                                                                                                                                                                                    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
                                                                                                                                                                                                                                                                                                                                                                                        return false;
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                });*/
    </script>
    <script>
        /*
                                                                                                                                                                                                                                                                                                                                                                                    $(document).on("contextmenu", function (e) {
                                                                                                                                                                                                                                                                                                                                                                                    e.preventDefault();
                                                                                                                                                                                                                                                                                                                                                                                });*/
    </script>

    <script>
        function isElementVisible(el) {
            var rect = el.getBoundingClientRect(),
                vWidth = window.innerWidth || document.documentElement.clientWidth,
                vHeight = window.innerHeight || document.documentElement.clientHeight,
                efp = function(x, y) {
                    return document.elementFromPoint(x, y)
                };

            return rect.top;
        }

        $(window).on('load', function() {
            var elementPosition = $('.section1');
            var footer = $('footer');
            console.log('here');
            var d = document.querySelectorAll("div.contentContainer > div");
            var navLi = document.querySelectorAll(".c-menue li");
            var smallest;
            var smallestId;

            if (elementPosition.length) {
                elementPosition = $('.section1').offset();

                footer = $('footer').offset();

                $(window).scroll(function() {

                    if ($(window).scrollTop() > 100) {
                        $('.section1').addClass('fixed');
                        $('.section1').addClass('float_up_50');
                        if ($(window).width() > 767) {
                            $('.course-overview-sections-wrap').addClass('active');
                        }
                    } else {
                        $('.section1').removeClass('fixed');
                        $('.section1').removeClass('float_up_50');

                        if ($(window).width() > 767) {
                            $('.course-overview-sections-wrap').removeClass('active');
                        }

                    }
                    for (i = 0; i < d.length; i++) {
                        if (navLi[i].classList.contains("active")) {
                            navLi[i].classList.remove("active");
                        }
                        if (i == 0) {

                            smallest = isElementVisible(d[i]);
                            smallestId = i;
                        }


                        if (i != 0 && smallest == 0) {

                            smallestId = i;

                        }


                        if (isElementVisible(d[i]) < 0) {
                            if ((isElementVisible(d[i]) * -1) <= d[i].offsetHeight) {

                                // smallest = 0;
                                smallest = 0;

                            } else {

                                smallest *= -1;

                            }

                        }
                        if (isElementVisible(d[i]) < smallest && smallest >= 0) {

                            smallest = isElementVisible(d[i]);
                            smallestId = i;

                        }

                        if (isElementVisible(d[i]) >= 0 && isElementVisible(d[i]) < 1) {

                            smallestId = i;

                        }





                        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                            smallest = 0
                            smallestId = d.length - 1;
                        }




                    }

                    navLi[smallestId].classList.add("active");
                    //d[smallestId].classList.add("active");

                    // console.log(isElementVisible(d[0]) + " : " + 0);
                    //             console.log(isElementVisible(d[1]) + " : " + 1);
                    //                  console.log(isElementVisible(d[2]) + " : " + 2);
                    //console.log( d[0].offsetHeight);
                    // console.log(smallest + " : " + smallestId);

                });
            }
        });
    </script>
    <script>
        $(".drawer-link").click(function(e) {
            var vdata = $(this).data("id");
            $(".drawer[data-id=" + vdata + "]").addClass("open-drawer");
            e.preventDefault();
        });

        $(".close-s").on("click", function(e) {
            $(".drawer").toggleClass("open-drawer");
            e.preventDefault();
        });
    </script>



    <script>
        $('#toggle').click(function() {
            $('.slide-in').toggleClass('show');
        });
    </script>



    <script>
        $("a[href='#top']").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    </script>
