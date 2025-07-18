var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!="") {


var inpmyNavrunzz = document.getElementById("myNavrun"); 
                         
inpmyNavrunzz.innerHTML= '<div id="zplayler" style="width:100%;  height:100%;  transition: 0.2s;"></div>';  


var scriptfd = document.createElement("script");
        scriptfd.setAttribute("type", "text/javascript");
        scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/_file/"+getval_tyget+".js");

        document.body.appendChild(scriptfd);

}
  