<x-web.layout pageTitle="" :categories="$categories">
    <section class="blog-style-one" id="blog" style="padding-top:90px;">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="padding-bottom: 50px;">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/assets/web/img/slider/01.webp" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/assets/web/img/slider/02.webp" class="d-block w-100" alt="...">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container">
            <div class="sec-title text-center">
                <h2>منصة نمبر ون التعليمية</h2>
                <p>
                <h3>منصة رقمية لتطوير الطلاب و تحسين  مستوياتهم</h3>
                <h3> والتدريب على اختبارات قياس</h3>
                </p>
            </div><!-- /.sec-title -->
            <div class="blog-carousel owl-theme owl-carousel">
                @foreach ($courses as $course)
                    <div class="card card--white">
                        <div class="item">
                            <div class="single-blog-post">
                                <div class="card__img"> <span class="course-type-1">{{ $course->price }} ريال</span>
                                    <div class="lazyloaded">
                                        @if ($course->image_url)
                                            <img src="{{ Str::contains($course->image_url, 'https') ? $course->image_url : URL::to('storage/' . $course->image_url) }}"
                                                alt="{{ $course->title }}" />
                                        @else
                                            <img src="/assets/web/img/placeholder.jpg" alt="{{ $course->title }}" />
                                        @endif

                                    </div><!-- /.img-box -->
                                </div>
                                <div class="text-box">
                                    <div class="card__info">
                                        <div class="card__top">
                                            @isset($course->category)
                                                <span>{{ $course->category->name }}</span>
                                            @endisset
                                            <h3>{{ $course->title }}</h3>
                                        </div>
                                    </div>
                                    <div class="card__bottom">
                                        <div class="card__details ">

                                            <span><i class="fa fa-clock"></i> {{ $course->period }} ساعة</span>
                                            <span> <i class="fa fa-graduation-cap"></i> 9898 مشترك</span>
                                            <span class="card__publisher">
                                                @isset($course->category)
                                                    <i class="fa fa-suitcase "></i>
                                                    <a href="/course-category/{{ $course->category->slug }}">
                                                        {{ $course->category->name }} </a>
                                                </span>
                                            @endisset
                                        </div>
                                        <div class="card__publisher__border"></div>
                                    </div>
                                    <div class="card__outcomes">
                                        <a href="/course/{{ $course->slug }}">
                                            <h5>محتويات الدورة</h5>
                                            <div class="short-details" style="width:92%; margin-right: 25px;">
                                            {{ $course->short_description }}
                                            </div>
                                        </a>
                                    </div>
                                    <div style="padding-bottom: 0px;"></div>
                                    <div class="card__nav">
                                        <a class="card__more card__more--mobile"
                                            href="/course/{{ $course->slug }}">المزيد</a>
                                        <a class="card__start  add-course-id "
                                            href="/course/{{ $course->slug }}/subscribe"> شراء </a>
                                    </div>
                                    <div style="padding-bottom: 180px;"></div>
                                </div><!-- /.text-box -->
                            </div><!-- /.single-blog-post -->
                        </div><!-- /.col-md-4 -->

                    </div>
                @endforeach
            </div><!-- /.blog-carousel -->
        </div><!-- /.container -->
    </section><!-- /.blog-style-one -->


    <div class="separator no-border mt35 full-width"></div><!-- /.separator no-border mt135 -->
    <section class="blog-style-two" id="course" style="padding-top:90px;">
        <div class="sec-title text-center">
            <h2>دورات نمبر ون التعليمية</h2>
        </div><!-- /.sec-title -->

        @php $featuredCourses = \App\Models\CourseCategory::has('courses')->latest()->take(5)->get(); @endphp
        @if ($featuredCourses != null)
            @foreach ($featuredCourses as $category)
                <div class="container">
                    <h3 class="my-5">قسم ({{ $category->name }}) </h3>
                    @php $categoryCourses = $category->courses; @endphp
                    @foreach ($categoryCourses as $course)
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card card--white">
                                    <div class="item">
                                        <div class="single-blog-post">
                                            <div class="card__img"> <span class="course-type-1">{{ $course->price }}
                                                    ريال</span>
                                                <div class="lazyloaded">
                                                    @if ($course->image_url)
                                                        <img src="{{ Str::contains($course->image_url, 'https') ? $course->image_url : URL::to('storage/' . $course->image_url) }}"
                                                            alt="{{ $course->title }}" />
                                                    @else
                                                        <img src="/assets/web/img/placeholder.jpg"
                                                            alt="{{ $course->title }}" />
                                                    @endif
                                                </div><!-- /.img-box -->
                                            </div>
                                            <div class="text-box">
                                                <div class="card__info">
                                                    <div class="card__top">
                                                        <span>{{ $course->category->name }}</span>
                                                        <h3>{{ $course->title }}</h3>
                                                    </div>
                                                </div>
                                                <div class="card__bottom">
                                                    <div class="card__details ">

                                                        <span><i class="fa fa-clock"></i> {{ $course->period }}
                                                            ساعة</span>
                                                        <span> <i class="fa fa-graduation-cap"></i> 9898 مشترك</span>
                                                        <span class="card__publisher">
                                                            <i class="fa fa-suitcase "></i>
                                                            <a href="/course-category/{{ $course->category->slug }}">
                                                                {{ $course->category->name }} </a>
                                                        </span>
                                                    </div>
                                                    <div class="card__publisher__border"></div>
                                                </div>
                                                <div class="card__outcomes">
                                                    <a href="/course/{{ $course->slug }}">
                                                        <h5>محتويات الدورة</h5>
                                                        <div class="short-details" style="width:87%; margin-right: 29px;">{{ $course->short_description }}</div>
                                                    </a>
                                                </div>
                                                <div style="padding-bottom: 0px;"></div>
                                                <div class="card__nav">
                                                    <a class="card__more card__more--mobile"
                                                        href="/course/{{ $course->slug }}">المزيد</a>
                                                    <a class="card__start  add-course-id " href="#"> شراء </a>
                                                </div>
                                                <div style="padding-bottom: 180px;"></div>
                                            </div><!-- /.text-box -->
                                        </div><!-- /.single-blog-post -->
                                    </div><!-- /.col-md-4 -->

                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endforeach
        @endif
    </section>
    <div class="separator no-border mt100 full-width"></div><!-- /.separator no-border mt135 -->


    <section class="app-features" id="features">
        <div class="container">
            <div class="sec-title text-center">
                <h2>تميز معنا</h2>
                <p>
                <h2>واجعل رحلتك التعليمية عميقة ومكثفة من خلال محتونا الاحترافي</h2>
                <h2>وفرنا لك أفضل المميزات لعملية تعليمية فعالة</h2>
                </p>
            </div><!-- /.sec-title -->
            <div class="app-features-carousel owl-theme owl-carousel">
                <div class="item">
                    <div class="single-app-features text-center">
                        <i class="flaticon-paint-palette-and-brush"></i>
                        <h5>متابعة مستمرة</h5>
                        <p>
                        <h6>من خلال خدمات الدعم المقدمة خلال<h6>رحلتك التعليمية معنا</h6>
                            </p>
                            <div class="line"></div><!-- /.line -->
                    </div><!-- /.single-app-features -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="single-app-features text-center">
                        <i class="flaticon-secure-shield"></i>
                        <h3>محتوى معد باحترافية</h3>
                        <p>
                        <h6>دورات مصممة بواسطة خبراء<h6>محترفين ومتخصصين</h6>
                            </p>
                            <div class="line"></div><!-- /.line -->
                    </div><!-- /.single-app-features -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="single-app-features text-center">
                        <i class="flaticon-cloud-computing"></i>
                        <h3>تدريب مكثف وأنت في بيتك</h3>
                        <p>
                        <h6>محتوى شامل يغنيك عن مختلف<h6>المراجع و المصادر</h6>
                            </p>
                            <div class="line"></div><!-- /.line -->
                    </div><!-- /.single-app-features -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="single-app-features text-center">
                        <i class="flaticon-paint-palette-and-brush"></i>
                        <h3>نماذج محاكية للاختبارات</h3>
                        <p>
                        <h6>تطبيقات محاكية عملية من خلال<h6>نماذج حديثة للاختبار</h6>
                            </p>
                            <div class="line"></div><!-- /.line -->
                    </div><!-- /.single-app-features -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="single-app-features text-center">
                        <i class="flaticon-secure-shield"></i>
                        <h3>تطبيق عملي</h3>
                        <p>
                        <h6>محاكي للاختبارات المقدمة<h6>من المركز</h6>
                            </p>
                            <div class="line"></div><!-- /.line -->
                    </div><!-- /.single-app-features -->
                </div><!-- /.item -->
                <div class="item">
                    <div class="single-app-features text-center">
                        <i class="flaticon-cloud-computing"></i>
                        <h3>مذكرة الكترونية</h3>
                        <p>
                        <h6>تسهل لك الوصول الى المعلومةو استرجاعها<h6>بالبحث السريع </h6>
                            </p>
                            <div class="line"></div><!-- /.line -->
                    </div><!-- /.single-app-features -->
                </div><!-- /.item -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><!-- /.app-features -->





</x-web.layout>
