
var CSRF_TOKEN = $('meta[name="csrf-token"]').attr('content');

function fbq(type, val) {

}

if ($.validator !== undefined) {
    $.extend($.validator.messages, {
        required: "هذا الحقل إلزامي",
        remote: "يرجى تصحيح هذا الحقل للمتابعة",
        email: "ادخلت بريداً الكترونيا غير صالح، يرجى التحقق من عنوان بريدك الإلكتروني",
        url: "رجاء إدخال عنوان موقع إلكتروني صحيح",
        date: "رجاء إدخال تاريخ صحيح",
        dateISO: "رجاء إدخال تاريخ صحيح (ISO)",
        number: "رجاء إدخال عدد بطريقة صحيحة",
        digits: "رجاء إدخال أرقام فقط",
        creditcard: "رجاء إدخال رقم بطاقة ائتمان صحيح",
        equalTo: "رجاء إدخال نفس القيمة",
        extension: "رجاء إدخال ملف بامتداد موافق عليه",
        maxlength: $.validator.format("الحد الأقصى لعدد الحروف هو {0}"),
        minlength: $.validator.format("الحد الأدنى لعدد الحروف هو {0}"),
        rangelength: $.validator.format("عدد الحروف يجب أن يكون بين {0} و {1}"),
        range: $.validator.format("رجاء إدخال عدد قيمته بين {0} و {1}"),
        max: $.validator.format("رجاء إدخال عدد أقل من أو يساوي {0}"),
        min: $.validator.format("رجاء إدخال عدد أكبر من أو يساوي {0}")
    });
}


$(document).on('click', '.delete', function ($e) {
    $e.preventDefault();
    var $this = $(this);
    swal({
        title: "تأكيد الحذف",
        text: $this.attr('data-text') ? $this.attr('data-text') : "هل أنت متأكد؟",
        buttons: {
            confirm: {
                text: "حذف",
                value: true,
                visible: true,
                className: "btn btn-danger",
                closeModal: true
            },
            cancel: {
                text: "الغاء",
                value: null,
                visible: true,
                className: "btn btn-wihte",
                closeModal: true,
            }
        },
    }).then((value) => {
        if (value) {
            window.location.href = $this.attr('href');
        }
    });
});

function reload() {
    location.reload();
}

if (localStorage.getItem('hide-hint-bar') != $('body').attr('data-hint-version')) {
    $('.hint-bar').show();
    // $('.hint-bar').slideToggle();
} else {
    $('.hint-bar').hide();
    $('.trainer-img').removeClass('trainer-img-fix');
    $('header').removeClass('hint-header');
}
if ($('input[data-inputmask]').length > 0) {
    $('[data-inputmask]').inputmask();
}

function dd($v) {
    console.log($v);
}

if ($(window).width() > 767) {
    (new WOW).init();
}
$(document).on('click', '.close-hint', function (e) {
    e.preventDefault();
    $('header').removeClass('hint-header');
    localStorage.setItem('hide-hint-bar', $('body').attr('data-hint-version'));
    $(this).closest('.hint-bar').slideToggle();
    $('.trainer-img').removeClass('trainer-img-fix');
});

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

if (params.iframe == null || typeof params.iframe == undefined) {
    $('.scrollable-area, .fstResults').mCustomScrollbar({
        mouseWheelPixels: 280,
    });
}

$('.courses-list-wrap').mCustomScrollbar({
    autoHideScrollbar: true,
    mouseWheelPixels: 280,
});

$(document).on('click', '.fstControls', function (e) {
    setTimeout(function () {
        $('.fstResults').mCustomScrollbar();
    }, 300);
});

$(document).on('click', '.dropdown-menu-toggle', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).closest('.header-item').find('.dropdown-menu-item').toggleClass('active');
    if ($(this).hasClass('notifications') && $(this).hasClass('active')) {
        $(this).find('.badge').remove();
        $.ajax({
            type: "POST",
            data: {
                _token: CSRF_TOKEN
            },
            url: site_url + '/user/notifications/seen',
            dataType: 'JSON'
        });
    }
});
$(document).on('click', '.mobile-notifications-toggle', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
        $.ajax({
            type: "POST",
            data: {
                _token: CSRF_TOKEN
            },
            url: site_url + '/user/notifications/seen',
            dataType: 'JSON'
        });
    }
    $(this).find('.badge').remove();
    $(this).toggleClass('active');
    $('.mobile-notifications').toggleClass('active');
});

$(document).on('click', '.mobile-fav-toggle', function (e) {
    e.preventDefault();
    $(this).find('.badge').remove();
    $(this).toggleClass('active');
    $('.mobile-favorite').toggleClass('active');
});
$(document).on('click', '.notifications-close', function (e) {
    e.preventDefault();
    $('.mobile-notifications-toggle').toggleClass('active');
    $('.mobile-notifications').toggleClass('active');
});
$(document).on('click', '.drop-item a', function (e) {

    if ($(this).next().hasClass('drop-menu')) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).closest('li').find('.drop-menu').toggleClass('active');
    }
});
$(document).on('click', '.show-pass', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).html('<svg id="Combined_Shape" data-name="Combined Shape" xmlns="http://www.w3.org/2000/svg" width="16" height="12.001" viewBox="0 0 16 12.001"> <path id="Combined_Shape-2" data-name="Combined Shape" d="M8,12A8.036,8.036,0,0,1,2.1,9.123,13.694,13.694,0,0,1,.6,7.2,10,10,0,0,1,.07,6.3a.672.672,0,0,1,0-.6,10,10,0,0,1,.526-.9A13.694,13.694,0,0,1,2.1,2.878,8.036,8.036,0,0,1,8,0a8.038,8.038,0,0,1,5.9,2.878,13.694,13.694,0,0,1,1.5,1.927,10,10,0,0,1,.526.9.668.668,0,0,1,0,.6,10,10,0,0,1-.526.9,13.694,13.694,0,0,1-1.5,1.927A8.038,8.038,0,0,1,8,12ZM8,1.333a6.766,6.766,0,0,0-4.93,2.456A12.358,12.358,0,0,0,1.716,5.529c-.108.167-.2.326-.289.472.081.142.178.3.289.472A12.358,12.358,0,0,0,3.069,8.211,6.766,6.766,0,0,0,8,10.667a6.766,6.766,0,0,0,4.931-2.456,12.29,12.29,0,0,0,1.353-1.739c.107-.166.2-.325.289-.472-.086-.148-.183-.307-.289-.472a12.29,12.29,0,0,0-1.353-1.739A6.766,6.766,0,0,0,8,1.333ZM8,8.667A2.667,2.667,0,1,1,10.667,6,2.67,2.67,0,0,1,8,8.667Zm0-4A1.333,1.333,0,1,0,9.334,6,1.335,1.335,0,0,0,8,4.667Z" transform="translate(0)"/> </svg>');
        $(this).closest('.form-group').find('input').attr('type', 'password');
    } else {
        $(this).addClass('active');
        $(this).html('<svg id="hide_pass" data-name="Component 73 – 1" xmlns="http://www.w3.org/2000/svg" width="24.504" height="24" viewBox="0 0 24.504 24"> <path id="Combined_Shape-2" data-name="Combined Shape-2" d="M303.871,1178.05l-6.164,6.159a1,1,0,0,1-1.414,0h0a1,1,0,0,1,0-1.414l9.6-9.6a1.015,1.015,0,0,1,.167-.167l12.233-12.233a1,1,0,1,1,1.414,1.415l-11.584,11.584Z" transform="translate(-295.496 -1160.502)"/> <path id="Path_17" data-name="Path 17" d="M303.5,1173a3.908,3.908,0,0,0,.054.532l1.839-1.839a1.017,1.017,0,0,1,.167-.167l2.472-2.472a3.948,3.948,0,0,0-.532-.054A4,4,0,0,0,303.5,1173Z" transform="translate(-295.496 -1160.502)"/> <path id="Path_15" data-name="Path 15" d="M296.395,1174.79a20.52,20.52,0,0,0,2.611,3.266h.02l1.411-1.411c-.112-.113-.226-.215-.337-.333a18.577,18.577,0,0,1-2.03-2.61c-.165-.256-.311-.494-.433-.707.126-.218.271-.456.433-.707a18.571,18.571,0,0,1,2.03-2.609c2.3-2.444,4.785-3.683,7.4-3.683a8.16,8.16,0,0,1,2.42.371,1.021,1.021,0,0,0,1.032-.237h0a1,1,0,0,0-.376-1.661A10.225,10.225,0,0,0,307.5,1164c-3.19,0-6.169,1.452-8.855,4.316a20.489,20.489,0,0,0-2.25,2.891,15.091,15.091,0,0,0-.79,1.345.981.981,0,0,0,0,.9A14.979,14.979,0,0,0,296.395,1174.79Z" transform="translate(-295.496 -1160.502)"/> <path id="Path_16" data-name="Path 16" d="M309.5,1173a2,2,0,0,1-3.674,1.09l-1.418,1.42a3.985,3.985,0,1,0,5.6-5.6l-1.419,1.419A1.994,1.994,0,0,1,309.5,1173Z" transform="translate(-295.496 -1160.502)"/> <path id="Path_18" data-name="Path 18" d="M318.606,1171.21a20.568,20.568,0,0,0-2.251-2.891,16.21,16.21,0,0,0-2.544-2.212l-1.436,1.436a13.959,13.959,0,0,1,2.525,2.143,18.365,18.365,0,0,1,2.03,2.61c.16.247.306.485.434.707-.127.219-.273.457-.434.707a18.431,18.431,0,0,1-2.03,2.609c-2.3,2.445-4.785,3.684-7.4,3.684a9.105,9.105,0,0,1-5.561-2.021l-1.423,1.422a11.111,11.111,0,0,0,6.984,2.6c3.19,0,6.169-1.452,8.855-4.317a20.559,20.559,0,0,0,2.251-2.891,14.809,14.809,0,0,0,.788-1.345,1,1,0,0,0,0-.9,14.836,14.836,0,0,0-.788-1.341Z" transform="translate(-295.496 -1160.502)"/> </svg>');
        $(this).closest('.form-group').find('input').attr('type', 'text');
    }
});
$(document).on('click', '.header-icon.menu', function (e) {
    e.preventDefault();
    if ($(window).width() > 767) {
        $('.main-menu').addClass('active');
        $('.home-light').addClass('out');
    } else {
        $('.mobile-menu').addClass('active');
        $('#tidio-chat').hide()
    }
});
$(document).on('click', '.mobile-menu-close', function (e) {
    e.preventDefault();
    $('.mobile-menu').removeClass('active');
    $('#tidio-chat').show()
});
$(document).on('click', '.close-menu', function (e) {
    e.preventDefault();
    $('.main-menu').removeClass('active');
    $('.home-light').removeClass('out');
});

$('form.validate').each(function () {
    var $form = $(this);
    $form.validate({
        errorElement: 'p',
        errorClass: 'error-txt active',
        errorPlacement: function (error, element) {
            element.closest('.form-group').append(error);
        },
        highlight: function (element) {
            $(element).addClass('error');
            if ($(element).closest('.form-group').find('.error-txt').length) {
                $(element).closest('.form-group').find('.error-txt').addClass('active');
            }
            if ($(element).hasClass('input_type_hidden')) {
                $(element).closest('.form-group').addClass('error');
            }
        },
        unhighlight: function (element) {
            $(element).removeClass('error');
            if ($(element).closest('.form-group').find('.error-txt').length) {
                $(element).closest('.form-group').find('.error-txt').removeClass('active');
            }
            if ($(element).hasClass('input_type_hidden')) {
                $(element).closest('.form-group').removeClass('error');
            }
        }
    });
});


$(window).scroll(function () {
    if (!$('body').hasClass('not-fixed')) {
        if ($(window).scrollTop() > 100) {
            $('body').addClass('menu-fixed');
            $('header').addClass('fixed');
            $('.header-search').fadeIn();
        } else {
            $('body').removeClass('menu-fixed');
            $('header').removeClass('fixed');
            if ($('body').hasClass('hide_search'))
                $('.header-search').hide();
        }
    }
});

$(document).on('submit', 'form.ajax', function ($e) {
    $e.preventDefault();
    var $form = $(this),
        $button = $form.find('.submit-button[type="submit"]');
    if ($form.hasClass('validate') && !$form.valid())
        return false;
    $button.attr('disabled', true).append('<div class="btn-loader"></div>');
    $data = $form.serialize();
    if ($button.attr('name'))
        $data[$button.attr('name')] = $button.attr('value');

    $.ajax({
        type: "POST",
        url: $form.attr('action'),
        data: $data,
        success: function ($response) {

            if (!$response.status) {
                toastMessage('error', $response.message ? $response.message : $response.msg);
            }
            if ($response.track) {
                fbq('track', $response.track_event);
            }
            if ($form.attr('data-notify') == 'true') {
                if ($response.status) {
                    toastMessage('success', $response.message ? $response.message : $response.msg);
                } else {
                    toastMessage('error', $response.message ? $response.message : $response.msg);
                }
            }

            if ($response.status && $form.attr('after-submit')) {
                if ($form.attr('after-sumbit-parameters'))
                    window[$form.attr('after-submit')]($form.attr('after-sumbit-parameters'))
                else {
                    window[$form.attr('after-submit')]($form, $response);
                }
            } else if ($response.redirect_url) {
                // console.log($response)
                window.location.href = $response.redirect_url;
            }


            if ($response.status && $form.attr('data-reset') == 'true') {
                $form.find('input:not([name="_token"]),textarea').val('');
            }
        },
        complete: function (XHR) {
            $button.attr('disabled', false).find('.btn-loader').remove();
        },
        error: function ($response) {
            $button.attr('disabled', false).find('.btn-loader').remove();
            refreshRecaptcha()
            $errors = JSON.parse($response.responseText).errors;
            var indx = 1;
            $.each($errors, function (key, value) {
                $form.find('input[name="' + key + '"]').addClass('error');
                toastMessage('error', value, ((indx++) * 3000))
            });
            // $first = $errors[Object.keys($errors)[0]][0];
            // toastMessage('error', $first)
        },
        dataType: 'JSON'
    });
})
if ($('#mobile').length) {
    var input = document.querySelector("#mobile");
    window.intlTelInputGlobals.loadUtils("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/15.1.2/js/utils.js");
    iti = intlTelInput(input, {
        allowExtensions: true,
        autoFormat: false,
        autoHideDialCode: false,
        customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
            return selectedCountryPlaceholder;
        },
        defaultCountry: "auto",
        ipinfoToken: "yolo",
        nationalMode: false,
        separateDialCode: false,
        numberType: "MOBILE",
        preventInvalidNumbers: true,
        initialCountry: "sa",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
        },
    });
    input.addEventListener("countrychange", function () {
        if (iti.getSelectedCountryData().iso2 !== undefined) {
            $('#countryCode').val(iti.getSelectedCountryData().iso2.toUpperCase());
        }
    });
    $("#mobile").on('focusout keyup', function () {
        $this = $(this)
        if (iti.isValidNumber()) {
            $this.removeClass('error')
        } else {
            $this.addClass('error')
        }
    })


}

$('.file-input input[type="file"]').change(function (e) {
    var fileName = e.target.files[0].name;
    $('.file-input span').text(fileName);
});
init_course_carousel();

function init_course_carousel() {
    $('.podcast-carousel').owlCarousel({
        loop: false,
        rewind: false,
        margin: 30,
        nav: true,
        dots: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
        },
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> ', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> '],
    });
    $('.courses-carousel').owlCarousel({
        loop: false,
        rewind: false,
        margin: 30,
        nav: true,
        dots: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
        },
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> ', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> '],
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        }
    });
    $('.consultations-carousel').owlCarousel({
        loop: false,
        rewind: false,
        margin: 30,
        nav: true,
        dots: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 2
            },
        },
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> ', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> '],
        afterAction: function () {
            if (this.itemsAmount > this.visibleItems.length) {
                $('.next').show();
                $('.prev').show();

                $('.next').removeClass('disabled');
                $('.prev').removeClass('disabled');
                if (this.currentItem == 0) {
                    $('.prev').addClass('disabled');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.next').addClass('disabled');
                }

            } else {
                $('.next').hide();
                $('.prev').hide();
            }
        }
    });
}

$('.trainers-carousel').owlCarousel({
    loop: false,
    rewind: false,
    margin: 30,
    nav: true,
    dots: false,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        },
    },
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> ', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> '],
});

$('.testimonial-carousel').owlCarousel({
    loop: true,
    rewind: false,
    margin: 0,
    autoplay: true,
    nav: false,
    dots: false,
    rtl: true,
    items: 1,
    dotsContainer: '.testim-dots'
});
$('.testimonial-carousel-landing').owlCarousel({
    loop: true,
    rewind: true,
    margin: 0,
    nav: true,
    dots: false,
    rtl: true,
    items: 1,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> ', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> '],
});
$(".landing-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    rtl: true,
    items: 1,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> ', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> '],
});
$('.partners-carousel').owlCarousel({
    loop: false,
    rewind: true,
    margin: 30,
    nav: false,
    dots: true,
    rtl: true,
    responsive: {
        0: {
            items: 3
        },
        480: {
            items: 4
        },
        768: {
            items: 5
        },
        1000: {
            items: 6
        },
    },
});
$('.testim-dot').click(function () {
    $('.testim-dot').removeClass('active');
    $(this).addClass('active');
    $('.testimonial-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
});
/*$('.testimonial-carousel').on('translate.owl.carousel', function (e) {
  idx = e.item.index;
  //console.log(idx);
  $('.testim-dot').removeClass('active');
  $('.testim-dot').eq(idx).addClass('active');
});*/
$('.testimonial-carousel').on('change.owl.carousel', function (e) {
    idx = e.item.index - (e.relatedTarget.clones().length / 2);
    //console.log(idx);
    $('.testim-dot').removeClass('active');
    $('.testim-dot').eq(idx - 1).addClass('active');
});
$('.country-list').mCustomScrollbar();

$(document).on('click', '.show-more-cats', function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).closest('.filter-item-content').find('.input-filter-item').fadeIn();
});
$(document).on('click', '.mobile-open-filter', function (e) {
    e.preventDefault();
    $('.courses-filter-wrap').addClass('active');
});
$(document).on('click', '.close-filter, .submit-filter', function (e) {
    e.preventDefault();
    $('.courses-filter-wrap').removeClass('active');
});
$(document).on('click', '.mobile-search-type', function (e) {
    e.preventDefault();
    $('.seach-filters').toggleClass('active');
});
// $(document).on('click', '.remove-cart', function (e) {
//   e.preventDefault();
//   $(this).closest('.cart-item').fadeOut(300, function () {
//     $(this).remove()
//   });
// });
$(document).on('click', '.selected-item-toggle', function (e) {
    e.preventDefault();
    $(this).closest('.select-input-wrap').find('.select-item-list').toggleClass('active');
});
$(document).on('click', '.select-item-list a', function (e) {
    e.preventDefault();
    $('.select-item-list a').removeClass('active');
    $(this).closest('.select-input-wrap').find('.selected-item-toggle').removeClass('placeholder').find('span').text($(this).text());
    $(this).closest('.select-item-list').removeClass('active');
    $(this).closest('.select-input-wrap').find('.expire-value').val($(this).text());
    $(this).addClass('active');
    $(this).closest('.select-input-wrap').find('.account-name').text($(this).attr('data-name'));
    $(this).closest('.select-input-wrap').find('.account-number').text($(this).attr('data-number'));
    $(this).closest('.select-input-wrap').find('.account-iban').text($(this).attr('data-iban'));
    $(this).closest('.select-input-wrap').find('.bank-input').val($(this).attr('data-value'));
    $(this).closest('.select-input-wrap').find('.country_id').val($(this).attr('data-value'));
});


$(document).on('click', '.login', function (e) {
    e.preventDefault();
    if (!is_login) {
        $('#register-login').modal('show');
        $('.mobile-menu').removeClass('active');
    }
    return false;
});
$(document).on('click', '.follow-link', function (e) {
    e.preventDefault();
    if ($('#register-login').length) {
        $('#register-login').modal('show');
        return false;
    }
    var $this = $(this),
        $url = $(this).attr('data-url');
    var $count = parseInt($(this).closest('.trainer-big-item').find('.followers-count b').text());
    if ($(this).hasClass('followed')) {
        $(this).find('.followed-icon').hide();
        $(this).find('.follow-icon').show();
        $(this).removeClass('followed');
        $(this).find('span').text($(this).attr('data-follow'));
        $(this).closest('.trainer-big-item').find('.followers-count b').text($count - 1);
    } else {
        $(this).find('.followed-icon').show();
        $(this).find('.follow-icon').hide();
        $(this).addClass('followed');
        $(this).find('span').text($(this).attr('data-followed'));
        $(this).closest('.trainer-big-item').find('.followers-count b').text($count + 1);
    }
    $.ajax({
        type: "POST",
        data: {
            _token: CSRF_TOKEN
        },
        url: $url,
        dataType: 'JSON'
    });
});
$(document).on('click', '.trainer-item .follow-trainer', function (e) {
    e.preventDefault();
    var $this = $(this),
        $url = $(this).attr('data-url');
    if ($('#register-login').length) {
        $('#register-login').modal('show');
        return false;
    }
    $this.toggleClass('active');
    $.ajax({
        type: "POST",
        data: {
            _token: CSRF_TOKEN
        },
        url: $url,
        dataType: 'JSON'
    });
});
$(document).on('click', '.login-action', function (e) {
    e.preventDefault();
    $('.wizard-wrap.register-section').hide();
    $('.wizard-wrap.verification-section').hide();
    $('.wizard-wrap.login-section').fadeIn();
});
$(document).on('click', '.register-action', function (e) {
    e.preventDefault();
    $('.wizard-wrap.login-section').hide();
    $('.wizard-wrap.register-section').fadeIn();
});
$(document).on('click', '.order-details-wrap .cart-title', function (e) {
    e.preventDefault();
    if ($(window).width() < 768) {
        $('.cart-details-wrap').slideToggle();
    }
});
$(document).on('click', '.course-view-section .comments-wrapper .more-content-items', function (e) {
    e.preventDefault();
    $('#faq .comments-wrapper').find('.comment-item.d-none').hide().removeClass('d-none').fadeIn();
    $(this).remove();
});
// $(document).on('click', '.more-content-items', function(e){
//     e.preventDefault();
//     $(this).closest('.course-overview-section').find('.hidden-item').fadeIn();
//     $(this).remove();
// });
var connectSlider2 = document.getElementById('range-slider');
if ($('.range-slider:not(.crop)').length > 0) {
    noUiSlider.create(connectSlider2, {
        start: [300, 1200],
        direction: 'rtl',
        connect: [false, true, false],
        step: 1,
        range: {
            'min': 0,
            'max': 3500
        }
    });
    connectSlider2.noUiSlider.on('update', function (values, handle) {
        $('.first-val').text(values[0].split('.')[0]);
        $('.last-val i').text(values[1].split('.')[0]);
        $('.price-filter-input').val(values[0].split('.')[0] + ',' + values[1].split('.')[0]);
    });
}

if ($('#otp-countdown').length) {
    var timer2 = "1:00";
    var interval = setInterval(function () {
        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('#otp-countdown').html(minutes + ':' + seconds);
        if (seconds == 0 && minutes == 0) {
            $('#otp-countdown').hide();
            $('.resent-otp').addClass('active');
        }
        timer2 = minutes + ':' + seconds;
    }, 1000);
}

$(window).bind('load', function () {
    var elementPosition = $('.course-overview-nav');
    var elementPosition2 = $('footer');
    if (elementPosition.length) {
        elementPosition = $('.course-overview-nav').offset();
        elementPosition2 = $('footer').offset();
        $(window).scroll(function () {
            if ($(window).scrollTop() > elementPosition.top && $(window).scrollTop() < elementPosition2.top) {
                $('.course-overview-nav').addClass('fixed');
                $('body').addClass('float_up_50');
                if ($(window).width() > 767) {
                    $('.course-overview-sections-wrap').addClass('active');
                }
            } else {
                $('.course-overview-nav').removeClass('fixed');
                $('body').removeClass('float_up_50');

                if ($(window).width() > 767) {
                    $('.course-overview-sections-wrap').removeClass('active');
                }
            }
        });
    }
});
$(document).on('click', '.toggle-course-menu', function (e) {

    $(this).toggleClass('active');
    $(this).closest('.course-menu-wrap').find('.course-drop-menu').toggleClass('active');
});
$(document).on('click', '.change-cover-image', function (e) {
    e.preventDefault();
    $('.cover-img').attr('data-type', 'cover').click();
});
$(document).on('click', '.change-profile-image', function (e) {
    e.preventDefault();
    $('.cover-img').attr('data-type', 'profile').click();
});
$(document).on('click', '.info-change-pass', function (e) {
    e.preventDefault();
    $('.main-info').hide();
    $('.change-pass-form').fadeIn();
});
$(document).on('click', '.change-pass-back', function (e) {
    e.preventDefault();
    $('.change-pass-form').hide();
    $('.main-info').fadeIn();
});
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

$(document).on('click', '.open-course-lessons', function (e) {
    e.preventDefault();
    $(this).addClass('hidden');
    $('.course-view-section').addClass('active');
    $('.course-content-wrap').addClass('active');
});
$(document).on('click', '.close-content', function (e) {
    e.preventDefault();
    $('.open-course-lessons').removeClass('hidden');
    $('.course-view-section').removeClass('active');
    $('.course-content-wrap').removeClass('active');
});

$(".star-select-item").bind('mouseover', function (event) {
    $(this).addClass('hover');
    $(this).prevAll().addClass('hover');
});
$(".star-select-item").bind('mouseleave', function (e) {
    $(this).removeClass('hover');
    $(this).prevAll().removeClass('hover');
});
$(document).on('click', '.star-select-item', function (e) {
    e.preventDefault();
    $('.star-select-item').removeClass('active');
    $(this).addClass('active');
    $(this).prevAll().addClass('active');
    $('.stars-number').val($(this).prevAll().length + 1);
});
$(document).on('click', '.add-reply', function (e) {
    e.preventDefault();
    $(this).closest('.reply-wrap').find('.add-rate-comment').slideToggle();
});

if ($(window).width() < 991) {
    $('.list-link-mobile a').click();
}
if ($('.counter').length) {
    $(window).scroll(testScroll);
    $(document).ready(testScroll);
    var viewed = false;

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        if ($(elem).offset()) {
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        return 0
    }

    function testScroll() {
        if (isScrolledIntoView($(".counter")) && !viewed) {
            viewed = true;
            $('.counter').each(function () {
                $(this).prop('Counter', $(this).attr('data-from')).animate({
                    Counter: $(this).attr('data-to')
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }
}

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        $('.main-menu, .dropdown-menu-toggle, .select-item-list, .dropdown-menu-item, .drop-menu, .drop-item a, .toggle-course-menu, .course-drop-menu').removeClass('active');
    }
});

$(document).click(function (event) {
    $target = $(event.target);
    if (!$target.closest('.user-login-menu').length &&
        $('.user-login-menu').hasClass('active') && !$target.closest('.dropdown-menu-toggle.login').length) {
        $('.user-login-menu').removeClass('active');
        $('.dropdown-menu-toggle.login').removeClass('active');
    }
});
$(document).click(function (event) {
    if ($(window).width() > 768) {
        $target = $(event.target);
        if (!$target.closest('.notifications-menu').length &&
            $('.notifications-menu').hasClass('active') && !$target.closest('.dropdown-menu-toggle.notifications').length) {
            $('.notifications-menu').removeClass('active');
            $('.dropdown-menu-toggle.notifications').removeClass('active');
        }
    }
});
$(document).click(function (event) {
    $target = $(event.target);
    if (!$target.closest('.drop-menu').length &&
        $('.drop-menu').hasClass('active') && !$target.closest('.drop-item a').length) {
        $('.drop-menu').removeClass('active');
        $('.drop-item a').removeClass('active');
    }
});
$(document).click(function (event) {
    $target = $(event.target);
    if (!$target.closest('.course-drop-menu').length &&
        $('.course-drop-menu').hasClass('active') && !$target.closest('.toggle-course-menu').length) {
        $('.course-drop-menu').removeClass('active');
        $('.toggle-course-menu').removeClass('active');
    }
});
$(document).click(function (event) {
    $target = $(event.target);
    if (!$target.closest('.select-item-list.country').length &&
        $('.select-item-list.country').hasClass('active') && !$target.closest('.selected-item-toggle.country').length) {
        $('.select-item-list.country').removeClass('active');
        $('.selected-item-toggle.country').removeClass('active');
    }
});
$(document).click(function (event) {
    $target = $(event.target);
    if (!$target.closest('.select-item-list.city').length &&
        $('.select-item-list.city').hasClass('active') && !$target.closest('.selected-item-toggle.city').length) {
        $('.select-item-list.city').removeClass('active');
        $('.selected-item-toggle.city').removeClass('active');
    }
});

$(document).on('click', '.course-tab-item', function (e) {
    e.preventDefault();
    var $url = $(this).attr('data-href');
    if (!$(this).hasClass('active')) {
        $('.courses-tabs-wrap a').removeClass('active');
        $(this).addClass('active');
        var $cat = $(this).attr('data-cat');
        // get data based on category
        $('.course-loader').show();
        $('.course-tabs-content').html('');
        $.ajax({
            type: "GET",
            url: $url,
            success: function ($html) {
                $('.course-loader').hide();
                $('.course-tabs-content').html($html);
                init_course_carousel();
            },
            dataType: 'HTML'
        });
    }
});

var $html2 = '<div class="col-6 col-lg-4"> <div class="course-item" data-wow-delay="0.2s"> <div class="course-img"> <a href="#"><img src="images/course6.png" /></a> </div> <div class="course-content"> <h3><a href="#">ابتكار المشاريع الريادية المربحة المتقدمة</a></h3> <div class="course-footer"> <div class="price"> <span>‏332 ر.س</span> <span class="dashed">‏532 ر.س</span> </div> <div class="type">للشركات</div> </div> </div> </div> </div> <div class="col-6 col-lg-4"> <div class="course-item " data-wow-delay="0.4s"> <div class="course-img"> <a href="#"><img src="images/course2.png" /></a> </div> <div class="course-content"> <h3><a href="#">ابتكار المشاريع الريادية المربحة المتقدمة</a></h3> <div class="course-footer"> <div class="price"> <span>‏332 ر.س</span> <span class="dashed">‏532 ر.س</span> </div> <div class="type">للشركات</div> </div> </div> </div> </div>'
$(document).on('click', '.course-search-tab-item', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
        $('.courses-tabs-wrap a').removeClass('active');
        $(this).addClass('active');
        var $cat = $(this).attr('data-cat');
        // get data based on category
        $('.course-loader').addClass('show').show();
        $('.course-search-items').html('');
        // replace timeout with ajax request
        setTimeout(function () {
            $('.course-loader').hide().removeClass('show');
            $('.course-search-items').html($html2 + $html2 + $html2 + $html2 + $html2 + $html2 + $html2 + $html2 + $html2 + $html2);
        }, 1000);
    }
});


$(document).on('click', '.more-questions', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.closest('.comments-wrapper').find('.comments-loader').addClass('show').show();
    setTimeout(function () {
        $this.closest('.comments-wrapper').find('.comment-item.d-none').removeClass('d-none');
        $this.closest('.comments-wrapper').find('.comments-loader').remove();
        $this.remove();
    }, 300);
});

// $(document).on('click', '.more-questions', function (e) {
//   e.preventDefault();
//   var $this = $(this);
//   // get data based on category
//   $this.closest('.comments-wrapper').find('.comments-loader').addClass('show').show();
//   // replace timeout with ajax request
//   setTimeout(function () {
//     $this.closest('.comments-wrapper').find('.comments-loader').hide().removeClass('show');
//     $('.comments-items-wrapper').append($html3);
//     $('[data-spy="scroll"]').each(function () {
//       var $spy = $(this).scrollspy('refresh')
//     })
//   }, 1000);
// });

if ($('#rates .comments-wrapper .pagination__next').length > 0) {
    $rates = $('#rates .comments-items-wrapper').infiniteScroll({
        path: '.pagination__next',
        scrollThreshold: false,
        append: '.comment-item',
        history: false,
        status: '.comments-loader',
        button: '.more-content-items.more-rates'
    });
    $rates.on('load.infiniteScroll', function (event, response, path) {
        $('.more-content-items.more-rates').text($(response).find('.more-content-items.more-rates').text())
    });
    $rates.on('last.infiniteScroll', function (event, response, path) {
        $('#rates .comments-loader').remove()
    });
}

$(document).on('click', '.more-files', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.closest('.course-overview-section').find('.bordered-loader').addClass('show').show();
    setTimeout(function () {
        $('#files.course-overview-section .files-items-wrapper .course-file-item.d-none').removeClass('d-none');
        $this.closest('.course-overview-section').find('.bordered-loader').remove();
        $this.remove();
    }, 300);
});

$(document).on('click', '#contents .more-course-items', function (e) {
    e.preventDefault();
    var $this = $(this);
    // get data based on category
    $this.closest('.course-overview-section').find('.bordered-loader').addClass('show').show();
    // replace timeout with ajax request
    setTimeout(function () {
        $this.closest('.course-overview-section').find('.course-content-item.d-none').removeClass('d-none');
        $this.closest('.course-overview-section').find('.bordered-loader').remove();
        $this.remove();
    }, 300);
});


function toastMessage($type, $message) {
    $('.toast_messages').addClass('active');
    var $html = '<div class="toast_message_item"><div class="toast_message ' + $type + '">' +
        $message +
        '</div></div>';
    $('.toast_messages').append($html);
}

$(document).on('click', '.toast_message', function () {
    $(this).closest('.toast_message_item').slideToggle(300, function () {
        $(this).closest('.toast_message_item').remove()
    });
});

setInterval(function () {
    if ($('.toast_message_item').length) {
        $('.toast_message_item').each(function () {
            var $this = $(this);
            setTimeout(function () {
                $this.slideToggle(300, function () {
                    $(this).remove()
                });
            }, 4000)
        });
    } else {
        $('.toast_messages').removeClass('active');
    }
}, 300);

if ($('#make-money .copy-referral').length) {
    var clipboard = new ClipboardJS('.copy-referral', {
        container: document.getElementById('make-money')
    });
}
if ($('#withdraw .copy-referral').length) {
    var clipboard = new ClipboardJS('#withdraw .copy-referral', {});
}

if (typeof clipboard !== "undefined") {
    clipboard.on('success', function (e) {
        toastMessage('success', 'تم نسخ الرابط')
    });

    clipboard.on('error', function (e) {
        toastMessage('error', 'عذراً، متصفحك لا يدعم النسخ')
    });
}

$(document).on('click', '.fav[data-url]', function () {
    var $this = $(this),
        $url = $(this).attr('data-url');
    $this.toggleClass('active');
    var action;
    if ($this.hasClass('active')) {
        action = 'add';
        $this.removeAttr('data-track');
        toastMessage('success', 'تم اضافة الدورة للمفضلة');
        $('.header-item.fav.d-none').removeClass('d-none')

    } else {
        action = 'delete';
        toastMessage('success', 'تم ازالة الدورة من المفضلة');
    }
    $.ajax({
        type: "POST",
        data: {
            _token: CSRF_TOKEN
        },
        url: $url,
        success: function (data) {
            if (action == 'add') {
                $('.notf-items .mCSB_container').prepend(`
    <div class="fav-item" data-id="` + data.id + `">
          <div class="img"><a href="` + data.route + `"><img src="` + img(data.img) + `"/></a></div>
          <div class="content">
            <a href="` + data.route + `" class="title">` + data.title + `</a>
            <div class="price">
              <span>` + data.price + ` ر.س</span>
                <span>‏` + data.old_price + ` ر.س</span>
            </div>
            <a href="` + site_url + '/user/cart/course/add/' + data.id + `" class="add-cart">
              <span>اضف للسلة</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20.164" viewBox="0 0 22 20.164">
                <path id="shopping-cart"
                      d="M21.1,25.009H3.895l-.256-2.848a.9.9,0,0,0-.9-.823H.9a.9.9,0,1,0,0,1.807h1.01L2.952,34.722a3.476,3.476,0,0,0,1.3,2.355,2.738,2.738,0,1,0,4.733.753h4.945a2.739,2.739,0,1,0,2.576-1.807H6.417a1.678,1.678,0,0,1-1.543-1.017l14.439-.849a.9.9,0,0,0,.824-.683l1.836-7.343A.9.9,0,0,0,21.1,25.009ZM6.411,39.695a.932.932,0,1,1,.932-.932A.933.933,0,0,1,6.411,39.695Zm10.1,0a.932.932,0,1,1,.932-.932A.933.933,0,0,1,16.507,39.695Zm2.038-7.3L4.631,33.21l-.574-6.394H19.939Z"
                      transform="translate(0 -21.338)" fill="#FF6498"></path>
              </svg>
            </a>
          </div>
        </div>`)
            } else {
                $('.notf-items .mCSB_container .fav-item[data-id=' + data.id + ']').remove();
            }
        },
        dataType: 'JSON'
    });
});
var oldVideoHtml = $('.play-video').closest('.course-video').html();

$('.play-video').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.attr('data-id')) {
        $this.closest('.course-video').html('<div class="embed-responsive embed-responsive-16by9">\n' +
            '  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + $this.attr('data-id') + '?rel=0&autoplay=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
            '</div>')
    } else {
        $this.closest('.course-video').hide();
        $('.video-player-wrap').show();
        player = new Vimeo.Player($('#vimeo-iframe'));

        Promise.all([player.getVideoWidth(), player.getVideoHeight(), player.play()]).then(function (dimensions) {
            var ratio = $('.video-player-wrap').width() / dimensions[0];
            // var width = dimensions[0]*ratio;
            var height = dimensions[1] * ratio;
            $('.video-player-wrap:not(.quiz-area)').css('height', height + 'px')
        });
        player.on('ended', function (data) {
            $this.closest('.course-video').show();
            $('.video-player-wrap').hide();
        });

        player.play();

    }
});
$('.add-rate-comment #rate_button').on('click', function ($e) {
    $e.preventDefault();
    var $form = $(this).closest('form');
    if ($form.find('input[name="rate"]').val()) {
        $.ajax({
            type: "POST",
            data: $form.serialize(),
            url: $form.attr('action'),
            dataType: 'JSON'
        });
        $form.closest('.add-rate-comment').slideUp()
        $('.thanks-for-rating').slideDown()
    }
});
$('.add-rate-comment.question #ask_btn').on('click', function ($e) {
    $e.preventDefault();
    var $form = $(this).closest('form');
    if ($form.find('input[name="text"]').val()) {
        $.ajax({
            type: "POST",
            data: $form.serialize(),
            url: $form.attr('action'),
            dataType: 'JSON'
        });
        $form.closest('.add-rate-comment.question').slideUp()
        $('.thanks-for-rating').slideDown()
    }
});
$('.iti__country-list').mCustomScrollbar();


////////////Counter Down//////////

function reChangeValues(futureTime) {
    // Time left between future and current time in Seconds
    var timeLeft = Math.floor((futureTime - new Date().getTime()) / 1000);
    // Days left = time left / Seconds per Day
    var days = Math.floor(timeLeft / 86400);
    // 86400 seconds per Day
    timeLeft -= days * 86400;
    // Hours left = time left / Seconds per Hour
    var hours = Math.floor(timeLeft / 3600) % 24;
    // 3600 seconds per Hour
    timeLeft -= hours * 3600;
    // Minutes left = time left / Minutes per Hour
    var min = Math.floor(timeLeft / 60) % 60;
    // 60 seconds per minute
    timeLeft -= min * 60;
    // Seconds Left
    var sec = timeLeft % 60;

    $('.count-item.seconds').text(sec + ((sec <= 10 && sec >= 3) ? 'ثوان' : 'ثانية'));
    $('.count-item.minutes').text(min + ((sec <= 10 && sec >= 3) ? 'دقائق' : 'دقيقة'));
    $('.count-item.hours').text(hours + ' ساعة');
    var humanized_day = 'يوم';
    if (days == 2)
        humanized_day = 'يومين';
    if (days >= 3 && days <= 10)
        humanized_day = 'أيام';
    $('.count-item.days').text(days + humanized_day);
}

function countDownTimer(date) {
    var futureTime = new Date(date).getTime();
    reChangeValues(futureTime);
    setInterval(function () {
        reChangeValues(futureTime);
    }, 1000);
}

var _counter = $('.count-items').first();
$('#countDown').each(function () {
    _time = $(this).attr('data-time');
    countDownTimer(_time);
});

$(document).ready(function () {
    if ($('#rate_course2').length) {
        $(".rating-stars input:radio").attr("checked", false);
        $('.rating-stars input').click(function () {
            $(".rating-stars span").removeClass('checked');
            $(this).parent().addClass('checked');
            $(this).parent().prevAll().addClass('active');
            $(this).parent().nextAll().removeClass('active');
        });
        $(".rating-stars span").mouseover(function () {
            $(this).addClass('active');
            $(this).prevAll().addClass('active');
        });
        $(".rating-stars span").mouseout(function () {
            if ($(".rating-stars span").hasClass('checked')) {
                $(".rating-stars span.checked").nextAll().removeClass('active');
            } else {
                $(".rating-stars span").removeClass('active');
            }
        });
        $(document).on('submit', '#rate_course2 form', function ($e) {
            $e.preventDefault();
            var $form = $(this), $button = $form.find('.submit-button[type="submit"]');
            if (!$form.valid()) {
                return false;
            }
            $button.attr('disabled', true).append('<div class="btn-loader"></div>');
            $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function ($response) {

                    if ($response.status != 'error') {
                        if (window['after_rate'] ?? '') {
                            after_rate($response);
                        }
                        $('#rate_course2').modal('hide');
                        $('.modal-backdrop').removeClass('show');

                        if ($form.find('input[name="rate"]:checked').val() >= 3) {
                            if ($('#rating_discount .course_discount_content').length) {
                                $('#rating_discount').modal('show');
                            } else {
                                toastMessage('success', $response.msg ? $response.msg : 'تم التقيم بنجاح')
                            }
                        } else {
                            $('#low_rating_msg').modal('show');
                        }
                    } else {
                        toastMessage('error', 'الرجاء اضف التقيم بشكل صحيح')
                    }
                },
                complete: function (XHR) {
                    $button.attr('disabled', false).find('.btn-loader').remove();
                },
                error: function ($response) {
                    $button.attr('disabled', false).find('.btn-loader').remove();
                    $.each(JSON.parse($response.responseText).errors, function ($name, $error) {
                        swal($error[0], {
                            buttons: {
                                cancel: "Close",
                            },
                        });
                        return false;
                    });
                },
                dataType: 'JSON'
            });
            return false;
        });
    }
});
$(document).on('click', '#courses_duscount .change-courses', function (e) {
    e.preventDefault();
    var $this = $(this), $icon = $this.find('svg');
    $icon.addClass('loadding')
    $this.attr('disabled', true);
    $.ajax({
        type: 'POST',
        url: $this.attr('data-url'),
        data: {_token: CSRF_TOKEN},
        success: function ($response) {
            if ($response) {
                $('#courses_duscount .modal-content').html($($response).find('.modal-content').html());
            }
        },
        complete: function (XHR) {
            $icon.removeClass('loadding')
            $this.attr('disabled', false);
        },
        error: function ($response) {
            $icon.removeClass('loadding')
            $this.attr('disabled', false);
        },
        dataType: 'HTML'
    });
});
$(document).on('click', '#free_courses_end .change-courses', function (e) {
    e.preventDefault();
    var $this = $(this), $icon = $this.find('svg');
    $icon.addClass('loadding')
    $this.attr('disabled', true);
    $.ajax({
        type: 'POST',
        url: $this.attr('data-url'),
        data: {_token: CSRF_TOKEN},
        success: function ($response) {
            if ($response) {
                $('#free_courses_end .course_discount_content').html($($response).find('.course_discount_content').html()).find('.discount_product_added').remove();
            }
        },
        complete: function (XHR) {
            $icon.removeClass('loadding')
            $this.attr('disabled', false);
        },
        error: function ($response) {
            $icon.removeClass('loadding')
            $this.attr('disabled', false);
        },
        dataType: 'HTML'
    });
});
$(document).on('click', '#rating_discount .change-courses', function (e) {
    e.preventDefault();
    var $this = $(this), $icon = $this.find('svg');
    $this.closest('.course_discount_content').addClass('discard')
    $('#rating_discount .course_discount_content').addClass('d-none');
    var $rand = Math.floor(Math.random() * $('#rating_discount .course_discount_content:not(.discard)').length);
    $('#rating_discount .course_discount_content:not(.discard):eq(' + $rand + ')').removeClass('d-none');
    $('#rating_discount .course_discount_content.discard').removeClass('discard');
});

function hide_modal($id) {
    $('#' + $id).modal('hide');
}

$('[data-track]').on('click', function () {
    var $event = $(this).attr('data-track');
    // fbq('track', $event);
});

function delay(callback, ms) {
    var timer = 0;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}


function is_ios() {
    return ([
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)) ? 1 : 0;
}


if (localStorage.getItem("checkBrowser") === null) {
    var data = {};
    if (window.ApplePaySession) {
        var promise = ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
        promise.then(function (canMakePayments) {
            if (canMakePayments) {
                data = {is_ios: 1, can_pay: 1};
            } else {
                data = {is_ios: is_ios(), can_pay: 0};
            }
            $.ajax({
                type: "POST",
                data: data,
                url: '/apple-device',
                dataType: 'JSON'
            });
        });
    } else {
        data = {is_ios: is_ios(), can_pay: 0};
        $.ajax({
            type: "POST",
            data: data,
            url: '/apple-device',
            dataType: 'JSON'
        });
    }
    localStorage.setItem("checkBrowser", 1);
}


$(document).on('click', '.faq-question h3', function (e) {
    e.preventDefault();
    var $this = $(this).closest('.faq-question');
    $this.toggleClass('active');
});
$(document).on('click', '.qusestions-category h3', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).closest('.qusestions-category').find('.faq-cats-wrapper').toggleClass('active');
});
$(document).on('click', '.help-toggle', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.help-wrapper').toggleClass('active');
    if ($(window).width() < 767) {
        $('body').toggleClass('faq-active');
    }
});
$(document).on('click', '.faq-cat-item', function (e) {
    e.preventDefault();
    $('.faq-cat-item').removeClass('active');
    if ($(window).width() < 767) {
        $(this).addClass('active');
    }
    $("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, 100);
    scrollCheck();
});

var $faq_cat = $('.qusestions-category');
var $footer = $('footer');
if ($faq_cat.length) {
    $faq_cat = $('.qusestions-category').offset();
    $footer = $('footer').offset();
    $(window).scroll(function () {
        if ($(window).width() > 767) {
            if ($(window).scrollTop() > $faq_cat.top && $(window).scrollTop() < $footer.top) {
                $('.qusestions-category').addClass('fixed');
            } else {
                $('.qusestions-category').removeClass('fixed');
            }
        }
    });
}

$(document).on('click', '.help-actions .next', function (e) {
    e.preventDefault();
    var $next = $('.help-items').find('.help-item.active').next();
    if ($next.length) {
        $('.help-item').hide().removeClass('active');
        $next.fadeIn().addClass('active');
        $('.help-actions .dot-item').removeClass('active');
        $('.help-actions .dot-item').eq($next.index()).addClass('active');
        if ($('.help-items').find('.help-item.active').next().length == 0) {
            $('.help-actions .btns .next').addClass('hide-help').text('اغلاق')
        } else {
            $('.help-actions .btns .next').removeClass('hide-help').text('التالي')
        }
    }
});
$(document).on('click', '.help-actions .prev', function (e) {
    e.preventDefault();
    var $prev = $('.help-items').find('.help-item.active').prev();
    if ($prev.length) {
        $('.help-item').hide().removeClass('active');
        $prev.fadeIn().addClass('active');
        $('.help-actions .dot-item').removeClass('active');
        $('.help-actions .dot-item').eq($prev.index()).addClass('active');
        if ($('.help-items').find('.help-item.active').next().length == 0) {
            $('.help-actions .btns .next').addClass('hide-help').text('اغلاق')
        } else {
            $('.help-actions .btns .next').removeClass('hide-help').text('التالي')
        }
    }
});
$(document).on('click', '.hide-help', function (e) {
    e.preventDefault();
    $(this).text('التالي').removeClass('hide-help')
    $('.help-toggle').removeClass('active');
    $('.help-wrapper').removeClass('active');
});
$(window).scroll(function () {
    scrollCheck();
});
$(document).ready(function () {
    scrollCheck();
});

function scrollCheck() {
    if ($(window).width() > 767) {
        if (isScrolledIntoView('.faq-package:eq(0)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(0)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(1)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(1)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(2)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(02)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(3)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(3)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(4)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(4)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(5)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(5)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(6)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(6)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(7)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(7)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(8)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(8)').addClass('active');
        }
        if (isScrolledIntoView('.faq-package:eq(9)')) {
            $('.faq-cat-item-wrap a').removeClass('active');
            $('.faq-cat-item-wrap a:eq(9)').addClass('active');
        }
    }
}

function isScrolledIntoView(elem) {
    if ($(elem).length) {
        var hT = $(elem).offset().top,
            hH = $(elem).outerHeight(),
            wH = $(window).height(),
            wS = $(window).scrollTop();
        var $next = $(elem).next();
        var $cond = wS > (hT);
        if ($next.length) {
            $next = $(elem).next().offset().top;
            $cond = wS > (hT) && wS < $next
        }
        if ($cond) {
            return true;
        } else {
            return false;
        }
    }

}

function youtube_parser(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        return match[2];
    } else {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
}

$('body').on('click', '.inline-add-cart:not(.added-cart),.add-to-cart:not(.added-cart)', function (e) {


    if ($(this).hasClass('just-link')) {
        return;
    }

    e.preventDefault();
    var $this = $(this);

    if ($(this).hasClass('free-consult')) {
        if (is_login) {
            e.preventDefault();
        } else {
            let href = $(this).attr('href');
            $('#redirect_after_login').val(href);
            $('#register-login').modal('show');
            return;
        }

        $('#consult-modal').modal('show');

        $('.consult-modal-content').html('جاري جلب المواعيد المتاحة...');

        $.ajax({
            type: "GET",
            url: $this.data('consult-dates'),
            dataType: 'HTML'
        }).done(function (response) {
            // console.log(response)
            try {
                const json = JSON.parse(response)
                if (json.redirect != null && typeof json.redirect !== undefined) {
                    window.location.href = json.redirect;
                }
                return;
            } catch (err) {

            }
            $('.consult-modal-content').html(response);

        });

        return;
    }

    if ($(this).hasClass('free-product')) {
        if (is_login) {
            e.preventDefault();
        } else {
            let href = $(this).attr('href');
            $('#redirect_after_login').val(href);
            $('#register-login').modal('show');
            return;
        }

        var $this = $(this);
        $.ajax({
            type: "GET",
            url: $this.attr('href'),
            dataType: 'JSON'
        }).done(function (response) {
            // Swal.fire({
            //     icon: 'success',
            //     text: 'تم إضافة المنتج الرقمي لحسابك!',
            //     confirmButtonText: 'إغلاق',
            //     footer: '<a href="'+user_digital_products_url+'">الإنتقال الى المنتجات الرقمية</a>'
            // })
            if (response.status) {
                toastMessage('success', "تم اضافة المنتج الرقمي .. <a style=\"text-decoration: underline !important;color:#fff;\" href=\"" + user_digital_products_url + "\">شاهد المنتج</a>");
                $this.hide();

                location.reload();

            } else {
                toastMessage('error', "حصل خطاء اثناء اضافة المنتج");
            }
        });
        return;
    }

    if ($(this).hasClass('free-path')) {
        if (is_login) {
            e.preventDefault();
        } else {
            let href = $(this).attr('href');
            $('#redirect_after_login').val(href);
            $('#register-login').modal('show');
            return;
        }

        var $this = $(this);
        $.ajax({
            type: "GET",
            url: $this.attr('href'),
            dataType: 'JSON'
        }).done(function (response) {
            // Swal.fire({
            //     icon: 'success',
            //     text: 'تم إضافة المنتج الرقمي لحسابك!',
            //     confirmButtonText: 'إغلاق',
            //     footer: '<a href="'+user_digital_products_url+'">الإنتقال الى المنتجات الرقمية</a>'
            // })
            if (response.status) {
                toastMessage('success', "تم اضافة المسار .. <a style=\"text-decoration: underline !important;color:#fff;\" href=\"" + user_paths_url + "\">شاهد المسار</a>");
                $this.hide();
                if (response.redirect) {
                    window.location.href = response.redirect;
                }
            } else {
                toastMessage('error', "حصل خطاء اثناء اضافة المنتج");
            }
        });
        return;
    }


    $this.find('svg').replaceWith('<img src="/assets/images/loader.png" style="height: 20px;width: 22px;position: absolute;left: 10px;top: 50%;transform: translateY(-50%);">')
    // alert($('#upsellingModalContainer').length );
    // if ($this.attr('upselling-url')) {
    //     $.ajax({
    //         type: "GET",
    //         url: $this.attr('upselling-url'),
    //         success: function (data, textStatus, jqXHR) {
    //             var ct = jqXHR.getResponseHeader("content-type") || "";
    //             if (ct.indexOf('json') > -1) {
    //                 const obj = JSON.parse(data);
    //                 toastMessage('success', obj.message);
    //             } else {
    //                 $('#upsellingModalContainer').html(data)
    //                 $('#courses_duscount').modal('show')
    //             }
    //         },
    //         dataType: 'HTML'
    //     });
    // }
    $.ajax({
        type: "GET",
        url: $this.attr('href'),
        dataType: 'JSON'
    }).done(function (response) {
        // if (!$this.attr('upselling-url')) {
            toastMessage('success', "تم اضافة " + response.title + " للسلة");
            if (response.upselling) {
                $('#upsellingModalContainer').html(response.upselling)
                $('#courses_duscount').modal('show')
            }
            // $('#add_cart_modal').modal('show');
            // $('#cart_add_title').text("تم اضافة " + response.title);
        // } else {
        // }
    });
    $this.fadeOut("slow", function () {
        if ($(this).hasClass('revers-text')) {
            $this.html('<svg version="1.1" width="24" height="24" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\
                                    <g fill="#fff">\
                                        <g>\
                                            <g>\
                                                <path d="M399,394H137c-11,0-20-9-20-20c0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0-0.5c0-11,9-20,20-20h162c11,0,20-9,20-20s-9-20-20-20H151.9L128.3,95.4l-0.1-0.4C121.1,40.8,74.6,0,20,0C9,0,0,9,0,20s9,20,20,20c34.5,0,63.9,25.7,68.5,59.9l23.8,218.4C91.5,327.8,77,348.7,77,373c0,0.2,0,0.3,0,0.5c0,0.2,0,0.3,0,0.5c0,33.1,26.9,60,60,60h8.2c-2,6-3.2,12.4-3.2,19c0,32.5,26.5,59,59,59s59-26.5,59-59c0-6.6-1.1-13-3.2-19h86.3c-2,6-3.2,12.4-3.2,19c0,32.5,26.5,59,59,59s59-26.5,59-59C458,420.5,431.5,394,399,394z M201,472c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19C220,463.5,211.5,472,201,472z M399,472c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19C418,463.5,409.5,472,399,472z"></path>\
                                                <path d="M496.3,109.5c-10.8-2.4-21.5,4.4-23.8,15.2l-34.6,156.9c-4.1,18.5-20.1,31.4-38.9,31.4c-11,0-20,9-20,20s9,20,20,20c18.2,0,35.9-6.3,50-17.7c14.1-11.4,24-27.4,27.9-45.1l34.6-156.9C513.9,122.5,507.1,111.8,496.3,109.5z"></path>\
                                            </g>\
                                        </g>\
                                    </g>\
                          <path fill="#fff" d="M285.9,184.4c14.3-1,27.7-7.9,36.7-19.1c0.2-0.3,0.5-0.6,0.7-0.9l81-113.3c6.4-9,4.3-21.5-4.6-27.9c-9-6.4-21.5-4.3-27.9,4.6l-80.6,112.7c-2.7,3.1-6.1,3.8-7.9,3.9c-1.9,0.1-5.5-0.1-8.6-3.1c-0.1-0.1-0.2-0.1-0.2-0.2l-44.9-41.3c-8.1-7.5-20.8-7-28.3,1.2s-7,20.8,1.2,28.3l44.8,41.2c9.6,9,22.3,14.1,35.3,14.1C283.7,184.5,284.8,184.5,285.9,184.4z"></path>\
                            </svg>' +
                '<span>توجه للسلة</span>\n');
        } else {
            $this.html('<span>توجه للسلة</span>\n' +
                '<svg version="1.1" width="24" height="24" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\
                                    <g fill="#fff">\
                                        <g>\
                                            <g>\
                                                <path d="M399,394H137c-11,0-20-9-20-20c0-0.2,0-0.3,0-0.5c0-0.2,0-0.3,0-0.5c0-11,9-20,20-20h162c11,0,20-9,20-20s-9-20-20-20H151.9L128.3,95.4l-0.1-0.4C121.1,40.8,74.6,0,20,0C9,0,0,9,0,20s9,20,20,20c34.5,0,63.9,25.7,68.5,59.9l23.8,218.4C91.5,327.8,77,348.7,77,373c0,0.2,0,0.3,0,0.5c0,0.2,0,0.3,0,0.5c0,33.1,26.9,60,60,60h8.2c-2,6-3.2,12.4-3.2,19c0,32.5,26.5,59,59,59s59-26.5,59-59c0-6.6-1.1-13-3.2-19h86.3c-2,6-3.2,12.4-3.2,19c0,32.5,26.5,59,59,59s59-26.5,59-59C458,420.5,431.5,394,399,394z M201,472c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19C220,463.5,211.5,472,201,472z M399,472c-10.5,0-19-8.5-19-19s8.5-19,19-19s19,8.5,19,19C418,463.5,409.5,472,399,472z"></path>\
                                                <path d="M496.3,109.5c-10.8-2.4-21.5,4.4-23.8,15.2l-34.6,156.9c-4.1,18.5-20.1,31.4-38.9,31.4c-11,0-20,9-20,20s9,20,20,20c18.2,0,35.9-6.3,50-17.7c14.1-11.4,24-27.4,27.9-45.1l34.6-156.9C513.9,122.5,507.1,111.8,496.3,109.5z"></path>\
                                            </g>\
                                        </g>\
                                    </g>\
                          <path fill="#fff" d="M285.9,184.4c14.3-1,27.7-7.9,36.7-19.1c0.2-0.3,0.5-0.6,0.7-0.9l81-113.3c6.4-9,4.3-21.5-4.6-27.9c-9-6.4-21.5-4.3-27.9,4.6l-80.6,112.7c-2.7,3.1-6.1,3.8-7.9,3.9c-1.9,0.1-5.5-0.1-8.6-3.1c-0.1-0.1-0.2-0.1-0.2-0.2l-44.9-41.3c-8.1-7.5-20.8-7-28.3,1.2s-7,20.8,1.2,28.3l44.8,41.2c9.6,9,22.3,14.1,35.3,14.1C283.7,184.5,284.8,184.5,285.9,184.4z"></path>\
                            </svg>');
        }

        $this.addClass('added-cart');
        $this.attr('href', site_url + '/user/cart');
        $this.show();
    });
    if ($('.main-header .header-items .header-item .header-icon.cart .badge').length) {
        $('.header-icon.cart .badge').text(parseInt($('.main-header .header-items .header-item .header-icon.cart .badge').text()) + 1);
    } else {
        $('.header-icon.cart').append(`<span class="badge">1</span>`)
    }
})

$(document).on('click', '.filter-item-wrap .title', function (e) {
    e.preventDefault();
    $(this).find('.toggle-filter-item').toggleClass('active');
    $(this).closest('.filter-item-wrap').find('.filter-item-content').slideToggle();
});
if (localStorage.getItem("log-device") === null) {
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function (data) {
        $.ajax({
            type: "POST",
            data: data,
            url: '/log-device',
            dataType: 'JSON'
        });
    });
    localStorage.setItem("log-device", 1)
}

function refreshRecaptcha() {
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(function () {
            grecaptcha.execute(_recaptcha_site_key, {
                action: 'register'
            }).then(function (token) {
                document.querySelector('#_recaptcha').value = token;
            });
        });
    }
}

/*  Updates 11/06/2022  */
var a = 0;
$(window).scroll(function () {
    if ($('.general-stats-section').length) {
        var oTop = $('.general-stats-item').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.general-stats-item .counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-to'),
                    countFrom = $this.attr('data-from');
                $({
                    countNum: countFrom
                }).animate({
                        countNum: countTo
                    },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(numberWithCommas(Math.floor(this.countNum)));
                        },
                        complete: function () {
                            $this.text(numberWithCommas(this.countNum));
                        }
                    });
            });
            a = 1;
        }
    }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*  End Updates 11/06/2022  */
/*  Updates 11/06/2022  */
$('.new-home-slider').owlCarousel({
    margin: 0,
    nav: false,
    dots: true,
    rtl: true,
    items: 1,
});
/*  End Updates 11/06/2022  */


$(document).on('click', '.collapse-item-header', function (e) {
    e.preventDefault();
    let $hasClass = $(this).closest('.collapse-item-wrap').hasClass('active')
    if ($(this).hasClass('lessons'))
        $('.collapse-item-wrap').removeClass('active');

    if ($hasClass)
        $(this).closest('.collapse-item-wrap').removeClass('active');
    else
        $(this).closest('.collapse-item-wrap').addClass('active');
    $('.course-content-items').mCustomScrollbar("update");
});


$(window).on('load', function (e) {
    if (typeof grecaptcha != 'undefined' && $('#_recaptcha').length) {
        refreshRecaptcha()
    }
})

var $badges = $('.js-progress-badge')
    , $window = $(window)

$badges.on('click', function () {
    incrementBadge($(this))
})

function incrementBadge($progressBadge) {

    var $badge = $progressBadge.find('.badge')
        , $badgeValue = $progressBadge.find('.js-badge-value')
        , badgeValueTarget = $badgeValue.data('target')
        , fillingFromEmpty = $badge.hasClass('badge--empty')
        , $starburst = $progressBadge.find('.js-starburst')

    $progressBadge.removeClass('badge--static')
    $progressBadge.addClass('is-filling')

    if (fillingFromEmpty) {
        $progressBadge.addClass('is-filling-from-empty')
    }

    $progressBadge.on('animationend', function () {
        $badge.addClass('badge--static badge--filled')
        $badge.removeClass('badge--empty')
    })

    $starburst.on('animationend', function () {
        $progressBadge.removeClass('is-filling is-filling-from-empty')
    })

}

$('.tooltip-icon').tooltip();

var $slider_padding = 40;
if ($(window).width() > 991) {
    $slider_padding = 0;
}

$('.courses-packages-carousel').owlCarousel({
    stagePadding: $slider_padding,
    loop: false,
    rewind: false,
    margin: 30,
    nav: true,
    dots: false,
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        },
    },
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> ', '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"> <path id="Shape" d="M2.414,7l5.293,5.293a1,1,0,1,1-1.414,1.414l-6-6a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,7.707,1.707Z" transform="translate(0)" fill="#fff"/> </svg> '],
    afterAction: function () {
        if (this.itemsAmount > this.visibleItems.length) {
            $('.next').show();
            $('.prev').show();

            $('.next').removeClass('disabled');
            $('.prev').removeClass('disabled');
            if (this.currentItem == 0) {
                $('.prev').addClass('disabled');
            }
            if (this.currentItem == this.maximumItem) {
                $('.next').addClass('disabled');
            }

        } else {
            $('.next').hide();
            $('.prev').hide();
        }
    }
});

$(".package-tooltip").mouseenter(function () {
    $(this).closest('.course-package-details').find('.tooltip-items').addClass('active');
}).mouseleave(function () {
    $(this).closest('.course-package-details').find('.tooltip-items').removeClass('active');
});
$(window).on('load', function () {
    $([document.documentElement, document.body]).animate({scrollTop: $("body").offset().top + Math.floor(Math.random() * 5)});
});