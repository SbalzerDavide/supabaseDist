(function(e){function n(n){for(var o,a,r=n[0],i=n[1],u=n[2],p=0,h=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(n);while(h.length)h.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],o=!0,a=1;a<t.length;a++){var r=t[a];0!==c[r]&&(o=!1)}o&&(s.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},a={index:0},c={index:0},s=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-197283ab":"69fb855e","chunk-20128195":"b43939cd","chunk-2c0d3ca1":"4efed192","chunk-2cf20710":"0faed7fd","chunk-2d20f319":"02158c87","chunk-3c0db3e5":"f199e774","chunk-477a9aba":"710aa22c","chunk-491c53c2":"87286b6a","chunk-5e16aaae":"edbb6510","chunk-65e97f58":"bcd9854e","chunk-75c232b4":"5a7ee60d","chunk-7be11187":"1185e68e","chunk-f6c9f8cc":"e39f84e7"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-197283ab":1,"chunk-20128195":1,"chunk-2c0d3ca1":1,"chunk-2cf20710":1,"chunk-3c0db3e5":1,"chunk-477a9aba":1,"chunk-491c53c2":1,"chunk-5e16aaae":1,"chunk-65e97f58":1,"chunk-75c232b4":1,"chunk-7be11187":1,"chunk-f6c9f8cc":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-197283ab":"c6ba0e46","chunk-20128195":"a22b0f1d","chunk-2c0d3ca1":"aa5eb6dd","chunk-2cf20710":"cdff242c","chunk-2d20f319":"31d6cfe0","chunk-3c0db3e5":"c5060d5a","chunk-477a9aba":"ae021ee0","chunk-491c53c2":"8114d327","chunk-5e16aaae":"70ad7682","chunk-65e97f58":"68fc7449","chunk-75c232b4":"0eb5a900","chunk-7be11187":"76974173","chunk-f6c9f8cc":"e8cdd841"}[e]+".css",c=i.p+o,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===o||p===c))return n()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){u=h[r],p=u.getAttribute("data-href");if(p===o||p===c)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var o=n&&n.target&&n.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],d.parentNode.removeChild(d),t(s)},d.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(d)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)n.push(o[2]);else{var s=new Promise((function(n,t){o=c[e]=[n,t]}));n.push(o[2]=s);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=r(e);var h=new Error;u=function(n){p.onerror=p.onload=null,clearTimeout(d);var t=c[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",h.name="ChunkLoadError",h.type=o,h.request=a,t[1](h)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=n,u=u.slice();for(var h=0;h<u.length;h++)n(u[h]);var d=p;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3dfd":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("PopupMessage",{attrs:{content:e.popupMessage,position:e.position,type:e.popupType,show:e.triggerPopup},on:{showBack:function(n){e.triggerPopup=!1}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],staticClass:"loader"},[n("div",{staticClass:"spinner"}),n("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-notch"}})],1),n("router-view")],1)},a=[],c=(t("14d9"),t("fe0f")),s=t("e613"),r={name:"App",components:{PopupMessage:s["a"]},data(){return{session:null,loader:!1,popupMessage:"",position:"bottom",popupType:"",triggerPopup:!1}},created(){document.body.classList.contains("theme-light")||document.body.classList.contains("theme-dark")||document.body.classList.add("theme-light"),window.addEventListener("changeLoader",this.changeLoader),window.addEventListener("popupMessageEvent",this.popupMessageEvent)},mounted(){let e=this;c["a"].auth.getSession().then(({data:n})=>{e.session=n.session}).catch(e=>{console.log(e)}).finally(()=>{null!=e.session?e.$router.push({name:"Home",params:{session:e.session}}):e.$router.push({name:"Login",params:{}})})},destroyed(){window.removeEventListener("changeLoader",this.changeLoader),window.removeEventListener("popupMessageEvent",this.popupMessageEvent)},methods:{changeLoader(e){this.loader=e.detail.loader},popupMessageEvent(e){console.log(e),this.popupMessage=e.detail.popupMessage.popupMessage,this.popupType=e.detail.popupMessage.popupType,this.triggerPopup=e.detail.popupMessage.triggerPopup},login(e){let n=this;console.log("sono nell apgina home dopo login"),e&&(console.log("sto effettuando get session"),c["a"].auth.getSession().then(({data:e})=>{console.log(e),n.session=e.session}))}}},i=r,u=(t("889f"),t("2877")),p=Object(u["a"])(i,o,a,!1,null,null,null);n["default"]=p.exports},"501a":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),a=t("3dfd"),c=t("8c4f");o["a"].use(c["a"]);const s=[{path:"/",name:"App",component:()=>Promise.resolve().then(t.bind(null,"3dfd"))},{path:"/login",name:"Login",component:()=>t.e("chunk-f6c9f8cc").then(t.bind(null,"a55b"))},{path:"/settings",name:"Settings",component:()=>t.e("chunk-7be11187").then(t.bind(null,"26d3")),children:[{path:"share",component:()=>t.e("chunk-2d20f319").then(t.bind(null,"b31c"))}]},{path:"/home",name:"Home",props:!0,component:()=>t.e("chunk-197283ab").then(t.bind(null,"bb51")),children:[{path:"notes",component:()=>t.e("chunk-3c0db3e5").then(t.bind(null,"0841")),children:[{path:"new",component:()=>t.e("chunk-2c0d3ca1").then(t.bind(null,"5d9f"))},{path:"list",component:()=>t.e("chunk-477a9aba").then(t.bind(null,"bb50"))},{path:"show",name:"ShowNote",props:!0,component:()=>t.e("chunk-65e97f58").then(t.bind(null,"1678"))}]},{path:"manageFood",component:()=>t.e("chunk-5e16aaae").then(t.bind(null,"b546")),children:[{path:"new",name:"NewFood",component:()=>t.e("chunk-20128195").then(t.bind(null,"fe94"))},{path:"shoppinglist",name:"ShoppingList",component:()=>t.e("chunk-75c232b4").then(t.bind(null,"7bb9"))},{path:"storagelist",name:"StorageList",component:()=>t.e("chunk-491c53c2").then(t.bind(null,"8038"))},{path:"garbagelist",name:"GarbageList",component:()=>t.e("chunk-2cf20710").then(t.bind(null,"ba53"))}]}]}],r=new c["a"]({routes:s});var i=r,u=t("be33"),p=t("ad3d"),h=t("11ca");u["c"].add(h["a"]),o["a"].component("font-awesome-icon",p["a"]),o["a"].config.productionTip=!1,new o["a"]({router:i,render:e=>e(a["default"])}).$mount("#app")},"889f":function(e,n,t){"use strict";t("501a")},c34a:function(e,n,t){"use strict";t("ee54")},e613:function(e,n,t){"use strict";var o=function(){var e=this,n=e._self._c;return n("div",[n("div",{staticClass:"popup-message",class:`${e.type} position-${e.position} ${e.internalShow}`},[e._v(" "+e._s(e.content)+" "),n("div",{staticClass:"cloud-arrow"})])])},a=[],c={name:"PopupMessage",components:{},props:{type:String,show:{type:Boolean,default:!1},content:{type:String,default:""},position:{type:String,default:"bottom"}},data(){return{}},created(){},computed:{internalShow:{get(){return this.show&&this.countDown(),this.show},set(e){this.$emit("showBack",e)}}},methods:{countDown(){setTimeout(()=>{this.internalShow=!1},5e3)}}},s=c,r=(t("c34a"),t("2877")),i=Object(r["a"])(s,o,a,!1,null,null,null);n["a"]=i.exports},ee54:function(e,n,t){},fe0f:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t("940b");const a="https://tturruxdxpphgpgczzsg.supabase.co",c="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0dXJydXhkeHBwaGdwZ2N6enNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0NDM4ODUsImV4cCI6MTk4MjAxOTg4NX0.mh5FdpvsZQolc1GlfVHwfgAGO8h-nFF0bnM0Stf7ePQ",s=Object(o["a"])(a,c)}});