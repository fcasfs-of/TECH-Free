
 var scrliptfd2 = document.createElement("link");
    scrliptfd2.setAttribute("rel", "stylesheet");
    scrliptfd2.setAttribute("href", "https://fcasfs-of.cloud-fs.net/info-profile/theme/tooltip.css");
document.getElementsByTagName("head")[0].appendChild(scrliptfd2);
  var scrliptfdu = document.createElement("link");
    scrliptfdu.setAttribute("rel", "stylesheet");
    scrliptfdu.setAttribute("href", "https://fcasfs-of.cloud-fs.net/info-profile/style_2.css");
document.getElementsByTagName("head")[0].appendChild(scrliptfdu);

var scrliptfd1 = document.createElement("link");
    scrliptfd1.setAttribute("rel", "stylesheet");
    scrliptfd1.setAttribute("href", "https://fcasfs-of.cloud-fs.net/info-profile/theme/modal.css");
document.getElementsByTagName("head")[0].appendChild(scrliptfd1);
 var scriptfd1 = document.createElement("script");
    scriptfd1.setAttribute("type", "text/javascript");
    scriptfd1.setAttribute("src", "https://fcasfs-of.github.io/info-profile/scripts/modal.js");
document.getElementsByTagName("head")[0].appendChild(scriptfd1);



function openlinkf(title,url,mn){    cmodal('<span class=\'adsrow\'> '+title+'</span>',url,'Close',mn,'yes');  } 


function listafFiles(arrayInterno, link){   var arrayIntfferno="";  

if(link!=""){
if(arrayInterno){

if(arrayInterno.length > 1){  arrayIntfferno=arrayIntfferno+"";  }

for(var j=0; j<arrayInterno.length; j++){
if(arrayInterno.length > 1){ 

var thumfer="";   
if(arrayInterno[j].poster!=""){
thumfer='<img width="150px" src="'+arrayInterno[j].poster+'"/>  ';
}

arrayIntfferno=arrayIntfferno+'<li style="user-select:none;"  onclick="openlinkf(\''+arrayInterno[j].title+'\',\''+link+'&fileSelect='+(j+1)+'\',\'360\');"> '+thumfer+" >  "+arrayInterno[j].title+"  </li>";
			
         }        } 
    }
}  

return arrayIntfferno;  }




function onstart_file(igh, lisud, run_file, getval_tygepret, degetval_tselett, degetval_tseposttt){  
if(igh){   if(igh!=""){   if(typeof run_file=='function'){  var file_obj = run_file();   

  var linkfrfomd="https://player.fcasfs-of.cloud-fs.net/"+run_file().player_lang+"?fileID="+igh+"&fileView=true"; 
var apoduz = document.getElementById("zplayler");   
							  
if (getval_tygepret=="true") {      runEx(run_file, degetval_tselett, degetval_tseposttt);     }
if (getval_tygepret=="on") {      runEx(run_file, degetval_tselett, degetval_tseposttt);      }

if (lisud=="on") {       apoduz.innerHTML= '<ul style="width: 95%;height: 95%;">'+listafFiles(run_file().list, linkfrfomd)+"</ul>";      }
if (lisud=="true") {      apoduz.innerHTML= '<ul style="width: 95%;height: 95%;">'+listafFiles(run_file().list, linkfrfomd)+"</ul>";      }
                                    
    }
       }      }
}  



function listaFile_mans(arrayInterno, id, link){  var arrayIntfferno=[];
if(arrayInterno){
for(var j=0; j<arrayInterno.length; j++){

arrayIntfferno[j]={
"name":arrayInterno[j].title,
"description":"",
"short_name": id+"_"+(j+1),
"url": link+""+(j+1),  
 "start_url": link+""+(j+1), 
 "scope": link+""+(j+1),
"icons":[ { "src":arrayInterno[j].poster, "sizes": "256x256" } ]
};
    
    }
}  
return arrayIntfferno;  }


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



var fplayeri;  var playerhj;

function runEx(filedru, id, pos){

if(typeof filedru=="function"){
filedru=filedru();
if(filedru){
document.title= filedru.file_title+" - " + document.title;

//"title":"","folder":[]



let manifestfile = { 
 "name": filedru.file_title,
  "description": filedru.file_desc,
  "short_name": "fcasfsof_"+getval_tyget,
  "start_url": location.href, 
  "scope": location.href,
  "lang": "en",
  "icons": [
    {      "src": filedru.cover,      "sizes": "256x256", "type": "image/png"    }
  ],
  "related_applications": [
    {      "platform": "web"    }
  ],
  "display": "standalone",
  "categories": ["fcasfs-of"],
"shortcuts": listaFile_mans(filedru.list, getval_tyget, location.href+"&fileSelect=")

};


var manifestLink = document.getElementById('manifest-link');
let contdent = encodeURIComponent(JSON.stringify(manifestfile));
let urfdl = "data:application/manifest+json,"+contdent;
 manifestLink.setAttribute('href', urfdl);




playerhj = fs_Playerjs({ OSD:filedru.player_osd, id:"zplayler", config:filedru.config, nocontrols:filedru.player_controls, autoplay:filedru.player_autoplay, loop:filedru.player_loop, title:filedru.file_title, file:listaFiles(filedru.list), poster:filedru.cover,"embed":location.href, "url":location.href, plstart:"pf"+id });


fplayeri = playerhj;


playerhj.OnEvents("init",function(){


playerhj.api("seek", Number(pos));

//playerhj.OnEvents("finish",function(){      playerhj.api("next");       });
//playerhj.OnEvents("end",function(){      playerhj.api("next");       });


playerhj.OnEvents("volume",function(){     fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: 'Volume: '+Math.floor(playerhj.api("volume")*100)+"%", pos: osdposito, showAction: false,  actionText: "", width: 'auto'    });      });
  
playerhj.OnEvents("seek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("userseek",function(){      fs_OSD({ duration:openf_osdcd_time, position:osdpositdo, text: ''+convertSecondsDurationto(playerhj.api("time")), pos: osdposito, showAction: false,  actionText: "", width: '180px'   });      });

playerhj.OnEvents("speed",function(){       fs_OSD({ duration:openf_osdcd_time, text: 'Speed: '+playerhj.api("speed"), position:osdpositdo, pos: osdposito, showAction: false,  actionText: "", width: 'auto'     });       });
  
});

   openf_osdcd(document.getElementById("zplayler"),3e3, "", [], 0);   
    
}   }
}


function runExT(filedru, id, pos){
if(typeof filedru=="function"){
var filedrxu=filedru();
if(filedrxu){
document.title= filedrxu.file_title+" - " + document.title;

playerhj = fs_Playerjs({ OSD:false, id:"zplayler", config:{}, nocontrols:0, autoplay:1, loop:0, title:filedrxu.file_title, file:"https://fcasfs-of.cloud-fs.net/info-profile/Files/intro1.mp4", poster:filedrxu.cover,"embed":location.href, "url":location.href  });


playerhj.OnEvents("init",function(){

playerhj.OnEvents("finish",function(){      runExG(filedru, id, pos);       });
playerhj.OnEvents("end",function(){   runExG(filedru, id, pos);       });

});

}    }
}



var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!="") {

var getval_tygepret=getUrlParameter("fileView");
var getval_tygepgret=getUrlParameter("list");

    
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
inpmyNavruz.innerHTML= '<div id="zplayler" style="width:100%; height:100%;  background:#000; color:#fff; transition: 0.2s;"></div><style>#zplayler ul {  width: 95%;    height: 95%; }  #zplayler ul li {     width: 100%;    cursor: pointer;  }    #zplayler ul li img {      display: inline-block;    }       #myNavrun{ display:block; }   #myNavrun, #zplayler, #myNavrun #zplayler{position:fixed;width:100%; top:0px;left:0px;bottom:0px;right:0px; height:100%;z-index:1;}</style> <div id="custimmdf"></div> ';  


var scriptfd = document.createElement("script");
    scriptfd.setAttribute("type", "text/javascript");
    scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/file/"+getval_tyget+".js");
document.getElementsByTagName("body")[0].appendChild(scriptfd);



  
var scrfiptfd = document.createElement("script");
    scrfiptfd.setAttribute("type", "text/javascript");
      scrfiptfd.setAttribute("onload", "onstart_file();");
    scrfiptfd.setAttribute("src", "data:text/javascript,"+encodeURIComponent("onstart_file(getval_tyget, getval_tygepgret,run_file,getval_tygepret, degetval_tselett, degetval_tseposttt);"));
document.getElementsByTagName("body")[0].appendChild(scrfiptfd);
  document.getElementsByTagName("body")[0].onload=function(){  onstart_file(getval_tyget, getval_tygepgret,run_file,getval_tygepret, degetval_tselett, degetval_tseposttt);   };

    
}
  
