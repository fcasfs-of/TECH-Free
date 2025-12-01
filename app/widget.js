function onget_d(df){  return df+" Arquivos"; }

function on_lanf(ifd){  
  var on_lanf_list= {
[1]:"Ajustar largura",
[2]:"Ajustar altura",
[3]:"Ajustar página",
[4]:"Primeira página",
[5]:"Última página",
[6]:"Girar país no sentido horário",
[7]:"Girar no sentido horário",
[8]:"Rolagem vertical",
[9]:"Rolagem horizontal"
  }; 
return on_lanf_list[ifd];   }


  var mdpl_handleFileSelectsa=[];    var mdpl_handleFilehistoicr=[];

  var osdposito="top-center";    var osdpositdo="absolute";

var vars={};     var  localhs=[];

var api_tok=[ "https://fcasfs-of.github.io/", "TECH-Free/", "https://drive-files.cloud-fs.net", "/p/player-embed.html" ];


var mdpl_handlefFileSelectsa=[];

function mdpld_handleFileSelect(evt, call, mkk, jj){
 mdpl_handlefFileSelectsa=[];

for(var x=0;x<evt.files.length;x++){
mdpl_handlefFileSelectsa[x]={ "casturl":create_mdpl_file(evt).create_url(x), "castname":create_mdpl_file(evt).get_name(x), "file":create_mdpl_file(evt).create_url(x),"title":create_mdpl_file(evt).get_name(x), id:"sv"+(x)};
}

call(mdpl_handlefFileSelectsa, evt.files.length, mkk, jj);
}






function updateFileName(fileName) {  document.getElementById('file-name').innerHTML = fileName;   }
function clearResult(fileListUl) {  updateFileName('');  fileListUl.innerHTML = '';  }

async function fs_loadZip(f, ngh, fileListUl) {
  updateFileName(f.name);
  const zip = await JSZip.loadAsync(f);
  zip.forEach((relativePath, zipEntry) => {
    const div = document.createElement('li');
     div.style='border: 1px solid #ddd; color: #000;  margin-top: -1px;   background-color: #f6f6f6;  padding: 12px;';
    div.innerHTML = zipEntry.name;
    div.title = relativePath;
    if(ngh==true){
    div.onclick = async () => {
      const stringContent = await zipEntry.async('text');
      document.getElementById('inner-file-name').innerHTML = zipEntry.name;
      document.getElementById('file-content').innerHTML = stringContent.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
    }
    }
    fileListUl.appendChild(div);
  })
}


function laoded_app_pdf(PDFFILE){

function dataURItoBinArray(data) {
  var binary = atob(data);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Uint8Array(array);
}

document.querySelector("#opendoc").addEventListener("change", function (e) {
  let file = e.target;
  let reader = new FileReader();
  reader.onload = async function () {
    await pdfViewer.loadDocument({
      data: dataURItoBinArray(reader.result.replace(/^data:.*;base64,/, ""))
    });
    await pdfThumbnails
      .loadDocument({
        data: dataURItoBinArray(reader.result.replace(/^data:.*;base64,/, ""))
      })
      .then(() => pdfThumbnails.setZoom("fit"));
  };
  if (file.files.length > 0) {
    reader.readAsDataURL(file.files[0]);
    document.querySelector("#filedownload").download = document.querySelector(
      "#opendoc"
    ).files[0].name;
  }
});


function setHorizontal() {
  document.querySelector(".maindoc").classList.add("horizontal-scroll");
  pdfViewer.refreshAll();
}
function togglethumbs(el) {
  if (el.classList.contains("pushed")) {
    el.classList.remove("pushed");
    document.querySelector(".thumbnails").classList.add("hide");
  } else {
    el.classList.add("pushed");
    document.querySelector(".thumbnails").classList.remove("hide");
  }
}
function hideselected() {
  let $selected = pdfThumbnails.$container.find(".selected");
  let i = $selected.data("page");
  $selected.toggleClass("hidden");
  pdfViewer.$container
    .find('.pdfpage[data-page="' + i + '"]')
    .toggleClass("hidden");
  pdfViewer.scrollToPage(i);
}
let pdfViewer = fs_PDFPlayerjs($(".maindoc"), {
  zoomValues: [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4],

  onZoomChange: function (zoom) {
    zoom = parseInt(zoom * 10000) / 100;
    $(".zoomval").text(zoom + "%");
  },

  onActivePageChanged: function (page) {
    let pageno = $(page).data("page");
    let pagetotal = this.getPageCount();

    if (!$(page).hasClass("hidden")) {
      pdfThumbnails.setActivePage(pageno);
      $("#pageno").val(pageno);
      $("#pageno").attr("max", pagetotal);
      $("#pagecount").text("de " + pagetotal);
    }
  },

  onDocumentReady: function () {
    pdfViewer.setZoom("fit");
    pdfViewer.pdf.getData().then(function (data) {
      document.querySelector("#filedownload").href = URL.createObjectURL(
        new Blob([data], { type: "application/pdf" })
      );
      document.querySelector("#filedownload").target = "_blank";
    });
  }
});

pdfViewer.loadDocument(PDFFILE).then(function () {
  //document.querySelector("#filedownload").download = PDFFILE;
});

let pdfThumbnails = fs_PDFPlayerjs($(".thumbnails"), {
  zoomFillArea: 0.7,
  onNewPage: function (page, i) {
    $('<div class="numbering">').text(i).appendTo(page);
    page.on("click", function () {
      pdfThumbnails.setActivePage(page.data("page"));
      if (!pdfViewer.isPageVisible(page.data("page"))) {
        pdfViewer.scrollToPage(page.data("page"));
      }
    });
  },
  onDocumentReady: function () {
    this.setZoom("fit");
  }
});

pdfThumbnails.setActivePage = function (pageno) {
  this.$container.find(".pdfpage").removeClass("selected");

  let $npage = this.$container
    .find('.pdfpage[data-page="' + pageno + '"]')
    .addClass("selected");
  $("#hideselected").removeClass("pushed");
  if ($npage.hasClass("hidden")) $("#hideselected").addClass("pushed");

  if (!this.isPageVisible(pageno)) {
    this.scrollToPage(pageno);
  }
}.bind(pdfThumbnails);


document.querySelector("#btn_thums").onclick= function() {  togglethumbs(this);  };
document.querySelector("#btn_pvolt").onclick= function() {  pdfViewer.prev();  };
document.querySelector("#btn_pvproc").onclick= function() {   pdfViewer.next();    };
document.querySelector("#pageno").onchange= function() {  pdfViewer.scrollToPage(parseInt(this.value)); };
document.querySelector("#btnszoomin").onclick= function() {  pdfViewer.setZoom('in');  };
document.querySelector("#btnszoomout").onclick= function() { pdfViewer.setZoom('out');  };
document.querySelector("#btns_cprf").onclick= function() {  this.parentNode.classList.toggle('show'); };
document.querySelector("#btn_dorpsdf").onclick= function() {  this.parentNode.classList.toggle('show'); };
document.querySelector("#btn_dorpsdf0").onclick= function() {  pdfViewer.setZoom("width"); return false;  };
document.querySelector("#btn_dorpsdf1").onclick= function() {  pdfViewer.setZoom("height"); return false;  };
document.querySelector("#btn_dorpsdf3").onclick= function() {  pdfViewer.setZoom("fit"); return false;   };
document.querySelector("#btn_dorpsdf4").onclick= function() {  pdfViewer.setZoom(0.5); return false;  };
document.querySelector("#btn_dorpsdf5").onclick= function() {  pdfViewer.setZoom(0.75); return false;  };
document.querySelector("#btn_dorpsdf6").onclick= function() {  pdfViewer.setZoom(1); return false;  };
document.querySelector("#btn_dorpsdf7").onclick= function() {  pdfViewer.setZoom(1.25); return false;  };
document.querySelector("#btn_dorpsdf8").onclick= function() {  pdfViewer.setZoom(1.5); return false;  };
document.querySelector("#btn_dorpsdf9").onclick= function() {   pdfViewer.setZoom(2); return false; };
document.querySelector("#btn_dorpsdf10").onclick= function() {  pdfViewer.setZoom(3); return false;  };
document.querySelector("#btn_dorpsdf11").onclick= function() {  pdfViewer.setZoom(4); return false;  };
document.querySelector("#hideselected").onclick= function() { hideselected();  };
document.querySelector("#btnd_oo9d").onclick= function() { this.parentNode.classList.toggle('show');  };
document.querySelector("#btnd_contecilrey").onclick= function() {  this.parentNode.classList.toggle('show'); };
  
document.querySelector("#btn_got1s").onclick= function() {  pdfViewer.scrollToPage(1); return false; };
document.querySelector("#btn_got2s").onclick= function() { pdfViewer.scrollToPage(pdfViewer.pdf.numPages); return false;  };
document.querySelector("#btn_got3s").onclick= function() {  pdfViewer.rotate(-90, true); pdfThumbnails.rotate(-90, true).then(() => pdfThumbnails.setZoom("fit")); };
document.querySelector("#btn_got4s").onclick= function() { pdfViewer.rotate(90, true); pdfThumbnails.rotate(90, true).then(() => pdfThumbnails.setZoom("fit"));  };
document.querySelector("#btn_got5s").onclick= function() {  document.querySelector(".pdfjs-viewer").classList.remove("horizontal-scroll"); pdfViewer.refreshAll(); };
document.querySelector("#btn_got6s").onclick= function() { setHorizontal()  };

  
pdfThumbnails.loadDocument(PDFFILE);

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



function mdpl_handleselect(evt, call, cc, bmg, ongh){   var mdpl_handleselectcontoels=0;
if(settingsplayer){  
  
settingsplayer["colortexts"]="fff";    settingsplayer["coloricons"]="00EEEE";
settingsplayer["color_texts"]="#fff";    settingsplayer["color_icons"]="#00EEEE";
  
  if(settingsplayer.controls==false){   mdpl_handleselectcontoels=1;  }  }
                                       
//if(settingsplayer.config){  settingsplayer.config.osd={ theme:"light" };  }

var osddisplay = document.getElementById("osd_display");

 if(cc<1){    }

else if(cc==1){       var img_ond="";
  if(call[0].type && call[0].type.split('/')){
    if(call[0].type.split('/')[0] === 'image') {  img_ond=call[0].file;  }
  }

if(call[0].type && call[0].type==="application/x-zip-compressed"){
   document.getElementById(evt).innerHTML='<div id="result" style="color: #000;  overflow: auto;    width: 100%;    height: 99%;"> <br/> <div id="file-name"></div> <br/> <div>    <ul id="file-list" style="list-style-type: none;  padding: 0;  margin: 0;">    </ul>  </div>  <div id="inner-file-name"></div>  <br/>  <div id="file-content"></div>  <br/></div>';
  const fileListUl = document.getElementById('file-list');    clearResult(fileListUl);
  fs_loadZip(ongh[0], false, fileListUl);
}   else if(call[0].type && call[0].type==="application/zip"){
   document.getElementById(evt).innerHTML='<div id="result" style="color: #000;  overflow: auto;    width: 100%;    height: 99%;"> <br/> <div id="file-name"></div> <br/> <div>    <ul id="file-list" style="list-style-type: none;  padding: 0;  margin: 0;">    </ul>  </div>  <div id="inner-file-name"></div>  <br/>  <div id="file-content"></div>  <br/></div>';
  const fileListUl = document.getElementById('file-list');    clearResult(fileListUl);
  fs_loadZip(ongh[0], false, fileListUl);
}            
else if(call[0].type && call[0].type==="application/pdf"){
  document.getElementById(evt).innerHTML='<div class="pdfviewer">     <div class="pdfjs-toolbar">       <button id="btn_thums" class="pushed"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACaSURBVEiJ7dXBCcJAEIXhTyM24N0aNN14swsLSDEpwxYi1mEDQqIHByULGjWeZH8Yll3evDenHTIfUuKADpcPq0MTHncmSUCDBepogE2c9cBw09CesHomalElb/uod6jCo5ea3lvf06aeacDPyQE5IAf8Y0CHYoRf4fELg1kiOGKLcxQs49wNmM+j9/hKVLrthDELZz0wSKbPFRK8Mns1g9H2AAAAAElFTkSuQmCC" /></button>       <div class="v-sep"></div>       <button id="btn_pvolt"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMaAAADGgBbVzpLAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEOSURBVEiJ7ZOhTsRAEIb/f2daqggJQaFAoAnvUMlTkOB4DDw4BLwHOc4gSHBgcRhQJCcRPfojuDYtuabb4xydZMTO7HxfdpKFJMQkgB2jP3rwi9gZSYiFm9GnRpfRFZCcrVXgwc8r+CLnDs/XIjDYsdHLXwIZfQZsHPxJAGT7Rp8tgcvocvoLgK2VBACyQH/qgjdyAsAGCyzYTQT85yXBLwcJDMlJLLxOJKfLWFyso46U6VFJPQDIMCwKCnmh4r5ZbAlIbhrtGeDeQHgVH1+aH0p6qwre7mfbYHEHKK1LYg5gtwM4hXTdOAvAZ+tG7z+g33buPdhV33xYcRXRMQpGwSj4HwLqvaMjlXztG/8GX8gGihHJteoAAAAASUVORK5CYII=" /></button>       <div class="v-sep"></div>       <button id="btn_pvproc"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADESURBVEiJ7dQtbgJBHEDxX7s1HAQsAlfDCWqwuCKaILkAXKCysg6JajjVmoakqWiWgtlJCGH2O6h9yV/NzHuZ3WQoZo4Mp8hk+Z4ojyWBIZKC9STf0zjQmj7QB/rAHQKBBY7ib07dOeLtMjBE2mEgxej6FmN8dyA/YBL7VM/4aSH/xTQmD7zgr4E8w6xMHpir99P/8VpVHljWCKzqygObCvJ1U3ngvUD+0VYOD/i8Id/q8CVIsLuQf+GpK3lggH0+g6qHzpt/lI482BFgAAAAAElFTkSuQmCC" /></button>   <input id="pageno" class="pageno" type="number" class="form-control form-control-sm d-inline w-auto" value="1" min="1" max="1000">       <span id="pagecount" class="pageno"></span>       <div class="divider"></div>   <button id="btnszoomin"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAmAAAAJgBosiCmAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAClSURBVEiJ7ZbRDcIwDESfI0ZBVSdgg87BbKyTGcgqMR9NRQUBnUoiQOpJ92PFd5EtO8HdUQhMQCyc5DxRPAAJ8MIEhJYGw0p84aDkBjTUzkm5qsFm7AbfNzgAmFkAjm8MT7WYmb3SzcDV3TPME7oeolZMRZvYQXxh7N4D6Fwic3e1yZeH2Jm5vDXcmywuu7Fyw7HlstuM3eB/DLIYe8ZPPPqffFtuqUK6caXb4ZEAAAAASUVORK5CYII=" /></button>       <div class="v-sep"></div>   <button id="btnszoomout"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAC1JREFUSIljYBgFo2AUjAKywCkGBob/ZOIT6IYxYbHgPwWOo0TvKBgFo2DkAgAn8hGFBoJkbQAAAABJRU5ErkJggg==" /></button>       <div class="dropdown">    <div id="btns_cprf" class="dropdown-value">           <span class="zoomval">100%</span>           <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPZJREFUSInl1r1KA0EUhuFnNwFttLO2EARTWAYbCxWx8iYsbMXGe/COLK0MdkISERQUQZvY2SiKa5EJrmAxG2ds/ODAcGbO9w7D/BW+1EIHyyhNpw/cYIj3ekcHfVSJYhA8wSyuEprXIW3YzGA+idUSS9Er3FyLJYqMgKl3SzbASYhsgPMQ2QCN9T8Azxj9kH/BWwrAGbq4q+WesIbTFIAdHGIjQEbYwh62I+rti7tXjsP4IrRjanbbMTMIOsJMaB/EFjUBNDKe6E+2aZXRvypxnxFwC3N4kP41uzD+SIB1PCY0v8QK31+zeeMDtPCLJalwjR5e4RPoo5khHBqYywAAAABJRU5ErkJggg==" />         </div>          <div class="dropdown-content" id="btn_dorpsdf">           <a id="btn_dorpsdf0" href="#">'+on_lanf(1)+'</a>           <a href="#" id="btn_dorpsdf1">'+on_lanf(2)+'</a>           <a href="#" id="btn_dorpsdf3">'+on_lanf(3)+'</a>     <a id="btn_dorpsdf4" href="#">50%</a>           <a id="btn_dorpsdf5" href="#">75%</a>           <a id="btn_dorpsdf6" href="#">100%</a>           <a href="#" id="btn_dorpsdf7">125%</a>           <a href="#" id="btn_dorpsdf8">150%</a>           <a id="btn_dorpsdf9" href="#">200%</a>           <a id="btn_dorpsdf10" href="#">300%</a>           <a id="btn_dorpsdf11" href="#">400%</a>         </div>       </div>       <button id="hideselected">  <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAxwAAAMcBYjN5IQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGaSURBVEiJtZa/TgJBEMZ/i4bKHiuoKAyJyQXseAETHoDSnpbWqAkPYn0JtS9gJ8agIb4BamGFFZwZC+bC3N4d/w43mdzd7rffzM7szJwTEfKGc64CXABNoKVPgGeVEfAkIl+5JCKSEqAMDIAFIBtkodhyFpfzT+CcC4B74NxMfxqrI6ChcgYcKeYVuBKRl9wTAD1gbqwLgVqWZYqvA0ODnwO9BMaAA0P+DXTziDMU9T0lQUKB+nxsyKs7kLeBmReXcRyTGDQwi7tYbsln3kkGcXwr5raEBcjbOh/HZKHcdIzW3IBuQ24CH+laB+BWPz6KkhvMm67flEhm59rhnGsDD8AJ8ANcishjBnSizxbAVLXdFbXcYK8VNy0ZrdEBLI/HcfxSYuWaxoHIwbh9rYI9ya2CEayuaQTU9/G55/8aq2vfgWSiDYuQ694Qm2gZpaJfgLyLXyoyip3sSV5lWSjTxU4BtlwL0N/R8pg8Xa4N0G84Qxv4nICGBp9qONu0zF/gnWX6T1gmUVPl1Gzd3DKNZf/X9L3TFP5t+QPPWQ+91KZokQAAAABJRU5ErkJggg==" /></button>       <div class="divider"></div>       <input id="opendoc" type="file" accept="application/pdf">       <div class="dropdown dropdown-right">         <div id="btnd_oo9d">           <button><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAiwAAAIsBRmWzPwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFWSURBVEiJrdYxSxxRFMXx3xpFiZB0giCkEAwIVhJsRGxEEAuDpZ1fwMJPExCs0lgJWgURwVgp2FgoCoLFYqFFBEUxydjswDjcWXdmfHCrOef8H+/dmTuSJNFJYRqHrZov4TOB3y3jXBvhMZJW/cVSp4C9jPEZ3wuEJxldxxA4yxmfMBsIF/G/LARWcqYED5gKxMtlIanxRwC5w7e6kNTUhZ8B5BZjdSBZUzc2A8g1RqpC8qZe/AogV/hSBRLd+kfsB5ALDJaFFLXWJxwFkLUCfRFkvl3/fsW/nKnZRh9BDrsEq9FofG51Vf75dqRvu4Kd9OMgOJ5TDNQ6IvRhJwi/xFDJ8NeXjB5sBeFNDFcJz77JH7ARhN9gtGp4+rFrYD0I/4PxOuEpYDUIv8dk3fAUcJ4TP2LmPcJTwG5G/IyFAmHlgdPpTK42Mt8SZADVhn4JwLQKvy0vaf7++bD70SUAAAAASUVORK5CYII=" /></button>         </div>      <div class="dropdown-content" id="btnd_contecilrey">           <a id="btn_got1s" href="#"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACQSURBVDiN7dExCsJQEATQZxQhwTsoaCmeIrey9U422tjZBWzEzj4nEESL/CJ8IzFJ68DAMjuzu7AMxKhWL7DDtCXzwBZ3SGqNV4fFXbz9kWEfmPUJH1SnvnDC7NdwiiNKFIFl0NLYnMQCNlghxy0wxxLr2DxpGHDGPNIK1Zs/0HRBJ/wHMG7pP3HBdeiir3gDfmoWiuftIG0AAAAASUVORK5CYII=" />  '+on_lanf(4)+'</a>          <a href="#" id="btn_got2s"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAJcAAACXAETPAk3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJBJREFUOI3t0zEKAjEQheFPEUGELSyUBUEsvIDntfAGFt7DRrsFQbAUCy+gRXbRxsTpfTBFwpufl2FCXmNUBU9WW+xzhn4BUJUSlABF/QEMvtzP0fs4z6SdOP8K3uCGIxpcsYskm7bNz7YuWEYApNgnKfYi2txpiFHO0A1qjUkQfscBau+3RqvuEqzEv+0DzQveXx+FLeC8fwAAAABJRU5ErkJggg==" />  '+on_lanf(5)+'</a>           <div class="h-sep"></div>           <a id="btn_got3s" href="#"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADlSURBVDiNpdKhS8NhEMbxzzYVpgguGWwWUYMGBcG04p8iCP4dA8FmtAu2lYEgYjOKiEk0KUOLhjFF528z7ASRucH7e9Jx73vfu+M5cqqAbVzgJnJT2MISptHGJc7xNgjSwh4q2I+CHrp4ibiHV9Qw+Rfwjjru0cEhNjEe7xOo4ggZbjH/G/AZHR6xNmLlKp7j7+xPMgvAFU7RwPIQyGqs3YASFmKKLsoYw0l0GqQnfGAXZ4URI/+nMpo4LiUCvrCB9WIiAO4wlwdQRJYHsIiH1OIZfSsPUgE7+ravpLrQwbU4plz6Bhn1NMWcMHvhAAAAAElFTkSuQmCC" />  '+on_lanf(6)+'</a>           <a href="#" id="btn_got4s"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADhSURBVDiNpdKvS4NRFMbxj+5FZAaNFoNJhIGCGLRo9U+x+k+I2Fe0WodhrCwvChoM/mgqDIP4AxF0c4Z7ZhB8w32fcuHc+3x5zjmXipr4pz6Dbayhjjdcoov3eNPAxl9jHft4xgjfeIpzFOZDzOEgwL9axBWGOMEWpuKuwCaO8IVbnOJjbJ7HPfoRvUzreIhEn+NiB69YKTEuoy3N4TwAwyKi7mAPFyWAQup9GgOcSS07xos0wCxdo5VrnsQCbqoABqhVAdxhKRcATWmFs7mAVWmnuznmmvT7+ujhMTdFtn4AoEIx6tAGMC8AAAAASUVORK5CYII=" />  '+on_lanf(7)+'</a>           <div class="h-sep"></div>           <a id="btn_got5s" href="#"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAlAAAAJQBeb8N7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACLSURBVDiNY/j//z8DNszAwKDLwMBwEop1carDY8ASBgaG/1C8BJc6Jgbc4CoONgpghNqGKcHIyMrAwBAC5a75////b5IMIBbg8wJlBjAyMooxMjJOhGIxnCbgiYWJDIhYmEhOLBAFWPDIteJgo4CBjwWcXiA2IeGLhUoGRCxUkhML2jjYRLuAqOwMABaz1+1vJZrEAAAAAElFTkSuQmCC" /> '+on_lanf(8)+'</a>           <a id="btn_got6s" href="#"><img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAhQAAAIUB4uz/wQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABYSURBVDiN7dKxCYBAFAPQp2BzU9wObnRzOKHLOEJsThFbCy0MpMlPAoE/JPEE46P0X3CiYsGcxEFMaJ3T7Tb3TIUVwYZyMbWuB+2il+4N1vcnDP8nfqBgBz0JQwGRNs5xAAAAAElFTkSuQmCC" />  '+on_lanf(9)+'</a>   </div>       </div>     </div>     <div class="pdfviewer-container">       <div class="thumbnails pdfjs-viewer">       </div>       <div class="maindoc pdfjs-viewer">         <div class="pdfpage placeholder">           <p class="my-auto mx-auto"></p>         </div>       </div>     </div>   </div>';
laoded_app_pdf(call[0].file);

} else {   
  fplayeri = fs_Playerjs({ config:settingsplayer, OSD:osddisplay.checked, customtext:{ age:call[0].type },id:evt, nocontrols:mdpl_handleselectcontoels, autoplay:0, loop:0, casturl:call[0].file, castname:call[0].title, title:call[0].title, file:call[0].file, poster:img_ond, player:bmg,"url":location.href });
is_playerd_allid(settingsplayer, call, fplayeri);  
 //is_playerd_allid(getUrlVars(location.href), call, fplayeri);       
               
openf_osdcd(fplayeri, document.getElementById("zplayler"), 3e3, document.getElementById("zplaylert"), api_tok, cc);
}
               
}

else if(cc>=2){   
     fplayeri = fs_Playerjs({ config:settingsplayer, OSD:osddisplay.checked, customtext:{ age:onget_d(cc) },id:evt, nocontrols:mdpl_handleselectcontoels, autoplay:0, loop:0, title:"", file:call, poster:"", player:bmg,"url":location.href });
is_playerd_allid(settingsplayer, call, fplayeri);  
// is_playerd_allid(getUrlVars(location.href), call, fplayeri);     
  
 openf_osdcd(fplayeri, document.getElementById("zplayler"), 3e3, document.getElementById("zplaylert"), api_tok, cc);   
 }
}



 function pegarlindf(){
 const urlInput = document.getElementById('urlInput');
            const loadBtn = document.getElementById('loadBtn');
            const errorMessage = document.getElementById('errorMessage');
            const errorText = document.getElementById('errorText');
            
            
            function isValidURL(string) {
                try {
                    const url = new URL(string);
                    return url.protocol === "http:" || url.protocol === "https:";
                } catch (_) {
                    return false;
                }
            }
            
            function loadURL() {
var inpmyNavrunzz = document.getElementById("myNavrun");   var dopendtNav="Arquivo";    var fplayeri;              
              const url = urlInput.value.trim();
opendtNav();
               
                if (!url) {
                    showError("Por favor, insira uma URL.");
                    return;
                }
                
                if (!isValidURL(url)) {
                    showError("Por favor, insira uma URL válida (começando com http:// ou https://).");
                    return;
                }
                
                errorMessage.style.display = 'none';
                loadBtn.disabled = true;
                loadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
              
    fplayeri = fs_Playerjs({ config:{}, OSD:true, customtext:{ age:"" }, id:"zplayler", nocontrols:0, autoplay:0, loop:0, casturl:url, castname:"", title:"", file:url, poster:"", player:1,"url":location.href });
is_playerd_allid({}, [], fplayeri);  
               
openf_osdcd(fplayeri, document.getElementById("zplayler"), 3e3, document.getElementById("zplaylert"), [], 1);
              
           }
           
            function showError(message) {
                errorText.textContent = message;
                errorMessage.style.display = 'block';
            }
            
            loadURL();
                        
            urlInput.focus();
            urlInput.select();

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
     document.body.style.overflow="hidden";                    
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
mdpl_handleselect("zplayler", [{"file":"#","title":" "}], 1, var_versplayerpg, document.getElementById("inpssle").files);  

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
 // mdpl_handleselect("zplayler", tb, cc, var_versplayerpg, document.getElementById("inpssle").files);   
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
  mdpl_handleselect("zplayler", tb, cc, var_versplayerpg, document.getElementById("inpssle").files);      //inpss45435rwles.multiple = "true";
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



