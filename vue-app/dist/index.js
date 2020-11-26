/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.g, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof __webpack_require__.g !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = __webpack_require__.g['process'] && __webpack_require__.g['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ( true && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ( true && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
     true && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (true) {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (true) {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ( true && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (true) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ( true && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (true) {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (true) {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = (key in target);
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
       true && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (true) {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (true) {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
       true && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (true) {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
     true && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ( true && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
      }

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
       true && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( true ? "timeout (" + res.timeout + "ms)" : 0);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (true) {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (true) {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (true) {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (true) {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true ? expOrFn.toString() : 0; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
       true && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (true) {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {} // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
     true && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
       true && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ( true && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ( true && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (true) {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (true) {
      initProxy(vm);
    } else {} // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (true) {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.12';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
       true && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (true) {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecessary `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
     true && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ( true && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ( true && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (true) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ( true && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");


new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_0__.default)
}).$mount('#vueWp');

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& .render */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& .staticRenderFns */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*******************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export staticRenderFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", [_vm._v("Hello World!")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ normalizeComponent
/* harmony export */ });
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtYXBwL3NyYy9BcHAudnVlIiwid2VicGFjazovL3Z1ZS1hcHAvLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLmpzIiwid2VicGFjazovL3Z1ZS1hcHAvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly92dWUtYXBwLy4vc3JjL0FwcC52dWUiLCJ3ZWJwYWNrOi8vdnVlLWFwcC8uL3NyYy9BcHAudnVlP2IzOWIiLCJ3ZWJwYWNrOi8vdnVlLWFwcC8uL3NyYy9BcHAudnVlPzlkY2EiLCJ3ZWJwYWNrOi8vdnVlLWFwcC8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vdnVlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92dWUtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92dWUtYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdnVlLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Z1ZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92dWUtYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJlbXB0eU9iamVjdCIsIk9iamVjdCIsImZyZWV6ZSIsImlzVW5kZWYiLCJ2IiwidW5kZWZpbmVkIiwiaXNEZWYiLCJpc1RydWUiLCJpc0ZhbHNlIiwiaXNQcmltaXRpdmUiLCJ2YWx1ZSIsImlzT2JqZWN0Iiwib2JqIiwiX3RvU3RyaW5nIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJ0b1Jhd1R5cGUiLCJjYWxsIiwic2xpY2UiLCJpc1BsYWluT2JqZWN0IiwiaXNSZWdFeHAiLCJpc1ZhbGlkQXJyYXlJbmRleCIsInZhbCIsIm4iLCJwYXJzZUZsb2F0IiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwiaXNGaW5pdGUiLCJpc1Byb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJBcnJheSIsImlzQXJyYXkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9OdW1iZXIiLCJpc05hTiIsIm1ha2VNYXAiLCJzdHIiLCJleHBlY3RzTG93ZXJDYXNlIiwibWFwIiwiY3JlYXRlIiwibGlzdCIsInNwbGl0IiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiaXNCdWlsdEluVGFnIiwiaXNSZXNlcnZlZEF0dHJpYnV0ZSIsInJlbW92ZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsImtleSIsImNhY2hlZCIsImZuIiwiY2FjaGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZSIsImNoYXJBdCIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwicG9seWZpbGxCaW5kIiwiY3R4IiwiYm91bmRGbiIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbGVuZ3RoIiwibmF0aXZlQmluZCIsImJpbmQiLCJGdW5jdGlvbiIsInRvQXJyYXkiLCJzdGFydCIsInJldCIsImV4dGVuZCIsInRvIiwiX2Zyb20iLCJ0b09iamVjdCIsInJlcyIsIm5vb3AiLCJiIiwibm8iLCJpZGVudGl0eSIsImxvb3NlRXF1YWwiLCJpc09iamVjdEEiLCJpc09iamVjdEIiLCJpc0FycmF5QSIsImlzQXJyYXlCIiwiZXZlcnkiLCJlIiwiRGF0ZSIsImdldFRpbWUiLCJrZXlzQSIsImtleXMiLCJrZXlzQiIsImxvb3NlSW5kZXhPZiIsIm9uY2UiLCJjYWxsZWQiLCJTU1JfQVRUUiIsIkFTU0VUX1RZUEVTIiwiTElGRUNZQ0xFX0hPT0tTIiwiY29uZmlnIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwic2lsZW50IiwicHJvZHVjdGlvblRpcCIsInByb2Nlc3MiLCJkZXZ0b29scyIsInBlcmZvcm1hbmNlIiwiZXJyb3JIYW5kbGVyIiwid2FybkhhbmRsZXIiLCJpZ25vcmVkRWxlbWVudHMiLCJrZXlDb2RlcyIsImlzUmVzZXJ2ZWRUYWciLCJpc1Jlc2VydmVkQXR0ciIsImlzVW5rbm93bkVsZW1lbnQiLCJnZXRUYWdOYW1lc3BhY2UiLCJwYXJzZVBsYXRmb3JtVGFnTmFtZSIsIm11c3RVc2VQcm9wIiwiYXN5bmMiLCJfbGlmZWN5Y2xlSG9va3MiLCJ1bmljb2RlUmVnRXhwIiwiaXNSZXNlcnZlZCIsImNoYXJDb2RlQXQiLCJkZWYiLCJlbnVtZXJhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImJhaWxSRSIsIlJlZ0V4cCIsInNvdXJjZSIsInBhcnNlUGF0aCIsInBhdGgiLCJ0ZXN0Iiwic2VnbWVudHMiLCJoYXNQcm90byIsImluQnJvd3NlciIsIndpbmRvdyIsImluV2VleCIsIldYRW52aXJvbm1lbnQiLCJwbGF0Zm9ybSIsIndlZXhQbGF0Zm9ybSIsIlVBIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNJRSIsImlzSUU5IiwiaXNFZGdlIiwiaXNBbmRyb2lkIiwiaXNJT1MiLCJpc0Nocm9tZSIsImlzUGhhbnRvbUpTIiwiaXNGRiIsIm1hdGNoIiwibmF0aXZlV2F0Y2giLCJ3YXRjaCIsInN1cHBvcnRzUGFzc2l2ZSIsIm9wdHMiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2lzU2VydmVyIiwiaXNTZXJ2ZXJSZW5kZXJpbmciLCJnbG9iYWwiLCJlbnYiLCJWVUVfRU5WIiwiX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsImlzTmF0aXZlIiwiQ3RvciIsImhhc1N5bWJvbCIsIlN5bWJvbCIsIlJlZmxlY3QiLCJvd25LZXlzIiwiX1NldCIsIlNldCIsInNldCIsImhhcyIsImFkZCIsImNsZWFyIiwid2FybiIsInRpcCIsImdlbmVyYXRlQ29tcG9uZW50VHJhY2UiLCJmb3JtYXRDb21wb25lbnROYW1lIiwiaGFzQ29uc29sZSIsImNvbnNvbGUiLCJjbGFzc2lmeVJFIiwiY2xhc3NpZnkiLCJtc2ciLCJ2bSIsInRyYWNlIiwiZXJyb3IiLCJpbmNsdWRlRmlsZSIsIiRyb290Iiwib3B0aW9ucyIsImNpZCIsIl9pc1Z1ZSIsIiRvcHRpb25zIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiX2NvbXBvbmVudFRhZyIsImZpbGUiLCJfX2ZpbGUiLCJyZXBlYXQiLCIkcGFyZW50IiwidHJlZSIsImN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSIsImxhc3QiLCJwdXNoIiwiam9pbiIsInVpZCIsIkRlcCIsImlkIiwic3VicyIsImFkZFN1YiIsInN1YiIsInJlbW92ZVN1YiIsImRlcGVuZCIsInRhcmdldCIsImFkZERlcCIsIm5vdGlmeSIsInNvcnQiLCJ1cGRhdGUiLCJ0YXJnZXRTdGFjayIsInB1c2hUYXJnZXQiLCJwb3BUYXJnZXQiLCJwb3AiLCJWTm9kZSIsInRhZyIsImRhdGEiLCJjaGlsZHJlbiIsInRleHQiLCJlbG0iLCJjb250ZXh0IiwiY29tcG9uZW50T3B0aW9ucyIsImFzeW5jRmFjdG9yeSIsIm5zIiwiZm5Db250ZXh0IiwiZm5PcHRpb25zIiwiZm5TY29wZUlkIiwiY29tcG9uZW50SW5zdGFuY2UiLCJwYXJlbnQiLCJyYXciLCJpc1N0YXRpYyIsImlzUm9vdEluc2VydCIsImlzQ29tbWVudCIsImlzQ2xvbmVkIiwiaXNPbmNlIiwiYXN5bmNNZXRhIiwiaXNBc3luY1BsYWNlaG9sZGVyIiwicHJvdG90eXBlQWNjZXNzb3JzIiwiY2hpbGQiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY3JlYXRlRW1wdHlWTm9kZSIsIm5vZGUiLCJjcmVhdGVUZXh0Vk5vZGUiLCJjbG9uZVZOb2RlIiwidm5vZGUiLCJjbG9uZWQiLCJhcnJheVByb3RvIiwiYXJyYXlNZXRob2RzIiwibWV0aG9kc1RvUGF0Y2giLCJmb3JFYWNoIiwibWV0aG9kIiwib3JpZ2luYWwiLCJtdXRhdG9yIiwiYXJncyIsImxlbiIsInJlc3VsdCIsIm9iIiwiX19vYl9fIiwiaW5zZXJ0ZWQiLCJvYnNlcnZlQXJyYXkiLCJkZXAiLCJhcnJheUtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwic2hvdWxkT2JzZXJ2ZSIsInRvZ2dsZU9ic2VydmluZyIsIk9ic2VydmVyIiwidm1Db3VudCIsInByb3RvQXVnbWVudCIsImNvcHlBdWdtZW50Iiwid2FsayIsImRlZmluZVJlYWN0aXZlJCQxIiwiaXRlbXMiLCJvYnNlcnZlIiwic3JjIiwiX19wcm90b19fIiwiYXNSb290RGF0YSIsImlzRXh0ZW5zaWJsZSIsImN1c3RvbVNldHRlciIsInNoYWxsb3ciLCJwcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldHRlciIsInNldHRlciIsImNoaWxkT2IiLCJyZWFjdGl2ZUdldHRlciIsImRlcGVuZEFycmF5IiwicmVhY3RpdmVTZXR0ZXIiLCJuZXdWYWwiLCJtYXgiLCJkZWwiLCJzdHJhdHMiLCJlbCIsInByb3BzRGF0YSIsImRlZmF1bHRTdHJhdCIsIm1lcmdlRGF0YSIsImZyb20iLCJ0b1ZhbCIsImZyb21WYWwiLCJtZXJnZURhdGFPckZuIiwicGFyZW50VmFsIiwiY2hpbGRWYWwiLCJtZXJnZWREYXRhRm4iLCJtZXJnZWRJbnN0YW5jZURhdGFGbiIsImluc3RhbmNlRGF0YSIsImRlZmF1bHREYXRhIiwibWVyZ2VIb29rIiwiY29uY2F0IiwiZGVkdXBlSG9va3MiLCJob29rcyIsImhvb2siLCJtZXJnZUFzc2V0cyIsImFzc2VydE9iamVjdFR5cGUiLCJ0eXBlIiwia2V5JDEiLCJwcm9wcyIsIm1ldGhvZHMiLCJpbmplY3QiLCJjb21wdXRlZCIsInByb3ZpZGUiLCJjaGVja0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwidmFsaWRhdGVDb21wb25lbnROYW1lIiwibm9ybWFsaXplUHJvcHMiLCJub3JtYWxpemVJbmplY3QiLCJub3JtYWxpemVkIiwibm9ybWFsaXplRGlyZWN0aXZlcyIsImRpcnMiLCJkaXJlY3RpdmVzIiwiZGVmJCQxIiwibWVyZ2VPcHRpb25zIiwiX2Jhc2UiLCJleHRlbmRzIiwibWl4aW5zIiwibWVyZ2VGaWVsZCIsInN0cmF0IiwicmVzb2x2ZUFzc2V0Iiwid2Fybk1pc3NpbmciLCJhc3NldHMiLCJjYW1lbGl6ZWRJZCIsIlBhc2NhbENhc2VJZCIsInZhbGlkYXRlUHJvcCIsInByb3BPcHRpb25zIiwicHJvcCIsImFic2VudCIsImJvb2xlYW5JbmRleCIsImdldFR5cGVJbmRleCIsIkJvb2xlYW4iLCJzdHJpbmdJbmRleCIsImdldFByb3BEZWZhdWx0VmFsdWUiLCJwcmV2U2hvdWxkT2JzZXJ2ZSIsImFzc2VydFByb3AiLCJkZWZhdWx0IiwiX3Byb3BzIiwiZ2V0VHlwZSIsInJlcXVpcmVkIiwidmFsaWQiLCJleHBlY3RlZFR5cGVzIiwiYXNzZXJ0ZWRUeXBlIiwiYXNzZXJ0VHlwZSIsImV4cGVjdGVkVHlwZSIsImdldEludmFsaWRUeXBlTWVzc2FnZSIsInZhbGlkYXRvciIsInNpbXBsZUNoZWNrUkUiLCJ0IiwiaXNTYW1lVHlwZSIsIm1lc3NhZ2UiLCJyZWNlaXZlZFR5cGUiLCJleHBlY3RlZFZhbHVlIiwic3R5bGVWYWx1ZSIsInJlY2VpdmVkVmFsdWUiLCJpc0V4cGxpY2FibGUiLCJpc0Jvb2xlYW4iLCJOdW1iZXIiLCJleHBsaWNpdFR5cGVzIiwic29tZSIsImVsZW0iLCJoYW5kbGVFcnJvciIsImVyciIsImluZm8iLCJjdXIiLCJlcnJvckNhcHR1cmVkIiwiY2FwdHVyZSIsImdsb2JhbEhhbmRsZUVycm9yIiwiaW52b2tlV2l0aEVycm9ySGFuZGxpbmciLCJoYW5kbGVyIiwiX2hhbmRsZWQiLCJsb2dFcnJvciIsImlzVXNpbmdNaWNyb1Rhc2siLCJjYWxsYmFja3MiLCJwZW5kaW5nIiwiZmx1c2hDYWxsYmFja3MiLCJjb3BpZXMiLCJ0aW1lckZ1bmMiLCJQcm9taXNlIiwicCIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiTXV0YXRpb25PYnNlcnZlciIsImNvdW50ZXIiLCJvYnNlcnZlciIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNoYXJhY3RlckRhdGEiLCJzZXRJbW1lZGlhdGUiLCJuZXh0VGljayIsImNiIiwiX3Jlc29sdmUiLCJpbml0UHJveHkiLCJhbGxvd2VkR2xvYmFscyIsIndhcm5Ob25QcmVzZW50Iiwid2FyblJlc2VydmVkUHJlZml4IiwiaGFzUHJveHkiLCJQcm94eSIsImlzQnVpbHRJbk1vZGlmaWVyIiwiaGFzSGFuZGxlciIsImlzQWxsb3dlZCIsIiRkYXRhIiwiZ2V0SGFuZGxlciIsImhhbmRsZXJzIiwicmVuZGVyIiwiX3dpdGhTdHJpcHBlZCIsIl9yZW5kZXJQcm94eSIsInNlZW5PYmplY3RzIiwidHJhdmVyc2UiLCJfdHJhdmVyc2UiLCJzZWVuIiwiaXNBIiwiaXNGcm96ZW4iLCJkZXBJZCIsIm1hcmsiLCJtZWFzdXJlIiwicGVyZiIsImNsZWFyTWFya3MiLCJjbGVhck1lYXN1cmVzIiwic3RhcnRUYWciLCJlbmRUYWciLCJub3JtYWxpemVFdmVudCIsInBhc3NpdmUiLCJvbmNlJCQxIiwiY3JlYXRlRm5JbnZva2VyIiwiZm5zIiwiaW52b2tlciIsImFyZ3VtZW50cyQxIiwidXBkYXRlTGlzdGVuZXJzIiwib24iLCJvbGRPbiIsInJlbW92ZSQkMSIsImNyZWF0ZU9uY2VIYW5kbGVyIiwib2xkIiwiZXZlbnQiLCJwYXJhbXMiLCJtZXJnZVZOb2RlSG9vayIsImhvb2tLZXkiLCJvbGRIb29rIiwid3JhcHBlZEhvb2siLCJtZXJnZWQiLCJleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIiwiYXR0cnMiLCJhbHRLZXkiLCJrZXlJbkxvd2VyQ2FzZSIsImNoZWNrUHJvcCIsImhhc2giLCJwcmVzZXJ2ZSIsInNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuIiwibm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVBcnJheUNoaWxkcmVuIiwiaXNUZXh0Tm9kZSIsIm5lc3RlZEluZGV4IiwibGFzdEluZGV4Iiwic2hpZnQiLCJfaXNWTGlzdCIsImluaXRQcm92aWRlIiwiX3Byb3ZpZGVkIiwiaW5pdEluamVjdGlvbnMiLCJyZXNvbHZlSW5qZWN0IiwicHJvdmlkZUtleSIsInByb3ZpZGVEZWZhdWx0IiwicmVzb2x2ZVNsb3RzIiwic2xvdHMiLCJzbG90IiwibmFtZSQxIiwiaXNXaGl0ZXNwYWNlIiwibm9ybWFsaXplU2NvcGVkU2xvdHMiLCJub3JtYWxTbG90cyIsInByZXZTbG90cyIsImhhc05vcm1hbFNsb3RzIiwiaXNTdGFibGUiLCIkc3RhYmxlIiwiJGtleSIsIl9ub3JtYWxpemVkIiwiJGhhc05vcm1hbCIsIm5vcm1hbGl6ZVNjb3BlZFNsb3QiLCJrZXkkMiIsInByb3h5Tm9ybWFsU2xvdCIsInByb3h5IiwicmVuZGVyTGlzdCIsIml0ZXJhdG9yIiwibmV4dCIsImRvbmUiLCJyZW5kZXJTbG90IiwiZmFsbGJhY2siLCJiaW5kT2JqZWN0Iiwic2NvcGVkU2xvdEZuIiwiJHNjb3BlZFNsb3RzIiwibm9kZXMiLCIkc2xvdHMiLCIkY3JlYXRlRWxlbWVudCIsInJlc29sdmVGaWx0ZXIiLCJpc0tleU5vdE1hdGNoIiwiZXhwZWN0IiwiYWN0dWFsIiwiY2hlY2tLZXlDb2RlcyIsImV2ZW50S2V5Q29kZSIsImJ1aWx0SW5LZXlDb2RlIiwiZXZlbnRLZXlOYW1lIiwiYnVpbHRJbktleU5hbWUiLCJtYXBwZWRLZXlDb2RlIiwiYmluZE9iamVjdFByb3BzIiwiYXNQcm9wIiwiaXNTeW5jIiwibG9vcCIsImRvbVByb3BzIiwiY2FtZWxpemVkS2V5IiwiaHlwaGVuYXRlZEtleSIsIiRldmVudCIsInJlbmRlclN0YXRpYyIsImlzSW5Gb3IiLCJfc3RhdGljVHJlZXMiLCJzdGF0aWNSZW5kZXJGbnMiLCJtYXJrU3RhdGljIiwibWFya09uY2UiLCJtYXJrU3RhdGljTm9kZSIsImJpbmRPYmplY3RMaXN0ZW5lcnMiLCJleGlzdGluZyIsIm91cnMiLCJyZXNvbHZlU2NvcGVkU2xvdHMiLCJoYXNEeW5hbWljS2V5cyIsImNvbnRlbnRIYXNoS2V5IiwiYmluZER5bmFtaWNLZXlzIiwiYmFzZU9iaiIsInZhbHVlcyIsInByZXBlbmRNb2RpZmllciIsInN5bWJvbCIsImluc3RhbGxSZW5kZXJIZWxwZXJzIiwiX28iLCJfbiIsIl9zIiwiX2wiLCJfdCIsIl9xIiwiX2kiLCJfbSIsIl9mIiwiX2siLCJfYiIsIl92IiwiX2UiLCJfdSIsIl9nIiwiX2QiLCJfcCIsIkZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IiwidGhpcyQxIiwiY29udGV4dFZtIiwiX29yaWdpbmFsIiwiaXNDb21waWxlZCIsIl9jb21waWxlZCIsIm5lZWROb3JtYWxpemF0aW9uIiwibGlzdGVuZXJzIiwiaW5qZWN0aW9ucyIsInNjb3BlZFNsb3RzIiwiX3Njb3BlSWQiLCJfYyIsImQiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCIsIm1lcmdlUHJvcHMiLCJyZW5kZXJDb250ZXh0IiwiY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCIsInZub2RlcyIsImNsb25lIiwiZGV2dG9vbHNNZXRhIiwiY29tcG9uZW50Vk5vZGVIb29rcyIsImluaXQiLCJoeWRyYXRpbmciLCJfaXNEZXN0cm95ZWQiLCJrZWVwQWxpdmUiLCJtb3VudGVkTm9kZSIsInByZXBhdGNoIiwiY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZSIsImFjdGl2ZUluc3RhbmNlIiwiJG1vdW50Iiwib2xkVm5vZGUiLCJ1cGRhdGVDaGlsZENvbXBvbmVudCIsImluc2VydCIsIl9pc01vdW50ZWQiLCJjYWxsSG9vayIsInF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50IiwiYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImRlc3Ryb3kiLCIkZGVzdHJveSIsImRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCIsImhvb2tzVG9NZXJnZSIsImNyZWF0ZUNvbXBvbmVudCIsImJhc2VDdG9yIiwicmVzb2x2ZUFzeW5jQ29tcG9uZW50IiwiY3JlYXRlQXN5bmNQbGFjZWhvbGRlciIsInJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMiLCJtb2RlbCIsInRyYW5zZm9ybU1vZGVsIiwiZnVuY3Rpb25hbCIsIm5hdGl2ZU9uIiwiYWJzdHJhY3QiLCJpbnN0YWxsQ29tcG9uZW50SG9va3MiLCJfaXNDb21wb25lbnQiLCJfcGFyZW50Vm5vZGUiLCJpbmxpbmVUZW1wbGF0ZSIsInRvTWVyZ2UiLCJfbWVyZ2VkIiwibWVyZ2VIb29rJDEiLCJmMSIsImYyIiwiY2FsbGJhY2siLCJTSU1QTEVfTk9STUFMSVpFIiwiQUxXQVlTX05PUk1BTElaRSIsIm5vcm1hbGl6YXRpb25UeXBlIiwiYWx3YXlzTm9ybWFsaXplIiwiX2NyZWF0ZUVsZW1lbnQiLCJpcyIsIiR2bm9kZSIsInByZSIsImFwcGx5TlMiLCJyZWdpc3RlckRlZXBCaW5kaW5ncyIsImZvcmNlIiwic3R5bGUiLCJjbGFzcyIsImluaXRSZW5kZXIiLCJfdm5vZGUiLCJwYXJlbnRWbm9kZSIsIl9yZW5kZXJDaGlsZHJlbiIsInBhcmVudERhdGEiLCJpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQiLCJfcGFyZW50TGlzdGVuZXJzIiwiY3VycmVudFJlbmRlcmluZ0luc3RhbmNlIiwicmVuZGVyTWl4aW4iLCJWdWUiLCIkbmV4dFRpY2siLCJfcmVuZGVyIiwicmVmIiwicmVuZGVyRXJyb3IiLCJlbnN1cmVDdG9yIiwiY29tcCIsImJhc2UiLCJfX2VzTW9kdWxlIiwidG9TdHJpbmdUYWciLCJmYWN0b3J5IiwiZXJyb3JDb21wIiwicmVzb2x2ZWQiLCJvd25lciIsIm93bmVycyIsImxvYWRpbmciLCJsb2FkaW5nQ29tcCIsInN5bmMiLCJ0aW1lckxvYWRpbmciLCJ0aW1lclRpbWVvdXQiLCIkb24iLCJmb3JjZVJlbmRlciIsInJlbmRlckNvbXBsZXRlZCIsIiRmb3JjZVVwZGF0ZSIsImNsZWFyVGltZW91dCIsInJlamVjdCIsInJlYXNvbiIsImNvbXBvbmVudCIsImRlbGF5IiwidGltZW91dCIsImdldEZpcnN0Q29tcG9uZW50Q2hpbGQiLCJpbml0RXZlbnRzIiwiX2V2ZW50cyIsIl9oYXNIb29rRXZlbnQiLCJ1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMiLCJyZW1vdmUkMSIsIiRvZmYiLCJfdGFyZ2V0Iiwib25jZUhhbmRsZXIiLCJvbGRMaXN0ZW5lcnMiLCJldmVudHNNaXhpbiIsImhvb2tSRSIsIiRvbmNlIiwiaSQxIiwiY2JzIiwiJGVtaXQiLCJsb3dlckNhc2VFdmVudCIsInNldEFjdGl2ZUluc3RhbmNlIiwicHJldkFjdGl2ZUluc3RhbmNlIiwiaW5pdExpZmVjeWNsZSIsIiRjaGlsZHJlbiIsIiRyZWZzIiwiX3dhdGNoZXIiLCJfaW5hY3RpdmUiLCJfZGlyZWN0SW5hY3RpdmUiLCJfaXNCZWluZ0Rlc3Ryb3llZCIsImxpZmVjeWNsZU1peGluIiwiX3VwZGF0ZSIsInByZXZFbCIsIiRlbCIsInByZXZWbm9kZSIsInJlc3RvcmVBY3RpdmVJbnN0YW5jZSIsIl9fcGF0Y2hfXyIsIl9fdnVlX18iLCJ0ZWFyZG93biIsIl93YXRjaGVycyIsIl9kYXRhIiwibW91bnRDb21wb25lbnQiLCJ0ZW1wbGF0ZSIsInVwZGF0ZUNvbXBvbmVudCIsIl9uYW1lIiwiX3VpZCIsIldhdGNoZXIiLCJiZWZvcmUiLCJyZW5kZXJDaGlsZHJlbiIsIm5ld1Njb3BlZFNsb3RzIiwib2xkU2NvcGVkU2xvdHMiLCJoYXNEeW5hbWljU2NvcGVkU2xvdCIsIm5lZWRzRm9yY2VVcGRhdGUiLCIkYXR0cnMiLCIkbGlzdGVuZXJzIiwicHJvcEtleXMiLCJfcHJvcEtleXMiLCJpc0luSW5hY3RpdmVUcmVlIiwiZGlyZWN0IiwiaiIsIk1BWF9VUERBVEVfQ09VTlQiLCJxdWV1ZSIsImFjdGl2YXRlZENoaWxkcmVuIiwiY2lyY3VsYXIiLCJ3YWl0aW5nIiwiZmx1c2hpbmciLCJyZXNldFNjaGVkdWxlclN0YXRlIiwiY3VycmVudEZsdXNoVGltZXN0YW1wIiwiZ2V0Tm93Iiwibm93IiwiY3JlYXRlRXZlbnQiLCJ0aW1lU3RhbXAiLCJmbHVzaFNjaGVkdWxlclF1ZXVlIiwid2F0Y2hlciIsInJ1biIsInVzZXIiLCJleHByZXNzaW9uIiwiYWN0aXZhdGVkUXVldWUiLCJ1cGRhdGVkUXVldWUiLCJjYWxsQWN0aXZhdGVkSG9va3MiLCJjYWxsVXBkYXRlZEhvb2tzIiwiZW1pdCIsInF1ZXVlV2F0Y2hlciIsInVpZCQyIiwiZXhwT3JGbiIsImlzUmVuZGVyV2F0Y2hlciIsImRlZXAiLCJsYXp5IiwiYWN0aXZlIiwiZGlydHkiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImNsZWFudXBEZXBzIiwidG1wIiwib2xkVmFsdWUiLCJldmFsdWF0ZSIsInNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiIsInNvdXJjZUtleSIsInByb3h5R2V0dGVyIiwicHJveHlTZXR0ZXIiLCJpbml0U3RhdGUiLCJpbml0UHJvcHMiLCJpbml0TWV0aG9kcyIsImluaXREYXRhIiwiaW5pdENvbXB1dGVkIiwiaW5pdFdhdGNoIiwicHJvcHNPcHRpb25zIiwiaXNSb290IiwiZ2V0RGF0YSIsImNvbXB1dGVkV2F0Y2hlck9wdGlvbnMiLCJ3YXRjaGVycyIsIl9jb21wdXRlZFdhdGNoZXJzIiwiaXNTU1IiLCJ1c2VyRGVmIiwiZGVmaW5lQ29tcHV0ZWQiLCJzaG91bGRDYWNoZSIsImNyZWF0ZUNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlR2V0dGVySW52b2tlciIsImNvbXB1dGVkR2V0dGVyIiwiY3JlYXRlV2F0Y2hlciIsIiR3YXRjaCIsInN0YXRlTWl4aW4iLCJkYXRhRGVmIiwicHJvcHNEZWYiLCIkc2V0IiwiJGRlbGV0ZSIsImltbWVkaWF0ZSIsInVud2F0Y2hGbiIsInVpZCQzIiwiaW5pdE1peGluIiwiX2luaXQiLCJpbml0SW50ZXJuYWxDb21wb25lbnQiLCJfc2VsZiIsInZub2RlQ29tcG9uZW50T3B0aW9ucyIsInN1cGVyIiwic3VwZXJPcHRpb25zIiwiY2FjaGVkU3VwZXJPcHRpb25zIiwibW9kaWZpZWRPcHRpb25zIiwicmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJtb2RpZmllZCIsImxhdGVzdCIsInNlYWxlZCIsInNlYWxlZE9wdGlvbnMiLCJpbml0VXNlIiwidXNlIiwicGx1Z2luIiwiaW5zdGFsbGVkUGx1Z2lucyIsIl9pbnN0YWxsZWRQbHVnaW5zIiwidW5zaGlmdCIsImluc3RhbGwiLCJpbml0TWl4aW4kMSIsIm1peGluIiwiaW5pdEV4dGVuZCIsIlN1cGVyIiwiU3VwZXJJZCIsImNhY2hlZEN0b3JzIiwiX0N0b3IiLCJTdWIiLCJWdWVDb21wb25lbnQiLCJpbml0UHJvcHMkMSIsImluaXRDb21wdXRlZCQxIiwiQ29tcCIsImluaXRBc3NldFJlZ2lzdGVycyIsImRlZmluaXRpb24iLCJnZXRDb21wb25lbnROYW1lIiwibWF0Y2hlcyIsInBhdHRlcm4iLCJwcnVuZUNhY2hlIiwia2VlcEFsaXZlSW5zdGFuY2UiLCJmaWx0ZXIiLCJjYWNoZWROb2RlIiwicHJ1bmVDYWNoZUVudHJ5IiwiY3VycmVudCIsImNhY2hlZCQkMSIsInBhdHRlcm5UeXBlcyIsIktlZXBBbGl2ZSIsImluY2x1ZGUiLCJleGNsdWRlIiwiY3JlYXRlZCIsImRlc3Ryb3llZCIsIm1vdW50ZWQiLCJyZWYkMSIsInBhcnNlSW50IiwiYnVpbHRJbkNvbXBvbmVudHMiLCJpbml0R2xvYmFsQVBJIiwiY29uZmlnRGVmIiwidXRpbCIsImRlZmluZVJlYWN0aXZlIiwiZGVsZXRlIiwib2JzZXJ2YWJsZSIsInNzckNvbnRleHQiLCJ2ZXJzaW9uIiwiYWNjZXB0VmFsdWUiLCJhdHRyIiwiaXNFbnVtZXJhdGVkQXR0ciIsImlzVmFsaWRDb250ZW50RWRpdGFibGVWYWx1ZSIsImNvbnZlcnRFbnVtZXJhdGVkVmFsdWUiLCJpc0ZhbHN5QXR0clZhbHVlIiwiaXNCb29sZWFuQXR0ciIsInhsaW5rTlMiLCJpc1hsaW5rIiwiZ2V0WGxpbmtQcm9wIiwiZ2VuQ2xhc3NGb3JWbm9kZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGUiLCJtZXJnZUNsYXNzRGF0YSIsInJlbmRlckNsYXNzIiwic3RhdGljQ2xhc3MiLCJkeW5hbWljQ2xhc3MiLCJzdHJpbmdpZnlDbGFzcyIsInN0cmluZ2lmeUFycmF5Iiwic3RyaW5naWZ5T2JqZWN0Iiwic3RyaW5naWZpZWQiLCJuYW1lc3BhY2VNYXAiLCJzdmciLCJtYXRoIiwiaXNIVE1MVGFnIiwiaXNTVkciLCJ1bmtub3duRWxlbWVudENhY2hlIiwiSFRNTFVua25vd25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJpc1RleHRJbnB1dFR5cGUiLCJxdWVyeSIsInNlbGVjdGVkIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQkMSIsInRhZ05hbWUiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWVzcGFjZSIsImNyZWF0ZUNvbW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJuZXdOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJuZXh0U2libGluZyIsInNldFRleHRDb250ZW50IiwidGV4dENvbnRlbnQiLCJzZXRTdHlsZVNjb3BlIiwic2NvcGVJZCIsIm5vZGVPcHMiLCJyZWdpc3RlclJlZiIsImlzUmVtb3ZhbCIsInJlZnMiLCJyZWZJbkZvciIsImVtcHR5Tm9kZSIsInNhbWVWbm9kZSIsInNhbWVJbnB1dFR5cGUiLCJ0eXBlQSIsInR5cGVCIiwiY3JlYXRlS2V5VG9PbGRJZHgiLCJiZWdpbklkeCIsImVuZElkeCIsImNyZWF0ZVBhdGNoRnVuY3Rpb24iLCJiYWNrZW5kIiwibW9kdWxlcyIsImVtcHR5Tm9kZUF0IiwiY3JlYXRlUm1DYiIsImNoaWxkRWxtIiwicmVtb3ZlTm9kZSIsImlzVW5rbm93bkVsZW1lbnQkJDEiLCJpblZQcmUiLCJpZ25vcmUiLCJjcmVhdGluZ0VsbUluVlByZSIsImNyZWF0ZUVsbSIsImluc2VydGVkVm5vZGVRdWV1ZSIsInBhcmVudEVsbSIsInJlZkVsbSIsIm5lc3RlZCIsIm93bmVyQXJyYXkiLCJzZXRTY29wZSIsImNyZWF0ZUNoaWxkcmVuIiwiaW52b2tlQ3JlYXRlSG9va3MiLCJpc1JlYWN0aXZhdGVkIiwiaW5pdENvbXBvbmVudCIsInJlYWN0aXZhdGVDb21wb25lbnQiLCJwZW5kaW5nSW5zZXJ0IiwiaXNQYXRjaGFibGUiLCJpbm5lck5vZGUiLCJ0cmFuc2l0aW9uIiwiYWN0aXZhdGUiLCJyZWYkJDEiLCJjaGVja0R1cGxpY2F0ZUtleXMiLCJhbmNlc3RvciIsImFkZFZub2RlcyIsInN0YXJ0SWR4IiwiaW52b2tlRGVzdHJveUhvb2siLCJyZW1vdmVWbm9kZXMiLCJjaCIsInJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2siLCJybSIsInVwZGF0ZUNoaWxkcmVuIiwib2xkQ2giLCJuZXdDaCIsInJlbW92ZU9ubHkiLCJvbGRTdGFydElkeCIsIm5ld1N0YXJ0SWR4Iiwib2xkRW5kSWR4Iiwib2xkU3RhcnRWbm9kZSIsIm9sZEVuZFZub2RlIiwibmV3RW5kSWR4IiwibmV3U3RhcnRWbm9kZSIsIm5ld0VuZFZub2RlIiwib2xkS2V5VG9JZHgiLCJpZHhJbk9sZCIsInZub2RlVG9Nb3ZlIiwiY2FuTW92ZSIsInBhdGNoVm5vZGUiLCJmaW5kSWR4SW5PbGQiLCJzZWVuS2V5cyIsImVuZCIsImh5ZHJhdGUiLCJwb3N0cGF0Y2giLCJpbnZva2VJbnNlcnRIb29rIiwiaW5pdGlhbCIsImh5ZHJhdGlvbkJhaWxlZCIsImlzUmVuZGVyZWRNb2R1bGUiLCJhc3NlcnROb2RlTWF0Y2giLCJoYXNDaGlsZE5vZGVzIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW5NYXRjaCIsImZpcnN0Q2hpbGQiLCJjaGlsZE5vZGVzIiwiZnVsbEludm9rZSIsIm5vZGVUeXBlIiwicGF0Y2giLCJpc0luaXRpYWxQYXRjaCIsImlzUmVhbEVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbGRFbG0iLCJfbGVhdmVDYiIsInBhdGNoYWJsZSIsImkkMiIsInVwZGF0ZURpcmVjdGl2ZXMiLCJ1bmJpbmREaXJlY3RpdmVzIiwiaXNDcmVhdGUiLCJpc0Rlc3Ryb3kiLCJvbGREaXJzIiwibm9ybWFsaXplRGlyZWN0aXZlcyQxIiwibmV3RGlycyIsImRpcnNXaXRoSW5zZXJ0IiwiZGlyc1dpdGhQb3N0cGF0Y2giLCJvbGREaXIiLCJkaXIiLCJjYWxsSG9vayQxIiwib2xkQXJnIiwiYXJnIiwiY29tcG9uZW50VXBkYXRlZCIsImNhbGxJbnNlcnQiLCJlbXB0eU1vZGlmaWVycyIsIm1vZGlmaWVycyIsImdldFJhd0Rpck5hbWUiLCJyYXdOYW1lIiwiYmFzZU1vZHVsZXMiLCJ1cGRhdGVBdHRycyIsImluaGVyaXRBdHRycyIsIm9sZEF0dHJzIiwic2V0QXR0ciIsInJlbW92ZUF0dHJpYnV0ZU5TIiwiYmFzZVNldEF0dHIiLCJzZXRBdHRyaWJ1dGVOUyIsIl9faWVwaCIsImJsb2NrZXIiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXBkYXRlQ2xhc3MiLCJvbGREYXRhIiwiY2xzIiwidHJhbnNpdGlvbkNsYXNzIiwiX3RyYW5zaXRpb25DbGFzc2VzIiwiX3ByZXZDbGFzcyIsImtsYXNzIiwiUkFOR0VfVE9LRU4iLCJDSEVDS0JPWF9SQURJT19UT0tFTiIsIm5vcm1hbGl6ZUV2ZW50cyIsImNoYW5nZSIsInRhcmdldCQxIiwiY3JlYXRlT25jZUhhbmRsZXIkMSIsInJlbW92ZSQyIiwidXNlTWljcm90YXNrRml4IiwiYWRkJDEiLCJhdHRhY2hlZFRpbWVzdGFtcCIsIl93cmFwcGVyIiwiY3VycmVudFRhcmdldCIsIm93bmVyRG9jdW1lbnQiLCJ1cGRhdGVET01MaXN0ZW5lcnMiLCJldmVudHMiLCJzdmdDb250YWluZXIiLCJ1cGRhdGVET01Qcm9wcyIsIm9sZFByb3BzIiwiX3ZhbHVlIiwic3RyQ3VyIiwic2hvdWxkVXBkYXRlVmFsdWUiLCJjaGVja1ZhbCIsImNvbXBvc2luZyIsImlzTm90SW5Gb2N1c0FuZERpcnR5IiwiaXNEaXJ0eVdpdGhNb2RpZmllcnMiLCJub3RJbkZvY3VzIiwiYWN0aXZlRWxlbWVudCIsIl92TW9kaWZpZXJzIiwibnVtYmVyIiwidHJpbSIsInBhcnNlU3R5bGVUZXh0IiwiY3NzVGV4dCIsImxpc3REZWxpbWl0ZXIiLCJwcm9wZXJ0eURlbGltaXRlciIsIm5vcm1hbGl6ZVN0eWxlRGF0YSIsIm5vcm1hbGl6ZVN0eWxlQmluZGluZyIsInN0YXRpY1N0eWxlIiwiYmluZGluZ1N0eWxlIiwiZ2V0U3R5bGUiLCJjaGVja0NoaWxkIiwic3R5bGVEYXRhIiwiY3NzVmFyUkUiLCJpbXBvcnRhbnRSRSIsInNldFByb3AiLCJzZXRQcm9wZXJ0eSIsIm5vcm1hbGl6ZWROYW1lIiwibm9ybWFsaXplIiwidmVuZG9yTmFtZXMiLCJlbXB0eVN0eWxlIiwiY2FwTmFtZSIsInVwZGF0ZVN0eWxlIiwib2xkU3RhdGljU3R5bGUiLCJvbGRTdHlsZUJpbmRpbmciLCJub3JtYWxpemVkU3R5bGUiLCJvbGRTdHlsZSIsIm5ld1N0eWxlIiwid2hpdGVzcGFjZVJFIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlc29sdmVUcmFuc2l0aW9uIiwiY3NzIiwiYXV0b0Nzc1RyYW5zaXRpb24iLCJlbnRlckNsYXNzIiwiZW50ZXJUb0NsYXNzIiwiZW50ZXJBY3RpdmVDbGFzcyIsImxlYXZlQ2xhc3MiLCJsZWF2ZVRvQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiaGFzVHJhbnNpdGlvbiIsIlRSQU5TSVRJT04iLCJBTklNQVRJT04iLCJ0cmFuc2l0aW9uUHJvcCIsInRyYW5zaXRpb25FbmRFdmVudCIsImFuaW1hdGlvblByb3AiLCJhbmltYXRpb25FbmRFdmVudCIsIm9udHJhbnNpdGlvbmVuZCIsIm9ud2Via2l0dHJhbnNpdGlvbmVuZCIsIm9uYW5pbWF0aW9uZW5kIiwib253ZWJraXRhbmltYXRpb25lbmQiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJuZXh0RnJhbWUiLCJhZGRUcmFuc2l0aW9uQ2xhc3MiLCJ0cmFuc2l0aW9uQ2xhc3NlcyIsInJlbW92ZVRyYW5zaXRpb25DbGFzcyIsIndoZW5UcmFuc2l0aW9uRW5kcyIsImdldFRyYW5zaXRpb25JbmZvIiwicHJvcENvdW50IiwiZW5kZWQiLCJvbkVuZCIsInRyYW5zZm9ybVJFIiwic3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EZWxheXMiLCJ0cmFuc2l0aW9uRHVyYXRpb25zIiwidHJhbnNpdGlvblRpbWVvdXQiLCJnZXRUaW1lb3V0IiwiYW5pbWF0aW9uRGVsYXlzIiwiYW5pbWF0aW9uRHVyYXRpb25zIiwiYW5pbWF0aW9uVGltZW91dCIsImhhc1RyYW5zZm9ybSIsImRlbGF5cyIsImR1cmF0aW9ucyIsInRvTXMiLCJzIiwiZW50ZXIiLCJ0b2dnbGVEaXNwbGF5IiwiY2FuY2VsbGVkIiwiX2VudGVyQ2IiLCJhcHBlYXJDbGFzcyIsImFwcGVhclRvQ2xhc3MiLCJhcHBlYXJBY3RpdmVDbGFzcyIsImJlZm9yZUVudGVyIiwiYWZ0ZXJFbnRlciIsImVudGVyQ2FuY2VsbGVkIiwiYmVmb3JlQXBwZWFyIiwiYXBwZWFyIiwiYWZ0ZXJBcHBlYXIiLCJhcHBlYXJDYW5jZWxsZWQiLCJkdXJhdGlvbiIsInRyYW5zaXRpb25Ob2RlIiwiaXNBcHBlYXIiLCJzdGFydENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJ0b0NsYXNzIiwiYmVmb3JlRW50ZXJIb29rIiwiZW50ZXJIb29rIiwiYWZ0ZXJFbnRlckhvb2siLCJlbnRlckNhbmNlbGxlZEhvb2siLCJleHBsaWNpdEVudGVyRHVyYXRpb24iLCJjaGVja0R1cmF0aW9uIiwiZXhwZWN0c0NTUyIsInVzZXJXYW50c0NvbnRyb2wiLCJnZXRIb29rQXJndW1lbnRzTGVuZ3RoIiwic2hvdyIsInBlbmRpbmdOb2RlIiwiX3BlbmRpbmciLCJpc1ZhbGlkRHVyYXRpb24iLCJsZWF2ZSIsImJlZm9yZUxlYXZlIiwiYWZ0ZXJMZWF2ZSIsImxlYXZlQ2FuY2VsbGVkIiwiZGVsYXlMZWF2ZSIsImV4cGxpY2l0TGVhdmVEdXJhdGlvbiIsInBlcmZvcm1MZWF2ZSIsImludm9rZXJGbnMiLCJfZW50ZXIiLCJwbGF0Zm9ybU1vZHVsZXMiLCJ2bW9kZWwiLCJ0cmlnZ2VyIiwiZGlyZWN0aXZlIiwiYmluZGluZyIsIl92T3B0aW9ucyIsInNldFNlbGVjdGVkIiwiZ2V0VmFsdWUiLCJvbkNvbXBvc2l0aW9uU3RhcnQiLCJvbkNvbXBvc2l0aW9uRW5kIiwicHJldk9wdGlvbnMiLCJjdXJPcHRpb25zIiwibyIsIm5lZWRSZXNldCIsImhhc05vTWF0Y2hpbmdPcHRpb24iLCJhY3R1YWxseVNldFNlbGVjdGVkIiwiaXNNdWx0aXBsZSIsIm9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwibG9jYXRlTm9kZSIsInRyYW5zaXRpb24kJDEiLCJvcmlnaW5hbERpc3BsYXkiLCJfX3ZPcmlnaW5hbERpc3BsYXkiLCJkaXNwbGF5IiwidW5iaW5kIiwicGxhdGZvcm1EaXJlY3RpdmVzIiwidHJhbnNpdGlvblByb3BzIiwibW9kZSIsImdldFJlYWxDaGlsZCIsImNvbXBPcHRpb25zIiwiZXh0cmFjdFRyYW5zaXRpb25EYXRhIiwicGxhY2Vob2xkZXIiLCJoIiwicmF3Q2hpbGQiLCJoYXNQYXJlbnRUcmFuc2l0aW9uIiwiaXNTYW1lQ2hpbGQiLCJvbGRDaGlsZCIsImlzTm90VGV4dE5vZGUiLCJpc1ZTaG93RGlyZWN0aXZlIiwiVHJhbnNpdGlvbiIsIl9sZWF2aW5nIiwib2xkUmF3Q2hpbGQiLCJkZWxheWVkTGVhdmUiLCJtb3ZlQ2xhc3MiLCJUcmFuc2l0aW9uR3JvdXAiLCJiZWZvcmVNb3VudCIsImtlcHQiLCJwcmV2Q2hpbGRyZW4iLCJyYXdDaGlsZHJlbiIsInRyYW5zaXRpb25EYXRhIiwicmVtb3ZlZCIsImMkMSIsInBvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZWQiLCJoYXNNb3ZlIiwiY2FsbFBlbmRpbmdDYnMiLCJyZWNvcmRQb3NpdGlvbiIsImFwcGx5VHJhbnNsYXRpb24iLCJfcmVmbG93IiwiYm9keSIsIm9mZnNldEhlaWdodCIsIm1vdmVkIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiX21vdmVDYiIsInByb3BlcnR5TmFtZSIsIl9oYXNNb3ZlIiwiY2xvbmVOb2RlIiwibmV3UG9zIiwib2xkUG9zIiwiZHgiLCJsZWZ0IiwiZHkiLCJ0b3AiLCJwbGF0Zm9ybUNvbXBvbmVudHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBLElBQUlBLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxDQUFsQixDLENBRUE7QUFDQTs7QUFDQSxTQUFTQyxPQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNuQixTQUFPQSxDQUFDLEtBQUtDLFNBQU4sSUFBbUJELENBQUMsS0FBSyxJQUFoQztBQUNEOztBQUVELFNBQVNFLEtBQVQsQ0FBZ0JGLENBQWhCLEVBQW1CO0FBQ2pCLFNBQU9BLENBQUMsS0FBS0MsU0FBTixJQUFtQkQsQ0FBQyxLQUFLLElBQWhDO0FBQ0Q7O0FBRUQsU0FBU0csTUFBVCxDQUFpQkgsQ0FBakIsRUFBb0I7QUFDbEIsU0FBT0EsQ0FBQyxLQUFLLElBQWI7QUFDRDs7QUFFRCxTQUFTSSxPQUFULENBQWtCSixDQUFsQixFQUFxQjtBQUNuQixTQUFPQSxDQUFDLEtBQUssS0FBYjtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTSyxXQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixTQUNFLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFDQSxPQUFPQSxLQUFQLEtBQWlCLFFBRGpCLElBRUE7QUFDQSxTQUFPQSxLQUFQLEtBQWlCLFFBSGpCLElBSUEsT0FBT0EsS0FBUCxLQUFpQixTQUxuQjtBQU9EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MsUUFBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDdEIsU0FBT0EsR0FBRyxLQUFLLElBQVIsSUFBZ0IsT0FBT0EsR0FBUCxLQUFlLFFBQXRDO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLElBQUlDLFNBQVMsR0FBR1osTUFBTSxDQUFDYSxTQUFQLENBQWlCQyxRQUFqQzs7QUFFQSxTQUFTQyxTQUFULENBQW9CTixLQUFwQixFQUEyQjtBQUN6QixTQUFPRyxTQUFTLENBQUNJLElBQVYsQ0FBZVAsS0FBZixFQUFzQlEsS0FBdEIsQ0FBNEIsQ0FBNUIsRUFBK0IsQ0FBQyxDQUFoQyxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MsYUFBVCxDQUF3QlAsR0FBeEIsRUFBNkI7QUFDM0IsU0FBT0MsU0FBUyxDQUFDSSxJQUFWLENBQWVMLEdBQWYsTUFBd0IsaUJBQS9CO0FBQ0Q7O0FBRUQsU0FBU1EsUUFBVCxDQUFtQmhCLENBQW5CLEVBQXNCO0FBQ3BCLFNBQU9TLFNBQVMsQ0FBQ0ksSUFBVixDQUFlYixDQUFmLE1BQXNCLGlCQUE3QjtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTaUIsaUJBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlDLENBQUMsR0FBR0MsVUFBVSxDQUFDQyxNQUFNLENBQUNILEdBQUQsQ0FBUCxDQUFsQjtBQUNBLFNBQU9DLENBQUMsSUFBSSxDQUFMLElBQVVHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixDQUFYLE1BQWtCQSxDQUE1QixJQUFpQ0ssUUFBUSxDQUFDTixHQUFELENBQWhEO0FBQ0Q7O0FBRUQsU0FBU08sU0FBVCxDQUFvQlAsR0FBcEIsRUFBeUI7QUFDdkIsU0FDRWhCLEtBQUssQ0FBQ2dCLEdBQUQsQ0FBTCxJQUNBLE9BQU9BLEdBQUcsQ0FBQ1EsSUFBWCxLQUFvQixVQURwQixJQUVBLE9BQU9SLEdBQUcsQ0FBQ1MsS0FBWCxLQUFxQixVQUh2QjtBQUtEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTaEIsUUFBVCxDQUFtQk8sR0FBbkIsRUFBd0I7QUFDdEIsU0FBT0EsR0FBRyxJQUFJLElBQVAsR0FDSCxFQURHLEdBRUhVLEtBQUssQ0FBQ0MsT0FBTixDQUFjWCxHQUFkLEtBQXVCSCxhQUFhLENBQUNHLEdBQUQsQ0FBYixJQUFzQkEsR0FBRyxDQUFDUCxRQUFKLEtBQWlCRixTQUE5RCxHQUNFcUIsSUFBSSxDQUFDQyxTQUFMLENBQWViLEdBQWYsRUFBb0IsSUFBcEIsRUFBMEIsQ0FBMUIsQ0FERixHQUVFRyxNQUFNLENBQUNILEdBQUQsQ0FKWjtBQUtEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNjLFFBQVQsQ0FBbUJkLEdBQW5CLEVBQXdCO0FBQ3RCLE1BQUlDLENBQUMsR0FBR0MsVUFBVSxDQUFDRixHQUFELENBQWxCO0FBQ0EsU0FBT2UsS0FBSyxDQUFDZCxDQUFELENBQUwsR0FBV0QsR0FBWCxHQUFpQkMsQ0FBeEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTZSxPQUFULENBQ0VDLEdBREYsRUFFRUMsZ0JBRkYsRUFHRTtBQUNBLE1BQUlDLEdBQUcsR0FBR3hDLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBYyxJQUFkLENBQVY7QUFDQSxNQUFJQyxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVLEdBQVYsQ0FBWDs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDcENKLE9BQUcsQ0FBQ0UsSUFBSSxDQUFDRSxDQUFELENBQUwsQ0FBSCxHQUFlLElBQWY7QUFDRDs7QUFDRCxTQUFPTCxnQkFBZ0IsR0FDbkIsVUFBVWxCLEdBQVYsRUFBZTtBQUFFLFdBQU9tQixHQUFHLENBQUNuQixHQUFHLENBQUN5QixXQUFKLEVBQUQsQ0FBVjtBQUFnQyxHQUQ5QixHQUVuQixVQUFVekIsR0FBVixFQUFlO0FBQUUsV0FBT21CLEdBQUcsQ0FBQ25CLEdBQUQsQ0FBVjtBQUFrQixHQUZ2QztBQUdEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxJQUFJMEIsWUFBWSxHQUFHVixPQUFPLENBQUMsZ0JBQUQsRUFBbUIsSUFBbkIsQ0FBMUI7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSVcsbUJBQW1CLEdBQUdYLE9BQU8sQ0FBQyw0QkFBRCxDQUFqQztBQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTWSxNQUFULENBQWlCQyxHQUFqQixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsTUFBSUQsR0FBRyxDQUFDTCxNQUFSLEVBQWdCO0FBQ2QsUUFBSU8sS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWUYsSUFBWixDQUFaOztBQUNBLFFBQUlDLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7QUFDZCxhQUFPRixHQUFHLENBQUNJLE1BQUosQ0FBV0YsS0FBWCxFQUFrQixDQUFsQixDQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxJQUFJRyxjQUFjLEdBQUd2RCxNQUFNLENBQUNhLFNBQVAsQ0FBaUIwQyxjQUF0Qzs7QUFDQSxTQUFTQyxNQUFULENBQWlCN0MsR0FBakIsRUFBc0I4QyxHQUF0QixFQUEyQjtBQUN6QixTQUFPRixjQUFjLENBQUN2QyxJQUFmLENBQW9CTCxHQUFwQixFQUF5QjhDLEdBQXpCLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MsTUFBVCxDQUFpQkMsRUFBakIsRUFBcUI7QUFDbkIsTUFBSUMsS0FBSyxHQUFHNUQsTUFBTSxDQUFDeUMsTUFBUCxDQUFjLElBQWQsQ0FBWjtBQUNBLFNBQVEsU0FBU29CLFFBQVQsQ0FBbUJ2QixHQUFuQixFQUF3QjtBQUM5QixRQUFJd0IsR0FBRyxHQUFHRixLQUFLLENBQUN0QixHQUFELENBQWY7QUFDQSxXQUFPd0IsR0FBRyxLQUFLRixLQUFLLENBQUN0QixHQUFELENBQUwsR0FBYXFCLEVBQUUsQ0FBQ3JCLEdBQUQsQ0FBcEIsQ0FBVjtBQUNELEdBSEQ7QUFJRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSXlCLFVBQVUsR0FBRyxRQUFqQjtBQUNBLElBQUlDLFFBQVEsR0FBR04sTUFBTSxDQUFDLFVBQVVwQixHQUFWLEVBQWU7QUFDbkMsU0FBT0EsR0FBRyxDQUFDMkIsT0FBSixDQUFZRixVQUFaLEVBQXdCLFVBQVVHLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUFFLFdBQU9BLENBQUMsR0FBR0EsQ0FBQyxDQUFDQyxXQUFGLEVBQUgsR0FBcUIsRUFBN0I7QUFBa0MsR0FBNUUsQ0FBUDtBQUNELENBRm9CLENBQXJCO0FBSUE7QUFDQTtBQUNBOztBQUNBLElBQUlDLFVBQVUsR0FBR1gsTUFBTSxDQUFDLFVBQVVwQixHQUFWLEVBQWU7QUFDckMsU0FBT0EsR0FBRyxDQUFDZ0MsTUFBSixDQUFXLENBQVgsRUFBY0YsV0FBZCxLQUE4QjlCLEdBQUcsQ0FBQ3JCLEtBQUosQ0FBVSxDQUFWLENBQXJDO0FBQ0QsQ0FGc0IsQ0FBdkI7QUFJQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSXNELFdBQVcsR0FBRyxZQUFsQjtBQUNBLElBQUlDLFNBQVMsR0FBR2QsTUFBTSxDQUFDLFVBQVVwQixHQUFWLEVBQWU7QUFDcEMsU0FBT0EsR0FBRyxDQUFDMkIsT0FBSixDQUFZTSxXQUFaLEVBQXlCLEtBQXpCLEVBQWdDekIsV0FBaEMsRUFBUDtBQUNELENBRnFCLENBQXRCO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0EsU0FBUzJCLFlBQVQsQ0FBdUJkLEVBQXZCLEVBQTJCZSxHQUEzQixFQUFnQztBQUM5QixXQUFTQyxPQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNuQixRQUFJQyxDQUFDLEdBQUdDLFNBQVMsQ0FBQ2pDLE1BQWxCO0FBQ0EsV0FBT2dDLENBQUMsR0FDSkEsQ0FBQyxHQUFHLENBQUosR0FDRWxCLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBU0wsR0FBVCxFQUFjSSxTQUFkLENBREYsR0FFRW5CLEVBQUUsQ0FBQzNDLElBQUgsQ0FBUTBELEdBQVIsRUFBYUUsQ0FBYixDQUhFLEdBSUpqQixFQUFFLENBQUMzQyxJQUFILENBQVEwRCxHQUFSLENBSko7QUFLRDs7QUFFREMsU0FBTyxDQUFDSyxPQUFSLEdBQWtCckIsRUFBRSxDQUFDZCxNQUFyQjtBQUNBLFNBQU84QixPQUFQO0FBQ0Q7O0FBRUQsU0FBU00sVUFBVCxDQUFxQnRCLEVBQXJCLEVBQXlCZSxHQUF6QixFQUE4QjtBQUM1QixTQUFPZixFQUFFLENBQUN1QixJQUFILENBQVFSLEdBQVIsQ0FBUDtBQUNEOztBQUVELElBQUlRLElBQUksR0FBR0MsUUFBUSxDQUFDdEUsU0FBVCxDQUFtQnFFLElBQW5CLEdBQ1BELFVBRE8sR0FFUFIsWUFGSjtBQUlBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTVyxPQUFULENBQWtCMUMsSUFBbEIsRUFBd0IyQyxLQUF4QixFQUErQjtBQUM3QkEsT0FBSyxHQUFHQSxLQUFLLElBQUksQ0FBakI7QUFDQSxNQUFJekMsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQUwsR0FBY3dDLEtBQXRCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLElBQUl2RCxLQUFKLENBQVVhLENBQVYsQ0FBVjs7QUFDQSxTQUFPQSxDQUFDLEVBQVIsRUFBWTtBQUNWMEMsT0FBRyxDQUFDMUMsQ0FBRCxDQUFILEdBQVNGLElBQUksQ0FBQ0UsQ0FBQyxHQUFHeUMsS0FBTCxDQUFiO0FBQ0Q7O0FBQ0QsU0FBT0MsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxNQUFULENBQWlCQyxFQUFqQixFQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsT0FBSyxJQUFJaEMsR0FBVCxJQUFnQmdDLEtBQWhCLEVBQXVCO0FBQ3JCRCxNQUFFLENBQUMvQixHQUFELENBQUYsR0FBVWdDLEtBQUssQ0FBQ2hDLEdBQUQsQ0FBZjtBQUNEOztBQUNELFNBQU8rQixFQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNFLFFBQVQsQ0FBbUJ4QyxHQUFuQixFQUF3QjtBQUN0QixNQUFJeUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJL0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR00sR0FBRyxDQUFDTCxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQyxRQUFJTSxHQUFHLENBQUNOLENBQUQsQ0FBUCxFQUFZO0FBQ1YyQyxZQUFNLENBQUNJLEdBQUQsRUFBTXpDLEdBQUcsQ0FBQ04sQ0FBRCxDQUFULENBQU47QUFDRDtBQUNGOztBQUNELFNBQU8rQyxHQUFQO0FBQ0Q7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxJQUFULENBQWVoQixDQUFmLEVBQWtCaUIsQ0FBbEIsRUFBcUIxQixDQUFyQixFQUF3QixDQUFFO0FBRTFCO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSTJCLEVBQUUsR0FBRyxVQUFVbEIsQ0FBVixFQUFhaUIsQ0FBYixFQUFnQjFCLENBQWhCLEVBQW1CO0FBQUUsU0FBTyxLQUFQO0FBQWUsQ0FBN0M7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUNBLElBQUk0QixRQUFRLEdBQUcsVUFBVTdCLENBQVYsRUFBYTtBQUFFLFNBQU9BLENBQVA7QUFBVyxDQUF6QztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTOEIsVUFBVCxDQUFxQnBCLENBQXJCLEVBQXdCaUIsQ0FBeEIsRUFBMkI7QUFDekIsTUFBSWpCLENBQUMsS0FBS2lCLENBQVYsRUFBYTtBQUFFLFdBQU8sSUFBUDtBQUFhOztBQUM1QixNQUFJSSxTQUFTLEdBQUd2RixRQUFRLENBQUNrRSxDQUFELENBQXhCO0FBQ0EsTUFBSXNCLFNBQVMsR0FBR3hGLFFBQVEsQ0FBQ21GLENBQUQsQ0FBeEI7O0FBQ0EsTUFBSUksU0FBUyxJQUFJQyxTQUFqQixFQUE0QjtBQUMxQixRQUFJO0FBQ0YsVUFBSUMsUUFBUSxHQUFHcEUsS0FBSyxDQUFDQyxPQUFOLENBQWM0QyxDQUFkLENBQWY7QUFDQSxVQUFJd0IsUUFBUSxHQUFHckUsS0FBSyxDQUFDQyxPQUFOLENBQWM2RCxDQUFkLENBQWY7O0FBQ0EsVUFBSU0sUUFBUSxJQUFJQyxRQUFoQixFQUEwQjtBQUN4QixlQUFPeEIsQ0FBQyxDQUFDL0IsTUFBRixLQUFhZ0QsQ0FBQyxDQUFDaEQsTUFBZixJQUF5QitCLENBQUMsQ0FBQ3lCLEtBQUYsQ0FBUSxVQUFVQyxDQUFWLEVBQWExRCxDQUFiLEVBQWdCO0FBQ3RELGlCQUFPb0QsVUFBVSxDQUFDTSxDQUFELEVBQUlULENBQUMsQ0FBQ2pELENBQUQsQ0FBTCxDQUFqQjtBQUNELFNBRitCLENBQWhDO0FBR0QsT0FKRCxNQUlPLElBQUlnQyxDQUFDLFlBQVkyQixJQUFiLElBQXFCVixDQUFDLFlBQVlVLElBQXRDLEVBQTRDO0FBQ2pELGVBQU8zQixDQUFDLENBQUM0QixPQUFGLE9BQWdCWCxDQUFDLENBQUNXLE9BQUYsRUFBdkI7QUFDRCxPQUZNLE1BRUEsSUFBSSxDQUFDTCxRQUFELElBQWEsQ0FBQ0MsUUFBbEIsRUFBNEI7QUFDakMsWUFBSUssS0FBSyxHQUFHekcsTUFBTSxDQUFDMEcsSUFBUCxDQUFZOUIsQ0FBWixDQUFaO0FBQ0EsWUFBSStCLEtBQUssR0FBRzNHLE1BQU0sQ0FBQzBHLElBQVAsQ0FBWWIsQ0FBWixDQUFaO0FBQ0EsZUFBT1ksS0FBSyxDQUFDNUQsTUFBTixLQUFpQjhELEtBQUssQ0FBQzlELE1BQXZCLElBQWlDNEQsS0FBSyxDQUFDSixLQUFOLENBQVksVUFBVTVDLEdBQVYsRUFBZTtBQUNqRSxpQkFBT3VDLFVBQVUsQ0FBQ3BCLENBQUMsQ0FBQ25CLEdBQUQsQ0FBRixFQUFTb0MsQ0FBQyxDQUFDcEMsR0FBRCxDQUFWLENBQWpCO0FBQ0QsU0FGdUMsQ0FBeEM7QUFHRCxPQU5NLE1BTUE7QUFDTDtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0YsS0FuQkQsQ0FtQkUsT0FBTzZDLENBQVAsRUFBVTtBQUNWO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQXhCRCxNQXdCTyxJQUFJLENBQUNMLFNBQUQsSUFBYyxDQUFDQyxTQUFuQixFQUE4QjtBQUNuQyxXQUFPMUUsTUFBTSxDQUFDb0QsQ0FBRCxDQUFOLEtBQWNwRCxNQUFNLENBQUNxRSxDQUFELENBQTNCO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRjtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNlLFlBQVQsQ0FBdUIxRCxHQUF2QixFQUE0QjdCLEdBQTVCLEVBQWlDO0FBQy9CLE9BQUssSUFBSXVCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdNLEdBQUcsQ0FBQ0wsTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDbkMsUUFBSW9ELFVBQVUsQ0FBQzlDLEdBQUcsQ0FBQ04sQ0FBRCxDQUFKLEVBQVN2QixHQUFULENBQWQsRUFBNkI7QUFBRSxhQUFPdUIsQ0FBUDtBQUFVO0FBQzFDOztBQUNELFNBQU8sQ0FBQyxDQUFSO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNpRSxJQUFULENBQWVsRCxFQUFmLEVBQW1CO0FBQ2pCLE1BQUltRCxNQUFNLEdBQUcsS0FBYjtBQUNBLFNBQU8sWUFBWTtBQUNqQixRQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYQSxZQUFNLEdBQUcsSUFBVDtBQUNBbkQsUUFBRSxDQUFDb0IsS0FBSCxDQUFTLElBQVQsRUFBZUQsU0FBZjtBQUNEO0FBQ0YsR0FMRDtBQU1EOztBQUVELElBQUlpQyxRQUFRLEdBQUcsc0JBQWY7QUFFQSxJQUFJQyxXQUFXLEdBQUcsQ0FDaEIsV0FEZ0IsRUFFaEIsV0FGZ0IsRUFHaEIsUUFIZ0IsQ0FBbEI7QUFNQSxJQUFJQyxlQUFlLEdBQUcsQ0FDcEIsY0FEb0IsRUFFcEIsU0FGb0IsRUFHcEIsYUFIb0IsRUFJcEIsU0FKb0IsRUFLcEIsY0FMb0IsRUFNcEIsU0FOb0IsRUFPcEIsZUFQb0IsRUFRcEIsV0FSb0IsRUFTcEIsV0FUb0IsRUFVcEIsYUFWb0IsRUFXcEIsZUFYb0IsRUFZcEIsZ0JBWm9CLENBQXRCO0FBZUE7O0FBSUEsSUFBSUMsTUFBTSxHQUFJO0FBQ1o7QUFDRjtBQUNBO0FBQ0U7QUFDQUMsdUJBQXFCLEVBQUVuSCxNQUFNLENBQUN5QyxNQUFQLENBQWMsSUFBZCxDQUxYOztBQU9aO0FBQ0Y7QUFDQTtBQUNFMkUsUUFBTSxFQUFFLEtBVkk7O0FBWVo7QUFDRjtBQUNBO0FBQ0VDLGVBQWEsRUFBRUMsYUFBQSxLQUF5QixZQWY1Qjs7QUFpQlo7QUFDRjtBQUNBO0FBQ0VDLFVBQVEsRUFBRUQsYUFBQSxLQUF5QixZQXBCdkI7O0FBc0JaO0FBQ0Y7QUFDQTtBQUNFRSxhQUFXLEVBQUUsS0F6QkQ7O0FBMkJaO0FBQ0Y7QUFDQTtBQUNFQyxjQUFZLEVBQUUsSUE5QkY7O0FBZ0NaO0FBQ0Y7QUFDQTtBQUNFQyxhQUFXLEVBQUUsSUFuQ0Q7O0FBcUNaO0FBQ0Y7QUFDQTtBQUNFQyxpQkFBZSxFQUFFLEVBeENMOztBQTBDWjtBQUNGO0FBQ0E7QUFDRTtBQUNBQyxVQUFRLEVBQUU1SCxNQUFNLENBQUN5QyxNQUFQLENBQWMsSUFBZCxDQTlDRTs7QUFnRFo7QUFDRjtBQUNBO0FBQ0E7QUFDRW9GLGVBQWEsRUFBRS9CLEVBcERIOztBQXNEWjtBQUNGO0FBQ0E7QUFDQTtBQUNFZ0MsZ0JBQWMsRUFBRWhDLEVBMURKOztBQTREWjtBQUNGO0FBQ0E7QUFDQTtBQUNFaUMsa0JBQWdCLEVBQUVqQyxFQWhFTjs7QUFrRVo7QUFDRjtBQUNBO0FBQ0VrQyxpQkFBZSxFQUFFcEMsSUFyRUw7O0FBdUVaO0FBQ0Y7QUFDQTtBQUNFcUMsc0JBQW9CLEVBQUVsQyxRQTFFVjs7QUE0RVo7QUFDRjtBQUNBO0FBQ0E7QUFDRW1DLGFBQVcsRUFBRXBDLEVBaEZEOztBQWtGWjtBQUNGO0FBQ0E7QUFDQTtBQUNFcUMsT0FBSyxFQUFFLElBdEZLOztBQXdGWjtBQUNGO0FBQ0E7QUFDRUMsaUJBQWUsRUFBRW5CO0FBM0ZMLENBQWQ7QUE4RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJb0IsYUFBYSxHQUFHLDZKQUFwQjtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxVQUFULENBQXFCaEcsR0FBckIsRUFBMEI7QUFDeEIsTUFBSTZCLENBQUMsR0FBRyxDQUFDN0IsR0FBRyxHQUFHLEVBQVAsRUFBV2lHLFVBQVgsQ0FBc0IsQ0FBdEIsQ0FBUjtBQUNBLFNBQU9wRSxDQUFDLEtBQUssSUFBTixJQUFjQSxDQUFDLEtBQUssSUFBM0I7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3FFLEdBQVQsQ0FBYzdILEdBQWQsRUFBbUI4QyxHQUFuQixFQUF3QnBDLEdBQXhCLEVBQTZCb0gsVUFBN0IsRUFBeUM7QUFDdkN6SSxRQUFNLENBQUMwSSxjQUFQLENBQXNCL0gsR0FBdEIsRUFBMkI4QyxHQUEzQixFQUFnQztBQUM5QmhELFNBQUssRUFBRVksR0FEdUI7QUFFOUJvSCxjQUFVLEVBQUUsQ0FBQyxDQUFDQSxVQUZnQjtBQUc5QkUsWUFBUSxFQUFFLElBSG9CO0FBSTlCQyxnQkFBWSxFQUFFO0FBSmdCLEdBQWhDO0FBTUQ7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVksT0FBUVQsYUFBYSxDQUFDVSxNQUF0QixHQUFnQyxTQUE1QyxDQUFiOztBQUNBLFNBQVNDLFNBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLE1BQUlKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZRCxJQUFaLENBQUosRUFBdUI7QUFDckI7QUFDRDs7QUFDRCxNQUFJRSxRQUFRLEdBQUdGLElBQUksQ0FBQ3RHLEtBQUwsQ0FBVyxHQUFYLENBQWY7QUFDQSxTQUFPLFVBQVVoQyxHQUFWLEVBQWU7QUFDcEIsU0FBSyxJQUFJaUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VHLFFBQVEsQ0FBQ3RHLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUksQ0FBQ2pDLEdBQUwsRUFBVTtBQUFFO0FBQVE7O0FBQ3BCQSxTQUFHLEdBQUdBLEdBQUcsQ0FBQ3dJLFFBQVEsQ0FBQ3ZHLENBQUQsQ0FBVCxDQUFUO0FBQ0Q7O0FBQ0QsV0FBT2pDLEdBQVA7QUFDRCxHQU5EO0FBT0Q7QUFFRDtBQUVBOzs7QUFDQSxJQUFJeUksUUFBUSxJQUFHLGVBQWUsRUFBbEIsQ0FBWixDLENBRUE7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEM7QUFDQSxJQUFJQyxNQUFNLEdBQUcsT0FBT0MsYUFBUCxLQUF5QixXQUF6QixJQUF3QyxDQUFDLENBQUNBLGFBQWEsQ0FBQ0MsUUFBckU7QUFDQSxJQUFJQyxZQUFZLEdBQUdILE1BQU0sSUFBSUMsYUFBYSxDQUFDQyxRQUFkLENBQXVCM0csV0FBdkIsRUFBN0I7QUFDQSxJQUFJNkcsRUFBRSxHQUFHTixTQUFTLElBQUlDLE1BQU0sQ0FBQ00sU0FBUCxDQUFpQkMsU0FBakIsQ0FBMkIvRyxXQUEzQixFQUF0QjtBQUNBLElBQUlnSCxJQUFJLEdBQUdILEVBQUUsSUFBSSxlQUFlVCxJQUFmLENBQW9CUyxFQUFwQixDQUFqQjtBQUNBLElBQUlJLEtBQUssR0FBR0osRUFBRSxJQUFJQSxFQUFFLENBQUN0RyxPQUFILENBQVcsVUFBWCxJQUF5QixDQUEzQztBQUNBLElBQUkyRyxNQUFNLEdBQUdMLEVBQUUsSUFBSUEsRUFBRSxDQUFDdEcsT0FBSCxDQUFXLE9BQVgsSUFBc0IsQ0FBekM7QUFDQSxJQUFJNEcsU0FBUyxHQUFJTixFQUFFLElBQUlBLEVBQUUsQ0FBQ3RHLE9BQUgsQ0FBVyxTQUFYLElBQXdCLENBQS9CLElBQXNDcUcsWUFBWSxLQUFLLFNBQXZFO0FBQ0EsSUFBSVEsS0FBSyxHQUFJUCxFQUFFLElBQUksdUJBQXVCVCxJQUF2QixDQUE0QlMsRUFBNUIsQ0FBUCxJQUE0Q0QsWUFBWSxLQUFLLEtBQXpFO0FBQ0EsSUFBSVMsUUFBUSxHQUFHUixFQUFFLElBQUksY0FBY1QsSUFBZCxDQUFtQlMsRUFBbkIsQ0FBTixJQUFnQyxDQUFDSyxNQUFoRDtBQUNBLElBQUlJLFdBQVcsR0FBR1QsRUFBRSxJQUFJLFlBQVlULElBQVosQ0FBaUJTLEVBQWpCLENBQXhCO0FBQ0EsSUFBSVUsSUFBSSxHQUFHVixFQUFFLElBQUlBLEVBQUUsQ0FBQ1csS0FBSCxDQUFTLGdCQUFULENBQWpCLEMsQ0FFQTs7QUFDQSxJQUFJQyxXQUFXLEdBQUksRUFBRCxDQUFLQyxLQUF2QjtBQUVBLElBQUlDLGVBQWUsR0FBRyxLQUF0Qjs7QUFDQSxJQUFJcEIsU0FBSixFQUFlO0FBQ2IsTUFBSTtBQUNGLFFBQUlxQixJQUFJLEdBQUcsRUFBWDtBQUNBMUssVUFBTSxDQUFDMEksY0FBUCxDQUFzQmdDLElBQXRCLEVBQTRCLFNBQTVCLEVBQXdDO0FBQ3RDQyxTQUFHLEVBQUUsU0FBU0EsR0FBVCxHQUFnQjtBQUNuQjtBQUNBRix1QkFBZSxHQUFHLElBQWxCO0FBQ0Q7QUFKcUMsS0FBeEMsRUFGRSxDQU9HOztBQUNMbkIsVUFBTSxDQUFDc0IsZ0JBQVAsQ0FBd0IsY0FBeEIsRUFBd0MsSUFBeEMsRUFBOENGLElBQTlDO0FBQ0QsR0FURCxDQVNFLE9BQU9wRSxDQUFQLEVBQVUsQ0FBRTtBQUNmLEMsQ0FFRDtBQUNBOzs7QUFDQSxJQUFJdUUsU0FBSjs7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxZQUFZO0FBQ2xDLE1BQUlELFNBQVMsS0FBS3pLLFNBQWxCLEVBQTZCO0FBQzNCO0FBQ0EsUUFBSSxDQUFDaUosU0FBRCxJQUFjLENBQUNFLE1BQWYsSUFBeUIsT0FBT3dCLHFCQUFQLEtBQWtCLFdBQS9DLEVBQTREO0FBQzFEO0FBQ0E7QUFDQUYsZUFBUyxHQUFHRSxxQkFBTSxDQUFDLFNBQUQsQ0FBTixJQUFxQkEscUJBQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0JDLEdBQWxCLENBQXNCQyxPQUF0QixLQUFrQyxRQUFuRTtBQUNELEtBSkQsTUFJTztBQUNMSixlQUFTLEdBQUcsS0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsU0FBUDtBQUNELENBWkQsQyxDQWNBOzs7QUFDQSxJQUFJdEQsUUFBUSxHQUFHOEIsU0FBUyxJQUFJQyxNQUFNLENBQUM0Qiw0QkFBbkM7QUFFQTs7QUFDQSxTQUFTQyxRQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixTQUFPLE9BQU9BLElBQVAsS0FBZ0IsVUFBaEIsSUFBOEIsY0FBY2xDLElBQWQsQ0FBbUJrQyxJQUFJLENBQUN0SyxRQUFMLEVBQW5CLENBQXJDO0FBQ0Q7O0FBRUQsSUFBSXVLLFNBQVMsR0FDWCxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDSCxRQUFRLENBQUNHLE1BQUQsQ0FBekMsSUFDQSxPQUFPQyxPQUFQLEtBQW1CLFdBRG5CLElBQ2tDSixRQUFRLENBQUNJLE9BQU8sQ0FBQ0MsT0FBVCxDQUY1Qzs7QUFJQSxJQUFJQyxJQUFKO0FBQ0E7QUFBeUI7OztBQUN6QixJQUFJLE9BQU9DLEdBQVAsS0FBZSxXQUFmLElBQThCUCxRQUFRLENBQUNPLEdBQUQsQ0FBMUMsRUFBaUQ7QUFDL0M7QUFDQUQsTUFBSSxHQUFHQyxHQUFQO0FBQ0QsQ0FIRCxNQUdPO0FBQ0w7QUFDQUQsTUFBSSxHQUFHLGFBQWMsWUFBWTtBQUMvQixhQUFTQyxHQUFULEdBQWdCO0FBQ2QsV0FBS0MsR0FBTCxHQUFXM0wsTUFBTSxDQUFDeUMsTUFBUCxDQUFjLElBQWQsQ0FBWDtBQUNEOztBQUNEaUosT0FBRyxDQUFDN0ssU0FBSixDQUFjK0ssR0FBZCxHQUFvQixTQUFTQSxHQUFULENBQWNuSSxHQUFkLEVBQW1CO0FBQ3JDLGFBQU8sS0FBS2tJLEdBQUwsQ0FBU2xJLEdBQVQsTUFBa0IsSUFBekI7QUFDRCxLQUZEOztBQUdBaUksT0FBRyxDQUFDN0ssU0FBSixDQUFjZ0wsR0FBZCxHQUFvQixTQUFTQSxHQUFULENBQWNwSSxHQUFkLEVBQW1CO0FBQ3JDLFdBQUtrSSxHQUFMLENBQVNsSSxHQUFULElBQWdCLElBQWhCO0FBQ0QsS0FGRDs7QUFHQWlJLE9BQUcsQ0FBQzdLLFNBQUosQ0FBY2lMLEtBQWQsR0FBc0IsU0FBU0EsS0FBVCxHQUFrQjtBQUN0QyxXQUFLSCxHQUFMLEdBQVczTCxNQUFNLENBQUN5QyxNQUFQLENBQWMsSUFBZCxDQUFYO0FBQ0QsS0FGRDs7QUFJQSxXQUFPaUosR0FBUDtBQUNELEdBZm9CLEVBQXJCO0FBZ0JEO0FBRUQ7OztBQUVBLElBQUlLLElBQUksR0FBR25HLElBQVg7QUFDQSxJQUFJb0csR0FBRyxHQUFHcEcsSUFBVjtBQUNBLElBQUlxRyxzQkFBc0IsR0FBSXJHLElBQTlCLEMsQ0FBcUM7O0FBQ3JDLElBQUlzRyxtQkFBbUIsR0FBSXRHLElBQTNCOztBQUVBLElBQUkwQixJQUFKLEVBQTJDO0FBQ3pDLE1BQUk2RSxVQUFVLEdBQUcsT0FBT0MsT0FBUCxLQUFtQixXQUFwQztBQUNBLE1BQUlDLFVBQVUsR0FBRyxpQkFBakI7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFVBQVVoSyxHQUFWLEVBQWU7QUFBRSxXQUFPQSxHQUFHLENBQ3ZDMkIsT0FEb0MsQ0FDNUJvSSxVQUQ0QixFQUNoQixVQUFVbEksQ0FBVixFQUFhO0FBQUUsYUFBT0EsQ0FBQyxDQUFDQyxXQUFGLEVBQVA7QUFBeUIsS0FEeEIsRUFFcENILE9BRm9DLENBRTVCLE9BRjRCLEVBRW5CLEVBRm1CLENBQVA7QUFFTixHQUYxQjs7QUFJQThILE1BQUksR0FBRyxVQUFVUSxHQUFWLEVBQWVDLEVBQWYsRUFBbUI7QUFDeEIsUUFBSUMsS0FBSyxHQUFHRCxFQUFFLEdBQUdQLHNCQUFzQixDQUFDTyxFQUFELENBQXpCLEdBQWdDLEVBQTlDOztBQUVBLFFBQUl0RixNQUFNLENBQUNRLFdBQVgsRUFBd0I7QUFDdEJSLFlBQU0sQ0FBQ1EsV0FBUCxDQUFtQjFHLElBQW5CLENBQXdCLElBQXhCLEVBQThCdUwsR0FBOUIsRUFBbUNDLEVBQW5DLEVBQXVDQyxLQUF2QztBQUNELEtBRkQsTUFFTyxJQUFJTixVQUFVLElBQUssQ0FBQ2pGLE1BQU0sQ0FBQ0UsTUFBM0IsRUFBb0M7QUFDekNnRixhQUFPLENBQUNNLEtBQVIsQ0FBZSxpQkFBaUJILEdBQWpCLEdBQXVCRSxLQUF0QztBQUNEO0FBQ0YsR0FSRDs7QUFVQVQsS0FBRyxHQUFHLFVBQVVPLEdBQVYsRUFBZUMsRUFBZixFQUFtQjtBQUN2QixRQUFJTCxVQUFVLElBQUssQ0FBQ2pGLE1BQU0sQ0FBQ0UsTUFBM0IsRUFBb0M7QUFDbENnRixhQUFPLENBQUNMLElBQVIsQ0FBYSxnQkFBZ0JRLEdBQWhCLElBQ1hDLEVBQUUsR0FBR1Asc0JBQXNCLENBQUNPLEVBQUQsQ0FBekIsR0FBZ0MsRUFEdkIsQ0FBYjtBQUdEO0FBQ0YsR0FORDs7QUFRQU4scUJBQW1CLEdBQUcsVUFBVU0sRUFBVixFQUFjRyxXQUFkLEVBQTJCO0FBQy9DLFFBQUlILEVBQUUsQ0FBQ0ksS0FBSCxLQUFhSixFQUFqQixFQUFxQjtBQUNuQixhQUFPLFFBQVA7QUFDRDs7QUFDRCxRQUFJSyxPQUFPLEdBQUcsT0FBT0wsRUFBUCxLQUFjLFVBQWQsSUFBNEJBLEVBQUUsQ0FBQ00sR0FBSCxJQUFVLElBQXRDLEdBQ1ZOLEVBQUUsQ0FBQ0ssT0FETyxHQUVWTCxFQUFFLENBQUNPLE1BQUgsR0FDRVAsRUFBRSxDQUFDUSxRQUFILElBQWVSLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlSixPQURoQyxHQUVFTCxFQUpOO0FBS0EsUUFBSVUsSUFBSSxHQUFHTCxPQUFPLENBQUNLLElBQVIsSUFBZ0JMLE9BQU8sQ0FBQ00sYUFBbkM7QUFDQSxRQUFJQyxJQUFJLEdBQUdQLE9BQU8sQ0FBQ1EsTUFBbkI7O0FBQ0EsUUFBSSxDQUFDSCxJQUFELElBQVNFLElBQWIsRUFBbUI7QUFDakIsVUFBSTlDLEtBQUssR0FBRzhDLElBQUksQ0FBQzlDLEtBQUwsQ0FBVyxpQkFBWCxDQUFaO0FBQ0E0QyxVQUFJLEdBQUc1QyxLQUFLLElBQUlBLEtBQUssQ0FBQyxDQUFELENBQXJCO0FBQ0Q7O0FBRUQsV0FDRSxDQUFDNEMsSUFBSSxHQUFJLE1BQU9aLFFBQVEsQ0FBQ1ksSUFBRCxDQUFmLEdBQXlCLEdBQTdCLEdBQW9DLGFBQXpDLEtBQ0NFLElBQUksSUFBSVQsV0FBVyxLQUFLLEtBQXhCLEdBQWlDLFNBQVNTLElBQTFDLEdBQWtELEVBRG5ELENBREY7QUFJRCxHQXBCRDs7QUFzQkEsTUFBSUUsTUFBTSxHQUFHLFVBQVVoTCxHQUFWLEVBQWVoQixDQUFmLEVBQWtCO0FBQzdCLFFBQUlxRSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxXQUFPckUsQ0FBUCxFQUFVO0FBQ1IsVUFBSUEsQ0FBQyxHQUFHLENBQUosS0FBVSxDQUFkLEVBQWlCO0FBQUVxRSxXQUFHLElBQUlyRCxHQUFQO0FBQWE7O0FBQ2hDLFVBQUloQixDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQUVnQixXQUFHLElBQUlBLEdBQVA7QUFBYTs7QUFDMUJoQixPQUFDLEtBQUssQ0FBTjtBQUNEOztBQUNELFdBQU9xRSxHQUFQO0FBQ0QsR0FSRDs7QUFVQXNHLHdCQUFzQixHQUFHLFVBQVVPLEVBQVYsRUFBYztBQUNyQyxRQUFJQSxFQUFFLENBQUNPLE1BQUgsSUFBYVAsRUFBRSxDQUFDZSxPQUFwQixFQUE2QjtBQUMzQixVQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBLFVBQUlDLHdCQUF3QixHQUFHLENBQS9COztBQUNBLGFBQU9qQixFQUFQLEVBQVc7QUFDVCxZQUFJZ0IsSUFBSSxDQUFDM0ssTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CLGNBQUk2SyxJQUFJLEdBQUdGLElBQUksQ0FBQ0EsSUFBSSxDQUFDM0ssTUFBTCxHQUFjLENBQWYsQ0FBZjs7QUFDQSxjQUFJNkssSUFBSSxDQUFDVCxXQUFMLEtBQXFCVCxFQUFFLENBQUNTLFdBQTVCLEVBQXlDO0FBQ3ZDUSxvQ0FBd0I7QUFDeEJqQixjQUFFLEdBQUdBLEVBQUUsQ0FBQ2UsT0FBUjtBQUNBO0FBQ0QsV0FKRCxNQUlPLElBQUlFLHdCQUF3QixHQUFHLENBQS9CLEVBQWtDO0FBQ3ZDRCxnQkFBSSxDQUFDQSxJQUFJLENBQUMzSyxNQUFMLEdBQWMsQ0FBZixDQUFKLEdBQXdCLENBQUM2SyxJQUFELEVBQU9ELHdCQUFQLENBQXhCO0FBQ0FBLG9DQUF3QixHQUFHLENBQTNCO0FBQ0Q7QUFDRjs7QUFDREQsWUFBSSxDQUFDRyxJQUFMLENBQVVuQixFQUFWO0FBQ0FBLFVBQUUsR0FBR0EsRUFBRSxDQUFDZSxPQUFSO0FBQ0Q7O0FBQ0QsYUFBTyxxQkFBcUJDLElBQUksQ0FDN0JoTCxHQUR5QixDQUNyQixVQUFVZ0ssRUFBVixFQUFjNUosQ0FBZCxFQUFpQjtBQUFFLGVBQVEsTUFBTUEsQ0FBQyxLQUFLLENBQU4sR0FBVSxPQUFWLEdBQW9CMEssTUFBTSxDQUFDLEdBQUQsRUFBTSxJQUFJMUssQ0FBQyxHQUFHLENBQWQsQ0FBaEMsS0FBcURiLEtBQUssQ0FBQ0MsT0FBTixDQUFjd0ssRUFBZCxJQUM3RU4sbUJBQW1CLENBQUNNLEVBQUUsQ0FBQyxDQUFELENBQUgsQ0FBcEIsR0FBK0IsT0FBL0IsR0FBMENBLEVBQUUsQ0FBQyxDQUFELENBQTVDLEdBQW1ELG1CQUQyQixHQUUvRU4sbUJBQW1CLENBQUNNLEVBQUQsQ0FGTyxDQUFSO0FBRVUsT0FIUixFQUl6Qm9CLElBSnlCLENBSXBCLElBSm9CLENBQTVCO0FBS0QsS0F2QkQsTUF1Qk87QUFDTCxhQUFRLG1CQUFvQjFCLG1CQUFtQixDQUFDTSxFQUFELENBQXZDLEdBQStDLEdBQXZEO0FBQ0Q7QUFDRixHQTNCRDtBQTRCRDtBQUVEOzs7QUFFQSxJQUFJcUIsR0FBRyxHQUFHLENBQVY7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQyxHQUFHLEdBQUcsU0FBU0EsR0FBVCxHQUFnQjtBQUN4QixPQUFLQyxFQUFMLEdBQVVGLEdBQUcsRUFBYjtBQUNBLE9BQUtHLElBQUwsR0FBWSxFQUFaO0FBQ0QsQ0FIRDs7QUFLQUYsR0FBRyxDQUFDak4sU0FBSixDQUFjb04sTUFBZCxHQUF1QixTQUFTQSxNQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUMzQyxPQUFLRixJQUFMLENBQVVMLElBQVYsQ0FBZU8sR0FBZjtBQUNELENBRkQ7O0FBSUFKLEdBQUcsQ0FBQ2pOLFNBQUosQ0FBY3NOLFNBQWQsR0FBMEIsU0FBU0EsU0FBVCxDQUFvQkQsR0FBcEIsRUFBeUI7QUFDakRqTCxRQUFNLENBQUMsS0FBSytLLElBQU4sRUFBWUUsR0FBWixDQUFOO0FBQ0QsQ0FGRDs7QUFJQUosR0FBRyxDQUFDak4sU0FBSixDQUFjdU4sTUFBZCxHQUF1QixTQUFTQSxNQUFULEdBQW1CO0FBQ3hDLE1BQUlOLEdBQUcsQ0FBQ08sTUFBUixFQUFnQjtBQUNkUCxPQUFHLENBQUNPLE1BQUosQ0FBV0MsTUFBWCxDQUFrQixJQUFsQjtBQUNEO0FBQ0YsQ0FKRDs7QUFNQVIsR0FBRyxDQUFDak4sU0FBSixDQUFjME4sTUFBZCxHQUF1QixTQUFTQSxNQUFULEdBQW1CO0FBQ3hDO0FBQ0EsTUFBSVAsSUFBSSxHQUFHLEtBQUtBLElBQUwsQ0FBVS9NLEtBQVYsRUFBWDs7QUFDQSxNQUFJcUcsS0FBQSxJQUF5QyxDQUFDSixNQUFNLENBQUNpQixLQUFyRCxFQUE0RDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTZGLFFBQUksQ0FBQ1EsSUFBTCxDQUFVLFVBQVU1SixDQUFWLEVBQWFpQixDQUFiLEVBQWdCO0FBQUUsYUFBT2pCLENBQUMsQ0FBQ21KLEVBQUYsR0FBT2xJLENBQUMsQ0FBQ2tJLEVBQWhCO0FBQXFCLEtBQWpEO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJbkwsQ0FBQyxHQUFHLENBQVIsRUFBV2lDLENBQUMsR0FBR21KLElBQUksQ0FBQ25MLE1BQXpCLEVBQWlDRCxDQUFDLEdBQUdpQyxDQUFyQyxFQUF3Q2pDLENBQUMsRUFBekMsRUFBNkM7QUFDM0NvTCxRQUFJLENBQUNwTCxDQUFELENBQUosQ0FBUTZMLE1BQVI7QUFDRDtBQUNGLENBWkQsQyxDQWNBO0FBQ0E7QUFDQTs7O0FBQ0FYLEdBQUcsQ0FBQ08sTUFBSixHQUFhLElBQWI7QUFDQSxJQUFJSyxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsU0FBU0MsVUFBVCxDQUFxQk4sTUFBckIsRUFBNkI7QUFDM0JLLGFBQVcsQ0FBQ2YsSUFBWixDQUFpQlUsTUFBakI7QUFDQVAsS0FBRyxDQUFDTyxNQUFKLEdBQWFBLE1BQWI7QUFDRDs7QUFFRCxTQUFTTyxTQUFULEdBQXNCO0FBQ3BCRixhQUFXLENBQUNHLEdBQVo7QUFDQWYsS0FBRyxDQUFDTyxNQUFKLEdBQWFLLFdBQVcsQ0FBQ0EsV0FBVyxDQUFDN0wsTUFBWixHQUFxQixDQUF0QixDQUF4QjtBQUNEO0FBRUQ7OztBQUVBLElBQUlpTSxLQUFLLEdBQUcsU0FBU0EsS0FBVCxDQUNWQyxHQURVLEVBRVZDLElBRlUsRUFHVkMsUUFIVSxFQUlWQyxJQUpVLEVBS1ZDLEdBTFUsRUFNVkMsT0FOVSxFQU9WQyxnQkFQVSxFQVFWQyxZQVJVLEVBU1Y7QUFDQSxPQUFLUCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtJLEVBQUwsR0FBVW5QLFNBQVY7QUFDQSxPQUFLZ1AsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0ksU0FBTCxHQUFpQnBQLFNBQWpCO0FBQ0EsT0FBS3FQLFNBQUwsR0FBaUJyUCxTQUFqQjtBQUNBLE9BQUtzUCxTQUFMLEdBQWlCdFAsU0FBakI7QUFDQSxPQUFLcUQsR0FBTCxHQUFXdUwsSUFBSSxJQUFJQSxJQUFJLENBQUN2TCxHQUF4QjtBQUNBLE9BQUs0TCxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0EsT0FBS00saUJBQUwsR0FBeUJ2UCxTQUF6QjtBQUNBLE9BQUt3UCxNQUFMLEdBQWN4UCxTQUFkO0FBQ0EsT0FBS3lQLEdBQUwsR0FBVyxLQUFYO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsT0FBS1osWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxPQUFLYSxTQUFMLEdBQWlCL1AsU0FBakI7QUFDQSxPQUFLZ1Esa0JBQUwsR0FBMEIsS0FBMUI7QUFDRCxDQWpDRDs7QUFtQ0EsSUFBSUMsa0JBQWtCLEdBQUc7QUFBRUMsT0FBSyxFQUFFO0FBQUUxSCxnQkFBWSxFQUFFO0FBQWhCO0FBQVQsQ0FBekIsQyxDQUVBOztBQUNBOztBQUNBeUgsa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCM0YsR0FBekIsR0FBK0IsWUFBWTtBQUN6QyxTQUFPLEtBQUtnRixpQkFBWjtBQUNELENBRkQ7O0FBSUEzUCxNQUFNLENBQUN1USxnQkFBUCxDQUF5QnpCLEtBQUssQ0FBQ2pPLFNBQS9CLEVBQTBDd1Asa0JBQTFDOztBQUVBLElBQUlHLGdCQUFnQixHQUFHLFVBQVV0QixJQUFWLEVBQWdCO0FBQ3JDLE1BQUtBLElBQUksS0FBSyxLQUFLLENBQW5CLEVBQXVCQSxJQUFJLEdBQUcsRUFBUDtBQUV2QixNQUFJdUIsSUFBSSxHQUFHLElBQUkzQixLQUFKLEVBQVg7QUFDQTJCLE1BQUksQ0FBQ3ZCLElBQUwsR0FBWUEsSUFBWjtBQUNBdUIsTUFBSSxDQUFDVCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBT1MsSUFBUDtBQUNELENBUEQ7O0FBU0EsU0FBU0MsZUFBVCxDQUEwQnJQLEdBQTFCLEVBQStCO0FBQzdCLFNBQU8sSUFBSXlOLEtBQUosQ0FBVTFPLFNBQVYsRUFBcUJBLFNBQXJCLEVBQWdDQSxTQUFoQyxFQUEyQ29CLE1BQU0sQ0FBQ0gsR0FBRCxDQUFqRCxDQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTc1AsVUFBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUIsTUFBSUMsTUFBTSxHQUFHLElBQUkvQixLQUFKLENBQ1g4QixLQUFLLENBQUM3QixHQURLLEVBRVg2QixLQUFLLENBQUM1QixJQUZLLEVBR1g7QUFDQTtBQUNBO0FBQ0E0QixPQUFLLENBQUMzQixRQUFOLElBQWtCMkIsS0FBSyxDQUFDM0IsUUFBTixDQUFlaE8sS0FBZixFQU5QLEVBT1gyUCxLQUFLLENBQUMxQixJQVBLLEVBUVgwQixLQUFLLENBQUN6QixHQVJLLEVBU1h5QixLQUFLLENBQUN4QixPQVRLLEVBVVh3QixLQUFLLENBQUN2QixnQkFWSyxFQVdYdUIsS0FBSyxDQUFDdEIsWUFYSyxDQUFiO0FBYUF1QixRQUFNLENBQUN0QixFQUFQLEdBQVlxQixLQUFLLENBQUNyQixFQUFsQjtBQUNBc0IsUUFBTSxDQUFDZixRQUFQLEdBQWtCYyxLQUFLLENBQUNkLFFBQXhCO0FBQ0FlLFFBQU0sQ0FBQ3BOLEdBQVAsR0FBYW1OLEtBQUssQ0FBQ25OLEdBQW5CO0FBQ0FvTixRQUFNLENBQUNiLFNBQVAsR0FBbUJZLEtBQUssQ0FBQ1osU0FBekI7QUFDQWEsUUFBTSxDQUFDckIsU0FBUCxHQUFtQm9CLEtBQUssQ0FBQ3BCLFNBQXpCO0FBQ0FxQixRQUFNLENBQUNwQixTQUFQLEdBQW1CbUIsS0FBSyxDQUFDbkIsU0FBekI7QUFDQW9CLFFBQU0sQ0FBQ25CLFNBQVAsR0FBbUJrQixLQUFLLENBQUNsQixTQUF6QjtBQUNBbUIsUUFBTSxDQUFDVixTQUFQLEdBQW1CUyxLQUFLLENBQUNULFNBQXpCO0FBQ0FVLFFBQU0sQ0FBQ1osUUFBUCxHQUFrQixJQUFsQjtBQUNBLFNBQU9ZLE1BQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFJQyxVQUFVLEdBQUcvTyxLQUFLLENBQUNsQixTQUF2QjtBQUNBLElBQUlrUSxZQUFZLEdBQUcvUSxNQUFNLENBQUN5QyxNQUFQLENBQWNxTyxVQUFkLENBQW5CO0FBRUEsSUFBSUUsY0FBYyxHQUFHLENBQ25CLE1BRG1CLEVBRW5CLEtBRm1CLEVBR25CLE9BSG1CLEVBSW5CLFNBSm1CLEVBS25CLFFBTG1CLEVBTW5CLE1BTm1CLEVBT25CLFNBUG1CLENBQXJCO0FBVUE7QUFDQTtBQUNBOztBQUNBQSxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsVUFBVUMsTUFBVixFQUFrQjtBQUN2QztBQUNBLE1BQUlDLFFBQVEsR0FBR0wsVUFBVSxDQUFDSSxNQUFELENBQXpCO0FBQ0ExSSxLQUFHLENBQUN1SSxZQUFELEVBQWVHLE1BQWYsRUFBdUIsU0FBU0UsT0FBVCxHQUFvQjtBQUM1QyxRQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUFBLFFBQWVDLEdBQUcsR0FBR3hNLFNBQVMsQ0FBQ2pDLE1BQS9COztBQUNBLFdBQVF5TyxHQUFHLEVBQVgsRUFBZ0JELElBQUksQ0FBRUMsR0FBRixDQUFKLEdBQWN4TSxTQUFTLENBQUV3TSxHQUFGLENBQXZCOztBQUVoQixRQUFJQyxNQUFNLEdBQUdKLFFBQVEsQ0FBQ3BNLEtBQVQsQ0FBZSxJQUFmLEVBQXFCc00sSUFBckIsQ0FBYjtBQUNBLFFBQUlHLEVBQUUsR0FBRyxLQUFLQyxNQUFkO0FBQ0EsUUFBSUMsUUFBSjs7QUFDQSxZQUFRUixNQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0VRLGdCQUFRLEdBQUdMLElBQVg7QUFDQTs7QUFDRixXQUFLLFFBQUw7QUFDRUssZ0JBQVEsR0FBR0wsSUFBSSxDQUFDcFEsS0FBTCxDQUFXLENBQVgsQ0FBWDtBQUNBO0FBUEo7O0FBU0EsUUFBSXlRLFFBQUosRUFBYztBQUFFRixRQUFFLENBQUNHLFlBQUgsQ0FBZ0JELFFBQWhCO0FBQTRCLEtBaEJBLENBaUI1Qzs7O0FBQ0FGLE1BQUUsQ0FBQ0ksR0FBSCxDQUFPckQsTUFBUDtBQUNBLFdBQU9nRCxNQUFQO0FBQ0QsR0FwQkUsQ0FBSDtBQXFCRCxDQXhCRDtBQTBCQTs7QUFFQSxJQUFJTSxTQUFTLEdBQUc3UixNQUFNLENBQUM4UixtQkFBUCxDQUEyQmYsWUFBM0IsQ0FBaEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJZ0IsYUFBYSxHQUFHLElBQXBCOztBQUVBLFNBQVNDLGVBQVQsQ0FBMEJ2UixLQUExQixFQUFpQztBQUMvQnNSLGVBQWEsR0FBR3RSLEtBQWhCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUl3UixRQUFRLEdBQUcsU0FBU0EsUUFBVCxDQUFtQnhSLEtBQW5CLEVBQTBCO0FBQ3ZDLE9BQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUttUixHQUFMLEdBQVcsSUFBSTlELEdBQUosRUFBWDtBQUNBLE9BQUtvRSxPQUFMLEdBQWUsQ0FBZjtBQUNBMUosS0FBRyxDQUFDL0gsS0FBRCxFQUFRLFFBQVIsRUFBa0IsSUFBbEIsQ0FBSDs7QUFDQSxNQUFJc0IsS0FBSyxDQUFDQyxPQUFOLENBQWN2QixLQUFkLENBQUosRUFBMEI7QUFDeEIsUUFBSTJJLFFBQUosRUFBYztBQUNaK0ksa0JBQVksQ0FBQzFSLEtBQUQsRUFBUXNRLFlBQVIsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMcUIsaUJBQVcsQ0FBQzNSLEtBQUQsRUFBUXNRLFlBQVIsRUFBc0JjLFNBQXRCLENBQVg7QUFDRDs7QUFDRCxTQUFLRixZQUFMLENBQWtCbFIsS0FBbEI7QUFDRCxHQVBELE1BT087QUFDTCxTQUFLNFIsSUFBTCxDQUFVNVIsS0FBVjtBQUNEO0FBQ0YsQ0FmRDtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQXdSLFFBQVEsQ0FBQ3BSLFNBQVQsQ0FBbUJ3UixJQUFuQixHQUEwQixTQUFTQSxJQUFULENBQWUxUixHQUFmLEVBQW9CO0FBQzVDLE1BQUkrRixJQUFJLEdBQUcxRyxNQUFNLENBQUMwRyxJQUFQLENBQVkvRixHQUFaLENBQVg7O0FBQ0EsT0FBSyxJQUFJaUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhELElBQUksQ0FBQzdELE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDMFAscUJBQWlCLENBQUMzUixHQUFELEVBQU0rRixJQUFJLENBQUM5RCxDQUFELENBQVYsQ0FBakI7QUFDRDtBQUNGLENBTEQ7QUFPQTtBQUNBO0FBQ0E7OztBQUNBcVAsUUFBUSxDQUFDcFIsU0FBVCxDQUFtQjhRLFlBQW5CLEdBQWtDLFNBQVNBLFlBQVQsQ0FBdUJZLEtBQXZCLEVBQThCO0FBQzlELE9BQUssSUFBSTNQLENBQUMsR0FBRyxDQUFSLEVBQVdpQyxDQUFDLEdBQUcwTixLQUFLLENBQUMxUCxNQUExQixFQUFrQ0QsQ0FBQyxHQUFHaUMsQ0FBdEMsRUFBeUNqQyxDQUFDLEVBQTFDLEVBQThDO0FBQzVDNFAsV0FBTyxDQUFDRCxLQUFLLENBQUMzUCxDQUFELENBQU4sQ0FBUDtBQUNEO0FBQ0YsQ0FKRCxDLENBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVN1UCxZQUFULENBQXVCOUQsTUFBdkIsRUFBK0JvRSxHQUEvQixFQUFvQztBQUNsQztBQUNBcEUsUUFBTSxDQUFDcUUsU0FBUCxHQUFtQkQsR0FBbkI7QUFDQTtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7OztBQUNBLFNBQVNMLFdBQVQsQ0FBc0IvRCxNQUF0QixFQUE4Qm9FLEdBQTlCLEVBQW1DL0wsSUFBbkMsRUFBeUM7QUFDdkMsT0FBSyxJQUFJOUQsQ0FBQyxHQUFHLENBQVIsRUFBV2lDLENBQUMsR0FBRzZCLElBQUksQ0FBQzdELE1BQXpCLEVBQWlDRCxDQUFDLEdBQUdpQyxDQUFyQyxFQUF3Q2pDLENBQUMsRUFBekMsRUFBNkM7QUFDM0MsUUFBSWEsR0FBRyxHQUFHaUQsSUFBSSxDQUFDOUQsQ0FBRCxDQUFkO0FBQ0E0RixPQUFHLENBQUM2RixNQUFELEVBQVM1SyxHQUFULEVBQWNnUCxHQUFHLENBQUNoUCxHQUFELENBQWpCLENBQUg7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUytPLE9BQVQsQ0FBa0IvUixLQUFsQixFQUF5QmtTLFVBQXpCLEVBQXFDO0FBQ25DLE1BQUksQ0FBQ2pTLFFBQVEsQ0FBQ0QsS0FBRCxDQUFULElBQW9CQSxLQUFLLFlBQVlxTyxLQUF6QyxFQUFnRDtBQUM5QztBQUNEOztBQUNELE1BQUkwQyxFQUFKOztBQUNBLE1BQUloTyxNQUFNLENBQUMvQyxLQUFELEVBQVEsUUFBUixDQUFOLElBQTJCQSxLQUFLLENBQUNnUixNQUFOLFlBQXdCUSxRQUF2RCxFQUFpRTtBQUMvRFQsTUFBRSxHQUFHL1EsS0FBSyxDQUFDZ1IsTUFBWDtBQUNELEdBRkQsTUFFTyxJQUNMTSxhQUFhLElBQ2IsQ0FBQ2pILGlCQUFpQixFQURsQixLQUVDL0ksS0FBSyxDQUFDQyxPQUFOLENBQWN2QixLQUFkLEtBQXdCUyxhQUFhLENBQUNULEtBQUQsQ0FGdEMsS0FHQVQsTUFBTSxDQUFDNFMsWUFBUCxDQUFvQm5TLEtBQXBCLENBSEEsSUFJQSxDQUFDQSxLQUFLLENBQUNzTSxNQUxGLEVBTUw7QUFDQXlFLE1BQUUsR0FBRyxJQUFJUyxRQUFKLENBQWF4UixLQUFiLENBQUw7QUFDRDs7QUFDRCxNQUFJa1MsVUFBVSxJQUFJbkIsRUFBbEIsRUFBc0I7QUFDcEJBLE1BQUUsQ0FBQ1UsT0FBSDtBQUNEOztBQUNELFNBQU9WLEVBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2MsaUJBQVQsQ0FDRTNSLEdBREYsRUFFRThDLEdBRkYsRUFHRXBDLEdBSEYsRUFJRXdSLFlBSkYsRUFLRUMsT0FMRixFQU1FO0FBQ0EsTUFBSWxCLEdBQUcsR0FBRyxJQUFJOUQsR0FBSixFQUFWO0FBRUEsTUFBSWlGLFFBQVEsR0FBRy9TLE1BQU0sQ0FBQ2dULHdCQUFQLENBQWdDclMsR0FBaEMsRUFBcUM4QyxHQUFyQyxDQUFmOztBQUNBLE1BQUlzUCxRQUFRLElBQUlBLFFBQVEsQ0FBQ25LLFlBQVQsS0FBMEIsS0FBMUMsRUFBaUQ7QUFDL0M7QUFDRCxHQU5ELENBUUE7OztBQUNBLE1BQUlxSyxNQUFNLEdBQUdGLFFBQVEsSUFBSUEsUUFBUSxDQUFDcEksR0FBbEM7QUFDQSxNQUFJdUksTUFBTSxHQUFHSCxRQUFRLElBQUlBLFFBQVEsQ0FBQ3BILEdBQWxDOztBQUNBLE1BQUksQ0FBQyxDQUFDc0gsTUFBRCxJQUFXQyxNQUFaLEtBQXVCcE8sU0FBUyxDQUFDakMsTUFBVixLQUFxQixDQUFoRCxFQUFtRDtBQUNqRHhCLE9BQUcsR0FBR1YsR0FBRyxDQUFDOEMsR0FBRCxDQUFUO0FBQ0Q7O0FBRUQsTUFBSTBQLE9BQU8sR0FBRyxDQUFDTCxPQUFELElBQVlOLE9BQU8sQ0FBQ25SLEdBQUQsQ0FBakM7QUFDQXJCLFFBQU0sQ0FBQzBJLGNBQVAsQ0FBc0IvSCxHQUF0QixFQUEyQjhDLEdBQTNCLEVBQWdDO0FBQzlCZ0YsY0FBVSxFQUFFLElBRGtCO0FBRTlCRyxnQkFBWSxFQUFFLElBRmdCO0FBRzlCK0IsT0FBRyxFQUFFLFNBQVN5SSxjQUFULEdBQTJCO0FBQzlCLFVBQUkzUyxLQUFLLEdBQUd3UyxNQUFNLEdBQUdBLE1BQU0sQ0FBQ2pTLElBQVAsQ0FBWUwsR0FBWixDQUFILEdBQXNCVSxHQUF4Qzs7QUFDQSxVQUFJeU0sR0FBRyxDQUFDTyxNQUFSLEVBQWdCO0FBQ2R1RCxXQUFHLENBQUN4RCxNQUFKOztBQUNBLFlBQUkrRSxPQUFKLEVBQWE7QUFDWEEsaUJBQU8sQ0FBQ3ZCLEdBQVIsQ0FBWXhELE1BQVo7O0FBQ0EsY0FBSXJNLEtBQUssQ0FBQ0MsT0FBTixDQUFjdkIsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCNFMsdUJBQVcsQ0FBQzVTLEtBQUQsQ0FBWDtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxhQUFPQSxLQUFQO0FBQ0QsS0FmNkI7QUFnQjlCa0wsT0FBRyxFQUFFLFNBQVMySCxjQUFULENBQXlCQyxNQUF6QixFQUFpQztBQUNwQyxVQUFJOVMsS0FBSyxHQUFHd1MsTUFBTSxHQUFHQSxNQUFNLENBQUNqUyxJQUFQLENBQVlMLEdBQVosQ0FBSCxHQUFzQlUsR0FBeEM7QUFDQTs7QUFDQSxVQUFJa1MsTUFBTSxLQUFLOVMsS0FBWCxJQUFxQjhTLE1BQU0sS0FBS0EsTUFBWCxJQUFxQjlTLEtBQUssS0FBS0EsS0FBeEQsRUFBZ0U7QUFDOUQ7QUFDRDtBQUNEOzs7QUFDQSxVQUFJNkcsS0FBQSxJQUF5Q3VMLFlBQTdDLEVBQTJEO0FBQ3pEQSxvQkFBWTtBQUNiLE9BVG1DLENBVXBDOzs7QUFDQSxVQUFJSSxNQUFNLElBQUksQ0FBQ0MsTUFBZixFQUF1QjtBQUFFO0FBQVE7O0FBQ2pDLFVBQUlBLE1BQUosRUFBWTtBQUNWQSxjQUFNLENBQUNsUyxJQUFQLENBQVlMLEdBQVosRUFBaUI0UyxNQUFqQjtBQUNELE9BRkQsTUFFTztBQUNMbFMsV0FBRyxHQUFHa1MsTUFBTjtBQUNEOztBQUNESixhQUFPLEdBQUcsQ0FBQ0wsT0FBRCxJQUFZTixPQUFPLENBQUNlLE1BQUQsQ0FBN0I7QUFDQTNCLFNBQUcsQ0FBQ3JELE1BQUo7QUFDRDtBQW5DNkIsR0FBaEM7QUFxQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTNUMsR0FBVCxDQUFjMEMsTUFBZCxFQUFzQjVLLEdBQXRCLEVBQTJCcEMsR0FBM0IsRUFBZ0M7QUFDOUIsTUFBSWlHLEtBQUEsS0FDRHBILE9BQU8sQ0FBQ21PLE1BQUQsQ0FBUCxJQUFtQjdOLFdBQVcsQ0FBQzZOLE1BQUQsQ0FEN0IsQ0FBSixFQUVFO0FBQ0F0QyxRQUFJLENBQUUsMEVBQTRFc0MsTUFBOUUsQ0FBSjtBQUNEOztBQUNELE1BQUl0TSxLQUFLLENBQUNDLE9BQU4sQ0FBY3FNLE1BQWQsS0FBeUJqTixpQkFBaUIsQ0FBQ3FDLEdBQUQsQ0FBOUMsRUFBcUQ7QUFDbkQ0SyxVQUFNLENBQUN4TCxNQUFQLEdBQWdCcEIsSUFBSSxDQUFDK1IsR0FBTCxDQUFTbkYsTUFBTSxDQUFDeEwsTUFBaEIsRUFBd0JZLEdBQXhCLENBQWhCO0FBQ0E0SyxVQUFNLENBQUMvSyxNQUFQLENBQWNHLEdBQWQsRUFBbUIsQ0FBbkIsRUFBc0JwQyxHQUF0QjtBQUNBLFdBQU9BLEdBQVA7QUFDRDs7QUFDRCxNQUFJb0MsR0FBRyxJQUFJNEssTUFBUCxJQUFpQixFQUFFNUssR0FBRyxJQUFJekQsTUFBTSxDQUFDYSxTQUFoQixDQUFyQixFQUFpRDtBQUMvQ3dOLFVBQU0sQ0FBQzVLLEdBQUQsQ0FBTixHQUFjcEMsR0FBZDtBQUNBLFdBQU9BLEdBQVA7QUFDRDs7QUFDRCxNQUFJbVEsRUFBRSxHQUFJbkQsTUFBRCxDQUFTb0QsTUFBbEI7O0FBQ0EsTUFBSXBELE1BQU0sQ0FBQ3RCLE1BQVAsSUFBa0J5RSxFQUFFLElBQUlBLEVBQUUsQ0FBQ1UsT0FBL0IsRUFBeUM7QUFDdkM1SyxTQUFBLElBQXlDeUUsSUFBSSxDQUMzQywwRUFDQSxxREFGMkMsQ0FBN0M7QUFJQSxXQUFPMUssR0FBUDtBQUNEOztBQUNELE1BQUksQ0FBQ21RLEVBQUwsRUFBUztBQUNQbkQsVUFBTSxDQUFDNUssR0FBRCxDQUFOLEdBQWNwQyxHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNEOztBQUNEaVIsbUJBQWlCLENBQUNkLEVBQUUsQ0FBQy9RLEtBQUosRUFBV2dELEdBQVgsRUFBZ0JwQyxHQUFoQixDQUFqQjtBQUNBbVEsSUFBRSxDQUFDSSxHQUFILENBQU9yRCxNQUFQO0FBQ0EsU0FBT2xOLEdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU29TLEdBQVQsQ0FBY3BGLE1BQWQsRUFBc0I1SyxHQUF0QixFQUEyQjtBQUN6QixNQUFJNkQsS0FBQSxLQUNEcEgsT0FBTyxDQUFDbU8sTUFBRCxDQUFQLElBQW1CN04sV0FBVyxDQUFDNk4sTUFBRCxDQUQ3QixDQUFKLEVBRUU7QUFDQXRDLFFBQUksQ0FBRSw2RUFBK0VzQyxNQUFqRixDQUFKO0FBQ0Q7O0FBQ0QsTUFBSXRNLEtBQUssQ0FBQ0MsT0FBTixDQUFjcU0sTUFBZCxLQUF5QmpOLGlCQUFpQixDQUFDcUMsR0FBRCxDQUE5QyxFQUFxRDtBQUNuRDRLLFVBQU0sQ0FBQy9LLE1BQVAsQ0FBY0csR0FBZCxFQUFtQixDQUFuQjtBQUNBO0FBQ0Q7O0FBQ0QsTUFBSStOLEVBQUUsR0FBSW5ELE1BQUQsQ0FBU29ELE1BQWxCOztBQUNBLE1BQUlwRCxNQUFNLENBQUN0QixNQUFQLElBQWtCeUUsRUFBRSxJQUFJQSxFQUFFLENBQUNVLE9BQS9CLEVBQXlDO0FBQ3ZDNUssU0FBQSxJQUF5Q3lFLElBQUksQ0FDM0MsbUVBQ0Esd0JBRjJDLENBQTdDO0FBSUE7QUFDRDs7QUFDRCxNQUFJLENBQUN2SSxNQUFNLENBQUM2SyxNQUFELEVBQVM1SyxHQUFULENBQVgsRUFBMEI7QUFDeEI7QUFDRDs7QUFDRCxTQUFPNEssTUFBTSxDQUFDNUssR0FBRCxDQUFiOztBQUNBLE1BQUksQ0FBQytOLEVBQUwsRUFBUztBQUNQO0FBQ0Q7O0FBQ0RBLElBQUUsQ0FBQ0ksR0FBSCxDQUFPckQsTUFBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVM4RSxXQUFULENBQXNCNVMsS0FBdEIsRUFBNkI7QUFDM0IsT0FBSyxJQUFJNkYsQ0FBQyxHQUFJLEtBQUssQ0FBZCxFQUFrQjFELENBQUMsR0FBRyxDQUF0QixFQUF5QmlDLENBQUMsR0FBR3BFLEtBQUssQ0FBQ29DLE1BQXhDLEVBQWdERCxDQUFDLEdBQUdpQyxDQUFwRCxFQUF1RGpDLENBQUMsRUFBeEQsRUFBNEQ7QUFDMUQwRCxLQUFDLEdBQUc3RixLQUFLLENBQUNtQyxDQUFELENBQVQ7QUFDQTBELEtBQUMsSUFBSUEsQ0FBQyxDQUFDbUwsTUFBUCxJQUFpQm5MLENBQUMsQ0FBQ21MLE1BQUYsQ0FBU0csR0FBVCxDQUFheEQsTUFBYixFQUFqQjs7QUFDQSxRQUFJck0sS0FBSyxDQUFDQyxPQUFOLENBQWNzRSxDQUFkLENBQUosRUFBc0I7QUFDcEIrTSxpQkFBVyxDQUFDL00sQ0FBRCxDQUFYO0FBQ0Q7QUFDRjtBQUNGO0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSW9OLE1BQU0sR0FBR3hNLE1BQU0sQ0FBQ0MscUJBQXBCO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQUlHLElBQUosRUFBMkM7QUFDekNvTSxRQUFNLENBQUNDLEVBQVAsR0FBWUQsTUFBTSxDQUFDRSxTQUFQLEdBQW1CLFVBQVVoRSxNQUFWLEVBQWtCVSxLQUFsQixFQUF5QjlELEVBQXpCLEVBQTZCL0ksR0FBN0IsRUFBa0M7QUFDL0QsUUFBSSxDQUFDK0ksRUFBTCxFQUFTO0FBQ1BULFVBQUksQ0FDRixjQUFjdEksR0FBZCxHQUFvQixzQ0FBcEIsR0FDQSxrQ0FGRSxDQUFKO0FBSUQ7O0FBQ0QsV0FBT29RLFlBQVksQ0FBQ2pFLE1BQUQsRUFBU1UsS0FBVCxDQUFuQjtBQUNELEdBUkQ7QUFTRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3dELFNBQVQsQ0FBb0J0TyxFQUFwQixFQUF3QnVPLElBQXhCLEVBQThCO0FBQzVCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQUUsV0FBT3ZPLEVBQVA7QUFBVzs7QUFDeEIsTUFBSS9CLEdBQUosRUFBU3VRLEtBQVQsRUFBZ0JDLE9BQWhCO0FBRUEsTUFBSXZOLElBQUksR0FBRzJFLFNBQVMsR0FDaEJFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnVJLElBQWhCLENBRGdCLEdBRWhCL1QsTUFBTSxDQUFDMEcsSUFBUCxDQUFZcU4sSUFBWixDQUZKOztBQUlBLE9BQUssSUFBSW5SLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4RCxJQUFJLENBQUM3RCxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQ2EsT0FBRyxHQUFHaUQsSUFBSSxDQUFDOUQsQ0FBRCxDQUFWLENBRG9DLENBRXBDOztBQUNBLFFBQUlhLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQUU7QUFBVTs7QUFDbEN1USxTQUFLLEdBQUd4TyxFQUFFLENBQUMvQixHQUFELENBQVY7QUFDQXdRLFdBQU8sR0FBR0YsSUFBSSxDQUFDdFEsR0FBRCxDQUFkOztBQUNBLFFBQUksQ0FBQ0QsTUFBTSxDQUFDZ0MsRUFBRCxFQUFLL0IsR0FBTCxDQUFYLEVBQXNCO0FBQ3BCa0ksU0FBRyxDQUFDbkcsRUFBRCxFQUFLL0IsR0FBTCxFQUFVd1EsT0FBVixDQUFIO0FBQ0QsS0FGRCxNQUVPLElBQ0xELEtBQUssS0FBS0MsT0FBVixJQUNBL1MsYUFBYSxDQUFDOFMsS0FBRCxDQURiLElBRUE5UyxhQUFhLENBQUMrUyxPQUFELENBSFIsRUFJTDtBQUNBSCxlQUFTLENBQUNFLEtBQUQsRUFBUUMsT0FBUixDQUFUO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPek8sRUFBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTME8sYUFBVCxDQUNFQyxTQURGLEVBRUVDLFFBRkYsRUFHRTVILEVBSEYsRUFJRTtBQUNBLE1BQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ1A7QUFDQSxRQUFJLENBQUM0SCxRQUFMLEVBQWU7QUFDYixhQUFPRCxTQUFQO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDQSxTQUFMLEVBQWdCO0FBQ2QsYUFBT0MsUUFBUDtBQUNELEtBUE0sQ0FRUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFPLFNBQVNDLFlBQVQsR0FBeUI7QUFDOUIsYUFBT1AsU0FBUyxDQUNkLE9BQU9NLFFBQVAsS0FBb0IsVUFBcEIsR0FBaUNBLFFBQVEsQ0FBQ3BULElBQVQsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLENBQWpDLEdBQTZEb1QsUUFEL0MsRUFFZCxPQUFPRCxTQUFQLEtBQXFCLFVBQXJCLEdBQWtDQSxTQUFTLENBQUNuVCxJQUFWLENBQWUsSUFBZixFQUFxQixJQUFyQixDQUFsQyxHQUErRG1ULFNBRmpELENBQWhCO0FBSUQsS0FMRDtBQU1ELEdBbkJELE1BbUJPO0FBQ0wsV0FBTyxTQUFTRyxvQkFBVCxHQUFpQztBQUN0QztBQUNBLFVBQUlDLFlBQVksR0FBRyxPQUFPSCxRQUFQLEtBQW9CLFVBQXBCLEdBQ2ZBLFFBQVEsQ0FBQ3BULElBQVQsQ0FBY3dMLEVBQWQsRUFBa0JBLEVBQWxCLENBRGUsR0FFZjRILFFBRko7QUFHQSxVQUFJSSxXQUFXLEdBQUcsT0FBT0wsU0FBUCxLQUFxQixVQUFyQixHQUNkQSxTQUFTLENBQUNuVCxJQUFWLENBQWV3TCxFQUFmLEVBQW1CQSxFQUFuQixDQURjLEdBRWQySCxTQUZKOztBQUdBLFVBQUlJLFlBQUosRUFBa0I7QUFDaEIsZUFBT1QsU0FBUyxDQUFDUyxZQUFELEVBQWVDLFdBQWYsQ0FBaEI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPQSxXQUFQO0FBQ0Q7QUFDRixLQWJEO0FBY0Q7QUFDRjs7QUFFRGQsTUFBTSxDQUFDMUUsSUFBUCxHQUFjLFVBQ1ptRixTQURZLEVBRVpDLFFBRlksRUFHWjVILEVBSFksRUFJWjtBQUNBLE1BQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ1AsUUFBSTRILFFBQVEsSUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXBDLEVBQWdEO0FBQzlDOU0sV0FBQSxJQUF5Q3lFLElBQUksQ0FDM0MsNENBQ0EsaURBREEsR0FFQSxjQUgyQyxFQUkzQ1MsRUFKMkMsQ0FBN0M7QUFPQSxhQUFPMkgsU0FBUDtBQUNEOztBQUNELFdBQU9ELGFBQWEsQ0FBQ0MsU0FBRCxFQUFZQyxRQUFaLENBQXBCO0FBQ0Q7O0FBRUQsU0FBT0YsYUFBYSxDQUFDQyxTQUFELEVBQVlDLFFBQVosRUFBc0I1SCxFQUF0QixDQUFwQjtBQUNELENBcEJEO0FBc0JBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU2lJLFNBQVQsQ0FDRU4sU0FERixFQUVFQyxRQUZGLEVBR0U7QUFDQSxNQUFJek8sR0FBRyxHQUFHeU8sUUFBUSxHQUNkRCxTQUFTLEdBQ1BBLFNBQVMsQ0FBQ08sTUFBVixDQUFpQk4sUUFBakIsQ0FETyxHQUVQclMsS0FBSyxDQUFDQyxPQUFOLENBQWNvUyxRQUFkLElBQ0VBLFFBREYsR0FFRSxDQUFDQSxRQUFELENBTFUsR0FNZEQsU0FOSjtBQU9BLFNBQU94TyxHQUFHLEdBQ05nUCxXQUFXLENBQUNoUCxHQUFELENBREwsR0FFTkEsR0FGSjtBQUdEOztBQUVELFNBQVNnUCxXQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixNQUFJalAsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsT0FBSyxJQUFJL0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dTLEtBQUssQ0FBQy9SLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFFBQUkrQyxHQUFHLENBQUN0QyxPQUFKLENBQVl1UixLQUFLLENBQUNoUyxDQUFELENBQWpCLE1BQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDaEMrQyxTQUFHLENBQUNnSSxJQUFKLENBQVNpSCxLQUFLLENBQUNoUyxDQUFELENBQWQ7QUFDRDtBQUNGOztBQUNELFNBQU8rQyxHQUFQO0FBQ0Q7O0FBRURzQixlQUFlLENBQUNnSyxPQUFoQixDQUF3QixVQUFVNEQsSUFBVixFQUFnQjtBQUN0Q25CLFFBQU0sQ0FBQ21CLElBQUQsQ0FBTixHQUFlSixTQUFmO0FBQ0QsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNLLFdBQVQsQ0FDRVgsU0FERixFQUVFQyxRQUZGLEVBR0U1SCxFQUhGLEVBSUUvSSxHQUpGLEVBS0U7QUFDQSxNQUFJa0MsR0FBRyxHQUFHM0YsTUFBTSxDQUFDeUMsTUFBUCxDQUFjMFIsU0FBUyxJQUFJLElBQTNCLENBQVY7O0FBQ0EsTUFBSUMsUUFBSixFQUFjO0FBQ1o5TSxTQUFBLElBQXlDeU4sZ0JBQWdCLENBQUN0UixHQUFELEVBQU0yUSxRQUFOLEVBQWdCNUgsRUFBaEIsQ0FBekQ7QUFDQSxXQUFPakgsTUFBTSxDQUFDSSxHQUFELEVBQU15TyxRQUFOLENBQWI7QUFDRCxHQUhELE1BR087QUFDTCxXQUFPek8sR0FBUDtBQUNEO0FBQ0Y7O0FBRURxQixXQUFXLENBQUNpSyxPQUFaLENBQW9CLFVBQVUrRCxJQUFWLEVBQWdCO0FBQ2xDdEIsUUFBTSxDQUFDc0IsSUFBSSxHQUFHLEdBQVIsQ0FBTixHQUFxQkYsV0FBckI7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBcEIsTUFBTSxDQUFDbEosS0FBUCxHQUFlLFVBQ2IySixTQURhLEVBRWJDLFFBRmEsRUFHYjVILEVBSGEsRUFJYi9JLEdBSmEsRUFLYjtBQUNBO0FBQ0EsTUFBSTBRLFNBQVMsS0FBSzVKLFdBQWxCLEVBQStCO0FBQUU0SixhQUFTLEdBQUcvVCxTQUFaO0FBQXdCOztBQUN6RCxNQUFJZ1UsUUFBUSxLQUFLN0osV0FBakIsRUFBOEI7QUFBRTZKLFlBQVEsR0FBR2hVLFNBQVg7QUFBdUI7QUFDdkQ7OztBQUNBLE1BQUksQ0FBQ2dVLFFBQUwsRUFBZTtBQUFFLFdBQU9wVSxNQUFNLENBQUN5QyxNQUFQLENBQWMwUixTQUFTLElBQUksSUFBM0IsQ0FBUDtBQUF5Qzs7QUFDMUQsTUFBSTdNLElBQUosRUFBMkM7QUFDekN5TixvQkFBZ0IsQ0FBQ3RSLEdBQUQsRUFBTTJRLFFBQU4sRUFBZ0I1SCxFQUFoQixDQUFoQjtBQUNEOztBQUNELE1BQUksQ0FBQzJILFNBQUwsRUFBZ0I7QUFBRSxXQUFPQyxRQUFQO0FBQWlCOztBQUNuQyxNQUFJOU8sR0FBRyxHQUFHLEVBQVY7QUFDQUMsUUFBTSxDQUFDRCxHQUFELEVBQU02TyxTQUFOLENBQU47O0FBQ0EsT0FBSyxJQUFJYyxLQUFULElBQWtCYixRQUFsQixFQUE0QjtBQUMxQixRQUFJeEUsTUFBTSxHQUFHdEssR0FBRyxDQUFDMlAsS0FBRCxDQUFoQjtBQUNBLFFBQUkzRSxLQUFLLEdBQUc4RCxRQUFRLENBQUNhLEtBQUQsQ0FBcEI7O0FBQ0EsUUFBSXJGLE1BQU0sSUFBSSxDQUFDN04sS0FBSyxDQUFDQyxPQUFOLENBQWM0TixNQUFkLENBQWYsRUFBc0M7QUFDcENBLFlBQU0sR0FBRyxDQUFDQSxNQUFELENBQVQ7QUFDRDs7QUFDRHRLLE9BQUcsQ0FBQzJQLEtBQUQsQ0FBSCxHQUFhckYsTUFBTSxHQUNmQSxNQUFNLENBQUM4RSxNQUFQLENBQWNwRSxLQUFkLENBRGUsR0FFZnZPLEtBQUssQ0FBQ0MsT0FBTixDQUFjc08sS0FBZCxJQUF1QkEsS0FBdkIsR0FBK0IsQ0FBQ0EsS0FBRCxDQUZuQztBQUdEOztBQUNELFNBQU9oTCxHQUFQO0FBQ0QsQ0E1QkQ7QUE4QkE7QUFDQTtBQUNBOzs7QUFDQW9PLE1BQU0sQ0FBQ3dCLEtBQVAsR0FDQXhCLE1BQU0sQ0FBQ3lCLE9BQVAsR0FDQXpCLE1BQU0sQ0FBQzBCLE1BQVAsR0FDQTFCLE1BQU0sQ0FBQzJCLFFBQVAsR0FBa0IsVUFDaEJsQixTQURnQixFQUVoQkMsUUFGZ0IsRUFHaEI1SCxFQUhnQixFQUloQi9JLEdBSmdCLEVBS2hCO0FBQ0EsTUFBSTJRLFFBQVEsSUFBSTlNLGFBQUEsS0FBeUIsWUFBekMsRUFBdUQ7QUFDckR5TixvQkFBZ0IsQ0FBQ3RSLEdBQUQsRUFBTTJRLFFBQU4sRUFBZ0I1SCxFQUFoQixDQUFoQjtBQUNEOztBQUNELE1BQUksQ0FBQzJILFNBQUwsRUFBZ0I7QUFBRSxXQUFPQyxRQUFQO0FBQWlCOztBQUNuQyxNQUFJOU8sR0FBRyxHQUFHdEYsTUFBTSxDQUFDeUMsTUFBUCxDQUFjLElBQWQsQ0FBVjtBQUNBOEMsUUFBTSxDQUFDRCxHQUFELEVBQU02TyxTQUFOLENBQU47O0FBQ0EsTUFBSUMsUUFBSixFQUFjO0FBQUU3TyxVQUFNLENBQUNELEdBQUQsRUFBTThPLFFBQU4sQ0FBTjtBQUF3Qjs7QUFDeEMsU0FBTzlPLEdBQVA7QUFDRCxDQWpCRDs7QUFrQkFvTyxNQUFNLENBQUM0QixPQUFQLEdBQWlCcEIsYUFBakI7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUwsWUFBWSxHQUFHLFVBQVVNLFNBQVYsRUFBcUJDLFFBQXJCLEVBQStCO0FBQ2hELFNBQU9BLFFBQVEsS0FBS2hVLFNBQWIsR0FDSCtULFNBREcsR0FFSEMsUUFGSjtBQUdELENBSkQ7QUFNQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNtQixlQUFULENBQTBCMUksT0FBMUIsRUFBbUM7QUFDakMsT0FBSyxJQUFJcEosR0FBVCxJQUFnQm9KLE9BQU8sQ0FBQzJJLFVBQXhCLEVBQW9DO0FBQ2xDQyx5QkFBcUIsQ0FBQ2hTLEdBQUQsQ0FBckI7QUFDRDtBQUNGOztBQUVELFNBQVNnUyxxQkFBVCxDQUFnQ3ZJLElBQWhDLEVBQXNDO0FBQ3BDLE1BQUksQ0FBQyxJQUFJcEUsTUFBSixDQUFZLHlCQUEwQlQsYUFBYSxDQUFDVSxNQUF4QyxHQUFrRCxLQUE5RCxFQUFzRUcsSUFBdEUsQ0FBMkVnRSxJQUEzRSxDQUFMLEVBQXVGO0FBQ3JGbkIsUUFBSSxDQUNGLDhCQUE4Qm1CLElBQTlCLEdBQXFDLHFCQUFyQyxHQUNBLHFFQUZFLENBQUo7QUFJRDs7QUFDRCxNQUFJbkssWUFBWSxDQUFDbUssSUFBRCxDQUFaLElBQXNCaEcsTUFBTSxDQUFDVyxhQUFQLENBQXFCcUYsSUFBckIsQ0FBMUIsRUFBc0Q7QUFDcERuQixRQUFJLENBQ0YsZ0VBQ0EsTUFEQSxHQUNTbUIsSUFGUCxDQUFKO0FBSUQ7QUFDRjtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTd0ksY0FBVCxDQUF5QjdJLE9BQXpCLEVBQWtDTCxFQUFsQyxFQUFzQztBQUNwQyxNQUFJMEksS0FBSyxHQUFHckksT0FBTyxDQUFDcUksS0FBcEI7O0FBQ0EsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFBRTtBQUFROztBQUN0QixNQUFJdlAsR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJL0MsQ0FBSixFQUFPdkIsR0FBUCxFQUFZNkwsSUFBWjs7QUFDQSxNQUFJbkwsS0FBSyxDQUFDQyxPQUFOLENBQWNrVCxLQUFkLENBQUosRUFBMEI7QUFDeEJ0UyxLQUFDLEdBQUdzUyxLQUFLLENBQUNyUyxNQUFWOztBQUNBLFdBQU9ELENBQUMsRUFBUixFQUFZO0FBQ1Z2QixTQUFHLEdBQUc2VCxLQUFLLENBQUN0UyxDQUFELENBQVg7O0FBQ0EsVUFBSSxPQUFPdkIsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCNkwsWUFBSSxHQUFHbEosUUFBUSxDQUFDM0MsR0FBRCxDQUFmO0FBQ0FzRSxXQUFHLENBQUN1SCxJQUFELENBQUgsR0FBWTtBQUFFOEgsY0FBSSxFQUFFO0FBQVIsU0FBWjtBQUNELE9BSEQsTUFHTyxJQUFJMU4sSUFBSixFQUEyQztBQUNoRHlFLFlBQUksQ0FBQyxnREFBRCxDQUFKO0FBQ0Q7QUFDRjtBQUNGLEdBWEQsTUFXTyxJQUFJN0ssYUFBYSxDQUFDZ1UsS0FBRCxDQUFqQixFQUEwQjtBQUMvQixTQUFLLElBQUl6UixHQUFULElBQWdCeVIsS0FBaEIsRUFBdUI7QUFDckI3VCxTQUFHLEdBQUc2VCxLQUFLLENBQUN6UixHQUFELENBQVg7QUFDQXlKLFVBQUksR0FBR2xKLFFBQVEsQ0FBQ1AsR0FBRCxDQUFmO0FBQ0FrQyxTQUFHLENBQUN1SCxJQUFELENBQUgsR0FBWWhNLGFBQWEsQ0FBQ0csR0FBRCxDQUFiLEdBQ1JBLEdBRFEsR0FFUjtBQUFFMlQsWUFBSSxFQUFFM1Q7QUFBUixPQUZKO0FBR0Q7QUFDRixHQVJNLE1BUUEsSUFBSWlHLElBQUosRUFBMkM7QUFDaER5RSxRQUFJLENBQ0YseUVBQ0EsVUFEQSxHQUNjaEwsU0FBUyxDQUFDbVUsS0FBRCxDQUR2QixHQUNrQyxHQUZoQyxFQUdGMUksRUFIRSxDQUFKO0FBS0Q7O0FBQ0RLLFNBQU8sQ0FBQ3FJLEtBQVIsR0FBZ0J2UCxHQUFoQjtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTZ1EsZUFBVCxDQUEwQjlJLE9BQTFCLEVBQW1DTCxFQUFuQyxFQUF1QztBQUNyQyxNQUFJNEksTUFBTSxHQUFHdkksT0FBTyxDQUFDdUksTUFBckI7O0FBQ0EsTUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFBRTtBQUFROztBQUN2QixNQUFJUSxVQUFVLEdBQUcvSSxPQUFPLENBQUN1SSxNQUFSLEdBQWlCLEVBQWxDOztBQUNBLE1BQUlyVCxLQUFLLENBQUNDLE9BQU4sQ0FBY29ULE1BQWQsQ0FBSixFQUEyQjtBQUN6QixTQUFLLElBQUl4UyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd1MsTUFBTSxDQUFDdlMsTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDdENnVCxnQkFBVSxDQUFDUixNQUFNLENBQUN4UyxDQUFELENBQVAsQ0FBVixHQUF3QjtBQUFFbVIsWUFBSSxFQUFFcUIsTUFBTSxDQUFDeFMsQ0FBRDtBQUFkLE9BQXhCO0FBQ0Q7QUFDRixHQUpELE1BSU8sSUFBSTFCLGFBQWEsQ0FBQ2tVLE1BQUQsQ0FBakIsRUFBMkI7QUFDaEMsU0FBSyxJQUFJM1IsR0FBVCxJQUFnQjJSLE1BQWhCLEVBQXdCO0FBQ3RCLFVBQUkvVCxHQUFHLEdBQUcrVCxNQUFNLENBQUMzUixHQUFELENBQWhCO0FBQ0FtUyxnQkFBVSxDQUFDblMsR0FBRCxDQUFWLEdBQWtCdkMsYUFBYSxDQUFDRyxHQUFELENBQWIsR0FDZGtFLE1BQU0sQ0FBQztBQUFFd08sWUFBSSxFQUFFdFE7QUFBUixPQUFELEVBQWdCcEMsR0FBaEIsQ0FEUSxHQUVkO0FBQUUwUyxZQUFJLEVBQUUxUztBQUFSLE9BRko7QUFHRDtBQUNGLEdBUE0sTUFPQSxJQUFJaUcsSUFBSixFQUEyQztBQUNoRHlFLFFBQUksQ0FDRiwwRUFDQSxVQURBLEdBQ2NoTCxTQUFTLENBQUNxVSxNQUFELENBRHZCLEdBQ21DLEdBRmpDLEVBR0Y1SSxFQUhFLENBQUo7QUFLRDtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTcUosbUJBQVQsQ0FBOEJoSixPQUE5QixFQUF1QztBQUNyQyxNQUFJaUosSUFBSSxHQUFHakosT0FBTyxDQUFDa0osVUFBbkI7O0FBQ0EsTUFBSUQsSUFBSixFQUFVO0FBQ1IsU0FBSyxJQUFJclMsR0FBVCxJQUFnQnFTLElBQWhCLEVBQXNCO0FBQ3BCLFVBQUlFLE1BQU0sR0FBR0YsSUFBSSxDQUFDclMsR0FBRCxDQUFqQjs7QUFDQSxVQUFJLE9BQU91UyxNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0FBQ2hDRixZQUFJLENBQUNyUyxHQUFELENBQUosR0FBWTtBQUFFeUIsY0FBSSxFQUFFOFEsTUFBUjtBQUFnQnZILGdCQUFNLEVBQUV1SDtBQUF4QixTQUFaO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBU2pCLGdCQUFULENBQTJCN0gsSUFBM0IsRUFBaUN6TSxLQUFqQyxFQUF3QytMLEVBQXhDLEVBQTRDO0FBQzFDLE1BQUksQ0FBQ3RMLGFBQWEsQ0FBQ1QsS0FBRCxDQUFsQixFQUEyQjtBQUN6QnNMLFFBQUksQ0FDRixnQ0FBZ0NtQixJQUFoQyxHQUF1QywwQkFBdkMsR0FDQSxVQURBLEdBQ2NuTSxTQUFTLENBQUNOLEtBQUQsQ0FEdkIsR0FDa0MsR0FGaEMsRUFHRitMLEVBSEUsQ0FBSjtBQUtEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3lKLFlBQVQsQ0FDRXJHLE1BREYsRUFFRVUsS0FGRixFQUdFOUQsRUFIRixFQUlFO0FBQ0EsTUFBSWxGLElBQUosRUFBMkM7QUFDekNpTyxtQkFBZSxDQUFDakYsS0FBRCxDQUFmO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPQSxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQy9CQSxTQUFLLEdBQUdBLEtBQUssQ0FBQ3pELE9BQWQ7QUFDRDs7QUFFRDZJLGdCQUFjLENBQUNwRixLQUFELEVBQVE5RCxFQUFSLENBQWQ7QUFDQW1KLGlCQUFlLENBQUNyRixLQUFELEVBQVE5RCxFQUFSLENBQWY7QUFDQXFKLHFCQUFtQixDQUFDdkYsS0FBRCxDQUFuQixDQVhBLENBYUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSSxDQUFDQSxLQUFLLENBQUM0RixLQUFYLEVBQWtCO0FBQ2hCLFFBQUk1RixLQUFLLENBQUM2RixPQUFWLEVBQW1CO0FBQ2pCdkcsWUFBTSxHQUFHcUcsWUFBWSxDQUFDckcsTUFBRCxFQUFTVSxLQUFLLENBQUM2RixPQUFmLEVBQXdCM0osRUFBeEIsQ0FBckI7QUFDRDs7QUFDRCxRQUFJOEQsS0FBSyxDQUFDOEYsTUFBVixFQUFrQjtBQUNoQixXQUFLLElBQUl4VCxDQUFDLEdBQUcsQ0FBUixFQUFXaUMsQ0FBQyxHQUFHeUwsS0FBSyxDQUFDOEYsTUFBTixDQUFhdlQsTUFBakMsRUFBeUNELENBQUMsR0FBR2lDLENBQTdDLEVBQWdEakMsQ0FBQyxFQUFqRCxFQUFxRDtBQUNuRGdOLGNBQU0sR0FBR3FHLFlBQVksQ0FBQ3JHLE1BQUQsRUFBU1UsS0FBSyxDQUFDOEYsTUFBTixDQUFheFQsQ0FBYixDQUFULEVBQTBCNEosRUFBMUIsQ0FBckI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSUssT0FBTyxHQUFHLEVBQWQ7QUFDQSxNQUFJcEosR0FBSjs7QUFDQSxPQUFLQSxHQUFMLElBQVltTSxNQUFaLEVBQW9CO0FBQ2xCeUcsY0FBVSxDQUFDNVMsR0FBRCxDQUFWO0FBQ0Q7O0FBQ0QsT0FBS0EsR0FBTCxJQUFZNk0sS0FBWixFQUFtQjtBQUNqQixRQUFJLENBQUM5TSxNQUFNLENBQUNvTSxNQUFELEVBQVNuTSxHQUFULENBQVgsRUFBMEI7QUFDeEI0UyxnQkFBVSxDQUFDNVMsR0FBRCxDQUFWO0FBQ0Q7QUFDRjs7QUFDRCxXQUFTNFMsVUFBVCxDQUFxQjVTLEdBQXJCLEVBQTBCO0FBQ3hCLFFBQUk2UyxLQUFLLEdBQUc1QyxNQUFNLENBQUNqUSxHQUFELENBQU4sSUFBZW9RLFlBQTNCO0FBQ0FoSCxXQUFPLENBQUNwSixHQUFELENBQVAsR0FBZTZTLEtBQUssQ0FBQzFHLE1BQU0sQ0FBQ25NLEdBQUQsQ0FBUCxFQUFjNk0sS0FBSyxDQUFDN00sR0FBRCxDQUFuQixFQUEwQitJLEVBQTFCLEVBQThCL0ksR0FBOUIsQ0FBcEI7QUFDRDs7QUFDRCxTQUFPb0osT0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzBKLFlBQVQsQ0FDRTFKLE9BREYsRUFFRW1JLElBRkYsRUFHRWpILEVBSEYsRUFJRXlJLFdBSkYsRUFLRTtBQUNBO0FBQ0EsTUFBSSxPQUFPekksRUFBUCxLQUFjLFFBQWxCLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBQ0QsTUFBSTBJLE1BQU0sR0FBRzVKLE9BQU8sQ0FBQ21JLElBQUQsQ0FBcEIsQ0FMQSxDQU1BOztBQUNBLE1BQUl4UixNQUFNLENBQUNpVCxNQUFELEVBQVMxSSxFQUFULENBQVYsRUFBd0I7QUFBRSxXQUFPMEksTUFBTSxDQUFDMUksRUFBRCxDQUFiO0FBQW1COztBQUM3QyxNQUFJMkksV0FBVyxHQUFHMVMsUUFBUSxDQUFDK0osRUFBRCxDQUExQjs7QUFDQSxNQUFJdkssTUFBTSxDQUFDaVQsTUFBRCxFQUFTQyxXQUFULENBQVYsRUFBaUM7QUFBRSxXQUFPRCxNQUFNLENBQUNDLFdBQUQsQ0FBYjtBQUE0Qjs7QUFDL0QsTUFBSUMsWUFBWSxHQUFHdFMsVUFBVSxDQUFDcVMsV0FBRCxDQUE3Qjs7QUFDQSxNQUFJbFQsTUFBTSxDQUFDaVQsTUFBRCxFQUFTRSxZQUFULENBQVYsRUFBa0M7QUFBRSxXQUFPRixNQUFNLENBQUNFLFlBQUQsQ0FBYjtBQUE2QixHQVhqRSxDQVlBOzs7QUFDQSxNQUFJaFIsR0FBRyxHQUFHOFEsTUFBTSxDQUFDMUksRUFBRCxDQUFOLElBQWMwSSxNQUFNLENBQUNDLFdBQUQsQ0FBcEIsSUFBcUNELE1BQU0sQ0FBQ0UsWUFBRCxDQUFyRDs7QUFDQSxNQUFJclAsS0FBQSxJQUF5Q2tQLFdBQXpDLElBQXdELENBQUM3USxHQUE3RCxFQUFrRTtBQUNoRW9HLFFBQUksQ0FDRix1QkFBdUJpSixJQUFJLENBQUMvVCxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUF2QixHQUEyQyxJQUEzQyxHQUFrRDhNLEVBRGhELEVBRUZsQixPQUZFLENBQUo7QUFJRDs7QUFDRCxTQUFPbEgsR0FBUDtBQUNEO0FBRUQ7OztBQUlBLFNBQVNpUixZQUFULENBQ0VuVCxHQURGLEVBRUVvVCxXQUZGLEVBR0VqRCxTQUhGLEVBSUVwSCxFQUpGLEVBS0U7QUFDQSxNQUFJc0ssSUFBSSxHQUFHRCxXQUFXLENBQUNwVCxHQUFELENBQXRCO0FBQ0EsTUFBSXNULE1BQU0sR0FBRyxDQUFDdlQsTUFBTSxDQUFDb1EsU0FBRCxFQUFZblEsR0FBWixDQUFwQjtBQUNBLE1BQUloRCxLQUFLLEdBQUdtVCxTQUFTLENBQUNuUSxHQUFELENBQXJCLENBSEEsQ0FJQTs7QUFDQSxNQUFJdVQsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQUQsRUFBVUosSUFBSSxDQUFDOUIsSUFBZixDQUEvQjs7QUFDQSxNQUFJZ0MsWUFBWSxHQUFHLENBQUMsQ0FBcEIsRUFBdUI7QUFDckIsUUFBSUQsTUFBTSxJQUFJLENBQUN2VCxNQUFNLENBQUNzVCxJQUFELEVBQU8sU0FBUCxDQUFyQixFQUF3QztBQUN0Q3JXLFdBQUssR0FBRyxLQUFSO0FBQ0QsS0FGRCxNQUVPLElBQUlBLEtBQUssS0FBSyxFQUFWLElBQWdCQSxLQUFLLEtBQUsrRCxTQUFTLENBQUNmLEdBQUQsQ0FBdkMsRUFBOEM7QUFDbkQ7QUFDQTtBQUNBLFVBQUkwVCxXQUFXLEdBQUdGLFlBQVksQ0FBQ3pWLE1BQUQsRUFBU3NWLElBQUksQ0FBQzlCLElBQWQsQ0FBOUI7O0FBQ0EsVUFBSW1DLFdBQVcsR0FBRyxDQUFkLElBQW1CSCxZQUFZLEdBQUdHLFdBQXRDLEVBQW1EO0FBQ2pEMVcsYUFBSyxHQUFHLElBQVI7QUFDRDtBQUNGO0FBQ0YsR0FqQkQsQ0FrQkE7OztBQUNBLE1BQUlBLEtBQUssS0FBS0wsU0FBZCxFQUF5QjtBQUN2QkssU0FBSyxHQUFHMlcsbUJBQW1CLENBQUM1SyxFQUFELEVBQUtzSyxJQUFMLEVBQVdyVCxHQUFYLENBQTNCLENBRHVCLENBRXZCO0FBQ0E7O0FBQ0EsUUFBSTRULGlCQUFpQixHQUFHdEYsYUFBeEI7QUFDQUMsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDQVEsV0FBTyxDQUFDL1IsS0FBRCxDQUFQO0FBQ0F1UixtQkFBZSxDQUFDcUYsaUJBQUQsQ0FBZjtBQUNEOztBQUNELE1BQ0UvUCxJQURGLEVBSUU7QUFDQWdRLGNBQVUsQ0FBQ1IsSUFBRCxFQUFPclQsR0FBUCxFQUFZaEQsS0FBWixFQUFtQitMLEVBQW5CLEVBQXVCdUssTUFBdkIsQ0FBVjtBQUNEOztBQUNELFNBQU90VyxLQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVMyVyxtQkFBVCxDQUE4QjVLLEVBQTlCLEVBQWtDc0ssSUFBbEMsRUFBd0NyVCxHQUF4QyxFQUE2QztBQUMzQztBQUNBLE1BQUksQ0FBQ0QsTUFBTSxDQUFDc1QsSUFBRCxFQUFPLFNBQVAsQ0FBWCxFQUE4QjtBQUM1QixXQUFPMVcsU0FBUDtBQUNEOztBQUNELE1BQUlvSSxHQUFHLEdBQUdzTyxJQUFJLENBQUNTLE9BQWYsQ0FMMkMsQ0FNM0M7O0FBQ0EsTUFBSWpRLEtBQUEsSUFBeUM1RyxRQUFRLENBQUM4SCxHQUFELENBQXJELEVBQTREO0FBQzFEdUQsUUFBSSxDQUNGLHFDQUFxQ3RJLEdBQXJDLEdBQTJDLEtBQTNDLEdBQ0EsMkRBREEsR0FFQSw4QkFIRSxFQUlGK0ksRUFKRSxDQUFKO0FBTUQsR0FkMEMsQ0FlM0M7QUFDQTs7O0FBQ0EsTUFBSUEsRUFBRSxJQUFJQSxFQUFFLENBQUNRLFFBQUgsQ0FBWTRHLFNBQWxCLElBQ0ZwSCxFQUFFLENBQUNRLFFBQUgsQ0FBWTRHLFNBQVosQ0FBc0JuUSxHQUF0QixNQUErQnJELFNBRDdCLElBRUZvTSxFQUFFLENBQUNnTCxNQUFILENBQVUvVCxHQUFWLE1BQW1CckQsU0FGckIsRUFHRTtBQUNBLFdBQU9vTSxFQUFFLENBQUNnTCxNQUFILENBQVUvVCxHQUFWLENBQVA7QUFDRCxHQXRCMEMsQ0F1QjNDO0FBQ0E7OztBQUNBLFNBQU8sT0FBTytFLEdBQVAsS0FBZSxVQUFmLElBQTZCaVAsT0FBTyxDQUFDWCxJQUFJLENBQUM5QixJQUFOLENBQVAsS0FBdUIsVUFBcEQsR0FDSHhNLEdBQUcsQ0FBQ3hILElBQUosQ0FBU3dMLEVBQVQsQ0FERyxHQUVIaEUsR0FGSjtBQUdEO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTOE8sVUFBVCxDQUNFUixJQURGLEVBRUU1SixJQUZGLEVBR0V6TSxLQUhGLEVBSUUrTCxFQUpGLEVBS0V1SyxNQUxGLEVBTUU7QUFDQSxNQUFJRCxJQUFJLENBQUNZLFFBQUwsSUFBaUJYLE1BQXJCLEVBQTZCO0FBQzNCaEwsUUFBSSxDQUNGLDZCQUE2Qm1CLElBQTdCLEdBQW9DLEdBRGxDLEVBRUZWLEVBRkUsQ0FBSjtBQUlBO0FBQ0Q7O0FBQ0QsTUFBSS9MLEtBQUssSUFBSSxJQUFULElBQWlCLENBQUNxVyxJQUFJLENBQUNZLFFBQTNCLEVBQXFDO0FBQ25DO0FBQ0Q7O0FBQ0QsTUFBSTFDLElBQUksR0FBRzhCLElBQUksQ0FBQzlCLElBQWhCO0FBQ0EsTUFBSTJDLEtBQUssR0FBRyxDQUFDM0MsSUFBRCxJQUFTQSxJQUFJLEtBQUssSUFBOUI7QUFDQSxNQUFJNEMsYUFBYSxHQUFHLEVBQXBCOztBQUNBLE1BQUk1QyxJQUFKLEVBQVU7QUFDUixRQUFJLENBQUNqVCxLQUFLLENBQUNDLE9BQU4sQ0FBY2dULElBQWQsQ0FBTCxFQUEwQjtBQUN4QkEsVUFBSSxHQUFHLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUNELFNBQUssSUFBSXBTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdvUyxJQUFJLENBQUNuUyxNQUFULElBQW1CLENBQUM4VSxLQUFwQyxFQUEyQy9VLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsVUFBSWlWLFlBQVksR0FBR0MsVUFBVSxDQUFDclgsS0FBRCxFQUFRdVUsSUFBSSxDQUFDcFMsQ0FBRCxDQUFaLENBQTdCO0FBQ0FnVixtQkFBYSxDQUFDakssSUFBZCxDQUFtQmtLLFlBQVksQ0FBQ0UsWUFBYixJQUE2QixFQUFoRDtBQUNBSixXQUFLLEdBQUdFLFlBQVksQ0FBQ0YsS0FBckI7QUFDRDtBQUNGOztBQUVELE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Y1TCxRQUFJLENBQ0ZpTSxxQkFBcUIsQ0FBQzlLLElBQUQsRUFBT3pNLEtBQVAsRUFBY21YLGFBQWQsQ0FEbkIsRUFFRnBMLEVBRkUsQ0FBSjtBQUlBO0FBQ0Q7O0FBQ0QsTUFBSXlMLFNBQVMsR0FBR25CLElBQUksQ0FBQ21CLFNBQXJCOztBQUNBLE1BQUlBLFNBQUosRUFBZTtBQUNiLFFBQUksQ0FBQ0EsU0FBUyxDQUFDeFgsS0FBRCxDQUFkLEVBQXVCO0FBQ3JCc0wsVUFBSSxDQUNGLDJEQUEyRG1CLElBQTNELEdBQWtFLElBRGhFLEVBRUZWLEVBRkUsQ0FBSjtBQUlEO0FBQ0Y7QUFDRjs7QUFFRCxJQUFJMEwsYUFBYSxHQUFHLDJDQUFwQjs7QUFFQSxTQUFTSixVQUFULENBQXFCclgsS0FBckIsRUFBNEJ1VSxJQUE1QixFQUFrQztBQUNoQyxNQUFJMkMsS0FBSjtBQUNBLE1BQUlJLFlBQVksR0FBR04sT0FBTyxDQUFDekMsSUFBRCxDQUExQjs7QUFDQSxNQUFJa0QsYUFBYSxDQUFDaFAsSUFBZCxDQUFtQjZPLFlBQW5CLENBQUosRUFBc0M7QUFDcEMsUUFBSUksQ0FBQyxHQUFHLE9BQU8xWCxLQUFmO0FBQ0FrWCxTQUFLLEdBQUdRLENBQUMsS0FBS0osWUFBWSxDQUFDalYsV0FBYixFQUFkLENBRm9DLENBR3BDOztBQUNBLFFBQUksQ0FBQzZVLEtBQUQsSUFBVVEsQ0FBQyxLQUFLLFFBQXBCLEVBQThCO0FBQzVCUixXQUFLLEdBQUdsWCxLQUFLLFlBQVl1VSxJQUF6QjtBQUNEO0FBQ0YsR0FQRCxNQU9PLElBQUkrQyxZQUFZLEtBQUssUUFBckIsRUFBK0I7QUFDcENKLFNBQUssR0FBR3pXLGFBQWEsQ0FBQ1QsS0FBRCxDQUFyQjtBQUNELEdBRk0sTUFFQSxJQUFJc1gsWUFBWSxLQUFLLE9BQXJCLEVBQThCO0FBQ25DSixTQUFLLEdBQUc1VixLQUFLLENBQUNDLE9BQU4sQ0FBY3ZCLEtBQWQsQ0FBUjtBQUNELEdBRk0sTUFFQTtBQUNMa1gsU0FBSyxHQUFHbFgsS0FBSyxZQUFZdVUsSUFBekI7QUFDRDs7QUFDRCxTQUFPO0FBQ0wyQyxTQUFLLEVBQUVBLEtBREY7QUFFTEksZ0JBQVksRUFBRUE7QUFGVCxHQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTTixPQUFULENBQWtCOVQsRUFBbEIsRUFBc0I7QUFDcEIsTUFBSTJHLEtBQUssR0FBRzNHLEVBQUUsSUFBSUEsRUFBRSxDQUFDN0MsUUFBSCxHQUFjd0osS0FBZCxDQUFvQixvQkFBcEIsQ0FBbEI7QUFDQSxTQUFPQSxLQUFLLEdBQUdBLEtBQUssQ0FBQyxDQUFELENBQVIsR0FBYyxFQUExQjtBQUNEOztBQUVELFNBQVM4TixVQUFULENBQXFCeFQsQ0FBckIsRUFBd0JpQixDQUF4QixFQUEyQjtBQUN6QixTQUFPNFIsT0FBTyxDQUFDN1MsQ0FBRCxDQUFQLEtBQWU2UyxPQUFPLENBQUM1UixDQUFELENBQTdCO0FBQ0Q7O0FBRUQsU0FBU29SLFlBQVQsQ0FBdUJqQyxJQUF2QixFQUE2QjRDLGFBQTdCLEVBQTRDO0FBQzFDLE1BQUksQ0FBQzdWLEtBQUssQ0FBQ0MsT0FBTixDQUFjNFYsYUFBZCxDQUFMLEVBQW1DO0FBQ2pDLFdBQU9RLFVBQVUsQ0FBQ1IsYUFBRCxFQUFnQjVDLElBQWhCLENBQVYsR0FBa0MsQ0FBbEMsR0FBc0MsQ0FBQyxDQUE5QztBQUNEOztBQUNELE9BQUssSUFBSXBTLENBQUMsR0FBRyxDQUFSLEVBQVcwTyxHQUFHLEdBQUdzRyxhQUFhLENBQUMvVSxNQUFwQyxFQUE0Q0QsQ0FBQyxHQUFHME8sR0FBaEQsRUFBcUQxTyxDQUFDLEVBQXRELEVBQTBEO0FBQ3hELFFBQUl3VixVQUFVLENBQUNSLGFBQWEsQ0FBQ2hWLENBQUQsQ0FBZCxFQUFtQm9TLElBQW5CLENBQWQsRUFBd0M7QUFDdEMsYUFBT3BTLENBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBRUQsU0FBU29WLHFCQUFULENBQWdDOUssSUFBaEMsRUFBc0N6TSxLQUF0QyxFQUE2Q21YLGFBQTdDLEVBQTREO0FBQzFELE1BQUlTLE9BQU8sR0FBRyxnREFBZ0RuTCxJQUFoRCxHQUF1RCxLQUF2RCxHQUNaLFlBRFksR0FDSTBLLGFBQWEsQ0FBQ3BWLEdBQWQsQ0FBa0I2QixVQUFsQixFQUE4QnVKLElBQTlCLENBQW1DLElBQW5DLENBRGxCO0FBRUEsTUFBSW1LLFlBQVksR0FBR0gsYUFBYSxDQUFDLENBQUQsQ0FBaEM7QUFDQSxNQUFJVSxZQUFZLEdBQUd2WCxTQUFTLENBQUNOLEtBQUQsQ0FBNUI7QUFDQSxNQUFJOFgsYUFBYSxHQUFHQyxVQUFVLENBQUMvWCxLQUFELEVBQVFzWCxZQUFSLENBQTlCO0FBQ0EsTUFBSVUsYUFBYSxHQUFHRCxVQUFVLENBQUMvWCxLQUFELEVBQVE2WCxZQUFSLENBQTlCLENBTjBELENBTzFEOztBQUNBLE1BQUlWLGFBQWEsQ0FBQy9VLE1BQWQsS0FBeUIsQ0FBekIsSUFDQTZWLFlBQVksQ0FBQ1gsWUFBRCxDQURaLElBRUEsQ0FBQ1ksU0FBUyxDQUFDWixZQUFELEVBQWVPLFlBQWYsQ0FGZCxFQUU0QztBQUMxQ0QsV0FBTyxJQUFJLGlCQUFpQkUsYUFBNUI7QUFDRDs7QUFDREYsU0FBTyxJQUFJLFdBQVdDLFlBQVgsR0FBMEIsR0FBckMsQ0FiMEQsQ0FjMUQ7O0FBQ0EsTUFBSUksWUFBWSxDQUFDSixZQUFELENBQWhCLEVBQWdDO0FBQzlCRCxXQUFPLElBQUksZ0JBQWdCSSxhQUFoQixHQUFnQyxHQUEzQztBQUNEOztBQUNELFNBQU9KLE9BQVA7QUFDRDs7QUFFRCxTQUFTRyxVQUFULENBQXFCL1gsS0FBckIsRUFBNEJ1VSxJQUE1QixFQUFrQztBQUNoQyxNQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQixXQUFRLE9BQU92VSxLQUFQLEdBQWUsSUFBdkI7QUFDRCxHQUZELE1BRU8sSUFBSXVVLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQzVCLFdBQVEsS0FBTTRELE1BQU0sQ0FBQ25ZLEtBQUQsQ0FBcEI7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFRLEtBQUtBLEtBQWI7QUFDRDtBQUNGOztBQUVELFNBQVNpWSxZQUFULENBQXVCalksS0FBdkIsRUFBOEI7QUFDNUIsTUFBSW9ZLGFBQWEsR0FBRyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCLENBQXBCO0FBQ0EsU0FBT0EsYUFBYSxDQUFDQyxJQUFkLENBQW1CLFVBQVVDLElBQVYsRUFBZ0I7QUFBRSxXQUFPdFksS0FBSyxDQUFDcUMsV0FBTixPQUF3QmlXLElBQS9CO0FBQXNDLEdBQTNFLENBQVA7QUFDRDs7QUFFRCxTQUFTSixTQUFULEdBQXNCO0FBQ3BCLE1BQUl0SCxJQUFJLEdBQUcsRUFBWDtBQUFBLE1BQWVDLEdBQUcsR0FBR3hNLFNBQVMsQ0FBQ2pDLE1BQS9COztBQUNBLFNBQVF5TyxHQUFHLEVBQVgsRUFBZ0JELElBQUksQ0FBRUMsR0FBRixDQUFKLEdBQWN4TSxTQUFTLENBQUV3TSxHQUFGLENBQXZCOztBQUVoQixTQUFPRCxJQUFJLENBQUN5SCxJQUFMLENBQVUsVUFBVUMsSUFBVixFQUFnQjtBQUFFLFdBQU9BLElBQUksQ0FBQ2pXLFdBQUwsT0FBdUIsU0FBOUI7QUFBMEMsR0FBdEUsQ0FBUDtBQUNEO0FBRUQ7OztBQUVBLFNBQVNrVyxXQUFULENBQXNCQyxHQUF0QixFQUEyQnpNLEVBQTNCLEVBQStCME0sSUFBL0IsRUFBcUM7QUFDbkM7QUFDQTtBQUNBdkssWUFBVTs7QUFDVixNQUFJO0FBQ0YsUUFBSW5DLEVBQUosRUFBUTtBQUNOLFVBQUkyTSxHQUFHLEdBQUczTSxFQUFWOztBQUNBLGFBQVEyTSxHQUFHLEdBQUdBLEdBQUcsQ0FBQzVMLE9BQWxCLEVBQTRCO0FBQzFCLFlBQUlxSCxLQUFLLEdBQUd1RSxHQUFHLENBQUNuTSxRQUFKLENBQWFvTSxhQUF6Qjs7QUFDQSxZQUFJeEUsS0FBSixFQUFXO0FBQ1QsZUFBSyxJQUFJaFMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dTLEtBQUssQ0FBQy9SLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLGdCQUFJO0FBQ0Ysa0JBQUl5VyxPQUFPLEdBQUd6RSxLQUFLLENBQUNoUyxDQUFELENBQUwsQ0FBUzVCLElBQVQsQ0FBY21ZLEdBQWQsRUFBbUJGLEdBQW5CLEVBQXdCek0sRUFBeEIsRUFBNEIwTSxJQUE1QixNQUFzQyxLQUFwRDs7QUFDQSxrQkFBSUcsT0FBSixFQUFhO0FBQUU7QUFBUTtBQUN4QixhQUhELENBR0UsT0FBTy9TLENBQVAsRUFBVTtBQUNWZ1QsK0JBQWlCLENBQUNoVCxDQUFELEVBQUk2UyxHQUFKLEVBQVMsb0JBQVQsQ0FBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGOztBQUNERyxxQkFBaUIsQ0FBQ0wsR0FBRCxFQUFNek0sRUFBTixFQUFVME0sSUFBVixDQUFqQjtBQUNELEdBbEJELFNBa0JVO0FBQ1J0SyxhQUFTO0FBQ1Y7QUFDRjs7QUFFRCxTQUFTMkssdUJBQVQsQ0FDRUMsT0FERixFQUVFcEssT0FGRixFQUdFaUMsSUFIRixFQUlFN0UsRUFKRixFQUtFME0sSUFMRixFQU1FO0FBQ0EsTUFBSXZULEdBQUo7O0FBQ0EsTUFBSTtBQUNGQSxPQUFHLEdBQUcwTCxJQUFJLEdBQUdtSSxPQUFPLENBQUN6VSxLQUFSLENBQWNxSyxPQUFkLEVBQXVCaUMsSUFBdkIsQ0FBSCxHQUFrQ21JLE9BQU8sQ0FBQ3hZLElBQVIsQ0FBYW9PLE9BQWIsQ0FBNUM7O0FBQ0EsUUFBSXpKLEdBQUcsSUFBSSxDQUFDQSxHQUFHLENBQUNvSCxNQUFaLElBQXNCbkwsU0FBUyxDQUFDK0QsR0FBRCxDQUEvQixJQUF3QyxDQUFDQSxHQUFHLENBQUM4VCxRQUFqRCxFQUEyRDtBQUN6RDlULFNBQUcsQ0FBQzdELEtBQUosQ0FBVSxVQUFVd0UsQ0FBVixFQUFhO0FBQUUsZUFBTzBTLFdBQVcsQ0FBQzFTLENBQUQsRUFBSWtHLEVBQUosRUFBUTBNLElBQUksR0FBRyxrQkFBZixDQUFsQjtBQUF1RCxPQUFoRixFQUR5RCxDQUV6RDtBQUNBOztBQUNBdlQsU0FBRyxDQUFDOFQsUUFBSixHQUFlLElBQWY7QUFDRDtBQUNGLEdBUkQsQ0FRRSxPQUFPblQsQ0FBUCxFQUFVO0FBQ1YwUyxlQUFXLENBQUMxUyxDQUFELEVBQUlrRyxFQUFKLEVBQVEwTSxJQUFSLENBQVg7QUFDRDs7QUFDRCxTQUFPdlQsR0FBUDtBQUNEOztBQUVELFNBQVMyVCxpQkFBVCxDQUE0QkwsR0FBNUIsRUFBaUN6TSxFQUFqQyxFQUFxQzBNLElBQXJDLEVBQTJDO0FBQ3pDLE1BQUloUyxNQUFNLENBQUNPLFlBQVgsRUFBeUI7QUFDdkIsUUFBSTtBQUNGLGFBQU9QLE1BQU0sQ0FBQ08sWUFBUCxDQUFvQnpHLElBQXBCLENBQXlCLElBQXpCLEVBQStCaVksR0FBL0IsRUFBb0N6TSxFQUFwQyxFQUF3QzBNLElBQXhDLENBQVA7QUFDRCxLQUZELENBRUUsT0FBTzVTLENBQVAsRUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFJQSxDQUFDLEtBQUsyUyxHQUFWLEVBQWU7QUFDYlMsZ0JBQVEsQ0FBQ3BULENBQUQsRUFBSSxJQUFKLEVBQVUscUJBQVYsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRG9ULFVBQVEsQ0FBQ1QsR0FBRCxFQUFNek0sRUFBTixFQUFVME0sSUFBVixDQUFSO0FBQ0Q7O0FBRUQsU0FBU1EsUUFBVCxDQUFtQlQsR0FBbkIsRUFBd0J6TSxFQUF4QixFQUE0QjBNLElBQTVCLEVBQWtDO0FBQ2hDLE1BQUk1UixJQUFKLEVBQTJDO0FBQ3pDeUUsUUFBSSxDQUFFLGNBQWNtTixJQUFkLEdBQXFCLE1BQXJCLEdBQStCRCxHQUFHLENBQUNuWSxRQUFKLEVBQS9CLEdBQWlELElBQW5ELEVBQTBEMEwsRUFBMUQsQ0FBSjtBQUNEO0FBQ0Q7OztBQUNBLE1BQUksQ0FBQ25ELFNBQVMsSUFBSUUsTUFBZCxLQUF5QixPQUFPNkMsT0FBUCxLQUFtQixXQUFoRCxFQUE2RDtBQUMzREEsV0FBTyxDQUFDTSxLQUFSLENBQWN1TSxHQUFkO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsVUFBTUEsR0FBTjtBQUNEO0FBQ0Y7QUFFRDs7O0FBRUEsSUFBSVUsZ0JBQWdCLEdBQUcsS0FBdkI7QUFFQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFFQSxTQUFTQyxjQUFULEdBQTJCO0FBQ3pCRCxTQUFPLEdBQUcsS0FBVjtBQUNBLE1BQUlFLE1BQU0sR0FBR0gsU0FBUyxDQUFDM1ksS0FBVixDQUFnQixDQUFoQixDQUFiO0FBQ0EyWSxXQUFTLENBQUMvVyxNQUFWLEdBQW1CLENBQW5COztBQUNBLE9BQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21YLE1BQU0sQ0FBQ2xYLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDbVgsVUFBTSxDQUFDblgsQ0FBRCxDQUFOO0FBQ0Q7QUFDRixDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSW9YLFNBQUosQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQSxJQUFJLE9BQU9DLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0M5TyxRQUFRLENBQUM4TyxPQUFELENBQTlDLEVBQXlEO0FBQ3ZELE1BQUlDLENBQUMsR0FBR0QsT0FBTyxDQUFDRSxPQUFSLEVBQVI7O0FBQ0FILFdBQVMsR0FBRyxZQUFZO0FBQ3RCRSxLQUFDLENBQUNyWSxJQUFGLENBQU9pWSxjQUFQLEVBRHNCLENBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSTVQLEtBQUosRUFBVztBQUFFa1EsZ0JBQVUsQ0FBQ3hVLElBQUQsQ0FBVjtBQUFtQjtBQUNqQyxHQVJEOztBQVNBK1Qsa0JBQWdCLEdBQUcsSUFBbkI7QUFDRCxDQVpELE1BWU8sSUFBSSxDQUFDN1AsSUFBRCxJQUFTLE9BQU91USxnQkFBUCxLQUE0QixXQUFyQyxLQUNUbFAsUUFBUSxDQUFDa1AsZ0JBQUQsQ0FBUixJQUNBO0FBQ0FBLGdCQUFnQixDQUFDdlosUUFBakIsT0FBZ0Msc0NBSHZCLENBQUosRUFJSjtBQUNEO0FBQ0E7QUFDQTtBQUNBLE1BQUl3WixPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQUlDLFFBQVEsR0FBRyxJQUFJRixnQkFBSixDQUFxQlAsY0FBckIsQ0FBZjtBQUNBLE1BQUlVLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCbFosTUFBTSxDQUFDOFksT0FBRCxDQUE5QixDQUFmO0FBQ0FDLFVBQVEsQ0FBQy9ILE9BQVQsQ0FBaUJnSSxRQUFqQixFQUEyQjtBQUN6QkcsaUJBQWEsRUFBRTtBQURVLEdBQTNCOztBQUdBWCxXQUFTLEdBQUcsWUFBWTtBQUN0Qk0sV0FBTyxHQUFHLENBQUNBLE9BQU8sR0FBRyxDQUFYLElBQWdCLENBQTFCO0FBQ0FFLFlBQVEsQ0FBQ3hMLElBQVQsR0FBZ0J4TixNQUFNLENBQUM4WSxPQUFELENBQXRCO0FBQ0QsR0FIRDs7QUFJQVgsa0JBQWdCLEdBQUcsSUFBbkI7QUFDRCxDQW5CTSxNQW1CQSxJQUFJLE9BQU9pQixZQUFQLEtBQXdCLFdBQXhCLElBQXVDelAsUUFBUSxDQUFDeVAsWUFBRCxDQUFuRCxFQUFtRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQVosV0FBUyxHQUFHLFlBQVk7QUFDdEJZLGdCQUFZLENBQUNkLGNBQUQsQ0FBWjtBQUNELEdBRkQ7QUFHRCxDQVBNLE1BT0E7QUFDTDtBQUNBRSxXQUFTLEdBQUcsWUFBWTtBQUN0QkksY0FBVSxDQUFDTixjQUFELEVBQWlCLENBQWpCLENBQVY7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU2UsUUFBVCxDQUFtQkMsRUFBbkIsRUFBdUJwVyxHQUF2QixFQUE0QjtBQUMxQixNQUFJcVcsUUFBSjs7QUFDQW5CLFdBQVMsQ0FBQ2pNLElBQVYsQ0FBZSxZQUFZO0FBQ3pCLFFBQUltTixFQUFKLEVBQVE7QUFDTixVQUFJO0FBQ0ZBLFVBQUUsQ0FBQzlaLElBQUgsQ0FBUTBELEdBQVI7QUFDRCxPQUZELENBRUUsT0FBTzRCLENBQVAsRUFBVTtBQUNWMFMsbUJBQVcsQ0FBQzFTLENBQUQsRUFBSTVCLEdBQUosRUFBUyxVQUFULENBQVg7QUFDRDtBQUNGLEtBTkQsTUFNTyxJQUFJcVcsUUFBSixFQUFjO0FBQ25CQSxjQUFRLENBQUNyVyxHQUFELENBQVI7QUFDRDtBQUNGLEdBVkQ7O0FBV0EsTUFBSSxDQUFDbVYsT0FBTCxFQUFjO0FBQ1pBLFdBQU8sR0FBRyxJQUFWO0FBQ0FHLGFBQVM7QUFDVixHQWhCeUIsQ0FpQjFCOzs7QUFDQSxNQUFJLENBQUNjLEVBQUQsSUFBTyxPQUFPYixPQUFQLEtBQW1CLFdBQTlCLEVBQTJDO0FBQ3pDLFdBQU8sSUFBSUEsT0FBSixDQUFZLFVBQVVFLE9BQVYsRUFBbUI7QUFDcENZLGNBQVEsR0FBR1osT0FBWDtBQUNELEtBRk0sQ0FBUDtBQUdEO0FBQ0Y7QUFFRDs7QUFFQTs7O0FBRUEsSUFBSWEsU0FBSjs7QUFFQSxJQUFJMVQsSUFBSixFQUEyQztBQUN6QyxNQUFJMlQsY0FBYyxHQUFHNVksT0FBTyxDQUMxQiwyQ0FDQSxnRkFEQSxHQUVBLHdFQUZBLEdBR0EsU0FKMEIsQ0FJaEI7QUFKZ0IsR0FBNUI7O0FBT0EsTUFBSTZZLGNBQWMsR0FBRyxVQUFVN00sTUFBVixFQUFrQjVLLEdBQWxCLEVBQXVCO0FBQzFDc0ksUUFBSSxDQUNGLDBCQUEwQnRJLEdBQTFCLEdBQWdDLHdDQUFoQyxHQUNBLHNFQURBLEdBRUEsK0RBRkEsR0FHQSw2QkFIQSxHQUlBLGdGQUxFLEVBTUY0SyxNQU5FLENBQUo7QUFRRCxHQVREOztBQVdBLE1BQUk4TSxrQkFBa0IsR0FBRyxVQUFVOU0sTUFBVixFQUFrQjVLLEdBQWxCLEVBQXVCO0FBQzlDc0ksUUFBSSxDQUNGLGdCQUFnQnRJLEdBQWhCLEdBQXNCLG1DQUF0QixHQUE0REEsR0FBNUQsR0FBa0UsYUFBbEUsR0FDQSw2RUFEQSxHQUVBLHdDQUZBLEdBR0EscUNBSkUsRUFLRjRLLE1BTEUsQ0FBSjtBQU9ELEdBUkQ7O0FBVUEsTUFBSStNLFFBQVEsR0FDVixPQUFPQyxLQUFQLEtBQWlCLFdBQWpCLElBQWdDbFEsUUFBUSxDQUFDa1EsS0FBRCxDQUQxQzs7QUFHQSxNQUFJRCxRQUFKLEVBQWM7QUFDWixRQUFJRSxpQkFBaUIsR0FBR2paLE9BQU8sQ0FBQyw2Q0FBRCxDQUEvQjtBQUNBNkUsVUFBTSxDQUFDVSxRQUFQLEdBQWtCLElBQUl5VCxLQUFKLENBQVVuVSxNQUFNLENBQUNVLFFBQWpCLEVBQTJCO0FBQzNDK0QsU0FBRyxFQUFFLFNBQVNBLEdBQVQsQ0FBYzBDLE1BQWQsRUFBc0I1SyxHQUF0QixFQUEyQmhELEtBQTNCLEVBQWtDO0FBQ3JDLFlBQUk2YSxpQkFBaUIsQ0FBQzdYLEdBQUQsQ0FBckIsRUFBNEI7QUFDMUJzSSxjQUFJLENBQUUsOERBQThEdEksR0FBaEUsQ0FBSjtBQUNBLGlCQUFPLEtBQVA7QUFDRCxTQUhELE1BR087QUFDTDRLLGdCQUFNLENBQUM1SyxHQUFELENBQU4sR0FBY2hELEtBQWQ7QUFDQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQVQwQyxLQUEzQixDQUFsQjtBQVdEOztBQUVELE1BQUk4YSxVQUFVLEdBQUc7QUFDZjNQLE9BQUcsRUFBRSxTQUFTQSxHQUFULENBQWN5QyxNQUFkLEVBQXNCNUssR0FBdEIsRUFBMkI7QUFDOUIsVUFBSW1JLEdBQUcsSUFBR25JLEdBQUcsSUFBSTRLLE1BQVYsQ0FBUDtBQUNBLFVBQUltTixTQUFTLEdBQUdQLGNBQWMsQ0FBQ3hYLEdBQUQsQ0FBZCxJQUNiLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCQSxHQUFHLENBQUNhLE1BQUosQ0FBVyxDQUFYLE1BQWtCLEdBQTdDLElBQW9ELEVBQUViLEdBQUcsSUFBSTRLLE1BQU0sQ0FBQ29OLEtBQWhCLENBRHZEOztBQUVBLFVBQUksQ0FBQzdQLEdBQUQsSUFBUSxDQUFDNFAsU0FBYixFQUF3QjtBQUN0QixZQUFJL1gsR0FBRyxJQUFJNEssTUFBTSxDQUFDb04sS0FBbEIsRUFBeUI7QUFBRU4sNEJBQWtCLENBQUM5TSxNQUFELEVBQVM1SyxHQUFULENBQWxCO0FBQWtDLFNBQTdELE1BQ0s7QUFBRXlYLHdCQUFjLENBQUM3TSxNQUFELEVBQVM1SyxHQUFULENBQWQ7QUFBOEI7QUFDdEM7O0FBQ0QsYUFBT21JLEdBQUcsSUFBSSxDQUFDNFAsU0FBZjtBQUNEO0FBVmMsR0FBakI7QUFhQSxNQUFJRSxVQUFVLEdBQUc7QUFDZi9RLE9BQUcsRUFBRSxTQUFTQSxHQUFULENBQWMwRCxNQUFkLEVBQXNCNUssR0FBdEIsRUFBMkI7QUFDOUIsVUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQixFQUFFQSxHQUFHLElBQUk0SyxNQUFULENBQS9CLEVBQWlEO0FBQy9DLFlBQUk1SyxHQUFHLElBQUk0SyxNQUFNLENBQUNvTixLQUFsQixFQUF5QjtBQUFFTiw0QkFBa0IsQ0FBQzlNLE1BQUQsRUFBUzVLLEdBQVQsQ0FBbEI7QUFBa0MsU0FBN0QsTUFDSztBQUFFeVgsd0JBQWMsQ0FBQzdNLE1BQUQsRUFBUzVLLEdBQVQsQ0FBZDtBQUE4QjtBQUN0Qzs7QUFDRCxhQUFPNEssTUFBTSxDQUFDNUssR0FBRCxDQUFiO0FBQ0Q7QUFQYyxHQUFqQjs7QUFVQXVYLFdBQVMsR0FBRyxTQUFTQSxTQUFULENBQW9CeE8sRUFBcEIsRUFBd0I7QUFDbEMsUUFBSTRPLFFBQUosRUFBYztBQUNaO0FBQ0EsVUFBSXZPLE9BQU8sR0FBR0wsRUFBRSxDQUFDUSxRQUFqQjtBQUNBLFVBQUkyTyxRQUFRLEdBQUc5TyxPQUFPLENBQUMrTyxNQUFSLElBQWtCL08sT0FBTyxDQUFDK08sTUFBUixDQUFlQyxhQUFqQyxHQUNYSCxVQURXLEdBRVhILFVBRko7QUFHQS9PLFFBQUUsQ0FBQ3NQLFlBQUgsR0FBa0IsSUFBSVQsS0FBSixDQUFVN08sRUFBVixFQUFjbVAsUUFBZCxDQUFsQjtBQUNELEtBUEQsTUFPTztBQUNMblAsUUFBRSxDQUFDc1AsWUFBSCxHQUFrQnRQLEVBQWxCO0FBQ0Q7QUFDRixHQVhEO0FBWUQ7QUFFRDs7O0FBRUEsSUFBSXVQLFdBQVcsR0FBRyxJQUFJdFEsSUFBSixFQUFsQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3VRLFFBQVQsQ0FBbUIzYSxHQUFuQixFQUF3QjtBQUN0QjRhLFdBQVMsQ0FBQzVhLEdBQUQsRUFBTTBhLFdBQU4sQ0FBVDs7QUFDQUEsYUFBVyxDQUFDalEsS0FBWjtBQUNEOztBQUVELFNBQVNtUSxTQUFULENBQW9CNWEsR0FBcEIsRUFBeUI2YSxJQUF6QixFQUErQjtBQUM3QixNQUFJdFosQ0FBSixFQUFPOEQsSUFBUDtBQUNBLE1BQUl5VixHQUFHLEdBQUdwYSxLQUFLLENBQUNDLE9BQU4sQ0FBY1gsR0FBZCxDQUFWOztBQUNBLE1BQUssQ0FBQzhhLEdBQUQsSUFBUSxDQUFDemIsUUFBUSxDQUFDVyxHQUFELENBQWxCLElBQTRCckIsTUFBTSxDQUFDb2MsUUFBUCxDQUFnQi9hLEdBQWhCLENBQTVCLElBQW9EQSxHQUFHLFlBQVl5TixLQUF2RSxFQUE4RTtBQUM1RTtBQUNEOztBQUNELE1BQUl6TixHQUFHLENBQUNvUSxNQUFSLEVBQWdCO0FBQ2QsUUFBSTRLLEtBQUssR0FBR2hiLEdBQUcsQ0FBQ29RLE1BQUosQ0FBV0csR0FBWCxDQUFlN0QsRUFBM0I7O0FBQ0EsUUFBSW1PLElBQUksQ0FBQ3RRLEdBQUwsQ0FBU3lRLEtBQVQsQ0FBSixFQUFxQjtBQUNuQjtBQUNEOztBQUNESCxRQUFJLENBQUNyUSxHQUFMLENBQVN3USxLQUFUO0FBQ0Q7O0FBQ0QsTUFBSUYsR0FBSixFQUFTO0FBQ1B2WixLQUFDLEdBQUd2QixHQUFHLENBQUN3QixNQUFSOztBQUNBLFdBQU9ELENBQUMsRUFBUixFQUFZO0FBQUVxWixlQUFTLENBQUM1YSxHQUFHLENBQUN1QixDQUFELENBQUosRUFBU3NaLElBQVQsQ0FBVDtBQUEwQjtBQUN6QyxHQUhELE1BR087QUFDTHhWLFFBQUksR0FBRzFHLE1BQU0sQ0FBQzBHLElBQVAsQ0FBWXJGLEdBQVosQ0FBUDtBQUNBdUIsS0FBQyxHQUFHOEQsSUFBSSxDQUFDN0QsTUFBVDs7QUFDQSxXQUFPRCxDQUFDLEVBQVIsRUFBWTtBQUFFcVosZUFBUyxDQUFDNWEsR0FBRyxDQUFDcUYsSUFBSSxDQUFDOUQsQ0FBRCxDQUFMLENBQUosRUFBZXNaLElBQWYsQ0FBVDtBQUFnQztBQUMvQztBQUNGOztBQUVELElBQUlJLElBQUo7QUFDQSxJQUFJQyxPQUFKOztBQUVBLElBQUlqVixJQUFKLEVBQTJDO0FBQ3pDLE1BQUlrVixJQUFJLEdBQUduVCxTQUFTLElBQUlDLE1BQU0sQ0FBQzlCLFdBQS9CO0FBQ0E7O0FBQ0EsTUFDRWdWLElBQUksSUFDSkEsSUFBSSxDQUFDRixJQURMLElBRUFFLElBQUksQ0FBQ0QsT0FGTCxJQUdBQyxJQUFJLENBQUNDLFVBSEwsSUFJQUQsSUFBSSxDQUFDRSxhQUxQLEVBTUU7QUFDQUosUUFBSSxHQUFHLFVBQVV2TixHQUFWLEVBQWU7QUFBRSxhQUFPeU4sSUFBSSxDQUFDRixJQUFMLENBQVV2TixHQUFWLENBQVA7QUFBd0IsS0FBaEQ7O0FBQ0F3TixXQUFPLEdBQUcsVUFBVXJQLElBQVYsRUFBZ0J5UCxRQUFoQixFQUEwQkMsTUFBMUIsRUFBa0M7QUFDMUNKLFVBQUksQ0FBQ0QsT0FBTCxDQUFhclAsSUFBYixFQUFtQnlQLFFBQW5CLEVBQTZCQyxNQUE3QjtBQUNBSixVQUFJLENBQUNDLFVBQUwsQ0FBZ0JFLFFBQWhCO0FBQ0FILFVBQUksQ0FBQ0MsVUFBTCxDQUFnQkcsTUFBaEIsRUFIMEMsQ0FJMUM7QUFDRCxLQUxEO0FBTUQ7QUFDRjtBQUVEOzs7QUFFQSxJQUFJQyxjQUFjLEdBQUduWixNQUFNLENBQUMsVUFBVXdKLElBQVYsRUFBZ0I7QUFDMUMsTUFBSTRQLE9BQU8sR0FBRzVQLElBQUksQ0FBQzVJLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQWpDO0FBQ0E0SSxNQUFJLEdBQUc0UCxPQUFPLEdBQUc1UCxJQUFJLENBQUNqTSxLQUFMLENBQVcsQ0FBWCxDQUFILEdBQW1CaU0sSUFBakM7QUFDQSxNQUFJNlAsT0FBTyxHQUFHN1AsSUFBSSxDQUFDNUksTUFBTCxDQUFZLENBQVosTUFBbUIsR0FBakMsQ0FIMEMsQ0FHSjs7QUFDdEM0SSxNQUFJLEdBQUc2UCxPQUFPLEdBQUc3UCxJQUFJLENBQUNqTSxLQUFMLENBQVcsQ0FBWCxDQUFILEdBQW1CaU0sSUFBakM7QUFDQSxNQUFJbU0sT0FBTyxHQUFHbk0sSUFBSSxDQUFDNUksTUFBTCxDQUFZLENBQVosTUFBbUIsR0FBakM7QUFDQTRJLE1BQUksR0FBR21NLE9BQU8sR0FBR25NLElBQUksQ0FBQ2pNLEtBQUwsQ0FBVyxDQUFYLENBQUgsR0FBbUJpTSxJQUFqQztBQUNBLFNBQU87QUFDTEEsUUFBSSxFQUFFQSxJQUREO0FBRUxyRyxRQUFJLEVBQUVrVyxPQUZEO0FBR0wxRCxXQUFPLEVBQUVBLE9BSEo7QUFJTHlELFdBQU8sRUFBRUE7QUFKSixHQUFQO0FBTUQsQ0FiMEIsQ0FBM0I7O0FBZUEsU0FBU0UsZUFBVCxDQUEwQkMsR0FBMUIsRUFBK0J6USxFQUEvQixFQUFtQztBQUNqQyxXQUFTMFEsT0FBVCxHQUFvQjtBQUNsQixRQUFJQyxXQUFXLEdBQUdyWSxTQUFsQjtBQUVBLFFBQUltWSxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0QsR0FBbEI7O0FBQ0EsUUFBSWxiLEtBQUssQ0FBQ0MsT0FBTixDQUFjaWIsR0FBZCxDQUFKLEVBQXdCO0FBQ3RCLFVBQUlwTSxNQUFNLEdBQUdvTSxHQUFHLENBQUNoYyxLQUFKLEVBQWI7O0FBQ0EsV0FBSyxJQUFJMkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lPLE1BQU0sQ0FBQ2hPLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDMlcsK0JBQXVCLENBQUMxSSxNQUFNLENBQUNqTyxDQUFELENBQVAsRUFBWSxJQUFaLEVBQWtCdWEsV0FBbEIsRUFBK0IzUSxFQUEvQixFQUFtQyxjQUFuQyxDQUF2QjtBQUNEO0FBQ0YsS0FMRCxNQUtPO0FBQ0w7QUFDQSxhQUFPK00sdUJBQXVCLENBQUMwRCxHQUFELEVBQU0sSUFBTixFQUFZblksU0FBWixFQUF1QjBILEVBQXZCLEVBQTJCLGNBQTNCLENBQTlCO0FBQ0Q7QUFDRjs7QUFDRDBRLFNBQU8sQ0FBQ0QsR0FBUixHQUFjQSxHQUFkO0FBQ0EsU0FBT0MsT0FBUDtBQUNEOztBQUVELFNBQVNFLGVBQVQsQ0FDRUMsRUFERixFQUVFQyxLQUZGLEVBR0V6UixHQUhGLEVBSUUwUixTQUpGLEVBS0VDLGlCQUxGLEVBTUVoUixFQU5GLEVBT0U7QUFDQSxNQUFJVSxJQUFKLEVBQVU4SSxNQUFWLEVBQWtCbUQsR0FBbEIsRUFBdUJzRSxHQUF2QixFQUE0QkMsS0FBNUI7O0FBQ0EsT0FBS3hRLElBQUwsSUFBYW1RLEVBQWIsRUFBaUI7QUFDZnJILFVBQU0sR0FBR21ELEdBQUcsR0FBR2tFLEVBQUUsQ0FBQ25RLElBQUQsQ0FBakI7QUFDQXVRLE9BQUcsR0FBR0gsS0FBSyxDQUFDcFEsSUFBRCxDQUFYO0FBQ0F3USxTQUFLLEdBQUdiLGNBQWMsQ0FBQzNQLElBQUQsQ0FBdEI7O0FBQ0EsUUFBSWhOLE9BQU8sQ0FBQ2laLEdBQUQsQ0FBWCxFQUFrQjtBQUNoQjdSLFdBQUEsSUFBeUN5RSxJQUFJLENBQzNDLGlDQUFrQzJSLEtBQUssQ0FBQ3hRLElBQXhDLEdBQWdELFVBQWhELEdBQTZEMUwsTUFBTSxDQUFDMlgsR0FBRCxDQUR4QixFQUUzQzNNLEVBRjJDLENBQTdDO0FBSUQsS0FMRCxNQUtPLElBQUl0TSxPQUFPLENBQUN1ZCxHQUFELENBQVgsRUFBa0I7QUFDdkIsVUFBSXZkLE9BQU8sQ0FBQ2laLEdBQUcsQ0FBQzhELEdBQUwsQ0FBWCxFQUFzQjtBQUNwQjlELFdBQUcsR0FBR2tFLEVBQUUsQ0FBQ25RLElBQUQsQ0FBRixHQUFXOFAsZUFBZSxDQUFDN0QsR0FBRCxFQUFNM00sRUFBTixDQUFoQztBQUNEOztBQUNELFVBQUlsTSxNQUFNLENBQUNvZCxLQUFLLENBQUM3VyxJQUFQLENBQVYsRUFBd0I7QUFDdEJzUyxXQUFHLEdBQUdrRSxFQUFFLENBQUNuUSxJQUFELENBQUYsR0FBV3NRLGlCQUFpQixDQUFDRSxLQUFLLENBQUN4USxJQUFQLEVBQWFpTSxHQUFiLEVBQWtCdUUsS0FBSyxDQUFDckUsT0FBeEIsQ0FBbEM7QUFDRDs7QUFDRHhOLFNBQUcsQ0FBQzZSLEtBQUssQ0FBQ3hRLElBQVAsRUFBYWlNLEdBQWIsRUFBa0J1RSxLQUFLLENBQUNyRSxPQUF4QixFQUFpQ3FFLEtBQUssQ0FBQ1osT0FBdkMsRUFBZ0RZLEtBQUssQ0FBQ0MsTUFBdEQsQ0FBSDtBQUNELEtBUk0sTUFRQSxJQUFJeEUsR0FBRyxLQUFLc0UsR0FBWixFQUFpQjtBQUN0QkEsU0FBRyxDQUFDUixHQUFKLEdBQVU5RCxHQUFWO0FBQ0FrRSxRQUFFLENBQUNuUSxJQUFELENBQUYsR0FBV3VRLEdBQVg7QUFDRDtBQUNGOztBQUNELE9BQUt2USxJQUFMLElBQWFvUSxLQUFiLEVBQW9CO0FBQ2xCLFFBQUlwZCxPQUFPLENBQUNtZCxFQUFFLENBQUNuUSxJQUFELENBQUgsQ0FBWCxFQUF1QjtBQUNyQndRLFdBQUssR0FBR2IsY0FBYyxDQUFDM1AsSUFBRCxDQUF0QjtBQUNBcVEsZUFBUyxDQUFDRyxLQUFLLENBQUN4USxJQUFQLEVBQWFvUSxLQUFLLENBQUNwUSxJQUFELENBQWxCLEVBQTBCd1EsS0FBSyxDQUFDckUsT0FBaEMsQ0FBVDtBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7QUFFQSxTQUFTdUUsY0FBVCxDQUF5QnBWLEdBQXpCLEVBQThCcVYsT0FBOUIsRUFBdUNoSixJQUF2QyxFQUE2QztBQUMzQyxNQUFJck0sR0FBRyxZQUFZc0csS0FBbkIsRUFBMEI7QUFDeEJ0RyxPQUFHLEdBQUdBLEdBQUcsQ0FBQ3dHLElBQUosQ0FBUzZGLElBQVQsS0FBa0JyTSxHQUFHLENBQUN3RyxJQUFKLENBQVM2RixJQUFULEdBQWdCLEVBQWxDLENBQU47QUFDRDs7QUFDRCxNQUFJcUksT0FBSjtBQUNBLE1BQUlZLE9BQU8sR0FBR3RWLEdBQUcsQ0FBQ3FWLE9BQUQsQ0FBakI7O0FBRUEsV0FBU0UsV0FBVCxHQUF3QjtBQUN0QmxKLFFBQUksQ0FBQzlQLEtBQUwsQ0FBVyxJQUFYLEVBQWlCRCxTQUFqQixFQURzQixDQUV0QjtBQUNBOztBQUNBN0IsVUFBTSxDQUFDaWEsT0FBTyxDQUFDRCxHQUFULEVBQWNjLFdBQWQsQ0FBTjtBQUNEOztBQUVELE1BQUk3ZCxPQUFPLENBQUM0ZCxPQUFELENBQVgsRUFBc0I7QUFDcEI7QUFDQVosV0FBTyxHQUFHRixlQUFlLENBQUMsQ0FBQ2UsV0FBRCxDQUFELENBQXpCO0FBQ0QsR0FIRCxNQUdPO0FBQ0w7QUFDQSxRQUFJMWQsS0FBSyxDQUFDeWQsT0FBTyxDQUFDYixHQUFULENBQUwsSUFBc0IzYyxNQUFNLENBQUN3ZCxPQUFPLENBQUNFLE1BQVQsQ0FBaEMsRUFBa0Q7QUFDaEQ7QUFDQWQsYUFBTyxHQUFHWSxPQUFWO0FBQ0FaLGFBQU8sQ0FBQ0QsR0FBUixDQUFZdFAsSUFBWixDQUFpQm9RLFdBQWpCO0FBQ0QsS0FKRCxNQUlPO0FBQ0w7QUFDQWIsYUFBTyxHQUFHRixlQUFlLENBQUMsQ0FBQ2MsT0FBRCxFQUFVQyxXQUFWLENBQUQsQ0FBekI7QUFDRDtBQUNGOztBQUVEYixTQUFPLENBQUNjLE1BQVIsR0FBaUIsSUFBakI7QUFDQXhWLEtBQUcsQ0FBQ3FWLE9BQUQsQ0FBSCxHQUFlWCxPQUFmO0FBQ0Q7QUFFRDs7O0FBRUEsU0FBU2UseUJBQVQsQ0FDRWpQLElBREYsRUFFRTVELElBRkYsRUFHRTJELEdBSEYsRUFJRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUk4SCxXQUFXLEdBQUd6TCxJQUFJLENBQUN5QixPQUFMLENBQWFxSSxLQUEvQjs7QUFDQSxNQUFJaFYsT0FBTyxDQUFDMlcsV0FBRCxDQUFYLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBQ0QsTUFBSWxSLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSXVZLEtBQUssR0FBR2xQLElBQUksQ0FBQ2tQLEtBQWpCO0FBQ0EsTUFBSWhKLEtBQUssR0FBR2xHLElBQUksQ0FBQ2tHLEtBQWpCOztBQUNBLE1BQUk3VSxLQUFLLENBQUM2ZCxLQUFELENBQUwsSUFBZ0I3ZCxLQUFLLENBQUM2VSxLQUFELENBQXpCLEVBQWtDO0FBQ2hDLFNBQUssSUFBSXpSLEdBQVQsSUFBZ0JvVCxXQUFoQixFQUE2QjtBQUMzQixVQUFJc0gsTUFBTSxHQUFHM1osU0FBUyxDQUFDZixHQUFELENBQXRCOztBQUNBLFVBQUk2RCxJQUFKLEVBQTJDO0FBQ3pDLFlBQUk4VyxjQUFjLEdBQUczYSxHQUFHLENBQUNYLFdBQUosRUFBckI7O0FBQ0EsWUFDRVcsR0FBRyxLQUFLMmEsY0FBUixJQUNBRixLQURBLElBQ1MxYSxNQUFNLENBQUMwYSxLQUFELEVBQVFFLGNBQVIsQ0FGakIsRUFHRTtBQUNBcFMsYUFBRyxDQUNELFlBQVlvUyxjQUFaLEdBQTZCLDRCQUE3QixHQUNDbFMsbUJBQW1CLENBQUM2QyxHQUFHLElBQUkzRCxJQUFSLENBRHBCLEdBQ3FDLGlDQURyQyxHQUVBLEtBRkEsR0FFUTNILEdBRlIsR0FFYyxNQUZkLEdBR0EsZ0VBSEEsR0FJQSxtRUFKQSxHQUtBLHVDQUxBLEdBSzBDMGEsTUFMMUMsR0FLbUQsa0JBTG5ELEdBS3dFMWEsR0FMeEUsR0FLOEUsS0FON0UsQ0FBSDtBQVFEO0FBQ0Y7O0FBQ0Q0YSxlQUFTLENBQUMxWSxHQUFELEVBQU11UCxLQUFOLEVBQWF6UixHQUFiLEVBQWtCMGEsTUFBbEIsRUFBMEIsSUFBMUIsQ0FBVCxJQUNBRSxTQUFTLENBQUMxWSxHQUFELEVBQU11WSxLQUFOLEVBQWF6YSxHQUFiLEVBQWtCMGEsTUFBbEIsRUFBMEIsS0FBMUIsQ0FEVDtBQUVEO0FBQ0Y7O0FBQ0QsU0FBT3hZLEdBQVA7QUFDRDs7QUFFRCxTQUFTMFksU0FBVCxDQUNFMVksR0FERixFQUVFMlksSUFGRixFQUdFN2EsR0FIRixFQUlFMGEsTUFKRixFQUtFSSxRQUxGLEVBTUU7QUFDQSxNQUFJbGUsS0FBSyxDQUFDaWUsSUFBRCxDQUFULEVBQWlCO0FBQ2YsUUFBSTlhLE1BQU0sQ0FBQzhhLElBQUQsRUFBTzdhLEdBQVAsQ0FBVixFQUF1QjtBQUNyQmtDLFNBQUcsQ0FBQ2xDLEdBQUQsQ0FBSCxHQUFXNmEsSUFBSSxDQUFDN2EsR0FBRCxDQUFmOztBQUNBLFVBQUksQ0FBQzhhLFFBQUwsRUFBZTtBQUNiLGVBQU9ELElBQUksQ0FBQzdhLEdBQUQsQ0FBWDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNELEtBTkQsTUFNTyxJQUFJRCxNQUFNLENBQUM4YSxJQUFELEVBQU9ILE1BQVAsQ0FBVixFQUEwQjtBQUMvQnhZLFNBQUcsQ0FBQ2xDLEdBQUQsQ0FBSCxHQUFXNmEsSUFBSSxDQUFDSCxNQUFELENBQWY7O0FBQ0EsVUFBSSxDQUFDSSxRQUFMLEVBQWU7QUFDYixlQUFPRCxJQUFJLENBQUNILE1BQUQsQ0FBWDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0Q7QUFFRDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNLLHVCQUFULENBQWtDdlAsUUFBbEMsRUFBNEM7QUFDMUMsT0FBSyxJQUFJck0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FNLFFBQVEsQ0FBQ3BNLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFFBQUliLEtBQUssQ0FBQ0MsT0FBTixDQUFjaU4sUUFBUSxDQUFDck0sQ0FBRCxDQUF0QixDQUFKLEVBQWdDO0FBQzlCLGFBQU9iLEtBQUssQ0FBQ2xCLFNBQU4sQ0FBZ0I2VCxNQUFoQixDQUF1QjNQLEtBQXZCLENBQTZCLEVBQTdCLEVBQWlDa0ssUUFBakMsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsUUFBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3dQLGlCQUFULENBQTRCeFAsUUFBNUIsRUFBc0M7QUFDcEMsU0FBT3pPLFdBQVcsQ0FBQ3lPLFFBQUQsQ0FBWCxHQUNILENBQUN5QixlQUFlLENBQUN6QixRQUFELENBQWhCLENBREcsR0FFSGxOLEtBQUssQ0FBQ0MsT0FBTixDQUFjaU4sUUFBZCxJQUNFeVAsc0JBQXNCLENBQUN6UCxRQUFELENBRHhCLEdBRUU3TyxTQUpOO0FBS0Q7O0FBRUQsU0FBU3VlLFVBQVQsQ0FBcUJsTyxJQUFyQixFQUEyQjtBQUN6QixTQUFPcFEsS0FBSyxDQUFDb1EsSUFBRCxDQUFMLElBQWVwUSxLQUFLLENBQUNvUSxJQUFJLENBQUN2QixJQUFOLENBQXBCLElBQW1DM08sT0FBTyxDQUFDa1EsSUFBSSxDQUFDVCxTQUFOLENBQWpEO0FBQ0Q7O0FBRUQsU0FBUzBPLHNCQUFULENBQWlDelAsUUFBakMsRUFBMkMyUCxXQUEzQyxFQUF3RDtBQUN0RCxNQUFJalosR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJL0MsQ0FBSixFQUFPdUIsQ0FBUCxFQUFVMGEsU0FBVixFQUFxQm5SLElBQXJCOztBQUNBLE9BQUs5SyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdxTSxRQUFRLENBQUNwTSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQ3VCLEtBQUMsR0FBRzhLLFFBQVEsQ0FBQ3JNLENBQUQsQ0FBWjs7QUFDQSxRQUFJMUMsT0FBTyxDQUFDaUUsQ0FBRCxDQUFQLElBQWMsT0FBT0EsQ0FBUCxLQUFhLFNBQS9CLEVBQTBDO0FBQUU7QUFBVTs7QUFDdEQwYSxhQUFTLEdBQUdsWixHQUFHLENBQUM5QyxNQUFKLEdBQWEsQ0FBekI7QUFDQTZLLFFBQUksR0FBRy9ILEdBQUcsQ0FBQ2taLFNBQUQsQ0FBVixDQUpvQyxDQUtwQzs7QUFDQSxRQUFJOWMsS0FBSyxDQUFDQyxPQUFOLENBQWNtQyxDQUFkLENBQUosRUFBc0I7QUFDcEIsVUFBSUEsQ0FBQyxDQUFDdEIsTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDaEJzQixTQUFDLEdBQUd1YSxzQkFBc0IsQ0FBQ3ZhLENBQUQsRUFBSyxDQUFDeWEsV0FBVyxJQUFJLEVBQWhCLElBQXNCLEdBQXRCLEdBQTRCaGMsQ0FBakMsQ0FBMUIsQ0FEZ0IsQ0FFaEI7O0FBQ0EsWUFBSStiLFVBQVUsQ0FBQ3hhLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVixJQUFvQndhLFVBQVUsQ0FBQ2pSLElBQUQsQ0FBbEMsRUFBMEM7QUFDeEMvSCxhQUFHLENBQUNrWixTQUFELENBQUgsR0FBaUJuTyxlQUFlLENBQUNoRCxJQUFJLENBQUN3QixJQUFMLEdBQWEvSyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQU8rSyxJQUFwQixDQUFoQztBQUNBL0ssV0FBQyxDQUFDMmEsS0FBRjtBQUNEOztBQUNEblosV0FBRyxDQUFDZ0ksSUFBSixDQUFTNUksS0FBVCxDQUFlWSxHQUFmLEVBQW9CeEIsQ0FBcEI7QUFDRDtBQUNGLEtBVkQsTUFVTyxJQUFJM0QsV0FBVyxDQUFDMkQsQ0FBRCxDQUFmLEVBQW9CO0FBQ3pCLFVBQUl3YSxVQUFVLENBQUNqUixJQUFELENBQWQsRUFBc0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EvSCxXQUFHLENBQUNrWixTQUFELENBQUgsR0FBaUJuTyxlQUFlLENBQUNoRCxJQUFJLENBQUN3QixJQUFMLEdBQVkvSyxDQUFiLENBQWhDO0FBQ0QsT0FMRCxNQUtPLElBQUlBLENBQUMsS0FBSyxFQUFWLEVBQWM7QUFDbkI7QUFDQXdCLFdBQUcsQ0FBQ2dJLElBQUosQ0FBUytDLGVBQWUsQ0FBQ3ZNLENBQUQsQ0FBeEI7QUFDRDtBQUNGLEtBVk0sTUFVQTtBQUNMLFVBQUl3YSxVQUFVLENBQUN4YSxDQUFELENBQVYsSUFBaUJ3YSxVQUFVLENBQUNqUixJQUFELENBQS9CLEVBQXVDO0FBQ3JDO0FBQ0EvSCxXQUFHLENBQUNrWixTQUFELENBQUgsR0FBaUJuTyxlQUFlLENBQUNoRCxJQUFJLENBQUN3QixJQUFMLEdBQVkvSyxDQUFDLENBQUMrSyxJQUFmLENBQWhDO0FBQ0QsT0FIRCxNQUdPO0FBQ0w7QUFDQSxZQUFJNU8sTUFBTSxDQUFDMk8sUUFBUSxDQUFDOFAsUUFBVixDQUFOLElBQ0YxZSxLQUFLLENBQUM4RCxDQUFDLENBQUM0SyxHQUFILENBREgsSUFFRjdPLE9BQU8sQ0FBQ2lFLENBQUMsQ0FBQ1YsR0FBSCxDQUZMLElBR0ZwRCxLQUFLLENBQUN1ZSxXQUFELENBSFAsRUFHc0I7QUFDcEJ6YSxXQUFDLENBQUNWLEdBQUYsR0FBUSxZQUFZbWIsV0FBWixHQUEwQixHQUExQixHQUFnQ2hjLENBQWhDLEdBQW9DLElBQTVDO0FBQ0Q7O0FBQ0QrQyxXQUFHLENBQUNnSSxJQUFKLENBQVN4SixDQUFUO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFNBQU93QixHQUFQO0FBQ0Q7QUFFRDs7O0FBRUEsU0FBU3FaLFdBQVQsQ0FBc0J4UyxFQUF0QixFQUEwQjtBQUN4QixNQUFJOEksT0FBTyxHQUFHOUksRUFBRSxDQUFDUSxRQUFILENBQVlzSSxPQUExQjs7QUFDQSxNQUFJQSxPQUFKLEVBQWE7QUFDWDlJLE1BQUUsQ0FBQ3lTLFNBQUgsR0FBZSxPQUFPM0osT0FBUCxLQUFtQixVQUFuQixHQUNYQSxPQUFPLENBQUN0VSxJQUFSLENBQWF3TCxFQUFiLENBRFcsR0FFWDhJLE9BRko7QUFHRDtBQUNGOztBQUVELFNBQVM0SixjQUFULENBQXlCMVMsRUFBekIsRUFBNkI7QUFDM0IsTUFBSStFLE1BQU0sR0FBRzROLGFBQWEsQ0FBQzNTLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZb0ksTUFBYixFQUFxQjVJLEVBQXJCLENBQTFCOztBQUNBLE1BQUkrRSxNQUFKLEVBQVk7QUFDVlMsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDQWhTLFVBQU0sQ0FBQzBHLElBQVAsQ0FBWTZLLE1BQVosRUFBb0JOLE9BQXBCLENBQTRCLFVBQVV4TixHQUFWLEVBQWU7QUFDekM7QUFDQSxVQUFJNkQsSUFBSixFQUEyQztBQUN6Q2dMLHlCQUFpQixDQUFDOUYsRUFBRCxFQUFLL0ksR0FBTCxFQUFVOE4sTUFBTSxDQUFDOU4sR0FBRCxDQUFoQixFQUF1QixZQUFZO0FBQ2xEc0ksY0FBSSxDQUNGLHlFQUNBLDBEQURBLEdBRUEsNkJBRkEsR0FFZ0N0SSxHQUZoQyxHQUVzQyxJQUhwQyxFQUlGK0ksRUFKRSxDQUFKO0FBTUQsU0FQZ0IsQ0FBakI7QUFRRCxPQVRELE1BU08sRUFFTjtBQUNGLEtBZEQ7QUFlQXdGLG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTbU4sYUFBVCxDQUF3Qi9KLE1BQXhCLEVBQWdDNUksRUFBaEMsRUFBb0M7QUFDbEMsTUFBSTRJLE1BQUosRUFBWTtBQUNWO0FBQ0EsUUFBSTdELE1BQU0sR0FBR3ZSLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBYyxJQUFkLENBQWI7QUFDQSxRQUFJaUUsSUFBSSxHQUFHMkUsU0FBUyxHQUNoQkUsT0FBTyxDQUFDQyxPQUFSLENBQWdCNEosTUFBaEIsQ0FEZ0IsR0FFaEJwVixNQUFNLENBQUMwRyxJQUFQLENBQVkwTyxNQUFaLENBRko7O0FBSUEsU0FBSyxJQUFJeFMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhELElBQUksQ0FBQzdELE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLFVBQUlhLEdBQUcsR0FBR2lELElBQUksQ0FBQzlELENBQUQsQ0FBZCxDQURvQyxDQUVwQzs7QUFDQSxVQUFJYSxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUFFO0FBQVU7O0FBQ2xDLFVBQUkyYixVQUFVLEdBQUdoSyxNQUFNLENBQUMzUixHQUFELENBQU4sQ0FBWXNRLElBQTdCO0FBQ0EsVUFBSWhMLE1BQU0sR0FBR3lELEVBQWI7O0FBQ0EsYUFBT3pELE1BQVAsRUFBZTtBQUNiLFlBQUlBLE1BQU0sQ0FBQ2tXLFNBQVAsSUFBb0J6YixNQUFNLENBQUN1RixNQUFNLENBQUNrVyxTQUFSLEVBQW1CRyxVQUFuQixDQUE5QixFQUE4RDtBQUM1RDdOLGdCQUFNLENBQUM5TixHQUFELENBQU4sR0FBY3NGLE1BQU0sQ0FBQ2tXLFNBQVAsQ0FBaUJHLFVBQWpCLENBQWQ7QUFDQTtBQUNEOztBQUNEclcsY0FBTSxHQUFHQSxNQUFNLENBQUN3RSxPQUFoQjtBQUNEOztBQUNELFVBQUksQ0FBQ3hFLE1BQUwsRUFBYTtBQUNYLFlBQUksYUFBYXFNLE1BQU0sQ0FBQzNSLEdBQUQsQ0FBdkIsRUFBOEI7QUFDNUIsY0FBSTRiLGNBQWMsR0FBR2pLLE1BQU0sQ0FBQzNSLEdBQUQsQ0FBTixDQUFZOFQsT0FBakM7QUFDQWhHLGdCQUFNLENBQUM5TixHQUFELENBQU4sR0FBYyxPQUFPNGIsY0FBUCxLQUEwQixVQUExQixHQUNWQSxjQUFjLENBQUNyZSxJQUFmLENBQW9Cd0wsRUFBcEIsQ0FEVSxHQUVWNlMsY0FGSjtBQUdELFNBTEQsTUFLTyxJQUFJL1gsSUFBSixFQUEyQztBQUNoRHlFLGNBQUksQ0FBRSxpQkFBaUJ0SSxHQUFqQixHQUF1QixjQUF6QixFQUEwQytJLEVBQTFDLENBQUo7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsV0FBTytFLE1BQVA7QUFDRDtBQUNGO0FBRUQ7O0FBSUE7QUFDQTtBQUNBOzs7QUFDQSxTQUFTK04sWUFBVCxDQUNFclEsUUFERixFQUVFRyxPQUZGLEVBR0U7QUFDQSxNQUFJLENBQUNILFFBQUQsSUFBYSxDQUFDQSxRQUFRLENBQUNwTSxNQUEzQixFQUFtQztBQUNqQyxXQUFPLEVBQVA7QUFDRDs7QUFDRCxNQUFJMGMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsT0FBSyxJQUFJM2MsQ0FBQyxHQUFHLENBQVIsRUFBV2lDLENBQUMsR0FBR29LLFFBQVEsQ0FBQ3BNLE1BQTdCLEVBQXFDRCxDQUFDLEdBQUdpQyxDQUF6QyxFQUE0Q2pDLENBQUMsRUFBN0MsRUFBaUQ7QUFDL0MsUUFBSTBOLEtBQUssR0FBR3JCLFFBQVEsQ0FBQ3JNLENBQUQsQ0FBcEI7QUFDQSxRQUFJb00sSUFBSSxHQUFHc0IsS0FBSyxDQUFDdEIsSUFBakIsQ0FGK0MsQ0FHL0M7O0FBQ0EsUUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUNrUCxLQUFiLElBQXNCbFAsSUFBSSxDQUFDa1AsS0FBTCxDQUFXc0IsSUFBckMsRUFBMkM7QUFDekMsYUFBT3hRLElBQUksQ0FBQ2tQLEtBQUwsQ0FBV3NCLElBQWxCO0FBQ0QsS0FOOEMsQ0FPL0M7QUFDQTs7O0FBQ0EsUUFBSSxDQUFDbFAsS0FBSyxDQUFDbEIsT0FBTixLQUFrQkEsT0FBbEIsSUFBNkJrQixLQUFLLENBQUNkLFNBQU4sS0FBb0JKLE9BQWxELEtBQ0ZKLElBREUsSUFDTUEsSUFBSSxDQUFDd1EsSUFBTCxJQUFhLElBRHZCLEVBRUU7QUFDQSxVQUFJdFMsSUFBSSxHQUFHOEIsSUFBSSxDQUFDd1EsSUFBaEI7QUFDQSxVQUFJQSxJQUFJLEdBQUlELEtBQUssQ0FBQ3JTLElBQUQsQ0FBTCxLQUFnQnFTLEtBQUssQ0FBQ3JTLElBQUQsQ0FBTCxHQUFjLEVBQTlCLENBQVo7O0FBQ0EsVUFBSW9ELEtBQUssQ0FBQ3ZCLEdBQU4sS0FBYyxVQUFsQixFQUE4QjtBQUM1QnlRLFlBQUksQ0FBQzdSLElBQUwsQ0FBVTVJLEtBQVYsQ0FBZ0J5YSxJQUFoQixFQUFzQmxQLEtBQUssQ0FBQ3JCLFFBQU4sSUFBa0IsRUFBeEM7QUFDRCxPQUZELE1BRU87QUFDTHVRLFlBQUksQ0FBQzdSLElBQUwsQ0FBVTJDLEtBQVY7QUFDRDtBQUNGLEtBVkQsTUFVTztBQUNMLE9BQUNpUCxLQUFLLENBQUNoSSxPQUFOLEtBQWtCZ0ksS0FBSyxDQUFDaEksT0FBTixHQUFnQixFQUFsQyxDQUFELEVBQXdDNUosSUFBeEMsQ0FBNkMyQyxLQUE3QztBQUNEO0FBQ0YsR0EzQkQsQ0E0QkE7OztBQUNBLE9BQUssSUFBSW1QLE1BQVQsSUFBbUJGLEtBQW5CLEVBQTBCO0FBQ3hCLFFBQUlBLEtBQUssQ0FBQ0UsTUFBRCxDQUFMLENBQWNwWixLQUFkLENBQW9CcVosWUFBcEIsQ0FBSixFQUF1QztBQUNyQyxhQUFPSCxLQUFLLENBQUNFLE1BQUQsQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0YsS0FBUDtBQUNEOztBQUVELFNBQVNHLFlBQVQsQ0FBdUJqUCxJQUF2QixFQUE2QjtBQUMzQixTQUFRQSxJQUFJLENBQUNULFNBQUwsSUFBa0IsQ0FBQ1MsSUFBSSxDQUFDbkIsWUFBekIsSUFBMENtQixJQUFJLENBQUN2QixJQUFMLEtBQWMsR0FBL0Q7QUFDRDtBQUVEOzs7QUFFQSxTQUFTeVEsb0JBQVQsQ0FDRUosS0FERixFQUVFSyxXQUZGLEVBR0VDLFNBSEYsRUFJRTtBQUNBLE1BQUlsYSxHQUFKO0FBQ0EsTUFBSW1hLGNBQWMsR0FBRzlmLE1BQU0sQ0FBQzBHLElBQVAsQ0FBWWtaLFdBQVosRUFBeUIvYyxNQUF6QixHQUFrQyxDQUF2RDtBQUNBLE1BQUlrZCxRQUFRLEdBQUdSLEtBQUssR0FBRyxDQUFDLENBQUNBLEtBQUssQ0FBQ1MsT0FBWCxHQUFxQixDQUFDRixjQUExQztBQUNBLE1BQUlyYyxHQUFHLEdBQUc4YixLQUFLLElBQUlBLEtBQUssQ0FBQ1UsSUFBekI7O0FBQ0EsTUFBSSxDQUFDVixLQUFMLEVBQVk7QUFDVjVaLE9BQUcsR0FBRyxFQUFOO0FBQ0QsR0FGRCxNQUVPLElBQUk0WixLQUFLLENBQUNXLFdBQVYsRUFBdUI7QUFDNUI7QUFDQSxXQUFPWCxLQUFLLENBQUNXLFdBQWI7QUFDRCxHQUhNLE1BR0EsSUFDTEgsUUFBUSxJQUNSRixTQURBLElBRUFBLFNBQVMsS0FBSzlmLFdBRmQsSUFHQTBELEdBQUcsS0FBS29jLFNBQVMsQ0FBQ0ksSUFIbEIsSUFJQSxDQUFDSCxjQUpELElBS0EsQ0FBQ0QsU0FBUyxDQUFDTSxVQU5OLEVBT0w7QUFDQTtBQUNBO0FBQ0EsV0FBT04sU0FBUDtBQUNELEdBWE0sTUFXQTtBQUNMbGEsT0FBRyxHQUFHLEVBQU47O0FBQ0EsU0FBSyxJQUFJc1AsS0FBVCxJQUFrQnNLLEtBQWxCLEVBQXlCO0FBQ3ZCLFVBQUlBLEtBQUssQ0FBQ3RLLEtBQUQsQ0FBTCxJQUFnQkEsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhLEdBQWpDLEVBQXNDO0FBQ3BDdFAsV0FBRyxDQUFDc1AsS0FBRCxDQUFILEdBQWFtTCxtQkFBbUIsQ0FBQ1IsV0FBRCxFQUFjM0ssS0FBZCxFQUFxQnNLLEtBQUssQ0FBQ3RLLEtBQUQsQ0FBMUIsQ0FBaEM7QUFDRDtBQUNGO0FBQ0YsR0E1QkQsQ0E2QkE7OztBQUNBLE9BQUssSUFBSW9MLEtBQVQsSUFBa0JULFdBQWxCLEVBQStCO0FBQzdCLFFBQUksRUFBRVMsS0FBSyxJQUFJMWEsR0FBWCxDQUFKLEVBQXFCO0FBQ25CQSxTQUFHLENBQUMwYSxLQUFELENBQUgsR0FBYUMsZUFBZSxDQUFDVixXQUFELEVBQWNTLEtBQWQsQ0FBNUI7QUFDRDtBQUNGLEdBbENELENBbUNBO0FBQ0E7OztBQUNBLE1BQUlkLEtBQUssSUFBSXZmLE1BQU0sQ0FBQzRTLFlBQVAsQ0FBb0IyTSxLQUFwQixDQUFiLEVBQXlDO0FBQ3RDQSxTQUFELENBQVFXLFdBQVIsR0FBc0J2YSxHQUF0QjtBQUNEOztBQUNENkMsS0FBRyxDQUFDN0MsR0FBRCxFQUFNLFNBQU4sRUFBaUJvYSxRQUFqQixDQUFIO0FBQ0F2WCxLQUFHLENBQUM3QyxHQUFELEVBQU0sTUFBTixFQUFjbEMsR0FBZCxDQUFIO0FBQ0ErRSxLQUFHLENBQUM3QyxHQUFELEVBQU0sWUFBTixFQUFvQm1hLGNBQXBCLENBQUg7QUFDQSxTQUFPbmEsR0FBUDtBQUNEOztBQUVELFNBQVN5YSxtQkFBVCxDQUE2QlIsV0FBN0IsRUFBMENuYyxHQUExQyxFQUErQ0UsRUFBL0MsRUFBbUQ7QUFDakQsTUFBSWlTLFVBQVUsR0FBRyxZQUFZO0FBQzNCLFFBQUlqUSxHQUFHLEdBQUdiLFNBQVMsQ0FBQ2pDLE1BQVYsR0FBbUJjLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBUyxJQUFULEVBQWVELFNBQWYsQ0FBbkIsR0FBK0NuQixFQUFFLENBQUMsRUFBRCxDQUEzRDtBQUNBZ0MsT0FBRyxHQUFHQSxHQUFHLElBQUksT0FBT0EsR0FBUCxLQUFlLFFBQXRCLElBQWtDLENBQUM1RCxLQUFLLENBQUNDLE9BQU4sQ0FBYzJELEdBQWQsQ0FBbkMsR0FDRixDQUFDQSxHQUFELENBREUsQ0FDSTtBQURKLE1BRUY4WSxpQkFBaUIsQ0FBQzlZLEdBQUQsQ0FGckI7QUFHQSxXQUFPQSxHQUFHLEtBQ1JBLEdBQUcsQ0FBQzlDLE1BQUosS0FBZSxDQUFmLElBQ0M4QyxHQUFHLENBQUM5QyxNQUFKLEtBQWUsQ0FBZixJQUFvQjhDLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT3FLLFNBRnBCLENBRStCO0FBRi9CLEtBQUgsR0FHSDVQLFNBSEcsR0FJSHVGLEdBSko7QUFLRCxHQVZELENBRGlELENBWWpEO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSWhDLEVBQUUsQ0FBQzRjLEtBQVAsRUFBYztBQUNadmdCLFVBQU0sQ0FBQzBJLGNBQVAsQ0FBc0JrWCxXQUF0QixFQUFtQ25jLEdBQW5DLEVBQXdDO0FBQ3RDa0gsU0FBRyxFQUFFaUwsVUFEaUM7QUFFdENuTixnQkFBVSxFQUFFLElBRjBCO0FBR3RDRyxrQkFBWSxFQUFFO0FBSHdCLEtBQXhDO0FBS0Q7O0FBQ0QsU0FBT2dOLFVBQVA7QUFDRDs7QUFFRCxTQUFTMEssZUFBVCxDQUF5QmYsS0FBekIsRUFBZ0M5YixHQUFoQyxFQUFxQztBQUNuQyxTQUFPLFlBQVk7QUFBRSxXQUFPOGIsS0FBSyxDQUFDOWIsR0FBRCxDQUFaO0FBQW9CLEdBQXpDO0FBQ0Q7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVMrYyxVQUFULENBQ0VuZixHQURGLEVBRUV1YSxNQUZGLEVBR0U7QUFDQSxNQUFJdFcsR0FBSixFQUFTMUMsQ0FBVCxFQUFZaUMsQ0FBWixFQUFlNkIsSUFBZixFQUFxQmpELEdBQXJCOztBQUNBLE1BQUkxQixLQUFLLENBQUNDLE9BQU4sQ0FBY1gsR0FBZCxLQUFzQixPQUFPQSxHQUFQLEtBQWUsUUFBekMsRUFBbUQ7QUFDakRpRSxPQUFHLEdBQUcsSUFBSXZELEtBQUosQ0FBVVYsR0FBRyxDQUFDd0IsTUFBZCxDQUFOOztBQUNBLFNBQUtELENBQUMsR0FBRyxDQUFKLEVBQU9pQyxDQUFDLEdBQUd4RCxHQUFHLENBQUN3QixNQUFwQixFQUE0QkQsQ0FBQyxHQUFHaUMsQ0FBaEMsRUFBbUNqQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDMEMsU0FBRyxDQUFDMUMsQ0FBRCxDQUFILEdBQVNnWixNQUFNLENBQUN2YSxHQUFHLENBQUN1QixDQUFELENBQUosRUFBU0EsQ0FBVCxDQUFmO0FBQ0Q7QUFDRixHQUxELE1BS08sSUFBSSxPQUFPdkIsR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2xDaUUsT0FBRyxHQUFHLElBQUl2RCxLQUFKLENBQVVWLEdBQVYsQ0FBTjs7QUFDQSxTQUFLdUIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdkIsR0FBaEIsRUFBcUJ1QixDQUFDLEVBQXRCLEVBQTBCO0FBQ3hCMEMsU0FBRyxDQUFDMUMsQ0FBRCxDQUFILEdBQVNnWixNQUFNLENBQUNoWixDQUFDLEdBQUcsQ0FBTCxFQUFRQSxDQUFSLENBQWY7QUFDRDtBQUNGLEdBTE0sTUFLQSxJQUFJbEMsUUFBUSxDQUFDVyxHQUFELENBQVosRUFBbUI7QUFDeEIsUUFBSWdLLFNBQVMsSUFBSWhLLEdBQUcsQ0FBQ2lLLE1BQU0sQ0FBQ21WLFFBQVIsQ0FBcEIsRUFBdUM7QUFDckNuYixTQUFHLEdBQUcsRUFBTjtBQUNBLFVBQUltYixRQUFRLEdBQUdwZixHQUFHLENBQUNpSyxNQUFNLENBQUNtVixRQUFSLENBQUgsRUFBZjtBQUNBLFVBQUlsUCxNQUFNLEdBQUdrUCxRQUFRLENBQUNDLElBQVQsRUFBYjs7QUFDQSxhQUFPLENBQUNuUCxNQUFNLENBQUNvUCxJQUFmLEVBQXFCO0FBQ25CcmIsV0FBRyxDQUFDcUksSUFBSixDQUFTaU8sTUFBTSxDQUFDckssTUFBTSxDQUFDOVEsS0FBUixFQUFlNkUsR0FBRyxDQUFDekMsTUFBbkIsQ0FBZjtBQUNBME8sY0FBTSxHQUFHa1AsUUFBUSxDQUFDQyxJQUFULEVBQVQ7QUFDRDtBQUNGLEtBUkQsTUFRTztBQUNMaGEsVUFBSSxHQUFHMUcsTUFBTSxDQUFDMEcsSUFBUCxDQUFZckYsR0FBWixDQUFQO0FBQ0FpRSxTQUFHLEdBQUcsSUFBSXZELEtBQUosQ0FBVTJFLElBQUksQ0FBQzdELE1BQWYsQ0FBTjs7QUFDQSxXQUFLRCxDQUFDLEdBQUcsQ0FBSixFQUFPaUMsQ0FBQyxHQUFHNkIsSUFBSSxDQUFDN0QsTUFBckIsRUFBNkJELENBQUMsR0FBR2lDLENBQWpDLEVBQW9DakMsQ0FBQyxFQUFyQyxFQUF5QztBQUN2Q2EsV0FBRyxHQUFHaUQsSUFBSSxDQUFDOUQsQ0FBRCxDQUFWO0FBQ0EwQyxXQUFHLENBQUMxQyxDQUFELENBQUgsR0FBU2daLE1BQU0sQ0FBQ3ZhLEdBQUcsQ0FBQ29DLEdBQUQsQ0FBSixFQUFXQSxHQUFYLEVBQWdCYixDQUFoQixDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUNELE1BQUksQ0FBQ3ZDLEtBQUssQ0FBQ2lGLEdBQUQsQ0FBVixFQUFpQjtBQUNmQSxPQUFHLEdBQUcsRUFBTjtBQUNEOztBQUNBQSxLQUFELENBQU15WixRQUFOLEdBQWlCLElBQWpCO0FBQ0EsU0FBT3paLEdBQVA7QUFDRDtBQUVEOztBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3NiLFVBQVQsQ0FDRTFULElBREYsRUFFRTJULFFBRkYsRUFHRTNMLEtBSEYsRUFJRTRMLFVBSkYsRUFLRTtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFLQyxZQUFMLENBQWtCOVQsSUFBbEIsQ0FBbkI7QUFDQSxNQUFJK1QsS0FBSjs7QUFDQSxNQUFJRixZQUFKLEVBQWtCO0FBQUU7QUFDbEI3TCxTQUFLLEdBQUdBLEtBQUssSUFBSSxFQUFqQjs7QUFDQSxRQUFJNEwsVUFBSixFQUFnQjtBQUNkLFVBQUl4WixLQUFBLElBQXlDLENBQUM1RyxRQUFRLENBQUNvZ0IsVUFBRCxDQUF0RCxFQUFvRTtBQUNsRS9VLFlBQUksQ0FDRixnREFERSxFQUVGLElBRkUsQ0FBSjtBQUlEOztBQUNEbUosV0FBSyxHQUFHM1AsTUFBTSxDQUFDQSxNQUFNLENBQUMsRUFBRCxFQUFLdWIsVUFBTCxDQUFQLEVBQXlCNUwsS0FBekIsQ0FBZDtBQUNEOztBQUNEK0wsU0FBSyxHQUFHRixZQUFZLENBQUM3TCxLQUFELENBQVosSUFBdUIyTCxRQUEvQjtBQUNELEdBWkQsTUFZTztBQUNMSSxTQUFLLEdBQUcsS0FBS0MsTUFBTCxDQUFZaFUsSUFBWixLQUFxQjJULFFBQTdCO0FBQ0Q7O0FBRUQsTUFBSXhTLE1BQU0sR0FBRzZHLEtBQUssSUFBSUEsS0FBSyxDQUFDc0ssSUFBNUI7O0FBQ0EsTUFBSW5SLE1BQUosRUFBWTtBQUNWLFdBQU8sS0FBSzhTLGNBQUwsQ0FBb0IsVUFBcEIsRUFBZ0M7QUFBRTNCLFVBQUksRUFBRW5SO0FBQVIsS0FBaEMsRUFBa0Q0UyxLQUFsRCxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0EsS0FBUDtBQUNEO0FBQ0Y7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNHLGFBQVQsQ0FBd0JyVCxFQUF4QixFQUE0QjtBQUMxQixTQUFPd0ksWUFBWSxDQUFDLEtBQUt2SixRQUFOLEVBQWdCLFNBQWhCLEVBQTJCZSxFQUEzQixFQUErQixJQUEvQixDQUFaLElBQW9EaEksUUFBM0Q7QUFDRDtBQUVEOzs7QUFFQSxTQUFTc2IsYUFBVCxDQUF3QkMsTUFBeEIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQ3RDLE1BQUl4ZixLQUFLLENBQUNDLE9BQU4sQ0FBY3NmLE1BQWQsQ0FBSixFQUEyQjtBQUN6QixXQUFPQSxNQUFNLENBQUNqZSxPQUFQLENBQWVrZSxNQUFmLE1BQTJCLENBQUMsQ0FBbkM7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPRCxNQUFNLEtBQUtDLE1BQWxCO0FBQ0Q7QUFDRjtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNDLGFBQVQsQ0FDRUMsWUFERixFQUVFaGUsR0FGRixFQUdFaWUsY0FIRixFQUlFQyxZQUpGLEVBS0VDLGNBTEYsRUFNRTtBQUNBLE1BQUlDLGFBQWEsR0FBRzNhLE1BQU0sQ0FBQ1UsUUFBUCxDQUFnQm5FLEdBQWhCLEtBQXdCaWUsY0FBNUM7O0FBQ0EsTUFBSUUsY0FBYyxJQUFJRCxZQUFsQixJQUFrQyxDQUFDemEsTUFBTSxDQUFDVSxRQUFQLENBQWdCbkUsR0FBaEIsQ0FBdkMsRUFBNkQ7QUFDM0QsV0FBTzRkLGFBQWEsQ0FBQ08sY0FBRCxFQUFpQkQsWUFBakIsQ0FBcEI7QUFDRCxHQUZELE1BRU8sSUFBSUUsYUFBSixFQUFtQjtBQUN4QixXQUFPUixhQUFhLENBQUNRLGFBQUQsRUFBZ0JKLFlBQWhCLENBQXBCO0FBQ0QsR0FGTSxNQUVBLElBQUlFLFlBQUosRUFBa0I7QUFDdkIsV0FBT25kLFNBQVMsQ0FBQ21kLFlBQUQsQ0FBVCxLQUE0QmxlLEdBQW5DO0FBQ0Q7QUFDRjtBQUVEOztBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3FlLGVBQVQsQ0FDRTlTLElBREYsRUFFRUQsR0FGRixFQUdFdE8sS0FIRixFQUlFc2hCLE1BSkYsRUFLRUMsTUFMRixFQU1FO0FBQ0EsTUFBSXZoQixLQUFKLEVBQVc7QUFDVCxRQUFJLENBQUNDLFFBQVEsQ0FBQ0QsS0FBRCxDQUFiLEVBQXNCO0FBQ3BCNkcsV0FBQSxJQUF5Q3lFLElBQUksQ0FDM0MsMERBRDJDLEVBRTNDLElBRjJDLENBQTdDO0FBSUQsS0FMRCxNQUtPO0FBQ0wsVUFBSWhLLEtBQUssQ0FBQ0MsT0FBTixDQUFjdkIsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCQSxhQUFLLEdBQUdpRixRQUFRLENBQUNqRixLQUFELENBQWhCO0FBQ0Q7O0FBQ0QsVUFBSTZkLElBQUo7O0FBQ0EsVUFBSTJELElBQUksR0FBRyxVQUFXeGUsR0FBWCxFQUFpQjtBQUMxQixZQUNFQSxHQUFHLEtBQUssT0FBUixJQUNBQSxHQUFHLEtBQUssT0FEUixJQUVBVCxtQkFBbUIsQ0FBQ1MsR0FBRCxDQUhyQixFQUlFO0FBQ0E2YSxjQUFJLEdBQUd0UCxJQUFQO0FBQ0QsU0FORCxNQU1PO0FBQ0wsY0FBSWdHLElBQUksR0FBR2hHLElBQUksQ0FBQ2tQLEtBQUwsSUFBY2xQLElBQUksQ0FBQ2tQLEtBQUwsQ0FBV2xKLElBQXBDO0FBQ0FzSixjQUFJLEdBQUd5RCxNQUFNLElBQUk3YSxNQUFNLENBQUNnQixXQUFQLENBQW1CNkcsR0FBbkIsRUFBd0JpRyxJQUF4QixFQUE4QnZSLEdBQTlCLENBQVYsR0FDSHVMLElBQUksQ0FBQ2tULFFBQUwsS0FBa0JsVCxJQUFJLENBQUNrVCxRQUFMLEdBQWdCLEVBQWxDLENBREcsR0FFSGxULElBQUksQ0FBQ2tQLEtBQUwsS0FBZWxQLElBQUksQ0FBQ2tQLEtBQUwsR0FBYSxFQUE1QixDQUZKO0FBR0Q7O0FBQ0QsWUFBSWlFLFlBQVksR0FBR25lLFFBQVEsQ0FBQ1AsR0FBRCxDQUEzQjtBQUNBLFlBQUkyZSxhQUFhLEdBQUc1ZCxTQUFTLENBQUNmLEdBQUQsQ0FBN0I7O0FBQ0EsWUFBSSxFQUFFMGUsWUFBWSxJQUFJN0QsSUFBbEIsS0FBMkIsRUFBRThELGFBQWEsSUFBSTlELElBQW5CLENBQS9CLEVBQXlEO0FBQ3ZEQSxjQUFJLENBQUM3YSxHQUFELENBQUosR0FBWWhELEtBQUssQ0FBQ2dELEdBQUQsQ0FBakI7O0FBRUEsY0FBSXVlLE1BQUosRUFBWTtBQUNWLGdCQUFJM0UsRUFBRSxHQUFHck8sSUFBSSxDQUFDcU8sRUFBTCxLQUFZck8sSUFBSSxDQUFDcU8sRUFBTCxHQUFVLEVBQXRCLENBQVQ7O0FBQ0FBLGNBQUUsQ0FBRSxZQUFZNVosR0FBZCxDQUFGLEdBQXdCLFVBQVU0ZSxNQUFWLEVBQWtCO0FBQ3hDNWhCLG1CQUFLLENBQUNnRCxHQUFELENBQUwsR0FBYTRlLE1BQWI7QUFDRCxhQUZEO0FBR0Q7QUFDRjtBQUNGLE9BekJEOztBQTJCQSxXQUFLLElBQUk1ZSxHQUFULElBQWdCaEQsS0FBaEIsRUFBdUJ3aEIsSUFBSSxDQUFFeGUsR0FBRixDQUFKO0FBQ3hCO0FBQ0Y7O0FBQ0QsU0FBT3VMLElBQVA7QUFDRDtBQUVEOztBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3NULFlBQVQsQ0FDRWxmLEtBREYsRUFFRW1mLE9BRkYsRUFHRTtBQUNBLE1BQUk3ZSxNQUFNLEdBQUcsS0FBSzhlLFlBQUwsS0FBc0IsS0FBS0EsWUFBTCxHQUFvQixFQUExQyxDQUFiO0FBQ0EsTUFBSWhWLElBQUksR0FBRzlKLE1BQU0sQ0FBQ04sS0FBRCxDQUFqQixDQUZBLENBR0E7QUFDQTs7QUFDQSxNQUFJb0ssSUFBSSxJQUFJLENBQUMrVSxPQUFiLEVBQXNCO0FBQ3BCLFdBQU8vVSxJQUFQO0FBQ0QsR0FQRCxDQVFBOzs7QUFDQUEsTUFBSSxHQUFHOUosTUFBTSxDQUFDTixLQUFELENBQU4sR0FBZ0IsS0FBSzRKLFFBQUwsQ0FBY3lWLGVBQWQsQ0FBOEJyZixLQUE5QixFQUFxQ3BDLElBQXJDLENBQ3JCLEtBQUs4YSxZQURnQixFQUVyQixJQUZxQixFQUdyQixJQUhxQixDQUdoQjtBQUhnQixHQUF2QjtBQUtBNEcsWUFBVSxDQUFDbFYsSUFBRCxFQUFRLGVBQWVwSyxLQUF2QixFQUErQixLQUEvQixDQUFWO0FBQ0EsU0FBT29LLElBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTbVYsUUFBVCxDQUNFblYsSUFERixFQUVFcEssS0FGRixFQUdFSyxHQUhGLEVBSUU7QUFDQWlmLFlBQVUsQ0FBQ2xWLElBQUQsRUFBUSxhQUFhcEssS0FBYixJQUFzQkssR0FBRyxHQUFJLE1BQU1BLEdBQVYsR0FBaUIsRUFBMUMsQ0FBUixFQUF3RCxJQUF4RCxDQUFWO0FBQ0EsU0FBTytKLElBQVA7QUFDRDs7QUFFRCxTQUFTa1YsVUFBVCxDQUNFbFYsSUFERixFQUVFL0osR0FGRixFQUdFeU0sTUFIRixFQUlFO0FBQ0EsTUFBSW5PLEtBQUssQ0FBQ0MsT0FBTixDQUFjd0wsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCLFNBQUssSUFBSTVLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0SyxJQUFJLENBQUMzSyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxVQUFJNEssSUFBSSxDQUFDNUssQ0FBRCxDQUFKLElBQVcsT0FBTzRLLElBQUksQ0FBQzVLLENBQUQsQ0FBWCxLQUFtQixRQUFsQyxFQUE0QztBQUMxQ2dnQixzQkFBYyxDQUFDcFYsSUFBSSxDQUFDNUssQ0FBRCxDQUFMLEVBQVdhLEdBQUcsR0FBRyxHQUFOLEdBQVliLENBQXZCLEVBQTJCc04sTUFBM0IsQ0FBZDtBQUNEO0FBQ0Y7QUFDRixHQU5ELE1BTU87QUFDTDBTLGtCQUFjLENBQUNwVixJQUFELEVBQU8vSixHQUFQLEVBQVl5TSxNQUFaLENBQWQ7QUFDRDtBQUNGOztBQUVELFNBQVMwUyxjQUFULENBQXlCblMsSUFBekIsRUFBK0JoTixHQUEvQixFQUFvQ3lNLE1BQXBDLEVBQTRDO0FBQzFDTyxNQUFJLENBQUNYLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQVcsTUFBSSxDQUFDaE4sR0FBTCxHQUFXQSxHQUFYO0FBQ0FnTixNQUFJLENBQUNQLE1BQUwsR0FBY0EsTUFBZDtBQUNEO0FBRUQ7OztBQUVBLFNBQVMyUyxtQkFBVCxDQUE4QjdULElBQTlCLEVBQW9Ddk8sS0FBcEMsRUFBMkM7QUFDekMsTUFBSUEsS0FBSixFQUFXO0FBQ1QsUUFBSSxDQUFDUyxhQUFhLENBQUNULEtBQUQsQ0FBbEIsRUFBMkI7QUFDekI2RyxXQUFBLElBQXlDeUUsSUFBSSxDQUMzQywrQ0FEMkMsRUFFM0MsSUFGMkMsQ0FBN0M7QUFJRCxLQUxELE1BS087QUFDTCxVQUFJc1IsRUFBRSxHQUFHck8sSUFBSSxDQUFDcU8sRUFBTCxHQUFVck8sSUFBSSxDQUFDcU8sRUFBTCxHQUFVOVgsTUFBTSxDQUFDLEVBQUQsRUFBS3lKLElBQUksQ0FBQ3FPLEVBQVYsQ0FBaEIsR0FBZ0MsRUFBbkQ7O0FBQ0EsV0FBSyxJQUFJNVosR0FBVCxJQUFnQmhELEtBQWhCLEVBQXVCO0FBQ3JCLFlBQUlxaUIsUUFBUSxHQUFHekYsRUFBRSxDQUFDNVosR0FBRCxDQUFqQjtBQUNBLFlBQUlzZixJQUFJLEdBQUd0aUIsS0FBSyxDQUFDZ0QsR0FBRCxDQUFoQjtBQUNBNFosVUFBRSxDQUFDNVosR0FBRCxDQUFGLEdBQVVxZixRQUFRLEdBQUcsR0FBR3BPLE1BQUgsQ0FBVW9PLFFBQVYsRUFBb0JDLElBQXBCLENBQUgsR0FBK0JBLElBQWpEO0FBQ0Q7QUFDRjtBQUNGOztBQUNELFNBQU8vVCxJQUFQO0FBQ0Q7QUFFRDs7O0FBRUEsU0FBU2dVLGtCQUFULENBQ0UvRixHQURGLEVBQ087QUFDTHRYLEdBRkYsRUFHRTtBQUNBc2QsY0FKRixFQUtFQyxjQUxGLEVBTUU7QUFDQXZkLEtBQUcsR0FBR0EsR0FBRyxJQUFJO0FBQUVxYSxXQUFPLEVBQUUsQ0FBQ2lEO0FBQVosR0FBYjs7QUFDQSxPQUFLLElBQUlyZ0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FhLEdBQUcsQ0FBQ3BhLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DLFFBQUk0YyxJQUFJLEdBQUd2QyxHQUFHLENBQUNyYSxDQUFELENBQWQ7O0FBQ0EsUUFBSWIsS0FBSyxDQUFDQyxPQUFOLENBQWN3ZCxJQUFkLENBQUosRUFBeUI7QUFDdkJ3RCx3QkFBa0IsQ0FBQ3hELElBQUQsRUFBTzdaLEdBQVAsRUFBWXNkLGNBQVosQ0FBbEI7QUFDRCxLQUZELE1BRU8sSUFBSXpELElBQUosRUFBVTtBQUNmO0FBQ0EsVUFBSUEsSUFBSSxDQUFDZSxLQUFULEVBQWdCO0FBQ2RmLFlBQUksQ0FBQzdiLEVBQUwsQ0FBUTRjLEtBQVIsR0FBZ0IsSUFBaEI7QUFDRDs7QUFDRDVhLFNBQUcsQ0FBQzZaLElBQUksQ0FBQy9iLEdBQU4sQ0FBSCxHQUFnQitiLElBQUksQ0FBQzdiLEVBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxNQUFJdWYsY0FBSixFQUFvQjtBQUNqQnZkLE9BQUQsQ0FBTXNhLElBQU4sR0FBYWlELGNBQWI7QUFDRDs7QUFDRCxTQUFPdmQsR0FBUDtBQUNEO0FBRUQ7OztBQUVBLFNBQVN3ZCxlQUFULENBQTBCQyxPQUExQixFQUFtQ0MsTUFBbkMsRUFBMkM7QUFDekMsT0FBSyxJQUFJemdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5Z0IsTUFBTSxDQUFDeGdCLE1BQTNCLEVBQW1DRCxDQUFDLElBQUksQ0FBeEMsRUFBMkM7QUFDekMsUUFBSWEsR0FBRyxHQUFHNGYsTUFBTSxDQUFDemdCLENBQUQsQ0FBaEI7O0FBQ0EsUUFBSSxPQUFPYSxHQUFQLEtBQWUsUUFBZixJQUEyQkEsR0FBL0IsRUFBb0M7QUFDbEMyZixhQUFPLENBQUNDLE1BQU0sQ0FBQ3pnQixDQUFELENBQVAsQ0FBUCxHQUFxQnlnQixNQUFNLENBQUN6Z0IsQ0FBQyxHQUFHLENBQUwsQ0FBM0I7QUFDRCxLQUZELE1BRU8sSUFBSTBFLEtBQUEsSUFBeUM3RCxHQUFHLEtBQUssRUFBakQsSUFBdURBLEdBQUcsS0FBSyxJQUFuRSxFQUF5RTtBQUM5RTtBQUNBc0ksVUFBSSxDQUNELDZFQUE2RXRJLEdBRDVFLEVBRUYsSUFGRSxDQUFKO0FBSUQ7QUFDRjs7QUFDRCxTQUFPMmYsT0FBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNFLGVBQVQsQ0FBMEI3aUIsS0FBMUIsRUFBaUM4aUIsTUFBakMsRUFBeUM7QUFDdkMsU0FBTyxPQUFPOWlCLEtBQVAsS0FBaUIsUUFBakIsR0FBNEI4aUIsTUFBTSxHQUFHOWlCLEtBQXJDLEdBQTZDQSxLQUFwRDtBQUNEO0FBRUQ7OztBQUVBLFNBQVMraUIsb0JBQVQsQ0FBK0JuVixNQUEvQixFQUF1QztBQUNyQ0EsUUFBTSxDQUFDb1YsRUFBUCxHQUFZZCxRQUFaO0FBQ0F0VSxRQUFNLENBQUNxVixFQUFQLEdBQVl2aEIsUUFBWjtBQUNBa00sUUFBTSxDQUFDc1YsRUFBUCxHQUFZN2lCLFFBQVo7QUFDQXVOLFFBQU0sQ0FBQ3VWLEVBQVAsR0FBWXBELFVBQVo7QUFDQW5TLFFBQU0sQ0FBQ3dWLEVBQVAsR0FBWWpELFVBQVo7QUFDQXZTLFFBQU0sQ0FBQ3lWLEVBQVAsR0FBWTlkLFVBQVo7QUFDQXFJLFFBQU0sQ0FBQzBWLEVBQVAsR0FBWW5kLFlBQVo7QUFDQXlILFFBQU0sQ0FBQzJWLEVBQVAsR0FBWTFCLFlBQVo7QUFDQWpVLFFBQU0sQ0FBQzRWLEVBQVAsR0FBWTdDLGFBQVo7QUFDQS9TLFFBQU0sQ0FBQzZWLEVBQVAsR0FBWTFDLGFBQVo7QUFDQW5ULFFBQU0sQ0FBQzhWLEVBQVAsR0FBWXJDLGVBQVo7QUFDQXpULFFBQU0sQ0FBQytWLEVBQVAsR0FBWTFULGVBQVo7QUFDQXJDLFFBQU0sQ0FBQ2dXLEVBQVAsR0FBWTdULGdCQUFaO0FBQ0FuQyxRQUFNLENBQUNpVyxFQUFQLEdBQVl0QixrQkFBWjtBQUNBM1UsUUFBTSxDQUFDa1csRUFBUCxHQUFZMUIsbUJBQVo7QUFDQXhVLFFBQU0sQ0FBQ21XLEVBQVAsR0FBWXJCLGVBQVo7QUFDQTlVLFFBQU0sQ0FBQ29XLEVBQVAsR0FBWW5CLGVBQVo7QUFDRDtBQUVEOzs7QUFFQSxTQUFTb0IsdUJBQVQsQ0FDRTFWLElBREYsRUFFRWtHLEtBRkYsRUFHRWpHLFFBSEYsRUFJRVcsTUFKRixFQUtFeEUsSUFMRixFQU1FO0FBQ0EsTUFBSXVaLE1BQU0sR0FBRyxJQUFiO0FBRUEsTUFBSTlYLE9BQU8sR0FBR3pCLElBQUksQ0FBQ3lCLE9BQW5CLENBSEEsQ0FJQTtBQUNBOztBQUNBLE1BQUkrWCxTQUFKOztBQUNBLE1BQUlwaEIsTUFBTSxDQUFDb00sTUFBRCxFQUFTLE1BQVQsQ0FBVixFQUE0QjtBQUMxQmdWLGFBQVMsR0FBRzVrQixNQUFNLENBQUN5QyxNQUFQLENBQWNtTixNQUFkLENBQVosQ0FEMEIsQ0FFMUI7O0FBQ0FnVixhQUFTLENBQUNDLFNBQVYsR0FBc0JqVixNQUF0QjtBQUNELEdBSkQsTUFJTztBQUNMO0FBQ0E7QUFDQTtBQUNBZ1YsYUFBUyxHQUFHaFYsTUFBWixDQUpLLENBS0w7O0FBQ0FBLFVBQU0sR0FBR0EsTUFBTSxDQUFDaVYsU0FBaEI7QUFDRDs7QUFDRCxNQUFJQyxVQUFVLEdBQUd4a0IsTUFBTSxDQUFDdU0sT0FBTyxDQUFDa1ksU0FBVCxDQUF2QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLENBQUNGLFVBQXpCO0FBRUEsT0FBSzlWLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtrRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLakcsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLVyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLcVYsU0FBTCxHQUFpQmpXLElBQUksQ0FBQ3FPLEVBQUwsSUFBV3RkLFdBQTVCO0FBQ0EsT0FBS21sQixVQUFMLEdBQWtCL0YsYUFBYSxDQUFDdFMsT0FBTyxDQUFDdUksTUFBVCxFQUFpQnhGLE1BQWpCLENBQS9COztBQUNBLE9BQUsyUCxLQUFMLEdBQWEsWUFBWTtBQUN2QixRQUFJLENBQUNvRixNQUFNLENBQUN6RCxNQUFaLEVBQW9CO0FBQ2xCdkIsMEJBQW9CLENBQ2xCM1EsSUFBSSxDQUFDbVcsV0FEYSxFQUVsQlIsTUFBTSxDQUFDekQsTUFBUCxHQUFnQjVCLFlBQVksQ0FBQ3JRLFFBQUQsRUFBV1csTUFBWCxDQUZWLENBQXBCO0FBSUQ7O0FBQ0QsV0FBTytVLE1BQU0sQ0FBQ3pELE1BQWQ7QUFDRCxHQVJEOztBQVVBbGhCLFFBQU0sQ0FBQzBJLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsYUFBNUIsRUFBNEM7QUFDMUNELGNBQVUsRUFBRSxJQUQ4QjtBQUUxQ2tDLE9BQUcsRUFBRSxTQUFTQSxHQUFULEdBQWdCO0FBQ25CLGFBQU9nVixvQkFBb0IsQ0FBQzNRLElBQUksQ0FBQ21XLFdBQU4sRUFBbUIsS0FBSzVGLEtBQUwsRUFBbkIsQ0FBM0I7QUFDRDtBQUp5QyxHQUE1QyxFQXRDQSxDQTZDQTs7QUFDQSxNQUFJdUYsVUFBSixFQUFnQjtBQUNkO0FBQ0EsU0FBSzlYLFFBQUwsR0FBZ0JILE9BQWhCLENBRmMsQ0FHZDs7QUFDQSxTQUFLcVUsTUFBTCxHQUFjLEtBQUszQixLQUFMLEVBQWQ7QUFDQSxTQUFLeUIsWUFBTCxHQUFvQnJCLG9CQUFvQixDQUFDM1EsSUFBSSxDQUFDbVcsV0FBTixFQUFtQixLQUFLakUsTUFBeEIsQ0FBeEM7QUFDRDs7QUFFRCxNQUFJclUsT0FBTyxDQUFDdVksUUFBWixFQUFzQjtBQUNwQixTQUFLQyxFQUFMLEdBQVUsVUFBVXpnQixDQUFWLEVBQWFpQixDQUFiLEVBQWdCMUIsQ0FBaEIsRUFBbUJtaEIsQ0FBbkIsRUFBc0I7QUFDOUIsVUFBSTFVLEtBQUssR0FBRzJVLGFBQWEsQ0FBQ1gsU0FBRCxFQUFZaGdCLENBQVosRUFBZWlCLENBQWYsRUFBa0IxQixDQUFsQixFQUFxQm1oQixDQUFyQixFQUF3Qk4saUJBQXhCLENBQXpCOztBQUNBLFVBQUlwVSxLQUFLLElBQUksQ0FBQzdPLEtBQUssQ0FBQ0MsT0FBTixDQUFjNE8sS0FBZCxDQUFkLEVBQW9DO0FBQ2xDQSxhQUFLLENBQUNsQixTQUFOLEdBQWtCN0MsT0FBTyxDQUFDdVksUUFBMUI7QUFDQXhVLGFBQUssQ0FBQ3BCLFNBQU4sR0FBa0JJLE1BQWxCO0FBQ0Q7O0FBQ0QsYUFBT2dCLEtBQVA7QUFDRCxLQVBEO0FBUUQsR0FURCxNQVNPO0FBQ0wsU0FBS3lVLEVBQUwsR0FBVSxVQUFVemdCLENBQVYsRUFBYWlCLENBQWIsRUFBZ0IxQixDQUFoQixFQUFtQm1oQixDQUFuQixFQUFzQjtBQUFFLGFBQU9DLGFBQWEsQ0FBQ1gsU0FBRCxFQUFZaGdCLENBQVosRUFBZWlCLENBQWYsRUFBa0IxQixDQUFsQixFQUFxQm1oQixDQUFyQixFQUF3Qk4saUJBQXhCLENBQXBCO0FBQWlFLEtBQW5HO0FBQ0Q7QUFDRjs7QUFFRHhCLG9CQUFvQixDQUFDa0IsdUJBQXVCLENBQUM3akIsU0FBekIsQ0FBcEI7O0FBRUEsU0FBUzJrQix5QkFBVCxDQUNFcGEsSUFERixFQUVFd0ksU0FGRixFQUdFNUUsSUFIRixFQUlFNFYsU0FKRixFQUtFM1YsUUFMRixFQU1FO0FBQ0EsTUFBSXBDLE9BQU8sR0FBR3pCLElBQUksQ0FBQ3lCLE9BQW5CO0FBQ0EsTUFBSXFJLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSTJCLFdBQVcsR0FBR2hLLE9BQU8sQ0FBQ3FJLEtBQTFCOztBQUNBLE1BQUk3VSxLQUFLLENBQUN3VyxXQUFELENBQVQsRUFBd0I7QUFDdEIsU0FBSyxJQUFJcFQsR0FBVCxJQUFnQm9ULFdBQWhCLEVBQTZCO0FBQzNCM0IsV0FBSyxDQUFDelIsR0FBRCxDQUFMLEdBQWFtVCxZQUFZLENBQUNuVCxHQUFELEVBQU1vVCxXQUFOLEVBQW1CakQsU0FBUyxJQUFJN1QsV0FBaEMsQ0FBekI7QUFDRDtBQUNGLEdBSkQsTUFJTztBQUNMLFFBQUlNLEtBQUssQ0FBQzJPLElBQUksQ0FBQ2tQLEtBQU4sQ0FBVCxFQUF1QjtBQUFFdUgsZ0JBQVUsQ0FBQ3ZRLEtBQUQsRUFBUWxHLElBQUksQ0FBQ2tQLEtBQWIsQ0FBVjtBQUFnQzs7QUFDekQsUUFBSTdkLEtBQUssQ0FBQzJPLElBQUksQ0FBQ2tHLEtBQU4sQ0FBVCxFQUF1QjtBQUFFdVEsZ0JBQVUsQ0FBQ3ZRLEtBQUQsRUFBUWxHLElBQUksQ0FBQ2tHLEtBQWIsQ0FBVjtBQUFnQztBQUMxRDs7QUFFRCxNQUFJd1EsYUFBYSxHQUFHLElBQUloQix1QkFBSixDQUNsQjFWLElBRGtCLEVBRWxCa0csS0FGa0IsRUFHbEJqRyxRQUhrQixFQUlsQjJWLFNBSmtCLEVBS2xCeFosSUFMa0IsQ0FBcEI7QUFRQSxNQUFJd0YsS0FBSyxHQUFHL0QsT0FBTyxDQUFDK08sTUFBUixDQUFlNWEsSUFBZixDQUFvQixJQUFwQixFQUEwQjBrQixhQUFhLENBQUNMLEVBQXhDLEVBQTRDSyxhQUE1QyxDQUFaOztBQUVBLE1BQUk5VSxLQUFLLFlBQVk5QixLQUFyQixFQUE0QjtBQUMxQixXQUFPNlcsNEJBQTRCLENBQUMvVSxLQUFELEVBQVE1QixJQUFSLEVBQWMwVyxhQUFhLENBQUM5VixNQUE1QixFQUFvQy9DLE9BQXBDLEVBQTZDNlksYUFBN0MsQ0FBbkM7QUFDRCxHQUZELE1BRU8sSUFBSTNqQixLQUFLLENBQUNDLE9BQU4sQ0FBYzRPLEtBQWQsQ0FBSixFQUEwQjtBQUMvQixRQUFJZ1YsTUFBTSxHQUFHbkgsaUJBQWlCLENBQUM3TixLQUFELENBQWpCLElBQTRCLEVBQXpDO0FBQ0EsUUFBSWpMLEdBQUcsR0FBRyxJQUFJNUQsS0FBSixDQUFVNmpCLE1BQU0sQ0FBQy9pQixNQUFqQixDQUFWOztBQUNBLFNBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dqQixNQUFNLENBQUMvaUIsTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDdEMrQyxTQUFHLENBQUMvQyxDQUFELENBQUgsR0FBUytpQiw0QkFBNEIsQ0FBQ0MsTUFBTSxDQUFDaGpCLENBQUQsQ0FBUCxFQUFZb00sSUFBWixFQUFrQjBXLGFBQWEsQ0FBQzlWLE1BQWhDLEVBQXdDL0MsT0FBeEMsRUFBaUQ2WSxhQUFqRCxDQUFyQztBQUNEOztBQUNELFdBQU8vZixHQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTZ2dCLDRCQUFULENBQXVDL1UsS0FBdkMsRUFBOEM1QixJQUE5QyxFQUFvRDRWLFNBQXBELEVBQStEL1gsT0FBL0QsRUFBd0U2WSxhQUF4RSxFQUF1RjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxNQUFJRyxLQUFLLEdBQUdsVixVQUFVLENBQUNDLEtBQUQsQ0FBdEI7QUFDQWlWLE9BQUssQ0FBQ3JXLFNBQU4sR0FBa0JvVixTQUFsQjtBQUNBaUIsT0FBSyxDQUFDcFcsU0FBTixHQUFrQjVDLE9BQWxCOztBQUNBLE1BQUl2RixJQUFKLEVBQTJDO0FBQ3pDLEtBQUN1ZSxLQUFLLENBQUNDLFlBQU4sR0FBcUJELEtBQUssQ0FBQ0MsWUFBTixJQUFzQixFQUE1QyxFQUFnREosYUFBaEQsR0FBZ0VBLGFBQWhFO0FBQ0Q7O0FBQ0QsTUFBSTFXLElBQUksQ0FBQ3dRLElBQVQsRUFBZTtBQUNiLEtBQUNxRyxLQUFLLENBQUM3VyxJQUFOLEtBQWU2VyxLQUFLLENBQUM3VyxJQUFOLEdBQWEsRUFBNUIsQ0FBRCxFQUFrQ3dRLElBQWxDLEdBQXlDeFEsSUFBSSxDQUFDd1EsSUFBOUM7QUFDRDs7QUFDRCxTQUFPcUcsS0FBUDtBQUNEOztBQUVELFNBQVNKLFVBQVQsQ0FBcUJqZ0IsRUFBckIsRUFBeUJ1TyxJQUF6QixFQUErQjtBQUM3QixPQUFLLElBQUl0USxHQUFULElBQWdCc1EsSUFBaEIsRUFBc0I7QUFDcEJ2TyxNQUFFLENBQUN4QixRQUFRLENBQUNQLEdBQUQsQ0FBVCxDQUFGLEdBQW9Cc1EsSUFBSSxDQUFDdFEsR0FBRCxDQUF4QjtBQUNEO0FBQ0Y7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUVBOzs7QUFDQSxJQUFJc2lCLG1CQUFtQixHQUFHO0FBQ3hCQyxNQUFJLEVBQUUsU0FBU0EsSUFBVCxDQUFlcFYsS0FBZixFQUFzQnFWLFNBQXRCLEVBQWlDO0FBQ3JDLFFBQ0VyVixLQUFLLENBQUNqQixpQkFBTixJQUNBLENBQUNpQixLQUFLLENBQUNqQixpQkFBTixDQUF3QnVXLFlBRHpCLElBRUF0VixLQUFLLENBQUM1QixJQUFOLENBQVdtWCxTQUhiLEVBSUU7QUFDQTtBQUNBLFVBQUlDLFdBQVcsR0FBR3hWLEtBQWxCLENBRkEsQ0FFeUI7O0FBQ3pCbVYseUJBQW1CLENBQUNNLFFBQXBCLENBQTZCRCxXQUE3QixFQUEwQ0EsV0FBMUM7QUFDRCxLQVJELE1BUU87QUFDTCxVQUFJOVYsS0FBSyxHQUFHTSxLQUFLLENBQUNqQixpQkFBTixHQUEwQjJXLCtCQUErQixDQUNuRTFWLEtBRG1FLEVBRW5FMlYsY0FGbUUsQ0FBckU7QUFJQWpXLFdBQUssQ0FBQ2tXLE1BQU4sQ0FBYVAsU0FBUyxHQUFHclYsS0FBSyxDQUFDekIsR0FBVCxHQUFlL08sU0FBckMsRUFBZ0Q2bEIsU0FBaEQ7QUFDRDtBQUNGLEdBakJ1QjtBQW1CeEJJLFVBQVEsRUFBRSxTQUFTQSxRQUFULENBQW1CSSxRQUFuQixFQUE2QjdWLEtBQTdCLEVBQW9DO0FBQzVDLFFBQUkvRCxPQUFPLEdBQUcrRCxLQUFLLENBQUN2QixnQkFBcEI7QUFDQSxRQUFJaUIsS0FBSyxHQUFHTSxLQUFLLENBQUNqQixpQkFBTixHQUEwQjhXLFFBQVEsQ0FBQzlXLGlCQUEvQztBQUNBK1csd0JBQW9CLENBQ2xCcFcsS0FEa0IsRUFFbEJ6RCxPQUFPLENBQUMrRyxTQUZVLEVBRUM7QUFDbkIvRyxXQUFPLENBQUNvWSxTQUhVLEVBR0M7QUFDbkJyVSxTQUprQixFQUlYO0FBQ1AvRCxXQUFPLENBQUNvQyxRQUxVLENBS0Q7QUFMQyxLQUFwQjtBQU9ELEdBN0J1QjtBQStCeEIwWCxRQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFpQi9WLEtBQWpCLEVBQXdCO0FBQzlCLFFBQUl4QixPQUFPLEdBQUd3QixLQUFLLENBQUN4QixPQUFwQjtBQUNBLFFBQUlPLGlCQUFpQixHQUFHaUIsS0FBSyxDQUFDakIsaUJBQTlCOztBQUNBLFFBQUksQ0FBQ0EsaUJBQWlCLENBQUNpWCxVQUF2QixFQUFtQztBQUNqQ2pYLHVCQUFpQixDQUFDaVgsVUFBbEIsR0FBK0IsSUFBL0I7QUFDQUMsY0FBUSxDQUFDbFgsaUJBQUQsRUFBb0IsU0FBcEIsQ0FBUjtBQUNEOztBQUNELFFBQUlpQixLQUFLLENBQUM1QixJQUFOLENBQVdtWCxTQUFmLEVBQTBCO0FBQ3hCLFVBQUkvVyxPQUFPLENBQUN3WCxVQUFaLEVBQXdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUUsK0JBQXVCLENBQUNuWCxpQkFBRCxDQUF2QjtBQUNELE9BUEQsTUFPTztBQUNMb1gsOEJBQXNCLENBQUNwWCxpQkFBRCxFQUFvQjtBQUFLO0FBQXpCLFNBQXRCO0FBQ0Q7QUFDRjtBQUNGLEdBbER1QjtBQW9EeEJxWCxTQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFrQnBXLEtBQWxCLEVBQXlCO0FBQ2hDLFFBQUlqQixpQkFBaUIsR0FBR2lCLEtBQUssQ0FBQ2pCLGlCQUE5Qjs7QUFDQSxRQUFJLENBQUNBLGlCQUFpQixDQUFDdVcsWUFBdkIsRUFBcUM7QUFDbkMsVUFBSSxDQUFDdFYsS0FBSyxDQUFDNUIsSUFBTixDQUFXbVgsU0FBaEIsRUFBMkI7QUFDekJ4Vyx5QkFBaUIsQ0FBQ3NYLFFBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLGdDQUF3QixDQUFDdlgsaUJBQUQsRUFBb0I7QUFBSztBQUF6QixTQUF4QjtBQUNEO0FBQ0Y7QUFDRjtBQTdEdUIsQ0FBMUI7QUFnRUEsSUFBSXdYLFlBQVksR0FBR25uQixNQUFNLENBQUMwRyxJQUFQLENBQVlxZixtQkFBWixDQUFuQjs7QUFFQSxTQUFTcUIsZUFBVCxDQUNFaGMsSUFERixFQUVFNEQsSUFGRixFQUdFSSxPQUhGLEVBSUVILFFBSkYsRUFLRUYsR0FMRixFQU1FO0FBQ0EsTUFBSTdPLE9BQU8sQ0FBQ2tMLElBQUQsQ0FBWCxFQUFtQjtBQUNqQjtBQUNEOztBQUVELE1BQUlpYyxRQUFRLEdBQUdqWSxPQUFPLENBQUNwQyxRQUFSLENBQWlCa0osS0FBaEMsQ0FMQSxDQU9BOztBQUNBLE1BQUl4VixRQUFRLENBQUMwSyxJQUFELENBQVosRUFBb0I7QUFDbEJBLFFBQUksR0FBR2ljLFFBQVEsQ0FBQzloQixNQUFULENBQWdCNkYsSUFBaEIsQ0FBUDtBQUNELEdBVkQsQ0FZQTtBQUNBOzs7QUFDQSxNQUFJLE9BQU9BLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUIsUUFBSTlELElBQUosRUFBMkM7QUFDekN5RSxVQUFJLENBQUUsbUNBQW9DdkssTUFBTSxDQUFDNEosSUFBRCxDQUE1QyxFQUFzRGdFLE9BQXRELENBQUo7QUFDRDs7QUFDRDtBQUNELEdBbkJELENBcUJBOzs7QUFDQSxNQUFJRSxZQUFKOztBQUNBLE1BQUlwUCxPQUFPLENBQUNrTCxJQUFJLENBQUMwQixHQUFOLENBQVgsRUFBdUI7QUFDckJ3QyxnQkFBWSxHQUFHbEUsSUFBZjtBQUNBQSxRQUFJLEdBQUdrYyxxQkFBcUIsQ0FBQ2hZLFlBQUQsRUFBZStYLFFBQWYsQ0FBNUI7O0FBQ0EsUUFBSWpjLElBQUksS0FBS2hMLFNBQWIsRUFBd0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsYUFBT21uQixzQkFBc0IsQ0FDM0JqWSxZQUQyQixFQUUzQk4sSUFGMkIsRUFHM0JJLE9BSDJCLEVBSTNCSCxRQUoyQixFQUszQkYsR0FMMkIsQ0FBN0I7QUFPRDtBQUNGOztBQUVEQyxNQUFJLEdBQUdBLElBQUksSUFBSSxFQUFmLENBeENBLENBMENBO0FBQ0E7O0FBQ0F3WSwyQkFBeUIsQ0FBQ3BjLElBQUQsQ0FBekIsQ0E1Q0EsQ0E4Q0E7O0FBQ0EsTUFBSS9LLEtBQUssQ0FBQzJPLElBQUksQ0FBQ3lZLEtBQU4sQ0FBVCxFQUF1QjtBQUNyQkMsa0JBQWMsQ0FBQ3RjLElBQUksQ0FBQ3lCLE9BQU4sRUFBZW1DLElBQWYsQ0FBZDtBQUNELEdBakRELENBbURBOzs7QUFDQSxNQUFJNEUsU0FBUyxHQUFHcUsseUJBQXlCLENBQUNqUCxJQUFELEVBQU81RCxJQUFQLEVBQWEyRCxHQUFiLENBQXpDLENBcERBLENBc0RBOztBQUNBLE1BQUl6TyxNQUFNLENBQUM4SyxJQUFJLENBQUN5QixPQUFMLENBQWE4YSxVQUFkLENBQVYsRUFBcUM7QUFDbkMsV0FBT25DLHlCQUF5QixDQUFDcGEsSUFBRCxFQUFPd0ksU0FBUCxFQUFrQjVFLElBQWxCLEVBQXdCSSxPQUF4QixFQUFpQ0gsUUFBakMsQ0FBaEM7QUFDRCxHQXpERCxDQTJEQTtBQUNBOzs7QUFDQSxNQUFJZ1csU0FBUyxHQUFHalcsSUFBSSxDQUFDcU8sRUFBckIsQ0E3REEsQ0E4REE7QUFDQTs7QUFDQXJPLE1BQUksQ0FBQ3FPLEVBQUwsR0FBVXJPLElBQUksQ0FBQzRZLFFBQWY7O0FBRUEsTUFBSXRuQixNQUFNLENBQUM4SyxJQUFJLENBQUN5QixPQUFMLENBQWFnYixRQUFkLENBQVYsRUFBbUM7QUFDakM7QUFDQTtBQUVBO0FBQ0EsUUFBSXJJLElBQUksR0FBR3hRLElBQUksQ0FBQ3dRLElBQWhCO0FBQ0F4USxRQUFJLEdBQUcsRUFBUDs7QUFDQSxRQUFJd1EsSUFBSixFQUFVO0FBQ1J4USxVQUFJLENBQUN3USxJQUFMLEdBQVlBLElBQVo7QUFDRDtBQUNGLEdBNUVELENBOEVBOzs7QUFDQXNJLHVCQUFxQixDQUFDOVksSUFBRCxDQUFyQixDQS9FQSxDQWlGQTs7QUFDQSxNQUFJOUIsSUFBSSxHQUFHOUIsSUFBSSxDQUFDeUIsT0FBTCxDQUFhSyxJQUFiLElBQXFCNkIsR0FBaEM7QUFDQSxNQUFJNkIsS0FBSyxHQUFHLElBQUk5QixLQUFKLENBQ1QsbUJBQW9CMUQsSUFBSSxDQUFDMEIsR0FBekIsSUFBaUNJLElBQUksR0FBSSxNQUFNQSxJQUFWLEdBQWtCLEVBQXZELENBRFMsRUFFVjhCLElBRlUsRUFFSjVPLFNBRkksRUFFT0EsU0FGUCxFQUVrQkEsU0FGbEIsRUFFNkJnUCxPQUY3QixFQUdWO0FBQUVoRSxRQUFJLEVBQUVBLElBQVI7QUFBY3dJLGFBQVMsRUFBRUEsU0FBekI7QUFBb0NxUixhQUFTLEVBQUVBLFNBQS9DO0FBQTBEbFcsT0FBRyxFQUFFQSxHQUEvRDtBQUFvRUUsWUFBUSxFQUFFQTtBQUE5RSxHQUhVLEVBSVZLLFlBSlUsQ0FBWjtBQU9BLFNBQU9zQixLQUFQO0FBQ0Q7O0FBRUQsU0FBUzBWLCtCQUFULENBQ0UxVixLQURGLEVBQ1M7QUFDUGhCLE1BRkYsQ0FFUztBQUZULEVBR0U7QUFDQSxNQUFJL0MsT0FBTyxHQUFHO0FBQ1prYixnQkFBWSxFQUFFLElBREY7QUFFWkMsZ0JBQVksRUFBRXBYLEtBRkY7QUFHWmhCLFVBQU0sRUFBRUE7QUFISSxHQUFkLENBREEsQ0FNQTs7QUFDQSxNQUFJcVksY0FBYyxHQUFHclgsS0FBSyxDQUFDNUIsSUFBTixDQUFXaVosY0FBaEM7O0FBQ0EsTUFBSTVuQixLQUFLLENBQUM0bkIsY0FBRCxDQUFULEVBQTJCO0FBQ3pCcGIsV0FBTyxDQUFDK08sTUFBUixHQUFpQnFNLGNBQWMsQ0FBQ3JNLE1BQWhDO0FBQ0EvTyxXQUFPLENBQUM0VixlQUFSLEdBQTBCd0YsY0FBYyxDQUFDeEYsZUFBekM7QUFDRDs7QUFDRCxTQUFPLElBQUk3UixLQUFLLENBQUN2QixnQkFBTixDQUF1QmpFLElBQTNCLENBQWdDeUIsT0FBaEMsQ0FBUDtBQUNEOztBQUVELFNBQVNpYixxQkFBVCxDQUFnQzlZLElBQWhDLEVBQXNDO0FBQ3BDLE1BQUk0RixLQUFLLEdBQUc1RixJQUFJLENBQUM2RixJQUFMLEtBQWM3RixJQUFJLENBQUM2RixJQUFMLEdBQVksRUFBMUIsQ0FBWjs7QUFDQSxPQUFLLElBQUlqUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdWtCLFlBQVksQ0FBQ3RrQixNQUFqQyxFQUF5Q0QsQ0FBQyxFQUExQyxFQUE4QztBQUM1QyxRQUFJYSxHQUFHLEdBQUcwakIsWUFBWSxDQUFDdmtCLENBQUQsQ0FBdEI7QUFDQSxRQUFJa2dCLFFBQVEsR0FBR2xPLEtBQUssQ0FBQ25SLEdBQUQsQ0FBcEI7QUFDQSxRQUFJeWtCLE9BQU8sR0FBR25DLG1CQUFtQixDQUFDdGlCLEdBQUQsQ0FBakM7O0FBQ0EsUUFBSXFmLFFBQVEsS0FBS29GLE9BQWIsSUFBd0IsRUFBRXBGLFFBQVEsSUFBSUEsUUFBUSxDQUFDcUYsT0FBdkIsQ0FBNUIsRUFBNkQ7QUFDM0R2VCxXQUFLLENBQUNuUixHQUFELENBQUwsR0FBYXFmLFFBQVEsR0FBR3NGLFdBQVcsQ0FBQ0YsT0FBRCxFQUFVcEYsUUFBVixDQUFkLEdBQW9Db0YsT0FBekQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBU0UsV0FBVCxDQUFzQkMsRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCO0FBQzVCLE1BQUl0SyxNQUFNLEdBQUcsVUFBVXBaLENBQVYsRUFBYWlCLENBQWIsRUFBZ0I7QUFDM0I7QUFDQXdpQixNQUFFLENBQUN6akIsQ0FBRCxFQUFJaUIsQ0FBSixDQUFGO0FBQ0F5aUIsTUFBRSxDQUFDMWpCLENBQUQsRUFBSWlCLENBQUosQ0FBRjtBQUNELEdBSkQ7O0FBS0FtWSxRQUFNLENBQUNtSyxPQUFQLEdBQWlCLElBQWpCO0FBQ0EsU0FBT25LLE1BQVA7QUFDRCxDLENBRUQ7QUFDQTs7O0FBQ0EsU0FBUzBKLGNBQVQsQ0FBeUI3YSxPQUF6QixFQUFrQ21DLElBQWxDLEVBQXdDO0FBQ3RDLE1BQUk4SCxJQUFJLEdBQUlqSyxPQUFPLENBQUM0YSxLQUFSLElBQWlCNWEsT0FBTyxDQUFDNGEsS0FBUixDQUFjM1EsSUFBaEMsSUFBeUMsT0FBcEQ7QUFDQSxNQUFJNEcsS0FBSyxHQUFJN1EsT0FBTyxDQUFDNGEsS0FBUixJQUFpQjVhLE9BQU8sQ0FBQzRhLEtBQVIsQ0FBYy9KLEtBQWhDLElBQTBDLE9BQXREO0FBQ0MsR0FBQzFPLElBQUksQ0FBQ2tQLEtBQUwsS0FBZWxQLElBQUksQ0FBQ2tQLEtBQUwsR0FBYSxFQUE1QixDQUFELEVBQWtDcEgsSUFBbEMsSUFBMEM5SCxJQUFJLENBQUN5WSxLQUFMLENBQVdobkIsS0FBckQ7QUFDRCxNQUFJNGMsRUFBRSxHQUFHck8sSUFBSSxDQUFDcU8sRUFBTCxLQUFZck8sSUFBSSxDQUFDcU8sRUFBTCxHQUFVLEVBQXRCLENBQVQ7QUFDQSxNQUFJeUYsUUFBUSxHQUFHekYsRUFBRSxDQUFDSyxLQUFELENBQWpCO0FBQ0EsTUFBSTZLLFFBQVEsR0FBR3ZaLElBQUksQ0FBQ3lZLEtBQUwsQ0FBV2MsUUFBMUI7O0FBQ0EsTUFBSWxvQixLQUFLLENBQUN5aUIsUUFBRCxDQUFULEVBQXFCO0FBQ25CLFFBQ0UvZ0IsS0FBSyxDQUFDQyxPQUFOLENBQWM4Z0IsUUFBZCxJQUNJQSxRQUFRLENBQUN6ZixPQUFULENBQWlCa2xCLFFBQWpCLE1BQStCLENBQUMsQ0FEcEMsR0FFSXpGLFFBQVEsS0FBS3lGLFFBSG5CLEVBSUU7QUFDQWxMLFFBQUUsQ0FBQ0ssS0FBRCxDQUFGLEdBQVksQ0FBQzZLLFFBQUQsRUFBVzdULE1BQVgsQ0FBa0JvTyxRQUFsQixDQUFaO0FBQ0Q7QUFDRixHQVJELE1BUU87QUFDTHpGLE1BQUUsQ0FBQ0ssS0FBRCxDQUFGLEdBQVk2SyxRQUFaO0FBQ0Q7QUFDRjtBQUVEOzs7QUFFQSxJQUFJQyxnQkFBZ0IsR0FBRyxDQUF2QjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLENBQXZCLEMsQ0FFQTtBQUNBOztBQUNBLFNBQVNsRCxhQUFULENBQ0VuVyxPQURGLEVBRUVMLEdBRkYsRUFHRUMsSUFIRixFQUlFQyxRQUpGLEVBS0V5WixpQkFMRixFQU1FQyxlQU5GLEVBT0U7QUFDQSxNQUFJNW1CLEtBQUssQ0FBQ0MsT0FBTixDQUFjZ04sSUFBZCxLQUF1QnhPLFdBQVcsQ0FBQ3dPLElBQUQsQ0FBdEMsRUFBOEM7QUFDNUMwWixxQkFBaUIsR0FBR3paLFFBQXBCO0FBQ0FBLFlBQVEsR0FBR0QsSUFBWDtBQUNBQSxRQUFJLEdBQUc1TyxTQUFQO0FBQ0Q7O0FBQ0QsTUFBSUUsTUFBTSxDQUFDcW9CLGVBQUQsQ0FBVixFQUE2QjtBQUMzQkQscUJBQWlCLEdBQUdELGdCQUFwQjtBQUNEOztBQUNELFNBQU9HLGNBQWMsQ0FBQ3haLE9BQUQsRUFBVUwsR0FBVixFQUFlQyxJQUFmLEVBQXFCQyxRQUFyQixFQUErQnlaLGlCQUEvQixDQUFyQjtBQUNEOztBQUVELFNBQVNFLGNBQVQsQ0FDRXhaLE9BREYsRUFFRUwsR0FGRixFQUdFQyxJQUhGLEVBSUVDLFFBSkYsRUFLRXlaLGlCQUxGLEVBTUU7QUFDQSxNQUFJcm9CLEtBQUssQ0FBQzJPLElBQUQsQ0FBTCxJQUFlM08sS0FBSyxDQUFFMk8sSUFBRCxDQUFPeUMsTUFBUixDQUF4QixFQUF5QztBQUN2Q25LLFNBQUEsSUFBeUN5RSxJQUFJLENBQzNDLHFEQUFzRDlKLElBQUksQ0FBQ0MsU0FBTCxDQUFlOE0sSUFBZixDQUF0RCxHQUE4RSxJQUE5RSxHQUNBLHdEQUYyQyxFQUczQ0ksT0FIMkMsQ0FBN0M7QUFLQSxXQUFPb0IsZ0JBQWdCLEVBQXZCO0FBQ0QsR0FSRCxDQVNBOzs7QUFDQSxNQUFJblEsS0FBSyxDQUFDMk8sSUFBRCxDQUFMLElBQWUzTyxLQUFLLENBQUMyTyxJQUFJLENBQUM2WixFQUFOLENBQXhCLEVBQW1DO0FBQ2pDOVosT0FBRyxHQUFHQyxJQUFJLENBQUM2WixFQUFYO0FBQ0Q7O0FBQ0QsTUFBSSxDQUFDOVosR0FBTCxFQUFVO0FBQ1I7QUFDQSxXQUFPeUIsZ0JBQWdCLEVBQXZCO0FBQ0QsR0FoQkQsQ0FpQkE7OztBQUNBLE1BQUlsSixLQUFBLElBQ0ZqSCxLQUFLLENBQUMyTyxJQUFELENBREgsSUFDYTNPLEtBQUssQ0FBQzJPLElBQUksQ0FBQ3ZMLEdBQU4sQ0FEbEIsSUFDZ0MsQ0FBQ2pELFdBQVcsQ0FBQ3dPLElBQUksQ0FBQ3ZMLEdBQU4sQ0FEaEQsRUFFRTtBQUNBO0FBQ0VzSSxVQUFJLENBQ0YsNkNBQ0Esa0NBRkUsRUFHRnFELE9BSEUsQ0FBSjtBQUtEO0FBQ0YsR0E1QkQsQ0E2QkE7OztBQUNBLE1BQUlyTixLQUFLLENBQUNDLE9BQU4sQ0FBY2lOLFFBQWQsS0FDRixPQUFPQSxRQUFRLENBQUMsQ0FBRCxDQUFmLEtBQXVCLFVBRHpCLEVBRUU7QUFDQUQsUUFBSSxHQUFHQSxJQUFJLElBQUksRUFBZjtBQUNBQSxRQUFJLENBQUNtVyxXQUFMLEdBQW1CO0FBQUU1TixhQUFPLEVBQUV0SSxRQUFRLENBQUMsQ0FBRDtBQUFuQixLQUFuQjtBQUNBQSxZQUFRLENBQUNwTSxNQUFULEdBQWtCLENBQWxCO0FBQ0Q7O0FBQ0QsTUFBSTZsQixpQkFBaUIsS0FBS0QsZ0JBQTFCLEVBQTRDO0FBQzFDeFosWUFBUSxHQUFHd1AsaUJBQWlCLENBQUN4UCxRQUFELENBQTVCO0FBQ0QsR0FGRCxNQUVPLElBQUl5WixpQkFBaUIsS0FBS0YsZ0JBQTFCLEVBQTRDO0FBQ2pEdlosWUFBUSxHQUFHdVAsdUJBQXVCLENBQUN2UCxRQUFELENBQWxDO0FBQ0Q7O0FBQ0QsTUFBSTJCLEtBQUosRUFBV3JCLEVBQVg7O0FBQ0EsTUFBSSxPQUFPUixHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0IsUUFBSTNELElBQUo7QUFDQW1FLE1BQUUsR0FBSUgsT0FBTyxDQUFDMFosTUFBUixJQUFrQjFaLE9BQU8sQ0FBQzBaLE1BQVIsQ0FBZXZaLEVBQWxDLElBQXlDckksTUFBTSxDQUFDYyxlQUFQLENBQXVCK0csR0FBdkIsQ0FBOUM7O0FBQ0EsUUFBSTdILE1BQU0sQ0FBQ1csYUFBUCxDQUFxQmtILEdBQXJCLENBQUosRUFBK0I7QUFDN0I7QUFDQSxVQUFJekgsS0FBQSxJQUF5Q2pILEtBQUssQ0FBQzJPLElBQUQsQ0FBOUMsSUFBd0QzTyxLQUFLLENBQUMyTyxJQUFJLENBQUM0WSxRQUFOLENBQWpFLEVBQWtGO0FBQ2hGN2IsWUFBSSxDQUNELG1GQUFtRmdELEdBQW5GLEdBQXlGLElBRHhGLEVBRUZLLE9BRkUsQ0FBSjtBQUlEOztBQUNEd0IsV0FBSyxHQUFHLElBQUk5QixLQUFKLENBQ041SCxNQUFNLENBQUNlLG9CQUFQLENBQTRCOEcsR0FBNUIsQ0FETSxFQUM0QkMsSUFENUIsRUFDa0NDLFFBRGxDLEVBRU43TyxTQUZNLEVBRUtBLFNBRkwsRUFFZ0JnUCxPQUZoQixDQUFSO0FBSUQsS0FaRCxNQVlPLElBQUksQ0FBQyxDQUFDSixJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDK1osR0FBaEIsS0FBd0Ixb0IsS0FBSyxDQUFDK0ssSUFBSSxHQUFHbUwsWUFBWSxDQUFDbkgsT0FBTyxDQUFDcEMsUUFBVCxFQUFtQixZQUFuQixFQUFpQytCLEdBQWpDLENBQXBCLENBQWpDLEVBQTZGO0FBQ2xHO0FBQ0E2QixXQUFLLEdBQUd3VyxlQUFlLENBQUNoYyxJQUFELEVBQU80RCxJQUFQLEVBQWFJLE9BQWIsRUFBc0JILFFBQXRCLEVBQWdDRixHQUFoQyxDQUF2QjtBQUNELEtBSE0sTUFHQTtBQUNMO0FBQ0E7QUFDQTtBQUNBNkIsV0FBSyxHQUFHLElBQUk5QixLQUFKLENBQ05DLEdBRE0sRUFDREMsSUFEQyxFQUNLQyxRQURMLEVBRU43TyxTQUZNLEVBRUtBLFNBRkwsRUFFZ0JnUCxPQUZoQixDQUFSO0FBSUQ7QUFDRixHQTNCRCxNQTJCTztBQUNMO0FBQ0F3QixTQUFLLEdBQUd3VyxlQUFlLENBQUNyWSxHQUFELEVBQU1DLElBQU4sRUFBWUksT0FBWixFQUFxQkgsUUFBckIsQ0FBdkI7QUFDRDs7QUFDRCxNQUFJbE4sS0FBSyxDQUFDQyxPQUFOLENBQWM0TyxLQUFkLENBQUosRUFBMEI7QUFDeEIsV0FBT0EsS0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJdlEsS0FBSyxDQUFDdVEsS0FBRCxDQUFULEVBQWtCO0FBQ3ZCLFFBQUl2USxLQUFLLENBQUNrUCxFQUFELENBQVQsRUFBZTtBQUFFeVosYUFBTyxDQUFDcFksS0FBRCxFQUFRckIsRUFBUixDQUFQO0FBQXFCOztBQUN0QyxRQUFJbFAsS0FBSyxDQUFDMk8sSUFBRCxDQUFULEVBQWlCO0FBQUVpYSwwQkFBb0IsQ0FBQ2phLElBQUQsQ0FBcEI7QUFBNkI7O0FBQ2hELFdBQU80QixLQUFQO0FBQ0QsR0FKTSxNQUlBO0FBQ0wsV0FBT0osZ0JBQWdCLEVBQXZCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTd1ksT0FBVCxDQUFrQnBZLEtBQWxCLEVBQXlCckIsRUFBekIsRUFBNkIyWixLQUE3QixFQUFvQztBQUNsQ3RZLE9BQUssQ0FBQ3JCLEVBQU4sR0FBV0EsRUFBWDs7QUFDQSxNQUFJcUIsS0FBSyxDQUFDN0IsR0FBTixLQUFjLGVBQWxCLEVBQW1DO0FBQ2pDO0FBQ0FRLE1BQUUsR0FBR25QLFNBQUw7QUFDQThvQixTQUFLLEdBQUcsSUFBUjtBQUNEOztBQUNELE1BQUk3b0IsS0FBSyxDQUFDdVEsS0FBSyxDQUFDM0IsUUFBUCxDQUFULEVBQTJCO0FBQ3pCLFNBQUssSUFBSXJNLENBQUMsR0FBRyxDQUFSLEVBQVdpQyxDQUFDLEdBQUcrTCxLQUFLLENBQUMzQixRQUFOLENBQWVwTSxNQUFuQyxFQUEyQ0QsQ0FBQyxHQUFHaUMsQ0FBL0MsRUFBa0RqQyxDQUFDLEVBQW5ELEVBQXVEO0FBQ3JELFVBQUkwTixLQUFLLEdBQUdNLEtBQUssQ0FBQzNCLFFBQU4sQ0FBZXJNLENBQWYsQ0FBWjs7QUFDQSxVQUFJdkMsS0FBSyxDQUFDaVEsS0FBSyxDQUFDdkIsR0FBUCxDQUFMLEtBQ0Y3TyxPQUFPLENBQUNvUSxLQUFLLENBQUNmLEVBQVAsQ0FBUCxJQUFzQmpQLE1BQU0sQ0FBQzRvQixLQUFELENBQU4sSUFBaUI1WSxLQUFLLENBQUN2QixHQUFOLEtBQWMsS0FEbkQsQ0FBSixFQUNnRTtBQUM5RGlhLGVBQU8sQ0FBQzFZLEtBQUQsRUFBUWYsRUFBUixFQUFZMlosS0FBWixDQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0Qsb0JBQVQsQ0FBK0JqYSxJQUEvQixFQUFxQztBQUNuQyxNQUFJdE8sUUFBUSxDQUFDc08sSUFBSSxDQUFDbWEsS0FBTixDQUFaLEVBQTBCO0FBQ3hCbk4sWUFBUSxDQUFDaE4sSUFBSSxDQUFDbWEsS0FBTixDQUFSO0FBQ0Q7O0FBQ0QsTUFBSXpvQixRQUFRLENBQUNzTyxJQUFJLENBQUNvYSxLQUFOLENBQVosRUFBMEI7QUFDeEJwTixZQUFRLENBQUNoTixJQUFJLENBQUNvYSxLQUFOLENBQVI7QUFDRDtBQUNGO0FBRUQ7OztBQUVBLFNBQVNDLFVBQVQsQ0FBcUI3YyxFQUFyQixFQUF5QjtBQUN2QkEsSUFBRSxDQUFDOGMsTUFBSCxHQUFZLElBQVosQ0FEdUIsQ0FDTDs7QUFDbEI5YyxJQUFFLENBQUNnVyxZQUFILEdBQWtCLElBQWxCLENBRnVCLENBRUM7O0FBQ3hCLE1BQUkzVixPQUFPLEdBQUdMLEVBQUUsQ0FBQ1EsUUFBakI7QUFDQSxNQUFJdWMsV0FBVyxHQUFHL2MsRUFBRSxDQUFDc2MsTUFBSCxHQUFZamMsT0FBTyxDQUFDbWIsWUFBdEMsQ0FKdUIsQ0FJNkI7O0FBQ3BELE1BQUl0QyxhQUFhLEdBQUc2RCxXQUFXLElBQUlBLFdBQVcsQ0FBQ25hLE9BQS9DO0FBQ0E1QyxJQUFFLENBQUMwVSxNQUFILEdBQVk1QixZQUFZLENBQUN6UyxPQUFPLENBQUMyYyxlQUFULEVBQTBCOUQsYUFBMUIsQ0FBeEI7QUFDQWxaLElBQUUsQ0FBQ3dVLFlBQUgsR0FBa0JqaEIsV0FBbEIsQ0FQdUIsQ0FRdkI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0F5TSxJQUFFLENBQUM2WSxFQUFILEdBQVEsVUFBVXpnQixDQUFWLEVBQWFpQixDQUFiLEVBQWdCMUIsQ0FBaEIsRUFBbUJtaEIsQ0FBbkIsRUFBc0I7QUFBRSxXQUFPQyxhQUFhLENBQUMvWSxFQUFELEVBQUs1SCxDQUFMLEVBQVFpQixDQUFSLEVBQVcxQixDQUFYLEVBQWNtaEIsQ0FBZCxFQUFpQixLQUFqQixDQUFwQjtBQUE4QyxHQUE5RSxDQVp1QixDQWF2QjtBQUNBOzs7QUFDQTlZLElBQUUsQ0FBQzJVLGNBQUgsR0FBb0IsVUFBVXZjLENBQVYsRUFBYWlCLENBQWIsRUFBZ0IxQixDQUFoQixFQUFtQm1oQixDQUFuQixFQUFzQjtBQUFFLFdBQU9DLGFBQWEsQ0FBQy9ZLEVBQUQsRUFBSzVILENBQUwsRUFBUWlCLENBQVIsRUFBVzFCLENBQVgsRUFBY21oQixDQUFkLEVBQWlCLElBQWpCLENBQXBCO0FBQTZDLEdBQXpGLENBZnVCLENBaUJ2QjtBQUNBOzs7QUFDQSxNQUFJbUUsVUFBVSxHQUFHRixXQUFXLElBQUlBLFdBQVcsQ0FBQ3ZhLElBQTVDO0FBRUE7O0FBQ0EsTUFBSTFILElBQUosRUFBMkM7QUFDekNnTCxxQkFBaUIsQ0FBQzlGLEVBQUQsRUFBSyxRQUFMLEVBQWVpZCxVQUFVLElBQUlBLFVBQVUsQ0FBQ3ZMLEtBQXpCLElBQWtDbmUsV0FBakQsRUFBOEQsWUFBWTtBQUN6RixPQUFDMnBCLHdCQUFELElBQTZCM2QsSUFBSSxDQUFDLHFCQUFELEVBQXdCUyxFQUF4QixDQUFqQztBQUNELEtBRmdCLEVBRWQsSUFGYyxDQUFqQjtBQUdBOEYscUJBQWlCLENBQUM5RixFQUFELEVBQUssWUFBTCxFQUFtQkssT0FBTyxDQUFDOGMsZ0JBQVIsSUFBNEI1cEIsV0FBL0MsRUFBNEQsWUFBWTtBQUN2RixPQUFDMnBCLHdCQUFELElBQTZCM2QsSUFBSSxDQUFDLHlCQUFELEVBQTRCUyxFQUE1QixDQUFqQztBQUNELEtBRmdCLEVBRWQsSUFGYyxDQUFqQjtBQUdELEdBUEQsTUFPTyxFQUdOO0FBQ0Y7O0FBRUQsSUFBSW9kLHdCQUF3QixHQUFHLElBQS9COztBQUVBLFNBQVNDLFdBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ3pCO0FBQ0F0RyxzQkFBb0IsQ0FBQ3NHLEdBQUcsQ0FBQ2pwQixTQUFMLENBQXBCOztBQUVBaXBCLEtBQUcsQ0FBQ2pwQixTQUFKLENBQWNrcEIsU0FBZCxHQUEwQixVQUFVcG1CLEVBQVYsRUFBYztBQUN0QyxXQUFPa1gsUUFBUSxDQUFDbFgsRUFBRCxFQUFLLElBQUwsQ0FBZjtBQUNELEdBRkQ7O0FBSUFtbUIsS0FBRyxDQUFDanBCLFNBQUosQ0FBY21wQixPQUFkLEdBQXdCLFlBQVk7QUFDbEMsUUFBSXhkLEVBQUUsR0FBRyxJQUFUO0FBQ0EsUUFBSXlkLEdBQUcsR0FBR3pkLEVBQUUsQ0FBQ1EsUUFBYjtBQUNBLFFBQUk0TyxNQUFNLEdBQUdxTyxHQUFHLENBQUNyTyxNQUFqQjtBQUNBLFFBQUlvTSxZQUFZLEdBQUdpQyxHQUFHLENBQUNqQyxZQUF2Qjs7QUFFQSxRQUFJQSxZQUFKLEVBQWtCO0FBQ2hCeGIsUUFBRSxDQUFDd1UsWUFBSCxHQUFrQnJCLG9CQUFvQixDQUNwQ3FJLFlBQVksQ0FBQ2haLElBQWIsQ0FBa0JtVyxXQURrQixFQUVwQzNZLEVBQUUsQ0FBQzBVLE1BRmlDLEVBR3BDMVUsRUFBRSxDQUFDd1UsWUFIaUMsQ0FBdEM7QUFLRCxLQVppQyxDQWNsQztBQUNBOzs7QUFDQXhVLE1BQUUsQ0FBQ3NjLE1BQUgsR0FBWWQsWUFBWixDQWhCa0MsQ0FpQmxDOztBQUNBLFFBQUlwWCxLQUFKOztBQUNBLFFBQUk7QUFDRjtBQUNBO0FBQ0E7QUFDQWdaLDhCQUF3QixHQUFHcGQsRUFBM0I7QUFDQW9FLFdBQUssR0FBR2dMLE1BQU0sQ0FBQzVhLElBQVAsQ0FBWXdMLEVBQUUsQ0FBQ3NQLFlBQWYsRUFBNkJ0UCxFQUFFLENBQUMyVSxjQUFoQyxDQUFSO0FBQ0QsS0FORCxDQU1FLE9BQU83YSxDQUFQLEVBQVU7QUFDVjBTLGlCQUFXLENBQUMxUyxDQUFELEVBQUlrRyxFQUFKLEVBQVEsUUFBUixDQUFYLENBRFUsQ0FFVjtBQUNBOztBQUNBOztBQUNBLFVBQUlsRixLQUFBLElBQXlDa0YsRUFBRSxDQUFDUSxRQUFILENBQVlrZCxXQUF6RCxFQUFzRTtBQUNwRSxZQUFJO0FBQ0Z0WixlQUFLLEdBQUdwRSxFQUFFLENBQUNRLFFBQUgsQ0FBWWtkLFdBQVosQ0FBd0JscEIsSUFBeEIsQ0FBNkJ3TCxFQUFFLENBQUNzUCxZQUFoQyxFQUE4Q3RQLEVBQUUsQ0FBQzJVLGNBQWpELEVBQWlFN2EsQ0FBakUsQ0FBUjtBQUNELFNBRkQsQ0FFRSxPQUFPQSxDQUFQLEVBQVU7QUFDVjBTLHFCQUFXLENBQUMxUyxDQUFELEVBQUlrRyxFQUFKLEVBQVEsYUFBUixDQUFYO0FBQ0FvRSxlQUFLLEdBQUdwRSxFQUFFLENBQUM4YyxNQUFYO0FBQ0Q7QUFDRixPQVBELE1BT087QUFDTDFZLGFBQUssR0FBR3BFLEVBQUUsQ0FBQzhjLE1BQVg7QUFDRDtBQUNGLEtBckJELFNBcUJVO0FBQ1JNLDhCQUF3QixHQUFHLElBQTNCO0FBQ0QsS0ExQ2lDLENBMkNsQzs7O0FBQ0EsUUFBSTduQixLQUFLLENBQUNDLE9BQU4sQ0FBYzRPLEtBQWQsS0FBd0JBLEtBQUssQ0FBQy9OLE1BQU4sS0FBaUIsQ0FBN0MsRUFBZ0Q7QUFDOUMrTixXQUFLLEdBQUdBLEtBQUssQ0FBQyxDQUFELENBQWI7QUFDRCxLQTlDaUMsQ0ErQ2xDOzs7QUFDQSxRQUFJLEVBQUVBLEtBQUssWUFBWTlCLEtBQW5CLENBQUosRUFBK0I7QUFDN0IsVUFBSXhILEtBQUEsSUFBeUN2RixLQUFLLENBQUNDLE9BQU4sQ0FBYzRPLEtBQWQsQ0FBN0MsRUFBbUU7QUFDakU3RSxZQUFJLENBQ0Ysd0VBQ0EsbUNBRkUsRUFHRlMsRUFIRSxDQUFKO0FBS0Q7O0FBQ0RvRSxXQUFLLEdBQUdKLGdCQUFnQixFQUF4QjtBQUNELEtBekRpQyxDQTBEbEM7OztBQUNBSSxTQUFLLENBQUNoQixNQUFOLEdBQWVvWSxZQUFmO0FBQ0EsV0FBT3BYLEtBQVA7QUFDRCxHQTdERDtBQThERDtBQUVEOzs7QUFFQSxTQUFTdVosVUFBVCxDQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQy9CLE1BQ0VELElBQUksQ0FBQ0UsVUFBTCxJQUNDamYsU0FBUyxJQUFJK2UsSUFBSSxDQUFDOWUsTUFBTSxDQUFDaWYsV0FBUixDQUFKLEtBQTZCLFFBRjdDLEVBR0U7QUFDQUgsUUFBSSxHQUFHQSxJQUFJLENBQUM3UyxPQUFaO0FBQ0Q7O0FBQ0QsU0FBTzdXLFFBQVEsQ0FBQzBwQixJQUFELENBQVIsR0FDSEMsSUFBSSxDQUFDOWtCLE1BQUwsQ0FBWTZrQixJQUFaLENBREcsR0FFSEEsSUFGSjtBQUdEOztBQUVELFNBQVM3QyxzQkFBVCxDQUNFaUQsT0FERixFQUVFeGIsSUFGRixFQUdFSSxPQUhGLEVBSUVILFFBSkYsRUFLRUYsR0FMRixFQU1FO0FBQ0EsTUFBSTBCLElBQUksR0FBR0QsZ0JBQWdCLEVBQTNCO0FBQ0FDLE1BQUksQ0FBQ25CLFlBQUwsR0FBb0JrYixPQUFwQjtBQUNBL1osTUFBSSxDQUFDTixTQUFMLEdBQWlCO0FBQUVuQixRQUFJLEVBQUVBLElBQVI7QUFBY0ksV0FBTyxFQUFFQSxPQUF2QjtBQUFnQ0gsWUFBUSxFQUFFQSxRQUExQztBQUFvREYsT0FBRyxFQUFFQTtBQUF6RCxHQUFqQjtBQUNBLFNBQU8wQixJQUFQO0FBQ0Q7O0FBRUQsU0FBUzZXLHFCQUFULENBQ0VrRCxPQURGLEVBRUVuRCxRQUZGLEVBR0U7QUFDQSxNQUFJL21CLE1BQU0sQ0FBQ2txQixPQUFPLENBQUM5ZCxLQUFULENBQU4sSUFBeUJyTSxLQUFLLENBQUNtcUIsT0FBTyxDQUFDQyxTQUFULENBQWxDLEVBQXVEO0FBQ3JELFdBQU9ELE9BQU8sQ0FBQ0MsU0FBZjtBQUNEOztBQUVELE1BQUlwcUIsS0FBSyxDQUFDbXFCLE9BQU8sQ0FBQ0UsUUFBVCxDQUFULEVBQTZCO0FBQzNCLFdBQU9GLE9BQU8sQ0FBQ0UsUUFBZjtBQUNEOztBQUVELE1BQUlDLEtBQUssR0FBR2Ysd0JBQVo7O0FBQ0EsTUFBSWUsS0FBSyxJQUFJdHFCLEtBQUssQ0FBQ21xQixPQUFPLENBQUNJLE1BQVQsQ0FBZCxJQUFrQ0osT0FBTyxDQUFDSSxNQUFSLENBQWV2bkIsT0FBZixDQUF1QnNuQixLQUF2QixNQUFrQyxDQUFDLENBQXpFLEVBQTRFO0FBQzFFO0FBQ0FILFdBQU8sQ0FBQ0ksTUFBUixDQUFlamQsSUFBZixDQUFvQmdkLEtBQXBCO0FBQ0Q7O0FBRUQsTUFBSXJxQixNQUFNLENBQUNrcUIsT0FBTyxDQUFDSyxPQUFULENBQU4sSUFBMkJ4cUIsS0FBSyxDQUFDbXFCLE9BQU8sQ0FBQ00sV0FBVCxDQUFwQyxFQUEyRDtBQUN6RCxXQUFPTixPQUFPLENBQUNNLFdBQWY7QUFDRDs7QUFFRCxNQUFJSCxLQUFLLElBQUksQ0FBQ3RxQixLQUFLLENBQUNtcUIsT0FBTyxDQUFDSSxNQUFULENBQW5CLEVBQXFDO0FBQ25DLFFBQUlBLE1BQU0sR0FBR0osT0FBTyxDQUFDSSxNQUFSLEdBQWlCLENBQUNELEtBQUQsQ0FBOUI7QUFDQSxRQUFJSSxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUNBLFFBQUlDLFlBQVksR0FBRyxJQUFuQjtBQUVFTixTQUFELENBQVFPLEdBQVIsQ0FBWSxnQkFBWixFQUE4QixZQUFZO0FBQUUsYUFBT2pvQixNQUFNLENBQUMybkIsTUFBRCxFQUFTRCxLQUFULENBQWI7QUFBK0IsS0FBM0U7O0FBRUQsUUFBSVEsV0FBVyxHQUFHLFVBQVVDLGVBQVYsRUFBMkI7QUFDM0MsV0FBSyxJQUFJeG9CLENBQUMsR0FBRyxDQUFSLEVBQVdpQyxDQUFDLEdBQUcrbEIsTUFBTSxDQUFDL25CLE1BQTNCLEVBQW1DRCxDQUFDLEdBQUdpQyxDQUF2QyxFQUEwQ2pDLENBQUMsRUFBM0MsRUFBK0M7QUFDNUNnb0IsY0FBTSxDQUFDaG9CLENBQUQsQ0FBUCxDQUFZeW9CLFlBQVo7QUFDRDs7QUFFRCxVQUFJRCxlQUFKLEVBQXFCO0FBQ25CUixjQUFNLENBQUMvbkIsTUFBUCxHQUFnQixDQUFoQjs7QUFDQSxZQUFJbW9CLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6Qk0sc0JBQVksQ0FBQ04sWUFBRCxDQUFaO0FBQ0FBLHNCQUFZLEdBQUcsSUFBZjtBQUNEOztBQUNELFlBQUlDLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6Qkssc0JBQVksQ0FBQ0wsWUFBRCxDQUFaO0FBQ0FBLHNCQUFZLEdBQUcsSUFBZjtBQUNEO0FBQ0Y7QUFDRixLQWhCRDs7QUFrQkEsUUFBSTlRLE9BQU8sR0FBR3RULElBQUksQ0FBQyxVQUFVbEIsR0FBVixFQUFlO0FBQ2hDO0FBQ0E2a0IsYUFBTyxDQUFDRSxRQUFSLEdBQW1CUCxVQUFVLENBQUN4a0IsR0FBRCxFQUFNMGhCLFFBQU4sQ0FBN0IsQ0FGZ0MsQ0FHaEM7QUFDQTs7QUFDQSxVQUFJLENBQUMwRCxJQUFMLEVBQVc7QUFDVEksbUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxPQUZELE1BRU87QUFDTFAsY0FBTSxDQUFDL25CLE1BQVAsR0FBZ0IsQ0FBaEI7QUFDRDtBQUNGLEtBVmlCLENBQWxCO0FBWUEsUUFBSTBvQixNQUFNLEdBQUcxa0IsSUFBSSxDQUFDLFVBQVUya0IsTUFBVixFQUFrQjtBQUNsQ2xrQixXQUFBLElBQXlDeUUsSUFBSSxDQUMzQyx3Q0FBeUN2SyxNQUFNLENBQUNncEIsT0FBRCxDQUEvQyxJQUNDZ0IsTUFBTSxHQUFJLGVBQWVBLE1BQW5CLEdBQTZCLEVBRHBDLENBRDJDLENBQTdDOztBQUlBLFVBQUluckIsS0FBSyxDQUFDbXFCLE9BQU8sQ0FBQ0MsU0FBVCxDQUFULEVBQThCO0FBQzVCRCxlQUFPLENBQUM5ZCxLQUFSLEdBQWdCLElBQWhCO0FBQ0F5ZSxtQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEO0FBQ0YsS0FUZ0IsQ0FBakI7QUFXQSxRQUFJeGxCLEdBQUcsR0FBRzZrQixPQUFPLENBQUNyUSxPQUFELEVBQVVvUixNQUFWLENBQWpCOztBQUVBLFFBQUk3cUIsUUFBUSxDQUFDaUYsR0FBRCxDQUFaLEVBQW1CO0FBQ2pCLFVBQUkvRCxTQUFTLENBQUMrRCxHQUFELENBQWIsRUFBb0I7QUFDbEI7QUFDQSxZQUFJekYsT0FBTyxDQUFDc3FCLE9BQU8sQ0FBQ0UsUUFBVCxDQUFYLEVBQStCO0FBQzdCL2tCLGFBQUcsQ0FBQzlELElBQUosQ0FBU3NZLE9BQVQsRUFBa0JvUixNQUFsQjtBQUNEO0FBQ0YsT0FMRCxNQUtPLElBQUkzcEIsU0FBUyxDQUFDK0QsR0FBRyxDQUFDOGxCLFNBQUwsQ0FBYixFQUE4QjtBQUNuQzlsQixXQUFHLENBQUM4bEIsU0FBSixDQUFjNXBCLElBQWQsQ0FBbUJzWSxPQUFuQixFQUE0Qm9SLE1BQTVCOztBQUVBLFlBQUlsckIsS0FBSyxDQUFDc0YsR0FBRyxDQUFDK0csS0FBTCxDQUFULEVBQXNCO0FBQ3BCOGQsaUJBQU8sQ0FBQ0MsU0FBUixHQUFvQk4sVUFBVSxDQUFDeGtCLEdBQUcsQ0FBQytHLEtBQUwsRUFBWTJhLFFBQVosQ0FBOUI7QUFDRDs7QUFFRCxZQUFJaG5CLEtBQUssQ0FBQ3NGLEdBQUcsQ0FBQ2tsQixPQUFMLENBQVQsRUFBd0I7QUFDdEJMLGlCQUFPLENBQUNNLFdBQVIsR0FBc0JYLFVBQVUsQ0FBQ3hrQixHQUFHLENBQUNrbEIsT0FBTCxFQUFjeEQsUUFBZCxDQUFoQzs7QUFDQSxjQUFJMWhCLEdBQUcsQ0FBQytsQixLQUFKLEtBQWMsQ0FBbEIsRUFBcUI7QUFDbkJsQixtQkFBTyxDQUFDSyxPQUFSLEdBQWtCLElBQWxCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xHLHdCQUFZLEdBQUc1USxVQUFVLENBQUMsWUFBWTtBQUNwQzRRLDBCQUFZLEdBQUcsSUFBZjs7QUFDQSxrQkFBSTlxQixPQUFPLENBQUNzcUIsT0FBTyxDQUFDRSxRQUFULENBQVAsSUFBNkJ4cUIsT0FBTyxDQUFDc3FCLE9BQU8sQ0FBQzlkLEtBQVQsQ0FBeEMsRUFBeUQ7QUFDdkQ4ZCx1QkFBTyxDQUFDSyxPQUFSLEdBQWtCLElBQWxCO0FBQ0FNLDJCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDRixhQU53QixFQU10QnhsQixHQUFHLENBQUMrbEIsS0FBSixJQUFhLEdBTlMsQ0FBekI7QUFPRDtBQUNGOztBQUVELFlBQUlyckIsS0FBSyxDQUFDc0YsR0FBRyxDQUFDZ21CLE9BQUwsQ0FBVCxFQUF3QjtBQUN0QlYsc0JBQVksR0FBRzdRLFVBQVUsQ0FBQyxZQUFZO0FBQ3BDNlEsd0JBQVksR0FBRyxJQUFmOztBQUNBLGdCQUFJL3FCLE9BQU8sQ0FBQ3NxQixPQUFPLENBQUNFLFFBQVQsQ0FBWCxFQUErQjtBQUM3QmEsb0JBQU0sQ0FDSmprQixLQUFBLEdBQ0ssY0FBZTNCLEdBQUcsQ0FBQ2dtQixPQUFuQixHQUE4QixLQURuQyxHQUVJLENBSEEsQ0FBTjtBQUtEO0FBQ0YsV0FUd0IsRUFTdEJobUIsR0FBRyxDQUFDZ21CLE9BVGtCLENBQXpCO0FBVUQ7QUFDRjtBQUNGOztBQUVEWixRQUFJLEdBQUcsS0FBUCxDQTlGbUMsQ0ErRm5DOztBQUNBLFdBQU9QLE9BQU8sQ0FBQ0ssT0FBUixHQUNITCxPQUFPLENBQUNNLFdBREwsR0FFSE4sT0FBTyxDQUFDRSxRQUZaO0FBR0Q7QUFDRjtBQUVEOzs7QUFFQSxTQUFTdGEsa0JBQVQsQ0FBNkJLLElBQTdCLEVBQW1DO0FBQ2pDLFNBQU9BLElBQUksQ0FBQ1QsU0FBTCxJQUFrQlMsSUFBSSxDQUFDbkIsWUFBOUI7QUFDRDtBQUVEOzs7QUFFQSxTQUFTc2Msc0JBQVQsQ0FBaUMzYyxRQUFqQyxFQUEyQztBQUN6QyxNQUFJbE4sS0FBSyxDQUFDQyxPQUFOLENBQWNpTixRQUFkLENBQUosRUFBNkI7QUFDM0IsU0FBSyxJQUFJck0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FNLFFBQVEsQ0FBQ3BNLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUl1QixDQUFDLEdBQUc4SyxRQUFRLENBQUNyTSxDQUFELENBQWhCOztBQUNBLFVBQUl2QyxLQUFLLENBQUM4RCxDQUFELENBQUwsS0FBYTlELEtBQUssQ0FBQzhELENBQUMsQ0FBQ2tMLGdCQUFILENBQUwsSUFBNkJlLGtCQUFrQixDQUFDak0sQ0FBRCxDQUE1RCxDQUFKLEVBQXNFO0FBQ3BFLGVBQU9BLENBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUVEOztBQUVBOzs7QUFFQSxTQUFTMG5CLFVBQVQsQ0FBcUJyZixFQUFyQixFQUF5QjtBQUN2QkEsSUFBRSxDQUFDc2YsT0FBSCxHQUFhOXJCLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBYyxJQUFkLENBQWI7QUFDQStKLElBQUUsQ0FBQ3VmLGFBQUgsR0FBbUIsS0FBbkIsQ0FGdUIsQ0FHdkI7O0FBQ0EsTUFBSTlHLFNBQVMsR0FBR3pZLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZMmMsZ0JBQTVCOztBQUNBLE1BQUkxRSxTQUFKLEVBQWU7QUFDYitHLDRCQUF3QixDQUFDeGYsRUFBRCxFQUFLeVksU0FBTCxDQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsSUFBSTVXLE1BQUo7O0FBRUEsU0FBU3hDLEdBQVQsQ0FBYzZSLEtBQWQsRUFBcUIvWixFQUFyQixFQUF5QjtBQUN2QjBLLFFBQU0sQ0FBQzZjLEdBQVAsQ0FBV3hOLEtBQVgsRUFBa0IvWixFQUFsQjtBQUNEOztBQUVELFNBQVNzb0IsUUFBVCxDQUFtQnZPLEtBQW5CLEVBQTBCL1osRUFBMUIsRUFBOEI7QUFDNUIwSyxRQUFNLENBQUM2ZCxJQUFQLENBQVl4TyxLQUFaLEVBQW1CL1osRUFBbkI7QUFDRDs7QUFFRCxTQUFTNlosaUJBQVQsQ0FBNEJFLEtBQTVCLEVBQW1DL1osRUFBbkMsRUFBdUM7QUFDckMsTUFBSXdvQixPQUFPLEdBQUc5ZCxNQUFkO0FBQ0EsU0FBTyxTQUFTK2QsV0FBVCxHQUF3QjtBQUM3QixRQUFJem1CLEdBQUcsR0FBR2hDLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBUyxJQUFULEVBQWVELFNBQWYsQ0FBVjs7QUFDQSxRQUFJYSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQndtQixhQUFPLENBQUNELElBQVIsQ0FBYXhPLEtBQWIsRUFBb0IwTyxXQUFwQjtBQUNEO0FBQ0YsR0FMRDtBQU1EOztBQUVELFNBQVNKLHdCQUFULENBQ0V4ZixFQURGLEVBRUV5WSxTQUZGLEVBR0VvSCxZQUhGLEVBSUU7QUFDQWhlLFFBQU0sR0FBRzdCLEVBQVQ7QUFDQTRRLGlCQUFlLENBQUM2SCxTQUFELEVBQVlvSCxZQUFZLElBQUksRUFBNUIsRUFBZ0N4Z0IsR0FBaEMsRUFBcUNvZ0IsUUFBckMsRUFBK0N6TyxpQkFBL0MsRUFBa0VoUixFQUFsRSxDQUFmO0FBQ0E2QixRQUFNLEdBQUdqTyxTQUFUO0FBQ0Q7O0FBRUQsU0FBU2tzQixXQUFULENBQXNCeEMsR0FBdEIsRUFBMkI7QUFDekIsTUFBSXlDLE1BQU0sR0FBRyxRQUFiOztBQUNBekMsS0FBRyxDQUFDanBCLFNBQUosQ0FBY3FxQixHQUFkLEdBQW9CLFVBQVV4TixLQUFWLEVBQWlCL1osRUFBakIsRUFBcUI7QUFDdkMsUUFBSTZJLEVBQUUsR0FBRyxJQUFUOztBQUNBLFFBQUl6SyxLQUFLLENBQUNDLE9BQU4sQ0FBYzBiLEtBQWQsQ0FBSixFQUEwQjtBQUN4QixXQUFLLElBQUk5YSxDQUFDLEdBQUcsQ0FBUixFQUFXaUMsQ0FBQyxHQUFHNlksS0FBSyxDQUFDN2EsTUFBMUIsRUFBa0NELENBQUMsR0FBR2lDLENBQXRDLEVBQXlDakMsQ0FBQyxFQUExQyxFQUE4QztBQUM1QzRKLFVBQUUsQ0FBQzBlLEdBQUgsQ0FBT3hOLEtBQUssQ0FBQzlhLENBQUQsQ0FBWixFQUFpQmUsRUFBakI7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMLE9BQUM2SSxFQUFFLENBQUNzZixPQUFILENBQVdwTyxLQUFYLE1BQXNCbFIsRUFBRSxDQUFDc2YsT0FBSCxDQUFXcE8sS0FBWCxJQUFvQixFQUExQyxDQUFELEVBQWdEL1AsSUFBaEQsQ0FBcURoSyxFQUFyRCxFQURLLENBRUw7QUFDQTs7QUFDQSxVQUFJNG9CLE1BQU0sQ0FBQ3JqQixJQUFQLENBQVl3VSxLQUFaLENBQUosRUFBd0I7QUFDdEJsUixVQUFFLENBQUN1ZixhQUFILEdBQW1CLElBQW5CO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPdmYsRUFBUDtBQUNELEdBZkQ7O0FBaUJBc2QsS0FBRyxDQUFDanBCLFNBQUosQ0FBYzJyQixLQUFkLEdBQXNCLFVBQVU5TyxLQUFWLEVBQWlCL1osRUFBakIsRUFBcUI7QUFDekMsUUFBSTZJLEVBQUUsR0FBRyxJQUFUOztBQUNBLGFBQVM2USxFQUFULEdBQWU7QUFDYjdRLFFBQUUsQ0FBQzBmLElBQUgsQ0FBUXhPLEtBQVIsRUFBZUwsRUFBZjtBQUNBMVosUUFBRSxDQUFDb0IsS0FBSCxDQUFTeUgsRUFBVCxFQUFhMUgsU0FBYjtBQUNEOztBQUNEdVksTUFBRSxDQUFDMVosRUFBSCxHQUFRQSxFQUFSO0FBQ0E2SSxNQUFFLENBQUMwZSxHQUFILENBQU94TixLQUFQLEVBQWNMLEVBQWQ7QUFDQSxXQUFPN1EsRUFBUDtBQUNELEdBVEQ7O0FBV0FzZCxLQUFHLENBQUNqcEIsU0FBSixDQUFjcXJCLElBQWQsR0FBcUIsVUFBVXhPLEtBQVYsRUFBaUIvWixFQUFqQixFQUFxQjtBQUN4QyxRQUFJNkksRUFBRSxHQUFHLElBQVQsQ0FEd0MsQ0FFeEM7O0FBQ0EsUUFBSSxDQUFDMUgsU0FBUyxDQUFDakMsTUFBZixFQUF1QjtBQUNyQjJKLFFBQUUsQ0FBQ3NmLE9BQUgsR0FBYTlyQixNQUFNLENBQUN5QyxNQUFQLENBQWMsSUFBZCxDQUFiO0FBQ0EsYUFBTytKLEVBQVA7QUFDRCxLQU51QyxDQU94Qzs7O0FBQ0EsUUFBSXpLLEtBQUssQ0FBQ0MsT0FBTixDQUFjMGIsS0FBZCxDQUFKLEVBQTBCO0FBQ3hCLFdBQUssSUFBSStPLEdBQUcsR0FBRyxDQUFWLEVBQWE1bkIsQ0FBQyxHQUFHNlksS0FBSyxDQUFDN2EsTUFBNUIsRUFBb0M0cEIsR0FBRyxHQUFHNW5CLENBQTFDLEVBQTZDNG5CLEdBQUcsRUFBaEQsRUFBb0Q7QUFDbERqZ0IsVUFBRSxDQUFDMGYsSUFBSCxDQUFReE8sS0FBSyxDQUFDK08sR0FBRCxDQUFiLEVBQW9COW9CLEVBQXBCO0FBQ0Q7O0FBQ0QsYUFBTzZJLEVBQVA7QUFDRCxLQWJ1QyxDQWN4Qzs7O0FBQ0EsUUFBSWtnQixHQUFHLEdBQUdsZ0IsRUFBRSxDQUFDc2YsT0FBSCxDQUFXcE8sS0FBWCxDQUFWOztBQUNBLFFBQUksQ0FBQ2dQLEdBQUwsRUFBVTtBQUNSLGFBQU9sZ0IsRUFBUDtBQUNEOztBQUNELFFBQUksQ0FBQzdJLEVBQUwsRUFBUztBQUNQNkksUUFBRSxDQUFDc2YsT0FBSCxDQUFXcE8sS0FBWCxJQUFvQixJQUFwQjtBQUNBLGFBQU9sUixFQUFQO0FBQ0QsS0F0QnVDLENBdUJ4Qzs7O0FBQ0EsUUFBSXNPLEVBQUo7QUFDQSxRQUFJbFksQ0FBQyxHQUFHOHBCLEdBQUcsQ0FBQzdwQixNQUFaOztBQUNBLFdBQU9ELENBQUMsRUFBUixFQUFZO0FBQ1ZrWSxRQUFFLEdBQUc0UixHQUFHLENBQUM5cEIsQ0FBRCxDQUFSOztBQUNBLFVBQUlrWSxFQUFFLEtBQUtuWCxFQUFQLElBQWFtWCxFQUFFLENBQUNuWCxFQUFILEtBQVVBLEVBQTNCLEVBQStCO0FBQzdCK29CLFdBQUcsQ0FBQ3BwQixNQUFKLENBQVdWLENBQVgsRUFBYyxDQUFkO0FBQ0E7QUFDRDtBQUNGOztBQUNELFdBQU80SixFQUFQO0FBQ0QsR0FsQ0Q7O0FBb0NBc2QsS0FBRyxDQUFDanBCLFNBQUosQ0FBYzhyQixLQUFkLEdBQXNCLFVBQVVqUCxLQUFWLEVBQWlCO0FBQ3JDLFFBQUlsUixFQUFFLEdBQUcsSUFBVDs7QUFDQSxRQUFJbEYsSUFBSixFQUEyQztBQUN6QyxVQUFJc2xCLGNBQWMsR0FBR2xQLEtBQUssQ0FBQzVhLFdBQU4sRUFBckI7O0FBQ0EsVUFBSThwQixjQUFjLEtBQUtsUCxLQUFuQixJQUE0QmxSLEVBQUUsQ0FBQ3NmLE9BQUgsQ0FBV2MsY0FBWCxDQUFoQyxFQUE0RDtBQUMxRDVnQixXQUFHLENBQ0QsYUFBYTRnQixjQUFiLEdBQThCLDZCQUE5QixHQUNDMWdCLG1CQUFtQixDQUFDTSxFQUFELENBRHBCLEdBQzRCLHVDQUQ1QixHQUNzRWtSLEtBRHRFLEdBQzhFLE1BRDlFLEdBRUEsb0VBRkEsR0FHQSxrRUFIQSxHQUlBLDRCQUpBLEdBSWdDbFosU0FBUyxDQUFDa1osS0FBRCxDQUp6QyxHQUlvRCxrQkFKcEQsR0FJeUVBLEtBSnpFLEdBSWlGLEtBTGhGLENBQUg7QUFPRDtBQUNGOztBQUNELFFBQUlnUCxHQUFHLEdBQUdsZ0IsRUFBRSxDQUFDc2YsT0FBSCxDQUFXcE8sS0FBWCxDQUFWOztBQUNBLFFBQUlnUCxHQUFKLEVBQVM7QUFDUEEsU0FBRyxHQUFHQSxHQUFHLENBQUM3cEIsTUFBSixHQUFhLENBQWIsR0FBaUJ1QyxPQUFPLENBQUNzbkIsR0FBRCxDQUF4QixHQUFnQ0EsR0FBdEM7QUFDQSxVQUFJcmIsSUFBSSxHQUFHak0sT0FBTyxDQUFDTixTQUFELEVBQVksQ0FBWixDQUFsQjtBQUNBLFVBQUlvVSxJQUFJLEdBQUcseUJBQXlCd0UsS0FBekIsR0FBaUMsSUFBNUM7O0FBQ0EsV0FBSyxJQUFJOWEsQ0FBQyxHQUFHLENBQVIsRUFBV2lDLENBQUMsR0FBRzZuQixHQUFHLENBQUM3cEIsTUFBeEIsRUFBZ0NELENBQUMsR0FBR2lDLENBQXBDLEVBQXVDakMsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQzJXLCtCQUF1QixDQUFDbVQsR0FBRyxDQUFDOXBCLENBQUQsQ0FBSixFQUFTNEosRUFBVCxFQUFhNkUsSUFBYixFQUFtQjdFLEVBQW5CLEVBQXVCME0sSUFBdkIsQ0FBdkI7QUFDRDtBQUNGOztBQUNELFdBQU8xTSxFQUFQO0FBQ0QsR0F4QkQ7QUF5QkQ7QUFFRDs7O0FBRUEsSUFBSStaLGNBQWMsR0FBRyxJQUFyQjtBQUNBLElBQUltRCx3QkFBd0IsR0FBRyxLQUEvQjs7QUFFQSxTQUFTbUQsaUJBQVQsQ0FBMkJyZ0IsRUFBM0IsRUFBK0I7QUFDN0IsTUFBSXNnQixrQkFBa0IsR0FBR3ZHLGNBQXpCO0FBQ0FBLGdCQUFjLEdBQUcvWixFQUFqQjtBQUNBLFNBQU8sWUFBWTtBQUNqQitaLGtCQUFjLEdBQUd1RyxrQkFBakI7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF3QnZnQixFQUF4QixFQUE0QjtBQUMxQixNQUFJSyxPQUFPLEdBQUdMLEVBQUUsQ0FBQ1EsUUFBakIsQ0FEMEIsQ0FHMUI7O0FBQ0EsTUFBSTRDLE1BQU0sR0FBRy9DLE9BQU8sQ0FBQytDLE1BQXJCOztBQUNBLE1BQUlBLE1BQU0sSUFBSSxDQUFDL0MsT0FBTyxDQUFDZ2IsUUFBdkIsRUFBaUM7QUFDL0IsV0FBT2pZLE1BQU0sQ0FBQzVDLFFBQVAsQ0FBZ0I2YSxRQUFoQixJQUE0QmpZLE1BQU0sQ0FBQ3JDLE9BQTFDLEVBQW1EO0FBQ2pEcUMsWUFBTSxHQUFHQSxNQUFNLENBQUNyQyxPQUFoQjtBQUNEOztBQUNEcUMsVUFBTSxDQUFDb2QsU0FBUCxDQUFpQnJmLElBQWpCLENBQXNCbkIsRUFBdEI7QUFDRDs7QUFFREEsSUFBRSxDQUFDZSxPQUFILEdBQWFxQyxNQUFiO0FBQ0FwRCxJQUFFLENBQUNJLEtBQUgsR0FBV2dELE1BQU0sR0FBR0EsTUFBTSxDQUFDaEQsS0FBVixHQUFrQkosRUFBbkM7QUFFQUEsSUFBRSxDQUFDd2dCLFNBQUgsR0FBZSxFQUFmO0FBQ0F4Z0IsSUFBRSxDQUFDeWdCLEtBQUgsR0FBVyxFQUFYO0FBRUF6Z0IsSUFBRSxDQUFDMGdCLFFBQUgsR0FBYyxJQUFkO0FBQ0ExZ0IsSUFBRSxDQUFDMmdCLFNBQUgsR0FBZSxJQUFmO0FBQ0EzZ0IsSUFBRSxDQUFDNGdCLGVBQUgsR0FBcUIsS0FBckI7QUFDQTVnQixJQUFFLENBQUNvYSxVQUFILEdBQWdCLEtBQWhCO0FBQ0FwYSxJQUFFLENBQUMwWixZQUFILEdBQWtCLEtBQWxCO0FBQ0ExWixJQUFFLENBQUM2Z0IsaUJBQUgsR0FBdUIsS0FBdkI7QUFDRDs7QUFFRCxTQUFTQyxjQUFULENBQXlCeEQsR0FBekIsRUFBOEI7QUFDNUJBLEtBQUcsQ0FBQ2pwQixTQUFKLENBQWMwc0IsT0FBZCxHQUF3QixVQUFVM2MsS0FBVixFQUFpQnFWLFNBQWpCLEVBQTRCO0FBQ2xELFFBQUl6WixFQUFFLEdBQUcsSUFBVDtBQUNBLFFBQUlnaEIsTUFBTSxHQUFHaGhCLEVBQUUsQ0FBQ2loQixHQUFoQjtBQUNBLFFBQUlDLFNBQVMsR0FBR2xoQixFQUFFLENBQUM4YyxNQUFuQjtBQUNBLFFBQUlxRSxxQkFBcUIsR0FBR2QsaUJBQWlCLENBQUNyZ0IsRUFBRCxDQUE3QztBQUNBQSxNQUFFLENBQUM4YyxNQUFILEdBQVkxWSxLQUFaLENBTGtELENBTWxEO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDOGMsU0FBTCxFQUFnQjtBQUNkO0FBQ0FsaEIsUUFBRSxDQUFDaWhCLEdBQUgsR0FBU2poQixFQUFFLENBQUNvaEIsU0FBSCxDQUFhcGhCLEVBQUUsQ0FBQ2loQixHQUFoQixFQUFxQjdjLEtBQXJCLEVBQTRCcVYsU0FBNUIsRUFBdUM7QUFBTTtBQUE3QyxPQUFUO0FBQ0QsS0FIRCxNQUdPO0FBQ0w7QUFDQXpaLFFBQUUsQ0FBQ2loQixHQUFILEdBQVNqaEIsRUFBRSxDQUFDb2hCLFNBQUgsQ0FBYUYsU0FBYixFQUF3QjljLEtBQXhCLENBQVQ7QUFDRDs7QUFDRCtjLHlCQUFxQixHQWY2QixDQWdCbEQ7O0FBQ0EsUUFBSUgsTUFBSixFQUFZO0FBQ1ZBLFlBQU0sQ0FBQ0ssT0FBUCxHQUFpQixJQUFqQjtBQUNEOztBQUNELFFBQUlyaEIsRUFBRSxDQUFDaWhCLEdBQVAsRUFBWTtBQUNWamhCLFFBQUUsQ0FBQ2loQixHQUFILENBQU9JLE9BQVAsR0FBaUJyaEIsRUFBakI7QUFDRCxLQXRCaUQsQ0F1QmxEOzs7QUFDQSxRQUFJQSxFQUFFLENBQUNzYyxNQUFILElBQWF0YyxFQUFFLENBQUNlLE9BQWhCLElBQTJCZixFQUFFLENBQUNzYyxNQUFILEtBQWN0YyxFQUFFLENBQUNlLE9BQUgsQ0FBVytiLE1BQXhELEVBQWdFO0FBQzlEOWMsUUFBRSxDQUFDZSxPQUFILENBQVdrZ0IsR0FBWCxHQUFpQmpoQixFQUFFLENBQUNpaEIsR0FBcEI7QUFDRCxLQTFCaUQsQ0EyQmxEO0FBQ0E7O0FBQ0QsR0E3QkQ7O0FBK0JBM0QsS0FBRyxDQUFDanBCLFNBQUosQ0FBY3dxQixZQUFkLEdBQTZCLFlBQVk7QUFDdkMsUUFBSTdlLEVBQUUsR0FBRyxJQUFUOztBQUNBLFFBQUlBLEVBQUUsQ0FBQzBnQixRQUFQLEVBQWlCO0FBQ2YxZ0IsUUFBRSxDQUFDMGdCLFFBQUgsQ0FBWXplLE1BQVo7QUFDRDtBQUNGLEdBTEQ7O0FBT0FxYixLQUFHLENBQUNqcEIsU0FBSixDQUFjb21CLFFBQWQsR0FBeUIsWUFBWTtBQUNuQyxRQUFJemEsRUFBRSxHQUFHLElBQVQ7O0FBQ0EsUUFBSUEsRUFBRSxDQUFDNmdCLGlCQUFQLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBQ0R4RyxZQUFRLENBQUNyYSxFQUFELEVBQUssZUFBTCxDQUFSO0FBQ0FBLE1BQUUsQ0FBQzZnQixpQkFBSCxHQUF1QixJQUF2QixDQU5tQyxDQU9uQzs7QUFDQSxRQUFJemQsTUFBTSxHQUFHcEQsRUFBRSxDQUFDZSxPQUFoQjs7QUFDQSxRQUFJcUMsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3lkLGlCQUFsQixJQUF1QyxDQUFDN2dCLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZNmEsUUFBeEQsRUFBa0U7QUFDaEU1a0IsWUFBTSxDQUFDMk0sTUFBTSxDQUFDb2QsU0FBUixFQUFtQnhnQixFQUFuQixDQUFOO0FBQ0QsS0FYa0MsQ0FZbkM7OztBQUNBLFFBQUlBLEVBQUUsQ0FBQzBnQixRQUFQLEVBQWlCO0FBQ2YxZ0IsUUFBRSxDQUFDMGdCLFFBQUgsQ0FBWVksUUFBWjtBQUNEOztBQUNELFFBQUlsckIsQ0FBQyxHQUFHNEosRUFBRSxDQUFDdWhCLFNBQUgsQ0FBYWxyQixNQUFyQjs7QUFDQSxXQUFPRCxDQUFDLEVBQVIsRUFBWTtBQUNWNEosUUFBRSxDQUFDdWhCLFNBQUgsQ0FBYW5yQixDQUFiLEVBQWdCa3JCLFFBQWhCO0FBQ0QsS0FuQmtDLENBb0JuQztBQUNBOzs7QUFDQSxRQUFJdGhCLEVBQUUsQ0FBQ3doQixLQUFILENBQVN2YyxNQUFiLEVBQXFCO0FBQ25CakYsUUFBRSxDQUFDd2hCLEtBQUgsQ0FBU3ZjLE1BQVQsQ0FBZ0JTLE9BQWhCO0FBQ0QsS0F4QmtDLENBeUJuQzs7O0FBQ0ExRixNQUFFLENBQUMwWixZQUFILEdBQWtCLElBQWxCLENBMUJtQyxDQTJCbkM7O0FBQ0ExWixNQUFFLENBQUNvaEIsU0FBSCxDQUFhcGhCLEVBQUUsQ0FBQzhjLE1BQWhCLEVBQXdCLElBQXhCLEVBNUJtQyxDQTZCbkM7OztBQUNBekMsWUFBUSxDQUFDcmEsRUFBRCxFQUFLLFdBQUwsQ0FBUixDQTlCbUMsQ0ErQm5DOztBQUNBQSxNQUFFLENBQUMwZixJQUFILEdBaENtQyxDQWlDbkM7O0FBQ0EsUUFBSTFmLEVBQUUsQ0FBQ2loQixHQUFQLEVBQVk7QUFDVmpoQixRQUFFLENBQUNpaEIsR0FBSCxDQUFPSSxPQUFQLEdBQWlCLElBQWpCO0FBQ0QsS0FwQ2tDLENBcUNuQzs7O0FBQ0EsUUFBSXJoQixFQUFFLENBQUNzYyxNQUFQLEVBQWU7QUFDYnRjLFFBQUUsQ0FBQ3NjLE1BQUgsQ0FBVWxaLE1BQVYsR0FBbUIsSUFBbkI7QUFDRDtBQUNGLEdBekNEO0FBMENEOztBQUVELFNBQVNxZSxjQUFULENBQ0V6aEIsRUFERixFQUVFbUgsRUFGRixFQUdFc1MsU0FIRixFQUlFO0FBQ0F6WixJQUFFLENBQUNpaEIsR0FBSCxHQUFTOVosRUFBVDs7QUFDQSxNQUFJLENBQUNuSCxFQUFFLENBQUNRLFFBQUgsQ0FBWTRPLE1BQWpCLEVBQXlCO0FBQ3ZCcFAsTUFBRSxDQUFDUSxRQUFILENBQVk0TyxNQUFaLEdBQXFCcEwsZ0JBQXJCOztBQUNBLFFBQUlsSixJQUFKLEVBQTJDO0FBQ3pDO0FBQ0EsVUFBS2tGLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZa2hCLFFBQVosSUFBd0IxaEIsRUFBRSxDQUFDUSxRQUFILENBQVlraEIsUUFBWixDQUFxQjVwQixNQUFyQixDQUE0QixDQUE1QixNQUFtQyxHQUE1RCxJQUNGa0ksRUFBRSxDQUFDUSxRQUFILENBQVkyRyxFQURWLElBQ2dCQSxFQURwQixFQUN3QjtBQUN0QjVILFlBQUksQ0FDRixvRUFDQSxtRUFEQSxHQUVBLHVEQUhFLEVBSUZTLEVBSkUsQ0FBSjtBQU1ELE9BUkQsTUFRTztBQUNMVCxZQUFJLENBQ0YscUVBREUsRUFFRlMsRUFGRSxDQUFKO0FBSUQ7QUFDRjtBQUNGOztBQUNEcWEsVUFBUSxDQUFDcmEsRUFBRCxFQUFLLGFBQUwsQ0FBUjtBQUVBLE1BQUkyaEIsZUFBSjtBQUNBOztBQUNBLE1BQUk3bUIsS0FBQSxJQUF5Q0osTUFBTSxDQUFDTSxXQUFoRCxJQUErRDhVLElBQW5FLEVBQXlFO0FBQ3ZFNlIsbUJBQWUsR0FBRyxZQUFZO0FBQzVCLFVBQUlqaEIsSUFBSSxHQUFHVixFQUFFLENBQUM0aEIsS0FBZDtBQUNBLFVBQUlyZ0IsRUFBRSxHQUFHdkIsRUFBRSxDQUFDNmhCLElBQVo7QUFDQSxVQUFJMVIsUUFBUSxHQUFHLG9CQUFvQjVPLEVBQW5DO0FBQ0EsVUFBSTZPLE1BQU0sR0FBRyxrQkFBa0I3TyxFQUEvQjtBQUVBdU8sVUFBSSxDQUFDSyxRQUFELENBQUo7O0FBQ0EsVUFBSS9MLEtBQUssR0FBR3BFLEVBQUUsQ0FBQ3dkLE9BQUgsRUFBWjs7QUFDQTFOLFVBQUksQ0FBQ00sTUFBRCxDQUFKO0FBQ0FMLGFBQU8sQ0FBRSxTQUFTclAsSUFBVCxHQUFnQixTQUFsQixFQUE4QnlQLFFBQTlCLEVBQXdDQyxNQUF4QyxDQUFQO0FBRUFOLFVBQUksQ0FBQ0ssUUFBRCxDQUFKOztBQUNBblEsUUFBRSxDQUFDK2dCLE9BQUgsQ0FBVzNjLEtBQVgsRUFBa0JxVixTQUFsQjs7QUFDQTNKLFVBQUksQ0FBQ00sTUFBRCxDQUFKO0FBQ0FMLGFBQU8sQ0FBRSxTQUFTclAsSUFBVCxHQUFnQixRQUFsQixFQUE2QnlQLFFBQTdCLEVBQXVDQyxNQUF2QyxDQUFQO0FBQ0QsS0FmRDtBQWdCRCxHQWpCRCxNQWlCTztBQUNMdVIsbUJBQWUsR0FBRyxZQUFZO0FBQzVCM2hCLFFBQUUsQ0FBQytnQixPQUFILENBQVcvZ0IsRUFBRSxDQUFDd2QsT0FBSCxFQUFYLEVBQXlCL0QsU0FBekI7QUFDRCxLQUZEO0FBR0QsR0EvQ0QsQ0FpREE7QUFDQTtBQUNBOzs7QUFDQSxNQUFJcUksT0FBSixDQUFZOWhCLEVBQVosRUFBZ0IyaEIsZUFBaEIsRUFBaUN2b0IsSUFBakMsRUFBdUM7QUFDckMyb0IsVUFBTSxFQUFFLFNBQVNBLE1BQVQsR0FBbUI7QUFDekIsVUFBSS9oQixFQUFFLENBQUNvYSxVQUFILElBQWlCLENBQUNwYSxFQUFFLENBQUMwWixZQUF6QixFQUF1QztBQUNyQ1csZ0JBQVEsQ0FBQ3JhLEVBQUQsRUFBSyxjQUFMLENBQVI7QUFDRDtBQUNGO0FBTG9DLEdBQXZDLEVBTUc7QUFBSztBQU5SO0FBT0F5WixXQUFTLEdBQUcsS0FBWixDQTNEQSxDQTZEQTtBQUNBOztBQUNBLE1BQUl6WixFQUFFLENBQUNzYyxNQUFILElBQWEsSUFBakIsRUFBdUI7QUFDckJ0YyxNQUFFLENBQUNvYSxVQUFILEdBQWdCLElBQWhCO0FBQ0FDLFlBQVEsQ0FBQ3JhLEVBQUQsRUFBSyxTQUFMLENBQVI7QUFDRDs7QUFDRCxTQUFPQSxFQUFQO0FBQ0Q7O0FBRUQsU0FBU2thLG9CQUFULENBQ0VsYSxFQURGLEVBRUVvSCxTQUZGLEVBR0VxUixTQUhGLEVBSUVzRSxXQUpGLEVBS0VpRixjQUxGLEVBTUU7QUFDQSxNQUFJbG5CLElBQUosRUFBMkM7QUFDekNvaUIsNEJBQXdCLEdBQUcsSUFBM0I7QUFDRCxHQUhELENBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSStFLGNBQWMsR0FBR2xGLFdBQVcsQ0FBQ3ZhLElBQVosQ0FBaUJtVyxXQUF0QztBQUNBLE1BQUl1SixjQUFjLEdBQUdsaUIsRUFBRSxDQUFDd1UsWUFBeEI7QUFDQSxNQUFJMk4sb0JBQW9CLEdBQUcsQ0FBQyxFQUN6QkYsY0FBYyxJQUFJLENBQUNBLGNBQWMsQ0FBQ3pPLE9BQW5DLElBQ0MwTyxjQUFjLEtBQUszdUIsV0FBbkIsSUFBa0MsQ0FBQzJ1QixjQUFjLENBQUMxTyxPQURuRCxJQUVDeU8sY0FBYyxJQUFJamlCLEVBQUUsQ0FBQ3dVLFlBQUgsQ0FBZ0JmLElBQWhCLEtBQXlCd08sY0FBYyxDQUFDeE8sSUFIakMsQ0FBNUIsQ0FiQSxDQW1CQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSTJPLGdCQUFnQixHQUFHLENBQUMsRUFDdEJKLGNBQWMsSUFBa0I7QUFDaENoaUIsSUFBRSxDQUFDUSxRQUFILENBQVl3YyxlQURaLElBQ2dDO0FBQ2hDbUYsc0JBSHNCLENBQXhCO0FBTUFuaUIsSUFBRSxDQUFDUSxRQUFILENBQVlnYixZQUFaLEdBQTJCdUIsV0FBM0I7QUFDQS9jLElBQUUsQ0FBQ3NjLE1BQUgsR0FBWVMsV0FBWixDQTdCQSxDQTZCeUI7O0FBRXpCLE1BQUkvYyxFQUFFLENBQUM4YyxNQUFQLEVBQWU7QUFBRTtBQUNmOWMsTUFBRSxDQUFDOGMsTUFBSCxDQUFVMVosTUFBVixHQUFtQjJaLFdBQW5CO0FBQ0Q7O0FBQ0QvYyxJQUFFLENBQUNRLFFBQUgsQ0FBWXdjLGVBQVosR0FBOEJnRixjQUE5QixDQWxDQSxDQW9DQTtBQUNBO0FBQ0E7O0FBQ0FoaUIsSUFBRSxDQUFDcWlCLE1BQUgsR0FBWXRGLFdBQVcsQ0FBQ3ZhLElBQVosQ0FBaUJrUCxLQUFqQixJQUEwQm5lLFdBQXRDO0FBQ0F5TSxJQUFFLENBQUNzaUIsVUFBSCxHQUFnQjdKLFNBQVMsSUFBSWxsQixXQUE3QixDQXhDQSxDQTBDQTs7QUFDQSxNQUFJNlQsU0FBUyxJQUFJcEgsRUFBRSxDQUFDUSxRQUFILENBQVlrSSxLQUE3QixFQUFvQztBQUNsQ2xELG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0EsUUFBSWtELEtBQUssR0FBRzFJLEVBQUUsQ0FBQ2dMLE1BQWY7QUFDQSxRQUFJdVgsUUFBUSxHQUFHdmlCLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZZ2lCLFNBQVosSUFBeUIsRUFBeEM7O0FBQ0EsU0FBSyxJQUFJcHNCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtc0IsUUFBUSxDQUFDbHNCLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUlhLEdBQUcsR0FBR3NyQixRQUFRLENBQUNuc0IsQ0FBRCxDQUFsQjtBQUNBLFVBQUlpVSxXQUFXLEdBQUdySyxFQUFFLENBQUNRLFFBQUgsQ0FBWWtJLEtBQTlCLENBRndDLENBRUg7O0FBQ3JDQSxXQUFLLENBQUN6UixHQUFELENBQUwsR0FBYW1ULFlBQVksQ0FBQ25ULEdBQUQsRUFBTW9ULFdBQU4sRUFBbUJqRCxTQUFuQixFQUE4QnBILEVBQTlCLENBQXpCO0FBQ0Q7O0FBQ0R3RixtQkFBZSxDQUFDLElBQUQsQ0FBZixDQVRrQyxDQVVsQzs7QUFDQXhGLE1BQUUsQ0FBQ1EsUUFBSCxDQUFZNEcsU0FBWixHQUF3QkEsU0FBeEI7QUFDRCxHQXZERCxDQXlEQTs7O0FBQ0FxUixXQUFTLEdBQUdBLFNBQVMsSUFBSWxsQixXQUF6QjtBQUNBLE1BQUlzc0IsWUFBWSxHQUFHN2YsRUFBRSxDQUFDUSxRQUFILENBQVkyYyxnQkFBL0I7QUFDQW5kLElBQUUsQ0FBQ1EsUUFBSCxDQUFZMmMsZ0JBQVosR0FBK0IxRSxTQUEvQjtBQUNBK0csMEJBQXdCLENBQUN4ZixFQUFELEVBQUt5WSxTQUFMLEVBQWdCb0gsWUFBaEIsQ0FBeEIsQ0E3REEsQ0ErREE7O0FBQ0EsTUFBSXVDLGdCQUFKLEVBQXNCO0FBQ3BCcGlCLE1BQUUsQ0FBQzBVLE1BQUgsR0FBWTVCLFlBQVksQ0FBQ2tQLGNBQUQsRUFBaUJqRixXQUFXLENBQUNuYSxPQUE3QixDQUF4QjtBQUNBNUMsTUFBRSxDQUFDNmUsWUFBSDtBQUNEOztBQUVELE1BQUkvakIsSUFBSixFQUEyQztBQUN6Q29pQiw0QkFBd0IsR0FBRyxLQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU3VGLGdCQUFULENBQTJCemlCLEVBQTNCLEVBQStCO0FBQzdCLFNBQU9BLEVBQUUsS0FBS0EsRUFBRSxHQUFHQSxFQUFFLENBQUNlLE9BQWIsQ0FBVCxFQUFnQztBQUM5QixRQUFJZixFQUFFLENBQUMyZ0IsU0FBUCxFQUFrQjtBQUFFLGFBQU8sSUFBUDtBQUFhO0FBQ2xDOztBQUNELFNBQU8sS0FBUDtBQUNEOztBQUVELFNBQVNwRyxzQkFBVCxDQUFpQ3ZhLEVBQWpDLEVBQXFDMGlCLE1BQXJDLEVBQTZDO0FBQzNDLE1BQUlBLE1BQUosRUFBWTtBQUNWMWlCLE1BQUUsQ0FBQzRnQixlQUFILEdBQXFCLEtBQXJCOztBQUNBLFFBQUk2QixnQkFBZ0IsQ0FBQ3ppQixFQUFELENBQXBCLEVBQTBCO0FBQ3hCO0FBQ0Q7QUFDRixHQUxELE1BS08sSUFBSUEsRUFBRSxDQUFDNGdCLGVBQVAsRUFBd0I7QUFDN0I7QUFDRDs7QUFDRCxNQUFJNWdCLEVBQUUsQ0FBQzJnQixTQUFILElBQWdCM2dCLEVBQUUsQ0FBQzJnQixTQUFILEtBQWlCLElBQXJDLEVBQTJDO0FBQ3pDM2dCLE1BQUUsQ0FBQzJnQixTQUFILEdBQWUsS0FBZjs7QUFDQSxTQUFLLElBQUl2cUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRKLEVBQUUsQ0FBQ3dnQixTQUFILENBQWFucUIsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7QUFDNUNta0IsNEJBQXNCLENBQUN2YSxFQUFFLENBQUN3Z0IsU0FBSCxDQUFhcHFCLENBQWIsQ0FBRCxDQUF0QjtBQUNEOztBQUNEaWtCLFlBQVEsQ0FBQ3JhLEVBQUQsRUFBSyxXQUFMLENBQVI7QUFDRDtBQUNGOztBQUVELFNBQVMwYSx3QkFBVCxDQUFtQzFhLEVBQW5DLEVBQXVDMGlCLE1BQXZDLEVBQStDO0FBQzdDLE1BQUlBLE1BQUosRUFBWTtBQUNWMWlCLE1BQUUsQ0FBQzRnQixlQUFILEdBQXFCLElBQXJCOztBQUNBLFFBQUk2QixnQkFBZ0IsQ0FBQ3ppQixFQUFELENBQXBCLEVBQTBCO0FBQ3hCO0FBQ0Q7QUFDRjs7QUFDRCxNQUFJLENBQUNBLEVBQUUsQ0FBQzJnQixTQUFSLEVBQW1CO0FBQ2pCM2dCLE1BQUUsQ0FBQzJnQixTQUFILEdBQWUsSUFBZjs7QUFDQSxTQUFLLElBQUl2cUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRKLEVBQUUsQ0FBQ3dnQixTQUFILENBQWFucUIsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7QUFDNUNza0IsOEJBQXdCLENBQUMxYSxFQUFFLENBQUN3Z0IsU0FBSCxDQUFhcHFCLENBQWIsQ0FBRCxDQUF4QjtBQUNEOztBQUNEaWtCLFlBQVEsQ0FBQ3JhLEVBQUQsRUFBSyxhQUFMLENBQVI7QUFDRDtBQUNGOztBQUVELFNBQVNxYSxRQUFULENBQW1CcmEsRUFBbkIsRUFBdUJxSSxJQUF2QixFQUE2QjtBQUMzQjtBQUNBbEcsWUFBVTtBQUNWLE1BQUlnTixRQUFRLEdBQUduUCxFQUFFLENBQUNRLFFBQUgsQ0FBWTZILElBQVosQ0FBZjtBQUNBLE1BQUlxRSxJQUFJLEdBQUdyRSxJQUFJLEdBQUcsT0FBbEI7O0FBQ0EsTUFBSThHLFFBQUosRUFBYztBQUNaLFNBQUssSUFBSS9ZLENBQUMsR0FBRyxDQUFSLEVBQVd1c0IsQ0FBQyxHQUFHeFQsUUFBUSxDQUFDOVksTUFBN0IsRUFBcUNELENBQUMsR0FBR3VzQixDQUF6QyxFQUE0Q3ZzQixDQUFDLEVBQTdDLEVBQWlEO0FBQy9DMlcsNkJBQXVCLENBQUNvQyxRQUFRLENBQUMvWSxDQUFELENBQVQsRUFBYzRKLEVBQWQsRUFBa0IsSUFBbEIsRUFBd0JBLEVBQXhCLEVBQTRCME0sSUFBNUIsQ0FBdkI7QUFDRDtBQUNGOztBQUNELE1BQUkxTSxFQUFFLENBQUN1ZixhQUFQLEVBQXNCO0FBQ3BCdmYsTUFBRSxDQUFDbWdCLEtBQUgsQ0FBUyxVQUFVOVgsSUFBbkI7QUFDRDs7QUFDRGpHLFdBQVM7QUFDVjtBQUVEOzs7QUFFQSxJQUFJd2dCLGdCQUFnQixHQUFHLEdBQXZCO0FBRUEsSUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBLElBQUkxakIsR0FBRyxHQUFHLEVBQVY7QUFDQSxJQUFJMmpCLFFBQVEsR0FBRyxFQUFmO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQWQ7QUFDQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjtBQUNBLElBQUlyc0IsS0FBSyxHQUFHLENBQVo7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3NzQixtQkFBVCxHQUFnQztBQUM5QnRzQixPQUFLLEdBQUdpc0IsS0FBSyxDQUFDeHNCLE1BQU4sR0FBZXlzQixpQkFBaUIsQ0FBQ3pzQixNQUFsQixHQUEyQixDQUFsRDtBQUNBK0ksS0FBRyxHQUFHLEVBQU47O0FBQ0EsTUFBSXRFLElBQUosRUFBMkM7QUFDekNpb0IsWUFBUSxHQUFHLEVBQVg7QUFDRDs7QUFDREMsU0FBTyxHQUFHQyxRQUFRLEdBQUcsS0FBckI7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSUUscUJBQXFCLEdBQUcsQ0FBNUIsQyxDQUVBOztBQUNBLElBQUlDLE1BQU0sR0FBR3JwQixJQUFJLENBQUNzcEIsR0FBbEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJeG1CLFNBQVMsSUFBSSxDQUFDUyxJQUFsQixFQUF3QjtBQUN0QixNQUFJdEMsV0FBVyxHQUFHOEIsTUFBTSxDQUFDOUIsV0FBekI7O0FBQ0EsTUFDRUEsV0FBVyxJQUNYLE9BQU9BLFdBQVcsQ0FBQ3FvQixHQUFuQixLQUEyQixVQUQzQixJQUVBRCxNQUFNLEtBQUtuVixRQUFRLENBQUNxVixXQUFULENBQXFCLE9BQXJCLEVBQThCQyxTQUgzQyxFQUlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUgsVUFBTSxHQUFHLFlBQVk7QUFBRSxhQUFPcG9CLFdBQVcsQ0FBQ3FvQixHQUFaLEVBQVA7QUFBMkIsS0FBbEQ7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBOzs7QUFDQSxTQUFTRyxtQkFBVCxHQUFnQztBQUM5QkwsdUJBQXFCLEdBQUdDLE1BQU0sRUFBOUI7QUFDQUgsVUFBUSxHQUFHLElBQVg7QUFDQSxNQUFJUSxPQUFKLEVBQWFsaUIsRUFBYixDQUg4QixDQUs5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBc2hCLE9BQUssQ0FBQzdnQixJQUFOLENBQVcsVUFBVTVKLENBQVYsRUFBYWlCLENBQWIsRUFBZ0I7QUFBRSxXQUFPakIsQ0FBQyxDQUFDbUosRUFBRixHQUFPbEksQ0FBQyxDQUFDa0ksRUFBaEI7QUFBcUIsR0FBbEQsRUFiOEIsQ0FlOUI7QUFDQTs7QUFDQSxPQUFLM0ssS0FBSyxHQUFHLENBQWIsRUFBZ0JBLEtBQUssR0FBR2lzQixLQUFLLENBQUN4c0IsTUFBOUIsRUFBc0NPLEtBQUssRUFBM0MsRUFBK0M7QUFDN0M2c0IsV0FBTyxHQUFHWixLQUFLLENBQUNqc0IsS0FBRCxDQUFmOztBQUNBLFFBQUk2c0IsT0FBTyxDQUFDMUIsTUFBWixFQUFvQjtBQUNsQjBCLGFBQU8sQ0FBQzFCLE1BQVI7QUFDRDs7QUFDRHhnQixNQUFFLEdBQUdraUIsT0FBTyxDQUFDbGlCLEVBQWI7QUFDQW5DLE9BQUcsQ0FBQ21DLEVBQUQsQ0FBSCxHQUFVLElBQVY7QUFDQWtpQixXQUFPLENBQUNDLEdBQVIsR0FQNkMsQ0FRN0M7O0FBQ0EsUUFBSTVvQixLQUFBLElBQXlDc0UsR0FBRyxDQUFDbUMsRUFBRCxDQUFILElBQVcsSUFBeEQsRUFBOEQ7QUFDNUR3aEIsY0FBUSxDQUFDeGhCLEVBQUQsQ0FBUixHQUFlLENBQUN3aEIsUUFBUSxDQUFDeGhCLEVBQUQsQ0FBUixJQUFnQixDQUFqQixJQUFzQixDQUFyQzs7QUFDQSxVQUFJd2hCLFFBQVEsQ0FBQ3hoQixFQUFELENBQVIsR0FBZXFoQixnQkFBbkIsRUFBcUM7QUFDbkNyakIsWUFBSSxDQUNGLDJDQUNFa2tCLE9BQU8sQ0FBQ0UsSUFBUixHQUNLLGtDQUFtQ0YsT0FBTyxDQUFDRyxVQUEzQyxHQUF5RCxJQUQ5RCxHQUVJLGlDQUhOLENBREUsRUFNRkgsT0FBTyxDQUFDempCLEVBTk4sQ0FBSjtBQVFBO0FBQ0Q7QUFDRjtBQUNGLEdBeEM2QixDQTBDOUI7OztBQUNBLE1BQUk2akIsY0FBYyxHQUFHZixpQkFBaUIsQ0FBQ3J1QixLQUFsQixFQUFyQjtBQUNBLE1BQUlxdkIsWUFBWSxHQUFHakIsS0FBSyxDQUFDcHVCLEtBQU4sRUFBbkI7QUFFQXl1QixxQkFBbUIsR0E5Q1csQ0FnRDlCOztBQUNBYSxvQkFBa0IsQ0FBQ0YsY0FBRCxDQUFsQjtBQUNBRyxrQkFBZ0IsQ0FBQ0YsWUFBRCxDQUFoQixDQWxEOEIsQ0FvRDlCOztBQUNBOztBQUNBLE1BQUkvb0IsUUFBUSxJQUFJTCxNQUFNLENBQUNLLFFBQXZCLEVBQWlDO0FBQy9CQSxZQUFRLENBQUNrcEIsSUFBVCxDQUFjLE9BQWQ7QUFDRDtBQUNGOztBQUVELFNBQVNELGdCQUFULENBQTJCbkIsS0FBM0IsRUFBa0M7QUFDaEMsTUFBSXpzQixDQUFDLEdBQUd5c0IsS0FBSyxDQUFDeHNCLE1BQWQ7O0FBQ0EsU0FBT0QsQ0FBQyxFQUFSLEVBQVk7QUFDVixRQUFJcXRCLE9BQU8sR0FBR1osS0FBSyxDQUFDenNCLENBQUQsQ0FBbkI7QUFDQSxRQUFJNEosRUFBRSxHQUFHeWpCLE9BQU8sQ0FBQ3pqQixFQUFqQjs7QUFDQSxRQUFJQSxFQUFFLENBQUMwZ0IsUUFBSCxLQUFnQitDLE9BQWhCLElBQTJCempCLEVBQUUsQ0FBQ29hLFVBQTlCLElBQTRDLENBQUNwYSxFQUFFLENBQUMwWixZQUFwRCxFQUFrRTtBQUNoRVcsY0FBUSxDQUFDcmEsRUFBRCxFQUFLLFNBQUwsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTc2EsdUJBQVQsQ0FBa0N0YSxFQUFsQyxFQUFzQztBQUNwQztBQUNBO0FBQ0FBLElBQUUsQ0FBQzJnQixTQUFILEdBQWUsS0FBZjtBQUNBbUMsbUJBQWlCLENBQUMzaEIsSUFBbEIsQ0FBdUJuQixFQUF2QjtBQUNEOztBQUVELFNBQVMrakIsa0JBQVQsQ0FBNkJsQixLQUE3QixFQUFvQztBQUNsQyxPQUFLLElBQUl6c0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lzQixLQUFLLENBQUN4c0IsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckN5c0IsU0FBSyxDQUFDenNCLENBQUQsQ0FBTCxDQUFTdXFCLFNBQVQsR0FBcUIsSUFBckI7QUFDQXBHLDBCQUFzQixDQUFDc0ksS0FBSyxDQUFDenNCLENBQUQsQ0FBTixFQUFXO0FBQUs7QUFBaEIsS0FBdEI7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzh0QixZQUFULENBQXVCVCxPQUF2QixFQUFnQztBQUM5QixNQUFJbGlCLEVBQUUsR0FBR2tpQixPQUFPLENBQUNsaUIsRUFBakI7O0FBQ0EsTUFBSW5DLEdBQUcsQ0FBQ21DLEVBQUQsQ0FBSCxJQUFXLElBQWYsRUFBcUI7QUFDbkJuQyxPQUFHLENBQUNtQyxFQUFELENBQUgsR0FBVSxJQUFWOztBQUNBLFFBQUksQ0FBQzBoQixRQUFMLEVBQWU7QUFDYkosV0FBSyxDQUFDMWhCLElBQU4sQ0FBV3NpQixPQUFYO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQTtBQUNBLFVBQUlydEIsQ0FBQyxHQUFHeXNCLEtBQUssQ0FBQ3hzQixNQUFOLEdBQWUsQ0FBdkI7O0FBQ0EsYUFBT0QsQ0FBQyxHQUFHUSxLQUFKLElBQWFpc0IsS0FBSyxDQUFDenNCLENBQUQsQ0FBTCxDQUFTbUwsRUFBVCxHQUFja2lCLE9BQU8sQ0FBQ2xpQixFQUExQyxFQUE4QztBQUM1Q25MLFNBQUM7QUFDRjs7QUFDRHlzQixXQUFLLENBQUMvckIsTUFBTixDQUFhVixDQUFDLEdBQUcsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJxdEIsT0FBdkI7QUFDRCxLQVprQixDQWFuQjs7O0FBQ0EsUUFBSSxDQUFDVCxPQUFMLEVBQWM7QUFDWkEsYUFBTyxHQUFHLElBQVY7O0FBRUEsVUFBSWxvQixLQUFBLElBQXlDLENBQUNKLE1BQU0sQ0FBQ2lCLEtBQXJELEVBQTREO0FBQzFENm5CLDJCQUFtQjtBQUNuQjtBQUNEOztBQUNEblYsY0FBUSxDQUFDbVYsbUJBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7QUFJQSxJQUFJVyxLQUFLLEdBQUcsQ0FBWjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSXJDLE9BQU8sR0FBRyxTQUFTQSxPQUFULENBQ1o5aEIsRUFEWSxFQUVab2tCLE9BRlksRUFHWjlWLEVBSFksRUFJWmpPLE9BSlksRUFLWmdrQixlQUxZLEVBTVo7QUFDQSxPQUFLcmtCLEVBQUwsR0FBVUEsRUFBVjs7QUFDQSxNQUFJcWtCLGVBQUosRUFBcUI7QUFDbkJya0IsTUFBRSxDQUFDMGdCLFFBQUgsR0FBYyxJQUFkO0FBQ0Q7O0FBQ0QxZ0IsSUFBRSxDQUFDdWhCLFNBQUgsQ0FBYXBnQixJQUFiLENBQWtCLElBQWxCLEVBTEEsQ0FNQTs7O0FBQ0EsTUFBSWQsT0FBSixFQUFhO0FBQ1gsU0FBS2lrQixJQUFMLEdBQVksQ0FBQyxDQUFDamtCLE9BQU8sQ0FBQ2lrQixJQUF0QjtBQUNBLFNBQUtYLElBQUwsR0FBWSxDQUFDLENBQUN0akIsT0FBTyxDQUFDc2pCLElBQXRCO0FBQ0EsU0FBS1ksSUFBTCxHQUFZLENBQUMsQ0FBQ2xrQixPQUFPLENBQUNra0IsSUFBdEI7QUFDQSxTQUFLaEcsSUFBTCxHQUFZLENBQUMsQ0FBQ2xlLE9BQU8sQ0FBQ2tlLElBQXRCO0FBQ0EsU0FBS3dELE1BQUwsR0FBYzFoQixPQUFPLENBQUMwaEIsTUFBdEI7QUFDRCxHQU5ELE1BTU87QUFDTCxTQUFLdUMsSUFBTCxHQUFZLEtBQUtYLElBQUwsR0FBWSxLQUFLWSxJQUFMLEdBQVksS0FBS2hHLElBQUwsR0FBWSxLQUFoRDtBQUNEOztBQUNELE9BQUtqUSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxPQUFLL00sRUFBTCxHQUFVLEVBQUU0aUIsS0FBWixDQWpCQSxDQWlCbUI7O0FBQ25CLE9BQUtLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLEtBQUtGLElBQWxCLENBbkJBLENBbUJ3Qjs7QUFDeEIsT0FBS0csSUFBTCxHQUFZLEVBQVo7QUFDQSxPQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxJQUFJM2xCLElBQUosRUFBZDtBQUNBLE9BQUs0bEIsU0FBTCxHQUFpQixJQUFJNWxCLElBQUosRUFBakI7QUFDQSxPQUFLMmtCLFVBQUwsR0FBa0I5b0IsS0FBQSxHQUNkc3BCLE9BQU8sQ0FBQzl2QixRQUFSLEVBRGMsR0FFZCxDQUZKLENBeEJBLENBMkJBOztBQUNBLE1BQUksT0FBTzh2QixPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDLFNBQUszZCxNQUFMLEdBQWMyZCxPQUFkO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsU0FBSzNkLE1BQUwsR0FBY2pLLFNBQVMsQ0FBQzRuQixPQUFELENBQXZCOztBQUNBLFFBQUksQ0FBQyxLQUFLM2QsTUFBVixFQUFrQjtBQUNoQixXQUFLQSxNQUFMLEdBQWNyTixJQUFkO0FBQ0EwQixXQUFBLElBQXlDeUUsSUFBSSxDQUMzQyw2QkFBNkI2a0IsT0FBN0IsR0FBdUMsS0FBdkMsR0FDQSxtREFEQSxHQUVBLDJDQUgyQyxFQUkzQ3BrQixFQUoyQyxDQUE3QztBQU1EO0FBQ0Y7O0FBQ0QsT0FBSy9MLEtBQUwsR0FBYSxLQUFLc3dCLElBQUwsR0FDVDN3QixTQURTLEdBRVQsS0FBS3VLLEdBQUwsRUFGSjtBQUdELENBbkREO0FBcURBO0FBQ0E7QUFDQTs7O0FBQ0EyakIsT0FBTyxDQUFDenRCLFNBQVIsQ0FBa0I4SixHQUFsQixHQUF3QixTQUFTQSxHQUFULEdBQWdCO0FBQ3RDZ0UsWUFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLE1BQUlsTyxLQUFKO0FBQ0EsTUFBSStMLEVBQUUsR0FBRyxLQUFLQSxFQUFkOztBQUNBLE1BQUk7QUFDRi9MLFNBQUssR0FBRyxLQUFLd1MsTUFBTCxDQUFZalMsSUFBWixDQUFpQndMLEVBQWpCLEVBQXFCQSxFQUFyQixDQUFSO0FBQ0QsR0FGRCxDQUVFLE9BQU9sRyxDQUFQLEVBQVU7QUFDVixRQUFJLEtBQUs2cEIsSUFBVCxFQUFlO0FBQ2JuWCxpQkFBVyxDQUFDMVMsQ0FBRCxFQUFJa0csRUFBSixFQUFTLDBCQUEyQixLQUFLNGpCLFVBQWhDLEdBQThDLElBQXZELENBQVg7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFNOXBCLENBQU47QUFDRDtBQUNGLEdBUkQsU0FRVTtBQUNSO0FBQ0E7QUFDQSxRQUFJLEtBQUt3cUIsSUFBVCxFQUFlO0FBQ2I5VSxjQUFRLENBQUN2YixLQUFELENBQVI7QUFDRDs7QUFDRG1PLGFBQVM7QUFDVCxTQUFLMGlCLFdBQUw7QUFDRDs7QUFDRCxTQUFPN3dCLEtBQVA7QUFDRCxDQXRCRDtBQXdCQTtBQUNBO0FBQ0E7OztBQUNBNnRCLE9BQU8sQ0FBQ3p0QixTQUFSLENBQWtCeU4sTUFBbEIsR0FBMkIsU0FBU0EsTUFBVCxDQUFpQnNELEdBQWpCLEVBQXNCO0FBQy9DLE1BQUk3RCxFQUFFLEdBQUc2RCxHQUFHLENBQUM3RCxFQUFiOztBQUNBLE1BQUksQ0FBQyxLQUFLc2pCLFNBQUwsQ0FBZXpsQixHQUFmLENBQW1CbUMsRUFBbkIsQ0FBTCxFQUE2QjtBQUMzQixTQUFLc2pCLFNBQUwsQ0FBZXhsQixHQUFmLENBQW1Ca0MsRUFBbkI7QUFDQSxTQUFLb2pCLE9BQUwsQ0FBYXhqQixJQUFiLENBQWtCaUUsR0FBbEI7O0FBQ0EsUUFBSSxDQUFDLEtBQUt3ZixNQUFMLENBQVl4bEIsR0FBWixDQUFnQm1DLEVBQWhCLENBQUwsRUFBMEI7QUFDeEI2RCxTQUFHLENBQUMzRCxNQUFKLENBQVcsSUFBWDtBQUNEO0FBQ0Y7QUFDRixDQVREO0FBV0E7QUFDQTtBQUNBOzs7QUFDQXFnQixPQUFPLENBQUN6dEIsU0FBUixDQUFrQnl3QixXQUFsQixHQUFnQyxTQUFTQSxXQUFULEdBQXdCO0FBQ3RELE1BQUkxdUIsQ0FBQyxHQUFHLEtBQUtzdUIsSUFBTCxDQUFVcnVCLE1BQWxCOztBQUNBLFNBQU9ELENBQUMsRUFBUixFQUFZO0FBQ1YsUUFBSWdQLEdBQUcsR0FBRyxLQUFLc2YsSUFBTCxDQUFVdHVCLENBQVYsQ0FBVjs7QUFDQSxRQUFJLENBQUMsS0FBS3l1QixTQUFMLENBQWV6bEIsR0FBZixDQUFtQmdHLEdBQUcsQ0FBQzdELEVBQXZCLENBQUwsRUFBaUM7QUFDL0I2RCxTQUFHLENBQUN6RCxTQUFKLENBQWMsSUFBZDtBQUNEO0FBQ0Y7O0FBQ0QsTUFBSW9qQixHQUFHLEdBQUcsS0FBS0gsTUFBZjtBQUNBLE9BQUtBLE1BQUwsR0FBYyxLQUFLQyxTQUFuQjtBQUNBLE9BQUtBLFNBQUwsR0FBaUJFLEdBQWpCO0FBQ0EsT0FBS0YsU0FBTCxDQUFldmxCLEtBQWY7QUFDQXlsQixLQUFHLEdBQUcsS0FBS0wsSUFBWDtBQUNBLE9BQUtBLElBQUwsR0FBWSxLQUFLQyxPQUFqQjtBQUNBLE9BQUtBLE9BQUwsR0FBZUksR0FBZjtBQUNBLE9BQUtKLE9BQUwsQ0FBYXR1QixNQUFiLEdBQXNCLENBQXRCO0FBQ0QsQ0FoQkQ7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBeXJCLE9BQU8sQ0FBQ3p0QixTQUFSLENBQWtCNE4sTUFBbEIsR0FBMkIsU0FBU0EsTUFBVCxHQUFtQjtBQUM1QztBQUNBLE1BQUksS0FBS3NpQixJQUFULEVBQWU7QUFDYixTQUFLRSxLQUFMLEdBQWEsSUFBYjtBQUNELEdBRkQsTUFFTyxJQUFJLEtBQUtsRyxJQUFULEVBQWU7QUFDcEIsU0FBS21GLEdBQUw7QUFDRCxHQUZNLE1BRUE7QUFDTFEsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDtBQUNGLENBVEQ7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FwQyxPQUFPLENBQUN6dEIsU0FBUixDQUFrQnF2QixHQUFsQixHQUF3QixTQUFTQSxHQUFULEdBQWdCO0FBQ3RDLE1BQUksS0FBS2MsTUFBVCxFQUFpQjtBQUNmLFFBQUl2d0IsS0FBSyxHQUFHLEtBQUtrSyxHQUFMLEVBQVo7O0FBQ0EsUUFDRWxLLEtBQUssS0FBSyxLQUFLQSxLQUFmLElBQ0E7QUFDQTtBQUNBO0FBQ0FDLFlBQVEsQ0FBQ0QsS0FBRCxDQUpSLElBS0EsS0FBS3F3QixJQU5QLEVBT0U7QUFDQTtBQUNBLFVBQUlVLFFBQVEsR0FBRyxLQUFLL3dCLEtBQXBCO0FBQ0EsV0FBS0EsS0FBTCxHQUFhQSxLQUFiOztBQUNBLFVBQUksS0FBSzB2QixJQUFULEVBQWU7QUFDYixZQUFJO0FBQ0YsZUFBS3JWLEVBQUwsQ0FBUTlaLElBQVIsQ0FBYSxLQUFLd0wsRUFBbEIsRUFBc0IvTCxLQUF0QixFQUE2Qit3QixRQUE3QjtBQUNELFNBRkQsQ0FFRSxPQUFPbHJCLENBQVAsRUFBVTtBQUNWMFMscUJBQVcsQ0FBQzFTLENBQUQsRUFBSSxLQUFLa0csRUFBVCxFQUFjLDRCQUE2QixLQUFLNGpCLFVBQWxDLEdBQWdELElBQTlELENBQVg7QUFDRDtBQUNGLE9BTkQsTUFNTztBQUNMLGFBQUt0VixFQUFMLENBQVE5WixJQUFSLENBQWEsS0FBS3dMLEVBQWxCLEVBQXNCL0wsS0FBdEIsRUFBNkIrd0IsUUFBN0I7QUFDRDtBQUNGO0FBQ0Y7QUFDRixDQXpCRDtBQTJCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FsRCxPQUFPLENBQUN6dEIsU0FBUixDQUFrQjR3QixRQUFsQixHQUE2QixTQUFTQSxRQUFULEdBQXFCO0FBQ2hELE9BQUtoeEIsS0FBTCxHQUFhLEtBQUtrSyxHQUFMLEVBQWI7QUFDQSxPQUFLc21CLEtBQUwsR0FBYSxLQUFiO0FBQ0QsQ0FIRDtBQUtBO0FBQ0E7QUFDQTs7O0FBQ0EzQyxPQUFPLENBQUN6dEIsU0FBUixDQUFrQnVOLE1BQWxCLEdBQTJCLFNBQVNBLE1BQVQsR0FBbUI7QUFDNUMsTUFBSXhMLENBQUMsR0FBRyxLQUFLc3VCLElBQUwsQ0FBVXJ1QixNQUFsQjs7QUFDQSxTQUFPRCxDQUFDLEVBQVIsRUFBWTtBQUNWLFNBQUtzdUIsSUFBTCxDQUFVdHVCLENBQVYsRUFBYXdMLE1BQWI7QUFDRDtBQUNGLENBTEQ7QUFPQTtBQUNBO0FBQ0E7OztBQUNBa2dCLE9BQU8sQ0FBQ3p0QixTQUFSLENBQWtCaXRCLFFBQWxCLEdBQTZCLFNBQVNBLFFBQVQsR0FBcUI7QUFDaEQsTUFBSSxLQUFLa0QsTUFBVCxFQUFpQjtBQUNmO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBQyxLQUFLeGtCLEVBQUwsQ0FBUTZnQixpQkFBYixFQUFnQztBQUM5QnBxQixZQUFNLENBQUMsS0FBS3VKLEVBQUwsQ0FBUXVoQixTQUFULEVBQW9CLElBQXBCLENBQU47QUFDRDs7QUFDRCxRQUFJbnJCLENBQUMsR0FBRyxLQUFLc3VCLElBQUwsQ0FBVXJ1QixNQUFsQjs7QUFDQSxXQUFPRCxDQUFDLEVBQVIsRUFBWTtBQUNWLFdBQUtzdUIsSUFBTCxDQUFVdHVCLENBQVYsRUFBYXVMLFNBQWIsQ0FBdUIsSUFBdkI7QUFDRDs7QUFDRCxTQUFLNmlCLE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFDRixDQWREO0FBZ0JBOzs7QUFFQSxJQUFJVSx3QkFBd0IsR0FBRztBQUM3QmpwQixZQUFVLEVBQUUsSUFEaUI7QUFFN0JHLGNBQVksRUFBRSxJQUZlO0FBRzdCK0IsS0FBRyxFQUFFL0UsSUFId0I7QUFJN0IrRixLQUFHLEVBQUUvRjtBQUp3QixDQUEvQjs7QUFPQSxTQUFTMmEsS0FBVCxDQUFnQmxTLE1BQWhCLEVBQXdCc2pCLFNBQXhCLEVBQW1DbHVCLEdBQW5DLEVBQXdDO0FBQ3RDaXVCLDBCQUF3QixDQUFDL21CLEdBQXpCLEdBQStCLFNBQVNpbkIsV0FBVCxHQUF3QjtBQUNyRCxXQUFPLEtBQUtELFNBQUwsRUFBZ0JsdUIsR0FBaEIsQ0FBUDtBQUNELEdBRkQ7O0FBR0FpdUIsMEJBQXdCLENBQUMvbEIsR0FBekIsR0FBK0IsU0FBU2ttQixXQUFULENBQXNCeHdCLEdBQXRCLEVBQTJCO0FBQ3hELFNBQUtzd0IsU0FBTCxFQUFnQmx1QixHQUFoQixJQUF1QnBDLEdBQXZCO0FBQ0QsR0FGRDs7QUFHQXJCLFFBQU0sQ0FBQzBJLGNBQVAsQ0FBc0IyRixNQUF0QixFQUE4QjVLLEdBQTlCLEVBQW1DaXVCLHdCQUFuQztBQUNEOztBQUVELFNBQVNJLFNBQVQsQ0FBb0J0bEIsRUFBcEIsRUFBd0I7QUFDdEJBLElBQUUsQ0FBQ3VoQixTQUFILEdBQWUsRUFBZjtBQUNBLE1BQUlyakIsSUFBSSxHQUFHOEIsRUFBRSxDQUFDUSxRQUFkOztBQUNBLE1BQUl0QyxJQUFJLENBQUN3SyxLQUFULEVBQWdCO0FBQUU2YyxhQUFTLENBQUN2bEIsRUFBRCxFQUFLOUIsSUFBSSxDQUFDd0ssS0FBVixDQUFUO0FBQTRCOztBQUM5QyxNQUFJeEssSUFBSSxDQUFDeUssT0FBVCxFQUFrQjtBQUFFNmMsZUFBVyxDQUFDeGxCLEVBQUQsRUFBSzlCLElBQUksQ0FBQ3lLLE9BQVYsQ0FBWDtBQUFnQzs7QUFDcEQsTUFBSXpLLElBQUksQ0FBQ3NFLElBQVQsRUFBZTtBQUNiaWpCLFlBQVEsQ0FBQ3psQixFQUFELENBQVI7QUFDRCxHQUZELE1BRU87QUFDTGdHLFdBQU8sQ0FBQ2hHLEVBQUUsQ0FBQ3doQixLQUFILEdBQVcsRUFBWixFQUFnQjtBQUFLO0FBQXJCLEtBQVA7QUFDRDs7QUFDRCxNQUFJdGpCLElBQUksQ0FBQzJLLFFBQVQsRUFBbUI7QUFBRTZjLGdCQUFZLENBQUMxbEIsRUFBRCxFQUFLOUIsSUFBSSxDQUFDMkssUUFBVixDQUFaO0FBQWtDOztBQUN2RCxNQUFJM0ssSUFBSSxDQUFDRixLQUFMLElBQWNFLElBQUksQ0FBQ0YsS0FBTCxLQUFlRCxXQUFqQyxFQUE4QztBQUM1QzRuQixhQUFTLENBQUMzbEIsRUFBRCxFQUFLOUIsSUFBSSxDQUFDRixLQUFWLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQVN1bkIsU0FBVCxDQUFvQnZsQixFQUFwQixFQUF3QjRsQixZQUF4QixFQUFzQztBQUNwQyxNQUFJeGUsU0FBUyxHQUFHcEgsRUFBRSxDQUFDUSxRQUFILENBQVk0RyxTQUFaLElBQXlCLEVBQXpDO0FBQ0EsTUFBSXNCLEtBQUssR0FBRzFJLEVBQUUsQ0FBQ2dMLE1BQUgsR0FBWSxFQUF4QixDQUZvQyxDQUdwQztBQUNBOztBQUNBLE1BQUk5USxJQUFJLEdBQUc4RixFQUFFLENBQUNRLFFBQUgsQ0FBWWdpQixTQUFaLEdBQXdCLEVBQW5DO0FBQ0EsTUFBSXFELE1BQU0sR0FBRyxDQUFDN2xCLEVBQUUsQ0FBQ2UsT0FBakIsQ0FOb0MsQ0FPcEM7O0FBQ0EsTUFBSSxDQUFDOGtCLE1BQUwsRUFBYTtBQUNYcmdCLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0Q7O0FBQ0QsTUFBSWlRLElBQUksR0FBRyxVQUFXeGUsR0FBWCxFQUFpQjtBQUMxQmlELFFBQUksQ0FBQ2lILElBQUwsQ0FBVWxLLEdBQVY7QUFDQSxRQUFJaEQsS0FBSyxHQUFHbVcsWUFBWSxDQUFDblQsR0FBRCxFQUFNMnVCLFlBQU4sRUFBb0J4ZSxTQUFwQixFQUErQnBILEVBQS9CLENBQXhCO0FBQ0E7O0FBQ0EsUUFBSWxGLElBQUosRUFBMkM7QUFDekMsVUFBSThhLGFBQWEsR0FBRzVkLFNBQVMsQ0FBQ2YsR0FBRCxDQUE3Qjs7QUFDQSxVQUFJVCxtQkFBbUIsQ0FBQ29mLGFBQUQsQ0FBbkIsSUFDQWxiLE1BQU0sQ0FBQ1ksY0FBUCxDQUFzQnNhLGFBQXRCLENBREosRUFDMEM7QUFDeENyVyxZQUFJLENBQ0QsT0FBT3FXLGFBQVAsR0FBdUIsa0VBRHRCLEVBRUY1VixFQUZFLENBQUo7QUFJRDs7QUFDRDhGLHVCQUFpQixDQUFDNEMsS0FBRCxFQUFRelIsR0FBUixFQUFhaEQsS0FBYixFQUFvQixZQUFZO0FBQy9DLFlBQUksQ0FBQzR4QixNQUFELElBQVcsQ0FBQzNJLHdCQUFoQixFQUEwQztBQUN4QzNkLGNBQUksQ0FDRiw0REFDQSx3REFEQSxHQUVBLCtEQUZBLEdBR0EsK0JBSEEsR0FHa0N0SSxHQUhsQyxHQUd3QyxJQUp0QyxFQUtGK0ksRUFMRSxDQUFKO0FBT0Q7QUFDRixPQVZnQixDQUFqQjtBQVdELEtBcEJELE1Bb0JPLEVBeEJtQixDQTJCMUI7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLEVBQUUvSSxHQUFHLElBQUkrSSxFQUFULENBQUosRUFBa0I7QUFDaEIrVCxXQUFLLENBQUMvVCxFQUFELEVBQUssUUFBTCxFQUFlL0ksR0FBZixDQUFMO0FBQ0Q7QUFDRixHQWpDRDs7QUFtQ0EsT0FBSyxJQUFJQSxHQUFULElBQWdCMnVCLFlBQWhCLEVBQThCblEsSUFBSSxDQUFFeGUsR0FBRixDQUFKOztBQUM5QnVPLGlCQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0Q7O0FBRUQsU0FBU2lnQixRQUFULENBQW1CemxCLEVBQW5CLEVBQXVCO0FBQ3JCLE1BQUl3QyxJQUFJLEdBQUd4QyxFQUFFLENBQUNRLFFBQUgsQ0FBWWdDLElBQXZCO0FBQ0FBLE1BQUksR0FBR3hDLEVBQUUsQ0FBQ3doQixLQUFILEdBQVcsT0FBT2hmLElBQVAsS0FBZ0IsVUFBaEIsR0FDZHNqQixPQUFPLENBQUN0akIsSUFBRCxFQUFPeEMsRUFBUCxDQURPLEdBRWR3QyxJQUFJLElBQUksRUFGWjs7QUFHQSxNQUFJLENBQUM5TixhQUFhLENBQUM4TixJQUFELENBQWxCLEVBQTBCO0FBQ3hCQSxRQUFJLEdBQUcsRUFBUDtBQUNBMUgsU0FBQSxJQUF5Q3lFLElBQUksQ0FDM0MsOENBQ0Esb0VBRjJDLEVBRzNDUyxFQUgyQyxDQUE3QztBQUtELEdBWm9CLENBYXJCOzs7QUFDQSxNQUFJOUYsSUFBSSxHQUFHMUcsTUFBTSxDQUFDMEcsSUFBUCxDQUFZc0ksSUFBWixDQUFYO0FBQ0EsTUFBSWtHLEtBQUssR0FBRzFJLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZa0ksS0FBeEI7QUFDQSxNQUFJQyxPQUFPLEdBQUczSSxFQUFFLENBQUNRLFFBQUgsQ0FBWW1JLE9BQTFCO0FBQ0EsTUFBSXZTLENBQUMsR0FBRzhELElBQUksQ0FBQzdELE1BQWI7O0FBQ0EsU0FBT0QsQ0FBQyxFQUFSLEVBQVk7QUFDVixRQUFJYSxHQUFHLEdBQUdpRCxJQUFJLENBQUM5RCxDQUFELENBQWQ7O0FBQ0EsUUFBSTBFLElBQUosRUFBMkM7QUFDekMsVUFBSTZOLE9BQU8sSUFBSTNSLE1BQU0sQ0FBQzJSLE9BQUQsRUFBVTFSLEdBQVYsQ0FBckIsRUFBcUM7QUFDbkNzSSxZQUFJLENBQ0QsY0FBY3RJLEdBQWQsR0FBb0IsaURBRG5CLEVBRUYrSSxFQUZFLENBQUo7QUFJRDtBQUNGOztBQUNELFFBQUkwSSxLQUFLLElBQUkxUixNQUFNLENBQUMwUixLQUFELEVBQVF6UixHQUFSLENBQW5CLEVBQWlDO0FBQy9CNkQsV0FBQSxJQUF5Q3lFLElBQUksQ0FDM0MseUJBQXlCdEksR0FBekIsR0FBK0Isb0NBQS9CLEdBQ0EsaUNBRjJDLEVBRzNDK0ksRUFIMkMsQ0FBN0M7QUFLRCxLQU5ELE1BTU8sSUFBSSxDQUFDbEUsVUFBVSxDQUFDN0UsR0FBRCxDQUFmLEVBQXNCO0FBQzNCOGMsV0FBSyxDQUFDL1QsRUFBRCxFQUFLLE9BQUwsRUFBYy9JLEdBQWQsQ0FBTDtBQUNEO0FBQ0YsR0FyQ29CLENBc0NyQjs7O0FBQ0ErTyxTQUFPLENBQUN4RCxJQUFELEVBQU87QUFBSztBQUFaLEdBQVA7QUFDRDs7QUFFRCxTQUFTc2pCLE9BQVQsQ0FBa0J0akIsSUFBbEIsRUFBd0J4QyxFQUF4QixFQUE0QjtBQUMxQjtBQUNBbUMsWUFBVTs7QUFDVixNQUFJO0FBQ0YsV0FBT0ssSUFBSSxDQUFDaE8sSUFBTCxDQUFVd0wsRUFBVixFQUFjQSxFQUFkLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT2xHLENBQVAsRUFBVTtBQUNWMFMsZUFBVyxDQUFDMVMsQ0FBRCxFQUFJa0csRUFBSixFQUFRLFFBQVIsQ0FBWDtBQUNBLFdBQU8sRUFBUDtBQUNELEdBTEQsU0FLVTtBQUNSb0MsYUFBUztBQUNWO0FBQ0Y7O0FBRUQsSUFBSTJqQixzQkFBc0IsR0FBRztBQUFFeEIsTUFBSSxFQUFFO0FBQVIsQ0FBN0I7O0FBRUEsU0FBU21CLFlBQVQsQ0FBdUIxbEIsRUFBdkIsRUFBMkI2SSxRQUEzQixFQUFxQztBQUNuQztBQUNBLE1BQUltZCxRQUFRLEdBQUdobUIsRUFBRSxDQUFDaW1CLGlCQUFILEdBQXVCenlCLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBYyxJQUFkLENBQXRDLENBRm1DLENBR25DOztBQUNBLE1BQUlpd0IsS0FBSyxHQUFHNW5CLGlCQUFpQixFQUE3Qjs7QUFFQSxPQUFLLElBQUlySCxHQUFULElBQWdCNFIsUUFBaEIsRUFBMEI7QUFDeEIsUUFBSXNkLE9BQU8sR0FBR3RkLFFBQVEsQ0FBQzVSLEdBQUQsQ0FBdEI7QUFDQSxRQUFJd1AsTUFBTSxHQUFHLE9BQU8wZixPQUFQLEtBQW1CLFVBQW5CLEdBQWdDQSxPQUFoQyxHQUEwQ0EsT0FBTyxDQUFDaG9CLEdBQS9EOztBQUNBLFFBQUlyRCxLQUFBLElBQXlDMkwsTUFBTSxJQUFJLElBQXZELEVBQTZEO0FBQzNEbEgsVUFBSSxDQUNELCtDQUErQ3RJLEdBQS9DLEdBQXFELEtBRHBELEVBRUYrSSxFQUZFLENBQUo7QUFJRDs7QUFFRCxRQUFJLENBQUNrbUIsS0FBTCxFQUFZO0FBQ1Y7QUFDQUYsY0FBUSxDQUFDL3VCLEdBQUQsQ0FBUixHQUFnQixJQUFJNnFCLE9BQUosQ0FDZDloQixFQURjLEVBRWR5RyxNQUFNLElBQUlyTixJQUZJLEVBR2RBLElBSGMsRUFJZDJzQixzQkFKYyxDQUFoQjtBQU1ELEtBbEJ1QixDQW9CeEI7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLEVBQUU5dUIsR0FBRyxJQUFJK0ksRUFBVCxDQUFKLEVBQWtCO0FBQ2hCb21CLG9CQUFjLENBQUNwbUIsRUFBRCxFQUFLL0ksR0FBTCxFQUFVa3ZCLE9BQVYsQ0FBZDtBQUNELEtBRkQsTUFFTyxJQUFJcnJCLElBQUosRUFBMkM7QUFDaEQsVUFBSTdELEdBQUcsSUFBSStJLEVBQUUsQ0FBQ2lQLEtBQWQsRUFBcUI7QUFDbkIxUCxZQUFJLENBQUUsNkJBQTZCdEksR0FBN0IsR0FBbUMsZ0NBQXJDLEVBQXdFK0ksRUFBeEUsQ0FBSjtBQUNELE9BRkQsTUFFTyxJQUFJQSxFQUFFLENBQUNRLFFBQUgsQ0FBWWtJLEtBQVosSUFBcUJ6UixHQUFHLElBQUkrSSxFQUFFLENBQUNRLFFBQUgsQ0FBWWtJLEtBQTVDLEVBQW1EO0FBQ3hEbkosWUFBSSxDQUFFLDZCQUE2QnRJLEdBQTdCLEdBQW1DLGtDQUFyQyxFQUEwRStJLEVBQTFFLENBQUo7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTb21CLGNBQVQsQ0FDRXZrQixNQURGLEVBRUU1SyxHQUZGLEVBR0VrdkIsT0FIRixFQUlFO0FBQ0EsTUFBSUUsV0FBVyxHQUFHLENBQUMvbkIsaUJBQWlCLEVBQXBDOztBQUNBLE1BQUksT0FBTzZuQixPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDakIsNEJBQXdCLENBQUMvbUIsR0FBekIsR0FBK0Jrb0IsV0FBVyxHQUN0Q0Msb0JBQW9CLENBQUNydkIsR0FBRCxDQURrQixHQUV0Q3N2QixtQkFBbUIsQ0FBQ0osT0FBRCxDQUZ2QjtBQUdBakIsNEJBQXdCLENBQUMvbEIsR0FBekIsR0FBK0IvRixJQUEvQjtBQUNELEdBTEQsTUFLTztBQUNMOHJCLDRCQUF3QixDQUFDL21CLEdBQXpCLEdBQStCZ29CLE9BQU8sQ0FBQ2hvQixHQUFSLEdBQzNCa29CLFdBQVcsSUFBSUYsT0FBTyxDQUFDL3VCLEtBQVIsS0FBa0IsS0FBakMsR0FDRWt2QixvQkFBb0IsQ0FBQ3J2QixHQUFELENBRHRCLEdBRUVzdkIsbUJBQW1CLENBQUNKLE9BQU8sQ0FBQ2hvQixHQUFULENBSE0sR0FJM0IvRSxJQUpKO0FBS0E4ckIsNEJBQXdCLENBQUMvbEIsR0FBekIsR0FBK0JnbkIsT0FBTyxDQUFDaG5CLEdBQVIsSUFBZS9GLElBQTlDO0FBQ0Q7O0FBQ0QsTUFBSTBCLEtBQUEsSUFDQW9xQix3QkFBd0IsQ0FBQy9sQixHQUF6QixLQUFpQy9GLElBRHJDLEVBQzJDO0FBQ3pDOHJCLDRCQUF3QixDQUFDL2xCLEdBQXpCLEdBQStCLFlBQVk7QUFDekNJLFVBQUksQ0FDRCx5QkFBeUJ0SSxHQUF6QixHQUErQiwwQ0FEOUIsRUFFRixJQUZFLENBQUo7QUFJRCxLQUxEO0FBTUQ7O0FBQ0R6RCxRQUFNLENBQUMwSSxjQUFQLENBQXNCMkYsTUFBdEIsRUFBOEI1SyxHQUE5QixFQUFtQ2l1Qix3QkFBbkM7QUFDRDs7QUFFRCxTQUFTb0Isb0JBQVQsQ0FBK0JydkIsR0FBL0IsRUFBb0M7QUFDbEMsU0FBTyxTQUFTdXZCLGNBQVQsR0FBMkI7QUFDaEMsUUFBSS9DLE9BQU8sR0FBRyxLQUFLd0MsaUJBQUwsSUFBMEIsS0FBS0EsaUJBQUwsQ0FBdUJodkIsR0FBdkIsQ0FBeEM7O0FBQ0EsUUFBSXdzQixPQUFKLEVBQWE7QUFDWCxVQUFJQSxPQUFPLENBQUNnQixLQUFaLEVBQW1CO0FBQ2pCaEIsZUFBTyxDQUFDd0IsUUFBUjtBQUNEOztBQUNELFVBQUkzakIsR0FBRyxDQUFDTyxNQUFSLEVBQWdCO0FBQ2Q0aEIsZUFBTyxDQUFDN2hCLE1BQVI7QUFDRDs7QUFDRCxhQUFPNmhCLE9BQU8sQ0FBQ3h2QixLQUFmO0FBQ0Q7QUFDRixHQVhEO0FBWUQ7O0FBRUQsU0FBU3N5QixtQkFBVCxDQUE2QnB2QixFQUE3QixFQUFpQztBQUMvQixTQUFPLFNBQVNxdkIsY0FBVCxHQUEyQjtBQUNoQyxXQUFPcnZCLEVBQUUsQ0FBQzNDLElBQUgsQ0FBUSxJQUFSLEVBQWMsSUFBZCxDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNneEIsV0FBVCxDQUFzQnhsQixFQUF0QixFQUEwQjJJLE9BQTFCLEVBQW1DO0FBQ2pDLE1BQUlELEtBQUssR0FBRzFJLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZa0ksS0FBeEI7O0FBQ0EsT0FBSyxJQUFJelIsR0FBVCxJQUFnQjBSLE9BQWhCLEVBQXlCO0FBQ3ZCLFFBQUk3TixJQUFKLEVBQTJDO0FBQ3pDLFVBQUksT0FBTzZOLE9BQU8sQ0FBQzFSLEdBQUQsQ0FBZCxLQUF3QixVQUE1QixFQUF3QztBQUN0Q3NJLFlBQUksQ0FDRixjQUFjdEksR0FBZCxHQUFvQixnQkFBcEIsR0FBd0MsT0FBTzBSLE9BQU8sQ0FBQzFSLEdBQUQsQ0FBdEQsR0FBK0Qsa0NBQS9ELEdBQ0EsMkNBRkUsRUFHRitJLEVBSEUsQ0FBSjtBQUtEOztBQUNELFVBQUkwSSxLQUFLLElBQUkxUixNQUFNLENBQUMwUixLQUFELEVBQVF6UixHQUFSLENBQW5CLEVBQWlDO0FBQy9Cc0ksWUFBSSxDQUNELGNBQWN0SSxHQUFkLEdBQW9CLHdDQURuQixFQUVGK0ksRUFGRSxDQUFKO0FBSUQ7O0FBQ0QsVUFBSy9JLEdBQUcsSUFBSStJLEVBQVIsSUFBZWxFLFVBQVUsQ0FBQzdFLEdBQUQsQ0FBN0IsRUFBb0M7QUFDbENzSSxZQUFJLENBQ0YsY0FBY3RJLEdBQWQsR0FBb0IscURBQXBCLEdBQ0EsMERBRkUsQ0FBSjtBQUlEO0FBQ0Y7O0FBQ0QrSSxNQUFFLENBQUMvSSxHQUFELENBQUYsR0FBVSxPQUFPMFIsT0FBTyxDQUFDMVIsR0FBRCxDQUFkLEtBQXdCLFVBQXhCLEdBQXFDbUMsSUFBckMsR0FBNENWLElBQUksQ0FBQ2lRLE9BQU8sQ0FBQzFSLEdBQUQsQ0FBUixFQUFlK0ksRUFBZixDQUExRDtBQUNEO0FBQ0Y7O0FBRUQsU0FBUzJsQixTQUFULENBQW9CM2xCLEVBQXBCLEVBQXdCaEMsS0FBeEIsRUFBK0I7QUFDN0IsT0FBSyxJQUFJL0csR0FBVCxJQUFnQitHLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUlnUCxPQUFPLEdBQUdoUCxLQUFLLENBQUMvRyxHQUFELENBQW5COztBQUNBLFFBQUkxQixLQUFLLENBQUNDLE9BQU4sQ0FBY3dYLE9BQWQsQ0FBSixFQUE0QjtBQUMxQixXQUFLLElBQUk1VyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNFcsT0FBTyxDQUFDM1csTUFBNUIsRUFBb0NELENBQUMsRUFBckMsRUFBeUM7QUFDdkNxd0IscUJBQWEsQ0FBQ3ptQixFQUFELEVBQUsvSSxHQUFMLEVBQVUrVixPQUFPLENBQUM1VyxDQUFELENBQWpCLENBQWI7QUFDRDtBQUNGLEtBSkQsTUFJTztBQUNMcXdCLG1CQUFhLENBQUN6bUIsRUFBRCxFQUFLL0ksR0FBTCxFQUFVK1YsT0FBVixDQUFiO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQVN5WixhQUFULENBQ0V6bUIsRUFERixFQUVFb2tCLE9BRkYsRUFHRXBYLE9BSEYsRUFJRTNNLE9BSkYsRUFLRTtBQUNBLE1BQUkzTCxhQUFhLENBQUNzWSxPQUFELENBQWpCLEVBQTRCO0FBQzFCM00sV0FBTyxHQUFHMk0sT0FBVjtBQUNBQSxXQUFPLEdBQUdBLE9BQU8sQ0FBQ0EsT0FBbEI7QUFDRDs7QUFDRCxNQUFJLE9BQU9BLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLFdBQU8sR0FBR2hOLEVBQUUsQ0FBQ2dOLE9BQUQsQ0FBWjtBQUNEOztBQUNELFNBQU9oTixFQUFFLENBQUMwbUIsTUFBSCxDQUFVdEMsT0FBVixFQUFtQnBYLE9BQW5CLEVBQTRCM00sT0FBNUIsQ0FBUDtBQUNEOztBQUVELFNBQVNzbUIsVUFBVCxDQUFxQnJKLEdBQXJCLEVBQTBCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE1BQUlzSixPQUFPLEdBQUcsRUFBZDs7QUFDQUEsU0FBTyxDQUFDem9CLEdBQVIsR0FBYyxZQUFZO0FBQUUsV0FBTyxLQUFLcWpCLEtBQVo7QUFBbUIsR0FBL0M7O0FBQ0EsTUFBSXFGLFFBQVEsR0FBRyxFQUFmOztBQUNBQSxVQUFRLENBQUMxb0IsR0FBVCxHQUFlLFlBQVk7QUFBRSxXQUFPLEtBQUs2TSxNQUFaO0FBQW9CLEdBQWpEOztBQUNBLE1BQUlsUSxJQUFKLEVBQTJDO0FBQ3pDOHJCLFdBQU8sQ0FBQ3puQixHQUFSLEdBQWMsWUFBWTtBQUN4QkksVUFBSSxDQUNGLDBDQUNBLHFDQUZFLEVBR0YsSUFIRSxDQUFKO0FBS0QsS0FORDs7QUFPQXNuQixZQUFRLENBQUMxbkIsR0FBVCxHQUFlLFlBQVk7QUFDekJJLFVBQUksQ0FBQyxxQkFBRCxFQUF3QixJQUF4QixDQUFKO0FBQ0QsS0FGRDtBQUdEOztBQUNEL0wsUUFBTSxDQUFDMEksY0FBUCxDQUFzQm9oQixHQUFHLENBQUNqcEIsU0FBMUIsRUFBcUMsT0FBckMsRUFBOEN1eUIsT0FBOUM7QUFDQXB6QixRQUFNLENBQUMwSSxjQUFQLENBQXNCb2hCLEdBQUcsQ0FBQ2pwQixTQUExQixFQUFxQyxRQUFyQyxFQUErQ3d5QixRQUEvQztBQUVBdkosS0FBRyxDQUFDanBCLFNBQUosQ0FBY3l5QixJQUFkLEdBQXFCM25CLEdBQXJCO0FBQ0FtZSxLQUFHLENBQUNqcEIsU0FBSixDQUFjMHlCLE9BQWQsR0FBd0I5ZixHQUF4Qjs7QUFFQXFXLEtBQUcsQ0FBQ2pwQixTQUFKLENBQWNxeUIsTUFBZCxHQUF1QixVQUNyQnRDLE9BRHFCLEVBRXJCOVYsRUFGcUIsRUFHckJqTyxPQUhxQixFQUlyQjtBQUNBLFFBQUlMLEVBQUUsR0FBRyxJQUFUOztBQUNBLFFBQUl0TCxhQUFhLENBQUM0WixFQUFELENBQWpCLEVBQXVCO0FBQ3JCLGFBQU9tWSxhQUFhLENBQUN6bUIsRUFBRCxFQUFLb2tCLE9BQUwsRUFBYzlWLEVBQWQsRUFBa0JqTyxPQUFsQixDQUFwQjtBQUNEOztBQUNEQSxXQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFyQjtBQUNBQSxXQUFPLENBQUNzakIsSUFBUixHQUFlLElBQWY7QUFDQSxRQUFJRixPQUFPLEdBQUcsSUFBSTNCLE9BQUosQ0FBWTloQixFQUFaLEVBQWdCb2tCLE9BQWhCLEVBQXlCOVYsRUFBekIsRUFBNkJqTyxPQUE3QixDQUFkOztBQUNBLFFBQUlBLE9BQU8sQ0FBQzJtQixTQUFaLEVBQXVCO0FBQ3JCLFVBQUk7QUFDRjFZLFVBQUUsQ0FBQzlaLElBQUgsQ0FBUXdMLEVBQVIsRUFBWXlqQixPQUFPLENBQUN4dkIsS0FBcEI7QUFDRCxPQUZELENBRUUsT0FBT2lNLEtBQVAsRUFBYztBQUNkc00sbUJBQVcsQ0FBQ3RNLEtBQUQsRUFBUUYsRUFBUixFQUFhLHNDQUF1Q3lqQixPQUFPLENBQUNHLFVBQS9DLEdBQTZELElBQTFFLENBQVg7QUFDRDtBQUNGOztBQUNELFdBQU8sU0FBU3FELFNBQVQsR0FBc0I7QUFDM0J4RCxhQUFPLENBQUNuQyxRQUFSO0FBQ0QsS0FGRDtBQUdELEdBdEJEO0FBdUJEO0FBRUQ7OztBQUVBLElBQUk0RixLQUFLLEdBQUcsQ0FBWjs7QUFFQSxTQUFTQyxTQUFULENBQW9CN0osR0FBcEIsRUFBeUI7QUFDdkJBLEtBQUcsQ0FBQ2pwQixTQUFKLENBQWMreUIsS0FBZCxHQUFzQixVQUFVL21CLE9BQVYsRUFBbUI7QUFDdkMsUUFBSUwsRUFBRSxHQUFHLElBQVQsQ0FEdUMsQ0FFdkM7O0FBQ0FBLE1BQUUsQ0FBQzZoQixJQUFILEdBQVVxRixLQUFLLEVBQWY7QUFFQSxRQUFJL1csUUFBSixFQUFjQyxNQUFkO0FBQ0E7O0FBQ0EsUUFBSXRWLEtBQUEsSUFBeUNKLE1BQU0sQ0FBQ00sV0FBaEQsSUFBK0Q4VSxJQUFuRSxFQUF5RTtBQUN2RUssY0FBUSxHQUFHLG9CQUFxQm5RLEVBQUUsQ0FBQzZoQixJQUFuQztBQUNBelIsWUFBTSxHQUFHLGtCQUFtQnBRLEVBQUUsQ0FBQzZoQixJQUEvQjtBQUNBL1IsVUFBSSxDQUFDSyxRQUFELENBQUo7QUFDRCxLQVhzQyxDQWF2Qzs7O0FBQ0FuUSxNQUFFLENBQUNPLE1BQUgsR0FBWSxJQUFaLENBZHVDLENBZXZDOztBQUNBLFFBQUlGLE9BQU8sSUFBSUEsT0FBTyxDQUFDa2IsWUFBdkIsRUFBcUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E4TCwyQkFBcUIsQ0FBQ3JuQixFQUFELEVBQUtLLE9BQUwsQ0FBckI7QUFDRCxLQUxELE1BS087QUFDTEwsUUFBRSxDQUFDUSxRQUFILEdBQWNpSixZQUFZLENBQ3hCdVIseUJBQXlCLENBQUNoYixFQUFFLENBQUNTLFdBQUosQ0FERCxFQUV4QkosT0FBTyxJQUFJLEVBRmEsRUFHeEJMLEVBSHdCLENBQTFCO0FBS0Q7QUFDRDs7O0FBQ0EsUUFBSWxGLElBQUosRUFBMkM7QUFDekMwVCxlQUFTLENBQUN4TyxFQUFELENBQVQ7QUFDRCxLQUZELE1BRU8sRUEvQmdDLENBa0N2Qzs7O0FBQ0FBLE1BQUUsQ0FBQ3NuQixLQUFILEdBQVd0bkIsRUFBWDtBQUNBdWdCLGlCQUFhLENBQUN2Z0IsRUFBRCxDQUFiO0FBQ0FxZixjQUFVLENBQUNyZixFQUFELENBQVY7QUFDQTZjLGNBQVUsQ0FBQzdjLEVBQUQsQ0FBVjtBQUNBcWEsWUFBUSxDQUFDcmEsRUFBRCxFQUFLLGNBQUwsQ0FBUjtBQUNBMFMsa0JBQWMsQ0FBQzFTLEVBQUQsQ0FBZCxDQXhDdUMsQ0F3Q25COztBQUNwQnNsQixhQUFTLENBQUN0bEIsRUFBRCxDQUFUO0FBQ0F3UyxlQUFXLENBQUN4UyxFQUFELENBQVgsQ0ExQ3VDLENBMEN0Qjs7QUFDakJxYSxZQUFRLENBQUNyYSxFQUFELEVBQUssU0FBTCxDQUFSO0FBRUE7O0FBQ0EsUUFBSWxGLEtBQUEsSUFBeUNKLE1BQU0sQ0FBQ00sV0FBaEQsSUFBK0Q4VSxJQUFuRSxFQUF5RTtBQUN2RTlQLFFBQUUsQ0FBQzRoQixLQUFILEdBQVdsaUIsbUJBQW1CLENBQUNNLEVBQUQsRUFBSyxLQUFMLENBQTlCO0FBQ0E4UCxVQUFJLENBQUNNLE1BQUQsQ0FBSjtBQUNBTCxhQUFPLENBQUUsU0FBVS9QLEVBQUUsQ0FBQzRoQixLQUFiLEdBQXNCLE9BQXhCLEVBQWtDelIsUUFBbEMsRUFBNENDLE1BQTVDLENBQVA7QUFDRDs7QUFFRCxRQUFJcFEsRUFBRSxDQUFDUSxRQUFILENBQVkyRyxFQUFoQixFQUFvQjtBQUNsQm5ILFFBQUUsQ0FBQ2dhLE1BQUgsQ0FBVWhhLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZMkcsRUFBdEI7QUFDRDtBQUNGLEdBdkREO0FBd0REOztBQUVELFNBQVNrZ0IscUJBQVQsQ0FBZ0NybkIsRUFBaEMsRUFBb0NLLE9BQXBDLEVBQTZDO0FBQzNDLE1BQUluQyxJQUFJLEdBQUc4QixFQUFFLENBQUNRLFFBQUgsR0FBY2hOLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBYytKLEVBQUUsQ0FBQ1MsV0FBSCxDQUFlSixPQUE3QixDQUF6QixDQUQyQyxDQUUzQzs7QUFDQSxNQUFJMGMsV0FBVyxHQUFHMWMsT0FBTyxDQUFDbWIsWUFBMUI7QUFDQXRkLE1BQUksQ0FBQ2tGLE1BQUwsR0FBYy9DLE9BQU8sQ0FBQytDLE1BQXRCO0FBQ0FsRixNQUFJLENBQUNzZCxZQUFMLEdBQW9CdUIsV0FBcEI7QUFFQSxNQUFJd0sscUJBQXFCLEdBQUd4SyxXQUFXLENBQUNsYSxnQkFBeEM7QUFDQTNFLE1BQUksQ0FBQ2tKLFNBQUwsR0FBaUJtZ0IscUJBQXFCLENBQUNuZ0IsU0FBdkM7QUFDQWxKLE1BQUksQ0FBQ2lmLGdCQUFMLEdBQXdCb0sscUJBQXFCLENBQUM5TyxTQUE5QztBQUNBdmEsTUFBSSxDQUFDOGUsZUFBTCxHQUF1QnVLLHFCQUFxQixDQUFDOWtCLFFBQTdDO0FBQ0F2RSxNQUFJLENBQUN5QyxhQUFMLEdBQXFCNG1CLHFCQUFxQixDQUFDaGxCLEdBQTNDOztBQUVBLE1BQUlsQyxPQUFPLENBQUMrTyxNQUFaLEVBQW9CO0FBQ2xCbFIsUUFBSSxDQUFDa1IsTUFBTCxHQUFjL08sT0FBTyxDQUFDK08sTUFBdEI7QUFDQWxSLFFBQUksQ0FBQytYLGVBQUwsR0FBdUI1VixPQUFPLENBQUM0VixlQUEvQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBUytFLHlCQUFULENBQW9DcGMsSUFBcEMsRUFBMEM7QUFDeEMsTUFBSXlCLE9BQU8sR0FBR3pCLElBQUksQ0FBQ3lCLE9BQW5COztBQUNBLE1BQUl6QixJQUFJLENBQUM0b0IsS0FBVCxFQUFnQjtBQUNkLFFBQUlDLFlBQVksR0FBR3pNLHlCQUF5QixDQUFDcGMsSUFBSSxDQUFDNG9CLEtBQU4sQ0FBNUM7QUFDQSxRQUFJRSxrQkFBa0IsR0FBRzlvQixJQUFJLENBQUM2b0IsWUFBOUI7O0FBQ0EsUUFBSUEsWUFBWSxLQUFLQyxrQkFBckIsRUFBeUM7QUFDdkM7QUFDQTtBQUNBOW9CLFVBQUksQ0FBQzZvQixZQUFMLEdBQW9CQSxZQUFwQixDQUh1QyxDQUl2Qzs7QUFDQSxVQUFJRSxlQUFlLEdBQUdDLHNCQUFzQixDQUFDaHBCLElBQUQsQ0FBNUMsQ0FMdUMsQ0FNdkM7O0FBQ0EsVUFBSStvQixlQUFKLEVBQXFCO0FBQ25CNXVCLGNBQU0sQ0FBQzZGLElBQUksQ0FBQ2lwQixhQUFOLEVBQXFCRixlQUFyQixDQUFOO0FBQ0Q7O0FBQ0R0bkIsYUFBTyxHQUFHekIsSUFBSSxDQUFDeUIsT0FBTCxHQUFlb0osWUFBWSxDQUFDZ2UsWUFBRCxFQUFlN29CLElBQUksQ0FBQ2lwQixhQUFwQixDQUFyQzs7QUFDQSxVQUFJeG5CLE9BQU8sQ0FBQ0ssSUFBWixFQUFrQjtBQUNoQkwsZUFBTyxDQUFDMkksVUFBUixDQUFtQjNJLE9BQU8sQ0FBQ0ssSUFBM0IsSUFBbUM5QixJQUFuQztBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPeUIsT0FBUDtBQUNEOztBQUVELFNBQVN1bkIsc0JBQVQsQ0FBaUNocEIsSUFBakMsRUFBdUM7QUFDckMsTUFBSWtwQixRQUFKO0FBQ0EsTUFBSUMsTUFBTSxHQUFHbnBCLElBQUksQ0FBQ3lCLE9BQWxCO0FBQ0EsTUFBSTJuQixNQUFNLEdBQUdwcEIsSUFBSSxDQUFDcXBCLGFBQWxCOztBQUNBLE9BQUssSUFBSWh4QixHQUFULElBQWdCOHdCLE1BQWhCLEVBQXdCO0FBQ3RCLFFBQUlBLE1BQU0sQ0FBQzl3QixHQUFELENBQU4sS0FBZ0Ird0IsTUFBTSxDQUFDL3dCLEdBQUQsQ0FBMUIsRUFBaUM7QUFDL0IsVUFBSSxDQUFDNndCLFFBQUwsRUFBZTtBQUFFQSxnQkFBUSxHQUFHLEVBQVg7QUFBZ0I7O0FBQ2pDQSxjQUFRLENBQUM3d0IsR0FBRCxDQUFSLEdBQWdCOHdCLE1BQU0sQ0FBQzl3QixHQUFELENBQXRCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPNndCLFFBQVA7QUFDRDs7QUFFRCxTQUFTeEssR0FBVCxDQUFjamQsT0FBZCxFQUF1QjtBQUNyQixNQUFJdkYsS0FBQSxJQUNGLEVBQUUsZ0JBQWdCd2lCLEdBQWxCLENBREYsRUFFRTtBQUNBL2QsUUFBSSxDQUFDLGtFQUFELENBQUo7QUFDRDs7QUFDRCxPQUFLNm5CLEtBQUwsQ0FBVy9tQixPQUFYO0FBQ0Q7O0FBRUQ4bUIsU0FBUyxDQUFDN0osR0FBRCxDQUFUO0FBQ0FxSixVQUFVLENBQUNySixHQUFELENBQVY7QUFDQXdDLFdBQVcsQ0FBQ3hDLEdBQUQsQ0FBWDtBQUNBd0QsY0FBYyxDQUFDeEQsR0FBRCxDQUFkO0FBQ0FELFdBQVcsQ0FBQ0MsR0FBRCxDQUFYO0FBRUE7O0FBRUEsU0FBUzRLLE9BQVQsQ0FBa0I1SyxHQUFsQixFQUF1QjtBQUNyQkEsS0FBRyxDQUFDNkssR0FBSixHQUFVLFVBQVVDLE1BQVYsRUFBa0I7QUFDMUIsUUFBSUMsZ0JBQWdCLEdBQUksS0FBS0MsaUJBQUwsS0FBMkIsS0FBS0EsaUJBQUwsR0FBeUIsRUFBcEQsQ0FBeEI7O0FBQ0EsUUFBSUQsZ0JBQWdCLENBQUN4eEIsT0FBakIsQ0FBeUJ1eEIsTUFBekIsSUFBbUMsQ0FBQyxDQUF4QyxFQUEyQztBQUN6QyxhQUFPLElBQVA7QUFDRCxLQUp5QixDQU0xQjs7O0FBQ0EsUUFBSXZqQixJQUFJLEdBQUdqTSxPQUFPLENBQUNOLFNBQUQsRUFBWSxDQUFaLENBQWxCO0FBQ0F1TSxRQUFJLENBQUMwakIsT0FBTCxDQUFhLElBQWI7O0FBQ0EsUUFBSSxPQUFPSCxNQUFNLENBQUNJLE9BQWQsS0FBMEIsVUFBOUIsRUFBMEM7QUFDeENKLFlBQU0sQ0FBQ0ksT0FBUCxDQUFlandCLEtBQWYsQ0FBcUI2dkIsTUFBckIsRUFBNkJ2akIsSUFBN0I7QUFDRCxLQUZELE1BRU8sSUFBSSxPQUFPdWpCLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDdkNBLFlBQU0sQ0FBQzd2QixLQUFQLENBQWEsSUFBYixFQUFtQnNNLElBQW5CO0FBQ0Q7O0FBQ0R3akIsb0JBQWdCLENBQUNsbkIsSUFBakIsQ0FBc0JpbkIsTUFBdEI7QUFDQSxXQUFPLElBQVA7QUFDRCxHQWhCRDtBQWlCRDtBQUVEOzs7QUFFQSxTQUFTSyxXQUFULENBQXNCbkwsR0FBdEIsRUFBMkI7QUFDekJBLEtBQUcsQ0FBQ29MLEtBQUosR0FBWSxVQUFVQSxLQUFWLEVBQWlCO0FBQzNCLFNBQUtyb0IsT0FBTCxHQUFlb0osWUFBWSxDQUFDLEtBQUtwSixPQUFOLEVBQWVxb0IsS0FBZixDQUEzQjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQ7QUFJRDtBQUVEOzs7QUFFQSxTQUFTQyxVQUFULENBQXFCckwsR0FBckIsRUFBMEI7QUFDeEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNFQSxLQUFHLENBQUNoZCxHQUFKLEdBQVUsQ0FBVjtBQUNBLE1BQUlBLEdBQUcsR0FBRyxDQUFWO0FBRUE7QUFDRjtBQUNBOztBQUNFZ2QsS0FBRyxDQUFDdmtCLE1BQUosR0FBYSxVQUFVOHVCLGFBQVYsRUFBeUI7QUFDcENBLGlCQUFhLEdBQUdBLGFBQWEsSUFBSSxFQUFqQztBQUNBLFFBQUllLEtBQUssR0FBRyxJQUFaO0FBQ0EsUUFBSUMsT0FBTyxHQUFHRCxLQUFLLENBQUN0b0IsR0FBcEI7QUFDQSxRQUFJd29CLFdBQVcsR0FBR2pCLGFBQWEsQ0FBQ2tCLEtBQWQsS0FBd0JsQixhQUFhLENBQUNrQixLQUFkLEdBQXNCLEVBQTlDLENBQWxCOztBQUNBLFFBQUlELFdBQVcsQ0FBQ0QsT0FBRCxDQUFmLEVBQTBCO0FBQ3hCLGFBQU9DLFdBQVcsQ0FBQ0QsT0FBRCxDQUFsQjtBQUNEOztBQUVELFFBQUlub0IsSUFBSSxHQUFHbW5CLGFBQWEsQ0FBQ25uQixJQUFkLElBQXNCa29CLEtBQUssQ0FBQ3ZvQixPQUFOLENBQWNLLElBQS9DOztBQUNBLFFBQUk1RixLQUFBLElBQXlDNEYsSUFBN0MsRUFBbUQ7QUFDakR1SSwyQkFBcUIsQ0FBQ3ZJLElBQUQsQ0FBckI7QUFDRDs7QUFFRCxRQUFJc29CLEdBQUcsR0FBRyxTQUFTQyxZQUFULENBQXVCNW9CLE9BQXZCLEVBQWdDO0FBQ3hDLFdBQUsrbUIsS0FBTCxDQUFXL21CLE9BQVg7QUFDRCxLQUZEOztBQUdBMm9CLE9BQUcsQ0FBQzMwQixTQUFKLEdBQWdCYixNQUFNLENBQUN5QyxNQUFQLENBQWMyeUIsS0FBSyxDQUFDdjBCLFNBQXBCLENBQWhCO0FBQ0EyMEIsT0FBRyxDQUFDMzBCLFNBQUosQ0FBY29NLFdBQWQsR0FBNEJ1b0IsR0FBNUI7QUFDQUEsT0FBRyxDQUFDMW9CLEdBQUosR0FBVUEsR0FBRyxFQUFiO0FBQ0Ewb0IsT0FBRyxDQUFDM29CLE9BQUosR0FBY29KLFlBQVksQ0FDeEJtZixLQUFLLENBQUN2b0IsT0FEa0IsRUFFeEJ3bkIsYUFGd0IsQ0FBMUI7QUFJQW1CLE9BQUcsQ0FBQyxPQUFELENBQUgsR0FBZUosS0FBZixDQXhCb0MsQ0EwQnBDO0FBQ0E7QUFDQTs7QUFDQSxRQUFJSSxHQUFHLENBQUMzb0IsT0FBSixDQUFZcUksS0FBaEIsRUFBdUI7QUFDckJ3Z0IsaUJBQVcsQ0FBQ0YsR0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsUUFBSUEsR0FBRyxDQUFDM29CLE9BQUosQ0FBWXdJLFFBQWhCLEVBQTBCO0FBQ3hCc2dCLG9CQUFjLENBQUNILEdBQUQsQ0FBZDtBQUNELEtBbENtQyxDQW9DcEM7OztBQUNBQSxPQUFHLENBQUNqd0IsTUFBSixHQUFhNnZCLEtBQUssQ0FBQzd2QixNQUFuQjtBQUNBaXdCLE9BQUcsQ0FBQ04sS0FBSixHQUFZRSxLQUFLLENBQUNGLEtBQWxCO0FBQ0FNLE9BQUcsQ0FBQ2IsR0FBSixHQUFVUyxLQUFLLENBQUNULEdBQWhCLENBdkNvQyxDQXlDcEM7QUFDQTs7QUFDQTN0QixlQUFXLENBQUNpSyxPQUFaLENBQW9CLFVBQVUrRCxJQUFWLEVBQWdCO0FBQ2xDd2dCLFNBQUcsQ0FBQ3hnQixJQUFELENBQUgsR0FBWW9nQixLQUFLLENBQUNwZ0IsSUFBRCxDQUFqQjtBQUNELEtBRkQsRUEzQ29DLENBOENwQzs7QUFDQSxRQUFJOUgsSUFBSixFQUFVO0FBQ1Jzb0IsU0FBRyxDQUFDM29CLE9BQUosQ0FBWTJJLFVBQVosQ0FBdUJ0SSxJQUF2QixJQUErQnNvQixHQUEvQjtBQUNELEtBakRtQyxDQW1EcEM7QUFDQTtBQUNBOzs7QUFDQUEsT0FBRyxDQUFDdkIsWUFBSixHQUFtQm1CLEtBQUssQ0FBQ3ZvQixPQUF6QjtBQUNBMm9CLE9BQUcsQ0FBQ25CLGFBQUosR0FBb0JBLGFBQXBCO0FBQ0FtQixPQUFHLENBQUNmLGFBQUosR0FBb0JsdkIsTUFBTSxDQUFDLEVBQUQsRUFBS2l3QixHQUFHLENBQUMzb0IsT0FBVCxDQUExQixDQXhEb0MsQ0EwRHBDOztBQUNBeW9CLGVBQVcsQ0FBQ0QsT0FBRCxDQUFYLEdBQXVCRyxHQUF2QjtBQUNBLFdBQU9BLEdBQVA7QUFDRCxHQTdERDtBQThERDs7QUFFRCxTQUFTRSxXQUFULENBQXNCRSxJQUF0QixFQUE0QjtBQUMxQixNQUFJMWdCLEtBQUssR0FBRzBnQixJQUFJLENBQUMvb0IsT0FBTCxDQUFhcUksS0FBekI7O0FBQ0EsT0FBSyxJQUFJelIsR0FBVCxJQUFnQnlSLEtBQWhCLEVBQXVCO0FBQ3JCcUwsU0FBSyxDQUFDcVYsSUFBSSxDQUFDLzBCLFNBQU4sRUFBaUIsUUFBakIsRUFBMkI0QyxHQUEzQixDQUFMO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTa3lCLGNBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdCLE1BQUl2Z0IsUUFBUSxHQUFHdWdCLElBQUksQ0FBQy9vQixPQUFMLENBQWF3SSxRQUE1Qjs7QUFDQSxPQUFLLElBQUk1UixHQUFULElBQWdCNFIsUUFBaEIsRUFBMEI7QUFDeEJ1ZCxrQkFBYyxDQUFDZ0QsSUFBSSxDQUFDLzBCLFNBQU4sRUFBaUI0QyxHQUFqQixFQUFzQjRSLFFBQVEsQ0FBQzVSLEdBQUQsQ0FBOUIsQ0FBZDtBQUNEO0FBQ0Y7QUFFRDs7O0FBRUEsU0FBU295QixrQkFBVCxDQUE2Qi9MLEdBQTdCLEVBQWtDO0FBQ2hDO0FBQ0Y7QUFDQTtBQUNFOWlCLGFBQVcsQ0FBQ2lLLE9BQVosQ0FBb0IsVUFBVStELElBQVYsRUFBZ0I7QUFDbEM4VSxPQUFHLENBQUM5VSxJQUFELENBQUgsR0FBWSxVQUNWakgsRUFEVSxFQUVWK25CLFVBRlUsRUFHVjtBQUNBLFVBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNmLGVBQU8sS0FBS2pwQixPQUFMLENBQWFtSSxJQUFJLEdBQUcsR0FBcEIsRUFBeUJqSCxFQUF6QixDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQSxZQUFJekcsS0FBQSxJQUF5QzBOLElBQUksS0FBSyxXQUF0RCxFQUFtRTtBQUNqRVMsK0JBQXFCLENBQUMxSCxFQUFELENBQXJCO0FBQ0Q7O0FBQ0QsWUFBSWlILElBQUksS0FBSyxXQUFULElBQXdCOVQsYUFBYSxDQUFDNDBCLFVBQUQsQ0FBekMsRUFBdUQ7QUFDckRBLG9CQUFVLENBQUM1b0IsSUFBWCxHQUFrQjRvQixVQUFVLENBQUM1b0IsSUFBWCxJQUFtQmEsRUFBckM7QUFDQStuQixvQkFBVSxHQUFHLEtBQUtqcEIsT0FBTCxDQUFhcUosS0FBYixDQUFtQjNRLE1BQW5CLENBQTBCdXdCLFVBQTFCLENBQWI7QUFDRDs7QUFDRCxZQUFJOWdCLElBQUksS0FBSyxXQUFULElBQXdCLE9BQU84Z0IsVUFBUCxLQUFzQixVQUFsRCxFQUE4RDtBQUM1REEsb0JBQVUsR0FBRztBQUFFNXdCLGdCQUFJLEVBQUU0d0IsVUFBUjtBQUFvQnJuQixrQkFBTSxFQUFFcW5CO0FBQTVCLFdBQWI7QUFDRDs7QUFDRCxhQUFLanBCLE9BQUwsQ0FBYW1JLElBQUksR0FBRyxHQUFwQixFQUF5QmpILEVBQXpCLElBQStCK25CLFVBQS9CO0FBQ0EsZUFBT0EsVUFBUDtBQUNEO0FBQ0YsS0FyQkQ7QUFzQkQsR0F2QkQ7QUF3QkQ7QUFFRDs7O0FBSUEsU0FBU0MsZ0JBQVQsQ0FBMkJyckIsSUFBM0IsRUFBaUM7QUFDL0IsU0FBT0EsSUFBSSxLQUFLQSxJQUFJLENBQUNVLElBQUwsQ0FBVXlCLE9BQVYsQ0FBa0JLLElBQWxCLElBQTBCeEMsSUFBSSxDQUFDcUUsR0FBcEMsQ0FBWDtBQUNEOztBQUVELFNBQVNpbkIsT0FBVCxDQUFrQkMsT0FBbEIsRUFBMkIvb0IsSUFBM0IsRUFBaUM7QUFDL0IsTUFBSW5MLEtBQUssQ0FBQ0MsT0FBTixDQUFjaTBCLE9BQWQsQ0FBSixFQUE0QjtBQUMxQixXQUFPQSxPQUFPLENBQUM1eUIsT0FBUixDQUFnQjZKLElBQWhCLElBQXdCLENBQUMsQ0FBaEM7QUFDRCxHQUZELE1BRU8sSUFBSSxPQUFPK29CLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDdEMsV0FBT0EsT0FBTyxDQUFDdHpCLEtBQVIsQ0FBYyxHQUFkLEVBQW1CVSxPQUFuQixDQUEyQjZKLElBQTNCLElBQW1DLENBQUMsQ0FBM0M7QUFDRCxHQUZNLE1BRUEsSUFBSS9MLFFBQVEsQ0FBQzgwQixPQUFELENBQVosRUFBdUI7QUFDNUIsV0FBT0EsT0FBTyxDQUFDL3NCLElBQVIsQ0FBYWdFLElBQWIsQ0FBUDtBQUNEO0FBQ0Q7OztBQUNBLFNBQU8sS0FBUDtBQUNEOztBQUVELFNBQVNncEIsVUFBVCxDQUFxQkMsaUJBQXJCLEVBQXdDQyxNQUF4QyxFQUFnRDtBQUM5QyxNQUFJeHlCLEtBQUssR0FBR3V5QixpQkFBaUIsQ0FBQ3Z5QixLQUE5QjtBQUNBLE1BQUk4QyxJQUFJLEdBQUd5dkIsaUJBQWlCLENBQUN6dkIsSUFBN0I7QUFDQSxNQUFJNGlCLE1BQU0sR0FBRzZNLGlCQUFpQixDQUFDN00sTUFBL0I7O0FBQ0EsT0FBSyxJQUFJN2xCLEdBQVQsSUFBZ0JHLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUl5eUIsVUFBVSxHQUFHenlCLEtBQUssQ0FBQ0gsR0FBRCxDQUF0Qjs7QUFDQSxRQUFJNHlCLFVBQUosRUFBZ0I7QUFDZCxVQUFJbnBCLElBQUksR0FBRzZvQixnQkFBZ0IsQ0FBQ00sVUFBVSxDQUFDaG5CLGdCQUFaLENBQTNCOztBQUNBLFVBQUluQyxJQUFJLElBQUksQ0FBQ2twQixNQUFNLENBQUNscEIsSUFBRCxDQUFuQixFQUEyQjtBQUN6Qm9wQix1QkFBZSxDQUFDMXlCLEtBQUQsRUFBUUgsR0FBUixFQUFhaUQsSUFBYixFQUFtQjRpQixNQUFuQixDQUFmO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBU2dOLGVBQVQsQ0FDRTF5QixLQURGLEVBRUVILEdBRkYsRUFHRWlELElBSEYsRUFJRTZ2QixPQUpGLEVBS0U7QUFDQSxNQUFJQyxTQUFTLEdBQUc1eUIsS0FBSyxDQUFDSCxHQUFELENBQXJCOztBQUNBLE1BQUkreUIsU0FBUyxLQUFLLENBQUNELE9BQUQsSUFBWUMsU0FBUyxDQUFDem5CLEdBQVYsS0FBa0J3bkIsT0FBTyxDQUFDeG5CLEdBQTNDLENBQWIsRUFBOEQ7QUFDNUR5bkIsYUFBUyxDQUFDN21CLGlCQUFWLENBQTRCc1gsUUFBNUI7QUFDRDs7QUFDRHJqQixPQUFLLENBQUNILEdBQUQsQ0FBTCxHQUFhLElBQWI7QUFDQVIsUUFBTSxDQUFDeUQsSUFBRCxFQUFPakQsR0FBUCxDQUFOO0FBQ0Q7O0FBRUQsSUFBSWd6QixZQUFZLEdBQUcsQ0FBQ2oxQixNQUFELEVBQVNzSCxNQUFULEVBQWlCL0csS0FBakIsQ0FBbkI7QUFFQSxJQUFJMjBCLFNBQVMsR0FBRztBQUNkeHBCLE1BQUksRUFBRSxZQURRO0FBRWQyYSxVQUFRLEVBQUUsSUFGSTtBQUlkM1MsT0FBSyxFQUFFO0FBQ0x5aEIsV0FBTyxFQUFFRixZQURKO0FBRUxHLFdBQU8sRUFBRUgsWUFGSjtBQUdMampCLE9BQUcsRUFBRSxDQUFDaFMsTUFBRCxFQUFTb1gsTUFBVDtBQUhBLEdBSk87QUFVZGllLFNBQU8sRUFBRSxTQUFTQSxPQUFULEdBQW9CO0FBQzNCLFNBQUtqekIsS0FBTCxHQUFhNUQsTUFBTSxDQUFDeUMsTUFBUCxDQUFjLElBQWQsQ0FBYjtBQUNBLFNBQUtpRSxJQUFMLEdBQVksRUFBWjtBQUNELEdBYmE7QUFlZG93QixXQUFTLEVBQUUsU0FBU0EsU0FBVCxHQUFzQjtBQUMvQixTQUFLLElBQUlyekIsR0FBVCxJQUFnQixLQUFLRyxLQUFyQixFQUE0QjtBQUMxQjB5QixxQkFBZSxDQUFDLEtBQUsxeUIsS0FBTixFQUFhSCxHQUFiLEVBQWtCLEtBQUtpRCxJQUF2QixDQUFmO0FBQ0Q7QUFDRixHQW5CYTtBQXFCZHF3QixTQUFPLEVBQUUsU0FBU0EsT0FBVCxHQUFvQjtBQUMzQixRQUFJcFMsTUFBTSxHQUFHLElBQWI7QUFFQSxTQUFLdU8sTUFBTCxDQUFZLFNBQVosRUFBdUIsVUFBVTd4QixHQUFWLEVBQWU7QUFDcEM2MEIsZ0JBQVUsQ0FBQ3ZSLE1BQUQsRUFBUyxVQUFVelgsSUFBVixFQUFnQjtBQUFFLGVBQU84b0IsT0FBTyxDQUFDMzBCLEdBQUQsRUFBTTZMLElBQU4sQ0FBZDtBQUE0QixPQUF2RCxDQUFWO0FBQ0QsS0FGRDtBQUdBLFNBQUtnbUIsTUFBTCxDQUFZLFNBQVosRUFBdUIsVUFBVTd4QixHQUFWLEVBQWU7QUFDcEM2MEIsZ0JBQVUsQ0FBQ3ZSLE1BQUQsRUFBUyxVQUFVelgsSUFBVixFQUFnQjtBQUFFLGVBQU8sQ0FBQzhvQixPQUFPLENBQUMzMEIsR0FBRCxFQUFNNkwsSUFBTixDQUFmO0FBQTZCLE9BQXhELENBQVY7QUFDRCxLQUZEO0FBR0QsR0E5QmE7QUFnQ2QwTyxRQUFNLEVBQUUsU0FBU0EsTUFBVCxHQUFtQjtBQUN6QixRQUFJNEQsSUFBSSxHQUFHLEtBQUswQixNQUFMLENBQVkzSixPQUF2QjtBQUNBLFFBQUkzRyxLQUFLLEdBQUdnYixzQkFBc0IsQ0FBQ3BNLElBQUQsQ0FBbEM7QUFDQSxRQUFJblEsZ0JBQWdCLEdBQUd1QixLQUFLLElBQUlBLEtBQUssQ0FBQ3ZCLGdCQUF0Qzs7QUFDQSxRQUFJQSxnQkFBSixFQUFzQjtBQUNwQjtBQUNBLFVBQUluQyxJQUFJLEdBQUc2b0IsZ0JBQWdCLENBQUMxbUIsZ0JBQUQsQ0FBM0I7QUFDQSxVQUFJNGEsR0FBRyxHQUFHLElBQVY7QUFDQSxVQUFJME0sT0FBTyxHQUFHMU0sR0FBRyxDQUFDME0sT0FBbEI7QUFDQSxVQUFJQyxPQUFPLEdBQUczTSxHQUFHLENBQUMyTSxPQUFsQjs7QUFDQSxXQUNFO0FBQ0NELGFBQU8sS0FBSyxDQUFDenBCLElBQUQsSUFBUyxDQUFDOG9CLE9BQU8sQ0FBQ1csT0FBRCxFQUFVenBCLElBQVYsQ0FBdEIsQ0FBUixJQUNBO0FBQ0MwcEIsYUFBTyxJQUFJMXBCLElBQVgsSUFBbUI4b0IsT0FBTyxDQUFDWSxPQUFELEVBQVUxcEIsSUFBVixDQUo3QixFQUtFO0FBQ0EsZUFBTzBELEtBQVA7QUFDRDs7QUFFRCxVQUFJb21CLEtBQUssR0FBRyxJQUFaO0FBQ0EsVUFBSXB6QixLQUFLLEdBQUdvekIsS0FBSyxDQUFDcHpCLEtBQWxCO0FBQ0EsVUFBSThDLElBQUksR0FBR3N3QixLQUFLLENBQUN0d0IsSUFBakI7QUFDQSxVQUFJakQsR0FBRyxHQUFHbU4sS0FBSyxDQUFDbk4sR0FBTixJQUFhLElBQWIsQ0FDUjtBQUNBO0FBRlEsUUFHTjRMLGdCQUFnQixDQUFDakUsSUFBakIsQ0FBc0IwQixHQUF0QixJQUE2QnVDLGdCQUFnQixDQUFDTixHQUFqQixHQUF3QixPQUFRTSxnQkFBZ0IsQ0FBQ04sR0FBakQsR0FBeUQsRUFBdEYsQ0FITSxHQUlONkIsS0FBSyxDQUFDbk4sR0FKVjs7QUFLQSxVQUFJRyxLQUFLLENBQUNILEdBQUQsQ0FBVCxFQUFnQjtBQUNkbU4sYUFBSyxDQUFDakIsaUJBQU4sR0FBMEIvTCxLQUFLLENBQUNILEdBQUQsQ0FBTCxDQUFXa00saUJBQXJDLENBRGMsQ0FFZDs7QUFDQTFNLGNBQU0sQ0FBQ3lELElBQUQsRUFBT2pELEdBQVAsQ0FBTjtBQUNBaUQsWUFBSSxDQUFDaUgsSUFBTCxDQUFVbEssR0FBVjtBQUNELE9BTEQsTUFLTztBQUNMRyxhQUFLLENBQUNILEdBQUQsQ0FBTCxHQUFhbU4sS0FBYjtBQUNBbEssWUFBSSxDQUFDaUgsSUFBTCxDQUFVbEssR0FBVixFQUZLLENBR0w7O0FBQ0EsWUFBSSxLQUFLK1AsR0FBTCxJQUFZOU0sSUFBSSxDQUFDN0QsTUFBTCxHQUFjbzBCLFFBQVEsQ0FBQyxLQUFLempCLEdBQU4sQ0FBdEMsRUFBa0Q7QUFDaEQ4aUIseUJBQWUsQ0FBQzF5QixLQUFELEVBQVE4QyxJQUFJLENBQUMsQ0FBRCxDQUFaLEVBQWlCQSxJQUFqQixFQUF1QixLQUFLNGlCLE1BQTVCLENBQWY7QUFDRDtBQUNGOztBQUVEMVksV0FBSyxDQUFDNUIsSUFBTixDQUFXbVgsU0FBWCxHQUF1QixJQUF2QjtBQUNEOztBQUNELFdBQU92VixLQUFLLElBQUs0TyxJQUFJLElBQUlBLElBQUksQ0FBQyxDQUFELENBQTdCO0FBQ0Q7QUE1RWEsQ0FBaEI7QUErRUEsSUFBSTBYLGlCQUFpQixHQUFHO0FBQ3RCUixXQUFTLEVBQUVBO0FBRFcsQ0FBeEI7QUFJQTs7QUFFQSxTQUFTUyxhQUFULENBQXdCck4sR0FBeEIsRUFBNkI7QUFDM0I7QUFDQSxNQUFJc04sU0FBUyxHQUFHLEVBQWhCOztBQUNBQSxXQUFTLENBQUN6c0IsR0FBVixHQUFnQixZQUFZO0FBQUUsV0FBT3pELE1BQVA7QUFBZ0IsR0FBOUM7O0FBQ0EsTUFBSUksSUFBSixFQUEyQztBQUN6Qzh2QixhQUFTLENBQUN6ckIsR0FBVixHQUFnQixZQUFZO0FBQzFCSSxVQUFJLENBQ0Ysc0VBREUsQ0FBSjtBQUdELEtBSkQ7QUFLRDs7QUFDRC9MLFFBQU0sQ0FBQzBJLGNBQVAsQ0FBc0JvaEIsR0FBdEIsRUFBMkIsUUFBM0IsRUFBcUNzTixTQUFyQyxFQVgyQixDQWEzQjtBQUNBO0FBQ0E7O0FBQ0F0TixLQUFHLENBQUN1TixJQUFKLEdBQVc7QUFDVHRyQixRQUFJLEVBQUVBLElBREc7QUFFVHhHLFVBQU0sRUFBRUEsTUFGQztBQUdUMFEsZ0JBQVksRUFBRUEsWUFITDtBQUlUcWhCLGtCQUFjLEVBQUVobEI7QUFKUCxHQUFYO0FBT0F3WCxLQUFHLENBQUNuZSxHQUFKLEdBQVVBLEdBQVY7QUFDQW1lLEtBQUcsQ0FBQ3lOLE1BQUosR0FBYTlqQixHQUFiO0FBQ0FxVyxLQUFHLENBQUNqUCxRQUFKLEdBQWVBLFFBQWYsQ0F6QjJCLENBMkIzQjs7QUFDQWlQLEtBQUcsQ0FBQzBOLFVBQUosR0FBaUIsVUFBVTcyQixHQUFWLEVBQWU7QUFDOUI2UixXQUFPLENBQUM3UixHQUFELENBQVA7QUFDQSxXQUFPQSxHQUFQO0FBQ0QsR0FIRDs7QUFLQW1wQixLQUFHLENBQUNqZCxPQUFKLEdBQWM3TSxNQUFNLENBQUN5QyxNQUFQLENBQWMsSUFBZCxDQUFkO0FBQ0F1RSxhQUFXLENBQUNpSyxPQUFaLENBQW9CLFVBQVUrRCxJQUFWLEVBQWdCO0FBQ2xDOFUsT0FBRyxDQUFDamQsT0FBSixDQUFZbUksSUFBSSxHQUFHLEdBQW5CLElBQTBCaFYsTUFBTSxDQUFDeUMsTUFBUCxDQUFjLElBQWQsQ0FBMUI7QUFDRCxHQUZELEVBbEMyQixDQXNDM0I7QUFDQTs7QUFDQXFuQixLQUFHLENBQUNqZCxPQUFKLENBQVlxSixLQUFaLEdBQW9CNFQsR0FBcEI7QUFFQXZrQixRQUFNLENBQUN1a0IsR0FBRyxDQUFDamQsT0FBSixDQUFZMkksVUFBYixFQUF5QjBoQixpQkFBekIsQ0FBTjtBQUVBeEMsU0FBTyxDQUFDNUssR0FBRCxDQUFQO0FBQ0FtTCxhQUFXLENBQUNuTCxHQUFELENBQVg7QUFDQXFMLFlBQVUsQ0FBQ3JMLEdBQUQsQ0FBVjtBQUNBK0wsb0JBQWtCLENBQUMvTCxHQUFELENBQWxCO0FBQ0Q7O0FBRURxTixhQUFhLENBQUNyTixHQUFELENBQWI7QUFFQTlwQixNQUFNLENBQUMwSSxjQUFQLENBQXNCb2hCLEdBQUcsQ0FBQ2pwQixTQUExQixFQUFxQyxXQUFyQyxFQUFrRDtBQUNoRDhKLEtBQUcsRUFBRUc7QUFEMkMsQ0FBbEQ7QUFJQTlLLE1BQU0sQ0FBQzBJLGNBQVAsQ0FBc0JvaEIsR0FBRyxDQUFDanBCLFNBQTFCLEVBQXFDLGFBQXJDLEVBQW9EO0FBQ2xEOEosS0FBRyxFQUFFLFNBQVNBLEdBQVQsR0FBZ0I7QUFDbkI7QUFDQSxXQUFPLEtBQUttZSxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZMk8sVUFBbEM7QUFDRDtBQUppRCxDQUFwRCxFLENBT0E7O0FBQ0F6M0IsTUFBTSxDQUFDMEksY0FBUCxDQUFzQm9oQixHQUF0QixFQUEyQix5QkFBM0IsRUFBc0Q7QUFDcERycEIsT0FBSyxFQUFFaWtCO0FBRDZDLENBQXREO0FBSUFvRixHQUFHLENBQUM0TixPQUFKLEdBQWMsUUFBZDtBQUVBO0FBRUE7QUFDQTs7QUFDQSxJQUFJNXZCLGNBQWMsR0FBR3pGLE9BQU8sQ0FBQyxhQUFELENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFJczFCLFdBQVcsR0FBR3QxQixPQUFPLENBQUMsdUNBQUQsQ0FBekI7O0FBQ0EsSUFBSTZGLFdBQVcsR0FBRyxVQUFVNkcsR0FBVixFQUFlaUcsSUFBZixFQUFxQjRpQixJQUFyQixFQUEyQjtBQUMzQyxTQUNHQSxJQUFJLEtBQUssT0FBVCxJQUFvQkQsV0FBVyxDQUFDNW9CLEdBQUQsQ0FBaEMsSUFBMENpRyxJQUFJLEtBQUssUUFBbkQsSUFDQzRpQixJQUFJLEtBQUssVUFBVCxJQUF1QjdvQixHQUFHLEtBQUssUUFEaEMsSUFFQzZvQixJQUFJLEtBQUssU0FBVCxJQUFzQjdvQixHQUFHLEtBQUssT0FGL0IsSUFHQzZvQixJQUFJLEtBQUssT0FBVCxJQUFvQjdvQixHQUFHLEtBQUssT0FKL0I7QUFNRCxDQVBEOztBQVNBLElBQUk4b0IsZ0JBQWdCLEdBQUd4MUIsT0FBTyxDQUFDLHNDQUFELENBQTlCO0FBRUEsSUFBSXkxQiwyQkFBMkIsR0FBR3oxQixPQUFPLENBQUMsb0NBQUQsQ0FBekM7O0FBRUEsSUFBSTAxQixzQkFBc0IsR0FBRyxVQUFVdDBCLEdBQVYsRUFBZWhELEtBQWYsRUFBc0I7QUFDakQsU0FBT3UzQixnQkFBZ0IsQ0FBQ3YzQixLQUFELENBQWhCLElBQTJCQSxLQUFLLEtBQUssT0FBckMsR0FDSCxPQURHLENBRUw7QUFGSyxJQUdIZ0QsR0FBRyxLQUFLLGlCQUFSLElBQTZCcTBCLDJCQUEyQixDQUFDcjNCLEtBQUQsQ0FBeEQsR0FDRUEsS0FERixHQUVFLE1BTE47QUFNRCxDQVBEOztBQVNBLElBQUl3M0IsYUFBYSxHQUFHNTFCLE9BQU8sQ0FDekIsK0VBQ0EscUVBREEsR0FFQSxrRkFGQSxHQUdBLDRFQUhBLEdBSUEsZ0VBSkEsR0FLQSxpQ0FOeUIsQ0FBM0I7QUFTQSxJQUFJNjFCLE9BQU8sR0FBRyw4QkFBZDs7QUFFQSxJQUFJQyxPQUFPLEdBQUcsVUFBVWpyQixJQUFWLEVBQWdCO0FBQzVCLFNBQU9BLElBQUksQ0FBQzVJLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLElBQTBCNEksSUFBSSxDQUFDak0sS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFkLE1BQXFCLE9BQXREO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJbTNCLFlBQVksR0FBRyxVQUFVbHJCLElBQVYsRUFBZ0I7QUFDakMsU0FBT2lyQixPQUFPLENBQUNqckIsSUFBRCxDQUFQLEdBQWdCQSxJQUFJLENBQUNqTSxLQUFMLENBQVcsQ0FBWCxFQUFjaU0sSUFBSSxDQUFDckssTUFBbkIsQ0FBaEIsR0FBNkMsRUFBcEQ7QUFDRCxDQUZEOztBQUlBLElBQUltMUIsZ0JBQWdCLEdBQUcsVUFBVTMyQixHQUFWLEVBQWU7QUFDcEMsU0FBT0EsR0FBRyxJQUFJLElBQVAsSUFBZUEsR0FBRyxLQUFLLEtBQTlCO0FBQ0QsQ0FGRDtBQUlBOzs7QUFFQSxTQUFTZzNCLGdCQUFULENBQTJCem5CLEtBQTNCLEVBQWtDO0FBQ2hDLE1BQUk1QixJQUFJLEdBQUc0QixLQUFLLENBQUM1QixJQUFqQjtBQUNBLE1BQUlzcEIsVUFBVSxHQUFHMW5CLEtBQWpCO0FBQ0EsTUFBSTJuQixTQUFTLEdBQUczbkIsS0FBaEI7O0FBQ0EsU0FBT3ZRLEtBQUssQ0FBQ2s0QixTQUFTLENBQUM1b0IsaUJBQVgsQ0FBWixFQUEyQztBQUN6QzRvQixhQUFTLEdBQUdBLFNBQVMsQ0FBQzVvQixpQkFBVixDQUE0QjJaLE1BQXhDOztBQUNBLFFBQUlpUCxTQUFTLElBQUlBLFNBQVMsQ0FBQ3ZwQixJQUEzQixFQUFpQztBQUMvQkEsVUFBSSxHQUFHd3BCLGNBQWMsQ0FBQ0QsU0FBUyxDQUFDdnBCLElBQVgsRUFBaUJBLElBQWpCLENBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPM08sS0FBSyxDQUFDaTRCLFVBQVUsR0FBR0EsVUFBVSxDQUFDMW9CLE1BQXpCLENBQVosRUFBOEM7QUFDNUMsUUFBSTBvQixVQUFVLElBQUlBLFVBQVUsQ0FBQ3RwQixJQUE3QixFQUFtQztBQUNqQ0EsVUFBSSxHQUFHd3BCLGNBQWMsQ0FBQ3hwQixJQUFELEVBQU9zcEIsVUFBVSxDQUFDdHBCLElBQWxCLENBQXJCO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPeXBCLFdBQVcsQ0FBQ3pwQixJQUFJLENBQUMwcEIsV0FBTixFQUFtQjFwQixJQUFJLENBQUNvYSxLQUF4QixDQUFsQjtBQUNEOztBQUVELFNBQVNvUCxjQUFULENBQXlCbG9CLEtBQXpCLEVBQWdDVixNQUFoQyxFQUF3QztBQUN0QyxTQUFPO0FBQ0w4b0IsZUFBVyxFQUFFaGtCLE1BQU0sQ0FBQ3BFLEtBQUssQ0FBQ29vQixXQUFQLEVBQW9COW9CLE1BQU0sQ0FBQzhvQixXQUEzQixDQURkO0FBRUx0UCxTQUFLLEVBQUUvb0IsS0FBSyxDQUFDaVEsS0FBSyxDQUFDOFksS0FBUCxDQUFMLEdBQ0gsQ0FBQzlZLEtBQUssQ0FBQzhZLEtBQVAsRUFBY3haLE1BQU0sQ0FBQ3daLEtBQXJCLENBREcsR0FFSHhaLE1BQU0sQ0FBQ3daO0FBSk4sR0FBUDtBQU1EOztBQUVELFNBQVNxUCxXQUFULENBQ0VDLFdBREYsRUFFRUMsWUFGRixFQUdFO0FBQ0EsTUFBSXQ0QixLQUFLLENBQUNxNEIsV0FBRCxDQUFMLElBQXNCcjRCLEtBQUssQ0FBQ3M0QixZQUFELENBQS9CLEVBQStDO0FBQzdDLFdBQU9qa0IsTUFBTSxDQUFDZ2tCLFdBQUQsRUFBY0UsY0FBYyxDQUFDRCxZQUFELENBQTVCLENBQWI7QUFDRDtBQUNEOzs7QUFDQSxTQUFPLEVBQVA7QUFDRDs7QUFFRCxTQUFTamtCLE1BQVQsQ0FBaUI5UCxDQUFqQixFQUFvQmlCLENBQXBCLEVBQXVCO0FBQ3JCLFNBQU9qQixDQUFDLEdBQUdpQixDQUFDLEdBQUlqQixDQUFDLEdBQUcsR0FBSixHQUFVaUIsQ0FBZCxHQUFtQmpCLENBQXZCLEdBQTRCaUIsQ0FBQyxJQUFJLEVBQXpDO0FBQ0Q7O0FBRUQsU0FBUyt5QixjQUFULENBQXlCbjRCLEtBQXpCLEVBQWdDO0FBQzlCLE1BQUlzQixLQUFLLENBQUNDLE9BQU4sQ0FBY3ZCLEtBQWQsQ0FBSixFQUEwQjtBQUN4QixXQUFPbzRCLGNBQWMsQ0FBQ3A0QixLQUFELENBQXJCO0FBQ0Q7O0FBQ0QsTUFBSUMsUUFBUSxDQUFDRCxLQUFELENBQVosRUFBcUI7QUFDbkIsV0FBT3E0QixlQUFlLENBQUNyNEIsS0FBRCxDQUF0QjtBQUNEOztBQUNELE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixXQUFPQSxLQUFQO0FBQ0Q7QUFDRDs7O0FBQ0EsU0FBTyxFQUFQO0FBQ0Q7O0FBRUQsU0FBU280QixjQUFULENBQXlCcDRCLEtBQXpCLEVBQWdDO0FBQzlCLE1BQUlrRixHQUFHLEdBQUcsRUFBVjtBQUNBLE1BQUlvekIsV0FBSjs7QUFDQSxPQUFLLElBQUluMkIsQ0FBQyxHQUFHLENBQVIsRUFBV2lDLENBQUMsR0FBR3BFLEtBQUssQ0FBQ29DLE1BQTFCLEVBQWtDRCxDQUFDLEdBQUdpQyxDQUF0QyxFQUF5Q2pDLENBQUMsRUFBMUMsRUFBOEM7QUFDNUMsUUFBSXZDLEtBQUssQ0FBQzA0QixXQUFXLEdBQUdILGNBQWMsQ0FBQ240QixLQUFLLENBQUNtQyxDQUFELENBQU4sQ0FBN0IsQ0FBTCxJQUFpRG0yQixXQUFXLEtBQUssRUFBckUsRUFBeUU7QUFDdkUsVUFBSXB6QixHQUFKLEVBQVM7QUFBRUEsV0FBRyxJQUFJLEdBQVA7QUFBYTs7QUFDeEJBLFNBQUcsSUFBSW96QixXQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPcHpCLEdBQVA7QUFDRDs7QUFFRCxTQUFTbXpCLGVBQVQsQ0FBMEJyNEIsS0FBMUIsRUFBaUM7QUFDL0IsTUFBSWtGLEdBQUcsR0FBRyxFQUFWOztBQUNBLE9BQUssSUFBSWxDLEdBQVQsSUFBZ0JoRCxLQUFoQixFQUF1QjtBQUNyQixRQUFJQSxLQUFLLENBQUNnRCxHQUFELENBQVQsRUFBZ0I7QUFDZCxVQUFJa0MsR0FBSixFQUFTO0FBQUVBLFdBQUcsSUFBSSxHQUFQO0FBQWE7O0FBQ3hCQSxTQUFHLElBQUlsQyxHQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPa0MsR0FBUDtBQUNEO0FBRUQ7OztBQUVBLElBQUlxekIsWUFBWSxHQUFHO0FBQ2pCQyxLQUFHLEVBQUUsNEJBRFk7QUFFakJDLE1BQUksRUFBRTtBQUZXLENBQW5CO0FBS0EsSUFBSUMsU0FBUyxHQUFHOTJCLE9BQU8sQ0FDckIsK0NBQ0EsMkVBREEsR0FFQSxvRUFGQSxHQUdBLHdFQUhBLEdBSUEsNkVBSkEsR0FLQSwyREFMQSxHQU1BLGtEQU5BLEdBT0EseUVBUEEsR0FRQSxrQ0FSQSxHQVNBLHVDQVRBLEdBVUEseURBWHFCLENBQXZCLEMsQ0FjQTtBQUNBOztBQUNBLElBQUkrMkIsS0FBSyxHQUFHLzJCLE9BQU8sQ0FDakIsMkVBQ0EsMEVBREEsR0FFQSxrRUFIaUIsRUFJakIsSUFKaUIsQ0FBbkI7O0FBT0EsSUFBSXdGLGFBQWEsR0FBRyxVQUFVa0gsR0FBVixFQUFlO0FBQ2pDLFNBQU9vcUIsU0FBUyxDQUFDcHFCLEdBQUQsQ0FBVCxJQUFrQnFxQixLQUFLLENBQUNycUIsR0FBRCxDQUE5QjtBQUNELENBRkQ7O0FBSUEsU0FBUy9HLGVBQVQsQ0FBMEIrRyxHQUExQixFQUErQjtBQUM3QixNQUFJcXFCLEtBQUssQ0FBQ3JxQixHQUFELENBQVQsRUFBZ0I7QUFDZCxXQUFPLEtBQVA7QUFDRCxHQUg0QixDQUk3QjtBQUNBOzs7QUFDQSxNQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUNsQixXQUFPLE1BQVA7QUFDRDtBQUNGOztBQUVELElBQUlzcUIsbUJBQW1CLEdBQUdyNUIsTUFBTSxDQUFDeUMsTUFBUCxDQUFjLElBQWQsQ0FBMUI7O0FBQ0EsU0FBU3NGLGdCQUFULENBQTJCZ0gsR0FBM0IsRUFBZ0M7QUFDOUI7QUFDQSxNQUFJLENBQUMxRixTQUFMLEVBQWdCO0FBQ2QsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBSXhCLGFBQWEsQ0FBQ2tILEdBQUQsQ0FBakIsRUFBd0I7QUFDdEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0RBLEtBQUcsR0FBR0EsR0FBRyxDQUFDak0sV0FBSixFQUFOO0FBQ0E7O0FBQ0EsTUFBSXUyQixtQkFBbUIsQ0FBQ3RxQixHQUFELENBQW5CLElBQTRCLElBQWhDLEVBQXNDO0FBQ3BDLFdBQU9zcUIsbUJBQW1CLENBQUN0cUIsR0FBRCxDQUExQjtBQUNEOztBQUNELE1BQUk0RSxFQUFFLEdBQUc4RyxRQUFRLENBQUM4SyxhQUFULENBQXVCeFcsR0FBdkIsQ0FBVDs7QUFDQSxNQUFJQSxHQUFHLENBQUMxTCxPQUFKLENBQVksR0FBWixJQUFtQixDQUFDLENBQXhCLEVBQTJCO0FBQ3pCO0FBQ0EsV0FBUWcyQixtQkFBbUIsQ0FBQ3RxQixHQUFELENBQW5CLEdBQ040RSxFQUFFLENBQUMxRyxXQUFILEtBQW1CM0QsTUFBTSxDQUFDZ3dCLGtCQUExQixJQUNBM2xCLEVBQUUsQ0FBQzFHLFdBQUgsS0FBbUIzRCxNQUFNLENBQUNpd0IsV0FGNUI7QUFJRCxHQU5ELE1BTU87QUFDTCxXQUFRRixtQkFBbUIsQ0FBQ3RxQixHQUFELENBQW5CLEdBQTJCLHFCQUFxQjdGLElBQXJCLENBQTBCeUssRUFBRSxDQUFDN1MsUUFBSCxFQUExQixDQUFuQztBQUNEO0FBQ0Y7O0FBRUQsSUFBSTA0QixlQUFlLEdBQUduM0IsT0FBTyxDQUFDLDJDQUFELENBQTdCO0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUNBLFNBQVNvM0IsS0FBVCxDQUFnQjlsQixFQUFoQixFQUFvQjtBQUNsQixNQUFJLE9BQU9BLEVBQVAsS0FBYyxRQUFsQixFQUE0QjtBQUMxQixRQUFJK2xCLFFBQVEsR0FBR2pmLFFBQVEsQ0FBQ2tmLGFBQVQsQ0FBdUJobUIsRUFBdkIsQ0FBZjs7QUFDQSxRQUFJLENBQUMrbEIsUUFBTCxFQUFlO0FBQ2JweUIsV0FBQSxJQUF5Q3lFLElBQUksQ0FDM0MsMEJBQTBCNEgsRUFEaUIsQ0FBN0M7QUFHQSxhQUFPOEcsUUFBUSxDQUFDOEssYUFBVCxDQUF1QixLQUF2QixDQUFQO0FBQ0Q7O0FBQ0QsV0FBT21VLFFBQVA7QUFDRCxHQVRELE1BU087QUFDTCxXQUFPL2xCLEVBQVA7QUFDRDtBQUNGO0FBRUQ7OztBQUVBLFNBQVNpbUIsZUFBVCxDQUEwQkMsT0FBMUIsRUFBbUNqcEIsS0FBbkMsRUFBMEM7QUFDeEMsTUFBSXpCLEdBQUcsR0FBR3NMLFFBQVEsQ0FBQzhLLGFBQVQsQ0FBdUJzVSxPQUF2QixDQUFWOztBQUNBLE1BQUlBLE9BQU8sS0FBSyxRQUFoQixFQUEwQjtBQUN4QixXQUFPMXFCLEdBQVA7QUFDRCxHQUp1QyxDQUt4Qzs7O0FBQ0EsTUFBSXlCLEtBQUssQ0FBQzVCLElBQU4sSUFBYzRCLEtBQUssQ0FBQzVCLElBQU4sQ0FBV2tQLEtBQXpCLElBQWtDdE4sS0FBSyxDQUFDNUIsSUFBTixDQUFXa1AsS0FBWCxDQUFpQjRiLFFBQWpCLEtBQThCMTVCLFNBQXBFLEVBQStFO0FBQzdFK08sT0FBRyxDQUFDNHFCLFlBQUosQ0FBaUIsVUFBakIsRUFBNkIsVUFBN0I7QUFDRDs7QUFDRCxTQUFPNXFCLEdBQVA7QUFDRDs7QUFFRCxTQUFTNnFCLGVBQVQsQ0FBMEJDLFNBQTFCLEVBQXFDSixPQUFyQyxFQUE4QztBQUM1QyxTQUFPcGYsUUFBUSxDQUFDdWYsZUFBVCxDQUF5QmhCLFlBQVksQ0FBQ2lCLFNBQUQsQ0FBckMsRUFBa0RKLE9BQWxELENBQVA7QUFDRDs7QUFFRCxTQUFTbmYsY0FBVCxDQUF5QnhMLElBQXpCLEVBQStCO0FBQzdCLFNBQU91TCxRQUFRLENBQUNDLGNBQVQsQ0FBd0J4TCxJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsU0FBU2dyQixhQUFULENBQXdCaHJCLElBQXhCLEVBQThCO0FBQzVCLFNBQU91TCxRQUFRLENBQUN5ZixhQUFULENBQXVCaHJCLElBQXZCLENBQVA7QUFDRDs7QUFFRCxTQUFTaXJCLFlBQVQsQ0FBdUI3QixVQUF2QixFQUFtQzhCLE9BQW5DLEVBQTRDQyxhQUE1QyxFQUEyRDtBQUN6RC9CLFlBQVUsQ0FBQzZCLFlBQVgsQ0FBd0JDLE9BQXhCLEVBQWlDQyxhQUFqQztBQUNEOztBQUVELFNBQVNDLFdBQVQsQ0FBc0I3cEIsSUFBdEIsRUFBNEJILEtBQTVCLEVBQW1DO0FBQ2pDRyxNQUFJLENBQUM2cEIsV0FBTCxDQUFpQmhxQixLQUFqQjtBQUNEOztBQUVELFNBQVNpcUIsV0FBVCxDQUFzQjlwQixJQUF0QixFQUE0QkgsS0FBNUIsRUFBbUM7QUFDakNHLE1BQUksQ0FBQzhwQixXQUFMLENBQWlCanFCLEtBQWpCO0FBQ0Q7O0FBRUQsU0FBU2dvQixVQUFULENBQXFCN25CLElBQXJCLEVBQTJCO0FBQ3pCLFNBQU9BLElBQUksQ0FBQzZuQixVQUFaO0FBQ0Q7O0FBRUQsU0FBU2tDLFdBQVQsQ0FBc0IvcEIsSUFBdEIsRUFBNEI7QUFDMUIsU0FBT0EsSUFBSSxDQUFDK3BCLFdBQVo7QUFDRDs7QUFFRCxTQUFTWCxPQUFULENBQWtCcHBCLElBQWxCLEVBQXdCO0FBQ3RCLFNBQU9BLElBQUksQ0FBQ29wQixPQUFaO0FBQ0Q7O0FBRUQsU0FBU1ksY0FBVCxDQUF5QmhxQixJQUF6QixFQUErQnZCLElBQS9CLEVBQXFDO0FBQ25DdUIsTUFBSSxDQUFDaXFCLFdBQUwsR0FBbUJ4ckIsSUFBbkI7QUFDRDs7QUFFRCxTQUFTeXJCLGFBQVQsQ0FBd0JscUIsSUFBeEIsRUFBOEJtcUIsT0FBOUIsRUFBdUM7QUFDckNucUIsTUFBSSxDQUFDc3BCLFlBQUwsQ0FBa0JhLE9BQWxCLEVBQTJCLEVBQTNCO0FBQ0Q7O0FBRUQsSUFBSUMsT0FBTyxHQUFHLGFBQWE3NkIsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDdkNzbEIsZUFBYSxFQUFFcVUsZUFEd0I7QUFFdkNJLGlCQUFlLEVBQUVBLGVBRnNCO0FBR3ZDdGYsZ0JBQWMsRUFBRUEsY0FIdUI7QUFJdkN3ZixlQUFhLEVBQUVBLGFBSndCO0FBS3ZDQyxjQUFZLEVBQUVBLFlBTHlCO0FBTXZDRyxhQUFXLEVBQUVBLFdBTjBCO0FBT3ZDQyxhQUFXLEVBQUVBLFdBUDBCO0FBUXZDakMsWUFBVSxFQUFFQSxVQVIyQjtBQVN2Q2tDLGFBQVcsRUFBRUEsV0FUMEI7QUFVdkNYLFNBQU8sRUFBRUEsT0FWOEI7QUFXdkNZLGdCQUFjLEVBQUVBLGNBWHVCO0FBWXZDRSxlQUFhLEVBQUVBO0FBWndCLENBQWQsQ0FBM0I7QUFlQTs7QUFFQSxJQUFJMVEsR0FBRyxHQUFHO0FBQ1J4bkIsUUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FBaUJ5QixDQUFqQixFQUFvQjBNLEtBQXBCLEVBQTJCO0FBQ2pDa3FCLGVBQVcsQ0FBQ2xxQixLQUFELENBQVg7QUFDRCxHQUhPO0FBSVJuQyxRQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFpQmdZLFFBQWpCLEVBQTJCN1YsS0FBM0IsRUFBa0M7QUFDeEMsUUFBSTZWLFFBQVEsQ0FBQ3pYLElBQVQsQ0FBY2liLEdBQWQsS0FBc0JyWixLQUFLLENBQUM1QixJQUFOLENBQVdpYixHQUFyQyxFQUEwQztBQUN4QzZRLGlCQUFXLENBQUNyVSxRQUFELEVBQVcsSUFBWCxDQUFYO0FBQ0FxVSxpQkFBVyxDQUFDbHFCLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FUTztBQVVSb1csU0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBa0JwVyxLQUFsQixFQUF5QjtBQUNoQ2txQixlQUFXLENBQUNscUIsS0FBRCxFQUFRLElBQVIsQ0FBWDtBQUNEO0FBWk8sQ0FBVjs7QUFlQSxTQUFTa3FCLFdBQVQsQ0FBc0JscUIsS0FBdEIsRUFBNkJtcUIsU0FBN0IsRUFBd0M7QUFDdEMsTUFBSXQzQixHQUFHLEdBQUdtTixLQUFLLENBQUM1QixJQUFOLENBQVdpYixHQUFyQjs7QUFDQSxNQUFJLENBQUM1cEIsS0FBSyxDQUFDb0QsR0FBRCxDQUFWLEVBQWlCO0FBQUU7QUFBUTs7QUFFM0IsTUFBSStJLEVBQUUsR0FBR29FLEtBQUssQ0FBQ3hCLE9BQWY7QUFDQSxNQUFJNmEsR0FBRyxHQUFHclosS0FBSyxDQUFDakIsaUJBQU4sSUFBMkJpQixLQUFLLENBQUN6QixHQUEzQztBQUNBLE1BQUk2ckIsSUFBSSxHQUFHeHVCLEVBQUUsQ0FBQ3lnQixLQUFkOztBQUNBLE1BQUk4TixTQUFKLEVBQWU7QUFDYixRQUFJaDVCLEtBQUssQ0FBQ0MsT0FBTixDQUFjZzVCLElBQUksQ0FBQ3YzQixHQUFELENBQWxCLENBQUosRUFBOEI7QUFDNUJSLFlBQU0sQ0FBQyszQixJQUFJLENBQUN2M0IsR0FBRCxDQUFMLEVBQVl3bUIsR0FBWixDQUFOO0FBQ0QsS0FGRCxNQUVPLElBQUkrUSxJQUFJLENBQUN2M0IsR0FBRCxDQUFKLEtBQWN3bUIsR0FBbEIsRUFBdUI7QUFDNUIrUSxVQUFJLENBQUN2M0IsR0FBRCxDQUFKLEdBQVlyRCxTQUFaO0FBQ0Q7QUFDRixHQU5ELE1BTU87QUFDTCxRQUFJd1EsS0FBSyxDQUFDNUIsSUFBTixDQUFXaXNCLFFBQWYsRUFBeUI7QUFDdkIsVUFBSSxDQUFDbDVCLEtBQUssQ0FBQ0MsT0FBTixDQUFjZzVCLElBQUksQ0FBQ3YzQixHQUFELENBQWxCLENBQUwsRUFBK0I7QUFDN0J1M0IsWUFBSSxDQUFDdjNCLEdBQUQsQ0FBSixHQUFZLENBQUN3bUIsR0FBRCxDQUFaO0FBQ0QsT0FGRCxNQUVPLElBQUkrUSxJQUFJLENBQUN2M0IsR0FBRCxDQUFKLENBQVVKLE9BQVYsQ0FBa0I0bUIsR0FBbEIsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDckM7QUFDQStRLFlBQUksQ0FBQ3YzQixHQUFELENBQUosQ0FBVWtLLElBQVYsQ0FBZXNjLEdBQWY7QUFDRDtBQUNGLEtBUEQsTUFPTztBQUNMK1EsVUFBSSxDQUFDdjNCLEdBQUQsQ0FBSixHQUFZd21CLEdBQVo7QUFDRDtBQUNGO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFJaVIsU0FBUyxHQUFHLElBQUlwc0IsS0FBSixDQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLENBQWhCO0FBRUEsSUFBSThGLEtBQUssR0FBRyxDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLFFBQXZCLEVBQWlDLFFBQWpDLEVBQTJDLFNBQTNDLENBQVo7O0FBRUEsU0FBU3VtQixTQUFULENBQW9CdjJCLENBQXBCLEVBQXVCaUIsQ0FBdkIsRUFBMEI7QUFDeEIsU0FDRWpCLENBQUMsQ0FBQ25CLEdBQUYsS0FBVW9DLENBQUMsQ0FBQ3BDLEdBQVosS0FFSW1CLENBQUMsQ0FBQ21LLEdBQUYsS0FBVWxKLENBQUMsQ0FBQ2tKLEdBQVosSUFDQW5LLENBQUMsQ0FBQ29MLFNBQUYsS0FBZ0JuSyxDQUFDLENBQUNtSyxTQURsQixJQUVBM1AsS0FBSyxDQUFDdUUsQ0FBQyxDQUFDb0ssSUFBSCxDQUFMLEtBQWtCM08sS0FBSyxDQUFDd0YsQ0FBQyxDQUFDbUosSUFBSCxDQUZ2QixJQUdBb3NCLGFBQWEsQ0FBQ3gyQixDQUFELEVBQUlpQixDQUFKLENBSmYsSUFNRXZGLE1BQU0sQ0FBQ3NFLENBQUMsQ0FBQ3dMLGtCQUFILENBQU4sSUFDQXhMLENBQUMsQ0FBQzBLLFlBQUYsS0FBbUJ6SixDQUFDLENBQUN5SixZQURyQixJQUVBcFAsT0FBTyxDQUFDMkYsQ0FBQyxDQUFDeUosWUFBRixDQUFlNUMsS0FBaEIsQ0FUWCxDQURGO0FBY0Q7O0FBRUQsU0FBUzB1QixhQUFULENBQXdCeDJCLENBQXhCLEVBQTJCaUIsQ0FBM0IsRUFBOEI7QUFDNUIsTUFBSWpCLENBQUMsQ0FBQ21LLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQUUsV0FBTyxJQUFQO0FBQWE7O0FBQ3RDLE1BQUluTSxDQUFKO0FBQ0EsTUFBSXk0QixLQUFLLEdBQUdoN0IsS0FBSyxDQUFDdUMsQ0FBQyxHQUFHZ0MsQ0FBQyxDQUFDb0ssSUFBUCxDQUFMLElBQXFCM08sS0FBSyxDQUFDdUMsQ0FBQyxHQUFHQSxDQUFDLENBQUNzYixLQUFQLENBQTFCLElBQTJDdGIsQ0FBQyxDQUFDb1MsSUFBekQ7QUFDQSxNQUFJc21CLEtBQUssR0FBR2o3QixLQUFLLENBQUN1QyxDQUFDLEdBQUdpRCxDQUFDLENBQUNtSixJQUFQLENBQUwsSUFBcUIzTyxLQUFLLENBQUN1QyxDQUFDLEdBQUdBLENBQUMsQ0FBQ3NiLEtBQVAsQ0FBMUIsSUFBMkN0YixDQUFDLENBQUNvUyxJQUF6RDtBQUNBLFNBQU9xbUIsS0FBSyxLQUFLQyxLQUFWLElBQW1COUIsZUFBZSxDQUFDNkIsS0FBRCxDQUFmLElBQTBCN0IsZUFBZSxDQUFDOEIsS0FBRCxDQUFuRTtBQUNEOztBQUVELFNBQVNDLGlCQUFULENBQTRCdHNCLFFBQTVCLEVBQXNDdXNCLFFBQXRDLEVBQWdEQyxNQUFoRCxFQUF3RDtBQUN0RCxNQUFJNzRCLENBQUosRUFBT2EsR0FBUDtBQUNBLE1BQUlqQixHQUFHLEdBQUcsRUFBVjs7QUFDQSxPQUFLSSxDQUFDLEdBQUc0NEIsUUFBVCxFQUFtQjU0QixDQUFDLElBQUk2NEIsTUFBeEIsRUFBZ0MsRUFBRTc0QixDQUFsQyxFQUFxQztBQUNuQ2EsT0FBRyxHQUFHd0wsUUFBUSxDQUFDck0sQ0FBRCxDQUFSLENBQVlhLEdBQWxCOztBQUNBLFFBQUlwRCxLQUFLLENBQUNvRCxHQUFELENBQVQsRUFBZ0I7QUFBRWpCLFNBQUcsQ0FBQ2lCLEdBQUQsQ0FBSCxHQUFXYixDQUFYO0FBQWU7QUFDbEM7O0FBQ0QsU0FBT0osR0FBUDtBQUNEOztBQUVELFNBQVNrNUIsbUJBQVQsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQ3JDLE1BQUkvNEIsQ0FBSixFQUFPdXNCLENBQVA7QUFDQSxNQUFJekMsR0FBRyxHQUFHLEVBQVY7QUFFQSxNQUFJa1AsT0FBTyxHQUFHRCxPQUFPLENBQUNDLE9BQXRCO0FBQ0EsTUFBSWYsT0FBTyxHQUFHYyxPQUFPLENBQUNkLE9BQXRCOztBQUVBLE9BQUtqNEIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHZ1MsS0FBSyxDQUFDL1IsTUFBdEIsRUFBOEIsRUFBRUQsQ0FBaEMsRUFBbUM7QUFDakM4cEIsT0FBRyxDQUFDOVgsS0FBSyxDQUFDaFMsQ0FBRCxDQUFOLENBQUgsR0FBZ0IsRUFBaEI7O0FBQ0EsU0FBS3VzQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd5TSxPQUFPLENBQUMvNEIsTUFBeEIsRUFBZ0MsRUFBRXNzQixDQUFsQyxFQUFxQztBQUNuQyxVQUFJOXVCLEtBQUssQ0FBQ3U3QixPQUFPLENBQUN6TSxDQUFELENBQVAsQ0FBV3ZhLEtBQUssQ0FBQ2hTLENBQUQsQ0FBaEIsQ0FBRCxDQUFULEVBQWlDO0FBQy9COHBCLFdBQUcsQ0FBQzlYLEtBQUssQ0FBQ2hTLENBQUQsQ0FBTixDQUFILENBQWMrSyxJQUFkLENBQW1CaXVCLE9BQU8sQ0FBQ3pNLENBQUQsQ0FBUCxDQUFXdmEsS0FBSyxDQUFDaFMsQ0FBRCxDQUFoQixDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTaTVCLFdBQVQsQ0FBc0Ixc0IsR0FBdEIsRUFBMkI7QUFDekIsV0FBTyxJQUFJTCxLQUFKLENBQVUrckIsT0FBTyxDQUFDaEIsT0FBUixDQUFnQjFxQixHQUFoQixFQUFxQnJNLFdBQXJCLEVBQVYsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QxQyxTQUF0RCxFQUFpRStPLEdBQWpFLENBQVA7QUFDRDs7QUFFRCxXQUFTMnNCLFVBQVQsQ0FBcUJDLFFBQXJCLEVBQStCOVcsU0FBL0IsRUFBMEM7QUFDeEMsYUFBUzFILFNBQVQsR0FBc0I7QUFDcEIsVUFBSSxFQUFFQSxTQUFTLENBQUMwSCxTQUFaLEtBQTBCLENBQTlCLEVBQWlDO0FBQy9CK1csa0JBQVUsQ0FBQ0QsUUFBRCxDQUFWO0FBQ0Q7QUFDRjs7QUFDRHhlLGFBQVMsQ0FBQzBILFNBQVYsR0FBc0JBLFNBQXRCO0FBQ0EsV0FBTzFILFNBQVA7QUFDRDs7QUFFRCxXQUFTeWUsVUFBVCxDQUFxQnJvQixFQUFyQixFQUF5QjtBQUN2QixRQUFJL0QsTUFBTSxHQUFHaXJCLE9BQU8sQ0FBQ3ZDLFVBQVIsQ0FBbUIza0IsRUFBbkIsQ0FBYixDQUR1QixDQUV2Qjs7QUFDQSxRQUFJdFQsS0FBSyxDQUFDdVAsTUFBRCxDQUFULEVBQW1CO0FBQ2pCaXJCLGFBQU8sQ0FBQ1AsV0FBUixDQUFvQjFxQixNQUFwQixFQUE0QitELEVBQTVCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTc29CLG1CQUFULENBQThCcnJCLEtBQTlCLEVBQXFDc3JCLE1BQXJDLEVBQTZDO0FBQzNDLFdBQ0UsQ0FBQ0EsTUFBRCxJQUNBLENBQUN0ckIsS0FBSyxDQUFDckIsRUFEUCxJQUVBLEVBQ0VySSxNQUFNLENBQUNTLGVBQVAsQ0FBdUI5RSxNQUF2QixJQUNBcUUsTUFBTSxDQUFDUyxlQUFQLENBQXVCbVIsSUFBdkIsQ0FBNEIsVUFBVXFqQixNQUFWLEVBQWtCO0FBQzVDLGFBQU9oN0IsUUFBUSxDQUFDZzdCLE1BQUQsQ0FBUixHQUNIQSxNQUFNLENBQUNqekIsSUFBUCxDQUFZMEgsS0FBSyxDQUFDN0IsR0FBbEIsQ0FERyxHQUVIb3RCLE1BQU0sS0FBS3ZyQixLQUFLLENBQUM3QixHQUZyQjtBQUdELEtBSkQsQ0FGRixDQUZBLElBVUE3SCxNQUFNLENBQUNhLGdCQUFQLENBQXdCNkksS0FBSyxDQUFDN0IsR0FBOUIsQ0FYRjtBQWFEOztBQUVELE1BQUlxdEIsaUJBQWlCLEdBQUcsQ0FBeEI7O0FBRUEsV0FBU0MsU0FBVCxDQUNFenJCLEtBREYsRUFFRTByQixrQkFGRixFQUdFQyxTQUhGLEVBSUVDLE1BSkYsRUFLRUMsTUFMRixFQU1FQyxVQU5GLEVBT0V0NUIsS0FQRixFQVFFO0FBQ0EsUUFBSS9DLEtBQUssQ0FBQ3VRLEtBQUssQ0FBQ3pCLEdBQVAsQ0FBTCxJQUFvQjlPLEtBQUssQ0FBQ3E4QixVQUFELENBQTdCLEVBQTJDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTlyQixXQUFLLEdBQUc4ckIsVUFBVSxDQUFDdDVCLEtBQUQsQ0FBVixHQUFvQnVOLFVBQVUsQ0FBQ0MsS0FBRCxDQUF0QztBQUNEOztBQUVEQSxTQUFLLENBQUNiLFlBQU4sR0FBcUIsQ0FBQzBzQixNQUF0QixDQVZBLENBVThCOztBQUM5QixRQUFJclYsZUFBZSxDQUFDeFcsS0FBRCxFQUFRMHJCLGtCQUFSLEVBQTRCQyxTQUE1QixFQUF1Q0MsTUFBdkMsQ0FBbkIsRUFBbUU7QUFDakU7QUFDRDs7QUFFRCxRQUFJeHRCLElBQUksR0FBRzRCLEtBQUssQ0FBQzVCLElBQWpCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHMkIsS0FBSyxDQUFDM0IsUUFBckI7QUFDQSxRQUFJRixHQUFHLEdBQUc2QixLQUFLLENBQUM3QixHQUFoQjs7QUFDQSxRQUFJMU8sS0FBSyxDQUFDME8sR0FBRCxDQUFULEVBQWdCO0FBQ2QsVUFBSXpILElBQUosRUFBMkM7QUFDekMsWUFBSTBILElBQUksSUFBSUEsSUFBSSxDQUFDK1osR0FBakIsRUFBc0I7QUFDcEJxVCwyQkFBaUI7QUFDbEI7O0FBQ0QsWUFBSUgsbUJBQW1CLENBQUNyckIsS0FBRCxFQUFRd3JCLGlCQUFSLENBQXZCLEVBQW1EO0FBQ2pEcndCLGNBQUksQ0FDRiw4QkFBOEJnRCxHQUE5QixHQUFvQyxjQUFwQyxHQUNBLDhEQURBLEdBRUEseUNBSEUsRUFJRjZCLEtBQUssQ0FBQ3hCLE9BSkosQ0FBSjtBQU1EO0FBQ0Y7O0FBRUR3QixXQUFLLENBQUN6QixHQUFOLEdBQVl5QixLQUFLLENBQUNyQixFQUFOLEdBQ1JzckIsT0FBTyxDQUFDYixlQUFSLENBQXdCcHBCLEtBQUssQ0FBQ3JCLEVBQTlCLEVBQWtDUixHQUFsQyxDQURRLEdBRVI4ckIsT0FBTyxDQUFDdFYsYUFBUixDQUFzQnhXLEdBQXRCLEVBQTJCNkIsS0FBM0IsQ0FGSjtBQUdBK3JCLGNBQVEsQ0FBQy9yQixLQUFELENBQVI7QUFFQTs7QUFDQTtBQUNFZ3NCLHNCQUFjLENBQUNoc0IsS0FBRCxFQUFRM0IsUUFBUixFQUFrQnF0QixrQkFBbEIsQ0FBZDs7QUFDQSxZQUFJajhCLEtBQUssQ0FBQzJPLElBQUQsQ0FBVCxFQUFpQjtBQUNmNnRCLDJCQUFpQixDQUFDanNCLEtBQUQsRUFBUTByQixrQkFBUixDQUFqQjtBQUNEOztBQUNEM1YsY0FBTSxDQUFDNFYsU0FBRCxFQUFZM3JCLEtBQUssQ0FBQ3pCLEdBQWxCLEVBQXVCcXRCLE1BQXZCLENBQU47QUFDRDs7QUFFRCxVQUFJbDFCLEtBQUEsSUFBeUMwSCxJQUF6QyxJQUFpREEsSUFBSSxDQUFDK1osR0FBMUQsRUFBK0Q7QUFDN0RxVCx5QkFBaUI7QUFDbEI7QUFDRixLQWhDRCxNQWdDTyxJQUFJOTdCLE1BQU0sQ0FBQ3NRLEtBQUssQ0FBQ1osU0FBUCxDQUFWLEVBQTZCO0FBQ2xDWSxXQUFLLENBQUN6QixHQUFOLEdBQVkwckIsT0FBTyxDQUFDWCxhQUFSLENBQXNCdHBCLEtBQUssQ0FBQzFCLElBQTVCLENBQVo7QUFDQXlYLFlBQU0sQ0FBQzRWLFNBQUQsRUFBWTNyQixLQUFLLENBQUN6QixHQUFsQixFQUF1QnF0QixNQUF2QixDQUFOO0FBQ0QsS0FITSxNQUdBO0FBQ0w1ckIsV0FBSyxDQUFDekIsR0FBTixHQUFZMHJCLE9BQU8sQ0FBQ25nQixjQUFSLENBQXVCOUosS0FBSyxDQUFDMUIsSUFBN0IsQ0FBWjtBQUNBeVgsWUFBTSxDQUFDNFYsU0FBRCxFQUFZM3JCLEtBQUssQ0FBQ3pCLEdBQWxCLEVBQXVCcXRCLE1BQXZCLENBQU47QUFDRDtBQUNGOztBQUVELFdBQVNwVixlQUFULENBQTBCeFcsS0FBMUIsRUFBaUMwckIsa0JBQWpDLEVBQXFEQyxTQUFyRCxFQUFnRUMsTUFBaEUsRUFBd0U7QUFDdEUsUUFBSTU1QixDQUFDLEdBQUdnTyxLQUFLLENBQUM1QixJQUFkOztBQUNBLFFBQUkzTyxLQUFLLENBQUN1QyxDQUFELENBQVQsRUFBYztBQUNaLFVBQUlrNkIsYUFBYSxHQUFHejhCLEtBQUssQ0FBQ3VRLEtBQUssQ0FBQ2pCLGlCQUFQLENBQUwsSUFBa0MvTSxDQUFDLENBQUN1akIsU0FBeEQ7O0FBQ0EsVUFBSTlsQixLQUFLLENBQUN1QyxDQUFDLEdBQUdBLENBQUMsQ0FBQ2lTLElBQVAsQ0FBTCxJQUFxQnhVLEtBQUssQ0FBQ3VDLENBQUMsR0FBR0EsQ0FBQyxDQUFDb2pCLElBQVAsQ0FBOUIsRUFBNEM7QUFDMUNwakIsU0FBQyxDQUFDZ08sS0FBRCxFQUFRO0FBQU07QUFBZCxTQUFEO0FBQ0QsT0FKVyxDQUtaO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFJdlEsS0FBSyxDQUFDdVEsS0FBSyxDQUFDakIsaUJBQVAsQ0FBVCxFQUFvQztBQUNsQ290QixxQkFBYSxDQUFDbnNCLEtBQUQsRUFBUTByQixrQkFBUixDQUFiO0FBQ0EzVixjQUFNLENBQUM0VixTQUFELEVBQVkzckIsS0FBSyxDQUFDekIsR0FBbEIsRUFBdUJxdEIsTUFBdkIsQ0FBTjs7QUFDQSxZQUFJbDhCLE1BQU0sQ0FBQ3c4QixhQUFELENBQVYsRUFBMkI7QUFDekJFLDZCQUFtQixDQUFDcHNCLEtBQUQsRUFBUTByQixrQkFBUixFQUE0QkMsU0FBNUIsRUFBdUNDLE1BQXZDLENBQW5CO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQVNPLGFBQVQsQ0FBd0Juc0IsS0FBeEIsRUFBK0IwckIsa0JBQS9CLEVBQW1EO0FBQ2pELFFBQUlqOEIsS0FBSyxDQUFDdVEsS0FBSyxDQUFDNUIsSUFBTixDQUFXaXVCLGFBQVosQ0FBVCxFQUFxQztBQUNuQ1gsd0JBQWtCLENBQUMzdUIsSUFBbkIsQ0FBd0I1SSxLQUF4QixDQUE4QnUzQixrQkFBOUIsRUFBa0QxckIsS0FBSyxDQUFDNUIsSUFBTixDQUFXaXVCLGFBQTdEO0FBQ0Fyc0IsV0FBSyxDQUFDNUIsSUFBTixDQUFXaXVCLGFBQVgsR0FBMkIsSUFBM0I7QUFDRDs7QUFDRHJzQixTQUFLLENBQUN6QixHQUFOLEdBQVl5QixLQUFLLENBQUNqQixpQkFBTixDQUF3QjhkLEdBQXBDOztBQUNBLFFBQUl5UCxXQUFXLENBQUN0c0IsS0FBRCxDQUFmLEVBQXdCO0FBQ3RCaXNCLHVCQUFpQixDQUFDanNCLEtBQUQsRUFBUTByQixrQkFBUixDQUFqQjtBQUNBSyxjQUFRLENBQUMvckIsS0FBRCxDQUFSO0FBQ0QsS0FIRCxNQUdPO0FBQ0w7QUFDQTtBQUNBa3FCLGlCQUFXLENBQUNscUIsS0FBRCxDQUFYLENBSEssQ0FJTDs7QUFDQTByQix3QkFBa0IsQ0FBQzN1QixJQUFuQixDQUF3QmlELEtBQXhCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTb3NCLG1CQUFULENBQThCcHNCLEtBQTlCLEVBQXFDMHJCLGtCQUFyQyxFQUF5REMsU0FBekQsRUFBb0VDLE1BQXBFLEVBQTRFO0FBQzFFLFFBQUk1NUIsQ0FBSixDQUQwRSxDQUUxRTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJdTZCLFNBQVMsR0FBR3ZzQixLQUFoQjs7QUFDQSxXQUFPdXNCLFNBQVMsQ0FBQ3h0QixpQkFBakIsRUFBb0M7QUFDbEN3dEIsZUFBUyxHQUFHQSxTQUFTLENBQUN4dEIsaUJBQVYsQ0FBNEIyWixNQUF4Qzs7QUFDQSxVQUFJanBCLEtBQUssQ0FBQ3VDLENBQUMsR0FBR3U2QixTQUFTLENBQUNudUIsSUFBZixDQUFMLElBQTZCM08sS0FBSyxDQUFDdUMsQ0FBQyxHQUFHQSxDQUFDLENBQUN3NkIsVUFBUCxDQUF0QyxFQUEwRDtBQUN4RCxhQUFLeDZCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzhwQixHQUFHLENBQUMyUSxRQUFKLENBQWF4NkIsTUFBN0IsRUFBcUMsRUFBRUQsQ0FBdkMsRUFBMEM7QUFDeEM4cEIsYUFBRyxDQUFDMlEsUUFBSixDQUFhejZCLENBQWIsRUFBZ0JzNEIsU0FBaEIsRUFBMkJpQyxTQUEzQjtBQUNEOztBQUNEYiwwQkFBa0IsQ0FBQzN1QixJQUFuQixDQUF3Qnd2QixTQUF4QjtBQUNBO0FBQ0Q7QUFDRixLQWhCeUUsQ0FpQjFFO0FBQ0E7OztBQUNBeFcsVUFBTSxDQUFDNFYsU0FBRCxFQUFZM3JCLEtBQUssQ0FBQ3pCLEdBQWxCLEVBQXVCcXRCLE1BQXZCLENBQU47QUFDRDs7QUFFRCxXQUFTN1YsTUFBVCxDQUFpQi9XLE1BQWpCLEVBQXlCVCxHQUF6QixFQUE4Qm11QixNQUE5QixFQUFzQztBQUNwQyxRQUFJajlCLEtBQUssQ0FBQ3VQLE1BQUQsQ0FBVCxFQUFtQjtBQUNqQixVQUFJdlAsS0FBSyxDQUFDaTlCLE1BQUQsQ0FBVCxFQUFtQjtBQUNqQixZQUFJekMsT0FBTyxDQUFDdkMsVUFBUixDQUFtQmdGLE1BQW5CLE1BQStCMXRCLE1BQW5DLEVBQTJDO0FBQ3pDaXJCLGlCQUFPLENBQUNWLFlBQVIsQ0FBcUJ2cUIsTUFBckIsRUFBNkJULEdBQTdCLEVBQWtDbXVCLE1BQWxDO0FBQ0Q7QUFDRixPQUpELE1BSU87QUFDTHpDLGVBQU8sQ0FBQ04sV0FBUixDQUFvQjNxQixNQUFwQixFQUE0QlQsR0FBNUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBU3l0QixjQUFULENBQXlCaHNCLEtBQXpCLEVBQWdDM0IsUUFBaEMsRUFBMENxdEIsa0JBQTFDLEVBQThEO0FBQzVELFFBQUl2NkIsS0FBSyxDQUFDQyxPQUFOLENBQWNpTixRQUFkLENBQUosRUFBNkI7QUFDM0IsVUFBSTNILElBQUosRUFBMkM7QUFDekNpMkIsMEJBQWtCLENBQUN0dUIsUUFBRCxDQUFsQjtBQUNEOztBQUNELFdBQUssSUFBSXJNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxTSxRQUFRLENBQUNwTSxNQUE3QixFQUFxQyxFQUFFRCxDQUF2QyxFQUEwQztBQUN4Q3k1QixpQkFBUyxDQUFDcHRCLFFBQVEsQ0FBQ3JNLENBQUQsQ0FBVCxFQUFjMDVCLGtCQUFkLEVBQWtDMXJCLEtBQUssQ0FBQ3pCLEdBQXhDLEVBQTZDLElBQTdDLEVBQW1ELElBQW5ELEVBQXlERixRQUF6RCxFQUFtRXJNLENBQW5FLENBQVQ7QUFDRDtBQUNGLEtBUEQsTUFPTyxJQUFJcEMsV0FBVyxDQUFDb1EsS0FBSyxDQUFDMUIsSUFBUCxDQUFmLEVBQTZCO0FBQ2xDMnJCLGFBQU8sQ0FBQ04sV0FBUixDQUFvQjNwQixLQUFLLENBQUN6QixHQUExQixFQUErQjByQixPQUFPLENBQUNuZ0IsY0FBUixDQUF1QmxaLE1BQU0sQ0FBQ29QLEtBQUssQ0FBQzFCLElBQVAsQ0FBN0IsQ0FBL0I7QUFDRDtBQUNGOztBQUVELFdBQVNndUIsV0FBVCxDQUFzQnRzQixLQUF0QixFQUE2QjtBQUMzQixXQUFPQSxLQUFLLENBQUNqQixpQkFBYixFQUFnQztBQUM5QmlCLFdBQUssR0FBR0EsS0FBSyxDQUFDakIsaUJBQU4sQ0FBd0IyWixNQUFoQztBQUNEOztBQUNELFdBQU9qcEIsS0FBSyxDQUFDdVEsS0FBSyxDQUFDN0IsR0FBUCxDQUFaO0FBQ0Q7O0FBRUQsV0FBUzh0QixpQkFBVCxDQUE0QmpzQixLQUE1QixFQUFtQzByQixrQkFBbkMsRUFBdUQ7QUFDckQsU0FBSyxJQUFJN1AsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBR0MsR0FBRyxDQUFDanFCLE1BQUosQ0FBV0ksTUFBbkMsRUFBMkMsRUFBRTRwQixHQUE3QyxFQUFrRDtBQUNoREMsU0FBRyxDQUFDanFCLE1BQUosQ0FBV2dxQixHQUFYLEVBQWdCeU8sU0FBaEIsRUFBMkJ0cUIsS0FBM0I7QUFDRDs7QUFDRGhPLEtBQUMsR0FBR2dPLEtBQUssQ0FBQzVCLElBQU4sQ0FBVzZGLElBQWYsQ0FKcUQsQ0FJaEM7O0FBQ3JCLFFBQUl4VSxLQUFLLENBQUN1QyxDQUFELENBQVQsRUFBYztBQUNaLFVBQUl2QyxLQUFLLENBQUN1QyxDQUFDLENBQUNILE1BQUgsQ0FBVCxFQUFxQjtBQUFFRyxTQUFDLENBQUNILE1BQUYsQ0FBU3k0QixTQUFULEVBQW9CdHFCLEtBQXBCO0FBQTZCOztBQUNwRCxVQUFJdlEsS0FBSyxDQUFDdUMsQ0FBQyxDQUFDK2pCLE1BQUgsQ0FBVCxFQUFxQjtBQUFFMlYsMEJBQWtCLENBQUMzdUIsSUFBbkIsQ0FBd0JpRCxLQUF4QjtBQUFpQztBQUN6RDtBQUNGLEdBbE9vQyxDQW9PckM7QUFDQTtBQUNBOzs7QUFDQSxXQUFTK3JCLFFBQVQsQ0FBbUIvckIsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSWhPLENBQUo7O0FBQ0EsUUFBSXZDLEtBQUssQ0FBQ3VDLENBQUMsR0FBR2dPLEtBQUssQ0FBQ2xCLFNBQVgsQ0FBVCxFQUFnQztBQUM5Qm1yQixhQUFPLENBQUNGLGFBQVIsQ0FBc0IvcEIsS0FBSyxDQUFDekIsR0FBNUIsRUFBaUN2TSxDQUFqQztBQUNELEtBRkQsTUFFTztBQUNMLFVBQUk0NkIsUUFBUSxHQUFHNXNCLEtBQWY7O0FBQ0EsYUFBTzRzQixRQUFQLEVBQWlCO0FBQ2YsWUFBSW45QixLQUFLLENBQUN1QyxDQUFDLEdBQUc0NkIsUUFBUSxDQUFDcHVCLE9BQWQsQ0FBTCxJQUErQi9PLEtBQUssQ0FBQ3VDLENBQUMsR0FBR0EsQ0FBQyxDQUFDb0ssUUFBRixDQUFXb1ksUUFBaEIsQ0FBeEMsRUFBbUU7QUFDakV5VixpQkFBTyxDQUFDRixhQUFSLENBQXNCL3BCLEtBQUssQ0FBQ3pCLEdBQTVCLEVBQWlDdk0sQ0FBakM7QUFDRDs7QUFDRDQ2QixnQkFBUSxHQUFHQSxRQUFRLENBQUM1dEIsTUFBcEI7QUFDRDtBQUNGLEtBWnVCLENBYXhCOzs7QUFDQSxRQUFJdlAsS0FBSyxDQUFDdUMsQ0FBQyxHQUFHMmpCLGNBQUwsQ0FBTCxJQUNGM2pCLENBQUMsS0FBS2dPLEtBQUssQ0FBQ3hCLE9BRFYsSUFFRnhNLENBQUMsS0FBS2dPLEtBQUssQ0FBQ3BCLFNBRlYsSUFHRm5QLEtBQUssQ0FBQ3VDLENBQUMsR0FBR0EsQ0FBQyxDQUFDb0ssUUFBRixDQUFXb1ksUUFBaEIsQ0FIUCxFQUlFO0FBQ0F5VixhQUFPLENBQUNGLGFBQVIsQ0FBc0IvcEIsS0FBSyxDQUFDekIsR0FBNUIsRUFBaUN2TSxDQUFqQztBQUNEO0FBQ0Y7O0FBRUQsV0FBUzY2QixTQUFULENBQW9CbEIsU0FBcEIsRUFBK0JDLE1BQS9CLEVBQXVDNVcsTUFBdkMsRUFBK0M4WCxRQUEvQyxFQUF5RGpDLE1BQXpELEVBQWlFYSxrQkFBakUsRUFBcUY7QUFDbkYsV0FBT29CLFFBQVEsSUFBSWpDLE1BQW5CLEVBQTJCLEVBQUVpQyxRQUE3QixFQUF1QztBQUNyQ3JCLGVBQVMsQ0FBQ3pXLE1BQU0sQ0FBQzhYLFFBQUQsQ0FBUCxFQUFtQnBCLGtCQUFuQixFQUF1Q0MsU0FBdkMsRUFBa0RDLE1BQWxELEVBQTBELEtBQTFELEVBQWlFNVcsTUFBakUsRUFBeUU4WCxRQUF6RSxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTQyxpQkFBVCxDQUE0Qi9zQixLQUE1QixFQUFtQztBQUNqQyxRQUFJaE8sQ0FBSixFQUFPdXNCLENBQVA7QUFDQSxRQUFJbmdCLElBQUksR0FBRzRCLEtBQUssQ0FBQzVCLElBQWpCOztBQUNBLFFBQUkzTyxLQUFLLENBQUMyTyxJQUFELENBQVQsRUFBaUI7QUFDZixVQUFJM08sS0FBSyxDQUFDdUMsQ0FBQyxHQUFHb00sSUFBSSxDQUFDNkYsSUFBVixDQUFMLElBQXdCeFUsS0FBSyxDQUFDdUMsQ0FBQyxHQUFHQSxDQUFDLENBQUNva0IsT0FBUCxDQUFqQyxFQUFrRDtBQUFFcGtCLFNBQUMsQ0FBQ2dPLEtBQUQsQ0FBRDtBQUFXOztBQUMvRCxXQUFLaE8sQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHOHBCLEdBQUcsQ0FBQzFGLE9BQUosQ0FBWW5rQixNQUE1QixFQUFvQyxFQUFFRCxDQUF0QyxFQUF5QztBQUFFOHBCLFdBQUcsQ0FBQzFGLE9BQUosQ0FBWXBrQixDQUFaLEVBQWVnTyxLQUFmO0FBQXdCO0FBQ3BFOztBQUNELFFBQUl2USxLQUFLLENBQUN1QyxDQUFDLEdBQUdnTyxLQUFLLENBQUMzQixRQUFYLENBQVQsRUFBK0I7QUFDN0IsV0FBS2tnQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd2ZSxLQUFLLENBQUMzQixRQUFOLENBQWVwTSxNQUEvQixFQUF1QyxFQUFFc3NCLENBQXpDLEVBQTRDO0FBQzFDd08seUJBQWlCLENBQUMvc0IsS0FBSyxDQUFDM0IsUUFBTixDQUFla2dCLENBQWYsQ0FBRCxDQUFqQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTeU8sWUFBVCxDQUF1QmhZLE1BQXZCLEVBQStCOFgsUUFBL0IsRUFBeUNqQyxNQUF6QyxFQUFpRDtBQUMvQyxXQUFPaUMsUUFBUSxJQUFJakMsTUFBbkIsRUFBMkIsRUFBRWlDLFFBQTdCLEVBQXVDO0FBQ3JDLFVBQUlHLEVBQUUsR0FBR2pZLE1BQU0sQ0FBQzhYLFFBQUQsQ0FBZjs7QUFDQSxVQUFJcjlCLEtBQUssQ0FBQ3c5QixFQUFELENBQVQsRUFBZTtBQUNiLFlBQUl4OUIsS0FBSyxDQUFDdzlCLEVBQUUsQ0FBQzl1QixHQUFKLENBQVQsRUFBbUI7QUFDakIrdUIsbUNBQXlCLENBQUNELEVBQUQsQ0FBekI7QUFDQUYsMkJBQWlCLENBQUNFLEVBQUQsQ0FBakI7QUFDRCxTQUhELE1BR087QUFBRTtBQUNQN0Isb0JBQVUsQ0FBQzZCLEVBQUUsQ0FBQzF1QixHQUFKLENBQVY7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTMnVCLHlCQUFULENBQW9DbHRCLEtBQXBDLEVBQTJDbXRCLEVBQTNDLEVBQStDO0FBQzdDLFFBQUkxOUIsS0FBSyxDQUFDMDlCLEVBQUQsQ0FBTCxJQUFhMTlCLEtBQUssQ0FBQ3VRLEtBQUssQ0FBQzVCLElBQVAsQ0FBdEIsRUFBb0M7QUFDbEMsVUFBSXBNLENBQUo7QUFDQSxVQUFJcWlCLFNBQVMsR0FBR3lILEdBQUcsQ0FBQ3pwQixNQUFKLENBQVdKLE1BQVgsR0FBb0IsQ0FBcEM7O0FBQ0EsVUFBSXhDLEtBQUssQ0FBQzA5QixFQUFELENBQVQsRUFBZTtBQUNiO0FBQ0E7QUFDQUEsVUFBRSxDQUFDOVksU0FBSCxJQUFnQkEsU0FBaEI7QUFDRCxPQUpELE1BSU87QUFDTDtBQUNBOFksVUFBRSxHQUFHakMsVUFBVSxDQUFDbHJCLEtBQUssQ0FBQ3pCLEdBQVAsRUFBWThWLFNBQVosQ0FBZjtBQUNELE9BVmlDLENBV2xDOzs7QUFDQSxVQUFJNWtCLEtBQUssQ0FBQ3VDLENBQUMsR0FBR2dPLEtBQUssQ0FBQ2pCLGlCQUFYLENBQUwsSUFBc0N0UCxLQUFLLENBQUN1QyxDQUFDLEdBQUdBLENBQUMsQ0FBQzBtQixNQUFQLENBQTNDLElBQTZEanBCLEtBQUssQ0FBQ3VDLENBQUMsQ0FBQ29NLElBQUgsQ0FBdEUsRUFBZ0Y7QUFDOUU4dUIsaUNBQXlCLENBQUNsN0IsQ0FBRCxFQUFJbTdCLEVBQUosQ0FBekI7QUFDRDs7QUFDRCxXQUFLbjdCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzhwQixHQUFHLENBQUN6cEIsTUFBSixDQUFXSixNQUEzQixFQUFtQyxFQUFFRCxDQUFyQyxFQUF3QztBQUN0QzhwQixXQUFHLENBQUN6cEIsTUFBSixDQUFXTCxDQUFYLEVBQWNnTyxLQUFkLEVBQXFCbXRCLEVBQXJCO0FBQ0Q7O0FBQ0QsVUFBSTE5QixLQUFLLENBQUN1QyxDQUFDLEdBQUdnTyxLQUFLLENBQUM1QixJQUFOLENBQVc2RixJQUFoQixDQUFMLElBQThCeFUsS0FBSyxDQUFDdUMsQ0FBQyxHQUFHQSxDQUFDLENBQUNLLE1BQVAsQ0FBdkMsRUFBdUQ7QUFDckRMLFNBQUMsQ0FBQ2dPLEtBQUQsRUFBUW10QixFQUFSLENBQUQ7QUFDRCxPQUZELE1BRU87QUFDTEEsVUFBRTtBQUNIO0FBQ0YsS0F2QkQsTUF1Qk87QUFDTC9CLGdCQUFVLENBQUNwckIsS0FBSyxDQUFDekIsR0FBUCxDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTNnVCLGNBQVQsQ0FBeUJ6QixTQUF6QixFQUFvQzBCLEtBQXBDLEVBQTJDQyxLQUEzQyxFQUFrRDVCLGtCQUFsRCxFQUFzRTZCLFVBQXRFLEVBQWtGO0FBQ2hGLFFBQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUNBLFFBQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUNBLFFBQUlDLFNBQVMsR0FBR0wsS0FBSyxDQUFDcDdCLE1BQU4sR0FBZSxDQUEvQjtBQUNBLFFBQUkwN0IsYUFBYSxHQUFHTixLQUFLLENBQUMsQ0FBRCxDQUF6QjtBQUNBLFFBQUlPLFdBQVcsR0FBR1AsS0FBSyxDQUFDSyxTQUFELENBQXZCO0FBQ0EsUUFBSUcsU0FBUyxHQUFHUCxLQUFLLENBQUNyN0IsTUFBTixHQUFlLENBQS9CO0FBQ0EsUUFBSTY3QixhQUFhLEdBQUdSLEtBQUssQ0FBQyxDQUFELENBQXpCO0FBQ0EsUUFBSVMsV0FBVyxHQUFHVCxLQUFLLENBQUNPLFNBQUQsQ0FBdkI7QUFDQSxRQUFJRyxXQUFKLEVBQWlCQyxRQUFqQixFQUEyQkMsV0FBM0IsRUFBd0N0QyxNQUF4QyxDQVRnRixDQVdoRjtBQUNBO0FBQ0E7O0FBQ0EsUUFBSXVDLE9BQU8sR0FBRyxDQUFDWixVQUFmOztBQUVBLFFBQUk3MkIsSUFBSixFQUEyQztBQUN6Q2kyQix3QkFBa0IsQ0FBQ1csS0FBRCxDQUFsQjtBQUNEOztBQUVELFdBQU9FLFdBQVcsSUFBSUUsU0FBZixJQUE0QkQsV0FBVyxJQUFJSSxTQUFsRCxFQUE2RDtBQUMzRCxVQUFJditCLE9BQU8sQ0FBQ3ErQixhQUFELENBQVgsRUFBNEI7QUFDMUJBLHFCQUFhLEdBQUdOLEtBQUssQ0FBQyxFQUFFRyxXQUFILENBQXJCLENBRDBCLENBQ1k7QUFDdkMsT0FGRCxNQUVPLElBQUlsK0IsT0FBTyxDQUFDcytCLFdBQUQsQ0FBWCxFQUEwQjtBQUMvQkEsbUJBQVcsR0FBR1AsS0FBSyxDQUFDLEVBQUVLLFNBQUgsQ0FBbkI7QUFDRCxPQUZNLE1BRUEsSUFBSW5ELFNBQVMsQ0FBQ29ELGFBQUQsRUFBZ0JHLGFBQWhCLENBQWIsRUFBNkM7QUFDbERNLGtCQUFVLENBQUNULGFBQUQsRUFBZ0JHLGFBQWhCLEVBQStCcEMsa0JBQS9CLEVBQW1ENEIsS0FBbkQsRUFBMERHLFdBQTFELENBQVY7QUFDQUUscUJBQWEsR0FBR04sS0FBSyxDQUFDLEVBQUVHLFdBQUgsQ0FBckI7QUFDQU0scUJBQWEsR0FBR1IsS0FBSyxDQUFDLEVBQUVHLFdBQUgsQ0FBckI7QUFDRCxPQUpNLE1BSUEsSUFBSWxELFNBQVMsQ0FBQ3FELFdBQUQsRUFBY0csV0FBZCxDQUFiLEVBQXlDO0FBQzlDSyxrQkFBVSxDQUFDUixXQUFELEVBQWNHLFdBQWQsRUFBMkJyQyxrQkFBM0IsRUFBK0M0QixLQUEvQyxFQUFzRE8sU0FBdEQsQ0FBVjtBQUNBRCxtQkFBVyxHQUFHUCxLQUFLLENBQUMsRUFBRUssU0FBSCxDQUFuQjtBQUNBSyxtQkFBVyxHQUFHVCxLQUFLLENBQUMsRUFBRU8sU0FBSCxDQUFuQjtBQUNELE9BSk0sTUFJQSxJQUFJdEQsU0FBUyxDQUFDb0QsYUFBRCxFQUFnQkksV0FBaEIsQ0FBYixFQUEyQztBQUFFO0FBQ2xESyxrQkFBVSxDQUFDVCxhQUFELEVBQWdCSSxXQUFoQixFQUE2QnJDLGtCQUE3QixFQUFpRDRCLEtBQWpELEVBQXdETyxTQUF4RCxDQUFWO0FBQ0FNLGVBQU8sSUFBSWxFLE9BQU8sQ0FBQ1YsWUFBUixDQUFxQm9DLFNBQXJCLEVBQWdDZ0MsYUFBYSxDQUFDcHZCLEdBQTlDLEVBQW1EMHJCLE9BQU8sQ0FBQ0wsV0FBUixDQUFvQmdFLFdBQVcsQ0FBQ3J2QixHQUFoQyxDQUFuRCxDQUFYO0FBQ0FvdkIscUJBQWEsR0FBR04sS0FBSyxDQUFDLEVBQUVHLFdBQUgsQ0FBckI7QUFDQU8sbUJBQVcsR0FBR1QsS0FBSyxDQUFDLEVBQUVPLFNBQUgsQ0FBbkI7QUFDRCxPQUxNLE1BS0EsSUFBSXRELFNBQVMsQ0FBQ3FELFdBQUQsRUFBY0UsYUFBZCxDQUFiLEVBQTJDO0FBQUU7QUFDbERNLGtCQUFVLENBQUNSLFdBQUQsRUFBY0UsYUFBZCxFQUE2QnBDLGtCQUE3QixFQUFpRDRCLEtBQWpELEVBQXdERyxXQUF4RCxDQUFWO0FBQ0FVLGVBQU8sSUFBSWxFLE9BQU8sQ0FBQ1YsWUFBUixDQUFxQm9DLFNBQXJCLEVBQWdDaUMsV0FBVyxDQUFDcnZCLEdBQTVDLEVBQWlEb3ZCLGFBQWEsQ0FBQ3B2QixHQUEvRCxDQUFYO0FBQ0FxdkIsbUJBQVcsR0FBR1AsS0FBSyxDQUFDLEVBQUVLLFNBQUgsQ0FBbkI7QUFDQUkscUJBQWEsR0FBR1IsS0FBSyxDQUFDLEVBQUVHLFdBQUgsQ0FBckI7QUFDRCxPQUxNLE1BS0E7QUFDTCxZQUFJbitCLE9BQU8sQ0FBQzArQixXQUFELENBQVgsRUFBMEI7QUFBRUEscUJBQVcsR0FBR3JELGlCQUFpQixDQUFDMEMsS0FBRCxFQUFRRyxXQUFSLEVBQXFCRSxTQUFyQixDQUEvQjtBQUFpRTs7QUFDN0ZPLGdCQUFRLEdBQUd4K0IsS0FBSyxDQUFDcStCLGFBQWEsQ0FBQ2o3QixHQUFmLENBQUwsR0FDUG03QixXQUFXLENBQUNGLGFBQWEsQ0FBQ2o3QixHQUFmLENBREosR0FFUHc3QixZQUFZLENBQUNQLGFBQUQsRUFBZ0JULEtBQWhCLEVBQXVCRyxXQUF2QixFQUFvQ0UsU0FBcEMsQ0FGaEI7O0FBR0EsWUFBSXArQixPQUFPLENBQUMyK0IsUUFBRCxDQUFYLEVBQXVCO0FBQUU7QUFDdkJ4QyxtQkFBUyxDQUFDcUMsYUFBRCxFQUFnQnBDLGtCQUFoQixFQUFvQ0MsU0FBcEMsRUFBK0NnQyxhQUFhLENBQUNwdkIsR0FBN0QsRUFBa0UsS0FBbEUsRUFBeUUrdUIsS0FBekUsRUFBZ0ZHLFdBQWhGLENBQVQ7QUFDRCxTQUZELE1BRU87QUFDTFMscUJBQVcsR0FBR2IsS0FBSyxDQUFDWSxRQUFELENBQW5COztBQUNBLGNBQUkxRCxTQUFTLENBQUMyRCxXQUFELEVBQWNKLGFBQWQsQ0FBYixFQUEyQztBQUN6Q00sc0JBQVUsQ0FBQ0YsV0FBRCxFQUFjSixhQUFkLEVBQTZCcEMsa0JBQTdCLEVBQWlENEIsS0FBakQsRUFBd0RHLFdBQXhELENBQVY7QUFDQUosaUJBQUssQ0FBQ1ksUUFBRCxDQUFMLEdBQWtCeitCLFNBQWxCO0FBQ0EyK0IsbUJBQU8sSUFBSWxFLE9BQU8sQ0FBQ1YsWUFBUixDQUFxQm9DLFNBQXJCLEVBQWdDdUMsV0FBVyxDQUFDM3ZCLEdBQTVDLEVBQWlEb3ZCLGFBQWEsQ0FBQ3B2QixHQUEvRCxDQUFYO0FBQ0QsV0FKRCxNQUlPO0FBQ0w7QUFDQWt0QixxQkFBUyxDQUFDcUMsYUFBRCxFQUFnQnBDLGtCQUFoQixFQUFvQ0MsU0FBcEMsRUFBK0NnQyxhQUFhLENBQUNwdkIsR0FBN0QsRUFBa0UsS0FBbEUsRUFBeUUrdUIsS0FBekUsRUFBZ0ZHLFdBQWhGLENBQVQ7QUFDRDtBQUNGOztBQUNESyxxQkFBYSxHQUFHUixLQUFLLENBQUMsRUFBRUcsV0FBSCxDQUFyQjtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSUQsV0FBVyxHQUFHRSxTQUFsQixFQUE2QjtBQUMzQjlCLFlBQU0sR0FBR3Q4QixPQUFPLENBQUNnK0IsS0FBSyxDQUFDTyxTQUFTLEdBQUcsQ0FBYixDQUFOLENBQVAsR0FBZ0MsSUFBaEMsR0FBdUNQLEtBQUssQ0FBQ08sU0FBUyxHQUFHLENBQWIsQ0FBTCxDQUFxQnR2QixHQUFyRTtBQUNBc3VCLGVBQVMsQ0FBQ2xCLFNBQUQsRUFBWUMsTUFBWixFQUFvQjBCLEtBQXBCLEVBQTJCRyxXQUEzQixFQUF3Q0ksU0FBeEMsRUFBbURuQyxrQkFBbkQsQ0FBVDtBQUNELEtBSEQsTUFHTyxJQUFJK0IsV0FBVyxHQUFHSSxTQUFsQixFQUE2QjtBQUNsQ2Isa0JBQVksQ0FBQ0ssS0FBRCxFQUFRRyxXQUFSLEVBQXFCRSxTQUFyQixDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTZixrQkFBVCxDQUE2QnR1QixRQUE3QixFQUF1QztBQUNyQyxRQUFJaXdCLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSXQ4QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcU0sUUFBUSxDQUFDcE0sTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsVUFBSWdPLEtBQUssR0FBRzNCLFFBQVEsQ0FBQ3JNLENBQUQsQ0FBcEI7QUFDQSxVQUFJYSxHQUFHLEdBQUdtTixLQUFLLENBQUNuTixHQUFoQjs7QUFDQSxVQUFJcEQsS0FBSyxDQUFDb0QsR0FBRCxDQUFULEVBQWdCO0FBQ2QsWUFBSXk3QixRQUFRLENBQUN6N0IsR0FBRCxDQUFaLEVBQW1CO0FBQ2pCc0ksY0FBSSxDQUNELCtCQUErQnRJLEdBQS9CLEdBQXFDLG9DQURwQyxFQUVGbU4sS0FBSyxDQUFDeEIsT0FGSixDQUFKO0FBSUQsU0FMRCxNQUtPO0FBQ0w4dkIsa0JBQVEsQ0FBQ3o3QixHQUFELENBQVIsR0FBZ0IsSUFBaEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxXQUFTdzdCLFlBQVQsQ0FBdUJ4dUIsSUFBdkIsRUFBNkJ3dEIsS0FBN0IsRUFBb0M1NEIsS0FBcEMsRUFBMkM4NUIsR0FBM0MsRUFBZ0Q7QUFDOUMsU0FBSyxJQUFJdjhCLENBQUMsR0FBR3lDLEtBQWIsRUFBb0J6QyxDQUFDLEdBQUd1OEIsR0FBeEIsRUFBNkJ2OEIsQ0FBQyxFQUE5QixFQUFrQztBQUNoQyxVQUFJdUIsQ0FBQyxHQUFHODVCLEtBQUssQ0FBQ3I3QixDQUFELENBQWI7O0FBQ0EsVUFBSXZDLEtBQUssQ0FBQzhELENBQUQsQ0FBTCxJQUFZZzNCLFNBQVMsQ0FBQzFxQixJQUFELEVBQU90TSxDQUFQLENBQXpCLEVBQW9DO0FBQUUsZUFBT3ZCLENBQVA7QUFBVTtBQUNqRDtBQUNGOztBQUVELFdBQVNvOEIsVUFBVCxDQUNFdlksUUFERixFQUVFN1YsS0FGRixFQUdFMHJCLGtCQUhGLEVBSUVJLFVBSkYsRUFLRXQ1QixLQUxGLEVBTUUrNkIsVUFORixFQU9FO0FBQ0EsUUFBSTFYLFFBQVEsS0FBSzdWLEtBQWpCLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRUQsUUFBSXZRLEtBQUssQ0FBQ3VRLEtBQUssQ0FBQ3pCLEdBQVAsQ0FBTCxJQUFvQjlPLEtBQUssQ0FBQ3E4QixVQUFELENBQTdCLEVBQTJDO0FBQ3pDO0FBQ0E5ckIsV0FBSyxHQUFHOHJCLFVBQVUsQ0FBQ3Q1QixLQUFELENBQVYsR0FBb0J1TixVQUFVLENBQUNDLEtBQUQsQ0FBdEM7QUFDRDs7QUFFRCxRQUFJekIsR0FBRyxHQUFHeUIsS0FBSyxDQUFDekIsR0FBTixHQUFZc1gsUUFBUSxDQUFDdFgsR0FBL0I7O0FBRUEsUUFBSTdPLE1BQU0sQ0FBQ21tQixRQUFRLENBQUNyVyxrQkFBVixDQUFWLEVBQXlDO0FBQ3ZDLFVBQUkvUCxLQUFLLENBQUN1USxLQUFLLENBQUN0QixZQUFOLENBQW1Cb2IsUUFBcEIsQ0FBVCxFQUF3QztBQUN0QzBVLGVBQU8sQ0FBQzNZLFFBQVEsQ0FBQ3RYLEdBQVYsRUFBZXlCLEtBQWYsRUFBc0IwckIsa0JBQXRCLENBQVA7QUFDRCxPQUZELE1BRU87QUFDTDFyQixhQUFLLENBQUNSLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0Q7O0FBQ0Q7QUFDRCxLQW5CRCxDQXFCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSTlQLE1BQU0sQ0FBQ3NRLEtBQUssQ0FBQ2QsUUFBUCxDQUFOLElBQ0Z4UCxNQUFNLENBQUNtbUIsUUFBUSxDQUFDM1csUUFBVixDQURKLElBRUZjLEtBQUssQ0FBQ25OLEdBQU4sS0FBY2dqQixRQUFRLENBQUNoakIsR0FGckIsS0FHRG5ELE1BQU0sQ0FBQ3NRLEtBQUssQ0FBQ1gsUUFBUCxDQUFOLElBQTBCM1AsTUFBTSxDQUFDc1EsS0FBSyxDQUFDVixNQUFQLENBSC9CLENBQUosRUFJRTtBQUNBVSxXQUFLLENBQUNqQixpQkFBTixHQUEwQjhXLFFBQVEsQ0FBQzlXLGlCQUFuQztBQUNBO0FBQ0Q7O0FBRUQsUUFBSS9NLENBQUo7QUFDQSxRQUFJb00sSUFBSSxHQUFHNEIsS0FBSyxDQUFDNUIsSUFBakI7O0FBQ0EsUUFBSTNPLEtBQUssQ0FBQzJPLElBQUQsQ0FBTCxJQUFlM08sS0FBSyxDQUFDdUMsQ0FBQyxHQUFHb00sSUFBSSxDQUFDNkYsSUFBVixDQUFwQixJQUF1Q3hVLEtBQUssQ0FBQ3VDLENBQUMsR0FBR0EsQ0FBQyxDQUFDeWpCLFFBQVAsQ0FBaEQsRUFBa0U7QUFDaEV6akIsT0FBQyxDQUFDNmpCLFFBQUQsRUFBVzdWLEtBQVgsQ0FBRDtBQUNEOztBQUVELFFBQUlxdEIsS0FBSyxHQUFHeFgsUUFBUSxDQUFDeFgsUUFBckI7QUFDQSxRQUFJNHVCLEVBQUUsR0FBR2p0QixLQUFLLENBQUMzQixRQUFmOztBQUNBLFFBQUk1TyxLQUFLLENBQUMyTyxJQUFELENBQUwsSUFBZWt1QixXQUFXLENBQUN0c0IsS0FBRCxDQUE5QixFQUF1QztBQUNyQyxXQUFLaE8sQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHOHBCLEdBQUcsQ0FBQ2plLE1BQUosQ0FBVzVMLE1BQTNCLEVBQW1DLEVBQUVELENBQXJDLEVBQXdDO0FBQUU4cEIsV0FBRyxDQUFDamUsTUFBSixDQUFXN0wsQ0FBWCxFQUFjNmpCLFFBQWQsRUFBd0I3VixLQUF4QjtBQUFpQzs7QUFDM0UsVUFBSXZRLEtBQUssQ0FBQ3VDLENBQUMsR0FBR29NLElBQUksQ0FBQzZGLElBQVYsQ0FBTCxJQUF3QnhVLEtBQUssQ0FBQ3VDLENBQUMsR0FBR0EsQ0FBQyxDQUFDNkwsTUFBUCxDQUFqQyxFQUFpRDtBQUFFN0wsU0FBQyxDQUFDNmpCLFFBQUQsRUFBVzdWLEtBQVgsQ0FBRDtBQUFxQjtBQUN6RTs7QUFDRCxRQUFJMVEsT0FBTyxDQUFDMFEsS0FBSyxDQUFDMUIsSUFBUCxDQUFYLEVBQXlCO0FBQ3ZCLFVBQUk3TyxLQUFLLENBQUM0OUIsS0FBRCxDQUFMLElBQWdCNTlCLEtBQUssQ0FBQ3c5QixFQUFELENBQXpCLEVBQStCO0FBQzdCLFlBQUlJLEtBQUssS0FBS0osRUFBZCxFQUFrQjtBQUFFRyx3QkFBYyxDQUFDN3VCLEdBQUQsRUFBTTh1QixLQUFOLEVBQWFKLEVBQWIsRUFBaUJ2QixrQkFBakIsRUFBcUM2QixVQUFyQyxDQUFkO0FBQWlFO0FBQ3RGLE9BRkQsTUFFTyxJQUFJOTlCLEtBQUssQ0FBQ3c5QixFQUFELENBQVQsRUFBZTtBQUNwQixZQUFJdjJCLElBQUosRUFBMkM7QUFDekNpMkIsNEJBQWtCLENBQUNNLEVBQUQsQ0FBbEI7QUFDRDs7QUFDRCxZQUFJeDlCLEtBQUssQ0FBQ29tQixRQUFRLENBQUN2WCxJQUFWLENBQVQsRUFBMEI7QUFBRTJyQixpQkFBTyxDQUFDSixjQUFSLENBQXVCdHJCLEdBQXZCLEVBQTRCLEVBQTVCO0FBQWtDOztBQUM5RHN1QixpQkFBUyxDQUFDdHVCLEdBQUQsRUFBTSxJQUFOLEVBQVkwdUIsRUFBWixFQUFnQixDQUFoQixFQUFtQkEsRUFBRSxDQUFDaDdCLE1BQUgsR0FBWSxDQUEvQixFQUFrQ3k1QixrQkFBbEMsQ0FBVDtBQUNELE9BTk0sTUFNQSxJQUFJajhCLEtBQUssQ0FBQzQ5QixLQUFELENBQVQsRUFBa0I7QUFDdkJMLG9CQUFZLENBQUNLLEtBQUQsRUFBUSxDQUFSLEVBQVdBLEtBQUssQ0FBQ3A3QixNQUFOLEdBQWUsQ0FBMUIsQ0FBWjtBQUNELE9BRk0sTUFFQSxJQUFJeEMsS0FBSyxDQUFDb21CLFFBQVEsQ0FBQ3ZYLElBQVYsQ0FBVCxFQUEwQjtBQUMvQjJyQixlQUFPLENBQUNKLGNBQVIsQ0FBdUJ0ckIsR0FBdkIsRUFBNEIsRUFBNUI7QUFDRDtBQUNGLEtBZEQsTUFjTyxJQUFJc1gsUUFBUSxDQUFDdlgsSUFBVCxLQUFrQjBCLEtBQUssQ0FBQzFCLElBQTVCLEVBQWtDO0FBQ3ZDMnJCLGFBQU8sQ0FBQ0osY0FBUixDQUF1QnRyQixHQUF2QixFQUE0QnlCLEtBQUssQ0FBQzFCLElBQWxDO0FBQ0Q7O0FBQ0QsUUFBSTdPLEtBQUssQ0FBQzJPLElBQUQsQ0FBVCxFQUFpQjtBQUNmLFVBQUkzTyxLQUFLLENBQUN1QyxDQUFDLEdBQUdvTSxJQUFJLENBQUM2RixJQUFWLENBQUwsSUFBd0J4VSxLQUFLLENBQUN1QyxDQUFDLEdBQUdBLENBQUMsQ0FBQ3k4QixTQUFQLENBQWpDLEVBQW9EO0FBQUV6OEIsU0FBQyxDQUFDNmpCLFFBQUQsRUFBVzdWLEtBQVgsQ0FBRDtBQUFxQjtBQUM1RTtBQUNGOztBQUVELFdBQVMwdUIsZ0JBQVQsQ0FBMkIxdUIsS0FBM0IsRUFBa0N5ZSxLQUFsQyxFQUF5Q2tRLE9BQXpDLEVBQWtEO0FBQ2hEO0FBQ0E7QUFDQSxRQUFJai9CLE1BQU0sQ0FBQ2kvQixPQUFELENBQU4sSUFBbUJsL0IsS0FBSyxDQUFDdVEsS0FBSyxDQUFDaEIsTUFBUCxDQUE1QixFQUE0QztBQUMxQ2dCLFdBQUssQ0FBQ2hCLE1BQU4sQ0FBYVosSUFBYixDQUFrQml1QixhQUFsQixHQUFrQzVOLEtBQWxDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBSyxJQUFJenNCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd5c0IsS0FBSyxDQUFDeHNCLE1BQTFCLEVBQWtDLEVBQUVELENBQXBDLEVBQXVDO0FBQ3JDeXNCLGFBQUssQ0FBQ3pzQixDQUFELENBQUwsQ0FBU29NLElBQVQsQ0FBYzZGLElBQWQsQ0FBbUI4UixNQUFuQixDQUEwQjBJLEtBQUssQ0FBQ3pzQixDQUFELENBQS9CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUk0OEIsZUFBZSxHQUFHLEtBQXRCLENBcmZxQyxDQXNmckM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUdwOUIsT0FBTyxDQUFDLHlDQUFELENBQTlCLENBMWZxQyxDQTRmckM7O0FBQ0EsV0FBUys4QixPQUFULENBQWtCandCLEdBQWxCLEVBQXVCeUIsS0FBdkIsRUFBOEIwckIsa0JBQTlCLEVBQWtESixNQUFsRCxFQUEwRDtBQUN4RCxRQUFJdDVCLENBQUo7QUFDQSxRQUFJbU0sR0FBRyxHQUFHNkIsS0FBSyxDQUFDN0IsR0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUc0QixLQUFLLENBQUM1QixJQUFqQjtBQUNBLFFBQUlDLFFBQVEsR0FBRzJCLEtBQUssQ0FBQzNCLFFBQXJCO0FBQ0FpdEIsVUFBTSxHQUFHQSxNQUFNLElBQUtsdEIsSUFBSSxJQUFJQSxJQUFJLENBQUMrWixHQUFqQztBQUNBblksU0FBSyxDQUFDekIsR0FBTixHQUFZQSxHQUFaOztBQUVBLFFBQUk3TyxNQUFNLENBQUNzUSxLQUFLLENBQUNaLFNBQVAsQ0FBTixJQUEyQjNQLEtBQUssQ0FBQ3VRLEtBQUssQ0FBQ3RCLFlBQVAsQ0FBcEMsRUFBMEQ7QUFDeERzQixXQUFLLENBQUNSLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FYdUQsQ0FZeEQ7OztBQUNBLFFBQUk5SSxJQUFKLEVBQTJDO0FBQ3pDLFVBQUksQ0FBQ280QixlQUFlLENBQUN2d0IsR0FBRCxFQUFNeUIsS0FBTixFQUFhc3JCLE1BQWIsQ0FBcEIsRUFBMEM7QUFDeEMsZUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJNzdCLEtBQUssQ0FBQzJPLElBQUQsQ0FBVCxFQUFpQjtBQUNmLFVBQUkzTyxLQUFLLENBQUN1QyxDQUFDLEdBQUdvTSxJQUFJLENBQUM2RixJQUFWLENBQUwsSUFBd0J4VSxLQUFLLENBQUN1QyxDQUFDLEdBQUdBLENBQUMsQ0FBQ29qQixJQUFQLENBQWpDLEVBQStDO0FBQUVwakIsU0FBQyxDQUFDZ08sS0FBRCxFQUFRO0FBQUs7QUFBYixTQUFEO0FBQWlDOztBQUNsRixVQUFJdlEsS0FBSyxDQUFDdUMsQ0FBQyxHQUFHZ08sS0FBSyxDQUFDakIsaUJBQVgsQ0FBVCxFQUF3QztBQUN0QztBQUNBb3RCLHFCQUFhLENBQUNuc0IsS0FBRCxFQUFRMHJCLGtCQUFSLENBQWI7QUFDQSxlQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFFBQUlqOEIsS0FBSyxDQUFDME8sR0FBRCxDQUFULEVBQWdCO0FBQ2QsVUFBSTFPLEtBQUssQ0FBQzRPLFFBQUQsQ0FBVCxFQUFxQjtBQUNuQjtBQUNBLFlBQUksQ0FBQ0UsR0FBRyxDQUFDd3dCLGFBQUosRUFBTCxFQUEwQjtBQUN4Qi9DLHdCQUFjLENBQUNoc0IsS0FBRCxFQUFRM0IsUUFBUixFQUFrQnF0QixrQkFBbEIsQ0FBZDtBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0EsY0FBSWo4QixLQUFLLENBQUN1QyxDQUFDLEdBQUdvTSxJQUFMLENBQUwsSUFBbUIzTyxLQUFLLENBQUN1QyxDQUFDLEdBQUdBLENBQUMsQ0FBQ3NmLFFBQVAsQ0FBeEIsSUFBNEM3aEIsS0FBSyxDQUFDdUMsQ0FBQyxHQUFHQSxDQUFDLENBQUNnOUIsU0FBUCxDQUFyRCxFQUF3RTtBQUN0RSxnQkFBSWg5QixDQUFDLEtBQUt1TSxHQUFHLENBQUN5d0IsU0FBZCxFQUF5QjtBQUN2QjtBQUNBLGtCQUFJdDRCLEtBQUEsSUFDRixPQUFPOEUsT0FBUCxLQUFtQixXQURqQixJQUVGLENBQUNvekIsZUFGSCxFQUdFO0FBQ0FBLCtCQUFlLEdBQUcsSUFBbEI7QUFDQXB6Qix1QkFBTyxDQUFDTCxJQUFSLENBQWEsVUFBYixFQUF5Qm9ELEdBQXpCO0FBQ0EvQyx1QkFBTyxDQUFDTCxJQUFSLENBQWEsb0JBQWIsRUFBbUNuSixDQUFuQztBQUNBd0osdUJBQU8sQ0FBQ0wsSUFBUixDQUFhLG9CQUFiLEVBQW1Db0QsR0FBRyxDQUFDeXdCLFNBQXZDO0FBQ0Q7O0FBQ0QscUJBQU8sS0FBUDtBQUNEO0FBQ0YsV0FkRCxNQWNPO0FBQ0w7QUFDQSxnQkFBSUMsYUFBYSxHQUFHLElBQXBCO0FBQ0EsZ0JBQUl0SCxTQUFTLEdBQUdwcEIsR0FBRyxDQUFDMndCLFVBQXBCOztBQUNBLGlCQUFLLElBQUlyVCxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHeGQsUUFBUSxDQUFDcE0sTUFBakMsRUFBeUM0cEIsR0FBRyxFQUE1QyxFQUFnRDtBQUM5QyxrQkFBSSxDQUFDOEwsU0FBRCxJQUFjLENBQUM2RyxPQUFPLENBQUM3RyxTQUFELEVBQVl0cEIsUUFBUSxDQUFDd2QsR0FBRCxDQUFwQixFQUEyQjZQLGtCQUEzQixFQUErQ0osTUFBL0MsQ0FBMUIsRUFBa0Y7QUFDaEYyRCw2QkFBYSxHQUFHLEtBQWhCO0FBQ0E7QUFDRDs7QUFDRHRILHVCQUFTLEdBQUdBLFNBQVMsQ0FBQ2lDLFdBQXRCO0FBQ0QsYUFWSSxDQVdMO0FBQ0E7OztBQUNBLGdCQUFJLENBQUNxRixhQUFELElBQWtCdEgsU0FBdEIsRUFBaUM7QUFDL0I7QUFDQSxrQkFBSWp4QixLQUFBLElBQ0YsT0FBTzhFLE9BQVAsS0FBbUIsV0FEakIsSUFFRixDQUFDb3pCLGVBRkgsRUFHRTtBQUNBQSwrQkFBZSxHQUFHLElBQWxCO0FBQ0FwekIsdUJBQU8sQ0FBQ0wsSUFBUixDQUFhLFVBQWIsRUFBeUJvRCxHQUF6QjtBQUNBL0MsdUJBQU8sQ0FBQ0wsSUFBUixDQUFhLHFDQUFiLEVBQW9Eb0QsR0FBRyxDQUFDNHdCLFVBQXhELEVBQW9FOXdCLFFBQXBFO0FBQ0Q7O0FBQ0QscUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUNELFVBQUk1TyxLQUFLLENBQUMyTyxJQUFELENBQVQsRUFBaUI7QUFDZixZQUFJZ3hCLFVBQVUsR0FBRyxLQUFqQjs7QUFDQSxhQUFLLElBQUl2OEIsR0FBVCxJQUFnQnVMLElBQWhCLEVBQXNCO0FBQ3BCLGNBQUksQ0FBQ3l3QixnQkFBZ0IsQ0FBQ2g4QixHQUFELENBQXJCLEVBQTRCO0FBQzFCdThCLHNCQUFVLEdBQUcsSUFBYjtBQUNBbkQsNkJBQWlCLENBQUNqc0IsS0FBRCxFQUFRMHJCLGtCQUFSLENBQWpCO0FBQ0E7QUFDRDtBQUNGOztBQUNELFlBQUksQ0FBQzBELFVBQUQsSUFBZWh4QixJQUFJLENBQUMsT0FBRCxDQUF2QixFQUFrQztBQUNoQztBQUNBZ04sa0JBQVEsQ0FBQ2hOLElBQUksQ0FBQyxPQUFELENBQUwsQ0FBUjtBQUNEO0FBQ0Y7QUFDRixLQS9ERCxNQStETyxJQUFJRyxHQUFHLENBQUNILElBQUosS0FBYTRCLEtBQUssQ0FBQzFCLElBQXZCLEVBQTZCO0FBQ2xDQyxTQUFHLENBQUNILElBQUosR0FBVzRCLEtBQUssQ0FBQzFCLElBQWpCO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBU3d3QixlQUFULENBQTBCanZCLElBQTFCLEVBQWdDRyxLQUFoQyxFQUF1Q3NyQixNQUF2QyxFQUErQztBQUM3QyxRQUFJNzdCLEtBQUssQ0FBQ3VRLEtBQUssQ0FBQzdCLEdBQVAsQ0FBVCxFQUFzQjtBQUNwQixhQUFPNkIsS0FBSyxDQUFDN0IsR0FBTixDQUFVMUwsT0FBVixDQUFrQixlQUFsQixNQUF1QyxDQUF2QyxJQUNMLENBQUM0NEIsbUJBQW1CLENBQUNyckIsS0FBRCxFQUFRc3JCLE1BQVIsQ0FBcEIsSUFDQXRyQixLQUFLLENBQUM3QixHQUFOLENBQVVqTSxXQUFWLFFBQTZCMk4sSUFBSSxDQUFDb3BCLE9BQUwsSUFBZ0JwcEIsSUFBSSxDQUFDb3BCLE9BQUwsQ0FBYS8yQixXQUFiLEVBQTdDLENBRkY7QUFJRCxLQUxELE1BS087QUFDTCxhQUFPMk4sSUFBSSxDQUFDd3ZCLFFBQUwsTUFBbUJydkIsS0FBSyxDQUFDWixTQUFOLEdBQWtCLENBQWxCLEdBQXNCLENBQXpDLENBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sU0FBU2t3QixLQUFULENBQWdCelosUUFBaEIsRUFBMEI3VixLQUExQixFQUFpQ3FWLFNBQWpDLEVBQTRDa1ksVUFBNUMsRUFBd0Q7QUFDN0QsUUFBSWorQixPQUFPLENBQUMwUSxLQUFELENBQVgsRUFBb0I7QUFDbEIsVUFBSXZRLEtBQUssQ0FBQ29tQixRQUFELENBQVQsRUFBcUI7QUFBRWtYLHlCQUFpQixDQUFDbFgsUUFBRCxDQUFqQjtBQUE4Qjs7QUFDckQ7QUFDRDs7QUFFRCxRQUFJMFosY0FBYyxHQUFHLEtBQXJCO0FBQ0EsUUFBSTdELGtCQUFrQixHQUFHLEVBQXpCOztBQUVBLFFBQUlwOEIsT0FBTyxDQUFDdW1CLFFBQUQsQ0FBWCxFQUF1QjtBQUNyQjtBQUNBMFosb0JBQWMsR0FBRyxJQUFqQjtBQUNBOUQsZUFBUyxDQUFDenJCLEtBQUQsRUFBUTByQixrQkFBUixDQUFUO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsVUFBSThELGFBQWEsR0FBRy8vQixLQUFLLENBQUNvbUIsUUFBUSxDQUFDd1osUUFBVixDQUF6Qjs7QUFDQSxVQUFJLENBQUNHLGFBQUQsSUFBa0JqRixTQUFTLENBQUMxVSxRQUFELEVBQVc3VixLQUFYLENBQS9CLEVBQWtEO0FBQ2hEO0FBQ0FvdUIsa0JBQVUsQ0FBQ3ZZLFFBQUQsRUFBVzdWLEtBQVgsRUFBa0IwckIsa0JBQWxCLEVBQXNDLElBQXRDLEVBQTRDLElBQTVDLEVBQWtENkIsVUFBbEQsQ0FBVjtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUlpQyxhQUFKLEVBQW1CO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQUkzWixRQUFRLENBQUN3WixRQUFULEtBQXNCLENBQXRCLElBQTJCeFosUUFBUSxDQUFDNFosWUFBVCxDQUFzQnQ1QixRQUF0QixDQUEvQixFQUFnRTtBQUM5RDBmLG9CQUFRLENBQUM2WixlQUFULENBQXlCdjVCLFFBQXpCO0FBQ0FrZixxQkFBUyxHQUFHLElBQVo7QUFDRDs7QUFDRCxjQUFJM2xCLE1BQU0sQ0FBQzJsQixTQUFELENBQVYsRUFBdUI7QUFDckIsZ0JBQUltWixPQUFPLENBQUMzWSxRQUFELEVBQVc3VixLQUFYLEVBQWtCMHJCLGtCQUFsQixDQUFYLEVBQWtEO0FBQ2hEZ0QsOEJBQWdCLENBQUMxdUIsS0FBRCxFQUFRMHJCLGtCQUFSLEVBQTRCLElBQTVCLENBQWhCO0FBQ0EscUJBQU83VixRQUFQO0FBQ0QsYUFIRCxNQUdPLElBQUluZixJQUFKLEVBQTJDO0FBQ2hEeUUsa0JBQUksQ0FDRiwrREFDQSw4REFEQSxHQUVBLCtEQUZBLEdBR0EsNERBSEEsR0FJQSwwQkFMRSxDQUFKO0FBT0Q7QUFDRixXQXJCZ0IsQ0FzQmpCO0FBQ0E7OztBQUNBMGEsa0JBQVEsR0FBR29WLFdBQVcsQ0FBQ3BWLFFBQUQsQ0FBdEI7QUFDRCxTQTFCSSxDQTRCTDs7O0FBQ0EsWUFBSThaLE1BQU0sR0FBRzlaLFFBQVEsQ0FBQ3RYLEdBQXRCO0FBQ0EsWUFBSW90QixTQUFTLEdBQUcxQixPQUFPLENBQUN2QyxVQUFSLENBQW1CaUksTUFBbkIsQ0FBaEIsQ0E5QkssQ0FnQ0w7O0FBQ0FsRSxpQkFBUyxDQUNQenJCLEtBRE8sRUFFUDByQixrQkFGTyxFQUdQO0FBQ0E7QUFDQTtBQUNBaUUsY0FBTSxDQUFDQyxRQUFQLEdBQWtCLElBQWxCLEdBQXlCakUsU0FObEIsRUFPUDFCLE9BQU8sQ0FBQ0wsV0FBUixDQUFvQitGLE1BQXBCLENBUE8sQ0FBVCxDQWpDSyxDQTJDTDs7QUFDQSxZQUFJbGdDLEtBQUssQ0FBQ3VRLEtBQUssQ0FBQ2hCLE1BQVAsQ0FBVCxFQUF5QjtBQUN2QixjQUFJNHRCLFFBQVEsR0FBRzVzQixLQUFLLENBQUNoQixNQUFyQjtBQUNBLGNBQUk2d0IsU0FBUyxHQUFHdkQsV0FBVyxDQUFDdHNCLEtBQUQsQ0FBM0I7O0FBQ0EsaUJBQU80c0IsUUFBUCxFQUFpQjtBQUNmLGlCQUFLLElBQUk1NkIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhwQixHQUFHLENBQUMxRixPQUFKLENBQVlua0IsTUFBaEMsRUFBd0MsRUFBRUQsQ0FBMUMsRUFBNkM7QUFDM0M4cEIsaUJBQUcsQ0FBQzFGLE9BQUosQ0FBWXBrQixDQUFaLEVBQWU0NkIsUUFBZjtBQUNEOztBQUNEQSxvQkFBUSxDQUFDcnVCLEdBQVQsR0FBZXlCLEtBQUssQ0FBQ3pCLEdBQXJCOztBQUNBLGdCQUFJc3hCLFNBQUosRUFBZTtBQUNiLG1CQUFLLElBQUloVSxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHQyxHQUFHLENBQUNqcUIsTUFBSixDQUFXSSxNQUFuQyxFQUEyQyxFQUFFNHBCLEdBQTdDLEVBQWtEO0FBQ2hEQyxtQkFBRyxDQUFDanFCLE1BQUosQ0FBV2dxQixHQUFYLEVBQWdCeU8sU0FBaEIsRUFBMkJzQyxRQUEzQjtBQUNELGVBSFksQ0FJYjtBQUNBO0FBQ0E7OztBQUNBLGtCQUFJN1csTUFBTSxHQUFHNlcsUUFBUSxDQUFDeHVCLElBQVQsQ0FBYzZGLElBQWQsQ0FBbUI4UixNQUFoQzs7QUFDQSxrQkFBSUEsTUFBTSxDQUFDM0ksTUFBWCxFQUFtQjtBQUNqQjtBQUNBLHFCQUFLLElBQUkwaUIsR0FBRyxHQUFHLENBQWYsRUFBa0JBLEdBQUcsR0FBRy9aLE1BQU0sQ0FBQzFKLEdBQVAsQ0FBV3BhLE1BQW5DLEVBQTJDNjlCLEdBQUcsRUFBOUMsRUFBa0Q7QUFDaEQvWix3QkFBTSxDQUFDMUosR0FBUCxDQUFXeWpCLEdBQVg7QUFDRDtBQUNGO0FBQ0YsYUFkRCxNQWNPO0FBQ0w1Rix5QkFBVyxDQUFDMEMsUUFBRCxDQUFYO0FBQ0Q7O0FBQ0RBLG9CQUFRLEdBQUdBLFFBQVEsQ0FBQzV0QixNQUFwQjtBQUNEO0FBQ0YsU0F2RUksQ0F5RUw7OztBQUNBLFlBQUl2UCxLQUFLLENBQUNrOEIsU0FBRCxDQUFULEVBQXNCO0FBQ3BCcUIsc0JBQVksQ0FBQyxDQUFDblgsUUFBRCxDQUFELEVBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFaO0FBQ0QsU0FGRCxNQUVPLElBQUlwbUIsS0FBSyxDQUFDb21CLFFBQVEsQ0FBQzFYLEdBQVYsQ0FBVCxFQUF5QjtBQUM5QjR1QiwyQkFBaUIsQ0FBQ2xYLFFBQUQsQ0FBakI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ2WSxvQkFBZ0IsQ0FBQzF1QixLQUFELEVBQVEwckIsa0JBQVIsRUFBNEI2RCxjQUE1QixDQUFoQjtBQUNBLFdBQU92dkIsS0FBSyxDQUFDekIsR0FBYjtBQUNELEdBdEdEO0FBdUdEO0FBRUQ7OztBQUVBLElBQUk0RyxVQUFVLEdBQUc7QUFDZnRULFFBQU0sRUFBRWsrQixnQkFETztBQUVmbHlCLFFBQU0sRUFBRWt5QixnQkFGTztBQUdmM1osU0FBTyxFQUFFLFNBQVM0WixnQkFBVCxDQUEyQmh3QixLQUEzQixFQUFrQztBQUN6Qyt2QixvQkFBZ0IsQ0FBQy92QixLQUFELEVBQVFzcUIsU0FBUixDQUFoQjtBQUNEO0FBTGMsQ0FBakI7O0FBUUEsU0FBU3lGLGdCQUFULENBQTJCbGEsUUFBM0IsRUFBcUM3VixLQUFyQyxFQUE0QztBQUMxQyxNQUFJNlYsUUFBUSxDQUFDelgsSUFBVCxDQUFjK0csVUFBZCxJQUE0Qm5GLEtBQUssQ0FBQzVCLElBQU4sQ0FBVytHLFVBQTNDLEVBQXVEO0FBQ3JEd1gsV0FBTyxDQUFDOUcsUUFBRCxFQUFXN1YsS0FBWCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTMmMsT0FBVCxDQUFrQjlHLFFBQWxCLEVBQTRCN1YsS0FBNUIsRUFBbUM7QUFDakMsTUFBSWl3QixRQUFRLEdBQUdwYSxRQUFRLEtBQUt5VSxTQUE1QjtBQUNBLE1BQUk0RixTQUFTLEdBQUdsd0IsS0FBSyxLQUFLc3FCLFNBQTFCO0FBQ0EsTUFBSTZGLE9BQU8sR0FBR0MscUJBQXFCLENBQUN2YSxRQUFRLENBQUN6WCxJQUFULENBQWMrRyxVQUFmLEVBQTJCMFEsUUFBUSxDQUFDclgsT0FBcEMsQ0FBbkM7QUFDQSxNQUFJNnhCLE9BQU8sR0FBR0QscUJBQXFCLENBQUNwd0IsS0FBSyxDQUFDNUIsSUFBTixDQUFXK0csVUFBWixFQUF3Qm5GLEtBQUssQ0FBQ3hCLE9BQTlCLENBQW5DO0FBRUEsTUFBSTh4QixjQUFjLEdBQUcsRUFBckI7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUVBLE1BQUkxOUIsR0FBSixFQUFTMjlCLE1BQVQsRUFBaUJDLEdBQWpCOztBQUNBLE9BQUs1OUIsR0FBTCxJQUFZdzlCLE9BQVosRUFBcUI7QUFDbkJHLFVBQU0sR0FBR0wsT0FBTyxDQUFDdDlCLEdBQUQsQ0FBaEI7QUFDQTQ5QixPQUFHLEdBQUdKLE9BQU8sQ0FBQ3g5QixHQUFELENBQWI7O0FBQ0EsUUFBSSxDQUFDMjlCLE1BQUwsRUFBYTtBQUNYO0FBQ0FFLGdCQUFVLENBQUNELEdBQUQsRUFBTSxNQUFOLEVBQWN6d0IsS0FBZCxFQUFxQjZWLFFBQXJCLENBQVY7O0FBQ0EsVUFBSTRhLEdBQUcsQ0FBQzc0QixHQUFKLElBQVc2NEIsR0FBRyxDQUFDNzRCLEdBQUosQ0FBUWtKLFFBQXZCLEVBQWlDO0FBQy9Cd3ZCLHNCQUFjLENBQUN2ekIsSUFBZixDQUFvQjB6QixHQUFwQjtBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0w7QUFDQUEsU0FBRyxDQUFDN1AsUUFBSixHQUFlNFAsTUFBTSxDQUFDM2dDLEtBQXRCO0FBQ0E0Z0MsU0FBRyxDQUFDRSxNQUFKLEdBQWFILE1BQU0sQ0FBQ0ksR0FBcEI7QUFDQUYsZ0JBQVUsQ0FBQ0QsR0FBRCxFQUFNLFFBQU4sRUFBZ0J6d0IsS0FBaEIsRUFBdUI2VixRQUF2QixDQUFWOztBQUNBLFVBQUk0YSxHQUFHLENBQUM3NEIsR0FBSixJQUFXNjRCLEdBQUcsQ0FBQzc0QixHQUFKLENBQVFpNUIsZ0JBQXZCLEVBQXlDO0FBQ3ZDTix5QkFBaUIsQ0FBQ3h6QixJQUFsQixDQUF1QjB6QixHQUF2QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFJSCxjQUFjLENBQUNyK0IsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTYrQixVQUFVLEdBQUcsWUFBWTtBQUMzQixXQUFLLElBQUk5K0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3MrQixjQUFjLENBQUNyK0IsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMwK0Isa0JBQVUsQ0FBQ0osY0FBYyxDQUFDdCtCLENBQUQsQ0FBZixFQUFvQixVQUFwQixFQUFnQ2dPLEtBQWhDLEVBQXVDNlYsUUFBdkMsQ0FBVjtBQUNEO0FBQ0YsS0FKRDs7QUFLQSxRQUFJb2EsUUFBSixFQUFjO0FBQ1pqakIsb0JBQWMsQ0FBQ2hOLEtBQUQsRUFBUSxRQUFSLEVBQWtCOHdCLFVBQWxCLENBQWQ7QUFDRCxLQUZELE1BRU87QUFDTEEsZ0JBQVU7QUFDWDtBQUNGOztBQUVELE1BQUlQLGlCQUFpQixDQUFDdCtCLE1BQXRCLEVBQThCO0FBQzVCK2Esa0JBQWMsQ0FBQ2hOLEtBQUQsRUFBUSxXQUFSLEVBQXFCLFlBQVk7QUFDN0MsV0FBSyxJQUFJaE8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3UrQixpQkFBaUIsQ0FBQ3QrQixNQUF0QyxFQUE4Q0QsQ0FBQyxFQUEvQyxFQUFtRDtBQUNqRDArQixrQkFBVSxDQUFDSCxpQkFBaUIsQ0FBQ3YrQixDQUFELENBQWxCLEVBQXVCLGtCQUF2QixFQUEyQ2dPLEtBQTNDLEVBQWtENlYsUUFBbEQsQ0FBVjtBQUNEO0FBQ0YsS0FKYSxDQUFkO0FBS0Q7O0FBRUQsTUFBSSxDQUFDb2EsUUFBTCxFQUFlO0FBQ2IsU0FBS3A5QixHQUFMLElBQVlzOUIsT0FBWixFQUFxQjtBQUNuQixVQUFJLENBQUNFLE9BQU8sQ0FBQ3g5QixHQUFELENBQVosRUFBbUI7QUFDakI7QUFDQTY5QixrQkFBVSxDQUFDUCxPQUFPLENBQUN0OUIsR0FBRCxDQUFSLEVBQWUsUUFBZixFQUF5QmdqQixRQUF6QixFQUFtQ0EsUUFBbkMsRUFBNkNxYSxTQUE3QyxDQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsSUFBSWEsY0FBYyxHQUFHM2hDLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBYyxJQUFkLENBQXJCOztBQUVBLFNBQVN1K0IscUJBQVQsQ0FDRWxyQixJQURGLEVBRUV0SixFQUZGLEVBR0U7QUFDQSxNQUFJN0csR0FBRyxHQUFHM0YsTUFBTSxDQUFDeUMsTUFBUCxDQUFjLElBQWQsQ0FBVjs7QUFDQSxNQUFJLENBQUNxVCxJQUFMLEVBQVc7QUFDVDtBQUNBLFdBQU9uUSxHQUFQO0FBQ0Q7O0FBQ0QsTUFBSS9DLENBQUosRUFBT3krQixHQUFQOztBQUNBLE9BQUt6K0IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHa1QsSUFBSSxDQUFDalQsTUFBckIsRUFBNkJELENBQUMsRUFBOUIsRUFBa0M7QUFDaEN5K0IsT0FBRyxHQUFHdnJCLElBQUksQ0FBQ2xULENBQUQsQ0FBVjs7QUFDQSxRQUFJLENBQUN5K0IsR0FBRyxDQUFDTyxTQUFULEVBQW9CO0FBQ2xCO0FBQ0FQLFNBQUcsQ0FBQ08sU0FBSixHQUFnQkQsY0FBaEI7QUFDRDs7QUFDRGg4QixPQUFHLENBQUNrOEIsYUFBYSxDQUFDUixHQUFELENBQWQsQ0FBSCxHQUEwQkEsR0FBMUI7QUFDQUEsT0FBRyxDQUFDNzRCLEdBQUosR0FBVStOLFlBQVksQ0FBQy9KLEVBQUUsQ0FBQ1EsUUFBSixFQUFjLFlBQWQsRUFBNEJxMEIsR0FBRyxDQUFDbjBCLElBQWhDLEVBQXNDLElBQXRDLENBQXRCO0FBQ0QsR0FmRCxDQWdCQTs7O0FBQ0EsU0FBT3ZILEdBQVA7QUFDRDs7QUFFRCxTQUFTazhCLGFBQVQsQ0FBd0JSLEdBQXhCLEVBQTZCO0FBQzNCLFNBQU9BLEdBQUcsQ0FBQ1MsT0FBSixJQUFpQlQsR0FBRyxDQUFDbjBCLElBQUwsR0FBYSxHQUFiLEdBQW9CbE4sTUFBTSxDQUFDMEcsSUFBUCxDQUFZMjZCLEdBQUcsQ0FBQ08sU0FBSixJQUFpQixFQUE3QixFQUFpQ2gwQixJQUFqQyxDQUFzQyxHQUF0QyxDQUEzQztBQUNEOztBQUVELFNBQVMwekIsVUFBVCxDQUFxQkQsR0FBckIsRUFBMEJ4c0IsSUFBMUIsRUFBZ0NqRSxLQUFoQyxFQUF1QzZWLFFBQXZDLEVBQWlEcWEsU0FBakQsRUFBNEQ7QUFDMUQsTUFBSW45QixFQUFFLEdBQUcwOUIsR0FBRyxDQUFDNzRCLEdBQUosSUFBVzY0QixHQUFHLENBQUM3NEIsR0FBSixDQUFRcU0sSUFBUixDQUFwQjs7QUFDQSxNQUFJbFIsRUFBSixFQUFRO0FBQ04sUUFBSTtBQUNGQSxRQUFFLENBQUNpTixLQUFLLENBQUN6QixHQUFQLEVBQVlreUIsR0FBWixFQUFpQnp3QixLQUFqQixFQUF3QjZWLFFBQXhCLEVBQWtDcWEsU0FBbEMsQ0FBRjtBQUNELEtBRkQsQ0FFRSxPQUFPeDZCLENBQVAsRUFBVTtBQUNWMFMsaUJBQVcsQ0FBQzFTLENBQUQsRUFBSXNLLEtBQUssQ0FBQ3hCLE9BQVYsRUFBb0IsZUFBZ0JpeUIsR0FBRyxDQUFDbjBCLElBQXBCLEdBQTRCLEdBQTVCLEdBQWtDMkgsSUFBbEMsR0FBeUMsT0FBN0QsQ0FBWDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxJQUFJa3RCLFdBQVcsR0FBRyxDQUNoQjlYLEdBRGdCLEVBRWhCbFUsVUFGZ0IsQ0FBbEI7QUFLQTs7QUFFQSxTQUFTaXNCLFdBQVQsQ0FBc0J2YixRQUF0QixFQUFnQzdWLEtBQWhDLEVBQXVDO0FBQ3JDLE1BQUlsRyxJQUFJLEdBQUdrRyxLQUFLLENBQUN2QixnQkFBakI7O0FBQ0EsTUFBSWhQLEtBQUssQ0FBQ3FLLElBQUQsQ0FBTCxJQUFlQSxJQUFJLENBQUNVLElBQUwsQ0FBVXlCLE9BQVYsQ0FBa0JvMUIsWUFBbEIsS0FBbUMsS0FBdEQsRUFBNkQ7QUFDM0Q7QUFDRDs7QUFDRCxNQUFJL2hDLE9BQU8sQ0FBQ3VtQixRQUFRLENBQUN6WCxJQUFULENBQWNrUCxLQUFmLENBQVAsSUFBZ0NoZSxPQUFPLENBQUMwUSxLQUFLLENBQUM1QixJQUFOLENBQVdrUCxLQUFaLENBQTNDLEVBQStEO0FBQzdEO0FBQ0Q7O0FBQ0QsTUFBSXphLEdBQUosRUFBUzBWLEdBQVQsRUFBY3NFLEdBQWQ7QUFDQSxNQUFJdE8sR0FBRyxHQUFHeUIsS0FBSyxDQUFDekIsR0FBaEI7QUFDQSxNQUFJK3lCLFFBQVEsR0FBR3piLFFBQVEsQ0FBQ3pYLElBQVQsQ0FBY2tQLEtBQWQsSUFBdUIsRUFBdEM7QUFDQSxNQUFJQSxLQUFLLEdBQUd0TixLQUFLLENBQUM1QixJQUFOLENBQVdrUCxLQUFYLElBQW9CLEVBQWhDLENBWHFDLENBWXJDOztBQUNBLE1BQUk3ZCxLQUFLLENBQUM2ZCxLQUFLLENBQUN6TSxNQUFQLENBQVQsRUFBeUI7QUFDdkJ5TSxTQUFLLEdBQUd0TixLQUFLLENBQUM1QixJQUFOLENBQVdrUCxLQUFYLEdBQW1CM1ksTUFBTSxDQUFDLEVBQUQsRUFBSzJZLEtBQUwsQ0FBakM7QUFDRDs7QUFFRCxPQUFLemEsR0FBTCxJQUFZeWEsS0FBWixFQUFtQjtBQUNqQi9FLE9BQUcsR0FBRytFLEtBQUssQ0FBQ3phLEdBQUQsQ0FBWDtBQUNBZ2EsT0FBRyxHQUFHeWtCLFFBQVEsQ0FBQ3orQixHQUFELENBQWQ7O0FBQ0EsUUFBSWdhLEdBQUcsS0FBS3RFLEdBQVosRUFBaUI7QUFDZmdwQixhQUFPLENBQUNoekIsR0FBRCxFQUFNMUwsR0FBTixFQUFXMFYsR0FBWCxDQUFQO0FBQ0Q7QUFDRixHQXZCb0MsQ0F3QnJDO0FBQ0E7O0FBQ0E7OztBQUNBLE1BQUksQ0FBQ3JQLElBQUksSUFBSUUsTUFBVCxLQUFvQmtVLEtBQUssQ0FBQ3pkLEtBQU4sS0FBZ0J5aEMsUUFBUSxDQUFDemhDLEtBQWpELEVBQXdEO0FBQ3REMGhDLFdBQU8sQ0FBQ2h6QixHQUFELEVBQU0sT0FBTixFQUFlK08sS0FBSyxDQUFDemQsS0FBckIsQ0FBUDtBQUNEOztBQUNELE9BQUtnRCxHQUFMLElBQVl5K0IsUUFBWixFQUFzQjtBQUNwQixRQUFJaGlDLE9BQU8sQ0FBQ2dlLEtBQUssQ0FBQ3phLEdBQUQsQ0FBTixDQUFYLEVBQXlCO0FBQ3ZCLFVBQUkwMEIsT0FBTyxDQUFDMTBCLEdBQUQsQ0FBWCxFQUFrQjtBQUNoQjBMLFdBQUcsQ0FBQ2l6QixpQkFBSixDQUFzQmxLLE9BQXRCLEVBQStCRSxZQUFZLENBQUMzMEIsR0FBRCxDQUEzQztBQUNELE9BRkQsTUFFTyxJQUFJLENBQUNvMEIsZ0JBQWdCLENBQUNwMEIsR0FBRCxDQUFyQixFQUE0QjtBQUNqQzBMLFdBQUcsQ0FBQ214QixlQUFKLENBQW9CNzhCLEdBQXBCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBUzArQixPQUFULENBQWtCeHVCLEVBQWxCLEVBQXNCbFEsR0FBdEIsRUFBMkJoRCxLQUEzQixFQUFrQztBQUNoQyxNQUFJa1QsRUFBRSxDQUFDa21CLE9BQUgsQ0FBV3gyQixPQUFYLENBQW1CLEdBQW5CLElBQTBCLENBQUMsQ0FBL0IsRUFBa0M7QUFDaENnL0IsZUFBVyxDQUFDMXVCLEVBQUQsRUFBS2xRLEdBQUwsRUFBVWhELEtBQVYsQ0FBWDtBQUNELEdBRkQsTUFFTyxJQUFJdzNCLGFBQWEsQ0FBQ3gwQixHQUFELENBQWpCLEVBQXdCO0FBQzdCO0FBQ0E7QUFDQSxRQUFJdTBCLGdCQUFnQixDQUFDdjNCLEtBQUQsQ0FBcEIsRUFBNkI7QUFDM0JrVCxRQUFFLENBQUMyc0IsZUFBSCxDQUFtQjc4QixHQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0E7QUFDQWhELFdBQUssR0FBR2dELEdBQUcsS0FBSyxpQkFBUixJQUE2QmtRLEVBQUUsQ0FBQ2ttQixPQUFILEtBQWUsT0FBNUMsR0FDSixNQURJLEdBRUpwMkIsR0FGSjtBQUdBa1EsUUFBRSxDQUFDb21CLFlBQUgsQ0FBZ0J0MkIsR0FBaEIsRUFBcUJoRCxLQUFyQjtBQUNEO0FBQ0YsR0FiTSxNQWFBLElBQUlvM0IsZ0JBQWdCLENBQUNwMEIsR0FBRCxDQUFwQixFQUEyQjtBQUNoQ2tRLE1BQUUsQ0FBQ29tQixZQUFILENBQWdCdDJCLEdBQWhCLEVBQXFCczBCLHNCQUFzQixDQUFDdDBCLEdBQUQsRUFBTWhELEtBQU4sQ0FBM0M7QUFDRCxHQUZNLE1BRUEsSUFBSTAzQixPQUFPLENBQUMxMEIsR0FBRCxDQUFYLEVBQWtCO0FBQ3ZCLFFBQUl1MEIsZ0JBQWdCLENBQUN2M0IsS0FBRCxDQUFwQixFQUE2QjtBQUMzQmtULFFBQUUsQ0FBQ3l1QixpQkFBSCxDQUFxQmxLLE9BQXJCLEVBQThCRSxZQUFZLENBQUMzMEIsR0FBRCxDQUExQztBQUNELEtBRkQsTUFFTztBQUNMa1EsUUFBRSxDQUFDMnVCLGNBQUgsQ0FBa0JwSyxPQUFsQixFQUEyQnowQixHQUEzQixFQUFnQ2hELEtBQWhDO0FBQ0Q7QUFDRixHQU5NLE1BTUE7QUFDTDRoQyxlQUFXLENBQUMxdUIsRUFBRCxFQUFLbFEsR0FBTCxFQUFVaEQsS0FBVixDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTNGhDLFdBQVQsQ0FBc0IxdUIsRUFBdEIsRUFBMEJsUSxHQUExQixFQUErQmhELEtBQS9CLEVBQXNDO0FBQ3BDLE1BQUl1M0IsZ0JBQWdCLENBQUN2M0IsS0FBRCxDQUFwQixFQUE2QjtBQUMzQmtULE1BQUUsQ0FBQzJzQixlQUFILENBQW1CNzhCLEdBQW5CO0FBQ0QsR0FGRCxNQUVPO0FBQ0w7QUFDQTtBQUNBOztBQUNBO0FBQ0EsUUFDRXFHLElBQUksSUFBSSxDQUFDQyxLQUFULElBQ0E0SixFQUFFLENBQUNrbUIsT0FBSCxLQUFlLFVBRGYsSUFFQXAyQixHQUFHLEtBQUssYUFGUixJQUV5QmhELEtBQUssS0FBSyxFQUZuQyxJQUV5QyxDQUFDa1QsRUFBRSxDQUFDNHVCLE1BSC9DLEVBSUU7QUFDQSxVQUFJQyxPQUFPLEdBQUcsVUFBVWw4QixDQUFWLEVBQWE7QUFDekJBLFNBQUMsQ0FBQ204Qix3QkFBRjtBQUNBOXVCLFVBQUUsQ0FBQyt1QixtQkFBSCxDQUF1QixPQUF2QixFQUFnQ0YsT0FBaEM7QUFDRCxPQUhEOztBQUlBN3VCLFFBQUUsQ0FBQy9JLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCNDNCLE9BQTdCLEVBTEEsQ0FNQTs7QUFDQTd1QixRQUFFLENBQUM0dUIsTUFBSCxHQUFZLElBQVo7QUFBa0I7QUFDbkI7O0FBQ0Q1dUIsTUFBRSxDQUFDb21CLFlBQUgsQ0FBZ0J0MkIsR0FBaEIsRUFBcUJoRCxLQUFyQjtBQUNEO0FBQ0Y7O0FBRUQsSUFBSXlkLEtBQUssR0FBRztBQUNWemIsUUFBTSxFQUFFdS9CLFdBREU7QUFFVnZ6QixRQUFNLEVBQUV1ekI7QUFGRSxDQUFaO0FBS0E7O0FBRUEsU0FBU1csV0FBVCxDQUFzQmxjLFFBQXRCLEVBQWdDN1YsS0FBaEMsRUFBdUM7QUFDckMsTUFBSStDLEVBQUUsR0FBRy9DLEtBQUssQ0FBQ3pCLEdBQWY7QUFDQSxNQUFJSCxJQUFJLEdBQUc0QixLQUFLLENBQUM1QixJQUFqQjtBQUNBLE1BQUk0ekIsT0FBTyxHQUFHbmMsUUFBUSxDQUFDelgsSUFBdkI7O0FBQ0EsTUFDRTlPLE9BQU8sQ0FBQzhPLElBQUksQ0FBQzBwQixXQUFOLENBQVAsSUFDQXg0QixPQUFPLENBQUM4TyxJQUFJLENBQUNvYSxLQUFOLENBRFAsS0FFRWxwQixPQUFPLENBQUMwaUMsT0FBRCxDQUFQLElBQ0UxaUMsT0FBTyxDQUFDMGlDLE9BQU8sQ0FBQ2xLLFdBQVQsQ0FBUCxJQUNBeDRCLE9BQU8sQ0FBQzBpQyxPQUFPLENBQUN4WixLQUFULENBSlgsQ0FERixFQVFFO0FBQ0E7QUFDRDs7QUFFRCxNQUFJeVosR0FBRyxHQUFHeEssZ0JBQWdCLENBQUN6bkIsS0FBRCxDQUExQixDQWhCcUMsQ0FrQnJDOztBQUNBLE1BQUlreUIsZUFBZSxHQUFHbnZCLEVBQUUsQ0FBQ292QixrQkFBekI7O0FBQ0EsTUFBSTFpQyxLQUFLLENBQUN5aUMsZUFBRCxDQUFULEVBQTRCO0FBQzFCRCxPQUFHLEdBQUdudUIsTUFBTSxDQUFDbXVCLEdBQUQsRUFBTWpLLGNBQWMsQ0FBQ2tLLGVBQUQsQ0FBcEIsQ0FBWjtBQUNELEdBdEJvQyxDQXdCckM7OztBQUNBLE1BQUlELEdBQUcsS0FBS2x2QixFQUFFLENBQUNxdkIsVUFBZixFQUEyQjtBQUN6QnJ2QixNQUFFLENBQUNvbUIsWUFBSCxDQUFnQixPQUFoQixFQUF5QjhJLEdBQXpCO0FBQ0FsdkIsTUFBRSxDQUFDcXZCLFVBQUgsR0FBZ0JILEdBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxJQUFJSSxLQUFLLEdBQUc7QUFDVnhnQyxRQUFNLEVBQUVrZ0MsV0FERTtBQUVWbDBCLFFBQU0sRUFBRWswQjtBQUZFLENBQVo7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUVBO0FBQ0E7O0FBQ0EsSUFBSU8sV0FBVyxHQUFHLEtBQWxCO0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUcsS0FBM0I7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLGVBQVQsQ0FBMEIvbEIsRUFBMUIsRUFBOEI7QUFDNUI7QUFDQSxNQUFJaGQsS0FBSyxDQUFDZ2QsRUFBRSxDQUFDNmxCLFdBQUQsQ0FBSCxDQUFULEVBQTRCO0FBQzFCO0FBQ0EsUUFBSXhsQixLQUFLLEdBQUc1VCxJQUFJLEdBQUcsUUFBSCxHQUFjLE9BQTlCO0FBQ0F1VCxNQUFFLENBQUNLLEtBQUQsQ0FBRixHQUFZLEdBQUdoSixNQUFILENBQVUySSxFQUFFLENBQUM2bEIsV0FBRCxDQUFaLEVBQTJCN2xCLEVBQUUsQ0FBQ0ssS0FBRCxDQUFGLElBQWEsRUFBeEMsQ0FBWjtBQUNBLFdBQU9MLEVBQUUsQ0FBQzZsQixXQUFELENBQVQ7QUFDRCxHQVAyQixDQVE1QjtBQUNBOztBQUNBOzs7QUFDQSxNQUFJN2lDLEtBQUssQ0FBQ2dkLEVBQUUsQ0FBQzhsQixvQkFBRCxDQUFILENBQVQsRUFBcUM7QUFDbkM5bEIsTUFBRSxDQUFDZ21CLE1BQUgsR0FBWSxHQUFHM3VCLE1BQUgsQ0FBVTJJLEVBQUUsQ0FBQzhsQixvQkFBRCxDQUFaLEVBQW9DOWxCLEVBQUUsQ0FBQ2dtQixNQUFILElBQWEsRUFBakQsQ0FBWjtBQUNBLFdBQU9obUIsRUFBRSxDQUFDOGxCLG9CQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELElBQUlHLFFBQUo7O0FBRUEsU0FBU0MsbUJBQVQsQ0FBOEI3bEIsS0FBOUIsRUFBcUNsRSxPQUFyQyxFQUE4Q0gsT0FBOUMsRUFBdUQ7QUFDckQsTUFBSThTLE9BQU8sR0FBR21YLFFBQWQsQ0FEcUQsQ0FDN0I7O0FBQ3hCLFNBQU8sU0FBU2xYLFdBQVQsR0FBd0I7QUFDN0IsUUFBSXptQixHQUFHLEdBQUc2VCxPQUFPLENBQUN6VSxLQUFSLENBQWMsSUFBZCxFQUFvQkQsU0FBcEIsQ0FBVjs7QUFDQSxRQUFJYSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQjY5QixjQUFRLENBQUM5bEIsS0FBRCxFQUFRME8sV0FBUixFQUFxQi9TLE9BQXJCLEVBQThCOFMsT0FBOUIsQ0FBUjtBQUNEO0FBQ0YsR0FMRDtBQU1ELEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUNBLElBQUlzWCxlQUFlLEdBQUc5cEIsZ0JBQWdCLElBQUksRUFBRXRQLElBQUksSUFBSXVPLE1BQU0sQ0FBQ3ZPLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBTixJQUFtQixFQUE3QixDQUExQzs7QUFFQSxTQUFTcTVCLEtBQVQsQ0FDRXgyQixJQURGLEVBRUVzTSxPQUZGLEVBR0VILE9BSEYsRUFJRXlELE9BSkYsRUFLRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUkybUIsZUFBSixFQUFxQjtBQUNuQixRQUFJRSxpQkFBaUIsR0FBR2hVLHFCQUF4QjtBQUNBLFFBQUl4ZSxRQUFRLEdBQUdxSSxPQUFmOztBQUNBQSxXQUFPLEdBQUdySSxRQUFRLENBQUN5eUIsUUFBVCxHQUFvQixVQUFVdDlCLENBQVYsRUFBYTtBQUN6QyxXQUNFO0FBQ0E7QUFDQTtBQUNBQSxPQUFDLENBQUMrSCxNQUFGLEtBQWEvSCxDQUFDLENBQUN1OUIsYUFBZixJQUNBO0FBQ0F2OUIsT0FBQyxDQUFDeXBCLFNBQUYsSUFBZTRULGlCQUZmLElBR0E7QUFDQTtBQUNBO0FBQ0FyOUIsT0FBQyxDQUFDeXBCLFNBQUYsSUFBZSxDQU5mLElBT0E7QUFDQTtBQUNBO0FBQ0F6cEIsT0FBQyxDQUFDK0gsTUFBRixDQUFTeTFCLGFBQVQsS0FBMkJycEIsUUFkN0IsRUFlRTtBQUNBLGVBQU90SixRQUFRLENBQUNwTSxLQUFULENBQWUsSUFBZixFQUFxQkQsU0FBckIsQ0FBUDtBQUNEO0FBQ0YsS0FuQkQ7QUFvQkQ7O0FBQ0R3K0IsVUFBUSxDQUFDMTRCLGdCQUFULENBQ0VzQyxJQURGLEVBRUVzTSxPQUZGLEVBR0UvTyxlQUFlLEdBQ1g7QUFBRTRPLFdBQU8sRUFBRUEsT0FBWDtBQUFvQnlELFdBQU8sRUFBRUE7QUFBN0IsR0FEVyxHQUVYekQsT0FMTjtBQU9EOztBQUVELFNBQVNtcUIsUUFBVCxDQUNFdDJCLElBREYsRUFFRXNNLE9BRkYsRUFHRUgsT0FIRixFQUlFOFMsT0FKRixFQUtFO0FBQ0EsR0FBQ0EsT0FBTyxJQUFJbVgsUUFBWixFQUFzQlosbUJBQXRCLENBQ0V4MUIsSUFERixFQUVFc00sT0FBTyxDQUFDb3FCLFFBQVIsSUFBb0JwcUIsT0FGdEIsRUFHRUgsT0FIRjtBQUtEOztBQUVELFNBQVMwcUIsa0JBQVQsQ0FBNkJ0ZCxRQUE3QixFQUF1QzdWLEtBQXZDLEVBQThDO0FBQzVDLE1BQUkxUSxPQUFPLENBQUN1bUIsUUFBUSxDQUFDelgsSUFBVCxDQUFjcU8sRUFBZixDQUFQLElBQTZCbmQsT0FBTyxDQUFDMFEsS0FBSyxDQUFDNUIsSUFBTixDQUFXcU8sRUFBWixDQUF4QyxFQUF5RDtBQUN2RDtBQUNEOztBQUNELE1BQUlBLEVBQUUsR0FBR3pNLEtBQUssQ0FBQzVCLElBQU4sQ0FBV3FPLEVBQVgsSUFBaUIsRUFBMUI7QUFDQSxNQUFJQyxLQUFLLEdBQUdtSixRQUFRLENBQUN6WCxJQUFULENBQWNxTyxFQUFkLElBQW9CLEVBQWhDO0FBQ0FpbUIsVUFBUSxHQUFHMXlCLEtBQUssQ0FBQ3pCLEdBQWpCO0FBQ0FpMEIsaUJBQWUsQ0FBQy9sQixFQUFELENBQWY7QUFDQUQsaUJBQWUsQ0FBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQVlvbUIsS0FBWixFQUFtQkYsUUFBbkIsRUFBNkJELG1CQUE3QixFQUFrRDN5QixLQUFLLENBQUN4QixPQUF4RCxDQUFmO0FBQ0FrMEIsVUFBUSxHQUFHbGpDLFNBQVg7QUFDRDs7QUFFRCxJQUFJNGpDLE1BQU0sR0FBRztBQUNYdmhDLFFBQU0sRUFBRXNoQyxrQkFERztBQUVYdDFCLFFBQU0sRUFBRXMxQjtBQUZHLENBQWI7QUFLQTs7QUFFQSxJQUFJRSxZQUFKOztBQUVBLFNBQVNDLGNBQVQsQ0FBeUJ6ZCxRQUF6QixFQUFtQzdWLEtBQW5DLEVBQTBDO0FBQ3hDLE1BQUkxUSxPQUFPLENBQUN1bUIsUUFBUSxDQUFDelgsSUFBVCxDQUFja1QsUUFBZixDQUFQLElBQW1DaGlCLE9BQU8sQ0FBQzBRLEtBQUssQ0FBQzVCLElBQU4sQ0FBV2tULFFBQVosQ0FBOUMsRUFBcUU7QUFDbkU7QUFDRDs7QUFDRCxNQUFJemUsR0FBSixFQUFTMFYsR0FBVDtBQUNBLE1BQUloSyxHQUFHLEdBQUd5QixLQUFLLENBQUN6QixHQUFoQjtBQUNBLE1BQUlnMUIsUUFBUSxHQUFHMWQsUUFBUSxDQUFDelgsSUFBVCxDQUFja1QsUUFBZCxJQUEwQixFQUF6QztBQUNBLE1BQUloTixLQUFLLEdBQUd0RSxLQUFLLENBQUM1QixJQUFOLENBQVdrVCxRQUFYLElBQXVCLEVBQW5DLENBUHdDLENBUXhDOztBQUNBLE1BQUk3aEIsS0FBSyxDQUFDNlUsS0FBSyxDQUFDekQsTUFBUCxDQUFULEVBQXlCO0FBQ3ZCeUQsU0FBSyxHQUFHdEUsS0FBSyxDQUFDNUIsSUFBTixDQUFXa1QsUUFBWCxHQUFzQjNjLE1BQU0sQ0FBQyxFQUFELEVBQUsyUCxLQUFMLENBQXBDO0FBQ0Q7O0FBRUQsT0FBS3pSLEdBQUwsSUFBWTBnQyxRQUFaLEVBQXNCO0FBQ3BCLFFBQUksRUFBRTFnQyxHQUFHLElBQUl5UixLQUFULENBQUosRUFBcUI7QUFDbkIvRixTQUFHLENBQUMxTCxHQUFELENBQUgsR0FBVyxFQUFYO0FBQ0Q7QUFDRjs7QUFFRCxPQUFLQSxHQUFMLElBQVl5UixLQUFaLEVBQW1CO0FBQ2pCaUUsT0FBRyxHQUFHakUsS0FBSyxDQUFDelIsR0FBRCxDQUFYLENBRGlCLENBRWpCO0FBQ0E7QUFDQTs7QUFDQSxRQUFJQSxHQUFHLEtBQUssYUFBUixJQUF5QkEsR0FBRyxLQUFLLFdBQXJDLEVBQWtEO0FBQ2hELFVBQUltTixLQUFLLENBQUMzQixRQUFWLEVBQW9CO0FBQUUyQixhQUFLLENBQUMzQixRQUFOLENBQWVwTSxNQUFmLEdBQXdCLENBQXhCO0FBQTRCOztBQUNsRCxVQUFJc1csR0FBRyxLQUFLZ3JCLFFBQVEsQ0FBQzFnQyxHQUFELENBQXBCLEVBQTJCO0FBQUU7QUFBVSxPQUZTLENBR2hEO0FBQ0E7OztBQUNBLFVBQUkwTCxHQUFHLENBQUM0d0IsVUFBSixDQUFlbDlCLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0JzTSxXQUFHLENBQUNtckIsV0FBSixDQUFnQm5yQixHQUFHLENBQUM0d0IsVUFBSixDQUFlLENBQWYsQ0FBaEI7QUFDRDtBQUNGOztBQUVELFFBQUl0OEIsR0FBRyxLQUFLLE9BQVIsSUFBbUIwTCxHQUFHLENBQUMwcUIsT0FBSixLQUFnQixVQUF2QyxFQUFtRDtBQUNqRDtBQUNBO0FBQ0ExcUIsU0FBRyxDQUFDaTFCLE1BQUosR0FBYWpyQixHQUFiLENBSGlELENBSWpEOztBQUNBLFVBQUlrckIsTUFBTSxHQUFHbmtDLE9BQU8sQ0FBQ2laLEdBQUQsQ0FBUCxHQUFlLEVBQWYsR0FBb0IzWCxNQUFNLENBQUMyWCxHQUFELENBQXZDOztBQUNBLFVBQUltckIsaUJBQWlCLENBQUNuMUIsR0FBRCxFQUFNazFCLE1BQU4sQ0FBckIsRUFBb0M7QUFDbENsMUIsV0FBRyxDQUFDMU8sS0FBSixHQUFZNGpDLE1BQVo7QUFDRDtBQUNGLEtBVEQsTUFTTyxJQUFJNWdDLEdBQUcsS0FBSyxXQUFSLElBQXVCMjFCLEtBQUssQ0FBQ2pxQixHQUFHLENBQUMwcUIsT0FBTCxDQUE1QixJQUE2QzM1QixPQUFPLENBQUNpUCxHQUFHLENBQUN5d0IsU0FBTCxDQUF4RCxFQUF5RTtBQUM5RTtBQUNBcUUsa0JBQVksR0FBR0EsWUFBWSxJQUFJeHBCLFFBQVEsQ0FBQzhLLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBL0I7QUFDQTBlLGtCQUFZLENBQUNyRSxTQUFiLEdBQXlCLFVBQVV6bUIsR0FBVixHQUFnQixRQUF6QztBQUNBLFVBQUk4ZixHQUFHLEdBQUdnTCxZQUFZLENBQUNuRSxVQUF2Qjs7QUFDQSxhQUFPM3dCLEdBQUcsQ0FBQzJ3QixVQUFYLEVBQXVCO0FBQ3JCM3dCLFdBQUcsQ0FBQ21yQixXQUFKLENBQWdCbnJCLEdBQUcsQ0FBQzJ3QixVQUFwQjtBQUNEOztBQUNELGFBQU83RyxHQUFHLENBQUM2RyxVQUFYLEVBQXVCO0FBQ3JCM3dCLFdBQUcsQ0FBQ29yQixXQUFKLENBQWdCdEIsR0FBRyxDQUFDNkcsVUFBcEI7QUFDRDtBQUNGLEtBWE0sTUFXQSxLQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EzbUIsT0FBRyxLQUFLZ3JCLFFBQVEsQ0FBQzFnQyxHQUFELENBTFgsRUFNTDtBQUNBO0FBQ0E7QUFDQSxVQUFJO0FBQ0YwTCxXQUFHLENBQUMxTCxHQUFELENBQUgsR0FBVzBWLEdBQVg7QUFDRCxPQUZELENBRUUsT0FBTzdTLENBQVAsRUFBVSxDQUFFO0FBQ2Y7QUFDRjtBQUNGLEMsQ0FFRDs7O0FBR0EsU0FBU2crQixpQkFBVCxDQUE0Qm4xQixHQUE1QixFQUFpQ28xQixRQUFqQyxFQUEyQztBQUN6QyxTQUFRLENBQUNwMUIsR0FBRyxDQUFDcTFCLFNBQUwsS0FDTnIxQixHQUFHLENBQUMwcUIsT0FBSixLQUFnQixRQUFoQixJQUNBNEssb0JBQW9CLENBQUN0MUIsR0FBRCxFQUFNbzFCLFFBQU4sQ0FEcEIsSUFFQUcsb0JBQW9CLENBQUN2MUIsR0FBRCxFQUFNbzFCLFFBQU4sQ0FIZCxDQUFSO0FBS0Q7O0FBRUQsU0FBU0Usb0JBQVQsQ0FBK0J0MUIsR0FBL0IsRUFBb0NvMUIsUUFBcEMsRUFBOEM7QUFDNUM7QUFDQTtBQUNBLE1BQUlJLFVBQVUsR0FBRyxJQUFqQixDQUg0QyxDQUk1QztBQUNBOztBQUNBLE1BQUk7QUFBRUEsY0FBVSxHQUFHbHFCLFFBQVEsQ0FBQ21xQixhQUFULEtBQTJCejFCLEdBQXhDO0FBQThDLEdBQXBELENBQXFELE9BQU83SSxDQUFQLEVBQVUsQ0FBRTs7QUFDakUsU0FBT3ErQixVQUFVLElBQUl4MUIsR0FBRyxDQUFDMU8sS0FBSixLQUFjOGpDLFFBQW5DO0FBQ0Q7O0FBRUQsU0FBU0csb0JBQVQsQ0FBK0J2MUIsR0FBL0IsRUFBb0NvRSxNQUFwQyxFQUE0QztBQUMxQyxNQUFJOVMsS0FBSyxHQUFHME8sR0FBRyxDQUFDMU8sS0FBaEI7QUFDQSxNQUFJbWhDLFNBQVMsR0FBR3p5QixHQUFHLENBQUMwMUIsV0FBcEIsQ0FGMEMsQ0FFVDs7QUFDakMsTUFBSXhrQyxLQUFLLENBQUN1aEMsU0FBRCxDQUFULEVBQXNCO0FBQ3BCLFFBQUlBLFNBQVMsQ0FBQ2tELE1BQWQsRUFBc0I7QUFDcEIsYUFBTzNpQyxRQUFRLENBQUMxQixLQUFELENBQVIsS0FBb0IwQixRQUFRLENBQUNvUixNQUFELENBQW5DO0FBQ0Q7O0FBQ0QsUUFBSXF1QixTQUFTLENBQUNtRCxJQUFkLEVBQW9CO0FBQ2xCLGFBQU90a0MsS0FBSyxDQUFDc2tDLElBQU4sT0FBaUJ4eEIsTUFBTSxDQUFDd3hCLElBQVAsRUFBeEI7QUFDRDtBQUNGOztBQUNELFNBQU90a0MsS0FBSyxLQUFLOFMsTUFBakI7QUFDRDs7QUFFRCxJQUFJMk8sUUFBUSxHQUFHO0FBQ2J6ZixRQUFNLEVBQUV5aEMsY0FESztBQUViejFCLFFBQU0sRUFBRXkxQjtBQUZLLENBQWY7QUFLQTs7QUFFQSxJQUFJYyxjQUFjLEdBQUd0aEMsTUFBTSxDQUFDLFVBQVV1aEMsT0FBVixFQUFtQjtBQUM3QyxNQUFJdC9CLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSXUvQixhQUFhLEdBQUcsZUFBcEI7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxPQUF4QjtBQUNBRixTQUFPLENBQUN0aUMsS0FBUixDQUFjdWlDLGFBQWQsRUFBNkJqMEIsT0FBN0IsQ0FBcUMsVUFBVTlOLElBQVYsRUFBZ0I7QUFDbkQsUUFBSUEsSUFBSixFQUFVO0FBQ1IsVUFBSW91QixHQUFHLEdBQUdwdUIsSUFBSSxDQUFDUixLQUFMLENBQVd3aUMsaUJBQVgsQ0FBVjtBQUNBNVQsU0FBRyxDQUFDMXVCLE1BQUosR0FBYSxDQUFiLEtBQW1COEMsR0FBRyxDQUFDNHJCLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT3dULElBQVAsRUFBRCxDQUFILEdBQXFCeFQsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPd1QsSUFBUCxFQUF4QztBQUNEO0FBQ0YsR0FMRDtBQU1BLFNBQU9wL0IsR0FBUDtBQUNELENBWDBCLENBQTNCLEMsQ0FhQTs7QUFDQSxTQUFTeS9CLGtCQUFULENBQTZCcDJCLElBQTdCLEVBQW1DO0FBQ2pDLE1BQUltYSxLQUFLLEdBQUdrYyxxQkFBcUIsQ0FBQ3IyQixJQUFJLENBQUNtYSxLQUFOLENBQWpDLENBRGlDLENBRWpDO0FBQ0E7O0FBQ0EsU0FBT25hLElBQUksQ0FBQ3MyQixXQUFMLEdBQ0gvL0IsTUFBTSxDQUFDeUosSUFBSSxDQUFDczJCLFdBQU4sRUFBbUJuYyxLQUFuQixDQURILEdBRUhBLEtBRko7QUFHRCxDLENBRUQ7OztBQUNBLFNBQVNrYyxxQkFBVCxDQUFnQ0UsWUFBaEMsRUFBOEM7QUFDNUMsTUFBSXhqQyxLQUFLLENBQUNDLE9BQU4sQ0FBY3VqQyxZQUFkLENBQUosRUFBaUM7QUFDL0IsV0FBTzcvQixRQUFRLENBQUM2L0IsWUFBRCxDQUFmO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPQSxZQUFQLEtBQXdCLFFBQTVCLEVBQXNDO0FBQ3BDLFdBQU9QLGNBQWMsQ0FBQ08sWUFBRCxDQUFyQjtBQUNEOztBQUNELFNBQU9BLFlBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTQyxRQUFULENBQW1CNTBCLEtBQW5CLEVBQTBCNjBCLFVBQTFCLEVBQXNDO0FBQ3BDLE1BQUk5L0IsR0FBRyxHQUFHLEVBQVY7QUFDQSxNQUFJKy9CLFNBQUo7O0FBRUEsTUFBSUQsVUFBSixFQUFnQjtBQUNkLFFBQUlsTixTQUFTLEdBQUczbkIsS0FBaEI7O0FBQ0EsV0FBTzJuQixTQUFTLENBQUM1b0IsaUJBQWpCLEVBQW9DO0FBQ2xDNG9CLGVBQVMsR0FBR0EsU0FBUyxDQUFDNW9CLGlCQUFWLENBQTRCMlosTUFBeEM7O0FBQ0EsVUFDRWlQLFNBQVMsSUFBSUEsU0FBUyxDQUFDdnBCLElBQXZCLEtBQ0MwMkIsU0FBUyxHQUFHTixrQkFBa0IsQ0FBQzdNLFNBQVMsQ0FBQ3ZwQixJQUFYLENBRC9CLENBREYsRUFHRTtBQUNBekosY0FBTSxDQUFDSSxHQUFELEVBQU0rL0IsU0FBTixDQUFOO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUtBLFNBQVMsR0FBR04sa0JBQWtCLENBQUN4MEIsS0FBSyxDQUFDNUIsSUFBUCxDQUFuQyxFQUFrRDtBQUNoRHpKLFVBQU0sQ0FBQ0ksR0FBRCxFQUFNKy9CLFNBQU4sQ0FBTjtBQUNEOztBQUVELE1BQUlwTixVQUFVLEdBQUcxbkIsS0FBakI7O0FBQ0EsU0FBUTBuQixVQUFVLEdBQUdBLFVBQVUsQ0FBQzFvQixNQUFoQyxFQUF5QztBQUN2QyxRQUFJMG9CLFVBQVUsQ0FBQ3RwQixJQUFYLEtBQW9CMDJCLFNBQVMsR0FBR04sa0JBQWtCLENBQUM5TSxVQUFVLENBQUN0cEIsSUFBWixDQUFsRCxDQUFKLEVBQTBFO0FBQ3hFekosWUFBTSxDQUFDSSxHQUFELEVBQU0rL0IsU0FBTixDQUFOO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLy9CLEdBQVA7QUFDRDtBQUVEOzs7QUFFQSxJQUFJZ2dDLFFBQVEsR0FBRyxLQUFmO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLGdCQUFsQjs7QUFDQSxJQUFJQyxPQUFPLEdBQUcsVUFBVWx5QixFQUFWLEVBQWN6RyxJQUFkLEVBQW9CN0wsR0FBcEIsRUFBeUI7QUFDckM7QUFDQSxNQUFJc2tDLFFBQVEsQ0FBQ3o4QixJQUFULENBQWNnRSxJQUFkLENBQUosRUFBeUI7QUFDdkJ5RyxNQUFFLENBQUN3VixLQUFILENBQVMyYyxXQUFULENBQXFCNTRCLElBQXJCLEVBQTJCN0wsR0FBM0I7QUFDRCxHQUZELE1BRU8sSUFBSXVrQyxXQUFXLENBQUMxOEIsSUFBWixDQUFpQjdILEdBQWpCLENBQUosRUFBMkI7QUFDaENzUyxNQUFFLENBQUN3VixLQUFILENBQVMyYyxXQUFULENBQXFCdGhDLFNBQVMsQ0FBQzBJLElBQUQsQ0FBOUIsRUFBc0M3TCxHQUFHLENBQUM0QyxPQUFKLENBQVkyaEMsV0FBWixFQUF5QixFQUF6QixDQUF0QyxFQUFvRSxXQUFwRTtBQUNELEdBRk0sTUFFQTtBQUNMLFFBQUlHLGNBQWMsR0FBR0MsU0FBUyxDQUFDOTRCLElBQUQsQ0FBOUI7O0FBQ0EsUUFBSW5MLEtBQUssQ0FBQ0MsT0FBTixDQUFjWCxHQUFkLENBQUosRUFBd0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsV0FBSyxJQUFJdUIsQ0FBQyxHQUFHLENBQVIsRUFBVzBPLEdBQUcsR0FBR2pRLEdBQUcsQ0FBQ3dCLE1BQTFCLEVBQWtDRCxDQUFDLEdBQUcwTyxHQUF0QyxFQUEyQzFPLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMrUSxVQUFFLENBQUN3VixLQUFILENBQVM0YyxjQUFULElBQTJCMWtDLEdBQUcsQ0FBQ3VCLENBQUQsQ0FBOUI7QUFDRDtBQUNGLEtBUEQsTUFPTztBQUNMK1EsUUFBRSxDQUFDd1YsS0FBSCxDQUFTNGMsY0FBVCxJQUEyQjFrQyxHQUEzQjtBQUNEO0FBQ0Y7QUFDRixDQW5CRDs7QUFxQkEsSUFBSTRrQyxXQUFXLEdBQUcsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixJQUFsQixDQUFsQjtBQUVBLElBQUlDLFVBQUo7QUFDQSxJQUFJRixTQUFTLEdBQUd0aUMsTUFBTSxDQUFDLFVBQVVvVCxJQUFWLEVBQWdCO0FBQ3JDb3ZCLFlBQVUsR0FBR0EsVUFBVSxJQUFJenJCLFFBQVEsQ0FBQzhLLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI0RCxLQUF6RDtBQUNBclMsTUFBSSxHQUFHOVMsUUFBUSxDQUFDOFMsSUFBRCxDQUFmOztBQUNBLE1BQUlBLElBQUksS0FBSyxRQUFULElBQXNCQSxJQUFJLElBQUlvdkIsVUFBbEMsRUFBK0M7QUFDN0MsV0FBT3B2QixJQUFQO0FBQ0Q7O0FBQ0QsTUFBSXF2QixPQUFPLEdBQUdydkIsSUFBSSxDQUFDeFMsTUFBTCxDQUFZLENBQVosRUFBZUYsV0FBZixLQUErQjBTLElBQUksQ0FBQzdWLEtBQUwsQ0FBVyxDQUFYLENBQTdDOztBQUNBLE9BQUssSUFBSTJCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxakMsV0FBVyxDQUFDcGpDLE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLFFBQUlzSyxJQUFJLEdBQUcrNEIsV0FBVyxDQUFDcmpDLENBQUQsQ0FBWCxHQUFpQnVqQyxPQUE1Qjs7QUFDQSxRQUFJajVCLElBQUksSUFBSWc1QixVQUFaLEVBQXdCO0FBQ3RCLGFBQU9oNUIsSUFBUDtBQUNEO0FBQ0Y7QUFDRixDQWJxQixDQUF0Qjs7QUFlQSxTQUFTazVCLFdBQVQsQ0FBc0IzZixRQUF0QixFQUFnQzdWLEtBQWhDLEVBQXVDO0FBQ3JDLE1BQUk1QixJQUFJLEdBQUc0QixLQUFLLENBQUM1QixJQUFqQjtBQUNBLE1BQUk0ekIsT0FBTyxHQUFHbmMsUUFBUSxDQUFDelgsSUFBdkI7O0FBRUEsTUFBSTlPLE9BQU8sQ0FBQzhPLElBQUksQ0FBQ3MyQixXQUFOLENBQVAsSUFBNkJwbEMsT0FBTyxDQUFDOE8sSUFBSSxDQUFDbWEsS0FBTixDQUFwQyxJQUNGanBCLE9BQU8sQ0FBQzBpQyxPQUFPLENBQUMwQyxXQUFULENBREwsSUFDOEJwbEMsT0FBTyxDQUFDMGlDLE9BQU8sQ0FBQ3paLEtBQVQsQ0FEekMsRUFFRTtBQUNBO0FBQ0Q7O0FBRUQsTUFBSWhRLEdBQUosRUFBU2pNLElBQVQ7QUFDQSxNQUFJeUcsRUFBRSxHQUFHL0MsS0FBSyxDQUFDekIsR0FBZjtBQUNBLE1BQUlrM0IsY0FBYyxHQUFHekQsT0FBTyxDQUFDMEMsV0FBN0I7QUFDQSxNQUFJZ0IsZUFBZSxHQUFHMUQsT0FBTyxDQUFDMkQsZUFBUixJQUEyQjNELE9BQU8sQ0FBQ3paLEtBQW5DLElBQTRDLEVBQWxFLENBYnFDLENBZXJDOztBQUNBLE1BQUlxZCxRQUFRLEdBQUdILGNBQWMsSUFBSUMsZUFBakM7QUFFQSxNQUFJbmQsS0FBSyxHQUFHa2MscUJBQXFCLENBQUN6MEIsS0FBSyxDQUFDNUIsSUFBTixDQUFXbWEsS0FBWixDQUFyQixJQUEyQyxFQUF2RCxDQWxCcUMsQ0FvQnJDO0FBQ0E7QUFDQTs7QUFDQXZZLE9BQUssQ0FBQzVCLElBQU4sQ0FBV3UzQixlQUFYLEdBQTZCbG1DLEtBQUssQ0FBQzhvQixLQUFLLENBQUMxWCxNQUFQLENBQUwsR0FDekJsTSxNQUFNLENBQUMsRUFBRCxFQUFLNGpCLEtBQUwsQ0FEbUIsR0FFekJBLEtBRko7QUFJQSxNQUFJc2QsUUFBUSxHQUFHakIsUUFBUSxDQUFDNTBCLEtBQUQsRUFBUSxJQUFSLENBQXZCOztBQUVBLE9BQUsxRCxJQUFMLElBQWFzNUIsUUFBYixFQUF1QjtBQUNyQixRQUFJdG1DLE9BQU8sQ0FBQ3VtQyxRQUFRLENBQUN2NUIsSUFBRCxDQUFULENBQVgsRUFBNkI7QUFDM0IyNEIsYUFBTyxDQUFDbHlCLEVBQUQsRUFBS3pHLElBQUwsRUFBVyxFQUFYLENBQVA7QUFDRDtBQUNGOztBQUNELE9BQUtBLElBQUwsSUFBYXU1QixRQUFiLEVBQXVCO0FBQ3JCdHRCLE9BQUcsR0FBR3N0QixRQUFRLENBQUN2NUIsSUFBRCxDQUFkOztBQUNBLFFBQUlpTSxHQUFHLEtBQUtxdEIsUUFBUSxDQUFDdDVCLElBQUQsQ0FBcEIsRUFBNEI7QUFDMUI7QUFDQTI0QixhQUFPLENBQUNseUIsRUFBRCxFQUFLekcsSUFBTCxFQUFXaU0sR0FBRyxJQUFJLElBQVAsR0FBYyxFQUFkLEdBQW1CQSxHQUE5QixDQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELElBQUlnUSxLQUFLLEdBQUc7QUFDVjFtQixRQUFNLEVBQUUyakMsV0FERTtBQUVWMzNCLFFBQU0sRUFBRTIzQjtBQUZFLENBQVo7QUFLQTs7QUFFQSxJQUFJTSxZQUFZLEdBQUcsS0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQW1CaHpCLEVBQW5CLEVBQXVCa3ZCLEdBQXZCLEVBQTRCO0FBQzFCO0FBQ0EsTUFBSSxDQUFDQSxHQUFELElBQVEsRUFBRUEsR0FBRyxHQUFHQSxHQUFHLENBQUNrQyxJQUFKLEVBQVIsQ0FBWixFQUFpQztBQUMvQjtBQUNEO0FBRUQ7OztBQUNBLE1BQUlweEIsRUFBRSxDQUFDaXpCLFNBQVAsRUFBa0I7QUFDaEIsUUFBSS9ELEdBQUcsQ0FBQ3gvQixPQUFKLENBQVksR0FBWixJQUFtQixDQUFDLENBQXhCLEVBQTJCO0FBQ3pCdy9CLFNBQUcsQ0FBQ2xnQyxLQUFKLENBQVUrakMsWUFBVixFQUF3QnoxQixPQUF4QixDQUFnQyxVQUFVOU0sQ0FBVixFQUFhO0FBQUUsZUFBT3dQLEVBQUUsQ0FBQ2l6QixTQUFILENBQWEvNkIsR0FBYixDQUFpQjFILENBQWpCLENBQVA7QUFBNkIsT0FBNUU7QUFDRCxLQUZELE1BRU87QUFDTHdQLFFBQUUsQ0FBQ2l6QixTQUFILENBQWEvNkIsR0FBYixDQUFpQmczQixHQUFqQjtBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0wsUUFBSTFwQixHQUFHLEdBQUcsT0FBT3hGLEVBQUUsQ0FBQ2t6QixZQUFILENBQWdCLE9BQWhCLEtBQTRCLEVBQW5DLElBQXlDLEdBQW5EOztBQUNBLFFBQUkxdEIsR0FBRyxDQUFDOVYsT0FBSixDQUFZLE1BQU13L0IsR0FBTixHQUFZLEdBQXhCLElBQStCLENBQW5DLEVBQXNDO0FBQ3BDbHZCLFFBQUUsQ0FBQ29tQixZQUFILENBQWdCLE9BQWhCLEVBQXlCLENBQUM1Z0IsR0FBRyxHQUFHMHBCLEdBQVAsRUFBWWtDLElBQVosRUFBekI7QUFDRDtBQUNGO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUytCLFdBQVQsQ0FBc0JuekIsRUFBdEIsRUFBMEJrdkIsR0FBMUIsRUFBK0I7QUFDN0I7QUFDQSxNQUFJLENBQUNBLEdBQUQsSUFBUSxFQUFFQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ2tDLElBQUosRUFBUixDQUFaLEVBQWlDO0FBQy9CO0FBQ0Q7QUFFRDs7O0FBQ0EsTUFBSXB4QixFQUFFLENBQUNpekIsU0FBUCxFQUFrQjtBQUNoQixRQUFJL0QsR0FBRyxDQUFDeC9CLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQUMsQ0FBeEIsRUFBMkI7QUFDekJ3L0IsU0FBRyxDQUFDbGdDLEtBQUosQ0FBVStqQyxZQUFWLEVBQXdCejFCLE9BQXhCLENBQWdDLFVBQVU5TSxDQUFWLEVBQWE7QUFBRSxlQUFPd1AsRUFBRSxDQUFDaXpCLFNBQUgsQ0FBYTNqQyxNQUFiLENBQW9Ca0IsQ0FBcEIsQ0FBUDtBQUFnQyxPQUEvRTtBQUNELEtBRkQsTUFFTztBQUNMd1AsUUFBRSxDQUFDaXpCLFNBQUgsQ0FBYTNqQyxNQUFiLENBQW9CNC9CLEdBQXBCO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDbHZCLEVBQUUsQ0FBQ2l6QixTQUFILENBQWEvakMsTUFBbEIsRUFBMEI7QUFDeEI4USxRQUFFLENBQUMyc0IsZUFBSCxDQUFtQixPQUFuQjtBQUNEO0FBQ0YsR0FURCxNQVNPO0FBQ0wsUUFBSW5uQixHQUFHLEdBQUcsT0FBT3hGLEVBQUUsQ0FBQ2t6QixZQUFILENBQWdCLE9BQWhCLEtBQTRCLEVBQW5DLElBQXlDLEdBQW5EO0FBQ0EsUUFBSUUsR0FBRyxHQUFHLE1BQU1sRSxHQUFOLEdBQVksR0FBdEI7O0FBQ0EsV0FBTzFwQixHQUFHLENBQUM5VixPQUFKLENBQVkwakMsR0FBWixLQUFvQixDQUEzQixFQUE4QjtBQUM1QjV0QixTQUFHLEdBQUdBLEdBQUcsQ0FBQ2xWLE9BQUosQ0FBWThpQyxHQUFaLEVBQWlCLEdBQWpCLENBQU47QUFDRDs7QUFDRDV0QixPQUFHLEdBQUdBLEdBQUcsQ0FBQzRyQixJQUFKLEVBQU47O0FBQ0EsUUFBSTVyQixHQUFKLEVBQVM7QUFDUHhGLFFBQUUsQ0FBQ29tQixZQUFILENBQWdCLE9BQWhCLEVBQXlCNWdCLEdBQXpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x4RixRQUFFLENBQUMyc0IsZUFBSCxDQUFtQixPQUFuQjtBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7QUFFQSxTQUFTMEcsaUJBQVQsQ0FBNEJoeEIsTUFBNUIsRUFBb0M7QUFDbEMsTUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWDtBQUNEO0FBQ0Q7OztBQUNBLE1BQUksT0FBT0EsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixRQUFJclEsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsUUFBSXFRLE1BQU0sQ0FBQ2l4QixHQUFQLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIxaEMsWUFBTSxDQUFDSSxHQUFELEVBQU11aEMsaUJBQWlCLENBQUNseEIsTUFBTSxDQUFDOUksSUFBUCxJQUFlLEdBQWhCLENBQXZCLENBQU47QUFDRDs7QUFDRDNILFVBQU0sQ0FBQ0ksR0FBRCxFQUFNcVEsTUFBTixDQUFOO0FBQ0EsV0FBT3JRLEdBQVA7QUFDRCxHQVBELE1BT08sSUFBSSxPQUFPcVEsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUNyQyxXQUFPa3hCLGlCQUFpQixDQUFDbHhCLE1BQUQsQ0FBeEI7QUFDRDtBQUNGOztBQUVELElBQUlreEIsaUJBQWlCLEdBQUd4akMsTUFBTSxDQUFDLFVBQVV3SixJQUFWLEVBQWdCO0FBQzdDLFNBQU87QUFDTGk2QixjQUFVLEVBQUdqNkIsSUFBSSxHQUFHLFFBRGY7QUFFTGs2QixnQkFBWSxFQUFHbDZCLElBQUksR0FBRyxXQUZqQjtBQUdMbTZCLG9CQUFnQixFQUFHbjZCLElBQUksR0FBRyxlQUhyQjtBQUlMbzZCLGNBQVUsRUFBR3A2QixJQUFJLEdBQUcsUUFKZjtBQUtMcTZCLGdCQUFZLEVBQUdyNkIsSUFBSSxHQUFHLFdBTGpCO0FBTUxzNkIsb0JBQWdCLEVBQUd0NkIsSUFBSSxHQUFHO0FBTnJCLEdBQVA7QUFRRCxDQVQ2QixDQUE5QjtBQVdBLElBQUl1NkIsYUFBYSxHQUFHcCtCLFNBQVMsSUFBSSxDQUFDVSxLQUFsQztBQUNBLElBQUkyOUIsVUFBVSxHQUFHLFlBQWpCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLFdBQWhCLEMsQ0FFQTs7QUFDQSxJQUFJQyxjQUFjLEdBQUcsWUFBckI7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxlQUF6QjtBQUNBLElBQUlDLGFBQWEsR0FBRyxXQUFwQjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLGNBQXhCOztBQUNBLElBQUlOLGFBQUosRUFBbUI7QUFDakI7QUFDQSxNQUFJbitCLE1BQU0sQ0FBQzArQixlQUFQLEtBQTJCNW5DLFNBQTNCLElBQ0ZrSixNQUFNLENBQUMyK0IscUJBQVAsS0FBaUM3bkMsU0FEbkMsRUFFRTtBQUNBd25DLGtCQUFjLEdBQUcsa0JBQWpCO0FBQ0FDLHNCQUFrQixHQUFHLHFCQUFyQjtBQUNEOztBQUNELE1BQUl2K0IsTUFBTSxDQUFDNCtCLGNBQVAsS0FBMEI5bkMsU0FBMUIsSUFDRmtKLE1BQU0sQ0FBQzYrQixvQkFBUCxLQUFnQy9uQyxTQURsQyxFQUVFO0FBQ0EwbkMsaUJBQWEsR0FBRyxpQkFBaEI7QUFDQUMscUJBQWlCLEdBQUcsb0JBQXBCO0FBQ0Q7QUFDRixDLENBRUQ7OztBQUNBLElBQUlLLEdBQUcsR0FBRy8rQixTQUFTLEdBQ2ZDLE1BQU0sQ0FBQysrQixxQkFBUCxHQUNFLytCLE1BQU0sQ0FBQysrQixxQkFBUCxDQUE2Qm5qQyxJQUE3QixDQUFrQ29FLE1BQWxDLENBREYsR0FFRThRLFVBSGE7QUFJZjtBQUEyQixVQUFVelcsRUFBVixFQUFjO0FBQUUsU0FBT0EsRUFBRSxFQUFUO0FBQWMsQ0FKN0Q7O0FBTUEsU0FBUzJrQyxTQUFULENBQW9CM2tDLEVBQXBCLEVBQXdCO0FBQ3RCeWtDLEtBQUcsQ0FBQyxZQUFZO0FBQ2RBLE9BQUcsQ0FBQ3prQyxFQUFELENBQUg7QUFDRCxHQUZFLENBQUg7QUFHRDs7QUFFRCxTQUFTNGtDLGtCQUFULENBQTZCNTBCLEVBQTdCLEVBQWlDa3ZCLEdBQWpDLEVBQXNDO0FBQ3BDLE1BQUkyRixpQkFBaUIsR0FBRzcwQixFQUFFLENBQUNvdkIsa0JBQUgsS0FBMEJwdkIsRUFBRSxDQUFDb3ZCLGtCQUFILEdBQXdCLEVBQWxELENBQXhCOztBQUNBLE1BQUl5RixpQkFBaUIsQ0FBQ25sQyxPQUFsQixDQUEwQncvQixHQUExQixJQUFpQyxDQUFyQyxFQUF3QztBQUN0QzJGLHFCQUFpQixDQUFDNzZCLElBQWxCLENBQXVCazFCLEdBQXZCO0FBQ0E4RCxZQUFRLENBQUNoekIsRUFBRCxFQUFLa3ZCLEdBQUwsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBUzRGLHFCQUFULENBQWdDOTBCLEVBQWhDLEVBQW9Da3ZCLEdBQXBDLEVBQXlDO0FBQ3ZDLE1BQUlsdkIsRUFBRSxDQUFDb3ZCLGtCQUFQLEVBQTJCO0FBQ3pCOS9CLFVBQU0sQ0FBQzBRLEVBQUUsQ0FBQ292QixrQkFBSixFQUF3QkYsR0FBeEIsQ0FBTjtBQUNEOztBQUNEaUUsYUFBVyxDQUFDbnpCLEVBQUQsRUFBS2t2QixHQUFMLENBQVg7QUFDRDs7QUFFRCxTQUFTNkYsa0JBQVQsQ0FDRS8wQixFQURGLEVBRUVvRSxZQUZGLEVBR0UrQyxFQUhGLEVBSUU7QUFDQSxNQUFJbVAsR0FBRyxHQUFHMGUsaUJBQWlCLENBQUNoMUIsRUFBRCxFQUFLb0UsWUFBTCxDQUEzQjtBQUNBLE1BQUkvQyxJQUFJLEdBQUdpVixHQUFHLENBQUNqVixJQUFmO0FBQ0EsTUFBSTJXLE9BQU8sR0FBRzFCLEdBQUcsQ0FBQzBCLE9BQWxCO0FBQ0EsTUFBSWlkLFNBQVMsR0FBRzNlLEdBQUcsQ0FBQzJlLFNBQXBCOztBQUNBLE1BQUksQ0FBQzV6QixJQUFMLEVBQVc7QUFBRSxXQUFPOEYsRUFBRSxFQUFUO0FBQWE7O0FBQzFCLE1BQUk0QyxLQUFLLEdBQUcxSSxJQUFJLEtBQUsweUIsVUFBVCxHQUFzQkcsa0JBQXRCLEdBQTJDRSxpQkFBdkQ7QUFDQSxNQUFJYyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxNQUFJMUosR0FBRyxHQUFHLFlBQVk7QUFDcEJ4ckIsTUFBRSxDQUFDK3VCLG1CQUFILENBQXVCaGxCLEtBQXZCLEVBQThCb3JCLEtBQTlCO0FBQ0FodUIsTUFBRTtBQUNILEdBSEQ7O0FBSUEsTUFBSWd1QixLQUFLLEdBQUcsVUFBVXhpQyxDQUFWLEVBQWE7QUFDdkIsUUFBSUEsQ0FBQyxDQUFDK0gsTUFBRixLQUFhc0YsRUFBakIsRUFBcUI7QUFDbkIsVUFBSSxFQUFFazFCLEtBQUYsSUFBV0QsU0FBZixFQUEwQjtBQUN4QnpKLFdBQUc7QUFDSjtBQUNGO0FBQ0YsR0FORDs7QUFPQS9rQixZQUFVLENBQUMsWUFBWTtBQUNyQixRQUFJeXVCLEtBQUssR0FBR0QsU0FBWixFQUF1QjtBQUNyQnpKLFNBQUc7QUFDSjtBQUNGLEdBSlMsRUFJUHhULE9BQU8sR0FBRyxDQUpILENBQVY7QUFLQWhZLElBQUUsQ0FBQy9JLGdCQUFILENBQW9COFMsS0FBcEIsRUFBMkJvckIsS0FBM0I7QUFDRDs7QUFFRCxJQUFJQyxXQUFXLEdBQUcsd0JBQWxCOztBQUVBLFNBQVNKLGlCQUFULENBQTRCaDFCLEVBQTVCLEVBQWdDb0UsWUFBaEMsRUFBOEM7QUFDNUMsTUFBSWl4QixNQUFNLEdBQUcxL0IsTUFBTSxDQUFDMi9CLGdCQUFQLENBQXdCdDFCLEVBQXhCLENBQWIsQ0FENEMsQ0FFNUM7O0FBQ0EsTUFBSXUxQixnQkFBZ0IsR0FBRyxDQUFDRixNQUFNLENBQUNwQixjQUFjLEdBQUcsT0FBbEIsQ0FBTixJQUFvQyxFQUFyQyxFQUF5Q2psQyxLQUF6QyxDQUErQyxJQUEvQyxDQUF2QjtBQUNBLE1BQUl3bUMsbUJBQW1CLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDcEIsY0FBYyxHQUFHLFVBQWxCLENBQU4sSUFBdUMsRUFBeEMsRUFBNENqbEMsS0FBNUMsQ0FBa0QsSUFBbEQsQ0FBMUI7QUFDQSxNQUFJeW1DLGlCQUFpQixHQUFHQyxVQUFVLENBQUNILGdCQUFELEVBQW1CQyxtQkFBbkIsQ0FBbEM7QUFDQSxNQUFJRyxlQUFlLEdBQUcsQ0FBQ04sTUFBTSxDQUFDbEIsYUFBYSxHQUFHLE9BQWpCLENBQU4sSUFBbUMsRUFBcEMsRUFBd0NubEMsS0FBeEMsQ0FBOEMsSUFBOUMsQ0FBdEI7QUFDQSxNQUFJNG1DLGtCQUFrQixHQUFHLENBQUNQLE1BQU0sQ0FBQ2xCLGFBQWEsR0FBRyxVQUFqQixDQUFOLElBQXNDLEVBQXZDLEVBQTJDbmxDLEtBQTNDLENBQWlELElBQWpELENBQXpCO0FBQ0EsTUFBSTZtQyxnQkFBZ0IsR0FBR0gsVUFBVSxDQUFDQyxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBakM7QUFFQSxNQUFJdjBCLElBQUo7QUFDQSxNQUFJMlcsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJaWQsU0FBUyxHQUFHLENBQWhCO0FBQ0E7O0FBQ0EsTUFBSTd3QixZQUFZLEtBQUsydkIsVUFBckIsRUFBaUM7QUFDL0IsUUFBSTBCLGlCQUFpQixHQUFHLENBQXhCLEVBQTJCO0FBQ3pCcDBCLFVBQUksR0FBRzB5QixVQUFQO0FBQ0EvYixhQUFPLEdBQUd5ZCxpQkFBVjtBQUNBUixlQUFTLEdBQUdPLG1CQUFtQixDQUFDdG1DLE1BQWhDO0FBQ0Q7QUFDRixHQU5ELE1BTU8sSUFBSWtWLFlBQVksS0FBSzR2QixTQUFyQixFQUFnQztBQUNyQyxRQUFJNkIsZ0JBQWdCLEdBQUcsQ0FBdkIsRUFBMEI7QUFDeEJ4MEIsVUFBSSxHQUFHMnlCLFNBQVA7QUFDQWhjLGFBQU8sR0FBRzZkLGdCQUFWO0FBQ0FaLGVBQVMsR0FBR1csa0JBQWtCLENBQUMxbUMsTUFBL0I7QUFDRDtBQUNGLEdBTk0sTUFNQTtBQUNMOG9CLFdBQU8sR0FBR2xxQixJQUFJLENBQUMrUixHQUFMLENBQVM0MUIsaUJBQVQsRUFBNEJJLGdCQUE1QixDQUFWO0FBQ0F4MEIsUUFBSSxHQUFHMlcsT0FBTyxHQUFHLENBQVYsR0FDSHlkLGlCQUFpQixHQUFHSSxnQkFBcEIsR0FDRTlCLFVBREYsR0FFRUMsU0FIQyxHQUlILElBSko7QUFLQWlCLGFBQVMsR0FBRzV6QixJQUFJLEdBQ1pBLElBQUksS0FBSzB5QixVQUFULEdBQ0V5QixtQkFBbUIsQ0FBQ3RtQyxNQUR0QixHQUVFMG1DLGtCQUFrQixDQUFDMW1DLE1BSFQsR0FJWixDQUpKO0FBS0Q7O0FBQ0QsTUFBSTRtQyxZQUFZLEdBQ2R6MEIsSUFBSSxLQUFLMHlCLFVBQVQsSUFDQXFCLFdBQVcsQ0FBQzcvQixJQUFaLENBQWlCOC9CLE1BQU0sQ0FBQ3BCLGNBQWMsR0FBRyxVQUFsQixDQUF2QixDQUZGO0FBR0EsU0FBTztBQUNMNXlCLFFBQUksRUFBRUEsSUFERDtBQUVMMlcsV0FBTyxFQUFFQSxPQUZKO0FBR0xpZCxhQUFTLEVBQUVBLFNBSE47QUFJTGEsZ0JBQVksRUFBRUE7QUFKVCxHQUFQO0FBTUQ7O0FBRUQsU0FBU0osVUFBVCxDQUFxQkssTUFBckIsRUFBNkJDLFNBQTdCLEVBQXdDO0FBQ3RDO0FBQ0EsU0FBT0QsTUFBTSxDQUFDN21DLE1BQVAsR0FBZ0I4bUMsU0FBUyxDQUFDOW1DLE1BQWpDLEVBQXlDO0FBQ3ZDNm1DLFVBQU0sR0FBR0EsTUFBTSxDQUFDaDFCLE1BQVAsQ0FBY2cxQixNQUFkLENBQVQ7QUFDRDs7QUFFRCxTQUFPam9DLElBQUksQ0FBQytSLEdBQUwsQ0FBU3pPLEtBQVQsQ0FBZSxJQUFmLEVBQXFCNGtDLFNBQVMsQ0FBQ25uQyxHQUFWLENBQWMsVUFBVThpQixDQUFWLEVBQWExaUIsQ0FBYixFQUFnQjtBQUN4RCxXQUFPZ25DLElBQUksQ0FBQ3RrQixDQUFELENBQUosR0FBVXNrQixJQUFJLENBQUNGLE1BQU0sQ0FBQzltQyxDQUFELENBQVAsQ0FBckI7QUFDRCxHQUYyQixDQUFyQixDQUFQO0FBR0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTZ25DLElBQVQsQ0FBZUMsQ0FBZixFQUFrQjtBQUNoQixTQUFPanhCLE1BQU0sQ0FBQ2l4QixDQUFDLENBQUM1b0MsS0FBRixDQUFRLENBQVIsRUFBVyxDQUFDLENBQVosRUFBZWdELE9BQWYsQ0FBdUIsR0FBdkIsRUFBNEIsR0FBNUIsQ0FBRCxDQUFOLEdBQTJDLElBQWxEO0FBQ0Q7QUFFRDs7O0FBRUEsU0FBUzZsQyxLQUFULENBQWdCbDVCLEtBQWhCLEVBQXVCbTVCLGFBQXZCLEVBQXNDO0FBQ3BDLE1BQUlwMkIsRUFBRSxHQUFHL0MsS0FBSyxDQUFDekIsR0FBZixDQURvQyxDQUdwQzs7QUFDQSxNQUFJOU8sS0FBSyxDQUFDc1QsRUFBRSxDQUFDNnNCLFFBQUosQ0FBVCxFQUF3QjtBQUN0QjdzQixNQUFFLENBQUM2c0IsUUFBSCxDQUFZd0osU0FBWixHQUF3QixJQUF4Qjs7QUFDQXIyQixNQUFFLENBQUM2c0IsUUFBSDtBQUNEOztBQUVELE1BQUl4eEIsSUFBSSxHQUFHZzRCLGlCQUFpQixDQUFDcDJCLEtBQUssQ0FBQzVCLElBQU4sQ0FBV291QixVQUFaLENBQTVCOztBQUNBLE1BQUlsOUIsT0FBTyxDQUFDOE8sSUFBRCxDQUFYLEVBQW1CO0FBQ2pCO0FBQ0Q7QUFFRDs7O0FBQ0EsTUFBSTNPLEtBQUssQ0FBQ3NULEVBQUUsQ0FBQ3MyQixRQUFKLENBQUwsSUFBc0J0MkIsRUFBRSxDQUFDc3NCLFFBQUgsS0FBZ0IsQ0FBMUMsRUFBNkM7QUFDM0M7QUFDRDs7QUFFRCxNQUFJZ0gsR0FBRyxHQUFHajRCLElBQUksQ0FBQ2k0QixHQUFmO0FBQ0EsTUFBSWp5QixJQUFJLEdBQUdoRyxJQUFJLENBQUNnRyxJQUFoQjtBQUNBLE1BQUlteUIsVUFBVSxHQUFHbjRCLElBQUksQ0FBQ200QixVQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBR3A0QixJQUFJLENBQUNvNEIsWUFBeEI7QUFDQSxNQUFJQyxnQkFBZ0IsR0FBR3I0QixJQUFJLENBQUNxNEIsZ0JBQTVCO0FBQ0EsTUFBSTZDLFdBQVcsR0FBR2w3QixJQUFJLENBQUNrN0IsV0FBdkI7QUFDQSxNQUFJQyxhQUFhLEdBQUduN0IsSUFBSSxDQUFDbTdCLGFBQXpCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUdwN0IsSUFBSSxDQUFDbzdCLGlCQUE3QjtBQUNBLE1BQUlDLFdBQVcsR0FBR3I3QixJQUFJLENBQUNxN0IsV0FBdkI7QUFDQSxNQUFJUCxLQUFLLEdBQUc5NkIsSUFBSSxDQUFDODZCLEtBQWpCO0FBQ0EsTUFBSVEsVUFBVSxHQUFHdDdCLElBQUksQ0FBQ3M3QixVQUF0QjtBQUNBLE1BQUlDLGNBQWMsR0FBR3Y3QixJQUFJLENBQUN1N0IsY0FBMUI7QUFDQSxNQUFJQyxZQUFZLEdBQUd4N0IsSUFBSSxDQUFDdzdCLFlBQXhCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHejdCLElBQUksQ0FBQ3k3QixNQUFsQjtBQUNBLE1BQUlDLFdBQVcsR0FBRzE3QixJQUFJLENBQUMwN0IsV0FBdkI7QUFDQSxNQUFJQyxlQUFlLEdBQUczN0IsSUFBSSxDQUFDMjdCLGVBQTNCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHNTdCLElBQUksQ0FBQzQ3QixRQUFwQixDQW5Db0MsQ0FxQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUl4N0IsT0FBTyxHQUFHbVgsY0FBZDtBQUNBLE1BQUlza0IsY0FBYyxHQUFHdGtCLGNBQWMsQ0FBQ3VDLE1BQXBDOztBQUNBLFNBQU8raEIsY0FBYyxJQUFJQSxjQUFjLENBQUNqN0IsTUFBeEMsRUFBZ0Q7QUFDOUNSLFdBQU8sR0FBR3k3QixjQUFjLENBQUN6N0IsT0FBekI7QUFDQXk3QixrQkFBYyxHQUFHQSxjQUFjLENBQUNqN0IsTUFBaEM7QUFDRDs7QUFFRCxNQUFJazdCLFFBQVEsR0FBRyxDQUFDMTdCLE9BQU8sQ0FBQ3dYLFVBQVQsSUFBdUIsQ0FBQ2hXLEtBQUssQ0FBQ2IsWUFBN0M7O0FBRUEsTUFBSSs2QixRQUFRLElBQUksQ0FBQ0wsTUFBYixJQUF1QkEsTUFBTSxLQUFLLEVBQXRDLEVBQTBDO0FBQ3hDO0FBQ0Q7O0FBRUQsTUFBSU0sVUFBVSxHQUFHRCxRQUFRLElBQUlaLFdBQVosR0FDYkEsV0FEYSxHQUViL0MsVUFGSjtBQUdBLE1BQUk2RCxXQUFXLEdBQUdGLFFBQVEsSUFBSVYsaUJBQVosR0FDZEEsaUJBRGMsR0FFZC9DLGdCQUZKO0FBR0EsTUFBSTRELE9BQU8sR0FBR0gsUUFBUSxJQUFJWCxhQUFaLEdBQ1ZBLGFBRFUsR0FFVi9DLFlBRko7QUFJQSxNQUFJOEQsZUFBZSxHQUFHSixRQUFRLEdBQ3pCTixZQUFZLElBQUlILFdBRFMsR0FFMUJBLFdBRko7QUFHQSxNQUFJYyxTQUFTLEdBQUdMLFFBQVEsR0FDbkIsT0FBT0wsTUFBUCxLQUFrQixVQUFsQixHQUErQkEsTUFBL0IsR0FBd0NYLEtBRHJCLEdBRXBCQSxLQUZKO0FBR0EsTUFBSXNCLGNBQWMsR0FBR04sUUFBUSxHQUN4QkosV0FBVyxJQUFJSixVQURTLEdBRXpCQSxVQUZKO0FBR0EsTUFBSWUsa0JBQWtCLEdBQUdQLFFBQVEsR0FDNUJILGVBQWUsSUFBSUosY0FEUyxHQUU3QkEsY0FGSjtBQUlBLE1BQUllLHFCQUFxQixHQUFHbnBDLFFBQVEsQ0FDbEN6QixRQUFRLENBQUNrcUMsUUFBRCxDQUFSLEdBQ0lBLFFBQVEsQ0FBQ2QsS0FEYixHQUVJYyxRQUg4QixDQUFwQzs7QUFNQSxNQUFJdGpDLEtBQUEsSUFBeUNna0MscUJBQXFCLElBQUksSUFBdEUsRUFBNEU7QUFDMUVDLGlCQUFhLENBQUNELHFCQUFELEVBQXdCLE9BQXhCLEVBQWlDMTZCLEtBQWpDLENBQWI7QUFDRDs7QUFFRCxNQUFJNDZCLFVBQVUsR0FBR3ZFLEdBQUcsS0FBSyxLQUFSLElBQWlCLENBQUNsOUIsS0FBbkM7QUFDQSxNQUFJMGhDLGdCQUFnQixHQUFHQyxzQkFBc0IsQ0FBQ1AsU0FBRCxDQUE3QztBQUVBLE1BQUlyd0IsRUFBRSxHQUFHbkgsRUFBRSxDQUFDczJCLFFBQUgsR0FBY3BqQyxJQUFJLENBQUMsWUFBWTtBQUN0QyxRQUFJMmtDLFVBQUosRUFBZ0I7QUFDZC9DLDJCQUFxQixDQUFDOTBCLEVBQUQsRUFBS3MzQixPQUFMLENBQXJCO0FBQ0F4QywyQkFBcUIsQ0FBQzkwQixFQUFELEVBQUtxM0IsV0FBTCxDQUFyQjtBQUNEOztBQUNELFFBQUlsd0IsRUFBRSxDQUFDa3ZCLFNBQVAsRUFBa0I7QUFDaEIsVUFBSXdCLFVBQUosRUFBZ0I7QUFDZC9DLDZCQUFxQixDQUFDOTBCLEVBQUQsRUFBS28zQixVQUFMLENBQXJCO0FBQ0Q7O0FBQ0RNLHdCQUFrQixJQUFJQSxrQkFBa0IsQ0FBQzEzQixFQUFELENBQXhDO0FBQ0QsS0FMRCxNQUtPO0FBQ0x5M0Isb0JBQWMsSUFBSUEsY0FBYyxDQUFDejNCLEVBQUQsQ0FBaEM7QUFDRDs7QUFDREEsTUFBRSxDQUFDczJCLFFBQUgsR0FBYyxJQUFkO0FBQ0QsR0FkMEIsQ0FBM0I7O0FBZ0JBLE1BQUksQ0FBQ3I1QixLQUFLLENBQUM1QixJQUFOLENBQVcyOEIsSUFBaEIsRUFBc0I7QUFDcEI7QUFDQS90QixrQkFBYyxDQUFDaE4sS0FBRCxFQUFRLFFBQVIsRUFBa0IsWUFBWTtBQUMxQyxVQUFJaEIsTUFBTSxHQUFHK0QsRUFBRSxDQUFDMmtCLFVBQWhCO0FBQ0EsVUFBSXNULFdBQVcsR0FBR2g4QixNQUFNLElBQUlBLE1BQU0sQ0FBQ2k4QixRQUFqQixJQUE2Qmo4QixNQUFNLENBQUNpOEIsUUFBUCxDQUFnQmo3QixLQUFLLENBQUNuTixHQUF0QixDQUEvQzs7QUFDQSxVQUFJbW9DLFdBQVcsSUFDYkEsV0FBVyxDQUFDNzhCLEdBQVosS0FBb0I2QixLQUFLLENBQUM3QixHQUR4QixJQUVGNjhCLFdBQVcsQ0FBQ3o4QixHQUFaLENBQWdCcXhCLFFBRmxCLEVBR0U7QUFDQW9MLG1CQUFXLENBQUN6OEIsR0FBWixDQUFnQnF4QixRQUFoQjtBQUNEOztBQUNEMkssZUFBUyxJQUFJQSxTQUFTLENBQUN4M0IsRUFBRCxFQUFLbUgsRUFBTCxDQUF0QjtBQUNELEtBVmEsQ0FBZDtBQVdELEdBdkhtQyxDQXlIcEM7OztBQUNBb3dCLGlCQUFlLElBQUlBLGVBQWUsQ0FBQ3YzQixFQUFELENBQWxDOztBQUNBLE1BQUk2M0IsVUFBSixFQUFnQjtBQUNkakQsc0JBQWtCLENBQUM1MEIsRUFBRCxFQUFLbzNCLFVBQUwsQ0FBbEI7QUFDQXhDLHNCQUFrQixDQUFDNTBCLEVBQUQsRUFBS3EzQixXQUFMLENBQWxCO0FBQ0ExQyxhQUFTLENBQUMsWUFBWTtBQUNwQkcsMkJBQXFCLENBQUM5MEIsRUFBRCxFQUFLbzNCLFVBQUwsQ0FBckI7O0FBQ0EsVUFBSSxDQUFDandCLEVBQUUsQ0FBQ2t2QixTQUFSLEVBQW1CO0FBQ2pCekIsMEJBQWtCLENBQUM1MEIsRUFBRCxFQUFLczNCLE9BQUwsQ0FBbEI7O0FBQ0EsWUFBSSxDQUFDUSxnQkFBTCxFQUF1QjtBQUNyQixjQUFJSyxlQUFlLENBQUNSLHFCQUFELENBQW5CLEVBQTRDO0FBQzFDbHhCLHNCQUFVLENBQUNVLEVBQUQsRUFBS3d3QixxQkFBTCxDQUFWO0FBQ0QsV0FGRCxNQUVPO0FBQ0w1Qyw4QkFBa0IsQ0FBQy8wQixFQUFELEVBQUtxQixJQUFMLEVBQVc4RixFQUFYLENBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0FaUSxDQUFUO0FBYUQ7O0FBRUQsTUFBSWxLLEtBQUssQ0FBQzVCLElBQU4sQ0FBVzI4QixJQUFmLEVBQXFCO0FBQ25CNUIsaUJBQWEsSUFBSUEsYUFBYSxFQUE5QjtBQUNBb0IsYUFBUyxJQUFJQSxTQUFTLENBQUN4M0IsRUFBRCxFQUFLbUgsRUFBTCxDQUF0QjtBQUNEOztBQUVELE1BQUksQ0FBQzB3QixVQUFELElBQWUsQ0FBQ0MsZ0JBQXBCLEVBQXNDO0FBQ3BDM3dCLE1BQUU7QUFDSDtBQUNGOztBQUVELFNBQVNpeEIsS0FBVCxDQUFnQm43QixLQUFoQixFQUF1Qm10QixFQUF2QixFQUEyQjtBQUN6QixNQUFJcHFCLEVBQUUsR0FBRy9DLEtBQUssQ0FBQ3pCLEdBQWYsQ0FEeUIsQ0FHekI7O0FBQ0EsTUFBSTlPLEtBQUssQ0FBQ3NULEVBQUUsQ0FBQ3MyQixRQUFKLENBQVQsRUFBd0I7QUFDdEJ0MkIsTUFBRSxDQUFDczJCLFFBQUgsQ0FBWUQsU0FBWixHQUF3QixJQUF4Qjs7QUFDQXIyQixNQUFFLENBQUNzMkIsUUFBSDtBQUNEOztBQUVELE1BQUlqN0IsSUFBSSxHQUFHZzRCLGlCQUFpQixDQUFDcDJCLEtBQUssQ0FBQzVCLElBQU4sQ0FBV291QixVQUFaLENBQTVCOztBQUNBLE1BQUlsOUIsT0FBTyxDQUFDOE8sSUFBRCxDQUFQLElBQWlCMkUsRUFBRSxDQUFDc3NCLFFBQUgsS0FBZ0IsQ0FBckMsRUFBd0M7QUFDdEMsV0FBT2xDLEVBQUUsRUFBVDtBQUNEO0FBRUQ7OztBQUNBLE1BQUkxOUIsS0FBSyxDQUFDc1QsRUFBRSxDQUFDNnNCLFFBQUosQ0FBVCxFQUF3QjtBQUN0QjtBQUNEOztBQUVELE1BQUl5RyxHQUFHLEdBQUdqNEIsSUFBSSxDQUFDaTRCLEdBQWY7QUFDQSxNQUFJanlCLElBQUksR0FBR2hHLElBQUksQ0FBQ2dHLElBQWhCO0FBQ0EsTUFBSXN5QixVQUFVLEdBQUd0NEIsSUFBSSxDQUFDczRCLFVBQXRCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHdjRCLElBQUksQ0FBQ3U0QixZQUF4QjtBQUNBLE1BQUlDLGdCQUFnQixHQUFHeDRCLElBQUksQ0FBQ3c0QixnQkFBNUI7QUFDQSxNQUFJd0UsV0FBVyxHQUFHaDlCLElBQUksQ0FBQ2c5QixXQUF2QjtBQUNBLE1BQUlELEtBQUssR0FBRy84QixJQUFJLENBQUMrOEIsS0FBakI7QUFDQSxNQUFJRSxVQUFVLEdBQUdqOUIsSUFBSSxDQUFDaTlCLFVBQXRCO0FBQ0EsTUFBSUMsY0FBYyxHQUFHbDlCLElBQUksQ0FBQ2s5QixjQUExQjtBQUNBLE1BQUlDLFVBQVUsR0FBR245QixJQUFJLENBQUNtOUIsVUFBdEI7QUFDQSxNQUFJdkIsUUFBUSxHQUFHNTdCLElBQUksQ0FBQzQ3QixRQUFwQjtBQUVBLE1BQUlZLFVBQVUsR0FBR3ZFLEdBQUcsS0FBSyxLQUFSLElBQWlCLENBQUNsOUIsS0FBbkM7QUFDQSxNQUFJMGhDLGdCQUFnQixHQUFHQyxzQkFBc0IsQ0FBQ0ssS0FBRCxDQUE3QztBQUVBLE1BQUlLLHFCQUFxQixHQUFHanFDLFFBQVEsQ0FDbEN6QixRQUFRLENBQUNrcUMsUUFBRCxDQUFSLEdBQ0lBLFFBQVEsQ0FBQ21CLEtBRGIsR0FFSW5CLFFBSDhCLENBQXBDOztBQU1BLE1BQUl0akMsS0FBQSxJQUF5Q2pILEtBQUssQ0FBQytyQyxxQkFBRCxDQUFsRCxFQUEyRTtBQUN6RWIsaUJBQWEsQ0FBQ2EscUJBQUQsRUFBd0IsT0FBeEIsRUFBaUN4N0IsS0FBakMsQ0FBYjtBQUNEOztBQUVELE1BQUlrSyxFQUFFLEdBQUduSCxFQUFFLENBQUM2c0IsUUFBSCxHQUFjMzVCLElBQUksQ0FBQyxZQUFZO0FBQ3RDLFFBQUk4TSxFQUFFLENBQUMya0IsVUFBSCxJQUFpQjNrQixFQUFFLENBQUMya0IsVUFBSCxDQUFjdVQsUUFBbkMsRUFBNkM7QUFDM0NsNEIsUUFBRSxDQUFDMmtCLFVBQUgsQ0FBY3VULFFBQWQsQ0FBdUJqN0IsS0FBSyxDQUFDbk4sR0FBN0IsSUFBb0MsSUFBcEM7QUFDRDs7QUFDRCxRQUFJK25DLFVBQUosRUFBZ0I7QUFDZC9DLDJCQUFxQixDQUFDOTBCLEVBQUQsRUFBSzR6QixZQUFMLENBQXJCO0FBQ0FrQiwyQkFBcUIsQ0FBQzkwQixFQUFELEVBQUs2ekIsZ0JBQUwsQ0FBckI7QUFDRDs7QUFDRCxRQUFJMXNCLEVBQUUsQ0FBQ2t2QixTQUFQLEVBQWtCO0FBQ2hCLFVBQUl3QixVQUFKLEVBQWdCO0FBQ2QvQyw2QkFBcUIsQ0FBQzkwQixFQUFELEVBQUsyekIsVUFBTCxDQUFyQjtBQUNEOztBQUNENEUsb0JBQWMsSUFBSUEsY0FBYyxDQUFDdjRCLEVBQUQsQ0FBaEM7QUFDRCxLQUxELE1BS087QUFDTG9xQixRQUFFO0FBQ0ZrTyxnQkFBVSxJQUFJQSxVQUFVLENBQUN0NEIsRUFBRCxDQUF4QjtBQUNEOztBQUNEQSxNQUFFLENBQUM2c0IsUUFBSCxHQUFjLElBQWQ7QUFDRCxHQWxCMEIsQ0FBM0I7O0FBb0JBLE1BQUkyTCxVQUFKLEVBQWdCO0FBQ2RBLGNBQVUsQ0FBQ0UsWUFBRCxDQUFWO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLGdCQUFZO0FBQ2I7O0FBRUQsV0FBU0EsWUFBVCxHQUF5QjtBQUN2QjtBQUNBLFFBQUl2eEIsRUFBRSxDQUFDa3ZCLFNBQVAsRUFBa0I7QUFDaEI7QUFDRCxLQUpzQixDQUt2Qjs7O0FBQ0EsUUFBSSxDQUFDcDVCLEtBQUssQ0FBQzVCLElBQU4sQ0FBVzI4QixJQUFaLElBQW9CaDRCLEVBQUUsQ0FBQzJrQixVQUEzQixFQUF1QztBQUNyQyxPQUFDM2tCLEVBQUUsQ0FBQzJrQixVQUFILENBQWN1VCxRQUFkLEtBQTJCbDRCLEVBQUUsQ0FBQzJrQixVQUFILENBQWN1VCxRQUFkLEdBQXlCLEVBQXBELENBQUQsRUFBMkRqN0IsS0FBSyxDQUFDbk4sR0FBakUsSUFBeUVtTixLQUF6RTtBQUNEOztBQUNEbzdCLGVBQVcsSUFBSUEsV0FBVyxDQUFDcjRCLEVBQUQsQ0FBMUI7O0FBQ0EsUUFBSTYzQixVQUFKLEVBQWdCO0FBQ2RqRCx3QkFBa0IsQ0FBQzUwQixFQUFELEVBQUsyekIsVUFBTCxDQUFsQjtBQUNBaUIsd0JBQWtCLENBQUM1MEIsRUFBRCxFQUFLNnpCLGdCQUFMLENBQWxCO0FBQ0FjLGVBQVMsQ0FBQyxZQUFZO0FBQ3BCRyw2QkFBcUIsQ0FBQzkwQixFQUFELEVBQUsyekIsVUFBTCxDQUFyQjs7QUFDQSxZQUFJLENBQUN4c0IsRUFBRSxDQUFDa3ZCLFNBQVIsRUFBbUI7QUFDakJ6Qiw0QkFBa0IsQ0FBQzUwQixFQUFELEVBQUs0ekIsWUFBTCxDQUFsQjs7QUFDQSxjQUFJLENBQUNrRSxnQkFBTCxFQUF1QjtBQUNyQixnQkFBSUssZUFBZSxDQUFDTSxxQkFBRCxDQUFuQixFQUE0QztBQUMxQ2h5Qix3QkFBVSxDQUFDVSxFQUFELEVBQUtzeEIscUJBQUwsQ0FBVjtBQUNELGFBRkQsTUFFTztBQUNMMUQsZ0NBQWtCLENBQUMvMEIsRUFBRCxFQUFLcUIsSUFBTCxFQUFXOEYsRUFBWCxDQUFsQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BWlEsQ0FBVDtBQWFEOztBQUNEaXhCLFNBQUssSUFBSUEsS0FBSyxDQUFDcDRCLEVBQUQsRUFBS21ILEVBQUwsQ0FBZDs7QUFDQSxRQUFJLENBQUMwd0IsVUFBRCxJQUFlLENBQUNDLGdCQUFwQixFQUFzQztBQUNwQzN3QixRQUFFO0FBQ0g7QUFDRjtBQUNGLEMsQ0FFRDs7O0FBQ0EsU0FBU3l3QixhQUFULENBQXdCbHFDLEdBQXhCLEVBQTZCNkwsSUFBN0IsRUFBbUMwRCxLQUFuQyxFQUEwQztBQUN4QyxNQUFJLE9BQU92UCxHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0IwSyxRQUFJLENBQ0YsMkJBQTJCbUIsSUFBM0IsR0FBa0Msb0NBQWxDLEdBQ0EsTUFEQSxHQUNVakwsSUFBSSxDQUFDQyxTQUFMLENBQWViLEdBQWYsQ0FEVixHQUNpQyxHQUYvQixFQUdGdVAsS0FBSyxDQUFDeEIsT0FISixDQUFKO0FBS0QsR0FORCxNQU1PLElBQUloTixLQUFLLENBQUNmLEdBQUQsQ0FBVCxFQUFnQjtBQUNyQjBLLFFBQUksQ0FDRiwyQkFBMkJtQixJQUEzQixHQUFrQyxxQkFBbEMsR0FDQSw2Q0FGRSxFQUdGMEQsS0FBSyxDQUFDeEIsT0FISixDQUFKO0FBS0Q7QUFDRjs7QUFFRCxTQUFTMDhCLGVBQVQsQ0FBMEJ6cUMsR0FBMUIsRUFBK0I7QUFDN0IsU0FBTyxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQixDQUFDZSxLQUFLLENBQUNmLEdBQUQsQ0FBeEM7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3FxQyxzQkFBVCxDQUFpQy9uQyxFQUFqQyxFQUFxQztBQUNuQyxNQUFJekQsT0FBTyxDQUFDeUQsRUFBRCxDQUFYLEVBQWlCO0FBQ2YsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSTJvQyxVQUFVLEdBQUczb0MsRUFBRSxDQUFDc1osR0FBcEI7O0FBQ0EsTUFBSTVjLEtBQUssQ0FBQ2lzQyxVQUFELENBQVQsRUFBdUI7QUFDckI7QUFDQSxXQUFPWixzQkFBc0IsQ0FDM0IzcEMsS0FBSyxDQUFDQyxPQUFOLENBQWNzcUMsVUFBZCxJQUNJQSxVQUFVLENBQUMsQ0FBRCxDQURkLEdBRUlBLFVBSHVCLENBQTdCO0FBS0QsR0FQRCxNQU9PO0FBQ0wsV0FBTyxDQUFDM29DLEVBQUUsQ0FBQ3FCLE9BQUgsSUFBY3JCLEVBQUUsQ0FBQ2QsTUFBbEIsSUFBNEIsQ0FBbkM7QUFDRDtBQUNGOztBQUVELFNBQVMwcEMsTUFBVCxDQUFpQnJvQyxDQUFqQixFQUFvQjBNLEtBQXBCLEVBQTJCO0FBQ3pCLE1BQUlBLEtBQUssQ0FBQzVCLElBQU4sQ0FBVzI4QixJQUFYLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCN0IsU0FBSyxDQUFDbDVCLEtBQUQsQ0FBTDtBQUNEO0FBQ0Y7O0FBRUQsSUFBSXdzQixVQUFVLEdBQUcvekIsU0FBUyxHQUFHO0FBQzNCNUcsUUFBTSxFQUFFOHBDLE1BRG1CO0FBRTNCbFAsVUFBUSxFQUFFa1AsTUFGaUI7QUFHM0J0cEMsUUFBTSxFQUFFLFNBQVNzYSxTQUFULENBQW9CM00sS0FBcEIsRUFBMkJtdEIsRUFBM0IsRUFBK0I7QUFDckM7QUFDQSxRQUFJbnRCLEtBQUssQ0FBQzVCLElBQU4sQ0FBVzI4QixJQUFYLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCSSxXQUFLLENBQUNuN0IsS0FBRCxFQUFRbXRCLEVBQVIsQ0FBTDtBQUNELEtBRkQsTUFFTztBQUNMQSxRQUFFO0FBQ0g7QUFDRjtBQVYwQixDQUFILEdBV3RCLEVBWEo7QUFhQSxJQUFJeU8sZUFBZSxHQUFHLENBQ3BCdHVCLEtBRG9CLEVBRXBCK2tCLEtBRm9CLEVBR3BCZSxNQUhvQixFQUlwQjloQixRQUpvQixFQUtwQmlILEtBTG9CLEVBTXBCaVUsVUFOb0IsQ0FBdEI7QUFTQTtBQUVBO0FBQ0E7O0FBQ0EsSUFBSXhCLE9BQU8sR0FBRzRRLGVBQWUsQ0FBQzkzQixNQUFoQixDQUF1QnF0QixXQUF2QixDQUFkO0FBRUEsSUFBSTdCLEtBQUssR0FBR3hFLG1CQUFtQixDQUFDO0FBQUViLFNBQU8sRUFBRUEsT0FBWDtBQUFvQmUsU0FBTyxFQUFFQTtBQUE3QixDQUFELENBQS9CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0EsSUFBSTd4QixLQUFKLEVBQVc7QUFDVDtBQUNBMFEsVUFBUSxDQUFDN1AsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDLFlBQVk7QUFDdkQsUUFBSStJLEVBQUUsR0FBRzhHLFFBQVEsQ0FBQ21xQixhQUFsQjs7QUFDQSxRQUFJanhCLEVBQUUsSUFBSUEsRUFBRSxDQUFDODRCLE1BQWIsRUFBcUI7QUFDbkJDLGFBQU8sQ0FBQy80QixFQUFELEVBQUssT0FBTCxDQUFQO0FBQ0Q7QUFDRixHQUxEO0FBTUQ7O0FBRUQsSUFBSWc1QixTQUFTLEdBQUc7QUFDZGo3QixVQUFRLEVBQUUsU0FBU0EsUUFBVCxDQUFtQmlDLEVBQW5CLEVBQXVCaTVCLE9BQXZCLEVBQWdDaDhCLEtBQWhDLEVBQXVDNlYsUUFBdkMsRUFBaUQ7QUFDekQsUUFBSTdWLEtBQUssQ0FBQzdCLEdBQU4sS0FBYyxRQUFsQixFQUE0QjtBQUMxQjtBQUNBLFVBQUkwWCxRQUFRLENBQUN0WCxHQUFULElBQWdCLENBQUNzWCxRQUFRLENBQUN0WCxHQUFULENBQWEwOUIsU0FBbEMsRUFBNkM7QUFDM0NqdkIsc0JBQWMsQ0FBQ2hOLEtBQUQsRUFBUSxXQUFSLEVBQXFCLFlBQVk7QUFDN0MrN0IsbUJBQVMsQ0FBQ2xMLGdCQUFWLENBQTJCOXRCLEVBQTNCLEVBQStCaTVCLE9BQS9CLEVBQXdDaDhCLEtBQXhDO0FBQ0QsU0FGYSxDQUFkO0FBR0QsT0FKRCxNQUlPO0FBQ0xrOEIsbUJBQVcsQ0FBQ241QixFQUFELEVBQUtpNUIsT0FBTCxFQUFjaDhCLEtBQUssQ0FBQ3hCLE9BQXBCLENBQVg7QUFDRDs7QUFDRHVFLFFBQUUsQ0FBQ2s1QixTQUFILEdBQWUsR0FBR3JxQyxHQUFILENBQU94QixJQUFQLENBQVkyUyxFQUFFLENBQUM5RyxPQUFmLEVBQXdCa2dDLFFBQXhCLENBQWY7QUFDRCxLQVZELE1BVU8sSUFBSW44QixLQUFLLENBQUM3QixHQUFOLEtBQWMsVUFBZCxJQUE0QnlxQixlQUFlLENBQUM3bEIsRUFBRSxDQUFDcUIsSUFBSixDQUEvQyxFQUEwRDtBQUMvRHJCLFFBQUUsQ0FBQ2t4QixXQUFILEdBQWlCK0gsT0FBTyxDQUFDaEwsU0FBekI7O0FBQ0EsVUFBSSxDQUFDZ0wsT0FBTyxDQUFDaEwsU0FBUixDQUFrQjdRLElBQXZCLEVBQTZCO0FBQzNCcGQsVUFBRSxDQUFDL0ksZ0JBQUgsQ0FBb0Isa0JBQXBCLEVBQXdDb2lDLGtCQUF4QztBQUNBcjVCLFVBQUUsQ0FBQy9JLGdCQUFILENBQW9CLGdCQUFwQixFQUFzQ3FpQyxnQkFBdEMsRUFGMkIsQ0FHM0I7QUFDQTtBQUNBO0FBQ0E7O0FBQ0F0NUIsVUFBRSxDQUFDL0ksZ0JBQUgsQ0FBb0IsUUFBcEIsRUFBOEJxaUMsZ0JBQTlCO0FBQ0E7O0FBQ0EsWUFBSWxqQyxLQUFKLEVBQVc7QUFDVDRKLFlBQUUsQ0FBQzg0QixNQUFILEdBQVksSUFBWjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBNUJhO0FBOEJkaEwsa0JBQWdCLEVBQUUsU0FBU0EsZ0JBQVQsQ0FBMkI5dEIsRUFBM0IsRUFBK0JpNUIsT0FBL0IsRUFBd0NoOEIsS0FBeEMsRUFBK0M7QUFDL0QsUUFBSUEsS0FBSyxDQUFDN0IsR0FBTixLQUFjLFFBQWxCLEVBQTRCO0FBQzFCKzlCLGlCQUFXLENBQUNuNUIsRUFBRCxFQUFLaTVCLE9BQUwsRUFBY2g4QixLQUFLLENBQUN4QixPQUFwQixDQUFYLENBRDBCLENBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUk4OUIsV0FBVyxHQUFHdjVCLEVBQUUsQ0FBQ2s1QixTQUFyQjtBQUNBLFVBQUlNLFVBQVUsR0FBR3g1QixFQUFFLENBQUNrNUIsU0FBSCxHQUFlLEdBQUdycUMsR0FBSCxDQUFPeEIsSUFBUCxDQUFZMlMsRUFBRSxDQUFDOUcsT0FBZixFQUF3QmtnQyxRQUF4QixDQUFoQzs7QUFDQSxVQUFJSSxVQUFVLENBQUNyMEIsSUFBWCxDQUFnQixVQUFVczBCLENBQVYsRUFBYXhxQyxDQUFiLEVBQWdCO0FBQUUsZUFBTyxDQUFDb0QsVUFBVSxDQUFDb25DLENBQUQsRUFBSUYsV0FBVyxDQUFDdHFDLENBQUQsQ0FBZixDQUFsQjtBQUF3QyxPQUExRSxDQUFKLEVBQWlGO0FBQy9FO0FBQ0E7QUFDQSxZQUFJeXFDLFNBQVMsR0FBRzE1QixFQUFFLENBQUNtbUIsUUFBSCxHQUNaOFMsT0FBTyxDQUFDbnNDLEtBQVIsQ0FBY3FZLElBQWQsQ0FBbUIsVUFBVTNZLENBQVYsRUFBYTtBQUFFLGlCQUFPbXRDLG1CQUFtQixDQUFDbnRDLENBQUQsRUFBSWd0QyxVQUFKLENBQTFCO0FBQTRDLFNBQTlFLENBRFksR0FFWlAsT0FBTyxDQUFDbnNDLEtBQVIsS0FBa0Jtc0MsT0FBTyxDQUFDcGIsUUFBMUIsSUFBc0M4YixtQkFBbUIsQ0FBQ1YsT0FBTyxDQUFDbnNDLEtBQVQsRUFBZ0Iwc0MsVUFBaEIsQ0FGN0Q7O0FBR0EsWUFBSUUsU0FBSixFQUFlO0FBQ2JYLGlCQUFPLENBQUMvNEIsRUFBRCxFQUFLLFFBQUwsQ0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBbERhLENBQWhCOztBQXFEQSxTQUFTbTVCLFdBQVQsQ0FBc0JuNUIsRUFBdEIsRUFBMEJpNUIsT0FBMUIsRUFBbUNwZ0MsRUFBbkMsRUFBdUM7QUFDckMrZ0MscUJBQW1CLENBQUM1NUIsRUFBRCxFQUFLaTVCLE9BQUwsRUFBY3BnQyxFQUFkLENBQW5CO0FBQ0E7O0FBQ0EsTUFBSTFDLElBQUksSUFBSUUsTUFBWixFQUFvQjtBQUNsQm9RLGNBQVUsQ0FBQyxZQUFZO0FBQ3JCbXpCLHlCQUFtQixDQUFDNTVCLEVBQUQsRUFBS2k1QixPQUFMLEVBQWNwZ0MsRUFBZCxDQUFuQjtBQUNELEtBRlMsRUFFUCxDQUZPLENBQVY7QUFHRDtBQUNGOztBQUVELFNBQVMrZ0MsbUJBQVQsQ0FBOEI1NUIsRUFBOUIsRUFBa0NpNUIsT0FBbEMsRUFBMkNwZ0MsRUFBM0MsRUFBK0M7QUFDN0MsTUFBSS9MLEtBQUssR0FBR21zQyxPQUFPLENBQUNuc0MsS0FBcEI7QUFDQSxNQUFJK3NDLFVBQVUsR0FBRzc1QixFQUFFLENBQUNtbUIsUUFBcEI7O0FBQ0EsTUFBSTBULFVBQVUsSUFBSSxDQUFDenJDLEtBQUssQ0FBQ0MsT0FBTixDQUFjdkIsS0FBZCxDQUFuQixFQUF5QztBQUN2QzZHLFNBQUEsSUFBeUN5RSxJQUFJLENBQzNDLGdDQUFpQzZnQyxPQUFPLENBQUN4YyxVQUF6QyxHQUF1RCxNQUF2RCxHQUNBLGtEQURBLEdBQ3NEcHdCLE1BQU0sQ0FBQ2EsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJFLElBQTFCLENBQStCUCxLQUEvQixFQUFzQ1EsS0FBdEMsQ0FBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFoRCxDQUZYLEVBRzNDdUwsRUFIMkMsQ0FBN0M7QUFLQTtBQUNEOztBQUNELE1BQUlrdEIsUUFBSixFQUFjK1QsTUFBZDs7QUFDQSxPQUFLLElBQUk3cUMsQ0FBQyxHQUFHLENBQVIsRUFBV2lDLENBQUMsR0FBRzhPLEVBQUUsQ0FBQzlHLE9BQUgsQ0FBV2hLLE1BQS9CLEVBQXVDRCxDQUFDLEdBQUdpQyxDQUEzQyxFQUE4Q2pDLENBQUMsRUFBL0MsRUFBbUQ7QUFDakQ2cUMsVUFBTSxHQUFHOTVCLEVBQUUsQ0FBQzlHLE9BQUgsQ0FBV2pLLENBQVgsQ0FBVDs7QUFDQSxRQUFJNHFDLFVBQUosRUFBZ0I7QUFDZDlULGNBQVEsR0FBRzl5QixZQUFZLENBQUNuRyxLQUFELEVBQVFzc0MsUUFBUSxDQUFDVSxNQUFELENBQWhCLENBQVosR0FBd0MsQ0FBQyxDQUFwRDs7QUFDQSxVQUFJQSxNQUFNLENBQUMvVCxRQUFQLEtBQW9CQSxRQUF4QixFQUFrQztBQUNoQytULGNBQU0sQ0FBQy9ULFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0Q7QUFDRixLQUxELE1BS087QUFDTCxVQUFJMXpCLFVBQVUsQ0FBQyttQyxRQUFRLENBQUNVLE1BQUQsQ0FBVCxFQUFtQmh0QyxLQUFuQixDQUFkLEVBQXlDO0FBQ3ZDLFlBQUlrVCxFQUFFLENBQUMrNUIsYUFBSCxLQUFxQjlxQyxDQUF6QixFQUE0QjtBQUMxQitRLFlBQUUsQ0FBQys1QixhQUFILEdBQW1COXFDLENBQW5CO0FBQ0Q7O0FBQ0Q7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsTUFBSSxDQUFDNHFDLFVBQUwsRUFBaUI7QUFDZjc1QixNQUFFLENBQUMrNUIsYUFBSCxHQUFtQixDQUFDLENBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTSixtQkFBVCxDQUE4QjdzQyxLQUE5QixFQUFxQ29NLE9BQXJDLEVBQThDO0FBQzVDLFNBQU9BLE9BQU8sQ0FBQ3hHLEtBQVIsQ0FBYyxVQUFVK21DLENBQVYsRUFBYTtBQUFFLFdBQU8sQ0FBQ3BuQyxVQUFVLENBQUNvbkMsQ0FBRCxFQUFJM3NDLEtBQUosQ0FBbEI7QUFBK0IsR0FBNUQsQ0FBUDtBQUNEOztBQUVELFNBQVNzc0MsUUFBVCxDQUFtQlUsTUFBbkIsRUFBMkI7QUFDekIsU0FBTyxZQUFZQSxNQUFaLEdBQ0hBLE1BQU0sQ0FBQ3JKLE1BREosR0FFSHFKLE1BQU0sQ0FBQ2h0QyxLQUZYO0FBR0Q7O0FBRUQsU0FBU3VzQyxrQkFBVCxDQUE2QjFtQyxDQUE3QixFQUFnQztBQUM5QkEsR0FBQyxDQUFDK0gsTUFBRixDQUFTbTJCLFNBQVQsR0FBcUIsSUFBckI7QUFDRDs7QUFFRCxTQUFTeUksZ0JBQVQsQ0FBMkIzbUMsQ0FBM0IsRUFBOEI7QUFDNUI7QUFDQSxNQUFJLENBQUNBLENBQUMsQ0FBQytILE1BQUYsQ0FBU20yQixTQUFkLEVBQXlCO0FBQUU7QUFBUTs7QUFDbkNsK0IsR0FBQyxDQUFDK0gsTUFBRixDQUFTbTJCLFNBQVQsR0FBcUIsS0FBckI7QUFDQWtJLFNBQU8sQ0FBQ3BtQyxDQUFDLENBQUMrSCxNQUFILEVBQVcsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBU3ErQixPQUFULENBQWtCLzRCLEVBQWxCLEVBQXNCcUIsSUFBdEIsRUFBNEI7QUFDMUIsTUFBSTFPLENBQUMsR0FBR21VLFFBQVEsQ0FBQ3FWLFdBQVQsQ0FBcUIsWUFBckIsQ0FBUjtBQUNBeHBCLEdBQUMsQ0FBQ3FuQyxTQUFGLENBQVkzNEIsSUFBWixFQUFrQixJQUFsQixFQUF3QixJQUF4QjtBQUNBckIsSUFBRSxDQUFDaTZCLGFBQUgsQ0FBaUJ0bkMsQ0FBakI7QUFDRDtBQUVEO0FBRUE7OztBQUNBLFNBQVN1bkMsVUFBVCxDQUFxQmo5QixLQUFyQixFQUE0QjtBQUMxQixTQUFPQSxLQUFLLENBQUNqQixpQkFBTixLQUE0QixDQUFDaUIsS0FBSyxDQUFDNUIsSUFBUCxJQUFlLENBQUM0QixLQUFLLENBQUM1QixJQUFOLENBQVdvdUIsVUFBdkQsSUFDSHlRLFVBQVUsQ0FBQ2o5QixLQUFLLENBQUNqQixpQkFBTixDQUF3QjJaLE1BQXpCLENBRFAsR0FFSDFZLEtBRko7QUFHRDs7QUFFRCxJQUFJKzZCLElBQUksR0FBRztBQUNUem1DLE1BQUksRUFBRSxTQUFTQSxJQUFULENBQWV5TyxFQUFmLEVBQW1Cc1csR0FBbkIsRUFBd0JyWixLQUF4QixFQUErQjtBQUNuQyxRQUFJblEsS0FBSyxHQUFHd3BCLEdBQUcsQ0FBQ3hwQixLQUFoQjtBQUVBbVEsU0FBSyxHQUFHaTlCLFVBQVUsQ0FBQ2o5QixLQUFELENBQWxCO0FBQ0EsUUFBSWs5QixhQUFhLEdBQUdsOUIsS0FBSyxDQUFDNUIsSUFBTixJQUFjNEIsS0FBSyxDQUFDNUIsSUFBTixDQUFXb3VCLFVBQTdDO0FBQ0EsUUFBSTJRLGVBQWUsR0FBR3A2QixFQUFFLENBQUNxNkIsa0JBQUgsR0FDcEJyNkIsRUFBRSxDQUFDd1YsS0FBSCxDQUFTOGtCLE9BQVQsS0FBcUIsTUFBckIsR0FBOEIsRUFBOUIsR0FBbUN0NkIsRUFBRSxDQUFDd1YsS0FBSCxDQUFTOGtCLE9BRDlDOztBQUVBLFFBQUl4dEMsS0FBSyxJQUFJcXRDLGFBQWIsRUFBNEI7QUFDMUJsOUIsV0FBSyxDQUFDNUIsSUFBTixDQUFXMjhCLElBQVgsR0FBa0IsSUFBbEI7QUFDQTdCLFdBQUssQ0FBQ2w1QixLQUFELEVBQVEsWUFBWTtBQUN2QitDLFVBQUUsQ0FBQ3dWLEtBQUgsQ0FBUzhrQixPQUFULEdBQW1CRixlQUFuQjtBQUNELE9BRkksQ0FBTDtBQUdELEtBTEQsTUFLTztBQUNMcDZCLFFBQUUsQ0FBQ3dWLEtBQUgsQ0FBUzhrQixPQUFULEdBQW1CeHRDLEtBQUssR0FBR3N0QyxlQUFILEdBQXFCLE1BQTdDO0FBQ0Q7QUFDRixHQWhCUTtBQWtCVHQvQixRQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFpQmtGLEVBQWpCLEVBQXFCc1csR0FBckIsRUFBMEJyWixLQUExQixFQUFpQztBQUN2QyxRQUFJblEsS0FBSyxHQUFHd3BCLEdBQUcsQ0FBQ3hwQixLQUFoQjtBQUNBLFFBQUkrd0IsUUFBUSxHQUFHdkgsR0FBRyxDQUFDdUgsUUFBbkI7QUFFQTs7QUFDQSxRQUFJLENBQUMvd0IsS0FBRCxLQUFXLENBQUMrd0IsUUFBaEIsRUFBMEI7QUFBRTtBQUFROztBQUNwQzVnQixTQUFLLEdBQUdpOUIsVUFBVSxDQUFDajlCLEtBQUQsQ0FBbEI7QUFDQSxRQUFJazlCLGFBQWEsR0FBR2w5QixLQUFLLENBQUM1QixJQUFOLElBQWM0QixLQUFLLENBQUM1QixJQUFOLENBQVdvdUIsVUFBN0M7O0FBQ0EsUUFBSTBRLGFBQUosRUFBbUI7QUFDakJsOUIsV0FBSyxDQUFDNUIsSUFBTixDQUFXMjhCLElBQVgsR0FBa0IsSUFBbEI7O0FBQ0EsVUFBSWxyQyxLQUFKLEVBQVc7QUFDVHFwQyxhQUFLLENBQUNsNUIsS0FBRCxFQUFRLFlBQVk7QUFDdkIrQyxZQUFFLENBQUN3VixLQUFILENBQVM4a0IsT0FBVCxHQUFtQnQ2QixFQUFFLENBQUNxNkIsa0JBQXRCO0FBQ0QsU0FGSSxDQUFMO0FBR0QsT0FKRCxNQUlPO0FBQ0xqQyxhQUFLLENBQUNuN0IsS0FBRCxFQUFRLFlBQVk7QUFDdkIrQyxZQUFFLENBQUN3VixLQUFILENBQVM4a0IsT0FBVCxHQUFtQixNQUFuQjtBQUNELFNBRkksQ0FBTDtBQUdEO0FBQ0YsS0FYRCxNQVdPO0FBQ0x0NkIsUUFBRSxDQUFDd1YsS0FBSCxDQUFTOGtCLE9BQVQsR0FBbUJ4dEMsS0FBSyxHQUFHa1QsRUFBRSxDQUFDcTZCLGtCQUFOLEdBQTJCLE1BQW5EO0FBQ0Q7QUFDRixHQXhDUTtBQTBDVEUsUUFBTSxFQUFFLFNBQVNBLE1BQVQsQ0FDTnY2QixFQURNLEVBRU5pNUIsT0FGTSxFQUdOaDhCLEtBSE0sRUFJTjZWLFFBSk0sRUFLTnFhLFNBTE0sRUFNTjtBQUNBLFFBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNkbnRCLFFBQUUsQ0FBQ3dWLEtBQUgsQ0FBUzhrQixPQUFULEdBQW1CdDZCLEVBQUUsQ0FBQ3E2QixrQkFBdEI7QUFDRDtBQUNGO0FBcERRLENBQVg7QUF1REEsSUFBSUcsa0JBQWtCLEdBQUc7QUFDdkIxbUIsT0FBSyxFQUFFa2xCLFNBRGdCO0FBRXZCaEIsTUFBSSxFQUFFQTtBQUZpQixDQUF6QjtBQUtBOztBQUVBLElBQUl5QyxlQUFlLEdBQUc7QUFDcEJsaEMsTUFBSSxFQUFFMUwsTUFEYztBQUVwQmlwQyxRQUFNLEVBQUV2ekIsT0FGWTtBQUdwQit2QixLQUFHLEVBQUUvdkIsT0FIZTtBQUlwQm0zQixNQUFJLEVBQUU3c0MsTUFKYztBQUtwQndULE1BQUksRUFBRXhULE1BTGM7QUFNcEIybEMsWUFBVSxFQUFFM2xDLE1BTlE7QUFPcEI4bEMsWUFBVSxFQUFFOWxDLE1BUFE7QUFRcEI0bEMsY0FBWSxFQUFFNWxDLE1BUk07QUFTcEIrbEMsY0FBWSxFQUFFL2xDLE1BVE07QUFVcEI2bEMsa0JBQWdCLEVBQUU3bEMsTUFWRTtBQVdwQmdtQyxrQkFBZ0IsRUFBRWhtQyxNQVhFO0FBWXBCMG9DLGFBQVcsRUFBRTFvQyxNQVpPO0FBYXBCNG9DLG1CQUFpQixFQUFFNW9DLE1BYkM7QUFjcEIyb0MsZUFBYSxFQUFFM29DLE1BZEs7QUFlcEJvcEMsVUFBUSxFQUFFLENBQUNoeUIsTUFBRCxFQUFTcFgsTUFBVCxFQUFpQnhCLE1BQWpCO0FBZlUsQ0FBdEIsQyxDQWtCQTtBQUNBOztBQUNBLFNBQVNzdUMsWUFBVCxDQUF1QjE5QixLQUF2QixFQUE4QjtBQUM1QixNQUFJMjlCLFdBQVcsR0FBRzM5QixLQUFLLElBQUlBLEtBQUssQ0FBQ3ZCLGdCQUFqQzs7QUFDQSxNQUFJay9CLFdBQVcsSUFBSUEsV0FBVyxDQUFDbmpDLElBQVosQ0FBaUJ5QixPQUFqQixDQUF5QmdiLFFBQTVDLEVBQXNEO0FBQ3BELFdBQU95bUIsWUFBWSxDQUFDMWlCLHNCQUFzQixDQUFDMmlCLFdBQVcsQ0FBQ3QvQixRQUFiLENBQXZCLENBQW5CO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTzJCLEtBQVA7QUFDRDtBQUNGOztBQUVELFNBQVM0OUIscUJBQVQsQ0FBZ0Nwa0IsSUFBaEMsRUFBc0M7QUFDcEMsTUFBSXBiLElBQUksR0FBRyxFQUFYO0FBQ0EsTUFBSW5DLE9BQU8sR0FBR3VkLElBQUksQ0FBQ3BkLFFBQW5CLENBRm9DLENBR3BDOztBQUNBLE9BQUssSUFBSXZKLEdBQVQsSUFBZ0JvSixPQUFPLENBQUMrRyxTQUF4QixFQUFtQztBQUNqQzVFLFFBQUksQ0FBQ3ZMLEdBQUQsQ0FBSixHQUFZMm1CLElBQUksQ0FBQzNtQixHQUFELENBQWhCO0FBQ0QsR0FObUMsQ0FPcEM7QUFDQTs7O0FBQ0EsTUFBSXdoQixTQUFTLEdBQUdwWSxPQUFPLENBQUM4YyxnQkFBeEI7O0FBQ0EsT0FBSyxJQUFJMVUsS0FBVCxJQUFrQmdRLFNBQWxCLEVBQTZCO0FBQzNCalcsUUFBSSxDQUFDaEwsUUFBUSxDQUFDaVIsS0FBRCxDQUFULENBQUosR0FBd0JnUSxTQUFTLENBQUNoUSxLQUFELENBQWpDO0FBQ0Q7O0FBQ0QsU0FBT2pHLElBQVA7QUFDRDs7QUFFRCxTQUFTeS9CLFdBQVQsQ0FBc0JDLENBQXRCLEVBQXlCQyxRQUF6QixFQUFtQztBQUNqQyxNQUFJLGlCQUFpQnpsQyxJQUFqQixDQUFzQnlsQyxRQUFRLENBQUM1L0IsR0FBL0IsQ0FBSixFQUF5QztBQUN2QyxXQUFPMi9CLENBQUMsQ0FBQyxZQUFELEVBQWU7QUFDckJ4NUIsV0FBSyxFQUFFeTVCLFFBQVEsQ0FBQ3QvQixnQkFBVCxDQUEwQnVFO0FBRFosS0FBZixDQUFSO0FBR0Q7QUFDRjs7QUFFRCxTQUFTZzdCLG1CQUFULENBQThCaCtCLEtBQTlCLEVBQXFDO0FBQ25DLFNBQVFBLEtBQUssR0FBR0EsS0FBSyxDQUFDaEIsTUFBdEIsRUFBK0I7QUFDN0IsUUFBSWdCLEtBQUssQ0FBQzVCLElBQU4sQ0FBV291QixVQUFmLEVBQTJCO0FBQ3pCLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTeVIsV0FBVCxDQUFzQnYrQixLQUF0QixFQUE2QncrQixRQUE3QixFQUF1QztBQUNyQyxTQUFPQSxRQUFRLENBQUNyckMsR0FBVCxLQUFpQjZNLEtBQUssQ0FBQzdNLEdBQXZCLElBQThCcXJDLFFBQVEsQ0FBQy8vQixHQUFULEtBQWlCdUIsS0FBSyxDQUFDdkIsR0FBNUQ7QUFDRDs7QUFFRCxJQUFJZ2dDLGFBQWEsR0FBRyxVQUFVNXFDLENBQVYsRUFBYTtBQUFFLFNBQU9BLENBQUMsQ0FBQzRLLEdBQUYsSUFBU3FCLGtCQUFrQixDQUFDak0sQ0FBRCxDQUFsQztBQUF3QyxDQUEzRTs7QUFFQSxJQUFJNnFDLGdCQUFnQixHQUFHLFVBQVUxcEIsQ0FBVixFQUFhO0FBQUUsU0FBT0EsQ0FBQyxDQUFDcFksSUFBRixLQUFXLE1BQWxCO0FBQTJCLENBQWpFOztBQUVBLElBQUkraEMsVUFBVSxHQUFHO0FBQ2YvaEMsTUFBSSxFQUFFLFlBRFM7QUFFZmdJLE9BQUssRUFBRWs1QixlQUZRO0FBR2Z2bUIsVUFBUSxFQUFFLElBSEs7QUFLZmpNLFFBQU0sRUFBRSxTQUFTQSxNQUFULENBQWlCOHlCLENBQWpCLEVBQW9CO0FBQzFCLFFBQUkvcEIsTUFBTSxHQUFHLElBQWI7QUFFQSxRQUFJMVYsUUFBUSxHQUFHLEtBQUtpUyxNQUFMLENBQVkzSixPQUEzQjs7QUFDQSxRQUFJLENBQUN0SSxRQUFMLEVBQWU7QUFDYjtBQUNELEtBTnlCLENBUTFCOzs7QUFDQUEsWUFBUSxHQUFHQSxRQUFRLENBQUNtbkIsTUFBVCxDQUFnQjJZLGFBQWhCLENBQVg7QUFDQTs7QUFDQSxRQUFJLENBQUM5L0IsUUFBUSxDQUFDcE0sTUFBZCxFQUFzQjtBQUNwQjtBQUNELEtBYnlCLENBZTFCOzs7QUFDQSxRQUFJeUUsS0FBQSxJQUF5QzJILFFBQVEsQ0FBQ3BNLE1BQVQsR0FBa0IsQ0FBL0QsRUFBa0U7QUFDaEVrSixVQUFJLENBQ0YsNERBQ0EsK0JBRkUsRUFHRixLQUFLd0IsT0FISCxDQUFKO0FBS0Q7O0FBRUQsUUFBSThnQyxJQUFJLEdBQUcsS0FBS0EsSUFBaEIsQ0F4QjBCLENBMEIxQjs7QUFDQSxRQUFJL21DLEtBQUEsSUFDRittQyxJQURFLElBQ01BLElBQUksS0FBSyxRQURmLElBQzJCQSxJQUFJLEtBQUssUUFEeEMsRUFFRTtBQUNBdGlDLFVBQUksQ0FDRixnQ0FBZ0NzaUMsSUFEOUIsRUFFRixLQUFLOWdDLE9BRkgsQ0FBSjtBQUlEOztBQUVELFFBQUlvaEMsUUFBUSxHQUFHMS9CLFFBQVEsQ0FBQyxDQUFELENBQXZCLENBcEMwQixDQXNDMUI7QUFDQTs7QUFDQSxRQUFJMi9CLG1CQUFtQixDQUFDLEtBQUs5bEIsTUFBTixDQUF2QixFQUFzQztBQUNwQyxhQUFPNmxCLFFBQVA7QUFDRCxLQTFDeUIsQ0E0QzFCO0FBQ0E7OztBQUNBLFFBQUlyK0IsS0FBSyxHQUFHZytCLFlBQVksQ0FBQ0ssUUFBRCxDQUF4QjtBQUNBOztBQUNBLFFBQUksQ0FBQ3IrQixLQUFMLEVBQVk7QUFDVixhQUFPcStCLFFBQVA7QUFDRDs7QUFFRCxRQUFJLEtBQUtPLFFBQVQsRUFBbUI7QUFDakIsYUFBT1QsV0FBVyxDQUFDQyxDQUFELEVBQUlDLFFBQUosQ0FBbEI7QUFDRCxLQXREeUIsQ0F3RDFCO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSTVnQyxFQUFFLEdBQUcsa0JBQW1CLEtBQUtzZ0IsSUFBeEIsR0FBZ0MsR0FBekM7QUFDQS9kLFNBQUssQ0FBQzdNLEdBQU4sR0FBWTZNLEtBQUssQ0FBQzdNLEdBQU4sSUFBYSxJQUFiLEdBQ1I2TSxLQUFLLENBQUNOLFNBQU4sR0FDRWpDLEVBQUUsR0FBRyxTQURQLEdBRUVBLEVBQUUsR0FBR3VDLEtBQUssQ0FBQ3ZCLEdBSEwsR0FJUnZPLFdBQVcsQ0FBQzhQLEtBQUssQ0FBQzdNLEdBQVAsQ0FBWCxHQUNHakMsTUFBTSxDQUFDOE8sS0FBSyxDQUFDN00sR0FBUCxDQUFOLENBQWtCSixPQUFsQixDQUEwQjBLLEVBQTFCLE1BQWtDLENBQWxDLEdBQXNDdUMsS0FBSyxDQUFDN00sR0FBNUMsR0FBa0RzSyxFQUFFLEdBQUd1QyxLQUFLLENBQUM3TSxHQURoRSxHQUVFNk0sS0FBSyxDQUFDN00sR0FOWjtBQVFBLFFBQUl1TCxJQUFJLEdBQUcsQ0FBQ3NCLEtBQUssQ0FBQ3RCLElBQU4sS0FBZXNCLEtBQUssQ0FBQ3RCLElBQU4sR0FBYSxFQUE1QixDQUFELEVBQWtDb3VCLFVBQWxDLEdBQStDb1IscUJBQXFCLENBQUMsSUFBRCxDQUEvRTtBQUNBLFFBQUlXLFdBQVcsR0FBRyxLQUFLN2xCLE1BQXZCO0FBQ0EsUUFBSXdsQixRQUFRLEdBQUdSLFlBQVksQ0FBQ2EsV0FBRCxDQUEzQixDQXRFMEIsQ0F3RTFCO0FBQ0E7O0FBQ0EsUUFBSTcrQixLQUFLLENBQUN0QixJQUFOLENBQVcrRyxVQUFYLElBQXlCekYsS0FBSyxDQUFDdEIsSUFBTixDQUFXK0csVUFBWCxDQUFzQitDLElBQXRCLENBQTJCazJCLGdCQUEzQixDQUE3QixFQUEyRTtBQUN6RTErQixXQUFLLENBQUN0QixJQUFOLENBQVcyOEIsSUFBWCxHQUFrQixJQUFsQjtBQUNEOztBQUVELFFBQ0VtRCxRQUFRLElBQ1JBLFFBQVEsQ0FBQzkvQixJQURULElBRUEsQ0FBQzYvQixXQUFXLENBQUN2K0IsS0FBRCxFQUFRdytCLFFBQVIsQ0FGWixJQUdBLENBQUMxK0Isa0JBQWtCLENBQUMwK0IsUUFBRCxDQUhuQixJQUlBO0FBQ0EsTUFBRUEsUUFBUSxDQUFDbi9CLGlCQUFULElBQThCbS9CLFFBQVEsQ0FBQ24vQixpQkFBVCxDQUEyQjJaLE1BQTNCLENBQWtDdFosU0FBbEUsQ0FORixFQU9FO0FBQ0E7QUFDQTtBQUNBLFVBQUk0eUIsT0FBTyxHQUFHa00sUUFBUSxDQUFDOS9CLElBQVQsQ0FBY291QixVQUFkLEdBQTJCNzNCLE1BQU0sQ0FBQyxFQUFELEVBQUt5SixJQUFMLENBQS9DLENBSEEsQ0FJQTs7QUFDQSxVQUFJcS9CLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCO0FBQ0EsYUFBS2EsUUFBTCxHQUFnQixJQUFoQjtBQUNBdHhCLHNCQUFjLENBQUNnbEIsT0FBRCxFQUFVLFlBQVYsRUFBd0IsWUFBWTtBQUNoRGplLGdCQUFNLENBQUN1cUIsUUFBUCxHQUFrQixLQUFsQjtBQUNBdnFCLGdCQUFNLENBQUMwRyxZQUFQO0FBQ0QsU0FIYSxDQUFkO0FBSUEsZUFBT29qQixXQUFXLENBQUNDLENBQUQsRUFBSUMsUUFBSixDQUFsQjtBQUNELE9BUkQsTUFRTyxJQUFJTixJQUFJLEtBQUssUUFBYixFQUF1QjtBQUM1QixZQUFJaitCLGtCQUFrQixDQUFDRSxLQUFELENBQXRCLEVBQStCO0FBQzdCLGlCQUFPNitCLFdBQVA7QUFDRDs7QUFDRCxZQUFJQyxZQUFKOztBQUNBLFlBQUkvQyxZQUFZLEdBQUcsWUFBWTtBQUFFK0Msc0JBQVk7QUFBSyxTQUFsRDs7QUFDQXh4QixzQkFBYyxDQUFDNU8sSUFBRCxFQUFPLFlBQVAsRUFBcUJxOUIsWUFBckIsQ0FBZDtBQUNBenVCLHNCQUFjLENBQUM1TyxJQUFELEVBQU8sZ0JBQVAsRUFBeUJxOUIsWUFBekIsQ0FBZDtBQUNBenVCLHNCQUFjLENBQUNnbEIsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBVW1KLEtBQVYsRUFBaUI7QUFBRXFELHNCQUFZLEdBQUdyRCxLQUFmO0FBQXVCLFNBQWxFLENBQWQ7QUFDRDtBQUNGOztBQUVELFdBQU80QyxRQUFQO0FBQ0Q7QUFwSGMsQ0FBakI7QUF1SEE7O0FBRUEsSUFBSXo1QixLQUFLLEdBQUczUCxNQUFNLENBQUM7QUFDakJ3SixLQUFHLEVBQUV2TixNQURZO0FBRWpCNnRDLFdBQVMsRUFBRTd0QztBQUZNLENBQUQsRUFHZjRzQyxlQUhlLENBQWxCO0FBS0EsT0FBT2w1QixLQUFLLENBQUNtNUIsSUFBYjtBQUVBLElBQUlpQixlQUFlLEdBQUc7QUFDcEJwNkIsT0FBSyxFQUFFQSxLQURhO0FBR3BCcTZCLGFBQVcsRUFBRSxTQUFTQSxXQUFULEdBQXdCO0FBQ25DLFFBQUk1cUIsTUFBTSxHQUFHLElBQWI7QUFFQSxRQUFJbFcsTUFBTSxHQUFHLEtBQUs4ZSxPQUFsQjs7QUFDQSxTQUFLQSxPQUFMLEdBQWUsVUFBVTNjLEtBQVYsRUFBaUJxVixTQUFqQixFQUE0QjtBQUN6QyxVQUFJMEgscUJBQXFCLEdBQUdkLGlCQUFpQixDQUFDbEksTUFBRCxDQUE3QyxDQUR5QyxDQUV6Qzs7QUFDQUEsWUFBTSxDQUFDaUosU0FBUCxDQUNFakosTUFBTSxDQUFDMkUsTUFEVCxFQUVFM0UsTUFBTSxDQUFDNnFCLElBRlQsRUFHRSxLQUhGLEVBR1M7QUFDUCxVQUpGLENBSU87QUFKUDs7QUFNQTdxQixZQUFNLENBQUMyRSxNQUFQLEdBQWdCM0UsTUFBTSxDQUFDNnFCLElBQXZCO0FBQ0E3aEIsMkJBQXFCO0FBQ3JCbGYsWUFBTSxDQUFDek4sSUFBUCxDQUFZMmpCLE1BQVosRUFBb0IvVCxLQUFwQixFQUEyQnFWLFNBQTNCO0FBQ0QsS0FaRDtBQWFELEdBcEJtQjtBQXNCcEJySyxRQUFNLEVBQUUsU0FBU0EsTUFBVCxDQUFpQjh5QixDQUFqQixFQUFvQjtBQUMxQixRQUFJMy9CLEdBQUcsR0FBRyxLQUFLQSxHQUFMLElBQVksS0FBSytaLE1BQUwsQ0FBWTlaLElBQVosQ0FBaUJELEdBQTdCLElBQW9DLE1BQTlDO0FBQ0EsUUFBSXZNLEdBQUcsR0FBR3hDLE1BQU0sQ0FBQ3lDLE1BQVAsQ0FBYyxJQUFkLENBQVY7QUFDQSxRQUFJZ3RDLFlBQVksR0FBRyxLQUFLQSxZQUFMLEdBQW9CLEtBQUt4Z0MsUUFBNUM7QUFDQSxRQUFJeWdDLFdBQVcsR0FBRyxLQUFLeHVCLE1BQUwsQ0FBWTNKLE9BQVosSUFBdUIsRUFBekM7QUFDQSxRQUFJdEksUUFBUSxHQUFHLEtBQUtBLFFBQUwsR0FBZ0IsRUFBL0I7QUFDQSxRQUFJMGdDLGNBQWMsR0FBR25CLHFCQUFxQixDQUFDLElBQUQsQ0FBMUM7O0FBRUEsU0FBSyxJQUFJNXJDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4c0MsV0FBVyxDQUFDN3NDLE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLFVBQUl1QixDQUFDLEdBQUd1ckMsV0FBVyxDQUFDOXNDLENBQUQsQ0FBbkI7O0FBQ0EsVUFBSXVCLENBQUMsQ0FBQzRLLEdBQU4sRUFBVztBQUNULFlBQUk1SyxDQUFDLENBQUNWLEdBQUYsSUFBUyxJQUFULElBQWlCakMsTUFBTSxDQUFDMkMsQ0FBQyxDQUFDVixHQUFILENBQU4sQ0FBY0osT0FBZCxDQUFzQixTQUF0QixNQUFxQyxDQUExRCxFQUE2RDtBQUMzRDRMLGtCQUFRLENBQUN0QixJQUFULENBQWN4SixDQUFkO0FBQ0EzQixhQUFHLENBQUMyQixDQUFDLENBQUNWLEdBQUgsQ0FBSCxHQUFhVSxDQUFiO0FBQ0MsV0FBQ0EsQ0FBQyxDQUFDNkssSUFBRixLQUFXN0ssQ0FBQyxDQUFDNkssSUFBRixHQUFTLEVBQXBCLENBQUQsRUFBMEJvdUIsVUFBMUIsR0FBdUN1UyxjQUF2QztBQUNGLFNBSkQsTUFJTyxJQUFJcm9DLElBQUosRUFBMkM7QUFDaEQsY0FBSW9ELElBQUksR0FBR3ZHLENBQUMsQ0FBQ2tMLGdCQUFiO0FBQ0EsY0FBSW5DLElBQUksR0FBR3hDLElBQUksR0FBSUEsSUFBSSxDQUFDVSxJQUFMLENBQVV5QixPQUFWLENBQWtCSyxJQUFsQixJQUEwQnhDLElBQUksQ0FBQ3FFLEdBQS9CLElBQXNDLEVBQTFDLEdBQWdENUssQ0FBQyxDQUFDNEssR0FBakU7QUFDQWhELGNBQUksQ0FBRSxpREFBaURtQixJQUFqRCxHQUF3RCxHQUExRCxDQUFKO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFFBQUl1aUMsWUFBSixFQUFrQjtBQUNoQixVQUFJRCxJQUFJLEdBQUcsRUFBWDtBQUNBLFVBQUlJLE9BQU8sR0FBRyxFQUFkOztBQUNBLFdBQUssSUFBSW5qQixHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHZ2pCLFlBQVksQ0FBQzVzQyxNQUFyQyxFQUE2QzRwQixHQUFHLEVBQWhELEVBQW9EO0FBQ2xELFlBQUlvakIsR0FBRyxHQUFHSixZQUFZLENBQUNoakIsR0FBRCxDQUF0QjtBQUNBb2pCLFdBQUcsQ0FBQzdnQyxJQUFKLENBQVNvdUIsVUFBVCxHQUFzQnVTLGNBQXRCO0FBQ0FFLFdBQUcsQ0FBQzdnQyxJQUFKLENBQVM4Z0MsR0FBVCxHQUFlRCxHQUFHLENBQUMxZ0MsR0FBSixDQUFRNGdDLHFCQUFSLEVBQWY7O0FBQ0EsWUFBSXZ0QyxHQUFHLENBQUNxdEMsR0FBRyxDQUFDcHNDLEdBQUwsQ0FBUCxFQUFrQjtBQUNoQityQyxjQUFJLENBQUM3aEMsSUFBTCxDQUFVa2lDLEdBQVY7QUFDRCxTQUZELE1BRU87QUFDTEQsaUJBQU8sQ0FBQ2ppQyxJQUFSLENBQWFraUMsR0FBYjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBS0wsSUFBTCxHQUFZZCxDQUFDLENBQUMzL0IsR0FBRCxFQUFNLElBQU4sRUFBWXlnQyxJQUFaLENBQWI7QUFDQSxXQUFLSSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7QUFFRCxXQUFPbEIsQ0FBQyxDQUFDMy9CLEdBQUQsRUFBTSxJQUFOLEVBQVlFLFFBQVosQ0FBUjtBQUNELEdBL0RtQjtBQWlFcEIrZ0MsU0FBTyxFQUFFLFNBQVNBLE9BQVQsR0FBb0I7QUFDM0IsUUFBSS9nQyxRQUFRLEdBQUcsS0FBS3dnQyxZQUFwQjtBQUNBLFFBQUlKLFNBQVMsR0FBRyxLQUFLQSxTQUFMLElBQW1CLENBQUMsS0FBS25pQyxJQUFMLElBQWEsR0FBZCxJQUFxQixPQUF4RDs7QUFDQSxRQUFJLENBQUMrQixRQUFRLENBQUNwTSxNQUFWLElBQW9CLENBQUMsS0FBS290QyxPQUFMLENBQWFoaEMsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZRSxHQUF6QixFQUE4QmtnQyxTQUE5QixDQUF6QixFQUFtRTtBQUNqRTtBQUNELEtBTDBCLENBTzNCO0FBQ0E7OztBQUNBcGdDLFlBQVEsQ0FBQ2dDLE9BQVQsQ0FBaUJpL0IsY0FBakI7QUFDQWpoQyxZQUFRLENBQUNnQyxPQUFULENBQWlCay9CLGNBQWpCO0FBQ0FsaEMsWUFBUSxDQUFDZ0MsT0FBVCxDQUFpQm0vQixnQkFBakIsRUFYMkIsQ0FhM0I7QUFDQTtBQUNBOztBQUNBLFNBQUtDLE9BQUwsR0FBZTUxQixRQUFRLENBQUM2MUIsSUFBVCxDQUFjQyxZQUE3QjtBQUVBdGhDLFlBQVEsQ0FBQ2dDLE9BQVQsQ0FBaUIsVUFBVTlNLENBQVYsRUFBYTtBQUM1QixVQUFJQSxDQUFDLENBQUM2SyxJQUFGLENBQU93aEMsS0FBWCxFQUFrQjtBQUNoQixZQUFJNzhCLEVBQUUsR0FBR3hQLENBQUMsQ0FBQ2dMLEdBQVg7QUFDQSxZQUFJMDZCLENBQUMsR0FBR2wyQixFQUFFLENBQUN3VixLQUFYO0FBQ0FvZiwwQkFBa0IsQ0FBQzUwQixFQUFELEVBQUswN0IsU0FBTCxDQUFsQjtBQUNBeEYsU0FBQyxDQUFDNEcsU0FBRixHQUFjNUcsQ0FBQyxDQUFDNkcsZUFBRixHQUFvQjdHLENBQUMsQ0FBQzhHLGtCQUFGLEdBQXVCLEVBQXpEO0FBQ0FoOUIsVUFBRSxDQUFDL0ksZ0JBQUgsQ0FBb0JpOUIsa0JBQXBCLEVBQXdDbDBCLEVBQUUsQ0FBQ2k5QixPQUFILEdBQWEsU0FBUzkxQixFQUFULENBQWF4VSxDQUFiLEVBQWdCO0FBQ25FLGNBQUlBLENBQUMsSUFBSUEsQ0FBQyxDQUFDK0gsTUFBRixLQUFhc0YsRUFBdEIsRUFBMEI7QUFDeEI7QUFDRDs7QUFDRCxjQUFJLENBQUNyTixDQUFELElBQU0sYUFBYTRDLElBQWIsQ0FBa0I1QyxDQUFDLENBQUN1cUMsWUFBcEIsQ0FBVixFQUE2QztBQUMzQ2w5QixjQUFFLENBQUMrdUIsbUJBQUgsQ0FBdUJtRixrQkFBdkIsRUFBMkMvc0IsRUFBM0M7QUFDQW5ILGNBQUUsQ0FBQ2k5QixPQUFILEdBQWEsSUFBYjtBQUNBbkksaUNBQXFCLENBQUM5MEIsRUFBRCxFQUFLMDdCLFNBQUwsQ0FBckI7QUFDRDtBQUNGLFNBVEQ7QUFVRDtBQUNGLEtBakJEO0FBa0JELEdBckdtQjtBQXVHcEJsNkIsU0FBTyxFQUFFO0FBQ1A4NkIsV0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBa0J0OEIsRUFBbEIsRUFBc0IwN0IsU0FBdEIsRUFBaUM7QUFDeEM7QUFDQSxVQUFJLENBQUM1SCxhQUFMLEVBQW9CO0FBQ2xCLGVBQU8sS0FBUDtBQUNEO0FBQ0Q7OztBQUNBLFVBQUksS0FBS3FKLFFBQVQsRUFBbUI7QUFDakIsZUFBTyxLQUFLQSxRQUFaO0FBQ0QsT0FSdUMsQ0FTeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSWpyQixLQUFLLEdBQUdsUyxFQUFFLENBQUNvOUIsU0FBSCxFQUFaOztBQUNBLFVBQUlwOUIsRUFBRSxDQUFDb3ZCLGtCQUFQLEVBQTJCO0FBQ3pCcHZCLFVBQUUsQ0FBQ292QixrQkFBSCxDQUFzQjl4QixPQUF0QixDQUE4QixVQUFVNHhCLEdBQVYsRUFBZTtBQUFFaUUscUJBQVcsQ0FBQ2poQixLQUFELEVBQVFnZCxHQUFSLENBQVg7QUFBMEIsU0FBekU7QUFDRDs7QUFDRDhELGNBQVEsQ0FBQzlnQixLQUFELEVBQVF3cEIsU0FBUixDQUFSO0FBQ0F4cEIsV0FBSyxDQUFDc0QsS0FBTixDQUFZOGtCLE9BQVosR0FBc0IsTUFBdEI7QUFDQSxXQUFLeGdCLEdBQUwsQ0FBUzhNLFdBQVQsQ0FBcUIxVSxLQUFyQjtBQUNBLFVBQUkzTSxJQUFJLEdBQUd5dkIsaUJBQWlCLENBQUM5aUIsS0FBRCxDQUE1QjtBQUNBLFdBQUs0SCxHQUFMLENBQVM2TSxXQUFULENBQXFCelUsS0FBckI7QUFDQSxhQUFRLEtBQUtpckIsUUFBTCxHQUFnQjUzQixJQUFJLENBQUN1d0IsWUFBN0I7QUFDRDtBQXpCTTtBQXZHVyxDQUF0Qjs7QUFvSUEsU0FBU3lHLGNBQVQsQ0FBeUIvckMsQ0FBekIsRUFBNEI7QUFDMUI7QUFDQSxNQUFJQSxDQUFDLENBQUNnTCxHQUFGLENBQU15aEMsT0FBVixFQUFtQjtBQUNqQnpzQyxLQUFDLENBQUNnTCxHQUFGLENBQU15aEMsT0FBTjtBQUNEO0FBQ0Q7OztBQUNBLE1BQUl6c0MsQ0FBQyxDQUFDZ0wsR0FBRixDQUFNODZCLFFBQVYsRUFBb0I7QUFDbEI5bEMsS0FBQyxDQUFDZ0wsR0FBRixDQUFNODZCLFFBQU47QUFDRDtBQUNGOztBQUVELFNBQVNrRyxjQUFULENBQXlCaHNDLENBQXpCLEVBQTRCO0FBQzFCQSxHQUFDLENBQUM2SyxJQUFGLENBQU9naUMsTUFBUCxHQUFnQjdzQyxDQUFDLENBQUNnTCxHQUFGLENBQU00Z0MscUJBQU4sRUFBaEI7QUFDRDs7QUFFRCxTQUFTSyxnQkFBVCxDQUEyQmpzQyxDQUEzQixFQUE4QjtBQUM1QixNQUFJOHNDLE1BQU0sR0FBRzlzQyxDQUFDLENBQUM2SyxJQUFGLENBQU84Z0MsR0FBcEI7QUFDQSxNQUFJa0IsTUFBTSxHQUFHN3NDLENBQUMsQ0FBQzZLLElBQUYsQ0FBT2dpQyxNQUFwQjtBQUNBLE1BQUlFLEVBQUUsR0FBR0QsTUFBTSxDQUFDRSxJQUFQLEdBQWNILE1BQU0sQ0FBQ0csSUFBOUI7QUFDQSxNQUFJQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0ksR0FBUCxHQUFhTCxNQUFNLENBQUNLLEdBQTdCOztBQUNBLE1BQUlILEVBQUUsSUFBSUUsRUFBVixFQUFjO0FBQ1pqdEMsS0FBQyxDQUFDNkssSUFBRixDQUFPd2hDLEtBQVAsR0FBZSxJQUFmO0FBQ0EsUUFBSTNHLENBQUMsR0FBRzFsQyxDQUFDLENBQUNnTCxHQUFGLENBQU1nYSxLQUFkO0FBQ0EwZ0IsS0FBQyxDQUFDNEcsU0FBRixHQUFjNUcsQ0FBQyxDQUFDNkcsZUFBRixHQUFvQixlQUFlUSxFQUFmLEdBQW9CLEtBQXBCLEdBQTRCRSxFQUE1QixHQUFpQyxLQUFuRTtBQUNBdkgsS0FBQyxDQUFDOEcsa0JBQUYsR0FBdUIsSUFBdkI7QUFDRDtBQUNGOztBQUVELElBQUlXLGtCQUFrQixHQUFHO0FBQ3ZCckMsWUFBVSxFQUFFQSxVQURXO0FBRXZCSyxpQkFBZSxFQUFFQTtBQUZNLENBQXpCO0FBS0E7QUFFQTs7QUFDQXhsQixHQUFHLENBQUM1aUIsTUFBSixDQUFXZ0IsV0FBWCxHQUF5QkEsV0FBekI7QUFDQTRoQixHQUFHLENBQUM1aUIsTUFBSixDQUFXVyxhQUFYLEdBQTJCQSxhQUEzQjtBQUNBaWlCLEdBQUcsQ0FBQzVpQixNQUFKLENBQVdZLGNBQVgsR0FBNEJBLGNBQTVCO0FBQ0FnaUIsR0FBRyxDQUFDNWlCLE1BQUosQ0FBV2MsZUFBWCxHQUE2QkEsZUFBN0I7QUFDQThoQixHQUFHLENBQUM1aUIsTUFBSixDQUFXYSxnQkFBWCxHQUE4QkEsZ0JBQTlCLEMsQ0FFQTs7QUFDQXhDLE1BQU0sQ0FBQ3VrQixHQUFHLENBQUNqZCxPQUFKLENBQVlrSixVQUFiLEVBQXlCbzRCLGtCQUF6QixDQUFOO0FBQ0E1b0MsTUFBTSxDQUFDdWtCLEdBQUcsQ0FBQ2pkLE9BQUosQ0FBWTJJLFVBQWIsRUFBeUI4N0Isa0JBQXpCLENBQU4sQyxDQUVBOztBQUNBeG5CLEdBQUcsQ0FBQ2pwQixTQUFKLENBQWMrc0IsU0FBZCxHQUEwQnZrQixTQUFTLEdBQUc2MkIsS0FBSCxHQUFXdDZCLElBQTlDLEMsQ0FFQTs7QUFDQWtrQixHQUFHLENBQUNqcEIsU0FBSixDQUFjMmxCLE1BQWQsR0FBdUIsVUFDckI3UyxFQURxQixFQUVyQnNTLFNBRnFCLEVBR3JCO0FBQ0F0UyxJQUFFLEdBQUdBLEVBQUUsSUFBSXRLLFNBQU4sR0FBa0Jvd0IsS0FBSyxDQUFDOWxCLEVBQUQsQ0FBdkIsR0FBOEJ2VCxTQUFuQztBQUNBLFNBQU82dEIsY0FBYyxDQUFDLElBQUQsRUFBT3RhLEVBQVAsRUFBV3NTLFNBQVgsQ0FBckI7QUFDRCxDQU5ELEMsQ0FRQTs7QUFDQTs7O0FBQ0EsSUFBSTVjLFNBQUosRUFBZTtBQUNiK1EsWUFBVSxDQUFDLFlBQVk7QUFDckIsUUFBSWxULE1BQU0sQ0FBQ0ssUUFBWCxFQUFxQjtBQUNuQixVQUFJQSxRQUFKLEVBQWM7QUFDWkEsZ0JBQVEsQ0FBQ2twQixJQUFULENBQWMsTUFBZCxFQUFzQjNHLEdBQXRCO0FBQ0QsT0FGRCxNQUVPLElBQ0x4aUIsSUFESyxFQUdMO0FBQ0E4RSxlQUFPLENBQUNBLE9BQU8sQ0FBQzhNLElBQVIsR0FBZSxNQUFmLEdBQXdCLEtBQXpCLENBQVAsQ0FDRSwrRUFDQSx1Q0FGRjtBQUlEO0FBQ0Y7O0FBQ0QsUUFBSTVSLEtBQUEsSUFFRkosTUFBTSxDQUFDRyxhQUFQLEtBQXlCLEtBRnZCLElBR0YsT0FBTytFLE9BQVAsS0FBbUIsV0FIckIsRUFJRTtBQUNBQSxhQUFPLENBQUNBLE9BQU8sQ0FBQzhNLElBQVIsR0FBZSxNQUFmLEdBQXdCLEtBQXpCLENBQVAsQ0FDRSwrQ0FDQSx1RUFEQSxHQUVBLDBEQUhGO0FBS0Q7QUFDRixHQXpCUyxFQXlCUCxDQXpCTyxDQUFWO0FBMEJEO0FBRUQ7OztBQUVBLGlFQUFlNFEsR0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbHdRQTtBQUVBO0FBRUEsSUFBSUEsd0NBQUosQ0FBUTtBQUNObE8sUUFBTSxFQUFFOHlCLENBQUMsSUFBS0EsQ0FBQyxDQUFDNkMsNkNBQUQ7QUFEVCxDQUFSLEVBRUcvcUIsTUFGSCxDQUVVLFFBRlYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmtGO0FBQzNCO0FBQ0w7OztBQUdsRDtBQUNBLENBQXVGO0FBQ3ZGLGdCQUFnQixvR0FBVTtBQUMxQixFQUFFLHNFQUFNO0FBQ1IsRUFBRSwyRUFBTTtBQUNSLEVBQUUsb0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWUsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzhJLENBQUMsaUVBQWUscUtBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDakdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxoMT5IZWxsbyBXb3JsZCE8L2gxPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiLyohXG4gKiBWdWUuanMgdjIuNi4xMlxuICogKGMpIDIwMTQtMjAyMCBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiAgKi9cblxudmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbi8vIFRoZXNlIGhlbHBlcnMgcHJvZHVjZSBiZXR0ZXIgVk0gY29kZSBpbiBKUyBlbmdpbmVzIGR1ZSB0byB0aGVpclxuLy8gZXhwbGljaXRuZXNzIGFuZCBmdW5jdGlvbiBpbmxpbmluZy5cbmZ1bmN0aW9uIGlzVW5kZWYgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmICh2KSB7XG4gIHJldHVybiB2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc1RydWUgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHRydWVcbn1cblxuZnVuY3Rpb24gaXNGYWxzZSAodikge1xuICByZXR1cm4gdiA9PT0gZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIClcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG52YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiAoXG4gICAgaXNEZWYodmFsKSAmJlxuICAgIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWwuY2F0Y2ggPT09ICdmdW5jdGlvbidcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbFxuICAgID8gJydcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCAoaXNQbGFpbk9iamVjdCh2YWwpICYmIHZhbC50b1N0cmluZyA9PT0gX3RvU3RyaW5nKVxuICAgICAgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpXG4gICAgICA6IFN0cmluZyh2YWwpXG59XG5cbi8qKlxuICogQ29udmVydCBhbiBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuICovXG52YXIgaXNSZXNlcnZlZEF0dHJpYnV0ZSA9IG1ha2VNYXAoJ2tleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzJyk7XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9KVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gKi9cbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIGZ1bmN0aW9uIChfLCBjKSB7IHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7IH0pXG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxufSk7XG5cbi8qKlxuICogU2ltcGxlIGJpbmQgcG9seWZpbGwgZm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0LFxuICogZS5nLiwgUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHksIHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlXG4gKiBzaW5jZSBuYXRpdmUgYmluZCBpcyBub3cgcGVyZm9ybWFudCBlbm91Z2ggaW4gbW9zdCBicm93c2Vycy5cbiAqIEJ1dCByZW1vdmluZyBpdCB3b3VsZCBtZWFuIGJyZWFraW5nIGNvZGUgdGhhdCB3YXMgYWJsZSB0byBydW4gaW5cbiAqIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZm4uYmluZChjdHgpXG59XG5cbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgPyBuYXRpdmVCaW5kXG4gIDogcG9seWZpbGxCaW5kO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICovXG5mdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKS5cbiAqL1xuZnVuY3Rpb24gbm9vcCAoYSwgYiwgYykge31cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICovXG52YXIgbm8gPSBmdW5jdGlvbiAoYSwgYiwgYykgeyByZXR1cm4gZmFsc2U7IH07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHNhbWUgdmFsdWUuXG4gKi9cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gIGlmIChpc09iamVjdEEgJiYgaXNPYmplY3RCKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICB2YXIgaXNBcnJheUIgPSBBcnJheS5pc0FycmF5KGIpO1xuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGUsIGJbaV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKClcbiAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xuICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc09iamVjdEEgJiYgIWlzT2JqZWN0Qikge1xuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgYXJyYXkgKGlmIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGUgYXJyYXkgbXVzdFxuICogY29udGFpbiBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc2hhcGUpLCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAqL1xuZnVuY3Rpb24gbG9vc2VJbmRleE9mIChhcnIsIHZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkgeyByZXR1cm4gaSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFNTUl9BVFRSID0gJ2RhdGEtc2VydmVyLXJlbmRlcmVkJztcblxudmFyIEFTU0VUX1RZUEVTID0gW1xuICAnY29tcG9uZW50JyxcbiAgJ2RpcmVjdGl2ZScsXG4gICdmaWx0ZXInXG5dO1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAnYmVmb3JlQ3JlYXRlJyxcbiAgJ2NyZWF0ZWQnLFxuICAnYmVmb3JlTW91bnQnLFxuICAnbW91bnRlZCcsXG4gICdiZWZvcmVVcGRhdGUnLFxuICAndXBkYXRlZCcsXG4gICdiZWZvcmVEZXN0cm95JyxcbiAgJ2Rlc3Ryb3llZCcsXG4gICdhY3RpdmF0ZWQnLFxuICAnZGVhY3RpdmF0ZWQnLFxuICAnZXJyb3JDYXB0dXJlZCcsXG4gICdzZXJ2ZXJQcmVmZXRjaCdcbl07XG5cbi8qICAqL1xuXG5cblxudmFyIGNvbmZpZyA9ICh7XG4gIC8qKlxuICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqL1xuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xuICAgKi9cbiAgcHJvZHVjdGlvblRpcDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgZGV2dG9vbHNcbiAgICovXG4gIGRldnRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAqL1xuICBwZXJmb3JtYW5jZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAqL1xuICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIFdhcm4gaGFuZGxlciBmb3Igd2F0Y2hlciB3YXJuc1xuICAgKi9cbiAgd2FybkhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcblxuICAvKipcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgdXNlZCBhcyBhIGNvbXBvbmVudFxuICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZEF0dHI6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAqL1xuICBnZXRUYWdOYW1lc3BhY2U6IG5vb3AsXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByZWFsIHRhZyBuYW1lIGZvciB0aGUgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAqL1xuICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBtdXN0IGJlIGJvdW5kIHVzaW5nIHByb3BlcnR5LCBlLmcuIHZhbHVlXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIG11c3RVc2VQcm9wOiBubyxcblxuICAvKipcbiAgICogUGVyZm9ybSB1cGRhdGVzIGFzeW5jaHJvbm91c2x5LiBJbnRlbmRlZCB0byBiZSB1c2VkIGJ5IFZ1ZSBUZXN0IFV0aWxzXG4gICAqIFRoaXMgd2lsbCBzaWduaWZpY2FudGx5IHJlZHVjZSBwZXJmb3JtYW5jZSBpZiBzZXQgdG8gZmFsc2UuXG4gICAqL1xuICBhc3luYzogdHJ1ZSxcblxuICAvKipcbiAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICovXG4gIF9saWZlY3ljbGVIb29rczogTElGRUNZQ0xFX0hPT0tTXG59KTtcblxuLyogICovXG5cbi8qKlxuICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICogdXNpbmcgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1My9zZW1hbnRpY3Mtc2NyaXB0aW5nLmh0bWwjcG90ZW50aWFsY3VzdG9tZWxlbWVudG5hbWVcbiAqIHNraXBwaW5nIFxcdTEwMDAwLVxcdUVGRkZGIGR1ZSB0byBpdCBmcmVlemluZyB1cCBQaGFudG9tSlNcbiAqL1xudmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICovXG52YXIgYmFpbFJFID0gbmV3IFJlZ0V4cCgoXCJbXlwiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiLiRfXFxcXGRdXCIpKTtcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG52YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbnZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzRWRnZSA9IFVBICYmIFVBLmluZGV4T2YoJ2VkZ2UvJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xudmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbnZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xudmFyIGlzUGhhbnRvbUpTID0gVUEgJiYgL3BoYW50b21qcy8udGVzdChVQSk7XG52YXIgaXNGRiA9IFVBICYmIFVBLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLyk7XG5cbi8vIEZpcmVmb3ggaGFzIGEgXCJ3YXRjaFwiIGZ1bmN0aW9uIG9uIE9iamVjdC5wcm90b3R5cGUuLi5cbnZhciBuYXRpdmVXYXRjaCA9ICh7fSkud2F0Y2g7XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICByZXR1cm4gJzxSb290PidcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcbiAgICAgID8gdm0ub3B0aW9uc1xuICAgICAgOiB2bS5faXNWdWVcbiAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXG4gICAgICAgIDogdm07XG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XG4gICAgaWYgKCFuYW1lICYmIGZpbGUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGZpbGUubWF0Y2goLyhbXi9cXFxcXSspXFwudnVlJC8pO1xuICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAobmFtZSA/IChcIjxcIiArIChjbGFzc2lmeShuYW1lKSkgKyBcIj5cIikgOiBcIjxBbm9ueW1vdXM+XCIpICtcbiAgICAgIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IChcIiBhdCBcIiArIGZpbGUpIDogJycpXG4gICAgKVxuICB9O1xuXG4gIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxuICAgICAgaWYgKG4gPiAxKSB7IHN0ciArPSBzdHI7IH1cbiAgICAgIG4gPj49IDE7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gKHZtKSB7XG4gICAgaWYgKHZtLl9pc1Z1ZSAmJiB2bS4kcGFyZW50KSB7XG4gICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICB3aGlsZSAodm0pIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICB9XG59O1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XG4gIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAvLyBzdWJzIGFyZW4ndCBzb3J0ZWQgaW4gc2NoZWR1bGVyIGlmIG5vdCBydW5uaW5nIGFzeW5jXG4gICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgIC8vIG9yZGVyXG4gICAgc3Vicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbDtcbnZhciB0YXJnZXRTdGFjayA9IFtdO1xuXG5mdW5jdGlvbiBwdXNoVGFyZ2V0ICh0YXJnZXQpIHtcbiAgdGFyZ2V0U3RhY2sucHVzaCh0YXJnZXQpO1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICB0YXJnZXRTdGFjay5wb3AoKTtcbiAgRGVwLnRhcmdldCA9IHRhcmdldFN0YWNrW3RhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnMsXG4gIGFzeW5jRmFjdG9yeVxuKSB7XG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMudGV4dCA9IHRleHQ7XG4gIHRoaXMuZWxtID0gZWxtO1xuICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICggdGV4dCA9PT0gdm9pZCAwICkgdGV4dCA9ICcnO1xuXG4gIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gIG5vZGUudGV4dCA9IHRleHQ7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIC8vICM3OTc1XG4gICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgLy8gYSBjaGlsZC5cbiAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9ucyxcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgKTtcbiAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICByZXR1cm4gY2xvbmVkXG59XG5cbi8qXG4gKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGhcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICovXG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSk7XG59KTtcblxuLyogICovXG5cbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuXG4vKipcbiAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxuICovXG52YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyAodmFsdWUpIHtcbiAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgdGhpcy52bUNvdW50ID0gMDtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChoYXNQcm90bykge1xuICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiBvYnNlcnZlQXJyYXkgKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRlcGVuZEFycmF5KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCAobmV3VmFsICE9PSBuZXdWYWwgJiYgdmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjdXN0b21TZXR0ZXIpIHtcbiAgICAgICAgY3VzdG9tU2V0dGVyKCk7XG4gICAgICB9XG4gICAgICAvLyAjNzk4MTogZm9yIGFjY2Vzc29yIHByb3BlcnRpZXMgd2l0aG91dCBzZXR0ZXJcbiAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikgeyByZXR1cm4gfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZShuZXdWYWwpO1xuICAgICAgZGVwLm5vdGlmeSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICovXG5mdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IHNldCByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0Lmxlbmd0aCA9IE1hdGgubWF4KHRhcmdldC5sZW5ndGgsIGtleSk7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEsIHZhbCk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmIChrZXkgaW4gdGFyZ2V0ICYmICEoa2V5IGluIE9iamVjdC5wcm90b3R5cGUpKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGFkZGluZyByZWFjdGl2ZSBwcm9wZXJ0aWVzIHRvIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJ2F0IHJ1bnRpbWUgLSBkZWNsYXJlIGl0IHVwZnJvbnQgaW4gdGhlIGRhdGEgb3B0aW9uLidcbiAgICApO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoIW9iKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGRlZmluZVJlYWN0aXZlJCQxKG9iLnZhbHVlLCBrZXksIHZhbCk7XG4gIG9iLmRlcC5ub3RpZnkoKTtcbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKi9cbmZ1bmN0aW9uIGRlbCAodGFyZ2V0LCBrZXkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IGRlbGV0ZSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEpO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGRlbGV0aW5nIHByb3BlcnRpZXMgb24gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnLSBqdXN0IHNldCBpdCB0byBudWxsLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICghaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgaWYgKCFvYikge1xuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGRlcGVuZGVuY2llcyBvbiBhcnJheSBlbGVtZW50cyB3aGVuIHRoZSBhcnJheSBpcyB0b3VjaGVkLCBzaW5jZVxuICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXG4gKi9cbmZ1bmN0aW9uIGRlcGVuZEFycmF5ICh2YWx1ZSkge1xuICBmb3IgKHZhciBlID0gKHZvaWQgMCksIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZSA9IHZhbHVlW2ldO1xuICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICBkZXBlbmRBcnJheShlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICovXG52YXIgc3RyYXRzID0gY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcblxuLyoqXG4gKiBPcHRpb25zIHdpdGggcmVzdHJpY3Rpb25zXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHN0cmF0cy5lbCA9IHN0cmF0cy5wcm9wc0RhdGEgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgdm0sIGtleSkge1xuICAgIGlmICghdm0pIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwib3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBpbnN0YW5jZSBcIiArXG4gICAgICAgICdjcmVhdGlvbiB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZClcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xuICBpZiAoIWZyb20pIHsgcmV0dXJuIHRvIH1cbiAgdmFyIGtleSwgdG9WYWwsIGZyb21WYWw7XG5cbiAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICA/IFJlZmxlY3Qub3duS2V5cyhmcm9tKVxuICAgIDogT2JqZWN0LmtleXMoZnJvbSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICAvLyBpbiBjYXNlIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBvYnNlcnZlZC4uLlxuICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICB0b1ZhbCA9IHRvW2tleV07XG4gICAgZnJvbVZhbCA9IGZyb21ba2V5XTtcbiAgICBpZiAoIWhhc093bih0bywga2V5KSkge1xuICAgICAgc2V0KHRvLCBrZXksIGZyb21WYWwpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0b1ZhbCAhPT0gZnJvbVZhbCAmJlxuICAgICAgaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QoZnJvbVZhbClcbiAgICApIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIERhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhT3JGbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgfVxuICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcbiAgICAvLyB3ZSBuZWVkIHRvIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcbiAgICAvLyBpdCBoYXMgdG8gYmUgYSBmdW5jdGlvbiB0byBwYXNzIHByZXZpb3VzIG1lcmdlcy5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuICgpIHtcbiAgICAgIHJldHVybiBtZXJnZURhdGEoXG4gICAgICAgIHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkVmFsLmNhbGwodGhpcywgdGhpcykgOiBjaGlsZFZhbCxcbiAgICAgICAgdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcmVudFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogcGFyZW50VmFsXG4gICAgICApXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XG4gICAgICAvLyBpbnN0YW5jZSBtZXJnZVxuICAgICAgdmFyIGluc3RhbmNlRGF0YSA9IHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IGNoaWxkVmFsO1xuICAgICAgdmFyIGRlZmF1bHREYXRhID0gdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHBhcmVudFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBwYXJlbnRWYWw7XG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zdHJhdHMuZGF0YSA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgaWYgKGNoaWxkVmFsICYmIHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnVGhlIFwiZGF0YVwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICtcbiAgICAgICAgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArXG4gICAgICAgICdkZWZpbml0aW9ucy4nLFxuICAgICAgICB2bVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pXG59O1xuXG4vKipcbiAqIEhvb2tzIGFuZCBwcm9wcyBhcmUgbWVyZ2VkIGFzIGFycmF5cy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VIb29rIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbFxuKSB7XG4gIHZhciByZXMgPSBjaGlsZFZhbFxuICAgID8gcGFyZW50VmFsXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgOiBwYXJlbnRWYWw7XG4gIHJldHVybiByZXNcbiAgICA/IGRlZHVwZUhvb2tzKHJlcylcbiAgICA6IHJlc1xufVxuXG5mdW5jdGlvbiBkZWR1cGVIb29rcyAoaG9va3MpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5MSUZFQ1lDTEVfSE9PS1MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICBzdHJhdHNbaG9va10gPSBtZXJnZUhvb2s7XG59KTtcblxuLyoqXG4gKiBBc3NldHNcbiAqXG4gKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VBc3NldHMgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICBpZiAoY2hpbGRWYWwpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICAgIHJldHVybiBleHRlbmQocmVzLCBjaGlsZFZhbClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcbn0pO1xuXG4vKipcbiAqIFdhdGNoZXJzLlxuICpcbiAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5zdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICAvLyB3b3JrIGFyb3VuZCBGaXJlZm94J3MgT2JqZWN0LnByb3RvdHlwZS53YXRjaC4uLlxuICBpZiAocGFyZW50VmFsID09PSBuYXRpdmVXYXRjaCkgeyBwYXJlbnRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgaWYgKGNoaWxkVmFsID09PSBuYXRpdmVXYXRjaCkgeyBjaGlsZFZhbCA9IHVuZGVmaW5lZDsgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjaGlsZFZhbCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCkgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSB7fTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZm9yICh2YXIga2V5JDEgaW4gY2hpbGRWYWwpIHtcbiAgICB2YXIgcGFyZW50ID0gcmV0W2tleSQxXTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXkkMV07XG4gICAgaWYgKHBhcmVudCAmJiAhQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBbcGFyZW50XTtcbiAgICB9XG4gICAgcmV0W2tleSQxXSA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQuY29uY2F0KGNoaWxkKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkKSA/IGNoaWxkIDogW2NoaWxkXTtcbiAgfVxuICByZXR1cm4gcmV0XG59O1xuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cbnN0cmF0cy5wcm9wcyA9XG5zdHJhdHMubWV0aG9kcyA9XG5zdHJhdHMuaW5qZWN0ID1cbnN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIGlmIChjaGlsZFZhbCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGlmIChjaGlsZFZhbCkgeyBleHRlbmQocmV0LCBjaGlsZFZhbCk7IH1cbiAgcmV0dXJuIHJldFxufTtcbnN0cmF0cy5wcm92aWRlID0gbWVyZ2VEYXRhT3JGbjtcblxuLyoqXG4gKiBEZWZhdWx0IHN0cmF0ZWd5LlxuICovXG52YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsID09PSB1bmRlZmluZWRcbiAgICA/IHBhcmVudFZhbFxuICAgIDogY2hpbGRWYWxcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgY29tcG9uZW50IG5hbWVzXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50cyAob3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnROYW1lIChuYW1lKSB7XG4gIGlmICghbmV3IFJlZ0V4cCgoXCJeW2EtekEtWl1bXFxcXC1cXFxcLjAtOV9cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIl0qJFwiKSkudGVzdChuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBjb21wb25lbnQgbmFtZTogXCInICsgbmFtZSArICdcIi4gQ29tcG9uZW50IG5hbWVzICcgK1xuICAgICAgJ3Nob3VsZCBjb25mb3JtIHRvIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUgaW4gaHRtbDUgc3BlY2lmaWNhdGlvbi4nXG4gICAgKTtcbiAgfVxuICBpZiAoaXNCdWlsdEluVGFnKG5hbWUpIHx8IGNvbmZpZy5pc1Jlc2VydmVkVGFnKG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgJ2lkOiAnICsgbmFtZVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzIChvcHRpb25zLCB2bSkge1xuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoIXByb3BzKSB7IHJldHVybiB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGksIHZhbCwgbmFtZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogeyB0eXBlOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwicHJvcHNcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUocHJvcHMpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIG9wdGlvbnMucHJvcHMgPSByZXM7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFsbCBpbmplY3Rpb25zIGludG8gT2JqZWN0LWJhc2VkIGZvcm1hdFxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJbmplY3QgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBpbmplY3QgPSBvcHRpb25zLmluamVjdDtcbiAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgdmFyIG5vcm1hbGl6ZWQgPSBvcHRpb25zLmluamVjdCA9IHt9O1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3QpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vcm1hbGl6ZWRbaW5qZWN0W2ldXSA9IHsgZnJvbTogaW5qZWN0W2ldIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGtleSBpbiBpbmplY3QpIHtcbiAgICAgIHZhciB2YWwgPSBpbmplY3Rba2V5XTtcbiAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IGV4dGVuZCh7IGZyb206IGtleSB9LCB2YWwpXG4gICAgICAgIDogeyBmcm9tOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiaW5qZWN0XFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKGluamVjdCkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzIChvcHRpb25zKSB7XG4gIHZhciBkaXJzID0gb3B0aW9ucy5kaXJlY3RpdmVzO1xuICBpZiAoZGlycykge1xuICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICB2YXIgZGVmJCQxID0gZGlyc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGlyc1trZXldID0geyBiaW5kOiBkZWYkJDEsIHVwZGF0ZTogZGVmJCQxIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE9iamVjdFR5cGUgKG5hbWUsIHZhbHVlLCB2bSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJcIiArIG5hbWUgKyBcIlxcXCI6IGV4cGVjdGVkIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZSh2YWx1ZSkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICovXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMgKFxuICBwYXJlbnQsXG4gIGNoaWxkLFxuICB2bVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2tDb21wb25lbnRzKGNoaWxkKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjaGlsZCA9IGNoaWxkLm9wdGlvbnM7XG4gIH1cblxuICBub3JtYWxpemVQcm9wcyhjaGlsZCwgdm0pO1xuICBub3JtYWxpemVJbmplY3QoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplRGlyZWN0aXZlcyhjaGlsZCk7XG5cbiAgLy8gQXBwbHkgZXh0ZW5kcyBhbmQgbWl4aW5zIG9uIHRoZSBjaGlsZCBvcHRpb25zLFxuICAvLyBidXQgb25seSBpZiBpdCBpcyBhIHJhdyBvcHRpb25zIG9iamVjdCB0aGF0IGlzbid0XG4gIC8vIHRoZSByZXN1bHQgb2YgYW5vdGhlciBtZXJnZU9wdGlvbnMgY2FsbC5cbiAgLy8gT25seSBtZXJnZWQgb3B0aW9ucyBoYXMgdGhlIF9iYXNlIHByb3BlcnR5LlxuICBpZiAoIWNoaWxkLl9iYXNlKSB7XG4gICAgaWYgKGNoaWxkLmV4dGVuZHMpIHtcbiAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLmV4dGVuZHMsIHZtKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLm1peGlucykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLm1peGluc1tpXSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge307XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIHBhcmVudCkge1xuICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgfVxuICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgIGlmICghaGFzT3duKHBhcmVudCwga2V5KSkge1xuICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcbiAgICB2YXIgc3RyYXQgPSBzdHJhdHNba2V5XSB8fCBkZWZhdWx0U3RyYXQ7XG4gICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3NldC5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICovXG5mdW5jdGlvbiByZXNvbHZlQXNzZXQgKFxuICBvcHRpb25zLFxuICB0eXBlLFxuICBpZCxcbiAgd2Fybk1pc3Npbmdcbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXTtcbiAgLy8gY2hlY2sgbG9jYWwgcmVnaXN0cmF0aW9uIHZhcmlhdGlvbnMgZmlyc3RcbiAgaWYgKGhhc093bihhc3NldHMsIGlkKSkgeyByZXR1cm4gYXNzZXRzW2lkXSB9XG4gIHZhciBjYW1lbGl6ZWRJZCA9IGNhbWVsaXplKGlkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIGNhbWVsaXplZElkKSkgeyByZXR1cm4gYXNzZXRzW2NhbWVsaXplZElkXSB9XG4gIHZhciBQYXNjYWxDYXNlSWQgPSBjYXBpdGFsaXplKGNhbWVsaXplZElkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIFBhc2NhbENhc2VJZCkpIHsgcmV0dXJuIGFzc2V0c1tQYXNjYWxDYXNlSWRdIH1cbiAgLy8gZmFsbGJhY2sgdG8gcHJvdG90eXBlIGNoYWluXG4gIHZhciByZXMgPSBhc3NldHNbaWRdIHx8IGFzc2V0c1tjYW1lbGl6ZWRJZF0gfHwgYXNzZXRzW1Bhc2NhbENhc2VJZF07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5NaXNzaW5nICYmICFyZXMpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlLnNsaWNlKDAsIC0xKSArICc6ICcgKyBpZCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3AgKFxuICBrZXksXG4gIHByb3BPcHRpb25zLFxuICBwcm9wc0RhdGEsXG4gIHZtXG4pIHtcbiAgdmFyIHByb3AgPSBwcm9wT3B0aW9uc1trZXldO1xuICB2YXIgYWJzZW50ID0gIWhhc093bihwcm9wc0RhdGEsIGtleSk7XG4gIHZhciB2YWx1ZSA9IHByb3BzRGF0YVtrZXldO1xuICAvLyBib29sZWFuIGNhc3RpbmdcbiAgdmFyIGJvb2xlYW5JbmRleCA9IGdldFR5cGVJbmRleChCb29sZWFuLCBwcm9wLnR5cGUpO1xuICBpZiAoYm9vbGVhbkluZGV4ID4gLTEpIHtcbiAgICBpZiAoYWJzZW50ICYmICFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gaHlwaGVuYXRlKGtleSkpIHtcbiAgICAgIC8vIG9ubHkgY2FzdCBlbXB0eSBzdHJpbmcgLyBzYW1lIG5hbWUgdG8gYm9vbGVhbiBpZlxuICAgICAgLy8gYm9vbGVhbiBoYXMgaGlnaGVyIHByaW9yaXR5XG4gICAgICB2YXIgc3RyaW5nSW5kZXggPSBnZXRUeXBlSW5kZXgoU3RyaW5nLCBwcm9wLnR5cGUpO1xuICAgICAgaWYgKHN0cmluZ0luZGV4IDwgMCB8fCBib29sZWFuSW5kZXggPCBzdHJpbmdJbmRleCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNoZWNrIGRlZmF1bHQgdmFsdWVcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZSA9IGdldFByb3BEZWZhdWx0VmFsdWUodm0sIHByb3AsIGtleSk7XG4gICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgdmFsdWUgaXMgYSBmcmVzaCBjb3B5LFxuICAgIC8vIG1ha2Ugc3VyZSB0byBvYnNlcnZlIGl0LlxuICAgIHZhciBwcmV2U2hvdWxkT2JzZXJ2ZSA9IHNob3VsZE9ic2VydmU7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIG9ic2VydmUodmFsdWUpO1xuICAgIHRvZ2dsZU9ic2VydmluZyhwcmV2U2hvdWxkT2JzZXJ2ZSk7XG4gIH1cbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAvLyBza2lwIHZhbGlkYXRpb24gZm9yIHdlZXggcmVjeWNsZS1saXN0IGNoaWxkIGNvbXBvbmVudCBwcm9wc1xuICAgICEoZmFsc2UpXG4gICkge1xuICAgIGFzc2VydFByb3AocHJvcCwga2V5LCB2YWx1ZSwgdm0sIGFic2VudCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSAodm0sIHByb3AsIGtleSkge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIGlmICghaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgdmFyIGRlZiA9IHByb3AuZGVmYXVsdDtcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc09iamVjdChkZWYpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGRlZmF1bHQgdmFsdWUgZm9yIHByb3AgXCInICsga2V5ICsgJ1wiOiAnICtcbiAgICAgICdQcm9wcyB3aXRoIHR5cGUgT2JqZWN0L0FycmF5IG11c3QgdXNlIGEgZmFjdG9yeSBmdW5jdGlvbiAnICtcbiAgICAgICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxuICAvLyByZXR1cm4gcHJldmlvdXMgZGVmYXVsdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3YXRjaGVyIHRyaWdnZXJcbiAgaWYgKHZtICYmIHZtLiRvcHRpb25zLnByb3BzRGF0YSAmJlxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YVtrZXldID09PSB1bmRlZmluZWQgJiZcbiAgICB2bS5fcHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHJldHVybiB2bS5fcHJvcHNba2V5XVxuICB9XG4gIC8vIGNhbGwgZmFjdG9yeSBmdW5jdGlvbiBmb3Igbm9uLUZ1bmN0aW9uIHR5cGVzXG4gIC8vIGEgdmFsdWUgaXMgRnVuY3Rpb24gaWYgaXRzIHByb3RvdHlwZSBpcyBmdW5jdGlvbiBldmVuIGFjcm9zcyBkaWZmZXJlbnQgZXhlY3V0aW9uIGNvbnRleHRcbiAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgZ2V0VHlwZShwcm9wLnR5cGUpICE9PSAnRnVuY3Rpb24nXG4gICAgPyBkZWYuY2FsbCh2bSlcbiAgICA6IGRlZlxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGEgcHJvcCBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJvcCAoXG4gIHByb3AsXG4gIG5hbWUsXG4gIHZhbHVlLFxuICB2bSxcbiAgYWJzZW50XG4pIHtcbiAgaWYgKHByb3AucmVxdWlyZWQgJiYgYWJzZW50KSB7XG4gICAgd2FybihcbiAgICAgICdNaXNzaW5nIHJlcXVpcmVkIHByb3A6IFwiJyArIG5hbWUgKyAnXCInLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsICYmICFwcm9wLnJlcXVpcmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHR5cGUgPSBwcm9wLnR5cGU7XG4gIHZhciB2YWxpZCA9ICF0eXBlIHx8IHR5cGUgPT09IHRydWU7XG4gIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gIGlmICh0eXBlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlID0gW3R5cGVdO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoICYmICF2YWxpZDsgaSsrKSB7XG4gICAgICB2YXIgYXNzZXJ0ZWRUeXBlID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZVtpXSk7XG4gICAgICBleHBlY3RlZFR5cGVzLnB1c2goYXNzZXJ0ZWRUeXBlLmV4cGVjdGVkVHlwZSB8fCAnJyk7XG4gICAgICB2YWxpZCA9IGFzc2VydGVkVHlwZS52YWxpZDtcbiAgICB9XG4gIH1cblxuICBpZiAoIXZhbGlkKSB7XG4gICAgd2FybihcbiAgICAgIGdldEludmFsaWRUeXBlTWVzc2FnZShuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcyksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xuICBpZiAodmFsaWRhdG9yKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIicgKyBuYW1lICsgJ1wiLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc2ltcGxlQ2hlY2tSRSA9IC9eKFN0cmluZ3xOdW1iZXJ8Qm9vbGVhbnxGdW5jdGlvbnxTeW1ib2wpJC87XG5cbmZ1bmN0aW9uIGFzc2VydFR5cGUgKHZhbHVlLCB0eXBlKSB7XG4gIHZhciB2YWxpZDtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGdldFR5cGUodHlwZSk7XG4gIGlmIChzaW1wbGVDaGVja1JFLnRlc3QoZXhwZWN0ZWRUeXBlKSkge1xuICAgIHZhciB0ID0gdHlwZW9mIHZhbHVlO1xuICAgIHZhbGlkID0gdCA9PT0gZXhwZWN0ZWRUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gZm9yIHByaW1pdGl2ZSB3cmFwcGVyIG9iamVjdHNcbiAgICBpZiAoIXZhbGlkICYmIHQgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnT2JqZWN0Jykge1xuICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnQXJyYXknKSB7XG4gICAgdmFsaWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkOiB2YWxpZCxcbiAgICBleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZVxuICB9XG59XG5cbi8qKlxuICogVXNlIGZ1bmN0aW9uIHN0cmluZyBuYW1lIHRvIGNoZWNrIGJ1aWx0LWluIHR5cGVzLFxuICogYmVjYXVzZSBhIHNpbXBsZSBlcXVhbGl0eSBjaGVjayB3aWxsIGZhaWwgd2hlbiBydW5uaW5nXG4gKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUgKGZuKSB7XG4gIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJydcbn1cblxuZnVuY3Rpb24gaXNTYW1lVHlwZSAoYSwgYikge1xuICByZXR1cm4gZ2V0VHlwZShhKSA9PT0gZ2V0VHlwZShiKVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlSW5kZXggKHR5cGUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVHlwZXMpKSB7XG4gICAgcmV0dXJuIGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlcywgdHlwZSkgPyAwIDogLTFcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRUeXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXNbaV0sIHR5cGUpKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVNZXNzYWdlIChuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcykge1xuICB2YXIgbWVzc2FnZSA9IFwiSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiICtcbiAgICBcIiBFeHBlY3RlZCBcIiArIChleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpKTtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZXNbMF07XG4gIHZhciByZWNlaXZlZFR5cGUgPSB0b1Jhd1R5cGUodmFsdWUpO1xuICB2YXIgZXhwZWN0ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciByZWNlaXZlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgcmVjZWl2ZWRUeXBlKTtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IGV4cGVjdGVkIHZhbHVlXG4gIGlmIChleHBlY3RlZFR5cGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgaXNFeHBsaWNhYmxlKGV4cGVjdGVkVHlwZSkgJiZcbiAgICAgICFpc0Jvb2xlYW4oZXhwZWN0ZWRUeXBlLCByZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIiB3aXRoIHZhbHVlIFwiICsgZXhwZWN0ZWRWYWx1ZTtcbiAgfVxuICBtZXNzYWdlICs9IFwiLCBnb3QgXCIgKyByZWNlaXZlZFR5cGUgKyBcIiBcIjtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IHJlY2VpdmVkIHZhbHVlXG4gIGlmIChpc0V4cGxpY2FibGUocmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCJ3aXRoIHZhbHVlIFwiICsgcmVjZWl2ZWRWYWx1ZSArIFwiLlwiO1xuICB9XG4gIHJldHVybiBtZXNzYWdlXG59XG5cbmZ1bmN0aW9uIHN0eWxlVmFsdWUgKHZhbHVlLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnU3RyaW5nJykge1xuICAgIHJldHVybiAoXCJcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdOdW1iZXInKSB7XG4gICAgcmV0dXJuIChcIlwiICsgKE51bWJlcih2YWx1ZSkpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXCJcIiArIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXhwbGljYWJsZSAodmFsdWUpIHtcbiAgdmFyIGV4cGxpY2l0VHlwZXMgPSBbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddO1xuICByZXR1cm4gZXhwbGljaXRUeXBlcy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBlbGVtOyB9KVxufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4gKCkge1xuICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gIHJldHVybiBhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jvb2xlYW4nOyB9KVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgLy8gRGVhY3RpdmF0ZSBkZXBzIHRyYWNraW5nIHdoaWxlIHByb2Nlc3NpbmcgZXJyb3IgaGFuZGxlciB0byBhdm9pZCBwb3NzaWJsZSBpbmZpbml0ZSByZW5kZXJpbmcuXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZXgvaXNzdWVzLzE1MDVcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIGlmICh2bSkge1xuICAgICAgdmFyIGN1ciA9IHZtO1xuICAgICAgd2hpbGUgKChjdXIgPSBjdXIuJHBhcmVudCkpIHtcbiAgICAgICAgdmFyIGhvb2tzID0gY3VyLiRvcHRpb25zLmVycm9yQ2FwdHVyZWQ7XG4gICAgICAgIGlmIChob29rcykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gaG9va3NbaV0uY2FsbChjdXIsIGVyciwgdm0sIGluZm8pID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGNhcHR1cmUpIHsgcmV0dXJuIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsSGFuZGxlRXJyb3IoZSwgY3VyLCAnZXJyb3JDYXB0dXJlZCBob29rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGdsb2JhbEhhbmRsZUVycm9yKGVyciwgdm0sIGluZm8pO1xuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVdpdGhFcnJvckhhbmRsaW5nIChcbiAgaGFuZGxlcixcbiAgY29udGV4dCxcbiAgYXJncyxcbiAgdm0sXG4gIGluZm9cbikge1xuICB2YXIgcmVzO1xuICB0cnkge1xuICAgIHJlcyA9IGFyZ3MgPyBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3MpIDogaGFuZGxlci5jYWxsKGNvbnRleHQpO1xuICAgIGlmIChyZXMgJiYgIXJlcy5faXNWdWUgJiYgaXNQcm9taXNlKHJlcykgJiYgIXJlcy5faGFuZGxlZCkge1xuICAgICAgcmVzLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyArIFwiIChQcm9taXNlL2FzeW5jKVwiKTsgfSk7XG4gICAgICAvLyBpc3N1ZSAjOTUxMVxuICAgICAgLy8gYXZvaWQgY2F0Y2ggdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lcyB3aGVuIG5lc3RlZCBjYWxsc1xuICAgICAgcmVzLl9oYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnbG9iYWxIYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29uZmlnLmVycm9ySGFuZGxlci5jYWxsKG51bGwsIGVyciwgdm0sIGluZm8pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWYgdGhlIHVzZXIgaW50ZW50aW9uYWxseSB0aHJvd3MgdGhlIG9yaWdpbmFsIGVycm9yIGluIHRoZSBoYW5kbGVyLFxuICAgICAgLy8gZG8gbm90IGxvZyBpdCB0d2ljZVxuICAgICAgaWYgKGUgIT09IGVycikge1xuICAgICAgICBsb2dFcnJvcihlLCBudWxsLCAnY29uZmlnLmVycm9ySGFuZGxlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2dFcnJvcihlcnIsIHZtLCBpbmZvKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKChcIkVycm9yIGluIFwiICsgaW5mbyArIFwiOiBcXFwiXCIgKyAoZXJyLnRvU3RyaW5nKCkpICsgXCJcXFwiXCIpLCB2bSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKChpbkJyb3dzZXIgfHwgaW5XZWV4KSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBpc1VzaW5nTWljcm9UYXNrID0gZmFsc2U7XG5cbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBwZW5kaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzICgpIHtcbiAgcGVuZGluZyA9IGZhbHNlO1xuICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICBjYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb3BpZXNbaV0oKTtcbiAgfVxufVxuXG4vLyBIZXJlIHdlIGhhdmUgYXN5bmMgZGVmZXJyaW5nIHdyYXBwZXJzIHVzaW5nIG1pY3JvdGFza3MuXG4vLyBJbiAyLjUgd2UgdXNlZCAobWFjcm8pIHRhc2tzIChpbiBjb21iaW5hdGlvbiB3aXRoIG1pY3JvdGFza3MpLlxuLy8gSG93ZXZlciwgaXQgaGFzIHN1YnRsZSBwcm9ibGVtcyB3aGVuIHN0YXRlIGlzIGNoYW5nZWQgcmlnaHQgYmVmb3JlIHJlcGFpbnRcbi8vIChlLmcuICM2ODEzLCBvdXQtaW4gdHJhbnNpdGlvbnMpLlxuLy8gQWxzbywgdXNpbmcgKG1hY3JvKSB0YXNrcyBpbiBldmVudCBoYW5kbGVyIHdvdWxkIGNhdXNlIHNvbWUgd2VpcmQgYmVoYXZpb3JzXG4vLyB0aGF0IGNhbm5vdCBiZSBjaXJjdW12ZW50ZWQgKGUuZy4gIzcxMDksICM3MTUzLCAjNzU0NiwgIzc4MzQsICM4MTA5KS5cbi8vIFNvIHdlIG5vdyB1c2UgbWljcm90YXNrcyBldmVyeXdoZXJlLCBhZ2Fpbi5cbi8vIEEgbWFqb3IgZHJhd2JhY2sgb2YgdGhpcyB0cmFkZW9mZiBpcyB0aGF0IHRoZXJlIGFyZSBzb21lIHNjZW5hcmlvc1xuLy8gd2hlcmUgbWljcm90YXNrcyBoYXZlIHRvbyBoaWdoIGEgcHJpb3JpdHkgYW5kIGZpcmUgaW4gYmV0d2VlbiBzdXBwb3NlZGx5XG4vLyBzZXF1ZW50aWFsIGV2ZW50cyAoZS5nLiAjNDUyMSwgIzY2OTAsIHdoaWNoIGhhdmUgd29ya2Fyb3VuZHMpXG4vLyBvciBldmVuIGJldHdlZW4gYnViYmxpbmcgb2YgdGhlIHNhbWUgZXZlbnQgKCM2NTY2KS5cbnZhciB0aW1lckZ1bmM7XG5cbi8vIFRoZSBuZXh0VGljayBiZWhhdmlvciBsZXZlcmFnZXMgdGhlIG1pY3JvdGFzayBxdWV1ZSwgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkXG4vLyB2aWEgZWl0aGVyIG5hdGl2ZSBQcm9taXNlLnRoZW4gb3IgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11dGF0aW9uT2JzZXJ2ZXIgaGFzIHdpZGVyIHN1cHBvcnQsIGhvd2V2ZXIgaXQgaXMgc2VyaW91c2x5IGJ1Z2dlZCBpblxuLy8gVUlXZWJWaWV3IGluIGlPUyA+PSA5LjMuMyB3aGVuIHRyaWdnZXJlZCBpbiB0b3VjaCBldmVudCBoYW5kbGVycy4gSXRcbi8vIGNvbXBsZXRlbHkgc3RvcHMgd29ya2luZyBhZnRlciB0cmlnZ2VyaW5nIGEgZmV3IHRpbWVzLi4uIHNvLCBpZiBuYXRpdmVcbi8vIFByb21pc2UgaXMgYXZhaWxhYmxlLCB3ZSB3aWxsIHVzZSBpdDpcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0LCAkZmxvdy1kaXNhYmxlLWxpbmUgKi9cbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJvbWlzZSkpIHtcbiAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHAudGhlbihmbHVzaENhbGxiYWNrcyk7XG4gICAgLy8gSW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XG4gICAgLy8gaXQgY2FuIGdldCBzdHVjayBpbiBhIHdlaXJkIHN0YXRlIHdoZXJlIGNhbGxiYWNrcyBhcmUgcHVzaGVkIGludG8gdGhlXG4gICAgLy8gbWljcm90YXNrIHF1ZXVlIGJ1dCB0aGUgcXVldWUgaXNuJ3QgYmVpbmcgZmx1c2hlZCwgdW50aWwgdGhlIGJyb3dzZXJcbiAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cbiAgICAvLyBcImZvcmNlXCIgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBmbHVzaGVkIGJ5IGFkZGluZyBhbiBlbXB0eSB0aW1lci5cbiAgICBpZiAoaXNJT1MpIHsgc2V0VGltZW91dChub29wKTsgfVxuICB9O1xuICBpc1VzaW5nTWljcm9UYXNrID0gdHJ1ZTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG4gIGlzVXNpbmdNaWNyb1Rhc2sgPSB0cnVlO1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgLy8gVGVjaG5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gIC8vIGJ1dCBpdCBpcyBzdGlsbCBhIGJldHRlciBjaG9pY2UgdGhhbiBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgdmFyIF9yZXNvbHZlO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKGN0eCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIGN0eCwgJ25leHRUaWNrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUoY3R4KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMoKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxudmFyIGluaXRQcm94eTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcChcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcbiAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCwnICtcbiAgICAncmVxdWlyZScgLy8gZm9yIFdlYnBhY2svQnJvd3NlcmlmeVxuICApO1xuXG4gIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICtcbiAgICAgICdlaXRoZXIgaW4gdGhlIGRhdGEgb3B0aW9uLCBvciBmb3IgY2xhc3MtYmFzZWQgY29tcG9uZW50cywgYnkgJyArXG4gICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHdhcm5SZXNlcnZlZFByZWZpeCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBtdXN0IGJlIGFjY2Vzc2VkIHdpdGggXFxcIiRkYXRhLlwiICsga2V5ICsgXCJcXFwiIGJlY2F1c2UgXCIgK1xuICAgICAgJ3Byb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBcIiRcIiBvciBcIl9cIiBhcmUgbm90IHByb3hpZWQgaW4gdGhlIFZ1ZSBpbnN0YW5jZSB0byAnICtcbiAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNkYXRhJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGhhc1Byb3h5ID1cbiAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb3h5KTtcblxuICBpZiAoaGFzUHJveHkpIHtcbiAgICB2YXIgaXNCdWlsdEluTW9kaWZpZXIgPSBtYWtlTWFwKCdzdG9wLHByZXZlbnQsc2VsZixjdHJsLHNoaWZ0LGFsdCxtZXRhLGV4YWN0Jyk7XG4gICAgY29uZmlnLmtleUNvZGVzID0gbmV3IFByb3h5KGNvbmZpZy5rZXlDb2Rlcywge1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgIHdhcm4oKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYXNIYW5kbGVyID0ge1xuICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xuICAgICAgdmFyIGhhcyA9IGtleSBpbiB0YXJnZXQ7XG4gICAgICB2YXIgaXNBbGxvd2VkID0gYWxsb3dlZEdsb2JhbHMoa2V5KSB8fFxuICAgICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5LmNoYXJBdCgwKSA9PT0gJ18nICYmICEoa2V5IGluIHRhcmdldC4kZGF0YSkpO1xuICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZCkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgfVxuICB9O1xuXG4gIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSAodm0pIHtcbiAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm94eSBoYW5kbGVyIHRvIHVzZVxuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICAgIHZhciBoYW5kbGVycyA9IG9wdGlvbnMucmVuZGVyICYmIG9wdGlvbnMucmVuZGVyLl93aXRoU3RyaXBwZWRcbiAgICAgICAgPyBnZXRIYW5kbGVyXG4gICAgICAgIDogaGFzSGFuZGxlcjtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IG5ldyBQcm94eSh2bSwgaGFuZGxlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgc2Vlbk9iamVjdHMgPSBuZXcgX1NldCgpO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCkge1xuICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XG4gIHNlZW5PYmplY3RzLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIF90cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIHZhciBpLCBrZXlzO1xuICB2YXIgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICBpZiAoKCFpc0EgJiYgIWlzT2JqZWN0KHZhbCkpIHx8IE9iamVjdC5pc0Zyb3plbih2YWwpIHx8IHZhbCBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbC5fX29iX18pIHtcbiAgICB2YXIgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZDtcbiAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2Vlbi5hZGQoZGVwSWQpO1xuICB9XG4gIGlmIChpc0EpIHtcbiAgICBpID0gdmFsLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxbaV0sIHNlZW4pOyB9XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7IH1cbiAgfVxufVxuXG52YXIgbWFyaztcbnZhciBtZWFzdXJlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcGVyZiA9IGluQnJvd3NlciAmJiB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoXG4gICAgcGVyZiAmJlxuICAgIHBlcmYubWFyayAmJlxuICAgIHBlcmYubWVhc3VyZSAmJlxuICAgIHBlcmYuY2xlYXJNYXJrcyAmJlxuICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xuICApIHtcbiAgICBtYXJrID0gZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gcGVyZi5tYXJrKHRhZyk7IH07XG4gICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XG4gICAgICBwZXJmLm1lYXN1cmUobmFtZSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3Moc3RhcnRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XG4gICAgICAvLyBwZXJmLmNsZWFyTWVhc3VyZXMobmFtZSlcbiAgICB9O1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIHBhc3NpdmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyYnO1xuICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgb25jZSQkMSA9IG5hbWUuY2hhckF0KDApID09PSAnfic7IC8vIFByZWZpeGVkIGxhc3QsIGNoZWNrZWQgZmlyc3RcbiAgbmFtZSA9IG9uY2UkJDEgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICBuYW1lID0gY2FwdHVyZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgb25jZTogb25jZSQkMSxcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZuSW52b2tlciAoZm5zLCB2bSkge1xuICBmdW5jdGlvbiBpbnZva2VyICgpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgICAgdmFyIGNsb25lZCA9IGZucy5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2xvbmVkW2ldLCBudWxsLCBhcmd1bWVudHMkMSwgdm0sIFwidi1vbiBoYW5kbGVyXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xuICAgICAgcmV0dXJuIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGZucywgbnVsbCwgYXJndW1lbnRzLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIilcbiAgICB9XG4gIH1cbiAgaW52b2tlci5mbnMgPSBmbnM7XG4gIHJldHVybiBpbnZva2VyXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RlbmVycyAoXG4gIG9uLFxuICBvbGRPbixcbiAgYWRkLFxuICByZW1vdmUkJDEsXG4gIGNyZWF0ZU9uY2VIYW5kbGVyLFxuICB2bVxuKSB7XG4gIHZhciBuYW1lLCBkZWYkJDEsIGN1ciwgb2xkLCBldmVudDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgZGVmJCQxID0gY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICBpZiAoaXNVbmRlZihjdXIpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCBoYW5kbGVyIGZvciBldmVudCBcXFwiXCIgKyAoZXZlbnQubmFtZSkgKyBcIlxcXCI6IGdvdCBcIiArIFN0cmluZyhjdXIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkKSkge1xuICAgICAgaWYgKGlzVW5kZWYoY3VyLmZucykpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyLCB2bSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNUcnVlKGV2ZW50Lm9uY2UpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlT25jZUhhbmRsZXIoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlKTtcbiAgICAgIH1cbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChjdXIgIT09IG9sZCkge1xuICAgICAgb2xkLmZucyA9IGN1cjtcbiAgICAgIG9uW25hbWVdID0gb2xkO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICByZW1vdmUkJDEoZXZlbnQubmFtZSwgb2xkT25bbmFtZV0sIGV2ZW50LmNhcHR1cmUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbWVyZ2VWTm9kZUhvb2sgKGRlZiwgaG9va0tleSwgaG9vaykge1xuICBpZiAoZGVmIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICBkZWYgPSBkZWYuZGF0YS5ob29rIHx8IChkZWYuZGF0YS5ob29rID0ge30pO1xuICB9XG4gIHZhciBpbnZva2VyO1xuICB2YXIgb2xkSG9vayA9IGRlZltob29rS2V5XTtcblxuICBmdW5jdGlvbiB3cmFwcGVkSG9vayAoKSB7XG4gICAgaG9vay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8vIGltcG9ydGFudDogcmVtb3ZlIG1lcmdlZCBob29rIHRvIGVuc3VyZSBpdCdzIGNhbGxlZCBvbmx5IG9uY2VcbiAgICAvLyBhbmQgcHJldmVudCBtZW1vcnkgbGVha1xuICAgIHJlbW92ZShpbnZva2VyLmZucywgd3JhcHBlZEhvb2spO1xuICB9XG5cbiAgaWYgKGlzVW5kZWYob2xkSG9vaykpIHtcbiAgICAvLyBubyBleGlzdGluZyBob29rXG4gICAgaW52b2tlciA9IGNyZWF0ZUZuSW52b2tlcihbd3JhcHBlZEhvb2tdKTtcbiAgfSBlbHNlIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoaXNEZWYob2xkSG9vay5mbnMpICYmIGlzVHJ1ZShvbGRIb29rLm1lcmdlZCkpIHtcbiAgICAgIC8vIGFscmVhZHkgYSBtZXJnZWQgaW52b2tlclxuICAgICAgaW52b2tlciA9IG9sZEhvb2s7XG4gICAgICBpbnZva2VyLmZucy5wdXNoKHdyYXBwZWRIb29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhpc3RpbmcgcGxhaW4gaG9va1xuICAgICAgaW52b2tlciA9IGNyZWF0ZUZuSW52b2tlcihbb2xkSG9vaywgd3JhcHBlZEhvb2tdKTtcbiAgICB9XG4gIH1cblxuICBpbnZva2VyLm1lcmdlZCA9IHRydWU7XG4gIGRlZltob29rS2V5XSA9IGludm9rZXI7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhIChcbiAgZGF0YSxcbiAgQ3RvcixcbiAgdGFnXG4pIHtcbiAgLy8gd2UgYXJlIG9ubHkgZXh0cmFjdGluZyByYXcgdmFsdWVzIGhlcmUuXG4gIC8vIHZhbGlkYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGFyZSBoYW5kbGVkIGluIHRoZSBjaGlsZFxuICAvLyBjb21wb25lbnQgaXRzZWxmLlxuICB2YXIgcHJvcE9wdGlvbnMgPSBDdG9yLm9wdGlvbnMucHJvcHM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBrZXlJbkxvd2VyQ2FzZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAga2V5ICE9PSBrZXlJbkxvd2VyQ2FzZSAmJlxuICAgICAgICAgIGF0dHJzICYmIGhhc093bihhdHRycywga2V5SW5Mb3dlckNhc2UpXG4gICAgICAgICkge1xuICAgICAgICAgIHRpcChcbiAgICAgICAgICAgIFwiUHJvcCBcXFwiXCIgKyBrZXlJbkxvd2VyQ2FzZSArIFwiXFxcIiBpcyBwYXNzZWQgdG8gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHRhZyB8fCBDdG9yKSkgKyBcIiwgYnV0IHRoZSBkZWNsYXJlZCBwcm9wIG5hbWUgaXNcIiArXG4gICAgICAgICAgICBcIiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgY2FtZWxDYXNlZCBcIiArXG4gICAgICAgICAgICBcInByb3BzIG5lZWQgdG8gdXNlIHRoZWlyIGtlYmFiLWNhc2UgZXF1aXZhbGVudHMgd2hlbiB1c2luZyBpbi1ET00gXCIgK1xuICAgICAgICAgICAgXCJ0ZW1wbGF0ZXMuIFlvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIGFsdEtleSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGtleSArIFwiXFxcIi5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHxcbiAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcCAoXG4gIHJlcyxcbiAgaGFzaCxcbiAga2V5LFxuICBhbHRLZXksXG4gIHByZXNlcnZlXG4pIHtcbiAgaWYgKGlzRGVmKGhhc2gpKSB7XG4gICAgaWYgKGhhc093bihoYXNoLCBrZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChoYXNPd24oaGFzaCwgYWx0S2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2FsdEtleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2FsdEtleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyogICovXG5cbi8vIFRoZSB0ZW1wbGF0ZSBjb21waWxlciBhdHRlbXB0cyB0byBtaW5pbWl6ZSB0aGUgbmVlZCBmb3Igbm9ybWFsaXphdGlvbiBieVxuLy8gc3RhdGljYWxseSBhbmFseXppbmcgdGhlIHRlbXBsYXRlIGF0IGNvbXBpbGUgdGltZS5cbi8vXG4vLyBGb3IgcGxhaW4gSFRNTCBtYXJrdXAsIG5vcm1hbGl6YXRpb24gY2FuIGJlIGNvbXBsZXRlbHkgc2tpcHBlZCBiZWNhdXNlIHRoZVxuLy8gZ2VuZXJhdGVkIHJlbmRlciBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIHJldHVybiBBcnJheTxWTm9kZT4uIFRoZXJlIGFyZVxuLy8gdHdvIGNhc2VzIHdoZXJlIGV4dHJhIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkOlxuXG4vLyAxLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb21wb25lbnRzIC0gYmVjYXVzZSBhIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4vLyBtYXkgcmV0dXJuIGFuIEFycmF5IGluc3RlYWQgb2YgYSBzaW5nbGUgcm9vdC4gSW4gdGhpcyBjYXNlLCBqdXN0IGEgc2ltcGxlXG4vLyBub3JtYWxpemF0aW9uIGlzIG5lZWRlZCAtIGlmIGFueSBjaGlsZCBpcyBhbiBBcnJheSwgd2UgZmxhdHRlbiB0aGUgd2hvbGVcbi8vIHRoaW5nIHdpdGggQXJyYXkucHJvdG90eXBlLmNvbmNhdC4gSXQgaXMgZ3VhcmFudGVlZCB0byBiZSBvbmx5IDEtbGV2ZWwgZGVlcFxuLy8gYmVjYXVzZSBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYWxyZWFkeSBub3JtYWxpemUgdGhlaXIgb3duIGNoaWxkcmVuLlxuZnVuY3Rpb24gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjaGlsZHJlbilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbi8vIDIuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbnN0cnVjdHMgdGhhdCBhbHdheXMgZ2VuZXJhdGVkIG5lc3RlZCBBcnJheXMsXG4vLyBlLmcuIDx0ZW1wbGF0ZT4sIDxzbG90Piwgdi1mb3IsIG9yIHdoZW4gdGhlIGNoaWxkcmVuIGlzIHByb3ZpZGVkIGJ5IHVzZXJcbi8vIHdpdGggaGFuZC13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMgLyBKU1guIEluIHN1Y2ggY2FzZXMgYSBmdWxsIG5vcm1hbGl6YXRpb25cbi8vIGlzIG5lZWRlZCB0byBjYXRlciB0byBhbGwgcG9zc2libGUgdHlwZXMgb2YgY2hpbGRyZW4gdmFsdWVzLlxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIHJldHVybiBpc1ByaW1pdGl2ZShjaGlsZHJlbilcbiAgICA/IFtjcmVhdGVUZXh0Vk5vZGUoY2hpbGRyZW4pXVxuICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgID8gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjaGlsZHJlbilcbiAgICAgIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzVGV4dE5vZGUgKG5vZGUpIHtcbiAgcmV0dXJuIGlzRGVmKG5vZGUpICYmIGlzRGVmKG5vZGUudGV4dCkgJiYgaXNGYWxzZShub2RlLmlzQ29tbWVudClcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlDaGlsZHJlbiAoY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIGksIGMsIGxhc3RJbmRleCwgbGFzdDtcbiAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChpc1VuZGVmKGMpIHx8IHR5cGVvZiBjID09PSAnYm9vbGVhbicpIHsgY29udGludWUgfVxuICAgIGxhc3RJbmRleCA9IHJlcy5sZW5ndGggLSAxO1xuICAgIGxhc3QgPSByZXNbbGFzdEluZGV4XTtcbiAgICAvLyAgbmVzdGVkXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYykpIHtcbiAgICAgIGlmIChjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYyA9IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oYywgKChuZXN0ZWRJbmRleCB8fCAnJykgKyBcIl9cIiArIGkpKTtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICBpZiAoaXNUZXh0Tm9kZShjWzBdKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgKGNbMF0pLnRleHQpO1xuICAgICAgICAgIGMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaC5hcHBseShyZXMsIGMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUoYykpIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIFNTUiBoeWRyYXRpb24gYmVjYXVzZSB0ZXh0IG5vZGVzIGFyZVxuICAgICAgICAvLyBlc3NlbnRpYWxseSBtZXJnZWQgd2hlbiByZW5kZXJlZCB0byBIVE1MIHN0cmluZ3NcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYyk7XG4gICAgICB9IGVsc2UgaWYgKGMgIT09ICcnKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgcHJpbWl0aXZlIHRvIHZub2RlXG4gICAgICAgIHJlcy5wdXNoKGNyZWF0ZVRleHRWTm9kZShjKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGMpICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjLnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVmYXVsdCBrZXkgZm9yIG5lc3RlZCBhcnJheSBjaGlsZHJlbiAobGlrZWx5IGdlbmVyYXRlZCBieSB2LWZvcilcbiAgICAgICAgaWYgKGlzVHJ1ZShjaGlsZHJlbi5faXNWTGlzdCkgJiZcbiAgICAgICAgICBpc0RlZihjLnRhZykgJiZcbiAgICAgICAgICBpc1VuZGVmKGMua2V5KSAmJlxuICAgICAgICAgIGlzRGVmKG5lc3RlZEluZGV4KSkge1xuICAgICAgICAgIGMua2V5ID0gXCJfX3ZsaXN0XCIgKyBuZXN0ZWRJbmRleCArIFwiX1wiICsgaSArIFwiX19cIjtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFByb3ZpZGUgKHZtKSB7XG4gIHZhciBwcm92aWRlID0gdm0uJG9wdGlvbnMucHJvdmlkZTtcbiAgaWYgKHByb3ZpZGUpIHtcbiAgICB2bS5fcHJvdmlkZWQgPSB0eXBlb2YgcHJvdmlkZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBwcm92aWRlLmNhbGwodm0pXG4gICAgICA6IHByb3ZpZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEluamVjdGlvbnMgKHZtKSB7XG4gIHZhciByZXN1bHQgPSByZXNvbHZlSW5qZWN0KHZtLiRvcHRpb25zLmluamVjdCwgdm0pO1xuICBpZiAocmVzdWx0KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYW4gaW5qZWN0ZWQgdmFsdWUgZGlyZWN0bHkgc2luY2UgdGhlIGNoYW5nZXMgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwcm92aWRlZCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJpbmplY3Rpb24gYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5qZWN0IChpbmplY3QsIHZtKSB7XG4gIGlmIChpbmplY3QpIHtcbiAgICAvLyBpbmplY3QgaXMgOmFueSBiZWNhdXNlIGZsb3cgaXMgbm90IHNtYXJ0IGVub3VnaCB0byBmaWd1cmUgb3V0IGNhY2hlZFxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgICA/IFJlZmxlY3Qub3duS2V5cyhpbmplY3QpXG4gICAgICA6IE9iamVjdC5rZXlzKGluamVjdCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgLy8gIzY1NzQgaW4gY2FzZSB0aGUgaW5qZWN0IG9iamVjdCBpcyBvYnNlcnZlZC4uLlxuICAgICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgICAgdmFyIHByb3ZpZGVLZXkgPSBpbmplY3Rba2V5XS5mcm9tO1xuICAgICAgdmFyIHNvdXJjZSA9IHZtO1xuICAgICAgd2hpbGUgKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLl9wcm92aWRlZCAmJiBoYXNPd24oc291cmNlLl9wcm92aWRlZCwgcHJvdmlkZUtleSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZS5fcHJvdmlkZWRbcHJvdmlkZUtleV07XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2UgPSBzb3VyY2UuJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIGlmICgnZGVmYXVsdCcgaW4gaW5qZWN0W2tleV0pIHtcbiAgICAgICAgICB2YXIgcHJvdmlkZURlZmF1bHQgPSBpbmplY3Rba2V5XS5kZWZhdWx0O1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdHlwZW9mIHByb3ZpZGVEZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHByb3ZpZGVEZWZhdWx0LmNhbGwodm0pXG4gICAgICAgICAgICA6IHByb3ZpZGVEZWZhdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB3YXJuKChcIkluamVjdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbm90IGZvdW5kXCIpLCB2bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbi8qICAqL1xuXG5cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIHJhdyBjaGlsZHJlbiBWTm9kZXMgaW50byBhIHNsb3Qgb2JqZWN0LlxuICovXG5mdW5jdGlvbiByZXNvbHZlU2xvdHMgKFxuICBjaGlsZHJlbixcbiAgY29udGV4dFxuKSB7XG4gIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIHZhciBzbG90cyA9IHt9O1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIHZhciBkYXRhID0gY2hpbGQuZGF0YTtcbiAgICAvLyByZW1vdmUgc2xvdCBhdHRyaWJ1dGUgaWYgdGhlIG5vZGUgaXMgcmVzb2x2ZWQgYXMgYSBWdWUgc2xvdCBub2RlXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnNsb3QpIHtcbiAgICAgIGRlbGV0ZSBkYXRhLmF0dHJzLnNsb3Q7XG4gICAgfVxuICAgIC8vIG5hbWVkIHNsb3RzIHNob3VsZCBvbmx5IGJlIHJlc3BlY3RlZCBpZiB0aGUgdm5vZGUgd2FzIHJlbmRlcmVkIGluIHRoZVxuICAgIC8vIHNhbWUgY29udGV4dC5cbiAgICBpZiAoKGNoaWxkLmNvbnRleHQgPT09IGNvbnRleHQgfHwgY2hpbGQuZm5Db250ZXh0ID09PSBjb250ZXh0KSAmJlxuICAgICAgZGF0YSAmJiBkYXRhLnNsb3QgIT0gbnVsbFxuICAgICkge1xuICAgICAgdmFyIG5hbWUgPSBkYXRhLnNsb3Q7XG4gICAgICB2YXIgc2xvdCA9IChzbG90c1tuYW1lXSB8fCAoc2xvdHNbbmFtZV0gPSBbXSkpO1xuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICBzbG90LnB1c2guYXBwbHkoc2xvdCwgY2hpbGQuY2hpbGRyZW4gfHwgW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xvdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHNsb3RzLmRlZmF1bHQgfHwgKHNsb3RzLmRlZmF1bHQgPSBbXSkpLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfVxuICAvLyBpZ25vcmUgc2xvdHMgdGhhdCBjb250YWlucyBvbmx5IHdoaXRlc3BhY2VcbiAgZm9yICh2YXIgbmFtZSQxIGluIHNsb3RzKSB7XG4gICAgaWYgKHNsb3RzW25hbWUkMV0uZXZlcnkoaXNXaGl0ZXNwYWNlKSkge1xuICAgICAgZGVsZXRlIHNsb3RzW25hbWUkMV07XG4gICAgfVxuICB9XG4gIHJldHVybiBzbG90c1xufVxuXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UgKG5vZGUpIHtcbiAgcmV0dXJuIChub2RlLmlzQ29tbWVudCAmJiAhbm9kZS5hc3luY0ZhY3RvcnkpIHx8IG5vZGUudGV4dCA9PT0gJyAnXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVTY29wZWRTbG90cyAoXG4gIHNsb3RzLFxuICBub3JtYWxTbG90cyxcbiAgcHJldlNsb3RzXG4pIHtcbiAgdmFyIHJlcztcbiAgdmFyIGhhc05vcm1hbFNsb3RzID0gT2JqZWN0LmtleXMobm9ybWFsU2xvdHMpLmxlbmd0aCA+IDA7XG4gIHZhciBpc1N0YWJsZSA9IHNsb3RzID8gISFzbG90cy4kc3RhYmxlIDogIWhhc05vcm1hbFNsb3RzO1xuICB2YXIga2V5ID0gc2xvdHMgJiYgc2xvdHMuJGtleTtcbiAgaWYgKCFzbG90cykge1xuICAgIHJlcyA9IHt9O1xuICB9IGVsc2UgaWYgKHNsb3RzLl9ub3JtYWxpemVkKSB7XG4gICAgLy8gZmFzdCBwYXRoIDE6IGNoaWxkIGNvbXBvbmVudCByZS1yZW5kZXIgb25seSwgcGFyZW50IGRpZCBub3QgY2hhbmdlXG4gICAgcmV0dXJuIHNsb3RzLl9ub3JtYWxpemVkXG4gIH0gZWxzZSBpZiAoXG4gICAgaXNTdGFibGUgJiZcbiAgICBwcmV2U2xvdHMgJiZcbiAgICBwcmV2U2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmXG4gICAga2V5ID09PSBwcmV2U2xvdHMuJGtleSAmJlxuICAgICFoYXNOb3JtYWxTbG90cyAmJlxuICAgICFwcmV2U2xvdHMuJGhhc05vcm1hbFxuICApIHtcbiAgICAvLyBmYXN0IHBhdGggMjogc3RhYmxlIHNjb3BlZCBzbG90cyB3LyBubyBub3JtYWwgc2xvdHMgdG8gcHJveHksXG4gICAgLy8gb25seSBuZWVkIHRvIG5vcm1hbGl6ZSBvbmNlXG4gICAgcmV0dXJuIHByZXZTbG90c1xuICB9IGVsc2Uge1xuICAgIHJlcyA9IHt9O1xuICAgIGZvciAodmFyIGtleSQxIGluIHNsb3RzKSB7XG4gICAgICBpZiAoc2xvdHNba2V5JDFdICYmIGtleSQxWzBdICE9PSAnJCcpIHtcbiAgICAgICAgcmVzW2tleSQxXSA9IG5vcm1hbGl6ZVNjb3BlZFNsb3Qobm9ybWFsU2xvdHMsIGtleSQxLCBzbG90c1trZXkkMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBleHBvc2Ugbm9ybWFsIHNsb3RzIG9uIHNjb3BlZFNsb3RzXG4gIGZvciAodmFyIGtleSQyIGluIG5vcm1hbFNsb3RzKSB7XG4gICAgaWYgKCEoa2V5JDIgaW4gcmVzKSkge1xuICAgICAgcmVzW2tleSQyXSA9IHByb3h5Tm9ybWFsU2xvdChub3JtYWxTbG90cywga2V5JDIpO1xuICAgIH1cbiAgfVxuICAvLyBhdm9yaWF6IHNlZW1zIHRvIG1vY2sgYSBub24tZXh0ZW5zaWJsZSAkc2NvcGVkU2xvdHMgb2JqZWN0XG4gIC8vIGFuZCB3aGVuIHRoYXQgaXMgcGFzc2VkIGRvd24gdGhpcyB3b3VsZCBjYXVzZSBhbiBlcnJvclxuICBpZiAoc2xvdHMgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZShzbG90cykpIHtcbiAgICAoc2xvdHMpLl9ub3JtYWxpemVkID0gcmVzO1xuICB9XG4gIGRlZihyZXMsICckc3RhYmxlJywgaXNTdGFibGUpO1xuICBkZWYocmVzLCAnJGtleScsIGtleSk7XG4gIGRlZihyZXMsICckaGFzTm9ybWFsJywgaGFzTm9ybWFsU2xvdHMpO1xuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3Qobm9ybWFsU2xvdHMsIGtleSwgZm4pIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlcyA9IGFyZ3VtZW50cy5sZW5ndGggPyBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpIDogZm4oe30pO1xuICAgIHJlcyA9IHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXMpXG4gICAgICA/IFtyZXNdIC8vIHNpbmdsZSB2bm9kZVxuICAgICAgOiBub3JtYWxpemVDaGlsZHJlbihyZXMpO1xuICAgIHJldHVybiByZXMgJiYgKFxuICAgICAgcmVzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgKHJlcy5sZW5ndGggPT09IDEgJiYgcmVzWzBdLmlzQ29tbWVudCkgLy8gIzk2NThcbiAgICApID8gdW5kZWZpbmVkXG4gICAgICA6IHJlc1xuICB9O1xuICAvLyB0aGlzIGlzIGEgc2xvdCB1c2luZyB0aGUgbmV3IHYtc2xvdCBzeW50YXggd2l0aG91dCBzY29wZS4gYWx0aG91Z2ggaXQgaXNcbiAgLy8gY29tcGlsZWQgYXMgYSBzY29wZWQgc2xvdCwgcmVuZGVyIGZuIHVzZXJzIHdvdWxkIGV4cGVjdCBpdCB0byBiZSBwcmVzZW50XG4gIC8vIG9uIHRoaXMuJHNsb3RzIGJlY2F1c2UgdGhlIHVzYWdlIGlzIHNlbWFudGljYWxseSBhIG5vcm1hbCBzbG90LlxuICBpZiAoZm4ucHJveHkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsU2xvdHMsIGtleSwge1xuICAgICAgZ2V0OiBub3JtYWxpemVkLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkXG59XG5cbmZ1bmN0aW9uIHByb3h5Tm9ybWFsU2xvdChzbG90cywga2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzbG90c1trZXldOyB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgdi1mb3IgbGlzdHMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckxpc3QgKFxuICB2YWwsXG4gIHJlbmRlclxuKSB7XG4gIHZhciByZXQsIGksIGwsIGtleXMsIGtleTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtpXSwgaSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XG4gICAgZm9yIChpID0gMDsgaSA8IHZhbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXIoaSArIDEsIGkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgaWYgKGhhc1N5bWJvbCAmJiB2YWxbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgcmV0ID0gW107XG4gICAgICB2YXIgaXRlcmF0b3IgPSB2YWxbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0LnB1c2gocmVuZGVyKHJlc3VsdC52YWx1ZSwgcmV0Lmxlbmd0aCkpO1xuICAgICAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgICAgcmV0ID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICByZXRbaV0gPSByZW5kZXIodmFsW2tleV0sIGtleSwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNEZWYocmV0KSkge1xuICAgIHJldCA9IFtdO1xuICB9XG4gIChyZXQpLl9pc1ZMaXN0ID0gdHJ1ZTtcbiAgcmV0dXJuIHJldFxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIDxzbG90PlxuICovXG5mdW5jdGlvbiByZW5kZXJTbG90IChcbiAgbmFtZSxcbiAgZmFsbGJhY2ssXG4gIHByb3BzLFxuICBiaW5kT2JqZWN0XG4pIHtcbiAgdmFyIHNjb3BlZFNsb3RGbiA9IHRoaXMuJHNjb3BlZFNsb3RzW25hbWVdO1xuICB2YXIgbm9kZXM7XG4gIGlmIChzY29wZWRTbG90Rm4pIHsgLy8gc2NvcGVkIHNsb3RcbiAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIGlmIChiaW5kT2JqZWN0KSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNPYmplY3QoYmluZE9iamVjdCkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnc2xvdCB2LWJpbmQgd2l0aG91dCBhcmd1bWVudCBleHBlY3RzIGFuIE9iamVjdCcsXG4gICAgICAgICAgdGhpc1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcHJvcHMgPSBleHRlbmQoZXh0ZW5kKHt9LCBiaW5kT2JqZWN0KSwgcHJvcHMpO1xuICAgIH1cbiAgICBub2RlcyA9IHNjb3BlZFNsb3RGbihwcm9wcykgfHwgZmFsbGJhY2s7XG4gIH0gZWxzZSB7XG4gICAgbm9kZXMgPSB0aGlzLiRzbG90c1tuYW1lXSB8fCBmYWxsYmFjaztcbiAgfVxuXG4gIHZhciB0YXJnZXQgPSBwcm9wcyAmJiBwcm9wcy5zbG90O1xuICBpZiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJywgeyBzbG90OiB0YXJnZXQgfSwgbm9kZXMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5vZGVzXG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlc29sdmluZyBmaWx0ZXJzXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVGaWx0ZXIgKGlkKSB7XG4gIHJldHVybiByZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBpZCwgdHJ1ZSkgfHwgaWRlbnRpdHlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzS2V5Tm90TWF0Y2ggKGV4cGVjdCwgYWN0dWFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdCkpIHtcbiAgICByZXR1cm4gZXhwZWN0LmluZGV4T2YoYWN0dWFsKSA9PT0gLTFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXhwZWN0ICE9PSBhY3R1YWxcbiAgfVxufVxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBjaGVja2luZyBrZXlDb2RlcyBmcm9tIGNvbmZpZy5cbiAqIGV4cG9zZWQgYXMgVnVlLnByb3RvdHlwZS5fa1xuICogcGFzc2luZyBpbiBldmVudEtleU5hbWUgYXMgbGFzdCBhcmd1bWVudCBzZXBhcmF0ZWx5IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gKi9cbmZ1bmN0aW9uIGNoZWNrS2V5Q29kZXMgKFxuICBldmVudEtleUNvZGUsXG4gIGtleSxcbiAgYnVpbHRJbktleUNvZGUsXG4gIGV2ZW50S2V5TmFtZSxcbiAgYnVpbHRJbktleU5hbWVcbikge1xuICB2YXIgbWFwcGVkS2V5Q29kZSA9IGNvbmZpZy5rZXlDb2Rlc1trZXldIHx8IGJ1aWx0SW5LZXlDb2RlO1xuICBpZiAoYnVpbHRJbktleU5hbWUgJiYgZXZlbnRLZXlOYW1lICYmICFjb25maWcua2V5Q29kZXNba2V5XSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKGJ1aWx0SW5LZXlOYW1lLCBldmVudEtleU5hbWUpXG4gIH0gZWxzZSBpZiAobWFwcGVkS2V5Q29kZSkge1xuICAgIHJldHVybiBpc0tleU5vdE1hdGNoKG1hcHBlZEtleUNvZGUsIGV2ZW50S2V5Q29kZSlcbiAgfSBlbHNlIGlmIChldmVudEtleU5hbWUpIHtcbiAgICByZXR1cm4gaHlwaGVuYXRlKGV2ZW50S2V5TmFtZSkgIT09IGtleVxuICB9XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciBtZXJnaW5nIHYtYmluZD1cIm9iamVjdFwiIGludG8gYSBWTm9kZSdzIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGJpbmRPYmplY3RQcm9wcyAoXG4gIGRhdGEsXG4gIHRhZyxcbiAgdmFsdWUsXG4gIGFzUHJvcCxcbiAgaXNTeW5jXG4pIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ3YtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IG9yIEFycmF5IHZhbHVlJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdG9PYmplY3QodmFsdWUpO1xuICAgICAgfVxuICAgICAgdmFyIGhhc2g7XG4gICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAga2V5ID09PSAnY2xhc3MnIHx8XG4gICAgICAgICAga2V5ID09PSAnc3R5bGUnIHx8XG4gICAgICAgICAgaXNSZXNlcnZlZEF0dHJpYnV0ZShrZXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGhhc2ggPSBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0eXBlID0gZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnR5cGU7XG4gICAgICAgICAgaGFzaCA9IGFzUHJvcCB8fCBjb25maWcubXVzdFVzZVByb3AodGFnLCB0eXBlLCBrZXkpXG4gICAgICAgICAgICA/IGRhdGEuZG9tUHJvcHMgfHwgKGRhdGEuZG9tUHJvcHMgPSB7fSlcbiAgICAgICAgICAgIDogZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FtZWxpemVkS2V5ID0gY2FtZWxpemUoa2V5KTtcbiAgICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAgaWYgKCEoY2FtZWxpemVkS2V5IGluIGhhc2gpICYmICEoaHlwaGVuYXRlZEtleSBpbiBoYXNoKSkge1xuICAgICAgICAgIGhhc2hba2V5XSA9IHZhbHVlW2tleV07XG5cbiAgICAgICAgICBpZiAoaXNTeW5jKSB7XG4gICAgICAgICAgICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICAgICAgICAgICAgb25bKFwidXBkYXRlOlwiICsga2V5KV0gPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhbHVlW2tleV0gPSAkZXZlbnQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSBsb29wKCBrZXkgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyBzdGF0aWMgdHJlZXMuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclN0YXRpYyAoXG4gIGluZGV4LFxuICBpc0luRm9yXG4pIHtcbiAgdmFyIGNhY2hlZCA9IHRoaXMuX3N0YXRpY1RyZWVzIHx8ICh0aGlzLl9zdGF0aWNUcmVlcyA9IFtdKTtcbiAgdmFyIHRyZWUgPSBjYWNoZWRbaW5kZXhdO1xuICAvLyBpZiBoYXMgYWxyZWFkeS1yZW5kZXJlZCBzdGF0aWMgdHJlZSBhbmQgbm90IGluc2lkZSB2LWZvcixcbiAgLy8gd2UgY2FuIHJldXNlIHRoZSBzYW1lIHRyZWUuXG4gIGlmICh0cmVlICYmICFpc0luRm9yKSB7XG4gICAgcmV0dXJuIHRyZWVcbiAgfVxuICAvLyBvdGhlcndpc2UsIHJlbmRlciBhIGZyZXNoIHRyZWUuXG4gIHRyZWUgPSBjYWNoZWRbaW5kZXhdID0gdGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbaW5kZXhdLmNhbGwoXG4gICAgdGhpcy5fcmVuZGVyUHJveHksXG4gICAgbnVsbCxcbiAgICB0aGlzIC8vIGZvciByZW5kZXIgZm5zIGdlbmVyYXRlZCBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgdGVtcGxhdGVzXG4gICk7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19zdGF0aWNfX1wiICsgaW5kZXgpLCBmYWxzZSk7XG4gIHJldHVybiB0cmVlXG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHYtb25jZS5cbiAqIEVmZmVjdGl2ZWx5IGl0IG1lYW5zIG1hcmtpbmcgdGhlIG5vZGUgYXMgc3RhdGljIHdpdGggYSB1bmlxdWUga2V5LlxuICovXG5mdW5jdGlvbiBtYXJrT25jZSAoXG4gIHRyZWUsXG4gIGluZGV4LFxuICBrZXlcbikge1xuICBtYXJrU3RhdGljKHRyZWUsIChcIl9fb25jZV9fXCIgKyBpbmRleCArIChrZXkgPyAoXCJfXCIgKyBrZXkpIDogXCJcIikpLCB0cnVlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpYyAoXG4gIHRyZWUsXG4gIGtleSxcbiAgaXNPbmNlXG4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0cmVlW2ldICYmIHR5cGVvZiB0cmVlW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgICBtYXJrU3RhdGljTm9kZSh0cmVlW2ldLCAoa2V5ICsgXCJfXCIgKyBpKSwgaXNPbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWFya1N0YXRpY05vZGUodHJlZSwga2V5LCBpc09uY2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtTdGF0aWNOb2RlIChub2RlLCBrZXksIGlzT25jZSkge1xuICBub2RlLmlzU3RhdGljID0gdHJ1ZTtcbiAgbm9kZS5rZXkgPSBrZXk7XG4gIG5vZGUuaXNPbmNlID0gaXNPbmNlO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZE9iamVjdExpc3RlbmVycyAoZGF0YSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1vbiB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0IHZhbHVlJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9uID0gZGF0YS5vbiA9IGRhdGEub24gPyBleHRlbmQoe30sIGRhdGEub24pIDoge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFyIGV4aXN0aW5nID0gb25ba2V5XTtcbiAgICAgICAgdmFyIG91cnMgPSB2YWx1ZVtrZXldO1xuICAgICAgICBvbltrZXldID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIG91cnMpIDogb3VycztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVTY29wZWRTbG90cyAoXG4gIGZucywgLy8gc2VlIGZsb3cvdm5vZGVcbiAgcmVzLFxuICAvLyB0aGUgZm9sbG93aW5nIGFyZSBhZGRlZCBpbiAyLjZcbiAgaGFzRHluYW1pY0tleXMsXG4gIGNvbnRlbnRIYXNoS2V5XG4pIHtcbiAgcmVzID0gcmVzIHx8IHsgJHN0YWJsZTogIWhhc0R5bmFtaWNLZXlzIH07XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNsb3QgPSBmbnNbaV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdCkpIHtcbiAgICAgIHJlc29sdmVTY29wZWRTbG90cyhzbG90LCByZXMsIGhhc0R5bmFtaWNLZXlzKTtcbiAgICB9IGVsc2UgaWYgKHNsb3QpIHtcbiAgICAgIC8vIG1hcmtlciBmb3IgcmV2ZXJzZSBwcm94eWluZyB2LXNsb3Qgd2l0aG91dCBzY29wZSBvbiB0aGlzLiRzbG90c1xuICAgICAgaWYgKHNsb3QucHJveHkpIHtcbiAgICAgICAgc2xvdC5mbi5wcm94eSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXNbc2xvdC5rZXldID0gc2xvdC5mbjtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbnRlbnRIYXNoS2V5KSB7XG4gICAgKHJlcykuJGtleSA9IGNvbnRlbnRIYXNoS2V5O1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGJpbmREeW5hbWljS2V5cyAoYmFzZU9iaiwgdmFsdWVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIGtleSA9IHZhbHVlc1tpXTtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5KSB7XG4gICAgICBiYXNlT2JqW3ZhbHVlc1tpXV0gPSB2YWx1ZXNbaSArIDFdO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBrZXkgIT09ICcnICYmIGtleSAhPT0gbnVsbCkge1xuICAgICAgLy8gbnVsbCBpcyBhIHNwZWNpYWwgdmFsdWUgZm9yIGV4cGxpY2l0bHkgcmVtb3ZpbmcgYSBiaW5kaW5nXG4gICAgICB3YXJuKFxuICAgICAgICAoXCJJbnZhbGlkIHZhbHVlIGZvciBkeW5hbWljIGRpcmVjdGl2ZSBhcmd1bWVudCAoZXhwZWN0ZWQgc3RyaW5nIG9yIG51bGwpOiBcIiArIGtleSksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlT2JqXG59XG5cbi8vIGhlbHBlciB0byBkeW5hbWljYWxseSBhcHBlbmQgbW9kaWZpZXIgcnVudGltZSBtYXJrZXJzIHRvIGV2ZW50IG5hbWVzLlxuLy8gZW5zdXJlIG9ubHkgYXBwZW5kIHdoZW4gdmFsdWUgaXMgYWxyZWFkeSBzdHJpbmcsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGNhc3Rcbi8vIHRvIHN0cmluZyBhbmQgY2F1c2UgdGhlIHR5cGUgY2hlY2sgdG8gbWlzcy5cbmZ1bmN0aW9uIHByZXBlbmRNb2RpZmllciAodmFsdWUsIHN5bWJvbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHN5bWJvbCArIHZhbHVlIDogdmFsdWVcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluc3RhbGxSZW5kZXJIZWxwZXJzICh0YXJnZXQpIHtcbiAgdGFyZ2V0Ll9vID0gbWFya09uY2U7XG4gIHRhcmdldC5fbiA9IHRvTnVtYmVyO1xuICB0YXJnZXQuX3MgPSB0b1N0cmluZztcbiAgdGFyZ2V0Ll9sID0gcmVuZGVyTGlzdDtcbiAgdGFyZ2V0Ll90ID0gcmVuZGVyU2xvdDtcbiAgdGFyZ2V0Ll9xID0gbG9vc2VFcXVhbDtcbiAgdGFyZ2V0Ll9pID0gbG9vc2VJbmRleE9mO1xuICB0YXJnZXQuX20gPSByZW5kZXJTdGF0aWM7XG4gIHRhcmdldC5fZiA9IHJlc29sdmVGaWx0ZXI7XG4gIHRhcmdldC5fayA9IGNoZWNrS2V5Q29kZXM7XG4gIHRhcmdldC5fYiA9IGJpbmRPYmplY3RQcm9wcztcbiAgdGFyZ2V0Ll92ID0gY3JlYXRlVGV4dFZOb2RlO1xuICB0YXJnZXQuX2UgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICB0YXJnZXQuX3UgPSByZXNvbHZlU2NvcGVkU2xvdHM7XG4gIHRhcmdldC5fZyA9IGJpbmRPYmplY3RMaXN0ZW5lcnM7XG4gIHRhcmdldC5fZCA9IGJpbmREeW5hbWljS2V5cztcbiAgdGFyZ2V0Ll9wID0gcHJlcGVuZE1vZGlmaWVyO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgKFxuICBkYXRhLFxuICBwcm9wcyxcbiAgY2hpbGRyZW4sXG4gIHBhcmVudCxcbiAgQ3RvclxuKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICAvLyBlbnN1cmUgdGhlIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gaW4gZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gIC8vIGdldHMgYSB1bmlxdWUgY29udGV4dCAtIHRoaXMgaXMgbmVjZXNzYXJ5IGZvciBjb3JyZWN0IG5hbWVkIHNsb3QgY2hlY2tcbiAgdmFyIGNvbnRleHRWbTtcbiAgaWYgKGhhc093bihwYXJlbnQsICdfdWlkJykpIHtcbiAgICBjb250ZXh0Vm0gPSBPYmplY3QuY3JlYXRlKHBhcmVudCk7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgY29udGV4dFZtLl9vcmlnaW5hbCA9IHBhcmVudDtcbiAgfSBlbHNlIHtcbiAgICAvLyB0aGUgY29udGV4dCB2bSBwYXNzZWQgaW4gaXMgYSBmdW5jdGlvbmFsIGNvbnRleHQgYXMgd2VsbC5cbiAgICAvLyBpbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgYXJlIGFibGUgdG8gZ2V0IGEgaG9sZCB0byB0aGVcbiAgICAvLyByZWFsIGNvbnRleHQgaW5zdGFuY2UuXG4gICAgY29udGV4dFZtID0gcGFyZW50O1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHBhcmVudCA9IHBhcmVudC5fb3JpZ2luYWw7XG4gIH1cbiAgdmFyIGlzQ29tcGlsZWQgPSBpc1RydWUob3B0aW9ucy5fY29tcGlsZWQpO1xuICB2YXIgbmVlZE5vcm1hbGl6YXRpb24gPSAhaXNDb21waWxlZDtcblxuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMubGlzdGVuZXJzID0gZGF0YS5vbiB8fCBlbXB0eU9iamVjdDtcbiAgdGhpcy5pbmplY3Rpb25zID0gcmVzb2x2ZUluamVjdChvcHRpb25zLmluamVjdCwgcGFyZW50KTtcbiAgdGhpcy5zbG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMkMS4kc2xvdHMpIHtcbiAgICAgIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICBkYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICB0aGlzJDEuJHNsb3RzID0gcmVzb2x2ZVNsb3RzKGNoaWxkcmVuLCBwYXJlbnQpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcyQxLiRzbG90c1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2NvcGVkU2xvdHMnLCAoe1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVNjb3BlZFNsb3RzKGRhdGEuc2NvcGVkU2xvdHMsIHRoaXMuc2xvdHMoKSlcbiAgICB9XG4gIH0pKTtcblxuICAvLyBzdXBwb3J0IGZvciBjb21waWxlZCBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChpc0NvbXBpbGVkKSB7XG4gICAgLy8gZXhwb3NpbmcgJG9wdGlvbnMgZm9yIHJlbmRlclN0YXRpYygpXG4gICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gcHJlLXJlc29sdmUgc2xvdHMgZm9yIHJlbmRlclNsb3QoKVxuICAgIHRoaXMuJHNsb3RzID0gdGhpcy5zbG90cygpO1xuICAgIHRoaXMuJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy4kc2xvdHMpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuX3Njb3BlSWQpIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgIHZhciB2bm9kZSA9IGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7XG4gICAgICBpZiAodm5vZGUgJiYgIUFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHZub2RlLmZuU2NvcGVJZCA9IG9wdGlvbnMuX3Njb3BlSWQ7XG4gICAgICAgIHZub2RlLmZuQ29udGV4dCA9IHBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bm9kZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KGNvbnRleHRWbSwgYSwgYiwgYywgZCwgbmVlZE5vcm1hbGl6YXRpb24pOyB9O1xuICB9XG59XG5cbmluc3RhbGxSZW5kZXJIZWxwZXJzKEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0LnByb3RvdHlwZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnQgKFxuICBDdG9yLFxuICBwcm9wc0RhdGEsXG4gIGRhdGEsXG4gIGNvbnRleHRWbSxcbiAgY2hpbGRyZW5cbikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBwcm9wT3B0aW9ucyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmIChpc0RlZihwcm9wT3B0aW9ucykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhIHx8IGVtcHR5T2JqZWN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRGVmKGRhdGEuYXR0cnMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEuYXR0cnMpOyB9XG4gICAgaWYgKGlzRGVmKGRhdGEucHJvcHMpKSB7IG1lcmdlUHJvcHMocHJvcHMsIGRhdGEucHJvcHMpOyB9XG4gIH1cblxuICB2YXIgcmVuZGVyQ29udGV4dCA9IG5ldyBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dChcbiAgICBkYXRhLFxuICAgIHByb3BzLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbnRleHRWbSxcbiAgICBDdG9yXG4gICk7XG5cbiAgdmFyIHZub2RlID0gb3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLCByZW5kZXJDb250ZXh0Ll9jLCByZW5kZXJDb250ZXh0KTtcblxuICBpZiAodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVybiBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2RlLCBkYXRhLCByZW5kZXJDb250ZXh0LnBhcmVudCwgb3B0aW9ucywgcmVuZGVyQ29udGV4dClcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSkge1xuICAgIHZhciB2bm9kZXMgPSBub3JtYWxpemVDaGlsZHJlbih2bm9kZSkgfHwgW107XG4gICAgdmFyIHJlcyA9IG5ldyBBcnJheSh2bm9kZXMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzW2ldID0gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCh2bm9kZXNbaV0sIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQgKHZub2RlLCBkYXRhLCBjb250ZXh0Vm0sIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpIHtcbiAgLy8gIzc4MTcgY2xvbmUgbm9kZSBiZWZvcmUgc2V0dGluZyBmbkNvbnRleHQsIG90aGVyd2lzZSBpZiB0aGUgbm9kZSBpcyByZXVzZWRcbiAgLy8gKGUuZy4gaXQgd2FzIGZyb20gYSBjYWNoZWQgbm9ybWFsIHNsb3QpIHRoZSBmbkNvbnRleHQgY2F1c2VzIG5hbWVkIHNsb3RzXG4gIC8vIHRoYXQgc2hvdWxkIG5vdCBiZSBtYXRjaGVkIHRvIG1hdGNoLlxuICB2YXIgY2xvbmUgPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgY2xvbmUuZm5Db250ZXh0ID0gY29udGV4dFZtO1xuICBjbG9uZS5mbk9wdGlvbnMgPSBvcHRpb25zO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIChjbG9uZS5kZXZ0b29sc01ldGEgPSBjbG9uZS5kZXZ0b29sc01ldGEgfHwge30pLnJlbmRlckNvbnRleHQgPSByZW5kZXJDb250ZXh0O1xuICB9XG4gIGlmIChkYXRhLnNsb3QpIHtcbiAgICAoY2xvbmUuZGF0YSB8fCAoY2xvbmUuZGF0YSA9IHt9KSkuc2xvdCA9IGRhdGEuc2xvdDtcbiAgfVxuICByZXR1cm4gY2xvbmVcbn1cblxuZnVuY3Rpb24gbWVyZ2VQcm9wcyAodG8sIGZyb20pIHtcbiAgZm9yICh2YXIga2V5IGluIGZyb20pIHtcbiAgICB0b1tjYW1lbGl6ZShrZXkpXSA9IGZyb21ba2V5XTtcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLy8gaW5saW5lIGhvb2tzIHRvIGJlIGludm9rZWQgb24gY29tcG9uZW50IFZOb2RlcyBkdXJpbmcgcGF0Y2hcbnZhciBjb21wb25lbnRWTm9kZUhvb2tzID0ge1xuICBpbml0OiBmdW5jdGlvbiBpbml0ICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgaWYgKFxuICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiZcbiAgICAgICF2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQgJiZcbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlXG4gICAgKSB7XG4gICAgICAvLyBrZXB0LWFsaXZlIGNvbXBvbmVudHMsIHRyZWF0IGFzIGEgcGF0Y2hcbiAgICAgIHZhciBtb3VudGVkTm9kZSA9IHZub2RlOyAvLyB3b3JrIGFyb3VuZCBmbG93XG4gICAgICBjb21wb25lbnRWTm9kZUhvb2tzLnByZXBhdGNoKG1vdW50ZWROb2RlLCBtb3VudGVkTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY3JlYXRlQ29tcG9uZW50SW5zdGFuY2VGb3JWbm9kZShcbiAgICAgICAgdm5vZGUsXG4gICAgICAgIGFjdGl2ZUluc3RhbmNlXG4gICAgICApO1xuICAgICAgY2hpbGQuJG1vdW50KGh5ZHJhdGluZyA/IHZub2RlLmVsbSA6IHVuZGVmaW5lZCwgaHlkcmF0aW5nKTtcbiAgICB9XG4gIH0sXG5cbiAgcHJlcGF0Y2g6IGZ1bmN0aW9uIHByZXBhdGNoIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBvbGRWbm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB1cGRhdGVDaGlsZENvbXBvbmVudChcbiAgICAgIGNoaWxkLFxuICAgICAgb3B0aW9ucy5wcm9wc0RhdGEsIC8vIHVwZGF0ZWQgcHJvcHNcbiAgICAgIG9wdGlvbnMubGlzdGVuZXJzLCAvLyB1cGRhdGVkIGxpc3RlbmVyc1xuICAgICAgdm5vZGUsIC8vIG5ldyBwYXJlbnQgdm5vZGVcbiAgICAgIG9wdGlvbnMuY2hpbGRyZW4gLy8gbmV3IGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydCAodm5vZGUpIHtcbiAgICB2YXIgY29udGV4dCA9IHZub2RlLmNvbnRleHQ7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkKSB7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnbW91bnRlZCcpO1xuICAgIH1cbiAgICBpZiAodm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjb250ZXh0Ll9pc01vdW50ZWQpIHtcbiAgICAgICAgLy8gdnVlLXJvdXRlciMxMjEyXG4gICAgICAgIC8vIER1cmluZyB1cGRhdGVzLCBhIGtlcHQtYWxpdmUgY29tcG9uZW50J3MgY2hpbGQgY29tcG9uZW50cyBtYXlcbiAgICAgICAgLy8gY2hhbmdlLCBzbyBkaXJlY3RseSB3YWxraW5nIHRoZSB0cmVlIGhlcmUgbWF5IGNhbGwgYWN0aXZhdGVkIGhvb2tzXG4gICAgICAgIC8vIG9uIGluY29ycmVjdCBjaGlsZHJlbi4gSW5zdGVhZCB3ZSBwdXNoIHRoZW0gaW50byBhIHF1ZXVlIHdoaWNoIHdpbGxcbiAgICAgICAgLy8gYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB3aG9sZSBwYXRjaCBwcm9jZXNzIGVuZGVkLlxuICAgICAgICBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3kgKHZub2RlKSB7XG4gICAgdmFyIGNvbXBvbmVudEluc3RhbmNlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgaWYgKCFjb21wb25lbnRJbnN0YW5jZS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghdm5vZGUuZGF0YS5rZWVwQWxpdmUpIHtcbiAgICAgICAgY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGhvb2tzVG9NZXJnZSA9IE9iamVjdC5rZXlzKGNvbXBvbmVudFZOb2RlSG9va3MpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQgKFxuICBDdG9yLFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgaWYgKGlzVW5kZWYoQ3RvcikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiYXNlQ3RvciA9IGNvbnRleHQuJG9wdGlvbnMuX2Jhc2U7XG5cbiAgLy8gcGxhaW4gb3B0aW9ucyBvYmplY3Q6IHR1cm4gaXQgaW50byBhIGNvbnN0cnVjdG9yXG4gIGlmIChpc09iamVjdChDdG9yKSkge1xuICAgIEN0b3IgPSBiYXNlQ3Rvci5leHRlbmQoQ3Rvcik7XG4gIH1cblxuICAvLyBpZiBhdCB0aGlzIHN0YWdlIGl0J3Mgbm90IGEgY29uc3RydWN0b3Igb3IgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnksXG4gIC8vIHJlamVjdC5cbiAgaWYgKHR5cGVvZiBDdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oKFwiSW52YWxpZCBDb21wb25lbnQgZGVmaW5pdGlvbjogXCIgKyAoU3RyaW5nKEN0b3IpKSksIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGFzeW5jIGNvbXBvbmVudFxuICB2YXIgYXN5bmNGYWN0b3J5O1xuICBpZiAoaXNVbmRlZihDdG9yLmNpZCkpIHtcbiAgICBhc3luY0ZhY3RvcnkgPSBDdG9yO1xuICAgIEN0b3IgPSByZXNvbHZlQXN5bmNDb21wb25lbnQoYXN5bmNGYWN0b3J5LCBiYXNlQ3Rvcik7XG4gICAgaWYgKEN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gcmV0dXJuIGEgcGxhY2Vob2xkZXIgbm9kZSBmb3IgYXN5bmMgY29tcG9uZW50LCB3aGljaCBpcyByZW5kZXJlZFxuICAgICAgLy8gYXMgYSBjb21tZW50IG5vZGUgYnV0IHByZXNlcnZlcyBhbGwgdGhlIHJhdyBpbmZvcm1hdGlvbiBmb3IgdGhlIG5vZGUuXG4gICAgICAvLyB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIGZvciBhc3luYyBzZXJ2ZXItcmVuZGVyaW5nIGFuZCBoeWRyYXRpb24uXG4gICAgICByZXR1cm4gY3JlYXRlQXN5bmNQbGFjZWhvbGRlcihcbiAgICAgICAgYXN5bmNGYWN0b3J5LFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdGFnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZGF0YSA9IGRhdGEgfHwge307XG5cbiAgLy8gcmVzb2x2ZSBjb25zdHJ1Y3RvciBvcHRpb25zIGluIGNhc2UgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZCBhZnRlclxuICAvLyBjb21wb25lbnQgY29uc3RydWN0b3IgY3JlYXRpb25cbiAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yKTtcblxuICAvLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgZGF0YSBpbnRvIHByb3BzICYgZXZlbnRzXG4gIGlmIChpc0RlZihkYXRhLm1vZGVsKSkge1xuICAgIHRyYW5zZm9ybU1vZGVsKEN0b3Iub3B0aW9ucywgZGF0YSk7XG4gIH1cblxuICAvLyBleHRyYWN0IHByb3BzXG4gIHZhciBwcm9wc0RhdGEgPSBleHRyYWN0UHJvcHNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHRhZyk7XG5cbiAgLy8gZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgaWYgKGlzVHJ1ZShDdG9yLm9wdGlvbnMuZnVuY3Rpb25hbCkpIHtcbiAgICByZXR1cm4gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudChDdG9yLCBwcm9wc0RhdGEsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKVxuICB9XG5cbiAgLy8gZXh0cmFjdCBsaXN0ZW5lcnMsIHNpbmNlIHRoZXNlIG5lZWRzIHRvIGJlIHRyZWF0ZWQgYXNcbiAgLy8gY2hpbGQgY29tcG9uZW50IGxpc3RlbmVycyBpbnN0ZWFkIG9mIERPTSBsaXN0ZW5lcnNcbiAgdmFyIGxpc3RlbmVycyA9IGRhdGEub247XG4gIC8vIHJlcGxhY2Ugd2l0aCBsaXN0ZW5lcnMgd2l0aCAubmF0aXZlIG1vZGlmaWVyXG4gIC8vIHNvIGl0IGdldHMgcHJvY2Vzc2VkIGR1cmluZyBwYXJlbnQgY29tcG9uZW50IHBhdGNoLlxuICBkYXRhLm9uID0gZGF0YS5uYXRpdmVPbjtcblxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5hYnN0cmFjdCkpIHtcbiAgICAvLyBhYnN0cmFjdCBjb21wb25lbnRzIGRvIG5vdCBrZWVwIGFueXRoaW5nXG4gICAgLy8gb3RoZXIgdGhhbiBwcm9wcyAmIGxpc3RlbmVycyAmIHNsb3RcblxuICAgIC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICB2YXIgc2xvdCA9IGRhdGEuc2xvdDtcbiAgICBkYXRhID0ge307XG4gICAgaWYgKHNsb3QpIHtcbiAgICAgIGRhdGEuc2xvdCA9IHNsb3Q7XG4gICAgfVxuICB9XG5cbiAgLy8gaW5zdGFsbCBjb21wb25lbnQgbWFuYWdlbWVudCBob29rcyBvbnRvIHRoZSBwbGFjZWhvbGRlciBub2RlXG4gIGluc3RhbGxDb21wb25lbnRIb29rcyhkYXRhKTtcblxuICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciB2bm9kZVxuICB2YXIgbmFtZSA9IEN0b3Iub3B0aW9ucy5uYW1lIHx8IHRhZztcbiAgdmFyIHZub2RlID0gbmV3IFZOb2RlKFxuICAgIChcInZ1ZS1jb21wb25lbnQtXCIgKyAoQ3Rvci5jaWQpICsgKG5hbWUgPyAoXCItXCIgKyBuYW1lKSA6ICcnKSksXG4gICAgZGF0YSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dCxcbiAgICB7IEN0b3I6IEN0b3IsIHByb3BzRGF0YTogcHJvcHNEYXRhLCBsaXN0ZW5lcnM6IGxpc3RlbmVycywgdGFnOiB0YWcsIGNoaWxkcmVuOiBjaGlsZHJlbiB9LFxuICAgIGFzeW5jRmFjdG9yeVxuICApO1xuXG4gIHJldHVybiB2bm9kZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlIChcbiAgdm5vZGUsIC8vIHdlIGtub3cgaXQncyBNb3VudGVkQ29tcG9uZW50Vk5vZGUgYnV0IGZsb3cgZG9lc24ndFxuICBwYXJlbnQgLy8gYWN0aXZlSW5zdGFuY2UgaW4gbGlmZWN5Y2xlIHN0YXRlXG4pIHtcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgX2lzQ29tcG9uZW50OiB0cnVlLFxuICAgIF9wYXJlbnRWbm9kZTogdm5vZGUsXG4gICAgcGFyZW50OiBwYXJlbnRcbiAgfTtcbiAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlIHJlbmRlciBmdW5jdGlvbnNcbiAgdmFyIGlubGluZVRlbXBsYXRlID0gdm5vZGUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtcbiAgaWYgKGlzRGVmKGlubGluZVRlbXBsYXRlKSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gaW5saW5lVGVtcGxhdGUucmVuZGVyO1xuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gaW5saW5lVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zO1xuICB9XG4gIHJldHVybiBuZXcgdm5vZGUuY29tcG9uZW50T3B0aW9ucy5DdG9yKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIGluc3RhbGxDb21wb25lbnRIb29rcyAoZGF0YSkge1xuICB2YXIgaG9va3MgPSBkYXRhLmhvb2sgfHwgKGRhdGEuaG9vayA9IHt9KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rc1RvTWVyZ2UubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gaG9va3NUb01lcmdlW2ldO1xuICAgIHZhciBleGlzdGluZyA9IGhvb2tzW2tleV07XG4gICAgdmFyIHRvTWVyZ2UgPSBjb21wb25lbnRWTm9kZUhvb2tzW2tleV07XG4gICAgaWYgKGV4aXN0aW5nICE9PSB0b01lcmdlICYmICEoZXhpc3RpbmcgJiYgZXhpc3RpbmcuX21lcmdlZCkpIHtcbiAgICAgIGhvb2tzW2tleV0gPSBleGlzdGluZyA/IG1lcmdlSG9vayQxKHRvTWVyZ2UsIGV4aXN0aW5nKSA6IHRvTWVyZ2U7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlSG9vayQxIChmMSwgZjIpIHtcbiAgdmFyIG1lcmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgLy8gZmxvdyBjb21wbGFpbnMgYWJvdXQgZXh0cmEgYXJncyB3aGljaCBpcyB3aHkgd2UgdXNlIGFueVxuICAgIGYxKGEsIGIpO1xuICAgIGYyKGEsIGIpO1xuICB9O1xuICBtZXJnZWQuX21lcmdlZCA9IHRydWU7XG4gIHJldHVybiBtZXJnZWRcbn1cblxuLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGluZm8gKHZhbHVlIGFuZCBjYWxsYmFjaykgaW50b1xuLy8gcHJvcCBhbmQgZXZlbnQgaGFuZGxlciByZXNwZWN0aXZlbHkuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Nb2RlbCAob3B0aW9ucywgZGF0YSkge1xuICB2YXIgcHJvcCA9IChvcHRpb25zLm1vZGVsICYmIG9wdGlvbnMubW9kZWwucHJvcCkgfHwgJ3ZhbHVlJztcbiAgdmFyIGV2ZW50ID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5ldmVudCkgfHwgJ2lucHV0J1xuICA7KGRhdGEuYXR0cnMgfHwgKGRhdGEuYXR0cnMgPSB7fSkpW3Byb3BdID0gZGF0YS5tb2RlbC52YWx1ZTtcbiAgdmFyIG9uID0gZGF0YS5vbiB8fCAoZGF0YS5vbiA9IHt9KTtcbiAgdmFyIGV4aXN0aW5nID0gb25bZXZlbnRdO1xuICB2YXIgY2FsbGJhY2sgPSBkYXRhLm1vZGVsLmNhbGxiYWNrO1xuICBpZiAoaXNEZWYoZXhpc3RpbmcpKSB7XG4gICAgaWYgKFxuICAgICAgQXJyYXkuaXNBcnJheShleGlzdGluZylcbiAgICAgICAgPyBleGlzdGluZy5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTFcbiAgICAgICAgOiBleGlzdGluZyAhPT0gY2FsbGJhY2tcbiAgICApIHtcbiAgICAgIG9uW2V2ZW50XSA9IFtjYWxsYmFja10uY29uY2F0KGV4aXN0aW5nKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb25bZXZlbnRdID0gY2FsbGJhY2s7XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBTSU1QTEVfTk9STUFMSVpFID0gMTtcbnZhciBBTFdBWVNfTk9STUFMSVpFID0gMjtcblxuLy8gd3JhcHBlciBmdW5jdGlvbiBmb3IgcHJvdmlkaW5nIGEgbW9yZSBmbGV4aWJsZSBpbnRlcmZhY2Vcbi8vIHdpdGhvdXQgZ2V0dGluZyB5ZWxsZWQgYXQgYnkgZmxvd1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlLFxuICBhbHdheXNOb3JtYWxpemVcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSB8fCBpc1ByaW1pdGl2ZShkYXRhKSkge1xuICAgIG5vcm1hbGl6YXRpb25UeXBlID0gY2hpbGRyZW47XG4gICAgY2hpbGRyZW4gPSBkYXRhO1xuICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKGlzVHJ1ZShhbHdheXNOb3JtYWxpemUpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBBTFdBWVNfTk9STUFMSVpFO1xuICB9XG4gIHJldHVybiBfY3JlYXRlRWxlbWVudChjb250ZXh0LCB0YWcsIGRhdGEsIGNoaWxkcmVuLCBub3JtYWxpemF0aW9uVHlwZSlcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQgKFxuICBjb250ZXh0LFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICBub3JtYWxpemF0aW9uVHlwZVxuKSB7XG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZigoZGF0YSkuX19vYl9fKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgIFwiQXZvaWQgdXNpbmcgb2JzZXJ2ZWQgZGF0YSBvYmplY3QgYXMgdm5vZGUgZGF0YTogXCIgKyAoSlNPTi5zdHJpbmdpZnkoZGF0YSkpICsgXCJcXG5cIiArXG4gICAgICAnQWx3YXlzIGNyZWF0ZSBmcmVzaCB2bm9kZSBkYXRhIG9iamVjdHMgaW4gZWFjaCByZW5kZXIhJyxcbiAgICAgIGNvbnRleHRcbiAgICApO1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxuICAvLyBvYmplY3Qgc3ludGF4IGluIHYtYmluZFxuICBpZiAoaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5pcykpIHtcbiAgICB0YWcgPSBkYXRhLmlzO1xuICB9XG4gIGlmICghdGFnKSB7XG4gICAgLy8gaW4gY2FzZSBvZiBjb21wb25lbnQgOmlzIHNldCB0byBmYWxzeSB2YWx1ZVxuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxuICAvLyB3YXJuIGFnYWluc3Qgbm9uLXByaW1pdGl2ZSBrZXlcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICBpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmtleSkgJiYgIWlzUHJpbWl0aXZlKGRhdGEua2V5KVxuICApIHtcbiAgICB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgdXNpbmcgbm9uLXByaW1pdGl2ZSB2YWx1ZSBhcyBrZXksICcgK1xuICAgICAgICAndXNlIHN0cmluZy9udW1iZXIgdmFsdWUgaW5zdGVhZC4nLFxuICAgICAgICBjb250ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfVxuICAvLyBzdXBwb3J0IHNpbmdsZSBmdW5jdGlvbiBjaGlsZHJlbiBhcyBkZWZhdWx0IHNjb3BlZCBzbG90XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgIHR5cGVvZiBjaGlsZHJlblswXSA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgICBkYXRhLnNjb3BlZFNsb3RzID0geyBkZWZhdWx0OiBjaGlsZHJlblswXSB9O1xuICAgIGNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKG5vcm1hbGl6YXRpb25UeXBlID09PSBBTFdBWVNfTk9STUFMSVpFKSB7XG4gICAgY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gIH0gZWxzZSBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IFNJTVBMRV9OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IHNpbXBsZU5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfVxuICB2YXIgdm5vZGUsIG5zO1xuICBpZiAodHlwZW9mIHRhZyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgQ3RvcjtcbiAgICBucyA9IChjb250ZXh0LiR2bm9kZSAmJiBjb250ZXh0LiR2bm9kZS5ucykgfHwgY29uZmlnLmdldFRhZ05hbWVzcGFjZSh0YWcpO1xuICAgIGlmIChjb25maWcuaXNSZXNlcnZlZFRhZyh0YWcpKSB7XG4gICAgICAvLyBwbGF0Zm9ybSBidWlsdC1pbiBlbGVtZW50c1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaXNEZWYoZGF0YSkgJiYgaXNEZWYoZGF0YS5uYXRpdmVPbikpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJUaGUgLm5hdGl2ZSBtb2RpZmllciBmb3Igdi1vbiBpcyBvbmx5IHZhbGlkIG9uIGNvbXBvbmVudHMgYnV0IGl0IHdhcyB1c2VkIG9uIDxcIiArIHRhZyArIFwiPi5cIiksXG4gICAgICAgICAgY29udGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgICAgIGNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSh0YWcpLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICgoIWRhdGEgfHwgIWRhdGEucHJlKSAmJiBpc0RlZihDdG9yID0gcmVzb2x2ZUFzc2V0KGNvbnRleHQuJG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSkpIHtcbiAgICAgIC8vIGNvbXBvbmVudFxuICAgICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQoQ3RvciwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4sIHRhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVua25vd24gb3IgdW5saXN0ZWQgbmFtZXNwYWNlZCBlbGVtZW50c1xuICAgICAgLy8gY2hlY2sgYXQgcnVudGltZSBiZWNhdXNlIGl0IG1heSBnZXQgYXNzaWduZWQgYSBuYW1lc3BhY2Ugd2hlbiBpdHNcbiAgICAgIC8vIHBhcmVudCBub3JtYWxpemVzIGNoaWxkcmVuXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgdGFnLCBkYXRhLCBjaGlsZHJlbixcbiAgICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGRpcmVjdCBjb21wb25lbnQgb3B0aW9ucyAvIGNvbnN0cnVjdG9yXG4gICAgdm5vZGUgPSBjcmVhdGVDb21wb25lbnQodGFnLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbik7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgcmV0dXJuIHZub2RlXG4gIH0gZWxzZSBpZiAoaXNEZWYodm5vZGUpKSB7XG4gICAgaWYgKGlzRGVmKG5zKSkgeyBhcHBseU5TKHZub2RlLCBucyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHsgcmVnaXN0ZXJEZWVwQmluZGluZ3MoZGF0YSk7IH1cbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlWTm9kZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlOUyAodm5vZGUsIG5zLCBmb3JjZSkge1xuICB2bm9kZS5ucyA9IG5zO1xuICBpZiAodm5vZGUudGFnID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAvLyB1c2UgZGVmYXVsdCBuYW1lc3BhY2UgaW5zaWRlIGZvcmVpZ25PYmplY3RcbiAgICBucyA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZSA9IHRydWU7XG4gIH1cbiAgaWYgKGlzRGVmKHZub2RlLmNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjaGlsZC50YWcpICYmIChcbiAgICAgICAgaXNVbmRlZihjaGlsZC5ucykgfHwgKGlzVHJ1ZShmb3JjZSkgJiYgY2hpbGQudGFnICE9PSAnc3ZnJykpKSB7XG4gICAgICAgIGFwcGx5TlMoY2hpbGQsIG5zLCBmb3JjZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIHJlZiAjNTMxOFxuLy8gbmVjZXNzYXJ5IHRvIGVuc3VyZSBwYXJlbnQgcmUtcmVuZGVyIHdoZW4gZGVlcCBiaW5kaW5ncyBsaWtlIDpzdHlsZSBhbmRcbi8vIDpjbGFzcyBhcmUgdXNlZCBvbiBzbG90IG5vZGVzXG5mdW5jdGlvbiByZWdpc3RlckRlZXBCaW5kaW5ncyAoZGF0YSkge1xuICBpZiAoaXNPYmplY3QoZGF0YS5zdHlsZSkpIHtcbiAgICB0cmF2ZXJzZShkYXRhLnN0eWxlKTtcbiAgfVxuICBpZiAoaXNPYmplY3QoZGF0YS5jbGFzcykpIHtcbiAgICB0cmF2ZXJzZShkYXRhLmNsYXNzKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFJlbmRlciAodm0pIHtcbiAgdm0uX3Zub2RlID0gbnVsbDsgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoaWxkIHRyZWVcbiAgdm0uX3N0YXRpY1RyZWVzID0gbnVsbDsgLy8gdi1vbmNlIGNhY2hlZCB0cmVlc1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICB2YXIgcGFyZW50Vm5vZGUgPSB2bS4kdm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTsgLy8gdGhlIHBsYWNlaG9sZGVyIG5vZGUgaW4gcGFyZW50IHRyZWVcbiAgdmFyIHJlbmRlckNvbnRleHQgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5jb250ZXh0O1xuICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMob3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sIHJlbmRlckNvbnRleHQpO1xuICB2bS4kc2NvcGVkU2xvdHMgPSBlbXB0eU9iamVjdDtcbiAgLy8gYmluZCB0aGUgY3JlYXRlRWxlbWVudCBmbiB0byB0aGlzIGluc3RhbmNlXG4gIC8vIHNvIHRoYXQgd2UgZ2V0IHByb3BlciByZW5kZXIgY29udGV4dCBpbnNpZGUgaXQuXG4gIC8vIGFyZ3Mgb3JkZXI6IHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlLCBhbHdheXNOb3JtYWxpemVcbiAgLy8gaW50ZXJuYWwgdmVyc2lvbiBpcyB1c2VkIGJ5IHJlbmRlciBmdW5jdGlvbnMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZXNcbiAgdm0uX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgZmFsc2UpOyB9O1xuICAvLyBub3JtYWxpemF0aW9uIGlzIGFsd2F5cyBhcHBsaWVkIGZvciB0aGUgcHVibGljIHZlcnNpb24sIHVzZWQgaW5cbiAgLy8gdXNlci13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMuXG4gIHZtLiRjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodm0sIGEsIGIsIGMsIGQsIHRydWUpOyB9O1xuXG4gIC8vICRhdHRycyAmICRsaXN0ZW5lcnMgYXJlIGV4cG9zZWQgZm9yIGVhc2llciBIT0MgY3JlYXRpb24uXG4gIC8vIHRoZXkgbmVlZCB0byBiZSByZWFjdGl2ZSBzbyB0aGF0IEhPQ3MgdXNpbmcgdGhlbSBhcmUgYWx3YXlzIHVwZGF0ZWRcbiAgdmFyIHBhcmVudERhdGEgPSBwYXJlbnRWbm9kZSAmJiBwYXJlbnRWbm9kZS5kYXRhO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgJiYgd2FybihcIiRhdHRycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGxpc3RlbmVycyBpcyByZWFkb25seS5cIiwgdm0pO1xuICAgIH0sIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGF0dHJzJywgcGFyZW50RGF0YSAmJiBwYXJlbnREYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0LCBudWxsLCB0cnVlKTtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRsaXN0ZW5lcnMnLCBvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICB9XG59XG5cbnZhciBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuXG5mdW5jdGlvbiByZW5kZXJNaXhpbiAoVnVlKSB7XG4gIC8vIGluc3RhbGwgcnVudGltZSBjb252ZW5pZW5jZSBoZWxwZXJzXG4gIGluc3RhbGxSZW5kZXJIZWxwZXJzKFZ1ZS5wcm90b3R5cGUpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIG5leHRUaWNrKGZuLCB0aGlzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3JlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciByZWYgPSB2bS4kb3B0aW9ucztcbiAgICB2YXIgcmVuZGVyID0gcmVmLnJlbmRlcjtcbiAgICB2YXIgX3BhcmVudFZub2RlID0gcmVmLl9wYXJlbnRWbm9kZTtcblxuICAgIGlmIChfcGFyZW50Vm5vZGUpIHtcbiAgICAgIHZtLiRzY29wZWRTbG90cyA9IG5vcm1hbGl6ZVNjb3BlZFNsb3RzKFxuICAgICAgICBfcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cyxcbiAgICAgICAgdm0uJHNsb3RzLFxuICAgICAgICB2bS4kc2NvcGVkU2xvdHNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHBhcmVudCB2bm9kZS4gdGhpcyBhbGxvd3MgcmVuZGVyIGZ1bmN0aW9ucyB0byBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHRoZSBkYXRhIG9uIHRoZSBwbGFjZWhvbGRlciBub2RlLlxuICAgIHZtLiR2bm9kZSA9IF9wYXJlbnRWbm9kZTtcbiAgICAvLyByZW5kZXIgc2VsZlxuICAgIHZhciB2bm9kZTtcbiAgICB0cnkge1xuICAgICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIG1haW50YWluIGEgc3RhY2sgYmVjYXVzZSBhbGwgcmVuZGVyIGZucyBhcmUgY2FsbGVkXG4gICAgICAvLyBzZXBhcmF0ZWx5IGZyb20gb25lIGFub3RoZXIuIE5lc3RlZCBjb21wb25lbnQncyByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHdoZW4gcGFyZW50IGNvbXBvbmVudCBpcyBwYXRjaGVkLlxuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gdm07XG4gICAgICB2bm9kZSA9IHJlbmRlci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlclwiKTtcbiAgICAgIC8vIHJldHVybiBlcnJvciByZW5kZXIgcmVzdWx0LFxuICAgICAgLy8gb3IgcHJldmlvdXMgdm5vZGUgdG8gcHJldmVudCByZW5kZXIgZXJyb3IgY2F1c2luZyBibGFuayBjb21wb25lbnRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZub2RlID0gdm0uJG9wdGlvbnMucmVuZGVyRXJyb3IuY2FsbCh2bS5fcmVuZGVyUHJveHksIHZtLiRjcmVhdGVFbGVtZW50LCBlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcInJlbmRlckVycm9yXCIpO1xuICAgICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZSA9IHZtLl92bm9kZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgY3VycmVudFJlbmRlcmluZ0luc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gaWYgdGhlIHJldHVybmVkIGFycmF5IGNvbnRhaW5zIG9ubHkgYSBzaW5nbGUgbm9kZSwgYWxsb3cgaXRcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkgJiYgdm5vZGUubGVuZ3RoID09PSAxKSB7XG4gICAgICB2bm9kZSA9IHZub2RlWzBdO1xuICAgIH1cbiAgICAvLyByZXR1cm4gZW1wdHkgdm5vZGUgaW4gY2FzZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIGVycm9yZWQgb3V0XG4gICAgaWYgKCEodm5vZGUgaW5zdGFuY2VvZiBWTm9kZSkpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ011bHRpcGxlIHJvb3Qgbm9kZXMgcmV0dXJuZWQgZnJvbSByZW5kZXIgZnVuY3Rpb24uIFJlbmRlciBmdW5jdGlvbiAnICtcbiAgICAgICAgICAnc2hvdWxkIHJldHVybiBhIHNpbmdsZSByb290IG5vZGUuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdm5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gICAgfVxuICAgIC8vIHNldCBwYXJlbnRcbiAgICB2bm9kZS5wYXJlbnQgPSBfcGFyZW50Vm5vZGU7XG4gICAgcmV0dXJuIHZub2RlXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBlbnN1cmVDdG9yIChjb21wLCBiYXNlKSB7XG4gIGlmIChcbiAgICBjb21wLl9fZXNNb2R1bGUgfHxcbiAgICAoaGFzU3ltYm9sICYmIGNvbXBbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ01vZHVsZScpXG4gICkge1xuICAgIGNvbXAgPSBjb21wLmRlZmF1bHQ7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KGNvbXApXG4gICAgPyBiYXNlLmV4dGVuZChjb21wKVxuICAgIDogY29tcFxufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyIChcbiAgZmFjdG9yeSxcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIHZhciBub2RlID0gY3JlYXRlRW1wdHlWTm9kZSgpO1xuICBub2RlLmFzeW5jRmFjdG9yeSA9IGZhY3Rvcnk7XG4gIG5vZGUuYXN5bmNNZXRhID0geyBkYXRhOiBkYXRhLCBjb250ZXh0OiBjb250ZXh0LCBjaGlsZHJlbjogY2hpbGRyZW4sIHRhZzogdGFnIH07XG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudCAoXG4gIGZhY3RvcnksXG4gIGJhc2VDdG9yXG4pIHtcbiAgaWYgKGlzVHJ1ZShmYWN0b3J5LmVycm9yKSAmJiBpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5lcnJvckNvbXBcbiAgfVxuXG4gIGlmIChpc0RlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgIHJldHVybiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cblxuICB2YXIgb3duZXIgPSBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2U7XG4gIGlmIChvd25lciAmJiBpc0RlZihmYWN0b3J5Lm93bmVycykgJiYgZmFjdG9yeS5vd25lcnMuaW5kZXhPZihvd25lcikgPT09IC0xKSB7XG4gICAgLy8gYWxyZWFkeSBwZW5kaW5nXG4gICAgZmFjdG9yeS5vd25lcnMucHVzaChvd25lcik7XG4gIH1cblxuICBpZiAoaXNUcnVlKGZhY3RvcnkubG9hZGluZykgJiYgaXNEZWYoZmFjdG9yeS5sb2FkaW5nQ29tcCkpIHtcbiAgICByZXR1cm4gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICB9XG5cbiAgaWYgKG93bmVyICYmICFpc0RlZihmYWN0b3J5Lm93bmVycykpIHtcbiAgICB2YXIgb3duZXJzID0gZmFjdG9yeS5vd25lcnMgPSBbb3duZXJdO1xuICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICB2YXIgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICB2YXIgdGltZXJUaW1lb3V0ID0gbnVsbFxuXG4gICAgOyhvd25lcikuJG9uKCdob29rOmRlc3Ryb3llZCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbW92ZShvd25lcnMsIG93bmVyKTsgfSk7XG5cbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBmdW5jdGlvbiAocmVuZGVyQ29tcGxldGVkKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG93bmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgKG93bmVyc1tpXSkuJGZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aW1lckxvYWRpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJMb2FkaW5nKTtcbiAgICAgICAgICB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lclRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJUaW1lb3V0KTtcbiAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgZmFjdG9yeS5yZXNvbHZlZCA9IGVuc3VyZUN0b3IocmVzLCBiYXNlQ3Rvcik7XG4gICAgICAvLyBpbnZva2UgY2FsbGJhY2tzIG9ubHkgaWYgdGhpcyBpcyBub3QgYSBzeW5jaHJvbm91cyByZXNvbHZlXG4gICAgICAvLyAoYXN5bmMgcmVzb2x2ZXMgYXJlIHNoaW1tZWQgYXMgc3luY2hyb25vdXMgZHVyaW5nIFNTUilcbiAgICAgIGlmICghc3luYykge1xuICAgICAgICBmb3JjZVJlbmRlcih0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG93bmVycy5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlamVjdCA9IG9uY2UoZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogXCIgKyAoU3RyaW5nKGZhY3RvcnkpKSArXG4gICAgICAgIChyZWFzb24gPyAoXCJcXG5SZWFzb246IFwiICsgcmVhc29uKSA6ICcnKVxuICAgICAgKTtcbiAgICAgIGlmIChpc0RlZihmYWN0b3J5LmVycm9yQ29tcCkpIHtcbiAgICAgICAgZmFjdG9yeS5lcnJvciA9IHRydWU7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlcyA9IGZhY3RvcnkocmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgIGlmIChpc09iamVjdChyZXMpKSB7XG4gICAgICBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgLy8gKCkgPT4gUHJvbWlzZVxuICAgICAgICBpZiAoaXNVbmRlZihmYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKHJlcy5jb21wb25lbnQpKSB7XG4gICAgICAgIHJlcy5jb21wb25lbnQudGhlbihyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgICAgIGlmIChpc0RlZihyZXMuZXJyb3IpKSB7XG4gICAgICAgICAgZmFjdG9yeS5lcnJvckNvbXAgPSBlbnN1cmVDdG9yKHJlcy5lcnJvciwgYmFzZUN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5sb2FkaW5nKSkge1xuICAgICAgICAgIGZhY3RvcnkubG9hZGluZ0NvbXAgPSBlbnN1cmVDdG9yKHJlcy5sb2FkaW5nLCBiYXNlQ3Rvcik7XG4gICAgICAgICAgaWYgKHJlcy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgICAgZmFjdG9yeS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpICYmIGlzVW5kZWYoZmFjdG9yeS5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVzLmRlbGF5IHx8IDIwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy50aW1lb3V0KSkge1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgICAgICAgICAgICA/IChcInRpbWVvdXQgKFwiICsgKHJlcy50aW1lb3V0KSArIFwibXMpXCIpXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCByZXMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzeW5jID0gZmFsc2U7XG4gICAgLy8gcmV0dXJuIGluIGNhc2UgcmVzb2x2ZWQgc3luY2hyb25vdXNseVxuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdcbiAgICAgID8gZmFjdG9yeS5sb2FkaW5nQ29tcFxuICAgICAgOiBmYWN0b3J5LnJlc29sdmVkXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGlzQXN5bmNQbGFjZWhvbGRlciAobm9kZSkge1xuICByZXR1cm4gbm9kZS5pc0NvbW1lbnQgJiYgbm9kZS5hc3luY0ZhY3Rvcnlcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGdldEZpcnN0Q29tcG9uZW50Q2hpbGQgKGNoaWxkcmVuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgKGlzRGVmKGMuY29tcG9uZW50T3B0aW9ucykgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpKSkge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFdmVudHMgKHZtKSB7XG4gIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2bS5faGFzSG9va0V2ZW50ID0gZmFsc2U7XG4gIC8vIGluaXQgcGFyZW50IGF0dGFjaGVkIGV2ZW50c1xuICB2YXIgbGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgaWYgKGxpc3RlbmVycykge1xuICAgIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzKTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0O1xuXG5mdW5jdGlvbiBhZGQgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9uKGV2ZW50LCBmbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQxIChldmVudCwgZm4pIHtcbiAgdGFyZ2V0LiRvZmYoZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIgKGV2ZW50LCBmbikge1xuICB2YXIgX3RhcmdldCA9IHRhcmdldDtcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICBfdGFyZ2V0LiRvZmYoZXZlbnQsIG9uY2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzIChcbiAgdm0sXG4gIGxpc3RlbmVycyxcbiAgb2xkTGlzdGVuZXJzXG4pIHtcbiAgdGFyZ2V0ID0gdm07XG4gIHVwZGF0ZUxpc3RlbmVycyhsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyB8fCB7fSwgYWRkLCByZW1vdmUkMSwgY3JlYXRlT25jZUhhbmRsZXIsIHZtKTtcbiAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBldmVudHNNaXhpbiAoVnVlKSB7XG4gIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZtLiRvbihldmVudFtpXSwgZm4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcbiAgICAgIC8vIG9wdGltaXplIGhvb2s6ZXZlbnQgY29zdCBieSB1c2luZyBhIGJvb2xlYW4gZmxhZyBtYXJrZWQgYXQgcmVnaXN0cmF0aW9uXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgaGFzaCBsb29rdXBcbiAgICAgIGlmIChob29rUkUudGVzdChldmVudCkpIHtcbiAgICAgICAgdm0uX2hhc0hvb2tFdmVudCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9uY2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBmdW5jdGlvbiBvbiAoKSB7XG4gICAgICB2bS4kb2ZmKGV2ZW50LCBvbik7XG4gICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgb24uZm4gPSBmbjtcbiAgICB2bS4kb24oZXZlbnQsIG9uKTtcbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhbGxcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIC8vIGFycmF5IG9mIGV2ZW50c1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSQxID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSQxIDwgbDsgaSQxKyspIHtcbiAgICAgICAgdm0uJG9mZihldmVudFtpJDFdLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFjYnMpIHtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICBpZiAoIWZuKSB7XG4gICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgaGFuZGxlclxuICAgIHZhciBjYjtcbiAgICB2YXIgaSA9IGNicy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY2IgPSBjYnNbaV07XG4gICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGxvd2VyQ2FzZUV2ZW50ID0gZXZlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChsb3dlckNhc2VFdmVudCAhPT0gZXZlbnQgJiYgdm0uX2V2ZW50c1tsb3dlckNhc2VFdmVudF0pIHtcbiAgICAgICAgdGlwKFxuICAgICAgICAgIFwiRXZlbnQgXFxcIlwiICsgbG93ZXJDYXNlRXZlbnQgKyBcIlxcXCIgaXMgZW1pdHRlZCBpbiBjb21wb25lbnQgXCIgK1xuICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIiBidXQgdGhlIGhhbmRsZXIgaXMgcmVnaXN0ZXJlZCBmb3IgXFxcIlwiICsgZXZlbnQgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICBcIk5vdGUgdGhhdCBIVE1MIGF0dHJpYnV0ZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmUgYW5kIHlvdSBjYW5ub3QgdXNlIFwiICtcbiAgICAgICAgICBcInYtb24gdG8gbGlzdGVuIHRvIGNhbWVsQ2FzZSBldmVudHMgd2hlbiB1c2luZyBpbi1ET00gdGVtcGxhdGVzLiBcIiArXG4gICAgICAgICAgXCJZb3Ugc2hvdWxkIHByb2JhYmx5IHVzZSBcXFwiXCIgKyAoaHlwaGVuYXRlKGV2ZW50KSkgKyBcIlxcXCIgaW5zdGVhZCBvZiBcXFwiXCIgKyBldmVudCArIFwiXFxcIi5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XG4gICAgaWYgKGNicykge1xuICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XG4gICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICAgIHZhciBpbmZvID0gXCJldmVudCBoYW5kbGVyIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIlwiO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGNic1tpXSwgdm0sIGFyZ3MsIHZtLCBpbmZvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgYWN0aXZlSW5zdGFuY2UgPSBudWxsO1xudmFyIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmVJbnN0YW5jZSh2bSkge1xuICB2YXIgcHJldkFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2U7XG4gIGFjdGl2ZUluc3RhbmNlID0gdm07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgYWN0aXZlSW5zdGFuY2UgPSBwcmV2QWN0aXZlSW5zdGFuY2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdExpZmVjeWNsZSAodm0pIHtcbiAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcblxuICAvLyBsb2NhdGUgZmlyc3Qgbm9uLWFic3RyYWN0IHBhcmVudFxuICB2YXIgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIGlmIChwYXJlbnQgJiYgIW9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICB3aGlsZSAocGFyZW50LiRvcHRpb25zLmFic3RyYWN0ICYmIHBhcmVudC4kcGFyZW50KSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICB9XG4gICAgcGFyZW50LiRjaGlsZHJlbi5wdXNoKHZtKTtcbiAgfVxuXG4gIHZtLiRwYXJlbnQgPSBwYXJlbnQ7XG4gIHZtLiRyb290ID0gcGFyZW50ID8gcGFyZW50LiRyb290IDogdm07XG5cbiAgdm0uJGNoaWxkcmVuID0gW107XG4gIHZtLiRyZWZzID0ge307XG5cbiAgdm0uX3dhdGNoZXIgPSBudWxsO1xuICB2bS5faW5hY3RpdmUgPSBudWxsO1xuICB2bS5fZGlyZWN0SW5hY3RpdmUgPSBmYWxzZTtcbiAgdm0uX2lzTW91bnRlZCA9IGZhbHNlO1xuICB2bS5faXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHByZXZFbCA9IHZtLiRlbDtcbiAgICB2YXIgcHJldlZub2RlID0gdm0uX3Zub2RlO1xuICAgIHZhciByZXN0b3JlQWN0aXZlSW5zdGFuY2UgPSBzZXRBY3RpdmVJbnN0YW5jZSh2bSk7XG4gICAgdm0uX3Zub2RlID0gdm5vZGU7XG4gICAgLy8gVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gaXMgaW5qZWN0ZWQgaW4gZW50cnkgcG9pbnRzXG4gICAgLy8gYmFzZWQgb24gdGhlIHJlbmRlcmluZyBiYWNrZW5kIHVzZWQuXG4gICAgaWYgKCFwcmV2Vm5vZGUpIHtcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18odm0uJGVsLCB2bm9kZSwgaHlkcmF0aW5nLCBmYWxzZSAvKiByZW1vdmVPbmx5ICovKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBkYXRlc1xuICAgICAgdm0uJGVsID0gdm0uX19wYXRjaF9fKHByZXZWbm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICByZXN0b3JlQWN0aXZlSW5zdGFuY2UoKTtcbiAgICAvLyB1cGRhdGUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAocHJldkVsKSB7XG4gICAgICBwcmV2RWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gdm07XG4gICAgfVxuICAgIC8vIGlmIHBhcmVudCBpcyBhbiBIT0MsIHVwZGF0ZSBpdHMgJGVsIGFzIHdlbGxcbiAgICBpZiAodm0uJHZub2RlICYmIHZtLiRwYXJlbnQgJiYgdm0uJHZub2RlID09PSB2bS4kcGFyZW50Ll92bm9kZSkge1xuICAgICAgdm0uJHBhcmVudC4kZWwgPSB2bS4kZWw7XG4gICAgfVxuICAgIC8vIHVwZGF0ZWQgaG9vayBpcyBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlciB0byBlbnN1cmUgdGhhdCBjaGlsZHJlbiBhcmVcbiAgICAvLyB1cGRhdGVkIGluIGEgcGFyZW50J3MgdXBkYXRlZCBob29rLlxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci51cGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh2bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlRGVzdHJveScpO1xuICAgIHZtLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudFxuICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdm0uJG9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICAgIHJlbW92ZShwYXJlbnQuJGNoaWxkcmVuLCB2bSk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIHdhdGNoZXJzXG4gICAgaWYgKHZtLl93YXRjaGVyKSB7XG4gICAgICB2bS5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgICB2YXIgaSA9IHZtLl93YXRjaGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdm0uX3dhdGNoZXJzW2ldLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gICAgaWYgKHZtLl9kYXRhLl9fb2JfXykge1xuICAgICAgdm0uX2RhdGEuX19vYl9fLnZtQ291bnQtLTtcbiAgICB9XG4gICAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gICAgdm0uX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAvLyBpbnZva2UgZGVzdHJveSBob29rcyBvbiBjdXJyZW50IHJlbmRlcmVkIHRyZWVcbiAgICB2bS5fX3BhdGNoX18odm0uX3Zub2RlLCBudWxsKTtcbiAgICAvLyBmaXJlIGRlc3Ryb3llZCBob29rXG4gICAgY2FsbEhvb2sodm0sICdkZXN0cm95ZWQnKTtcbiAgICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICAgIHZtLiRvZmYoKTtcbiAgICAvLyByZW1vdmUgX192dWVfXyByZWZlcmVuY2VcbiAgICBpZiAodm0uJGVsKSB7XG4gICAgICB2bS4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuICAgIC8vIHJlbGVhc2UgY2lyY3VsYXIgcmVmZXJlbmNlICgjNjc1OSlcbiAgICBpZiAodm0uJHZub2RlKSB7XG4gICAgICB2bS4kdm5vZGUucGFyZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50IChcbiAgdm0sXG4gIGVsLFxuICBoeWRyYXRpbmdcbikge1xuICB2bS4kZWwgPSBlbDtcbiAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVZOb2RlO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICgodm0uJG9wdGlvbnMudGVtcGxhdGUgJiYgdm0uJG9wdGlvbnMudGVtcGxhdGUuY2hhckF0KDApICE9PSAnIycpIHx8XG4gICAgICAgIHZtLiRvcHRpb25zLmVsIHx8IGVsKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ1lvdSBhcmUgdXNpbmcgdGhlIHJ1bnRpbWUtb25seSBidWlsZCBvZiBWdWUgd2hlcmUgdGhlIHRlbXBsYXRlICcgK1xuICAgICAgICAgICdjb21waWxlciBpcyBub3QgYXZhaWxhYmxlLiBFaXRoZXIgcHJlLWNvbXBpbGUgdGhlIHRlbXBsYXRlcyBpbnRvICcgK1xuICAgICAgICAgICdyZW5kZXIgZnVuY3Rpb25zLCBvciB1c2UgdGhlIGNvbXBpbGVyLWluY2x1ZGVkIGJ1aWxkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgJ0ZhaWxlZCB0byBtb3VudCBjb21wb25lbnQ6IHRlbXBsYXRlIG9yIHJlbmRlciBmdW5jdGlvbiBub3QgZGVmaW5lZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhbGxIb29rKHZtLCAnYmVmb3JlTW91bnQnKTtcblxuICB2YXIgdXBkYXRlQ29tcG9uZW50O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmFtZSA9IHZtLl9uYW1lO1xuICAgICAgdmFyIGlkID0gdm0uX3VpZDtcbiAgICAgIHZhciBzdGFydFRhZyA9IFwidnVlLXBlcmYtc3RhcnQ6XCIgKyBpZDtcbiAgICAgIHZhciBlbmRUYWcgPSBcInZ1ZS1wZXJmLWVuZDpcIiArIGlkO1xuXG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICAgIHZhciB2bm9kZSA9IHZtLl9yZW5kZXIoKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgbmFtZSArIFwiIHJlbmRlclwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG5cbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgdm0uX3VwZGF0ZSh2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgbmFtZSArIFwiIHBhdGNoXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZtLl91cGRhdGUodm0uX3JlbmRlcigpLCBoeWRyYXRpbmcpO1xuICAgIH07XG4gIH1cblxuICAvLyB3ZSBzZXQgdGhpcyB0byB2bS5fd2F0Y2hlciBpbnNpZGUgdGhlIHdhdGNoZXIncyBjb25zdHJ1Y3RvclxuICAvLyBzaW5jZSB0aGUgd2F0Y2hlcidzIGluaXRpYWwgcGF0Y2ggbWF5IGNhbGwgJGZvcmNlVXBkYXRlIChlLmcuIGluc2lkZSBjaGlsZFxuICAvLyBjb21wb25lbnQncyBtb3VudGVkIGhvb2spLCB3aGljaCByZWxpZXMgb24gdm0uX3dhdGNoZXIgYmVpbmcgYWxyZWFkeSBkZWZpbmVkXG4gIG5ldyBXYXRjaGVyKHZtLCB1cGRhdGVDb21wb25lbnQsIG5vb3AsIHtcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSAoKSB7XG4gICAgICBpZiAodm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gIGh5ZHJhdGluZyA9IGZhbHNlO1xuXG4gIC8vIG1hbnVhbGx5IG1vdW50ZWQgaW5zdGFuY2UsIGNhbGwgbW91bnRlZCBvbiBzZWxmXG4gIC8vIG1vdW50ZWQgaXMgY2FsbGVkIGZvciByZW5kZXItY3JlYXRlZCBjaGlsZCBjb21wb25lbnRzIGluIGl0cyBpbnNlcnRlZCBob29rXG4gIGlmICh2bS4kdm5vZGUgPT0gbnVsbCkge1xuICAgIHZtLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGNhbGxIb29rKHZtLCAnbW91bnRlZCcpO1xuICB9XG4gIHJldHVybiB2bVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDaGlsZENvbXBvbmVudCAoXG4gIHZtLFxuICBwcm9wc0RhdGEsXG4gIGxpc3RlbmVycyxcbiAgcGFyZW50Vm5vZGUsXG4gIHJlbmRlckNoaWxkcmVuXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSB0cnVlO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgY29tcG9uZW50IGhhcyBzbG90IGNoaWxkcmVuXG4gIC8vIHdlIG5lZWQgdG8gZG8gdGhpcyBiZWZvcmUgb3ZlcndyaXRpbmcgJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLlxuXG4gIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBkeW5hbWljIHNjb3BlZFNsb3RzIChoYW5kLXdyaXR0ZW4gb3IgY29tcGlsZWQgYnV0IHdpdGhcbiAgLy8gZHluYW1pYyBzbG90IG5hbWVzKS4gU3RhdGljIHNjb3BlZCBzbG90cyBjb21waWxlZCBmcm9tIHRlbXBsYXRlIGhhcyB0aGVcbiAgLy8gXCIkc3RhYmxlXCIgbWFya2VyLlxuICB2YXIgbmV3U2NvcGVkU2xvdHMgPSBwYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzO1xuICB2YXIgb2xkU2NvcGVkU2xvdHMgPSB2bS4kc2NvcGVkU2xvdHM7XG4gIHZhciBoYXNEeW5hbWljU2NvcGVkU2xvdCA9ICEhKFxuICAgIChuZXdTY29wZWRTbG90cyAmJiAhbmV3U2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAob2xkU2NvcGVkU2xvdHMgIT09IGVtcHR5T2JqZWN0ICYmICFvbGRTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChuZXdTY29wZWRTbG90cyAmJiB2bS4kc2NvcGVkU2xvdHMuJGtleSAhPT0gbmV3U2NvcGVkU2xvdHMuJGtleSlcbiAgKTtcblxuICAvLyBBbnkgc3RhdGljIHNsb3QgY2hpbGRyZW4gZnJvbSB0aGUgcGFyZW50IG1heSBoYXZlIGNoYW5nZWQgZHVyaW5nIHBhcmVudCdzXG4gIC8vIHVwZGF0ZS4gRHluYW1pYyBzY29wZWQgc2xvdHMgbWF5IGFsc28gaGF2ZSBjaGFuZ2VkLiBJbiBzdWNoIGNhc2VzLCBhIGZvcmNlZFxuICAvLyB1cGRhdGUgaXMgbmVjZXNzYXJ5IHRvIGVuc3VyZSBjb3JyZWN0bmVzcy5cbiAgdmFyIG5lZWRzRm9yY2VVcGRhdGUgPSAhIShcbiAgICByZW5kZXJDaGlsZHJlbiB8fCAgICAgICAgICAgICAgIC8vIGhhcyBuZXcgc3RhdGljIHNsb3RzXG4gICAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuIHx8ICAvLyBoYXMgb2xkIHN0YXRpYyBzbG90c1xuICAgIGhhc0R5bmFtaWNTY29wZWRTbG90XG4gICk7XG5cbiAgdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG4gIHZtLiR2bm9kZSA9IHBhcmVudFZub2RlOyAvLyB1cGRhdGUgdm0ncyBwbGFjZWhvbGRlciBub2RlIHdpdGhvdXQgcmUtcmVuZGVyXG5cbiAgaWYgKHZtLl92bm9kZSkgeyAvLyB1cGRhdGUgY2hpbGQgdHJlZSdzIHBhcmVudFxuICAgIHZtLl92bm9kZS5wYXJlbnQgPSBwYXJlbnRWbm9kZTtcbiAgfVxuICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gPSByZW5kZXJDaGlsZHJlbjtcblxuICAvLyB1cGRhdGUgJGF0dHJzIGFuZCAkbGlzdGVuZXJzIGhhc2hcbiAgLy8gdGhlc2UgYXJlIGFsc28gcmVhY3RpdmUgc28gdGhleSBtYXkgdHJpZ2dlciBjaGlsZCB1cGRhdGUgaWYgdGhlIGNoaWxkXG4gIC8vIHVzZWQgdGhlbSBkdXJpbmcgcmVuZGVyXG4gIHZtLiRhdHRycyA9IHBhcmVudFZub2RlLmRhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3Q7XG4gIHZtLiRsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMgfHwgZW1wdHlPYmplY3Q7XG5cbiAgLy8gdXBkYXRlIHByb3BzXG4gIGlmIChwcm9wc0RhdGEgJiYgdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIHZhciBwcm9wcyA9IHZtLl9wcm9wcztcbiAgICB2YXIgcHJvcEtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgdmFyIHByb3BPcHRpb25zID0gdm0uJG9wdGlvbnMucHJvcHM7IC8vIHd0ZiBmbG93P1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICB9XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIC8vIGtlZXAgYSBjb3B5IG9mIHJhdyBwcm9wc0RhdGFcbiAgICB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgPSBwcm9wc0RhdGE7XG4gIH1cblxuICAvLyB1cGRhdGUgbGlzdGVuZXJzXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycyB8fCBlbXB0eU9iamVjdDtcbiAgdmFyIG9sZExpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMpO1xuXG4gIC8vIHJlc29sdmUgc2xvdHMgKyBmb3JjZSB1cGRhdGUgaWYgaGFzIGNoaWxkcmVuXG4gIGlmIChuZWVkc0ZvcmNlVXBkYXRlKSB7XG4gICAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKHJlbmRlckNoaWxkcmVuLCBwYXJlbnRWbm9kZS5jb250ZXh0KTtcbiAgICB2bS4kZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJbkluYWN0aXZlVHJlZSAodm0pIHtcbiAgd2hpbGUgKHZtICYmICh2bSA9IHZtLiRwYXJlbnQpKSB7XG4gICAgaWYgKHZtLl9pbmFjdGl2ZSkgeyByZXR1cm4gdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgaWYgKGRpcmVjdCkge1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09PSBudWxsKSB7XG4gICAgdm0uX2luYWN0aXZlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgaWYgKGRpcmVjdCkge1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IHRydWU7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgaWYgKCF2bS5faW5hY3RpdmUpIHtcbiAgICB2bS5faW5hY3RpdmUgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdkZWFjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxIb29rICh2bSwgaG9vaykge1xuICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gIHB1c2hUYXJnZXQoKTtcbiAgdmFyIGhhbmRsZXJzID0gdm0uJG9wdGlvbnNbaG9va107XG4gIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgaWYgKGhhbmRsZXJzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgbnVsbCwgdm0sIGluZm8pO1xuICAgIH1cbiAgfVxuICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rKTtcbiAgfVxuICBwb3BUYXJnZXQoKTtcbn1cblxuLyogICovXG5cbnZhciBNQVhfVVBEQVRFX0NPVU5UID0gMTAwO1xuXG52YXIgcXVldWUgPSBbXTtcbnZhciBhY3RpdmF0ZWRDaGlsZHJlbiA9IFtdO1xudmFyIGhhcyA9IHt9O1xudmFyIGNpcmN1bGFyID0ge307XG52YXIgd2FpdGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgaW5kZXggPSAwO1xuXG4vKipcbiAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cbiAqL1xuZnVuY3Rpb24gcmVzZXRTY2hlZHVsZXJTdGF0ZSAoKSB7XG4gIGluZGV4ID0gcXVldWUubGVuZ3RoID0gYWN0aXZhdGVkQ2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgaGFzID0ge307XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2lyY3VsYXIgPSB7fTtcbiAgfVxuICB3YWl0aW5nID0gZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gQXN5bmMgZWRnZSBjYXNlICM2NTY2IHJlcXVpcmVzIHNhdmluZyB0aGUgdGltZXN0YW1wIHdoZW4gZXZlbnQgbGlzdGVuZXJzIGFyZVxuLy8gYXR0YWNoZWQuIEhvd2V2ZXIsIGNhbGxpbmcgcGVyZm9ybWFuY2Uubm93KCkgaGFzIGEgcGVyZiBvdmVyaGVhZCBlc3BlY2lhbGx5XG4vLyBpZiB0aGUgcGFnZSBoYXMgdGhvdXNhbmRzIG9mIGV2ZW50IGxpc3RlbmVycy4gSW5zdGVhZCwgd2UgdGFrZSBhIHRpbWVzdGFtcFxuLy8gZXZlcnkgdGltZSB0aGUgc2NoZWR1bGVyIGZsdXNoZXMgYW5kIHVzZSB0aGF0IGZvciBhbGwgZXZlbnQgbGlzdGVuZXJzXG4vLyBhdHRhY2hlZCBkdXJpbmcgdGhhdCBmbHVzaC5cbnZhciBjdXJyZW50Rmx1c2hUaW1lc3RhbXAgPSAwO1xuXG4vLyBBc3luYyBlZGdlIGNhc2UgZml4IHJlcXVpcmVzIHN0b3JpbmcgYW4gZXZlbnQgbGlzdGVuZXIncyBhdHRhY2ggdGltZXN0YW1wLlxudmFyIGdldE5vdyA9IERhdGUubm93O1xuXG4vLyBEZXRlcm1pbmUgd2hhdCBldmVudCB0aW1lc3RhbXAgdGhlIGJyb3dzZXIgaXMgdXNpbmcuIEFubm95aW5nbHksIHRoZVxuLy8gdGltZXN0YW1wIGNhbiBlaXRoZXIgYmUgaGktcmVzIChyZWxhdGl2ZSB0byBwYWdlIGxvYWQpIG9yIGxvdy1yZXNcbi8vIChyZWxhdGl2ZSB0byBVTklYIGVwb2NoKSwgc28gaW4gb3JkZXIgdG8gY29tcGFyZSB0aW1lIHdlIGhhdmUgdG8gdXNlIHRoZVxuLy8gc2FtZSB0aW1lc3RhbXAgdHlwZSB3aGVuIHNhdmluZyB0aGUgZmx1c2ggdGltZXN0YW1wLlxuLy8gQWxsIElFIHZlcnNpb25zIHVzZSBsb3ctcmVzIGV2ZW50IHRpbWVzdGFtcHMsIGFuZCBoYXZlIHByb2JsZW1hdGljIGNsb2NrXG4vLyBpbXBsZW1lbnRhdGlvbnMgKCM5NjMyKVxuaWYgKGluQnJvd3NlciAmJiAhaXNJRSkge1xuICB2YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIGlmIChcbiAgICBwZXJmb3JtYW5jZSAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicgJiZcbiAgICBnZXROb3coKSA+IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpLnRpbWVTdGFtcFxuICApIHtcbiAgICAvLyBpZiB0aGUgZXZlbnQgdGltZXN0YW1wLCBhbHRob3VnaCBldmFsdWF0ZWQgQUZURVIgdGhlIERhdGUubm93KCksIGlzXG4gICAgLy8gc21hbGxlciB0aGFuIGl0LCBpdCBtZWFucyB0aGUgZXZlbnQgaXMgdXNpbmcgYSBoaS1yZXMgdGltZXN0YW1wLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHVzZSB0aGUgaGktcmVzIHZlcnNpb24gZm9yIGV2ZW50IGxpc3RlbmVyIHRpbWVzdGFtcHMgYXNcbiAgICAvLyB3ZWxsLlxuICAgIGdldE5vdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpOyB9O1xuICB9XG59XG5cbi8qKlxuICogRmx1c2ggYm90aCBxdWV1ZXMgYW5kIHJ1biB0aGUgd2F0Y2hlcnMuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoU2NoZWR1bGVyUXVldWUgKCkge1xuICBjdXJyZW50Rmx1c2hUaW1lc3RhbXAgPSBnZXROb3coKTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICB2YXIgd2F0Y2hlciwgaWQ7XG5cbiAgLy8gU29ydCBxdWV1ZSBiZWZvcmUgZmx1c2guXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0OlxuICAvLyAxLiBDb21wb25lbnRzIGFyZSB1cGRhdGVkIGZyb20gcGFyZW50IHRvIGNoaWxkLiAoYmVjYXVzZSBwYXJlbnQgaXMgYWx3YXlzXG4gIC8vICAgIGNyZWF0ZWQgYmVmb3JlIHRoZSBjaGlsZClcbiAgLy8gMi4gQSBjb21wb25lbnQncyB1c2VyIHdhdGNoZXJzIGFyZSBydW4gYmVmb3JlIGl0cyByZW5kZXIgd2F0Y2hlciAoYmVjYXVzZVxuICAvLyAgICB1c2VyIHdhdGNoZXJzIGFyZSBjcmVhdGVkIGJlZm9yZSB0aGUgcmVuZGVyIHdhdGNoZXIpXG4gIC8vIDMuIElmIGEgY29tcG9uZW50IGlzIGRlc3Ryb3llZCBkdXJpbmcgYSBwYXJlbnQgY29tcG9uZW50J3Mgd2F0Y2hlciBydW4sXG4gIC8vICAgIGl0cyB3YXRjaGVycyBjYW4gYmUgc2tpcHBlZC5cbiAgcXVldWUuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuXG4gIC8vIGRvIG5vdCBjYWNoZSBsZW5ndGggYmVjYXVzZSBtb3JlIHdhdGNoZXJzIG1pZ2h0IGJlIHB1c2hlZFxuICAvLyBhcyB3ZSBydW4gZXhpc3Rpbmcgd2F0Y2hlcnNcbiAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcXVldWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgd2F0Y2hlciA9IHF1ZXVlW2luZGV4XTtcbiAgICBpZiAod2F0Y2hlci5iZWZvcmUpIHtcbiAgICAgIHdhdGNoZXIuYmVmb3JlKCk7XG4gICAgfVxuICAgIGlkID0gd2F0Y2hlci5pZDtcbiAgICBoYXNbaWRdID0gbnVsbDtcbiAgICB3YXRjaGVyLnJ1bigpO1xuICAgIC8vIGluIGRldiBidWlsZCwgY2hlY2sgYW5kIHN0b3AgY2lyY3VsYXIgdXBkYXRlcy5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBoYXNbaWRdICE9IG51bGwpIHtcbiAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxO1xuICAgICAgaWYgKGNpcmN1bGFyW2lkXSA+IE1BWF9VUERBVEVfQ09VTlQpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IG1heSBoYXZlIGFuIGluZmluaXRlIHVwZGF0ZSBsb29wICcgKyAoXG4gICAgICAgICAgICB3YXRjaGVyLnVzZXJcbiAgICAgICAgICAgICAgPyAoXCJpbiB3YXRjaGVyIHdpdGggZXhwcmVzc2lvbiBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKVxuICAgICAgICAgICAgICA6IFwiaW4gYSBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9uLlwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3YXRjaGVyLnZtXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8ga2VlcCBjb3BpZXMgb2YgcG9zdCBxdWV1ZXMgYmVmb3JlIHJlc2V0dGluZyBzdGF0ZVxuICB2YXIgYWN0aXZhdGVkUXVldWUgPSBhY3RpdmF0ZWRDaGlsZHJlbi5zbGljZSgpO1xuICB2YXIgdXBkYXRlZFF1ZXVlID0gcXVldWUuc2xpY2UoKTtcblxuICByZXNldFNjaGVkdWxlclN0YXRlKCk7XG5cbiAgLy8gY2FsbCBjb21wb25lbnQgdXBkYXRlZCBhbmQgYWN0aXZhdGVkIGhvb2tzXG4gIGNhbGxBY3RpdmF0ZWRIb29rcyhhY3RpdmF0ZWRRdWV1ZSk7XG4gIGNhbGxVcGRhdGVkSG9va3ModXBkYXRlZFF1ZXVlKTtcblxuICAvLyBkZXZ0b29sIGhvb2tcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChkZXZ0b29scyAmJiBjb25maWcuZGV2dG9vbHMpIHtcbiAgICBkZXZ0b29scy5lbWl0KCdmbHVzaCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxVcGRhdGVkSG9va3MgKHF1ZXVlKSB7XG4gIHZhciBpID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIHdhdGNoZXIgPSBxdWV1ZVtpXTtcbiAgICB2YXIgdm0gPSB3YXRjaGVyLnZtO1xuICAgIGlmICh2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlciAmJiB2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFF1ZXVlIGEga2VwdC1hbGl2ZSBjb21wb25lbnQgdGhhdCB3YXMgYWN0aXZhdGVkIGR1cmluZyBwYXRjaC5cbiAqIFRoZSBxdWV1ZSB3aWxsIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgZW50aXJlIHRyZWUgaGFzIGJlZW4gcGF0Y2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVBY3RpdmF0ZWRDb21wb25lbnQgKHZtKSB7XG4gIC8vIHNldHRpbmcgX2luYWN0aXZlIHRvIGZhbHNlIGhlcmUgc28gdGhhdCBhIHJlbmRlciBmdW5jdGlvbiBjYW5cbiAgLy8gcmVseSBvbiBjaGVja2luZyB3aGV0aGVyIGl0J3MgaW4gYW4gaW5hY3RpdmUgdHJlZSAoZS5nLiByb3V0ZXItdmlldylcbiAgdm0uX2luYWN0aXZlID0gZmFsc2U7XG4gIGFjdGl2YXRlZENoaWxkcmVuLnB1c2godm0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQWN0aXZhdGVkSG9va3MgKHF1ZXVlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZVtpXS5faW5hY3RpdmUgPSB0cnVlO1xuICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQocXVldWVbaV0sIHRydWUgLyogdHJ1ZSAqLyk7XG4gIH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICogSm9icyB3aXRoIGR1cGxpY2F0ZSBJRHMgd2lsbCBiZSBza2lwcGVkIHVubGVzcyBpdCdzXG4gKiBwdXNoZWQgd2hlbiB0aGUgcXVldWUgaXMgYmVpbmcgZmx1c2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVXYXRjaGVyICh3YXRjaGVyKSB7XG4gIHZhciBpZCA9IHdhdGNoZXIuaWQ7XG4gIGlmIChoYXNbaWRdID09IG51bGwpIHtcbiAgICBoYXNbaWRdID0gdHJ1ZTtcbiAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICBxdWV1ZS5wdXNoKHdhdGNoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBhbHJlYWR5IGZsdXNoaW5nLCBzcGxpY2UgdGhlIHdhdGNoZXIgYmFzZWQgb24gaXRzIGlkXG4gICAgICAvLyBpZiBhbHJlYWR5IHBhc3QgaXRzIGlkLCBpdCB3aWxsIGJlIHJ1biBuZXh0IGltbWVkaWF0ZWx5LlxuICAgICAgdmFyIGkgPSBxdWV1ZS5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKGkgPiBpbmRleCAmJiBxdWV1ZVtpXS5pZCA+IHdhdGNoZXIuaWQpIHtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgICAgcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB3YXRjaGVyKTtcbiAgICB9XG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgICAgICBmbHVzaFNjaGVkdWxlclF1ZXVlKCk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbmV4dFRpY2soZmx1c2hTY2hlZHVsZXJRdWV1ZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5cblxudmFyIHVpZCQyID0gMDtcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqL1xudmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcbiAgdm0sXG4gIGV4cE9yRm4sXG4gIGNiLFxuICBvcHRpb25zLFxuICBpc1JlbmRlcldhdGNoZXJcbikge1xuICB0aGlzLnZtID0gdm07XG4gIGlmIChpc1JlbmRlcldhdGNoZXIpIHtcbiAgICB2bS5fd2F0Y2hlciA9IHRoaXM7XG4gIH1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcyk7XG4gIC8vIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZXAgPSAhIW9wdGlvbnMuZGVlcDtcbiAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcbiAgICB0aGlzLmxhenkgPSAhIW9wdGlvbnMubGF6eTtcbiAgICB0aGlzLnN5bmMgPSAhIW9wdGlvbnMuc3luYztcbiAgICB0aGlzLmJlZm9yZSA9IG9wdGlvbnMuYmVmb3JlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVlcCA9IHRoaXMudXNlciA9IHRoaXMubGF6eSA9IHRoaXMuc3luYyA9IGZhbHNlO1xuICB9XG4gIHRoaXMuY2IgPSBjYjtcbiAgdGhpcy5pZCA9ICsrdWlkJDI7IC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5OyAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBbXTtcbiAgdGhpcy5uZXdEZXBzID0gW107XG4gIHRoaXMuZGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLmV4cHJlc3Npb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBleHBPckZuLnRvU3RyaW5nKClcbiAgICA6ICcnO1xuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcbiAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gbm9vcDtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgd2F0Y2hpbmcgcGF0aDogXFxcIlwiICsgZXhwT3JGbiArIFwiXFxcIiBcIiArXG4gICAgICAgICdXYXRjaGVyIG9ubHkgYWNjZXB0cyBzaW1wbGUgZG90LWRlbGltaXRlZCBwYXRocy4gJyArXG4gICAgICAgICdGb3IgZnVsbCBjb250cm9sLCB1c2UgYSBmdW5jdGlvbiBpbnN0ZWFkLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KCk7XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0ICgpIHtcbiAgcHVzaFRhcmdldCh0aGlzKTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgdm0gPSB0aGlzLnZtO1xuICB0cnkge1xuICAgIHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh2bSwgdm0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIChcImdldHRlciBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gICAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gICAgaWYgKHRoaXMuZGVlcCkge1xuICAgICAgdHJhdmVyc2UodmFsdWUpO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgICB0aGlzLmNsZWFudXBEZXBzKCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59O1xuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIGFkZERlcCAoZGVwKSB7XG4gIHZhciBpZCA9IGRlcC5pZDtcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKTtcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApO1xuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuY2xlYW51cERlcHMgPSBmdW5jdGlvbiBjbGVhbnVwRGVwcyAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBkZXAgPSB0aGlzLmRlcHNbaV07XG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRtcCA9IHRoaXMuZGVwSWRzO1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzO1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKTtcbiAgdG1wID0gdGhpcy5kZXBzO1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHM7XG4gIHRoaXMubmV3RGVwcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDA7XG59O1xuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAgIHRoaXMucnVuKCk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVXYXRjaGVyKHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFNjaGVkdWxlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQuXG4gICAgICBpc09iamVjdCh2YWx1ZSkgfHxcbiAgICAgIHRoaXMuZGVlcFxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHRoaXMudm0sIChcImNhbGxiYWNrIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiBldmFsdWF0ZSAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpO1xuICB0aGlzLmRpcnR5ID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJzY3JpYmVyIGxpc3QuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gdGVhcmRvd24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpO1xuICAgIH1cbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufTtcblxuLyogICovXG5cbnZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBub29wLFxuICBzZXQ6IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIHByb3h5ICh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXNbc291cmNlS2V5XVtrZXldXG4gIH07XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgdGhpc1tzb3VyY2VLZXldW2tleV0gPSB2YWw7XG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXTtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucztcbiAgaWYgKG9wdHMucHJvcHMpIHsgaW5pdFByb3BzKHZtLCBvcHRzLnByb3BzKTsgfVxuICBpZiAob3B0cy5tZXRob2RzKSB7IGluaXRNZXRob2RzKHZtLCBvcHRzLm1ldGhvZHMpOyB9XG4gIGlmIChvcHRzLmRhdGEpIHtcbiAgICBpbml0RGF0YSh2bSk7XG4gIH0gZWxzZSB7XG4gICAgb2JzZXJ2ZSh2bS5fZGF0YSA9IHt9LCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xuICB9XG4gIGlmIChvcHRzLmNvbXB1dGVkKSB7IGluaXRDb21wdXRlZCh2bSwgb3B0cy5jb21wdXRlZCk7IH1cbiAgaWYgKG9wdHMud2F0Y2ggJiYgb3B0cy53YXRjaCAhPT0gbmF0aXZlV2F0Y2gpIHtcbiAgICBpbml0V2F0Y2godm0sIG9wdHMud2F0Y2gpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9wcyAodm0sIHByb3BzT3B0aW9ucykge1xuICB2YXIgcHJvcHNEYXRhID0gdm0uJG9wdGlvbnMucHJvcHNEYXRhIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bS5fcHJvcHMgPSB7fTtcbiAgLy8gY2FjaGUgcHJvcCBrZXlzIHNvIHRoYXQgZnV0dXJlIHByb3BzIHVwZGF0ZXMgY2FuIGl0ZXJhdGUgdXNpbmcgQXJyYXlcbiAgLy8gaW5zdGVhZCBvZiBkeW5hbWljIG9iamVjdCBrZXkgZW51bWVyYXRpb24uXG4gIHZhciBrZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzID0gW107XG4gIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcbiAgLy8gcm9vdCBpbnN0YW5jZSBwcm9wcyBzaG91bGQgYmUgY29udmVydGVkXG4gIGlmICghaXNSb290KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgfVxuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIHZhciB2YWx1ZSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BzT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChpc1Jlc2VydmVkQXR0cmlidXRlKGh5cGhlbmF0ZWRLZXkpIHx8XG4gICAgICAgICAgY29uZmlnLmlzUmVzZXJ2ZWRBdHRyKGh5cGhlbmF0ZWRLZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiXFxcIlwiICsgaHlwaGVuYXRlZEtleSArIFwiXFxcIiBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBhbmQgY2Fubm90IGJlIHVzZWQgYXMgY29tcG9uZW50IHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzUm9vdCAmJiAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYSBwcm9wIGRpcmVjdGx5IHNpbmNlIHRoZSB2YWx1ZSB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHBhcmVudCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJJbnN0ZWFkLCB1c2UgYSBkYXRhIG9yIGNvbXB1dGVkIHByb3BlcnR5IGJhc2VkIG9uIHRoZSBwcm9wJ3MgXCIgK1xuICAgICAgICAgICAgXCJ2YWx1ZS4gUHJvcCBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgLy8gc3RhdGljIHByb3BzIGFyZSBhbHJlYWR5IHByb3hpZWQgb24gdGhlIGNvbXBvbmVudCdzIHByb3RvdHlwZVxuICAgIC8vIGR1cmluZyBWdWUuZXh0ZW5kKCkuIFdlIG9ubHkgbmVlZCB0byBwcm94eSBwcm9wcyBkZWZpbmVkIGF0XG4gICAgLy8gaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9wcm9wc1wiLCBrZXkpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHNPcHRpb25zKSBsb29wKCBrZXkgKTtcbiAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xufVxuXG5mdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgdmFyIGRhdGEgPSB2bS4kb3B0aW9ucy5kYXRhO1xuICBkYXRhID0gdm0uX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZ2V0RGF0YShkYXRhLCB2bSlcbiAgICA6IGRhdGEgfHwge307XG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnZGF0YSBmdW5jdGlvbnMgc2hvdWxkIHJldHVybiBhbiBvYmplY3Q6XFxuJyArXG4gICAgICAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvY29tcG9uZW50cy5odG1sI2RhdGEtTXVzdC1CZS1hLUZ1bmN0aW9uJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gIHZhciBwcm9wcyA9IHZtLiRvcHRpb25zLnByb3BzO1xuICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKG1ldGhvZHMgJiYgaGFzT3duKG1ldGhvZHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGRhdGEgcHJvcGVydHkuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJUaGUgZGF0YSBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWNsYXJlZCBhcyBhIHByb3AuIFwiICtcbiAgICAgICAgXCJVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuXCIsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgcHJveHkodm0sIFwiX2RhdGFcIiwga2V5KTtcbiAgICB9XG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIG9ic2VydmUoZGF0YSwgdHJ1ZSAvKiBhc1Jvb3REYXRhICovKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YSAoZGF0YSwgdm0pIHtcbiAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGRhdGEgZ2V0dGVyc1xuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRhdGEuY2FsbCh2bSwgdm0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgXCJkYXRhKClcIik7XG4gICAgcmV0dXJuIHt9XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxudmFyIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnMgPSB7IGxhenk6IHRydWUgfTtcblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkICh2bSwgY29tcHV0ZWQpIHtcbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIHZhciB3YXRjaGVycyA9IHZtLl9jb21wdXRlZFdhdGNoZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLy8gY29tcHV0ZWQgcHJvcGVydGllcyBhcmUganVzdCBnZXR0ZXJzIGR1cmluZyBTU1JcbiAgdmFyIGlzU1NSID0gaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV07XG4gICAgdmFyIGdldHRlciA9IHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nID8gdXNlckRlZiA6IHVzZXJEZWYuZ2V0O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGdldHRlciA9PSBudWxsKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJHZXR0ZXIgaXMgbWlzc2luZyBmb3IgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiKSxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUikge1xuICAgICAgLy8gY3JlYXRlIGludGVybmFsIHdhdGNoZXIgZm9yIHRoZSBjb21wdXRlZCBwcm9wZXJ0eS5cbiAgICAgIHdhdGNoZXJzW2tleV0gPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgdm0sXG4gICAgICAgIGdldHRlciB8fCBub29wLFxuICAgICAgICBub29wLFxuICAgICAgICBjb21wdXRlZFdhdGNoZXJPcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbXBvbmVudC1kZWZpbmVkIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGVcbiAgICAvLyBjb21wb25lbnQgcHJvdG90eXBlLiBXZSBvbmx5IG5lZWQgdG8gZGVmaW5lIGNvbXB1dGVkIHByb3BlcnRpZXMgZGVmaW5lZFxuICAgIC8vIGF0IGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBkZWZpbmVDb21wdXRlZCh2bSwga2V5LCB1c2VyRGVmKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChrZXkgaW4gdm0uJGRhdGEpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBkYXRhLlwiKSwgdm0pO1xuICAgICAgfSBlbHNlIGlmICh2bS4kb3B0aW9ucy5wcm9wcyAmJiBrZXkgaW4gdm0uJG9wdGlvbnMucHJvcHMpIHtcbiAgICAgICAgd2FybigoXCJUaGUgY29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVmaW5lZCBhcyBhIHByb3AuXCIpLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkIChcbiAgdGFyZ2V0LFxuICBrZXksXG4gIHVzZXJEZWZcbikge1xuICB2YXIgc2hvdWxkQ2FjaGUgPSAhaXNTZXJ2ZXJSZW5kZXJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHNob3VsZENhY2hlXG4gICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmKTtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gbm9vcDtcbiAgfSBlbHNlIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgID8gc2hvdWxkQ2FjaGUgJiYgdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICAgIDogY3JlYXRlR2V0dGVySW52b2tlcih1c2VyRGVmLmdldClcbiAgICAgIDogbm9vcDtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gdXNlckRlZi5zZXQgfHwgbm9vcDtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9PT0gbm9vcCkge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAoXCJDb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIGFzc2lnbmVkIHRvIGJ1dCBpdCBoYXMgbm8gc2V0dGVyLlwiKSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIgKGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIgKCkge1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fY29tcHV0ZWRXYXRjaGVycyAmJiB0aGlzLl9jb21wdXRlZFdhdGNoZXJzW2tleV07XG4gICAgaWYgKHdhdGNoZXIpIHtcbiAgICAgIGlmICh3YXRjaGVyLmRpcnR5KSB7XG4gICAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIHdhdGNoZXIuZGVwZW5kKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHZXR0ZXJJbnZva2VyKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgcmV0dXJuIGZuLmNhbGwodGhpcywgdGhpcylcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TWV0aG9kcyAodm0sIG1ldGhvZHMpIHtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kc1trZXldICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyB0eXBlIFxcXCJcIiArICh0eXBlb2YgbWV0aG9kc1trZXldKSArIFwiXFxcIiBpbiB0aGUgY29tcG9uZW50IGRlZmluaXRpb24uIFwiICtcbiAgICAgICAgICBcIkRpZCB5b3UgcmVmZXJlbmNlIHRoZSBmdW5jdGlvbiBjb3JyZWN0bHk/XCIsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcyAmJiBoYXNPd24ocHJvcHMsIGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoKGtleSBpbiB2bSkgJiYgaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgXCJNZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGNvbmZsaWN0cyB3aXRoIGFuIGV4aXN0aW5nIFZ1ZSBpbnN0YW5jZSBtZXRob2QuIFwiICtcbiAgICAgICAgICBcIkF2b2lkIGRlZmluaW5nIGNvbXBvbmVudCBtZXRob2RzIHRoYXQgc3RhcnQgd2l0aCBfIG9yICQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdm1ba2V5XSA9IHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicgPyBub29wIDogYmluZChtZXRob2RzW2tleV0sIHZtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0V2F0Y2ggKHZtLCB3YXRjaCkge1xuICBmb3IgKHZhciBrZXkgaW4gd2F0Y2gpIHtcbiAgICB2YXIgaGFuZGxlciA9IHdhdGNoW2tleV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjcmVhdGVXYXRjaGVyKHZtLCBrZXksIGhhbmRsZXJbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVXYXRjaGVyKHZtLCBrZXksIGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXYXRjaGVyIChcbiAgdm0sXG4gIGV4cE9yRm4sXG4gIGhhbmRsZXIsXG4gIG9wdGlvbnNcbikge1xuICBpZiAoaXNQbGFpbk9iamVjdChoYW5kbGVyKSkge1xuICAgIG9wdGlvbnMgPSBoYW5kbGVyO1xuICAgIGhhbmRsZXIgPSBoYW5kbGVyLmhhbmRsZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgIGhhbmRsZXIgPSB2bVtoYW5kbGVyXTtcbiAgfVxuICByZXR1cm4gdm0uJHdhdGNoKGV4cE9yRm4sIGhhbmRsZXIsIG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIHN0YXRlTWl4aW4gKFZ1ZSkge1xuICAvLyBmbG93IHNvbWVob3cgaGFzIHByb2JsZW1zIHdpdGggZGlyZWN0bHkgZGVjbGFyZWQgZGVmaW5pdGlvbiBvYmplY3RcbiAgLy8gd2hlbiB1c2luZyBPYmplY3QuZGVmaW5lUHJvcGVydHksIHNvIHdlIGhhdmUgdG8gcHJvY2VkdXJhbGx5IGJ1aWxkIHVwXG4gIC8vIHRoZSBvYmplY3QgaGVyZS5cbiAgdmFyIGRhdGFEZWYgPSB7fTtcbiAgZGF0YURlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhIH07XG4gIHZhciBwcm9wc0RlZiA9IHt9O1xuICBwcm9wc0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wcm9wcyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGRhdGFEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0F2b2lkIHJlcGxhY2luZyBpbnN0YW5jZSByb290ICRkYXRhLiAnICtcbiAgICAgICAgJ1VzZSBuZXN0ZWQgZGF0YSBwcm9wZXJ0aWVzIGluc3RlYWQuJyxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9O1xuICAgIHByb3BzRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXCIkcHJvcHMgaXMgcmVhZG9ubHkuXCIsIHRoaXMpO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckZGF0YScsIGRhdGFEZWYpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRwcm9wcycsIHByb3BzRGVmKTtcblxuICBWdWUucHJvdG90eXBlLiRzZXQgPSBzZXQ7XG4gIFZ1ZS5wcm90b3R5cGUuJGRlbGV0ZSA9IGRlbDtcblxuICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChcbiAgICBleHBPckZuLFxuICAgIGNiLFxuICAgIG9wdGlvbnNcbiAgKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAoaXNQbGFpbk9iamVjdChjYikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucylcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy51c2VyID0gdHJ1ZTtcbiAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKHZtLCB3YXRjaGVyLnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGVycm9yLCB2bSwgKFwiY2FsbGJhY2sgZm9yIGltbWVkaWF0ZSB3YXRjaGVyIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbiAoKSB7XG4gICAgICB3YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICB9O1xufVxuXG4vKiAgKi9cblxudmFyIHVpZCQzID0gMDtcblxuZnVuY3Rpb24gaW5pdE1peGluIChWdWUpIHtcbiAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICAvLyBhIHVpZFxuICAgIHZtLl91aWQgPSB1aWQkMysrO1xuXG4gICAgdmFyIHN0YXJ0VGFnLCBlbmRUYWc7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICAgIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArICh2bS5fdWlkKTtcbiAgICAgIGVuZFRhZyA9IFwidnVlLXBlcmYtZW5kOlwiICsgKHZtLl91aWQpO1xuICAgICAgbWFyayhzdGFydFRhZyk7XG4gICAgfVxuXG4gICAgLy8gYSBmbGFnIHRvIGF2b2lkIHRoaXMgYmVpbmcgb2JzZXJ2ZWRcbiAgICB2bS5faXNWdWUgPSB0cnVlO1xuICAgIC8vIG1lcmdlIG9wdGlvbnNcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLl9pc0NvbXBvbmVudCkge1xuICAgICAgLy8gb3B0aW1pemUgaW50ZXJuYWwgY29tcG9uZW50IGluc3RhbnRpYXRpb25cbiAgICAgIC8vIHNpbmNlIGR5bmFtaWMgb3B0aW9ucyBtZXJnaW5nIGlzIHByZXR0eSBzbG93LCBhbmQgbm9uZSBvZiB0aGVcbiAgICAgIC8vIGludGVybmFsIGNvbXBvbmVudCBvcHRpb25zIG5lZWRzIHNwZWNpYWwgdHJlYXRtZW50LlxuICAgICAgaW5pdEludGVybmFsQ29tcG9uZW50KHZtLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICAgIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnModm0uY29uc3RydWN0b3IpLFxuICAgICAgICBvcHRpb25zIHx8IHt9LFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaW5pdFByb3h5KHZtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gdm07XG4gICAgfVxuICAgIC8vIGV4cG9zZSByZWFsIHNlbGZcbiAgICB2bS5fc2VsZiA9IHZtO1xuICAgIGluaXRMaWZlY3ljbGUodm0pO1xuICAgIGluaXRFdmVudHModm0pO1xuICAgIGluaXRSZW5kZXIodm0pO1xuICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlQ3JlYXRlJyk7XG4gICAgaW5pdEluamVjdGlvbnModm0pOyAvLyByZXNvbHZlIGluamVjdGlvbnMgYmVmb3JlIGRhdGEvcHJvcHNcbiAgICBpbml0U3RhdGUodm0pO1xuICAgIGluaXRQcm92aWRlKHZtKTsgLy8gcmVzb2x2ZSBwcm92aWRlIGFmdGVyIGRhdGEvcHJvcHNcbiAgICBjYWxsSG9vayh2bSwgJ2NyZWF0ZWQnKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5wZXJmb3JtYW5jZSAmJiBtYXJrKSB7XG4gICAgICB2bS5fbmFtZSA9IGZvcm1hdENvbXBvbmVudE5hbWUodm0sIGZhbHNlKTtcbiAgICAgIG1hcmsoZW5kVGFnKTtcbiAgICAgIG1lYXN1cmUoKFwidnVlIFwiICsgKHZtLl9uYW1lKSArIFwiIGluaXRcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH1cblxuICAgIGlmICh2bS4kb3B0aW9ucy5lbCkge1xuICAgICAgdm0uJG1vdW50KHZtLiRvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRJbnRlcm5hbENvbXBvbmVudCAodm0sIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUodm0uY29uc3RydWN0b3Iub3B0aW9ucyk7XG4gIC8vIGRvaW5nIHRoaXMgYmVjYXVzZSBpdCdzIGZhc3RlciB0aGFuIGR5bmFtaWMgZW51bWVyYXRpb24uXG4gIHZhciBwYXJlbnRWbm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICBvcHRzLnBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuICBvcHRzLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuXG4gIHZhciB2bm9kZUNvbXBvbmVudE9wdGlvbnMgPSBwYXJlbnRWbm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBvcHRzLnByb3BzRGF0YSA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGE7XG4gIG9wdHMuX3BhcmVudExpc3RlbmVycyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5saXN0ZW5lcnM7XG4gIG9wdHMuX3JlbmRlckNoaWxkcmVuID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmNoaWxkcmVuO1xuICBvcHRzLl9jb21wb25lbnRUYWcgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMudGFnO1xuXG4gIGlmIChvcHRpb25zLnJlbmRlcikge1xuICAgIG9wdHMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXI7XG4gICAgb3B0cy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZucztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zIChDdG9yKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICBpZiAoQ3Rvci5zdXBlcikge1xuICAgIHZhciBzdXBlck9wdGlvbnMgPSByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3Iuc3VwZXIpO1xuICAgIHZhciBjYWNoZWRTdXBlck9wdGlvbnMgPSBDdG9yLnN1cGVyT3B0aW9ucztcbiAgICBpZiAoc3VwZXJPcHRpb25zICE9PSBjYWNoZWRTdXBlck9wdGlvbnMpIHtcbiAgICAgIC8vIHN1cGVyIG9wdGlvbiBjaGFuZ2VkLFxuICAgICAgLy8gbmVlZCB0byByZXNvbHZlIG5ldyBvcHRpb25zLlxuICAgICAgQ3Rvci5zdXBlck9wdGlvbnMgPSBzdXBlck9wdGlvbnM7XG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGxhdGUtbW9kaWZpZWQvYXR0YWNoZWQgb3B0aW9ucyAoIzQ5NzYpXG4gICAgICB2YXIgbW9kaWZpZWRPcHRpb25zID0gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyhDdG9yKTtcbiAgICAgIC8vIHVwZGF0ZSBiYXNlIGV4dGVuZCBvcHRpb25zXG4gICAgICBpZiAobW9kaWZpZWRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZChDdG9yLmV4dGVuZE9wdGlvbnMsIG1vZGlmaWVkT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gQ3Rvci5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHN1cGVyT3B0aW9ucywgQ3Rvci5leHRlbmRPcHRpb25zKTtcbiAgICAgIGlmIChvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW29wdGlvbnMubmFtZV0gPSBDdG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTW9kaWZpZWRPcHRpb25zIChDdG9yKSB7XG4gIHZhciBtb2RpZmllZDtcbiAgdmFyIGxhdGVzdCA9IEN0b3Iub3B0aW9ucztcbiAgdmFyIHNlYWxlZCA9IEN0b3Iuc2VhbGVkT3B0aW9ucztcbiAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgIGlmIChsYXRlc3Rba2V5XSAhPT0gc2VhbGVkW2tleV0pIHtcbiAgICAgIGlmICghbW9kaWZpZWQpIHsgbW9kaWZpZWQgPSB7fTsgfVxuICAgICAgbW9kaWZpZWRba2V5XSA9IGxhdGVzdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kaWZpZWRcbn1cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgISh0aGlzIGluc3RhbmNlb2YgVnVlKVxuICApIHtcbiAgICB3YXJuKCdWdWUgaXMgYSBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkJyk7XG4gIH1cbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuaW5pdE1peGluKFZ1ZSk7XG5zdGF0ZU1peGluKFZ1ZSk7XG5ldmVudHNNaXhpbihWdWUpO1xubGlmZWN5Y2xlTWl4aW4oVnVlKTtcbnJlbmRlck1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0VXNlIChWdWUpIHtcbiAgVnVlLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbGVkUGx1Z2lucyA9ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zIHx8ICh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zID0gW10pKTtcbiAgICBpZiAoaW5zdGFsbGVkUGx1Z2lucy5pbmRleE9mKHBsdWdpbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBhZGRpdGlvbmFsIHBhcmFtZXRlcnNcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBwbHVnaW4uaW5zdGFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaW5zdGFsbGVkUGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRNaXhpbiQxIChWdWUpIHtcbiAgVnVlLm1peGluID0gZnVuY3Rpb24gKG1peGluKSB7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgbWl4aW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0RXh0ZW5kIChWdWUpIHtcbiAgLyoqXG4gICAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICAgKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gICAqIGNvbnN0cnVjdG9yc1wiIGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlIGFuZCBjYWNoZSB0aGVtLlxuICAgKi9cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKi9cbiAgVnVlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gICAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge307XG4gICAgdmFyIFN1cGVyID0gdGhpcztcbiAgICB2YXIgU3VwZXJJZCA9IFN1cGVyLmNpZDtcbiAgICB2YXIgY2FjaGVkQ3RvcnMgPSBleHRlbmRPcHRpb25zLl9DdG9yIHx8IChleHRlbmRPcHRpb25zLl9DdG9yID0ge30pO1xuICAgIGlmIChjYWNoZWRDdG9yc1tTdXBlcklkXSkge1xuICAgICAgcmV0dXJuIGNhY2hlZEN0b3JzW1N1cGVySWRdXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUpIHtcbiAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgU3ViID0gZnVuY3Rpb24gVnVlQ29tcG9uZW50IChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9pbml0KG9wdGlvbnMpO1xuICAgIH07XG4gICAgU3ViLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3VwZXIucHJvdG90eXBlKTtcbiAgICBTdWIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ViO1xuICAgIFN1Yi5jaWQgPSBjaWQrKztcbiAgICBTdWIub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgIFN1cGVyLm9wdGlvbnMsXG4gICAgICBleHRlbmRPcHRpb25zXG4gICAgKTtcbiAgICBTdWJbJ3N1cGVyJ10gPSBTdXBlcjtcblxuICAgIC8vIEZvciBwcm9wcyBhbmQgY29tcHV0ZWQgcHJvcGVydGllcywgd2UgZGVmaW5lIHRoZSBwcm94eSBnZXR0ZXJzIG9uXG4gICAgLy8gdGhlIFZ1ZSBpbnN0YW5jZXMgYXQgZXh0ZW5zaW9uIHRpbWUsIG9uIHRoZSBleHRlbmRlZCBwcm90b3R5cGUuIFRoaXNcbiAgICAvLyBhdm9pZHMgT2JqZWN0LmRlZmluZVByb3BlcnR5IGNhbGxzIGZvciBlYWNoIGluc3RhbmNlIGNyZWF0ZWQuXG4gICAgaWYgKFN1Yi5vcHRpb25zLnByb3BzKSB7XG4gICAgICBpbml0UHJvcHMkMShTdWIpO1xuICAgIH1cbiAgICBpZiAoU3ViLm9wdGlvbnMuY29tcHV0ZWQpIHtcbiAgICAgIGluaXRDb21wdXRlZCQxKFN1Yik7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb24vbWl4aW4vcGx1Z2luIHVzYWdlXG4gICAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZDtcbiAgICBTdWIubWl4aW4gPSBTdXBlci5taXhpbjtcbiAgICBTdWIudXNlID0gU3VwZXIudXNlO1xuXG4gICAgLy8gY3JlYXRlIGFzc2V0IHJlZ2lzdGVycywgc28gZXh0ZW5kZWQgY2xhc3Nlc1xuICAgIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXTtcbiAgICB9KTtcbiAgICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIFN1Yi5vcHRpb25zLmNvbXBvbmVudHNbbmFtZV0gPSBTdWI7XG4gICAgfVxuXG4gICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgc3VwZXIgb3B0aW9ucyBhdCBleHRlbnNpb24gdGltZS5cbiAgICAvLyBsYXRlciBhdCBpbnN0YW50aWF0aW9uIHdlIGNhbiBjaGVjayBpZiBTdXBlcidzIG9wdGlvbnMgaGF2ZVxuICAgIC8vIGJlZW4gdXBkYXRlZC5cbiAgICBTdWIuc3VwZXJPcHRpb25zID0gU3VwZXIub3B0aW9ucztcbiAgICBTdWIuZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnM7XG4gICAgU3ViLnNlYWxlZE9wdGlvbnMgPSBleHRlbmQoe30sIFN1Yi5vcHRpb25zKTtcblxuICAgIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gICAgY2FjaGVkQ3RvcnNbU3VwZXJJZF0gPSBTdWI7XG4gICAgcmV0dXJuIFN1YlxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0UHJvcHMkMSAoQ29tcCkge1xuICB2YXIgcHJvcHMgPSBDb21wLm9wdGlvbnMucHJvcHM7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIHByb3h5KENvbXAucHJvdG90eXBlLCBcIl9wcm9wc1wiLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCQxIChDb21wKSB7XG4gIHZhciBjb21wdXRlZCA9IENvbXAub3B0aW9ucy5jb21wdXRlZDtcbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgZGVmaW5lQ29tcHV0ZWQoQ29tcC5wcm90b3R5cGUsIGtleSwgY29tcHV0ZWRba2V5XSk7XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRBc3NldFJlZ2lzdGVycyAoVnVlKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMuXG4gICAqL1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlW3R5cGVdID0gZnVuY3Rpb24gKFxuICAgICAgaWQsXG4gICAgICBkZWZpbml0aW9uXG4gICAgKSB7XG4gICAgICBpZiAoIWRlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlID09PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIHZhbGlkYXRlQ29tcG9uZW50TmFtZShpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIGlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgaWQ7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkaXJlY3RpdmUnICYmIHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IHsgYmluZDogZGVmaW5pdGlvbiwgdXBkYXRlOiBkZWZpbml0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qICAqL1xuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSAob3B0cykge1xuICByZXR1cm4gb3B0cyAmJiAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybiwgbmFtZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXR0ZXJuLnNwbGl0KCcsJykuaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAoaXNSZWdFeHAocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KG5hbWUpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGUgKGtlZXBBbGl2ZUluc3RhbmNlLCBmaWx0ZXIpIHtcbiAgdmFyIGNhY2hlID0ga2VlcEFsaXZlSW5zdGFuY2UuY2FjaGU7XG4gIHZhciBrZXlzID0ga2VlcEFsaXZlSW5zdGFuY2Uua2V5cztcbiAgdmFyIF92bm9kZSA9IGtlZXBBbGl2ZUluc3RhbmNlLl92bm9kZTtcbiAgZm9yICh2YXIga2V5IGluIGNhY2hlKSB7XG4gICAgdmFyIGNhY2hlZE5vZGUgPSBjYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWROb2RlKSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY2FjaGVkTm9kZS5jb21wb25lbnRPcHRpb25zKTtcbiAgICAgIGlmIChuYW1lICYmICFmaWx0ZXIobmFtZSkpIHtcbiAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXksIGtleXMsIF92bm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBydW5lQ2FjaGVFbnRyeSAoXG4gIGNhY2hlLFxuICBrZXksXG4gIGtleXMsXG4gIGN1cnJlbnRcbikge1xuICB2YXIgY2FjaGVkJCQxID0gY2FjaGVba2V5XTtcbiAgaWYgKGNhY2hlZCQkMSAmJiAoIWN1cnJlbnQgfHwgY2FjaGVkJCQxLnRhZyAhPT0gY3VycmVudC50YWcpKSB7XG4gICAgY2FjaGVkJCQxLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gIH1cbiAgY2FjaGVba2V5XSA9IG51bGw7XG4gIHJlbW92ZShrZXlzLCBrZXkpO1xufVxuXG52YXIgcGF0dGVyblR5cGVzID0gW1N0cmluZywgUmVnRXhwLCBBcnJheV07XG5cbnZhciBLZWVwQWxpdmUgPSB7XG4gIG5hbWU6ICdrZWVwLWFsaXZlJyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBpbmNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgZXhjbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIG1heDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMua2V5cyA9IFtdO1xuICB9LFxuXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgcHJ1bmVDYWNoZUVudHJ5KHRoaXMuY2FjaGUsIGtleSwgdGhpcy5rZXlzKTtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLiR3YXRjaCgnaW5jbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgICB0aGlzLiR3YXRjaCgnZXhjbHVkZScsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHBydW5lQ2FjaGUodGhpcyQxLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciBzbG90ID0gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICB2YXIgdm5vZGUgPSBnZXRGaXJzdENvbXBvbmVudENoaWxkKHNsb3QpO1xuICAgIHZhciBjb21wb25lbnRPcHRpb25zID0gdm5vZGUgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICBpZiAoY29tcG9uZW50T3B0aW9ucykge1xuICAgICAgLy8gY2hlY2sgcGF0dGVyblxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICB2YXIgaW5jbHVkZSA9IHJlZi5pbmNsdWRlO1xuICAgICAgdmFyIGV4Y2x1ZGUgPSByZWYuZXhjbHVkZTtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gbm90IGluY2x1ZGVkXG4gICAgICAgIChpbmNsdWRlICYmICghbmFtZSB8fCAhbWF0Y2hlcyhpbmNsdWRlLCBuYW1lKSkpIHx8XG4gICAgICAgIC8vIGV4Y2x1ZGVkXG4gICAgICAgIChleGNsdWRlICYmIG5hbWUgJiYgbWF0Y2hlcyhleGNsdWRlLCBuYW1lKSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZiQxID0gdGhpcztcbiAgICAgIHZhciBjYWNoZSA9IHJlZiQxLmNhY2hlO1xuICAgICAgdmFyIGtleXMgPSByZWYkMS5rZXlzO1xuICAgICAgdmFyIGtleSA9IHZub2RlLmtleSA9PSBudWxsXG4gICAgICAgIC8vIHNhbWUgY29uc3RydWN0b3IgbWF5IGdldCByZWdpc3RlcmVkIGFzIGRpZmZlcmVudCBsb2NhbCBjb21wb25lbnRzXG4gICAgICAgIC8vIHNvIGNpZCBhbG9uZSBpcyBub3QgZW5vdWdoICgjMzI2OSlcbiAgICAgICAgPyBjb21wb25lbnRPcHRpb25zLkN0b3IuY2lkICsgKGNvbXBvbmVudE9wdGlvbnMudGFnID8gKFwiOjpcIiArIChjb21wb25lbnRPcHRpb25zLnRhZykpIDogJycpXG4gICAgICAgIDogdm5vZGUua2V5O1xuICAgICAgaWYgKGNhY2hlW2tleV0pIHtcbiAgICAgICAgdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjYWNoZVtrZXldLmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICAvLyBtYWtlIGN1cnJlbnQga2V5IGZyZXNoZXN0XG4gICAgICAgIHJlbW92ZShrZXlzLCBrZXkpO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSB2bm9kZTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIC8vIHBydW5lIG9sZGVzdCBlbnRyeVxuICAgICAgICBpZiAodGhpcy5tYXggJiYga2V5cy5sZW5ndGggPiBwYXJzZUludCh0aGlzLm1heCkpIHtcbiAgICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleXNbMF0sIGtleXMsIHRoaXMuX3Zub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2bm9kZS5kYXRhLmtlZXBBbGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZSB8fCAoc2xvdCAmJiBzbG90WzBdKVxuICB9XG59O1xuXG52YXIgYnVpbHRJbkNvbXBvbmVudHMgPSB7XG4gIEtlZXBBbGl2ZTogS2VlcEFsaXZlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8vIGNvbmZpZ1xuICB2YXIgY29uZmlnRGVmID0ge307XG4gIGNvbmZpZ0RlZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25maWc7IH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnRGVmLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdEbyBub3QgcmVwbGFjZSB0aGUgVnVlLmNvbmZpZyBvYmplY3QsIHNldCBpbmRpdmlkdWFsIGZpZWxkcyBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnY29uZmlnJywgY29uZmlnRGVmKTtcblxuICAvLyBleHBvc2VkIHV0aWwgbWV0aG9kcy5cbiAgLy8gTk9URTogdGhlc2UgYXJlIG5vdCBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkgLSBhdm9pZCByZWx5aW5nIG9uXG4gIC8vIHRoZW0gdW5sZXNzIHlvdSBhcmUgYXdhcmUgb2YgdGhlIHJpc2suXG4gIFZ1ZS51dGlsID0ge1xuICAgIHdhcm46IHdhcm4sXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgbWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG4gICAgZGVmaW5lUmVhY3RpdmU6IGRlZmluZVJlYWN0aXZlJCQxXG4gIH07XG5cbiAgVnVlLnNldCA9IHNldDtcbiAgVnVlLmRlbGV0ZSA9IGRlbDtcbiAgVnVlLm5leHRUaWNrID0gbmV4dFRpY2s7XG5cbiAgLy8gMi42IGV4cGxpY2l0IG9ic2VydmFibGUgQVBJXG4gIFZ1ZS5vYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIG9ic2VydmUob2JqKTtcbiAgICByZXR1cm4gb2JqXG4gIH07XG5cbiAgVnVlLm9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBBU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgVnVlLm9wdGlvbnNbdHlwZSArICdzJ10gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9KTtcblxuICAvLyB0aGlzIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIFwiYmFzZVwiIGNvbnN0cnVjdG9yIHRvIGV4dGVuZCBhbGwgcGxhaW4tb2JqZWN0XG4gIC8vIGNvbXBvbmVudHMgd2l0aCBpbiBXZWV4J3MgbXVsdGktaW5zdGFuY2Ugc2NlbmFyaW9zLlxuICBWdWUub3B0aW9ucy5fYmFzZSA9IFZ1ZTtcblxuICBleHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgYnVpbHRJbkNvbXBvbmVudHMpO1xuXG4gIGluaXRVc2UoVnVlKTtcbiAgaW5pdE1peGluJDEoVnVlKTtcbiAgaW5pdEV4dGVuZChWdWUpO1xuICBpbml0QXNzZXRSZWdpc3RlcnMoVnVlKTtcbn1cblxuaW5pdEdsb2JhbEFQSShWdWUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRpc1NlcnZlcicsIHtcbiAgZ2V0OiBpc1NlcnZlclJlbmRlcmluZ1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHNzckNvbnRleHQnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHJldHVybiB0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0XG4gIH1cbn0pO1xuXG4vLyBleHBvc2UgRnVuY3Rpb25hbFJlbmRlckNvbnRleHQgZm9yIHNzciBydW50aW1lIGhlbHBlciBpbnN0YWxsYXRpb25cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCcsIHtcbiAgdmFsdWU6IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0XG59KTtcblxuVnVlLnZlcnNpb24gPSAnMi42LjEyJztcblxuLyogICovXG5cbi8vIHRoZXNlIGFyZSByZXNlcnZlZCBmb3Igd2ViIGJlY2F1c2UgdGhleSBhcmUgZGlyZWN0bHkgY29tcGlsZWQgYXdheVxuLy8gZHVyaW5nIHRlbXBsYXRlIGNvbXBpbGF0aW9uXG52YXIgaXNSZXNlcnZlZEF0dHIgPSBtYWtlTWFwKCdzdHlsZSxjbGFzcycpO1xuXG4vLyBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIHVzaW5nIHByb3BzIGZvciBiaW5kaW5nXG52YXIgYWNjZXB0VmFsdWUgPSBtYWtlTWFwKCdpbnB1dCx0ZXh0YXJlYSxvcHRpb24sc2VsZWN0LHByb2dyZXNzJyk7XG52YXIgbXVzdFVzZVByb3AgPSBmdW5jdGlvbiAodGFnLCB0eXBlLCBhdHRyKSB7XG4gIHJldHVybiAoXG4gICAgKGF0dHIgPT09ICd2YWx1ZScgJiYgYWNjZXB0VmFsdWUodGFnKSkgJiYgdHlwZSAhPT0gJ2J1dHRvbicgfHxcbiAgICAoYXR0ciA9PT0gJ3NlbGVjdGVkJyAmJiB0YWcgPT09ICdvcHRpb24nKSB8fFxuICAgIChhdHRyID09PSAnY2hlY2tlZCcgJiYgdGFnID09PSAnaW5wdXQnKSB8fFxuICAgIChhdHRyID09PSAnbXV0ZWQnICYmIHRhZyA9PT0gJ3ZpZGVvJylcbiAgKVxufTtcblxudmFyIGlzRW51bWVyYXRlZEF0dHIgPSBtYWtlTWFwKCdjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2snKTtcblxudmFyIGlzVmFsaWRDb250ZW50RWRpdGFibGVWYWx1ZSA9IG1ha2VNYXAoJ2V2ZW50cyxjYXJldCx0eXBpbmcscGxhaW50ZXh0LW9ubHknKTtcblxudmFyIGNvbnZlcnRFbnVtZXJhdGVkVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkgfHwgdmFsdWUgPT09ICdmYWxzZSdcbiAgICA/ICdmYWxzZSdcbiAgICAvLyBhbGxvdyBhcmJpdHJhcnkgc3RyaW5nIHZhbHVlIGZvciBjb250ZW50ZWRpdGFibGVcbiAgICA6IGtleSA9PT0gJ2NvbnRlbnRlZGl0YWJsZScgJiYgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlKHZhbHVlKVxuICAgICAgPyB2YWx1ZVxuICAgICAgOiAndHJ1ZSdcbn07XG5cbnZhciBpc0Jvb2xlYW5BdHRyID0gbWFrZU1hcChcbiAgJ2FsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsJyArXG4gICdkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsJyArXG4gICdlbmFibGVkLGZvcm1ub3ZhbGlkYXRlLGhpZGRlbixpbmRldGVybWluYXRlLGluZXJ0LGlzbWFwLGl0ZW1zY29wZSxsb29wLG11bHRpcGxlLCcgK1xuICAnbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSwnICtcbiAgJ3JlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSx0cmFuc2xhdGUsJyArXG4gICd0cnVlc3BlZWQsdHlwZW11c3RtYXRjaCx2aXNpYmxlJ1xuKTtcblxudmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5cbnZhciBpc1hsaW5rID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUuY2hhckF0KDUpID09PSAnOicgJiYgbmFtZS5zbGljZSgwLCA1KSA9PT0gJ3hsaW5rJ1xufTtcblxudmFyIGdldFhsaW5rUHJvcCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBpc1hsaW5rKG5hbWUpID8gbmFtZS5zbGljZSg2LCBuYW1lLmxlbmd0aCkgOiAnJ1xufTtcblxudmFyIGlzRmFsc3lBdHRyVmFsdWUgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IGZhbHNlXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gZ2VuQ2xhc3NGb3JWbm9kZSAodm5vZGUpIHtcbiAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICB2YXIgcGFyZW50Tm9kZSA9IHZub2RlO1xuICB2YXIgY2hpbGROb2RlID0gdm5vZGU7XG4gIHdoaWxlIChpc0RlZihjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICBpZiAoY2hpbGROb2RlICYmIGNoaWxkTm9kZS5kYXRhKSB7XG4gICAgICBkYXRhID0gbWVyZ2VDbGFzc0RhdGEoY2hpbGROb2RlLmRhdGEsIGRhdGEpO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoaXNEZWYocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgIGlmIChwYXJlbnROb2RlICYmIHBhcmVudE5vZGUuZGF0YSkge1xuICAgICAgZGF0YSA9IG1lcmdlQ2xhc3NEYXRhKGRhdGEsIHBhcmVudE5vZGUuZGF0YSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZW5kZXJDbGFzcyhkYXRhLnN0YXRpY0NsYXNzLCBkYXRhLmNsYXNzKVxufVxuXG5mdW5jdGlvbiBtZXJnZUNsYXNzRGF0YSAoY2hpbGQsIHBhcmVudCkge1xuICByZXR1cm4ge1xuICAgIHN0YXRpY0NsYXNzOiBjb25jYXQoY2hpbGQuc3RhdGljQ2xhc3MsIHBhcmVudC5zdGF0aWNDbGFzcyksXG4gICAgY2xhc3M6IGlzRGVmKGNoaWxkLmNsYXNzKVxuICAgICAgPyBbY2hpbGQuY2xhc3MsIHBhcmVudC5jbGFzc11cbiAgICAgIDogcGFyZW50LmNsYXNzXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2xhc3MgKFxuICBzdGF0aWNDbGFzcyxcbiAgZHluYW1pY0NsYXNzXG4pIHtcbiAgaWYgKGlzRGVmKHN0YXRpY0NsYXNzKSB8fCBpc0RlZihkeW5hbWljQ2xhc3MpKSB7XG4gICAgcmV0dXJuIGNvbmNhdChzdGF0aWNDbGFzcywgc3RyaW5naWZ5Q2xhc3MoZHluYW1pY0NsYXNzKSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gY29uY2F0IChhLCBiKSB7XG4gIHJldHVybiBhID8gYiA/IChhICsgJyAnICsgYikgOiBhIDogKGIgfHwgJycpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUNsYXNzICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5QXJyYXkodmFsdWUpXG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlPYmplY3QodmFsdWUpXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5QXJyYXkgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgdmFyIHN0cmluZ2lmaWVkO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpc0RlZihzdHJpbmdpZmllZCA9IHN0cmluZ2lmeUNsYXNzKHZhbHVlW2ldKSkgJiYgc3RyaW5naWZpZWQgIT09ICcnKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBzdHJpbmdpZmllZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlPYmplY3QgKHZhbHVlKSB7XG4gIHZhciByZXMgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIG5hbWVzcGFjZU1hcCA9IHtcbiAgc3ZnOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICBtYXRoOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCdcbn07XG5cbnZhciBpc0hUTUxUYWcgPSBtYWtlTWFwKFxuICAnaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsJyArXG4gICdhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sJyArXG4gICdkaXYsZGQsZGwsZHQsZmlnY2FwdGlvbixmaWd1cmUscGljdHVyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCwnICtcbiAgJ2EsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSwnICtcbiAgJ3Msc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLCcgK1xuICAnZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsJyArXG4gICdjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0ciwnICtcbiAgJ2J1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sJyArXG4gICdvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLCcgK1xuICAnZGV0YWlscyxkaWFsb2csbWVudSxtZW51aXRlbSxzdW1tYXJ5LCcgK1xuICAnY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZSxibG9ja3F1b3RlLGlmcmFtZSx0Zm9vdCdcbik7XG5cbi8vIHRoaXMgbWFwIGlzIGludGVudGlvbmFsbHkgc2VsZWN0aXZlLCBvbmx5IGNvdmVyaW5nIFNWRyBlbGVtZW50cyB0aGF0IG1heVxuLy8gY29udGFpbiBjaGlsZCBlbGVtZW50cy5cbnZhciBpc1NWRyA9IG1ha2VNYXAoXG4gICdzdmcsYW5pbWF0ZSxjaXJjbGUsY2xpcHBhdGgsY3Vyc29yLGRlZnMsZGVzYyxlbGxpcHNlLGZpbHRlcixmb250LWZhY2UsJyArXG4gICdmb3JlaWduT2JqZWN0LGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybiwnICtcbiAgJ3BvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXcnLFxuICB0cnVlXG4pO1xuXG52YXIgaXNSZXNlcnZlZFRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgcmV0dXJuIGlzSFRNTFRhZyh0YWcpIHx8IGlzU1ZHKHRhZylcbn07XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWVzcGFjZSAodGFnKSB7XG4gIGlmIChpc1NWRyh0YWcpKSB7XG4gICAgcmV0dXJuICdzdmcnXG4gIH1cbiAgLy8gYmFzaWMgc3VwcG9ydCBmb3IgTWF0aE1MXG4gIC8vIG5vdGUgaXQgZG9lc24ndCBzdXBwb3J0IG90aGVyIE1hdGhNTCBlbGVtZW50cyBiZWluZyBjb21wb25lbnQgcm9vdHNcbiAgaWYgKHRhZyA9PT0gJ21hdGgnKSB7XG4gICAgcmV0dXJuICdtYXRoJ1xuICB9XG59XG5cbnZhciB1bmtub3duRWxlbWVudENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGlzVW5rbm93bkVsZW1lbnQgKHRhZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChpc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB0YWcgPSB0YWcudG9Mb3dlckNhc2UoKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gIT0gbnVsbCkge1xuICAgIHJldHVybiB1bmtub3duRWxlbWVudENhY2hlW3RhZ11cbiAgfVxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmICh0YWcuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yODIxMDM2NC8xMDcwMjQ0XG4gICAgcmV0dXJuICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gPSAoXG4gICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxVbmtub3duRWxlbWVudCB8fFxuICAgICAgZWwuY29uc3RydWN0b3IgPT09IHdpbmRvdy5IVE1MRWxlbWVudFxuICAgICkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICh1bmtub3duRWxlbWVudENhY2hlW3RhZ10gPSAvSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KGVsLnRvU3RyaW5nKCkpKVxuICB9XG59XG5cbnZhciBpc1RleHRJbnB1dFR5cGUgPSBtYWtlTWFwKCd0ZXh0LG51bWJlcixwYXNzd29yZCxzZWFyY2gsZW1haWwsdGVsLHVybCcpO1xuXG4vKiAgKi9cblxuLyoqXG4gKiBRdWVyeSBhbiBlbGVtZW50IHNlbGVjdG9yIGlmIGl0J3Mgbm90IGFuIGVsZW1lbnQgYWxyZWFkeS5cbiAqL1xuZnVuY3Rpb24gcXVlcnkgKGVsKSB7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnQ2Fubm90IGZpbmQgZWxlbWVudDogJyArIGVsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbFxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50JDEgKHRhZ05hbWUsIHZub2RlKSB7XG4gIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBpZiAodGFnTmFtZSAhPT0gJ3NlbGVjdCcpIHtcbiAgICByZXR1cm4gZWxtXG4gIH1cbiAgLy8gZmFsc2Ugb3IgbnVsbCB3aWxsIHJlbW92ZSB0aGUgYXR0cmlidXRlIGJ1dCB1bmRlZmluZWQgd2lsbCBub3RcbiAgaWYgKHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS5hdHRycyAmJiB2bm9kZS5kYXRhLmF0dHJzLm11bHRpcGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbG0uc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuICB9XG4gIHJldHVybiBlbG1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TIChuYW1lc3BhY2UsIHRhZ05hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VNYXBbbmFtZXNwYWNlXSwgdGFnTmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUgKHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQgKHRleHQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dClcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlIChwYXJlbnROb2RlLCBuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZCAobm9kZSwgY2hpbGQpIHtcbiAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkIChub2RlLCBjaGlsZCkge1xuICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50Tm9kZSAobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlXG59XG5cbmZ1bmN0aW9uIG5leHRTaWJsaW5nIChub2RlKSB7XG4gIHJldHVybiBub2RlLm5leHRTaWJsaW5nXG59XG5cbmZ1bmN0aW9uIHRhZ05hbWUgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZVxufVxuXG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudCAobm9kZSwgdGV4dCkge1xuICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGVTY29wZSAobm9kZSwgc2NvcGVJZCkge1xuICBub2RlLnNldEF0dHJpYnV0ZShzY29wZUlkLCAnJyk7XG59XG5cbnZhciBub2RlT3BzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50JDEsXG4gIGNyZWF0ZUVsZW1lbnROUzogY3JlYXRlRWxlbWVudE5TLFxuICBjcmVhdGVUZXh0Tm9kZTogY3JlYXRlVGV4dE5vZGUsXG4gIGNyZWF0ZUNvbW1lbnQ6IGNyZWF0ZUNvbW1lbnQsXG4gIGluc2VydEJlZm9yZTogaW5zZXJ0QmVmb3JlLFxuICByZW1vdmVDaGlsZDogcmVtb3ZlQ2hpbGQsXG4gIGFwcGVuZENoaWxkOiBhcHBlbmRDaGlsZCxcbiAgcGFyZW50Tm9kZTogcGFyZW50Tm9kZSxcbiAgbmV4dFNpYmxpbmc6IG5leHRTaWJsaW5nLFxuICB0YWdOYW1lOiB0YWdOYW1lLFxuICBzZXRUZXh0Q29udGVudDogc2V0VGV4dENvbnRlbnQsXG4gIHNldFN0eWxlU2NvcGU6IHNldFN0eWxlU2NvcGVcbn0pO1xuXG4vKiAgKi9cblxudmFyIHJlZiA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUgKF8sIHZub2RlKSB7XG4gICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgaWYgKG9sZFZub2RlLmRhdGEucmVmICE9PSB2bm9kZS5kYXRhLnJlZikge1xuICAgICAgcmVnaXN0ZXJSZWYob2xkVm5vZGUsIHRydWUpO1xuICAgICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgICByZWdpc3RlclJlZih2bm9kZSwgdHJ1ZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyUmVmICh2bm9kZSwgaXNSZW1vdmFsKSB7XG4gIHZhciBrZXkgPSB2bm9kZS5kYXRhLnJlZjtcbiAgaWYgKCFpc0RlZihrZXkpKSB7IHJldHVybiB9XG5cbiAgdmFyIHZtID0gdm5vZGUuY29udGV4dDtcbiAgdmFyIHJlZiA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlIHx8IHZub2RlLmVsbTtcbiAgdmFyIHJlZnMgPSB2bS4kcmVmcztcbiAgaWYgKGlzUmVtb3ZhbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlZnNba2V5XSkpIHtcbiAgICAgIHJlbW92ZShyZWZzW2tleV0sIHJlZik7XG4gICAgfSBlbHNlIGlmIChyZWZzW2tleV0gPT09IHJlZikge1xuICAgICAgcmVmc1trZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodm5vZGUuZGF0YS5yZWZJbkZvcikge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlZnNba2V5XSkpIHtcbiAgICAgICAgcmVmc1trZXldID0gW3JlZl07XG4gICAgICB9IGVsc2UgaWYgKHJlZnNba2V5XS5pbmRleE9mKHJlZikgPCAwKSB7XG4gICAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgICByZWZzW2tleV0ucHVzaChyZWYpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZzW2tleV0gPSByZWY7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVmlydHVhbCBET00gcGF0Y2hpbmcgYWxnb3JpdGhtIGJhc2VkIG9uIFNuYWJiZG9tIGJ5XG4gKiBTaW1vbiBGcmlpcyBWaW5kdW0gKEBwYWxkZXBpbmQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxkZXBpbmQvc25hYmJkb20vYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIG1vZGlmaWVkIGJ5IEV2YW4gWW91IChAeXl4OTkwODAzKVxuICpcbiAqIE5vdCB0eXBlLWNoZWNraW5nIHRoaXMgYmVjYXVzZSB0aGlzIGZpbGUgaXMgcGVyZi1jcml0aWNhbCBhbmQgdGhlIGNvc3RcbiAqIG9mIG1ha2luZyBmbG93IHVuZGVyc3RhbmQgaXQgaXMgbm90IHdvcnRoIGl0LlxuICovXG5cbnZhciBlbXB0eU5vZGUgPSBuZXcgVk5vZGUoJycsIHt9LCBbXSk7XG5cbnZhciBob29rcyA9IFsnY3JlYXRlJywgJ2FjdGl2YXRlJywgJ3VwZGF0ZScsICdyZW1vdmUnLCAnZGVzdHJveSddO1xuXG5mdW5jdGlvbiBzYW1lVm5vZGUgKGEsIGIpIHtcbiAgcmV0dXJuIChcbiAgICBhLmtleSA9PT0gYi5rZXkgJiYgKFxuICAgICAgKFxuICAgICAgICBhLnRhZyA9PT0gYi50YWcgJiZcbiAgICAgICAgYS5pc0NvbW1lbnQgPT09IGIuaXNDb21tZW50ICYmXG4gICAgICAgIGlzRGVmKGEuZGF0YSkgPT09IGlzRGVmKGIuZGF0YSkgJiZcbiAgICAgICAgc2FtZUlucHV0VHlwZShhLCBiKVxuICAgICAgKSB8fCAoXG4gICAgICAgIGlzVHJ1ZShhLmlzQXN5bmNQbGFjZWhvbGRlcikgJiZcbiAgICAgICAgYS5hc3luY0ZhY3RvcnkgPT09IGIuYXN5bmNGYWN0b3J5ICYmXG4gICAgICAgIGlzVW5kZWYoYi5hc3luY0ZhY3RvcnkuZXJyb3IpXG4gICAgICApXG4gICAgKVxuICApXG59XG5cbmZ1bmN0aW9uIHNhbWVJbnB1dFR5cGUgKGEsIGIpIHtcbiAgaWYgKGEudGFnICE9PSAnaW5wdXQnKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGk7XG4gIHZhciB0eXBlQSA9IGlzRGVmKGkgPSBhLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gIHZhciB0eXBlQiA9IGlzRGVmKGkgPSBiLmRhdGEpICYmIGlzRGVmKGkgPSBpLmF0dHJzKSAmJiBpLnR5cGU7XG4gIHJldHVybiB0eXBlQSA9PT0gdHlwZUIgfHwgaXNUZXh0SW5wdXRUeXBlKHR5cGVBKSAmJiBpc1RleHRJbnB1dFR5cGUodHlwZUIpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleVRvT2xkSWR4IChjaGlsZHJlbiwgYmVnaW5JZHgsIGVuZElkeCkge1xuICB2YXIgaSwga2V5O1xuICB2YXIgbWFwID0ge307XG4gIGZvciAoaSA9IGJlZ2luSWR4OyBpIDw9IGVuZElkeDsgKytpKSB7XG4gICAga2V5ID0gY2hpbGRyZW5baV0ua2V5O1xuICAgIGlmIChpc0RlZihrZXkpKSB7IG1hcFtrZXldID0gaTsgfVxuICB9XG4gIHJldHVybiBtYXBcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0Y2hGdW5jdGlvbiAoYmFja2VuZCkge1xuICB2YXIgaSwgajtcbiAgdmFyIGNicyA9IHt9O1xuXG4gIHZhciBtb2R1bGVzID0gYmFja2VuZC5tb2R1bGVzO1xuICB2YXIgbm9kZU9wcyA9IGJhY2tlbmQubm9kZU9wcztcblxuICBmb3IgKGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyArK2kpIHtcbiAgICBjYnNbaG9va3NbaV1dID0gW107XG4gICAgZm9yIChqID0gMDsgaiA8IG1vZHVsZXMubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmIChpc0RlZihtb2R1bGVzW2pdW2hvb2tzW2ldXSkpIHtcbiAgICAgICAgY2JzW2hvb2tzW2ldXS5wdXNoKG1vZHVsZXNbal1baG9va3NbaV1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbXB0eU5vZGVBdCAoZWxtKSB7XG4gICAgcmV0dXJuIG5ldyBWTm9kZShub2RlT3BzLnRhZ05hbWUoZWxtKS50b0xvd2VyQ2FzZSgpLCB7fSwgW10sIHVuZGVmaW5lZCwgZWxtKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUm1DYiAoY2hpbGRFbG0sIGxpc3RlbmVycykge1xuICAgIGZ1bmN0aW9uIHJlbW92ZSQkMSAoKSB7XG4gICAgICBpZiAoLS1yZW1vdmUkJDEubGlzdGVuZXJzID09PSAwKSB7XG4gICAgICAgIHJlbW92ZU5vZGUoY2hpbGRFbG0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZW1vdmUkJDEubGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgIHJldHVybiByZW1vdmUkJDFcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU5vZGUgKGVsKSB7XG4gICAgdmFyIHBhcmVudCA9IG5vZGVPcHMucGFyZW50Tm9kZShlbCk7XG4gICAgLy8gZWxlbWVudCBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBkdWUgdG8gdi1odG1sIC8gdi10ZXh0XG4gICAgaWYgKGlzRGVmKHBhcmVudCkpIHtcbiAgICAgIG5vZGVPcHMucmVtb3ZlQ2hpbGQocGFyZW50LCBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCQkMSAodm5vZGUsIGluVlByZSkge1xuICAgIHJldHVybiAoXG4gICAgICAhaW5WUHJlICYmXG4gICAgICAhdm5vZGUubnMgJiZcbiAgICAgICEoXG4gICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMubGVuZ3RoICYmXG4gICAgICAgIGNvbmZpZy5pZ25vcmVkRWxlbWVudHMuc29tZShmdW5jdGlvbiAoaWdub3JlKSB7XG4gICAgICAgICAgcmV0dXJuIGlzUmVnRXhwKGlnbm9yZSlcbiAgICAgICAgICAgID8gaWdub3JlLnRlc3Qodm5vZGUudGFnKVxuICAgICAgICAgICAgOiBpZ25vcmUgPT09IHZub2RlLnRhZ1xuICAgICAgICB9KVxuICAgICAgKSAmJlxuICAgICAgY29uZmlnLmlzVW5rbm93bkVsZW1lbnQodm5vZGUudGFnKVxuICAgIClcbiAgfVxuXG4gIHZhciBjcmVhdGluZ0VsbUluVlByZSA9IDA7XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxtIChcbiAgICB2bm9kZSxcbiAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgcGFyZW50RWxtLFxuICAgIHJlZkVsbSxcbiAgICBuZXN0ZWQsXG4gICAgb3duZXJBcnJheSxcbiAgICBpbmRleFxuICApIHtcbiAgICBpZiAoaXNEZWYodm5vZGUuZWxtKSAmJiBpc0RlZihvd25lckFycmF5KSkge1xuICAgICAgLy8gVGhpcyB2bm9kZSB3YXMgdXNlZCBpbiBhIHByZXZpb3VzIHJlbmRlciFcbiAgICAgIC8vIG5vdyBpdCdzIHVzZWQgYXMgYSBuZXcgbm9kZSwgb3ZlcndyaXRpbmcgaXRzIGVsbSB3b3VsZCBjYXVzZVxuICAgICAgLy8gcG90ZW50aWFsIHBhdGNoIGVycm9ycyBkb3duIHRoZSByb2FkIHdoZW4gaXQncyB1c2VkIGFzIGFuIGluc2VydGlvblxuICAgICAgLy8gcmVmZXJlbmNlIG5vZGUuIEluc3RlYWQsIHdlIGNsb25lIHRoZSBub2RlIG9uLWRlbWFuZCBiZWZvcmUgY3JlYXRpbmdcbiAgICAgIC8vIGFzc29jaWF0ZWQgRE9NIGVsZW1lbnQgZm9yIGl0LlxuICAgICAgdm5vZGUgPSBvd25lckFycmF5W2luZGV4XSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICAgIH1cblxuICAgIHZub2RlLmlzUm9vdEluc2VydCA9ICFuZXN0ZWQ7IC8vIGZvciB0cmFuc2l0aW9uIGVudGVyIGNoZWNrXG4gICAgaWYgKGNyZWF0ZUNvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgIGlmIChpc0RlZih0YWcpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnByZSkge1xuICAgICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5rbm93bkVsZW1lbnQkJDEodm5vZGUsIGNyZWF0aW5nRWxtSW5WUHJlKSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAnVW5rbm93biBjdXN0b20gZWxlbWVudDogPCcgKyB0YWcgKyAnPiAtIGRpZCB5b3UgJyArXG4gICAgICAgICAgICAncmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBjb3JyZWN0bHk/IEZvciByZWN1cnNpdmUgY29tcG9uZW50cywgJyArXG4gICAgICAgICAgICAnbWFrZSBzdXJlIHRvIHByb3ZpZGUgdGhlIFwibmFtZVwiIG9wdGlvbi4nLFxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZWxtID0gdm5vZGUubnNcbiAgICAgICAgPyBub2RlT3BzLmNyZWF0ZUVsZW1lbnROUyh2bm9kZS5ucywgdGFnKVxuICAgICAgICA6IG5vZGVPcHMuY3JlYXRlRWxlbWVudCh0YWcsIHZub2RlKTtcbiAgICAgIHNldFNjb3BlKHZub2RlKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICB7XG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgIGNyZWF0aW5nRWxtSW5WUHJlLS07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSkge1xuICAgICAgdm5vZGUuZWxtID0gbm9kZU9wcy5jcmVhdGVDb21tZW50KHZub2RlLnRleHQpO1xuICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xuICAgICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pIHtcbiAgICB2YXIgaSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGkpKSB7XG4gICAgICB2YXIgaXNSZWFjdGl2YXRlZCA9IGlzRGVmKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSAmJiBpLmtlZXBBbGl2ZTtcbiAgICAgIGlmIChpc0RlZihpID0gaS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkge1xuICAgICAgICBpKHZub2RlLCBmYWxzZSAvKiBoeWRyYXRpbmcgKi8pO1xuICAgICAgfVxuICAgICAgLy8gYWZ0ZXIgY2FsbGluZyB0aGUgaW5pdCBob29rLCBpZiB0aGUgdm5vZGUgaXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICAgIC8vIGl0IHNob3VsZCd2ZSBjcmVhdGVkIGEgY2hpbGQgaW5zdGFuY2UgYW5kIG1vdW50ZWQgaXQuIHRoZSBjaGlsZFxuICAgICAgLy8gY29tcG9uZW50IGFsc28gaGFzIHNldCB0aGUgcGxhY2Vob2xkZXIgdm5vZGUncyBlbG0uXG4gICAgICAvLyBpbiB0aGF0IGNhc2Ugd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSBlbGVtZW50IGFuZCBiZSBkb25lLlxuICAgICAgaWYgKGlzRGVmKHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgICAgICBpbml0Q29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgICAgIGlmIChpc1RydWUoaXNSZWFjdGl2YXRlZCkpIHtcbiAgICAgICAgICByZWFjdGl2YXRlQ29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRDb21wb25lbnQgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBpZiAoaXNEZWYodm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0KSkge1xuICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2guYXBwbHkoaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQpO1xuICAgICAgdm5vZGUuZGF0YS5wZW5kaW5nSW5zZXJ0ID0gbnVsbDtcbiAgICB9XG4gICAgdm5vZGUuZWxtID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuJGVsO1xuICAgIGlmIChpc1BhdGNoYWJsZSh2bm9kZSkpIHtcbiAgICAgIGludm9rZUNyZWF0ZUhvb2tzKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgc2V0U2NvcGUodm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbXB0eSBjb21wb25lbnQgcm9vdC5cbiAgICAgIC8vIHNraXAgYWxsIGVsZW1lbnQtcmVsYXRlZCBtb2R1bGVzIGV4Y2VwdCBmb3IgcmVmICgjMzQ1NSlcbiAgICAgIHJlZ2lzdGVyUmVmKHZub2RlKTtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBpbnZva2UgdGhlIGluc2VydCBob29rXG4gICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhY3RpdmF0ZUNvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pIHtcbiAgICB2YXIgaTtcbiAgICAvLyBoYWNrIGZvciAjNDMzOTogYSByZWFjdGl2YXRlZCBjb21wb25lbnQgd2l0aCBpbm5lciB0cmFuc2l0aW9uXG4gICAgLy8gZG9lcyBub3QgdHJpZ2dlciBiZWNhdXNlIHRoZSBpbm5lciBub2RlJ3MgY3JlYXRlZCBob29rcyBhcmUgbm90IGNhbGxlZFxuICAgIC8vIGFnYWluLiBJdCdzIG5vdCBpZGVhbCB0byBpbnZvbHZlIG1vZHVsZS1zcGVjaWZpYyBsb2dpYyBpbiBoZXJlIGJ1dFxuICAgIC8vIHRoZXJlIGRvZXNuJ3Qgc2VlbSB0byBiZSBhIGJldHRlciB3YXkgdG8gZG8gaXQuXG4gICAgdmFyIGlubmVyTm9kZSA9IHZub2RlO1xuICAgIHdoaWxlIChpbm5lck5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgIGlubmVyTm9kZSA9IGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgICBpZiAoaXNEZWYoaSA9IGlubmVyTm9kZS5kYXRhKSAmJiBpc0RlZihpID0gaS50cmFuc2l0aW9uKSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmFjdGl2YXRlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2JzLmFjdGl2YXRlW2ldKGVtcHR5Tm9kZSwgaW5uZXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaChpbm5lck5vZGUpO1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB1bmxpa2UgYSBuZXdseSBjcmVhdGVkIGNvbXBvbmVudCxcbiAgICAvLyBhIHJlYWN0aXZhdGVkIGtlZXAtYWxpdmUgY29tcG9uZW50IGRvZXNuJ3QgaW5zZXJ0IGl0c2VsZlxuICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydCAocGFyZW50LCBlbG0sIHJlZiQkMSkge1xuICAgIGlmIChpc0RlZihwYXJlbnQpKSB7XG4gICAgICBpZiAoaXNEZWYocmVmJCQxKSkge1xuICAgICAgICBpZiAobm9kZU9wcy5wYXJlbnROb2RlKHJlZiQkMSkgPT09IHBhcmVudCkge1xuICAgICAgICAgIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudCwgZWxtLCByZWYkJDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlT3BzLmFwcGVuZENoaWxkKHBhcmVudCwgZWxtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDaGlsZHJlbiAodm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhjaGlsZHJlbik7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNyZWF0ZUVsbShjaGlsZHJlbltpXSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCB2bm9kZS5lbG0sIG51bGwsIHRydWUsIGNoaWxkcmVuLCBpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzUHJpbWl0aXZlKHZub2RlLnRleHQpKSB7XG4gICAgICBub2RlT3BzLmFwcGVuZENoaWxkKHZub2RlLmVsbSwgbm9kZU9wcy5jcmVhdGVUZXh0Tm9kZShTdHJpbmcodm5vZGUudGV4dCkpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1BhdGNoYWJsZSAodm5vZGUpIHtcbiAgICB3aGlsZSAodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpIHtcbiAgICAgIHZub2RlID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgIH1cbiAgICByZXR1cm4gaXNEZWYodm5vZGUudGFnKVxuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlQ3JlYXRlSG9va3MgKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjYnMuY3JlYXRlLmxlbmd0aDsgKytpJDEpIHtcbiAgICAgIGNicy5jcmVhdGVbaSQxXShlbXB0eU5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgaSA9IHZub2RlLmRhdGEuaG9vazsgLy8gUmV1c2UgdmFyaWFibGVcbiAgICBpZiAoaXNEZWYoaSkpIHtcbiAgICAgIGlmIChpc0RlZihpLmNyZWF0ZSkpIHsgaS5jcmVhdGUoZW1wdHlOb2RlLCB2bm9kZSk7IH1cbiAgICAgIGlmIChpc0RlZihpLmluc2VydCkpIHsgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpOyB9XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IHNjb3BlIGlkIGF0dHJpYnV0ZSBmb3Igc2NvcGVkIENTUy5cbiAgLy8gdGhpcyBpcyBpbXBsZW1lbnRlZCBhcyBhIHNwZWNpYWwgY2FzZSB0byBhdm9pZCB0aGUgb3ZlcmhlYWRcbiAgLy8gb2YgZ29pbmcgdGhyb3VnaCB0aGUgbm9ybWFsIGF0dHJpYnV0ZSBwYXRjaGluZyBwcm9jZXNzLlxuICBmdW5jdGlvbiBzZXRTY29wZSAodm5vZGUpIHtcbiAgICB2YXIgaTtcbiAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmZuU2NvcGVJZCkpIHtcbiAgICAgIG5vZGVPcHMuc2V0U3R5bGVTY29wZSh2bm9kZS5lbG0sIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYW5jZXN0b3IgPSB2bm9kZTtcbiAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICBpZiAoaXNEZWYoaSA9IGFuY2VzdG9yLmNvbnRleHQpICYmIGlzRGVmKGkgPSBpLiRvcHRpb25zLl9zY29wZUlkKSkge1xuICAgICAgICAgIG5vZGVPcHMuc2V0U3R5bGVTY29wZSh2bm9kZS5lbG0sIGkpO1xuICAgICAgICB9XG4gICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3Igc2xvdCBjb250ZW50IHRoZXkgc2hvdWxkIGFsc28gZ2V0IHRoZSBzY29wZUlkIGZyb20gdGhlIGhvc3QgaW5zdGFuY2UuXG4gICAgaWYgKGlzRGVmKGkgPSBhY3RpdmVJbnN0YW5jZSkgJiZcbiAgICAgIGkgIT09IHZub2RlLmNvbnRleHQgJiZcbiAgICAgIGkgIT09IHZub2RlLmZuQ29udGV4dCAmJlxuICAgICAgaXNEZWYoaSA9IGkuJG9wdGlvbnMuX3Njb3BlSWQpXG4gICAgKSB7XG4gICAgICBub2RlT3BzLnNldFN0eWxlU2NvcGUodm5vZGUuZWxtLCBpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRWbm9kZXMgKHBhcmVudEVsbSwgcmVmRWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIGNyZWF0ZUVsbSh2bm9kZXNbc3RhcnRJZHhdLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtLCBmYWxzZSwgdm5vZGVzLCBzdGFydElkeCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRGVzdHJveUhvb2sgKHZub2RlKSB7XG4gICAgdmFyIGksIGo7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLmRlc3Ryb3kpKSB7IGkodm5vZGUpOyB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmRlc3Ryb3kubGVuZ3RoOyArK2kpIHsgY2JzLmRlc3Ryb3lbaV0odm5vZGUpOyB9XG4gICAgfVxuICAgIGlmIChpc0RlZihpID0gdm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2opIHtcbiAgICAgICAgaW52b2tlRGVzdHJveUhvb2sodm5vZGUuY2hpbGRyZW5bal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVZub2RlcyAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgdmFyIGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgaWYgKGlzRGVmKGNoLnRhZykpIHtcbiAgICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGNoKTtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIFRleHQgbm9kZVxuICAgICAgICAgIHJlbW92ZU5vZGUoY2guZWxtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2sgKHZub2RlLCBybSkge1xuICAgIGlmIChpc0RlZihybSkgfHwgaXNEZWYodm5vZGUuZGF0YSkpIHtcbiAgICAgIHZhciBpO1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGNicy5yZW1vdmUubGVuZ3RoICsgMTtcbiAgICAgIGlmIChpc0RlZihybSkpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBhIHJlY3Vyc2l2ZWx5IHBhc3NlZCBkb3duIHJtIGNhbGxiYWNrXG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBsaXN0ZW5lcnMgY291bnRcbiAgICAgICAgcm0ubGlzdGVuZXJzICs9IGxpc3RlbmVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRpcmVjdGx5IHJlbW92aW5nXG4gICAgICAgIHJtID0gY3JlYXRlUm1DYih2bm9kZS5lbG0sIGxpc3RlbmVycyk7XG4gICAgICB9XG4gICAgICAvLyByZWN1cnNpdmVseSBpbnZva2UgaG9va3Mgb24gY2hpbGQgY29tcG9uZW50IHJvb3Qgbm9kZVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkgJiYgaXNEZWYoaSA9IGkuX3Zub2RlKSAmJiBpc0RlZihpLmRhdGEpKSB7XG4gICAgICAgIHJlbW92ZUFuZEludm9rZVJlbW92ZUhvb2soaSwgcm0pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5yZW1vdmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY2JzLnJlbW92ZVtpXSh2bm9kZSwgcm0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5kYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnJlbW92ZSkpIHtcbiAgICAgICAgaSh2bm9kZSwgcm0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm0oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlTm9kZSh2bm9kZS5lbG0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuIChwYXJlbnRFbG0sIG9sZENoLCBuZXdDaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCByZW1vdmVPbmx5KSB7XG4gICAgdmFyIG9sZFN0YXJ0SWR4ID0gMDtcbiAgICB2YXIgbmV3U3RhcnRJZHggPSAwO1xuICAgIHZhciBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICAgIHZhciBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgdmFyIG9sZEVuZFZub2RlID0gb2xkQ2hbb2xkRW5kSWR4XTtcbiAgICB2YXIgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgIHZhciBuZXdFbmRWbm9kZSA9IG5ld0NoW25ld0VuZElkeF07XG4gICAgdmFyIG9sZEtleVRvSWR4LCBpZHhJbk9sZCwgdm5vZGVUb01vdmUsIHJlZkVsbTtcblxuICAgIC8vIHJlbW92ZU9ubHkgaXMgYSBzcGVjaWFsIGZsYWcgdXNlZCBvbmx5IGJ5IDx0cmFuc2l0aW9uLWdyb3VwPlxuICAgIC8vIHRvIGVuc3VyZSByZW1vdmVkIGVsZW1lbnRzIHN0YXkgaW4gY29ycmVjdCByZWxhdGl2ZSBwb3NpdGlvbnNcbiAgICAvLyBkdXJpbmcgbGVhdmluZyB0cmFuc2l0aW9uc1xuICAgIHZhciBjYW5Nb3ZlID0gIXJlbW92ZU9ubHk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKG5ld0NoKTtcbiAgICB9XG5cbiAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgaWYgKGlzVW5kZWYob2xkU3RhcnRWbm9kZSkpIHtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdOyAvLyBWbm9kZSBoYXMgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkRW5kVm5vZGUpKSB7XG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3RW5kSWR4KTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgfSBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7IC8vIFZub2RlIG1vdmVkIHJpZ2h0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld0VuZElkeCk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbmRWbm9kZS5lbG0pKTtcbiAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgIHBhdGNoVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZEVuZFZub2RlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzVW5kZWYob2xkS2V5VG9JZHgpKSB7IG9sZEtleVRvSWR4ID0gY3JlYXRlS2V5VG9PbGRJZHgob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpOyB9XG4gICAgICAgIGlkeEluT2xkID0gaXNEZWYobmV3U3RhcnRWbm9kZS5rZXkpXG4gICAgICAgICAgPyBvbGRLZXlUb0lkeFtuZXdTdGFydFZub2RlLmtleV1cbiAgICAgICAgICA6IGZpbmRJZHhJbk9sZChuZXdTdGFydFZub2RlLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkgeyAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZub2RlVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgIGlmIChzYW1lVm5vZGUodm5vZGVUb01vdmUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICBwYXRjaFZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgdm5vZGVUb01vdmUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNhbWUga2V5IGJ1dCBkaWZmZXJlbnQgZWxlbWVudC4gdHJlYXQgYXMgbmV3IGVsZW1lbnRcbiAgICAgICAgICAgIGNyZWF0ZUVsbShuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIGZhbHNlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgcmVmRWxtID0gaXNVbmRlZihuZXdDaFtuZXdFbmRJZHggKyAxXSkgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uZWxtO1xuICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgcmVmRWxtLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICB9IGVsc2UgaWYgKG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgICByZW1vdmVWbm9kZXMob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlS2V5cyAoY2hpbGRyZW4pIHtcbiAgICB2YXIgc2VlbktleXMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXk7XG4gICAgICBpZiAoaXNEZWYoa2V5KSkge1xuICAgICAgICBpZiAoc2VlbktleXNba2V5XSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJEdXBsaWNhdGUga2V5cyBkZXRlY3RlZDogJ1wiICsga2V5ICsgXCInLiBUaGlzIG1heSBjYXVzZSBhbiB1cGRhdGUgZXJyb3IuXCIpLFxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VlbktleXNba2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSWR4SW5PbGQgKG5vZGUsIG9sZENoLCBzdGFydCwgZW5kKSB7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHZhciBjID0gb2xkQ2hbaV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgc2FtZVZub2RlKG5vZGUsIGMpKSB7IHJldHVybiBpIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXRjaFZub2RlIChcbiAgICBvbGRWbm9kZSxcbiAgICB2bm9kZSxcbiAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgb3duZXJBcnJheSxcbiAgICBpbmRleCxcbiAgICByZW1vdmVPbmx5XG4gICkge1xuICAgIGlmIChvbGRWbm9kZSA9PT0gdm5vZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XG4gICAgICAvLyBjbG9uZSByZXVzZWQgdm5vZGVcbiAgICAgIHZub2RlID0gb3duZXJBcnJheVtpbmRleF0gPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICB9XG5cbiAgICB2YXIgZWxtID0gdm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtO1xuXG4gICAgaWYgKGlzVHJ1ZShvbGRWbm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIpKSB7XG4gICAgICBpZiAoaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICBoeWRyYXRlKG9sZFZub2RlLmVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gcmV1c2UgZWxlbWVudCBmb3Igc3RhdGljIHRyZWVzLlxuICAgIC8vIG5vdGUgd2Ugb25seSBkbyB0aGlzIGlmIHRoZSB2bm9kZSBpcyBjbG9uZWQgLVxuICAgIC8vIGlmIHRoZSBuZXcgbm9kZSBpcyBub3QgY2xvbmVkIGl0IG1lYW5zIHRoZSByZW5kZXIgZnVuY3Rpb25zIGhhdmUgYmVlblxuICAgIC8vIHJlc2V0IGJ5IHRoZSBob3QtcmVsb2FkLWFwaSBhbmQgd2UgbmVlZCB0byBkbyBhIHByb3BlciByZS1yZW5kZXIuXG4gICAgaWYgKGlzVHJ1ZSh2bm9kZS5pc1N0YXRpYykgJiZcbiAgICAgIGlzVHJ1ZShvbGRWbm9kZS5pc1N0YXRpYykgJiZcbiAgICAgIHZub2RlLmtleSA9PT0gb2xkVm5vZGUua2V5ICYmXG4gICAgICAoaXNUcnVlKHZub2RlLmlzQ2xvbmVkKSB8fCBpc1RydWUodm5vZGUuaXNPbmNlKSlcbiAgICApIHtcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnByZXBhdGNoKSkge1xuICAgICAgaShvbGRWbm9kZSwgdm5vZGUpO1xuICAgIH1cblxuICAgIHZhciBvbGRDaCA9IG9sZFZub2RlLmNoaWxkcmVuO1xuICAgIHZhciBjaCA9IHZub2RlLmNoaWxkcmVuO1xuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc1BhdGNoYWJsZSh2bm9kZSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMudXBkYXRlLmxlbmd0aDsgKytpKSB7IGNicy51cGRhdGVbaV0ob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnVwZGF0ZSkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgfVxuICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAob2xkQ2ggIT09IGNoKSB7IHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpOyB9XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhjaCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSB7IG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCAnJyk7IH1cbiAgICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgY2gsIDAsIGNoLmxlbmd0aCAtIDEsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50ZXh0KSkge1xuICAgICAgICBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgbm9kZU9wcy5zZXRUZXh0Q29udGVudChlbG0sIHZub2RlLnRleHQpO1xuICAgIH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5wb3N0cGF0Y2gpKSB7IGkob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUluc2VydEhvb2sgKHZub2RlLCBxdWV1ZSwgaW5pdGlhbCkge1xuICAgIC8vIGRlbGF5IGluc2VydCBob29rcyBmb3IgY29tcG9uZW50IHJvb3Qgbm9kZXMsIGludm9rZSB0aGVtIGFmdGVyIHRoZVxuICAgIC8vIGVsZW1lbnQgaXMgcmVhbGx5IGluc2VydGVkXG4gICAgaWYgKGlzVHJ1ZShpbml0aWFsKSAmJiBpc0RlZih2bm9kZS5wYXJlbnQpKSB7XG4gICAgICB2bm9kZS5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0ID0gcXVldWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcXVldWVbaV0uZGF0YS5ob29rLmluc2VydChxdWV1ZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGh5ZHJhdGlvbkJhaWxlZCA9IGZhbHNlO1xuICAvLyBsaXN0IG9mIG1vZHVsZXMgdGhhdCBjYW4gc2tpcCBjcmVhdGUgaG9vayBkdXJpbmcgaHlkcmF0aW9uIGJlY2F1c2UgdGhleVxuICAvLyBhcmUgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgY2xpZW50IG9yIGhhcyBubyBuZWVkIGZvciBpbml0aWFsaXphdGlvblxuICAvLyBOb3RlOiBzdHlsZSBpcyBleGNsdWRlZCBiZWNhdXNlIGl0IHJlbGllcyBvbiBpbml0aWFsIGNsb25lIGZvciBmdXR1cmVcbiAgLy8gZGVlcCB1cGRhdGVzICgjNzA2MykuXG4gIHZhciBpc1JlbmRlcmVkTW9kdWxlID0gbWFrZU1hcCgnYXR0cnMsY2xhc3Msc3RhdGljQ2xhc3Msc3RhdGljU3R5bGUsa2V5Jyk7XG5cbiAgLy8gTm90ZTogdGhpcyBpcyBhIGJyb3dzZXItb25seSBmdW5jdGlvbiBzbyB3ZSBjYW4gYXNzdW1lIGVsbXMgYXJlIERPTSBub2Rlcy5cbiAgZnVuY3Rpb24gaHlkcmF0ZSAoZWxtLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpblZQcmUpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgdGFnID0gdm5vZGUudGFnO1xuICAgIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICBpblZQcmUgPSBpblZQcmUgfHwgKGRhdGEgJiYgZGF0YS5wcmUpO1xuICAgIHZub2RlLmVsbSA9IGVsbTtcblxuICAgIGlmIChpc1RydWUodm5vZGUuaXNDb21tZW50KSAmJiBpc0RlZih2bm9kZS5hc3luY0ZhY3RvcnkpKSB7XG4gICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gYXNzZXJ0IG5vZGUgbWF0Y2hcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFhc3NlcnROb2RlTWF0Y2goZWxtLCB2bm9kZSwgaW5WUHJlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkuaW5pdCkpIHsgaSh2bm9kZSwgdHJ1ZSAvKiBoeWRyYXRpbmcgKi8pOyB9XG4gICAgICBpZiAoaXNEZWYoaSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlKSkge1xuICAgICAgICAvLyBjaGlsZCBjb21wb25lbnQuIGl0IHNob3VsZCBoYXZlIGh5ZHJhdGVkIGl0cyBvd24gdHJlZS5cbiAgICAgICAgaW5pdENvbXBvbmVudCh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgIGlmIChpc0RlZihjaGlsZHJlbikpIHtcbiAgICAgICAgLy8gZW1wdHkgZWxlbWVudCwgYWxsb3cgY2xpZW50IHRvIHBpY2sgdXAgYW5kIHBvcHVsYXRlIGNoaWxkcmVuXG4gICAgICAgIGlmICghZWxtLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgIGNyZWF0ZUNoaWxkcmVuKHZub2RlLCBjaGlsZHJlbiwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB2LWh0bWwgYW5kIGRvbVByb3BzOiBpbm5lckhUTUxcbiAgICAgICAgICBpZiAoaXNEZWYoaSA9IGRhdGEpICYmIGlzRGVmKGkgPSBpLmRvbVByb3BzKSAmJiBpc0RlZihpID0gaS5pbm5lckhUTUwpKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gZWxtLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAhaHlkcmF0aW9uQmFpbGVkXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGh5ZHJhdGlvbkJhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdzZXJ2ZXIgaW5uZXJIVE1MOiAnLCBpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2NsaWVudCBpbm5lckhUTUw6ICcsIGVsbS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpdGVyYXRlIGFuZCBjb21wYXJlIGNoaWxkcmVuIGxpc3RzXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5NYXRjaCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gZWxtLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBjaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICAgIGlmICghY2hpbGROb2RlIHx8ICFoeWRyYXRlKGNoaWxkTm9kZSwgY2hpbGRyZW5baSQxXSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpblZQcmUpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5NYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgY2hpbGROb2RlIGlzIG5vdCBudWxsLCBpdCBtZWFucyB0aGUgYWN0dWFsIGNoaWxkTm9kZXMgbGlzdCBpc1xuICAgICAgICAgICAgLy8gbG9uZ2VyIHRoYW4gdGhlIHZpcnR1YWwgY2hpbGRyZW4gbGlzdC5cbiAgICAgICAgICAgIGlmICghY2hpbGRyZW5NYXRjaCB8fCBjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgIWh5ZHJhdGlvbkJhaWxlZFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBoeWRyYXRpb25CYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyZW50OiAnLCBlbG0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWlzbWF0Y2hpbmcgY2hpbGROb2RlcyB2cy4gVk5vZGVzOiAnLCBlbG0uY2hpbGROb2RlcywgY2hpbGRyZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICAgIHZhciBmdWxsSW52b2tlID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgaWYgKCFpc1JlbmRlcmVkTW9kdWxlKGtleSkpIHtcbiAgICAgICAgICAgIGZ1bGxJbnZva2UgPSB0cnVlO1xuICAgICAgICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZ1bGxJbnZva2UgJiYgZGF0YVsnY2xhc3MnXSkge1xuICAgICAgICAgIC8vIGVuc3VyZSBjb2xsZWN0aW5nIGRlcHMgZm9yIGRlZXAgY2xhc3MgYmluZGluZ3MgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgICAgdHJhdmVyc2UoZGF0YVsnY2xhc3MnXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsbS5kYXRhICE9PSB2bm9kZS50ZXh0KSB7XG4gICAgICBlbG0uZGF0YSA9IHZub2RlLnRleHQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBhc3NlcnROb2RlTWF0Y2ggKG5vZGUsIHZub2RlLCBpblZQcmUpIHtcbiAgICBpZiAoaXNEZWYodm5vZGUudGFnKSkge1xuICAgICAgcmV0dXJuIHZub2RlLnRhZy5pbmRleE9mKCd2dWUtY29tcG9uZW50JykgPT09IDAgfHwgKFxuICAgICAgICAhaXNVbmtub3duRWxlbWVudCQkMSh2bm9kZSwgaW5WUHJlKSAmJlxuICAgICAgICB2bm9kZS50YWcudG9Mb3dlckNhc2UoKSA9PT0gKG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09ICh2bm9kZS5pc0NvbW1lbnQgPyA4IDogMylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSwgaHlkcmF0aW5nLCByZW1vdmVPbmx5KSB7XG4gICAgaWYgKGlzVW5kZWYodm5vZGUpKSB7XG4gICAgICBpZiAoaXNEZWYob2xkVm5vZGUpKSB7IGludm9rZURlc3Ryb3lIb29rKG9sZFZub2RlKTsgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGlzSW5pdGlhbFBhdGNoID0gZmFsc2U7XG4gICAgdmFyIGluc2VydGVkVm5vZGVRdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGlzVW5kZWYob2xkVm5vZGUpKSB7XG4gICAgICAvLyBlbXB0eSBtb3VudCAobGlrZWx5IGFzIGNvbXBvbmVudCksIGNyZWF0ZSBuZXcgcm9vdCBlbGVtZW50XG4gICAgICBpc0luaXRpYWxQYXRjaCA9IHRydWU7XG4gICAgICBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpc1JlYWxFbGVtZW50ID0gaXNEZWYob2xkVm5vZGUubm9kZVR5cGUpO1xuICAgICAgaWYgKCFpc1JlYWxFbGVtZW50ICYmIHNhbWVWbm9kZShvbGRWbm9kZSwgdm5vZGUpKSB7XG4gICAgICAgIC8vIHBhdGNoIGV4aXN0aW5nIHJvb3Qgbm9kZVxuICAgICAgICBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBudWxsLCBudWxsLCByZW1vdmVPbmx5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1JlYWxFbGVtZW50KSB7XG4gICAgICAgICAgLy8gbW91bnRpbmcgdG8gYSByZWFsIGVsZW1lbnRcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGlzIHNlcnZlci1yZW5kZXJlZCBjb250ZW50IGFuZCBpZiB3ZSBjYW4gcGVyZm9ybVxuICAgICAgICAgIC8vIGEgc3VjY2Vzc2Z1bCBoeWRyYXRpb24uXG4gICAgICAgICAgaWYgKG9sZFZub2RlLm5vZGVUeXBlID09PSAxICYmIG9sZFZub2RlLmhhc0F0dHJpYnV0ZShTU1JfQVRUUikpIHtcbiAgICAgICAgICAgIG9sZFZub2RlLnJlbW92ZUF0dHJpYnV0ZShTU1JfQVRUUik7XG4gICAgICAgICAgICBoeWRyYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNUcnVlKGh5ZHJhdGluZykpIHtcbiAgICAgICAgICAgIGlmIChoeWRyYXRlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSkge1xuICAgICAgICAgICAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHRydWUpO1xuICAgICAgICAgICAgICByZXR1cm4gb2xkVm5vZGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgICAgICdUaGUgY2xpZW50LXNpZGUgcmVuZGVyZWQgdmlydHVhbCBET00gdHJlZSBpcyBub3QgbWF0Y2hpbmcgJyArXG4gICAgICAgICAgICAgICAgJ3NlcnZlci1yZW5kZXJlZCBjb250ZW50LiBUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgaW5jb3JyZWN0ICcgK1xuICAgICAgICAgICAgICAgICdIVE1MIG1hcmt1cCwgZm9yIGV4YW1wbGUgbmVzdGluZyBibG9jay1sZXZlbCBlbGVtZW50cyBpbnNpZGUgJyArXG4gICAgICAgICAgICAgICAgJzxwPiwgb3IgbWlzc2luZyA8dGJvZHk+LiBCYWlsaW5nIGh5ZHJhdGlvbiBhbmQgcGVyZm9ybWluZyAnICtcbiAgICAgICAgICAgICAgICAnZnVsbCBjbGllbnQtc2lkZSByZW5kZXIuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlaXRoZXIgbm90IHNlcnZlci1yZW5kZXJlZCwgb3IgaHlkcmF0aW9uIGZhaWxlZC5cbiAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgbm9kZSBhbmQgcmVwbGFjZSBpdFxuICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVwbGFjaW5nIGV4aXN0aW5nIGVsZW1lbnRcbiAgICAgICAgdmFyIG9sZEVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICAgICAgdmFyIHBhcmVudEVsbSA9IG5vZGVPcHMucGFyZW50Tm9kZShvbGRFbG0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgbm9kZVxuICAgICAgICBjcmVhdGVFbG0oXG4gICAgICAgICAgdm5vZGUsXG4gICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLFxuICAgICAgICAgIC8vIGV4dHJlbWVseSByYXJlIGVkZ2UgY2FzZTogZG8gbm90IGluc2VydCBpZiBvbGQgZWxlbWVudCBpcyBpbiBhXG4gICAgICAgICAgLy8gbGVhdmluZyB0cmFuc2l0aW9uLiBPbmx5IGhhcHBlbnMgd2hlbiBjb21iaW5pbmcgdHJhbnNpdGlvbiArXG4gICAgICAgICAgLy8ga2VlcC1hbGl2ZSArIEhPQ3MuICgjNDU5MClcbiAgICAgICAgICBvbGRFbG0uX2xlYXZlQ2IgPyBudWxsIDogcGFyZW50RWxtLFxuICAgICAgICAgIG5vZGVPcHMubmV4dFNpYmxpbmcob2xkRWxtKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgcGxhY2Vob2xkZXIgbm9kZSBlbGVtZW50LCByZWN1cnNpdmVseVxuICAgICAgICBpZiAoaXNEZWYodm5vZGUucGFyZW50KSkge1xuICAgICAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlLnBhcmVudDtcbiAgICAgICAgICB2YXIgcGF0Y2hhYmxlID0gaXNQYXRjaGFibGUodm5vZGUpO1xuICAgICAgICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXShhbmNlc3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmNlc3Rvci5lbG0gPSB2bm9kZS5lbG07XG4gICAgICAgICAgICBpZiAocGF0Y2hhYmxlKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kkMSkge1xuICAgICAgICAgICAgICAgIGNicy5jcmVhdGVbaSQxXShlbXB0eU5vZGUsIGFuY2VzdG9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyAjNjUxM1xuICAgICAgICAgICAgICAvLyBpbnZva2UgaW5zZXJ0IGhvb2tzIHRoYXQgbWF5IGhhdmUgYmVlbiBtZXJnZWQgYnkgY3JlYXRlIGhvb2tzLlxuICAgICAgICAgICAgICAvLyBlLmcuIGZvciBkaXJlY3RpdmVzIHRoYXQgdXNlcyB0aGUgXCJpbnNlcnRlZFwiIGhvb2suXG4gICAgICAgICAgICAgIHZhciBpbnNlcnQgPSBhbmNlc3Rvci5kYXRhLmhvb2suaW5zZXJ0O1xuICAgICAgICAgICAgICBpZiAoaW5zZXJ0Lm1lcmdlZCkge1xuICAgICAgICAgICAgICAgIC8vIHN0YXJ0IGF0IGluZGV4IDEgdG8gYXZvaWQgcmUtaW52b2tpbmcgY29tcG9uZW50IG1vdW50ZWQgaG9va1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkMiA9IDE7IGkkMiA8IGluc2VydC5mbnMubGVuZ3RoOyBpJDIrKykge1xuICAgICAgICAgICAgICAgICAgaW5zZXJ0LmZuc1tpJDJdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWdpc3RlclJlZihhbmNlc3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZXN0cm95IG9sZCBub2RlXG4gICAgICAgIGlmIChpc0RlZihwYXJlbnRFbG0pKSB7XG4gICAgICAgICAgcmVtb3ZlVm5vZGVzKFtvbGRWbm9kZV0sIDAsIDApO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRhZykpIHtcbiAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2VJbnNlcnRIb29rKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGlzSW5pdGlhbFBhdGNoKTtcbiAgICByZXR1cm4gdm5vZGUuZWxtXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBkaXJlY3RpdmVzID0ge1xuICBjcmVhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIHVwZGF0ZTogdXBkYXRlRGlyZWN0aXZlcyxcbiAgZGVzdHJveTogZnVuY3Rpb24gdW5iaW5kRGlyZWN0aXZlcyAodm5vZGUpIHtcbiAgICB1cGRhdGVEaXJlY3RpdmVzKHZub2RlLCBlbXB0eU5vZGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVEaXJlY3RpdmVzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKG9sZFZub2RlLmRhdGEuZGlyZWN0aXZlcyB8fCB2bm9kZS5kYXRhLmRpcmVjdGl2ZXMpIHtcbiAgICBfdXBkYXRlKG9sZFZub2RlLCB2bm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3VwZGF0ZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBpc0NyZWF0ZSA9IG9sZFZub2RlID09PSBlbXB0eU5vZGU7XG4gIHZhciBpc0Rlc3Ryb3kgPSB2bm9kZSA9PT0gZW1wdHlOb2RlO1xuICB2YXIgb2xkRGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMShvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMsIG9sZFZub2RlLmNvbnRleHQpO1xuICB2YXIgbmV3RGlycyA9IG5vcm1hbGl6ZURpcmVjdGl2ZXMkMSh2bm9kZS5kYXRhLmRpcmVjdGl2ZXMsIHZub2RlLmNvbnRleHQpO1xuXG4gIHZhciBkaXJzV2l0aEluc2VydCA9IFtdO1xuICB2YXIgZGlyc1dpdGhQb3N0cGF0Y2ggPSBbXTtcblxuICB2YXIga2V5LCBvbGREaXIsIGRpcjtcbiAgZm9yIChrZXkgaW4gbmV3RGlycykge1xuICAgIG9sZERpciA9IG9sZERpcnNba2V5XTtcbiAgICBkaXIgPSBuZXdEaXJzW2tleV07XG4gICAgaWYgKCFvbGREaXIpIHtcbiAgICAgIC8vIG5ldyBkaXJlY3RpdmUsIGJpbmRcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAnYmluZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICBpZiAoZGlyLmRlZiAmJiBkaXIuZGVmLmluc2VydGVkKSB7XG4gICAgICAgIGRpcnNXaXRoSW5zZXJ0LnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhpc3RpbmcgZGlyZWN0aXZlLCB1cGRhdGVcbiAgICAgIGRpci5vbGRWYWx1ZSA9IG9sZERpci52YWx1ZTtcbiAgICAgIGRpci5vbGRBcmcgPSBvbGREaXIuYXJnO1xuICAgICAgY2FsbEhvb2skMShkaXIsICd1cGRhdGUnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5jb21wb25lbnRVcGRhdGVkKSB7XG4gICAgICAgIGRpcnNXaXRoUG9zdHBhdGNoLnB1c2goZGlyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhJbnNlcnQubGVuZ3RoKSB7XG4gICAgdmFyIGNhbGxJbnNlcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhJbnNlcnRbaV0sICdpbnNlcnRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaXNDcmVhdGUpIHtcbiAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgY2FsbEluc2VydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxJbnNlcnQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGlyc1dpdGhQb3N0cGF0Y2gubGVuZ3RoKSB7XG4gICAgbWVyZ2VWTm9kZUhvb2sodm5vZGUsICdwb3N0cGF0Y2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhbGxIb29rJDEoZGlyc1dpdGhQb3N0cGF0Y2hbaV0sICdjb21wb25lbnRVcGRhdGVkJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICghaXNDcmVhdGUpIHtcbiAgICBmb3IgKGtleSBpbiBvbGREaXJzKSB7XG4gICAgICBpZiAoIW5ld0RpcnNba2V5XSkge1xuICAgICAgICAvLyBubyBsb25nZXIgcHJlc2VudCwgdW5iaW5kXG4gICAgICAgIGNhbGxIb29rJDEob2xkRGlyc1trZXldLCAndW5iaW5kJywgb2xkVm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZW1wdHlNb2RpZmllcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzJDEgKFxuICBkaXJzLFxuICB2bVxuKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoIWRpcnMpIHtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICByZXR1cm4gcmVzXG4gIH1cbiAgdmFyIGksIGRpcjtcbiAgZm9yIChpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICBkaXIgPSBkaXJzW2ldO1xuICAgIGlmICghZGlyLm1vZGlmaWVycykge1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBkaXIubW9kaWZpZXJzID0gZW1wdHlNb2RpZmllcnM7XG4gICAgfVxuICAgIHJlc1tnZXRSYXdEaXJOYW1lKGRpcildID0gZGlyO1xuICAgIGRpci5kZWYgPSByZXNvbHZlQXNzZXQodm0uJG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyLm5hbWUsIHRydWUpO1xuICB9XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldFJhd0Rpck5hbWUgKGRpcikge1xuICByZXR1cm4gZGlyLnJhd05hbWUgfHwgKChkaXIubmFtZSkgKyBcIi5cIiArIChPYmplY3Qua2V5cyhkaXIubW9kaWZpZXJzIHx8IHt9KS5qb2luKCcuJykpKVxufVxuXG5mdW5jdGlvbiBjYWxsSG9vayQxIChkaXIsIGhvb2ssIHZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KSB7XG4gIHZhciBmbiA9IGRpci5kZWYgJiYgZGlyLmRlZltob29rXTtcbiAgaWYgKGZuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuKHZub2RlLmVsbSwgZGlyLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm5vZGUuY29udGV4dCwgKFwiZGlyZWN0aXZlIFwiICsgKGRpci5uYW1lKSArIFwiIFwiICsgaG9vayArIFwiIGhvb2tcIikpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgYmFzZU1vZHVsZXMgPSBbXG4gIHJlZixcbiAgZGlyZWN0aXZlc1xuXTtcblxuLyogICovXG5cbmZ1bmN0aW9uIHVwZGF0ZUF0dHJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgdmFyIG9wdHMgPSB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBpZiAoaXNEZWYob3B0cykgJiYgb3B0cy5DdG9yLm9wdGlvbnMuaW5oZXJpdEF0dHJzID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEuYXR0cnMpICYmIGlzVW5kZWYodm5vZGUuZGF0YS5hdHRycykpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIga2V5LCBjdXIsIG9sZDtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZEF0dHJzID0gb2xkVm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgdmFyIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyB8fCB7fTtcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gIGlmIChpc0RlZihhdHRycy5fX29iX18pKSB7XG4gICAgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhdHRycyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBhdHRycykge1xuICAgIGN1ciA9IGF0dHJzW2tleV07XG4gICAgb2xkID0gb2xkQXR0cnNba2V5XTtcbiAgICBpZiAob2xkICE9PSBjdXIpIHtcbiAgICAgIHNldEF0dHIoZWxtLCBrZXksIGN1cik7XG4gICAgfVxuICB9XG4gIC8vICM0MzkxOiBpbiBJRTksIHNldHRpbmcgdHlwZSBjYW4gcmVzZXQgdmFsdWUgZm9yIGlucHV0W3R5cGU9cmFkaW9dXG4gIC8vICM2NjY2OiBJRS9FZGdlIGZvcmNlcyBwcm9ncmVzcyB2YWx1ZSBkb3duIHRvIDEgYmVmb3JlIHNldHRpbmcgYSBtYXhcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICgoaXNJRSB8fCBpc0VkZ2UpICYmIGF0dHJzLnZhbHVlICE9PSBvbGRBdHRycy52YWx1ZSkge1xuICAgIHNldEF0dHIoZWxtLCAndmFsdWUnLCBhdHRycy52YWx1ZSk7XG4gIH1cbiAgZm9yIChrZXkgaW4gb2xkQXR0cnMpIHtcbiAgICBpZiAoaXNVbmRlZihhdHRyc1trZXldKSkge1xuICAgICAgaWYgKGlzWGxpbmsoa2V5KSkge1xuICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgICAgfSBlbHNlIGlmICghaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XG4gICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXR0ciAoZWwsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGVsLnRhZ05hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNCb29sZWFuQXR0cihrZXkpKSB7XG4gICAgLy8gc2V0IGF0dHJpYnV0ZSBmb3IgYmxhbmsgdmFsdWVcbiAgICAvLyBlLmcuIDxvcHRpb24gZGlzYWJsZWQ+U2VsZWN0IG9uZTwvb3B0aW9uPlxuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRlY2huaWNhbGx5IGFsbG93ZnVsbHNjcmVlbiBpcyBhIGJvb2xlYW4gYXR0cmlidXRlIGZvciA8aWZyYW1lPixcbiAgICAgIC8vIGJ1dCBGbGFzaCBleHBlY3RzIGEgdmFsdWUgb2YgXCJ0cnVlXCIgd2hlbiB1c2VkIG9uIDxlbWJlZD4gdGFnXG4gICAgICB2YWx1ZSA9IGtleSA9PT0gJ2FsbG93ZnVsbHNjcmVlbicgJiYgZWwudGFnTmFtZSA9PT0gJ0VNQkVEJ1xuICAgICAgICA/ICd0cnVlJ1xuICAgICAgICA6IGtleTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNFbnVtZXJhdGVkQXR0cihrZXkpKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGtleSwgY29udmVydEVudW1lcmF0ZWRWYWx1ZShrZXksIHZhbHVlKSk7XG4gIH0gZWxzZSBpZiAoaXNYbGluayhrZXkpKSB7XG4gICAgaWYgKGlzRmFsc3lBdHRyVmFsdWUodmFsdWUpKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGVOUyh4bGlua05TLCBnZXRYbGlua1Byb3Aoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBiYXNlU2V0QXR0cihlbCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZVNldEF0dHIgKGVsLCBrZXksIHZhbHVlKSB7XG4gIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICB9IGVsc2Uge1xuICAgIC8vICM3MTM4OiBJRTEwICYgMTEgZmlyZXMgaW5wdXQgZXZlbnQgd2hlbiBzZXR0aW5nIHBsYWNlaG9sZGVyIG9uXG4gICAgLy8gPHRleHRhcmVhPi4uLiBibG9jayB0aGUgZmlyc3QgaW5wdXQgZXZlbnQgYW5kIHJlbW92ZSB0aGUgYmxvY2tlclxuICAgIC8vIGltbWVkaWF0ZWx5LlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChcbiAgICAgIGlzSUUgJiYgIWlzSUU5ICYmXG4gICAgICBlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnICYmXG4gICAgICBrZXkgPT09ICdwbGFjZWhvbGRlcicgJiYgdmFsdWUgIT09ICcnICYmICFlbC5fX2llcGhcbiAgICApIHtcbiAgICAgIHZhciBibG9ja2VyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBibG9ja2VyKTtcbiAgICAgIH07XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGJsb2NrZXIpO1xuICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICBlbC5fX2llcGggPSB0cnVlOyAvKiBJRSBwbGFjZWhvbGRlciBwYXRjaGVkICovXG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfVxufVxuXG52YXIgYXR0cnMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQXR0cnMsXG4gIHVwZGF0ZTogdXBkYXRlQXR0cnNcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB1cGRhdGVDbGFzcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcbiAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICB2YXIgb2xkRGF0YSA9IG9sZFZub2RlLmRhdGE7XG4gIGlmIChcbiAgICBpc1VuZGVmKGRhdGEuc3RhdGljQ2xhc3MpICYmXG4gICAgaXNVbmRlZihkYXRhLmNsYXNzKSAmJiAoXG4gICAgICBpc1VuZGVmKG9sZERhdGEpIHx8IChcbiAgICAgICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgICAgICBpc1VuZGVmKG9sZERhdGEuY2xhc3MpXG4gICAgICApXG4gICAgKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjbHMgPSBnZW5DbGFzc0ZvclZub2RlKHZub2RlKTtcblxuICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBjbGFzc2VzXG4gIHZhciB0cmFuc2l0aW9uQ2xhc3MgPSBlbC5fdHJhbnNpdGlvbkNsYXNzZXM7XG4gIGlmIChpc0RlZih0cmFuc2l0aW9uQ2xhc3MpKSB7XG4gICAgY2xzID0gY29uY2F0KGNscywgc3RyaW5naWZ5Q2xhc3ModHJhbnNpdGlvbkNsYXNzKSk7XG4gIH1cblxuICAvLyBzZXQgdGhlIGNsYXNzXG4gIGlmIChjbHMgIT09IGVsLl9wcmV2Q2xhc3MpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xzKTtcbiAgICBlbC5fcHJldkNsYXNzID0gY2xzO1xuICB9XG59XG5cbnZhciBrbGFzcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVDbGFzcyxcbiAgdXBkYXRlOiB1cGRhdGVDbGFzc1xufTtcblxuLyogICovXG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGluIHNvbWUgY2FzZXMsIHRoZSBldmVudCB1c2VkIGhhcyB0byBiZSBkZXRlcm1pbmVkIGF0IHJ1bnRpbWVcbi8vIHNvIHdlIHVzZWQgc29tZSByZXNlcnZlZCB0b2tlbnMgZHVyaW5nIGNvbXBpbGUuXG52YXIgUkFOR0VfVE9LRU4gPSAnX19yJztcbnZhciBDSEVDS0JPWF9SQURJT19UT0tFTiA9ICdfX2MnO1xuXG4vKiAgKi9cblxuLy8gbm9ybWFsaXplIHYtbW9kZWwgZXZlbnQgdG9rZW5zIHRoYXQgY2FuIG9ubHkgYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lLlxuLy8gaXQncyBpbXBvcnRhbnQgdG8gcGxhY2UgdGhlIGV2ZW50IGFzIHRoZSBmaXJzdCBpbiB0aGUgYXJyYXkgYmVjYXVzZVxuLy8gdGhlIHdob2xlIHBvaW50IGlzIGVuc3VyaW5nIHRoZSB2LW1vZGVsIGNhbGxiYWNrIGdldHMgY2FsbGVkIGJlZm9yZVxuLy8gdXNlci1hdHRhY2hlZCBoYW5kbGVycy5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50cyAob24pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihvbltSQU5HRV9UT0tFTl0pKSB7XG4gICAgLy8gSUUgaW5wdXRbdHlwZT1yYW5nZV0gb25seSBzdXBwb3J0cyBgY2hhbmdlYCBldmVudFxuICAgIHZhciBldmVudCA9IGlzSUUgPyAnY2hhbmdlJyA6ICdpbnB1dCc7XG4gICAgb25bZXZlbnRdID0gW10uY29uY2F0KG9uW1JBTkdFX1RPS0VOXSwgb25bZXZlbnRdIHx8IFtdKTtcbiAgICBkZWxldGUgb25bUkFOR0VfVE9LRU5dO1xuICB9XG4gIC8vIFRoaXMgd2FzIG9yaWdpbmFsbHkgaW50ZW5kZWQgdG8gZml4ICM0NTIxIGJ1dCBubyBsb25nZXIgbmVjZXNzYXJ5XG4gIC8vIGFmdGVyIDIuNS4gS2VlcGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdCB3aXRoIGdlbmVyYXRlZCBjb2RlIGZyb20gPCAyLjRcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihvbltDSEVDS0JPWF9SQURJT19UT0tFTl0pKSB7XG4gICAgb24uY2hhbmdlID0gW10uY29uY2F0KG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXSwgb24uY2hhbmdlIHx8IFtdKTtcbiAgICBkZWxldGUgb25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dO1xuICB9XG59XG5cbnZhciB0YXJnZXQkMTtcblxuZnVuY3Rpb24gY3JlYXRlT25jZUhhbmRsZXIkMSAoZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgdmFyIF90YXJnZXQgPSB0YXJnZXQkMTsgLy8gc2F2ZSBjdXJyZW50IHRhcmdldCBlbGVtZW50IGluIGNsb3N1cmVcbiAgcmV0dXJuIGZ1bmN0aW9uIG9uY2VIYW5kbGVyICgpIHtcbiAgICB2YXIgcmVzID0gaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZSQyKGV2ZW50LCBvbmNlSGFuZGxlciwgY2FwdHVyZSwgX3RhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbi8vICM5NDQ2OiBGaXJlZm94IDw9IDUzIChpbiBwYXJ0aWN1bGFyLCBFU1IgNTIpIGhhcyBpbmNvcnJlY3QgRXZlbnQudGltZVN0YW1wXG4vLyBpbXBsZW1lbnRhdGlvbiBhbmQgZG9lcyBub3QgZmlyZSBtaWNyb3Rhc2tzIGluIGJldHdlZW4gZXZlbnQgcHJvcGFnYXRpb24sIHNvXG4vLyBzYWZlIHRvIGV4Y2x1ZGUuXG52YXIgdXNlTWljcm90YXNrRml4ID0gaXNVc2luZ01pY3JvVGFzayAmJiAhKGlzRkYgJiYgTnVtYmVyKGlzRkZbMV0pIDw9IDUzKTtcblxuZnVuY3Rpb24gYWRkJDEgKFxuICBuYW1lLFxuICBoYW5kbGVyLFxuICBjYXB0dXJlLFxuICBwYXNzaXZlXG4pIHtcbiAgLy8gYXN5bmMgZWRnZSBjYXNlICM2NTY2OiBpbm5lciBjbGljayBldmVudCB0cmlnZ2VycyBwYXRjaCwgZXZlbnQgaGFuZGxlclxuICAvLyBhdHRhY2hlZCB0byBvdXRlciBlbGVtZW50IGR1cmluZyBwYXRjaCwgYW5kIHRyaWdnZXJlZCBhZ2Fpbi4gVGhpc1xuICAvLyBoYXBwZW5zIGJlY2F1c2UgYnJvd3NlcnMgZmlyZSBtaWNyb3Rhc2sgdGlja3MgYmV0d2VlbiBldmVudCBwcm9wYWdhdGlvbi5cbiAgLy8gdGhlIHNvbHV0aW9uIGlzIHNpbXBsZTogd2Ugc2F2ZSB0aGUgdGltZXN0YW1wIHdoZW4gYSBoYW5kbGVyIGlzIGF0dGFjaGVkLFxuICAvLyBhbmQgdGhlIGhhbmRsZXIgd291bGQgb25seSBmaXJlIGlmIHRoZSBldmVudCBwYXNzZWQgdG8gaXQgd2FzIGZpcmVkXG4gIC8vIEFGVEVSIGl0IHdhcyBhdHRhY2hlZC5cbiAgaWYgKHVzZU1pY3JvdGFza0ZpeCkge1xuICAgIHZhciBhdHRhY2hlZFRpbWVzdGFtcCA9IGN1cnJlbnRGbHVzaFRpbWVzdGFtcDtcbiAgICB2YXIgb3JpZ2luYWwgPSBoYW5kbGVyO1xuICAgIGhhbmRsZXIgPSBvcmlnaW5hbC5fd3JhcHBlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vIGJ1YmJsaW5nLCBzaG91bGQgYWx3YXlzIGZpcmUuXG4gICAgICAgIC8vIHRoaXMgaXMganVzdCBhIHNhZmV0eSBuZXQgaW4gY2FzZSBldmVudC50aW1lU3RhbXAgaXMgdW5yZWxpYWJsZSBpblxuICAgICAgICAvLyBjZXJ0YWluIHdlaXJkIGVudmlyb25tZW50cy4uLlxuICAgICAgICBlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0IHx8XG4gICAgICAgIC8vIGV2ZW50IGlzIGZpcmVkIGFmdGVyIGhhbmRsZXIgYXR0YWNobWVudFxuICAgICAgICBlLnRpbWVTdGFtcCA+PSBhdHRhY2hlZFRpbWVzdGFtcCB8fFxuICAgICAgICAvLyBiYWlsIGZvciBlbnZpcm9ubWVudHMgdGhhdCBoYXZlIGJ1Z2d5IGV2ZW50LnRpbWVTdGFtcCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgLy8gIzk0NjIgaU9TIDkgYnVnOiBldmVudC50aW1lU3RhbXAgaXMgMCBhZnRlciBoaXN0b3J5LnB1c2hTdGF0ZVxuICAgICAgICAvLyAjOTY4MSBRdFdlYkVuZ2luZSBldmVudC50aW1lU3RhbXAgaXMgbmVnYXRpdmUgdmFsdWVcbiAgICAgICAgZS50aW1lU3RhbXAgPD0gMCB8fFxuICAgICAgICAvLyAjOTQ0OCBiYWlsIGlmIGV2ZW50IGlzIGZpcmVkIGluIGFub3RoZXIgZG9jdW1lbnQgaW4gYSBtdWx0aS1wYWdlXG4gICAgICAgIC8vIGVsZWN0cm9uL253LmpzIGFwcCwgc2luY2UgZXZlbnQudGltZVN0YW1wIHdpbGwgYmUgdXNpbmcgYSBkaWZmZXJlbnRcbiAgICAgICAgLy8gc3RhcnRpbmcgcmVmZXJlbmNlXG4gICAgICAgIGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHRhcmdldCQxLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgbmFtZSxcbiAgICBoYW5kbGVyLFxuICAgIHN1cHBvcnRzUGFzc2l2ZVxuICAgICAgPyB7IGNhcHR1cmU6IGNhcHR1cmUsIHBhc3NpdmU6IHBhc3NpdmUgfVxuICAgICAgOiBjYXB0dXJlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSQyIChcbiAgbmFtZSxcbiAgaGFuZGxlcixcbiAgY2FwdHVyZSxcbiAgX3RhcmdldFxuKSB7XG4gIChfdGFyZ2V0IHx8IHRhcmdldCQxKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgIG5hbWUsXG4gICAgaGFuZGxlci5fd3JhcHBlciB8fCBoYW5kbGVyLFxuICAgIGNhcHR1cmVcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRE9NTGlzdGVuZXJzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5vbikgJiYgaXNVbmRlZih2bm9kZS5kYXRhLm9uKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvbiA9IHZub2RlLmRhdGEub24gfHwge307XG4gIHZhciBvbGRPbiA9IG9sZFZub2RlLmRhdGEub24gfHwge307XG4gIHRhcmdldCQxID0gdm5vZGUuZWxtO1xuICBub3JtYWxpemVFdmVudHMob24pO1xuICB1cGRhdGVMaXN0ZW5lcnMob24sIG9sZE9uLCBhZGQkMSwgcmVtb3ZlJDIsIGNyZWF0ZU9uY2VIYW5kbGVyJDEsIHZub2RlLmNvbnRleHQpO1xuICB0YXJnZXQkMSA9IHVuZGVmaW5lZDtcbn1cblxudmFyIGV2ZW50cyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVET01MaXN0ZW5lcnMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzXG59O1xuXG4vKiAgKi9cblxudmFyIHN2Z0NvbnRhaW5lcjtcblxuZnVuY3Rpb24gdXBkYXRlRE9NUHJvcHMgKG9sZFZub2RlLCB2bm9kZSkge1xuICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmRvbVByb3BzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuZG9tUHJvcHMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGtleSwgY3VyO1xuICB2YXIgZWxtID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkUHJvcHMgPSBvbGRWbm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzIHx8IHt9O1xuICAvLyBjbG9uZSBvYnNlcnZlZCBvYmplY3RzLCBhcyB0aGUgdXNlciBwcm9iYWJseSB3YW50cyB0byBtdXRhdGUgaXRcbiAgaWYgKGlzRGVmKHByb3BzLl9fb2JfXykpIHtcbiAgICBwcm9wcyA9IHZub2RlLmRhdGEuZG9tUHJvcHMgPSBleHRlbmQoe30sIHByb3BzKTtcbiAgfVxuXG4gIGZvciAoa2V5IGluIG9sZFByb3BzKSB7XG4gICAgaWYgKCEoa2V5IGluIHByb3BzKSkge1xuICAgICAgZWxtW2tleV0gPSAnJztcbiAgICB9XG4gIH1cblxuICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgIGN1ciA9IHByb3BzW2tleV07XG4gICAgLy8gaWdub3JlIGNoaWxkcmVuIGlmIHRoZSBub2RlIGhhcyB0ZXh0Q29udGVudCBvciBpbm5lckhUTUwsXG4gICAgLy8gYXMgdGhlc2Ugd2lsbCB0aHJvdyBhd2F5IGV4aXN0aW5nIERPTSBub2RlcyBhbmQgY2F1c2UgcmVtb3ZhbCBlcnJvcnNcbiAgICAvLyBvbiBzdWJzZXF1ZW50IHBhdGNoZXMgKCMzMzYwKVxuICAgIGlmIChrZXkgPT09ICd0ZXh0Q29udGVudCcgfHwga2V5ID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgaWYgKHZub2RlLmNoaWxkcmVuKSB7IHZub2RlLmNoaWxkcmVuLmxlbmd0aCA9IDA7IH1cbiAgICAgIGlmIChjdXIgPT09IG9sZFByb3BzW2tleV0pIHsgY29udGludWUgfVxuICAgICAgLy8gIzY2MDEgd29yayBhcm91bmQgQ2hyb21lIHZlcnNpb24gPD0gNTUgYnVnIHdoZXJlIHNpbmdsZSB0ZXh0Tm9kZVxuICAgICAgLy8gcmVwbGFjZWQgYnkgaW5uZXJIVE1ML3RleHRDb250ZW50IHJldGFpbnMgaXRzIHBhcmVudE5vZGUgcHJvcGVydHlcbiAgICAgIGlmIChlbG0uY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAndmFsdWUnICYmIGVsbS50YWdOYW1lICE9PSAnUFJPR1JFU1MnKSB7XG4gICAgICAvLyBzdG9yZSB2YWx1ZSBhcyBfdmFsdWUgYXMgd2VsbCBzaW5jZVxuICAgICAgLy8gbm9uLXN0cmluZyB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZFxuICAgICAgZWxtLl92YWx1ZSA9IGN1cjtcbiAgICAgIC8vIGF2b2lkIHJlc2V0dGluZyBjdXJzb3IgcG9zaXRpb24gd2hlbiB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgdmFyIHN0ckN1ciA9IGlzVW5kZWYoY3VyKSA/ICcnIDogU3RyaW5nKGN1cik7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlVmFsdWUoZWxtLCBzdHJDdXIpKSB7XG4gICAgICAgIGVsbS52YWx1ZSA9IHN0ckN1cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2lubmVySFRNTCcgJiYgaXNTVkcoZWxtLnRhZ05hbWUpICYmIGlzVW5kZWYoZWxtLmlubmVySFRNTCkpIHtcbiAgICAgIC8vIElFIGRvZXNuJ3Qgc3VwcG9ydCBpbm5lckhUTUwgZm9yIFNWRyBlbGVtZW50c1xuICAgICAgc3ZnQ29udGFpbmVyID0gc3ZnQ29udGFpbmVyIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3ZnQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPHN2Zz5cIiArIGN1ciArIFwiPC9zdmc+XCI7XG4gICAgICB2YXIgc3ZnID0gc3ZnQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoZWxtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGVsbS5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChzdmcuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoc3ZnLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBza2lwIHRoZSB1cGRhdGUgaWYgb2xkIGFuZCBuZXcgVkRPTSBzdGF0ZSBpcyB0aGUgc2FtZS5cbiAgICAgIC8vIGB2YWx1ZWAgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5IGJlY2F1c2UgdGhlIERPTSB2YWx1ZSBtYXkgYmUgdGVtcG9yYXJpbHlcbiAgICAgIC8vIG91dCBvZiBzeW5jIHdpdGggVkRPTSBzdGF0ZSBkdWUgdG8gZm9jdXMsIGNvbXBvc2l0aW9uIGFuZCBtb2RpZmllcnMuXG4gICAgICAvLyBUaGlzICAjNDUyMSBieSBza2lwcGluZyB0aGUgdW5uZWNlc3NhcnkgYGNoZWNrZWRgIHVwZGF0ZS5cbiAgICAgIGN1ciAhPT0gb2xkUHJvcHNba2V5XVxuICAgICkge1xuICAgICAgLy8gc29tZSBwcm9wZXJ0eSB1cGRhdGVzIGNhbiB0aHJvd1xuICAgICAgLy8gZS5nLiBgdmFsdWVgIG9uIDxwcm9ncmVzcz4gdy8gbm9uLWZpbml0ZSB2YWx1ZVxuICAgICAgdHJ5IHtcbiAgICAgICAgZWxtW2tleV0gPSBjdXI7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxufVxuXG4vLyBjaGVjayBwbGF0Zm9ybXMvd2ViL3V0aWwvYXR0cnMuanMgYWNjZXB0VmFsdWVcblxuXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVWYWx1ZSAoZWxtLCBjaGVja1ZhbCkge1xuICByZXR1cm4gKCFlbG0uY29tcG9zaW5nICYmIChcbiAgICBlbG0udGFnTmFtZSA9PT0gJ09QVElPTicgfHxcbiAgICBpc05vdEluRm9jdXNBbmREaXJ0eShlbG0sIGNoZWNrVmFsKSB8fFxuICAgIGlzRGlydHlXaXRoTW9kaWZpZXJzKGVsbSwgY2hlY2tWYWwpXG4gICkpXG59XG5cbmZ1bmN0aW9uIGlzTm90SW5Gb2N1c0FuZERpcnR5IChlbG0sIGNoZWNrVmFsKSB7XG4gIC8vIHJldHVybiB0cnVlIHdoZW4gdGV4dGJveCAoLm51bWJlciBhbmQgLnRyaW0pIGxvc2VzIGZvY3VzIGFuZCBpdHMgdmFsdWUgaXNcbiAgLy8gbm90IGVxdWFsIHRvIHRoZSB1cGRhdGVkIHZhbHVlXG4gIHZhciBub3RJbkZvY3VzID0gdHJ1ZTtcbiAgLy8gIzYxNTdcbiAgLy8gd29yayBhcm91bmQgSUUgYnVnIHdoZW4gYWNjZXNzaW5nIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW4gYW4gaWZyYW1lXG4gIHRyeSB7IG5vdEluRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbG07IH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiBub3RJbkZvY3VzICYmIGVsbS52YWx1ZSAhPT0gY2hlY2tWYWxcbn1cblxuZnVuY3Rpb24gaXNEaXJ0eVdpdGhNb2RpZmllcnMgKGVsbSwgbmV3VmFsKSB7XG4gIHZhciB2YWx1ZSA9IGVsbS52YWx1ZTtcbiAgdmFyIG1vZGlmaWVycyA9IGVsbS5fdk1vZGlmaWVyczsgLy8gaW5qZWN0ZWQgYnkgdi1tb2RlbCBydW50aW1lXG4gIGlmIChpc0RlZihtb2RpZmllcnMpKSB7XG4gICAgaWYgKG1vZGlmaWVycy5udW1iZXIpIHtcbiAgICAgIHJldHVybiB0b051bWJlcih2YWx1ZSkgIT09IHRvTnVtYmVyKG5ld1ZhbClcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVycy50cmltKSB7XG4gICAgICByZXR1cm4gdmFsdWUudHJpbSgpICE9PSBuZXdWYWwudHJpbSgpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZSAhPT0gbmV3VmFsXG59XG5cbnZhciBkb21Qcm9wcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVET01Qcm9wcyxcbiAgdXBkYXRlOiB1cGRhdGVET01Qcm9wc1xufTtcblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbWVyZ2Ugc3RhdGljIGFuZCBkeW5hbWljIHN0eWxlIGRhdGEgb24gdGhlIHNhbWUgdm5vZGVcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlRGF0YSAoZGF0YSkge1xuICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcoZGF0YS5zdHlsZSk7XG4gIC8vIHN0YXRpYyBzdHlsZSBpcyBwcmUtcHJvY2Vzc2VkIGludG8gYW4gb2JqZWN0IGR1cmluZyBjb21waWxhdGlvblxuICAvLyBhbmQgaXMgYWx3YXlzIGEgZnJlc2ggb2JqZWN0LCBzbyBpdCdzIHNhZmUgdG8gbWVyZ2UgaW50byBpdFxuICByZXR1cm4gZGF0YS5zdGF0aWNTdHlsZVxuICAgID8gZXh0ZW5kKGRhdGEuc3RhdGljU3R5bGUsIHN0eWxlKVxuICAgIDogc3R5bGVcbn1cblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qKlxuICogcGFyZW50IGNvbXBvbmVudCBzdHlsZSBzaG91bGQgYmUgYWZ0ZXIgY2hpbGQnc1xuICogc28gdGhhdCBwYXJlbnQgY29tcG9uZW50J3Mgc3R5bGUgY291bGQgb3ZlcnJpZGUgaXRcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGUgKHZub2RlLCBjaGVja0NoaWxkKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIHN0eWxlRGF0YTtcblxuICBpZiAoY2hlY2tDaGlsZCkge1xuICAgIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcbiAgICB3aGlsZSAoY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgICAgaWYgKFxuICAgICAgICBjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEgJiZcbiAgICAgICAgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShjaGlsZE5vZGUuZGF0YSkpXG4gICAgICApIHtcbiAgICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YSh2bm9kZS5kYXRhKSkpIHtcbiAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICB9XG5cbiAgdmFyIHBhcmVudE5vZGUgPSB2bm9kZTtcbiAgd2hpbGUgKChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHBhcmVudE5vZGUuZGF0YSAmJiAoc3R5bGVEYXRhID0gbm9ybWFsaXplU3R5bGVEYXRhKHBhcmVudE5vZGUuZGF0YSkpKSB7XG4gICAgICBleHRlbmQocmVzLCBzdHlsZURhdGEpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgY3NzVmFyUkUgPSAvXi0tLztcbnZhciBpbXBvcnRhbnRSRSA9IC9cXHMqIWltcG9ydGFudCQvO1xudmFyIHNldFByb3AgPSBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGNzc1ZhclJFLnRlc3QobmFtZSkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWwpO1xuICB9IGVsc2UgaWYgKGltcG9ydGFudFJFLnRlc3QodmFsKSkge1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KGh5cGhlbmF0ZShuYW1lKSwgdmFsLnJlcGxhY2UoaW1wb3J0YW50UkUsICcnKSwgJ2ltcG9ydGFudCcpO1xuICB9IGVsc2Uge1xuICAgIHZhciBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZShuYW1lKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAvLyBTdXBwb3J0IHZhbHVlcyBhcnJheSBjcmVhdGVkIGJ5IGF1dG9wcmVmaXhlciwgZS5nLlxuICAgICAgLy8ge2Rpc3BsYXk6IFtcIi13ZWJraXQtYm94XCIsIFwiLW1zLWZsZXhib3hcIiwgXCJmbGV4XCJdfVxuICAgICAgLy8gU2V0IHRoZW0gb25lIGJ5IG9uZSwgYW5kIHRoZSBicm93c2VyIHdpbGwgb25seSBzZXQgdGhvc2UgaXQgY2FuIHJlY29nbml6ZVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWxbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlW25vcm1hbGl6ZWROYW1lXSA9IHZhbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciB2ZW5kb3JOYW1lcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuXG52YXIgZW1wdHlTdHlsZTtcbnZhciBub3JtYWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHByb3ApIHtcbiAgZW1wdHlTdHlsZSA9IGVtcHR5U3R5bGUgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gIHByb3AgPSBjYW1lbGl6ZShwcm9wKTtcbiAgaWYgKHByb3AgIT09ICdmaWx0ZXInICYmIChwcm9wIGluIGVtcHR5U3R5bGUpKSB7XG4gICAgcmV0dXJuIHByb3BcbiAgfVxuICB2YXIgY2FwTmFtZSA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvck5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSB2ZW5kb3JOYW1lc1tpXSArIGNhcE5hbWU7XG4gICAgaWYgKG5hbWUgaW4gZW1wdHlTdHlsZSkge1xuICAgICAgcmV0dXJuIG5hbWVcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB1cGRhdGVTdHlsZSAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xuXG4gIGlmIChpc1VuZGVmKGRhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYoZGF0YS5zdHlsZSkgJiZcbiAgICBpc1VuZGVmKG9sZERhdGEuc3RhdGljU3R5bGUpICYmIGlzVW5kZWYob2xkRGF0YS5zdHlsZSlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3VyLCBuYW1lO1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciBvbGRTdGF0aWNTdHlsZSA9IG9sZERhdGEuc3RhdGljU3R5bGU7XG4gIHZhciBvbGRTdHlsZUJpbmRpbmcgPSBvbGREYXRhLm5vcm1hbGl6ZWRTdHlsZSB8fCBvbGREYXRhLnN0eWxlIHx8IHt9O1xuXG4gIC8vIGlmIHN0YXRpYyBzdHlsZSBleGlzdHMsIHN0eWxlYmluZGluZyBhbHJlYWR5IG1lcmdlZCBpbnRvIGl0IHdoZW4gZG9pbmcgbm9ybWFsaXplU3R5bGVEYXRhXG4gIHZhciBvbGRTdHlsZSA9IG9sZFN0YXRpY1N0eWxlIHx8IG9sZFN0eWxlQmluZGluZztcblxuICB2YXIgc3R5bGUgPSBub3JtYWxpemVTdHlsZUJpbmRpbmcodm5vZGUuZGF0YS5zdHlsZSkgfHwge307XG5cbiAgLy8gc3RvcmUgbm9ybWFsaXplZCBzdHlsZSB1bmRlciBhIGRpZmZlcmVudCBrZXkgZm9yIG5leHQgZGlmZlxuICAvLyBtYWtlIHN1cmUgdG8gY2xvbmUgaXQgaWYgaXQncyByZWFjdGl2ZSwgc2luY2UgdGhlIHVzZXIgbGlrZWx5IHdhbnRzXG4gIC8vIHRvIG11dGF0ZSBpdC5cbiAgdm5vZGUuZGF0YS5ub3JtYWxpemVkU3R5bGUgPSBpc0RlZihzdHlsZS5fX29iX18pXG4gICAgPyBleHRlbmQoe30sIHN0eWxlKVxuICAgIDogc3R5bGU7XG5cbiAgdmFyIG5ld1N0eWxlID0gZ2V0U3R5bGUodm5vZGUsIHRydWUpO1xuXG4gIGZvciAobmFtZSBpbiBvbGRTdHlsZSkge1xuICAgIGlmIChpc1VuZGVmKG5ld1N0eWxlW25hbWVdKSkge1xuICAgICAgc2V0UHJvcChlbCwgbmFtZSwgJycpO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gbmV3U3R5bGUpIHtcbiAgICBjdXIgPSBuZXdTdHlsZVtuYW1lXTtcbiAgICBpZiAoY3VyICE9PSBvbGRTdHlsZVtuYW1lXSkge1xuICAgICAgLy8gaWU5IHNldHRpbmcgdG8gbnVsbCBoYXMgbm8gZWZmZWN0LCBtdXN0IHVzZSBlbXB0eSBzdHJpbmdcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsIGN1ciA9PSBudWxsID8gJycgOiBjdXIpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc3R5bGUgPSB7XG4gIGNyZWF0ZTogdXBkYXRlU3R5bGUsXG4gIHVwZGF0ZTogdXBkYXRlU3R5bGVcbn07XG5cbi8qICAqL1xuXG52YXIgd2hpdGVzcGFjZVJFID0gL1xccysvO1xuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIFNWRyBzaW5jZSBjbGFzc0xpc3QgaXMgbm90IHN1cHBvcnRlZCBvblxuICogU1ZHIGVsZW1lbnRzIGluIElFXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY2xzLnNwbGl0KHdoaXRlc3BhY2VSRSkuZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG4gICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgfVxuICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgaWYgKGN1cikge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVUcmFuc2l0aW9uIChkZWYkJDEpIHtcbiAgaWYgKCFkZWYkJDEpIHtcbiAgICByZXR1cm5cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgaWYgKGRlZiQkMS5jc3MgIT09IGZhbHNlKSB7XG4gICAgICBleHRlbmQocmVzLCBhdXRvQ3NzVHJhbnNpdGlvbihkZWYkJDEubmFtZSB8fCAndicpKTtcbiAgICB9XG4gICAgZXh0ZW5kKHJlcywgZGVmJCQxKTtcbiAgICByZXR1cm4gcmVzXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxKVxuICB9XG59XG5cbnZhciBhdXRvQ3NzVHJhbnNpdGlvbiA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4ge1xuICAgIGVudGVyQ2xhc3M6IChuYW1lICsgXCItZW50ZXJcIiksXG4gICAgZW50ZXJUb0NsYXNzOiAobmFtZSArIFwiLWVudGVyLXRvXCIpLFxuICAgIGVudGVyQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItZW50ZXItYWN0aXZlXCIpLFxuICAgIGxlYXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmVcIiksXG4gICAgbGVhdmVUb0NsYXNzOiAobmFtZSArIFwiLWxlYXZlLXRvXCIpLFxuICAgIGxlYXZlQWN0aXZlQ2xhc3M6IChuYW1lICsgXCItbGVhdmUtYWN0aXZlXCIpXG4gIH1cbn0pO1xuXG52YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiAhaXNJRTk7XG52YXIgVFJBTlNJVElPTiA9ICd0cmFuc2l0aW9uJztcbnZhciBBTklNQVRJT04gPSAnYW5pbWF0aW9uJztcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xudmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zaXRpb24nO1xudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9ICd0cmFuc2l0aW9uZW5kJztcbnZhciBhbmltYXRpb25Qcm9wID0gJ2FuaW1hdGlvbic7XG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSAnYW5pbWF0aW9uZW5kJztcbmlmIChoYXNUcmFuc2l0aW9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAod2luZG93Lm9udHJhbnNpdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHRyYW5zaXRpb25Qcm9wID0gJ1dlYmtpdFRyYW5zaXRpb24nO1xuICAgIHRyYW5zaXRpb25FbmRFdmVudCA9ICd3ZWJraXRUcmFuc2l0aW9uRW5kJztcbiAgfVxuICBpZiAod2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBhbmltYXRpb25Qcm9wID0gJ1dlYmtpdEFuaW1hdGlvbic7XG4gICAgYW5pbWF0aW9uRW5kRXZlbnQgPSAnd2Via2l0QW5pbWF0aW9uRW5kJztcbiAgfVxufVxuXG4vLyBiaW5kaW5nIHRvIHdpbmRvdyBpcyBuZWNlc3NhcnkgdG8gbWFrZSBob3QgcmVsb2FkIHdvcmsgaW4gSUUgaW4gc3RyaWN0IG1vZGVcbnZhciByYWYgPSBpbkJyb3dzZXJcbiAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KVxuICAgIDogc2V0VGltZW91dFxuICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGZ1bmN0aW9uIChmbikgeyByZXR1cm4gZm4oKTsgfTtcblxuZnVuY3Rpb24gbmV4dEZyYW1lIChmbikge1xuICByYWYoZnVuY3Rpb24gKCkge1xuICAgIHJhZihmbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgdmFyIHRyYW5zaXRpb25DbGFzc2VzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzIHx8IChlbC5fdHJhbnNpdGlvbkNsYXNzZXMgPSBbXSk7XG4gIGlmICh0cmFuc2l0aW9uQ2xhc3Nlcy5pbmRleE9mKGNscykgPCAwKSB7XG4gICAgdHJhbnNpdGlvbkNsYXNzZXMucHVzaChjbHMpO1xuICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYW5zaXRpb25DbGFzcyAoZWwsIGNscykge1xuICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgcmVtb3ZlKGVsLl90cmFuc2l0aW9uQ2xhc3NlcywgY2xzKTtcbiAgfVxuICByZW1vdmVDbGFzcyhlbCwgY2xzKTtcbn1cblxuZnVuY3Rpb24gd2hlblRyYW5zaXRpb25FbmRzIChcbiAgZWwsXG4gIGV4cGVjdGVkVHlwZSxcbiAgY2Jcbikge1xuICB2YXIgcmVmID0gZ2V0VHJhbnNpdGlvbkluZm8oZWwsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gIHZhciB0aW1lb3V0ID0gcmVmLnRpbWVvdXQ7XG4gIHZhciBwcm9wQ291bnQgPSByZWYucHJvcENvdW50O1xuICBpZiAoIXR5cGUpIHsgcmV0dXJuIGNiKCkgfVxuICB2YXIgZXZlbnQgPSB0eXBlID09PSBUUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gIHZhciBlbmRlZCA9IDA7XG4gIHZhciBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xuICAgIGNiKCk7XG4gIH07XG4gIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgaWYgKCsrZW5kZWQgPj0gcHJvcENvdW50KSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuZGVkIDwgcHJvcENvdW50KSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH0sIHRpbWVvdXQgKyAxKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25FbmQpO1xufVxuXG52YXIgdHJhbnNmb3JtUkUgPSAvXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uSW5mbyAoZWwsIGV4cGVjdGVkVHlwZSkge1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAvLyBKU0RPTSBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gIHZhciB0cmFuc2l0aW9uRGVsYXlzID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbnMgPSAoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgdHJhbnNpdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KHRyYW5zaXRpb25EZWxheXMsIHRyYW5zaXRpb25EdXJhdGlvbnMpO1xuICB2YXIgYW5pbWF0aW9uRGVsYXlzID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0RlbGF5J10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgYW5pbWF0aW9uRHVyYXRpb25zID0gKHN0eWxlc1thbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ10gfHwgJycpLnNwbGl0KCcsICcpO1xuICB2YXIgYW5pbWF0aW9uVGltZW91dCA9IGdldFRpbWVvdXQoYW5pbWF0aW9uRGVsYXlzLCBhbmltYXRpb25EdXJhdGlvbnMpO1xuXG4gIHZhciB0eXBlO1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHZhciBwcm9wQ291bnQgPSAwO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGV4cGVjdGVkVHlwZSA9PT0gVFJBTlNJVElPTikge1xuICAgIGlmICh0cmFuc2l0aW9uVGltZW91dCA+IDApIHtcbiAgICAgIHR5cGUgPSBUUkFOU0lUSU9OO1xuICAgICAgdGltZW91dCA9IHRyYW5zaXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gQU5JTUFUSU9OKSB7XG4gICAgaWYgKGFuaW1hdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gQU5JTUFUSU9OO1xuICAgICAgdGltZW91dCA9IGFuaW1hdGlvblRpbWVvdXQ7XG4gICAgICBwcm9wQ291bnQgPSBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aW1lb3V0ID0gTWF0aC5tYXgodHJhbnNpdGlvblRpbWVvdXQsIGFuaW1hdGlvblRpbWVvdXQpO1xuICAgIHR5cGUgPSB0aW1lb3V0ID4gMFxuICAgICAgPyB0cmFuc2l0aW9uVGltZW91dCA+IGFuaW1hdGlvblRpbWVvdXRcbiAgICAgICAgPyBUUkFOU0lUSU9OXG4gICAgICAgIDogQU5JTUFUSU9OXG4gICAgICA6IG51bGw7XG4gICAgcHJvcENvdW50ID0gdHlwZVxuICAgICAgPyB0eXBlID09PSBUUkFOU0lUSU9OXG4gICAgICAgID8gdHJhbnNpdGlvbkR1cmF0aW9ucy5sZW5ndGhcbiAgICAgICAgOiBhbmltYXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICA6IDA7XG4gIH1cbiAgdmFyIGhhc1RyYW5zZm9ybSA9XG4gICAgdHlwZSA9PT0gVFJBTlNJVElPTiAmJlxuICAgIHRyYW5zZm9ybVJFLnRlc3Qoc3R5bGVzW3RyYW5zaXRpb25Qcm9wICsgJ1Byb3BlcnR5J10pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdGltZW91dDogdGltZW91dCxcbiAgICBwcm9wQ291bnQ6IHByb3BDb3VudCxcbiAgICBoYXNUcmFuc2Zvcm06IGhhc1RyYW5zZm9ybVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRpbWVvdXQgKGRlbGF5cywgZHVyYXRpb25zKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHdoaWxlIChkZWxheXMubGVuZ3RoIDwgZHVyYXRpb25zLmxlbmd0aCkge1xuICAgIGRlbGF5cyA9IGRlbGF5cy5jb25jYXQoZGVsYXlzKTtcbiAgfVxuXG4gIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBkdXJhdGlvbnMubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgcmV0dXJuIHRvTXMoZCkgKyB0b01zKGRlbGF5c1tpXSlcbiAgfSkpXG59XG5cbi8vIE9sZCB2ZXJzaW9ucyBvZiBDaHJvbWl1bSAoYmVsb3cgNjEuMC4zMTYzLjEwMCkgZm9ybWF0cyBmbG9hdGluZyBwb2ludGVyIG51bWJlcnNcbi8vIGluIGEgbG9jYWxlLWRlcGVuZGVudCB3YXksIHVzaW5nIGEgY29tbWEgaW5zdGVhZCBvZiBhIGRvdC5cbi8vIElmIGNvbW1hIGlzIG5vdCByZXBsYWNlZCB3aXRoIGEgZG90LCB0aGUgaW5wdXQgd2lsbCBiZSByb3VuZGVkIGRvd24gKGkuZS4gYWN0aW5nXG4vLyBhcyBhIGZsb29yIGZ1bmN0aW9uKSBjYXVzaW5nIHVuZXhwZWN0ZWQgYmVoYXZpb3JzXG5mdW5jdGlvbiB0b01zIChzKSB7XG4gIHJldHVybiBOdW1iZXIocy5zbGljZSgwLCAtMSkucmVwbGFjZSgnLCcsICcuJykpICogMTAwMFxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZW50ZXIgKHZub2RlLCB0b2dnbGVEaXNwbGF5KSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGxlYXZlIGNhbGxiYWNrIG5vd1xuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgZWwuX2xlYXZlQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBlbC5fbGVhdmVDYigpO1xuICB9XG5cbiAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICBpZiAoaXNVbmRlZihkYXRhKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0RlZihlbC5fZW50ZXJDYikgfHwgZWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBjc3MgPSBkYXRhLmNzcztcbiAgdmFyIHR5cGUgPSBkYXRhLnR5cGU7XG4gIHZhciBlbnRlckNsYXNzID0gZGF0YS5lbnRlckNsYXNzO1xuICB2YXIgZW50ZXJUb0NsYXNzID0gZGF0YS5lbnRlclRvQ2xhc3M7XG4gIHZhciBlbnRlckFjdGl2ZUNsYXNzID0gZGF0YS5lbnRlckFjdGl2ZUNsYXNzO1xuICB2YXIgYXBwZWFyQ2xhc3MgPSBkYXRhLmFwcGVhckNsYXNzO1xuICB2YXIgYXBwZWFyVG9DbGFzcyA9IGRhdGEuYXBwZWFyVG9DbGFzcztcbiAgdmFyIGFwcGVhckFjdGl2ZUNsYXNzID0gZGF0YS5hcHBlYXJBY3RpdmVDbGFzcztcbiAgdmFyIGJlZm9yZUVudGVyID0gZGF0YS5iZWZvcmVFbnRlcjtcbiAgdmFyIGVudGVyID0gZGF0YS5lbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXIgPSBkYXRhLmFmdGVyRW50ZXI7XG4gIHZhciBlbnRlckNhbmNlbGxlZCA9IGRhdGEuZW50ZXJDYW5jZWxsZWQ7XG4gIHZhciBiZWZvcmVBcHBlYXIgPSBkYXRhLmJlZm9yZUFwcGVhcjtcbiAgdmFyIGFwcGVhciA9IGRhdGEuYXBwZWFyO1xuICB2YXIgYWZ0ZXJBcHBlYXIgPSBkYXRhLmFmdGVyQXBwZWFyO1xuICB2YXIgYXBwZWFyQ2FuY2VsbGVkID0gZGF0YS5hcHBlYXJDYW5jZWxsZWQ7XG4gIHZhciBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG5cbiAgLy8gYWN0aXZlSW5zdGFuY2Ugd2lsbCBhbHdheXMgYmUgdGhlIDx0cmFuc2l0aW9uPiBjb21wb25lbnQgbWFuYWdpbmcgdGhpc1xuICAvLyB0cmFuc2l0aW9uLiBPbmUgZWRnZSBjYXNlIHRvIGNoZWNrIGlzIHdoZW4gdGhlIDx0cmFuc2l0aW9uPiBpcyBwbGFjZWRcbiAgLy8gYXMgdGhlIHJvb3Qgbm9kZSBvZiBhIGNoaWxkIGNvbXBvbmVudC4gSW4gdGhhdCBjYXNlIHdlIG5lZWQgdG8gY2hlY2tcbiAgLy8gPHRyYW5zaXRpb24+J3MgcGFyZW50IGZvciBhcHBlYXIgY2hlY2suXG4gIHZhciBjb250ZXh0ID0gYWN0aXZlSW5zdGFuY2U7XG4gIHZhciB0cmFuc2l0aW9uTm9kZSA9IGFjdGl2ZUluc3RhbmNlLiR2bm9kZTtcbiAgd2hpbGUgKHRyYW5zaXRpb25Ob2RlICYmIHRyYW5zaXRpb25Ob2RlLnBhcmVudCkge1xuICAgIGNvbnRleHQgPSB0cmFuc2l0aW9uTm9kZS5jb250ZXh0O1xuICAgIHRyYW5zaXRpb25Ob2RlID0gdHJhbnNpdGlvbk5vZGUucGFyZW50O1xuICB9XG5cbiAgdmFyIGlzQXBwZWFyID0gIWNvbnRleHQuX2lzTW91bnRlZCB8fCAhdm5vZGUuaXNSb290SW5zZXJ0O1xuXG4gIGlmIChpc0FwcGVhciAmJiAhYXBwZWFyICYmIGFwcGVhciAhPT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdGFydENsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQ2xhc3NcbiAgICA/IGFwcGVhckNsYXNzXG4gICAgOiBlbnRlckNsYXNzO1xuICB2YXIgYWN0aXZlQ2xhc3MgPSBpc0FwcGVhciAmJiBhcHBlYXJBY3RpdmVDbGFzc1xuICAgID8gYXBwZWFyQWN0aXZlQ2xhc3NcbiAgICA6IGVudGVyQWN0aXZlQ2xhc3M7XG4gIHZhciB0b0NsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyVG9DbGFzc1xuICAgID8gYXBwZWFyVG9DbGFzc1xuICAgIDogZW50ZXJUb0NsYXNzO1xuXG4gIHZhciBiZWZvcmVFbnRlckhvb2sgPSBpc0FwcGVhclxuICAgID8gKGJlZm9yZUFwcGVhciB8fCBiZWZvcmVFbnRlcilcbiAgICA6IGJlZm9yZUVudGVyO1xuICB2YXIgZW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/ICh0eXBlb2YgYXBwZWFyID09PSAnZnVuY3Rpb24nID8gYXBwZWFyIDogZW50ZXIpXG4gICAgOiBlbnRlcjtcbiAgdmFyIGFmdGVyRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/IChhZnRlckFwcGVhciB8fCBhZnRlckVudGVyKVxuICAgIDogYWZ0ZXJFbnRlcjtcbiAgdmFyIGVudGVyQ2FuY2VsbGVkSG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYXBwZWFyQ2FuY2VsbGVkIHx8IGVudGVyQ2FuY2VsbGVkKVxuICAgIDogZW50ZXJDYW5jZWxsZWQ7XG5cbiAgdmFyIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgIGlzT2JqZWN0KGR1cmF0aW9uKVxuICAgICAgPyBkdXJhdGlvbi5lbnRlclxuICAgICAgOiBkdXJhdGlvblxuICApO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGV4cGxpY2l0RW50ZXJEdXJhdGlvbiAhPSBudWxsKSB7XG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24sICdlbnRlcicsIHZub2RlKTtcbiAgfVxuXG4gIHZhciBleHBlY3RzQ1NTID0gY3NzICE9PSBmYWxzZSAmJiAhaXNJRTk7XG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChlbnRlckhvb2spO1xuXG4gIHZhciBjYiA9IGVsLl9lbnRlckNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIH1cbiAgICAgIGVudGVyQ2FuY2VsbGVkSG9vayAmJiBlbnRlckNhbmNlbGxlZEhvb2soZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlckVudGVySG9vayAmJiBhZnRlckVudGVySG9vayhlbCk7XG4gICAgfVxuICAgIGVsLl9lbnRlckNiID0gbnVsbDtcbiAgfSk7XG5cbiAgaWYgKCF2bm9kZS5kYXRhLnNob3cpIHtcbiAgICAvLyByZW1vdmUgcGVuZGluZyBsZWF2ZSBlbGVtZW50IG9uIGVudGVyIGJ5IGluamVjdGluZyBhbiBpbnNlcnQgaG9va1xuICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAnaW5zZXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICB2YXIgcGVuZGluZ05vZGUgPSBwYXJlbnQgJiYgcGFyZW50Ll9wZW5kaW5nICYmIHBhcmVudC5fcGVuZGluZ1t2bm9kZS5rZXldO1xuICAgICAgaWYgKHBlbmRpbmdOb2RlICYmXG4gICAgICAgIHBlbmRpbmdOb2RlLnRhZyA9PT0gdm5vZGUudGFnICYmXG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYlxuICAgICAgKSB7XG4gICAgICAgIHBlbmRpbmdOb2RlLmVsbS5fbGVhdmVDYigpO1xuICAgICAgfVxuICAgICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gc3RhcnQgZW50ZXIgdHJhbnNpdGlvblxuICBiZWZvcmVFbnRlckhvb2sgJiYgYmVmb3JlRW50ZXJIb29rKGVsKTtcbiAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHN0YXJ0Q2xhc3MpO1xuICAgICAgaWYgKCFjYi5jYW5jZWxsZWQpIHtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCB0b0NsYXNzKTtcbiAgICAgICAgaWYgKCF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdEVudGVyRHVyYXRpb24pKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdEVudGVyRHVyYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICh2bm9kZS5kYXRhLnNob3cpIHtcbiAgICB0b2dnbGVEaXNwbGF5ICYmIHRvZ2dsZURpc3BsYXkoKTtcbiAgICBlbnRlckhvb2sgJiYgZW50ZXJIb29rKGVsLCBjYik7XG4gIH1cblxuICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICBjYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxlYXZlICh2bm9kZSwgcm0pIHtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuXG4gIC8vIGNhbGwgZW50ZXIgY2FsbGJhY2sgbm93XG4gIGlmIChpc0RlZihlbC5fZW50ZXJDYikpIHtcbiAgICBlbC5fZW50ZXJDYi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgIGVsLl9lbnRlckNiKCk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHJlc29sdmVUcmFuc2l0aW9uKHZub2RlLmRhdGEudHJhbnNpdGlvbik7XG4gIGlmIChpc1VuZGVmKGRhdGEpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIHJtKClcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYoZWwuX2xlYXZlQ2IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICB2YXIgbGVhdmVDbGFzcyA9IGRhdGEubGVhdmVDbGFzcztcbiAgdmFyIGxlYXZlVG9DbGFzcyA9IGRhdGEubGVhdmVUb0NsYXNzO1xuICB2YXIgbGVhdmVBY3RpdmVDbGFzcyA9IGRhdGEubGVhdmVBY3RpdmVDbGFzcztcbiAgdmFyIGJlZm9yZUxlYXZlID0gZGF0YS5iZWZvcmVMZWF2ZTtcbiAgdmFyIGxlYXZlID0gZGF0YS5sZWF2ZTtcbiAgdmFyIGFmdGVyTGVhdmUgPSBkYXRhLmFmdGVyTGVhdmU7XG4gIHZhciBsZWF2ZUNhbmNlbGxlZCA9IGRhdGEubGVhdmVDYW5jZWxsZWQ7XG4gIHZhciBkZWxheUxlYXZlID0gZGF0YS5kZWxheUxlYXZlO1xuICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gIHZhciBleHBlY3RzQ1NTID0gY3NzICE9PSBmYWxzZSAmJiAhaXNJRTk7XG4gIHZhciB1c2VyV2FudHNDb250cm9sID0gZ2V0SG9va0FyZ3VtZW50c0xlbmd0aChsZWF2ZSk7XG5cbiAgdmFyIGV4cGxpY2l0TGVhdmVEdXJhdGlvbiA9IHRvTnVtYmVyKFxuICAgIGlzT2JqZWN0KGR1cmF0aW9uKVxuICAgICAgPyBkdXJhdGlvbi5sZWF2ZVxuICAgICAgOiBkdXJhdGlvblxuICApO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRGVmKGV4cGxpY2l0TGVhdmVEdXJhdGlvbikpIHtcbiAgICBjaGVja0R1cmF0aW9uKGV4cGxpY2l0TGVhdmVEdXJhdGlvbiwgJ2xlYXZlJywgdm5vZGUpO1xuICB9XG5cbiAgdmFyIGNiID0gZWwuX2xlYXZlQ2IgPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZSAmJiBlbC5wYXJlbnROb2RlLl9wZW5kaW5nKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLl9wZW5kaW5nW3Zub2RlLmtleV0gPSBudWxsO1xuICAgIH1cbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICB9XG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGxlYXZlQ2FuY2VsbGVkICYmIGxlYXZlQ2FuY2VsbGVkKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm0oKTtcbiAgICAgIGFmdGVyTGVhdmUgJiYgYWZ0ZXJMZWF2ZShlbCk7XG4gICAgfVxuICAgIGVsLl9sZWF2ZUNiID0gbnVsbDtcbiAgfSk7XG5cbiAgaWYgKGRlbGF5TGVhdmUpIHtcbiAgICBkZWxheUxlYXZlKHBlcmZvcm1MZWF2ZSk7XG4gIH0gZWxzZSB7XG4gICAgcGVyZm9ybUxlYXZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtTGVhdmUgKCkge1xuICAgIC8vIHRoZSBkZWxheWVkIGxlYXZlIG1heSBoYXZlIGFscmVhZHkgYmVlbiBjYW5jZWxsZWRcbiAgICBpZiAoY2IuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gcmVjb3JkIGxlYXZpbmcgZWxlbWVudFxuICAgIGlmICghdm5vZGUuZGF0YS5zaG93ICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIChlbC5wYXJlbnROb2RlLl9wZW5kaW5nIHx8IChlbC5wYXJlbnROb2RlLl9wZW5kaW5nID0ge30pKVsodm5vZGUua2V5KV0gPSB2bm9kZTtcbiAgICB9XG4gICAgYmVmb3JlTGVhdmUgJiYgYmVmb3JlTGVhdmUoZWwpO1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUFjdGl2ZUNsYXNzKTtcbiAgICAgIG5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZVRvQ2xhc3MpO1xuICAgICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWREdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoY2IsIGV4cGxpY2l0TGVhdmVEdXJhdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aGVuVHJhbnNpdGlvbkVuZHMoZWwsIHR5cGUsIGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZWF2ZSAmJiBsZWF2ZShlbCwgY2IpO1xuICAgIGlmICghZXhwZWN0c0NTUyAmJiAhdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gb25seSB1c2VkIGluIGRldiBtb2RlXG5mdW5jdGlvbiBjaGVja0R1cmF0aW9uICh2YWwsIG5hbWUsIHZub2RlKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBub3QgYSB2YWxpZCBudW1iZXIgLSBcIiArXG4gICAgICBcImdvdCBcIiArIChKU09OLnN0cmluZ2lmeSh2YWwpKSArIFwiLlwiLFxuICAgICAgdm5vZGUuY29udGV4dFxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNOYU4odmFsKSkge1xuICAgIHdhcm4oXG4gICAgICBcIjx0cmFuc2l0aW9uPiBleHBsaWNpdCBcIiArIG5hbWUgKyBcIiBkdXJhdGlvbiBpcyBOYU4gLSBcIiArXG4gICAgICAndGhlIGR1cmF0aW9uIGV4cHJlc3Npb24gbWlnaHQgYmUgaW5jb3JyZWN0LicsXG4gICAgICB2bm9kZS5jb250ZXh0XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRHVyYXRpb24gKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbClcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB0cmFuc2l0aW9uIGhvb2sncyBhcmd1bWVudCBsZW5ndGguIFRoZSBob29rIG1heSBiZTpcbiAqIC0gYSBtZXJnZWQgaG9vayAoaW52b2tlcikgd2l0aCB0aGUgb3JpZ2luYWwgaW4gLmZuc1xuICogLSBhIHdyYXBwZWQgY29tcG9uZW50IG1ldGhvZCAoY2hlY2sgLl9sZW5ndGgpXG4gKiAtIGEgcGxhaW4gZnVuY3Rpb24gKC5sZW5ndGgpXG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tBcmd1bWVudHNMZW5ndGggKGZuKSB7XG4gIGlmIChpc1VuZGVmKGZuKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHZhciBpbnZva2VyRm5zID0gZm4uZm5zO1xuICBpZiAoaXNEZWYoaW52b2tlckZucykpIHtcbiAgICAvLyBpbnZva2VyXG4gICAgcmV0dXJuIGdldEhvb2tBcmd1bWVudHNMZW5ndGgoXG4gICAgICBBcnJheS5pc0FycmF5KGludm9rZXJGbnMpXG4gICAgICAgID8gaW52b2tlckZuc1swXVxuICAgICAgICA6IGludm9rZXJGbnNcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChmbi5fbGVuZ3RoIHx8IGZuLmxlbmd0aCkgPiAxXG4gIH1cbn1cblxuZnVuY3Rpb24gX2VudGVyIChfLCB2bm9kZSkge1xuICBpZiAodm5vZGUuZGF0YS5zaG93ICE9PSB0cnVlKSB7XG4gICAgZW50ZXIodm5vZGUpO1xuICB9XG59XG5cbnZhciB0cmFuc2l0aW9uID0gaW5Ccm93c2VyID8ge1xuICBjcmVhdGU6IF9lbnRlcixcbiAgYWN0aXZhdGU6IF9lbnRlcixcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUkJDEgKHZub2RlLCBybSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHZub2RlLmRhdGEuc2hvdyAhPT0gdHJ1ZSkge1xuICAgICAgbGVhdmUodm5vZGUsIHJtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm0oKTtcbiAgICB9XG4gIH1cbn0gOiB7fTtcblxudmFyIHBsYXRmb3JtTW9kdWxlcyA9IFtcbiAgYXR0cnMsXG4gIGtsYXNzLFxuICBldmVudHMsXG4gIGRvbVByb3BzLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvblxuXTtcblxuLyogICovXG5cbi8vIHRoZSBkaXJlY3RpdmUgbW9kdWxlIHNob3VsZCBiZSBhcHBsaWVkIGxhc3QsIGFmdGVyIGFsbFxuLy8gYnVpbHQtaW4gbW9kdWxlcyBoYXZlIGJlZW4gYXBwbGllZC5cbnZhciBtb2R1bGVzID0gcGxhdGZvcm1Nb2R1bGVzLmNvbmNhdChiYXNlTW9kdWxlcyk7XG5cbnZhciBwYXRjaCA9IGNyZWF0ZVBhdGNoRnVuY3Rpb24oeyBub2RlT3BzOiBub2RlT3BzLCBtb2R1bGVzOiBtb2R1bGVzIH0pO1xuXG4vKipcbiAqIE5vdCB0eXBlIGNoZWNraW5nIHRoaXMgZmlsZSBiZWNhdXNlIGZsb3cgZG9lc24ndCBsaWtlIGF0dGFjaGluZ1xuICogcHJvcGVydGllcyB0byBFbGVtZW50cy5cbiAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmIChpc0lFOSkge1xuICAvLyBodHRwOi8vd3d3Lm1hdHRzNDExLmNvbS9wb3N0L2ludGVybmV0LWV4cGxvcmVyLTktb25pbnB1dC9cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGVsICYmIGVsLnZtb2RlbCkge1xuICAgICAgdHJpZ2dlcihlbCwgJ2lucHV0Jyk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGRpcmVjdGl2ZSA9IHtcbiAgaW5zZXJ0ZWQ6IGZ1bmN0aW9uIGluc2VydGVkIChlbCwgYmluZGluZywgdm5vZGUsIG9sZFZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIC8vICM2OTAzXG4gICAgICBpZiAob2xkVm5vZGUuZWxtICYmICFvbGRWbm9kZS5lbG0uX3ZPcHRpb25zKSB7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRpcmVjdGl2ZS5jb21wb25lbnRVcGRhdGVkKGVsLCBiaW5kaW5nLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgfVxuICAgICAgZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodm5vZGUudGFnID09PSAndGV4dGFyZWEnIHx8IGlzVGV4dElucHV0VHlwZShlbC50eXBlKSkge1xuICAgICAgZWwuX3ZNb2RpZmllcnMgPSBiaW5kaW5nLm1vZGlmaWVycztcbiAgICAgIGlmICghYmluZGluZy5tb2RpZmllcnMubGF6eSkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0Jywgb25Db21wb3NpdGlvblN0YXJ0KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgLy8gU2FmYXJpIDwgMTAuMiAmIFVJV2ViVmlldyBkb2Vzbid0IGZpcmUgY29tcG9zaXRpb25lbmQgd2hlblxuICAgICAgICAvLyBzd2l0Y2hpbmcgZm9jdXMgYmVmb3JlIGNvbmZpcm1pbmcgY29tcG9zaXRpb24gY2hvaWNlXG4gICAgICAgIC8vIHRoaXMgYWxzbyBmaXhlcyB0aGUgaXNzdWUgd2hlcmUgc29tZSBicm93c2VycyBlLmcuIGlPUyBDaHJvbWVcbiAgICAgICAgLy8gZmlyZXMgXCJjaGFuZ2VcIiBpbnN0ZWFkIG9mIFwiaW5wdXRcIiBvbiBhdXRvY29tcGxldGUuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ29tcG9zaXRpb25FbmQpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGlzSUU5KSB7XG4gICAgICAgICAgZWwudm1vZGVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRVcGRhdGVkOiBmdW5jdGlvbiBjb21wb25lbnRVcGRhdGVkIChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpZiAodm5vZGUudGFnID09PSAnc2VsZWN0Jykge1xuICAgICAgc2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZub2RlLmNvbnRleHQpO1xuICAgICAgLy8gaW4gY2FzZSB0aGUgb3B0aW9ucyByZW5kZXJlZCBieSB2LWZvciBoYXZlIGNoYW5nZWQsXG4gICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHZhbHVlIGlzIG91dC1vZi1zeW5jIHdpdGggdGhlIHJlbmRlcmVkIG9wdGlvbnMuXG4gICAgICAvLyBkZXRlY3Qgc3VjaCBjYXNlcyBhbmQgZmlsdGVyIG91dCB2YWx1ZXMgdGhhdCBubyBsb25nZXIgaGFzIGEgbWF0Y2hpbmdcbiAgICAgIC8vIG9wdGlvbiBpbiB0aGUgRE9NLlxuICAgICAgdmFyIHByZXZPcHRpb25zID0gZWwuX3ZPcHRpb25zO1xuICAgICAgdmFyIGN1ck9wdGlvbnMgPSBlbC5fdk9wdGlvbnMgPSBbXS5tYXAuY2FsbChlbC5vcHRpb25zLCBnZXRWYWx1ZSk7XG4gICAgICBpZiAoY3VyT3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvLCBpKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCBwcmV2T3B0aW9uc1tpXSk7IH0pKSB7XG4gICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50IGlmXG4gICAgICAgIC8vIG5vIG1hdGNoaW5nIG9wdGlvbiBmb3VuZCBmb3IgYXQgbGVhc3Qgb25lIHZhbHVlXG4gICAgICAgIHZhciBuZWVkUmVzZXQgPSBlbC5tdWx0aXBsZVxuICAgICAgICAgID8gYmluZGluZy52YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7IHJldHVybiBoYXNOb01hdGNoaW5nT3B0aW9uKHYsIGN1ck9wdGlvbnMpOyB9KVxuICAgICAgICAgIDogYmluZGluZy52YWx1ZSAhPT0gYmluZGluZy5vbGRWYWx1ZSAmJiBoYXNOb01hdGNoaW5nT3B0aW9uKGJpbmRpbmcudmFsdWUsIGN1ck9wdGlvbnMpO1xuICAgICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgICAgdHJpZ2dlcihlbCwgJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzZXRTZWxlY3RlZCAoZWwsIGJpbmRpbmcsIHZtKSB7XG4gIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0lFIHx8IGlzRWRnZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYWN0dWFsbHlTZXRTZWxlY3RlZChlbCwgYmluZGluZywgdm0pO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdHVhbGx5U2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICB2YXIgdmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICB2YXIgaXNNdWx0aXBsZSA9IGVsLm11bHRpcGxlO1xuICBpZiAoaXNNdWx0aXBsZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICBcIjxzZWxlY3QgbXVsdGlwbGUgdi1tb2RlbD1cXFwiXCIgKyAoYmluZGluZy5leHByZXNzaW9uKSArIFwiXFxcIj4gXCIgK1xuICAgICAgXCJleHBlY3RzIGFuIEFycmF5IHZhbHVlIGZvciBpdHMgYmluZGluZywgYnV0IGdvdCBcIiArIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKSksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHNlbGVjdGVkLCBvcHRpb247XG4gIGZvciAodmFyIGkgPSAwLCBsID0gZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvcHRpb24gPSBlbC5vcHRpb25zW2ldO1xuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICBzZWxlY3RlZCA9IGxvb3NlSW5kZXhPZih2YWx1ZSwgZ2V0VmFsdWUob3B0aW9uKSkgPiAtMTtcbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQgIT09IHNlbGVjdGVkKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobG9vc2VFcXVhbChnZXRWYWx1ZShvcHRpb24pLCB2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGVsLnNlbGVjdGVkSW5kZXggIT09IGkpIHtcbiAgICAgICAgICBlbC5zZWxlY3RlZEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFpc011bHRpcGxlKSB7XG4gICAgZWwuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc05vTWF0Y2hpbmdPcHRpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvKSB7IHJldHVybiAhbG9vc2VFcXVhbChvLCB2YWx1ZSk7IH0pXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlIChvcHRpb24pIHtcbiAgcmV0dXJuICdfdmFsdWUnIGluIG9wdGlvblxuICAgID8gb3B0aW9uLl92YWx1ZVxuICAgIDogb3B0aW9uLnZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uQ29tcG9zaXRpb25TdGFydCAoZSkge1xuICBlLnRhcmdldC5jb21wb3NpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kIChlKSB7XG4gIC8vIHByZXZlbnQgdHJpZ2dlcmluZyBhbiBpbnB1dCBldmVudCBmb3Igbm8gcmVhc29uXG4gIGlmICghZS50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybiB9XG4gIGUudGFyZ2V0LmNvbXBvc2luZyA9IGZhbHNlO1xuICB0cmlnZ2VyKGUudGFyZ2V0LCAnaW5wdXQnKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlciAoZWwsIHR5cGUpIHtcbiAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICBlLmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKTtcbiAgZWwuZGlzcGF0Y2hFdmVudChlKTtcbn1cblxuLyogICovXG5cbi8vIHJlY3Vyc2l2ZWx5IHNlYXJjaCBmb3IgcG9zc2libGUgdHJhbnNpdGlvbiBkZWZpbmVkIGluc2lkZSB0aGUgY29tcG9uZW50IHJvb3RcbmZ1bmN0aW9uIGxvY2F0ZU5vZGUgKHZub2RlKSB7XG4gIHJldHVybiB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJiAoIXZub2RlLmRhdGEgfHwgIXZub2RlLmRhdGEudHJhbnNpdGlvbilcbiAgICA/IGxvY2F0ZU5vZGUodm5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKVxuICAgIDogdm5vZGVcbn1cblxudmFyIHNob3cgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQgKGVsLCByZWYsIHZub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIHZhciBvcmlnaW5hbERpc3BsYXkgPSBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgPVxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJycgOiBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIGlmICh2YWx1ZSAmJiB0cmFuc2l0aW9uJCQxKSB7XG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IG9yaWdpbmFsRGlzcGxheTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBvcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChlbCwgcmVmLCB2bm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcbiAgICB2YXIgb2xkVmFsdWUgPSByZWYub2xkVmFsdWU7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXZhbHVlID09PSAhb2xkVmFsdWUpIHsgcmV0dXJuIH1cbiAgICB2bm9kZSA9IGxvY2F0ZU5vZGUodm5vZGUpO1xuICAgIHZhciB0cmFuc2l0aW9uJCQxID0gdm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLnRyYW5zaXRpb247XG4gICAgaWYgKHRyYW5zaXRpb24kJDEpIHtcbiAgICAgIHZub2RlLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZW50ZXIodm5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlYXZlKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IGVsLl9fdk9yaWdpbmFsRGlzcGxheSA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQgKFxuICAgIGVsLFxuICAgIGJpbmRpbmcsXG4gICAgdm5vZGUsXG4gICAgb2xkVm5vZGUsXG4gICAgaXNEZXN0cm95XG4gICkge1xuICAgIGlmICghaXNEZXN0cm95KSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5O1xuICAgIH1cbiAgfVxufTtcblxudmFyIHBsYXRmb3JtRGlyZWN0aXZlcyA9IHtcbiAgbW9kZWw6IGRpcmVjdGl2ZSxcbiAgc2hvdzogc2hvd1xufTtcblxuLyogICovXG5cbnZhciB0cmFuc2l0aW9uUHJvcHMgPSB7XG4gIG5hbWU6IFN0cmluZyxcbiAgYXBwZWFyOiBCb29sZWFuLFxuICBjc3M6IEJvb2xlYW4sXG4gIG1vZGU6IFN0cmluZyxcbiAgdHlwZTogU3RyaW5nLFxuICBlbnRlckNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJUb0NsYXNzOiBTdHJpbmcsXG4gIGxlYXZlVG9DbGFzczogU3RyaW5nLFxuICBlbnRlckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGxlYXZlQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyQWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgYXBwZWFyVG9DbGFzczogU3RyaW5nLFxuICBkdXJhdGlvbjogW051bWJlciwgU3RyaW5nLCBPYmplY3RdXG59O1xuXG4vLyBpbiBjYXNlIHRoZSBjaGlsZCBpcyBhbHNvIGFuIGFic3RyYWN0IGNvbXBvbmVudCwgZS5nLiA8a2VlcC1hbGl2ZT5cbi8vIHdlIHdhbnQgdG8gcmVjdXJzaXZlbHkgcmV0cmlldmUgdGhlIHJlYWwgY29tcG9uZW50IHRvIGJlIHJlbmRlcmVkXG5mdW5jdGlvbiBnZXRSZWFsQ2hpbGQgKHZub2RlKSB7XG4gIHZhciBjb21wT3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIGlmIChjb21wT3B0aW9ucyAmJiBjb21wT3B0aW9ucy5DdG9yLm9wdGlvbnMuYWJzdHJhY3QpIHtcbiAgICByZXR1cm4gZ2V0UmVhbENoaWxkKGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoY29tcE9wdGlvbnMuY2hpbGRyZW4pKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RUcmFuc2l0aW9uRGF0YSAoY29tcCkge1xuICB2YXIgZGF0YSA9IHt9O1xuICB2YXIgb3B0aW9ucyA9IGNvbXAuJG9wdGlvbnM7XG4gIC8vIHByb3BzXG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLnByb3BzRGF0YSkge1xuICAgIGRhdGFba2V5XSA9IGNvbXBba2V5XTtcbiAgfVxuICAvLyBldmVudHMuXG4gIC8vIGV4dHJhY3QgbGlzdGVuZXJzIGFuZCBwYXNzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24gbWV0aG9kc1xuICB2YXIgbGlzdGVuZXJzID0gb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBmb3IgKHZhciBrZXkkMSBpbiBsaXN0ZW5lcnMpIHtcbiAgICBkYXRhW2NhbWVsaXplKGtleSQxKV0gPSBsaXN0ZW5lcnNba2V5JDFdO1xuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbmZ1bmN0aW9uIHBsYWNlaG9sZGVyIChoLCByYXdDaGlsZCkge1xuICBpZiAoL1xcZC1rZWVwLWFsaXZlJC8udGVzdChyYXdDaGlsZC50YWcpKSB7XG4gICAgcmV0dXJuIGgoJ2tlZXAtYWxpdmUnLCB7XG4gICAgICBwcm9wczogcmF3Q2hpbGQuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGFcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhc1BhcmVudFRyYW5zaXRpb24gKHZub2RlKSB7XG4gIHdoaWxlICgodm5vZGUgPSB2bm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHZub2RlLmRhdGEudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTYW1lQ2hpbGQgKGNoaWxkLCBvbGRDaGlsZCkge1xuICByZXR1cm4gb2xkQ2hpbGQua2V5ID09PSBjaGlsZC5rZXkgJiYgb2xkQ2hpbGQudGFnID09PSBjaGlsZC50YWdcbn1cblxudmFyIGlzTm90VGV4dE5vZGUgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50YWcgfHwgaXNBc3luY1BsYWNlaG9sZGVyKGMpOyB9O1xuXG52YXIgaXNWU2hvd0RpcmVjdGl2ZSA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLm5hbWUgPT09ICdzaG93JzsgfTtcblxudmFyIFRyYW5zaXRpb24gPSB7XG4gIG5hbWU6ICd0cmFuc2l0aW9uJyxcbiAgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyxcbiAgYWJzdHJhY3Q6IHRydWUsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIG91dCB0ZXh0IG5vZGVzIChwb3NzaWJsZSB3aGl0ZXNwYWNlcylcbiAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihpc05vdFRleHROb2RlKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2FybiBtdWx0aXBsZSBlbGVtZW50c1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICc8dHJhbnNpdGlvbj4gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIHNpbmdsZSBlbGVtZW50LiBVc2UgJyArXG4gICAgICAgICc8dHJhbnNpdGlvbi1ncm91cD4gZm9yIGxpc3RzLicsXG4gICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgbW9kZSA9IHRoaXMubW9kZTtcblxuICAgIC8vIHdhcm4gaW52YWxpZCBtb2RlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIG1vZGUgJiYgbW9kZSAhPT0gJ2luLW91dCcgJiYgbW9kZSAhPT0gJ291dC1pbidcbiAgICApIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdpbnZhbGlkIDx0cmFuc2l0aW9uPiBtb2RlOiAnICsgbW9kZSxcbiAgICAgICAgdGhpcy4kcGFyZW50XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciByYXdDaGlsZCA9IGNoaWxkcmVuWzBdO1xuXG4gICAgLy8gaWYgdGhpcyBpcyBhIGNvbXBvbmVudCByb290IG5vZGUgYW5kIHRoZSBjb21wb25lbnQnc1xuICAgIC8vIHBhcmVudCBjb250YWluZXIgbm9kZSBhbHNvIGhhcyB0cmFuc2l0aW9uLCBza2lwLlxuICAgIGlmIChoYXNQYXJlbnRUcmFuc2l0aW9uKHRoaXMuJHZub2RlKSkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgdHJhbnNpdGlvbiBkYXRhIHRvIGNoaWxkXG4gICAgLy8gdXNlIGdldFJlYWxDaGlsZCgpIHRvIGlnbm9yZSBhYnN0cmFjdCBjb21wb25lbnRzIGUuZy4ga2VlcC1hbGl2ZVxuICAgIHZhciBjaGlsZCA9IGdldFJlYWxDaGlsZChyYXdDaGlsZCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgcmV0dXJuIHJhd0NoaWxkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xlYXZpbmcpIHtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlcihoLCByYXdDaGlsZClcbiAgICB9XG5cbiAgICAvLyBlbnN1cmUgYSBrZXkgdGhhdCBpcyB1bmlxdWUgdG8gdGhlIHZub2RlIHR5cGUgYW5kIHRvIHRoaXMgdHJhbnNpdGlvblxuICAgIC8vIGNvbXBvbmVudCBpbnN0YW5jZS4gVGhpcyBrZXkgd2lsbCBiZSB1c2VkIHRvIHJlbW92ZSBwZW5kaW5nIGxlYXZpbmcgbm9kZXNcbiAgICAvLyBkdXJpbmcgZW50ZXJpbmcuXG4gICAgdmFyIGlkID0gXCJfX3RyYW5zaXRpb24tXCIgKyAodGhpcy5fdWlkKSArIFwiLVwiO1xuICAgIGNoaWxkLmtleSA9IGNoaWxkLmtleSA9PSBudWxsXG4gICAgICA/IGNoaWxkLmlzQ29tbWVudFxuICAgICAgICA/IGlkICsgJ2NvbW1lbnQnXG4gICAgICAgIDogaWQgKyBjaGlsZC50YWdcbiAgICAgIDogaXNQcmltaXRpdmUoY2hpbGQua2V5KVxuICAgICAgICA/IChTdHJpbmcoY2hpbGQua2V5KS5pbmRleE9mKGlkKSA9PT0gMCA/IGNoaWxkLmtleSA6IGlkICsgY2hpbGQua2V5KVxuICAgICAgICA6IGNoaWxkLmtleTtcblxuICAgIHZhciBkYXRhID0gKGNoaWxkLmRhdGEgfHwgKGNoaWxkLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG4gICAgdmFyIG9sZFJhd0NoaWxkID0gdGhpcy5fdm5vZGU7XG4gICAgdmFyIG9sZENoaWxkID0gZ2V0UmVhbENoaWxkKG9sZFJhd0NoaWxkKTtcblxuICAgIC8vIG1hcmsgdi1zaG93XG4gICAgLy8gc28gdGhhdCB0aGUgdHJhbnNpdGlvbiBtb2R1bGUgY2FuIGhhbmQgb3ZlciB0aGUgY29udHJvbCB0byB0aGUgZGlyZWN0aXZlXG4gICAgaWYgKGNoaWxkLmRhdGEuZGlyZWN0aXZlcyAmJiBjaGlsZC5kYXRhLmRpcmVjdGl2ZXMuc29tZShpc1ZTaG93RGlyZWN0aXZlKSkge1xuICAgICAgY2hpbGQuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBvbGRDaGlsZCAmJlxuICAgICAgb2xkQ2hpbGQuZGF0YSAmJlxuICAgICAgIWlzU2FtZUNoaWxkKGNoaWxkLCBvbGRDaGlsZCkgJiZcbiAgICAgICFpc0FzeW5jUGxhY2Vob2xkZXIob2xkQ2hpbGQpICYmXG4gICAgICAvLyAjNjY4NyBjb21wb25lbnQgcm9vdCBpcyBhIGNvbW1lbnQgbm9kZVxuICAgICAgIShvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZSAmJiBvbGRDaGlsZC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUuaXNDb21tZW50KVxuICAgICkge1xuICAgICAgLy8gcmVwbGFjZSBvbGQgY2hpbGQgdHJhbnNpdGlvbiBkYXRhIHdpdGggZnJlc2ggb25lXG4gICAgICAvLyBpbXBvcnRhbnQgZm9yIGR5bmFtaWMgdHJhbnNpdGlvbnMhXG4gICAgICB2YXIgb2xkRGF0YSA9IG9sZENoaWxkLmRhdGEudHJhbnNpdGlvbiA9IGV4dGVuZCh7fSwgZGF0YSk7XG4gICAgICAvLyBoYW5kbGUgdHJhbnNpdGlvbiBtb2RlXG4gICAgICBpZiAobW9kZSA9PT0gJ291dC1pbicpIHtcbiAgICAgICAgLy8gcmV0dXJuIHBsYWNlaG9sZGVyIG5vZGUgYW5kIHF1ZXVlIHVwZGF0ZSB3aGVuIGxlYXZlIGZpbmlzaGVzXG4gICAgICAgIHRoaXMuX2xlYXZpbmcgPSB0cnVlO1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhvbGREYXRhLCAnYWZ0ZXJMZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzJDEuX2xlYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzJDEuJGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdpbi1vdXQnKSB7XG4gICAgICAgIGlmIChpc0FzeW5jUGxhY2Vob2xkZXIoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuIG9sZFJhd0NoaWxkXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGF5ZWRMZWF2ZTtcbiAgICAgICAgdmFyIHBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uICgpIHsgZGVsYXllZExlYXZlKCk7IH07XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdhZnRlckVudGVyJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2soZGF0YSwgJ2VudGVyQ2FuY2VsbGVkJywgcGVyZm9ybUxlYXZlKTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2RlbGF5TGVhdmUnLCBmdW5jdGlvbiAobGVhdmUpIHsgZGVsYXllZExlYXZlID0gbGVhdmU7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByYXdDaGlsZFxuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHByb3BzID0gZXh0ZW5kKHtcbiAgdGFnOiBTdHJpbmcsXG4gIG1vdmVDbGFzczogU3RyaW5nXG59LCB0cmFuc2l0aW9uUHJvcHMpO1xuXG5kZWxldGUgcHJvcHMubW9kZTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IHtcbiAgcHJvcHM6IHByb3BzLFxuXG4gIGJlZm9yZU1vdW50OiBmdW5jdGlvbiBiZWZvcmVNb3VudCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdXBkYXRlID0gdGhpcy5fdXBkYXRlO1xuICAgIHRoaXMuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgICB2YXIgcmVzdG9yZUFjdGl2ZUluc3RhbmNlID0gc2V0QWN0aXZlSW5zdGFuY2UodGhpcyQxKTtcbiAgICAgIC8vIGZvcmNlIHJlbW92aW5nIHBhc3NcbiAgICAgIHRoaXMkMS5fX3BhdGNoX18oXG4gICAgICAgIHRoaXMkMS5fdm5vZGUsXG4gICAgICAgIHRoaXMkMS5rZXB0LFxuICAgICAgICBmYWxzZSwgLy8gaHlkcmF0aW5nXG4gICAgICAgIHRydWUgLy8gcmVtb3ZlT25seSAoIWltcG9ydGFudCwgYXZvaWRzIHVubmVjZXNzYXJ5IG1vdmVzKVxuICAgICAgKTtcbiAgICAgIHRoaXMkMS5fdm5vZGUgPSB0aGlzJDEua2VwdDtcbiAgICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgICAgdXBkYXRlLmNhbGwodGhpcyQxLCB2bm9kZSwgaHlkcmF0aW5nKTtcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRhZyA9IHRoaXMudGFnIHx8IHRoaXMuJHZub2RlLmRhdGEudGFnIHx8ICdzcGFuJztcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgcHJldkNoaWxkcmVuID0gdGhpcy5wcmV2Q2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgIHZhciByYXdDaGlsZHJlbiA9IHRoaXMuJHNsb3RzLmRlZmF1bHQgfHwgW107XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHZhciB0cmFuc2l0aW9uRGF0YSA9IGV4dHJhY3RUcmFuc2l0aW9uRGF0YSh0aGlzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gcmF3Q2hpbGRyZW5baV07XG4gICAgICBpZiAoYy50YWcpIHtcbiAgICAgICAgaWYgKGMua2V5ICE9IG51bGwgJiYgU3RyaW5nKGMua2V5KS5pbmRleE9mKCdfX3ZsaXN0JykgIT09IDApIHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKGMpO1xuICAgICAgICAgIG1hcFtjLmtleV0gPSBjXG4gICAgICAgICAgOyhjLmRhdGEgfHwgKGMuZGF0YSA9IHt9KSkudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB2YXIgb3B0cyA9IGMuY29tcG9uZW50T3B0aW9ucztcbiAgICAgICAgICB2YXIgbmFtZSA9IG9wdHMgPyAob3B0cy5DdG9yLm9wdGlvbnMubmFtZSB8fCBvcHRzLnRhZyB8fCAnJykgOiBjLnRhZztcbiAgICAgICAgICB3YXJuKChcIjx0cmFuc2l0aW9uLWdyb3VwPiBjaGlsZHJlbiBtdXN0IGJlIGtleWVkOiA8XCIgKyBuYW1lICsgXCI+XCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2Q2hpbGRyZW4pIHtcbiAgICAgIHZhciBrZXB0ID0gW107XG4gICAgICB2YXIgcmVtb3ZlZCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJldkNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgdmFyIGMkMSA9IHByZXZDaGlsZHJlbltpJDFdO1xuICAgICAgICBjJDEuZGF0YS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbkRhdGE7XG4gICAgICAgIGMkMS5kYXRhLnBvcyA9IGMkMS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChtYXBbYyQxLmtleV0pIHtcbiAgICAgICAgICBrZXB0LnB1c2goYyQxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVkLnB1c2goYyQxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5rZXB0ID0gaCh0YWcsIG51bGwsIGtlcHQpO1xuICAgICAgdGhpcy5yZW1vdmVkID0gcmVtb3ZlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaCh0YWcsIG51bGwsIGNoaWxkcmVuKVxuICB9LFxuXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uIHVwZGF0ZWQgKCkge1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuO1xuICAgIHZhciBtb3ZlQ2xhc3MgPSB0aGlzLm1vdmVDbGFzcyB8fCAoKHRoaXMubmFtZSB8fCAndicpICsgJy1tb3ZlJyk7XG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGggfHwgIXRoaXMuaGFzTW92ZShjaGlsZHJlblswXS5lbG0sIG1vdmVDbGFzcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdlIGRpdmlkZSB0aGUgd29yayBpbnRvIHRocmVlIGxvb3BzIHRvIGF2b2lkIG1peGluZyBET00gcmVhZHMgYW5kIHdyaXRlc1xuICAgIC8vIGluIGVhY2ggaXRlcmF0aW9uIC0gd2hpY2ggaGVscHMgcHJldmVudCBsYXlvdXQgdGhyYXNoaW5nLlxuICAgIGNoaWxkcmVuLmZvckVhY2goY2FsbFBlbmRpbmdDYnMpO1xuICAgIGNoaWxkcmVuLmZvckVhY2gocmVjb3JkUG9zaXRpb24pO1xuICAgIGNoaWxkcmVuLmZvckVhY2goYXBwbHlUcmFuc2xhdGlvbik7XG5cbiAgICAvLyBmb3JjZSByZWZsb3cgdG8gcHV0IGV2ZXJ5dGhpbmcgaW4gcG9zaXRpb25cbiAgICAvLyBhc3NpZ24gdG8gdGhpcyB0byBhdm9pZCBiZWluZyByZW1vdmVkIGluIHRyZWUtc2hha2luZ1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIHRoaXMuX3JlZmxvdyA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgaWYgKGMuZGF0YS5tb3ZlZCkge1xuICAgICAgICB2YXIgZWwgPSBjLmVsbTtcbiAgICAgICAgdmFyIHMgPSBlbC5zdHlsZTtcbiAgICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBtb3ZlQ2xhc3MpO1xuICAgICAgICBzLnRyYW5zZm9ybSA9IHMuV2Via2l0VHJhbnNmb3JtID0gcy50cmFuc2l0aW9uRHVyYXRpb24gPSAnJztcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kRXZlbnQsIGVsLl9tb3ZlQ2IgPSBmdW5jdGlvbiBjYiAoZSkge1xuICAgICAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZSB8fCAvdHJhbnNmb3JtJC8udGVzdChlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBjYik7XG4gICAgICAgICAgICBlbC5fbW92ZUNiID0gbnVsbDtcbiAgICAgICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBoYXNNb3ZlOiBmdW5jdGlvbiBoYXNNb3ZlIChlbCwgbW92ZUNsYXNzKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFzVHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHRoaXMuX2hhc01vdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01vdmVcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCB3aGV0aGVyIGFuIGVsZW1lbnQgd2l0aCB0aGUgbW92ZSBjbGFzcyBhcHBsaWVkIGhhc1xuICAgICAgLy8gQ1NTIHRyYW5zaXRpb25zLiBTaW5jZSB0aGUgZWxlbWVudCBtYXkgYmUgaW5zaWRlIGFuIGVudGVyaW5nXG4gICAgICAvLyB0cmFuc2l0aW9uIGF0IHRoaXMgdmVyeSBtb21lbnQsIHdlIG1ha2UgYSBjbG9uZSBvZiBpdCBhbmQgcmVtb3ZlXG4gICAgICAvLyBhbGwgb3RoZXIgdHJhbnNpdGlvbiBjbGFzc2VzIGFwcGxpZWQgdG8gZW5zdXJlIG9ubHkgdGhlIG1vdmUgY2xhc3NcbiAgICAgIC8vIGlzIGFwcGxpZWQuXG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUoKTtcbiAgICAgIGlmIChlbC5fdHJhbnNpdGlvbkNsYXNzZXMpIHtcbiAgICAgICAgZWwuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNscykgeyByZW1vdmVDbGFzcyhjbG9uZSwgY2xzKTsgfSk7XG4gICAgICB9XG4gICAgICBhZGRDbGFzcyhjbG9uZSwgbW92ZUNsYXNzKTtcbiAgICAgIGNsb25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLiRlbC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICB2YXIgaW5mbyA9IGdldFRyYW5zaXRpb25JbmZvKGNsb25lKTtcbiAgICAgIHRoaXMuJGVsLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgIHJldHVybiAodGhpcy5faGFzTW92ZSA9IGluZm8uaGFzVHJhbnNmb3JtKVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gY2FsbFBlbmRpbmdDYnMgKGMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjLmVsbS5fbW92ZUNiKSB7XG4gICAgYy5lbG0uX21vdmVDYigpO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoYy5lbG0uX2VudGVyQ2IpIHtcbiAgICBjLmVsbS5fZW50ZXJDYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY29yZFBvc2l0aW9uIChjKSB7XG4gIGMuZGF0YS5uZXdQb3MgPSBjLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlUcmFuc2xhdGlvbiAoYykge1xuICB2YXIgb2xkUG9zID0gYy5kYXRhLnBvcztcbiAgdmFyIG5ld1BvcyA9IGMuZGF0YS5uZXdQb3M7XG4gIHZhciBkeCA9IG9sZFBvcy5sZWZ0IC0gbmV3UG9zLmxlZnQ7XG4gIHZhciBkeSA9IG9sZFBvcy50b3AgLSBuZXdQb3MudG9wO1xuICBpZiAoZHggfHwgZHkpIHtcbiAgICBjLmRhdGEubW92ZWQgPSB0cnVlO1xuICAgIHZhciBzID0gYy5lbG0uc3R5bGU7XG4gICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgZHggKyBcInB4LFwiICsgZHkgKyBcInB4KVwiO1xuICAgIHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcbiAgfVxufVxuXG52YXIgcGxhdGZvcm1Db21wb25lbnRzID0ge1xuICBUcmFuc2l0aW9uOiBUcmFuc2l0aW9uLFxuICBUcmFuc2l0aW9uR3JvdXA6IFRyYW5zaXRpb25Hcm91cFxufTtcblxuLyogICovXG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gc3BlY2lmaWMgdXRpbHNcblZ1ZS5jb25maWcubXVzdFVzZVByb3AgPSBtdXN0VXNlUHJvcDtcblZ1ZS5jb25maWcuaXNSZXNlcnZlZFRhZyA9IGlzUmVzZXJ2ZWRUYWc7XG5WdWUuY29uZmlnLmlzUmVzZXJ2ZWRBdHRyID0gaXNSZXNlcnZlZEF0dHI7XG5WdWUuY29uZmlnLmdldFRhZ05hbWVzcGFjZSA9IGdldFRhZ05hbWVzcGFjZTtcblZ1ZS5jb25maWcuaXNVbmtub3duRWxlbWVudCA9IGlzVW5rbm93bkVsZW1lbnQ7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcnVudGltZSBkaXJlY3RpdmVzICYgY29tcG9uZW50c1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmRpcmVjdGl2ZXMsIHBsYXRmb3JtRGlyZWN0aXZlcyk7XG5leHRlbmQoVnVlLm9wdGlvbnMuY29tcG9uZW50cywgcGxhdGZvcm1Db21wb25lbnRzKTtcblxuLy8gaW5zdGFsbCBwbGF0Zm9ybSBwYXRjaCBmdW5jdGlvblxuVnVlLnByb3RvdHlwZS5fX3BhdGNoX18gPSBpbkJyb3dzZXIgPyBwYXRjaCA6IG5vb3A7XG5cbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKFxuICBlbCxcbiAgaHlkcmF0aW5nXG4pIHtcbiAgZWwgPSBlbCAmJiBpbkJyb3dzZXIgPyBxdWVyeShlbCkgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBtb3VudENvbXBvbmVudCh0aGlzLCBlbCwgaHlkcmF0aW5nKVxufTtcblxuLy8gZGV2dG9vbHMgZ2xvYmFsIGhvb2tcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaW5Ccm93c2VyKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb25maWcuZGV2dG9vbHMpIHtcbiAgICAgIGlmIChkZXZ0b29scykge1xuICAgICAgICBkZXZ0b29scy5lbWl0KCdpbml0JywgVnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0J1xuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGVbY29uc29sZS5pbmZvID8gJ2luZm8nIDogJ2xvZyddKFxuICAgICAgICAgICdEb3dubG9hZCB0aGUgVnVlIERldnRvb2xzIGV4dGVuc2lvbiBmb3IgYSBiZXR0ZXIgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZTpcXG4nICtcbiAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1kZXZ0b29scydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgIGNvbmZpZy5wcm9kdWN0aW9uVGlwICE9PSBmYWxzZSAmJlxuICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnXG4gICAgKSB7XG4gICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgXCJZb3UgYXJlIHJ1bm5pbmcgVnVlIGluIGRldmVsb3BtZW50IG1vZGUuXFxuXCIgK1xuICAgICAgICBcIk1ha2Ugc3VyZSB0byB0dXJuIG9uIHByb2R1Y3Rpb24gbW9kZSB3aGVuIGRlcGxveWluZyBmb3IgcHJvZHVjdGlvbi5cXG5cIiArXG4gICAgICAgIFwiU2VlIG1vcmUgdGlwcyBhdCBodHRwczovL3Z1ZWpzLm9yZy9ndWlkZS9kZXBsb3ltZW50Lmh0bWxcIlxuICAgICAgKTtcbiAgICB9XG4gIH0sIDApO1xufVxuXG4vKiAgKi9cblxuZXhwb3J0IGRlZmF1bHQgVnVlO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgcmVuZGVyOiBoICA9PiBoKEFwcClcclxufSkuJG1vdW50KCcjdnVlV3AnKTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2JhNWJkOTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcYW5kZXJcXFxcTG9jYWwgU2l0ZXNcXFxcbm9taWxrY3VzdG9tZXJvdmVydmlld1xcXFxhcHBcXFxccHVibGljXFxcXHdwLWNvbnRlbnRcXFxcdGhlbWVzXFxcXG5vbWlsa1xcXFx2dWUtYXBwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdiYTViZDkwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdiYTViZDkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdiYTViZDkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiYTViZDkwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJoMVwiLCBbX3ZtLl92KFwiSGVsbG8gV29ybGQhXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==