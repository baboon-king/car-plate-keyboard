module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "56d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_car_plate_keyboard_vue_vue_type_style_index_0_id_1f26570f_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f074");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_car_plate_keyboard_vue_vue_type_style_index_0_id_1f26570f_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_car_plate_keyboard_vue_vue_type_style_index_0_id_1f26570f_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "f074":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d24a8918-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/car-plate-keyboard/car-plate-keyboard.vue?vue&type=template&id=1f26570f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm._overlay)?_c('div',{staticClass:"back-bord",on:{"click":function($event){return _vm.closeByClickOverlay()}}}):_vm._e(),_c('div',{ref:"inputBlock",on:{"click":function($event){return _vm.open()}}},[_vm._t("default",[_c('div',{staticClass:"data-show"},[_vm._l((8),function(n){return [_c('div',{key:n,class:['data-show-block', { active: _vm.isActive(n) }, { 'new-energy': _vm.isLastBlock(n) }]},[_vm._v(" "+_vm._s(_vm.inputValue[n - 1])+" ")])]})],2)],{"value":_vm.inputValue})],2),_c('transition',{attrs:{"name":"keybordSlide"}},[(_vm.visible)?_c('div',{staticClass:"keybord-wrap"},[_c('header',{staticClass:"keybord-header"},[_c('span',{on:{"click":function($event){$event.stopPropagation();return _vm.cancel()}}},[_vm._v("取消")]),(_vm.previewOnKeyboard)?_c('span',{class:['preview', { 'new-energy': _vm.newEnergy }]},[_vm._v(_vm._s(_vm.inputValue.join('')))]):_vm._e(),_c('span',{class:[{ gray: _vm.inputValue.length < 7 }],on:{"click":function($event){$event.stopPropagation();return _vm.submit()}}},[_vm._v("完成")])]),_c('div',{staticClass:"keybord-keys"},[(_vm.keybordType === '字')?_c('ul',{staticClass:"keybord-keys-word-wrap"},_vm._l((_vm.wordList.slice(0, 30)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0):_c('div',[_c('ul',{staticClass:"keybord-keys-abc-wrap"},_vm._l((_vm.abcList.slice(0, 10)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('ul',{staticClass:"keybord-keys-abc-wrap"},_vm._l((_vm.abcList.slice(10, 20)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('ul',{staticClass:"keybord-keys-abc-wrap-short"},_vm._l((_vm.abcList.slice(20, 29)),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0)]),_c('div',{staticClass:"keybord-keys-bottom"},[_c('div',{staticClass:"big-button",on:{"click":function($event){$event.stopPropagation();return _vm.toggle()}}},[_vm._v(" "+_vm._s(_vm.keybordType)+" ")]),_c('ul',{staticClass:"keybord-keys-bottom-line"},_vm._l((_vm.judgeList),function(item){return _c('li',{key:item,staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.inputWord(item)}}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('div',{staticClass:"big-button",on:{"click":function($event){$event.stopPropagation();return _vm.deleteOne()}}},[_vm._t("backspace",[_c('span',{staticClass:"icon-delete"},[_vm._v("⇦")])])],2)])])]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/car-plate-keyboard/car-plate-keyboard.vue?vue&type=template&id=1f26570f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/car-plate-keyboard/car-plate-keyboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var car_plate_keyboardvue_type_script_lang_js_ = ({
  name: 'car-plate-keyboard',
  props: {
    value: {
      type: String,
      default: ''
    },
    openKeyboardOnInit: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    previewOnKeyboard: {
      type: Boolean,
      default: true
    },
    checkInputBlocked: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      placeholderDom: null,
      keybordType: '字',
      inputValue: [],
      visible: false,
      wordList: [
        '京',
        '津',
        '渝',
        '沪',
        '冀',
        '晋',
        '辽',
        '吉',
        '黑',
        '苏',
        '浙',
        '皖',
        '闽',
        '赣',
        '鲁',
        '豫',
        '鄂',
        '湘',
        '粤',
        '琼',
        '川',
        '贵',
        '云',
        '陕',
        '甘',
        '青',
        '蒙',
        '桂',
        '宁',
        '新',
        '藏',
        '使',
        '领',
        '警',
        '学',
        '港',
        '澳'
      ],
      abcList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
    }
  },
  computed: {
    _overlay() {
      return this.visible && this.overlay
    },
    judgeList() {
      if (this.keybordType === 'ABC') {
        return this.abcList.slice(29, 36)
      } else {
        return this.wordList.slice(30, 37)
      }
    },
    newEnergy() {
      return this.inputValue.length === 8
    }
  },
  methods: {
    init() {
      this.visible = this.openKeyboardOnInit
      this.inputValue = this.value.split('')
    },
    isActive(index) {
      return this.inputValue.length === index - 1
    },
    isLastBlock(index) {
      return index === 8 && this.isActive(index)
    },
    // 键盘类型切换
    toggle() {
      if (this.inputValue.length === 0 || (this.inputValue.length > 0 && this.inputValue.length <= 8)) return
      this.keybordType = this.keybordType === 'ABC' ? '字' : 'ABC'
    },
    // 文字输入
    inputWord(word) {
      if (this.inputValue.length === 8) return
      this.inputValue.push(word)
    },
    // 删除一个字符
    deleteOne() {
      this.inputValue.pop()
    },
    closeByClickOverlay() {
      if (!this.closeOnClickOverlay) return
      this.cancel()
    },
    // 取消
    cancel() {
      this.visible = false
      // this.inputValue = []
      this.$emit('cancel', this.inputValue.join(''))
    },
    // 完成
    submit() {
      if (this.inputValue.length < 7) return
      this.visible = false
      this.$emit('submit', this.inputValue.join(''))
    },
    // 打开键盘
    open() {
      if (this.readonly) return
      this.visible = true
    },
    // 判断展示框是否被键盘挡住
    checkInputLocation(visible) {
      if (!this.checkInputBlocked) return
      if (visible) {
        const clientHeight = document.documentElement.clientHeight
        const scrollHeight = document.documentElement.scrollHeight
        const inputTopHeight = this.$refs.inputBlock.getBoundingClientRect().top
        const inputHeight = this.$refs.inputBlock.scrollHeight
        //如果键盘被挡住，并且页面没有滚动条
        if (inputHeight + 250 + inputTopHeight >= clientHeight && scrollHeight === clientHeight) {
          this.placeholderDom.style.display = 'block'
        }
        //键盘唤醒并且键盘挡住输入框,同时页面无滚动条时，占位块展示出来从而使页面可以通过scrllTo()来滚动
        window.scrollTo(0, 250)
      } else {
        document.body.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
        this.placeholderDom.style.display = 'none'
      }
    },
    createPlaceholderDom() {
      if (!this.checkInputBlocked) return
      this.placeholderDom = document.createElement('div')
      this.placeholderDom.className = 'placeholder'
      this.placeholderDom.style.cssText = 'height: 260px;width: 100%;background: red;opacity:0'
      this.placeholderDom.style.display = 'none'
      document.body.appendChild(this.placeholderDom)
    }
  },
  created() {
    this.init()
    this.createPlaceholderDom()
  },
  watch: {
    value(value = '') {
      this.inputValue = value.split('')
    },
    inputValue(key) {
      if (this.inputValue.length === 0) this.keybordType = '字'
      if (this.inputValue.length > 0 && this.inputValue.length <= 7) this.keybordType = 'ABC'
    },
    visible(bool) {
      this.checkInputLocation(bool)
    }
  }
});

// CONCATENATED MODULE: ./packages/car-plate-keyboard/car-plate-keyboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var car_plate_keyboard_car_plate_keyboardvue_type_script_lang_js_ = (car_plate_keyboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/car-plate-keyboard/car-plate-keyboard.vue?vue&type=style&index=0&id=1f26570f&scoped=true&lang=less&
var car_plate_keyboardvue_type_style_index_0_id_1f26570f_scoped_true_lang_less_ = __webpack_require__("56d5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/car-plate-keyboard/car-plate-keyboard.vue






/* normalize component */

var component = normalizeComponent(
  car_plate_keyboard_car_plate_keyboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1f26570f",
  null
  
)

/* harmony default export */ var car_plate_keyboard = (component.exports);
// CONCATENATED MODULE: ./packages/car-plate-keyboard/index.js


car_plate_keyboard.install = function (Vue) {
  Vue.component(car_plate_keyboard.name, car_plate_keyboard)
}

/* harmony default export */ var packages_car_plate_keyboard = (car_plate_keyboard);  
// CONCATENATED MODULE: ./packages/index.js
// 导入车牌号输入组件


// 组件列表
const components = [packages_car_plate_keyboard]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  if(install.installed) return;

  // 注册全局组件
  components.map(component=>Vue.component(component.name,component))
}

//判断是否直接引入组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  carPlateKeyboard: packages_car_plate_keyboard
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });