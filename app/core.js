
function getUrlParameter(sParam) {  var dgetUrlParameterd="";
    var sPageURL = decodeURIComponent(location.href);//window.location.search.substring(1));
   if(sPageURL.split('?')){
       var sURLVariables = sPageURL.split('?')[1].split('&');
       if(sPageURL.split('?')[1].split('&')){
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if(sURLVariables[i].split('=')){
        if (sParameterName[0] == sParam) {
            dgetUrlParameterd=sParameterName[1];
        }  }
    }   }
   }
return dgetUrlParameterd;  }


function mchangelag(nn) {
if(nn){  location.href=nn;  }
}



  
  
  
 
function convertSecondsDurationto(duration){
     var seconds = duration; 
    var hours   = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    seconds = Math.floor(seconds - (hours * 3600) - (minutes * 60));

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time = hours+':'+minutes+':'+seconds;
return time;    }

  function convertDurationtoSeconds(duration){
    const timhdfff= duration.split(':');
    if(timhdfff.length==1){      return Number(timhdfff[0]);
    }  else if(timhdfff.length==2){
    return Number(timhdfff[0]) * 60 + Number(timhdfff[1]);
    }  else{      return Number(timhdfff[0]) * 60 * 60 + Number(timhdfff[1]) * 60 + Number(timhdfff[2]);   }
}
  



  function startOSD(df){

function get_odsd(id){  var get_odsdhy=document.body;
var insssd = document.getElementById(id); 
if(insssd){   get_odsdhy=insssd;   }
return get_odsdhy;  }


  !function(a,b){"use strict";"function"==typeof define&&define.amd?define([],function(){return a.Snackbar=b()}):"object"==typeof module&&module.exports?module.exports=a.Snackbar=b():a.Snackbar=b()}(this,function(){var a={};a.current=null;var b={text:"Default Text",textColor:"#FFFFFF",width:"auto",showAction:!0,actionText:"Dismiss",actionTextAria:"Dismiss, Description for Screen Readers",alertScreenReader:!1,actionTextColor:"#4CAF50",showSecondButton:!1,secondButtonText:"",secondButtonAria:"Description for Screen Readers",secondButtonTextColor:"#4CAF50",position:"fixed",backgroundColor:"#323232",pos:"bottom-left",duration:5e3,customClass:"",onActionClick:function(a){a.style.opacity=0},onSecondButtonClick:function(a){},onClose:function(a){}};a.show=function(d){var e=c(!0,b,d);a.current&&(a.current.style.opacity=0,setTimeout(function(){var a=this.parentElement;a&&
// possible null if too many/fast Snackbars
a.removeChild(this)}.bind(a.current),500)),a.snackbar=document.createElement("div"),a.snackbar.className="snackbar-container "+e.customClass,a.snackbar.style.width=e.width;var f=document.createElement("p");if(f.style.margin=0,f.style.padding=0,f.style.color=e.textColor,f.style.position=e.position,f.style.fontSize="14px",f.style.fontWeight=300,f.style.lineHeight="1em",f.innerHTML=e.text,a.snackbar.appendChild(f),a.snackbar.style.position=e.position,a.snackbar.style.background=e.backgroundColor,e.showSecondButton){var g=document.createElement("button");g.className="action",g.innerHTML=e.secondButtonText,g.setAttribute("aria-label",e.secondButtonAria),g.style.color=e.secondButtonTextColor,g.addEventListener("click",function(){e.onSecondButtonClick(a.snackbar)}),a.snackbar.appendChild(g)}if(e.showAction){var h=document.createElement("button");h.className="action",h.innerHTML=e.actionText,h.setAttribute("aria-label",e.actionTextAria),h.style.color=e.actionTextColor,h.addEventListener("click",function(){e.onActionClick(a.snackbar)}),a.snackbar.appendChild(h)}e.duration&&setTimeout(function(){a.current===this&&(a.current.style.opacity=0,
// When natural remove event occurs let's move the snackbar to its origins
a.current.style.top="-100px",a.current.style.bottom="-100px")}.bind(a.snackbar),e.duration),e.alertScreenReader&&a.snackbar.setAttribute("role","alert"),a.snackbar.addEventListener("transitionend",function(b,c){"opacity"===b.propertyName&&"0"===this.style.opacity&&("function"==typeof e.onClose&&e.onClose(this),this.parentElement.removeChild(this),a.current===this&&(a.current=null))}.bind(a.snackbar)),a.current=a.snackbar,get_odsd(df).appendChild(a.snackbar);getComputedStyle(a.snackbar).bottom,getComputedStyle(a.snackbar).top;a.snackbar.style.opacity=1,a.snackbar.className="snackbar-container "+e.customClass+" snackbar-pos "+e.pos},a.close=function(){a.current&&(a.current.style.opacity=0)};



var c=function(){var a={},b=!1,d=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],d++);for(var f=function(d){for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b&&"[object Object]"===Object.prototype.toString.call(d[e])?a[e]=c(!0,a[e],d[e]):a[e]=d[e])};d<e;d++){var g=arguments[d];f(g)}return a};return a});
  }
  
  
  function t(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function e(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function s(t,s,i){if(s)e(t.prototype,s);if(i)e(t,i);return t}(function(){var e=Object.defineProperty;var i=function(t,s){return e(t,"name",{value:s,configurable:!0})};var n='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.666.666 0 0 0 1.094-.217.665.665 0 0 0-.147-.73L8.94 8Z" fill="currentColor"/>\r\n</svg>\r\n';var o='<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z" fill="currentColor"/>\r\n</svg>\r\n';var a='<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 0 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28 1.56 1.56 0 0 0-.28.44c-.075.158-.11.332-.106.507a1.332 1.332 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r\n</svg>\r\n';var r='<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="m19.627 11.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.881l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.333 1.333 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r\n</svg>\r\n';var c='<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="M16.334 17.667a1.334 1.334 0 0 0 1.334-1.333v-5.333a1.333 1.333 0 0 0-2.665 0v5.333a1.333 1.333 0 0 0 1.33 1.333Zm-.508 5.227c.325.134.69.134 1.014 0 .165-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.076-.158.112-.332.107-.507a1.332 1.332 0 0 0-.387-.946 1.532 1.532 0 0 0-.44-.28 1.334 1.334 0 0 0-1.838 1.226 1.4 1.4 0 0 0 .385.947c.127.121.277.216.44.28Zm.508 6.773a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24A10.667 10.667 0 1 1 16.54 27a10.667 10.667 0 0 1-.206-21.333Z" fill="currentColor"/>\r\n</svg>\r\n';var l=i(function(t){return new DOMParser().parseFromString(t,"text/html").body.childNodes[0]},"stringToHTML"),h=i(function(t){var e=new DOMParser().parseFromString(t,"application/xml");return document.importNode(e.documentElement,!0).outerHTML},"getSvgNode");var d={CONTAINER:"sn-notifications-container",NOTIFY:"sn-notify",NOTIFY_CONTENT:"sn-notify-content",NOTIFY_ICON:"sn-notify-icon",NOTIFY_CLOSE:"sn-notify-close",NOTIFY_TITLE:"sn-notify-title",NOTIFY_TEXT:"sn-notify-text",IS_X_CENTER:"sn-is-x-center",IS_Y_CENTER:"sn-is-y-center",IS_CENTER:"sn-is-center",IS_LEFT:"sn-is-left",IS_RIGHT:"sn-is-right",IS_TOP:"sn-is-top",IS_BOTTOM:"sn-is-bottom",NOTIFY_OUTLINE:"sn-notify-outline",NOTIFY_FILLED:"sn-notify-filled",NOTIFY_ERROR:"sn-notify-error",NOTIFY_WARNING:"sn-notify-warning",NOTIFY_SUCCESS:"sn-notify-success",NOTIFY_INFO:"sn-notify-info",NOTIFY_FADE:"sn-notify-fade",NOTIFY_FADE_IN:"sn-notify-fade-in",NOTIFY_SLIDE:"sn-notify-slide",NOTIFY_SLIDE_IN:"sn-notify-slide-in",NOTIFY_AUTOCLOSE:"sn-notify-autoclose"},u={ERROR:"error",WARNING:"warning",SUCCESS:"success",INFO:"info"},f={OUTLINE:"outline",FILLED:"filled"},p={FADE:"fade",SLIDE:"slide"},I={CLOSE:h(n),SUCCESS:h(r),ERROR:h(o),WARNING:h(c),INFO:h(a)};var v=i(function(t){t.wrapper.classList.add(d.NOTIFY_FADE),setTimeout(function(){t.wrapper.classList.add(d.NOTIFY_FADE_IN)},100)},"fadeIn"),N=i(function(t){t.wrapper.classList.remove(d.NOTIFY_FADE_IN),setTimeout(function(){t.wrapper.remove()},t.speed)},"fadeOut"),O=i(function(t){t.wrapper.classList.add(d.NOTIFY_SLIDE),setTimeout(function(){t.wrapper.classList.add(d.NOTIFY_SLIDE_IN)},100)},"slideIn"),T=i(function(t){t.wrapper.classList.remove(d.NOTIFY_SLIDE_IN),setTimeout(function(){t.wrapper.remove()},t.speed)},"slideOut");var E=function(){"use strict";function e(s){var n=this;t(this,e);this.notifyOut=i(function(t){t(n)},"notifyOut");var o=s.notificationsGap,a=o===void 0?20:o,r=s.notificationsPadding,c=r===void 0?20:r,l=s.status,h=l===void 0?"success":l,d=s.effect,u=d===void 0?p.FADE:d,f=s.type,I=f===void 0?"outline":f,v=s.title,N=s.text,O=s.showIcon,T=O===void 0?!0:O,E=s.customIcon,m=E===void 0?"":E,w=s.customClass,y=w===void 0?"":w,L=s.speed,C=L===void 0?500:L,F=s.showCloseButton,_=F===void 0?!0:F,S=s.autoclose,g=S===void 0?!0:S,R=s.autotimeout,Y=R===void 0?3e3:R,A=s.position,x=A===void 0?"right top":A,b=s.customWrapper,k=b===void 0?"":b;if(this.customWrapper=k,this.status=h,this.title=v,this.text=N,this.showIcon=T,this.customIcon=m,this.customClass=y,this.speed=C,this.effect=u,this.showCloseButton=_,this.autoclose=g,this.autotimeout=Y,this.notificationsGap=a,this.notificationsPadding=c,this.type=I,this.position=x,!this.checkRequirements()){console.error("You must specify 'title' or 'text' at least.");return}this.setContainer(),this.setWrapper(),this.setPosition(),this.showIcon&&this.setIcon(),this.showCloseButton&&this.setCloseButton(),this.setContent(),this.container.prepend(this.wrapper),this.setEffect(),this.notifyIn(this.selectedNotifyInEffect),this.autoclose&&this.autoClose(),this.setObserver()}s(e,[{key:"checkRequirements",value:function t(){return!!(this.title||this.text)}},{key:"setContainer",value:function t(){var t=document.querySelector(".".concat(d.CONTAINER));t?this.container=t:(this.container=document.createElement("div"),this.container.classList.add(d.CONTAINER),document.body.appendChild(this.container)),this.notificationsPadding&&this.container.style.setProperty("--sn-notifications-padding","".concat(this.notificationsPadding,"px")),this.notificationsGap&&this.container.style.setProperty("--sn-notifications-gap","".concat(this.notificationsGap,"px"))}},{key:"setPosition",value:function t(){this.container.classList[this.position==="center"?"add":"remove"](d.IS_CENTER),this.container.classList[this.position.includes("left")?"add":"remove"](d.IS_LEFT),this.container.classList[this.position.includes("right")?"add":"remove"](d.IS_RIGHT),this.container.classList[this.position.includes("top")?"add":"remove"](d.IS_TOP),this.container.classList[this.position.includes("bottom")?"add":"remove"](d.IS_BOTTOM),this.container.classList[this.position.includes("x-center")?"add":"remove"](d.IS_X_CENTER),this.container.classList[this.position.includes("y-center")?"add":"remove"](d.IS_Y_CENTER)}},{key:"setCloseButton",value:function t(){var t=this;var e=document.createElement("div");e.classList.add(d.NOTIFY_CLOSE),e.innerHTML=I.CLOSE,this.wrapper.appendChild(e),e.addEventListener("click",function(){t.close()})}},{key:"setWrapper",value:function t(){var t=this;switch(this.customWrapper?this.wrapper=l(this.customWrapper):this.wrapper=document.createElement("div"),this.wrapper.style.setProperty("--sn-notify-transition-duration","".concat(this.speed,"ms")),this.wrapper.classList.add(d.NOTIFY),this.type){case f.OUTLINE:this.wrapper.classList.add(d.NOTIFY_OUTLINE);break;case f.FILLED:this.wrapper.classList.add(d.NOTIFY_FILLED);break;default:this.wrapper.classList.add(d.NOTIFY_OUTLINE)}switch(this.status){case u.SUCCESS:this.wrapper.classList.add(d.NOTIFY_SUCCESS);break;case u.ERROR:this.wrapper.classList.add(d.NOTIFY_ERROR);break;case u.WARNING:this.wrapper.classList.add(d.NOTIFY_WARNING);break;case u.INFO:this.wrapper.classList.add(d.NOTIFY_INFO);break}this.autoclose&&(this.wrapper.classList.add(d.NOTIFY_AUTOCLOSE),this.wrapper.style.setProperty("--sn-notify-autoclose-timeout","".concat(this.autotimeout+this.speed,"ms"))),this.customClass&&this.customClass.split(" ").forEach(function(e){t.wrapper.classList.add(e)})}},{key:"setContent",value:function t(){var t=document.createElement("div");t.classList.add(d.NOTIFY_CONTENT);var e,s;this.title&&(e=document.createElement("div"),e.classList.add(d.NOTIFY_TITLE),e.textContent=this.title.trim(),this.showCloseButton||(e.style.paddingRight="0")),this.text&&(s=document.createElement("div"),s.classList.add(d.NOTIFY_TEXT),s.innerHTML=this.text.trim(),this.title||(s.style.marginTop="0")),this.wrapper.appendChild(t),this.title&&t.appendChild(e),this.text&&t.appendChild(s)}},{key:"setIcon",value:function t(){var t=i(function(t){switch(t){case u.SUCCESS:return I.SUCCESS;case u.ERROR:return I.ERROR;case u.WARNING:return I.WARNING;case u.INFO:return I.INFO}},"computedIcon"),e=document.createElement("div");e.classList.add(d.NOTIFY_ICON),e.innerHTML=this.customIcon||t(this.status),(this.status||this.customIcon)&&this.wrapper.appendChild(e)}},{key:"setObserver",value:function t(){var t=this;var e=new IntersectionObserver(function(e){if(e[0].intersectionRatio<=0)t.close();else return},{threshold:0});setTimeout(function(){e.observe(t.wrapper)},this.speed)}},{key:"notifyIn",value:function t(t){t(this)}},{key:"autoClose",value:function t(){var t=this;setTimeout(function(){t.close()},this.autotimeout+this.speed)}},{key:"close",value:function t(){this.notifyOut(this.selectedNotifyOutEffect)}},{key:"setEffect",value:function t(){switch(this.effect){case p.FADE:this.selectedNotifyInEffect=v,this.selectedNotifyOutEffect=N;break;case p.SLIDE:this.selectedNotifyInEffect=O,this.selectedNotifyOutEffect=T;break;default:this.selectedNotifyInEffect=v,this.selectedNotifyOutEffect=N}}}]);return e}();i(E,"Notify");var m=E;globalThis.Notify=m})();

  
  




function getUrlVars(fd) {
    var vars = {};
    var parts = fd.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {      vars[key] = value;    });
    return vars;     }


var settingsplayer={  
 color_icons:"#63B8FF", color_texts:"#00EEEE", config:{
fontstyle:"none",
textdecoration:"none",
texttransform:"none",
textbold:true,
}, controls:true,
 
id:"fs11",
active:"yes",
typeplayer:"1",
modeplayer:"url",
loop:"0",
autoplay:"1",
title:"",
poster:"",
files:"#",
fontstyle:"",
textdecoration:"",
texttransform:"",
fontweight:"bold",
colortexts:"FFFFFF",
coloricons:"FFFFFF",
volume:"1",
mute:"0",
menu:"0",
seek:"0",
share:"0",
showplaylist:"0",
fullscreen:"0",
contextmenu_display:"no",
share_disp:"no",
contextmenu_namedisplay:"TECH - PLAYER: BETA",
error:"",
 }; 

var listfrr_is={};   var fplayeri;   var var_versionpropg="";


function stringno_valtext(id,g) {   var dfyyggdfgetLastdRofw=id;   if(id=="undefined"){     dfyyggdfgetLastdRofw=g;    }       if(id==undefined){     dfyyggdfgetLastdRofw=g;    }    return dfyyggdfgetLastdRofw;    }


  function pl_dispNav(a) {  return document.getElementById(a);  }      function fmdplex_loadex_txv(t){  if(t==""){    return "";  }   if(t=="undefined"){    return "";  }     if(t==undefined){    return "";  }   else {  return t; }  }   


  function create_mdpl_file(ob){  return { get:function(id){  return ob.files[id]; }, get_name:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).name); }, get_size:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).size); },get_type:function(id){  return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).type);  }, create_url:function(id){  return fmdplex_loadex_txv(URL.createObjectURL(create_mdpl_file(ob).get(id))); } };   }





function is_playerd_allid(config, links, fplayeri){

 var inpsspldsetcusotmdfsdfszz = document.getElementById("pldsetcusotm");


 
var settifgfgngdfdsfsfontrollsfd="color: #"+stringno_valtext(config.colortexts,"FFFFFF")+";  ";
if(stringno_valtext(config.colortexts,"#FFFFFF")==""){       settifgfgngdfdsfsfontrollsfd="";    }
var settifgfgndsdddfsfontrollsfd="fill: #"+stringno_valtext(config.coloricons,"FFFFFF")+";  ";
if(stringno_valtext(config.coloricons,"#FFFFFF")==""){       settifgfgndsdddfsfontrollsfd="";    }


var settifgfgngsplafyercontrollsfd="font-style: "+stringno_valtext(config.fontstyle,"")+";  ";
if(stringno_valtext(config.fontstyle,"")==""){       settifgfgngsplafyercontrollsfd="";    }
var settifgfgngsplafyercontdrollsfd="text-decoration: "+stringno_valtext(config.textdecoration,"")+";  ";
if(stringno_valtext(config.textdecoration,"")==""){       settifgfgngsplafyercontdrollsfd="";    }
var settifgfgngsplafyercdsontrollsfd="text-transform: "+stringno_valtext(config.texttransform,"")+";  ";
if(stringno_valtext(config.texttransform,"")==""){       settifgfgngsplafyercdsontrollsfd="";    }

var settifgfgngsplafyercdsontsdrollsfd="";
if(stringno_valtext(config.fontweight,"")=="bold"){       settifgfgngsplafyercdsontsdrollsfd="font-weight: bold; ";    }



 
 fplayeri.api("unmute");


fplayeri.api("volume", Number(stringno_valtext(config.volume,"1")));
if(stringno_valtext(config.volume,"")==""){   fplayeri.api("volume", 1);    }



 if(stringno_valtext(config.mute,"0")=="1"){   fplayeri.api("mute");    }

 //if(stringno_valtext(config.mute,"0")=="0"){   fplayeri.api("unmute");    }



 if(stringno_valtext(config.menu,"0")=="1"){   fplayeri.api("menu");    }



fplayeri.api('seek',Number(stringno_valtext(config.pos_time,"0")));



if(stringno_valtext(config.share,"0")=="1"){   fplayeri.api("share");    }

if(stringno_valtext(config.showplaylist,"0")=="1"){   fplayeri.api("showplaylist");    }


 if(stringno_valtext(config.fullscreen,"0")=="1"){   fplayeri.api("fullscreen");    }


var configdcontextmenu_display="visible";
if(config.contextmenu_display=="yes"){     configdcontextmenu_display="hidden";    }

var configfcontextmenu_dnameisplay=stringno_valtext(config.contextmenu_namedisplay,"");
if(configfcontextmenu_dnameisplay==""){     configfcontextmenu_dnameisplay="FCAS TECH:  Player";    }

//var inpsspldsetcusotmdfsdfszz = document.getElementById("pldsetcusotm");
inpsspldsetcusotmdfsdfszz.innerHTML=inpsspldsetcusotmdfsdfszz.innerHTML+"<sty"+"le>pjsdiv[i=\"9\"]:before{  visibility: "+configdcontextmenu_display+";   content:'"+configfcontextmenu_dnameisplay+"'; }   #zplayler *, #zplayler *:before, #zplayler *:after{    "+settifgfgndsdddfsfontrollsfd+settifgfgngdfdsfsfontrollsfd+settifgfgngsplafyercontrollsfd+settifgfgngsplafyercontdrollsfd+settifgfgngsplafyercdsontrollsfd+settifgfgngsplafyercdsontsdrollsfd+"   }</st"+"yle>";


//var inploaddedicontcusotmdfsddfszz = document.getElementById("loaddedicon");
//inploaddedicontcusotmdfsddfszz.innerHTML="";


}






