<x-web.layout pageTitle="اشترك">
    <section class="blog-style-one" id="blog">
        <div class="container">
            <div class="sec-title text-center">
                <h3>الاشتراك</h3>
            </div>
            @auth
                <form role="form" action="/subscribe/cart" method= "POST">
                    @csrf
                    <div class="row">
                        <div class="col-md-8 form-group">
                            <input type="text" class="form-control" name="course_id" value="{{ $course->id }}" hidden
                                readonly>
                            <label for = "course_name">اسم المادة<span style="color:red;">
                                    *</span></label>
                            <input type="text" class="form-control" name="course_name" value="{{ $course->title }}"
                                readonly>

                        </div>
                        <div class="col-md-8 form-group">
                            <label for = "course_name">السعر<span style="color:red;">
                                    *</span></label>
                            <input type="text" class="form-control" name="course_name" value="{{ $course->price }}"
                                readonly>

                        </div>
                        <div class="col-md-8 form-group">
                            <button type="submit" class="btn btn-primary">الانتقال إلى الدفع</button>
                        </div>
                </form>
            @endauth
        </div><!-- /.container -->
    </section><!-- /.app-features -->

</x-web.layout>
