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
        default:{
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

    //format abstract
    
},false);
$(document).ready(function(){
    var str = $('.Username').text();
    if(str.length >8){
        var s = str.substring(0,8)+'...';
        $('.Username').html(s);
    }
    var errLogin = $('.errLogin').text();
    if(errLogin.length){
        $('.wrapper').addClass('fixed');
        $('.login-form-wrap').addClass('show-login');
        $('.login-form-wrap-mobile').addClass('show-login');
        $('.fullscreen-black').addClass('show-fullscreen-black');
        $('.login-wrap').addClass("showborder");
        $('.register-wrap').removeClass("showborder");
        $('.login-wrap h3').css("color","#f0442c");
        $('.register-wrap h3').css("color","rgb(155, 155, 155)");
    }
});

