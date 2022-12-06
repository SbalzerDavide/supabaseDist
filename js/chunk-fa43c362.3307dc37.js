(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa43c362"],{"31ad":function(e,t,s){},"7bb9":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shopping-list d-flex flex-direction-column flex-grow"},[t("PopupMessage",{attrs:{content:e.popupMessage,position:"bottom",type:e.popupType,show:e.triggerPopup},on:{showBack:function(t){e.triggerPopup=!1}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedList.length>0,expression:"selectedList.length > 0"}],staticClass:"shopping-list-appbar"},[t("div",{staticClass:"back",on:{click:e.removeSelection}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"}})],1),t("div",{staticClass:"action"},[t("button",{staticClass:"btn btn-primary",on:{click:function(t){e.panelDelete=!0}}},[e._v(" Delete "),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1),t("button",{staticClass:"btn btn-primary",on:{click:e.multipleStore}},[e._v(" Store "),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-box"}})],1)])]),t("div",{staticClass:"panel-delete-background",class:e.panelDelete?"show":"hide"},[t("div",{staticClass:"blurred",on:{click:function(t){e.panelDelete=!1}}}),t("div",{staticClass:"panel-delete d-flex flex-direction-column"},[t("h4",[e._v("Sei sicuro di voler eliminare gli elementi selezionati?")]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn",on:{click:function(t){e.panelDelete=!1}}},[e._v(" Annulla ")]),t("button",{staticClass:"btn btn-primary",on:{click:e.manageMultipleDelete}},[e._v(" Conferma ")])])])]),t("div",{staticClass:"panel-store d-flex flex-direction-column",class:e.panelStore?"show":"hide"},[t("div",{staticClass:"close",on:{click:e.closePanelStore}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1),t("h2",[e._v(" "+e._s(e.actualEl.name)+" ")]),t("div",{staticClass:"content flex-grow"},[t("div",{staticClass:"deadline d-flex flex-direction-column"},[t("h4",[e._v("Scadenza - "+e._s(e.deadlineValueFormat))]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"3days",name:"deadline",value:"3"},on:{change:function(t){return e.modifyDeadline(!1,3)}}}),t("label",{attrs:{for:"3days"}},[e._v("3 days")])]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"week",name:"deadline",value:"7"},on:{change:function(t){return e.modifyDeadline(!1,7)}}}),t("label",{attrs:{for:"week"}},[e._v("One week")])]),t("div",{staticClass:"single-radio input-radio"},[t("input",{attrs:{type:"radio",id:"input",name:"deadline"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays)}}}),t("label",{ref:"radioInput",attrs:{for:"input"}},[e._v("Tra quanti giorni? "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputDays,expression:"inputDays"}],attrs:{type:"number"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays,"radioInput")},input:function(t){t.target.composing||(e.inputDays=t.target.value)}}})])]),t("div",{staticClass:"single-radio calendar-radio"},[t("input",{attrs:{type:"radio",id:"calendar",name:"deadline"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0)}}}),t("label",{ref:"radioCalendar",attrs:{for:"calendar"}},[e._v("Seleziona una data "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.calendarDate,expression:"calendarDate"}],attrs:{type:"date"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0,null,"radioCalendar")},input:function(t){t.target.composing||(e.calendarDate=t.target.value)}}})])])]),t("div",{staticClass:"storage"},[t("h4",[e._v("Storage")]),t("div",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.actualEl.storage,expression:"actualEl.storage"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.actualEl,"storage",t.target.multiple?s:s[0])}}},e._l(e.storages,(function(s,i){return t("option",{key:i,domProps:{value:s}},[e._v(" "+e._s(s)+" ")])})),0)])])]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn",on:{click:e.cancelMoveToStore}},[e._v(" Annulla ")]),t("button",{staticClass:"btn btn-primary",on:{click:e.moveToStoreNew}},[e._v(" Move to store ")])])]),e._m(0),t("ul",e._l(e.shoppingList,(function(s,i){return t("li",{key:i,staticClass:"d-flex"},[t("div",{staticClass:"d-flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.selected,expression:"el.selected"}],attrs:{name:s.name,index:i,id:s.name,type:"checkbox"},domProps:{checked:Array.isArray(s.selected)?e._i(s.selected,null)>-1:s.selected},on:{change:[function(t){var i=s.selected,a=t.target,n=!!a.checked;if(Array.isArray(i)){var o=null,l=e._i(i,o);a.checked?l<0&&e.$set(s,"selected",i.concat([o])):l>-1&&e.$set(s,"selected",i.slice(0,l).concat(i.slice(l+1)))}else e.$set(s,"selected",n)},e.changeCheckbox]}}),t("label",{attrs:{for:s.name}},[e._v(e._s(s.name))])]),t("div",{staticClass:"operation d-flex"},[t("div",{staticClass:"edit"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-pen"}})],1)])])})),0)],1)},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header d-flex"},[t("h1",[e._v("shopping list")])])}],n=(s("14d9"),s("fe0f")),o=s("e613"),l={name:"ShoppingList",components:{PopupMessage:o["a"]},props:{},data(){return{user:{},shoppingList:[],actualEl:Object,selectedList:[],panelStore:!1,panelDelete:!1,storages:["Frigorifero","Freezer","Dispensa"],deadlineValue:"",calendarDate:Object,deadlineValueFormat:"",inputDays:0,selectedIndex:Number,popupMessage:"",popupType:"",triggerPopup:!1}},created(){let e=window.sessionStorage.getItem("userData");null!=e&&(this.user=JSON.parse(e));let t=this;this.getShoppingList().then(e=>{t.shoppingList=e,t.shoppingList.forEach(e=>{e.selected=!1})})},methods:{deleteEl(e){let t=this;n["a"].from("food").delete().eq("id",this.shoppingList[e].id).then(s=>{console.log(s),t.shoppingList.splice(e,1)}).catch(e=>{console.log(e)})},removeSelection(){this.selectedList=[],this.shoppingList.forEach(e=>{e.selected=!1})},deleteOne(){let e=JSON.parse(JSON.stringify(this.shoppingList)),t=[];return e.forEach((e,s)=>{if(this.selectedList.includes(s.toString())){const e=new Promise((e,t)=>{n["a"].from("food").delete().eq("id",this.shoppingList[s].id).then(t=>{console.log(t),e()}).catch(e=>{console.log(e),t()})});t.push(e)}}),Promise.all(t)},manageMultipleDelete(){let e=this;this.deleteOne().then(()=>{e.panelDelete=!1,e.popupMessage=e.selectedList.length+" elementi eliminati correttamente",e.popupType="success",e.triggerPopup=!0,e.selectedList=[],this.getShoppingList().then(t=>{e.shoppingList=t,e.shoppingList.forEach(e=>{e.selected=!1})})})},multipleDelete(){console.log("multiple delete");let e=JSON.parse(JSON.stringify(this.shoppingList));e.forEach((e,t)=>{this.selectedList.includes(t.toString())&&(console.log(this.shoppingList[t]),this.shoppingList.splice(t,1),console.log(e),console.log(this.shoppingList[t]))}),this.panelDelete=!1,console.log(this.shoppingList)},multipleStore(){this.selectedList.length>0&&(this.panelStore=!0,this.managePanel())},managePanel(){let e=this;this.selectedList.length>0?(this.actualEl=this.shoppingList[this.selectedList[0]],this.actualEl.storage=this.storages[0]):(this.panelStore=!1,e.getShoppingList().then(t=>{e.shoppingList=t,e.shoppingList.forEach(e=>{e.selected=!1})}))},cancelMoveToStore(){this.selectedList.splice(0,1),this.managePanel()},moveToStoreNew(){let e=this;if(""===this.deadlineValue)return e.popupMessage="Inserire una data di scadenza",e.popupType="error",void(e.triggerPopup=!0);let t={storage:this.actualEl.storage,deadline:this.deadlineValue,shoppingList:!1};console.log(this.deadlineValue);let s=!1;n["a"].from("food").update(t).eq("id",this.actualEl.id).select().then(t=>{"data"in t&&t.data.length>0&&(s=!0,e.selectedList.splice(0,1),e.popupMessage="Alimento correttamente spostato in "+t.data[0].storage,e.popupType="success",e.triggerPopup=!0,this.managePanel())}).catch(t=>{s||(console.log(t),e.popupMessage="Attensione, errore nello spostemento",e.popupType="error",e.triggerPopup=!0)})},storePanel(e){this.selectedIndex=e,this.panelStore=!0;let t=this.shoppingList[e];this.actualEl=t,this.actualEl.storage="Frigorifero"},modifyDeadline(e,t,s){let i;s&&this.$refs[s].click(),e?i=new Date(this.calendarDate):(i=new Date,i.setDate(i.getDate()+parseInt(t))),this.deadlineValue=i,this.deadlineValueFormat=`${i.getDate()}/${i.getMonth()+1}/${i.getFullYear()}`},closePanelStore(){this.panelStore=!1},changeCheckbox(e){let t=e.target.getAttribute("index");e.target.checked?this.selectedList.push(t):e.target.checked||this.selectedList.indexOf(t)>=0&&this.selectedList.splice(this.selectedList.indexOf(t),1),console.log(this.selectedList)},getShoppingList(){return new Promise((e,t)=>{let s=this;n["a"].from("food").select().eq("user_id",s.user.id).eq("shoppingList",!0).then(t=>{e(t.data)}).catch(e=>{t(e)})})}}},r=l,c=(s("b1f7"),s("2877")),d=Object(c["a"])(r,i,a,!1,null,null,null);t["default"]=d.exports},"9c9c":function(e,t,s){"use strict";s("31ad")},a7c9:function(e,t,s){},b1f7:function(e,t,s){"use strict";s("a7c9")},e613:function(e,t,s){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"popup-message",class:`${e.type} position-${e.position} ${e.internalShow}`},[e._v(" "+e._s(e.content)+" "),t("div",{staticClass:"cloud-arrow"})])])},a=[],n={name:"PopupMessage",components:{},props:{type:String,show:{type:Boolean,default:!1},content:{type:String,default:""},position:{type:String,default:"bottom"}},data(){return{}},created(){},computed:{internalShow:{get(){return this.show&&this.countDown(),this.show},set(e){this.$emit("showBack",e)}}},methods:{countDown(){setTimeout(()=>{this.internalShow=!1},5e3)}}},o=n,l=(s("9c9c"),s("2877")),r=Object(l["a"])(o,i,a,!1,null,null,null);t["a"]=r.exports}}]);