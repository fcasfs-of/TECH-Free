 var var_versionpropg="false";

 var var_versplayerpg=0;

var fplayeri;




var settingsplayer={  color_icons:"#63B8FF", color_texts:"#00EEEE", config:{
fontstyle:"none",
textdecoration:"none",
texttransform:"none",
textbold:true,
}, controls:true, };






  function pl_dispNav(a) {  return document.getElementById(a);  } 


  function fmdplex_loadex_txv(t){  if(t==""){    return "";  }   if(t=="undefined"){    return "";  }     if(t==undefined){    return "";  }   else {  return t; }  }   


  function create_mdpl_file(ob){  return { get:function(id){  return ob.files[id]; }, get_name:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).name); }, get_size:function(id){ return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).size); },get_type:function(){  return fmdplex_loadex_txv(create_mdpl_file(ob).get(id).type);  }, create_url:function(id){  return fmdplex_loadex_txv(URL.createObjectURL(create_mdpl_file(ob).get(id))); } };   }



