(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dabd418"],{"0755":function(e,t,a){"use strict";a("19e9")},"19e9":function(e,t,a){},"1a4e":function(e,t,a){"use strict";t["a"]={methods:{changeLoader(e){const t=new CustomEvent("changeLoader",{bubbles:!0,detail:{loader:e}});window.dispatchEvent(t)}}}},"2d9d":function(e,t,a){},8038:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"storage-list d-flex flex-direction-column flex-grow"},[t("PopupMessage",{attrs:{content:e.popupMessage,position:"bottom",type:e.popupType,show:e.triggerPopup},on:{showBack:function(t){e.triggerPopup=!1}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedList.length>0,expression:"selectedList.length > 0"}],staticClass:"storage-list-appbar"},[t("div",{staticClass:"back",on:{click:e.removeSelection}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),t("div",{staticClass:"action"},[t("button",{staticClass:"btn btn-primary",on:{click:e.multipleStore}},[e._v(" Delete "),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)])]),t("div",{staticClass:"panel-delete-background",class:e.panelDelete?"show":"hide"},[t("div",{staticClass:"blurred",on:{click:e.cancelPanel}}),t("div",{staticClass:"panel-delete d-flex flex-direction-column"},[t("div",{staticClass:"food-name"},[t("h4",[e._v(" "+e._s(e.actualEl.name)+" ")])]),t("div",{staticClass:"choice d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:e.eatenFood}},[e._v(" Alimento consumato ")]),t("button",{staticClass:"btn",on:{click:e.toGarbage}},[e._v(" Alimento buttato ")])]),t("div",{staticClass:"addToShoppingList"},[t("label",{attrs:{for:"addToShoppingList"}},[e._v("Inserisci a lista della spesa")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.enableAddToShoppingList,expression:"enableAddToShoppingList"}],attrs:{type:"checkbox",name:"addToShoppingList",id:"addToShoppingList"},domProps:{checked:Array.isArray(e.enableAddToShoppingList)?e._i(e.enableAddToShoppingList,null)>-1:e.enableAddToShoppingList},on:{change:function(t){var a=e.enableAddToShoppingList,i=t.target,s=!!i.checked;if(Array.isArray(a)){var o=null,n=e._i(a,o);i.checked?n<0&&(e.enableAddToShoppingList=a.concat([o])):n>-1&&(e.enableAddToShoppingList=a.slice(0,n).concat(a.slice(n+1)))}else e.enableAddToShoppingList=s}}})])])]),e.editFood?t("div",{staticClass:"edit-food"},[t("Food",{attrs:{mode:"read",propsFood:e.actualEl},on:{closePanel:function(t){e.editFood=!1},saved:e.saveEditFood}})],1):t("div",[1==e.filterType?t("div",{staticClass:"header-old d-flex"},[t("h1",[e._v("Storage list")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.storageFilter,expression:"storageFilter"}],attrs:{name:"storage"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.storageFilter=t.target.multiple?a:a[0]},e.applyFilter]}},e._l(e.storages,(function(a,i){return t("option",{key:i,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])})),0)]):2==e.filterType?t("div",{staticClass:"header d-flex"},[t("div",{staticClass:"filter",class:e.isFiltered?"filtered":""},[t("div",{staticClass:"cancel-filter box",class:e.isFiltered?"show":"",on:{click:e.cancelFilter}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-x"}})],1),e._l(e.storages,(function(a,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isFiltered||e.isFiltered&&0!=i,expression:"!isFiltered || (isFiltered && index != 0)"}],key:i,staticClass:"box box-filter",class:i==e.activeFilter?"active":"",attrs:{value:a},on:{click:function(t){return e.filterStorage(i)}}},[e._v(" "+e._s(a)+" ")])}))],2)]):e._e(),t("ul",{class:e.selectedList.length>0?"anable-select":""},e._l(e.storageList,(function(a,i){return t("li",{key:i,staticClass:"d-flex"},[t("div",{staticClass:"storage-food d-flex",class:e.setDeadlineClass(a)},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.selected,expression:"el.selected"}],attrs:{name:a.name,index:i,id:a.name,type:"checkbox"},domProps:{checked:Array.isArray(a.selected)?e._i(a.selected,null)>-1:a.selected},on:{change:[function(t){var i=a.selected,s=t.target,o=!!s.checked;if(Array.isArray(i)){var n=null,l=e._i(i,n);s.checked?l<0&&e.$set(a,"selected",i.concat([n])):l>-1&&e.$set(a,"selected",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(a,"selected",o)},e.changeCheckbox]}}),t("label",{staticClass:"d-flex",attrs:{for:a.name}},[t("div",{staticClass:"missing-days"},[e._v(" "+e._s(a.missingDays)+" ")]),t("div",{staticClass:"list-name"},[e._v(" "+e._s(a.name)+" ")])])]),t("div",{staticClass:"operation d-flex"},[t("div",{staticClass:"edit",on:{click:function(t){return e.openEditFood(i)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-pen-to-square"}})],1),t("div",{staticClass:"delete",on:{click:function(t){return e.deleteEl(i)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)])])})),0)])],1)},s=[],o=(a("14d9"),a("fe0f")),n=a("84e9"),l=a("e613"),r=a("1a4e"),d=a("b51d"),c={name:"StorageList",mixins:[r["a"],d["a"]],components:{PopupMessage:l["a"],Food:n["a"]},props:{},data(){return{user:{},storageListOriginal:[],actualEl:Object,storageList:[],panelDelete:!1,selectedList:[],popupMessage:"",popupType:"",triggerPopup:!1,storages:["All","Frigorifero","Dispensa","Freezer"],activeFilter:0,filterType:2,storageFilter:"All",isFiltered:!1,enableAddToShoppingList:!1,editFood:!1}},created(){this.setAppbarTitle("Storage List");let e=window.sessionStorage.getItem("userData");alert(e),null!=e&&(this.user=JSON.parse(e));let t=this;this.changeLoader(!0),this.getStorageList().then(e=>{this.changeLoader(!1),t.storageList=e,t.storageListOriginal=e;let a=new Date;t.storageList.forEach(e=>{let t=new Date(e.deadline);e.selected=!1;var i=t.getTime()-a.getTime();e.missingDays=Math.ceil(i/864e5)})})},methods:{openEditFood(e){this.editFood=!0,this.actualEl=this.storageList[e]},deleteEl(e){e=parseInt(e),this.selectedList=[e.toString()],this.panelDelete=!0,this.storageList[e].selected=!0,this.actualEl=this.storageList[e]},applyFilter(){let e=this;"All"==this.storageFilter?this.storageList=this.storageListOriginal:this.storageList=this.storageListOriginal.filter(t=>{if("storage"in t&&null!==t.storage)return t.storage.toLowerCase()===e.storageFilter.toLowerCase()})},filterStorage(e){this.activeFilter=e;let t=this;"All"==this.storages[e]?(this.storageList=this.storageListOriginal,this.isFiltered=!1):this.storageList=this.storageListOriginal.filter(a=>{if("storage"in a&&null!==a.storage)return t.isFiltered=!0,a.storage.toLowerCase()===t.storages[e].toLowerCase()})},cancelFilter(){this.storageList=this.storageListOriginal,this.isFiltered=!1,this.activeFilter=0},removeSelection(){this.selectedList=[],this.storageList.forEach(e=>{e.selected=!1})},multipleAction(){if(this.selectedList.length>0){let e=this.shoppingList.filter(e=>e.selected);console.log(e)}},multipleStore(){this.selectedList.length>0&&(this.panelDelete=!0,this.managePanel())},managePanel(){let e=this;this.selectedList.length>0?this.actualEl=this.storageList[this.selectedList[0]]:(console.log("ho finito quindi chiudo il pannello"),this.enableAddToShoppingList=!1,this.panelDelete=!1,this.getStorageList().then(t=>{e.storageList=t,e.storageListOriginal=t;let a=new Date;e.storageList.forEach(e=>{let t=new Date(e.deadline);e.selected=!1;var i=t.getTime()-a.getTime();e.missingDays=Math.ceil(i/864e5)})}))},changeCheckbox(e){let t=e.target.getAttribute("index");e.target.checked?this.selectedList.push(t):e.target.checked||this.selectedList.indexOf(t)>=0&&this.selectedList.splice(this.selectedList.indexOf(t),1),console.log(this.selectedList)},getStorageList(){return new Promise((e,t)=>{let a=this;o["a"].from("food").select().eq("user_id",a.user.id).eq("shoppingList",!1).neq("garbage",!0).order("deadline").then(t=>{e(t.data)}).catch(e=>{t(e)})})},setDeadlineClass(e){let t;return t=e.missingDays<0?"garbage-food":e.missingDays<4?"limit-food":e.missingDays<8?"warning-food":"far-food",t},eatenFood(){let e=this;o["a"].from("food").delete().eq("id",this.actualEl.id).then(()=>{e.popupMessage=e.actualEl.name+" contrassegnato come mangiato!",e.popupType="success",e.triggerPopup=!0,e.enableAddToShoppingList?(console.log("aggiungo anche a lista della spesa"),e.toShoppingList().then(()=>{e.selectedList.splice(0,1),e.managePanel()})):(e.selectedList.splice(0,1),e.managePanel())}).catch(e=>{console.log(e)})},toGarbage(){let e=this,t={deadline:this.actualEl.deadline,id:this.actualEl.id,name:this.actualEl.name,garbage:!0,garbageDate:new Date},a=!1;o["a"].from("food").update(t).eq("id",t.id).select().then(i=>{"data"in i&&i.data.length>0&&(a=!0,e.popupMessage=t.name+" buttato!",e.popupType="success",e.triggerPopup=!0,e.enableAddToShoppingList?(console.log("aggiungo anche a lista della spesa"),e.toShoppingList().then(()=>{e.selectedList.splice(0,1),e.managePanel()})):(e.selectedList.splice(0,1),e.managePanel()))}).catch(t=>{a||(console.log(t),e.popupMessage="Attenzione, errore nello spostemento",e.popupType="error",e.triggerPopup=!0)})},toShoppingList(){return new Promise((e,t)=>{let a={shoppingList:!0,name:this.actualEl.name,description:this.actualEl.description,user_id:this.actualEl.user_id,category:this.actualEl.category};o["a"].from("food").insert(a).select().then(t=>{e(t.data)}).catch(e=>{t(e)})})},saveEditFood(e){let t=this;this.getStorageList().then(a=>{this.changeLoader(!1),this.editFood=!1,this.triggerPopup=!0,this.popupMessage=e.message,this.popupType=e.type,t.storageList=a,t.storageListOriginal=a;let i=new Date;t.storageList.forEach(e=>{let t=new Date(e.deadline);e.selected=!1;var a=t.getTime()-i.getTime();e.missingDays=Math.ceil(a/864e5)})})},cancelPanel(){let e=this;this.panelDelete=!1,this.storageList.forEach((t,a)=>{e.selectedList.includes(a.toString())?t.selected=!0:t.selected=!1})}}},p=c,u=(a("acfc"),a("2877")),g=Object(u["a"])(p,i,s,!1,null,null,null);t["default"]=g.exports},"84e9":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"food d-flex flex-direction-column flex-grow"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.availableSave,expression:"availableSave"}],staticClass:"food-appbar"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"},on:{click:e.appbarGoBack}}),t("button",{staticClass:"btn btn-primary",on:{click:e.save}},[e._v(" Save ")])],1),t("div",{staticClass:"food-input d-flex flex-direction-column flex-grow"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"new"===e.mode,expression:"mode === 'new'"}],staticClass:"mode d-flex"},[t("button",{staticClass:"btn",class:1==e.food.shoppingList?"active":"disable",on:{click:function(t){e.food.shoppingList=!0}}},[e._v(" Shopping list ")]),t("button",{staticClass:"btn",class:0==e.food.shoppingList?"active":"disable",on:{click:function(t){e.food.shoppingList=!1}}},[e._v(" Storage ")])]),t("div",{staticClass:"name-quantity d-flex"},[t("div",{staticClass:"name"},[t("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"},{name:"model",rawName:"v-model",value:e.food.name,expression:"food.name"}],ref:"inputName",attrs:{type:"text",placeholder:"Alimento"},domProps:{value:e.food.name},on:{focusout:e.focusoutName,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.food,"name",t.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!edit"}],on:{click:e.editName}},[e._v(e._s(e.food.name))])]),t("div",{staticClass:"quantity"},[t("label",{attrs:{for:"quantity"}},[e._v("Qty")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.food.quantity,expression:"food.quantity"}],attrs:{type:"number",name:"quantity"},domProps:{value:e.food.quantity},on:{input:function(t){t.target.composing||e.$set(e.food,"quantity",t.target.value)}}})])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.food.shoppingList,expression:"!food.shoppingList"}],staticClass:"storage"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.food.storage,expression:"food.storage"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.food,"storage",t.target.multiple?a:a[0])},e.checkStorage]}},e._l(e.storages,(function(a,i){return t("option",{key:i,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])})),0)]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.food.shoppingList,expression:"!food.shoppingList"}],staticClass:"deadline"},[t("button",{staticClass:"btn btn-primary btn-deadline",on:{click:e.openPanelDeadline}},[e._v(" Scadenza "),t("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.deadlineValueFormat,expression:"deadlineValueFormat !== ''"}]},[e._v(" - ")]),t("span",[e._v(" "+e._s(e.deadlineValueFormat)+" ")])]),t("div",{staticClass:"panel-store-background",class:e.panelDeadline?"show":"hide"},[t("div",{staticClass:"blurred",on:{click:function(t){e.panelDeadline=!1}}}),t("div",{staticClass:"panel-store d-flex flex-direction-column"},[t("div",{staticClass:"panel-store-title d-flex"},[t("h2",[e._v(" "+e._s(e.food.name)+" ")])]),t("div",{staticClass:"content flex-grow"},[t("div",{staticClass:"deadline d-flex flex-direction-column"},[t("h4",[e._v("Scadenza - "+e._s(e.deadlineValueFormat))]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"3days",name:"deadline",value:"3"},on:{change:function(t){return e.modifyDeadline(!1,3)}}}),t("label",{attrs:{for:"3days"}},[e._v("3 giorni")])]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"week",name:"deadline",value:"7",checked:""},on:{change:function(t){return e.modifyDeadline(!1,7)}}}),t("label",{attrs:{for:"week"}},[e._v("1 settimana")])]),t("div",{staticClass:"single-radio input-radio"},[t("input",{attrs:{type:"radio",id:"input",name:"deadline"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays)}}}),t("label",{ref:"radioInput",attrs:{for:"input"}},[e._v("Giorni "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputDays,expression:"inputDays"}],attrs:{type:"number"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays,"radioInput")},input:function(t){t.target.composing||(e.inputDays=t.target.value)}}})])]),t("div",{staticClass:"single-radio calendar-radio"},[t("input",{attrs:{type:"radio",id:"calendar",name:"deadline"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0)}}}),t("label",{ref:"radioCalendar",attrs:{for:"calendar"}},[e._v("Data "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.calendarDate,expression:"calendarDate"}],attrs:{type:"date"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0,null,"radioCalendar")},input:function(t){t.target.composing||(e.calendarDate=t.target.value)}}})])])])]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:function(t){e.panelDeadline=!1}}},[e._v(" Imposta ")])])])])]),t("div",{staticClass:"category"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.food.category,expression:"food.category"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.food,"category",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Seleziona una categoria")]),e._l(e.categories,(function(a,i){return t("option",{key:i,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])}))],2)]),t("div",{staticClass:"description d-flex flex-direction-column flex-grow"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.food.description,expression:"food.description"}],attrs:{placeholder:"Aggiungi una descrizione",name:"description"},domProps:{value:e.food.description},on:{input:function(t){t.target.composing||e.$set(e.food,"description",t.target.value)}}})])])])},s=[],o=a("fe0f"),n={name:"Food",props:{mode:{type:String,default:"read"},propsFood:Object},data(){return{user:{},food:Object,panelDeadline:!1,edit:!0,storages:["Frigorifero","Freezer","Dispensa"],categories:["frutta","verdura","carne","dolci","secco"],deadlineValue:Object,calendarDate:Object,deadlineValueFormat:"",inputDays:0,availableSave:!0}},created(){let e=window.sessionStorage.getItem("userData");if(null!=e&&(this.user=JSON.parse(e)),"new"===this.mode)this.edit=!0,this.food={name:"",storage:"Frigorifero",shoppingList:!0,quantity:1,category:"",description:""};else if("read"===this.mode){this.edit=!1,this.food=this.propsFood;let e=new Date(this.food.deadline);this.deadlineValue=e,this.deadlineValueFormat=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}this.deadlineValue=new Date},mounted(){var e;null===(e=this.$refs.inputName)||void 0===e||e.focus()},methods:{appbarGoBack(){window.location.href.includes("storagelist")?this.$emit("closePanel",!0):this.$router.go(-1)},openPanelDeadline(){this.panelDeadline=!0,this.modifyDeadline(!1,7)},checkAvailableSave(){""!==this.food.name?this.availableSave=!0:this.availableSave=!1},checkStorage(){"Lista della spesa"===this.food.storage?this.food.shoppingList=!0:this.food.shoppingList=!1},modifyDeadline(e,t,a){let i;a&&this.$refs[a].click(),e?i=new Date(this.calendarDate):(i=new Date,i.setDate(i.getDate()+parseInt(t))),this.deadlineValue=i,this.deadlineValueFormat=`${i.getDate()}/${i.getMonth()+1}/${i.getFullYear()}`},save(){let e=this;if(""!==this.food.name)if("id"in this.food){let e={user_id:this.user.id,name:this.food.name,quantity:this.food.quantity,deadline:this.deadlineValue,description:this.food.description};if(!("deadline"in e))return void this.$emit("saved",{message:"Inserire data di scadenza",type:"warning"});1==e.shoppingList&&delete e.storage,o["a"].from("food").update(e).eq("id",this.food.id).select().then(e=>{"data"in e&&e.data.length>0&&this.$emit("saved",{message:"L'alimento è stato salvato correttamente",type:"success"})}).catch(e=>{console.log(e)})}else{let t=this.food;if(t.user_id=this.user.id,!t.shoppingList&&this.deadlineValue instanceof Date&&(t.deadline=this.deadlineValue),!t.shoppingList&&!("deadline"in t))return this.$emit("saved",{message:"Inserire data di scadenza",type:"warning"}),void console.log("manca deadline");1==t.shoppingList&&delete t.storage,o["a"].from("food").insert(t).select().then(t=>{"data"in t&&t.data.length>0&&(e.food.id=t.data[0].id,this.$emit("saved",{message:"L'alimento è stato salvato correttamente",type:"success"}),e.food={name:"",storage:"Frigorifero",shoppingList:!0,quantity:1,category:"",description:""},e.$refs.inputName.focus())}).catch(e=>{console.log(e),this.$emit("saved",{message:"Attenzione! Errore salvataggio alimento",type:"error"})})}else this.$emit("saved",{message:"Inserire nome alimento",type:"error"})},editName(){this.edit=!0,setTimeout(()=>{this.$refs.inputName.focus()},5)},focusoutName(){"read"==this.mode&&(this.edit=!1)}}},l=n,r=(a("0755"),a("2877")),d=Object(r["a"])(l,i,s,!1,null,null,null);t["a"]=d.exports},acfc:function(e,t,a){"use strict";a("2d9d")},b51d:function(e,t,a){"use strict";t["a"]={methods:{setAppbarTitle(e){const t=new CustomEvent("setAppbarTitle",{bubbles:!0,detail:{title:e}});window.dispatchEvent(t)}}}}}]);