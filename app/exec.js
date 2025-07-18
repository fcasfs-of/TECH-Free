var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!="") {


var inpmyNavruz = document.getElementById("plo");    
inpmyNavruz.innerHTML= '<span id="zplayler" style="width:100%; height:100%;  transition: 0.2s;"></span>';  


var scriptfd = document.createElement("script");
        scriptfd.setAttribute("type", "text/javascript");
        scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/_file/"+getval_tyget+".js");

        document.body.appendChild(scriptfd);


var scriptd = document.createElement("div");
scriptd.style.display="none"; scriptd.innerHTML='<style>#plo #zplayler{position:fixed;width:100%; top:0px;left:0px;bottom:0px;right:0px; height:100%;z-index:1;}</style>';

        document.body.appendChild(scriptd);


}
  