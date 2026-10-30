var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var h=this||self,l=/^[\w+/_-]+[=]{0,2}$/,m=null,n=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&l.test(a)?a:""},p=function(a,c){function e(){}e.prototype=c.prototype;a.i=c.prototype;a.prototype=new e;a.prototype.constructor=a;a.h=function(b,g,k){for(var f=Array(arguments.length-2),d=2;d<arguments.length;d++)f[d-2]=arguments[d];return c.prototype[g].apply(b,f)}},q=function(a){return a};function r(a){if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a))}p(r,Error);r.prototype.name="CustomError";var t=function(a,c){a=a.split("%s");for(var e="",b=a.length-1,g=0;g<b;g++)e+=a[g]+(g<c.length?c[g]:"%s");r.call(this,e+a[b])};p(t,r);t.prototype.name="AssertionError";var u=function(a,c){throw new t("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var v;var y=function(a,c){this.g=c===w?a:""};y.prototype.toString=function(){return this.g+""};var w={};var z=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},A=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},C=function(a){a.length?B(a.shift(),function(){C(a)}):D()},E=function(a){return"chrome-extension://"+a+"/cast_sender.js"},B=function(a,c,e){var b=document.createElement("script");b.onerror=c;e&&(b.onload=e);if(void 0===v)if(c=null,(e=h.trustedTypes)&&e.createPolicy){try{c=
e.createPolicy("goog#html",{createHTML:q,createScript:q,createScriptURL:q})}catch(x){h.console&&h.console.error(x.message)}v=c}else v=c;a=(c=v)?c.createScriptURL(a):a;a=new y(a,w);a:{try{var g=b&&b.ownerDocument,k=g&&(g.defaultView||g.parentWindow);k=k||h;if(k.Element&&k.Location){var f=k;break a}}catch(x){}f=null}if(f&&"undefined"!=typeof f.HTMLScriptElement&&(!b||!(b instanceof f.HTMLScriptElement)&&(b instanceof f.Location||b instanceof f.Element))){f=typeof b;if("object"==f&&null!=b||"function"==
f)try{var d=b.constructor.displayName||b.constructor.name||Object.prototype.toString.call(b)}catch(x){d="<object could not be stringified>"}else d=void 0===b?"undefined":null===b?"null":typeof b;u("Argument is not a %s (or a non-Element, non-Location mock); got: %s","HTMLScriptElement",d)}a instanceof y&&a.constructor===y?d=a.g:(d=typeof a,u("expected object of type TrustedResourceUrl, got '"+a+"' of type "+("object"!=d?d:a?Array.isArray(a)?"array":d:"null")),d="type_error:TrustedResourceUrl");b.src=
d;(d=b.ownerDocument&&b.ownerDocument.defaultView)&&d!=h?d=n(d.document):(null===m&&(m=n(h.document)),d=m);d&&b.setAttribute("nonce",d);(document.head||document.documentElement).appendChild(b)},D=function(){var a=A();a&&a(!1,"No cast extension found")},G=function(){if(F){var a=2,c=A(),e=function(){a--;0==a&&c&&c(!0)};window.__onGCastApiAvailable=e;B("//web.archive.org/web/20210218141322/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",D,e)}},F=z("loadCastFramework")||z("loadCastApplicationFramework"),H=["pkedcjkdefgpdelpbcmbmeomcjbeemfm",
"enhhojjnijigcajfphajepfemndkmdlo"];if(0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation){G();var I,J=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);I=J?parseInt(J[1],10):0;var K=[];if(0!=I){var L=I-1;K.push("//web.archive.org/web/20210218141322/https://www.gstatic.com/eureka/clank/"+I+"/cast_sender.js");K.push("//web.archive.org/web/20210218141322/https://www.gstatic.com/eureka/clank/"+L+"/cast_sender.js")}K.push("//web.archive.org/web/20210218141322/https://www.gstatic.com/eureka/clank/cast_sender.js");C(K)}else!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?
D():(G(),C(H.map(E)));}).call(this);


}
/*
     FILE ARCHIVED ON 14:13:22 Feb 18, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:49:26 Sep 03, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.156
  exclusion.robots.policy: 0.144
  esindex: 0.013
  PetaboxLoader3.resolve: 51.043
  load_resource: 129.833
  LoadShardBlock: 584.573 (6)
  CDXLines.iter: 143.937 (3)
  PetaboxLoader3.datanode: 252.379 (7)
  cdx.remote: 0.147
*/