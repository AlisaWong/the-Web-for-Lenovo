var HomeURL = 'http://' + window.location.host
function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

function CheckProductSn(mNumber, defaultText) {
    if (mNumber == defaultText || mNumber == "") {
        //未输入
        alert('\u8bf7\u8f93\u5165\u4e3b\u673a\u7f16\u53f7\u6216\u76f8\u5173\u95ee\u9898');
        return false;
    } else if (/^[A-Za-z0-9]+$/.test(mNumber) && (mNumber.length != 8 && mNumber.length != 4 && mNumber.length != 7 && mNumber.length != 10 && mNumber.length != 14 && mNumber.length != 15 && mNumber.length != 18)) {
        //输入英文数字且位数不对
        alert('\u60a8\u8f93\u5165\u7684\u4e3b\u673a\u7f16\u53f7\u4f4d\u6570\u4e0d\u5bf9');
        return false;
    } else if (/^[\u4E00-\u9FFF]+$/.test(mNumber)) {
        //输入汉字
        // window.location.href = HomeURL + '/lenovo/wsi/TextRetrieval/CreateIndex.aspx?kw=' + mNumber + '&type=3'; WrongUrl!
        window.location.href = "http://support1.lenovo.com.cn/lenovo/wsi/TextRetrieval/CreateIndex.aspx?kw="+mNumber+"&type=3";
        return false;
    }
    return true;
};

function goToGuaranteeAndConfiguration() {

    if ($('#searchkey')) {

        var mNumber = stripscript($.trim($("#searchkey").val()));

        if (!CheckProductSn(mNumber, "示例:EB10963046")) {
            return false;
        }
        $.ajax({
            type: "get",
            url: HomeURL + "/lenovo/wsi/Modules/Manage/getminfobysn.ashx",
            // url: HomeURL + "/Modules/Manage/getminfobysn.ashx", WrongUrl!
            data: { sn: mNumber },
            async: true,
            dataType: 'json',
            success: function (info) {

                if (info.success) {
                    if (info.data.BrandTypeId == "120") {
                        window.location.href = "http://think.lenovo.com.cn/support/driver/newdriversdownlist.aspx?categoryid=" + info.data.WebTreeId + "&CODEName=" + mNumber;
                    }
                    else {
                       location.href = HomeURL + '/lenovo/wsi/usercenter/computersearch/Machinesearch.aspx?intcmp=index&id=' + jQuery.trim(mNumber.toUpperCase()) + '&showradio=1&showdriver=no';
                        // location.href = HomeURL + 'usercenter/computersearch/Machinesearch.aspx?intcmp=index&id=' + jQuery.trim(mNumber.toUpperCase()) + '&showradio=1&showdriver=no'; WrongUrl!
                    }
                }
                else {
                    alert("\u65e0\u6cd5\u9a8c\u8bc1\u60a8\u6240\u8f93\u5165\u7684\u4e3b\u673a\u7f16\u53f7");
                };
            }
        });


    }
}

$(function () {
    $('#btnsearch').click(function () {
        goToGuaranteeAndConfiguration();
    });
    $('#searchkey').keypress(function (evt) {
        var keycode = evt.keyCode || evt.which;
        if (evt.keyCode == 13) {
            evt.preventDefault();
            $('#btnsearch').trigger('click');
        }
    });
    /*
    if(!$.browser.msie)
    {
    $('.autosn').hide();
    $('.autosn ~ i').eq(0).hide();
    }*/

    $('#auto-get-machineno').click(function (event, install) {
        checkValue('searchkey', '7');
        document.getElementById('searchkey').focus();
    });
});