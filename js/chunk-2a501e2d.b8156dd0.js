(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a501e2d"],{1678:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"show-note d-flex flex-direction-column flex-grow"},[e("PopupMessage",{attrs:{content:t.popupMessage,position:"center",type:t.popupType,show:t.triggerPopup},on:{showBack:function(e){t.triggerPopup=!1}}}),e("h3",[t._v("show note")]),e("div",{staticClass:"noteType d-flex flex-direction-column flex-grow"},["free"===t.note.type?e("FreeNote",{attrs:{mode:"read",propsNote:t.note},on:{saved:t.showMessage}}):"count"===t.note.type?e("CountNote",{attrs:{mode:"read",propsNote:t.note},on:{saved:t.showMessage}}):t._e()],1)],1)},s=[],i=o("b697"),a=o("16f2"),l=o("e613"),r={name:"Notes",components:{FreeNote:i["a"],CountNote:a["a"],PopupMessage:l["a"]},props:{propsNote:Object},data(){return{user:{},popupMessage:"",popupType:"",triggerPopup:!1}},computed:{note:{get(){return this.propsNote},set(t){this.$emit("showBack",t)}}},created(){console.log(this.note);let t=window.sessionStorage.getItem("userData");null!=t&&(this.user=JSON.parse(t))},methods:{showMessage(t){console.log(t),this.triggerPopup=!0,this.popupMessage=t.message,this.popupType=t.type}}},c=r,u=(o("5d4d"),o("2877")),d=Object(u["a"])(c,n,s,!1,null,null,null);e["default"]=d.exports},"16f2":function(t,e,o){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"count-note d-flex flex-direction-column flex-grow"},[e("div",{staticClass:"count-note-content d-flex flex-direction-column flex-grow"},[e("div",{staticClass:"title d-flex"},["read"!==t.mode||t.enabledInputTitle?t.edit||t.enabledInputTitle?e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],ref:"title",attrs:{type:"text",name:"title",placeholder:"title"},domProps:{value:t.note.title},on:{focusout:function(e){t.enabledInputTitle=!1},input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}):t._e():e("h3",{on:{click:t.clickToEnabledInputTitle}},[t._v(" "+t._s(t.note.title)+" ")])]),e("div",{staticClass:"counter"},[e("div",{staticClass:"operator minus",on:{click:function(e){return t.changeCount("-")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-minus"}})],1),e("div",{staticClass:"counter-number"},[t._v(" "+t._s(t.note.count)+" ")]),e("div",{staticClass:"operator plus",on:{click:function(e){return t.changeCount("+")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-plus"}})],1)]),e("div",{staticClass:"comment d-flex flex-direction-column flex-grow"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.content,expression:"note.content"}],attrs:{name:"",id:""},domProps:{value:t.note.content},on:{input:function(e){e.target.composing||t.$set(t.note,"content",e.target.value)}}})])]),e("div",{staticClass:"action"},[e("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Save")])])])},s=[],i=o("fe0f"),a={name:"CountNote",components:{},props:{mode:{type:String,default:"read"},propsNote:Object},data(){return{user:{},edit:!0,note:Object,enabledInputTitle:!1}},created(){let t=window.sessionStorage.getItem("userData");null!=t&&(this.user=JSON.parse(t)),"read"===this.mode&&this.propsNote!=={}?(this.edit=!1,this.note=this.propsNote):(this.edit=!0,this.note={title:"",content:"",count:0})},methods:{clickToEnabledInputTitle(){this.enabledInputTitle=!0,setTimeout(()=>{this.$refs.title.focus()},5)},changeCount(t){"+"===t?this.note.count++:"-"===t&&this.note.count--},save(){let t=this;if(""!==this.title)if("id"in this.note){let t={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"free"};i["a"].from("notes").update(t).eq("id",this.note.id).then(t=>{console.log(t),this.$emit("saved",{message:"La nota è stata salvato correttamente",type:"success"})}).catch(t=>{console.log(t)})}else{let e={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"count"};i["a"].from("notes").insert(e).select().then(e=>{t.note.id=e.data[0].id,this.$emit("saved",{message:"La nota è stata salvata correttamente",type:"success"})}).catch(t=>{console.log(t),this.$emit("saved",{message:"Attenzione! Errore salvataggio nota",type:"error"})})}}}},l=a,r=(o("7c91"),o("2877")),c=Object(r["a"])(l,n,s,!1,null,null,null);e["a"]=c.exports},"5a4a":function(t,e,o){},"5d4d":function(t,e,o){"use strict";o("fb40")},"7c91":function(t,e,o){"use strict";o("b70d")},"7efa":function(t,e,o){"use strict";o("c344")},b697:function(t,e,o){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"free-note d-flex flex-direction-column flex-grow"},[e("div",{staticClass:"free-note-content d-flex flex-grow"},[e("div",{staticClass:"title d-flex"},["read"!==t.mode||t.enabledInputTitle?t.edit||t.enabledInputTitle?e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],ref:"title",attrs:{type:"text",name:"title",placeholder:"title"},domProps:{value:t.note.title},on:{focusout:function(e){t.enabledInputTitle=!1},input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}):t._e():e("h3",{on:{click:t.clickToEnabledInputTitle}},[t._v(" "+t._s(t.note.title)+" ")])]),e("div",{staticClass:"content flex-grow"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.content,expression:"note.content"}],attrs:{name:"content",cols:"30"},domProps:{value:t.note.content},on:{input:function(e){e.target.composing||t.$set(t.note,"content",e.target.value)}}})])]),e("div",{staticClass:"action"},[e("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Save")])])])},s=[],i=o("fe0f"),a={name:"FreeNote",components:{},props:{mode:{type:String,default:"read"},propsNote:Object},data(){return{user:{},edit:!0,note:Object,enabledInputTitle:!1}},created(){let t=window.sessionStorage.getItem("userData");null!=t&&(this.user=JSON.parse(t)),"read"===this.mode&&this.propsNote!=={}?(this.edit=!1,this.note=this.propsNote):(this.edit=!0,this.note={title:"",content:""})},methods:{clickToEnabledInputTitle(){this.enabledInputTitle=!0,setTimeout(()=>{this.$refs.title.focus()},5)},save(){let t=this;if(""!==this.title)if("id"in this.note){let t={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"free"};i["a"].from("notes").update(t).eq("id",this.note.id).then(t=>{console.log(t),this.$emit("saved",{message:"La nota è stata salvata correttamente",type:"success"})}).catch(t=>{console.log(t)})}else{let e={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"free"};i["a"].from("notes").insert(e).select().then(e=>{t.note.id=e.data[0].id,this.$emit("saved",{message:"La nota è stata salvata correttamente",type:"success"})}).catch(t=>{console.log(t),this.$emit("saved",{message:"Attenzione! Errore salvataggio nota",type:"error"})})}}}},l=a,r=(o("baab"),o("2877")),c=Object(r["a"])(l,n,s,!1,null,null,null);e["a"]=c.exports},b70d:function(t,e,o){},baab:function(t,e,o){"use strict";o("5a4a")},c344:function(t,e,o){},e613:function(t,e,o){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"popup-message",class:`${t.type} position-${t.position} ${t.internalShow}`},[t._v(" "+t._s(t.content)+" "),e("div",{staticClass:"cloud-arrow"})])])},s=[],i={name:"PopupMessage",components:{},props:{type:String,show:{type:Boolean,default:!1},content:{type:String,default:""},position:{type:String,default:"bottom"}},data(){return{}},created(){},computed:{internalShow:{get(){return this.show&&this.countDown(),this.show},set(t){this.$emit("showBack",t)}}},methods:{countDown(){setTimeout(()=>{this.internalShow=!1},5e3)}}},a=i,l=(o("7efa"),o("2877")),r=Object(l["a"])(a,n,s,!1,null,null,null);e["a"]=r.exports},fb40:function(t,e,o){}}]);