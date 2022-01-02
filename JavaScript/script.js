function showtime()
{
    var a_p ="";
    var today = new Date(); //object
    var current_hour = today.getHours();
    var current_minute = today.getMinutes();
    var current_second = today.getSeconds();

    if(current_hour < 12){
        a_p = "<span>AM</span>"
    }
    else{
        a_p = "<span>PM</span>"
    }

    if(current_hour == 0) // by default JS dats object/ method starts from 0 to 23
    {
        current_hour = 12;
    }
    
    if(current_hour > 12){
        current_hour = current_hour - 12;
    }
    current_hour = checktime(current_hour);
    current_minute = checktime(current_minute);
    current_second = checktime(current_second);

    document.getElementById("clock-large").innerHTML = current_hour + ":" + current_minute + ":" + current_second + " " + a_p;
}
    function checktime(i)
    {
        if(i < 10){ //if value is less than 10 then its add zero in prefix
            i = "0" + i;
        }
        return i;
    }
setInterval(showtime);