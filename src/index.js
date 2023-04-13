import { Node } from "./Node";

const LIGHT_COLOR = '#DDE5ED';
const MEDIUM_COLOR = 'rgb(169, 212, 178)';
const DARK_COLOR = 'rgb(29, 66, 48)';

function createBoard(rows, cols) {
    const board = [];
    for (let r = 0; r < rows; r++) {
        board.push([]);
        for (let c = 0; c < cols; c++) {
            board[r].push('_');
        }
    }
    return board;
}

function knightMoves(board, start, end) { // start = [x, y]; end = [x, y];
    const q = [new Node(start[0], start[1])];
    const visited = new Set();
    
    while (q.length > 0) {
        const len = q.length;

        for (let i = 0; i < len; i++) {
            const curNode = q.shift();

            const moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
            for (const move of moves) {
                const newNode = new Node(curNode.x + move[0], curNode.y + move[1]);

                if (!visited.has(`${newNode.x},${newNode.y}`) && 0 <= newNode.x && newNode.x < board.length && 0 <= newNode.y && newNode.y < board[0].length) {
                    visited.add(`${newNode.x},${newNode.y}`);
                    q.push(newNode);
                    newNode.prev = curNode;
                    
                    if (newNode.x == end[0] && newNode.y == end[1])
                        return newNode;
                }
            }
        }
    }
}

function displayBoard(board) {
    const boardDiv = document.querySelector('.board');
    boardDiv.style.height = `${board[0].length * 64}px`;
    boardDiv.style.width = `${board[0].length * 64}px`;

    for (let r = 0; r < board.length; r++) {
        const square = createSquare(r, 0);
        square.style.backgroundColor = r % 2 == 0 ? MEDIUM_COLOR : DARK_COLOR;
        boardDiv.appendChild(square);

        for (let c = 1; c < board[0].length; c++) {
            const square = createSquare(r, c);
            square.style.backgroundColor = boardDiv.lastChild.style.backgroundColor == MEDIUM_COLOR ? DARK_COLOR : MEDIUM_COLOR;
            
            boardDiv.appendChild(square);
        }
    }

    function createSquare(row, col) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.id = `s${row}-${col}`;
        square.style.height = '64px';
        square.style.width = '64px';

        square.addEventListener('click', () => {
            if (localStorage.getItem('active-marker') == 'start') {
                const knightIcon = document.createElement('img');
                knightIcon.src = './assets/chess-knight.png';

                while (square.firstChild) {
                    square.removeChild(square.firstChild);
                }

                square.appendChild(knightIcon);

                localStorage.setItem('start', square.id);

            } else if (localStorage.getItem('active-marker') == 'end') {
                const markerIcon = document.createElement('img');
                markerIcon.src = './assets/map-marker.png';

                while (square.firstChild) {
                    square.removeChild(square.firstChild);
                }

                square.appendChild(markerIcon);

                localStorage.setItem('end', square.id);

                const startCoords = [parseInt(localStorage.getItem('start')[1]), parseInt(localStorage.getItem('start')[3])];
                const endCoords = [parseInt(square.id[1]), parseInt(square.id[3])];
                console.log(startCoords, endCoords);
                const solutionNode = knightMoves(board, startCoords, endCoords);
                console.log(solutionNode);

                const pathList = solutionNode.getPathList();
                for (let i = 0; i < pathList.length; i++) {
                    console.log(pathList[i]);
                    const pathSquare = document.querySelector(`#s${pathList[i][0]}-${pathList[i][1]}`);

                    console.log(pathSquare);

                    const marker = document.createElement('img');
                    marker.src = './assets/alpha-x.png';
                    pathSquare.appendChild(marker);
                }
                console.log(`Got to end in ${solutionNode.pathLength()} moves!`, solutionNode.toString());
                console.log('Final board: ', JSON.parse(JSON.stringify(board)));
            }
        });

        return square;
    }
}

function registerFormListener() {
    localStorage.setItem('active-marker', 'start');
    
    const inputs = document.querySelectorAll('input');
    for (const input of inputs) {
        input.addEventListener('change', () => {
            localStorage.setItem('active-marker', input.id);
        });
    }
}

function game() {
    const board = createBoard(8, 8);
    // const start = [4, 1], end = [5, 6];
    // console.log('Starting board: ', JSON.parse(JSON.stringify(board)));
    displayBoard(board);

    registerFormListener()

    // const solutionNode = knightMoves(board, start, end);
    // const pathList = solutionNode.getPathList();
    // for (let i = 0; i < pathList.length; i++) {
    //     board[pathList[i][0]][pathList[i][1]] = i;
    // }
    // console.log(`Got to end in ${solutionNode.pathLength()} moves!`, solutionNode.toString());
    // console.log('Final board: ', JSON.parse(JSON.stringify(board)));
}

game();