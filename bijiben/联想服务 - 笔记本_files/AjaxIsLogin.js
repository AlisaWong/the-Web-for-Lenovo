var AjaxIsLogin = function(){
    var homeUrl = 'http://' + window.location.host;
    $.getJSON(homeUrl+'/lenovo/wsi/usercenter/login/IsLogin.aspx',function(res){
        if(res.StateSign == 'UnLogin') return false;
        var username = res.UserAccount, html = [];
        html.push( '<li><a href="'+homeUrl+'/lenovo/wsi/usercenternew/userproduct/default.aspx">欢迎您：['+username+']</a></li>' );
        html.push( '<li class="header_top_wrap_between">|</li>' );
        html.push( '<li><a href="'+homeUrl+'/lenovo/wsi/usercenternew/userproduct/default.aspx">个人中心</a></li>' );
        html.push( '<li class="header_top_wrap_between">|</li>' );
        html.push( '<li><a href="https://passport.lenovo.com/wauthen2/gateway?lenovoid.action=uilogout&lenovoid.realm=support.lenovo.com.cn&lenovoid.cb='+homeUrl+'/lenovo/wsi/lenovoid/lenovoidnew.aspx">退出</a></li>' );
        $('.unlogin').empty().html(html.join(''));
    });
}();


















