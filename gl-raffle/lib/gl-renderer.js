var GlRenderer =
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
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["default"] = (_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _default_vert_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _default_vert_glsl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_default_vert_glsl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _default_frag_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _default_frag_glsl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_default_frag_glsl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_9__);










var GLSL_LIBS = {};

var _renderFrameID = Symbol('renderFrameID');

function mapTextureCoordinate(positions) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var texVertexData = [];
  var len = positions.length;

  for (var i = 0; i < len; i++) {
    if (i % size < 2) texVertexData.push(0.5 * (positions[i] + 1));
  }

  return texVertexData;
}

function clearBuffers(gl, program) {
  var buffers = program._buffers;
  Object.values(buffers).forEach(function (buffer) {
    gl.deleteBuffer(buffer);
  });
  program._buffers = {};
}

function bindTexture(gl, texture, i) {
  gl.activeTexture(gl.TEXTURE0 + i);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  return texture;
}

var uniformTypeMap = {
  int: '1i',
  ivec2: '2i',
  ivec3: '3i',
  ivec4: '4i',
  float: '1f',
  vec2: '2f',
  vec3: '3f',
  vec4: '4f',
  mat2: 'Matrix2fv',
  mat3: 'Matrix3fv',
  mat4: 'Matrix4fv',
  sampler2D: 'sampler2D'
};

var Renderer =
/*#__PURE__*/
function () {
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Renderer, null, [{
    key: "addLibs",
    value: function addLibs() {
      var libs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(GLSL_LIBS, libs);
    }
  }, {
    key: "FLOAT",
    value: function FLOAT(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["pointsToBuffer"])(points, Float32Array, buffer);
    }
  }, {
    key: "UNSIGNED_BYTE",
    value: function UNSIGNED_BYTE(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["pointsToBuffer"])(points, Uint8Array, buffer);
    }
  }, {
    key: "UNSIGNED_SHORT",
    value: function UNSIGNED_SHORT(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["pointsToBuffer"])(points, Uint16Array, buffer);
    }
  }, {
    key: "BYTE",
    value: function BYTE(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["pointsToBuffer"])(points, Int8Array, buffer);
    }
  }, {
    key: "SHORT",
    value: function SHORT(points, buffer) {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["pointsToBuffer"])(points, Int16Array, buffer);
    }
  }]);

  function Renderer(canvas) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Renderer);

    this.options = Object.assign({}, Renderer.defaultOptions, opts);
    this.canvas = canvas;
    var gl;

    if (this.options.webgl2) {
      gl = canvas.getContext('webgl2', this.options);
    } else {
      gl = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["setupWebGL"])(canvas, this.options);
      this.aia_ext = gl.getExtension('ANGLE_instanced_arrays');
    }

    this.gl = gl;
    gl.viewport(0, 0, canvas.width, canvas.height); // gl.clearColor(1.0, 1.0, 1.0, 1.0);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    this.programs = [];
    this._events = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Renderer, [{
    key: "_declareUniform",
    // WebGLRenderingContext.uniform[1234][fi][v]()
    // WebGLRenderingContext.uniformMatrix[234]fv()
    value: function _declareUniform(program, name) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1f';
      var gl = this.gl;
      var uniform = gl.getUniformLocation(program, name);
      var value;
      var that = this;

      if (type === 'sampler2D') {
        var samplerMap = program._samplerMap;
        var textures = program._bindTextures;
        Object.defineProperty(program.uniforms, name, {
          get: function get() {
            return value;
          },
          set: function set(v) {
            value = v;
            var idx = samplerMap[name] != null ? samplerMap[name] : textures.length;
            textures[idx] = v;
            bindTexture(gl, v, idx);

            if (!samplerMap[name]) {
              samplerMap[name] = idx;
              gl.uniform1i(uniform, idx);
            }

            if (that.options.autoUpdate) that.update();
          },
          configurable: false,
          enumerable: true
        });
      } else {
        var isMatrix = type.indexOf('Matrix') === 0;
        var isTypeV = !isMatrix && /v$/.test(type);
        var setUniform = gl["uniform".concat(type)].bind(gl);
        Object.defineProperty(program.uniforms, name, {
          get: function get() {
            return value;
          },
          set: function set(v) {
            value = v;

            if (typeof v === 'number') {
              v = [v];
            }

            if (isMatrix) setUniform(uniform, false, v);else if (isTypeV) setUniform(uniform, v);else setUniform.apply(void 0, [uniform].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(v)));
            if (that.options.autoUpdate) that.update();
          },
          configurable: false,
          enumerable: true
        });
      }
    }
  }, {
    key: "_draw",
    value: function _draw() {
      var _this = this;

      var program = this.program;
      program.meshData.forEach(function (meshData, meshIndex) {
        var positions = meshData.positions,
            cells = meshData.cells,
            instanceCount = meshData.instanceCount,
            cellsCount = meshData.cellsCount,
            attributes = meshData.attributes,
            uniforms = meshData.uniforms,
            textureCoord = meshData.textureCoord,
            enableBlend = meshData.enableBlend;
        var gl = _this.gl;
        if (enableBlend) gl.enable(gl.BLEND);else gl.disable(gl.BLEND);
        gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.verticesBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, program._buffers.cellsBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, cells, gl.STATIC_DRAW);
        var locations = [];

        if (attributes) {
          Object.values(attributes).forEach(function (_ref) {
            var name = _ref.name,
                data = _ref.data,
                divisor = _ref.divisor;
            gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers[name]);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

            if (divisor != null) {
              var location = gl.getAttribLocation(program, name);

              if (location >= 0) {
                gl.enableVertexAttribArray(location);
                locations.push(location);

                if (gl.vertexAttribDivisor) {
                  gl.vertexAttribDivisor(location, divisor);
                } else if (_this.aia_ext) {
                  _this.aia_ext.vertexAttribDivisorANGLE(location, divisor);
                }
              }
            }
          });
        }

        if (uniforms) {
          Object.entries(uniforms).forEach(function (_ref2) {
            var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];

            _this.uniforms[key] = value;
          });
        }

        if (program._enableTextures && program._buffers.texCoordBuffer) {
          var texVertexData = textureCoord || mapTextureCoordinate(positions, program._dimension);
          gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.texCoordBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, Renderer.FLOAT(texVertexData), gl.STATIC_DRAW);
        }

        if (instanceCount != null) {
          if (gl.drawElementsInstanced) {
            gl.drawElementsInstanced(gl.TRIANGLES, cellsCount, gl.UNSIGNED_SHORT, 0, instanceCount);
          } else if (_this.aia_ext) {
            _this.aia_ext.drawElementsInstancedANGLE(gl.TRIANGLES, cellsCount, gl.UNSIGNED_SHORT, 0, instanceCount);
          }

          locations.forEach(function (location) {
            gl.vertexAttribDivisor(location, null);
          });
        } else {
          gl.drawElements(gl.TRIANGLES, cellsCount, gl.UNSIGNED_SHORT, 0);
        }
      });
    }
  }, {
    key: "deleteProgram",
    value: function deleteProgram(program) {
      var gl = this.gl;

      if (this.program === program) {
        this.startRender = false;

        if (this[_renderFrameID]) {
          cancelAnimationFrame(this[_renderFrameID]);
          delete this[_renderFrameID];
        }

        gl.useProgram(null);
      }

      var idx = this.programs.indexOf(program);

      if (idx >= 0) {
        this.programs.splice(idx, 1);
      }

      clearBuffers(gl, program);
      gl.deleteProgram(program);
    }
    /**
      [{
        positions: ...
        cells: ...
        textureCoord: ...
        attributes: {name: {data:..., normalize: true}},
        uniforms: ...
      }]
     */

  }, {
    key: "setMeshData",
    value: function setMeshData(data) {
      var _this2 = this;

      if (!Array.isArray(data)) {
        data = [data];
      }

      var program = this.program;
      program.meshData = data.map(function (_ref4) {
        var positions = _ref4.positions,
            instanceCount = _ref4.instanceCount,
            cells = _ref4.cells,
            cellsCount = _ref4.cellsCount,
            attributes = _ref4.attributes,
            uniforms = _ref4.uniforms,
            textureCoord = _ref4.textureCoord,
            enableBlend = _ref4.enableBlend;
        var meshData = {
          positions: Renderer.FLOAT(positions),
          cells: Renderer.USHORT(cells),
          uniforms: uniforms,
          enableBlend: !!enableBlend,
          textureCoord: Renderer.FLOAT(textureCoord)
        };
        meshData.cellsCount = cellsCount || meshData.cells.length;

        if (instanceCount != null) {
          if (!_this2.isWebGL2 && !_this2.aia_ext) throw new Error('Cannot use instanceCount in this rendering context, use webgl2 context instead.');else meshData.instanceCount = instanceCount;
        }

        if (attributes) {
          var copied = {};
          Object.entries(attributes).forEach(function (_ref5) {
            var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            if (!program._attribute[key]) {
              // throw new Error(`Invalid attribute ${key}.`);
              if (false) {}
              program._attribute[key] = 'ignored';
            } else if (program._attribute[key] !== 'ignored') {
              var _program$_attribute$k = program._attribute[key],
                  name = _program$_attribute$k.name,
                  type = _program$_attribute$k.type;
              var buffer = value.data || value;

              if (Array.isArray(buffer)) {
                buffer = Renderer[type](buffer);
              }

              copied[key] = {
                name: name,
                data: buffer
              };

              if (value.divisor != null) {
                if (!_this2.isWebGL2 && !_this2.aia_ext) throw new Error('Cannot use divisor in this rendering context, use webgl2 context instead.');else copied[key].divisor = value.divisor;
              }
            }
          });
          meshData.attributes = copied;
        }

        return meshData;
      });
      if (this.options.autoUpdate) this.update();
    }
  }, {
    key: "createProgram",
    value: function createProgram(fragmentShader, vertexShader) {
      var _this3 = this;

      // this.deleteProgram();
      // this._events = {};
      var enableTextures = /^\s*uniform\s+sampler2D/mg.test(fragmentShader);
      if (fragmentShader == null) fragmentShader = _default_frag_glsl__WEBPACK_IMPORTED_MODULE_8___default.a;
      if (vertexShader == null) vertexShader = enableTextures ? _default_feeback_vert_glsl__WEBPACK_IMPORTED_MODULE_9___default.a : _default_vert_glsl__WEBPACK_IMPORTED_MODULE_7___default.a;
      var gl = this.gl;

      var program = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(gl, vertexShader, fragmentShader);

      program.shaderText = {
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      };
      program._buffers = {};
      program._attribute = {};
      program.uniforms = {};
      program._samplerMap = {};
      program._bindTextures = [];
      program._enableTextures = enableTextures; // console.log(vertexShader);

      var pattern = new RegExp("attribute vec(\\d) ".concat(this.options.vertexPosition), 'im');
      var matched = vertexShader.match(pattern);

      if (matched) {
        program._dimension = Number(matched[1]);
      }

      var texCoordPattern = new RegExp("attribute vec(\\d) ".concat(this.options.vertexTextureCoord), 'im');
      matched = vertexShader.match(texCoordPattern);

      if (matched) {
        program._texCoordSize = Number(matched[1]);
      }

      var attributePattern = /^\s*attribute (\w+?)(\d*) (\w+)/gim;
      matched = vertexShader.match(attributePattern);

      if (matched) {
        for (var i = 0; i < matched.length; i++) {
          var patt = /^\s*attribute (\w+?)(\d*) (\w+)/im;

          var _matched = matched[i].match(patt);

          if (_matched && _matched[3] !== this.options.vertexPosition && _matched[3] !== this.options.vertexTextureCoord) {
            var _matched2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_matched, 4),
                type = _matched2[1],
                size = _matched2[2],
                name = _matched2[3];

            if (type === 'mat') size = Math.pow(size, 2);
            program._buffers[name] = gl.createBuffer();
            program._attribute[name] = {
              name: name,
              type: type,
              size: Number(size) || 1
            };
          }
        }
      }

      var uniformPattern = /^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/mg;
      matched = vertexShader.match(uniformPattern) || [];
      matched = matched.concat(fragmentShader.match(uniformPattern) || []);
      matched.forEach(function (m) {
        var _matched = m.match(/^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/);

        var _matched$slice = _matched.slice(1),
            _matched$slice2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_matched$slice, 3),
            type = _matched$slice2[0],
            name = _matched$slice2[1],
            isTypeV = _matched$slice2[2];

        type = uniformTypeMap[type];
        isTypeV = !!isTypeV;

        if (type.indexOf('Matrix') !== 0 && isTypeV) {
          type += 'v';
        }

        _this3._declareUniform(program, name, type);
      });
      program._buffers.verticesBuffer = gl.createBuffer();
      program._buffers.cellsBuffer = gl.createBuffer();

      if (program._enableTextures) {
        program._buffers.texCoordBuffer = gl.createBuffer();
      }

      this.programs.push(program);
      return program;
    }
  }, {
    key: "useProgram",
    value: function useProgram(program) {
      var attrOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.startRender = false;

      if (this[_renderFrameID]) {
        cancelAnimationFrame(this[_renderFrameID]);
        delete this[_renderFrameID];
      }

      var gl = this.gl;
      gl.useProgram(program); // this.program = program;

      var dimension = program._dimension;
      gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.verticesBuffer);
      var vPosition = gl.getAttribLocation(program, this.options.vertexPosition);
      gl.vertexAttribPointer(vPosition, dimension, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vPosition);

      if (program._enableTextures) {
        gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers.texCoordBuffer);
        var vTexCoord = gl.getAttribLocation(program, this.options.vertexTextureCoord);
        gl.vertexAttribPointer(vTexCoord, program._texCoordSize || 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(vTexCoord);
      }

      Object.entries(program._attribute).forEach(function (_ref7) {
        var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 2),
            name = _ref8[0],
            item = _ref8[1];

        if (item !== 'ignored') {
          var size = item.size;
          var options = attrOptions[name] || {};
          var normalize = !!options.normalize;
          var bufferType = options.type || 'FLOAT';
          var key = options.key || name;
          if (bufferType === 'UBYTE') bufferType = 'UNSIGNED_BYTE';
          if (bufferType === 'USHORT') bufferType = 'UNSIGNED_SHORT';
          item.type = bufferType;

          if (key && key !== name) {
            program._attribute[key] = item;
          }

          gl.bindBuffer(gl.ARRAY_BUFFER, program._buffers[name]);
          var attrib = gl.getAttribLocation(program, name); // console.log(size, gl[bufferType]);

          if (attrib >= 0) {
            gl.vertexAttribPointer(attrib, size, gl[bufferType], normalize, 0, 0);
            gl.enableVertexAttribArray(attrib);
          }
        }
      });

      if (!program.meshData) {
        var positions = [[-1, -1, 0, 1].slice(0, dimension), [1, -1, 0, 1].slice(0, dimension), [1, 1, 0, 1].slice(0, dimension), [-1, 1, 0, 1].slice(0, dimension)];
        var cells = [[0, 1, 3], [3, 1, 2]];
        this.setMeshData({
          positions: positions,
          cells: cells
        });
      }

      return program;
    }
  }, {
    key: "compileSync",
    value: function compileSync(frag, vert) {
      frag = frag || _default_frag_glsl__WEBPACK_IMPORTED_MODULE_8___default.a;
      var loaded = {};

      function _compile(content) {
        content = content.replace(/^\s*/mg, '');
        var includes = [];
        var matched = content.match(/^#pragma\s+include\s+.*/mg);

        if (matched) {
          // console.log(matched, url);
          for (var i = 0; i < matched.length; i++) {
            var m = matched[i];

            var _matched = m.match(/(?:<|")(.*)(?:>|")/);

            if (_matched) {
              var type = _matched[0].indexOf('<') === 0 ? 'lib' : 'link';
              var name = _matched[1];
              if (name === 'graph') name = 'graphics';

              if (!loaded[name]) {
                loaded[name] = true;

                if (type === 'lib') {
                  var c = _compile(GLSL_LIBS[name]); // eslint-disable-line no-await-in-loop


                  includes.push(c);
                } else if (type === 'link') {
                  throw new Error('Cannot load external links synchronously. Use compile instead of compileSync.');
                }
              } else {
                includes.push("/* included ".concat(name, " */"));
              }
            }
          }

          includes.forEach(function (inc) {
            content = content.replace(/^#pragma\s+include\s+.*/m, inc);
          });
        }

        return content;
      }

      var fragmentShader = _compile(frag);

      var vertexShader = vert ? _compile(vert) : null;
      var program = this.createProgram(fragmentShader, vertexShader);
      return program;
    }
  }, {
    key: "compile",
    value: function compile(frag, vert) {
      var loaded, _compile, fragmentShader, vertexShader, program;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function compile$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _compile = function _ref9(content) {
                var includes, matched, i, m, _matched, type, name, c, _c;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _compile$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        content = content.replace(/^\s*/mg, '');
                        includes = [];
                        matched = content.match(/^#pragma\s+include\s+.*/mg);

                        if (!matched) {
                          _context.next = 36;
                          break;
                        }

                        i = 0;

                      case 5:
                        if (!(i < matched.length)) {
                          _context.next = 35;
                          break;
                        }

                        m = matched[i];
                        _matched = m.match(/(?:<|")(.*)(?:>|")/);

                        if (!_matched) {
                          _context.next = 32;
                          break;
                        }

                        type = _matched[0].indexOf('<') === 0 ? 'lib' : 'link';
                        name = _matched[1];
                        if (name === 'graph') name = 'graphics';

                        if (loaded[name]) {
                          _context.next = 31;
                          break;
                        }

                        loaded[name] = true; // TODO: 这里可以优化成异步加载

                        if (!(type === 'lib')) {
                          _context.next = 21;
                          break;
                        }

                        _context.next = 17;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_compile(GLSL_LIBS[name]));

                      case 17:
                        c = _context.sent;
                        // eslint-disable-line no-await-in-loop
                        includes.push(c);
                        _context.next = 29;
                        break;

                      case 21:
                        if (!(type === 'link')) {
                          _context.next = 29;
                          break;
                        }

                        _context.next = 24;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Renderer.fetchShader(name));

                      case 24:
                        _c = _context.sent;
                        _context.next = 27;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_compile(_c));

                      case 27:
                        _c = _context.sent;
                        // eslint-disable-line no-await-in-loop
                        includes.push(_c);

                      case 29:
                        _context.next = 32;
                        break;

                      case 31:
                        includes.push("/* included ".concat(name, " */"));

                      case 32:
                        i++;
                        _context.next = 5;
                        break;

                      case 35:
                        includes.forEach(function (inc) {
                          content = content.replace(/^#pragma\s+include\s+.*/m, inc);
                        });

                      case 36:
                        return _context.abrupt("return", content);

                      case 37:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              };

              frag = frag || _default_frag_glsl__WEBPACK_IMPORTED_MODULE_8___default.a;
              loaded = {};
              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_compile(frag));

            case 5:
              fragmentShader = _context2.sent;

              if (!vert) {
                _context2.next = 12;
                break;
              }

              _context2.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_compile(vert));

            case 9:
              _context2.t0 = _context2.sent;
              _context2.next = 13;
              break;

            case 12:
              _context2.t0 = null;

            case 13:
              vertexShader = _context2.t0;
              program = this.createProgram(fragmentShader, vertexShader);
              return _context2.abrupt("return", program);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "load",
    value: function load(frag) {
      var vert,
          _args3 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function load$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              vert = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Renderer.fetchShader(frag));

            case 3:
              frag = _context3.sent;

              if (!vert) {
                _context3.next = 8;
                break;
              }

              _context3.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Renderer.fetchShader(vert));

            case 7:
              vert = _context3.sent;

            case 8:
              return _context3.abrupt("return", this.compile(frag, vert));

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "createTexture",
    value: function createTexture(img) {
      var _this4 = this;

      var gl = this.gl;
      gl.activeTexture(gl.TEXTURE15);
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img); // gl.NEAREST is also allowed, instead of gl.LINEAR, as neither mipmap.

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Prevents s-coordinate wrapping (repeating).

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); // Prevents t-coordinate wrapping (repeating).

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      texture._img = img;

      texture.delete = function () {
        _this4.deleteTexture(texture);
      };

      return texture;
    }
  }, {
    key: "deleteTexture",
    value: function deleteTexture(texture) {
      var image = texture._img;
      this.gl.deleteTexture(texture);

      if (typeof image.close === 'function') {
        // release ImageBitmap
        image.close();
      }
    }
  }, {
    key: "loadTexture",
    value: function loadTexture(source) {
      var _ref10,
          _ref10$useImageBitmap,
          useImageBitmap,
          img,
          _args4 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadTexture$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref10 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, _ref10$useImageBitmap = _ref10.useImageBitmap, useImageBitmap = _ref10$useImageBitmap === void 0 ? true : _ref10$useImageBitmap;
              _context4.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Renderer.loadImage(source, {
                useImageBitmap: useImageBitmap
              }));

            case 3:
              img = _context4.sent;
              return _context4.abrupt("return", this.createTexture(img));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref11$clearBuffer = _ref11.clearBuffer,
          clearBuffer = _ref11$clearBuffer === void 0 ? true : _ref11$clearBuffer;

      this.startRender = true;
      var gl = this.gl;
      var program = this.program;

      if (!program) {
        program = this.createProgram();
        this.useProgram(program);
      }

      if (clearBuffer) gl.clear(gl.COLOR_BUFFER_BIT);
      var lastFrameID = this[_renderFrameID];

      this._draw();

      if (this[_renderFrameID] === lastFrameID) {
        this[_renderFrameID] = null;
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.startRender) return;

      if (this[_renderFrameID] == null) {
        this[_renderFrameID] = requestAnimationFrame(this.render.bind(this));
      }
    }
  }, {
    key: "program",
    get: function get() {
      var gl = this.gl;
      return gl.getParameter(gl.CURRENT_PROGRAM);
    }
  }, {
    key: "isWebGL2",
    get: function get() {
      return typeof WebGL2RenderingContext !== 'undefined' && this.gl instanceof WebGL2RenderingContext;
    }
  }, {
    key: "enableTextures",
    get: function get() {
      return this.program && this.program._enableTextures;
    }
  }, {
    key: "uniforms",
    get: function get() {
      var program = this.program;

      if (!program || !program.uniforms) {
        throw Error('No avaliable program.');
      }

      return program.uniforms;
    }
  }]);

  return Renderer;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Renderer, "defaultOptions", {
  preserveDrawingBuffer: true,
  autoUpdate: true,
  vertexPosition: 'a_vertexPosition',
  vertexTextureCoord: 'a_vertexTextureCoord',
  webgl2: false
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Renderer, "UBYTE", Renderer.UNSIGNED_BYTE);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Renderer, "USHORT", Renderer.UNSIGNED_SHORT);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Renderer, "fetchShader", _helpers__WEBPACK_IMPORTED_MODULE_6__["fetchShader"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Renderer, "loadImage", _helpers__WEBPACK_IMPORTED_MODULE_6__["loadImage"]);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(5);

var iterableToArrayLimit = __webpack_require__(6);

var nonIterableRest = __webpack_require__(7);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(9);

var iterableToArray = __webpack_require__(10);

var nonIterableSpread = __webpack_require__(11);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupWebGL", function() { return setupWebGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return createProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToBuffer", function() { return pointsToBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchShader", function() { return fetchShader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function create3DContext(canvas, opt_attribs) {
  var names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch (e) {// no-empty
    }

    if (context) {
      break;
    }
  }

  return context;
}

function setupWebGL(canvas, opt_attribs) {
  var context = create3DContext(canvas, opt_attribs);

  if (!context) {
    throw new Error("Sorry, your browser doesn't support WebGL.");
  }

  return context;
}
function createProgram(gl, vertex, fragment) {
  var vertShdr = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShdr, vertex);
  gl.compileShader(vertShdr);

  if (!gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS)) {
    var msg = "Vertex shader failed to compile.  The error log is:".concat(gl.getShaderInfoLog(vertShdr));
    throw new Error(msg);
  }

  var fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShdr, fragment);
  gl.compileShader(fragShdr);

  if (!gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS)) {
    var _msg = "Fragment shader failed to compile.  The error log is:".concat(gl.getShaderInfoLog(fragShdr));

    throw new Error(_msg);
  }

  var program = gl.createProgram();
  gl.attachShader(program, vertShdr);
  gl.attachShader(program, fragShdr);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var _msg2 = "Shader program failed to link.  The error log is:".concat(gl.getProgramInfoLog(program));

    throw new Error(_msg2);
  }

  gl.deleteShader(vertShdr);
  gl.deleteShader(fragShdr);
  return program;
}
function pointsToBuffer(points) {
  var Type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Float32Array;
  var buffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (buffer && !(buffer instanceof Type)) throw new TypeError('Wrong buffer type.');
  if (points == null) return points;
  if (points instanceof Type) return points;

  if (points[0] == null || points[0].length == null) {
    if (buffer) {
      buffer.set(points, 0);
      return buffer;
    }

    return new Type(points);
  }

  var deminsion = points[0].length;
  var len = points.length;

  if (!buffer) {
    buffer = new Type(deminsion * len);
  }

  var idx = 0;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < deminsion; j++) {
      buffer[idx++] = points[i][j];
    }
  }

  return buffer;
}
var imageCache = {};
function loadImage(src) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$useImageBitmap = _ref.useImageBitmap,
      useImageBitmap = _ref$useImageBitmap === void 0 ? true : _ref$useImageBitmap,
      _ref$alias = _ref.alias,
      alias = _ref$alias === void 0 ? null : _ref$alias;

  if (!imageCache[src]) {
    if (typeof Image === 'function') {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      imageCache[src] = new Promise(function (resolve) {
        img.onload = function () {
          if (useImageBitmap && typeof createImageBitmap === 'function') {
            createImageBitmap(img, {
              imageOrientation: 'flipY'
            }).then(function (bitmap) {
              imageCache[src] = bitmap;
              if (alias) imageCache[alias] = bitmap;
              resolve(bitmap);
            });
          } else {
            imageCache[src] = img;
            if (alias) imageCache[alias] = img;
            resolve(img);
          }
        };

        img.src = src;
      });
      if (alias) imageCache[alias] = imageCache[src];
    } else if (typeof fetch === 'function') {
      // run in worker
      return fetch(src, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }).then(function (response) {
        return response.blob();
      }).then(function (blob) {
        return createImageBitmap(blob, {
          imageOrientation: 'flipY'
        }).then(function (bitmap) {
          imageCache[src] = bitmap;
          if (alias) imageCache[alias] = bitmap;
          return bitmap;
        });
      });
    }
  }

  return imageCache[src];
}
var shaderCache = {};
function fetchShader(url) {
  var res, content;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchShader$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!shaderCache[url]) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", shaderCache[url]);

        case 2:
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url));

        case 4:
          res = _context.sent;

          if (!(res.status >= 200 && res.status < 300)) {
            _context.next = 11;
            break;
          }

          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.text());

        case 8:
          content = _context.sent;
          shaderCache[url] = content;
          return _context.abrupt("return", content);

        case 11:
          throw new Error('Shader loaded error.');

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "attribute vec3 a_vertexPosition;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = vec4(a_vertexPosition, 1);\n}\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\nvoid main() {\n\tgl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);\n}\n"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "attribute vec4 a_vertexPosition;\nattribute vec2 a_vertexTextureCoord;\nvarying vec2 vTextureCoord;\nvoid main() {\n\tgl_PointSize = 1.0;\n\tgl_Position = a_vertexPosition;\n\tvTextureCoord = a_vertexTextureCoord;\n}\n"

/***/ })
/******/ ])["default"];

export default GlRenderer;