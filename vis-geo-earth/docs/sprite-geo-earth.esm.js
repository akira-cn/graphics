var globe =
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCountryInfo", function() { return _map__WEBPACK_IMPORTED_MODULE_0__["getCountryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "highlightMap", function() { return _map__WEBPACK_IMPORTED_MODULE_0__["highlightMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "latlngToPosition", function() { return _map__WEBPACK_IMPORTED_MODULE_0__["latlngToPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "project", function() { return _map__WEBPACK_IMPORTED_MODULE_0__["project"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionToLatlng", function() { return _map__WEBPACK_IMPORTED_MODULE_0__["positionToLatlng"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unproject", function() { return _map__WEBPACK_IMPORTED_MODULE_0__["unproject"]; });

/* harmony import */ var _globe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(224);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobe", function() { return _globe__WEBPACK_IMPORTED_MODULE_1__["createGlobe"]; });

/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(234);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMarker", function() { return _marker__WEBPACK_IMPORTED_MODULE_2__["addMarker"]; });

/* harmony import */ var _beam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(239);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBeam", function() { return _beam__WEBPACK_IMPORTED_MODULE_3__["addBeam"]; });

/* harmony import */ var _missile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(242);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "launchMissile", function() { return _missile__WEBPACK_IMPORTED_MODULE_4__["launchMissile"]; });

/* harmony import */ var _curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(245);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCurve", function() { return _curve__WEBPACK_IMPORTED_MODULE_5__["addCurve"]; });

/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(248);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cameraTo", function() { return _camera__WEBPACK_IMPORTED_MODULE_6__["cameraTo"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(223);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMap", function() { return loadMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unproject", function() { return unproject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latlngToPosition", function() { return latlngToPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionToLatlng", function() { return positionToLatlng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountryInfo", function() { return getCountryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightMap", function() { return highlightMap; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var topojson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(131);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sprite_extend_3d__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(223);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// topojson 地图相关的辅助类





if (typeof OffscreenCanvas !== 'function') {
  // firefox polyfill
  window.OffscreenCanvas = function (width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    canvas.transferToImageBitmap = function () {
      const ctx = canvas.cloneNode().getContext('2d');
      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.drawImage(canvas, 0, 0);
      return ctx.canvas;
    };

    return canvas;
  };
}

let _context, _countries, _projection, _bitmap;

const mapWidth = 960;
const mapHeight = 480;
const mapScale = 4;

function drawMap({
  context = _context,
  countries = _countries,
  projection = _projection,
  strokeColor = '#666',
  fillColor = '#000',
  strokeWidth = 1.5
} = {}) {
  _context = context;
  _countries = countries;
  _projection = projection;
  const path = Object(d3_geo__WEBPACK_IMPORTED_MODULE_4__["geoPath"])(projection).context(context);
  context.save();
  context.translate(0, mapScale * mapHeight);
  context.scale(1, -1);
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  context.fillStyle = fillColor;
  context.beginPath();
  path(countries);
  context.fill();
  context.stroke();
  context.restore();
  _bitmap = context.canvas.transferToImageBitmap();
  _bitmap.originalMap = true;
  return _bitmap;
} // 默认宽高 960 X 500，默认 translate 是 480 X 250


const projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_4__["geoEquirectangular"])();
projection.scale(projection.scale() * mapScale).translate([mapWidth * mapScale * 0.5, (mapHeight + 2) * mapScale * 0.5]);
async function loadMap(src = _config__WEBPACK_IMPORTED_MODULE_6__["default"].topojsonData, {
  strokeColor,
  fillColor
} = {}) {
  const data = await (await fetch(src)).json();
  const countries = Object(topojson__WEBPACK_IMPORTED_MODULE_3__["feature"])(data, data.objects.countries);
  const canvas = new OffscreenCanvas(mapScale * mapWidth, mapScale * mapHeight);
  const context = canvas.getContext('2d');
  context.imageSmoothingEnabled = false;
  return drawMap({
    context,
    countries,
    projection,
    strokeColor,
    fillColor
  });
}
/**
 * 将平面地图坐标转换为球面坐标
 * @param {*} u
 * @param {*} v
 * @param {*} radius
 */

function project(u, v, radius = 1) {
  u /= mapScale * mapWidth;
  v /= mapScale * mapHeight;
  const pLength = Math.PI * 2;
  const tLength = Math.PI;
  const x = -radius * Math.cos(u * pLength) * Math.sin(v * tLength);
  const y = radius * Math.cos(v * tLength);
  const z = radius * Math.sin(u * pLength) * Math.sin(v * tLength);
  return new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_5__["Vec3"](x, y, z);
}
/**
 * 将球面坐标转换为平面地图坐标
 * @param {*} x
 * @param {*} y
 * @param {*} z
 * @param {*} radius
 */

function unproject(x, y, z, radius = 1) {
  const pLength = Math.PI * 2;
  const tLength = Math.PI;
  const v = Math.acos(y / radius) / tLength; // const y = radius * Math.cos(v * tLength);

  let u = Math.atan2(-z, x) + Math.PI; // z / x = -1 * Math.tan(u * pLength);

  u /= pLength;
  return [u * mapScale * mapWidth, v * mapScale * mapHeight];
}
/**
 * 将经纬度转换为球面坐标
 * @param {*} latitude
 * @param {*} longitude
 * @param {*} radius
 */

function latlngToPosition(latitude, longitude, radius = 1) {
  const [u, v] = projection([longitude, latitude]);
  return project(u, v, radius);
}
function positionToLatlng(x, y, z, radius = 1) {
  const [u, v] = unproject(x, y, z, radius);
  return projection.invert([u, v]);
}
let highlightMapContxt = null;
let lastIndex = -1;

function updateGlobeTexture(globe, image) {
  if (image) {
    const texture = globe.program.uniforms.tMap.value;
    const previousImage = texture.image;
    texture.image = image;

    if (previousImage.close && !previousImage.originalMap) {
      previousImage.close(); // close imageBitmap to prevent memory leak.
    }

    texture.needsUpdate = true;
  }
}

function getCountryInfo(globe, {
  pos,
  latitude,
  longitude,
  countries = _countries
} = {}) {
  if (latitude == null || longitude == null) {
    const [u, v] = unproject(...pos, globe.attributes.radius);
    [longitude, latitude] = projection.invert([u, v]);
  }

  if (!countries) return {
    index: -1
  };
  let idx = -1;
  countries.features.some((d, i) => {
    const ret = Object(d3_geo__WEBPACK_IMPORTED_MODULE_4__["geoContains"])(d, [longitude, latitude]);
    if (ret) idx = i;
    return ret;
  });
  const info = idx >= 0 ? _objectSpread({}, countries.features[idx]) : {};
  info.index = idx;
  return info;
}
function highlightMap(globe, {
  pos,
  latitude,
  longitude,
  bitmap = _bitmap,
  countries = _countries
} = {}) {
  if (!countries) return {
    image: null,
    index: -1
  };
  const info = getCountryInfo(globe, {
    pos,
    latitude,
    longitude,
    countries
  });
  const idx = info.index;

  if (idx === lastIndex) {
    bitmap = null;
  } else {
    lastIndex = idx;

    if (idx > 0) {
      if (!highlightMapContxt) {
        const canvas = new OffscreenCanvas(mapScale * mapWidth, mapScale * mapHeight);
        highlightMapContxt = canvas.getContext('2d');
      }

      const path = Object(d3_geo__WEBPACK_IMPORTED_MODULE_4__["geoPath"])(projection).context(highlightMapContxt);
      highlightMapContxt.clearRect(0, 0, mapScale * mapWidth, mapScale * mapHeight);
      highlightMapContxt.drawImage(bitmap, 0, 0);
      highlightMapContxt.save();
      highlightMapContxt.translate(0, mapScale * mapHeight);
      highlightMapContxt.scale(1, -1);
      highlightMapContxt.fillStyle = '#fff';
      highlightMapContxt.beginPath();
      path({
        type: 'FeatureCollection',
        features: countries.features.slice(idx, idx + 1)
      });
      highlightMapContxt.fill();
      highlightMapContxt.restore();
      bitmap = highlightMapContxt.canvas.transferToImageBitmap();
    }

    updateGlobeTexture(globe, bitmap);
  }

  return {
    image: bitmap,
    index: idx
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(3);
var addToUnscopables = __webpack_require__(8);
var Iterators = __webpack_require__(43);
var InternalStateModule = __webpack_require__(44);
var defineIterator = __webpack_require__(47);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(4);
var requireObjectCoercible = __webpack_require__(7);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(5);
var classof = __webpack_require__(6);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);
var create = __webpack_require__(29);
var definePropertyModule = __webpack_require__(18);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var shared = __webpack_require__(12);
var has = __webpack_require__(25);
var uid = __webpack_require__(26);
var NATIVE_SYMBOL = __webpack_require__(27);
var USE_SYMBOL_AS_UID = __webpack_require__(28);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(13);
var store = __webpack_require__(14);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var setGlobal = __webpack_require__(15);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(16);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var definePropertyModule = __webpack_require__(18);
var createPropertyDescriptor = __webpack_require__(24);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(5);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(19);
var anObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(23);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var fails = __webpack_require__(5);
var createElement = __webpack_require__(20);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var isObject = __webpack_require__(21);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(5);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(27);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);
var defineProperties = __webpack_require__(30);
var enumBugKeys = __webpack_require__(38);
var hiddenKeys = __webpack_require__(37);
var html = __webpack_require__(39);
var documentCreateElement = __webpack_require__(20);
var sharedKey = __webpack_require__(42);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var definePropertyModule = __webpack_require__(18);
var anObject = __webpack_require__(22);
var objectKeys = __webpack_require__(31);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(38);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(25);
var toIndexedObject = __webpack_require__(3);
var indexOf = __webpack_require__(33).indexOf;
var hiddenKeys = __webpack_require__(37);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(3);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(36);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(40);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(41);
var global = __webpack_require__(10);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);

module.exports = global;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(12);
var uid = __webpack_require__(26);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(45);
var global = __webpack_require__(10);
var isObject = __webpack_require__(21);
var createNonEnumerableProperty = __webpack_require__(16);
var objectHas = __webpack_require__(25);
var sharedKey = __webpack_require__(42);
var hiddenKeys = __webpack_require__(37);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var inspectSource = __webpack_require__(46);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(14);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(48);
var createIteratorConstructor = __webpack_require__(57);
var getPrototypeOf = __webpack_require__(59);
var setPrototypeOf = __webpack_require__(63);
var setToStringTag = __webpack_require__(62);
var createNonEnumerableProperty = __webpack_require__(16);
var redefine = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(9);
var IS_PURE = __webpack_require__(13);
var Iterators = __webpack_require__(43);
var IteratorsCore = __webpack_require__(58);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var getOwnPropertyDescriptor = __webpack_require__(49).f;
var createNonEnumerableProperty = __webpack_require__(16);
var redefine = __webpack_require__(51);
var setGlobal = __webpack_require__(15);
var copyConstructorProperties = __webpack_require__(52);
var isForced = __webpack_require__(56);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(17);
var propertyIsEnumerableModule = __webpack_require__(50);
var createPropertyDescriptor = __webpack_require__(24);
var toIndexedObject = __webpack_require__(3);
var toPrimitive = __webpack_require__(23);
var has = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(19);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(16);
var has = __webpack_require__(25);
var setGlobal = __webpack_require__(15);
var inspectSource = __webpack_require__(46);
var InternalStateModule = __webpack_require__(44);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(25);
var ownKeys = __webpack_require__(53);
var getOwnPropertyDescriptorModule = __webpack_require__(49);
var definePropertyModule = __webpack_require__(18);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(40);
var getOwnPropertyNamesModule = __webpack_require__(54);
var getOwnPropertySymbolsModule = __webpack_require__(55);
var anObject = __webpack_require__(22);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(32);
var enumBugKeys = __webpack_require__(38);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(5);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(58).IteratorPrototype;
var create = __webpack_require__(29);
var createPropertyDescriptor = __webpack_require__(24);
var setToStringTag = __webpack_require__(62);
var Iterators = __webpack_require__(43);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(59);
var createNonEnumerableProperty = __webpack_require__(16);
var has = __webpack_require__(25);
var wellKnownSymbol = __webpack_require__(9);
var IS_PURE = __webpack_require__(13);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(25);
var toObject = __webpack_require__(60);
var sharedKey = __webpack_require__(42);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(61);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(7);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(5);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(18).f;
var has = __webpack_require__(25);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);
var aPossiblePrototype = __webpack_require__(64);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(48);
var IS_PURE = __webpack_require__(13);
var global = __webpack_require__(10);
var getBuiltIn = __webpack_require__(40);
var NativePromise = __webpack_require__(66);
var redefine = __webpack_require__(51);
var redefineAll = __webpack_require__(67);
var setToStringTag = __webpack_require__(62);
var setSpecies = __webpack_require__(68);
var isObject = __webpack_require__(21);
var aFunction = __webpack_require__(69);
var anInstance = __webpack_require__(70);
var classof = __webpack_require__(6);
var inspectSource = __webpack_require__(46);
var iterate = __webpack_require__(71);
var checkCorrectnessOfIteration = __webpack_require__(78);
var speciesConstructor = __webpack_require__(79);
var task = __webpack_require__(80).set;
var microtask = __webpack_require__(83);
var promiseResolve = __webpack_require__(84);
var hostReportErrors = __webpack_require__(86);
var newPromiseCapabilityModule = __webpack_require__(85);
var perform = __webpack_require__(87);
var InternalStateModule = __webpack_require__(44);
var isForced = __webpack_require__(56);
var wellKnownSymbol = __webpack_require__(9);
var V8_VERSION = __webpack_require__(88);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);

module.exports = global.Promise;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(51);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(40);
var definePropertyModule = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(17);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);
var isArrayIteratorMethod = __webpack_require__(72);
var toLength = __webpack_require__(34);
var bind = __webpack_require__(73);
var getIteratorMethod = __webpack_require__(74);
var callWithSafeIterationClosing = __webpack_require__(77);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);
var Iterators = __webpack_require__(43);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(69);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(75);
var Iterators = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(9);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(76);
var classofRaw = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);
var aFunction = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var fails = __webpack_require__(5);
var classof = __webpack_require__(6);
var bind = __webpack_require__(73);
var html = __webpack_require__(39);
var createElement = __webpack_require__(20);
var IS_IOS = __webpack_require__(81);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(82);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(40);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var getOwnPropertyDescriptor = __webpack_require__(49).f;
var classof = __webpack_require__(6);
var macrotask = __webpack_require__(80).set;
var IS_IOS = __webpack_require__(81);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);
var isObject = __webpack_require__(21);
var newPromiseCapability = __webpack_require__(85);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(69);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var userAgent = __webpack_require__(82);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(10);
var DOMIterables = __webpack_require__(90);
var ArrayIteratorMethods = __webpack_require__(2);
var createNonEnumerableProperty = __webpack_require__(16);
var wellKnownSymbol = __webpack_require__(9);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["bbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["feature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["mesh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["meshArcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["mergeArcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["neighbors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["quantize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return topojson_client__WEBPACK_IMPORTED_MODULE_0__["untransform"]; });

/* harmony import */ var topojson_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topology", function() { return topojson_server__WEBPACK_IMPORTED_MODULE_1__["topology"]; });

/* harmony import */ var topojson_simplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttached", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filterAttached"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttachedWeight", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filterAttachedWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterWeight", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["filterWeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarRingArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["planarRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarTriangleArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["planarTriangleArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presimplify", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["presimplify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["quantile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["simplify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalRingArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["sphericalRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalTriangleArea", function() { return topojson_simplify__WEBPACK_IMPORTED_MODULE_2__["sphericalTriangleArea"]; });






/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return _src_bbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return _src_feature__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["meshArcs"]; });

/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["mergeArcs"]; });

/* harmony import */ var _src_neighbors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(101);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return _src_neighbors__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _src_transform__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_untransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return _src_untransform__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);


/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var t = Object(_transform__WEBPACK_IMPORTED_MODULE_0__["default"])(topology.transform), key,
      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

  function bboxPoint(p) {
    p = t(p);
    if (p[0] < x0) x0 = p[0];
    if (p[0] > x1) x1 = p[0];
    if (p[1] < y0) y0 = p[1];
    if (p[1] > y1) y1 = p[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = -1, n = arc.length, p;
    while (++i < n) {
      p = t(arc[i], i);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
  });

  for (key in topology.objects) {
    bboxGeometry(topology.objects[key]);
  }

  return [x0, y0, x1, y1];
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);


/* harmony default export */ __webpack_exports__["default"] = (function(transform) {
  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);



/* harmony default export */ __webpack_exports__["default"] = (function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature(topology, o); })}
      : feature(topology, o);
});

function feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) Object(_reverse__WEBPACK_IMPORTED_MODULE_0__["default"])(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return meshArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);



/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return mergeArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);



function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, mergeArcs.apply(this, arguments));
});

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);


/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _untransform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);



/* harmony default export */ __webpack_exports__["default"] = (function(topology, transform) {
  if (topology.transform) throw new Error("already quantized");

  if (!transform || !transform.scale) {
    if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
    box = topology.bbox || Object(_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(topology);
    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
  } else {
    box = topology.bbox;
  }

  var t = Object(_untransform__WEBPACK_IMPORTED_MODULE_1__["default"])(transform), box, key, inputs = topology.objects, outputs = {};

  function quantizePoint(point) {
    return t(point);
  }

  function quantizeGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function quantizeArc(input) {
    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
    output[0] = t(input[0], 0);
    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
    output.length = j;
    return output;
  }

  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

  return {
    type: "Topology",
    bbox: box,
    transform: transform,
    objects: outputs,
    arcs: topology.arcs.map(quantizeArc)
  };
});


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);


/* harmony default export */ __webpack_exports__["default"] = (function(transform) {
  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2,
        n = input.length,
        output = new Array(n),
        x1 = Math.round((input[0] - dx) / kx),
        y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_topology__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topology", function() { return _src_topology__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _cut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _dedup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(114);
/* harmony import */ var _delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var _extract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(116);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(117);
/* harmony import */ var _hash_hashmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(111);
/* harmony import */ var _prequantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(118);









// Constructs the TopoJSON Topology for the specified hash of features.
// Each object in the specified hash must be a GeoJSON object,
// meaning FeatureCollection, a Feature or a geometry object.
/* harmony default export */ __webpack_exports__["default"] = (function(objects, quantization) {
  var bbox = Object(_bounds__WEBPACK_IMPORTED_MODULE_0__["default"])(objects = Object(_geometry__WEBPACK_IMPORTED_MODULE_5__["default"])(objects)),
      transform = quantization > 0 && bbox && Object(_prequantize__WEBPACK_IMPORTED_MODULE_7__["default"])(objects, bbox, quantization),
      topology = Object(_dedup__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_cut__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_extract__WEBPACK_IMPORTED_MODULE_4__["default"])(objects))),
      coordinates = topology.coordinates,
      indexByArc = Object(_hash_hashmap__WEBPACK_IMPORTED_MODULE_6__["default"])(topology.arcs.length * 1.4, hashArc, equalArc);

  objects = topology.objects; // for garbage collection
  topology.bbox = bbox;
  topology.arcs = topology.arcs.map(function(arc, i) {
    indexByArc.set(arc, i);
    return coordinates.slice(arc[0], arc[1] + 1);
  });

  delete topology.coordinates;
  coordinates = null;

  function indexGeometry(geometry) {
    if (geometry && indexGeometryType.hasOwnProperty(geometry.type)) indexGeometryType[geometry.type](geometry);
  }

  var indexGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(indexGeometry); },
    LineString: function(o) { o.arcs = indexArcs(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(indexArcs); },
    Polygon: function(o) { o.arcs = o.arcs.map(indexArcs); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(indexMultiArcs); }
  };

  function indexArcs(arc) {
    var indexes = [];
    do {
      var index = indexByArc.get(arc);
      indexes.push(arc[0] < arc[1] ? index : ~index);
    } while (arc = arc.next);
    return indexes;
  }

  function indexMultiArcs(arcs) {
    return arcs.map(indexArcs);
  }

  for (var key in objects) {
    indexGeometry(objects[key]);
  }

  if (transform) {
    topology.transform = transform;
    topology.arcs = Object(_delta__WEBPACK_IMPORTED_MODULE_3__["default"])(topology.arcs);
  }

  return topology;
});

function hashArc(arc) {
  var i = arc[0], j = arc[1], t;
  if (j < i) t = i, i = j, j = t;
  return i + 31 * j;
}

function equalArc(arcA, arcB) {
  var ia = arcA[0], ja = arcA[1],
      ib = arcB[0], jb = arcB[1], t;
  if (ja < ia) t = ia, ia = ja, ja = t;
  if (jb < ib) t = ib, ib = jb, jb = t;
  return ia === ib && ja === jb;
}


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the bounding box of the specified hash of GeoJSON objects.
/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  function boundGeometry(geometry) {
    if (geometry != null && boundGeometryType.hasOwnProperty(geometry.type)) boundGeometryType[geometry.type](geometry);
  }

  var boundGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(boundGeometry); },
    Point: function(o) { boundPoint(o.coordinates); },
    MultiPoint: function(o) { o.coordinates.forEach(boundPoint); },
    LineString: function(o) { boundLine(o.arcs); },
    MultiLineString: function(o) { o.arcs.forEach(boundLine); },
    Polygon: function(o) { o.arcs.forEach(boundLine); },
    MultiPolygon: function(o) { o.arcs.forEach(boundMultiLine); }
  };

  function boundPoint(coordinates) {
    var x = coordinates[0],
        y = coordinates[1];
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  function boundLine(coordinates) {
    coordinates.forEach(boundPoint);
  }

  function boundMultiLine(coordinates) {
    coordinates.forEach(boundLine);
  }

  for (var key in objects) {
    boundGeometry(objects[key]);
  }

  return x1 >= x0 && y1 >= y0 ? [x0, y0, x1, y1] : undefined;
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);


// Given an extracted (pre-)topology, cuts (or rotates) arcs so that all shared
// point sequences are identified. The topology can then be subsequently deduped
// to remove exact duplicate arcs.
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var junctions = Object(_join__WEBPACK_IMPORTED_MODULE_0__["default"])(topology),
      coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      next,
      i, n;

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineMid = line[0],
        lineEnd = line[1];
    while (++lineMid < lineEnd) {
      if (junctions.has(coordinates[lineMid])) {
        next = {0: lineMid, 1: line[1]};
        line[1] = lineMid;
        line = line.next = next;
      }
    }
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0],
        ringMid = ringStart,
        ringEnd = ring[1],
        ringFixed = junctions.has(coordinates[ringStart]);
    while (++ringMid < ringEnd) {
      if (junctions.has(coordinates[ringMid])) {
        if (ringFixed) {
          next = {0: ringMid, 1: ring[1]};
          ring[1] = ringMid;
          ring = ring.next = next;
        } else { // For the first junction, we can rotate rather than cut.
          rotateArray(coordinates, ringStart, ringEnd, ringEnd - ringMid);
          coordinates[ringEnd] = coordinates[ringStart];
          ringFixed = true;
          ringMid = ringStart; // restart; we may have skipped junctions
        }
      }
    }
  }

  return topology;
});

function rotateArray(array, start, end, offset) {
  reverse(array, start, end);
  reverse(array, start, start + offset);
  reverse(array, start + offset, end);
}

function reverse(array, start, end) {
  for (var mid = start + ((end-- - start) >> 1), t; start < mid; ++start, --end) {
    t = array[start], array[start] = array[end], array[end] = t;
  }
}


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hash_hashset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _hash_hashmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _hash_point_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var _hash_point_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113);





// Given an extracted (pre-)topology, identifies all of the junctions. These are
// the points at which arcs (lines or rings) will need to be cut so that each
// arc is represented uniquely.
//
// A junction is a point where at least one arc deviates from another arc going
// through the same point. For example, consider the point B. If there is a arc
// through ABC and another arc through CBA, then B is not a junction because in
// both cases the adjacent point pairs are {A,C}. However, if there is an
// additional arc ABD, then {A,D} != {A,C}, and thus B becomes a junction.
//
// For a closed ring ABCA, the first point A’s adjacent points are the second
// and last point {B,C}. For a line, the first and last point are always
// considered junctions, even if the line is closed; this ensures that a closed
// line is never rotated.
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines,
      rings = topology.rings,
      indexes = index(),
      visitedByIndex = new Int32Array(coordinates.length),
      leftByIndex = new Int32Array(coordinates.length),
      rightByIndex = new Int32Array(coordinates.length),
      junctionByIndex = new Int8Array(coordinates.length),
      junctionCount = 0, // upper bound on number of junctions
      i, n,
      previousIndex,
      currentIndex,
      nextIndex;

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = leftByIndex[i] = rightByIndex[i] = -1;
  }

  for (i = 0, n = lines.length; i < n; ++i) {
    var line = lines[i],
        lineStart = line[0],
        lineEnd = line[1];
    currentIndex = indexes[lineStart];
    nextIndex = indexes[++lineStart];
    ++junctionCount, junctionByIndex[currentIndex] = 1; // start
    while (++lineStart <= lineEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[lineStart]);
    }
    ++junctionCount, junctionByIndex[nextIndex] = 1; // end
  }

  for (i = 0, n = coordinates.length; i < n; ++i) {
    visitedByIndex[i] = -1;
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    var ring = rings[i],
        ringStart = ring[0] + 1,
        ringEnd = ring[1];
    previousIndex = indexes[ringEnd - 1];
    currentIndex = indexes[ringStart - 1];
    nextIndex = indexes[ringStart];
    sequence(i, previousIndex, currentIndex, nextIndex);
    while (++ringStart <= ringEnd) {
      sequence(i, previousIndex = currentIndex, currentIndex = nextIndex, nextIndex = indexes[ringStart]);
    }
  }

  function sequence(i, previousIndex, currentIndex, nextIndex) {
    if (visitedByIndex[currentIndex] === i) return; // ignore self-intersection
    visitedByIndex[currentIndex] = i;
    var leftIndex = leftByIndex[currentIndex];
    if (leftIndex >= 0) {
      var rightIndex = rightByIndex[currentIndex];
      if ((leftIndex !== previousIndex || rightIndex !== nextIndex)
        && (leftIndex !== nextIndex || rightIndex !== previousIndex)) {
        ++junctionCount, junctionByIndex[currentIndex] = 1;
      }
    } else {
      leftByIndex[currentIndex] = previousIndex;
      rightByIndex[currentIndex] = nextIndex;
    }
  }

  function index() {
    var indexByPoint = Object(_hash_hashmap__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates.length * 1.4, hashIndex, equalIndex, Int32Array, -1, Int32Array),
        indexes = new Int32Array(coordinates.length);

    for (var i = 0, n = coordinates.length; i < n; ++i) {
      indexes[i] = indexByPoint.maybeSet(i, i);
    }

    return indexes;
  }

  function hashIndex(i) {
    return Object(_hash_point_hash__WEBPACK_IMPORTED_MODULE_3__["default"])(coordinates[i]);
  }

  function equalIndex(i, j) {
    return Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(coordinates[i], coordinates[j]);
  }

  visitedByIndex = leftByIndex = rightByIndex = null;

  var junctionByPoint = Object(_hash_hashset__WEBPACK_IMPORTED_MODULE_0__["default"])(junctionCount * 1.4, _hash_point_hash__WEBPACK_IMPORTED_MODULE_3__["default"], _hash_point_equal__WEBPACK_IMPORTED_MODULE_2__["default"]), j;

  // Convert back to a standard hashset by point for caller convenience.
  for (i = 0, n = coordinates.length; i < n; ++i) {
    if (junctionByIndex[j = indexes[i]]) {
      junctionByPoint.add(coordinates[j]);
    }
  }

  return junctionByPoint;
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(size, hash, equal, type, empty) {
  if (arguments.length === 3) {
    type = Array;
    empty = null;
  }

  var store = new type(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
      mask = size - 1;

  for (var i = 0; i < size; ++i) {
    store[i] = empty;
  }

  function add(value) {
    var index = hash(value) & mask,
        match = store[index],
        collisions = 0;
    while (match != empty) {
      if (equal(match, value)) return true;
      if (++collisions >= size) throw new Error("full hashset");
      match = store[index = (index + 1) & mask];
    }
    store[index] = value;
    return true;
  }

  function has(value) {
    var index = hash(value) & mask,
        match = store[index],
        collisions = 0;
    while (match != empty) {
      if (equal(match, value)) return true;
      if (++collisions >= size) break;
      match = store[index = (index + 1) & mask];
    }
    return false;
  }

  function values() {
    var values = [];
    for (var i = 0, n = store.length; i < n; ++i) {
      var match = store[i];
      if (match != empty) values.push(match);
    }
    return values;
  }

  return {
    add: add,
    has: has,
    values: values
  };
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(size, hash, equal, keyType, keyEmpty, valueType) {
  if (arguments.length === 3) {
    keyType = valueType = Array;
    keyEmpty = null;
  }

  var keystore = new keyType(size = 1 << Math.max(4, Math.ceil(Math.log(size) / Math.LN2))),
      valstore = new valueType(size),
      mask = size - 1;

  for (var i = 0; i < size; ++i) {
    keystore[i] = keyEmpty;
  }

  function set(key, value) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index] = value;
      if (++collisions >= size) throw new Error("full hashmap");
      matchKey = keystore[index = (index + 1) & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }

  function maybeSet(key, value) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index];
      if (++collisions >= size) throw new Error("full hashmap");
      matchKey = keystore[index = (index + 1) & mask];
    }
    keystore[index] = key;
    valstore[index] = value;
    return value;
  }

  function get(key, missingValue) {
    var index = hash(key) & mask,
        matchKey = keystore[index],
        collisions = 0;
    while (matchKey != keyEmpty) {
      if (equal(matchKey, key)) return valstore[index];
      if (++collisions >= size) break;
      matchKey = keystore[index = (index + 1) & mask];
    }
    return missingValue;
  }

  function keys() {
    var keys = [];
    for (var i = 0, n = keystore.length; i < n; ++i) {
      var matchKey = keystore[i];
      if (matchKey != keyEmpty) keys.push(matchKey);
    }
    return keys;
  }

  return {
    set: set,
    maybeSet: maybeSet, // set if unset
    get: get,
    keys: keys
  };
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(pointA, pointB) {
  return pointA[0] === pointB[0] && pointA[1] === pointB[1];
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TODO if quantized, use simpler Int32 hashing?

var buffer = new ArrayBuffer(16),
    floats = new Float64Array(buffer),
    uints = new Uint32Array(buffer);

/* harmony default export */ __webpack_exports__["default"] = (function(point) {
  floats[0] = point[0];
  floats[1] = point[1];
  var hash = uints[0] ^ uints[1];
  hash = hash << 5 ^ hash >> 7 ^ uints[2] ^ uints[3];
  return hash & 0x7fffffff;
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hash_hashmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _hash_point_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var _hash_point_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);




// Given a cut topology, combines duplicate arcs.
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var coordinates = topology.coordinates,
      lines = topology.lines, line,
      rings = topology.rings, ring,
      arcCount = lines.length + rings.length,
      i, n;

  delete topology.lines;
  delete topology.rings;

  // Count the number of (non-unique) arcs to initialize the hashmap safely.
  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i]; while (line = line.next) ++arcCount;
  }
  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i]; while (ring = ring.next) ++arcCount;
  }

  var arcsByEnd = Object(_hash_hashmap__WEBPACK_IMPORTED_MODULE_0__["default"])(arcCount * 2 * 1.4, _hash_point_hash__WEBPACK_IMPORTED_MODULE_2__["default"], _hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"]),
      arcs = topology.arcs = [];

  for (i = 0, n = lines.length; i < n; ++i) {
    line = lines[i];
    do {
      dedupLine(line);
    } while (line = line.next);
  }

  for (i = 0, n = rings.length; i < n; ++i) {
    ring = rings[i];
    if (ring.next) { // arc is no longer closed
      do {
        dedupLine(ring);
      } while (ring = ring.next);
    } else {
      dedupRing(ring);
    }
  }

  function dedupLine(arc) {
    var startPoint,
        endPoint,
        startArcs, startArc,
        endArcs, endArc,
        i, n;

    // Does this arc match an existing arc in order?
    if (startArcs = arcsByEnd.get(startPoint = coordinates[arc[0]])) {
      for (i = 0, n = startArcs.length; i < n; ++i) {
        startArc = startArcs[i];
        if (equalLine(startArc, arc)) {
          arc[0] = startArc[0];
          arc[1] = startArc[1];
          return;
        }
      }
    }

    // Does this arc match an existing arc in reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[1]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (reverseEqualLine(endArc, arc)) {
          arc[1] = endArc[0];
          arc[0] = endArc[1];
          return;
        }
      }
    }

    if (startArcs) startArcs.push(arc); else arcsByEnd.set(startPoint, [arc]);
    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function dedupRing(arc) {
    var endPoint,
        endArcs,
        endArc,
        i, n;

    // Does this arc match an existing line in order, or reverse order?
    // Rings are closed, so their start point and end point is the same.
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0]])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    // Otherwise, does this arc match an existing ring in order, or reverse order?
    if (endArcs = arcsByEnd.get(endPoint = coordinates[arc[0] + findMinimumOffset(arc)])) {
      for (i = 0, n = endArcs.length; i < n; ++i) {
        endArc = endArcs[i];
        if (equalRing(endArc, arc)) {
          arc[0] = endArc[0];
          arc[1] = endArc[1];
          return;
        }
        if (reverseEqualRing(endArc, arc)) {
          arc[0] = endArc[1];
          arc[1] = endArc[0];
          return;
        }
      }
    }

    if (endArcs) endArcs.push(arc); else arcsByEnd.set(endPoint, [arc]);
    arcs.push(arc);
  }

  function equalLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, ++ib) if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia], coordinates[ib])) return false;
    return true;
  }

  function reverseEqualLine(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1];
    if (ia - ja !== ib - jb) return false;
    for (; ia <= ja; ++ia, --jb) if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia], coordinates[jb])) return false;
    return true;
  }

  function equalRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia + (i + ka) % n], coordinates[ib + (i + kb) % n])) return false;
    }
    return true;
  }

  function reverseEqualRing(arcA, arcB) {
    var ia = arcA[0], ib = arcB[0],
        ja = arcA[1], jb = arcB[1],
        n = ja - ia;
    if (n !== jb - ib) return false;
    var ka = findMinimumOffset(arcA),
        kb = n - findMinimumOffset(arcB);
    for (var i = 0; i < n; ++i) {
      if (!Object(_hash_point_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[ia + (i + ka) % n], coordinates[jb - (i + kb) % n])) return false;
    }
    return true;
  }

  // Rings are rotated to a consistent, but arbitrary, start point.
  // This is necessary to detect when a ring and a rotated copy are dupes.
  function findMinimumOffset(arc) {
    var start = arc[0],
        end = arc[1],
        mid = start,
        minimum = mid,
        minimumPoint = coordinates[mid];
    while (++mid < end) {
      var point = coordinates[mid];
      if (point[0] < minimumPoint[0] || point[0] === minimumPoint[0] && point[1] < minimumPoint[1]) {
        minimum = mid;
        minimumPoint = point;
      }
    }
    return minimum - start;
  }

  return topology;
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Given an array of arcs in absolute (but already quantized!) coordinates,
// converts to fixed-point delta encoding.
// This is a destructive operation that modifies the given arcs!
/* harmony default export */ __webpack_exports__["default"] = (function(arcs) {
  var i = -1,
      n = arcs.length;

  while (++i < n) {
    var arc = arcs[i],
        j = 0,
        k = 1,
        m = arc.length,
        point = arc[0],
        x0 = point[0],
        y0 = point[1],
        x1,
        y1;

    while (++j < m) {
      point = arc[j], x1 = point[0], y1 = point[1];
      if (x1 !== x0 || y1 !== y0) arc[k++] = [x1 - x0, y1 - y0], x0 = x1, y0 = y1;
    }

    if (k === 1) arc[k++] = [0, 0]; // Each arc must be an array of two or more positions.

    arc.length = k;
  }

  return arcs;
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Extracts the lines and rings from the specified hash of geometry objects.
//
// Returns an object with three properties:
//
// * coordinates - shared buffer of [x, y] coordinates
// * lines - lines extracted from the hash, of the form [start, end]
// * rings - rings extracted from the hash, of the form [start, end]
//
// For each ring or line, start and end represent inclusive indexes into the
// coordinates buffer. For rings (and closed lines), coordinates[start] equals
// coordinates[end].
//
// For each line or polygon geometry in the input hash, including nested
// geometries as in geometry collections, the `coordinates` array is replaced
// with an equivalent `arcs` array that, for each line (for line string
// geometries) or ring (for polygon geometries), points to one of the above
// lines or rings.
/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var index = -1,
      lines = [],
      rings = [],
      coordinates = [];

  function extractGeometry(geometry) {
    if (geometry && extractGeometryType.hasOwnProperty(geometry.type)) extractGeometryType[geometry.type](geometry);
  }

  var extractGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(extractGeometry); },
    LineString: function(o) { o.arcs = extractLine(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(extractLine); },
    Polygon: function(o) { o.arcs = o.arcs.map(extractRing); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(extractMultiRing); }
  };

  function extractLine(line) {
    for (var i = 0, n = line.length; i < n; ++i) coordinates[++index] = line[i];
    var arc = {0: index - n + 1, 1: index};
    lines.push(arc);
    return arc;
  }

  function extractRing(ring) {
    for (var i = 0, n = ring.length; i < n; ++i) coordinates[++index] = ring[i];
    var arc = {0: index - n + 1, 1: index};
    rings.push(arc);
    return arc;
  }

  function extractMultiRing(rings) {
    return rings.map(extractRing);
  }

  for (var key in objects) {
    extractGeometry(objects[key]);
  }

  return {
    type: "Topology",
    coordinates: coordinates,
    lines: lines,
    rings: rings,
    objects: objects
  };
});


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Given a hash of GeoJSON objects, returns a hash of GeoJSON geometry objects.
// Any null input geometry objects are represented as {type: null} in the output.
// Any feature.{id,properties,bbox} are transferred to the output geometry object.
// Each output geometry object is a shallow copy of the input (e.g., properties, coordinates)!
/* harmony default export */ __webpack_exports__["default"] = (function(inputs) {
  var outputs = {}, key;
  for (key in inputs) outputs[key] = geomifyObject(inputs[key]);
  return outputs;
});

function geomifyObject(input) {
  return input == null ? {type: null}
      : (input.type === "FeatureCollection" ? geomifyFeatureCollection
      : input.type === "Feature" ? geomifyFeature
      : geomifyGeometry)(input);
}

function geomifyFeatureCollection(input) {
  var output = {type: "GeometryCollection", geometries: input.features.map(geomifyFeature)};
  if (input.bbox != null) output.bbox = input.bbox;
  return output;
}

function geomifyFeature(input) {
  var output = geomifyGeometry(input.geometry), key; // eslint-disable-line no-unused-vars
  if (input.id != null) output.id = input.id;
  if (input.bbox != null) output.bbox = input.bbox;
  for (key in input.properties) { output.properties = input.properties; break; }
  return output;
}

function geomifyGeometry(input) {
  if (input == null) return {type: null};
  var output = input.type === "GeometryCollection" ? {type: "GeometryCollection", geometries: input.geometries.map(geomifyGeometry)}
      : input.type === "Point" || input.type === "MultiPoint" ? {type: input.type, coordinates: input.coordinates}
      : {type: input.type, arcs: input.coordinates}; // TODO Check for unknown types?
  if (input.bbox != null) output.bbox = input.bbox;
  return output;
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(objects, bbox, n) {
  var x0 = bbox[0],
      y0 = bbox[1],
      x1 = bbox[2],
      y1 = bbox[3],
      kx = x1 - x0 ? (n - 1) / (x1 - x0) : 1,
      ky = y1 - y0 ? (n - 1) / (y1 - y0) : 1;

  function quantizePoint(input) {
    return [Math.round((input[0] - x0) * kx), Math.round((input[1] - y0) * ky)];
  }

  function quantizePoints(input, m) {
    var i = -1,
        j = 0,
        n = input.length,
        output = new Array(n), // pessimistic
        pi,
        px,
        py,
        x,
        y;

    while (++i < n) {
      pi = input[i];
      x = Math.round((pi[0] - x0) * kx);
      y = Math.round((pi[1] - y0) * ky);
      if (x !== px || y !== py) output[j++] = [px = x, py = y]; // non-coincident points
    }

    output.length = j;
    while (j < m) j = output.push([output[0][0], output[0][1]]);
    return output;
  }

  function quantizeLine(input) {
    return quantizePoints(input, 2);
  }

  function quantizeRing(input) {
    return quantizePoints(input, 4);
  }

  function quantizePolygon(input) {
    return input.map(quantizeRing);
  }

  function quantizeGeometry(o) {
    if (o != null && quantizeGeometryType.hasOwnProperty(o.type)) quantizeGeometryType[o.type](o);
  }

  var quantizeGeometryType = {
    GeometryCollection: function(o) { o.geometries.forEach(quantizeGeometry); },
    Point: function(o) { o.coordinates = quantizePoint(o.coordinates); },
    MultiPoint: function(o) { o.coordinates = o.coordinates.map(quantizePoint); },
    LineString: function(o) { o.arcs = quantizeLine(o.arcs); },
    MultiLineString: function(o) { o.arcs = o.arcs.map(quantizeLine); },
    Polygon: function(o) { o.arcs = quantizePolygon(o.arcs); },
    MultiPolygon: function(o) { o.arcs = o.arcs.map(quantizePolygon); }
  };

  for (var key in objects) {
    quantizeGeometry(objects[key]);
  }

  return {
    scale: [1 / kx, 1 / ky],
    translate: [x0, y0]
  };
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _src_filter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_filterAttached__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttached", function() { return _src_filterAttached__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_filterAttachedWeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(123);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterAttachedWeight", function() { return _src_filterAttachedWeight__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_filterWeight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(124);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterWeight", function() { return _src_filterWeight__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_planar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(125);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarRingArea", function() { return _src_planar__WEBPACK_IMPORTED_MODULE_4__["planarRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planarTriangleArea", function() { return _src_planar__WEBPACK_IMPORTED_MODULE_4__["planarTriangleArea"]; });

/* harmony import */ var _src_presimplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presimplify", function() { return _src_presimplify__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _src_quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_simplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return _src_simplify__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_spherical__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalRingArea", function() { return _src_spherical__WEBPACK_IMPORTED_MODULE_8__["sphericalRingArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sphericalTriangleArea", function() { return _src_spherical__WEBPACK_IMPORTED_MODULE_8__["sphericalTriangleArea"]; });












/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prune__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);


/* harmony default export */ __webpack_exports__["default"] = (function(topology, filter) {
  var oldObjects = topology.objects,
      newObjects = {},
      key;

  if (filter == null) filter = filterTrue;

  function filterGeometry(input) {
    var output, arcs;
    switch (input.type) {
      case "Polygon": {
        arcs = filterRings(input.arcs);
        output = arcs ? {type: "Polygon", arcs: arcs} : {type: null};
        break;
      }
      case "MultiPolygon": {
        arcs = input.arcs.map(filterRings).filter(filterIdentity);
        output = arcs.length ? {type: "MultiPolygon", arcs: arcs} : {type: null};
        break;
      }
      case "GeometryCollection": {
        arcs = input.geometries.map(filterGeometry).filter(filterNotNull);
        output = arcs.length ? {type: "GeometryCollection", geometries: arcs} : {type: null};
        break;
      }
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function filterRings(arcs) {
    return arcs.length && filterExteriorRing(arcs[0]) // if the exterior is small, ignore any holes
        ? [arcs[0]].concat(arcs.slice(1).filter(filterInteriorRing))
        : null;
  }

  function filterExteriorRing(ring) {
    return filter(ring, false);
  }

  function filterInteriorRing(ring) {
    return filter(ring, true);
  }

  for (key in oldObjects) {
    newObjects[key] = filterGeometry(oldObjects[key]);
  }

  return Object(_prune__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "Topology",
    bbox: topology.bbox,
    transform: topology.transform,
    objects: newObjects,
    arcs: topology.arcs
  });
});

function filterTrue() {
  return true;
}

function filterIdentity(x) {
  return x;
}

function filterNotNull(geometry) {
  return geometry.type != null;
}


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var oldObjects = topology.objects,
      newObjects = {},
      oldArcs = topology.arcs,
      oldArcsLength = oldArcs.length,
      oldIndex = -1,
      newIndexByOldIndex = new Array(oldArcsLength),
      newArcsLength = 0,
      newArcs,
      newIndex = -1,
      key;

  function scanGeometry(input) {
    switch (input.type) {
      case "GeometryCollection": input.geometries.forEach(scanGeometry); break;
      case "LineString": scanArcs(input.arcs); break;
      case "MultiLineString": input.arcs.forEach(scanArcs); break;
      case "Polygon": input.arcs.forEach(scanArcs); break;
      case "MultiPolygon": input.arcs.forEach(scanMultiArcs); break;
    }
  }

  function scanArc(index) {
    if (index < 0) index = ~index;
    if (!newIndexByOldIndex[index]) newIndexByOldIndex[index] = 1, ++newArcsLength;
  }

  function scanArcs(arcs) {
    arcs.forEach(scanArc);
  }

  function scanMultiArcs(arcs) {
    arcs.forEach(scanArcs);
  }

  function reindexGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(reindexGeometry)}; break;
      case "LineString": output = {type: "LineString", arcs: reindexArcs(input.arcs)}; break;
      case "MultiLineString": output = {type: "MultiLineString", arcs: input.arcs.map(reindexArcs)}; break;
      case "Polygon": output = {type: "Polygon", arcs: input.arcs.map(reindexArcs)}; break;
      case "MultiPolygon": output = {type: "MultiPolygon", arcs: input.arcs.map(reindexMultiArcs)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function reindexArc(oldIndex) {
    return oldIndex < 0 ? ~newIndexByOldIndex[~oldIndex] : newIndexByOldIndex[oldIndex];
  }

  function reindexArcs(arcs) {
    return arcs.map(reindexArc);
  }

  function reindexMultiArcs(arcs) {
    return arcs.map(reindexArcs);
  }

  for (key in oldObjects) {
    scanGeometry(oldObjects[key]);
  }

  newArcs = new Array(newArcsLength);

  while (++oldIndex < oldArcsLength) {
    if (newIndexByOldIndex[oldIndex]) {
      newIndexByOldIndex[oldIndex] = ++newIndex;
      newArcs[newIndex] = oldArcs[oldIndex];
    }
  }

  for (key in oldObjects) {
    newObjects[key] = reindexGeometry(oldObjects[key]);
  }

  return {
    type: "Topology",
    bbox: topology.bbox,
    transform: topology.transform,
    objects: newObjects,
    arcs: newArcs
  };
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var ownerByArc = new Array(topology.arcs.length), // arc index -> index of unique associated ring, or -1 if used by multiple rings
      ownerIndex = 0,
      key;

  function testGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(testGeometry); break;
      case "Polygon": testArcs(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(testArcs); break;
    }
  }

  function testArcs(arcs) {
    for (var i = 0, n = arcs.length; i < n; ++i, ++ownerIndex) {
      for (var ring = arcs[i], j = 0, m = ring.length; j < m; ++j) {
        var arc = ring[j];
        if (arc < 0) arc = ~arc;
        var owner = ownerByArc[arc];
        if (owner == null) ownerByArc[arc] = ownerIndex;
        else if (owner !== ownerIndex) ownerByArc[arc] = -1;
      }
    }
  }

  for (key in topology.objects) {
    testGeometry(topology.objects[key]);
  }

  return function(ring) {
    for (var j = 0, m = ring.length, arc; j < m; ++j) {
      if (ownerByArc[(arc = ring[j]) < 0 ? ~arc : arc] === -1) {
        return true;
      }
    }
    return false;
  };
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterAttached__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _filterWeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);



/* harmony default export */ __webpack_exports__["default"] = (function(topology, minWeight, weight) {
  var a = Object(_filterAttached__WEBPACK_IMPORTED_MODULE_0__["default"])(topology),
      w = Object(_filterWeight__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, minWeight, weight);
  return function(ring, interior) {
    return a(ring, interior) || w(ring, interior);
  };
});


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _planar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(125);



/* harmony default export */ __webpack_exports__["default"] = (function(topology, minWeight, weight) {
  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;

  if (weight == null) weight = _planar__WEBPACK_IMPORTED_MODULE_1__["planarRingArea"];

  return function(ring, interior) {
    return weight(Object(topojson_client__WEBPACK_IMPORTED_MODULE_0__["feature"])(topology, {type: "Polygon", arcs: [ring]}).geometry.coordinates[0], interior) >= minWeight;
  };
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planarTriangleArea", function() { return planarTriangleArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planarRingArea", function() { return planarRingArea; });
function planarTriangleArea(triangle) {
  var a = triangle[0], b = triangle[1], c = triangle[2];
  return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1])) / 2;
}

function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area) / 2;
}


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _heap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(127);
/* harmony import */ var _planar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);




function copy(point) {
  return [point[0], point[1], 0];
}

/* harmony default export */ __webpack_exports__["default"] = (function(topology, weight) {
  var point = topology.transform ? Object(topojson_client__WEBPACK_IMPORTED_MODULE_0__["transform"])(topology.transform) : copy,
      heap = Object(_heap__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (weight == null) weight = _planar__WEBPACK_IMPORTED_MODULE_2__["planarTriangleArea"];

  var arcs = topology.arcs.map(function(arc) {
    var triangles = [],
        maxWeight = 0,
        triangle,
        i,
        n;

    arc = arc.map(point);

    for (i = 1, n = arc.length - 1; i < n; ++i) {
      triangle = [arc[i - 1], arc[i], arc[i + 1]];
      triangle[1][2] = weight(triangle);
      triangles.push(triangle);
      heap.push(triangle);
    }

    // Always keep the arc endpoints!
    arc[0][2] = arc[n][2] = Infinity;

    for (i = 0, n = triangles.length; i < n; ++i) {
      triangle = triangles[i];
      triangle.previous = triangles[i - 1];
      triangle.next = triangles[i + 1];
    }

    while (triangle = heap.pop()) {
      var previous = triangle.previous,
          next = triangle.next;

      // If the weight of the current point is less than that of the previous
      // point to be eliminated, use the latter’s weight instead. This ensures
      // that the current point cannot be eliminated without eliminating
      // previously- eliminated points.
      if (triangle[1][2] < maxWeight) triangle[1][2] = maxWeight;
      else maxWeight = triangle[1][2];

      if (previous) {
        previous.next = next;
        previous[2] = triangle[2];
        update(previous);
      }

      if (next) {
        next.previous = previous;
        next[0] = triangle[0];
        update(next);
      }
    }

    return arc;
  });

  function update(triangle) {
    heap.remove(triangle);
    triangle[1][2] = weight(triangle);
    heap.push(triangle);
  }

  return {
    type: "Topology",
    bbox: topology.bbox,
    objects: topology.objects,
    arcs: arcs
  };
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function compare(a, b) {
  return a[1][2] - b[1][2];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var heap = {},
      array = [],
      size = 0;

  heap.push = function(object) {
    up(array[object._ = size] = object, size++);
    return size;
  };

  heap.pop = function() {
    if (size <= 0) return;
    var removed = array[0], object;
    if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
    return removed;
  };

  heap.remove = function(removed) {
    var i = removed._, object;
    if (array[i] !== removed) return; // invalid request
    if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
    return i;
  };

  function up(object, i) {
    while (i > 0) {
      var j = ((i + 1) >> 1) - 1,
          parent = array[j];
      if (compare(object, parent) >= 0) break;
      array[parent._ = i] = parent;
      array[object._ = i = j] = object;
    }
  }

  function down(object, i) {
    while (true) {
      var r = (i + 1) << 1,
          l = r - 1,
          j = i,
          child = array[j];
      if (l < size && compare(array[l], child) < 0) child = array[j = l];
      if (r < size && compare(array[r], child) < 0) child = array[j = r];
      if (j === i) break;
      array[child._ = i] = child;
      array[object._ = i = j] = object;
    }
  }

  return heap;
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, p) {
  var array = [];

  topology.arcs.forEach(function(arc) {
    arc.forEach(function(point) {
      if (isFinite(point[2])) { // Ignore endpoints, whose weight is Infinity.
        array.push(point[2]);
      }
    });
  });

  return array.length && quantile(array.sort(descending), p);
});

function quantile(array, p) {
  if (!(n = array.length)) return;
  if ((p = +p) <= 0 || n < 2) return array[0];
  if (p >= 1) return array[n - 1];
  var n,
      h = (n - 1) * p,
      i = Math.floor(h),
      a = array[i],
      b = array[i + 1];
  return a + (b - a) * (h - i);
}

function descending(a, b) {
  return b - a;
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, minWeight) {
  minWeight = minWeight == null ? Number.MIN_VALUE : +minWeight;

  // Remove points whose weight is less than the minimum weight.
  var arcs = topology.arcs.map(function(input) {
    var i = -1,
        j = 0,
        n = input.length,
        output = new Array(n), // pessimistic
        point;

    while (++i < n) {
      if ((point = input[i])[2] >= minWeight) {
        output[j++] = [point[0], point[1]];
      }
    }

    output.length = j;
    return output;
  });

  return {
    type: "Topology",
    transform: topology.transform,
    bbox: topology.bbox,
    objects: topology.objects,
    arcs: arcs
  };
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphericalRingArea", function() { return sphericalRingArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphericalTriangleArea", function() { return sphericalTriangleArea; });
var pi = Math.PI,
    tau = 2 * pi,
    quarterPi = pi / 4,
    radians = pi / 180,
    abs = Math.abs,
    atan2 = Math.atan2,
    cos = Math.cos,
    sin = Math.sin;

function halfArea(ring, closed) {
  var i = 0,
      n = ring.length,
      sum = 0,
      point = ring[closed ? i++ : n - 1],
      lambda0, lambda1 = point[0] * radians,
      phi1 = (point[1] * radians) / 2 + quarterPi,
      cosPhi0, cosPhi1 = cos(phi1),
      sinPhi0, sinPhi1 = sin(phi1);

  for (; i < n; ++i) {
    point = ring[i];
    lambda0 = lambda1, lambda1 = point[0] * radians;
    phi1 = (point[1] * radians) / 2 + quarterPi;
    cosPhi0 = cosPhi1, cosPhi1 = cos(phi1);
    sinPhi0 = sinPhi1, sinPhi1 = sin(phi1);

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    // See https://github.com/d3/d3-geo/blob/master/README.md#geoArea
    var dLambda = lambda1 - lambda0,
        sdLambda = dLambda >= 0 ? 1 : -1,
        adLambda = sdLambda * dLambda,
        k = sinPhi0 * sinPhi1,
        u = cosPhi0 * cosPhi1 + k * cos(adLambda),
        v = k * sdLambda * sin(adLambda);
    sum += atan2(v, u);
  }

  return sum;
}

function sphericalRingArea(ring, interior) {
  var sum = halfArea(ring, true);
  if (interior) sum *= -1;
  return (sum < 0 ? tau + sum : sum) * 2;
}

function sphericalTriangleArea(t) {
  return abs(halfArea(t, false)) * 2;
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return _area_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return _bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(139);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return _centroid_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(140);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _clip_circle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(182);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return _clip_circle_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _clip_extent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(183);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return _clip_extent_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _clip_rectangle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(184);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return _clip_rectangle_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _distance_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(187);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return _distance_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _graticule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(189);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return _graticule_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return _graticule_js__WEBPACK_IMPORTED_MODULE_10__["graticule10"]; });

/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(190);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return _interpolate_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(188);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return _length_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _path_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return _path_index_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _projection_albers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(199);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return _projection_albers_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _projection_albersUsa_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(207);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return _projection_albersUsa_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _projection_azimuthalEqualArea_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(208);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return _projection_azimuthalEqualArea_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return _projection_azimuthalEqualArea_js__WEBPACK_IMPORTED_MODULE_16__["azimuthalEqualAreaRaw"]; });

/* harmony import */ var _projection_azimuthalEquidistant_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(210);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return _projection_azimuthalEquidistant_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return _projection_azimuthalEquidistant_js__WEBPACK_IMPORTED_MODULE_17__["azimuthalEquidistantRaw"]; });

/* harmony import */ var _projection_conicConformal_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(211);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return _projection_conicConformal_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return _projection_conicConformal_js__WEBPACK_IMPORTED_MODULE_18__["conicConformalRaw"]; });

/* harmony import */ var _projection_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(200);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return _projection_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return _projection_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_19__["conicEqualAreaRaw"]; });

/* harmony import */ var _projection_conicEquidistant_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(213);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return _projection_conicEquidistant_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return _projection_conicEquidistant_js__WEBPACK_IMPORTED_MODULE_20__["conicEquidistantRaw"]; });

/* harmony import */ var _projection_equalEarth_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(215);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarth", function() { return _projection_equalEarth_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarthRaw", function() { return _projection_equalEarth_js__WEBPACK_IMPORTED_MODULE_21__["equalEarthRaw"]; });

/* harmony import */ var _projection_equirectangular_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(214);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return _projection_equirectangular_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return _projection_equirectangular_js__WEBPACK_IMPORTED_MODULE_22__["equirectangularRaw"]; });

/* harmony import */ var _projection_gnomonic_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(216);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return _projection_gnomonic_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return _projection_gnomonic_js__WEBPACK_IMPORTED_MODULE_23__["gnomonicRaw"]; });

/* harmony import */ var _projection_identity_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(217);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return _projection_identity_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _projection_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(202);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return _projection_index_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return _projection_index_js__WEBPACK_IMPORTED_MODULE_25__["projectionMutator"]; });

/* harmony import */ var _projection_mercator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(212);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return _projection_mercator_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return _projection_mercator_js__WEBPACK_IMPORTED_MODULE_26__["mercatorRaw"]; });

/* harmony import */ var _projection_naturalEarth1_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(218);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return _projection_naturalEarth1_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return _projection_naturalEarth1_js__WEBPACK_IMPORTED_MODULE_27__["naturalEarth1Raw"]; });

/* harmony import */ var _projection_orthographic_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(219);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return _projection_orthographic_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return _projection_orthographic_js__WEBPACK_IMPORTED_MODULE_28__["orthographicRaw"]; });

/* harmony import */ var _projection_stereographic_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(220);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return _projection_stereographic_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return _projection_stereographic_js__WEBPACK_IMPORTED_MODULE_29__["stereographicRaw"]; });

/* harmony import */ var _projection_transverseMercator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(221);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return _projection_transverseMercator_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return _projection_transverseMercator_js__WEBPACK_IMPORTED_MODULE_30__["transverseMercatorRaw"]; });

/* harmony import */ var _rotation_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(142);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return _rotation_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return _stream_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(203);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return _transform_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });







 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).





























/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaRingSum", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaStream", function() { return areaStream; });
/* harmony import */ var _adder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);





var areaRingSum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

var areaSum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? _math_js__WEBPACK_IMPORTED_MODULE_1__["tau"] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  sphere: function() {
    areaSum.add(_math_js__WEBPACK_IMPORTED_MODULE_1__["tau"]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"];
  lambda0 = lambda, cosPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi = phi / 2 + _math_js__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]), sinPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"];
  phi = phi / 2 + _math_js__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      sinPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(adLambda),
      v = k * sdLambda * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(adLambda);
  areaRingSum.add(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["atan2"])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  areaSum.reset();
  Object(_stream_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, areaStream);
  return areaSum * 2;
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarterPi", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "haversin", function() { return haversin; });
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noop; });
function noop() {}


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(134);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(136);






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    _area_js__WEBPACK_IMPORTED_MODULE_1__["areaStream"].polygonStart();
  },
  polygonEnd: function() {
    _area_js__WEBPACK_IMPORTED_MODULE_1__["areaStream"].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (_area_js__WEBPACK_IMPORTED_MODULE_1__["areaRingSum"] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > _math_js__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) phi1 = 90;
    else if (deltaSum < -_math_js__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  },
  sphere: function() {
    lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_2__["cartesian"])([lambda * _math_js__WEBPACK_IMPORTED_MODULE_3__["radians"], phi * _math_js__WEBPACK_IMPORTED_MODULE_3__["radians"]]);
  if (p0) {
    var normal = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_2__["cartesianCross"])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_2__["cartesianCross"])(equatorial, normal);
    Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_2__["cartesianNormalizeInPlace"])(inflection);
    inflection = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_2__["spherical"])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * _math_js__WEBPACK_IMPORTED_MODULE_3__["degrees"] * sign,
        phii,
        antimeridian = Object(_math_js__WEBPACK_IMPORTED_MODULE_3__["abs"])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * _math_js__WEBPACK_IMPORTED_MODULE_3__["degrees"];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * _math_js__WEBPACK_IMPORTED_MODULE_3__["degrees"];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(_math_js__WEBPACK_IMPORTED_MODULE_3__["abs"])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  _area_js__WEBPACK_IMPORTED_MODULE_1__["areaStream"].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  _area_js__WEBPACK_IMPORTED_MODULE_1__["areaStream"].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  _area_js__WEBPACK_IMPORTED_MODULE_1__["areaStream"].lineEnd();
  if (Object(_math_js__WEBPACK_IMPORTED_MODULE_3__["abs"])(deltaSum) > _math_js__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["default"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(_stream_js__WEBPACK_IMPORTED_MODULE_4__["default"])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spherical", function() { return spherical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesian", function() { return cartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianDot", function() { return cartesianDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianCross", function() { return cartesianCross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianAddInPlace", function() { return cartesianAddInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianScale", function() { return cartesianScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianNormalizeInPlace", function() { return cartesianNormalizeInPlace; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


function spherical(cartesian) {
  return [Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(cartesian[1], cartesian[0]), Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  return [cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda), cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda), Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(136);




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  centroidPointCartesian(cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda), cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda), Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  x0 = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda);
  y0 = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda);
  z0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi),
      x = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda),
      y = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda),
      z = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi),
      w = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  x0 = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda);
  y0 = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda);
  z0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi),
      x = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda),
      y = cosPhi * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda),
      z = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(cx * cx + cy * cy + cz * cz),
      w = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  Object(_stream_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon2"]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon2"]) return [NaN, NaN];
  }

  return [Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(y, x) * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"], Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])(z / Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(m)) * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleStream", function() { return circleStream; });
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _rotation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(142);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(radius),
      sinRadius = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["spherical"])([cosRadius, -sinRadius * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(t), -sinRadius * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(point), point[0] -= cosRadius;
  Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianNormalizeInPlace"])(point);
  var radius = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["acos"])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) % _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var center = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0]),
      radius = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(90),
      precision = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= _math_js__WEBPACK_IMPORTED_MODULE_2__["degrees"], x[1] *= _math_js__WEBPACK_IMPORTED_MODULE_2__["degrees"];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"],
        p = precision.apply(this, arguments) * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"];
    ring = [];
    rotate = Object(_rotation_js__WEBPACK_IMPORTED_MODULE_3__["rotateRadians"])(-c[0] * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"], -c[1] * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRadians", function() { return rotateRadians; });
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



function rotationIdentity(lambda, phi) {
  return [Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) > _math_js__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda + Math.round(-lambda / _math_js__WEBPACK_IMPORTED_MODULE_1__["tau"]) * _math_js__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= _math_js__WEBPACK_IMPORTED_MODULE_1__["tau"]) ? (deltaPhi || deltaGamma ? Object(_compose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > _math_js__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda - _math_js__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda < -_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda + _math_js__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(deltaPhi),
      sinDeltaPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(deltaPhi),
      cosDeltaGamma = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(deltaGamma),
      sinDeltaGamma = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        x = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
        y = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
        z = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["asin"])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        x = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
        y = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
        z = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["asin"])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["default"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], rotate[1] * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], rotate.length > 2 ? rotate[2] * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"]);
    return coordinates[0] *= _math_js__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates[1] *= _math_js__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"]);
    return coordinates[0] *= _math_js__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates[1] *= _math_js__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates;
  };

  return forward;
});


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



/* harmony default export */ __webpack_exports__["default"] = (Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], -_math_js__WEBPACK_IMPORTED_MODULE_1__["halfPi"]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? _math_js__WEBPACK_IMPORTED_MODULE_1__["pi"] : -_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"],
          delta = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda1 - lambda0);
      if (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta - _math_js__WEBPACK_IMPORTED_MODULE_1__["pi"]) < _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? _math_js__WEBPACK_IMPORTED_MODULE_1__["halfPi"] : -_math_js__WEBPACK_IMPORTED_MODULE_1__["halfPi"]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= _math_js__WEBPACK_IMPORTED_MODULE_1__["pi"]) { // line crosses antimeridian
        if (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda0 - sign0) < _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) lambda0 -= sign0 * _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; // handle degeneracies
        if (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda1 - sign1) < _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) lambda1 -= sign1 * _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda0 - lambda1);
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(sinLambda0Lambda1) > _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]
      ? Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["atan"])((Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0) * (cosPhi1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi1)) * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda1)
          - Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi1) * (cosPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0)) * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * _math_js__WEBPACK_IMPORTED_MODULE_1__["halfPi"];
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
    stream.point(0, phi);
    stream.point(_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
    stream.point(_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], 0);
    stream.point(_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], -phi);
    stream.point(0, -phi);
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], -phi);
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], 0);
    stream.point(-_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
  } else if (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(from[0] - to[0]) > _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) {
    var lambda = from[0] < to[0] ? _math_js__WEBPACK_IMPORTED_MODULE_1__["pi"] : -_math_js__WEBPACK_IMPORTED_MODULE_1__["pi"];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _rejoin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _polygonContains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(149);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(150);






/* harmony default export */ __webpack_exports__["default"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = Object(_buffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["merge"])(segments);
        var startInside = Object(_polygonContains_js__WEBPACK_IMPORTED_MODULE_3__["default"])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(_rejoin_js__WEBPACK_IMPORTED_MODULE_1__["default"])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"] : _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"] : _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - b[1]);
}


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["default"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(_pointEqual_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(a[0] - b[0]) < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"] && Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(a[1] - b[1]) < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"];
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);




var sum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

function longitude(point) {
  if (Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(point[0]) <= _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"])
    return point[0];
  else
    return Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sign"])(point[0]) * ((Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(point[0]) + _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"]) % _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"]);
}

/* harmony default export */ __webpack_exports__["default"] = (function(polygon, point) {
  var lambda = longitude(point),
      phi = point[1],
      sinPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi),
      normal = [Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(lambda), -Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  if (sinPhi === 1) phi = _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"] + _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
  else if (sinPhi === -1) phi = -_math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"];

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = longitude(point0),
        phi0 = point0[1] / 2 + _math_js__WEBPACK_IMPORTED_MODULE_2__["quarterPi"],
        sinPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi0),
        cosPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = longitude(point1),
          phi1 = point1[1] / 2 + _math_js__WEBPACK_IMPORTED_MODULE_2__["quarterPi"],
          sinPhi1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi1),
          cosPhi1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(k * sign * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(absDelta), cosPhi0 * cosPhi1 + k * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(absDelta)));
      angle += antimeridian ? delta + sign * _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_1__["cartesianCross"])(Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_1__["cartesian"])(point0), Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_1__["cartesian"])(point1));
        Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_1__["cartesianNormalizeInPlace"])(arc);
        var intersection = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_1__["cartesianCross"])(normal, arc);
        Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_1__["cartesianNormalizeInPlace"])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -_math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"] || angle < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"] && sum < -_math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) ^ (winding & 1);
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(154);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(156);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(160);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(161);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _histogram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(168);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(167);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(171);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(172);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(173);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(174);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(175);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(155);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(176);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(165);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(177);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(178);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(179);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(166);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(180);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(158);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(181);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(153);



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(151);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(164);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(165);
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(166);
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(167);









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(169);





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159);
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(169);




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]), 0.5);
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _pointEqual_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(148);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(145);






/* harmony default export */ __webpack_exports__["default"] = (function(radius) {
  var cr = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(radius),
      delta = 6 * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"],
      smallRadius = cr > 0,
      notHemisphere = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(cr) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(_circle_js__WEBPACK_IMPORTED_MODULE_1__["circleStream"])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] : -_math_js__WEBPACK_IMPORTED_MODULE_2__["pi"]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(_pointEqual_js__WEBPACK_IMPORTED_MODULE_3__["default"])(point0, point2) || Object(_pointEqual_js__WEBPACK_IMPORTED_MODULE_3__["default"])(point1, point2)) {
            point1[0] += _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
            point1[1] += _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(_pointEqual_js__WEBPACK_IMPORTED_MODULE_3__["default"])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(a),
        pb = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianCross"])(pa, pb),
        n2n2 = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianCross"])(n1, n2),
        A = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(n1, c1),
        B = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(n2, c2);
    Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(A, u),
        uu = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(u, u),
        t2 = w * w - uu * (Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(t2),
        q = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(u, (-w - t) / uu);
    Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(q, A);
    q = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["spherical"])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(delta - _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"]) < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"],
        meridian = polar || delta < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(q[0] - lambda0) < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(u, (-w + t) / uu);
      Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(q1, A);
      return [q, Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["spherical"])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-_math_js__WEBPACK_IMPORTED_MODULE_2__["pi"], radius - _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"]]);
});


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = Object(_rectangle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clipRectangle; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(185);
/* harmony import */ var _rejoin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(150);






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[0] - x0) < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 0 : 3
        : Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[0] - x1) < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 2 : 1
        : Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[1] - y0) < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(_buffer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["merge"])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(_rejoin_js__WEBPACK_IMPORTED_MODULE_3__["default"])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(_line_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polygonContains_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _distance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return Object(_distance_js__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ao, bo, ab;
  for (var i = 0, n = coordinates.length; i < n; i++) {
    bo = Object(_distance_js__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[i], point);
    if (bo === 0) return true;
    if (i > 0) {
      ab = Object(_distance_js__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[i], coordinates[i - 1]);
      if (
        ab > 0 &&
        ao <= ab &&
        bo <= ab &&
        (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon2"] * ab
      )
        return true;
    }
    ao = bo;
  }
  return false;
}

function containsPolygon(coordinates, point) {
  return !!Object(_polygonContains_js__WEBPACK_IMPORTED_MODULE_0__["default"])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"], point[1] * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"]];
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(_length_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);





var lengthSum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  point: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: lengthLineStart,
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonEnd: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"];
}

function lengthPointFirst(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"];
  lambda0 = lambda, sinPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi), cosPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"];
  var sinPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      cosPhi = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      delta = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda - lambda0),
      cosDelta = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(delta),
      sinDelta = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  lengthSum.reset();
  Object(_stream_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, lengthStream);
  return +lengthSum;
});


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return graticule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graticule10", function() { return graticule10; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



function graticuleX(y0, y1, dy) {
  var y = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(y0, y1 - _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(x0, x1 - _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["ceil"])(X0 / DX) * DX, X1, DX).map(X)
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["ceil"])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["ceil"])(x0 / dx) * dx, x1, dx).filter(function(x) { return Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(x % DX) > _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; }).map(x))
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["ceil"])(y0 / dy) * dy, y1, dy).filter(function(y) { return Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(y % DY) > _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]], [180, 90 - _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]]])
      .extentMinor([[-180, -80 - _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]], [180, 80 + _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var x0 = a[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"],
      y0 = a[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"],
      x1 = b[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"],
      y1 = b[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"],
      cy0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      sy0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0),
      cy1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1),
      sy1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y1),
      kx0 = cy0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(x0),
      ky0 = cy0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(x0),
      kx1 = cy1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(x1),
      ky1 = cy1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(x1),
      d = 2 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["haversin"])(y1 - y0) + cy0 * cy1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["haversin"])(x1 - x0))),
      k = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(d);

  var interpolate = d ? function(t) {
    var B = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(t *= d) / k,
        A = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(y, x) * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"],
      Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(z, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + y * y)) * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"]
    ];
  } : function() {
    return [x0 * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"], y0 * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(193);
/* harmony import */ var _bounds_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(195);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(196);
/* harmony import */ var _measure_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(197);
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(198);









/* harmony default export */ __webpack_exports__["default"] = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(_stream_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    Object(_stream_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_area_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
    return _area_js__WEBPACK_IMPORTED_MODULE_2__["default"].result();
  };

  path.measure = function(object) {
    Object(_stream_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_measure_js__WEBPACK_IMPORTED_MODULE_6__["default"]));
    return _measure_js__WEBPACK_IMPORTED_MODULE_6__["default"].result();
  };

  path.bounds = function(object) {
    Object(_stream_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_bounds_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
    return _bounds_js__WEBPACK_IMPORTED_MODULE_3__["default"].result();
  };

  path.centroid = function(object) {
    Object(_stream_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_centroid_js__WEBPACK_IMPORTED_MODULE_4__["default"]));
    return _centroid_js__WEBPACK_IMPORTED_MODULE_4__["default"].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new _string_js__WEBPACK_IMPORTED_MODULE_7__["default"]) : new _context_js__WEBPACK_IMPORTED_MODULE_5__["default"](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);




var areaSum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    areaRingSum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    areaSum.add(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["default"] = (areaStream);


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (boundsStream);


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["default"] = (centroidStream);


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathContext; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"]);
        break;
      }
    }
  },
  result: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"]
};


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);




var lengthSum = Object(_adder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (lengthStream);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathString; });
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conicEqualArea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicEqualAreaRaw", function() { return conicEqualAreaRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _conic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(201);
/* harmony import */ var _cylindricalEqualArea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(206);




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0), n = (sy0 + Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(n) < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) return Object(_cylindricalEqualArea_js__WEBPACK_IMPORTED_MODULE_2__["cylindricalEqualAreaRaw"])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(c) / n;

  function project(x, y) {
    var r = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(c - 2 * n * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)) / n;
    return [r * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(x *= n), r0 - r * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(r0y)) / n * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sign"])(r0y), Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic_js__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicProjection", function() { return conicProjection; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(202);



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 3,
      m = Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["projectionMutator"])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"], phi1 = _[1] * _math_js__WEBPACK_IMPORTED_MODULE_0__["radians"]) : [phi0 * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"], phi1 * _math_js__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
  };

  return p;
}


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectionMutator", function() { return projectionMutator; });
/* harmony import */ var _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _clip_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony import */ var _clip_rectangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(184);
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(143);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(192);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(134);
/* harmony import */ var _rotation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(142);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(203);
/* harmony import */ var _fit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(204);
/* harmony import */ var _resample_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(205);











var transformRadians = Object(_transform_js__WEBPACK_IMPORTED_MODULE_7__["transformer"])({
  point: function(x, y) {
    this.stream.point(x * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"], y * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"]);
  }
});

function transformRotate(rotate) {
  return Object(_transform_js__WEBPACK_IMPORTED_MODULE_7__["transformer"])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function scaleTranslate(k, dx, dy) {
  function transform(x, y) {
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function(x, y) {
    return [(x - dx) / k, (dy - y) / k];
  };
  return transform;
}

function scaleTranslateRotate(k, dx, dy, alpha) {
  var cosAlpha = Object(_math_js__WEBPACK_IMPORTED_MODULE_5__["cos"])(alpha),
      sinAlpha = Object(_math_js__WEBPACK_IMPORTED_MODULE_5__["sin"])(alpha),
      a = cosAlpha * k,
      b = sinAlpha * k,
      ai = cosAlpha / k,
      bi = sinAlpha / k,
      ci = (sinAlpha * dy - cosAlpha * dx) / k,
      fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function(x, y) {
    return [ai * x - bi * y + ci, fi - bi * x - ai * y];
  };
  return transform;
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
      alpha = 0, // post-rotate
      theta = null, preclip = _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_0__["default"], // pre-clip angle
      x0 = null, y0, x1, y1, postclip = _identity_js__WEBPACK_IMPORTED_MODULE_4__["default"], // post-clip extent
      delta2 = 0.5, // precision
      projectResample,
      projectTransform,
      projectRotateTransform,
      cache,
      cacheStream;

  function projection(point) {
    return projectRotateTransform(point[0] * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"], point[1] * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"]);
  }

  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"], point[1] * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(_clip_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(theta = _ * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"]) : (theta = null, _clip_antimeridian_js__WEBPACK_IMPORTED_MODULE_0__["default"]), reset()) : theta * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity_js__WEBPACK_IMPORTED_MODULE_4__["default"]) : Object(_clip_rectangle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"], phi = _[1] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"], recenter()) : [lambda * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"], phi * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"], deltaPhi = _[1] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"], deltaGamma = _.length > 2 ? _[2] % 360 * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"] : 0, recenter()) : [deltaLambda * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"], deltaPhi * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"], deltaGamma * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  };

  projection.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * _math_js__WEBPACK_IMPORTED_MODULE_5__["radians"], recenter()) : alpha * _math_js__WEBPACK_IMPORTED_MODULE_5__["degrees"];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(_resample_js__WEBPACK_IMPORTED_MODULE_9__["default"])(projectTransform, delta2 = _ * _), reset()) : Object(_math_js__WEBPACK_IMPORTED_MODULE_5__["sqrt"])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_8__["fitExtent"])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_8__["fitSize"])(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_8__["fitWidth"])(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_8__["fitHeight"])(projection, height, object);
  };

  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, alpha).apply(null, project(lambda, phi)),
        transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k, x - center[0], y - center[1], alpha);
    rotate = Object(_rotation_js__WEBPACK_IMPORTED_MODULE_6__["rotateRadians"])(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = Object(_compose_js__WEBPACK_IMPORTED_MODULE_3__["default"])(project, transform);
    projectRotateTransform = Object(_compose_js__WEBPACK_IMPORTED_MODULE_3__["default"])(rotate, projectTransform);
    projectResample = Object(_resample_js__WEBPACK_IMPORTED_MODULE_9__["default"])(projectTransform, delta2);
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony default export */ __webpack_exports__["default"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitExtent", function() { return fitExtent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitSize", function() { return fitSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitWidth", function() { return fitWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitHeight", function() { return fitHeight; });
/* harmony import */ var _stream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _path_bounds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  Object(_stream_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projection.stream(_path_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
  fitBounds(_path_bounds_js__WEBPACK_IMPORTED_MODULE_1__["default"].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartesian_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(203);




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(30 * _math_js__WEBPACK_IMPORTED_MODULE_1__["radians"]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["default"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(_transform_js__WEBPACK_IMPORTED_MODULE_2__["transformer"])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a * a + b * b + c * c),
          phi2 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["asin"])(c /= m),
          lambda2 = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(c) - 1) < _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda0 - lambda1) < _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? (lambda0 + lambda1) / 2 : Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["atan2"])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(_cartesian_js__WEBPACK_IMPORTED_MODULE_0__["cartesian"])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cylindricalEqualAreaRaw", function() { return cylindricalEqualAreaRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _albers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _conicEqualArea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(200);
/* harmony import */ var _fit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(204);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var cache,
      cacheStream,
      lower48 = Object(_albers_js__WEBPACK_IMPORTED_MODULE_1__["default"])(), lower48Point,
      alaska = Object(_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_2__["default"])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = Object(_conicEqualArea_js__WEBPACK_IMPORTED_MODULE_2__["default"])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.120 * k + _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]], [x - 0.214 * k - _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.234 * k - _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.166 * k + _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]], [x - 0.115 * k - _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.234 * k - _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitExtent"])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitSize"])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitWidth"])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitHeight"])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEqualAreaRaw", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _azimuthal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(209);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);




var azimuthalEqualAreaRaw = Object(_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__["azimuthalRaw"])(function(cxcy) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return 2 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])(z / 2);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalRaw", function() { return azimuthalRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalInvert", function() { return azimuthalInvert; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(x),
        cy = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(x),
      k * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + y * y),
        c = angle(z),
        sc = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(c),
        cc = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(c);
    return [
      Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x * sc, z * cc),
      Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"])(z && y * sc / z)
    ];
  }
}


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEquidistantRaw", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _azimuthal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(209);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);




var azimuthalEquidistantRaw = Object(_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__["azimuthalRaw"])(function(c) {
  return (c = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["acos"])(c)) && c / Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(c);
});

azimuthalEquidistantRaw.invert = Object(_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return z;
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicConformalRaw", function() { return conicConformalRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _conic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(201);
/* harmony import */ var _mercator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(212);




function tany(y) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      n = y0 === y1 ? Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0) : Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["log"])(cy0 / Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1)) / Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["log"])(tany(y1) / tany(y0)),
      f = cy0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["pow"])(tany(y0), n) / n;

  if (!n) return _mercator_js__WEBPACK_IMPORTED_MODULE_2__["mercatorRaw"];

  function project(x, y) {
    if (f > 0) { if (y < -_math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) y = -_math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]; }
    else { if (y > _math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"] - _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) y = _math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"] - _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]; }
    var r = f / Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["pow"])(tany(y), n);
    return [r * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(n * x), f - r * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sign"])(n) * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + fy * fy);
    return [Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(fy)) / n * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sign"])(fy), 2 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["pow"])(f / r, 1 / n)) - _math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic_js__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mercatorRaw", function() { return mercatorRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mercatorProjection", function() { return mercatorProjection; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _rotation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);




function mercatorRaw(lambda, phi) {
  return [lambda, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["log"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["exp"])(y)) - _math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"]);
});

function mercatorProjection(project) {
  var m = Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] * scale(),
        t = m(Object(_rotation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicEquidistantRaw", function() { return conicEquidistantRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _conic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(201);
/* harmony import */ var _equirectangular_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      n = y0 === y1 ? Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0) : (cy0 - Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(n) < _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) return _equirectangular_js__WEBPACK_IMPORTED_MODULE_2__["equirectangularRaw"];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(nx), g - gy * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["abs"])(gy)) / n * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sign"])(gy), g - Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sign"])(n) * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic_js__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equirectangularRaw", function() { return equirectangularRaw; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalEarthRaw", function() { return equalEarthRaw; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



var A1 = 1.340264,
    A2 = -0.081106,
    A3 = 0.000893,
    A4 = 0.003796,
    M = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3) / 2,
    iterations = 12;

function equalEarthRaw(lambda, phi) {
  var l = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["asin"])(M * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}

equalEarthRaw.invert = function(x, y) {
  var l = y, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) < _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon2"]) break;
  }
  return [
    M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(l),
    Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(l) / M)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(equalEarthRaw)
      .scale(177.158);
});


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gnomonicRaw", function() { return gnomonicRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _azimuthal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(209);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);




function gnomonicRaw(x, y) {
  var cy = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y), k = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(x) * cy;
  return [cy * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(x) / k, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y) / k];
}

gnomonicRaw.invert = Object(_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clip_rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(192);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(203);
/* harmony import */ var _fit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(204);





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"] : Object(_transform_js__WEBPACK_IMPORTED_MODULE_2__["transformer"])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : Object(_clip_rectangle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitExtent"])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitSize"])(projection, size, object);
    },
    fitWidth: function(width, object) {
      return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitWidth"])(projection, width, object);
    },
    fitHeight: function(height, object) {
      return Object(_fit_js__WEBPACK_IMPORTED_MODULE_3__["fitHeight"])(projection, height, object);
    }
  };
});


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "naturalEarth1Raw", function() { return naturalEarth1Raw; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orthographicRaw", function() { return orthographicRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _azimuthal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(209);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);




function orthographicRaw(x, y) {
  return [Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y) * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(x), Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)];
}

orthographicRaw.invert = Object(_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(_math_js__WEBPACK_IMPORTED_MODULE_0__["asin"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]);
});


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stereographicRaw", function() { return stereographicRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _azimuthal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(209);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);




function stereographicRaw(x, y) {
  var cy = Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(y), k = 1 + Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["cos"])(x) * cy;
  return [cy * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(x) / k, Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["sin"])(y) / k];
}

stereographicRaw.invert = Object(_azimuthal_js__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return 2 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan"])(z);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transverseMercatorRaw", function() { return transverseMercatorRaw; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _mercator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(212);



function transverseMercatorRaw(lambda, phi) {
  return [Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["log"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["exp"])(x)) - _math_js__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var m = Object(_mercator_js__WEBPACK_IMPORTED_MODULE_1__["mercatorProjection"])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = require('sprite-extend-3d');

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  topojsonData: 'https://s5.ssl.qhres.com/static/843bbd2c37f94f26.json',
  coronaTexture: 'https://p5.ssl.qhimg.com/t0198a3387059d4a7f7.jpg'
});

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobe", function() { return createGlobe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobeTarget", function() { return setGlobeTarget; });
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(225);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(223);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _shaders_corona_vert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(226);
/* harmony import */ var _shaders_corona_frag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(227);
/* harmony import */ var _shaders_sky_vert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(228);
/* harmony import */ var _shaders_sky_frag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(229);
/* harmony import */ var _shaders_globe_frag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(230);
/* harmony import */ var _shaders_globe_texture_frag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(231);
/* harmony import */ var _shaders_globe_texture_normal_map_frag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(232);
/* harmony import */ var _shaders_globe_normal_map_frag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(233);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const defaulGlobeVertex = sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["shaders"].GEOMETRY_WITH_TEXTURE.vertex;
const defaulGlobeNormalTexturedMapVertex = sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["shaders"].TEXTURE_NORMAL_MAP_300.vertex;
const defaultAttrs = {
  radius: 1,
  colors: '#333',
  rotateX: -30,
  rotateY: 150,
  widthSegments: 64,
  heightSegments: 32
};

function createSky(layer, skyProgram) {
  skyProgram = skyProgram || layer.createProgram({
    vertex: _shaders_sky_vert__WEBPACK_IMPORTED_MODULE_6__["default"],
    fragment: _shaders_sky_frag__WEBPACK_IMPORTED_MODULE_7__["default"],
    transparent: true,
    cullFace: null
  });
  const skyBox = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Sphere"](skyProgram);
  skyBox.attributes.scale = 100;
  layer.append(skyBox);
  return skyBox;
}

function createCorona(layer, coronaProgram, orbit, coronaColor) {
  function makeCoronaVerts() {
    const vertex = [];
    const n_segments = 128;

    for (let i = 0; i <= n_segments; i++) {
      const theta = Math.PI * 2 * i / n_segments;
      const u = i / (n_segments + 1);
      const x = Math.cos(theta);
      const y = Math.sin(theta);
      vertex.push(x, y, u, 0, x, y, u, 1);
    }

    return {
      data: vertex,
      size: 4
    };
  }

  const position = makeCoronaVerts();
  const geometry = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Geometry"](layer.gl, {
    position
  });
  const coronaTexture = layer.createTexture({
    image: _config__WEBPACK_IMPORTED_MODULE_2__["default"].coronaTexture,
    generateMipmaps: true,
    wrapS: layer.gl.REPEAT,
    wrapT: layer.gl.CLAMP_TO_EDGE
  });
  coronaProgram = coronaProgram || layer.createProgram({
    vertex: _shaders_corona_vert__WEBPACK_IMPORTED_MODULE_4__["default"],
    fragment: _shaders_corona_frag__WEBPACK_IMPORTED_MODULE_5__["default"],
    // depthTest: false,
    texture: coronaTexture,
    // texture,
    uniforms: {
      zoff: {
        value: 0
      },
      uTime: {
        value: 0
      },
      color0: {
        value: new spritejs__WEBPACK_IMPORTED_MODULE_1__["Color"](coronaColor)
      },
      color1: {
        value: [0.00, 0.00, 0.00]
      }
    },
    transparent: true // cullFace: null,

  });
  layer.bindTime(coronaProgram);
  const mesh = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Mesh3d"](coronaProgram, {
    model: geometry,
    mode: 'TRIANGLE_STRIP',
    raycast: 'none'
  });
  const corona = layer.createSublayer();
  corona.append(mesh);
  layer.append(corona);
  if (orbit) layer.setOrbit({
    camera: corona.camera,
    maxDistance: 50,
    enableRotate: false
  });
  layer.corona = corona;
}

function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function createGlobe(layer, _ref = {}) {
  let {
    program,
    vertex = null,
    fragment = null,
    data = _config__WEBPACK_IMPORTED_MODULE_2__["default"].topojsonData,
    orbit = true,
    raycast = false,
    highlight = false,
    tick,
    sky = true,
    skyProgram = null,
    corona = true,
    coronaProgram = null,
    autoResize = true,
    texture: globeTexture = null,
    normalMap = null,
    bumpMap = null,
    normalScale = 1.0
  } = _ref,
      attrs = _objectWithoutProperties(_ref, ["program", "vertex", "fragment", "data", "orbit", "raycast", "highlight", "tick", "sky", "skyProgram", "corona", "coronaProgram", "autoResize", "texture", "normalMap", "bumpMap", "normalScale"]);

  const texture = layer.createTexture({});
  Object(_map__WEBPACK_IMPORTED_MODULE_3__["loadMap"])(data).then(bitmap => {
    texture.image = bitmap;
    texture.needsUpdate = true;
    layer.forceUpdate();
  });

  if (!program) {
    if (globeTexture) {
      if (!normalMap) {
        program = layer.createProgram({
          fragment: fragment || _shaders_globe_texture_frag__WEBPACK_IMPORTED_MODULE_9__["default"],
          vertex: vertex || defaulGlobeVertex,
          // transparent: true,
          cullFace: null,
          texture,
          uniforms: {
            tMapSkin: {
              value: globeTexture
            },
            highlight: {
              value: highlight
            }
          }
        });
      } else {
        program = layer.createProgram({
          fragment: fragment || _shaders_globe_texture_normal_map_frag__WEBPACK_IMPORTED_MODULE_10__["default"],
          vertex: vertex || defaulGlobeNormalTexturedMapVertex,
          // transparent: true,
          cullFace: null,
          texture,
          normalMap,
          uniforms: {
            tMapSkin: {
              value: globeTexture
            },
            tBump: {
              value: bumpMap
            },
            highlight: {
              value: highlight
            },
            uNormalScale: {
              value: normalScale
            }
          }
        });
      }
    } else if (!normalMap) {
      program = layer.createProgram({
        fragment: fragment || _shaders_globe_frag__WEBPACK_IMPORTED_MODULE_8__["default"],
        vertex: vertex || defaulGlobeVertex,
        // transparent: true,
        cullFace: null,
        texture
      });
    } else {
      program = layer.createProgram({
        fragment: fragment || _shaders_globe_normal_map_frag__WEBPACK_IMPORTED_MODULE_11__["default"],
        vertex: vertex || defaulGlobeNormalTexturedMapVertex,
        normalMap,
        uniforms: {
          tBump: {
            value: bumpMap
          },
          uNormalScale: {
            value: normalScale
          }
        },
        // transparent: true,
        cullFace: null,
        texture
      });
    }
  }

  attrs = Object.assign({}, defaultAttrs, attrs);
  const globe = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Sphere"](program, attrs);
  layer.append(globe);
  globe.enableOrbit = orbit;
  globe.updateTicker = true;
  if (orbit) layer.setOrbit({
    maxDistance: 50
  });
  if (raycast) layer.setRaycast();

  if (tick) {
    layer.tick(() => {
      if (globe.updateTicker) {
        tick.call(globe);
      }
    });
  }

  if (sky) {
    createSky(layer, skyProgram);
  }

  if (corona) {
    createCorona(layer, coronaProgram, orbit, typeof corona === 'boolean' ? 'rgb(18, 64, 41)' : corona);
  }

  if (autoResize) {
    let {
      width: width0
    } = layer.getResolution();
    layer.addEventListener('resolutionchange', debounce(evt => {
      const {
        width
      } = evt.detail;
      const camera = layer.camera;
      layer.setOrbit(null);
      const pos = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Vec3"]().copy(camera.attributes.pos).scale(width0 / width);
      camera.attributes.pos = pos;
      const corona = layer.corona;

      if (corona) {
        corona.camera.attributes.z *= width0 / width;
        if (orbit) layer.setOrbit({
          camera: corona.camera,
          maxDistance: 50,
          enableRotate: false
        });
      }

      if (orbit) layer.setOrbit({
        maxDistance: 50
      });
      width0 = width;
    }));
  }

  if (highlight) {
    globe.addEventListener('mousemove', e => {
      Object(_map__WEBPACK_IMPORTED_MODULE_3__["highlightMap"])(globe, {
        pos: e.hit.localPoint
      });
    });
  }

  return globe;
}
function setGlobeTarget(globe, target, _ref2) {
  let {
    latitude,
    longitude,
    transpose = false
  } = _ref2,
      attrs = _objectWithoutProperties(_ref2, ["latitude", "longitude", "transpose"]);

  const radius = globe.attributes.radius;
  if (transpose) target.transpose();

  if (latitude != null && longitude != null) {
    const scale = target.attributes.scaleY * (attrs.scale || 1.0);
    const height = target.attributes.height;
    const pos = Object(_map__WEBPACK_IMPORTED_MODULE_3__["latlngToPosition"])(latitude, longitude, radius); // 要将底部放置在地面上

    pos.scale(height * 0.5 * scale / radius + 1);
    attrs.pos = pos;
  }

  target.attr(attrs);
  const sp = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Vec3"]().copy(attrs.pos).scale(2);
  target.lookAt(sp);
  globe.append(target);
}

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = require('spritejs');

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec4 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform float zoff;\n\nvarying vec2 v_texcoord;\n\n// corona.vertex //\nvoid main() {\n  float s = 1.0 + (0.9 * position.w);\n  vec3 P = vec3(s * position.xy, zoff);\n  P = normalMatrix * P;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);\n  v_texcoord = position.zw;\n}  ");

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nuniform sampler2D tMap;\nuniform float uTime;\nuniform vec4 color0;\nuniform vec3 color1;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n  vec2 uv = vec2(5.0 * v_texcoord.x + 0.01 * uTime, 0.8 - 1.5 * v_texcoord.y);\n  float smoke = texture2D(tMap, uv).r;\n  uv = vec2(3.0 * v_texcoord.x - 0.007 * uTime, 0.9 - 0.5 * v_texcoord.y);\n  smoke *= 1.5 * texture2D(tMap, uv).r;\n\n  float t = pow(v_texcoord.y, 0.25);\n  gl_FragColor.rgb = mix(color0.rgb, color1, t) + 0.3 * smoke;\n  gl_FragColor.a = color0.a;\n}");

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\nvarying vec2 vUv;\n\nhighp float random(vec2 co)\n{\n  highp float a = 12.9898;\n  highp float b = 78.233;\n  highp float c = 43758.5453;\n  highp float dt= dot(co.xy ,vec2(a,b));\n  highp float sn= mod(dt,3.14);\n  return fract(sin(sn) * c);\n}\n\n// Value Noise by Inigo Quilez - iq/2013\n// https://www.shadertoy.com/view/lsf3WH\nhighp float noise(vec2 st) {\n  vec2 i = floor(st);\n  vec2 f = fract(st);\n  vec2 u = f * f * (3.0 - 2.0 * f);\n  return mix( mix( random( i + vec2(0.0,0.0) ),\n                   random( i + vec2(1.0,0.0) ), u.x),\n              mix( random( i + vec2(0.0,1.0) ),\n                   random( i + vec2(1.0,1.0) ), u.x), u.y);\n}\n\nvoid main() {\n  gl_FragColor.rgb = vec3(1.0);\n  gl_FragColor.a = step(0.98, noise(vUv * 100000.0));\n}");

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nuniform vec2 uResolution;\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n  vec2 st = gl_FragCoord.xy / uResolution;\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  float d = distance(st, vec2(0.5));\n\n  gl_FragColor.rgb = color.rgb + shading + 0.3 * pow((1.0 - d), 3.0);\n  gl_FragColor.a = color.a;\n} ");

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tMapSkin;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nuniform vec2 uResolution;\nuniform bool highlight;\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMapSkin, vUv);\n  vec4 bgColor = texture2D(tMap, vUv);\n\n  vec2 st = gl_FragCoord.xy / uResolution;\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  if(highlight) alpha *= mix(0.5, 1.0, bgColor.r);\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  float d = distance(st, vec2(0.5));\n\n  gl_FragColor.rgb = color.rgb + shading + 0.3 * pow((1.0 - d), 3.0);\n  gl_FragColor.a = color.a;\n} ");

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\nprecision highp float;\nprecision highp int;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tMapSkin;\nuniform sampler2D tBump;\n\nin vec2 vUv;\nin vec3 vMPos;\nin vec3 vNormal;\nin vec4 vColor;\nin vec3 vLDir;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nuniform vec2 uResolution;\nuniform bool highlight;\n\nuniform sampler2D tNormal;\nuniform float uNormalScale;\nuniform float uNormalUVScale;\nuniform mat4 viewMatrix;\n\nout vec4 FragColor;\n\nvec3 getNormal(float depth) {\n  vec3 pos_dx = dFdx(vMPos.xyz);\n  vec3 pos_dy = dFdy(vMPos.xyz);\n  vec2 tex_dx = dFdx(vUv);\n  vec2 tex_dy = dFdy(vUv);\n\n  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);\n  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);\n  mat3 tbn = mat3(t, b, normalize(vNormal));\n\n  vec3 n = texture(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;\n  n.xy *= depth * uNormalScale;\n  vec3 normal = normalize(tbn * n);\n\n  // Get world normal from view normal\n  return normalize((vec4(normal, 0.0) * viewMatrix).xyz);\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture(tMapSkin, vUv);\n  vec4 bgColor = texture(tMap, vUv);\n  float depth = texture(tBump, vUv).x;\n\n  vec2 st = gl_FragCoord.xy / uResolution;\n\n  float alpha = texColor.a;\n  if(highlight) alpha *= mix(0.5, 1.0, bgColor.r);\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 normal = getNormal(depth);\n  float cos = max(dot(vLDir, normal), 0.0);// 计算入射角余弦值\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(normal, light) * directionalLight.w;\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n  color = vec4(diffuse + ambient, color.a);\n\n  float d = distance(st, vec2(0.5));\n  FragColor.rgb = color.rgb + shading + 0.3 * pow((1.0 - d), 3.0);\n  FragColor.a = color.a;\n} ");

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n\nprecision highp float;\nprecision highp int;\n\nuniform vec4 directionalLight; //平行光\nuniform sampler2D tMap;\nuniform sampler2D tBump;\n\nin vec2 vUv;\nin vec3 vMPos;\nin vec3 vNormal;\nin vec4 vColor;\nin vec3 vLDir;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nuniform vec2 uResolution;\n\nuniform sampler2D tNormal;\nuniform float uNormalScale;\nuniform float uNormalUVScale;\nuniform mat4 viewMatrix;\n\nout vec4 FragColor;\n\nvec3 getNormal(float depth) {\n  vec3 pos_dx = dFdx(vMPos.xyz);\n  vec3 pos_dy = dFdy(vMPos.xyz);\n  vec2 tex_dx = dFdx(vUv);\n  vec2 tex_dy = dFdy(vUv);\n\n  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);\n  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);\n  mat3 tbn = mat3(t, b, normalize(vNormal));\n\n  vec3 n = texture(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;\n  n.xy *= depth * uNormalScale;\n  vec3 normal = normalize(tbn * n);\n\n  // Get world normal from view normal\n  return normalize((vec4(normal, 0.0) * viewMatrix).xyz);\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture(tMap, vUv);\n  vec2 st = gl_FragCoord.xy / uResolution;\n  float depth = texture(tBump, vUv).x;\n\n  float alpha = texColor.a;\n  color.rgb = mix(color.rgb, texColor.rgb, alpha);\n  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 normal = getNormal(depth);\n  float cos = max(dot(vLDir, normal), 0.0);// 计算入射角余弦值\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(normal, light) * directionalLight.w;\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n  color = vec4(diffuse + ambient, color.a);\n\n  float d = distance(st, vec2(0.5));\n\n  FragColor.rgb = color.rgb + shading; // + 0.3 * pow((1.0 - d), 3.0);\n  FragColor.a = color.a;\n} ");

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMarker", function() { return addMarker; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(225);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(222);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sprite_extend_3d__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _globe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(224);
/* harmony import */ var _shaders_marker_vert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(235);
/* harmony import */ var _shaders_marker_frag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(236);
/* harmony import */ var _shaders_spot_vert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(237);
/* harmony import */ var _shaders_spot_frag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(238);


// 地图上添加标记物









function makeSpotVerts(radis = 1.0, n_segments) {
  const vertex = [];

  for (let i = 0; i <= n_segments; i++) {
    const theta = Math.PI * 2 * i / n_segments;
    const x = radis * Math.cos(theta);
    const y = radis * Math.sin(theta);
    vertex.push(x, y, 1, 0, x, y, 1, 1.0);
  }

  return {
    position: {
      data: vertex,
      size: 4
    }
  };
}

function makeMarkerVerts(radis = 1.0, n_segments) {
  const vertex = [];

  for (let i = 0; i <= n_segments; i++) {
    const theta = Math.PI * 2 * i / n_segments;
    const x = radis * Math.cos(theta);
    const y = radis * Math.sin(theta);
    vertex.push(x, y, 1, 0, x, y, 1, 1.0);
  }

  const copied = [...vertex];
  vertex.push(...copied.map((v, i) => {
    return i % 4 === 2 ? 0.33 : v;
  }));
  vertex.push(...copied.map((v, i) => {
    return i % 4 === 2 ? 0.67 : v;
  }));
  return {
    position: {
      data: vertex,
      size: 4
    }
  };
}

function initMarker(layer, globe, {
  width,
  height,
  speed,
  color,
  segments
}) {
  const markerProgram = layer.createProgram({
    transparent: true,
    vertex: _shaders_marker_vert__WEBPACK_IMPORTED_MODULE_6__["default"],
    fragment: _shaders_marker_frag__WEBPACK_IMPORTED_MODULE_7__["default"],
    uniforms: {
      uTime: {
        value: 0
      },
      uColor: {
        value: new spritejs__WEBPACK_IMPORTED_MODULE_2__["Color"](color).slice(0, 3)
      },
      uWidth: {
        value: width
      },
      uSpeed: {
        value: speed
      },
      uHeight: {
        value: height
      }
    }
  });
  const markerGeometry = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_3__["Geometry"](layer.gl, makeMarkerVerts(globe.attributes.radius, segments));
  const spotProgram = layer.createProgram({
    transparent: true,
    vertex: _shaders_spot_vert__WEBPACK_IMPORTED_MODULE_8__["default"],
    fragment: _shaders_spot_frag__WEBPACK_IMPORTED_MODULE_9__["default"],
    uniforms: {
      uTime: {
        value: 0
      },
      uColor: {
        value: new spritejs__WEBPACK_IMPORTED_MODULE_2__["Color"](color).slice(0, 3)
      },
      uWidth: {
        value: width
      },
      uSpeed: {
        value: speed
      },
      uHeight: {
        value: height
      }
    }
  });
  const spotGeometry = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_3__["Geometry"](layer.gl, makeSpotVerts(globe.attributes.radius, segments));
  return {
    program: markerProgram,
    geometry: markerGeometry,
    spotGeometry,
    spotProgram,
    mode: 'TRIANGLE_STRIP'
  };
}

function addMarker(globe, {
  latitude,
  longitude,
  width = 1.0,
  height = 0.0,
  speed = 1.0,
  color = 'rgb(245,250,113)',
  segments = 60,
  lifeTime = Infinity
} = {}) {
  const layer = globe.layer;
  const radius = globe.attributes.radius;

  if (layer) {
    let mode = 'TRIANGLES';
    const ret = initMarker(layer, globe, {
      width,
      height,
      speed,
      color,
      segments
    });
    const markerProgram = ret.program;
    const markerGeometry = ret.geometry;
    const spotProgram = ret.spotProgram;
    const spotGeometry = ret.spotGeometry;
    mode = ret.mode;

    if (markerProgram) {
      const pos = Object(_map__WEBPACK_IMPORTED_MODULE_4__["latlngToPosition"])(latitude, longitude, radius);
      const marker = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_3__["Mesh3d"](markerProgram, {
        model: markerGeometry,
        mode
      });
      const spot = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_3__["Mesh3d"](spotProgram, {
        model: spotGeometry,
        mode
      });
      Object(_globe__WEBPACK_IMPORTED_MODULE_5__["setGlobeTarget"])(globe, marker, {
        pos,
        scale: 0.05,
        raycast: 'none'
      });
      Object(_globe__WEBPACK_IMPORTED_MODULE_5__["setGlobeTarget"])(globe, spot, {
        pos,
        scale: 0.05,
        raycast: 'none'
      });
      layer.bindTime(marker.program);

      if (Number.isFinite(lifeTime)) {
        setTimeout(() => {
          layer.unbindTime(marker.program);
          marker.dispose();
          spot.dispose();
          marker.program.remove();
          spot.program.remove();
        }, lifeTime);
      }

      return {
        marker,
        spot
      };
    }
  }
}

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec4 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform float uTime;\nuniform float uWidth;\nuniform float uSpeed;\nuniform float uHeight;\n\nvarying float time;\n\nvoid main() {\n  time = mod(uTime, 1.5 / uSpeed) * uSpeed + position.z - 1.0;\n  float d = clamp(0.0, uWidth * mix(1.0, 0.5, min(1.0, uHeight)), time);\n  float s = d + (0.1 * position.w);\n  vec3 P = vec3(s * position.xy, uHeight * time);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);\n}");

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nuniform vec2 uResolution;\nuniform vec3 uColor;\n\nvarying float time;\n\nvoid main() {\n  float t = clamp(0.0, 1.0, time);\n  gl_FragColor.rgb = uColor;\n  gl_FragColor.a = 1.0 - t;\n}");

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec4 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform float uTime;\nuniform float uWidth;\nuniform float uSpeed;\nuniform float uHeight;\n\nvarying float time;\nvarying vec2 st;\n\nvoid main() {\n  time = mod(uTime, 1.5 / uSpeed) * uSpeed + position.z - 1.0;\n  float s = 0.0 + (0.2 * uWidth * position.w);\n  vec3 P = vec3(s * position.xy, 0.0);\n  st = P.xy;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);\n}");

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nuniform vec2 uResolution;\nuniform vec3 uColor;\nuniform float uWidth;\n\nvarying float time;\nvarying vec2 st;\n\nvoid main() {\n  float d = distance(st, vec2(0));\n  gl_FragColor.rgb = uColor + 1.5 * (0.2 * uWidth - 2.0 * d);\n  gl_FragColor.a = 1.0;\n}");

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBeam", function() { return addBeam; });
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(224);
/* harmony import */ var _shaders_beam_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(240);
/* harmony import */ var _shaders_beam_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(241);
// 在地图上添加光柱




function addBeam(globe, {
  latitude,
  longitude,
  width = 1.0,
  height = 25.0,
  color = 'rgba(245,250,113, 0.5)',
  raycast = 'none',
  segments = 60
} = {}) {
  const layer = globe.layer;
  const radius = globe.attributes.radius;

  if (layer) {
    const r = width / 2;
    const scale = radius * 0.015;
    const program = layer.createProgram({
      transparent: true,
      vertex: _shaders_beam_vert__WEBPACK_IMPORTED_MODULE_2__["default"],
      fragment: _shaders_beam_frag__WEBPACK_IMPORTED_MODULE_3__["default"],
      uniforms: {
        uHeight: {
          value: height
        }
      }
    });
    const beam = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Cylinder"](program, {
      radiusTop: r,
      radiusBottom: r,
      radialSegments: segments,
      height,
      colors: color
    });
    Object(_globe__WEBPACK_IMPORTED_MODULE_1__["setGlobeTarget"])(globe, beam, {
      transpose: true,
      latitude,
      longitude,
      scale,
      raycast
    });
    return beam;
  }
}

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec3 pointLightPosition; //点光源位置\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\nuniform float uHeight;\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n  \n  float height = 0.5 - position.z / uHeight;\n\n  vColor = vec4(diffuse + ambient + 0.3 * sin(height), color.a * height);\n  // vColor = color;\n\n  vec3 P = position;\n  P.xy *= 2.0 - pow(height, 3.0);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);\n}");

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光 xyz - 向量位置, w - 强度\n\nvoid main() {\n  float light = dot(vNormal, normalize(directionalLight.xyz));\n  gl_FragColor.rgb = vColor.rgb + light * directionalLight.w;\n  gl_FragColor.a = vColor.a;\n}");

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launchMissile", function() { return launchMissile; });
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _shaders_missile_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(243);
/* harmony import */ var _shaders_missile_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(244);





function projectPoints(from, to, {
  radius = 1,
  height = 1
} = {}) {
  from = Object(_map__WEBPACK_IMPORTED_MODULE_1__["latlngToPosition"])(from.latitude, from.longitude, radius);
  to = Object(_map__WEBPACK_IMPORTED_MODULE_1__["latlngToPosition"])(to.latitude, to.longitude, radius);
  const dist = from.distance(to);
  const n = Math.max(Math.floor(dist * radius * 100), 24);
  const points = [];
  points.push(from);

  for (let i = 1; i < n; i++) {
    const d = i / n;
    const a = 0.5 - Math.abs(d - 0.5);
    const p = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Vec3"]().copy(from).lerp(to, d).normalize().scale(1 + 0.1 * height * a);
    points.push(p);
  }

  points.push(to);
  return points;
}

function launchMissile(globe, {
  from,
  to,
  color = 'rgb(232,22,140)',
  thickness = 1.0,
  height = 1.0,
  lifeTime = 1000
}) {
  const layer = globe.layer;

  if (layer) {
    const radius = globe.attributes.radius;
    const points = projectPoints(from, to, {
      radius,
      height
    });
    const curveProgram = layer.createProgram({
      transparent: true,
      vertex: _shaders_missile_vert__WEBPACK_IMPORTED_MODULE_2__["default"],
      fragment: _shaders_missile_frag__WEBPACK_IMPORTED_MODULE_3__["default"],
      uniforms: {
        uThickness: {
          value: 1.5 * thickness
        },
        uTime: {
          value: 0
        },
        uDuration: {
          value: lifeTime * 0.001
        }
      },
      depthTest: true
    });
    layer.bindTime(curveProgram);
    const pe = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Vec3"]().copy(points[Math.floor(points.length * 0.5)]).scale(10);

    const _points = points.map((p, i) => [p[0] - pe[0], p[1] - pe[1], p[2] - pe[2]]);

    const p = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Polyline3d"](curveProgram, {
      points: _points,
      colors: color,
      pos: pe // 曲线要设在中点的位置，否则的话计算zDepth会导致透明度叠加出问题

    });
    globe.append(p);
    setTimeout(() => {
      layer.unbindTime(curveProgram);
      p.dispose();
      curveProgram.remove();
    }, lifeTime * 1.2);
  }
}

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute float side;\nattribute vec4 color;\nattribute float seg;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\nuniform float uMiter;\n\nuniform float uTotalLength;\nuniform float uTime;\nuniform float uDuration;\n\nvarying vec4 vColor;\nvarying float fSeg;\n\nfloat getThickness(float sp, float sp2) {\n  float p = clamp(0.0, 1.0, uTime * 3.0 / 4.0 / uDuration) * 2.0;\n  float ep;\n  if(p < 0.5) {\n    ep = 1.0 - step(p, sp);\n  }\n  else if(p < 1.0) {\n    ep = (1.0 - step(p, sp)) * step(p - 0.5, sp);\n  }\n  else {\n    ep = step(p - 1.0, sp) * step(p - 0.5, sp);\n  }\n  return uThickness * ep;\n}\n\nvec4 getPosition() {\n  mat4 mvp = projectionMatrix * modelViewMatrix;\n  vec4 current = mvp * vec4(position, 1);\n\n  vec4 nextPos = mvp * vec4(next, 1);\n  vec4 prevPos = mvp * vec4(prev, 1);\n  vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n  vec2 currentScreen = current.xy / current.w * aspect;\n  vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n  vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n\n  vec2 dir1 = normalize(currentScreen - prevScreen);\n  vec2 dir2 = normalize(nextScreen - currentScreen);\n  vec2 dir = normalize(dir1 + dir2);\n\n  vec2 normal = vec2(-dir.y, dir.x);\n  normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n  normal /= aspect;\n  float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n  float pixelWidth = current.w * pixelWidthRatio;\n  float sp = (seg - distance(current.xyz, prevPos.xyz)) / uTotalLength;\n  float sp2 = (seg + distance(current.xyz, nextPos.xyz)) / uTotalLength;\n  normal *= pixelWidth * getThickness(sp, sp2);\n  // normal *= pixelWidth * uThickness;\n  current.xy -= normal * side;\n  return current;\n}\n\nvoid main() {\n  gl_Position = getPosition();\n  vColor = color;\n  fSeg = seg;\n}");

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n\nuniform float uTotalLength;\nuniform float uTime;\nuniform float uDuration;\n\nvarying vec4 vColor;\nvarying float fSeg;\n\nvoid main() {\n  float p = clamp(0.0, 1.0, uTime * 3.0 / 4.0 / uDuration) * 2.0;\n  float sp = fSeg / uTotalLength;\n  float ep;\n  float light = 0.0;\n  if(p < 0.5) {\n    ep = (1.0 - step(p, sp)) * smoothstep(0.0, 0.3, sp);\n    light = ep * abs(sp - 0.5 * p) / 0.5 * p;\n  }\n  else if(p < 1.0) {\n    ep = (1.0 - step(p, sp)) * smoothstep(p - 0.5, p - 0.2, sp);\n    light = ep * abs(p - 0.5 - sp) / 0.5;\n  }\n  else {\n    ep = step(p - 1.0, sp) * smoothstep(p - 0.5, p - 0.2, sp);\n  }\n  gl_FragColor.rgb = vColor.rgb + 0.35 * light * ep; // TODO: 亮度用 hsb 调\n  gl_FragColor.a = vColor.a * ep;\n}");

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCurve", function() { return addCurve; });
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _shaders_curve_vert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(246);
/* harmony import */ var _shaders_curve_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247);




function addCurve(globe, {
  from,
  to,
  color = 'rgb(232,22,140)',
  thickness = 1.0,
  height = 1.0,
  dashLength = 10e6,
  dashOffset = 0
}) {
  const layer = globe.layer;

  if (layer) {
    const radius = globe.attributes.radius;
    const p0 = Object(_map__WEBPACK_IMPORTED_MODULE_1__["latlngToPosition"])(from.latitude, from.longitude, radius);
    const p1 = Object(_map__WEBPACK_IMPORTED_MODULE_1__["latlngToPosition"])(to.latitude, to.longitude, radius);
    const cp = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Vec3"]().copy(p0).lerp(p1, 0.382).normalize().scale(1.0 + 0.382 * height);
    const curve = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Curve"]({
      points: [p0, cp, p1],
      type: sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Curve"].QUADRATICBEZIER
    });
    const points = curve.getPoints(50);
    const program = layer.createProgram({
      transparent: true,
      vertex: _shaders_curve_vert__WEBPACK_IMPORTED_MODULE_2__["default"],
      fragment: _shaders_curve_frag__WEBPACK_IMPORTED_MODULE_3__["default"],
      uniforms: {
        uThickness: {
          value: thickness
        },
        uDashLength: {
          value: dashLength
        },
        uDashOffset: {
          value: dashOffset
        },
        uTime: {
          value: 0
        }
      }
    });
    layer.bindTime(program);
    const pe = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Vec3"]().copy(points[Math.floor(points.length * 0.5)]).scale(10);

    const _points = points.map((p, i) => [p[0] - pe[0], p[1] - pe[1], p[2] - pe[2]]);

    const polyline = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_0__["Polyline3d"](program, {
      points: _points,
      colors: color,
      pos: pe
    });
    globe.append(polyline);
    return polyline;
  }
}

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute vec2 uv;\nattribute float side;\nattribute vec4 color;\nattribute float seg;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\nuniform float uMiter;\nuniform float uTotalLength;\n\nvarying vec2 vUv;\nvarying vec4 vColor;\nvarying float fSeg;\n\nvec4 getPosition() {\n  mat4 mvp = projectionMatrix * modelViewMatrix;\n  vec4 current = mvp * vec4(position, 1);\n  vec4 nextPos = mvp * vec4(next, 1);\n  vec4 prevPos = mvp * vec4(prev, 1);\n  vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n  vec2 currentScreen = current.xy / current.w * aspect;\n  vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n  vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n\n  vec2 dir1 = normalize(currentScreen - prevScreen);\n  vec2 dir2 = normalize(nextScreen - currentScreen);\n  vec2 dir = normalize(dir1 + dir2);\n\n  vec2 normal = vec2(-dir.y, dir.x);\n  normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n  normal /= aspect;\n  float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n  float pixelWidth = current.w * pixelWidthRatio * 2.0 - fSeg / uTotalLength;\n  normal *= pixelWidth * uThickness;\n  current.xy -= normal * side;\n  return current;\n}\n\nvoid main() {\n  vUv = uv;\n  gl_Position = getPosition();\n  vColor = color;\n  fSeg = seg;\n}");

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n\nuniform float uTotalLength;\nuniform float uDashLength;\nuniform float uDashOffset;\nuniform float uTime;\n\nvarying vec4 vColor;\nvarying vec2 vUv;\nvarying float fSeg;\n\n/**\n  rgb/hsb颜色转换\n */\nvec3 rgb2hsb(vec3 c){\n  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n  float d = q.x - min(q.w, q.y);\n  float e = 1.0e-10;\n  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb(vec3 c){\n  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);\n  rgb = rgb * rgb * (3.0 - 2.0 * rgb);\n  return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\n#define PI 3.141592653589793\n\nvoid main() {\n  float f = fract((uDashOffset + fSeg) / (2.0 * uDashLength));\n  f = 1.0 - step(0.5, f);\n  float t = 1.0 - fSeg / uTotalLength;\n\n  vec3 color = rgb2hsb(vColor.rgb);\n  color.z += 1.618 * mix(-0.2, 1.0, 0.5 + 0.5 * sin(2.5 * uTime + PI * t));\n  color = hsb2rgb(color);\n\n  float alpha = 0.2 + 0.8 * vColor.a * t;\n\n  gl_FragColor = vec4(color, alpha) * f;\n}");

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cameraTo", function() { return cameraTo; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(222);
/* harmony import */ var sprite_extend_3d__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprite_extend_3d__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);




function cameraTo(globe, {
  to,
  latitude,
  longitude,
  duration = 500
}) {
  const layer = globe.layer;
  if (!layer) return;
  const orbit = globe.enableOrbit;
  const radius = globe.attributes.radius;
  if (orbit) layer.setOrbit(null);
  const camera = layer.camera;
  const from = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_2__["Vec3"](...camera.attributes.pos);
  const r = from.len();
  const m = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_2__["Mat4"]().copy(globe.worldMatrix);

  if (latitude != null && longitude != null) {
    to = Object(_map__WEBPACK_IMPORTED_MODULE_3__["latlngToPosition"])(latitude, longitude, radius);
  }

  to.applyMatrix4(m).scale(r);
  const startTime = Date.now();
  globe.updateTicker = false;

  function update() {
    const p = Math.min((Date.now() - startTime) / duration);
    const pos = new sprite_extend_3d__WEBPACK_IMPORTED_MODULE_2__["Vec3"]().copy(from).lerp(to, p).normalize().scale(r);
    camera.attributes.pos = pos;
    camera.lookAt([0, 0, 0]);

    if (p < 1.0) {
      requestAnimationFrame(update);
    } else if (orbit) {
      globe.updateTicker = true;
      layer.setOrbit({
        maxDistance: 50
      });
      const corona = layer.corona;

      if (corona) {
        layer.setOrbit({
          camera: corona.camera,
          maxDistance: 50,
          enableRotate: false
        });
      }
    }
  }

  update();
}

/***/ })
/******/ ]);


const _globe$addBeam = globe['addBeam'];
const _globe$addCurve = globe['addCurve'];
const _globe$addMarker = globe['addMarker'];
const _globe$cameraTo = globe['cameraTo'];
const _globe$config = globe['config'];
const _globe$createGlobe = globe['createGlobe'];
const _globe$getCountryInfo = globe['getCountryInfo'];
const _globe$highlightMap = globe['highlightMap'];
const _globe$latlngToPosition = globe['latlngToPosition'];
const _globe$launchMissile = globe['launchMissile'];
const _globe$project = globe['project'];
const _globe$positionToLatlng = globe['positionToLatlng'];
const _globe$unproject = globe['unproject'];

export {
    _globe$addBeam as addBeam,
    _globe$addCurve as addCurve,
    _globe$addMarker as addMarker,
    _globe$cameraTo as cameraTo,
    _globe$config as config,
    _globe$createGlobe as createGlobe,
    _globe$getCountryInfo as getCountryInfo,
    _globe$highlightMap as highlightMap,
    _globe$latlngToPosition as latlngToPosition,
    _globe$launchMissile as launchMissile,
    _globe$project as project,
    _globe$positionToLatlng as positionToLatlng,
    _globe$unproject as unproject
}