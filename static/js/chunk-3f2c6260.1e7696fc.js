(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2c6260"],{"0aed":function(e,t,r){"use strict";r("aaba");var n=r("bf16"),a=r("86d4"),i=r("238a"),s=r("f6b4"),o=r("cb3d"),c=r("8714"),_=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=o(e),f=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f?!i((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[_]=function(){return r}),r[d](""),!t})):void 0;if(!f||!p||"replace"===e&&!u||"split"===e&&!l){var h=/./[d],v=r(s,d,""[e],(function(e,t,r,n,a){return t.exec===c?f&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),x=v[0],g=v[1];n(String.prototype,e,x),a(RegExp.prototype,d,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"1e5b":function(e,t,r){var n=r("fb68"),a=r("859b").set;e.exports=function(e,t,r){var i,s=t.constructor;return s!==r&&"function"==typeof s&&(i=s.prototype)!==r.prototype&&n(i)&&a&&a(e,i),e}},"2fd4":function(e,t,r){var n=r("fb68"),a=r("75c4"),i=r("cb3d")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"4f42":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("cc57"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("9a33"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("9e76"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("f548"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("9dd9"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__),clipboard__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("f348"),clipboard__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_5__);__webpack_exports__["a"]={name:"study",data:function(){return{word:"字词",code:"",status:0,jdl:"",termsData:{},computedData:[],codeClass:"",notUpFileClass:!1,message:{show:!1,class:"",cont:""},closeTimer:!1,nextData:{word:"",code:""},errNum:2}},mounted:function(){var e=this,t=new clipboard__WEBPACK_IMPORTED_MODULE_5___default.a("#word");t.on("success",(function(){e.$Message.success("已复制")}))},methods:{isReadFile:function(){if(!this.termsData.size)return this.notUpFileClass=!0,this.$Notice.destroy(),void this.$Notice.error({title:"词库文件为空",desc:"未读取词库文件，请点击上传选择词库文件。"})},isRight:function isRight(){this.isFileSize();var reg=new RegExp("^.{".concat(this.errNum,"}")),trim=/[\s+|\r+|\n+]/g;this.code=this.code.replace(trim,""),this.nextData.code=this.nextData.code.replace(trim,""),this.code.length>=1&&(this.$Notice.destroy(),this.nextData.code==this.code?(this.$Notice.info({title:"词组信息：",desc:"编码：".concat(this.nextData.code,"\t词条：").concat(this.nextData.word,"\t√")}),this.status=2,this.errNum=2,this.next()):(this.status=-1,this.$Notice.error({title:"编码有误",desc:"错误请重新输入\t提示：共有".concat(this.nextData.code.length,"位，前").concat(this.errNum,"位是：").concat(this.nextData.code.match(eval(reg)),"\t×")}),this.nextData.code.length>this.errNum&&this.errNum++))},next:function(){var e=this;function t(){var t=Math.floor(Math.random()*e.termsData.content.length+1);t%2==0&&t++,e.status=0,e.nextData.word=e.word=e.termsData.content[t],e.nextData.code=e.code=e.termsData.content[t+1],e.code=""}setTimeout(t,300)},splitTerms:function(e){this.termsData.content=e.split(/[\t\n]/)},isFileSize:function(){this.termsData.size||this.isReadFile()},readFile:function(){var e=this;if(this.$refs.file.files.length){var t=this.$refs.file.files[this.$refs.file.files.length-1],r=new FileReader;/yaml|txt|xls/.test(t.name)?(this.termsData=this.$refs.file.files[this.$refs.file.files.length-1],this.termsData.mbSize=this.kbToMb(this.termsData.size),this.termsData.result="",r.onload=function(){e.termsData.result=this.result,e.splitTerms(this.result)},r.readAsText(t),this.notUpFileClass=!1,this.next(),this.$Notice.success({title:"词组载入成功",desc:"词库文件已加载完成，词库为".concat(this.termsData.name,"，词库大小").concat(this.termsData.mbSize,"。")})):this.$Notice.error({title:"上传文件有误",desc:"您上传的".concat(t.name,"文件格式不受支持。")})}},kbToMb:function kbToMb(data){var computedData=parseFloat(data);return computedData<1048576?eval(computedData/1024).toFixed(1)+"KB":eval(computedData/1048576).toFixed(1)+"MB"}}}},7108:function(e,t,r){"use strict";var n=r("7e23"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"7f35":function(e,t,r){},"859b":function(e,t,r){var n=r("fb68"),a=r("69b3"),i=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("4ce5")(Function.call,r("dcb7").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:i}},8714:function(e,t,r){"use strict";var n=r("f1fe"),a=RegExp.prototype.exec,i=String.prototype.replace,s=a,o="lastIndex",c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[o]||0!==t[o]}(),_=void 0!==/()??/.exec("")[1],u=c||_;u&&(s=function(e){var t,r,s,u,l=this;return _&&(r=new RegExp("^"+l.source+"$(?!\\s)",n.call(l))),c&&(t=l[o]),s=a.call(l,e),c&&s&&(l[o]=l.global?s.index+s[0].length:t),_&&s&&s.length>1&&i.call(s[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)})),s}),e.exports=s},"9a33":function(e,t,r){"use strict";var n=r("2fd4"),a=r("69b3"),i=r("f63e"),s=r("e754"),o=r("eafa"),c=r("7108"),_=r("8714"),u=r("238a"),l=Math.min,d=[].push,f="split",p="length",h="lastIndex",v=4294967295,x=!u((function(){RegExp(v,"y")}));r("0aed")("split",2,(function(e,t,r,u){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var i,s,o,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),l=0,f=void 0===t?v:t>>>0,x=new RegExp(e.source,u+"g");while(i=_.call(x,a)){if(s=x[h],s>l&&(c.push(a.slice(l,i.index)),i[p]>1&&i.index<a[p]&&d.apply(c,i.slice(1)),o=i[0][p],l=s,c[p]>=f))break;x[h]===i.index&&x[h]++}return l===a[p]?!o&&x.test("")||c.push(""):c.push(a.slice(l)),c[p]>f?c.slice(0,f):c}:"0"[f](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):g.call(String(a),r,n)},function(e,t){var n=u(g,e,this,t,g!==r);if(n.done)return n.value;var _=a(e),d=String(this),f=i(_,RegExp),p=_.unicode,h=(_.ignoreCase?"i":"")+(_.multiline?"m":"")+(_.unicode?"u":"")+(x?"y":"g"),m=new f(x?_:"^(?:"+_.source+")",h),b=void 0===t?v:t>>>0;if(0===b)return[];if(0===d.length)return null===c(m,d)?[d]:[];var E=0,D=0,y=[];while(D<d.length){m.lastIndex=x?D:0;var w,R=c(m,x?d:d.slice(D));if(null===R||(w=l(o(m.lastIndex+(x?0:D)),d.length))===E)D=s(d,D,p);else{if(y.push(d.slice(E,D)),y.length===b)return y;for(var M=1;M<=R.length-1;M++)if(y.push(R[M]),y.length===b)return y;D=E=w}}return y.push(d.slice(E)),y}]}))},"9dd9":function(e,t,r){var n=r("e7ad"),a=r("1e5b"),i=r("064e").f,s=r("2ea2").f,o=r("2fd4"),c=r("f1fe"),_=n.RegExp,u=_,l=_.prototype,d=/a/g,f=/a/g,p=new _(d)!==d;if(r("149f")&&(!p||r("238a")((function(){return f[r("cb3d")("match")]=!1,_(d)!=d||_(f)==f||"/a/i"!=_(d,"i")})))){_=function(e,t){var r=this instanceof _,n=o(e),i=void 0===t;return!r&&n&&e.constructor===_&&i?e:a(p?new u(n&&!i?e.source:e,t):u((n=e instanceof _)?e.source:e,n&&i?c.call(e):t),r?this:l,_)};for(var h=function(e){e in _||i(_,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},v=s(u),x=0;v.length>x;)h(v[x++]);l.constructor=_,_.prototype=l,r("bf16")(n,"RegExp",_)}r("1157")("RegExp")},"9e76":function(e,t,r){"use strict";var n=r("69b3"),a=r("eafa"),i=r("e754"),s=r("7108");r("0aed")("match",1,(function(e,t,r,o){return[function(r){var n=e(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,n):new RegExp(r)[t](String(n))},function(e){var t=o(r,e,this);if(t.done)return t.value;var c=n(e),_=String(this);if(!c.global)return s(c,_);var u=c.unicode;c.lastIndex=0;var l,d=[],f=0;while(null!==(l=s(c,_))){var p=String(l[0]);d[f]=p,""===p&&(c.lastIndex=i(_,a(c.lastIndex),u)),f++}return 0===f?null:d}]}))},a993:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Row",{attrs:{type:"flex",justify:"center"}},[r("Row",{staticStyle:{"max-width":"1200px",padding:"0 20px"}},[r("Card",[r("Row",{attrs:{type:"flex",justify:"center"}},[r("h1",{staticClass:"main-title"},[e._v("单字词组练习工具"),r("small",[e._v("Rime词库")])])]),r("Row",[r("Card",{staticClass:"study-main-card"},[r("span",{attrs:{slot:"title",title:e.termsData.name},slot:"title"},[e._v(e._s(e.termsData.name?e.termsData.name:"未读取文件")+" "+e._s(e.termsData.size?e.termsData.mbSize:0))]),r("div",{attrs:{slot:"extra"},slot:"extra"},[r("label",{staticClass:"ivu-btn ivu-btn-default",attrs:{for:"file"}},[e._v("上传")]),r("input",{ref:"file",attrs:{id:"file",type:"file"},on:{change:e.readFile}})]),r("Row",{attrs:{type:"flex",justify:"center"}},[r("span",{attrs:{id:"word","data-clipboard-target":"#word"}},[e._v(e._s(e.word))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"ivu-input ivu-input-default",class:{"":0==e.status,"border-primary":1==e.status,"border-success":2==e.status,"border-danger":-1==e.status},attrs:{maxlength:"6",type:"text",autocomplete:"off",placeholder:"请输入词组对应编码"},domProps:{value:e.code},on:{click:e.isReadFile,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.isRight(t)},keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault()},input:function(t){t.target.composing||(e.code=t.target.value)}}})])],1),r("Row",{attrs:{type:"flex",justify:"center"}},[r("p",[e._v("version 1.2")])]),r("Row",{staticStyle:{"margin-top":"15px"},attrs:{type:"flex",justify:"center"}},[r("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[r("p",[e._v("一、请选择一个Rime词库上传。")])]),r("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[r("p",[e._v("二、切换使用英文输入法。")])]),r("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[r("p",[e._v("三、输入对应词条编码，空格确定。")])]),r("Col",{staticStyle:{padding:"0 5px"},attrs:{xs:12,md:6}},[r("p",[e._v("四、校验成功自动下一个。")])])],1)],1)],1)],1)],1)},a=[],i=r("4f42"),s=i["a"],o=(r("abc2"),r("e90a")),c=Object(o["a"])(s,n,a,!1,null,null,null);t["default"]=c.exports},aaba:function(e,t,r){"use strict";var n=r("8714");r("e46b")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},abc2:function(e,t,r){"use strict";var n=r("7f35"),a=r.n(n);a.a},e754:function(e,t,r){"use strict";var n=r("fc81")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},f548:function(e,t,r){"use strict";var n=r("69b3"),a=r("008a"),i=r("eafa"),s=r("ee21"),o=r("e754"),c=r("7108"),_=Math.max,u=Math.min,l=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};r("0aed")("replace",2,(function(e,t,r,h){return[function(n,a){var i=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,i,a):r.call(String(i),n,a)},function(e,t){var a=h(r,e,this,t);if(a.done)return a.value;var l=n(e),d=String(this),f="function"===typeof t;f||(t=String(t));var x=l.global;if(x){var g=l.unicode;l.lastIndex=0}var m=[];while(1){var b=c(l,d);if(null===b)break;if(m.push(b),!x)break;var E=String(b[0]);""===E&&(l.lastIndex=o(d,i(l.lastIndex),g))}for(var D="",y=0,w=0;w<m.length;w++){b=m[w];for(var R=String(b[0]),M=_(u(s(b.index),d.length),0),O=[],P=1;P<b.length;P++)O.push(p(b[P]));var k=b.groups;if(f){var C=[R].concat(O,M,d);void 0!==k&&C.push(k);var T=String(t.apply(void 0,C))}else T=v(R,d,M,O,k,t);M>=y&&(D+=d.slice(y,M)+T,y=M+R.length)}return D+d.slice(y)}];function v(e,t,n,i,s,o){var c=n+e.length,_=i.length,u=f;return void 0!==s&&(s=a(s),u=d),r.call(o,u,(function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":o=s[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>_){var d=l(u/10);return 0===d?r:d<=_?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):r}o=i[u-1]}return void 0===o?"":o}))}}))}}]);