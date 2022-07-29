/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion() {\n    _classCallCheck(this, Accordion);\n\n    _defineProperty(this, \"accordionContainer\", document.querySelector(\".dropdown-content\"));\n\n    _defineProperty(this, \"accordion\", document.querySelectorAll(\".accordion\"));\n\n    _defineProperty(this, \"accordionLink\", document.querySelectorAll(\".accordion-link\"));\n\n    _defineProperty(this, \"accordionContent\", document.querySelectorAll(\".accordion-content\"));\n\n    // Elements\n    // Events\n    document.addEventListener(\"click\", this._closeAccordion.bind(this), {\n      capture: true\n    });\n    this.accordionContainer.addEventListener(\"click\", this._toggleAccordion.bind(this));\n  }\n\n  _createClass(Accordion, [{\n    key: \"_shrinkAccordion\",\n    value: function _shrinkAccordion() {\n      var windowSize = window.innerWidth;\n      if (windowSize > 725) console.log(windowSize);\n    }\n  }, {\n    key: \"_toggleAccordion\",\n    value: function _toggleAccordion(e) {\n      // Return if Clicked element is not \"accoridonLink\"\n      if (!e.target.classList.contains(\"nav__accordion-link\")) return;\n      var currentAccordion = e.target.nextElementSibling; // Close Accordion\n\n      if (!currentAccordion.classList.contains(\"collapse\")) return this._closeAccordion(); // Open Accordion\n\n      if (currentAccordion.classList.contains(\"collapse\")) return this._openAccordion(e);\n    }\n  }, {\n    key: \"_openAccordion\",\n    value: function _openAccordion(e) {\n      var currentAccordion = e.target.nextElementSibling;\n      var currentAccordionIcon = currentAccordion.closest(\".nav__accordion\");\n      currentAccordion.classList.remove(\"collapse\");\n      currentAccordionIcon.classList.add(\"open\");\n\n      this._transitionAccordion(e);\n    }\n  }, {\n    key: \"_closeAccordion\",\n    value: function _closeAccordion(e) {\n      var _this = this;\n\n      this.accordionContent.forEach(function (el) {\n        if (el.classList.contains(\"collapse\")) return;\n\n        _this._wait(2).then(function () {\n          return el.classList.add(\"collapse\");\n        });\n      });\n      this.accordion.forEach(function (el) {\n        return el.classList.remove(\"open\");\n      });\n    }\n  }, {\n    key: \"_transitionAccordion\",\n    value: function _transitionAccordion(e) {\n      var currentAccordion = e.target.nextElementSibling; // Get the height of clicked accordion\n\n      var accordionHeight = e.target.nextElementSibling.clientHeight; // Set clicked accordion's height after amount of time so that Transition start\n\n      this._wait(1).then(function () {\n        currentAccordion.style.height = \"\".concat(accordionHeight, \"px\");\n        currentAccordion.style.display = \"\";\n      }); // Set transition\n\n\n      currentAccordion.classList.add(\"collapsing\");\n\n      this._wait(300).then(function () {\n        currentAccordion.classList.remove(\"collapsing\");\n        currentAccordion.style = \"\";\n      });\n    }\n  }, {\n    key: \"_wait\",\n    value: function _wait(ms) {\n      return new Promise(function (resolve) {\n        setTimeout(resolve, ms);\n      });\n    }\n  }]);\n\n  return Accordion;\n}();\n\n\n\n//# sourceURL=webpack://blogr-landing-page-main/./src/js/accordion.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-dropdown-menu.js */ \"./src/js/nav-dropdown-menu.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\n\nvar navAccordion = new _nav_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack://blogr-landing-page-main/./src/js/main.js?");

/***/ }),

/***/ "./src/js/nav-dropdown-menu.js":
/*!*************************************!*\
  !*** ./src/js/nav-dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.js */ \"./src/js/accordion.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar DropdownMenu = /*#__PURE__*/function (_Accordion) {\n  _inherits(DropdownMenu, _Accordion);\n\n  var _super = _createSuper(DropdownMenu);\n\n  function DropdownMenu() {\n    var _this;\n\n    _classCallCheck(this, DropdownMenu);\n\n    _this = _super.call(this); // Elements\n\n    _this.dropdownBtn = document.querySelector(\".dropdown-btn\"); // Events\n\n    window.addEventListener(\"resize\", _this._shrinkAccordion.bind(_assertThisInitialized(_this)));\n\n    _this.dropdownBtn.addEventListener(\"click\", _this._toggleMenu.bind(_assertThisInitialized(_this))); // Change accordion's state based on the device's viewport\n\n\n    _this._shrinkAccordion();\n\n    return _this;\n  }\n\n  _createClass(DropdownMenu, [{\n    key: \"_toggleMenu\",\n    value: function _toggleMenu() {\n      var accordionContainer = this.accordionContainer; // Close dropdown menu\n\n      if (!accordionContainer.classList.contains(\"menu-close\")) return accordionContainer.classList.add(\"menu-close\"); // Open dropdown menu\n\n      if (accordionContainer.classList.contains(\"menu-close\")) return accordionContainer.classList.remove(\"menu-close\");\n    }\n  }, {\n    key: \"_shrinkAccordion\",\n    value: function _shrinkAccordion() {\n      var windowWidth = window.innerWidth;\n      var accordionContainer = this.accordionContainer; // Expand accordion for desktop size\n\n      if (windowWidth > 1024) accordionContainer.classList.remove(\"menu-close\"); // Shrink accordions into a menu for mobile size\n\n      if (windowWidth < 1024) accordionContainer.classList.add(\"menu-close\");\n    }\n  }]);\n\n  return DropdownMenu;\n}(_accordion_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://blogr-landing-page-main/./src/js/nav-dropdown-menu.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://blogr-landing-page-main/./src/scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;