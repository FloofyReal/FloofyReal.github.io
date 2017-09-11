// Set the date we're counting down to
var countDownDate1 = new Date("Dec 12, 2017 23:59:59").getTime();
var countDownDate2 = new Date("May 2, 2018 23:59:59").getTime();
// var countDownDate3 = new Date("Dec 12, 2017 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now;
    var distance2 = countDownDate2 - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("dp2").innerHTML = days + " days " 
    + hours + " hours " + minutes + " minutes "
    + seconds + " seconds ";
    

    var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("dp3").innerHTML = days + " days " 
    + hours + " hours " + minutes + " minutes "
    + seconds + " seconds ";
    
    // If the count down is over, write some text 
    if (distance1 < 0) {
        clearInterval(x);
        document.getElementById("dp2").innerHTML = "U R FUCKED BOI";
    }

    if (distance2 < 0) {
        clearInterval(x);
        document.getElementById("dp3").innerHTML = "U R FUCKED BOI";
    }

}, 1000);
