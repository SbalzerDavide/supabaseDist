(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd03b1d6"],{"035a":function(e,t,s){"use strict";s("8b0d")},"0d43":function(e,t,s){},"6ea3":function(e,t,s){"use strict";s("f4fd")},"740f":function(e,t,s){"use strict";s("d14f")},"839a":function(e,t,s){"use strict";s("0d43")},"8b0d":function(e,t,s){},bb51:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"home"}},[t("AppBar"),t("div",{staticClass:"work-area d-flex flex-direction-column"},[e.showMoreInfo?t("AccountMoreInfo",{on:{closeMoreInfo:e.closeMoreInfo}}):e._e(),e.firstPage?t("div",[t("Dashboard",{on:{firstPageEvent:e.firstPageEvent}})],1):t("div",{staticClass:"router-content d-flex flex-direction-column flex-grow"},[t("router-view")],1)],1)],1)},n=[],i=s("fe0f"),a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"account-more-info"},[t("h3",[e._v("Completa i dati per il tuo account")]),t("div",{staticClass:"input-info"},[t("div",[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{name:"username",type:"text",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),t("div",[t("label",{attrs:{for:"website"}},[e._v("Website")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.website,expression:"website"}],attrs:{name:"website",type:"text",placeholder:"website"},domProps:{value:e.website},on:{input:function(t){t.target.composing||(e.website=t.target.value)}}})])]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:e.upsert}},[e._v("Inserisci")])]),t("div",{staticClass:"close d-flex",on:{click:e.close}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1)])},r=[],c={name:"AccountMoreInfo",components:{},props:{},data(){return{username:"",website:"",user:{}}},created(){let e=window.sessionStorage.getItem("userData");null!=e&&(this.user=JSON.parse(e)),console.log(this.user)},methods:{close(){this.$emit("closeMoreInfo",!0)},upsert(){let e=this;const t={id:this.user.id,username:this.username,website:this.website,updated_at:new Date};i["a"].from("profiles").upsert(t).then(t=>{console.log(t),e.user.username=e.username,e.user.website=e.website,window.sessionStorage.setItem("userData",JSON.stringify(e.user))}).catch(e=>{console.log(e)})}}},l=c,u=(s("035a"),s("2877")),d=Object(u["a"])(l,a,r,!1,null,null,null),f=d.exports,m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-bar"},[t("div",{staticClass:"container d-flex"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-house"},on:{click:e.goHome}}),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-right-from-bracket"},on:{click:e.logout}})],1),t("ThemeSwitch")],1)},h=[],p=(s("14d9"),s("c6e1")),v={name:"AppBar",components:{ThemeSwitch:p["a"]},props:{},data(){return{}},created(){},methods:{goHome(){this.$router.push({name:"App"})},logout(){let e=this;i["a"].auth.signOut().then(()=>{e.$router.push({name:"App",params:{}})}).catch(e=>{console.log(e)})}}},g=v,w=(s("f0c4"),Object(u["a"])(g,m,h,!1,null,null,null)),b=w.exports,x=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"dashboard"}},[t("div",{staticClass:"container d-flex"},e._l(e.appList,(function(s,o){return t("div",{key:o,staticClass:"app",on:{click:function(t){return e.goTo(s.value)}}},[e._v(" "+e._s(s.title)+" ")])})),0)])},_=[],k={name:"App",data(){return{appList:[{title:"note",value:"notes/list"},{title:"organizza cibo",value:"manageFood"},{title:"turni",value:"manageShift"}]}},mounted(){},methods:{goTo(e){this.$emit("firstPageEvent",!1),this.$router.push({path:"/home/"+e})}}},C=k,I=(s("6ea3"),Object(u["a"])(C,x,_,!1,null,null,null)),O=I.exports,P={name:"App",components:{AccountMoreInfo:f,AppBar:b,Dashboard:O},props:{session:Object},data(){return{firstPage:!0,showMoreInfo:!1}},mounted(){this.getProfiles()},methods:{getProfiles(){try{const{user:e}=this.session;let t=this;i["a"].from("profiles").select("username, website, avatar_url").eq("id",e.id).single().then(e=>{let s=e.data;s.id=t.session.user.id,s.email=t.session.user.email,window.sessionStorage.setItem("userData",JSON.stringify(s))})}catch(e){alert(e.message)}finally{console.log("ho finito")}},firstPageEvent(e){this.firstPage=e},closeMoreInfo(e){console.log(e),e&&(this.showMoreInfo=!1)}}},y=P,A=(s("839a"),Object(u["a"])(y,o,n,!1,null,null,null));t["default"]=A.exports},c6e1:function(e,t,s){"use strict";var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"change-theme d-flex"},[t("div",{class:"light"===e.theme?"active":""},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-sun"},on:{click:function(t){return e.changeTheme("light")}}})],1),t("div",{staticClass:"switch d-flex",on:{click:function(t){return e.changeTheme("")}}},[t("div",{staticClass:"ball-switch"})]),t("div",{class:"dark"===e.theme?"active":""},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-moon"},on:{click:function(t){return e.changeTheme("dark")}}})],1)])},n=[],i={name:"ThemeSwitch",components:{},props:{session:Object},data(){return{theme:"light"}},mounted(){console.log("mounted theme switch")},methods:{changeTheme(e){""!==e?this.theme=e:"light"===this.theme?this.theme="dark":"dark"===this.theme&&(this.theme="light"),document.body.classList.forEach((e,t,s)=>{e.includes("theme")&&s.remove(e)}),document.body.classList.add("theme-"+this.theme)}}},a=i,r=(s("740f"),s("2877")),c=Object(r["a"])(a,o,n,!1,null,null,null);t["a"]=c.exports},d14f:function(e,t,s){},f0c4:function(e,t,s){"use strict";s("f34d")},f34d:function(e,t,s){},f4fd:function(e,t,s){}}]);