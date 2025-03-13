function openf_osdcd(plsayer, timf,obb,kl){     var openf_osdcd_time=timf;

  if(obb){  obb.innerHTML="";   }

     plsayer.addEventListener("init",function(){    
    vars = fplayeri.api("vars");
    });  
    if(kl && kl.join("\",\"")!="\",\"" && kl.join("\",\"")!="" && kl.join("\",\"")!=null){  if(obb){  obb.innerHTML="<scr"+"ipt> var attrs_lic= {\""+kl.join("\",\"")+"\"};</scri"+"pt>";   }    }
                                        
                                        
   plsayer.addEventListener("start",function(){      Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: 'Getting started', pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
    plsayer.addEventListener("new",function(){      Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: 'Getting started', pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
    plsayer.addEventListener("exitfullscreen",function(){     Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: 'Exiting FullScreen', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });     });
    plsayer.addEventListener("fullscreen",function(){      Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: 'FullScreen', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plsayer.addEventListener("end",function(){      Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: 'Finishing', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plsayer.addEventListener("finish",function(){       Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: 'Finished', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plsayer.addEventListener("volume",function(){     Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(fplayeri.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
    plsayer.addEventListener("seek",function(){      Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(fplayeri.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });
    plsayer.addEventListener("userseek",function(){      Snackbar.show({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(adpi.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });
    plsayer.addEventListener("unmute",function(){      Snackbar.show({ duration:openf_osdcd_time, text: 'Active Sound', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plsayer.addEventListener("mute",function(){     Snackbar.show({ duration:openf_osdcd_time, text: 'Mute', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plsayer.addEventListener("pause",function(){      Snackbar.show({ duration:openf_osdcd_time, text: 'Paused', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plsayer.addEventListener("stop",function(){       Snackbar.show({ duration:openf_osdcd_time, text: 'Stopped', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'     });      });
    plsayer.addEventListener("play",function(){       Snackbar.show({ duration:openf_osdcd_time, text: 'Playing', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '150px'     });      });
     plsayer.addEventListener("next",function(){       Snackbar.show({ duration:openf_osdcd_time, text: ''+fplayeri.api("playlist_title"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });      });
    plsayer.addEventListener("previous",function(){       Snackbar.show({ duration:openf_osdcd_time, text: ''+fplayeri.api("playlist_title"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });      });
    plsayer.addEventListener("speed",function(){       Snackbar.show({ duration:openf_osdcd_time, text: 'Speed: '+fplayeri.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
 }



function opendtNav() {  var inpmyNavrunzz = document.getElementById("myNavrun");
inpmyNavrunzz.innerHTML= '<div id="myNav" class="overlay">  <button style="cursor:pointer;" id="zass" class="closebtn csdslosebtn" onclick="closeNav(\'true\');" data-tooltip="Close File" data-flow="right">X</button>  <div class="overlay-content" style="transition: 0.2s;">  <span id="zplaylert"></span>  <div id="zplayler" style="width:100%;  height:100%;  transition: 0.2s;"></div>  </div>  </div>';  
var inpsspldsetcusotmdfsdfszz = document.getElementById("pldsetcusotm");    inpsspldsetcusotmdfsdfszz.innerHTML="";
if(settingsplayer){
var settingsplayerhgonfig="";    
if(settingsplayer.config){
var custom_playersetti_gdu="font-style: "+settingsplayer.config.fontstyle+";   ";
if(settingsplayer.config.fontstyle=="none"){    var custom_playersetti_gdu=" ";  }
var customds_playersetti_gdu="text-decoration: "+settingsplayer.config.textdecoration+";   ";
if(settingsplayer.config.textdecoration=="none"){    var customds_playersetti_gdu=" ";  }
var custom_pfdlayersetti_gdu="text-transform: "+settingsplayer.config.texttransform+";   ";
if(settingsplayer.config.texttransform=="none"){    var custom_pfdlayersetti_gdu=" ";  }
var custom_pffgrsetti_gdu=" ";
if(settingsplayer.config.textbold==true){    var custom_pffgrsetti_gdu="font-weight: bold; ";  }
var settingsplayerhgonfig=custom_playersetti_gdu+customds_playersetti_gdu+custom_pfdlayersetti_gdu+custom_pffgrsetti_gdu;
}
inpsspldsetcusotmdfsdfszz.innerHTML="<sty"+"le>#zplayler *, #zplayler *:before, #zplayler *:after{     color:"+settingsplayer.color_texts+";  fill:"+settingsplayer.color_icons+";  "+settingsplayerhgonfig+"   }</st"+"yle>";
}
                      
                     }


