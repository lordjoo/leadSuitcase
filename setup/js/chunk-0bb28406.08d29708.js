(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bb28406"],{1681:function(t,e,a){},"31f7":function(t,e,a){t.exports=a.p+"img/header.c7bf6f6a.png"},"9a0a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{staticClass:"mb-4",attrs:{row:"",wrap:""}},[t.error?o("v-flex",{attrs:{md12:""}},[o("v-alert",{attrs:{color:"red darken-2",type:"error"}},[t._v(" "+t._s(t.error)+" ")])],1):t._e(),o("v-flex",{attrs:{md12:""}},[o("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-flex",{staticClass:"mt-2",attrs:{md12:""}},[o("v-text-field",{attrs:{outlined:"",hint:"Like DSC MUST , GDG 6 October",label:"Chapter Name * "},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),o("v-flex",{attrs:{md12:""}},[o("v-label",[t._v(" Chapter About Info "),o("v-dialog",{attrs:{width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("v-btn",t._g({attrs:{color:"blue darken-3"}},a),[t._v(" Example ")])]}}]),model:{value:t.dialogAbout,callback:function(e){t.dialogAbout=e},expression:"dialogAbout"}},[o("v-card",[o("v-card-text",{staticClass:"py-0 px-0"},[o("v-img",{attrs:{src:a("c391")}})],1),o("v-divider")],1)],1)],1),o("v-textarea",{staticClass:"mt-4",attrs:{rules:t.required,outlined:"",label:"Chapter About Info *"},model:{value:t.about,callback:function(e){t.about=e},expression:"about"}})],1),o("v-flex",{staticClass:"mt-4",attrs:{md12:""}},[o("v-label",[t._v(" Website Header "),o("v-dialog",{attrs:{width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[o("v-btn",t._g({attrs:{color:"blue darken-3"}},a),[t._v(" Example ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-text",[o("v-img",{attrs:{src:a("31f7")}})],1),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1),o("v-textarea",{staticClass:"mt-4",attrs:{rules:t.required,outlined:"",height:"70",label:"Header One *"},model:{value:t.header.one,callback:function(e){t.$set(t.header,"one",e)},expression:"header.one"}}),o("v-textarea",{attrs:{outlined:"",height:"70",label:"Header Two"},model:{value:t.header.two,callback:function(e){t.$set(t.header,"two",e)},expression:"header.two"}})],1),o("v-flex",{staticClass:"mb-4",attrs:{md12:""}},[o("v-label",[t._v(" Website main Color ")])],1),o("v-flex",{attrs:{md12:""}},[o("v-btn",{staticClass:"mr-2",attrs:{outlined:"#DB4437"===t.color,color:"#DB4437",large:""},on:{click:function(e){t.color="#DB4437"}}},[t._v("Red ")]),o("v-btn",{staticClass:"mr-2",attrs:{outlined:"#F4B400"===t.color,color:"#F4B400",large:""},on:{click:function(e){t.color="#F4B400"}}},[t._v("Yellow ")]),o("v-btn",{staticClass:"mr-2",attrs:{outlined:"#4285f4"===t.color,color:"#4285f4",large:""},on:{click:function(e){t.color="#4285f4"}}},[t._v("Blue ")]),o("v-btn",{staticClass:"mr-2",attrs:{outlined:"#0F9D58"===t.color,color:"#0F9D58",large:""},on:{click:function(e){t.color="#0F9D58"}}},[t._v("Green ")])],1),o("v-flex",{staticClass:"mt-8",attrs:{md12:""}},[o("v-label",[t._v(" Social media links ")])],1),o("v-flex",{staticClass:"mt-4",attrs:{md12:""}},[o("v-text-field",{attrs:{outlined:"","prepend-icon":"fab fa-facebook-f",label:"Facebook Page"},model:{value:t.fb,callback:function(e){t.fb=e},expression:"fb"}}),o("v-text-field",{attrs:{outlined:"","prepend-icon":"fab fa-twitter",label:"Twitter Profile"},model:{value:t.tw,callback:function(e){t.tw=e},expression:"tw"}}),o("v-text-field",{attrs:{outlined:"","prepend-icon":"fab fa-youtube",label:"Youtube Channel"},model:{value:t.yt,callback:function(e){t.yt=e},expression:"yt"}}),o("v-text-field",{attrs:{outlined:"","prepend-icon":"fab fa-meetup",label:"Meetup URL"},model:{value:t.mt,callback:function(e){t.mt=e},expression:"mt"}})],1),o("v-flex",{staticClass:"mt-4 mb-4",attrs:{md12:""}},[o("v-label",[t._v(" Other links ")])],1),o("v-flex",{attrs:{md12:""}},[o("v-text-field",{attrs:{rules:t.required,outlined:"",label:"Program Link *"},model:{value:t.program,callback:function(e){t.program=e},expression:"program"}}),o("v-text-field",{attrs:{outlined:"",label:"Join Us Form Link"},model:{value:t.joinUs,callback:function(e){t.joinUs=e},expression:"joinUs"}})],1)],1)],1),o("v-flex",{staticClass:"mt-4",attrs:{md12:""}},[o("v-btn",{attrs:{color:"primary"},on:{click:t.next}},[t._v(" Continue ")])],1),o("loading",{attrs:{loading:t.loading}})],1)},l=[],r=(a("b0c0"),a("bc3a")),n=a.n(r),i=a("dabe"),s={name:"step-three",components:{Loading:i["a"]},data:function(){return{loading:!1,color:"#4285f4",name:null,fb:null,tw:null,dialog:null,dialogAbout:null,yt:null,mt:null,program:null,joinUs:null,about:null,header:{one:"",two:""},valid:null,error:null,required:[function(t){return!!t||"This Field is required"}]}},methods:{next:function(){if(this.valid){var t={name:this.name,style:{color:this.color},info:{about:this.about},header:{sub1:this.header.one,sub2:this.header.two},social:{fb:this.fb,meetup:this.mt,twitter:this.tw,yt:this.yt},links:{DSCProgramWebsite:this.program,joinUsForm:this.joinUs}};this.loading=!0,t=JSON.stringify(t);var e=this;setTimeout((function(){n.a.post("http://127.0.0.1:8009/project/config",{config:t}).then((function(t){e.loading=!1,e.loading=!1;var a=t.data;"failed"===a.status?e.error=a.msg:(e.error=null,e.$router.push("/step/4"))}))}),1200)}else window.scroll(0,0),this.error="Please fil the required Fields"}}},c=s,u=a("2877"),d=a("6544"),f=a.n(d),v=a("0798"),m=a("8336"),b=a("b0af"),p=a("99d9"),h=a("169a"),g=a("ce7e"),x=a("0e8f"),w=a("4bd4"),k=a("adda"),C=a("24c9"),y=a("a722"),_=a("2fa4"),V=a("8654"),F=a("a844"),H=Object(u["a"])(c,o,l,!1,null,"b3f77374",null);e["default"]=H.exports;f()(H,{VAlert:v["a"],VBtn:m["a"],VCard:b["a"],VCardActions:p["a"],VCardText:p["b"],VDialog:h["a"],VDivider:g["a"],VFlex:x["a"],VForm:w["a"],VImg:k["a"],VLabel:C["a"],VLayout:y["a"],VSpacer:_["a"],VTextField:V["a"],VTextarea:F["a"]})},a844:function(t,e,a){"use strict";a("a9e3");var o=a("5530"),l=(a("1681"),a("8654")),r=a("58df"),n=Object(r["a"])(l["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(o["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},l["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=l["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){l["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},c391:function(t,e,a){t.exports=a.p+"img/aboutSection.c36c83cc.png"},dabe:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-overlay",{attrs:{"z-index":"50",value:t.loading}},[a("v-progress-circular",{attrs:{rotate:360,size:100,width:15,indeterminate:"",color:"#3498db"}})],1)},l=[],r={name:"loading",props:{loading:{required:!0}}},n=r,i=a("2877"),s=a("6544"),c=a.n(s),u=a("a797"),d=a("490a"),f=Object(i["a"])(n,o,l,!1,null,"fd28e92a",null);e["a"]=f.exports;c()(f,{VOverlay:u["a"],VProgressCircular:d["a"]})}}]);
//# sourceMappingURL=chunk-0bb28406.08d29708.js.map