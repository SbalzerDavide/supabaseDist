(function(e){function n(n){for(var o,a,u=n[0],s=n[1],i=n[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(n);while(d.length)d.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},a={index:0},c={index:0},r=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-062a0e69":"058fa928","chunk-11757bcc":"34b98674","chunk-2d240073":"2c07ebd4","chunk-357e893a":"24faafdf","chunk-46320a1b":"0259e6d2","chunk-53d78204":"cd99b9a7","chunk-55a8035e":"8e93ba65","chunk-a871bfac":"783a6a77","chunk-a8faeca0":"dc3c7203","chunk-c134a518":"c325d53d","chunk-c8e0484a":"c849dc42"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-062a0e69":1,"chunk-11757bcc":1,"chunk-2d240073":1,"chunk-357e893a":1,"chunk-46320a1b":1,"chunk-53d78204":1,"chunk-55a8035e":1,"chunk-a871bfac":1,"chunk-a8faeca0":1,"chunk-c134a518":1,"chunk-c8e0484a":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-062a0e69":"e78ea1b1","chunk-11757bcc":"3415f1e6","chunk-2d240073":"37638231","chunk-357e893a":"44f4c0fd","chunk-46320a1b":"833f4bce","chunk-53d78204":"beb41e04","chunk-55a8035e":"6a3fd89c","chunk-a871bfac":"b5583e4d","chunk-a8faeca0":"120379d0","chunk-c134a518":"c7ea26f5","chunk-c8e0484a":"7b816d27"}[e]+".css",c=s.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var i=r[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===o||l===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var o=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],h.parentNode.removeChild(h),t(r)},h.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}c[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var h=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0ecd":function(e,n,t){},"3dfd":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],staticClass:"loader"},[n("div",{staticClass:"spinner"}),n("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-notch"}})],1),n("router-view")],1)},a=[],c=(t("14d9"),t("fe0f")),r={name:"App",components:{},data(){return{session:null,loader:!1}},created(){document.body.classList.add("theme-light"),window.addEventListener("changeLoader",this.changeLoader)},mounted(){console.log("fatto mounted");let e=this;c["a"].auth.getSession().then(({data:n})=>{console.log(n),e.session=n.session}).catch(e=>{console.log(e)}).finally(()=>{console.log("finally"),null!=e.session?e.$router.push({name:"Home",params:{session:e.session}}):e.$router.push({name:"Login",params:{}})})},destroyed(){window.removeEventListener("changeLoader",this.changeLoader)},methods:{changeLoader(e){this.loader=e.detail.loader},login(e){let n=this;console.log("sono nell apgina home dopo login"),e&&(console.log("sto effettuando get session"),c["a"].auth.getSession().then(({data:e})=>{console.log(e),n.session=e.session}))}}},u=r,s=(t("cb61"),t("2877")),i=Object(s["a"])(u,o,a,!1,null,null,null);n["default"]=i.exports},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),a=t("3dfd"),c=t("8c4f");o["a"].use(c["a"]);const r=[{path:"/",name:"App",component:()=>Promise.resolve().then(t.bind(null,"3dfd"))},{path:"/login",name:"Login",component:()=>t.e("chunk-a8faeca0").then(t.bind(null,"a55b"))},{path:"/home",name:"Home",props:!0,component:()=>t.e("chunk-c134a518").then(t.bind(null,"bb51")),children:[{path:"notes",component:()=>t.e("chunk-c8e0484a").then(t.bind(null,"0841")),children:[{path:"new",component:()=>t.e("chunk-46320a1b").then(t.bind(null,"5d9f"))},{path:"list",component:()=>t.e("chunk-55a8035e").then(t.bind(null,"bb50"))},{path:"show",name:"ShowNote",props:!0,component:()=>t.e("chunk-062a0e69").then(t.bind(null,"1678"))}]},{path:"manageFood",component:()=>t.e("chunk-2d240073").then(t.bind(null,"b546")),children:[{path:"new",name:"NewFood",component:()=>t.e("chunk-11757bcc").then(t.bind(null,"fe94"))},{path:"shoppinglist",name:"ShoppingList",component:()=>t.e("chunk-53d78204").then(t.bind(null,"7bb9"))},{path:"storagelist",name:"StorageList",component:()=>t.e("chunk-357e893a").then(t.bind(null,"8038"))},{path:"garbagelist",name:"GarbageList",component:()=>t.e("chunk-a871bfac").then(t.bind(null,"ba53"))}]}]}],u=new c["a"]({routes:r});var s=u,i=t("be33"),l=t("ad3d"),d=t("11ca");i["c"].add(d["a"]),o["a"].component("font-awesome-icon",l["a"]),o["a"].config.productionTip=!1,new o["a"]({router:s,render:e=>e(a["default"])}).$mount("#app")},cb61:function(e,n,t){"use strict";t("0ecd")},fe0f:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("940b");const a="https://tturruxdxpphgpgczzsg.supabase.co",c="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0dXJydXhkeHBwaGdwZ2N6enNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0NDM4ODUsImV4cCI6MTk4MjAxOTg4NX0.mh5FdpvsZQolc1GlfVHwfgAGO8h-nFF0bnM0Stf7ePQ",r=Object(o["a"])(a,c)}});