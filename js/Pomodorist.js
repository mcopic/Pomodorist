var time;

function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;
    time = setInterval(function() {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            /* if (--timer < 0) {
                 timer = duration;
             }*/
            if (--timer == 0) {
                clearInterval(time);
                var sound = document.getElementById("endSound");
                sound.Play();
            }

        },
        1000);
};

function work() {
    var workMinutes = 60 * 25,
        display = document.getElementById('minutes');
    startTimer(workMinutes, display);
};

function shortBreak() {
    var shortbreakMinutes = 60 * 5,
        display = document.getElementById('minutes');
    startTimer(shortbreakMinutes, display);
};

function longBreak() {
    var longbreakMinutes = 60 * 15,
        display = document.getElementById('minutes');
    startTimer(longbreakMinutes, display);
};

function stopTime() {
    clearInterval(time);
}