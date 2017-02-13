function startTime(){
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    curr_second = checkTime(curr_second);
    curr_minute = checkTime(curr_minute);
    curr_hour = checkTime(curr_hour);
    var curr_time = convertTime(curr_hour) +":"+ curr_minute +":"+ curr_second;
    console.log(curr_time);
    document.getElementById("time").innerHTML = curr_time;  
}

var myTimer = setInterval(startTime, 500);

function convertTime(curr_hour){
    if (curr_hour >= 12){
        return(curr_hour-12);
    }
    else {
        return(curr_hour);
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}