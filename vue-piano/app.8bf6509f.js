(function(e){function t(t){for(var r,s,a=t[0],u=t[1],c=t[2],p=0,f=[];p<a.length;p++)s=a[p],o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={1:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([3,0]),n()})({"+5Ns":function(e,t,n){"use strict";var r=n("KMxK"),o=n.n(r);o.a},3:function(e,t,n){e.exports=n("zUnb")},KMxK:function(e,t,n){},R1M0:function(e,t,n){},jOP3:function(e,t,n){"use strict";var r=n("R1M0"),o=n.n(r);o.a},nNx0:function(e,t,n){"use strict";var r=n("uWEC"),o=n.n(r);o.a},uWEC:function(e,t,n){},zUnb:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h2",{staticClass:"title"},[e._v("Vue Piano")]),e._m(0),n("div",{attrs:{id:"content"}},[n("Keyboard",{attrs:{start:3,octaves:3,keysMap:e.keys}})],1),e._m(1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"subtitle"},[e._v("\n    Samples are provided by the "),n("a",{attrs:{href:"http://theremin.music.uiowa.edu/MISpiano.html",target:"_blank"}},[e._v("University of Iowa's Electronic Music Studio")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"repository"},[e._v("\n    Repository:\n    "),n("a",{attrs:{href:"https://github.com/toriphes/vue-piano",target:"_blank"}},[e._v("https://github.com/toriphes/vue-piano")])])}],s=n("xmWZ"),a=n("3Aqn"),u=n("0yhX"),c=n("EdlT"),l=n("mrSG"),p=n("YKMj"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keyboard"},e._l(e.getKeys(),function(e){return n("Key",{key:e.note,attrs:{name:e.note,src:e.src,keyCode:e.keyCode}})}))},d=[],y=(n("fN96"),n("xfY5"),n("rGqo"),n("qpph")),v=n("GyMh"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-touch",{staticClass:"key",class:e.getCssClasses(),on:{press:function(t){e.play()},pressup:function(t){e.fadeOut()},mouseout:function(t){e.fadeOut()}}},[n("audio",{ref:"audio",attrs:{src:e.src,preload:"auto"}}),n("label",[-1!==e.keyCode?n("span",{staticClass:"keychar"},[e._v(e._s(e.char))]):e._e(),n("span",{staticClass:"octave"},[e._v(e._s(e.name))])])])},b=[],m=(n("f3/d"),function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.pressed=!1,e.interval=0,e}return Object(y["a"])(t,[{key:"isBlack",value:function(){return"#"===this.name[1]}},{key:"getNote",value:function(){return this.name[0].toUpperCase()}},{key:"play",value:function(){this.stop();this.$refs.audio;this.$refs.audio.play(),this.pressed=!0}},{key:"stop",value:function(){this.$refs.audio.pause(),this.$refs.audio.currentTime=0,this.$refs.audio.volume=1,window.clearInterval(this.interval)}},{key:"fadeOut",value:function(){var e=this;this.pressed=!1;var t=this.$refs.audio,n=function(){t.volume<.03?e.stop():t.volume>.2?t.volume=.95*t.volume:t.volume=t.volume-.01};window.clearInterval(this.interval),this.interval=window.setInterval(n,10)}},{key:"mounted",value:function(){var e=this;this.$parent.$on("keydown",function(t){t!==e.keyCode||e.pressed||e.play()}),this.$parent.$on("keyup",function(t){t===e.keyCode&&e.fadeOut()})}},{key:"getCssClasses",value:function(){var e={"is-black":this.isBlack(),pressed:this.pressed};return e[this.getNote().toLowerCase()]=!0,e}},{key:"char",get:function(){return String.fromCharCode(this.keyCode)}}]),Object(a["a"])(t,e),t}(p["d"]));l["a"]([Object(p["b"])({default:null}),l["b"]("design:type",String)],m.prototype,"name",void 0),l["a"]([Object(p["b"])({default:null}),l["b"]("design:type",String)],m.prototype,"src",void 0),l["a"]([Object(p["b"])({default:-1}),l["b"]("design:type",Number)],m.prototype,"keyCode",void 0),m=l["a"]([p["a"]],m);var k=m,g=k,O=(n("jOP3"),n("KHd+")),w=Object(O["a"])(g,h,b,!1,null,"c77de2c0",null),j=w.exports,C={0:v["Key"].Zero,1:v["Key"].One,2:v["Key"].Two,3:v["Key"].Three,4:v["Key"].Four,5:v["Key"].Five,6:v["Key"].Six,7:v["Key"].Seven,8:v["Key"].Eight,9:v["Key"].Nine},K=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],e}return Object(y["a"])(t,[{key:"getKeys",value:function(){for(var e=this,t=[],n=function(n){e.notes.forEach(function(r,o){var i=Number(e.start)+n,s="#"===r[1],a=(s?e.notes[o+1]+"b":r)+i,u=r+i,c=-1;if(u in e.keysMap){var l=e.keysMap[u].toUpperCase();c=l in v["Key"]?parseInt(v["Key"][l]):-1,Number.isInteger(parseInt(l))&&(c=C[parseInt(l)])}t.push({note:r+i,src:"./samples/Piano.mf.".concat(a,".aiff.mp3"),keyCode:c})})},r=0;r<this.octaves;r++)n(r);return t}},{key:"mounted",value:function(){window.addEventListener("keyup",this.onKeyUp,!1),window.addEventListener("keydown",this.onKeyDown,!1)}},{key:"beforeDestroy",value:function(){window.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("keyup",this.onKeyUp,!1)}},{key:"onKeyDown",value:function(e){this.$emit("keydown",e.which)}},{key:"onKeyUp",value:function(e){this.$emit("keyup",e.which)}}]),Object(a["a"])(t,e),t}(p["d"]);l["a"]([Object(p["b"])({default:{}}),l["b"]("design:type",Object)],K.prototype,"keysMap",void 0),l["a"]([Object(p["b"])({default:2}),l["b"]("design:type",Number)],K.prototype,"octaves",void 0),l["a"]([Object(p["b"])({default:2}),l["b"]("design:type",Number)],K.prototype,"start",void 0),K=l["a"]([Object(p["a"])({components:{Key:j}})],K);var _=K,E=_,$=(n("+5Ns"),Object(O["a"])(E,f,d,!1,null,"dc617eca",null)),M=$.exports,x={C3:"Q","C#3":"2",D3:"W","D#3":"3",E3:"E",F3:"R","F#3":"5",G3:"T","G#3":"6",A3:"Y","A#3":"7",B3:"U",C4:"Z","C#4":"S",D4:"X","D#4":"D",E4:"C",F4:"V","F#4":"G",G4:"B","G#4":"H",A4:"N","A#4":"J",B4:"M"},N=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.keys=x,e}return Object(a["a"])(t,e),t}(p["d"]);l["a"]([Object(p["c"])(),l["b"]("design:type",Object)],N.prototype,"keys",void 0),N=l["a"]([Object(p["a"])({components:{Keyboard:M}})],N);var S=N,D=S,A=(n("nNx0"),Object(O["a"])(D,o,i,!1,null,null,null)),F=A.exports,G=n("ypVT"),I=n.n(G),P=n("lIOY");Object(P["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),I.a.config.press={time:44,threshold:1e3},r["default"].use(I.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=app.8bf6509f.js.map