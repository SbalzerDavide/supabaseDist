(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6316e460"],{"0755":function(e,t,a){"use strict";a("19e9")},"19e9":function(e,t,a){},"84e9":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"food d-flex flex-direction-column flex-grow"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.availableSave,expression:"availableSave"}],staticClass:"food-appbar"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-left"},on:{click:e.appbarGoBack}}),t("button",{staticClass:"btn btn-primary",on:{click:e.save}},[e._v(" Save ")])],1),t("div",{staticClass:"food-input d-flex flex-direction-column flex-grow"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"new"===e.mode,expression:"mode === 'new'"}],staticClass:"mode d-flex"},[t("button",{staticClass:"btn",class:1==e.food.shoppingList?"active":"disable",on:{click:function(t){e.food.shoppingList=!0}}},[e._v(" Shopping list ")]),t("button",{staticClass:"btn",class:0==e.food.shoppingList?"active":"disable",on:{click:function(t){e.food.shoppingList=!1}}},[e._v(" Storage ")])]),t("div",{staticClass:"name-quantity d-flex"},[t("div",{staticClass:"name"},[t("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"},{name:"model",rawName:"v-model",value:e.food.name,expression:"food.name"}],ref:"inputName",attrs:{type:"text",placeholder:"Alimento"},domProps:{value:e.food.name},on:{focusout:e.focusoutName,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.food,"name",t.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!edit"}],on:{click:e.editName}},[e._v(e._s(e.food.name))])]),t("div",{staticClass:"quantity"},[t("label",{attrs:{for:"quantity"}},[e._v("Qty")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.food.quantity,expression:"food.quantity"}],attrs:{type:"number",name:"quantity"},domProps:{value:e.food.quantity},on:{input:function(t){t.target.composing||e.$set(e.food,"quantity",t.target.value)}}})])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.food.shoppingList,expression:"!food.shoppingList"}],staticClass:"storage"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.food.storage,expression:"food.storage"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.food,"storage",t.target.multiple?a:a[0])},e.checkStorage]}},e._l(e.storages,(function(a,i){return t("option",{key:i,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])})),0)]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.food.shoppingList,expression:"!food.shoppingList"}],staticClass:"deadline"},[t("button",{staticClass:"btn btn-primary btn-deadline",on:{click:e.openPanelDeadline}},[e._v(" Scadenza "),t("span",{directives:[{name:"show",rawName:"v-show",value:""!==e.deadlineValueFormat,expression:"deadlineValueFormat !== ''"}]},[e._v(" - ")]),t("span",[e._v(" "+e._s(e.deadlineValueFormat)+" ")])]),t("div",{staticClass:"panel-store-background",class:e.panelDeadline?"show":"hide"},[t("div",{staticClass:"blurred",on:{click:function(t){e.panelDeadline=!1}}}),t("div",{staticClass:"panel-store d-flex flex-direction-column"},[t("div",{staticClass:"panel-store-title d-flex"},[t("h2",[e._v(" "+e._s(e.food.name)+" ")])]),t("div",{staticClass:"content flex-grow"},[t("div",{staticClass:"deadline d-flex flex-direction-column"},[t("h4",[e._v("Scadenza - "+e._s(e.deadlineValueFormat))]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"3days",name:"deadline",value:"3"},on:{change:function(t){return e.modifyDeadline(!1,3)}}}),t("label",{attrs:{for:"3days"}},[e._v("3 giorni")])]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"week",name:"deadline",value:"7",checked:""},on:{change:function(t){return e.modifyDeadline(!1,7)}}}),t("label",{attrs:{for:"week"}},[e._v("1 settimana")])]),t("div",{staticClass:"single-radio input-radio"},[t("input",{attrs:{type:"radio",id:"input",name:"deadline"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays)}}}),t("label",{ref:"radioInput",attrs:{for:"input"}},[e._v("Giorni "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputDays,expression:"inputDays"}],attrs:{type:"number"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays,"radioInput")},input:function(t){t.target.composing||(e.inputDays=t.target.value)}}})])]),t("div",{staticClass:"single-radio calendar-radio"},[t("input",{attrs:{type:"radio",id:"calendar",name:"deadline"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0)}}}),t("label",{ref:"radioCalendar",attrs:{for:"calendar"}},[e._v("Data "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.calendarDate,expression:"calendarDate"}],attrs:{type:"date"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0,null,"radioCalendar")},input:function(t){t.target.composing||(e.calendarDate=t.target.value)}}})])])])]),t("div",{staticClass:"action d-flex"},[t("button",{staticClass:"btn btn-primary",on:{click:function(t){e.panelDeadline=!1}}},[e._v(" Imposta ")])])])])]),t("div",{staticClass:"category"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.food.category,expression:"food.category"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.food,"category",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Seleziona una categoria")]),e._l(e.categories,(function(a,i){return t("option",{key:i,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])}))],2)]),t("div",{staticClass:"description d-flex flex-direction-column flex-grow"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.food.description,expression:"food.description"}],attrs:{placeholder:"Aggiungi una descrizione",name:"description"},domProps:{value:e.food.description},on:{input:function(t){t.target.composing||e.$set(e.food,"description",t.target.value)}}})])])])},o=[],s=a("fe0f"),n={name:"Food",props:{mode:{type:String,default:"read"},propsFood:Object},data(){return{user:{},food:Object,panelDeadline:!1,edit:!0,storages:["Frigorifero","Freezer","Dispensa"],categories:["frutta","verdura","carne","dolci","secco"],deadlineValue:Object,calendarDate:Object,deadlineValueFormat:"",inputDays:0,availableSave:!0}},created(){let e=window.sessionStorage.getItem("userData");if(null!=e&&(this.user=JSON.parse(e)),"new"===this.mode)this.edit=!0,this.food={name:"",storage:"Frigorifero",shoppingList:!0,quantity:1,category:"",description:""};else if("read"===this.mode){this.edit=!1,this.food=this.propsFood;let e=new Date(this.food.deadline);this.deadlineValue=e,this.deadlineValueFormat=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}this.deadlineValue=new Date},mounted(){var e;null===(e=this.$refs.inputName)||void 0===e||e.focus()},methods:{appbarGoBack(){window.location.href.includes("storagelist")?this.$emit("closePanel",!0):this.$router.go(-1)},openPanelDeadline(){this.panelDeadline=!0,this.modifyDeadline(!1,7)},checkAvailableSave(){""!==this.food.name?this.availableSave=!0:this.availableSave=!1},checkStorage(){"Lista della spesa"===this.food.storage?this.food.shoppingList=!0:this.food.shoppingList=!1},modifyDeadline(e,t,a){let i;a&&this.$refs[a].click(),e?i=new Date(this.calendarDate):(i=new Date,i.setDate(i.getDate()+parseInt(t))),this.deadlineValue=i,this.deadlineValueFormat=`${i.getDate()}/${i.getMonth()+1}/${i.getFullYear()}`},save(){let e=this;if(""!==this.food.name)if("id"in this.food){let e={user_id:this.user.id,name:this.food.name,quantity:this.food.quantity,deadline:this.deadlineValue,description:this.food.description};if(!("deadline"in e))return void this.$emit("saved",{message:"Inserire data di scadenza",type:"warning"});1==e.shoppingList&&delete e.storage,s["a"].from("food").update(e).eq("id",this.food.id).select().then(e=>{"data"in e&&e.data.length>0&&this.$emit("saved",{message:"L'alimento è stato salvato correttamente",type:"success"})}).catch(e=>{console.log(e)})}else{let t=this.food;if(t.user_id=this.user.id,!t.shoppingList&&this.deadlineValue instanceof Date&&(t.deadline=this.deadlineValue),!t.shoppingList&&!("deadline"in t))return this.$emit("saved",{message:"Inserire data di scadenza",type:"warning"}),void console.log("manca deadline");1==t.shoppingList&&delete t.storage,s["a"].from("food").insert(t).select().then(t=>{"data"in t&&t.data.length>0&&(e.food.id=t.data[0].id,this.$emit("saved",{message:"L'alimento è stato salvato correttamente",type:"success"}),e.food={name:"",storage:"Frigorifero",shoppingList:!0,quantity:1,category:"",description:""},e.$refs.inputName.focus())}).catch(e=>{console.log(e),this.$emit("saved",{message:"Attenzione! Errore salvataggio alimento",type:"error"})})}else this.$emit("saved",{message:"Inserire nome alimento",type:"error"})},editName(){this.edit=!0,setTimeout(()=>{this.$refs.inputName.focus()},5)},focusoutName(){"read"==this.mode&&(this.edit=!1)}}},d=n,r=(a("0755"),a("2877")),l=Object(r["a"])(d,i,o,!1,null,null,null);t["a"]=l.exports},b51d:function(e,t,a){"use strict";t["a"]={methods:{setAppbarTitle(e){const t=new CustomEvent("setAppbarTitle",{bubbles:!0,detail:{title:e}});window.dispatchEvent(t)}}}},ccd8:function(e,t,a){"use strict";a("d37a")},d37a:function(e,t,a){},fe94:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"new-food d-flex flex-direction-column flex-grow"},[t("PopupMessage",{attrs:{content:e.popupMessage,position:"bottom",type:e.popupType,show:e.triggerPopup},on:{showBack:function(t){e.triggerPopup=!1}}}),t("div",{staticClass:"new-food-element d-flex flex-direction-column flex-grow"},[t("Food",{attrs:{mode:"new"},on:{saved:e.showMessage}})],1)],1)},o=[],s=a("84e9"),n=a("e613"),d=a("b51d"),r={name:"NewFood",mixins:[d["a"]],components:{Food:s["a"],PopupMessage:n["a"]},props:{},data(){return{popupMessage:"",popupType:"",triggerPopup:!1}},created(){this.setAppbarTitle("New food")},methods:{showMessage(e){this.triggerPopup=!0,this.popupMessage=e.message,this.popupType=e.type}}},l=r,c=(a("ccd8"),a("2877")),u=Object(c["a"])(l,i,o,!1,null,null,null);t["default"]=u.exports}}]);