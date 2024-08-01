
var settingsplayer={  
id:"fs11",
active:"yes",
controls:0,
typeplayer:1,
modeplayer:"url",
loop:0,
autoplay:1,
title:"",
poster:"",
files:"#",
fontstyle:"",
textdecoration:"",
texttransform:"",
fontweight:"bold",
colortexts:"FFFFFF",
coloricons:"FFFFFF",
volume:1,
mute:0,
menu:0,
seek:0,
share:0,
showplaylist:0,
fullscreen:0,
contextmenu_display:"yes",
share_disp:"no",
contextmenu_namedisplay:"TECH - PLAYER: BETA",
error:"",
 }; 

var listfrr_is={};   var fdplayeri;


function stringno_valtext(id,g) {   var dfyyggdfgetLastdRofw=id;   if(id=="undefined"){     dfyyggdfgetLastdRofw=g;    }       if(id==undefined){     dfyyggdfgetLastdRofw=g;    }    return dfyyggdfgetLastdRofw;    }


  function pl_dispNav(a) {  return document.getElementById(a);  }      function fmdplex_loadex_txv(t){  if(t==""){    return "";  }   if(t=="undefined"){    return "";  }     if(t==undefined){    return "";  }   else {  return t; }  }   


  function create_mdpl_file(ob){  return { get:function(id){  return ob.files[id]; }, get_name:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).name); }, get_size:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).size); },get_type:function(){  return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).type);  }, create_url:function(id){  return fmdplex_loadex_txv(URL.createObjectURL(create_mdpl_file(ob).get(id))); } };   }





function is_playerd_allid(config, links, fplayeri){

var inpsdflffdddplaydrd5rwles;
  var activeis_playerd_allid=stringno_valtext(config.error,"");


if(activeis_playerd_allid==""){

var settingsplayercontrolls=0;
if(stringno_valtext(config.controls,"0")=="1"){    settingsplayercontrolls=1;    }



var settifgfgngsplafyercontrollsfd="font-style: "+stringno_valtext(config.fontstyle,"")+";  ";
if(stringno_valtext(config.fontstyle,"")==""){       settifgfgngsplafyercontrollsfd="";    }
var settifgfgngsplafyercontdrollsfd="text-decoration: "+stringno_valtext(config.textdecoration,"")+";  ";
if(stringno_valtext(config.textdecoration,"")==""){       settifgfgngsplafyercontdrollsfd="";    }
var settifgfgngsplafyercdsontrollsfd="text-transform: "+stringno_valtext(config.texttransform,"")+";  ";
if(stringno_valtext(config.texttransform,"")==""){       settifgfgngsplafyercdsontrollsfd="";    }

var settifgfgngsplafyercdsontsdrollsfd="";
if(stringno_valtext(config.fontweight,"")=="bold"){       settifgfgngsplafyercdsontsdrollsfd="font-weight: bold; ";    }



var settifgfgngspplaterutd=stringno_valtext(Number(config.typeplayer),1);
if(stringno_valtext(config.typeplayer,"")==""){       settifgfgngspplaterutd=1;    }


var settifgfgngmdoefillsfd="#";
if(stringno_valtext(config.modeplayer,"")==""){       settifgfgngmdoefillsfd="#";    }
if(stringno_valtext(config.modeplayer,"")=="playlist"){       var settifgfgngmdoefillsfd=[{file:"#",},];    }


if(stringno_valtext(config.modeplayer,"")=="url"){       
   settifgfgngmdoefillsfd=links  
  if(stringno_valtext(links,"")==""){       settifgfgngmdoefillsfd="#";    }

    }

if(stringno_valtext(config.modeplayer,"")=="playlist"){       
   settifgfgngmdoefillsfd=links;
  if(stringno_valtext(links,"")==""){       settifgfgngmdoefillsfd="#";    }

    }



var settifgfgngdfdsfsfontrollsfd="color: #"+stringno_valtext(config.colortexts,"FFFFFF")+";  ";
if(stringno_valtext(config.colortexts,"#FFFFFF")==""){       settifgfgngdfdsfsfontrollsfd="";    }
var settifgfgndsdddfsfontrollsfd="fill: #"+stringno_valtext(config.coloricons,"FFFFFF")+";  ";
if(stringno_valtext(config.coloricons,"#FFFFFF")==""){       settifgfgndsdddfsfontrollsfd="";    }




var settingsplaautoplatrolls=0;
if(stringno_valtext(config.autoplay,"0")=="1"){    settingsplaautoplatrolls=1;    }

var settingsplaaulooprolls=0;
if(stringno_valtext(config.loop,"0")=="1"){    settingsplaaulooprolls=1;    }



var settifgfgngsplatitle=stringno_valtext(config.title,"")+"";
if(stringno_valtext(config.title,"")==""){       settifgfgngsplatitle="";    }

var settifgfgngspposterlatitle=stringno_valtext(config.poster,"")+"";
if(stringno_valtext(config.poster,"")==""){       settifgfgngspposterlatitle="";    }



var inpsspldsetcusotmdfsdfszz = document.getElementById("pldsetcusotm");
var inpsspldsetcusotmdfsddfszz = document.getElementById("zplayler");
inpsspldsetcusotmdfsddfszz.innerHTML="";


//  if(stringno_valtext(config.modeplayer,"")=="playlist"){       
//   var inpsdffyerd5rwles=settifgfgngmdoefillsfd.split(";");

//       inpsdflffdddplaydrd5rwles=[];

//  for(var xf=0;xf<inpsdffyerd5rwles.length;xf++){

// var inpsdfldfd_odles=":  ";
//     if(settifgfgngsplatitle==""){   inpsdfldfd_odles="";   }

// var inpsdf_ddfilelinkl=inpsdffyerd5rwles[xf];
// if(inpsdf_ddfilelinkl!=""){

// var inpsdf_ddfilelinklsf=inpsdflffdddplaydrd5rwles.length;
//   if(inpsdf_ddfilelinklsf<1){   inpsdf_ddfilelinklsf=0;  }

// inpsdflffdddplaydrd5rwles[inpsdf_ddfilelinklsf]={ title:settifgfgngsplatitle+inpsdfldfd_odles+(inpsdf_ddfilelinklsf+1), file:inpsdf_ddfilelinkl };
// }

// }


//var inpsspldsetcusotmdfsdfszz = document.getElementById("pldsetcusotm");
//var inpsspldsetcusotmdfsddfszz = document.getElementById("zplayler");
//inpsspldsetcusotmdfsddfszz.innerHTML="<div style=\"position: fixed;  overflow:auto;  width: 100%;  height: 100%;   top: 0;  left: 0;  right: 0;  bottom: 0;  background-color: rgba(0,0,0,0.5);    z-index: 2;\"> <div style=\"position: relative;  width: 80%;  top:50%;  left:0; transform: translateY(-50%);   margin: auto;  \"> <div class=\"gdiv info\">  <p>Não Encontrado.</p>  </div>   </div>   </div>";
//inpsspldsetcusotmdfsdfszz.innerHTML="";


}
if(stringno_valtext(config.modeplayer,"")=="url"){     
   inpsdflffdddplaydrd5rwles=settifgfgngmdoefillsfd;   
}






var inpsdlinksdslaydrd5rwles="";
if (config.active=="yes"){
inpsdlinksdslaydrd5rwles="?fileid="+config.id;
}


 
fplayeri = new Playerjs({id:"zplayler", autoplay:settingsplaautoplatrolls, loop:settingsplaaulooprolls, title:settifgfgngsplatitle, file:inpsdflffdddplaydrd5rwles, poster:settifgfgngspposterlatitle, player:settifgfgngspplaterutd, nocontrols:settingsplayercontrolls, "url":"https://"+"drive.cloud-fs.net/p/player.html"+inpsdlinksdslaydrd5rwles, });

if(config.share_disp=="no"){
fplayeri = new Playerjs({id:"zplayler", autoplay:settingsplaautoplatrolls, loop:settingsplaaulooprolls, title:settifgfgngsplatitle, file:inpsdflffdddplaydrd5rwles, poster:settifgfgngspposterlatitle, player:settifgfgngspplaterutd, nocontrols:settingsplayercontrolls, });
}

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
inpsspldsetcusotmdfsdfszz.innerHTML="<sty"+"le>pjsdiv[i=\"9\"]:before{  visibility: "+configdcontextmenu_display+";   content:'"+configfcontextmenu_dnameisplay+"'; }   #zplayler *, #zplayler *:before, #zplayler *:after{    "+settifgfgndsdddfsfontrollsfd+settifgfgngdfdsfsfontrollsfd+settifgfgngsplafyercontrollsfd+settifgfgngsplafyercontdrollsfd+settifgfgngsplafyercdsontrollsfd+settifgfgngsplafyercdsontsdrollsfd+"   }</st"+"yle>";


//var inploaddedicontcusotmdfsddfszz = document.getElementById("loaddedicon");
//inploaddedicontcusotmdfsddfszz.innerHTML="";



}
else if(activeis_playerd_allid=="yes"){

var inpsspldsetcusotmdfsdfszz = document.getElementById("pldsetcusotm");
var inpsspldsetcusotmdfsddfszz = document.getElementById("zplayler");
inpsspldsetcusotmdfsddfszz.innerHTML="<div style=\"position: fixed;  overflow:auto;  width: 100%;  height: 100%;   top: 0;  left: 0;  right: 0;  bottom: 0;  background-color: rgba(0,0,0,0.5);    z-index: 2;\"> <div style=\"position: relative;  width: 80%;  top:50%;  left:0; transform: translateY(-50%);   margin: auto;  \"> <div class=\"gdiv danger\">  <p>Não Encontrado.</p>  </div>   </div>   </div>";
inpsspldsetcusotmdfsdfszz.innerHTML="";

//var inploaddedicontcusotmdfsddfszz = document.getElementById("loaddedicon");
//inploaddedicontcusotmdfsddfszz.innerHTML="";

}


}






