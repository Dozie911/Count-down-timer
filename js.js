
const countdownDate = new Date("March 10, 2024 11:30:00").getTime();


const countdownFunction = setInterval(function() {


    const now = new Date().getTime();


    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("DAYS").innerHTML = days;
    document.getElementById("HOURS").innerHTML = hours;
    document.getElementById("MINS").innerHTML = minutes;
    document.getElementById("SECS").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);