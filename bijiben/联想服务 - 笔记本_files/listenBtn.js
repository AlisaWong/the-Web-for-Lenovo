//监控代码
var _page = $('title').text(), _id = '', _from = '';   //

$(function(){
    var homeUrl = window.location.host; 

    $.getJSON('http://'+homeUrl+'/lenovo/wsi/sessionid/SessionManage.ashx',function(res){
        _id = res.sessionID;
        _from = res.fromUrl;
    });


    //bind event
	$(document).delegate('.listen_btn','click',function(){
		Date.prototype.format = function (format) {
            var o = {
                "M+": this.getMonth() + 1, //month 
                "d+": this.getDate(), //day 
                "h+": this.getHours(), //hour 
                "m+": this.getMinutes(), //minute 
                "s+": this.getSeconds(), //second 
                "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
                "S": this.getMilliseconds() //millisecond 
            }

            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }

            for (var k in o) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                }
            }
            return format;
        }
		var _p = $(this).closest('[data-pos]').attr('data-pos'), _z = $(this).closest('[data-zoon]').attr('data-zoon'), _t = new Date().format("yyyy/MM/dd hh:mm:ss");
		if(_p){
			var _v = encodeURIComponent($(this).html());
			$.getJSON('http://drvdisc1.lenovo.com/webservice/websiteaccess/websiteaccess.ashx?callback=?',{
				usrid: _id,
				time: _t,
				content: _v,
				position: _p,
				zoon: _z,
				page: _page,
				from: _from
			});
		};
	});

    //stay time
    // var _st, _et;
    // window.onload = function(){
    //     _st = new Date().getTime();
    // };
    // window.onbeforeunload = function(){
    //     _et = new Date().getTime();
    //     $.getJSON('{:U("FrontMonitor")}',{
    //         usrid: _id,
    //         page: _page,
    //         stay: (_et - _st)/1000
    //     });
    //     setTimeout(function(){},1000); 
    // };
});

//例子：lenovo\weixin_1.1\Wx\Tpl\WebQcs\detail.html 