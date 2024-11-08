<x-web.layout pageTitle="">
    <section class="app-features">
        <div class="container timerout">
            <h1>ادخل و شارك في المسابقة</h1>

            @if($message)
                <p>{{ $message }}</p>
            @else
                @if($timer)
                    <h2>عداد الزمن</h2>
                    <p>تبدأ عند: {{ $timer['start']->format('H:i') }}</p>
                    <p>تنتهي عند: {{ $timer['end']->format('H:i') }}</p>
                    <div id="countdown"></div>

                    <!-- The button will be displayed when the timer reaches 0 -->
                    <a href="{{ url('web/qwest/quiz/' . $test_no) }}" id="startQuizButton" class="btnstart" style="display: none;">
                        ابدأ
                    </a>
                @endif
            @endif
        </div>
    </section>

    <script>
        @if($timer)
            // Countdown Timer Script
            const endTime = new Date("{{ $timer['end'] }}").getTime();
            const startTime = new Date("{{ $timer['start'] }}").getTime();
            const countdownElement = document.getElementById("countdown");
            const startQuizButton = document.getElementById("startQuizButton");

            const countdown = setInterval(function() {
                const now = new Date().getTime();
                const distanceToStart = startTime - now;
                const distanceToEnd = endTime - now;

                if (distanceToStart > 0) {
                    // Calculate remaining time until the quiz starts
                    const hours = Math.floor((distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distanceToStart % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distanceToStart % (1000 * 60)) / 1000);
                    countdownElement.innerHTML = hours + " ساعة " + minutes + " دقيقة " + seconds + " ثانية حتى تبدأ المسابقة";
                } else if (distanceToEnd > 0) {
                    // If the quiz has started but hasn't ended, show the button
                    clearInterval(countdown);
                    countdownElement.innerHTML = "بدأت المسابقة!";
                    startQuizButton.style.display = "block"; // Show the start quiz button
                } else {
                    // Quiz has ended
                    clearInterval(countdown);
                    countdownElement.innerHTML = "انتهت المسابقة";
                    startQuizButton.style.display = "none"; // Hide the button if the quiz has ended
                }
            }, 1000);
        @endif
    </script>

    <style>
        .timerout {
            text-align: center;
            margin-top: 20px;
        }

        .btnstart {
            border: 0;
            background-color: yellow;
            color: black;
            padding: 10px 20px;
            font-size: 20px;
            cursor: pointer;
            border-radius: 5px;
            text-decoration: none;
        }

        .btnstart:hover {
            background-color: #f0e68c;
        }
    </style>
</x-web.layout>