var clock = document.getElementById("clock");
var stopwatch = document.getElementById("stopwatch");
var countdown = document.getElementById("countdown");
var time = document.getElementById("stopwatch-display");
var interval;

function clockDisplay() {
    if (clock.style.display == "none") {
        clock.style.display = "block";
    } else {
        clock.style.display = "none";
    }
    stopwatch.style.display = "none";
    countdown.style.display = "none";
}

function stopwatchDisplay() {
    if (stopwatch.style.display == "none") {
        stopwatch.style.display = "block";
    } else {
        stopwatch.style.display = "none";
    }
    clock.style.display = "none";
    countdown.style.display = "none";
}

function countdownDisplay() {
    if (countdown.style.display == "none") {
        countdown.style.display = "block";
    } else {
        countdown.style.display = "none";
    }
    clock.style.display = "none";
    stopwatch.style.display = "none";
}

function clockDisplayInfinite() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + " : " + minutes + " : " + seconds;
    document.getElementById("clock-display").innerHTML = time;
    setTimeout(clockDisplayInfinite, 1000);
}

function startStopwatch() {
    var time = 0;
    var isRunning = false;
    
    document.getElementById("start-btn").onclick = function () {
        if (isRunning) {
            clearInterval(interval);
            isRunning = false;
            document.getElementById("start-btn").innerText = "Start";
        } else {
            interval = setInterval(function () {
                time++;
                var hours = Math.floor(time / 10 / 60 / 60);
                var minutes = Math.floor(time / 10 / 60);
                var seconds = Math.floor(time / 10 % 60);
                var tenths = time % 10;
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                document.getElementById("stopwatch-display").innerHTML = hours + " : " + minutes + " : " + seconds + " : " + tenths;
            }, 100);
            
            isRunning = true;
            document.getElementById("start-btn").innerText = "Stop";
        }
    };
    
    document.getElementById("reset-btn").onclick = function () {
        clearInterval(interval);
        resetStopwatch();
    };
}

function resetStopwatch() {
    document.getElementById("stopwatch-display").innerHTML = "00 : 00 : 00 : 0";
}

function addTime() {
    // Create a new li element
    var li = document.createElement("li");
    // Write time to the li element
    li.innerHTML = time.innerHTML;
}

clock.style.display = "none";
stopwatch.style.display = "none";
countdown.style.display = "none";

clockDisplayInfinite();
