




/*
     FILE ARCHIVED ON 18:25:42 Jan 8, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:25:43 Jan 8, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
google.maps.__gjsload__('infowindow', function(_){'use strict';var nS=function(a){a=a.__gm.get("panes");if(!_.yk())return{Ei:null,view:new _.NF(a,new _.EF,_.mw.b)};var b=_.Y("div");b.style.borderTop="1px solid #ccc";b.style.marginTop="9px";b.style.paddingTop="6px";var c=new _.Fg(b),d=new _.NF(a,new _.EF,_.mw.b,b);_.z.addListener(c,"place_changed",function(){var a=c.get("place");d.set("apiContentSize",a?_.HJ:_.bh);_.Tl(b,!!a)});return{Ei:c,view:d}},oS=function(){this.b=new _.fA},pS=function(a,b,c){this.m=!0;var d=b.__gm;this.ea=c;c.bindTo("center",
d,"projectionCenterQ");c.bindTo("zoom",d);c.bindTo("offset",d);c.bindTo("projection",b);c.bindTo("focus",b,"position");c.bindTo("latLngPosition",a,"position");this.b=b instanceof _.be?a.b.get("logAsInternal")?"Ia":"Id":null;this.f=[];var e=new _.mu(["scale"],"visible",function(a){return null==a||.3<=a});e.bindTo("scale",c);var f=nS(b);this.B=f.Ei;this.l=f.view;var f=this.B,g=this.l;f&&(f.bindTo("place",a),f.bindTo("attribution",a));g.set("logAsInternal",!!a.b.get("logAsInternal"));g.bindTo("zIndex",
a);g.bindTo("layoutPixelBounds",d);g.bindTo("maxWidth",a);g.bindTo("content",a);g.bindTo("pixelOffset",a);g.bindTo("visible",e);g.bindTo("position",c,"pixelPosition");g.set("open",!0);this.f.push(_.z.forward(b,"forceredraw",g),_.z.addListener(g,"domready",function(){a.trigger("domready")}));this.j=new _.$s(function(){var a=g.get("pixelBounds");a?_.z.trigger(d,"pantobounds",a):this.j.start()},150,this);a.get("disableAutoPan")||this.j.start();var h=this;this.f.push(_.z.addListener(g,"closeclick",function(){a.close();
a.trigger("closeclick");h.b&&_.Wm(h.b,"-i",h,!!b.b)}));if(this.b){var l=this.b;_.Um(b,this.b);_.Wm(l,"-p",this,!!b.b);c=function(){var c=a.get("position"),d=b.getBounds();c&&d&&d.contains(c)?_.Wm(l,"-v",h,!!b.b):_.Xm(l,"-v",h)};this.f.push(_.z.addListener(b,"idle",c));c()}};pS.prototype.close=function(){if(this.m){this.m=!1;this.b&&(_.Xm(this.b,"-p",this),_.Xm(this.b,"-v",this));_.v(this.f,_.z.removeListener);this.f.length=0;this.j.stop();var a=this.B;a&&(a.unbindAll(),a.setPlace(null),a.setAttribution(null));a=this.l;a.unbindAll();a.set("open",!1);a.pa();this.ea.unbindAll()}};_.lc("infowindow",{Xk:function(a){var b=null;_.Pk(a,"map_changed",function d(){var e=a.get("map");b&&(b.ah.b.remove(a),b.Zn.close(),b=null);if(e){var f=e.__gm;f.get("panes")?(f=new pS(a,e,new _.PF),e=e.__gm,e=e.IW_AUTO_CLOSER=e.IW_AUTO_CLOSER||new oS,b={Zn:f,ah:e},f=b.ah,1==f.b.Db()&&(e=f.b.Ba()[0],e.md!=a.md&&(e.set("map",null),f.b.remove(e))),f.b.add(a)):_.z.addListenerOnce(f,"panes_changed",d)}})}});});
