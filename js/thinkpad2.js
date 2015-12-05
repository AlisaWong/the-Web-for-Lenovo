/**
 * Created by Administrator on 2015/12/2.
 */
$(document).ready(function() {
    $(".nav-right li").mouseenter(function () {
        $(this).addClass("actived").siblings().removeClass("actived");
    })
})