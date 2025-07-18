
var filedru={
 file_title:"Tokusatsu Música em Português",
 config:{
 fontweight:"bold",
  coloricons:"FFD700",
  colortexts:"fff"
},
 list:[
{poster:"https://archive.org/download/jaspion-singles-nacionais/jaspion-singles-nacionais.thumbs/Jaspion%20-%20Singles%20Nacionais_000177.jpg",title:"Jaspion - Singles Nacionais",file:"https://archive.org/download/jaspion-singles-nacionais/Jaspion - Singles Nacionais.mp4"},
{poster:"https://archive.org/download/tokusatsu-singles-nacionais-dvd-01/tokusatsu-singles-nacionais-dvd-01.thumbs/Tokusatsu%20-%20Singles%20Nacionais%20-%20DVD%2001_003719.jpg",title:"Tokusatsu - Singles Nacionais - DVD 01",file:"https://archive.org/download/tokusatsu-singles-nacionais-dvd-01/Tokusatsu - Singles Nacionais - DVD 01.mp4"}
],
 cover:"https://archive.org/download/jaspion-singles-nacionais/jaspion-singles-nacionais.thumbs/Jaspion%20-%20Singles%20Nacionais_001135.jpg"
};



function runEx(){
document.title= filedru.file_title+" - " + document.title;

var playerhj = fs_Playerjs({ OSD:true, id:"zplayler", config:filedru.config, nocontrols:0, autoplay:0, loop:0, title:filedru.file_title, file:filedru.list, poster:filedru.cover,"embed":location.href, "url":location.href
  });


var fplayeri = playerhj;


playerhj.OnEvents("init",function(){

playerhj.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(playerhj.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
  
playerhj.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Speed: '+playerhj.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
  
});

   openf_osdcd(document.getElementById("zplayler"),3e3, "", [], 0);   

}

  
      
