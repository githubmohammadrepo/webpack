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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chMOne.js":
/*!***********************!*\
  !*** ./src/chMOne.js ***!
  \***********************/
/*! exports provided: myFunction, myVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myFunction\", function() { return myFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myVariable\", function() { return myVariable; });\n// In childModule1.js\r\nlet myFunction = function(){console.log('myFunction in chMOne.js')}; // assign something useful to myFunction\r\nlet myVariable = 'chMOne Variable'; // assign something useful to myVariable\r\n\n\n//# sourceURL=webpack:///./src/chMOne.js?");

/***/ }),

/***/ "./src/chMTwo.js":
/*!***********************!*\
  !*** ./src/chMTwo.js ***!
  \***********************/
/*! exports provided: myClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myClass\", function() { return myClass; });\n// In childModule2.js\r\nlet myClass = class {\r\n    show() {\r\n        console.log('new myclass.show chMTwo')\r\n    }\r\n};\r\n// assign something useful to myClass\r\n\n\n//# sourceURL=webpack:///./src/chMTwo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parentM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parentM.js */ \"./src/parentM.js\");\n\r\n\r\nObject(_parentM_js__WEBPACK_IMPORTED_MODULE_0__[\"myFunction\"])()\r\nconsole.log(_parentM_js__WEBPACK_IMPORTED_MODULE_0__[\"myVariable\"])\r\nlet m=(new _parentM_js__WEBPACK_IMPORTED_MODULE_0__[\"myClass\"]()) \r\nm.show( )\r\n\r\nclass Book {\r\n  constructor(name,pages,title=null,description = null) {\r\n    this.name = name;\r\n    this.title = title;\r\n    this.pages = pages;\r\n    this.description = description;\r\n  }\r\n\r\n  pageCount() {\r\n    console.log(this.pages)\r\n  }\r\n\r\n  showName(){\r\n    console.log(this.name)\r\n  }\r\n}\r\n\r\n//using class book\r\nlet b = new Book('Vue pro',731,'Vue Pro Learning', ' learning complete vuejs from scratch');\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parentM.js":
/*!************************!*\
  !*** ./src/parentM.js ***!
  \************************/
/*! exports provided: myFunction, myVariable, myClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chMOne_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chMOne.js */ \"./src/chMOne.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myFunction\", function() { return _chMOne_js__WEBPACK_IMPORTED_MODULE_0__[\"myFunction\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myVariable\", function() { return _chMOne_js__WEBPACK_IMPORTED_MODULE_0__[\"myVariable\"]; });\n\n/* harmony import */ var _chMTwo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chMTwo.js */ \"./src/chMTwo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myClass\", function() { return _chMTwo_js__WEBPACK_IMPORTED_MODULE_1__[\"myClass\"]; });\n\n// In parentModule.js\r\n// Only aggregating the exports from childModule1 and childModule2\r\n// to re-export them\r\n\r\n\n\n//# sourceURL=webpack:///./src/parentM.js?");

/***/ })

/******/ });