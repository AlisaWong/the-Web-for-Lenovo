/**
 * Created by W on 2015/12/1.
 */
window.onload= function () {
    function $(id){return document.getElementById(id);}
    var header_nav =$("header_nav");
    var lis = header_nav.children[0].children;
    var qie=$("qie");
    var qas=qie.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index=i;
        lis[i].onmouseover = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.backgroundColor = "#DA3126";
                lis[i].children[0].style.color = "#fff";
                qas[i].style.display="none";
            }
            this.style.backgroundColor = "#fff";
            this.children[0].style.color = "#DA3126";
            qas[this.index].style.display="block";
        }
        lis[i].onmouseout = function () {
            this.style.backgroundColor = "#DA3126";
            this.children[0].style.color = "#fff";
            if(event && event.stopPropagation)
            {
                event.stopPropagation();  //  w3c ±ê×¼
            }
            else
            {
                event.cancelBubble = true;  // ie 678  ieä¯ÀÀÆ÷
            }

        }
        header_nav.onmouseleave= function () {
            for(var i = 0; i < qas.length; i++){
                qas[i].style.display="none";
            }
        }
    }
    var label=$("labe");
    var txt=$("txt");

    txt.oninput=txt.onpropertychange= function () {
        if(this.value==""){
            label.style.display="block";
        }
        else{
            label.style.display="none";
        }
    }



    var slider = $("slider");
    var slis = slider.children;
    var arrow = $("arrow");
    var json = [
        {
            width: 150,
            height:230,
            top: 0,
            left: 0,
            opacity: 20,
            z: 2
        },
        {
            width: 150,
            height:230,
            top: 0,
            left: 150,
            opacity: 80,
            z: 3
        },
        {
            width: 680,
            height:230,
            top: 0,
            left: 300,
            opacity: 100,
            z: 4
        },
        {
            width: 150,
            height:230,
            top: 0,
            left: 980,
            opacity: 80,
            z: 3
        },
        {
            width: 150,
            height:230,
            top: 0,
            left: 1130,
            opacity: 20,
            z: 2
        }
    ];
    var jieliu = true;
    var as = arrow.children;
    change();
    for (var k in as) {
        as[k].onclick = function () {
            if (this.className == "prev") {
                if (jieliu == true) {
                    change(false);
                    jieliu = false;
                }

            }
            else {
                if (jieliu == true) {
                  change(true);
                   jieliu = false;
                }

            }
        }
    }

    function change(flag) {
        if (flag) {
            json.unshift(json.pop());
        }
        else {
            json.push(json.shift());
        }
        for (var i = 0; i < json.length; i++) {
            animate(slis[i], {
                width: json[i].width,
                height:json[i].height,
                top: json[i].top,
                left: json[i].left,
                opacity:json[i].opacity,
                zIndex:json[i].z
            }, function () {
                jieliu = true;
            })
        }
    }
    var s_dd=$("s_dd");
    var s_dd_s=s_dd.children;
    for(var i=0;i<s_dd_s.length;i++){
        s_dd_s[i].children[0].style.background="url(images/"+(i+1)+".png) no-repeat";
        s_dd_s[i].onmouseover= function () {
            for(var i=0;i<s_dd_s.length;i++){
                s_dd_s[i].style.backgroundColor="#F6F6F6";
            }
            this.style.backgroundColor="#DBDBDB";
        }
    }
    s_dd.onmouseout= function () {
        for(var i=0;i<s_dd_s.length;i++) {
            s_dd_s[i].style.backgroundColor = "#F6F6F6";
        }
    }
    var active=$("active");
    var active_as=active.children;
    var active_img=$("active_img");
    var active_imgs=active_img.children;
    for(var i= 0;i<active_as.length-1;i++){
        active_as[i].index=i;
        active_as[i].onmouseover= function () {
            for(var i= 0;i<active_as.length-1;i++){
                active_as[i].className="hideborder";
                active_imgs[i].style.display="none";
            }
           this.className="showborder";
            active_imgs[this.index].style.display="block";
        }
        active_as[i].onmouseout= function () {

            this.className="hideborder";
        }
    }
    var phone=$("phone");
    var phone_as=phone.children;
    var phone_imgs=$("phone_img").children;
    for(var i= 0;i< phone_as.length-1;i++){
        phone_as[i].index=i;
        phone_as[i].onmouseover= function () {
            for(var i= 0;i< phone_as.length-1;i++){
                phone_as[i].className="hideborder";
                phone_imgs[i].style.display="none";
            }
            this.className="showborder";
            phone_imgs[this.index].style.display="block";
        }
        phone_as[i].onmouseout= function () {

            this.className="hideborder";
        }
    }

}