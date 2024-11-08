<x-web.layout pageTitle="">
    <section class="app-features">
        <div class="container">
            <h3 class="my-5">قسم ({{ $category->name }}) </h3>
            <div class="row">
                @foreach ($courses as $course)
                    <div class="col-md-4">
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
                                                <span>{{ $course->category->name }}</span>
                                                <h3>{{ $course->title }}</h3>
                                            </div>
                                        </div>
                                        <div class="card__bottom">
                                            <div class="card__details ">

                                                <span><i class="fa fa-clock"></i> {{ $course->period }} ساعة</span>
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
                                                {{ $course->short_description }}
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
                @endforeach
            </div>
        </div>
    </section>

</x-web.layout>
