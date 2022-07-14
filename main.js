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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskEventHandler */ \"./src/modules/taskEventHandler.js\");\n/* harmony import */ var _modules_addTaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTaskForm */ \"./src/modules/addTaskForm.js\");\n\n\n\n/*\nlet t1 = Task(\n    'Tame goat',\n    'go and find a goat and tame it',\n    new Date(2022,0,1),\n    'high'\n);\n\nt1.printTask();\n*/\n\ndocument.getElementById('add').appendChild((0,_modules_addTaskForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n(0,_modules_taskEventHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst Task = (title, description, dueDate, priority) =>{\n\n    /*\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getPriority = () => priority;\n    */\n\n    const setTitle = (newTitle) => title = newTitle;\n    const setDescription = (newDescription) => description = newDescription;\n    const setDueDate = (newDueDate) => dueDate = newDueDate;\n    const setPriority = (newPriority) => priority = newPriority;\n\n    const printTask = () => {\n        console.log(title, description, dueDate, priority);\n    };\n\n    return{\n        title,\n        description,\n        dueDate,\n        priority,\n        /*\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        */\n        setTitle,\n        setDescription,\n        setDueDate,\n        setPriority,\n        printTask\n    }\n};\n\n//TODO\n// - add validation?\n// - or just do it css side?\n// return date formatted?\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/addTaskForm.js":
/*!************************************!*\
  !*** ./src/modules/addTaskForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n//Get input from form\nconst addTaskForm = (projectTitle) => {\n    const form = document.createElement('form');\n    form.setAttribute('method', 'post');\n\n    //title\n    const titleDiv = document.createElement('div');\n    const titleInput = document.createElement('input');\n    titleDiv.appendChild(titleInput);\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('name', 'title');\n    titleInput.setAttribute('id', 'title');\n\n    //description\n    const descriptionDiv = document.createElement('div');\n    const descriptionInput = document.createElement('input');\n    descriptionDiv.appendChild(descriptionInput);\n    descriptionInput.setAttribute('type', 'text');\n    descriptionInput.setAttribute('name', 'description');\n    descriptionInput.setAttribute('id', 'description');\n\n    //due date\n    const dateDiv = document.createElement('div');\n    const dateInput =  document.createElement('input');\n    dateDiv.appendChild(dateInput);\n    dateInput.setAttribute('type', 'date');\n    dateInput.setAttribute('name', 'due-date');\n    dateInput.setAttribute('id', 'date');\n\n    // -------------------------------------------------\n    //priority\n    const fSet = document.createElement('fieldset');\n    const legend = document.createElement('legend');\n    legend.textContent = 'Priority';\n    const priorityDiv = document.createElement('div');\n\n\n    //low\n    const lowLabel = document.createElement('label');\n    lowLabel.setAttribute(\"for\", 'low');\n    lowLabel.innerHTML = 'Low';\n\n    const low = document.createElement('input');\n    low.setAttribute('type', 'radio');\n    low.setAttribute('id', 'low');\n    low.setAttribute('name', 'priority');\n    low.setAttribute('value', 'low');\n    low.checked = true;\n\n    //medium\n    const mediumLabel = document.createElement('label');\n    mediumLabel.setAttribute('for', 'medium');\n    mediumLabel.innerHTML = 'Medium';\n\n    const medium = document.createElement('input');\n    medium.setAttribute('type', 'radio');\n    medium.setAttribute('id', 'medium');\n    medium.setAttribute('name', 'priority');\n    medium.setAttribute('value', 'medium');\n\n    //high\n    const highLabel = document.createElement('label');\n    highLabel.setAttribute('for', 'high');\n    highLabel.innerHTML = 'High';\n\n    const high = document.createElement('input');\n    high.setAttribute('type', 'radio');\n    high.setAttribute('id', 'high');\n    high.setAttribute('name', 'priority');\n    high.setAttribute('value', 'high');\n\n    priorityDiv.appendChild(low);\n    priorityDiv.appendChild(lowLabel);\n    priorityDiv.appendChild(medium);\n    priorityDiv.appendChild(mediumLabel);\n    priorityDiv.appendChild(high);\n    priorityDiv.appendChild(highLabel);\n\n    fSet.appendChild(legend);\n    fSet.appendChild(priorityDiv);\n\n    // -------------------------------------------------\n\n    //buttons\n\n    return fSet;\n}\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskForm);\n\n/*\n<form action=\"\" method=\"get\">\n                <div>\n                    <label for=\"title\">Title:</label>\n                    <input type=\"text\" name=\"title\" id=\"title\">\n                </div>\n                <div>\n                    <label for=\"description\">Description:</label>\n                    <input type=\"text\" name=\"description\" id=\"description\">\n                </div>\n                <div>\n                    <label for=\"date\">Due Date:</label>\n                    <input type=\"date\" id=\"date\" name=\"due-date\">\n                </div>\n                <fieldset>\n                    <legend>Priority:</legend>\n                    <div>\n                        <input type=\"radio\" id=\"low\" name=\"priority\" value=\"low\" checked>\n                        <label for=\"low\">Low</label>\n\n                        <input type=\"radio\" id=\"medium\" name=\"priority\" value=\"medium\" >\n                        <label for=\"medium\">Medium</label>\n\n                        <input type=\"radio\" id=\"high\" name=\"priority\" value=\"high\" >\n                        <label for=\"high\">High</label>\n                    </div>\n                         \n                </fieldset>\n                <div>\n                    <button type=\"button\" id=\"add-sumbit\">Enter</button>\n                    <button type=\"button\" id=\"add-close\">Cancel</button>\n                </div> \n</form>\n*/\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/addTaskForm.js?");

/***/ }),

/***/ "./src/modules/taskEventHandler.js":
/*!*****************************************!*\
  !*** ./src/modules/taskEventHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _addTaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskForm */ \"./src/modules/addTaskForm.js\");\n/*\nconst taskController = (() => {\n    //add eventlisteners for adding and editing.\n    const addBtn = document.getElementById('add');\n    addBtn.addEventListener('click', (e) =>{\n        console.log(button);\n    });\n\n})();\n*/\n\n\n\n\n\n\nconst taskEventHandler = () => {\n    const addBtn = document.getElementById('add-btn');\n    addBtn.addEventListener('click', (e) =>{\n        /*\n        ADD OPEN OF FORM\n        let newTask = Task('Dishes','Clean up your mess',new Date(), 'Low');\n        newTask.printTask();\n        \n        */console.log('234');\n    });\n    const enterBtn = document.getElementById('add-sumbit');\n    enterBtn.addEventListener('click', (e) =>{\n        const newTask = (0,_addTaskForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        newTask.printTask();\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskEventHandler);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/taskEventHandler.js?");

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