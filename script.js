var clock = document.getElementById("clock")
var stopwatch = document.getElementById("stopwatch")
var countdown = document.getElementById("countdown")

function clockDisplay() {
    if (clock.style.display == "none") {
        clock.style.display = "block";
        console.log("clockDisplay");
    } else {
        clock.style.display = "none";
        console.log("clockDisplay-none");
    }
    stopwatch.style.display = "none";
    countdown.style.display = "none";
}

function clockDisplayInfinite() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + " : " + minutes + " : " + seconds;
    document.getElementById("clock").innerHTML = time;
    setTimeout(clockDisplay, 1000);
}

function stopwatchDisplayInfinite() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + " : " + minutes + " : " + seconds;
    document.getElementById("stopwatch").innerHTML = time;
    setTimeout(stopwatchDisplay, 1000);
    clock.style.display = "none";
    stopwatch.style.display = "block";
    countdown.style.display = "none";
}

function countdownDisplayInfinite() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + " : " + minutes + " : " + seconds;
    document.getElementById("countdown").innerHTML = time;
    setTimeout(countdownDisplay, 1000);
    clock.style.display = "none";
    stopwatch.style.display = "none";
    countdown.style.display = "block";
}

clock.style.display = "none";
stopwatch.style.display = "none";
countdown.style.display = "none";