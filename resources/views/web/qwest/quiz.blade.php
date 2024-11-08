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
<div id="feedbackModal" class="feedback-modal">
    <div class="feedback-content" style="    background-color:yellow;">
        <div id="feedbackMessage" class="feedback-message"></div>
    </div>
</div>


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
                    <p class="scorr" id="resu"><span id="zero">{{ $quizzes->count() }} / 0</span></p>
                </h3>

            </fieldset>
            <fieldset class="sub-head">
                <h2> {{ $lesson->name}}<br><small></small></h2>

            </fieldset>
        </div>



        @foreach ($quizzes as $question)
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

        <form action="/qwestresult/submit" id="quizResult" method="POST">
            @csrf
            <input type="hidden" name="lesson_id" value="{{ $lesson->id }}">
            <!-- New hidden fields -->
            <input type="hidden" name="test_no" id="test_no" value="{{$qwests->first()->test_no}}"> <!-- You can set this dynamically as needed -->
            <input type="hidden" name="count" id="count" value="0"> <!-- Will be set in JS -->
            <input type="hidden" name="userid" value="{{ auth()->user()->id }}"> <!-- Assuming you have user authentication -->
            
            <input type="hidden" name="pageHistory" id="pageHistory" value="0">
            <input type="hidden" name="pageHistory2" id="pageHistory2" value="0">
            <input type="hidden" name="legnth" id="legnth" value="0">
            <input id="kl" class="bttn" type="submit" value="Submit">
        </form>
  <form action="" id="quizResult" method="POST">
            @csrf
            <input type="hidden" name="lesson_id" value="{{ $lesson->id }}">
            
            <input type="hidden" name="lesson_id" value="{{ $lesson->id }}">
            <input type="hidden" name="test_no" id="test_no" value="{{$qwests->first()->test_no}}">
            <input type="hidden" name="count" id="count" value="0">
            <input type="hidden" name="userid" value="{{ auth()->user()->id }}">
            
            <input type="hidden" name="pageHistory" id="pageHistory" value="0">
            <input type="hidden" name="pageHistory2" id="pageHistory2" value="0">
            <input type="hidden" name="legnth" id="legnth" value="0">
        </form>
    </div>

<script>
    const answers = {!! json_encode($answers) !!};
    const elements = document.querySelectorAll(".div-group");
    const elements2 = document.querySelectorAll('input[type="radio"]');
    const elements4 = document.getElementById("resu");
    const pageHistory2 = document.getElementById("pageHistory2");
    const legnth = document.getElementById("legnth");
    const countInput = document.getElementById("count"); // Select the hidden input for count
    const feedbackModal = document.getElementById("feedbackModal"); // Feedback modal
    const feedbackMessage = document.getElementById("feedbackMessage"); // Feedback message text

    let score = 0;

    elements2.forEach((elem) => {
        elem.addEventListener("change", function(event) {
            var elmentItem = event.target;
            var item = event.target.value;
            var currentQuestion = elmentItem.closest("fieldset"); // Get the current question context

            // Show the pdf icon
            currentQuestion.querySelectorAll(".pdfIcon")[0].style.display = "block";
            let correctAnswerFound = false; // To check if the correct answer is found

            // Loop through the answers for the current question
            answers.forEach((element) => {
                if (item == element) {
                    score++;
                    elements4.innerHTML = elements.length + " /" + score;
                    pageHistory2.value = score;
                    legnth.value = elements.length;
                    countInput.value = score; // Update the hidden input with the score

                    elmentItem.closest("div.radio").classList.add("rightA"); // Highlight selected correct answer
                    correctAnswerFound = true; // Mark that the correct answer was found

                    // Show excellent feedback
                    showFeedback(" احسنت رائع", "excellent");
                }
            });

            // If the answer was wrong, highlight the correct one
            if (!correctAnswerFound) {
                // Disable all radio buttons in the current question
                disableCurrentQuestionRadios(currentQuestion);
                // Show the correct answer
                showCorrectAnswer(currentQuestion, answers);
                // Show try again feedback
                showFeedback("حاول مرة ثانية", "try-again");
            } else {
                // Disable all radio buttons in the current question
                disableCurrentQuestionRadios(currentQuestion);
            }
        });
    });

    // Function to disable all radio buttons in the current question
    function disableCurrentQuestionRadios(question) {
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radioButton) => {
            radioButton.disabled = true; // Disable each radio button
        });
    }

    // Function to show the correct answer
    function showCorrectAnswer(question, answers) {
        const radioButtons = question.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radioButton) => {
            if (answers.includes(radioButton.value)) {
                radioButton.closest("div.radio").classList.add("rightA"); // Highlight the correct answer
            } else {
                radioButton.closest("div.radio").classList.add("wrongA"); // Mark the wrong answer
            }
        });
    }

    // Function to show feedback message in a modal
    function showFeedback(message, className) {
        feedbackMessage.textContent = message; // Set the message text
        feedbackModal.style.display = "block"; // Show the feedback modal
        feedbackModal.className = `feedback-modal ${className}`; // Add the appropriate class for styling
    }

   

    // Close the feedback modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == feedbackModal) {
            feedbackModal.style.display = "none"; // Hide the feedback modal
        }
    };

    // Get the modal
    var modal = document.querySelectorAll("#myModal");

    // Get the button that opens the modal
    var btn = document.querySelectorAll("#myBtn");

    // Get the <span> element that closes the modal
    var span = document.querySelectorAll(".close");

    // When the user clicks the button, open the modal
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
    
    // Function to show feedback message in a modal
    function showFeedback(message, className) {
        feedbackMessage.textContent = message; // Set the message text
        feedbackModal.style.display = "block"; // Show the feedback modal
        feedbackModal.className = `feedback-modal ${className}`; // Add the appropriate class for styling
        
        // Automatically fade out after a delay
        setTimeout(() => {
            feedbackModal.classList.add("fade-out"); // Add fade-out class
            setTimeout(() => {
                feedbackModal.style.display = "none"; // Hide the feedback modal after fade-out
                feedbackModal.classList.remove("fade-out"); // Remove fade-out class for next use
            }, 500); // Match with animation duration
        }, 2000); // Display the message for 2 seconds
    }

    

    // Close the feedback modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == feedbackModal) {
            feedbackModal.classList.add("fade-out"); // Add fade-out class
            setTimeout(() => {
                feedbackModal.style.display = "none"; // Hide the feedback modal after fade-out
                feedbackModal.classList.remove("fade-out"); // Remove fade-out class for next use
            }, 500); // Match with animation duration
        }
    };
</script>
<style>
.feedback-modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0, 0, 0, 0.5); /* Black background with transparency */
    animation: fadeIn 0.5s; /* Animation for fading in */
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.feedback-content {
    position: absolute; /* Position it */
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Translate to center */
    padding: 20px; /* Some padding */
    background-color: white; /* White background */
    border-radius: 8px; /* Rounded corners */
    text-align: center; /* Center the text */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Shadow effect */
    animation: slideIn 0.5s; /* Animation for sliding in */
}

@keyframes slideIn {
    from { transform: translate(-50%, -60%); }
    to { transform: translate(-50%, -50%); }
}

.feedback-message {
    font-size: 24px; /* Font size for the message */
    
}

.close-feedback {
    cursor: pointer; /* Pointer on hover */
    font-size: 30px; /* Close button size */
    color: #aaa; /* Close button color */
    float: right; /* Float to the right */
}

/* Animation for fading out */
.fade-out {
    animation: fadeOut 0.5s forwards; /* Fade out animation */
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
</style>
</html>
