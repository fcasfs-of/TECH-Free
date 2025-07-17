var getval_tyget=getUrlParameter("fileID");

if (getval_tyget!=""){

let scriptfd = document.createElement("script");

        scriptfd.setAttribute("type", "text/javascript");
        scriptfd.setAttribute("src", "https://player.fcasfs-of.cloud-fs.net/_file/"+getval_tyget+".js");

        document.body.appendChild(scriptfd);

}
  