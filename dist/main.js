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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --primary1: #1f2937;\\n    --primary2: #4b5563;\\n    --secondary1: #d1d5db;\\n    --secondary2: #f3f4f6;\\n\\n    --header: 200px;\\n    --nav: 350px;\\n    --footer: 100px;\\n    --left-margin: 50px;\\n\\n    --font: 'Roboto', sans-serif;\\n}\\n\\n/* ----------------------- */\\n/* \\nskeleton css\\n - add scrolling to content\\n*/\\nbody{\\n    height: 100vh;\\n    width: 100vw;\\n    display: flex;\\n    flex-direction: column;\\n    margin: 0;\\n}\\n\\n.logo{\\n    width: 4rem;\\n    height: 4rem;\\n}\\n\\n.header{\\n    height: var(--header);\\n    background-color: var(--primary1);\\n    display: flex;\\n    align-items: center;\\n    gap: 1rem;\\n}\\n\\n.title{\\n    font-family: var(--font);\\n    font-size: 3rem;\\n    color: white;\\n    padding-left: var(--left-margin);\\n}\\n\\n.body{\\n    height: 100%;\\n    display: flex;\\n}\\n\\n.nav{\\n    background-color: var(--secondary1);\\n    width: var(--nav);\\n    font-family: var(--font);\\n    font-size: 1.5rem;\\n    display: flex;\\n    flex-direction: column;\\n    padding-left: 30px;\\n    padding-top: 30px;\\n}\\n\\n.nav div{\\n    padding: 10px;\\n    margin: 10px 0 10px 10px;\\n    border-radius: 10px;\\n}\\n\\n.nav div:hover{\\n    font-weight: bold;\\n}\\n\\n.nav div:focus{\\n    background-color: var(--primary2);\\n}\\n\\n\\n\\n.content{\\n    background-color: var(--secondary2);\\n    width: calc(100vw - var(--nav));\\n}\\n/* ----------------------- */\\n\\n.popup-box-closed{\\n    font-family: var(--font);\\n    font-size: 1.2rem;\\n    border: 2px solid var(--primary1);\\n    padding: 1rem;\\n    background-color: var(--secondary2);\\n    border-radius: 20px;\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    height: 300px;\\n    width: 500px;\\n    margin-top: -150px;\\n    margin-left: -250px;\\n}\\n\\n.popup-stlying{\\n    display: flex;\\n    flex-direction: column;\\n    gap:10px;\\n}\\n\\n.open-popup{\\n    display: block;\\n}\\n\\n.close-popup{\\n    display: none;\\n}\\n\\n.popup-background{\\n    height: 100%;\\n    width: 100%;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    background-color: rgba(0, 0, 0, 0.322);\\n}\\n\\n\\n/*Task Cards*/\\n.task-card{\\n    font-family: var(--font);\\n    display: flex;\\n    align-items: center;\\n    border-left: 5px solid green;\\n    height: 4rem;\\n    background-color: var(--secondary1);\\n    \\n}\\n\\n.task-card>div{\\n    padding: 1rem;\\n}\\n\\n.task-card-title{\\n    margin-right: auto;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.tasks{\\n    display: flex;\\n    flex-direction: column;\\n    margin: 2rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskEventHandler */ \"./src/modules/taskEventHandler.js\");\n/* harmony import */ var _modules_pages_pageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pages/pageController */ \"./src/modules/pages/pageController.js\");\n/* harmony import */ var _modules_addProjectEventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addProjectEventHandler */ \"./src/modules/addProjectEventHandler.js\");\n\n\n\n\n(0,_modules_pages_pageController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_taskEventHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_addProjectEventHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst project = (title) => {\n\n    const tasks = [];\n    const setTitle = (newTitle) => title = newTitle; \n    const addTask = (task) => {\n        tasks.push(task);\n    };\n    const deleteTask = (task) => {\n        // fitler / map\n    }\n    const printProject = () =>{\n        console.log(tasks);\n    }\n    return {\n        title, \n        tasks,\n        setTitle,\n        addTask,\n        deleteTask,\n        printProject,\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst Task = (title, description, dueDate, priority) =>{\n\n    /*\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getPriority = () => priority;\n    */\n\n    const setTitle = (newTitle) => title = newTitle;\n    const setDescription = (newDescription) => description = newDescription;\n    const setDueDate = (newDueDate) => dueDate = newDueDate;\n    const setPriority = (newPriority) => priority = newPriority;\n\n    const printTask = () => {\n        console.log(title, description, dueDate, priority);\n    };\n\n    return{\n        title,\n        description,\n        dueDate,\n        priority,\n        /*\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        */\n        setTitle,\n        setDescription,\n        setDueDate,\n        setPriority,\n        printTask\n    }\n};\n\n//TODO\n// - add validation?\n// - or just do it css side?\n// return date formatted?\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addProject = () =>{\n    const div = document.createElement('div');\n    div.setAttribute('id','add-project-div');\n    const form = document.createElement('form');\n    form.setAttribute('id','add-project-form');\n    form.setAttribute('action', '');\n    form.setAttribute('method', 'get');\n    div.appendChild(form);\n\n    const title = document.createElement('input');\n    title.setAttribute('type', 'text');\n    title.setAttribute('name', 'project-title');\n    title.setAttribute('id', 'project-title');\n\n    const tLabel = document.createElement('label');\n    tLabel.setAttribute('for', 'project-title');\n    tLabel.innerHTML = 'Title:'\n\n    form.appendChild(tLabel);\n    form.appendChild(title);\n\n    const enterBtn = document.createElement('button');\n    enterBtn.setAttribute('type','button');\n    enterBtn.setAttribute('id','add-project-submit');\n    enterBtn.innerHTML = 'Enter';\n\n\n    const cancelBtn = document.createElement('button');\n    cancelBtn.setAttribute('type','button');\n    cancelBtn.setAttribute('id','add-project-close');\n    cancelBtn.innerHTML = 'Cancel';\n\n    const buttonDiv = document.createElement('div');\n    buttonDiv.appendChild(enterBtn);\n    buttonDiv.appendChild(cancelBtn);\n\n    form.appendChild(buttonDiv);\n\n    const outerDiv = document.createElement('div');\n    outerDiv.setAttribute('id', 'project-overlay');\n    outerDiv.appendChild(div);\n    return outerDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/addProject.js?");

/***/ }),

/***/ "./src/modules/addProjectEventHandler.js":
/*!***********************************************!*\
  !*** ./src/modules/addProjectEventHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/modules/addProject.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController */ \"./src/modules/projectController.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n \n \n \n \n\n const addProjectEventHandler = () => {\n    document.getElementById('body').appendChild((0,_addProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    const addBtn = document.getElementById('add-project');\n    const formDiv = document.getElementById('project-overlay');\n    const cancelBtn = document.getElementById('add-project-close');\n    const enterBtn = document.getElementById('add-project-submit');\n    const form = document.getElementById('add-project-form');\n\n    formDiv.classList.add('popup-background');\n    formDiv.classList.add('close-popup');\n\n    const innerDiv = document.getElementById('add-project-div');\n    innerDiv.classList.add('popup-box-closed');\n    form.classList.add('popup-stlying');\n\n\n    //add form resets\n    const openForm = () => {\n        if(formDiv.classList.contains('close-popup')){\n            formDiv.classList.remove('close-popup');\n        };\n        formDiv.classList.add('open-popup');\n    }\n\n    const closeForm = () =>{\n        if(formDiv.classList.contains('open-popup')){\n            formDiv.classList.remove('open-popup');\n        };\n        formDiv.classList.add('close-popup');\n    }\n\n    const resetForm = () => {\n        form.reset();\n    }\n\n\n    addBtn.addEventListener('click' , (e) => {\n        openForm();\n    });\n    \n    enterBtn.addEventListener('click', (e) =>{;\n        // TODO: project input controller\n        const title = document.getElementById('project-title').value;\n        if(validateInput(title)){\n            const newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(title);\n            _projectController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProject(newProject);\n            _projectController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].printProjects();\n        }\n        closeForm();\n        resetForm();\n    });\n   \n    cancelBtn.addEventListener('click', (e) =>{\n        closeForm();\n        resetForm();\n    });\n    \n    const validateInput = (newTitle) => {\n        return newTitle.value != '' ? true : false;\n    }\n    //add way to close the other form and reset if it is already open\n }\n\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProjectEventHandler);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/addProjectEventHandler.js?");

/***/ }),

/***/ "./src/modules/pages/allPage.js":
/*!**************************************!*\
  !*** ./src/modules/pages/allPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectController */ \"./src/modules/projectController.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Project */ \"./src/modules/Project.js\");\n\n\n\nconst allPage = () => {\n\n    const div = document.createElement('div');\n\n    const h1 = document.createElement('h1');\n    h1.innerHTML = 'All';\n    div.appendChild(h1);\n\n    for(const p in _projectController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects ){\n        let tempProject = _projectController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[p];\n        let projectTitle = _projectController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[p].title;\n        //console.log(tempProject);\n        for(const t in tempProject.tasks){\n            let title = tempProject.tasks[t].title;\n            let desc = tempProject.tasks[t].description;\n            let date = tempProject.tasks[t].dueDate;\n            let prio = tempProject.tasks[t].priority;\n            \n            const card = document.createElement('p');\n            card.innerHTML = `${projectTitle} ${title} ${desc} ${date} ${prio}`;\n            div.appendChild(card);\n            //console.log(tempTasks);\n        }\n    }\n\n    return div;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allPage);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/pages/allPage.js?");

/***/ }),

/***/ "./src/modules/pages/pageController.js":
/*!*********************************************!*\
  !*** ./src/modules/pages/pageController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _allPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allPage */ \"./src/modules/pages/allPage.js\");\n/* harmony import */ var _todayPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todayPage */ \"./src/modules/pages/todayPage.js\");\n/* harmony import */ var _projectsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsPage */ \"./src/modules/pages/projectsPage.js\");\n\n\n\n\nconst pageController = () => {\n    const content = document.getElementById('content');\n    const all = document.getElementById('all');\n    const today = document.getElementById('today');\n    const projects = document.getElementById('projects');\n    \n    all.addEventListener('focus', (e) => {\n        content.innerHTML = '';\n        content.appendChild((0,_allPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    });\n    today.addEventListener('focus', (e) => {\n        content.innerHTML = '';\n        content.appendChild((0,_todayPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    });\n    projects.addEventListener('focus', (e) => {\n        content.innerHTML = '';\n        content.appendChild((0,_projectsPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    });\n\n    //add and remove css background based on click\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageController);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/pages/pageController.js?");

/***/ }),

/***/ "./src/modules/pages/projectsPage.js":
/*!*******************************************!*\
  !*** ./src/modules/pages/projectsPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectsPage = () => {\n    const h1 = document.createElement('h1');\n    h1.innerHTML = 'Projects';\n\n    return h1;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsPage);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/pages/projectsPage.js?");

/***/ }),

/***/ "./src/modules/pages/todayPage.js":
/*!****************************************!*\
  !*** ./src/modules/pages/todayPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todayPage = () => {\n    const h1 = document.createElement('h1');\n    h1.innerHTML = 'Today';\n\n    return h1;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todayPage);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/pages/todayPage.js?");

/***/ }),

/***/ "./src/modules/projectController.js":
/*!******************************************!*\
  !*** ./src/modules/projectController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\n/*\nconst projectController = () => {\n    const projects = [];\n    const defaultProject = Project('default');\n    projects.push(defaultProject);\n\n}\n*/\n\nconst projectController = ( () => {\n    const projects = [];\n    const defaultProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('default');\n    projects.push(defaultProject);\n\n    const findProject = (title) => {\n        for(const p in projects){\n            //console.log(projects[p].title);\n            if(projects[p].title == title){\n                //console.log(projects[p]);\n                return projects[p];\n            }\n        }\n    };\n\n    const addProject = (project) => {\n        if(titleIsUnique(project.title)){\n            projects.push(project);\n        }\n    };\n\n    const titleIsUnique = (title) => {\n        let isUnique = true;\n        for(const p in projects){\n            if(projects[p].title == title) isUnique = false;\n        };\n        return isUnique;\n    };\n\n    const printProjects = () => {\n        console.log(projects);\n    }\n\n    \n\n    return {\n        projects,\n        addProject,\n        findProject,\n        printProjects,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectController);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/projectController.js?");

/***/ }),

/***/ "./src/modules/taskEventHandler.js":
/*!*****************************************!*\
  !*** ./src/modules/taskEventHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController */ \"./src/modules/projectController.js\");\n/* harmony import */ var _taskInputController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskInputController */ \"./src/modules/taskInputController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\n\n\n\n\nconst taskEventHandler = () => {\n    const formDiv = document.getElementById('form-overlay');\n    const addBtn = document.getElementById('add-btn');\n    const cancelBtn = document.getElementById('add-close');\n    const enterBtn = document.getElementById('add-submit');\n    formDiv.classList.add('close-popup');\n\n    const openForm = () => {\n        if(formDiv.classList.contains('close-popup')){\n            formDiv.classList.remove('close-popup');\n        };\n        formDiv.classList.add('open-popup');\n    }\n\n    const closeForm = () =>{\n        if(formDiv.classList.contains('open-popup')){\n            formDiv.classList.remove('open-popup');\n        };\n        formDiv.classList.add('close-popup');\n    }\n\n    const resetForm = () => {\n        document.getElementById('task-form').reset();\n    }\n\n    const getProjects = () => {\n        let projectSelect = document.getElementById('project');\n        projectSelect.innerHTML = '';\n        for(const p in _projectController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects){\n            let option = document.createElement('option');\n            option.setAttribute('value', _projectController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[p].title);\n            option.innerHTML  = _projectController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[p].title;\n            projectSelect.appendChild(option);\n        }\n    }\n\n    addBtn.addEventListener('click', (e) =>{\n        openForm();\n        getProjects();\n    });\n    \n    enterBtn.addEventListener('click', (e) =>{;\n        (0,_taskInputController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        closeForm();\n        resetForm();\n    });\n   \n    cancelBtn.addEventListener('click', (e) =>{\n        closeForm();\n        resetForm();\n    });\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskEventHandler);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/taskEventHandler.js?");

/***/ }),

/***/ "./src/modules/taskInputController.js":
/*!********************************************!*\
  !*** ./src/modules/taskInputController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ \"./src/modules/projectController.js\");\n\n\n\n//Get input from form\nconst taskInputController = () => {\n    const title = document.getElementById('title').value;\n    const description = document.getElementById('description').value;\n    const dueDate = document.getElementById('date').value;\n    const priority = getPriority();\n    const project = document.getElementById('project');\n\n    //projectController();\n    //console.log(project.value);\n\n    if (validateInput(title,description,date)){\n        let newTask = (0,_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority);\n        _projectController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findProject(project.value).addTask(newTask);\n        //projectController.findProject(project.value).printProject();\n\n    }     \n}\n\n\n\n\n\nconst validateInput = (title, description, date) => {\n    // add date validation for min date\n    return title != '';\n};\n\nconst getPriority = () => {\n    const low = document.getElementById('low');\n    const medium = document.getElementById('medium');\n    const high = document.getElementById('high');\n    if(low.checked) return 'low';\n    if(medium.checked) return 'medium';\n    if(high.checked) return 'high';\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskInputController);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/taskInputController.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;