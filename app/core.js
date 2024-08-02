
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


  function create_mdpl_file(ob){  return { get:function(id){  return ob.files[id]; }, get_name:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).name); }, get_size:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).size); },get_type:function(){  return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).type);  }, create_url:function(id){  return fmdplex_loadex_txv(URL.createObjectURL(create_mdpl_file(ob).get(id))); } };   }





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






