/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Node {\r\n    constructor(x, y, prev = null) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.prev = prev;\r\n    }\r\n\r\n    pathLength() {\r\n        let node = this;\r\n        let size = 0;\r\n        while (node.prev) {\r\n            node = node.prev;\r\n            size++;\r\n        }\r\n        return size;\r\n    }\r\n\r\n    getPathList() {\r\n        const res = [];\r\n        let node = this;\r\n        while (node) {\r\n            res.push([node.x, node.y]);\r\n            node = node.prev;\r\n        }\r\n        return res.reverse();\r\n    }\r\n\r\n    toString() {\r\n        const list = this.getPathList();\r\n        let res = '';\r\n        for (let i = 0; i < list.length; i++) {\r\n            const [x, y] = [list[i][0], list[i][1]];\r\n            res += i == list.length - 1 ? `[${x},${y}]` : `[${x},${y}] -> `;\r\n        }\r\n        return res;\r\n    }\r\n}\r\n\r\nfunction createBoard(rows, cols) {\r\n    const board = [];\r\n    for (let r = 0; r < rows; r++) {\r\n        board.push([]);\r\n        for (let c = 0; c < cols; c++) {\r\n            board[r].push('_');\r\n        }\r\n    }\r\n    return board;\r\n}\r\n\r\nfunction knightMoves(board, start, end) { // start = [x, y]; end = [x, y];\r\n    const q = [new Node(start[0], start[1])];\r\n    const visited = new Set();\r\n    \r\n    while (q.length > 0) {\r\n        const len = q.length;\r\n\r\n        for (let i = 0; i < len; i++) {\r\n            const curNode = q.shift();\r\n\r\n            const moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];\r\n            for (const move of moves) {\r\n                const newNode = new Node(curNode.x + move[0], curNode.y + move[1]);\r\n\r\n                if (!visited.has(`${newNode.x},${newNode.y}`) && 0 <= newNode.x && newNode.x < board.length && 0 <= newNode.y && newNode.y < board[0].length) {\r\n                    visited.add(`${newNode.x},${newNode.y}`);\r\n                    q.push(newNode);\r\n                    newNode.prev = curNode;\r\n                    \r\n                    if (newNode.x == end[0] && newNode.y == end[1])\r\n                        return newNode;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction game() {\r\n    const board = createBoard(8, 8);\r\n    const start = [4, 1], end = [5, 6];\r\n    console.log('Starting board: ', JSON.parse(JSON.stringify(board)));\r\n\r\n    const solutionNode = knightMoves(board, start, end);\r\n    const pathList = solutionNode.getPathList();\r\n    for (let i = 0; i < pathList.length; i++) {\r\n        board[pathList[i][0]][pathList[i][1]] = i;\r\n    }\r\n    console.log(`Got to end in ${solutionNode.pathLength()} moves!`, solutionNode.toString());\r\n    console.log('Final board: ', JSON.parse(JSON.stringify(board)));\r\n}\r\n\r\ngame();\n\n//# sourceURL=webpack://odin-knight-travails/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;