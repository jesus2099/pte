




/*
     FILE ARCHIVED ON 19:12:22 Jan 8, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:12:22 Jan 8, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
google.maps.__gjsload__('stats', function(_){'use strict';var qZ=function(a,b,c){var d=[];_.Jc(a,function(a,c){d.push(c+b+a)});return d.join(c)},rZ=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},sZ=function(a){var b={};_.Jc(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return qZ(b,":",",")},uZ=function(a,b,c,d){var e;e=_.O(_.R,23,500);var f;f=_.O(_.R,22,
2);this.C=a;this.F=b;this.G=e;this.l=f;this.B=c;this.m=d;this.f=new _.Ej;this.b=0;this.j=_.La();tZ(this)},tZ=function(a){window.setTimeout(function(){vZ(a);tZ(a)},Math.min(a.G*Math.pow(a.l,a.b),2147483647))},wZ=function(a,b,c){a.f.set(b,c)},vZ=function(a){var b=rZ(a.F,a.B,a.m,void 0);b.t=a.b+"-"+(_.La()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.gm()?"-if":""))});a.C.b({ev:"api_snap"},b);++a.b},xZ=function(a,b,c,d,e){this.m=a;this.C=b;this.l=c;this.f=d;this.j=e;this.b=
new _.Ej;this.B=_.La()},yZ=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},zZ=function(){this.b=new _.Ej},AZ=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.yp;c+=a.Vo});return c?b/c:0},BZ=function(a,b,c,d,e){this.B=a;this.C=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},CZ=function(a,b,c,d){this.j=a;_.z.bind(this.j,"set_at",this,this.l);_.z.bind(this.j,"insert_at",this,this.l);this.B=b;this.C=c;this.m=d;this.f=0;this.b={};this.l()},DZ=function(){this.j=_.P(_.R,6);this.b=new yZ(_.pg[35]?
_.P(_.nf(_.R),11):_.Sv,_.Qi,window.document);new CZ(_.Ni,(0,_.p)(this.b.b,this.b),_.Zf,!!this.j);var a=_.P(new _.gf(_.R.data[3]),1);this.C=a.split(".")[1]||a;this.F={};this.B={};this.m={};this.G={};this.I=_.O(_.R,0,1);_.Pi&&(this.l=new uZ(this.b,this.C,this.I,this.j))};
xZ.prototype.F=function(a){var b=void 0,b=_.m(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.p)(function(){var a=rZ(this.C,this.l,this.f,this.j);a.t=_.La()-this.B;var b=this.b;_.Fj(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.H[g]}_.Qy(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};
yZ.prototype.b=function(a,b){b=b||{};var c=_.uk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=sZ(b);a=qZ(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Nc.__gm_captureCSI)&&b(a)};zZ.prototype.f=function(a,b,c){this.b.set(_.yb(a),{yp:b,Vo:c})};BZ.prototype.F=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.fz(this,this.G,500))};
BZ.prototype.G=function(){for(var a=rZ(this.C,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+((_.dl()||!_.cl())&&_.cl());this.b.length=0;this.B.b({ev:"api_mapft"},a)};CZ.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Ao;a=a.timestamp-this.C;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.B({ev:"api_services"},c)}}};DZ.prototype.V=function(a){a=_.yb(a);this.F[a]||(this.F[a]=new BZ(this.b,this.C,this.I,this.j));return this.F[a]};DZ.prototype.T=function(a){a=_.yb(a);this.B[a]||(this.B[a]=new xZ(this.b,this.C,1,this.j));return this.B[a]};DZ.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.fA,wZ(this.l,a,function(){return b.Db()}));var b=this.m[a];return b}};DZ.prototype.O=function(a){if(this.l){this.G[a]||(this.G[a]=new zZ,wZ(this.l,a,function(){return AZ(b)}));var b=this.G[a];return b}};var EZ=new DZ;_.lc("stats",EZ);});
