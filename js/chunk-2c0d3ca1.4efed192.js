(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c0d3ca1"],{"01ce":function(t,e,n){"use strict";n("d83b")},"046e":function(t,e,n){"use strict";n("9143")},"16f2":function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"count-note d-flex flex-direction-column flex-grow"},[e("div",{staticClass:"count-note-content d-flex flex-direction-column flex-grow"},[e("div",{staticClass:"title d-flex"},["read"!==t.mode||t.enabledInputTitle?t.edit||t.enabledInputTitle?e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],ref:"title",attrs:{type:"text",name:"title",placeholder:"title"},domProps:{value:t.note.title},on:{focusout:function(e){t.enabledInputTitle=!1},input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}):t._e():e("h3",{on:{click:t.clickToEnabledInputTitle}},[t._v(" "+t._s(t.note.title)+" ")])]),e("div",{staticClass:"counter"},[e("div",{staticClass:"operator minus",on:{click:function(e){return t.changeCount("-")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-minus"}})],1),e("div",{staticClass:"counter-number"},[t._v(" "+t._s(t.note.count)+" ")]),e("div",{staticClass:"operator plus",on:{click:function(e){return t.changeCount("+")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-plus"}})],1)]),e("div",{staticClass:"comment d-flex flex-direction-column flex-grow"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.content,expression:"note.content"}],attrs:{name:"",id:""},domProps:{value:t.note.content},on:{input:function(e){e.target.composing||t.$set(t.note,"content",e.target.value)}}})])]),e("div",{staticClass:"action"},[e("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Save")])])])},s=[],i=n("fe0f"),a={name:"CountNote",components:{},props:{mode:{type:String,default:"read"},propsNote:Object},data(){return{user:{},edit:!0,note:Object,enabledInputTitle:!1}},created(){let t=window.localStorage.getItem("userData");null!=t&&(this.user=JSON.parse(t)),"read"===this.mode&&this.propsNote!=={}?(this.edit=!1,this.note=this.propsNote):(this.edit=!0,this.note={title:"",content:"",count:0})},methods:{clickToEnabledInputTitle(){this.enabledInputTitle=!0,setTimeout(()=>{this.$refs.title.focus()},5)},changeCount(t){"+"===t?this.note.count++:"-"===t&&this.note.count--},save(){let t=this;if(""!==this.title)if("id"in this.note){let t={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"free"};i["a"].from("notes").update(t).eq("id",this.note.id).then(t=>{console.log(t),this.$emit("saved",{message:"La nota è stata salvato correttamente",type:"success"})}).catch(t=>{console.log(t)})}else{let e={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"count"};i["a"].from("notes").insert(e).select().then(e=>{t.note.id=e.data[0].id,this.$emit("saved",{message:"La nota è stata salvata correttamente",type:"success"})}).catch(t=>{console.log(t),this.$emit("saved",{message:"Attenzione! Errore salvataggio nota",type:"error"})})}}}},l=a,c=(n("1b0e"),n("2877")),r=Object(c["a"])(l,o,s,!1,null,null,null);e["a"]=r.exports},"1b0e":function(t,e,n){"use strict";n("c35b")},"5d9f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-note d-flex flex-direction-column flex-grow"},[t._m(0),e("div",{staticClass:"new d-flex flex-direction-column flex-grow"},[e("div",{staticClass:"type"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{name:"types"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?n:n[0]}}},t._l(t.types,(function(n,o){return e("option",{key:o,domProps:{value:n,selected:"free"==n?"selected":""}},[t._v(" "+t._s(n)+" ")])})),0)]),e("div",{staticClass:"noteType d-flex flex-direction-column flex-grow"},["free"===t.type?e("FreeNote",{attrs:{mode:"edit"},on:{saved:t.showMessage}}):"count"===t.type?e("CountNote",{attrs:{mode:"edit"},on:{saved:t.showMessage}}):t._e()],1)])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header d-flex"},[e("h1",[t._v("new note")])])}],i=n("b697"),a=n("16f2"),l={methods:{sendPopupMessage(t){const e=new CustomEvent("popupMessageEvent",{bubbles:!0,detail:{popupMessage:t}});window.dispatchEvent(e)}}},c={name:"Notes",mixins:[l],components:{FreeNote:i["a"],CountNote:a["a"]},props:{},data(){return{user:{},title:"",content:"",types:["free","count","todo"],type:"free"}},created(){let t=window.localStorage.getItem("userData");null!=t&&(this.user=JSON.parse(t))},methods:{showMessage(t){let e={popupMessage:t.message,triggerPopup:!0,popupType:t.type};this.sendPopupMessage(e)}}},r=c,u=(n("01ce"),n("2877")),d=Object(u["a"])(r,o,s,!1,null,null,null);e["default"]=d.exports},9143:function(t,e,n){},b697:function(t,e,n){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"free-note d-flex flex-direction-column flex-grow"},[e("div",{staticClass:"free-note-content d-flex flex-grow"},[e("div",{staticClass:"title d-flex"},["read"!==t.mode||t.enabledInputTitle?t.edit||t.enabledInputTitle?e("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],ref:"title",attrs:{type:"text",name:"title",placeholder:"title"},domProps:{value:t.note.title},on:{focusout:function(e){t.enabledInputTitle=!1},input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}}):t._e():e("h3",{on:{click:t.clickToEnabledInputTitle}},[t._v(" "+t._s(t.note.title)+" ")])]),e("div",{staticClass:"content flex-grow"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.content,expression:"note.content"}],attrs:{name:"content",cols:"30"},domProps:{value:t.note.content},on:{input:[function(e){e.target.composing||t.$set(t.note,"content",e.target.value)},function(e){t.changeTextarea=!0}]}})])]),"edit"==t.mode||t.changeTextarea||t.enabledInputTitle?e("div",{staticClass:"action"},[e("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Save")])]):t._e()])},s=[],i=(n("14d9"),n("fe0f")),a={name:"FreeNote",components:{},props:{mode:{type:String,default:"read"},propsNote:Object},data(){return{user:{},edit:!0,note:Object,enabledInputTitle:!1,changeTextarea:!1}},created(){let t=window.localStorage.getItem("userData");null!=t&&(this.user=JSON.parse(t)),"read"===this.mode&&this.propsNote!=={}?(this.edit=!1,this.note=this.propsNote):(this.edit=!0,this.note={title:"",content:""})},methods:{clickToEnabledInputTitle(){this.enabledInputTitle=!0,setTimeout(()=>{this.$refs.title.focus()},5)},save(){let t=this;if(""!==this.title)if("id"in this.note){let t={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"free"};i["a"].from("notes").update(t).eq("id",this.note.id).then(t=>{console.log(t),this.$emit("saved",{message:"La nota è stata salvata correttamente",type:"success"})}).catch(t=>{console.log(t)})}else{let e={user_id:this.user.id,title:this.note.title,content:this.note.content,type:"free"};i["a"].from("notes").insert(e).select().then(e=>{t.note.id=e.data[0].id,this.$emit("saved",{message:"La nota è stata salvata correttamente",type:"success"}),t.$router.push({path:"list",replace:!0})}).catch(t=>{console.log(t),this.$emit("saved",{message:"Attenzione! Errore salvataggio nota",type:"error"})})}}}},l=a,c=(n("046e"),n("2877")),r=Object(c["a"])(l,o,s,!1,null,null,null);e["a"]=r.exports},c35b:function(t,e,n){},d83b:function(t,e,n){}}]);