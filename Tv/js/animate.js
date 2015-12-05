/**
 * Created by Administrator on 2015/12/3.
 */
$(document).ready(function(){

    $("#te").mouseenter(function(){
        $(this).css({"background-color":"#EE3123","color":"#fff"});
    })
    $("#te").mouseleave(function(){
        $(this).css({"background-color":"#fff","color":"#EE3123"});
    })

    $(".middle").mouseenter(function(){
        $(this).stop().animate({"left":114},1000)
            .find(".cover").stop().fadeOut(500)
            .parent().siblings().find(".cover")
            .stop().fadeIn(500);
        $(".right").stop().animate({"left":884},1000);

    })
    $(".right").mouseenter(function(){
        $(this).stop().animate({"left":228},1000)
            .find(".cover").stop().fadeOut(500)
            .parent().siblings().find(".cover")
            .stop().fadeIn(500);
        $(".middle").stop().animate({"left":114},1000);
    })
    $(".left").mouseenter(function(){
        $(".middle").stop().animate({"left":770},1000).find(".cover")
            .stop().fadeIn(500);
        $(this).find(".cover").stop().fadeOut(500);
        $(".right").stop().animate({"left":884},1000).find(".cover")
            .stop().fadeIn(500);
    });

    var timer = null;
    var num = 0;
    clearInterval(timer);
    timer = setInterval(autoplay,2000);
    function autoplay(){
        num > 2 ? num = 0 : num;
        if(num == 0){
            $(".middle").stop().animate({"left":114},1000)
                .find(".cover").stop().fadeOut(500)
                .parent().siblings().find(".cover")
                .stop().fadeIn(500);
            $(".right").stop().animate({"left":884},1000);
        }else if(num == 1){
            $(".right").stop().animate({"left":228},1000)
                .find(".cover").stop().fadeOut(500)
                .parent().siblings().find(".cover")
                .stop().fadeIn(500);
            $(".middle").stop().animate({"left":114},1000);
        }else{
            $(".middle").stop().animate({"left":770},1000).find(".cover")
                .stop().fadeIn(500);
            $(".left").find(".cover").stop().fadeOut(500);
            $(".right").stop().animate({"left":884},1000).find(".cover")
                .stop().fadeIn(500);
        }
        num++;
    }
    $(".content").mouseenter(function(){
        clearInterval(timer);
    })

    $(".content").mouseleave(function(){
        timer = setInterval(autoplay,2000);
    })
});

