/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = (function app () {
	  'use strict'

	  var piano = __webpack_require__(3)
	  var azertyMail = [
	    [{name: 'email', value: '@gmail.com'}], [{name: 'email', value: '@yahoo.fr'}], [{name: 'email', value: '@hotmail.fr'}], ['break'],
	    ['&', '1'], ['é', '2'], ['"', '3'], ["'", '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
	    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
	    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
	    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
	    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
	  ]
	  var azerty = [
	    ['&', '1'], ['é', '2'], ['"', '3'], ["'", '4'], ['(', '5'], [')', '6'], ['è', '7'], ['!', '8'], ['ç', '9'], ['à', '0'], ['-', '_'], [{ name: 'del', value: '&larr;' }], ['break'],
	    ['a'], ['z'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['^'], ['$', '*'], ['@', '#'], ['break'],
	    ['q'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], ['m'], ['ù', '%'], ['break'],
	    [{ name: 'shift', value: '&123' }], ['w'], ['x'], ['c'], ['v'], ['b'], ['n'], [',', '?'], ['.', ';'], ['/', ':'], ['=', '+'], [{ name: 'shift', value: '↑' }], ['break'],
	    [{ name: 'larr', value: '&lsaquo;' }], [{ name: 'space', value: ' ' }], [{ name: 'rarr', value: '&rsaquo;' }], [{ name: 'hide', value: '&times;' }], [{ name: 'submit', value: '&ldsh;' }]
	  ]

	  console.log(azerty)

	  var keyboard = new piano({
	    triggerEvent: ['click', 'touchstart'],
	    slideContent: true,
	    slideContainer: '.demo-container',
	    layouts: {
	      'azerty': azerty,
	      'azerty-mail': azertyMail
	    },
	    onHidden: function () {
	      console.log('hidden')
	    },
	    onBeforeHidden: function () {
	      console.log('hidding...')
	    }
	  })

	  document.querySelector('textarea').click()

	  document.querySelector('#input-2').addEventListener('input', function (event) {
	    console.log('input changed')
	  })

	  document.querySelector('#input-2').addEventListener('input-2', function (event) {
	    console.log('element with id "%s" submitted.', event.target.id)
	  })

	  var vm = new Vue({
	    el: '.demo-container',
	    data: {
	      input: ''
	    }
	  })
	})()


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["piano"] = factory();
		else
			root["piano"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {

		'use strict';
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var Piano = function () {
		  function Piano(options) {
		    _classCallCheck(this, Piano);
		
		    if (document.querySelectorAll('#piano').length) {
		      console.warn('piano is already initialized');
		      return false;
		    }
		    this.defaults = {
		      triggerEvents: ['click'],
		      slideContent: false,
		      slideContainer: 'body',
		      onBeforeHidden: function onBeforeHidden() {},
		      onHidden: function onHidden() {},
		      layouts: options.layouts || []
		    };
		
		    this.settings = _extends(this.defaults, options);
		    this.container = _extends(document.createElement('div'), { id: 'piano', className: 'piano-container animated' });
		    this.detectInputs();
		    document.body.appendChild(this.container);
		    // Make sure to hide keyboard when clicking outside
		    addMultipleListeners(['click', 'touchdown'], document, function (event) {
		      if (event.target.dataset.piano !== '' && !this.container.contains(event.target)) {
		        this.hideKeyboard();
		      }
		    }.bind(this));
		  }
		
		  _createClass(Piano, [{
		    key: 'detectInputs',
		    value: function detectInputs() {
		      var _this = this;
		
		      var createKeyboard = function createKeyboard(parent, target) {
		        var _k = _extends({}, parent);
		        delete _k.triggers;
		        delete _k.layouts;
		        var datas = target.dataset;
		        var options = {};
		
		        _k.shift = false;
		
		        if (datas.pianoPosition) {
		          if (datas.pianoPosition.indexOf('absolute') > -1) {
		            options.position = datas.pianoPosition.replace(/absolute,\s/gi, '').split(',');
		          } else {
		            options.position = datas.pianoPosition ? datas.pianoPosition.split(',') : [];
		          }
		        } else {
		          console.warn('It seems you have incorrect values in your data-piano-position attribute on element: ', target);
		          options.position = [];
		        }
		        // Object.assign(options, datas)
		
		        options.layout = datas.pianoLayout;
		        options.limit = datas.pianoLimit;
		        options.animationIn = datas.pianoAnimationIn;
		        options.animationOut = datas.pianoAnimationOut;
		        options.scale = datas.pianoScale;
		
		        var eventID = datas.pianoEventId;
		        var elementEvent = null;
		        if (eventID) {
		          elementEvent = document.createEvent('Event');
		          elementEvent.initEvent(eventID, true, true);
		        }
		
		        // could be improve with a default object
		        _k.settings = {
		          position: {
		            x: options.position[0] || 'center',
		            y: options.position[1] || 'bottom'
		          },
		          layout: options.layout || 'default',
		          limit: options.limit || -1,
		          submitEvent: elementEvent,
		          animationIn: options.animationIn || 'fadeInUp',
		          animationOut: options.animationOut || 'fadeOutDown',
		          scale: options.scale || 1
		        };
		
		        addMultipleListeners(['click', 'touchdown'], target, function (event) {
		          this.clearKeyboards();
		          this.currentTarget = event.target;
		          this.displayKeyboard(_k);
		        }.bind(_this));
		      };
		
		      this.triggers = document.querySelectorAll('[data-piano]');
		      var triggerSize = this.triggers.length;
		      for (var triggerIdx = 0; triggerIdx < triggerSize; triggerIdx++) {
		        createKeyboard(this, this.triggers[triggerIdx]);
		      }
		    }
		  }, {
		    key: 'displayKeyboard',
		    value: function displayKeyboard(instance) {
		      var _k = this;
		      _k.currentKeyboard = instance;
		
		      var rowsContainer = document.createElement('div');
		      rowsContainer.className = 'piano-rows';
		
		      var layout = this.settings.layouts[instance.settings.layout];
		
		      var rows = [];
		      rows.push(document.createElement('ul'));
		
		      for (var i in layout) {
		        var li = document.createElement('li');
		        if (layout[i] == 'break') {
		          rowsContainer.appendChild(rows[rows.length - 1]);
		          rows.push(document.createElement('ul'));
		        } else {
		          var key = document.createElement('button');
		          if (_typeof(layout[i][0]) === 'object') {
		            li.className = layout[i][0].name;
		            key.className = 'key ' + layout[i][0].name;
		            key.innerHTML = layout[i][0].value;
		            key.dataset.pianoKey = layout[i][0].name;
		          } else {
		            key.className = 'key ' + layout[i];
		            key.textContent = layout[i][0];
		            key.dataset.pianoKey = layout[i][0];
		          }
		          addMultipleListeners(_k.settings.triggerEvents, key, function (event) {
		            debounce(this.keyPressed(event), 300, false);
		          }.bind(this));
		          li.appendChild(key);
		        }
		        rowsContainer.appendChild(rows[rows.length - 1]);
		
		        rows[rows.length - 1].appendChild(li);
		      }
		
		      if (isNaN(instance.settings.position.x) || isNaN(instance.settings.position.y)) {
		        this.container.className += ' ' + instance.settings.position.x;
		        this.container.className += ' ' + instance.settings.position.y;
		      } else {
		        this.container.style.left = instance.settings.position.x + 'px';
		        this.container.style.top = instance.settings.position.y + 'px';
		      }
		
		      this.container.style.display = 'block';
		      this.container.classList.remove(this.currentKeyboard.settings.animationOut);
		      this.container.appendChild(rowsContainer);
		      this.container.classList.add(this.currentKeyboard.settings.animationIn);
		
		      var scale = _k.currentKeyboard.settings.scale;
		      if (scale > 1) {
		        var x = _k.currentKeyboard.settings.position.x;
		        var y = _k.currentKeyboard.settings.position.y;
		        scaleKeyboard(rowsContainer, scale, x, y);
		      }
		
		      document.body.classList.add('piano-open');
		      if (this.slideContent) {
		        document.querySelector(this.slideContainer).style.top = '-' + rowsContainer.getBoundingClientRect().height / 2 + 'px';
		      }
		    }
		  }, {
		    key: 'keyPressed',
		    value: function keyPressed(event) {
		      var target = event.target;
		      var value = target.textContent;
		      var input = this.currentTarget;
		      var cursor = input.selectionStart;
		      var end = input.selectionEnd;
		      var diff = end - cursor || 1;
		      var offset = event.target.innerText.length;
		      var limit = this.currentKeyboard.settings.limit;
		      var submitEvent = this.currentKeyboard.settings.submitEvent;
		
		      // There are still small bugs with selections.
		      if (/del/i.test(target.className)) {
		        var deleteOffset = cursor ? -1 : 0;
		        input.value = insertToString(input.value, cursor + deleteOffset, diff, '');
		        offset = -1;
		      } else if (/space/i.test(target.className)) {
		        if (input.value.length <= limit || limit === -1) {
		          input.value = insertToString(input.value, cursor, diff - 1, ' ');
		        }
		      } else if (/shift/i.test(target.className)) {
		        this.switchCase();
		      } else if (/larr/i.test(target.className)) {
		        offset = -1;
		      } else if (/rarr/i.test(target.className)) {
		        offset = 1;
		      } else if (/hide/i.test(target.className)) {
		        this.hideKeyboard();
		      } else if (/submit/i.test(target.className)) {
		        if (submitEvent) {
		          input.dispatchEvent(submitEvent);
		        } else {
		          console.warn('You did not provide a data-piano-event-id attribute.');
		        }
		      } else {
		        if (input.value.length <= limit || limit === -1) {
		          input.value = insertToString(input.value, cursor, diff - 1, value);
		        }
		      }
		
		      input.selectionStart = cursor + offset;
		      input.selectionEnd = cursor + offset;
		
		      if (document.createEvent) {
		        var evt = document.createEvent('HTMLEvents');
		        evt.initEvent('input', false, true);
		        input.dispatchEvent(evt);
		      } else {
		        input.fireEvent('input');
		      }
		
		      input.focus();
		    }
		  }, {
		    key: 'switchCase',
		    value: function switchCase() {
		      var shift = this.currentKeyboard.shift = !this.currentKeyboard.shift;
		      var keys = document.querySelectorAll('.piano-rows > ul > li');
		      var layout = this.settings.layouts[this.currentKeyboard.settings.layout];
		      var keySize = keys.length;
		
		      for (var i = 0; i < keySize; i++) {
		        var target = keys[i].children[0];
		        if (target) {
		          var value = target.textContent;
		          if (layout[i].length > 1 && layout[i][0].length > 0) {
		            target.textContent = shift ? layout[i][1] : layout[i][0];
		          } else {
		            target.textContent = shift ? value.toUpperCase() : value.toLowerCase();
		          }
		        }
		      }
		    }
		  }, {
		    key: 'hideKeyboard',
		    value: function hideKeyboard() {
		      var _this2 = this;
		
		      if (this.container.firstChild) {
		        typeof this.onBeforeHidden === 'function' && this.onBeforeHidden();
		        this.container.classList.remove(this.currentKeyboard.settings.animationIn);
		        this.container.classList.add(this.currentKeyboard.settings.animationOut);
		        setTimeout(function () {
		          _this2.container.style.display = 'none';
		        }, +this.container.style.animationDuration);
		        document.body.classList.remove('piano-open');
		        if (this.slideContent) {
		          document.querySelector(this.slideContainer).style.top = 0;
		        }
		        typeof this.onHidden === 'function' && this.onHidden();
		      }
		    }
		  }, {
		    key: 'clearKeyboards',
		    value: function clearKeyboards() {
		      if (this.container.firstChild) {
		        this.container.firstChild.remove();
		        this.container.style.top = this.container.style.left = '';
		        this.container.className = 'piano-container animated';
		        this.currentKeyboard = null;
		        document.body.classList.remove('piano-open');
		        if (this.slideContent) {
		          document.querySelector(this.slideContainer).style.top = 0;
		        }
		      }
		    }
		  }, {
		    key: 'isOpen',
		    value: function isOpen() {
		      return document.body.className.match(/\piano-open\b/) !== null;
		    }
		  }, {
		    key: 'destroy',
		    value: function destroy() {
		      this.clearKeyboards();
		      this.container.remove();
		    }
		  }]);
		
		  return Piano;
		}();
		
		function scaleKeyboard(container, scale, x, y) {
		  container.style['-webkit-transform'] = 'scale(' + scale + ')';
		  container.style['-moz-transform'] = 'scale(' + scale + ')';
		  container.style['-ms-transform'] = 'scale(' + scale + ')';
		  container.style['-o-transform'] = 'scale(' + scale + ')';
		  container.style['transform'] = 'scale(' + scale + ')';
		
		  container.style['-webkit-transform-origin'] = x + ' ' + y;
		  container.style['-moz-transform-origin'] = x + ' ' + y;
		  container.style['-ms-transform-origin'] = x + ' ' + y;
		  container.style['-o-transform-origin'] = x + ' ' + y;
		  container.style['transform-origin'] = x + ' ' + y;
		}
		
		function insertToString(str, index, count, add) {
		  return str.slice(0, index) + (add || '') + str.slice(index + count);
		}
		
		function addMultipleListeners(events, target, handler) {
		  events = events instanceof Array ? events : [events];
		  for (var i = 0; i < events.length; i++) {
		    target.addEventListener(events[i], function (event) {
		      handler(event);
		    });
		  }
		}
		
		// Helpers function for piano object
		function debounce(func, wait, immediate) {
		  var timeout;
		  return function () {
		    var context = this;
		    var args = arguments;
		    var later = function later() {
		      timeout = null;
		      if (!immediate) {
		        func.apply(context, args);
		      }
		    };
		    var callNow = immediate && !timeout;
		    clearTimeout(timeout);
		    timeout = setTimeout(later, wait || 200);
		    if (callNow) {
		      func.apply(context, args);
		    }
		  };
		}
		
		module.exports = Piano;

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=piano.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {// webpack.config.js
	var path = __webpack_require__(5)

	module.exports = {
	  entry: ['./src/index'], // file extension after index is optional for .js files
	  output: {
	    path: path.join(__dirname, 'dist'),
	    filename: 'bundle.js'
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);