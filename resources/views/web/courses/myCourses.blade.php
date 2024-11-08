@auth
    <x-web.layout pageTitle="">
        <section class="app-features">
            <div class="container">



                <h3 class="my-5">دوراتي</h3>
                <div class='row'>
                    @foreach ($subscribe as $subscribed)
                        <div class="col-md-4">
                            <div class="card card--white">
                                <div class="item">
                                    <div class="single-blog-post">
                                        <div class="card__img">     <span class="course-type-1">{{ optional($subscribed->course)->price ?? '0' }} ريال</span>

                                            <div class="lazyloaded">
                                                <img src="{{ optional($subscribed->course)->image_url && Str::contains($subscribed->course->image_url, 'https') 
        ? $subscribed->course->image_url 
        : URL::to('storage/' . optional($subscribed->course)->image_url ?? '/assets/web/img/placeholder.jpg') }}"
    alt="{{ optional($subscribed->course)->title ?? 'غير متاح' }}" />

                                            </div><!-- /.img-box -->
                                        </div>
                                        <div class="text-box">
                                            <div class="card__info">
                                                <div class="card__top">
                                                    @if ($subscribed->course && $subscribed->course->category)
    <span>{{ $subscribed->course->category->name }}</span>
@else
    <span>Category not available</span>
@endif
                                                    @if ($subscribed->course)
    <h3>{{ $subscribed->course->title }}</h3>
@else
    <h3>نمبر ون</h3>
@endif
                                                </div>
                                            </div>
                                            <div class="card__bottom">
                                                <div class="card__details ">

                                                    @if ($subscribed->course)
    <span><i class="fa fa-clock"></i> {{ $subscribed->course->period }} ساعة</span>
@else
    <span><i class="fa fa-clock"></i> 0</span>
@endif
                                                    <span> <i class="fa fa-graduation-cap"></i> 9898 مشترك</span>
                                                    <span class="card__publisher">
                                                        <i class="fa fa-suitcase "></i>
                                                        <a
@if ($subscribed->course && $subscribed->course->category)
    <a href="/course-category/{{ $subscribed->course->category->slug }}">
        {{ $subscribed->course->category->name }}
    </a>
@else
    <span>قدرات</span>
@endif
                                                           
                                                    </span>
                                                </div>
                                                <div class="card__publisher__border"></div>
                                            </div>
                                            <div class="card__outcomes">

                                                    <h5>محتويات الدورة</h5>
<div class="short-details" style="width:87%; margin-right: 29px;">
@if ($subscribed->course)
    {{ $subscribed->course->short_description }}
    
@else
    لا يوجد وصف لهذه الدورة 
@endif
</div>
                                                </a>
                                            </div>
                                            <div style="padding-bottom: 0px;"></div>
                                            <div class="card__nav">
                                                <a class="card__more card__more--mobile"
@if ($subscribed->course)
    <a href="/course/{{ $subscribed->course->slug }}">دراسة الدورة</a>
@else
    <a href="#">غير متاح</a>
@endif
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
@endauth
