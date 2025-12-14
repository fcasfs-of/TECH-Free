function onget_d(df){  return df+" Files";  }


function on_lan_linff(ifd){  
  var on_lanf_list= {
[1]:"Please enter a URL.",
[2]:"Please enter a valid URL (starting with http:// or https://).",
[3]:"Loading...",
[4]:"It is not possible to access the File because it is Private."
  }; 
return on_lanf_list[ifd];   }  


function on_lanf(ifd){  
  var on_lanf_list= {
    [1]:"Adjust width",
    [2]:"Adjust height",
    [3]:"Fit page",
    [4]:"First page",
    [5]:"Last page",
    [6]:"Rotate countrary clockwise",
    [7]:"Rotate clockwise",
    [8]:"Vertical scroll",
    [9]:"Horizontal scroll"
  }; 
return on_lanf_list[ifd];   }



var get_iofd= false;
var get_ifofd= true;
const defaultSkipTime = 10; 


function Notificationss(hh){ 

if (Notification.permission == 'denied') {
    Notification.requestPermission(Notificationss);
  }

 if (Notification.permission == 'granted') {
				var notificationd = new Notification("TECH: Player",{body:''+hh,icon:'https://player.fcasfs-of.cloud-fs.net/icon_app.png',dir:'auto'});
    }

}


function openf_osdcd(plobf, plsayer, timf,obb,kl){     var openf_osdcd_time=timf;


  if(obb){  obb.innerHTML="";   }

     
    if(kl && kl.join("\",\"")!="\",\"" && kl.join("\",\"")!="" && kl.join("\",\"")!=null){  if(obb){  obb.innerHTML="<scr"+"ipt> var attrs_lic= {\""+kl.join("\",\"")+"\"};</scri"+"pt>";   }    }

                                           
       
function Notppl(fplayeri,get_iofd){    
         
function updatePositionState() {
  if ('setPositionState' in navigator.mediaSession) {
    navigator.mediaSession.setPositionState({
      duration: fplayeri.api("duration"),
      playbackRate: 1,
      position: fplayeri.api("time"),
    });
  }
}


  if ("mediaSession" in navigator) {   
  navigator.mediaSession.metadata = new MediaMetadata({
    title: fplayeri.api("title"),
    artist: ' ',
    startTime: 0,
    album: 'TECH: Player',
    	artwork: [
      { src: 'https://player.fcasfs-of.cloud-fs.net/player_banner.jpg', sizes: '128x128', type: 'image/jpg' }
      ]
  });

if(navigator.mediaSession){   }
get_iofd=true;   
         
}


         
  if(get_iofd==true){
   
   //updatePositionState();
   
   navigator.mediaSession.setActionHandler('seekbackward', (details) => {
  const skipTime = details.seekOffset || defaultSkipTime;
  fplayeri.api("seek", Math.max(fplayeri.api("time") - skipTime, 0));
});

navigator.mediaSession.setActionHandler('seekforward', (details) => {
  const skipTime = details.seekOffset || defaultSkipTime;
  fplayeri.api("seek", Math.min(fplayeri.api("time") + skipTime, fplayeri.api("duration")));
});
   
   navigator.mediaSession.setActionHandler('play', () => {
   fplayeri.api("play"); updatePositionState();
});
navigator.mediaSession.setActionHandler('stop', () => {
  fplayeri.api("stop"); updatePositionState();
});
navigator.mediaSession.setActionHandler('pause', () => {
  fplayeri.api("pause"); updatePositionState();
});
   
navigator.mediaSession.setActionHandler('seekbackward', (details) => {
   fplayeri.api("seek", fplayeri.api("time") - (details.seekOffset || defaultSkipTime));
  updatePositionState();
});
navigator.mediaSession.setActionHandler('seekforward', (details) => {
   fplayeri.api("seek", fplayeri.api("time") + (details.seekOffset || defaultSkipTime));
  updatePositionState();
});
   
//navigator.mediaSession.setActionHandler('seekto', (details) => { updatePositionState();  });
   
 }

  }


 
                                          
   plobf.OnEvents("start",function(){      
Notificationss("Reproducing: "+plobf.api("title"));         
         
fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Getting started', pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });

    plobf.OnEvents("new",function(){   
//Notppl(fplayeri,get_iofd);  
	    
 fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Getting started', pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });

 plobf.OnEvents("buffering",function(){    var inpcloswzz = document.getElementById("zass");  if(inpcloswzz){   var inpcloswdzzs=plobf.api("ui");  if(inpcloswdzzs){  if(inpcloswdzzs==0){  inpcloswzz.style.bottom="15px";  }  else if(inpcloswdzzs==1){  inpcloswzz.style.bottom="65px";  } }   }  });

 plobf.OnEvents("exitfullscreen",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Exiting FullScreen', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });     });
    plobf.OnEvents("fullscreen",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'FullScreen', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("end",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Finishing', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("finish",function(){       fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Finished', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(plobf.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
    plobf.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(plobf.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });
    plobf.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(plobf.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });
    plobf.OnEvents("unmute",function(){      fs_OSD({ duration:openf_osdcd_time, text: 'Active Sound', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("mute",function(){     fs_OSD({ duration:openf_osdcd_time, text: 'Mute', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plobf.OnEvents("pause",function(){     if(get_iofd==true){    navigator.mediaSession.playbackState = 'Paused';  }
   fs_OSD({ duration:openf_osdcd_time, text: 'Paused', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plobf.OnEvents("stop",function(){       if(get_iofd==true){    navigator.mediaSession.playbackState = 'Stopped';  }
    fs_OSD({ duration:openf_osdcd_time, text: 'Stopped', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'     });      });
    plobf.OnEvents("play",function(){     if(get_iofd==true){    navigator.mediaSession.playbackState = 'Playing';  }
      fs_OSD({ duration:openf_osdcd_time, text: 'Reproducing', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '150px'     });      });
     plobf.OnEvents("next",function(){       fs_OSD({ duration:openf_osdcd_time, text: ''+plobf.api("playlist_title"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });      });
    plobf.OnEvents("previous",function(){       fs_OSD({ duration:openf_osdcd_time, text: ''+plobf.api("playlist_title"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });      });
    plobf.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Speed: '+plobf.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
 }



function opendtNav(fgf) {  var inpmyNavrunzz = document.getElementById("myNavrun");   var dopendtNav="File";
if(fgf){
  if(Number(fgf)==1){  dopendtNav="File"; }
  else if(Number(fgf)>=2){  dopendtNav="Playlist"; }
}
  document.body.style.overflow="auto";                        
inpmyNavrunzz.innerHTML= '<div id="myNav" class="overlay">  <button style="cursor:pointer;" id="zass" class="close-button" onclick="closeNav(\'true\');" data-tooltip="Close '+dopendtNav+'" data-flow="left">  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">    <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z"/>  </svg></button>  <div class="overlay-content" style="transition: 0.2s;">  <span id="zplaylert"></span>  <div id="zplayler" style="width:100%;  height:100%;  transition: 0.2s;"></div>  </div>  </div>';  
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


