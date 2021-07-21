let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ' : ' + a.getMinutes() + ' : ' + a.getSeconds();
    document.getElementById('time').innerHTML = time + ' <br>on ' + date;
}, 1000);

var start = document.getElementById('start');
var reset = document.getElementById('reset');

var hours = document.getElementById("hour");
var minutes = document.getElementById("minute");
var seconds = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function () {
    //initialize the variable
    function startInterval() {

        startTimer = setInterval(function () {
            if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
                alert("Time Over");
                stopInterval();
                return;
            }
            else {
                timer();
            }

        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function () {
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer() {
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
        // alert("Hello");
    } else if (seconds.value != 0) {
        seconds.value--;
    } else if (minutes.value != 0 && seconds.value == 0) {
        seconds.value = 59;
        minutes.value--;
    } else if (hours.value != 0 && minutes.value == 0) {
        minutes.value = 60;
        hours.value--;
    }
    return;
}

function stopInterval() {
    clearInterval(startTimer);
}