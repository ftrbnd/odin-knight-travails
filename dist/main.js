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

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => (/* binding */ createBoard),\n/* harmony export */   \"knightMoves\": () => (/* binding */ knightMoves)\n/* harmony export */ });\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ \"./src/Node.js\");\n\r\n\r\nfunction createBoard(rows, cols) {\r\n    const board = [];\r\n    for (let r = 0; r < rows; r++) {\r\n        board.push([]);\r\n        for (let c = 0; c < cols; c++) {\r\n            board[r].push('_');\r\n        }\r\n    }\r\n    return board;\r\n}\r\n\r\nfunction knightMoves(board, start, end) { // start = [x, y]; end = [x, y];\r\n    const q = [new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(start[0], start[1])];\r\n    const visited = new Set();\r\n    \r\n    while (q.length > 0) {\r\n        const len = q.length;\r\n\r\n        for (let i = 0; i < len; i++) {\r\n            const curNode = q.shift();\r\n\r\n            const moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];\r\n            for (const move of moves) {\r\n                const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__.Node(curNode.x + move[0], curNode.y + move[1]);\r\n\r\n                if (!visited.has(`${newNode.x},${newNode.y}`) && 0 <= newNode.x && newNode.x < board.length && 0 <= newNode.y && newNode.y < board[0].length) {\r\n                    visited.add(`${newNode.x},${newNode.y}`);\r\n                    q.push(newNode);\r\n                    newNode.prev = curNode;\r\n                    \r\n                    if (newNode.x == end[0] && newNode.y == end[1])\r\n                        return newNode;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-knight-travails/./src/gameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n/* harmony import */ var _visuals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visuals */ \"./src/visuals.js\");\n\r\n\r\n\r\nfunction game() {\r\n    const board = (0,_gameLogic__WEBPACK_IMPORTED_MODULE_0__.createBoard)(8, 8);\r\n    (0,_visuals__WEBPACK_IMPORTED_MODULE_1__.displayBoard)(board);\r\n\r\n    (0,_visuals__WEBPACK_IMPORTED_MODULE_1__.registerRadioListeners)();\r\n}\r\n\r\ngame();\n\n//# sourceURL=webpack://odin-knight-travails/./src/index.js?");

/***/ }),

/***/ "./src/visuals.js":
/*!************************!*\
  !*** ./src/visuals.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayBoard\": () => (/* binding */ displayBoard),\n/* harmony export */   \"registerRadioListeners\": () => (/* binding */ registerRadioListeners)\n/* harmony export */ });\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n\r\n\r\nconst LIGHT_COLOR = '#DDE5ED';\r\nconst MEDIUM_COLOR = 'rgb(169, 212, 178)';\r\nconst DARK_COLOR = 'rgb(29, 66, 48)';\r\n\r\nfunction displayBoard(board) {\r\n    const boardDiv = document.querySelector('.board');\r\n    boardDiv.style.height = `${board[0].length * 64}px`;\r\n    boardDiv.style.width = `${board[0].length * 64}px`;\r\n\r\n    while (boardDiv.firstChild) {\r\n        boardDiv.removeChild(boardDiv.firstChild);\r\n    }\r\n\r\n    for (let r = 0; r < board.length; r++) {\r\n        const square = createSquare(board, r, 0);\r\n        square.style.backgroundColor = r % 2 == 0 ? MEDIUM_COLOR : DARK_COLOR;\r\n        boardDiv.appendChild(square);\r\n\r\n        for (let c = 1; c < board[0].length; c++) {\r\n            const square = createSquare(board, r, c);\r\n            square.style.backgroundColor = boardDiv.lastChild.style.backgroundColor == MEDIUM_COLOR ? DARK_COLOR : MEDIUM_COLOR;\r\n            \r\n            boardDiv.appendChild(square);\r\n        }\r\n    }\r\n}\r\n\r\nfunction createSquare(board, row, col) {\r\n    const square = document.createElement('div');\r\n    square.classList.add('square');\r\n    square.id = `s${row}-${col}`;\r\n    square.style.height = '64px';\r\n    square.style.width = '64px';\r\n\r\n    square.addEventListener('click', () => {\r\n        if (localStorage.getItem('active-marker') == 'start') {\r\n            const squares = document.querySelectorAll('.square');\r\n            for (const square of squares) {\r\n                while (square.firstChild) {\r\n                    square.removeChild(square.firstChild);\r\n                }\r\n            }\r\n            const pathText = document.querySelector('.path h2');\r\n            pathText.textContent = '';\r\n                    \r\n            const knightIcon = document.createElement('img');\r\n            knightIcon.src = './assets/chess-knight.png';\r\n            knightIcon.classList.add('knight');\r\n\r\n            while (square.firstChild) {\r\n                square.removeChild(square.firstChild);\r\n            }\r\n\r\n            square.appendChild(knightIcon);\r\n\r\n            localStorage.setItem('start', square.id);\r\n\r\n            const endInput = document.querySelector('#end');\r\n            endInput.checked = true;\r\n            localStorage.setItem('active-marker', 'end');\r\n\r\n        } else if (localStorage.getItem('active-marker') == 'end') {\r\n            const squares = document.querySelectorAll('.square');\r\n            for (const square of squares) {\r\n                if (square.firstChild && square.firstChild.classList.contains('knight')) {\r\n                    continue;\r\n                }\r\n                \r\n                while (square.firstChild) {\r\n                    square.removeChild(square.firstChild);\r\n                }\r\n            }\r\n\r\n            const markerIcon = document.createElement('img');\r\n            markerIcon.src = './assets/map-marker.png';\r\n\r\n            while (square.firstChild) {\r\n                square.removeChild(square.firstChild);\r\n            }\r\n\r\n            square.appendChild(markerIcon);\r\n\r\n            localStorage.setItem('end', square.id);\r\n\r\n            const startInput = document.querySelector('#start');\r\n            startInput.checked = true;\r\n            localStorage.setItem('active-marker', 'start');\r\n\r\n            const startCoords = [parseInt(localStorage.getItem('start')[1]), parseInt(localStorage.getItem('start')[3])];\r\n            const endCoords = [parseInt(square.id[1]), parseInt(square.id[3])];\r\n            const solutionNode = (0,_gameLogic__WEBPACK_IMPORTED_MODULE_0__.knightMoves)(board, startCoords, endCoords);\r\n\r\n            displayPath(solutionNode, board);\r\n        }\r\n    });\r\n\r\n    return square;\r\n}\r\n\r\nfunction displayPath(solutionNode, board) {\r\n    const pathList = solutionNode.getPathList();\r\n    for (let i = 0; i < pathList.length; i++) {\r\n        const pathSquare = document.querySelector(`#s${pathList[i][0]}-${pathList[i][1]}`);\r\n\r\n        if (i > 0 && i < pathList.length - 1) {\r\n            const marker = document.createElement('img');\r\n            marker.src = './assets/alpha-x.png';\r\n            marker.classList.add('marker');\r\n            pathSquare.appendChild(marker);\r\n        }\r\n\r\n        if (i > 0) {\r\n            const pathNumber = document.createElement('p');\r\n            pathNumber.textContent = i;\r\n            pathNumber.classList.add('path-number');\r\n            pathSquare.appendChild(pathNumber);\r\n        }\r\n    }\r\n\r\n    const pathText = document.querySelector('.path h2');\r\n    pathText.textContent = `Path: ${solutionNode.toString()}`;\r\n\r\n    console.log(`Got to end in ${solutionNode.pathLength()} moves!`, solutionNode.toString());\r\n}\r\n\r\nfunction registerRadioListeners() {\r\n    localStorage.setItem('active-marker', 'start');\r\n    \r\n    const inputs = document.querySelectorAll('input');\r\n    for (const input of inputs) {\r\n        input.addEventListener('change', () => {\r\n            localStorage.setItem('active-marker', input.id);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://odin-knight-travails/./src/visuals.js?");

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