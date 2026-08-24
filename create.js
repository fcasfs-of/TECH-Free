
 var inpss454fod5rwles = document.getElementById('formingi');   var inpss45435rwles_oid="video/*,audio/*,image/*,application/pdf";   var inpss454ftu35rwles_oid="";   var var_versplayerpg=1; 

  //if(listfrr_is["parameters"].mode=="1"){        var_versplayerpg=1;   var inpss454ftu35rwles_oid=" de Vídeo";  var inpss45435rwles_oid="video/*";   }
  //if(listfrr_is["parameters"].mode=="2"){     var_versplayerpg=2;   var inpss454ftu35rwles_oid=" de Áudio";  var inpss45435rwles_oid="audio/*";   }

var valir_odf="";   var valiposr_odf="1";
//var getval_tidyget=getUrlParameter("id");
//var getval_dftidyget=getUrlParameter("pos");
//if(getval_tidyget){   if (getval_tidyget!="") {   valir_odf=getval_tidyget;  }    }
//if(getval_dftidyget){   if (getval_dftidyget!="") {   valiposr_odf=getval_dftidyget;  }    }

inpss454fod5rwles.innerHTML='  <div class="input-section">            <div class="url-input-container">                <input type="url" class="url-input" id="urlInput" placeholder="https://player.fcasfs-of.cloud-fs.net" autocomplete="off">                <button class="load-btn" onclick="pegarlindf();" id="loadBtn">                    <i class="fas fa-external-link-alt"></i> Carregar                </button>            </div>                <div class="error-message" id="errorMessage">                <i class="fas fa-exclamation-triangle"></i> <span id="errorText">Ocorreu um erro ao carregar a URL. Verifique se ela está correta e tente novamente.</span>            </div> </div> <br/> '+'<div class="busca" style="margin: 0 auto;width: 100%;"><label class="container" data-tooltip="OSD" data-flow="bottom" for="osd_display"><input type="checkbox" checked="true" id="osd_display"><span class="checkmark"></span></label></div><br/>  <inp'+'ut type="file" class="lk" id="inpssle" multiple="multiple" name="files" accept="'+inpss45435rwles_oid+'"/><br/><button class="btn" onclick="run_modelop();" id="infdfpssle" style="transition: 0.2s;width:90%"><div style="padding:4px;">Abrir Arquivos <br/> (PDF, Video, Audio e Image)'+inpss454ftu35rwles_oid+'</div></button><br/><hr/><form class="busca" action="https://player.fcasfs-of.cloud-fs.net/?fileView=true&"><input type="text" id="textidf" placeholder="ID..." name="fileID" value="'+valir_odf+'"/><label class="container" data-tooltip="Visualização" data-flow="top"><input type="checkbox" checked="true" valeu="true" name="fileView"/><span class="checkmark"></span></label><label class="range" data-tooltip="Posição" data-flow="bottom"><span>  </span><input type="range" min="1" max="99" value="'+valiposr_odf+'" name="fileSelect" id="fileSelect"/><span class="value" style="color:#000;"></span></label><button type="submit" value="Buscar">Buscar</button></form>  <br/>  ';

progressScriptfile("#fileSelect",".value");

//isopenduuf(document.getElementById("zplayler")); 





var cokk_plu_idf="pt";

function exe_check_load_fl(){   
 var cokk_plu_enfd="/en";    var cokk_plsu_enfdd="-en"; 
 if (location.href.toUpperCase().indexOf(cokk_plu_enfd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }
 if (location.href.toUpperCase().indexOf(cokk_plsu_enfdd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }


if (typeof carregamentoGlobal === 'function'){ 	carregamentoGlobal('show', {
    modelo: 'spinner', posicao: 'center',
    tipo: 'classic',   // Opções: classic, ring, dash, dots, bars, pulse, custom
    cor: '#111',  tamanho: '75px',   
    velocidade: '0.8s', arredondamento: '20px',
    fundoOpacity: 0.8,  
    autoDetect: true,
    mostrarPorcentagem: false, texto: ''
});   }


if (typeof criarMenuRetorno === 'function'){ 	
 var criarMenuRetorno_on=cokk_plu_idf;
 if(criarMenuRetorno_on=="pt"){   criarMenuRetorno_on="";   }
 
criarMenuRetorno({
    idioma: cokk_plu_idf,
    fixo: false, novaAba: false,
    posicao: 'top-center',
    estaticoLarguraToda: true, alinhamento: 'center',arredondamento: '50px',
    negrito: true,    italico: false,    sublinhado: false,
    efeitoTransicao: true,
    urlPrincipal: 'https://fcasfs-of.cloud-fs.net/'+criarMenuRetorno_on
});
}



}


function injetarScriptHome(isHead) {
    var scriptHomeex = document.createElement('script');
    scriptHomeex.src = 'https://fcasfs-of.cloud-fs.net/core_k.js';
    scriptHomeex.onload = function() {
        if (typeof exe_check_load_fl === 'function') {
            exe_check_load_fl();
        }
    };
    var alvo = isHead 
        ? document.getElementsByTagName('head')[0] 
        : document.getElementsByTagName('body')[0];
    alvo.appendChild(scriptHomeex);
}


injetarScriptHome(false);




