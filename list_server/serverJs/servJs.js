//window.onload = function () {
//    var slider = document.getElementById("js_slider");
//    var imgs = slider.children[0].children;
//    var ul = document.createElement("ul");
//    slider.appendChild(ul);
//    for(var i =0;i < imgs.length; i++){
//        var li = document.createElement("li");
//        ul.appendChild(li);
//    }
//    var lis = ul.children;
//    lis[0].className = "current";
//}
window.onload = function () {
    var content = document.getElementById("js_content");
    var ul = content.children[0];
    var divs = content.getElementsByTagName("div");
    console.log(ul.offsetLeft);
    var lis = ul.children;
    for(var i=0 ;i<lis.length; i++){//添加无缝滚动的触摸与离开效果
        lis[i].index = i;
        lis[i].onmouseover = function () {
            for(var j=0; j<lis.length; j++){
                lis[j].style.color = "#fff";
                divs[j].style.borderColor = "#EEEEEE";
            }
            this.style.color = "#DB291D";
            divs[this.index].style.borderColor = "#DB291D";
        }
        lis[i].onmouseout = function () {
            this.style.color = "#fff";
            divs[this.index].style.borderColor = "#EEEEEE";
        }

    }

    var timer = null;
    var num=1;
    clearInterval(timer);
    timer = setInterval(function () {//无缝滚动

        ul.style.left = ul.offsetLeft - num + "px";
        if(ul.offsetLeft < -1016){
            ul.style.left = 0 + "px";
        }
    },10);
    content.onmouseover = function () {
        clearInterval(timer);
    }
    content.onmouseout = function () {
        timer = setInterval(function () {

            ul.style.left = ul.offsetLeft - num + "px";
            if(ul.offsetLeft < -1016){
                ul.style.left = 14 + "px";
            }
        },10);
    }



}


$(document).ready(function () {
    var num = 0;//定义变量
    $(".arrR").click(rightClick);//右侧按钮
    function rightClick(){
        if(!$(".slImg img").is(":animated")){
            num++;
            num > $(".slImg img").length - 1 ? num = 0: num;
            change();
        }
    }

    $(".arrL").click(leftClick);//左侧按钮
    function leftClick(){
        if(!$(".slImg img").is(":animated")){
            num--;
            num < 0 ? num = $(".slImg img").length - 1: num;
            change();
        }
    }

    $(".slider ul li").mouseenter(function () {//小圆点悬停
        num = $(this).index();
        change();
    });

    function change(){
        $(".slImg img").stop().fadeOut();
        $(".slImg img").eq(num).stop().fadeIn();
        $(".slider ul li").eq(num).addClass("current").siblings().removeClass("current");
    }

    var timer = null;
    timer = setInterval(rightClick,2000);
    $(".slider").mouseenter(function () {
        clearInterval(timer);
    });
    $(".slider").mouseleave(function () {
        clearInterval(timer);
        timer = setInterval(rightClick,2000);
    });

    $(window).scroll(function () {//右侧悬浮请联系我
        var scrolltt = $(document).scrollTop();
        if(scrolltt < 600){
            $("#js_callme").stop().animate({"top":scrolltt+500},300);

            $("#js_callme").mouseenter(function () {//右侧悬浮动画
                $(this).children(".img").stop().animate({
                    "width":200,
                    "height":200,
                    "border-radius":100,
                },500).parent().stop().animate({
                    "right":900,
                    "top": scrolltt +400
                },1000, function () {
                    $(this).stop().animate({
                        "right":500,
                        "top": scrolltt +20
                    },1000, function () {
                        $(this).stop().animate({
                            "top":scrolltt+ 500,
                            "right":30
                        },1000, function () {
                            $(this).children("div").stop().animate({
                                "width":100,
                                "height":100
                            })
                        })
                    })
                })
            });
        }

    });
    $(".topDoor,.bottomDoor").click(function () {//卷帘门效果
        $(".topDoor").slideUp(3000);
        $(".bottomDoor").slideUp(3000);
    })

});
