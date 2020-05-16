(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-531b01cf"],{"067a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"mb-4",attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{md12:""}},[r("p",{staticClass:"font-weight-regular",staticStyle:{"font-size":"130%"}},[t._v(" in this step we will walk you through enabling the Mailer Function in your website ")]),r("ol",{staticStyle:{"font-size":"130%"}},[r("li",[t._v("Go to "),r("a",{attrs:{target:"_blank",href:"https://console.developers.google.com/apis/credentials?project="+t.getProjectID}},[t._v("Google APIs Console")])]),r("li",[t._v("Then Follow the steps in this video")]),r("li",[t._v("After You Paste The QAuth2 Client JSON click Authrise then Login with Your Club Email")])])]),r("v-divider"),r("v-flex",{attrs:{md12:""}},[t.client?r("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:""}},[t.error?r("v-flex",{staticClass:"mt-3",attrs:{md12:""}},[r("v-alert",{attrs:{color:"red darken-2",type:"error"}},[t._v(" "+t._s(t.error)+" ")])],1):t._e(),r("v-flex",{attrs:{md12:""}},[r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{md12:""}},[r("v-textarea",{staticClass:"mr-4 ml-4",attrs:{rules:t.notEmpty,outlined:"",label:"Client JSON"},model:{value:t.c_data,callback:function(e){t.c_data=e},expression:"c_data"}})],1)],1)],1)],1)],1):t._e()],1),r("v-divider"),r("v-flex",{attrs:{md12:""}},[r("v-layout",{staticClass:"mt-3",attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"mb-3",attrs:{md12:""}},[r("v-btn",{on:{click:t.getAuth}},[t._v("Authrise")])],1)],1)],1),r("loading",{attrs:{loading:t.loading}})],1)},o=[];r("ac1f"),r("5319"),r("96cf"),r("d3b7"),r("e6cf");function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}var s=r("bc3a"),c=r.n(s),u=r("dabe"),l={name:"mailer-setup",components:{Loading:u["a"]},data:function(){return{client:!0,valid:null,error:null,c_data:null,notEmpty:[function(t){return!!t||"This Field is required"}],loading:!1,getProjectID:null}},mounted:function(){var t=this;return i(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("http://127.0.0.1:8009/getProjectID");case 2:r=e.sent,t.getProjectID=r.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{getAuth:function(){var t=i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!=this.c_data&&0!=this.c_data.length){t.next=3;break}return this.error="Please Paste The Client JSON inn the Text Area",t.abrupt("return");case 3:return this.loading=!0,t.next=6,c.a.post("http://127.0.0.1:8009/addClient",{client:this.c_data});case 6:this.client=!1,setTimeout(i(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("http://127.0.0.1:8009/getAuthURL");case 2:e=t.sent,r=e.data,location.replace(r),console.log(r);case 6:case"end":return t.stop()}}),t)}))),1e3);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},h=l,f=r("2877"),p=r("6544"),d=r.n(p),v=r("0798"),y=r("8336"),g=r("ce7e"),m=r("0e8f"),w=r("4bd4"),x=r("a722"),b=r("a844"),_=Object(f["a"])(h,n,o,!1,null,"f682f88c",null);e["default"]=_.exports;d()(_,{VAlert:v["a"],VBtn:y["a"],VDivider:g["a"],VFlex:m["a"],VForm:w["a"],VLayout:x["a"],VTextarea:b["a"]})},1681:function(t,e,r){},"3c93":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new I(n||[]);return a._invoke=E(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function v(){}function y(){}function g(){}var m={};m[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==r&&n.call(x,a)&&(m=x);var b=g.prototype=v.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function r(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=l;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return N()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,g[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(b),b[s]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a797:function(t,e,r){"use strict";r("a9e3");var n=r("5530"),o=(r("3c93"),r("a9ad")),a=r("7560"),i=r("f2e7"),s=r("58df");e["a"]=Object(s["a"])(o["a"],a["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},a844:function(t,e,r){"use strict";r("a9e3");var n=r("5530"),o=(r("1681"),r("8654")),a=r("58df"),i=Object(a["a"])(o["a"]);e["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,r=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(r,e)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},dabe:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-overlay",{attrs:{"z-index":"50",value:t.loading}},[r("v-progress-circular",{attrs:{rotate:360,size:100,width:15,indeterminate:"",color:"#3498db"}})],1)},o=[],a={name:"loading",props:{loading:{required:!0}}},i=a,s=r("2877"),c=r("6544"),u=r.n(c),l=r("a797"),h=r("490a"),f=Object(s["a"])(i,n,o,!1,null,"fd28e92a",null);e["a"]=f.exports;u()(f,{VOverlay:l["a"],VProgressCircular:h["a"]})}}]);
//# sourceMappingURL=chunk-531b01cf.6d7146ec.js.map