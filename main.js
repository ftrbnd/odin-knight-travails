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

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\r\n    constructor(x, y, prev = null) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.prev = prev;\r\n    }\r\n\r\n    pathLength() {\r\n        let node = this;\r\n        let size = 0;\r\n        while (node.prev) {\r\n            node = node.prev;\r\n            size++;\r\n        }\r\n        return size;\r\n    }\r\n\r\n    getPathList() {\r\n        const res = [];\r\n        let node = this;\r\n        while (node) {\r\n            res.push([node.x, node.y]);\r\n            node = node.prev;\r\n        }\r\n        return res.reverse();\r\n    }\r\n\r\n    toString() {\r\n        const list = this.getPathList();\r\n        let res = '';\r\n        for (let i = 0; i < list.length; i++) {\r\n            const [x, y] = [list[i][0], list[i][1]];\r\n            res += i == list.length - 1 ? `[${x},${y}]` : `[${x},${y}] -> `;\r\n        }\r\n        return res;\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-knight-travails/./src/Node.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\r\n\r\nfunction createBoard(rows, cols) {\r\n    const board = [];\r\n    for (let r = 0; r < rows; r++) {\r\n        board.push([]);\r\n        for (let c = 0; c < cols; c++) {\r\n            board[r].push('_');\r\n        }\r\n    }\r\n    return board;\r\n}\r\n\r\nfunction knightMoves(board, start, end) { // start = [x, y]; end = [x, y];\r\n    const q = [new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(start[0], start[1])];\r\n    const visited = new Set();\r\n    \r\n    while (q.length > 0) {\r\n        const len = q.length;\r\n\r\n        for (let i = 0; i < len; i++) {\r\n            const curNode = q.shift();\r\n\r\n            const moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];\r\n            for (const move of moves) {\r\n                const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(curNode.x + move[0], curNode.y + move[1]);\r\n\r\n                if (!visited.has(`${newNode.x},${newNode.y}`) && 0 <= newNode.x && newNode.x < board.length && 0 <= newNode.y && newNode.y < board[0].length) {\r\n                    visited.add(`${newNode.x},${newNode.y}`);\r\n                    q.push(newNode);\r\n                    newNode.prev = curNode;\r\n                    \r\n                    if (newNode.x == end[0] && newNode.y == end[1])\r\n                        return newNode;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction game() {\r\n    const board = createBoard(8, 8);\r\n    const start = [4, 1], end = [5, 6];\r\n    console.log('Starting board: ', JSON.parse(JSON.stringify(board)));\r\n\r\n    const solutionNode = knightMoves(board, start, end);\r\n    const pathList = solutionNode.getPathList();\r\n    for (let i = 0; i < pathList.length; i++) {\r\n        board[pathList[i][0]][pathList[i][1]] = i;\r\n    }\r\n    console.log(`Got to end in ${solutionNode.pathLength()} moves!`, solutionNode.toString());\r\n    console.log('Final board: ', JSON.parse(JSON.stringify(board)));\r\n}\r\n\r\ngame();\n\n//# sourceURL=webpack://odin-knight-travails/./src/index.js?");

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