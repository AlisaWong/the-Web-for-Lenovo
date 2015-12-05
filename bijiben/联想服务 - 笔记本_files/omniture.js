// Omniture 
// Omni_CharSet---s.charSet
// Omni_PeEn------s.pageName  
// Omni_Channel---s.channel
// Omni_Codify----s.charSet
// Omni_Prop1-----s.prop1
// Omni_Prop2-----s.prop2
// Omni_Prop3-----s.prop3
// Omni_Prop4-----s.prop4
// Omni_EVar5-----s.eVar5
// Omni_Server----s.server

var Omni_PeEn = document.title;
var Omni_Prop1='';
var Omni_Prop2='';
var Omni_Prop3='';
var Omni_Prop4='';
var Omni_CharSet='';
var Omni_Channel='';
var Omni_EVar5='';
var Omni_Server='support1.lenovo.com.cn';
if(Omni_PeEn.lastIndexOf('#')>-1)
{
Omni_PeEn=Omni_PeEn.substring(0, Omni_PeEn.lastIndexOf('#'));
}
//get s.pageName
Omni_PeEn=Omni_PeEn.replace(/_/g,':');
//get s.channel
Omni_Channel=Omni_PeEn.substring(0, Omni_PeEn.lastIndexOf(':'));
 //get s.charSet
if (document.characterSet){Omni_CharSet = document.characterSet} else {Omni_CharSet = document.charset} 
//get s.prop1 s.prop2 s.prop3 s.prop4
var Omni_Prop=Omni_PeEn.split(':');
if(Omni_Prop.length>=1)
{
    Omni_Prop1=Omni_Prop[0];
}
if(Omni_Prop.length>=2)
{
    Omni_Prop2=Omni_Prop[0]+':'+Omni_Prop[1];
}
if(Omni_Prop.length>=3)
{
    Omni_Prop3=Omni_Prop[0]+':'+Omni_Prop[1]+':'+Omni_Prop[2];
}
if(Omni_Prop.length>=4)
{
    Omni_Prop4=Omni_Prop[0]+':'+Omni_Prop[1]+':'+Omni_Prop[2]+':'+Omni_Prop[3];
}
//get s.eVar5
function     GetQueryString(name)   
{   
     var     reg     =   new   RegExp("(^|&)"+     name     +"=([^&]*)(&|$)");   
     var     r     =     window.location.search.substr(1).match(reg);   
     if     (r!=null)   return     unescape(r[2]);   return   '';   
}   
Omni_EVar5=GetQueryString('intcmp');


//<![CDATA[
/* You may give each page an identifying name, server, and channel on
the next lines. */

	if(jsstr!=""){
    		jsstr = "" + jsstr;
	}
	else{
    		jsstr = "服务频道";
	}

var arraychannel=(jsstr).split(':');
var channel="";
var i;
if(arraychannel.length>1){
	for(i=0;i<arraychannel.length-1;i++){
		if(i==0){
			channel+=arraychannel[i];
		}
		else{
			channel+=":"+arraychannel[i];
		}
	}
}


s.charSet=Omni_CharSet; 
s.pageName=jsstr
s.server=Omni_Server
//s.channel=Omni_Channel
s.channel=channel
s.pageType=""

    for(i=0;i<arraychannel.length;i++)
  {
	if(i<4){
      var prop = "";
      for (var j = 0;j<=i;j++)
      {
          prop += arraychannel[j] + ":";
      }
      prop = prop.substring(0, prop.length - 1);

	eval('s.prop'+(i+1)+'="'+prop+'"');
}

  }


/* Conversion Variables */
s.campaign=""
s.state=""
s.zip=""
s.events=""
s.products=""
s.purchaseID=""
s.transactionID=""
s.eVar1=""
s.eVar2=""
s.eVar3=""
s.eVar4=""
s.eVar5=Omni_EVar5
/* Hierarchy Variables */
s.hier1=""
s.hier2=""
s.hier3=""
s.hier4=""
s.hier5=""
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
s.t()//]]>
