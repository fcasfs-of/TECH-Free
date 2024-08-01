  var mdpl_handleFileSelectsa=[];   var mdpl_handleFilehistoicr=[];


function mdpl_handleselect(evt, call, cc, bmg){   var mdpl_handleselectcontoels=0;
if(settingsplayer){  if(settingsplayer.controls==false){   mdpl_handleselectcontoels=1;  }  }
if(cc<1){  /*mdpl_handleselect(evt, [{"file":"#","title":"file","poster":"", "url":'',"timer":""},]);*/  }
if(cc==1){     fplayeri = new Playerjs({id:evt, nocontrols:mdpl_handleselectcontoels, autoplay:1, loop:0, title:call[0].title, file:call[0].file, poster:"", player:bmg,"url":"https"+"://fcasfs-of.github.io/TECH-Free",  });    
settingsplayer.modeplayer="url";
settingsplayer.title=call[0].title;  settingsplayer.files=call;
          is_playerd_allid(settingsplayer, call, fdplayeri);         }
if(cc>1){    fplayeri = new Playerjs({id:evt, nocontrols:mdpl_handleselectcontoels, autoplay:1, loop:0, title:"", file:call, poster:"", player:bmg,"url":"https"+"://fcasfs-of.github.io/TECH-Free",   }); 
settingsplayer.modeplayer="playlist";
settingsplayer.files=call;
is_playerd_allid(settingsplayer, call, fdplayeri);  }
}


function mdpl_hzandleselect(cc,cl){
if(cc<1){cl();}
else if(cc==1){ cl(); }
else if(cc>1){ cl(); }
}



function mdpl_handleFileSelect(evt, call){    mdpl_handleFileSelectsa=[];
for(var x=0;x<evt.files.length;x++){  mdpl_handleFileSelectsa[x]={"file":create_mdpl_file(evt).create_url(x),"title":create_mdpl_file(evt).get_name(x)};} call(mdpl_handleFileSelectsa, evt.files.length);   }

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

function opendtNav() {  var inpmyNavrunzz = document.getElementById("myNavrun");
inpmyNavrunzz.innerHTML= '<div id="myNav" class="overlay">  <a href="javascript:void(0)" id="zass" class="closebtn csdslosebtn" onclick="closeNav(\'true\');">X</a>  <div class="overlay-content" style="transition: 0.2s;">  <div id="zplayler" style="width:100%;  height:100%;  transition: 0.2s;"></div>  </div>  </div>';  
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
  //inpss45dfsdfszz.style.display="none";   //location.reload();
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



var xxcdpl_setvidedfsdfdaaa='';
if(var_versionpropg=="true"){
var xxcdpl_setvidedfsdfdaaa='<span id="zzdfsspl-pronotaa" style="color: #fff;"><span class="free-trial-btnz free-trial-secondary btn"> Your FREE Trial Now! <span class="btn-subtext"></span></span></span>';
}
var inpszzzszpplaas45dfsdfszz = document.getElementById("zpplaaszz");    inpszzzszpplaas45dfsdfszz.innerHTML=""+xxcdpl_setvidedfsdfdaaa;

  var inpss45435rwles = document.getElementById('inpssle');

function isopenduuf(insss667ddd){   opendtNav();
  var inpssf45435rwles = document.getElementById('inpssle');

inpssf45435rwles.onchange=function(){   opendtNav();    //insss667ddd.innerHTML="";  pl_dispNav("zplayler").innerHTML="";  
 mdpl_handleFileSelect(inpssf45435rwles, function(tb, cc){  opendtNav();       //pl_dispNav("zplayler").innerHTML="";
  mdpl_handleselect("zplayler", tb, cc, var_versplayerpg);      //inpss45435rwles.multiple = "true";
 openNav();      //pl_dispNav("plvideo").addEventListener('ended', function(){   closeNav("false");    });
});};
                                 
}


//isopenduuf(insss667ddd);


 var inpss4infdfpssle5435rwles = document.getElementById('infdfpssle');
//inpss4infdfpssle5435rwles.click();    //mdpl_handleselect("zplayler", [{"file":"#","title":"file","poster":"", "url":'',"timer":""},]);








