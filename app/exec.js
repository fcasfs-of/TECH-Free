function runEx(filedru){
if(typeof filedru=="function"){
filedru=filedru();
if(filedru){
document.title= filedru.file_title+" - " + document.title;

var playerhj = fs_Playerjs({ OSD:filedru.player_osd, id:"zplayler", config:filedru.config, nocontrols:filedru.player_controls, autoplay:filedru.player_autoplay, loop:filedru.player_loop, title:filedru.file_title, file:filedru.list, poster:filedru.cover,"embed":location.href, "url":location.href
  });


var fplayeri = playerhj;


playerhj.OnEvents("init",function(){

playerhj.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(playerhj.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
  
playerhj.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Speed: '+playerhj.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
  
});

   openf_osdcd(document.getElementById("zplayler"),3e3, "", [], 0);   
    
}   }
}



var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!="") {

var getval_tygepret=getUrlParameter("fileView");

    
var inpmyNavruz = document.getElementById("myNavrun");    
inpmyNavruz.innerHTML= '<div id="zplayler" style="width:100%; height:100%;  transition: 0.2s;"></div><style>#myNavrun{ display:block; }   #myNavrun, #zplayler, #myNavrun #zplayler{position:absolute;width:100%; top:0px;left:0px;bottom:0px;right:0px; height:100%;z-index:1;}</style>';  


var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);



var exec_tun="";
if (getval_tygepret=="true") {      exec_tun=" runEx(run_file);  ";    }
  
var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent("function onstart_file(){  if(typeof run_file=='function'){  var file_obj = run_file();    "+exec_tun+" }   }  onstart_file();  "));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file();   };

    
}
  
