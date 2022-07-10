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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskController */ \"./src/modules/taskController.js\");\n\n\n\n/*\nlet t1 = Task(\n    'Tame goat',\n    'go and find a goat and tame it',\n    new Date(2022,0,1),\n    'high'\n);\n\nt1.printTask();\n*/\n\n(0,_modules_taskController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst Task = (title, description, dueDate, priority) =>{\n\n    /*\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getPriority = () => priority;\n    */\n\n    const setTitle = (newTitle) => title = newTitle;\n    const setDescription = (newDescription) => description = newDescription;\n    const setDueDate = (newDueDate) => dueDate = newDueDate;\n    const setPriority = (newPriority) => priority = newPriority;\n\n    const printTask = () => {\n        console.log(title, description, dueDate, priority);\n    };\n\n    return{\n        title,\n        description,\n        dueDate,\n        priority,\n        /*\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        */\n        setTitle,\n        setDescription,\n        setDueDate,\n        setPriority,\n        printTask\n    }\n};\n\n//TODO\n// - add validation?\n// - or just do it css side?\n// return date formatted?\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n\n\n\nconst addTask = () => {\n    const title = document.getElementById('title').value;\n    const description = document.getElementById('description').value;\n    const dueDate = document.getElementById('date').value;\n    const priority = getPriority();\n\n    if (validateInput(title,description,date)){\n        let newTask = (0,_Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority);\n        return newTask;\n    }\n        \n}\n\n\n\n//TO DO\n/*Tomorrow:\n * add behaviour for getting form\n * store data received into new task\n * \n * \n */\n\nconst validateInput = (title, description, date) => {\n    // add date validation for min date\n    return title != '';\n};\n\nconst getPriority = () => {\n    const low = document.getElementById('low');\n    const medium = document.getElementById('medium');\n    const high = document.getElementById('high');\n    if(low.checked) return 'low';\n    if(medium.checked) return 'medium';\n    if(high.checked) return 'high';\n};\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/taskController.js":
/*!***************************************!*\
  !*** ./src/modules/taskController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ \"./src/modules/addTask.js\");\n/*\nconst taskController = (() => {\n    //add eventlisteners for adding and editing.\n    const addBtn = document.getElementById('add');\n    addBtn.addEventListener('click', (e) =>{\n        console.log(button);\n    });\n\n})();\n*/\n\n\n\n\n\n\nconst taskController = () => {\n    const addBtn = document.getElementById('add-btn');\n    addBtn.addEventListener('click', (e) =>{\n        /*\n        ADD OPEN OF FORM\n        let newTask = Task('Dishes','Clean up your mess',new Date(), 'Low');\n        newTask.printTask();\n        \n        */console.log('234');\n    });\n    const enterBtn = document.getElementById('add-sumbit');\n    enterBtn.addEventListener('click', (e) =>{\n        const newTask = (0,_addTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        newTask.printTask();\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskController);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/taskController.js?");

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