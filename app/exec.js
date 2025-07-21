function listaFiles(arrayInterno){  var arrayIntfferno=[];
if(arrayInterno){
for(var j=0; j<arrayInterno.length; j++){

arrayIntfferno[j]={
id:"pf"+(j+1),
title:arrayInterno[j].title,
file:arrayInterno[j].file,
poster:arrayInterno[j].poster,
casturl:arrayInterno[j].file,
castname:arrayInterno[j].title
};
    
    }
}  
return arrayIntfferno;  }


var fplayeri;   var playerhj;


function runExG(filedru, id, pos){
if(typeof filedru=="function"){
filedru=filedru();
if(filedru){
document.title= filedru.file_title+" - " + document.title;

playerhj = fs_Playerjs({ OSD:filedru.player_osd, id:"zplayler", config:filedru.config, nocontrols:filedru.player_controls, autoplay:filedru.player_autoplay, loop:filedru.player_loop, title:filedru.file_title, file:listaFiles(filedru.list), poster:filedru.cover,"embed":location.href, "url":location.href, plstart:"pf"+id  });


fplayeri = playerhj;


playerhj.OnEvents("init",function(){


playerhj.api("seek", Number(pos));


playerhj.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(playerhj.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
  
playerhj.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Speed: '+playerhj.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
  
});

   openf_osdcd(document.getElementById("zplayler"),3e3, "", [], 0);   
    
}   }
}


function runEx(filedru, id, pos){
if(typeof filedru=="function"){
filedrxu=filedru();
if(filedru){
document.title= filedrxu.file_title+" - " + document.title;

playerhj = fs_Playerjs({ OSD:false, id:"zplayler", config:{}, nocontrols:0, autoplay:1, loop:0, title:filedrxu.file_title, file:"https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4", poster:filedrxu.cover,"embed":location.href, "url":location.href  });


fplayeri = playerhj;

playerhj.OnEvents("init",function(){

playerhj.OnEvents("end",function(){       runExG(filedru, id, pos);       });

});

}    }
}



var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!="") {

var getval_tygepret=getUrlParameter("fileView");

var degetval_tselett="1";
var getval_tselett=getUrlParameter("fileSelect");
if (getval_tselett!="") {
degetval_tselett=getval_tselett;
}

var degetval_tseposttt="0";
var getval_tseletdt=getUrlParameter("pos");
if (getval_tseletdt!="") {
degetval_tseposttt=getval_tseletdt;
}


   
var inpmyNavruz = document.getElementById("myNavrun");    
inpmyNavruz.innerHTML= '<div id="zplayler" style="width:100%; height:100%;  transition: 0.2s;"></div><style>#myNavrun{ display:block; }   #myNavrun, #zplayler, #myNavrun #zplayler{position:absolute;width:100%; top:0px;left:0px;bottom:0px;right:0px; height:100%;z-index:1;}</style>';  


var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);



var exec_tun="";
if (getval_tygepret=="true") {      exec_tun=" runEx(run_file, degetval_tselett, degetval_tseposttt);  ";    }
  
var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent("function onstart_file(){  if(typeof run_file=='function'){  var file_obj = run_file();    "+exec_tun+" }   }  onstart_file();  "));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file();   };

    
}
  
