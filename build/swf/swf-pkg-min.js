/*
Copyright 2010, KISSY UI Library v1.0.5
MIT Licensed
build: 548 Apr 9 23:53
*/
KISSY.add("swf-ua",function(a){function g(l){var f=l[0]+".";switch(l[2].toString().length){case 1:f+="00";break;case 2:f+="0";break}return f+l[2]}a=a.UA;var d=0,e;if(a.ie){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");e.AllowScriptAccess="always"}catch(p){if(e!==null)d=6}if(d===0)try{d=g((new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/[A-Za-z\s]+/g,"").split(","))}catch(q){}}else if(e=navigator.mimeTypes["application/x-shockwave-flash"])if(e=e.enabledPlugin)d=
g(e.description.replace(/\s[rd]/g,".").replace(/[a-z\s]+/ig,"").split("."));a.flash=parseFloat(d)});
KISSY.add("swf",function(a){function g(b,c,i){var k="ks-swf-"+e++,n=parseFloat(i.version)||p;n=d.flash>=n;var s=d.flash>=8&&i.useExpressInstall&&!n,r=s?f:c;c="YUISwfId="+k+"&YUIBridgeCallback="+h;var m="<object ";this.id=k;g.instances[k]=this;if((b=a.get(b))&&(n||s)&&r){m+='id="'+k+'" ';m+=d.ie?'classid="'+q+'" ':'type="'+l+'" data="'+r+'" ';m+='width="100%" height="100%">';if(d.ie)m+='<param name="movie" value="'+r+'"/>';for(var o in i.fixedAttributes)if(j.hasOwnProperty(o))m+='<param name="'+o+
'" value="'+i.fixedAttributes[o]+'"/>';for(var t in i.flashVars){o=i.flashVars[t];if(typeof o==="string")c+="&"+t+"="+encodeURIComponent(o)}m+='<param name="flashVars" value="'+c+'"/>';m+="</object>";b.innerHTML=m;this.swf=a.get("#"+k)}}var d=a.UA,e=a.now(),p=10.22,q="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",l="application/x-shockwave-flash",f="http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+e,h="KISSY.SWF.eventHandler",j={align:"",allowNetworking:"",allowScriptAccess:"",
base:"",bgcolor:"",menu:"",name:"",quality:"",salign:"",scale:"",tabindex:"",wmode:""};g.instances=(a.SWF||{}).instances||{};g.eventHandler=function(b,c){g.instances[b]._eventHandler(c)};a.augment(g,a.EventTarget);a.augment(g,{_eventHandler:function(b){var c=b.type;if(c==="log")a.log(b.message);else c&&this.fire(c,b)},callSWF:function(b,c){if(this.swf[b])return this.swf[b].apply(this.swf,c||[])}});a.SWF=g});
KISSY.add("swfstore",function(a,g){function d(f,h,j,b){var c="other",i=p.get(q),k=this;j=(j!==g?j:true)+"";b=(b!==g?b:true)+"";if(e.ie)c="ie";else if(e.gecko)c="gecko";else if(e.webkit)c="webkit";else if(e.opera)c="opera";if(!i||i==="null")p.set(q,i=Math.round(Math.random()*Math.PI*1E5));j={version:9.115,useExpressInstall:false,fixedAttributes:{allowScriptAccess:"always",allowNetworking:"all",scale:"noScale"},flashVars:{allowedDomain:l.location.hostname,shareData:j,browser:i,useCompression:b}};h||
(h=(new a.Node('<div style="height:0;width:0;overflow:hidden"></div>')).appendTo(l.body)[0]);k.embeddedSWF=new a.SWF(h,f||"swfstore.swf",j);k.embeddedSWF._eventHandler=function(n){a.SWF.prototype._eventHandler.call(k,n)}}var e=a.UA,p=a.Cookie,q="swfstore",l=document;a.augment(d,a.EventTarget);a.augment(d,{setItem:function(f,h){h=typeof h==="string"?h.replace(/\\/g,"\\\\"):a.JSON.stringify(h)+"";if(f=a.trim(f+""))try{return this.embeddedSWF.callSWF("setItem",[f,h])}catch(j){this.fire("error",{message:j})}}});
a.each(["getValueAt","getNameAt","getValueOf","getItems","getLength","removeItem","removeItemAt","clear","calculateCurrentSize","hasAdequateDimensions","setSize","getModificationDate","displaySettings"],function(f){d.prototype[f]=function(){try{return this.embeddedSWF.callSWF(f,a.makeArray(arguments))}catch(h){this.fire("error",{message:h})}}});a.SWFStore=d});