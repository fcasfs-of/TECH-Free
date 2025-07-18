var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!="") {


var inpmyNavruz = document.getElementById("plo");    
inpmyNavruz.innerHTML= '<div id="zplayler" style="width:100%; position:absolute; top:0;left:0;right:0;bottom:0; height:100%;  transition: 0.2s;"></div>';  


var scriptfd = document.createElement("script");
        scriptfd.setAttribute("type", "text/javascript");
        scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/_file/"+getval_tyget+".js");

        document.body.appendChild(scriptfd);

}
  