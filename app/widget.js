function onget_d(df){  return df+" Arquivos"; }


  var mdpl_handleFileSelectsa=[];    var mdpl_handleFilehistoicr=[];

  var osdposito="top-left";    var osdpositdo="absolute";

var vars={};     var  localhs=[];

var api_tok=[ "https://fcasfs-of.github.io/", "TECH-Free/", "https://drive-files.cloud-fs.net", "/p/player-embed.html" ];


var mdpl_handlefFileSelectsa=[];

function mdpld_handleFileSelect(evt, call, mkk, jj){
 mdpl_handlefFileSelectsa=[];

for(var x=0;x<evt.files.length;x++){
mdpl_handlefFileSelectsa[x]={ "file":create_mdpl_file(evt).create_url(x),"title":create_mdpl_file(evt).get_name(x), id:"sv"+(x)};
}

call(mdpl_handlefFileSelectsa, evt.files.length, mkk, jj);
}




 function openf_osdcd(plobf, plsayer, timf,obb,kl){     var openf_osdcd_time=timf;

  if(obb){  obb.innerHTML="";   }

    if(kl && kl.join("\",\"")!="\",\"" && kl.join("\",\"")!="" && kl.join("\",\"")!=null){  if(obb){  obb.innerHTML="<scr"+"ipt> var attrs_lic= {\""+kl.join("\",\"")+"\"};</scri"+"pt>";   }    }
     plobf.OnEvents("init",function(){    
    //vars = fplayeri.api("vars");
                                    
   plobf.OnEvents("start",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Iniciando', pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plobf.OnEvents("new",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Iniciando', pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plobf.OnEvents("exitfullscreen",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Saindo da Tela Cheia', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });     });
    plobf.OnEvents("fullscreen",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Tela Cheia', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("end",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Finalizando', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("finish",function(){       fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Terminado', pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(plobf.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
    plobf.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(plobf.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });
    plobf.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(plobf.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });
    plobf.OnEvents("unmute",function(){      fs_OSD({ duration:openf_osdcd_time, text: 'Som Ativo', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '180px'    });      });
    plobf.OnEvents("mute",function(){     fs_OSD({ duration:openf_osdcd_time, text: 'Mutado', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plobf.OnEvents("pause",function(){      fs_OSD({ duration:openf_osdcd_time, text: 'Pausado', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'    });      });
    plobf.OnEvents("stop",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Parado', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '120px'     });      });
    plobf.OnEvents("play",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Reproduzindo', position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: '150px'     });      });
     plobf.OnEvents("next",function(){       fs_OSD({ duration:openf_osdcd_time, text: ''+plobf.api("playlist_title"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });      });
    plobf.OnEvents("previous",function(){       fs_OSD({ duration:openf_osdcd_time, text: ''+plobf.api("playlist_title"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });      });
    plobf.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Velocidade: '+plobf.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
    });  

}



function mdpl_handleselect(evt, call, cc, bmg){   var mdpl_handleselectcontoels=0;
if(settingsplayer){  
  
settingsplayer["colortexts"]="63B8FF";    settingsplayer["coloricons"]="00EEEE";
settingsplayer["color_texts"]="#63B8FF";    settingsplayer["color_icons"]="#00EEEE";

  if(settingsplayer.controls==false){   mdpl_handleselectcontoels=1;  }  }
                                               
if(cc<1){    }

else if(cc==1){       var img_ond="";
  if(call[0].type && call[0].type.split('/')){
    if(call[0].type.split('/')[0] === 'image') {  img_ond=call[0].file;  }
  }
if(call[0].type && call[0].type==="application/pdf"){
 // document.getElementById(evt).innerHTML="<ifra"+'me src="'+call[0].file+'" width="100%" height="100%" style="border:none;"></i'+"frame>";
} else {   
  fplayeri = fs_Playerjs({ config:settingsplayer, OSD:true, customtext:{ age:call[0].type },id:evt, nocontrols:mdpl_handleselectcontoels, autoplay:0, loop:0, title:call[0].title, file:call[0].file, poster:img_ond, player:bmg,"url":location.href });
//is_playerd_allid(settingsplayer, call, fplayeri);  
 //is_playerd_allid(getUrlVars(location.href), call, fplayeri);       
               
openf_osdcd(fplayeri, document.getElementById("zplayler"),3e3, document.getElementById("zplaylert"), api_tok, cc);
}
               
}

else if(cc>=2){   
     fplayeri = fs_Playerjs({ config:settingsplayer, OSD:true, customtext:{ age:onget_d(cc) },id:evt, nocontrols:mdpl_handleselectcontoels, autoplay:0, loop:0, title:"", file:call, poster:"", player:bmg,"url":location.href });
//is_playerd_allid(settingsplayer, call, fplayeri);  
// is_playerd_allid(getUrlVars(location.href), call, fplayeri);     
  
 openf_osdcd(fplayeri, document.getElementById("zplayler"),3e3, document.getElementById("zplaylert"), api_tok, cc);   
 }
}


function mdpl_hzandleselect(cc,cl){
if(cc<1){cl();}
else if(cc==1){ cl(); }
else if(cc>1){ cl(); }
}



function mdpl_handleFileSelect(evt, call){    mdpl_handleFileSelectsa=[];
for(var x=0;x<evt.files.length;x++){  
  var img_fdondd="";
  if(create_mdpl_file(evt).get_type(x) && create_mdpl_file(evt).get_type(x).split('/')){
    if(create_mdpl_file(evt).get_type(x).split('/')[0] === 'image') {  img_fdondd=create_mdpl_file(evt).create_url(x);  }
  }
  mdpl_handleFileSelectsa[x]={"file":create_mdpl_file(evt).create_url(x), "poster":img_fdondd, "title":create_mdpl_file(evt).get_name(x),"type":create_mdpl_file(evt).get_type(x) };} call(mdpl_handleFileSelectsa, evt.files.length);   }

var inpss45dfsdfszz = document.getElementById("myNav");  var insss667ddd = document.getElementById("zplayler");   var insss667zassddd = document.getElementById("zass");

function openNsdsd() {  
var insss667zassdddaaddd = document.getElementById("zass");   var zasss_ddfsfdsfsfd = pl_dispNav('contols_pls');

if(zasss_ddfsfdsfsfd.style.bottom=="0px"){
if(var_versionpropg=="true"){
var appsetupdfssplzzpronotsar = document.getElementById('dfsspl-pronot');
appsetupdfssplzzpronotsar.style.display="block";
if(fullscreen===true){   
appsetupdfssplzzpronotsar.style.display="none";
}
}
insss667zassdddaaddd.style.bottom="94px";
if(var_versionpropg=="true"){
var appsetupdfssplzzpronotsar = document.getElementById('dfsspl-pronot');
appsetupdfssplzzpronotsar.style.display="none";
}
}
if(zasss_ddfsfdsfsfd.style.bottom=="-80px"){
insss667zassdddaaddd.style.bottom="10px";
if(var_versionpropg=="true"){
var appsetupdfssplzzpronotsar = document.getElementById('dfsspl-pronot');
appsetupdfssplzzpronotsar.style.display="block";
if(fullscreen===true){   
appsetupdfssplzzpronotsar.style.display="none";
}
}
}

}


var inpmyNavrunzz = document.getElementById("myNavrun");   var batiir="false";

function opendtNav(fgf) {  var inpmyNavrunzz = document.getElementById("myNavrun");   var dopendtNav="Arquivo";
if(fgf){
  if(Number(fgf)==1){  dopendtNav="Arquivo"; }
  else if(Number(fgf)>=2){  dopendtNav="Lista de Reprodução"; }
}
                         
inpmyNavrunzz.innerHTML= '<div id="myNav" class="overlay">  <button style="cursor:pointer;" id="zass" class="closebtn csdslosebtn" onclick="closeNav(\'true\');" data-tooltip="Fechar '+dopendtNav+'" data-flow="left">X</button>  <div class="overlay-content" style="transition: 0.2s;">  <span id="zplaylert"></span>  <div id="zplayler" style="width:100%;  height:100%;  transition: 0.2s;"></div>  </div>  </div>';  
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

function closedtNNav(cd) {  var inpmyNavrunzz = document.getElementById("myNavrun");     inpmyNavrunzz.innerHTML="";    }


function openNav() {    //penNsdsess="true";	
var inpss45dfsdfszz = document.getElementById("myNav");
var insss667ddd = document.getElementById("zplayler");
var insss667zassddd = document.getElementById("zass");
var inpss45dfsdfszz = document.getElementById("myNav");
inpss45dfsdfszz.style.display = "block";   //openNsdsd();
}



function run_modelop() {    var inpss45435rwles = document.getElementById('inpssle');   inpss45435rwles.click();     }


function closeNav(cd) {
var inpss45dfsdfszz = document.getElementById("myNav");   var insss667ddd = document.getElementById("zplayler");   var insss667zassddd = document.getElementById("zass");   var inpss45dfsdfszz = document.getElementById("myNav");
var inpss45435rwles = document.getElementById('inpssle');   inpss45435rwles.value="";
mdpl_handleselect("zplayler", [{"file":"#","title":" "}], 1, var_versplayerpg);  

//openNsdsd();//penNsdsess="false";	

var infdpsszpplaas45dfsdfszz = document.getElementById("formmgild");
//infdpsszpplaas45dfsdfszz.innerHTML='<input type="file" class="lk" id="inpssle" multiple="multiple" name="files" accept="video/*,audio/*"><button class="btn" onclick="inpss45435rwles.click();" id="infdfpssle" style="transition: 0.2s;width:90%"><img src="multimedia-video-player-icon.png"/><div style="padding:4px;">Abrir Arquivo</div></button>';
//isopenduuf(insss667ddd);

//mdpl_handleFileSelectsa=[];  //pl_dispNav("zplayler").innerHTML=""; //insss667ddd.innerHTML="";

var inpsszpplaas45dfsdfszz = document.getElementById("zpplaas");   inpsszpplaas45dfsdfszz.innerHTML="";

inpss45dfsdfszz.style.display = "none";     insss667zassddd.style.display="none";


if(cd=="true"){  
 batiir="false";    insss667ddd.innerHTML="";   pl_dispNav("zplayler").innerHTML="";
  //inpss45dfsdfszz.style.display="none";   
  location.reload();
   }
else if(cd=="false"){       batiir="true";    
  }

//openNsdsd();

closedtNNav(cd);


if(batiir=="true"){  
//inpsszpplaas45dfsdfszz.innerHTML='<button class="btn" onclick="openNav(); " style="width:90%;  transition: 0.2s;"><img src="Apps-Player-Video-icon - Cd.png"/><br/><div style="padding:4px;">Open Recent File</div></button><br/><br/><button class="btn" onclick="closeNav(\'true\') " style="width:90%;  transition: 0.2s;"><div style="padding:4px;"><img src="Apps-Player-Video-icon.png"/><br/>Close Recent File</div></button> <br/><br/>';
}

//openNsdsd();

 var inpss4infdfpssle5435rwles = document.getElementById('infdfpssle');
//inpss4infdfpssle5435rwles.click();
}



function zpl_loadddzzzsad(){  //openNsdsd();
insss667zassddd.style.display="block";
//pl_dispNav("").style.height="100%";
//pl_dispNav("plviplao-zplayler").style.position="z#noneplfs";
//openNsdsd();
}



function preventDefaults(e) {  e.preventDefault();  e.stopPropagation();  }

function handleFiles(files) {
//mdpl_handleFileSelect(inpssf45435rwles, function(tb, cc){  opendtNav(cc); 
 // mdpl_handleselect("zplayler", tb, cc, var_versplayerpg);   
 //openNav();    
//});
}

function handleDrop(e) {
  e.preventDefault();
  const files = e.dataTransfer.files;
 var inpssf45435rwles = document.getElementById('inpssle');
  if (files.length) {
    inpssf45435rwles.files = files;
   // handleFiles(files);
  }
}



var xxcdpl_setvidedfsdfdaaa='';
if(var_versionpropg=="true"){
var xxcdpl_setvidedfsdfdaaa='<span id="zzdfsspl-pronotaa" style="color: #fff;"><span class="free-trial-btnz free-trial-secondary btn"> Your FREE Trial Now! <span class="btn-subtext"></span></span></span>';
}
var inpszzzszpplaas45dfsdfszz = document.getElementById("zpplaaszz");    inpszzzszpplaas45dfsdfszz.innerHTML=""+xxcdpl_setvidedfsdfdaaa;

  var inpss45435rwles = document.getElementById('inpssle');

function isopenduuf(insss667ddd){   opendtNav();
  var inpssf45435rwles = document.getElementById('inpssle');
                            
inpssf45435rwles.onchange=function(){   opendtNav();    //insss667ddd.innerHTML="";  pl_dispNav("zplayler").innerHTML="";  
 mdpl_handleFileSelect(inpssf45435rwles, function(tb, cc){  opendtNav(cc);       //pl_dispNav("zplayler").innerHTML="";
  mdpl_handleselect("zplayler", tb, cc, var_versplayerpg);      //inpss45435rwles.multiple = "true";
 openNav();      //pl_dispNav("plvideo").addEventListener('ended', function(){   closeNav("false");    });
});};
 
document.querySelector(".darkmode").addEventListener('dragover', preventDefaults);
document.querySelector(".darkmode").addEventListener('dragenter', preventDefaults);
document.querySelector(".darkmode").addEventListener('dragleave', preventDefaults);

//document.querySelector(".darkmode").addEventListener('drop', handleDrop);
                                 
inpssf45435rwles.addEventListener('dragover', preventDefaults);
inpssf45435rwles.addEventListener('dragenter', preventDefaults);
inpssf45435rwles.addEventListener('dragleave', preventDefaults);

//inpssf45435rwles.addEventListener('drop', handleDrop);

}


isopenduuf(insss667ddd);


 var inpss4infdfpssle5435rwles = document.getElementById('infdfpssle');
//inpss4infdfpssle5435rwles.click();    //mdpl_handleselect("zplayler", [{"file":"#","title":"file","poster":"", "url":'',"timer":""},]);






 const dropContainer = document.querySelector(".darkmode");
  const fileInput = document.getElementById("inpssle");

  dropContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  }, false);

  dropContainer.addEventListener("dragenter", () => {
    dropContainer.classList.add("drag-active");
  });

  dropContainer.addEventListener("dragleave", () => {
    dropContainer.classList.remove("drag-active");
  });

  dropContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    dropContainer.classList.remove("drag-active");
    fileInput.files = e.dataTransfer.files;
    fileInput.onchange(fileInput);
  });







