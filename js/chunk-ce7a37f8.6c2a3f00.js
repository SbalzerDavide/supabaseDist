(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce7a37f8"],{"035a":function(e,t,s){"use strict";s("8b0d")},3041:function(e,t,s){"use strict";s("6149")},5842:function(e,t,s){},6149:function(e,t,s){},"8b0d":function(e,t,s){},"947a":function(e,t,s){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"account-more-info"},[t("h3",[e._v("Completa i dati per il tuo account")]),t("div",{staticClass:"input-info"},[t("div",[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{name:"username",type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),t("div",[t("label",{attrs:{for:"website"}},[e._v("Website")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.website,expression:"website"}],attrs:{name:"website",type:"text",placeholder:"website"},domProps:{value:e.website},on:{input:function(t){t.target.composing||(e.website=t.target.value)}}})])]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:e.upsert}},[e._v("Inserisci")])]),t("div",{staticClass:"close d-flex",on:{click:e.close}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1)])},o=[],a=s("fe0f"),n={name:"AccountMoreInfo",components:{},props:{},data(){return{username:"",website:"",user:{}}},created(){let e=window.sessionStorage.getItem("userData");null!=e&&(this.user=JSON.parse(e)),console.log(this.user)},methods:{close(){this.$emit("closeMoreInfo",!0)},upsert(){let e=this;const t={id:this.user.id,username:this.username,website:this.website,updated_at:new Date};a["a"].from("profiles").upsert(t).then(t=>{console.log(t),e.user.username=e.username,e.user.website=e.website,window.sessionStorage.setItem("userData",JSON.stringify(e.user))}).catch(e=>{console.log(e)})}}},r=n,l=(s("035a"),s("2877")),c=Object(l["a"])(r,i,o,!1,null,null,null);t["a"]=c.exports},a36d:function(e,t,s){"use strict";s("5842")},bb51:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[t("AppBar"),t("div",{staticClass:"work-area d-flex flex-direction-column"},[e.showMoreInfo?t("AccountMoreInfo",{on:{closeMoreInfo:e.closeMoreInfo}}):e._e(),e.firstPage?t("div",[t("Dashboard",{on:{firstPageEvent:e.firstPageEvent}})],1):t("div",{staticClass:"router-content d-flex flex-direction-column flex-grow"},[t("router-view")],1)],1)],1)},o=[],a=s("fe0f"),n=s("947a"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-bar"},[t("div",{staticClass:"container d-flex"},[t("div",{staticClass:"left d-flex"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.title)+" ")])]),t("div",{staticClass:"right"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-cog"},on:{click:e.goToSettings}})],1)])])},l=[],c=(s("14d9"),{name:"AppBar",components:{},props:{},data(){return{title:"Nome rotta"}},created(){window.addEventListener("setAppbarTitle",this.setAppbarTitle)},methods:{setAppbarTitle(e){console.log(e),"title"in e.detail&&(this.title=e.detail.title)},goToSettings(){this.$router.push({name:"Settings"})},goHome(){this.$router.push({name:"App"})},logout(){let e=this;a["a"].auth.signOut().then(()=>{e.$router.push({name:"App",params:{}})}).catch(e=>{console.log(e)})}}}),u=c,d=(s("3041"),s("2877")),f=Object(d["a"])(u,r,l,!1,null,null,null),p=f.exports,m=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"dashboard"}},[t("div",{staticClass:"container d-flex"},e._l(e.appList,(function(s,i){return t("div",{key:i,staticClass:"app",on:{click:function(t){return e.goTo(s.value)}}},[t("div",{staticClass:"icon"},[t("font-awesome-icon",{attrs:{icon:s.icon}})],1),t("div",{staticClass:"title"},[e._v(" "+e._s(s.title)+" ")])])})),0)])},h=[],v={name:"App",data(){return{appList:[{title:"note",value:"notes/list",icon:"fa-solid fa-clipboard"},{title:"organizza cibo",value:"manageFood",icon:"fa-solid fa-burger"},{title:"turni",value:"manageShift",icon:"fa-solid fa-calendar"}]}},mounted(){},methods:{goTo(e){this.$emit("firstPageEvent",!1),this.$router.push({path:"/home/"+e})}}},g=v,w=(s("a36d"),Object(d["a"])(g,m,h,!1,null,null,null)),b=w.exports,x={name:"App",components:{AccountMoreInfo:n["a"],AppBar:p,Dashboard:b},props:{session:Object},data(){return{firstPage:!0,showMoreInfo:!1}},mounted(){this.getProfiles();let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")},methods:{getProfiles(){if(this.session)try{const{user:e}=this.session;let t=this;a["a"].from("profiles").select("username, website, avatar_url").eq("id",e.id).single().then(e=>{let s=e.data;s.id=t.session.user.id,s.email=t.session.user.email,window.sessionStorage.setItem("userData",JSON.stringify(s))})}catch(e){alert(e.message)}},firstPageEvent(e){this.firstPage=e},closeMoreInfo(e){console.log(e),e&&(this.showMoreInfo=!1)}}},_=x,C=(s("e503"),Object(d["a"])(_,i,o,!1,null,null,null));t["default"]=C.exports},ddaf:function(e,t,s){},e503:function(e,t,s){"use strict";s("ddaf")}}]);