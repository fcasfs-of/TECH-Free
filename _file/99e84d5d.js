
document.title= "" + document.title;

var playerhj = fs_Playerjs({ OSD:true, id:"plo", config:{
 fontweight:"bold",

}, nocontrols:0, autoplay:0, loop:0, title:"", file:[

]
  });


playerhj.OnEvents("init",function(){

fplayeri.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(playerhj.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
  
playerhj.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Speed: '+playerhj.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
  
});
  
  
      
