/**
 * Created by Administrator on 2015/12/1.
 */
window.onload  = function() {
    function $(id) {
        return document.getElementById(id)
    }
    $("txt").oninput =$("txt").onpropertychange = function() {
        if(this.value=="") {
            $("message").style.display ="block";
        }
        else {
            $("message").style.display ="none";
            $("txt").style.color ="#000";

        }
    }

    var wrap = document.getElementById("wrap");  // 大盒子
    var arrow = document.getElementById("arrow");  // 三角
    var slider = document.getElementById("slide");
    var lis = slider.getElementsByTagName("li");  // 所有要操作的盒子
    wrap.onmouseover = function() {  // 鼠标经过显示和隐藏 左右两个箭头
        animate(arrow,{'opacity':100});
    }
    wrap.onmouseout = function() {
        animate(arrow,{'opacity':0});
    }
    //  存储了每个图片的信息
    var json = [
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    //  两个按钮点击事件
    // 函数节流
    var jieliu = true; //  用来控制函数节奏的 变量
    var as = arrow.children;
    change();
    for(var k in as)
    {
        as[k].onclick = function() {
            if(this.className == "prev")
            {
                //  alert("左侧")  移除第一个   放到json 最后一个
                if(jieliu == true)
                {
                    change(false);
                    jieliu = false;  // 点击完毕之后，立马取反
                }

            }
            else
            {
                // alert('右侧');   把 最后一个json 删除   并且把最后一个添加到json 第一个位置
                if(jieliu == true)
                {
                    change(true);
                    jieliu = false;  // 点击完毕之后，立马取反
                }
            }
        }
    }

    function change(flag) {
        //  来判断
        if(flag)
        {
            // 把 最后一个json 删除   并且把最后一个添加到json 第一个位置
            json.unshift(json.pop());
        }
        else
        {
            //   移除第一个   放到json 最后一个
            json.push(json.shift());
        }
        // 为什么给for呢？ 以为我们的json 有5个  盒子li 有 5个
        for(var i=0;i<json.length; i++)
        {
            animate(lis[i],{
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity:json[i].opacity,
                zIndex:json[i].z
            },function(){ jieliu = true;})  // 回调函数是等动画执行完毕  才行
        }
    }
        var timer =null;
        var num =1;
        clearInterval(timer);
         timer = setInterval(autoplay,20);
        function autoplay () {
            $("ul").style.left = $("ul").offsetLeft - num +"px";
             console.log( $("ul").offsetLeft);
             if( $("ul").offsetLeft<-1050) {
                 $("ul").style.left =0;
             }
            else {
                 $("ul").style.left =$("ul").offsetLeft +"px";
             }


            }
    $("bottom").onmouseover = function() {
        clearInterval(timer);
    }
    $("bottom").onmouseout = function() {
        timer = setInterval(autoplay,20);
    }
        }





