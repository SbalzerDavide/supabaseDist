(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e589946"],{"78eb":function(e,t,a){"use strict";a("cccf")},"7efa":function(e,t,a){"use strict";a("c344")},"86de":function(e,t,a){},9428:function(e,t,a){"use strict";a("86de")},c344:function(e,t,a){},cccf:function(e,t,a){},e613:function(e,t,a){"use strict";var o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"popup-message",class:`${e.type} position-${e.position} ${e.internalShow}`},[e._v(" "+e._s(e.content)+" "),t("div",{staticClass:"cloud-arrow"})])])},i=[],n={name:"PopupMessage",components:{},props:{type:String,show:{type:Boolean,default:!1},content:{type:String,default:""},position:{type:String,default:"bottom"}},data(){return{}},created(){},computed:{internalShow:{get(){return this.show&&this.countDown(),this.show},set(e){this.$emit("showBack",e)}}},methods:{countDown(){setTimeout(()=>{this.internalShow=!1},5e3)}}},s=n,r=(a("7efa"),a("2877")),d=Object(r["a"])(s,o,i,!1,null,null,null);t["a"]=d.exports},fe94:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"new-food d-flex flex-direction-column flex-grow"},[t("PopupMessage",{attrs:{content:e.popupMessage,position:"bottom",type:e.popupType,show:e.triggerPopup},on:{showBack:function(t){e.triggerPopup=!1}}}),t("div",{staticClass:"new-food-element d-flex flex-direction-column flex-grow"},[t("Food",{attrs:{mode:"new"},on:{saved:e.showMessage}})],1)],1)},i=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"food d-flex flex-direction-column flex-grow"},[t("div",{staticClass:"food-input d-flex flex-direction-column flex-grow"},[t("div",{staticClass:"mode d-flex"},[t("button",{staticClass:"btn",class:1==e.food.shoppingList?"active":"",on:{click:function(t){e.food.shoppingList=!0}}},[e._v(" Shopping list ")]),t("button",{staticClass:"btn",class:0==e.food.shoppingList?"active":"",on:{click:function(t){e.food.shoppingList=!1}}},[e._v(" Storage ")])]),t("div",{staticClass:"name-quantity d-flex"},[t("div",{staticClass:"name"},[e.edit?t("input",{directives:[{name:"model",rawName:"v-model",value:e.food.name,expression:"food.name"}],ref:"inputName",attrs:{type:"text",placeholder:"Alimento"},domProps:{value:e.food.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save.apply(null,arguments)},input:function(t){t.target.composing||e.$set(e.food,"name",t.target.value)}}}):t("h3",[e._v(e._s(e.food.title))])]),t("div",{staticClass:"quantity"},[t("label",{attrs:{for:"quantity"}},[e._v("Qty")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.food.quantity,expression:"food.quantity"}],attrs:{type:"number",name:"quantity"},domProps:{value:e.food.quantity},on:{input:function(t){t.target.composing||e.$set(e.food,"quantity",t.target.value)}}})])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.food.shoppingList,expression:"!food.shoppingList"}],staticClass:"storage"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.food.storage,expression:"food.storage"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.food,"storage",t.target.multiple?a:a[0])},e.checkStorage]}},e._l(e.storages,(function(a,o){return t("option",{key:o,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])})),0)]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.food.shoppingList,expression:"!food.shoppingList"}],staticClass:"deadline"},[t("button",{staticClass:"btn",on:{click:function(t){e.openSetDeadline=!0}}},[e._v(" Imposta scadenza ")]),t("span",[e._v(" scadenza impostata: "+e._s(e.deadlineValueFormat)+" ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.openSetDeadline,expression:"openSetDeadline"}],staticClass:"radio d-flex flex-direction-column"},[t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"3days",name:"deadline",value:"3"},on:{change:function(t){return e.modifyDeadline(!1,3)}}}),t("label",{attrs:{for:"3days"}},[e._v("3 days")])]),t("div",{staticClass:"single-radio"},[t("input",{attrs:{type:"radio",id:"week",name:"deadline",value:"7"},on:{change:function(t){return e.modifyDeadline(!1,7)}}}),t("label",{attrs:{for:"week"}},[e._v("One week")])]),t("div",{staticClass:"single-radio input-radio"},[t("input",{attrs:{type:"radio",id:"input",name:"deadline"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays)}}}),t("label",{ref:"radioInput",attrs:{for:"input"}},[e._v("Tra quanti giorni? "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputDays,expression:"inputDays"}],attrs:{type:"number"},domProps:{value:e.inputDays},on:{change:function(t){return e.modifyDeadline(!1,e.inputDays,"radioInput")},input:function(t){t.target.composing||(e.inputDays=t.target.value)}}})])]),t("div",{staticClass:"single-radio calendar-radio"},[t("input",{attrs:{type:"radio",id:"calendar",name:"deadline"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0)}}}),t("label",{ref:"radioCalendar",attrs:{for:"calendar"}},[e._v("Seleziona una data dal calendario "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.calendarDate,expression:"calendarDate"}],attrs:{type:"date"},domProps:{value:e.calendarDate},on:{change:function(t){return e.modifyDeadline(!0,null,"radioCalendar")},input:function(t){t.target.composing||(e.calendarDate=t.target.value)}}})])]),t("div",{staticClass:"set"},[t("button",{staticClass:"btn btn-primary",on:{click:function(t){e.openSetDeadline=!1}}},[e._v(" Imposta ")])])])]),t("div",{staticClass:"category"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.food.category,expression:"food.category"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.food,"category",t.target.multiple?a:a[0])}}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Seleziona una categoria")]),e._l(e.categories,(function(a,o){return t("option",{key:o,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])}))],2)]),t("div",{staticClass:"description d-flex flex-direction-column flex-grow"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.food.description,expression:"food.description"}],attrs:{placeholder:"Aggiungi una descrizione",name:"description"},domProps:{value:e.food.description},on:{input:function(t){t.target.composing||e.$set(e.food,"description",t.target.value)}}})])]),t("div",{staticClass:"food-action"},[t("button",{staticClass:"btn btn-primary",on:{click:e.save,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.save.apply(null,arguments)}}},[e._v(" Save ")])])])},s=[],r=a("fe0f"),d={name:"Food",props:{mode:{type:String,default:"read"},propsFood:Object},data(){return{user:{},food:Object,openSetDeadline:!1,storages:["Frigorifero","Freezer","Dispensa"],categories:["frutta","verdura","carne","dolci","secco"],deadlineValue:Object,calendarDate:Object,deadlineValueFormat:"",inputDays:0}},created(){let e=window.sessionStorage.getItem("userData");null!=e&&(this.user=JSON.parse(e)),"new"===this.mode?(this.edit=!0,this.food={name:"",storage:"Frigorifero",shoppingList:!0,quantity:1,category:"",description:""}):"read"===this.type&&(this.food=this.propsFood),this.deadlineValue=new Date},methods:{checkStorage(){"Lista della spesa"===this.food.storage?this.food.shoppingList=!0:this.food.shoppingList=!1},modifyDeadline(e,t,a){let o;console.log("event change"),a&&this.$refs[a].click(),e?o=new Date(this.calendarDate):(o=new Date,o.setDate(o.getDate()+parseInt(t))),this.deadlineValue=o,this.deadlineValueFormat=`${o.getDate()}/${o.getMonth()+1}/${o.getFullYear()}`},save(){let e=this;if(""!==this.food.name)if("id"in this.food){let e=this.food;if(!("deadline"in e))return void this.$emit("saved",{message:"Inserire data di scadenza",type:"warning"});1==e.shoppingList&&delete e.storage,e.user_id=this.user.id,r["a"].from("food").update(e).eq("id",this.food.id).then(e=>{"data"in e&&e.data.length>0&&this.$emit("saved",{message:"L'alimento è stato salvato correttamente",type:"success"})}).catch(e=>{console.log(e)})}else{let t=this.food;if(t.user_id=this.user.id,!t.shoppingList&&!("deadline"in t))return this.$emit("saved",{message:"Inserire data di scadenza",type:"warning"}),void console.log("manca deadline");1==t.shoppingList&&delete t.storage,this.deadlineValue!=={}&&(t.deadline=this.deadlineValue),r["a"].from("food").insert(t).select().then(t=>{"data"in t&&t.data.length>0&&(e.food.id=t.data[0].id,this.$emit("saved",{message:"L'alimento è stato salvato correttamente",type:"success"}),e.food={name:"",storage:"Frigorifero",shoppingList:!0,quantity:1,category:"",description:""},e.$refs.inputName.focus())}).catch(e=>{console.log(e),this.$emit("saved",{message:"Attenzione! Errore salvataggio alimento",type:"error"})})}}}},l=d,c=(a("78eb"),a("2877")),u=Object(c["a"])(l,n,s,!1,null,null,null),p=u.exports,f=a("e613"),m={name:"NewFood",components:{Food:p,PopupMessage:f["a"]},props:{},data(){return{popupMessage:"",popupType:"",triggerPopup:!1}},created(){},methods:{showMessage(e){console.log(e),this.triggerPopup=!0,this.popupMessage=e.message,this.popupType=e.type}}},g=m,v=(a("9428"),Object(c["a"])(g,o,i,!1,null,null,null));t["default"]=v.exports}}]);