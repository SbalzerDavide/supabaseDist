(function(e){function n(n){for(var o,a,c=n[0],i=n[1],u=n[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==s[c]&&(o=!1)}o&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},a={index:0},s={index:0},r=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-110baaa5":"7ca1c9f8","chunk-15cc7d2e":"10a34bd3","chunk-1d779e9e":"a8c5464b","chunk-20d4ea0e":"2eece3eb","chunk-33f7d4f8":"0246c4d6","chunk-358b7aac":"3d71f25f","chunk-406a4244":"abe34096","chunk-546f934e":"05a3108e","chunk-65d724b8":"bf5607e5","chunk-9a27cb24":"7d25dcd8","chunk-cfeff23c":"8281fdc9"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-110baaa5":1,"chunk-15cc7d2e":1,"chunk-1d779e9e":1,"chunk-20d4ea0e":1,"chunk-33f7d4f8":1,"chunk-358b7aac":1,"chunk-406a4244":1,"chunk-546f934e":1,"chunk-65d724b8":1,"chunk-9a27cb24":1,"chunk-cfeff23c":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-110baaa5":"374053ca","chunk-15cc7d2e":"5304c088","chunk-1d779e9e":"1eb4c39e","chunk-20d4ea0e":"74b67212","chunk-33f7d4f8":"52fe663b","chunk-358b7aac":"66478119","chunk-406a4244":"395644fa","chunk-546f934e":"c5060d5a","chunk-65d724b8":"53541444","chunk-9a27cb24":"aa5eb6dd","chunk-cfeff23c":"68fc7449"}[e]+".css",s=i.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===o||p===s))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],p=u.getAttribute("data-href");if(p===o||p===s)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var o=n&&n.target&&n.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],l.parentNode.removeChild(l),t(r)},l.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){a[e]=0})));var o=s[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=s[e]=[n,t]}));n.push(o[2]=r);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=c(e);var d=new Error;u=function(n){p.onerror=p.onload=null,clearTimeout(l);var t=s[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}s[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var l=p;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3dfd":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("PopupMessage",{attrs:{content:e.popupMessage,position:e.position,type:e.popupType,show:e.triggerPopup},on:{showBack:function(n){e.triggerPopup=!1}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loader,expression:"loader"}],staticClass:"loader"},[n("div",{staticClass:"spinner"}),n("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-notch"}})],1),n("router-view")],1)},a=[],s=(t("14d9"),t("fe0f")),r=t("e613"),c={name:"App",components:{PopupMessage:r["a"]},data(){return{session:null,loader:!1,popupMessage:"",position:"bottom",popupType:"",triggerPopup:!1}},created(){document.body.classList.contains("theme-light")||document.body.classList.contains("theme-dark")||document.body.classList.add("theme-light"),window.addEventListener("changeLoader",this.changeLoader),window.addEventListener("popupMessageEvent",this.popupMessageEvent)},mounted(){let e=this;s["a"].auth.getSession().then(({data:n})=>{e.session=n.session}).catch(e=>{console.log(e)}).finally(()=>{null!=e.session?e.$router.push({name:"Home",params:{session:e.session}}):e.$router.push({name:"Login",params:{}})})},destroyed(){window.removeEventListener("changeLoader",this.changeLoader),window.removeEventListener("popupMessageEvent",this.popupMessageEvent)},methods:{changeLoader(e){this.loader=e.detail.loader},popupMessageEvent(e){console.log(e),this.popupMessage=e.detail.popupMessage.popupMessage,this.popupType=e.detail.popupMessage.popupType,this.triggerPopup=e.detail.popupMessage.triggerPopup},login(e){let n=this;console.log("sono nell apgina home dopo login"),e&&(console.log("sto effettuando get session"),s["a"].auth.getSession().then(({data:e})=>{console.log(e),n.session=e.session}))}}},i=c,u=(t("da00"),t("2877")),p=Object(u["a"])(i,o,a,!1,null,null,null);n["default"]=p.exports},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),a=t("3dfd"),s=t("8c4f");o["a"].use(s["a"]);const r=[{path:"/",name:"App",component:()=>Promise.resolve().then(t.bind(null,"3dfd"))},{path:"/login",name:"Login",component:()=>t.e("chunk-33f7d4f8").then(t.bind(null,"a55b"))},{path:"/home",name:"Home",props:!0,component:()=>t.e("chunk-15cc7d2e").then(t.bind(null,"bb51")),children:[{path:"notes",component:()=>t.e("chunk-546f934e").then(t.bind(null,"0841")),children:[{path:"new",component:()=>t.e("chunk-9a27cb24").then(t.bind(null,"5d9f"))},{path:"list",component:()=>t.e("chunk-1d779e9e").then(t.bind(null,"bb50"))},{path:"show",name:"ShowNote",props:!0,component:()=>t.e("chunk-cfeff23c").then(t.bind(null,"1678"))}]},{path:"manageFood",component:()=>t.e("chunk-20d4ea0e").then(t.bind(null,"b546")),children:[{path:"new",name:"NewFood",component:()=>t.e("chunk-406a4244").then(t.bind(null,"fe94"))},{path:"shoppinglist",name:"ShoppingList",component:()=>t.e("chunk-358b7aac").then(t.bind(null,"7bb9"))},{path:"storagelist",name:"StorageList",component:()=>t.e("chunk-65d724b8").then(t.bind(null,"8038"))},{path:"garbagelist",name:"GarbageList",component:()=>t.e("chunk-110baaa5").then(t.bind(null,"ba53"))}]}]}],c=new s["a"]({routes:r});var i=c,u=t("be33"),p=t("ad3d"),d=t("11ca");u["c"].add(d["a"]),o["a"].component("font-awesome-icon",p["a"]),o["a"].config.productionTip=!1,new o["a"]({router:i,render:e=>e(a["default"])}).$mount("#app")},"8a76":function(e,n,t){},c34a:function(e,n,t){"use strict";t("ee54")},da00:function(e,n,t){"use strict";t("8a76")},e613:function(e,n,t){"use strict";var o=function(){var e=this,n=e._self._c;return n("div",[n("div",{staticClass:"popup-message",class:`${e.type} position-${e.position} ${e.internalShow}`},[e._v(" "+e._s(e.content)+" "),n("div",{staticClass:"cloud-arrow"})])])},a=[],s={name:"PopupMessage",components:{},props:{type:String,show:{type:Boolean,default:!1},content:{type:String,default:""},position:{type:String,default:"bottom"}},data(){return{}},created(){},computed:{internalShow:{get(){return this.show&&this.countDown(),this.show},set(e){this.$emit("showBack",e)}}},methods:{countDown(){setTimeout(()=>{this.internalShow=!1},5e3)}}},r=s,c=(t("c34a"),t("2877")),i=Object(c["a"])(r,o,a,!1,null,null,null);n["a"]=i.exports},ee54:function(e,n,t){},fe0f:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("940b");const a="https://tturruxdxpphgpgczzsg.supabase.co",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0dXJydXhkeHBwaGdwZ2N6enNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0NDM4ODUsImV4cCI6MTk4MjAxOTg4NX0.mh5FdpvsZQolc1GlfVHwfgAGO8h-nFF0bnM0Stf7ePQ",r=Object(o["a"])(a,s)}});