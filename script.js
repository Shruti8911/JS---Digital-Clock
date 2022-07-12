setInterval(showTime, 100);
// Create a function “showTime”.
function showTime(){
    // Create an instance of the Date object.
    const time= new Date(); 
    // Date object get “hours”, “minute” and “seconds”.
    let hour = time.getHours(); 
    let min=time.getMinutes();
    let sec=time.getSeconds();
    //Set AM/PM depending on the hour value. The Date object works on 24-hour format so we change hour back to 1 when it get’s larger than 12. The AM/PM also changes according to that.
    am_pm = " AM ";
    if(hour > 12){
        hour -= 12;
        am_pm= " PM ";
    }
    if(hour == 0){
        hr = 12;
        am_pm = " AM ";
    }
    //Now make a string using the same HH:MM:SS format changing the hour, minute, and second value with the values, we get from Date object methods.
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    document
    .getElementById("clock").innerHTML = currentTime;
}
showTime();
