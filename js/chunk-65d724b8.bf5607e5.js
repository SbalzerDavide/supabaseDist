(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65d724b8"],{"1a4e":function(e,t,s){"use strict";t["a"]={methods:{changeLoader(e){const t=new CustomEvent("changeLoader",{bubbles:!0,detail:{loader:e}});window.dispatchEvent(t)}}}},8038:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"storage-list d-flex flex-direction-column flex-grow"},[t("PopupMessage",{attrs:{content:e.popupMessage,position:"bottom",type:e.popupType,show:e.triggerPopup},on:{showBack:function(t){e.triggerPopup=!1}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedList.length>0,expression:"selectedList.length > 0"}],staticClass:"storage-list-appbar"},[t("div",{staticClass:"back",on:{click:e.removeSelection}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),t("div",{staticClass:"action"},[t("button",{staticClass:"btn btn-primary",on:{click:e.multipleStore}},[e._v(" Delete "),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)])]),t("div",{staticClass:"panel-delete-background",class:e.panelDelete?"show":"hide"},[t("div",{staticClass:"blurred",on:{click:e.cancelPanel}}),t("div",{staticClass:"panel-delete d-flex flex-direction-column"},[t("div",{staticClass:"cancel",on:{click:e.cancelPanel}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-x"}})],1),t("div",{staticClass:"food-name"},[e._v(" "+e._s(e.actualEl.name)+" ")]),t("div",{staticClass:"choice d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:e.eatenFood}},[e._v(" Alimento consumato ")]),t("button",{staticClass:"btn",on:{click:e.toGarbage}},[e._v(" Alimento buttato ")])]),t("div",{staticClass:"addToShoppingList"},[t("label",{attrs:{for:"addToShoppingList"}},[e._v("Inserisci a lista della spesa")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.enableAddToShoppingList,expression:"enableAddToShoppingList"}],attrs:{type:"checkbox",name:"addToShoppingList",id:"addToShoppingList"},domProps:{checked:Array.isArray(e.enableAddToShoppingList)?e._i(e.enableAddToShoppingList,null)>-1:e.enableAddToShoppingList},on:{change:function(t){var s=e.enableAddToShoppingList,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o=null,l=e._i(s,o);a.checked?l<0&&(e.enableAddToShoppingList=s.concat([o])):l>-1&&(e.enableAddToShoppingList=s.slice(0,l).concat(s.slice(l+1)))}else e.enableAddToShoppingList=i}}})])])]),t("div",{staticClass:"header d-flex"},[t("h1",[e._v("Storage list")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.storageFilter,expression:"storageFilter"}],attrs:{name:"storage"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.storageFilter=t.target.multiple?s:s[0]},e.applyFilter]}},e._l(e.storages,(function(s,a){return t("option",{key:a,domProps:{value:s}},[e._v(" "+e._s(s)+" ")])})),0)]),t("ul",{class:e.selectedList.length>0?"anable-select":""},e._l(e.storageList,(function(s,a){return t("li",{key:a,staticClass:"d-flex"},[t("div",{staticClass:"storage-food d-flex",class:e.setDeadlineClass(s)},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.selected,expression:"el.selected"}],attrs:{name:s.name,index:a,id:s.name,type:"checkbox"},domProps:{checked:Array.isArray(s.selected)?e._i(s.selected,null)>-1:s.selected},on:{change:[function(t){var a=s.selected,i=t.target,o=!!i.checked;if(Array.isArray(a)){var l=null,n=e._i(a,l);i.checked?n<0&&e.$set(s,"selected",a.concat([l])):n>-1&&e.$set(s,"selected",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(s,"selected",o)},e.changeCheckbox]}}),t("label",{staticClass:"d-flex",attrs:{for:s.name}},[t("div",{staticClass:"missing-days"},[e._v(" "+e._s(s.missingDays)+" ")]),t("div",{staticClass:"list-name"},[e._v(" "+e._s(s.name)+" ")])])]),t("div",{staticClass:"operation d-flex"},[t("div",{staticClass:"delete",on:{click:function(t){return e.deleteFood(a)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1),t("div",{staticClass:"toShopping"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-cart-shopping"}})],1)])])})),0)],1)},i=[],o=(s("14d9"),s("fe0f")),l=s("e613"),n=s("1a4e"),c={name:"StorageList",mixins:[n["a"]],components:{PopupMessage:l["a"]},props:{},data(){return{user:{},storageListOriginal:[],actualEl:Object,storageList:[],panelDelete:!1,selectedList:[],popupMessage:"",popupType:"",triggerPopup:!1,storages:["All","Frigorifero","Dispensa","Freezer"],storageFilter:"All",enableAddToShoppingList:!1}},created(){let e=window.sessionStorage.getItem("userData");null!=e&&(this.user=JSON.parse(e));let t=this;this.changeLoader(!0),this.getStorageList().then(e=>{this.changeLoader(!1),t.storageList=e,t.storageListOriginal=e;let s=new Date;t.storageList.forEach(e=>{let t=new Date(e.deadline);e.selected=!1;var a=t.getTime()-s.getTime();e.missingDays=Math.ceil(a/864e5)})})},methods:{applyFilter(){let e=this;"All"==this.storageFilter?this.storageList=this.storageListOriginal:this.storageList=this.storageListOriginal.filter(t=>{if("storage"in t&&null!==t.storage)return t.storage.toLowerCase()===e.storageFilter.toLowerCase()})},removeSelection(){this.selectedList=[],this.storageList.forEach(e=>{e.selected=!1})},multipleAction(){if(this.selectedList.length>0){let e=this.shoppingList.filter(e=>e.selected);console.log(e)}},multipleStore(){this.selectedList.length>0&&(this.panelDelete=!0,this.managePanel())},managePanel(){let e=this;this.selectedList.length>0?this.actualEl=this.storageList[this.selectedList[0]]:(console.log("ho finito quindi chiudo il pannello"),this.enableAddToShoppingList=!1,this.panelDelete=!1,this.getStorageList().then(t=>{e.storageList=t,e.storageListOriginal=t;let s=new Date;e.storageList.forEach(e=>{let t=new Date(e.deadline);e.selected=!1;var a=t.getTime()-s.getTime();e.missingDays=Math.ceil(a/864e5)})}))},changeCheckbox(e){let t=e.target.getAttribute("index");e.target.checked?this.selectedList.push(t):e.target.checked||this.selectedList.indexOf(t)>=0&&this.selectedList.splice(this.selectedList.indexOf(t),1),console.log(this.selectedList)},getStorageList(){return new Promise((e,t)=>{let s=this;o["a"].from("food").select().eq("user_id",s.user.id).eq("shoppingList",!1).neq("garbage",!0).order("deadline").then(t=>{e(t.data)}).catch(e=>{t(e)})})},setDeadlineClass(e){let t;return t=e.missingDays<0?"garbage-food":e.missingDays<4?"limit-food":e.missingDays<8?"warning-food":"far-food",t},eatenFood(){let e=this;o["a"].from("food").delete().eq("id",this.actualEl.id).then(()=>{e.popupMessage=e.actualEl.name+" contrassegnato come mangiato!",e.popupType="success",e.triggerPopup=!0,e.enableAddToShoppingList?(console.log("aggiungo anche a lista della spesa"),e.toShoppingList().then(()=>{e.selectedList.splice(0,1),e.managePanel()})):(e.selectedList.splice(0,1),e.managePanel())}).catch(e=>{console.log(e)})},toGarbage(){let e=this,t={deadline:this.actualEl.deadline,id:this.actualEl.id,name:this.actualEl.name,garbage:!0,garbageDate:new Date},s=!1;o["a"].from("food").update(t).eq("id",t.id).select().then(a=>{"data"in a&&a.data.length>0&&(s=!0,e.popupMessage=t.name+" buttato!",e.popupType="success",e.triggerPopup=!0,e.enableAddToShoppingList?(console.log("aggiungo anche a lista della spesa"),e.toShoppingList().then(()=>{e.selectedList.splice(0,1),e.managePanel()})):(e.selectedList.splice(0,1),e.managePanel()))}).catch(t=>{s||(console.log(t),e.popupMessage="Attenzione, errore nello spostemento",e.popupType="error",e.triggerPopup=!0)})},toShoppingList(){return new Promise((e,t)=>{let s={shoppingList:!0,name:this.actualEl.name,description:this.actualEl.description,user_id:this.actualEl.user_id,category:this.actualEl.category};o["a"].from("food").insert(s).select().then(t=>{e(t.data)}).catch(e=>{t(e)})})},cancelPanel(){let e=this;this.panelDelete=!1,this.storageList.forEach((t,s)=>{e.selectedList.includes(s.toString())?t.selected=!0:t.selected=!1})}}},r=c,d=(s("c217"),s("2877")),p=Object(d["a"])(r,a,i,!1,null,null,null);t["default"]=p.exports},8289:function(e,t,s){},c217:function(e,t,s){"use strict";s("8289")}}]);