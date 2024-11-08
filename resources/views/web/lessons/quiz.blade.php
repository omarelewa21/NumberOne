<!DOCTYPE html>
<html dir="rtl" lang="ar">

<meta charset="utf-8">

<head>
    <meta name = "viewport" content = "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0" />

    <!--=============== BOXICONS ===============-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">

    <!--=============== CSS ===============-->
    <link rel="stylesheet" href="/assets/web/css/styles.css">


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"
        integrity="sha256-2Pjr1OlpZMY6qesJM68t2v39t+lMLvxwpa8QlRjJroA=" crossorigin="anonymous"></script>

    <title>اختبار عن {{ $lesson->name }}</title>

    <!--=============== HOME ===============-->

    <link rel="stylesheet" href="/assets/web/css/quizz.css">
</head>

<body>


    <!--=============== HEADER ===============-->
    <header class="header" id="header">
        <div class="container">
            <nav class="nav container">
                <a class="navbar-brand  mr-auto " href="/">
                    <img src="/assets/web/img/logo.png" alt="خبير" class="default-logo">
                </a>
                <ul class="ml-auto light-nav">
                    <li><a class="nav-link" href="/">الرئيسية</a></li>
                    <li><a class="nav-link" href="#features">المميزات</a></li>
                    <li><a class="nav-link" href="/my-courses/">دوراتي</a>
                    </li>

                </ul>
                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="/" class="nav__link ">
                                <i class='bx bx-home-alt nav__icon '></i>
                                <span class="nav__name ">الرئيسية</span>
                            </a>
                        </li>

                        <li class="nav__item">
                            <a href="/lesson/{{ $lesson->slug }}" class="nav__link drawer-link" data-id="drawer-01">
                                <i class='bx bx-book-content nav__icon'></i>
                                <span class="nav__name">محتوى الدرس</span>
                            </a>
                        </li>
                        @if (!$lesson->quiz->isEmpty())
                            <li class="nav__item">
                                <a href="/lesson/{{ $lesson->id }}/quiz/ " class="nav__link active-link">
                                    <i class='bx bx-select-multiple nav__icon '></i>
                                    <span class="nav__name">اختبر</span>
                                </a>
                            </li>
                        @endif
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
        </div>
    </header>
    <div class="container">
        <div class="main-f">
            <div class="bordered mt-4" style="margin-top:30px; display:block;"></div>
            <h2>اختبار على {{ $lesson->name }}</h2>
            <fieldset class="main-head">
                <h3>
                    <p class="scorr1">النتيجة</p>
                    <p class="scorr" id="resu"><span id="zero">{{ $questions->count() }} / 0</span></p>
                </h3>

            </fieldset>
            <fieldset class="sub-head">
                <h2> {{ $lesson->name}} <br><small></small></h2>

            </fieldset>
        </div>



        @foreach ($questions as $question)
            <fieldset name = "question.{{ $question->id }}">
                <div class="div-group">{!! $question->question !!}</div>

                <div class="form-group">
                    <div class="radio">
                        <label>
                            <input type="radio" name="answer0" value="{{ $question->answer0 }}" required>
                            {{ $question->answer0 }}
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="answer1" value="{{ $question->answer1 }}" required>
                            {{ $question->answer1 }}
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="answer2" value="{{ $question->answer2 }}" required>
                            {{ $question->answer2 }}
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="answer3" value="{{ $question->answer3 }}" required>
                            {{ $question->answer3 }}
                        </label>
                    </div>
                    <div class="pdfIcon {{ $question->explaination == null ? 'hidden' : '' }}" style="display: none;">
                        <div id="more-info"><a id="myBtn"><img src="/assets/web/img/pdf-f.png"></a></div>

                    </div>
                    <!-- The Modal -->
                    <div id="myModal" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <br>
                            {!! $question->explaination !!}
                        </div>
                    </div>
                </div>
            </fieldset>
        @endforeach

@if($submit == true)
        <form action="/result/submit" id="quizResult" method="POST">
            @csrf
            <input type="hidden" name="lesson_id" value="{{ $lesson->id }}">

            <input type="hidden" name="pageHistory" id="pageHistory" value="0">
            <input type="hidden" name="pageHistory2" id="pageHistory2" value="0">
            <input type="hidden" name="legnth" id="legnth" value="0">
            <input id="kl" class="bttn" type="submit" value="Submit">
        </form>
@else
  <form action="" id="quizResult" method="POST">
            @csrf
            <input type="hidden" name="lesson_id" value="{{ $lesson->id }}">

            <input type="hidden" name="pageHistory" id="pageHistory" value="0">
            <input type="hidden" name="pageHistory2" id="pageHistory2" value="0">
            <input type="hidden" name="legnth" id="legnth" value="0">
        </form>
@endif
    </div>

    <script>
const answers = {!! json_encode($answers) !!};
const elements = document.querySelectorAll(".div-group");
const elements2 = document.querySelectorAll('input[type="radio"]');
const elements4 = document.getElementById("resu");
const pageHistory2 = document.getElementById("pageHistory2");
const legnth = document.getElementById("legnth");

let score = 0;

// Add event listeners to each radio button
elements2.forEach((elem) => {
    elem.addEventListener("change", function(event) {
        var elmentItem = event.target; // Get the clicked radio button
        var item = event.target.value; // Get the value of the selected radio button

        // Show the pdf icon for the question
        elmentItem.closest("fieldset").querySelectorAll(".pdfIcon")[0].style.display = "block";
        
        // Disable all radio buttons in the current fieldset
        const questionFieldset = elmentItem.closest("fieldset");
        const allRadios = questionFieldset.querySelectorAll('input[type="radio"]');
        allRadios.forEach(radio => {
            radio.disabled = true;  // Disable all radio buttons in the current question
        });

        answers.forEach((element) => {
            if (item == element) {
                score++;
                elements4.innerHTML = elements.length + " /" + score;
                pageHistory2.value = score;
                legnth.value = elements.length;

                // Highlight the selected answer as correct
                elmentItem.closest("div.radio").classList.add("rightA");
                showResult(elmentItem.name, questionFieldset, element);
            } else {
                // Highlight the selected answer as incorrect if not already marked as correct
                if (!elmentItem.closest("div.radio").classList.contains("rightA")) {
                    elmentItem.closest("div.radio").classList.add("wrongA");
                }
                showResult(elmentItem.name, questionFieldset, element);
            }
        });
    });
});

// Function to display the result of the question
function showResult(name, question, rightAnswer) {
    var x = question.querySelectorAll('input'); // Get all radio buttons in the current question
    for (var i = 0; i < x.length; i++) {
        // Mark correct answer
        if (x[i].value === rightAnswer) {
            x[i].closest("div.radio").classList.add("rightA");
        } else {
            // Mark incorrect answers
            if (!x[i].closest("div.radio").classList.contains("rightA")) {
                x[i].closest("div.radio").classList.add("wrongA");
            }
        }
    }
}

// Modal handling code
var modal = document.querySelectorAll("#myModal");
var btn = document.querySelectorAll("#myBtn");
var span = document.querySelectorAll(".close");

// When the user clicks the button, open the corresponding modal
Array.prototype.forEach.call(btn, function(btns, index) {
    btns.addEventListener('click', function() {
        for (let i = 0; i < modal.length; i++) {
            if (i == index) {
                modal[i].style.display = "block";
            }
        }
    });
});

// When the user clicks on <span> (x), close the modal
Array.prototype.forEach.call(span, function(spans, index) {
    spans.addEventListener('click', function() {
        for (let i = 0; i < modal.length; i++) {
            if (i == index) {
                modal[i].style.display = "none";
            }
        }
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modal.forEach((modals) => {
        if (event.target == modals) {
            modals.style.display = "none";
        }
    });
};
    </script>

</html>
