@php
    $config = App\Models\SiteConfig::firstOrFail();

@endphp
<div class="separator no-border mb135 full-width"></div><!-- /.separator no-border mb135 -->
<footer class="footer">

    <div class="footer-widget-wrapper">
        <div class="container">
            <div class="row masonary-layout">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget about-widget">
                        <a href="/"><img src="/assets/web/img/logo-33.png" alt="خبير" /></a>
                        <p>{!! $config->about !!}</p>
                        <div class="social" style="display: flex; justify-content: space-between;">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-google-plus-g"></a>
                            <a href="#" class="fab fa-instagram"></a>
                        </div><!-- /.social -->
                    </div><!-- /.footer-widget -->
                </div><!-- /.col-md-3 -->
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget contact-widget">
                        <div class="title">
                            <h3>معلومات الاتصال</h3>
                        </div><!-- /.title -->
                        <p><span> هاتف:</span> {{ $config->phone }}</p>
                        <p><span> البريد:</span> {{ $config->email }}</p>
                        <p><span> العنوان:</span> {{ $config->address }}</p>
                    </div><!-- /.footer-widget -->
                </div><!-- /.col-md-3 -->
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget links-widget">
                        <div class="title">
                            <h3>روابط سريعة</h3>
                        </div><!-- /.title -->
                        <ul class="list-inline link-list">
                            <li><a href="/">
                                    <p>الرئيسية</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>المهنيةالرخصة</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>قياس</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>استيب</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>تربوي</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>تخصصات</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>ملزمة</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>خريطةالموقع</p>
                                </a></li><!--
       -->
                            <li><a href="#">
                                    <p>الشروط</p>
                                </a></li><!--
      -->
                            <li><a href="#">
                                    <p>اسئلة شائعة</p>
                                </a></li>
                        </ul><!-- /.link-list -->
                    </div><!-- /.footer-widget -->
                </div><!-- /.col-md-3 -->
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget tweets-widget">
                        <div class="title">
                            <h3>تغريدات</h3>
                        </div><!-- /.title -->
                        <div class="tweets-carousel owl-theme owl-carousel">
                            <div class="item">
                                <div class="single-tweet">
                                    <p><i class="fab fa-twitter"></i> افضل واسهل تطبيق عربي مجاني للكتابة على الصور
                                        ونشرها مباشرة وبكل سهولة الى الانستقرام والفيسبوك و الوتسابة و السناب جات
                                        وغيرها.

                                        برنامج ممتع جداً ويدعم اللغة العربية والانجليزية.</p>
                                    <a href="#">@JohnDoe</a>
                                </div><!-- /.single-tweet -->
                            </div><!-- /.item -->
                            <div class="item">
                                <div class="single-tweet">
                                    <p><i class="fab fa-twitter"></i> افضل واسهل تطبيق عربي مجاني للكتابة على الصور
                                        ونشرها مباشرة وبكل سهولة الى الانستقرام والفيسبوك و الوتسابة و السناب </p>
                                    <a href="#">@JohnDoe</a>
                                </div><!-- /.single-tweet -->
                            </div><!-- /.item -->
                            <div class="item">
                                <div class="single-tweet">
                                    <p><i class="fab fa-twitter"></i> افضل واسهل تطبيق عربي مجاني للكتا جاتبرنامج ممتع
                                        جداً ويدعم اللغة العربية والانجليزية.</p>
                                    <a href="#">@JohnDoe</a>
                                </div><!-- /.single-tweet -->
                            </div><!-- /.item -->
                            <div class="item">
                                <div class="single-tweet">
                                    <p><i class="fab fa-twitter"></i> افضل واسهل تطبيق عربي مجاني للكتابة على الصور
                                        ونشرها مباشرة وبكل سهولة الى الانستقرام والفيسبوك و الوتسابة و السناب جات وغي
                                    </p>
                                    <a href="#">@JohnDoe</a>
                                </div><!-- /.single-tweet -->
                            </div><!-- /.item -->
                        </div><!-- /.tweets-carousel -->
                    </div><!-- /.footer-widget -->
                </div><!-- /.col-md-3 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </div><!-- /.footer-widget-wrapper -->
    <div class="footer-bottom" id="footer-id">
        <div class="container">
            <div class="footer-copyright">
                <div class="float-left left-content">
                    <p>© 2024 فريث خبير <span class="sep">|</span> <a href="/privacy-policy">السياسة و الخصوصية</a>
                        <span class="sep">|</span> <a href="#">خريطة الموقع</a>
                    </p>
                </div><!-- /.float-left left-content -->
                <div class="float-right right-content">
                    <p>جميع الحقوق محفوظة</p>
                </div><!-- /.float-right -->
            </div>
        </div><!-- /.container -->
    </div><!-- /.footer-bottom -->
</footer><!-- /.footer -->

<div class="scrollup"><span class="fas fa-angle-up"></span></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
</script>
<script src="/assets/web/js/jquery.js"></script>

<script src="/assets/web/js/bootstrap.min.js"></script>
<script src="/assets/web/js/popper.min.js"></script>
<script src="/assets/web/js/bootstrap-select.min.js"></script>
<script src="/assets/web/js/jquery.validate.min.js"></script>
<script src="/assets/web/js/owl.carousel.min.js"></script>
<script src="/assets/web/js/isotope.js"></script>
<script src="/assets/web/js/jquery.magnific-popup.min.js"></script>
<script src="/assets/web/js/waypoints.min.js"></script>
<script src="/assets/web/js/jquery.counterup.min.js"></script>
<script src="/assets/web/js/wow.min.js"></script>
<script src="/assets/web/js/jquery.easing.min.js"></script>
<script src="/assets/web/js/swiper.min.js"></script>
<script src="/assets/web/js/jquery.bxslider.min.js"></script>
<script src="/assets/web/js/custom.js"></script>
<script>
    function openPage(pageUrl) {
        window.open(pageUrl);
    }
</script>

</body>

</html>
