(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dceaf9a"],{"1a4e":function(e,t,i){"use strict";t["a"]={methods:{changeLoader(e){const t=new CustomEvent("changeLoader",{bubbles:!0,detail:{loader:e}});window.dispatchEvent(t)}}}},ba53:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"garbage-list d-flex flex-direction-column flex-grow"},[e._m(0),t("div",{staticClass:"filter d-flex"},[t("div",{staticClass:"active-filter unselectable"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-chevron-left"},on:{click:e.comeBack}}),t("span",[e._v(" "+e._s(e.period)+" ")]),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-chevron-right"},on:{click:e.goOn}})],1),t("div",{staticClass:"change-filter"},[t("div",{staticClass:"selected unselectable",on:{click:function(t){e.showOptions=!0}}},[e._v(" "+e._s(e.activeFilter)+" "),e.showOptions?t("span",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-chevron-up"}})],1):t("span",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-chevron-down"}})],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showOptions,expression:"showOptions"}],staticClass:"background-options",on:{click:function(t){e.showOptions=!1}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showOptions,expression:"showOptions"}],staticClass:"options"},e._l(e.filterTypes,(function(i,a){return t("div",{key:a,staticClass:"option",on:{click:function(t){return e.changeFilter(i)}}},[e._v(" "+e._s(i)+" ")])})),0)])]),t("ul",e._l(e.garbageList,(function(i,a){return t("li",{key:a,staticClass:"d-flex"},[t("div",{staticClass:"d-flex"},[t("div",{staticClass:"number"},[e._v(" "+e._s(a)+" ")]),t("div",{staticClass:"name"},[e._v(" "+e._s(i.name)+" ")])]),t("div",{staticClass:"date"},[e._v(" "+e._s(i.garbageDate)+" ")])])})),0)])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header d-flex"},[t("div",{staticClass:"d-flex"},[t("h1",[e._v("Garbage list")])])])}],o=i("fe0f"),r=i("1a4e"),n={name:"ShoppingList",mixins:[r["a"]],components:{},props:{},data(){return{user:{},showOptions:!1,garbageList:[],filterTypes:["Mese","Anno"],activeFilter:"",period:"",activePeriod:{},today:Date}},created(){this.today=new Date;let e=window.sessionStorage.getItem("userData");null!=e&&(this.user=JSON.parse(e));let t=this;this.activeFilter=this.filterTypes[0],this.changeFilter(this.activeFilter),this.activePeriod.date=this.today,this.changeLoader(!0),this.getGarbageList().then(e=>{this.changeLoader(!1),null!=e&&e.length>0?(t.garbageList=e,t.garbageList.forEach(e=>{e.selected=!1})):t.garbageList=[]})},methods:{comeBack(){let e=this;"Anno"==this.activeFilter?(this.activePeriod.year--,this.period=this.activePeriod.year,this.activePeriod.date=new Date(this.activePeriod.year,0)):"Mese"==this.activeFilter&&(this.activePeriod.month>0?this.activePeriod.month--:(this.activePeriod.month=11,this.activePeriod.year--),this.period=`${this.activePeriod.month+1} / ${this.activePeriod.year}`,this.activePeriod.date=new Date(this.activePeriod.year,this.activePeriod.month)),this.changeLoader(!0),this.getGarbageList().then(t=>{this.changeLoader(!1),null!=t&&t.length>0?(e.garbageList=t,e.garbageList.forEach(e=>{e.selected=!1})):e.garbageList=[]})},goOn(){let e=this;"Anno"==this.activeFilter?(this.activePeriod.year++,this.period=this.activePeriod.year,this.activePeriod.date=new Date(this.activePeriod.year,0)):"Mese"==this.activeFilter&&(this.activePeriod.month>10?(this.activePeriod.month=0,this.activePeriod.year++):this.activePeriod.month++,this.period=`${this.activePeriod.month+1} / ${this.activePeriod.year}`,this.activePeriod.date=new Date(this.activePeriod.year,this.activePeriod.month)),this.changeLoader(!0),this.getGarbageList().then(t=>{this.changeLoader(!1),null!=t&&t.length>0?(e.garbageList=t,e.garbageList.forEach(e=>{e.selected=!1})):e.garbageList=[]})},changeFilter(e){this.activeFilter=e,this.showOptions=!1,this.activePeriod.year=this.today.getFullYear(),this.activePeriod.month=this.today.getMonth();let t=this.today.getFullYear(),i=this.today.getMonth()+1;"Anno"==e?this.period=t:"Mese"==e&&(this.period=`${i} / ${t}`)},getGarbageList(){return new Promise((e,t)=>{let i,a,s=this;if("Anno"===this.activeFilter)i=this.activePeriod.year+"-01-01",a=this.activePeriod.year+1+"-01-01";else if("Mese"===this.activeFilter){let e=this.activePeriod.month;i=`${this.activePeriod.year}-${this.activePeriod.month+1}-01`,a=e>10?this.activePeriod.year+1+"-01-01":`${this.activePeriod.year}-${this.activePeriod.month+2}-01`}o["a"].from("food").select().eq("user_id",s.user.id).eq("garbage",!0).lt("garbageDate",a).gt("garbageDate",i).order("garbageDate",{ascending:!1}).then(t=>{e(t.data)}).catch(e=>{t(e)})})}}},c=n,h=(i("fc6d"),i("2877")),d=Object(h["a"])(c,a,s,!1,null,null,null);t["default"]=d.exports},fc0f:function(e,t,i){},fc6d:function(e,t,i){"use strict";i("fc0f")}}]);