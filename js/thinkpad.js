/**
 * Created by Administrator on 2015/12/2.
 */
$(document).ready(function() {
    //创建猫腻盒子
    for(var i = 1 ; i <= 15 ; i++){
        $("<div class='m'></div>").appendTo(".maoni");
    }
    $m = $(".maoni .m");
    $m.each(function(){
        $(this).css({
            "left" : 70 * $(this).index(),
            "background-position" : -70 * $(this).index() + "px 0px"
        });
    });
    var nowimg = 0 ;
    $(".btn_right").click(function(){
        nowimg ++;
        if(nowimg > 5){
            nowimg = 0;
        }
        $m.css("background-image","url(images/" + nowimg + ".jpg)");
        $m.animate({"width":70},1000,function(){
            $(".mainpic").attr("src","images/" + nowimg + ".jpg");
            $m.css("width",0);
        });
        $(".circle_list li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
    });
    $a =$("ul li");
    for(var i=0;i<$a.length;i++) {
        $m.each(function(){
            $(this).css({
                "left" : 70 * $(this).index(),
                "background-position" : -70 * $(this).index() + "px 0px"
            });
        });
    }
});