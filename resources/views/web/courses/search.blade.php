<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--=============== BOXICONS ===============-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

    <!--=============== CSS ===============-->
    <link rel="stylesheet" href="/assets/web/css/styles.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <title>بحث | {{ request()->keyword }}</title>
    <link rel="stylesheet" href="/assets/web/css/quizz.css">

</head>

<body>
    <!--=============== HEADER ===============-->
    <header class="header" id="header">
        <nav class="nav container">
            <a class="navbar-brand  mr-auto " href="/">
                <img src="/assets/web/img/logo.png" alt="خبير" class="default-logo">
            </a>
            <div class="main-header d-flex">
                <form class="inline-search-form header-search" action="/search/course">
                    @csrf
                    <input type="hidden" name="search_id" value="{{ $book->id }}">
                    <input type="text" placeholder="بحث" name="keyword" autocomplete="off">
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path id="Combined_Shape" data-name="Combined Shape"
                                d="M18.292,19.707l-3.678-3.678a9.009,9.009,0,1,1,1.414-1.414l3.678,3.678a1,1,0,0,1-1.415,1.415ZM2,9a7,7,0,0,0,11.87,5.024,1,1,0,0,1,.154-.154A7,7,0,1,0,2,9Z"
                                fill="#1A43A8"></path>
                        </svg>
                    </button>
                </form>
            </div>
            <ul class="ml-auto light-nav">
                <li><a class="nav-link" href="/">الرئيسية</a></li>
                <li><a class="nav-link" href="/#features">المميزات</a></li>
                <li><a class="nav-link" href="/my-courses/">دوراتي</a>
                </li>

            </ul>
            </div>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">

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

    <div class="slide-in from-left">
        <div class="slide-in-content">

            <form class="inline-search-form header-search " method="get" action="test.html" style="display: block;">
                <input type="text" placeholder="بحث" name="q" autocomplete="off">
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path id="Combined_Shape" data-name="Combined Shape"
                            d="M18.292,19.707l-3.678-3.678a9.009,9.009,0,1,1,1.414-1.414l3.678,3.678a1,1,0,0,1-1.415,1.415ZM2,9a7,7,0,0,0,11.87,5.024,1,1,0,0,1,.154-.154A7,7,0,1,0,2,9Z"
                            fill="#1A43A8"></path>
                    </svg>
                </button>
            </form>
        </div>
    </div>


    <!--=============== HOME ===============-->

    <section class="course-overview-sections-wrap">
        <nav class="section1" id="#sec1">
            <div class="c-menue">
                <ul class="navigation">
                    <li class="nav-item"> <span>نتيجة بحث عن "{{ request()->keyword }}"</span>
                    </li>

                </ul>

            </div>
        </nav>
        <div class="contentContainer">
            @foreach ($lessons as $lesson)
                <ul>
                    <li> - <a href="/lesson/{{ $lesson->slug }}">{{ $lesson->name }}</a></li>
                </ul>
            @endforeach

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
