(function(t){function e(e){for(var i,l,s=e[0],r=e[1],u=e[2],p=0,d=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(i=!1)}i&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},o={index:0},a=[];function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"42b1":function(t,e,n){"use strict";n("f381")},"56d5":function(t,e,n){"use strict";n("f074")},c31f:function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrap"},[n("h3",[t._v("基本使用")]),n("car-plate-keyboard",{on:{submit:t.submit}}),n("h3",[t._v("自定义输入框")]),n("car-plate-keyboard",{on:{submit:t.submit},scopedSlots:t._u([{key:"default",fn:function(e){return[n("input",{attrs:{type:"text"},domProps:{value:e.value.join("")}}),n("div",[t._v(t._s(e.value.join("")))])]}}])}),n("h3",[t._v("自定义删除按钮内容")]),n("car-plate-keyboard",{on:{submit:t.submit},scopedSlots:t._u([{key:"backspace",fn:function(){return[t._v(" 删除 ")]},proxy:!0}])}),n("h3",[t._v("传入默认值")]),n("car-plate-keyboard",{attrs:{value:t.defaultPlate},on:{submit:t.submit}}),n("h3",[t._v("父容器有宽度")]),n("div",{staticStyle:{width:"250px"}},[n("car-plate-keyboard",{on:{submit:t.submit}})],1),n("h3",[t._v("新能源多一位")]),n("car-plate-keyboard",{attrs:{value:t.defaultPlate2},on:{submit:t.submit}}),n("h3",[t._v("只读")]),n("car-plate-keyboard",{attrs:{value:t.defaultPlate3,readonly:""},on:{submit:t.submit}})],1)])},a=[],l={name:"app",components:{},data(){return{defaultPlate:"沪A555",defaultPlate2:"沪A88888",defaultPlate3:"沪A45648"}},methods:{submit(t){console.log(t)}}},s=l,r=(n("42b1"),n("2877")),u=Object(r["a"])(s,o,a,!1,null,null,null),c=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._overlay?n("div",{staticClass:"back-bord",on:{click:function(e){return t.closeByClickOverlay()}}}):t._e(),n("div",{ref:"inputBlock",on:{click:function(e){return t.open()}}},[t._t("default",[n("div",{staticClass:"data-show"},[t._l(8,(function(e){return[n("div",{key:e,class:["data-show-block",{active:t.isActive(e)},{"new-energy":t.isLastBlock(e)}]},[t._v(" "+t._s(t.inputValue[e-1])+" ")])]}))],2)],{value:t.inputValue})],2),n("transition",{attrs:{name:"keybordSlide"}},[t.visible?n("div",{staticClass:"keybord-wrap"},[n("header",{staticClass:"keybord-header"},[n("span",{on:{click:function(e){return e.stopPropagation(),t.cancel()}}},[t._v("取消")]),t.previewOnKeyboard?n("span",{class:["preview",{"new-energy":t.newEnergy}]},[t._v(t._s(t.inputValue.join("")))]):t._e(),n("span",{class:[{gray:t.inputValue.length<7}],on:{click:function(e){return e.stopPropagation(),t.submit()}}},[t._v("完成")])]),n("div",{staticClass:"keybord-keys"},["字"===t.keybordType?n("ul",{staticClass:"keybord-keys-word-wrap"},t._l(t.wordList.slice(0,30),(function(e){return n("li",{key:e,staticClass:"button",on:{click:function(n){return n.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0):n("div",[n("ul",{staticClass:"keybord-keys-abc-wrap"},t._l(t.abcList.slice(0,10),(function(e){return n("li",{key:e,staticClass:"button",on:{click:function(n){return n.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0),n("ul",{staticClass:"keybord-keys-abc-wrap"},t._l(t.abcList.slice(10,20),(function(e){return n("li",{key:e,staticClass:"button",on:{click:function(n){return n.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0),n("ul",{staticClass:"keybord-keys-abc-wrap-short"},t._l(t.abcList.slice(20,29),(function(e){return n("li",{key:e,staticClass:"button",on:{click:function(n){return n.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]),n("div",{staticClass:"keybord-keys-bottom"},[n("div",{staticClass:"big-button",on:{click:function(e){return e.stopPropagation(),t.toggle()}}},[t._v(" "+t._s(t.keybordType)+" ")]),n("ul",{staticClass:"keybord-keys-bottom-line"},t._l(t.judgeList,(function(e){return n("li",{key:e,staticClass:"button",on:{click:function(n){return n.stopPropagation(),t.inputWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"big-button",on:{click:function(e){return e.stopPropagation(),t.deleteOne()}}},[t._t("backspace",[n("span",{staticClass:"icon-delete"},[t._v("⇦")])])],2)])])]):t._e()])],1)},d=[],h={name:"car-plate-keyboard",props:{value:{type:String,default:""},openKeyboardOnInit:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},previewOnKeyboard:{type:Boolean,default:!0},checkInputBlocked:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){return{placeholderDom:null,keybordType:"字",inputValue:[],visible:!1,wordList:["京","津","渝","沪","冀","晋","辽","吉","黑","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","琼","川","贵","云","陕","甘","青","蒙","桂","宁","新","藏","使","领","警","学","港","澳"],abcList:[1,2,3,4,5,6,7,8,9,0,"Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]}},computed:{_overlay(){return this.visible&&this.overlay},judgeList(){return"ABC"===this.keybordType?this.abcList.slice(29,36):this.wordList.slice(30,37)},newEnergy(){return 8===this.inputValue.length}},methods:{init(){this.visible=this.openKeyboardOnInit,this.inputValue=this.value.split("")},isActive(t){return this.inputValue.length===t-1},isLastBlock(t){return 8===t&&this.isActive(t)},toggle(){0===this.inputValue.length||this.inputValue.length>0&&this.inputValue.length<=8||(this.keybordType="ABC"===this.keybordType?"字":"ABC")},inputWord(t){8!==this.inputValue.length&&this.inputValue.push(t)},deleteOne(){this.inputValue.pop()},closeByClickOverlay(){this.closeOnClickOverlay&&this.cancel()},cancel(){this.visible=!1,this.$emit("cancel",this.inputValue.join(""))},submit(){this.inputValue.length<7||(this.visible=!1,this.$emit("submit",this.inputValue.join("")))},open(){this.readonly||(this.visible=!0)},checkInputLocation(t){if(this.checkInputBlocked)if(t){const t=document.documentElement.clientHeight,e=document.documentElement.scrollHeight,n=this.$refs.inputBlock.getBoundingClientRect().top,i=this.$refs.inputBlock.scrollHeight;i+250+n>=t&&e===t&&(this.placeholderDom.style.display="block"),window.scrollTo(0,250)}else document.body.scrollIntoView({block:"start",behavior:"smooth"}),this.placeholderDom.style.display="none"},createPlaceholderDom(){this.checkInputBlocked&&(this.placeholderDom=document.createElement("div"),this.placeholderDom.className="placeholder",this.placeholderDom.style.cssText="height: 260px;width: 100%;background: red;opacity:0",this.placeholderDom.style.display="none",document.body.appendChild(this.placeholderDom))}},created(){this.init(),this.createPlaceholderDom()},watch:{value(t=""){this.inputValue=t.split("")},inputValue(t){0===this.inputValue.length&&(this.keybordType="字"),this.inputValue.length>0&&this.inputValue.length<=7&&(this.keybordType="ABC")},visible(t){this.checkInputLocation(t)}}},b=h,y=(n("56d5"),Object(r["a"])(b,p,d,!1,null,"1f26570f",null)),f=y.exports;f.install=function(t){t.component(f.name,f)};var v=f;const k=[v],m=function(t){m.installed||k.map(e=>t.component(e.name,e))};"undefined"!==typeof window&&window.Vue&&m(window.Vue);var g={install:m,carPlateKeyboard:v};i["a"].config.productionTip=!1,i["a"].use(g),new i["a"]({render:t=>t(c)}).$mount("#app")},f074:function(t,e,n){},f381:function(t,e,n){}});