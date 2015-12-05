
window.onload = function () {
   var js_con_bot = document.getElementById("js_con_bot");
    var js_con = document.getElementById("js_con");
    var con_ul = js_con_bot.children[0];
    var num = 0;
    var timer = null;
    timer = setInterval(autoPlay,20);
    function autoPlay() {
        num--;
        //console.log(num);
        num<=-990 ? num = 0 : num;
        con_ul.style.left = num + "px";
    }
    js_con.onmouseover = function() {
        clearInterval(timer);
    }
    js_con.onmouseout = function() {
        timer = setInterval(autoPlay,20);
    }
}


