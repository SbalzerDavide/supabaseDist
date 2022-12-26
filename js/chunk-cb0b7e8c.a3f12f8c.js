(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb0b7e8c"],{"1a4e":function(e,t,a){"use strict";t["a"]={methods:{changeLoader(e){const t=new CustomEvent("changeLoader",{bubbles:!0,detail:{loader:e}});window.dispatchEvent(t)}}}},"49d7":function(e,t,a){"use strict";a("b15a")},"7bb9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shopping-list d-flex flex-direction-column flex-grow"},[t("PopupMessage",{attrs:{content:e.popupMessage,position:"bottom",type:e.popupType,show:e.triggerPopup},on:{showBack:function(t){e.triggerPopup=!1}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedList.length>0,expression:"selectedList.length > 0"}],staticClass:"shopping-list-appbar"},[t("div",{staticClass:"back",on:{click:e.removeSelection}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),t("div",{staticClass:"action"},[t("button",{staticClass:"btn btn-primary",on:{click:function(t){e.panelDelete=!0}}},[e._v(" Delete "),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1),t("button",{staticClass:"btn btn-primary",on:{click:e.multipleStore}},[e._v(" Store "),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-box"}})],1)])]),t("div",{staticClass:"panel-delete-background",class:e.panelDelete?"show":"hide"},[t("div",{staticClass:"blurred",on:{click:function(t){e.panelDelete=!1}}}),t("div",{staticClass:"panel-delete d-flex flex-direction-column"},[t("h4",[e._v("Sei sicuro di voler eliminare gli elementi selezionati?")]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:e.manageMultipleDelete}},[e._v(" Conferma ")])])])]),t("div",{staticClass:"panel-store-background",class:e.panelStore?"show":"hide"},[t("div",{staticClass:"blurred",on:{click:function(t){e.panelStore=!1}}}),t("div",{staticClass:"panel-store d-flex flex-direction-column"},[t("div",{staticClass:"panel-store-title d-flex"},[t("h2",[e._v(" "+e._s(e.actualEl.name)+" ")])]),t("div",{staticClass:"content flex-grow"},[t("div",{staticClass:"deadline d-flex flex-direction-column"},[t("h4",[e._v("Scadenza - "+e._s(e.deadlineValueFormat))]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"3days",name:"deadline",value:"3"},on:{change:function(t){return e.modifyDeadline(!1,3)}}}),t("label",{attrs:{for:"3days"}},[e._v("3 giorni")])]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"week",name:"deadline",value:"7",checked:""},on:{change:function(t){return e.modifyDeadline(!1,7)}}}),t("label",{attrs:{for:"week"}},[e._v("1 settimana")])]),t("div",{staticClass:"single-radio input-radio"},[t("input",{attrs:{type:"radio",id:"input",name:"deadline"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays)}}}),t("label",{ref:"radioInput",attrs:{for:"input"}},[e._v("Giorni "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputDays,expression:"inputDays"}],attrs:{type:"number"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays,"radioInput")},input:function(t){t.target.composing||(e.inputDays=t.target.value)}}})])]),t("div",{staticClass:"single-radio calendar-radio"},[t("input",{attrs:{type:"radio",id:"calendar",name:"deadline"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0)}}}),t("label",{ref:"radioCalendar",attrs:{for:"calendar"}},[e._v("Data "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.calendarDate,expression:"calendarDate"}],attrs:{type:"date"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0,null,"radioCalendar")},input:function(t){t.target.composing||(e.calendarDate=t.target.value)}}})])])]),t("div",{staticClass:"storage"},[t("h4",[e._v("Storage")]),t("div",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.actualEl.storage,expression:"actualEl.storage"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.actualEl,"storage",t.target.multiple?a:a[0])}}},e._l(e.storages,(function(a,s){return t("option",{key:s,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])})),0)])])]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:e.moveToStoreNew}},[e._v(" Move to store ")])])])]),e._m(0),t("ul",{class:e.selectedList.length>0?"anable-select":""},e._l(e.shoppingList,(function(a,s){return t("li",{key:s,staticClass:"d-flex"},[t("div",{staticClass:"content d-flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.selected,expression:"el.selected"}],attrs:{name:a.name,index:s,id:a.name,type:"checkbox"},domProps:{checked:Array.isArray(a.selected)?e._i(a.selected,null)>-1:a.selected},on:{change:[function(t){var s=a.selected,i=t.target,n=!!i.checked;if(Array.isArray(s)){var l=null,o=e._i(s,l);i.checked?o<0&&e.$set(a,"selected",s.concat([l])):o>-1&&e.$set(a,"selected",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(a,"selected",n)},e.changeCheckbox]}}),t("label",{attrs:{for:a.name}},[e._v(e._s(a.name))])]),t("div",{staticClass:"operation d-flex"},[t("div",{staticClass:"delete",on:{click:function(t){return e.deleteEl(s)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1),t("div",{staticClass:"toStorage",on:{click:function(t){return e.storePanel(s)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-box"}})],1)])])})),0)],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header d-flex"},[t("h1",[e._v("shopping list")])])}],n=(a("14d9"),a("fe0f")),l=a("e613"),o=a("1a4e"),r={name:"ShoppingList",mixins:[o["a"]],components:{PopupMessage:l["a"]},props:{},data(){return{user:{},shoppingList:[],actualEl:Object,selectedList:[],panelStore:!1,panelDelete:!1,storages:["Frigorifero","Freezer","Dispensa"],deadlineValue:"",calendarDate:Object,deadlineValueFormat:"",inputDays:0,selectedIndex:Number,popupMessage:"",popupType:"",triggerPopup:!1}},watch:{panelStore(e){e||(this.deadlineValue="",this.deadlineValueFormat="")}},created(){let e=window.sessionStorage.getItem("userData");null!=e&&(this.user=JSON.parse(e));let t=this;this.changeLoader(!0),this.getShoppingList().then(e=>{this.changeLoader(!1),t.shoppingList=e,t.shoppingList.forEach(e=>{e.selected=!1})})},methods:{deleteEl(e){this.selectedList=[e.toString()],this.panelDelete=!0,this.shoppingList[e].selected=!0},removeSelection(){this.selectedList=[],this.shoppingList.forEach(e=>{e.selected=!1})},deleteOne(){let e=JSON.parse(JSON.stringify(this.shoppingList)),t=[];return e.forEach((e,a)=>{if(this.selectedList.includes(a.toString())){const e=new Promise((e,t)=>{n["a"].from("food").delete().eq("id",this.shoppingList[a].id).then(t=>{console.log(t),e()}).catch(e=>{console.log(e),t()})});t.push(e)}}),Promise.all(t)},manageMultipleDelete(){let e=this;this.deleteOne().then(()=>{e.panelDelete=!1,e.popupMessage=e.selectedList.length+" elementi eliminati correttamente",e.popupType="success",e.triggerPopup=!0,e.selectedList=[],this.getShoppingList().then(t=>{e.shoppingList=t,e.shoppingList.forEach(e=>{e.selected=!1})})})},multipleStore(){this.selectedList.length>0&&(this.panelStore=!0,this.modifyDeadline(!1,7),this.managePanel())},managePanel(){let e=this;this.selectedList.length>0?(this.actualEl=this.shoppingList[this.selectedList[0]],this.actualEl.storage=this.storages[0]):(this.panelStore=!1,e.getShoppingList().then(t=>{e.shoppingList=t,e.shoppingList.forEach(e=>{e.selected=!1})}))},cancelMoveToStore(){this.selectedList.splice(0,1),this.managePanel()},moveToStoreNew(){let e=this;if(""===this.deadlineValue)return e.popupMessage="Inserire una data di scadenza",e.popupType="error",void(e.triggerPopup=!0);let t={storage:this.actualEl.storage,deadline:this.deadlineValue,shoppingList:!1},a=!1;n["a"].from("food").update(t).eq("id",this.actualEl.id).select().then(t=>{"data"in t&&t.data.length>0&&(a=!0,e.selectedList.splice(0,1),e.popupMessage="Alimento correttamente spostato in "+t.data[0].storage,e.popupType="success",e.triggerPopup=!0,e.managePanel())}).catch(t=>{a||(console.log(t),e.popupMessage="Attenzione, errore nello spostemento",e.popupType="error",e.triggerPopup=!0)})},cancelDelete(){this.panelDelete=!1,this.selectedList=[]},storePanel(e){this.selectedIndex=e,this.panelStore=!0,this.modifyDeadline(!1,7);let t=this.shoppingList[e];this.actualEl=t,this.actualEl.storage="Frigorifero"},modifyDeadline(e,t,a){let s;a&&this.$refs[a].click(),e?s=new Date(this.calendarDate):(s=new Date,s.setDate(s.getDate()+parseInt(t))),this.deadlineValue=s,this.deadlineValueFormat=`${s.getDate()}/${s.getMonth()+1}/${s.getFullYear()}`},closePanelStore(){this.panelStore=!1},changeCheckbox(e){let t=e.target.getAttribute("index");e.target.checked?this.selectedList.push(t):e.target.checked||this.selectedList.indexOf(t)>=0&&this.selectedList.splice(this.selectedList.indexOf(t),1)},getShoppingList(){return new Promise((e,t)=>{let a=this;n["a"].from("food").select().eq("user_id",a.user.id).eq("shoppingList",!0).then(t=>{e(t.data)}).catch(e=>{t(e)})})}}},c=r,d=(a("49d7"),a("2877")),p=Object(d["a"])(c,s,i,!1,null,null,null);t["default"]=p.exports},b15a:function(e,t,a){}}]);