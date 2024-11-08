<x-web.layout pageTitle="معلومات الدفع">
    <section class="blog-style-one" id="blog">
        <div class="container">
            <div class="sec-title text-center">
                <h3>بيانات الدفع</h3>
            </div>

            <form role="form" action="/pay" method= "POST">
                @csrf
                <div class="row my-5">
                    <h4>معلومات الطلب</h4>
                    <table class="bordered mb-4">
                        <tr>
                            <th>اسم الدورة</th>
                            <td>{{ $cart->course->title }}</td>
                        </tr>
                        <tr>
                            <th>قيمة الاشتراك</th>
                            <td>{{ $cart->course->price }} ريال سعودي</td>
                        </tr>

                        </tr>
                    </table>
                    <hr style= "mt-5 width: 50%; margin: auto; ">
                </div>


                <div class="row">
                    <h4>بيانات الدفع</h4>
                    <hr style= "mt-5 width: 50%; margin: auto; ">
                    <div class="paymentFeilds">
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <div class="col-md-8 form-group">
                            <label for = "course_name">اسم صاحب البطاقة<span style="color:red;">
                                    *</span></label>
                            <input type="text" class="form-control" name="holder_name" required>
                        </div>
                        <div class="col-md-8 form-group">
                            <label for = "card_number">رقم البطاقة<span style="color:red;">
                                    *</span></label>
                            <input type="number" class="form-control" name="card_number" required>
                        </div>
                        <div class="row">
                            <h5>تاريخ الانتهاء</h5>
                            <div class="col-md-2 form-group">

                                <label for = "expiry_month">شهر <span style="color:red;">
                                        *</span></label>
                                <input type="number" class="form-control" name="expiry_month" required>
                            </div>
                            <div class="col-md-2 form-group">

                                <label for = "expiry_year">سنة <span style="color:red;">
                                        *</span></label>
                                <input type="text" class="form-control" name="expiry_year" required>
                            </div>
                            <div class="col-md-2 form-group">

                                <label for = "cvv">رقم التأكيد <span style="color:red;">
                                        *</span></label>
                                <input type="text" class="form-control" name="cvv" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 form-group mt-5">
                    <button type="submit" class="btn btn-primary">ادفع الآن</button>
                </div>
        </div>

        </form>
        </div><!-- /.container -->
    </section><!-- /.app-features -->

</x-web.layout>
