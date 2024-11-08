@auth
    <x-web.layout pageTitle="{{ $course->name }}">
        <section class="app-features courseBooks">
            @if ($subscriber === 'true')
                @foreach ($books as $book)
                    <div class="row">
                        <div class="col-sm-12">
                            <a href="/book/single/{{ $book->slug }}">
                                <div class="card__course card--white">
                                    <div class="card__img" style="background-color: black; height:50px;">
                                        <h3>{{ $book->title }}</h3>
                                    </div>
                                    <div class="card__info">
                                        <div class="card__top">
                                            <h3>{{ $course->category->name }}</h3>
                                        </div>
                                        <div class="card__bottom">
                                            <div class="card__details ">
                                                <span><i class="fa fa-clock"></i> {{ $course->period }} ساعات</span>
                                                <span> <i class="fa fa-graduation-cap"></i> 9898 مشترك</span>
                                                <span class="card__publisher">
                                                    <i class="fa fa-suitcase "></i>
                                                    <a href="#"> معهد الخبراء </a>
                                                </span>
                                            </div>
                                            <div class="progress-bar3">
                                                <h3>
                                                    مستوى التقدم
                                                    <small class="pull-left">{{ $book->progress }} %</small>
                                                </h3>
                                                <div class="progress xs">
                                                    <div class="progress-bar progress-bar-aqua"
                                                        style="width: {{ $book->progress }}%" role="progressbar"
                                                        aria-valuenow="{{ $book->progress }} " aria-valuemin="0"
                                                        aria-valuemax="100">
                                                        <span
                                                            class="sr-only">{{ $book->progress == 100 ? 'تم إنجازه' : 'لم ينجز' }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> <!-- END card__info -->
                            </a>
                        </div><!-- END col-md-3-->

                    </div><!-- END row-->
                @endforeach
            @else
                <div class="container">
                    <h2>خطأ</h2>
                    <p>لم تشترك في هذه الدورة</p>
                    <a href="/course/{{ $course->slug }}/subscribe" class="btn btn-primary">اشترك الآن</a>
                </div>
            @endif
        </section>

    </x-web.layout>

@endauth
