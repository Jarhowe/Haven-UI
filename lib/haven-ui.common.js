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

/***/ "114f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./packages/row/src/row.jsx
// row
/* harmony default export */ var row = ({
    name: 'haRow',
    componentName: 'HaRow',
    props: {
        // 渲染成html的标签, 默认div
        tag: {
            type: String,
            default: 'div'
        },
        type: String, // flex
        // flex布局中align属性
        align: {
            type: String,
            default: 'top' // top, middle, bottom
        },
        // flex布局中justify属性
        justify: {
            type: String,
            default: 'start' // center, end, space-between, space-around
        },
        // 间隔
        gutter: Number
    },
    computed: {
        // 控制左右margin，用于抵消col的padding，使用gutter自动计算实际左右margin
        gutterStyle() {
            let styleObj = {};
            if(this.gutter) {
                styleObj.marginLeft = `-${this.gutter / 2}px`;
                styleObj.marginRight = styleObj.marginLeft 
            }
            return styleObj;
        }
    },
    render(h) {
        const {type, align, justify, gutterStyle} = this;
        return h(this.tag, {
            class: [
                'ha-row',
                {'ha-row_flex': type === 'flex'},
                justify !== 'start' ? `is_justify_${justify}` : null,
                align !== 'top' ? `is_align_${align}` : null
            ],
            style: gutterStyle
        }, this.$slots.default)
    }
});
// CONCATENATED MODULE: ./packages/row/index.js


row.install = function(Vue) {
    Vue.component(row.name, row);
}

/* harmony default export */ var packages_row = __webpack_exports__["default"] = (row);

/***/ }),

/***/ "1a7d":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./button/index.js": "8b09",
	"./col/index.js": "e8b7",
	"./index.js": "3a0d",
	"./row/index.js": "114f"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "1a7d";

/***/ }),

/***/ "3a0d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const components = []
const componentsContext = __webpack_require__("1a7d")
for (const componentPath of componentsContext.keys()) {
    if(componentPath === './index.js') continue;
    const componentConfig = componentsContext(componentPath);
    const componentItem = componentConfig.default || componentConfig;
    components.push(componentItem);
}

const install = function(vm) {
    if(install.installer) return;
    // 注册所有组件
    components.forEach(component => {
        vm.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const packagesObj = {};
for (const componentItem of components) {
    let itemName = componentItem.name;
    itemName = itemName.replace(/^ha/, '');
    packagesObj[itemName] = componentItem;
}
console.log({install, ...packagesObj});

/* harmony default export */ __webpack_exports__["default"] = ({install, ...packagesObj});

/***/ }),

/***/ "8b09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./packages/button/src/button.jsx
// button
/* harmony default export */ var src_button = ({
    name: 'haButton',
    props: {
        // 类型
        type: {
            type: String,
            default: 'default' // default [默认]、primary [主要]、success [成功]、warning [警告]、danger [取消]、text [文本]
        },
        // 大小
        size: String, // medium、small、mini
        // 按钮原生type属性
        nativeType: {
            type: String,
            default: 'button' // button / submit / reset
        },
        // disabled
        disabled: Boolean,
        // loading
        loading: Boolean,
        // 页面加载时给按钮自动获取焦点
        autofocus: Boolean
    },
    computed: {
        buttonDisabled() {
            return this.disabled;
        },
        buttonSize() {
            return this.size;
        }
    },
    render(h) {
        const {type, nativeType, loading, autofocus, buttonDisabled, buttonSize} = this;
        return h('button', {
            domProps: {
                type: nativeType,
                autofocus: autofocus,
                disabled: buttonDisabled || loading
            },
            class: [
                'ha-button', 
                type ? 'ha-button_' + type : '',
                buttonSize  ? 'ha-button_' + buttonSize : '',
                { 
                    'is_disabled': buttonDisabled, 
                    'is_loading': loading 
                }
            ],
            on: {
                click: event => this.$emit('click', event)
            }
        }, [
            h('span', this.$slots.default)
        ])
    }
});
// CONCATENATED MODULE: ./packages/button/index.js


src_button.install = function(Vue) {
    Vue.component(src_button.name, src_button);
}

/* harmony default export */ var packages_button = __webpack_exports__["default"] = (src_button);

/***/ }),

/***/ "e8b7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./packages/col/src/col.jsx
/* harmony default export */ var col = ({
    name: 'haCol',

    props: {
        // 渲染成html的标签, 默认div
        tag: {
            type: String,
            default: 'div'
        },
        // 组件占父容器的列数，总列数为24。如果设置为0，渲染出来为display: none;
        span: {
            type: Number,
            default: 24
        }
    },
    computed: {
        // 获取el-row的getter值
        parentGutter() {
            const parent = this.$parent;
            // 循环查找HaRow组件名
            while(parent && parent.$options.componentName !== 'HaRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        }
    },
    render(h) {
        let classList = [];
        let style = {};
        // 通过gutter计算左右padding， 达到分隔col的目的
        if(this.parentGutter) {
            style.paddingLeft = this.parentGutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }
        // 处理布局相关
        ['span'].forEach(prop => {
            if(this[prop] || this[prop] === 0) {
                const propItem = prop !== 'span' ? `ha-col-${prop}_${this[prop]}` : `ha-col-${this[prop]}`;
                classList.push(propItem)
            }
        })

        return h(this.tag, {
            class: ['ha-col', ...classList],
            style
        }, this.$slots.default);
    }
});
// CONCATENATED MODULE: ./packages/col/index.js


col.install = function(Vue) {
    Vue.component(col.name, col);
}

/* harmony default export */ var packages_col = __webpack_exports__["default"] = (col);

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./packages/index.js
var packages_0 = __webpack_require__("3a0d");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0["default"]);



/***/ })

/******/ });