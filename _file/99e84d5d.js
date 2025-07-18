
document.title= "Tokusatsu Música em Português - " + document.title;

var playerhj = fs_Playerjs({ OSD:true, id:"myNavrun", config:{
 fontweight:"bold",

}, nocontrols:0, autoplay:0, loop:0, title:"", file:[
{title:"Jaspion%20-%20Singles%20Nacionais",file:"https%3A%2F%2Farchive.org%2Fdownload%2Fjaspion-singles-nacionais%2FJaspion%20-%20Singles%20Nacionais.mp4"},
{title:"Tokusatsu%20-%20Singles%20Nacionais%20-%20DVD%2001",file:"https%3A%2F%2Farchive.org%2Fdownload%2Ftokusatsu-singles-nacionais-dvd-01%2FTokusatsu%20-%20Singles%20Nacionais%20-%20DVD%2001.mp4"}
]
  });


playerhj.OnEvents("init",function(){

playerhj.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(playerhj.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
  
playerhj.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Speed: '+playerhj.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
  
});
  
  
      
