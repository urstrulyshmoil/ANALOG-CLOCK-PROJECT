// Initialize variables
var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

// Set the interval to update the clock every second
setInterval(function() {
    d = new Date(); // Get the current date and time

    // Get the current time in seconds, minutes, and hours
    second = d.getSeconds() * 6; // 360 degrees / 60 seconds = 6 degrees per second
    minute = (d.getMinutes() + d.getSeconds() / 60) * 6; // Smooth minute hand movement (accounts for seconds)
    hour = ((d.getHours() % 12) + d.getMinutes() / 60) * 30; // Smooth hour hand movement (accounts for minutes)

    // Apply the transformations to rotate the clock hands
    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
}, 1000);
