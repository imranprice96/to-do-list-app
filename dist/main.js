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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskEventHandler */ \"./src/modules/taskEventHandler.js\");\n\n\n\n(0,_modules_taskEventHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst Task = (title, description, dueDate, priority) =>{\n\n    /*\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getPriority = () => priority;\n    */\n\n    const setTitle = (newTitle) => title = newTitle;\n    const setDescription = (newDescription) => description = newDescription;\n    const setDueDate = (newDueDate) => dueDate = newDueDate;\n    const setPriority = (newPriority) => priority = newPriority;\n\n    const printTask = () => {\n        console.log(title, description, dueDate, priority);\n    };\n\n    return{\n        title,\n        description,\n        dueDate,\n        priority,\n        /*\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        */\n        setTitle,\n        setDescription,\n        setDueDate,\n        setPriority,\n        printTask\n    }\n};\n\n//TODO\n// - add validation?\n// - or just do it css side?\n// return date formatted?\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/taskEventHandler.js":
/*!*****************************************!*\
  !*** ./src/modules/taskEventHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskInputController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskInputController */ \"./src/modules/taskInputController.js\");\n\n\n\nconst taskEventHandler = () => {\n    const formDiv = document.getElementById('add');\n    const addBtn = document.getElementById('add-btn');\n    const cancelBtn = document.getElementById('add-close');\n    const enterBtn = document.getElementById('add-submit');\n\n    addBtn.addEventListener('click', (e) =>{\n        formDiv.style.display = 'block';\n    });\n    \n    enterBtn.addEventListener('click', (e) =>{\n        const newTask = (0,_taskInputController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        formDiv.style.display = 'none';\n        newTask.printTask();\n    });\n   \n    cancelBtn.addEventListener('click', (e) =>{\n        formDiv.style.display = 'none';\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskEventHandler);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/taskEventHandler.js?");

/***/ }),

/***/ "./src/modules/taskInputController.js":
/*!********************************************!*\
  !*** ./src/modules/taskInputController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\n//Get input from form\nconst taskInputController = () => {\n    const title = document.getElementById('title').value;\n    const description = document.getElementById('description').value;\n    const dueDate = document.getElementById('date').value;\n    const priority = getPriority();\n\n    if (validateInput(title,description,date)){\n        let newTask = (0,_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority);\n        return newTask;\n    }     \n}\n\n\nconst validateInput = (title, description, date) => {\n    // add date validation for min date\n    return title != '';\n};\n\nconst getPriority = () => {\n    const low = document.getElementById('low');\n    const medium = document.getElementById('medium');\n    const high = document.getElementById('high');\n    if(low.checked) return 'low';\n    if(medium.checked) return 'medium';\n    if(high.checked) return 'high';\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskInputController);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/taskInputController.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;