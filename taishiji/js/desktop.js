/**
 * Created by Ryan on 2015/12/1.
 */


//


$(document).ready(function () {

    //搜索框动态
    $(".header_serch_img").hover(function () {

        $(".header_serch_label").fadeIn();
        if($(".header_serch_input").val()==""){
            $(".header_serch_input").show().stop().animate({"width":260},300);
        }
        else{
            $(".header_serch_label").hide()
        }
    }).click(function(e){
        e.stopPropagation();
        if($(".header_serch_input").val()==""){
            alert("请输入搜索内容")
        }
        })

    $(".header_serch_input ").click(function (e) {
        e.stopPropagation();

    })
    $(document).click(function(){
        $(".header_serch_label").hide();
        $(".header_serch_input").stop().animate({"width":0},500, function () {
            $(".header_serch_input").hide();
        });


    })



    //轮播图

    var oL=$(".content_banner").children().eq(1);
    var uL=$(".content_banner").children("ul");
    var imgLength=uL.children().length;
        for(var i=0;i<imgLength;i++){
            oL.append("<li></li>");
            oL.children("li").eq(i).html( oL.children().eq(i).index()+1)
            }
    oL.children("li").eq(0).addClass("content_banner_olLicurrent");
    uL.children().eq(0).css("left",0);
    var num=0;
    var timer=0;
    timer=setInterval(imchangeR,2000);

    function imchangeR(){
    uL.children().eq(num).stop().animate({"left":-580},1000);
    num++;
    num>imgLength-1?num=0:num;
    uL.children().eq(num).css("left",580).stop().animate({"left":0},1000)
    oL.children("li").eq(num).addClass("content_banner_olLicurrent").siblings()
        .removeClass("content_banner_olLicurrent")

    }
    function imchangeL(){

            uL.children().eq(num).stop().animate({"left":580},1000);
            num--;
            num<0?num=imgLength-1:num;
            uL.children().eq(num).css("left",-580).stop().animate({"left":0},1000)
            oL.children("li").eq(num).addClass("content_banner_olLicurrent").siblings()
                .removeClass("content_banner_olLicurrent")

    }

    $(".content_banner").mouseenter(
        function () {
        clearInterval(timer);
            $("#arr").children().show();
        }).mouseleave( function () {
        clearInterval(timer);
       timer=setInterval(imchangeR,2000);
            $("#arr").children().hide();
    })
    oL.children("li").click(function () {
        clearInterval(timer);
       if(num<$(this).index())
       {
           uL.children().eq(num).stop().animate({"left":-580},1000);
           num=$(this).index();
           uL.children().eq(num).css("left",580).stop().animate({"left":0},1000)
           oL.children("li").eq(num).addClass("content_banner_olLicurrent").siblings()
               .removeClass("content_banner_olLicurrent")

       }
        else if(num>$(this).index()){
           uL.children().eq(num).stop().animate({"left":580},1000);
           num=$(this).index();
           uL.children().eq(num).css("left",-580).stop().animate({"left":0},1000)
           oL.children("li").eq(num).addClass("content_banner_olLicurrent").siblings()
               .removeClass("content_banner_olLicurrent")

        }


    })
    $("#right").click(function () {
            imchangeR();
    }

    )
    $("#left").click(
        function () {
            imchangeL();
        }
    )


        //更改地址

    $(".serve_station_change").click(function (e) {
        $(".mask").css("display","block");
        $(".showBox").css("display","block");
        e.stopPropagation();

    })

    $(".close_showbox").click(function () {
        $(".mask").hide();
        $(".showBox").hide();
    })

//选择地址
    $(".area_btnsub").click(function () {
        var a=$("#prov option").eq($("#prov").val()).html();
        $(".mask").hide();
        $(".showBox").hide();
        $(".serve_station_content").children("span").eq(0).html(a)
    })

 //选择上门还是送修
$("#station_btn").children().hover(
    function () {
        $(this).addClass("station_btn_current").siblings().removeClass("station_btn_current")
    }
)

//人工服务
$(".human_sever").children("a").mouseenter(function () {
    $(this).addClass("human_sever_current").siblings().removeClass("human_sever_current");

})



    //客服跟随
    $(".footer").after("<a href='#' id='robotEnter'><img src='images/robotEnter.png'/></a>")
     $(window).scroll(function () {
        var scrollHead=$(window).scrollTop();
        $("#robotEnter").css({"position":"absolute","right":20})
            .animate({"top":scrollHead+500},50)

    })

//    nav 鼠标滑动

$(".listen_btn").hover(function () {
    $(this).stop().animate({"border-color":"#CB514D"},900).siblings().stop().animate({"border-color":"#fff"},900);
}, function () {
    $(".listen_btn").stop().animate({"border-color":"#fff"},900);
})
})


window.onload= function () {
    var txt=document.getElementById("txt");
    var lab=document.getElementById("serch_label");
    txt.oninput=txt.onpropertychange= function(){
        if(txt.value==""){
            lab.style.display="block";
        }
        else
            lab.style.display="none";
    }

}