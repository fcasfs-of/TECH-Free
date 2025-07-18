var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!="") {

var getval_tygepret=getUrlParameter("fileView");

    
var inpmyNavruz = document.getElementById("myNavrun");    
inpmyNavruz.innerHTML= '<div id="zplayler" style="width:100%; height:100%;  transition: 0.2s;"></div>';  


var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);




var scriptd = document.createElement("div");
  scriptd.style.display="none";
  scriptd.innerHTML='<style>#myNavrun{ display:block; }   #myNavrun, #zplayler, #myNavrun #zplayler{position:absolute;width:100%; top:0px;left:0px;bottom:0px;right:0px; height:100%;z-index:1;}</style>';
document.getElementsByTagName("body")[0].appendChild(scriptd);


if (getval_tygepret=="true") {  
var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent("runEx()");
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
}
    
}
  
