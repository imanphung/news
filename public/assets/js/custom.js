//Calendar
document.addEventListener("DOMContentLoaded",function startTime(){
    var txtcalendar = document.getElementsByClassName("calendar");
    var calendar = new Date();
    var day;
    switch(calendar.getDay()){
        case 1:{
            day = "Thứ hai";
            break;
        }
        case 2:{
            day = "Thứ ba";
            break;
        }
        case 3:{
            day = "Thứ tư";
            break;
        }
        case 4:{
            day = "Thứ năm";
            break;
        }
        case 5:{
            day = "Thứ sáu";
            break;
        }
        case 6:{
            day = "Thứ bảy";
            break;
        }
        case 7:{
            day = "Chủ nhật";
            break;
        }
    }
    var month = calendar.getMonth()+1;
    var hour=calendar.getHours();
    var minute = calendar.getMinutes();
    if(minute<10){
        txtcalendar[0].innerHTML=day +", "+ calendar.getDate() +"/"+month+"/"+ calendar.getFullYear()+", "+hour+":"+"0"+minute+" (GMT+7) ";
    }
    else{
    txtcalendar[0].innerHTML=day +", "+ calendar.getDate() +"/"+month+"/"+ calendar.getFullYear()+", "+hour+":"+minute+" (GMT+7) ";
    }
    var t = setTimeout(function() {
        startTime();
    }, 500);
},false);
