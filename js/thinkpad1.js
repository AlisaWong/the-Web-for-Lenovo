/**
 * Created by Administrator on 2015/12/2.
 */
window.onload =  function() {
 var left_nav = document.getElementById("left-nav")

 //var em = document.getElementById("em")
 var left_nav_a =left_nav.getElementsByTagName("a");

 for(var i=0; i<left_nav_a.length;i++) {
    left_nav_a[i].onmouseover = function() {
      for(var i=0; i<left_nav_a.length;i++) {
       left_nav_a[i].children[0].style.display ="none";
      }
        this.children[0].style.display ="block";
        this.style.backgroundColor="#A92624";
        this.children[1].style.display ="none";
        this.children[2].style.display ="block";
        //this.children[0].style.zIndex=999;
    }
     left_nav_a[i].onmouseout = function() {
         for(var i=0; i<left_nav_a.length;i++) {
             left_nav_a[i].children[0].style.display ="none";
         }
         this.children[0].style.display ="none";
         this.style.backgroundColor="";
         this.children[1].style.display ="block";
         this.children[2].style.display ="none";
         //this.children[0].style.zIndex=999;
     }

 }

}
