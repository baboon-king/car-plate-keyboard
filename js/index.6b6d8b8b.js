(function(t){function e(e){for(var n,l,a=e[0],r=e[1],u=e[2],p=0,d=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var r=i[a];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},o={index:0},s=[];function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("c31f")},1318:function(t,e,i){},"42b1":function(t,e,i){"use strict";i("f381")},c31f:function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"wrap"},[i("h3",[t._v("基本使用")]),i("car-plate-keyboard",{on:{submit:t.submit}}),i("h3",[t._v("自定义输入框")]),i("car-plate-keyboard",{on:{submit:t.submit},scopedSlots:t._u([{key:"default",fn:function(e){return[i("input",{attrs:{type:"text"},domProps:{value:e.value.join("")}}),i("div",[t._v(t._s(e.value.join("")))])]}}])}),i("h3",[t._v("自定义删除按钮内容")]),i("car-plate-keyboard",{on:{submit:t.submit},scopedSlots:t._u([{key:"backspace",fn:function(){return[t._v(" 删除 ")]},proxy:!0}])}),i("h3",[t._v("传入默认值")]),i("car-plate-keyboard",{attrs:{value:t.defaultPlate},on:{submit:t.submit}}),i("h3",[t._v("父容器有宽度")]),i("div",{staticStyle:{width:"250px"}},[i("car-plate-keyboard",{on:{submit:t.submit}})],1),i("h3",[t._v("新能源多一位")]),i("car-plate-keyboard",{attrs:{value:t.defaultPlate2},on:{submit:t.submit}})],1)])},s=[],l={name:"app",components:{},data(){return{defaultPlate:"沪A555",defaultPlate2:"沪A88888"}},methods:{submit(t){console.log(t)}}},a=l,r=(i("42b1"),i("2877")),u=Object(r["a"])(a,o,s,!1,null,null,null),c=u.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",style:{zIndex:t.visible?999:"auto"}},[t._overlay?i("div",{staticClass:"back-bord",on:{click:function(e){return t.closeByClickOverlay()}}}):t._e(),i("div",{ref:"inputBlock",on:{click:function(e){return t.open()}}},[t._t("default",[i("div",{staticClass:"data-show"},[t._l(8,(function(e){return[i("div",{key:e,class:["data-show-block",{active:t.isActive(e)}],style:{"border-color":t.isLastBlock(e)?"#07c160":""}},[t._v(" "+t._s(t.inputValue[e-1])+" ")])]}))],2)],{value:t.inputValue})],2),i("transition",{attrs:{name:"keybordSlide"}},[t.visible?i("div",{staticClass:"keybord-wrap",style:{zIndex:t.visible?999:"auto"}},[i("header",{staticClass:"keybord-header"},[i("span",{on:{click:function(e){return e.stopPropagation(),t.cancel()}}},[t._v("取消")]),t.previewOnKeyboard?i("span",{staticClass:"preview"},[t._v(t._s(t.inputValue.join("")))]):t._e(),i("span",{class:[{gray:t.inputValue.length<7}],on:{click:function(e){return e.stopPropagation(),t.submit()}}},[t._v("完成")])]),i("div",{staticClass:"keybord-keys"},["字"===t.keybordType?i("ul",{staticClass:"keybord-keys-word-wrap"},t._l(t.wordList.slice(0,30),(function(e){return i("li",{key:e,staticClass:"button",on:{click:function(i){return i.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0):i("div",[i("ul",{staticClass:"keybord-keys-abc-wrap"},t._l(t.abcList.slice(0,10),(function(e){return i("li",{key:e,staticClass:"button",on:{click:function(i){return i.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0),i("ul",{staticClass:"keybord-keys-abc-wrap"},t._l(t.abcList.slice(10,20),(function(e){return i("li",{key:e,staticClass:"button",on:{click:function(i){return i.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0),i("ul",{staticClass:"keybord-keys-abc-wrap-short"},t._l(t.abcList.slice(20,29),(function(e){return i("li",{key:e,staticClass:"button",on:{click:function(i){return i.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"keybord-keys-bottom"},[i("div",{staticClass:"big-button",on:{click:function(e){return e.stopPropagation(),t.toggle()}}},[t._v(" "+t._s(t.keybordType)+" ")]),i("ul",{staticClass:"keybord-keys-bottom-line"},t._l(t.judgeList,(function(e){return i("li",{key:e,staticClass:"button",on:{click:function(i){return i.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0),i("div",{staticClass:"big-button",on:{click:function(e){return e.stopPropagation(),t.deleteOne()}}},[t._t("backspace",[i("span",{staticClass:"icon-delete"},[t._v("⇦")])])],2)])])]):t._e()])],1)},d=[],h={name:"car-plate-keyboard",props:{value:{type:String,default:""},openKeyboardOnInit:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},previewOnKeyboard:{type:Boolean,default:!0},checkInputBlocked:{type:Boolean,default:!1}},data:function(){return{placeholderDom:null,keybordType:"字",inputValue:[],visible:!1,wordList:["京","津","渝","沪","冀","晋","辽","吉","黑","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","琼","川","贵","云","陕","甘","青","蒙","桂","宁","新","藏","使","领","警","学","港","澳"],abcList:[1,2,3,4,5,6,7,8,9,0,"Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]}},computed:{_overlay(){return this.visible&&this.overlay},judgeList(){return"ABC"===this.keybordType?this.abcList.slice(29,36):this.wordList.slice(30,37)}},methods:{init(){this.visible=this.openKeyboardOnInit,this.inputValue=this.value.split("")},isActive(t){return this.inputValue.length===t-1},isLastBlock(t){return 8===t&&this.isActive(t)},toggle(){0===this.inputValue.length||this.inputValue.length>0&&this.inputValue.length<=8||(this.keybordType="ABC"===this.keybordType?"字":"ABC")},inputWord(t){8!==this.inputValue.length&&this.inputValue.push(t)},deleteOne(){this.inputValue.pop()},closeByClickOverlay(){this.closeOnClickOverlay&&this.cancel()},cancel(){this.visible=!1,this.$emit("cancel",this.inputValue.join(""))},submit(){this.inputValue.length<7||(this.visible=!1,this.$emit("submit",this.inputValue.join("")))},open(){this.visible=!0},checkInputLocation(t){if(this.checkInputBlocked)if(t){const t=document.documentElement.clientHeight,e=document.documentElement.scrollHeight,i=this.$refs.inputBlock.getBoundingClientRect().top,n=this.$refs.inputBlock.scrollHeight;n+250+i>=t&&e===t&&(this.placeholderDom.style.display="block"),window.scrollTo(0,250)}else document.body.scrollIntoView({block:"start",behavior:"smooth"}),this.placeholderDom.style.display="none"},createPlaceholderDom(){this.checkInputBlocked&&(this.placeholderDom=document.createElement("div"),this.placeholderDom.className="placeholder",this.placeholderDom.style.cssText="height: 260px;width: 100%;background: red;opacity:0",this.placeholderDom.style.display="none",document.body.appendChild(this.placeholderDom))}},created(){this.init(),this.createPlaceholderDom()},watch:{value(t=""){this.inputValue=t.split("")},inputValue(t){0===this.inputValue.length&&(this.keybordType="字"),this.inputValue.length>0&&this.inputValue.length<=7&&(this.keybordType="ABC")},visible(t){this.checkInputLocation(t)}}},b=h,y=(i("d7f8"),Object(r["a"])(b,p,d,!1,null,"2e999bcd",null)),f=y.exports;f.install=function(t){t.component(f.name,f)};var v=f;const k=[v],m=function(t){m.installed||k.map(e=>t.component(e.name,e))};"undefined"!==typeof window&&window.Vue&&m(window.Vue);var _={install:m,carPlateKeyboard:v};n["a"].config.productionTip=!1,n["a"].use(_),new n["a"]({render:t=>t(c)}).$mount("#app")},d7f8:function(t,e,i){"use strict";i("1318")},f381:function(t,e,i){}});