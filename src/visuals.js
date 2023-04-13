import { knightMoves } from "./gameLogic";

const LIGHT_COLOR = '#DDE5ED';
const MEDIUM_COLOR = 'rgb(169, 212, 178)';
const DARK_COLOR = 'rgb(29, 66, 48)';

export function displayBoard(board) {
    const boardDiv = document.querySelector('.board');
    boardDiv.style.height = `${board[0].length * 64}px`;
    boardDiv.style.width = `${board[0].length * 64}px`;

    while (boardDiv.firstChild) {
        boardDiv.removeChild(boardDiv.firstChild);
    }

    for (let r = 0; r < board.length; r++) {
        const square = createSquare(board, r, 0);
        square.style.backgroundColor = r % 2 == 0 ? MEDIUM_COLOR : DARK_COLOR;
        boardDiv.appendChild(square);

        for (let c = 1; c < board[0].length; c++) {
            const square = createSquare(board, r, c);
            square.style.backgroundColor = boardDiv.lastChild.style.backgroundColor == MEDIUM_COLOR ? DARK_COLOR : MEDIUM_COLOR;
            
            boardDiv.appendChild(square);
        }
    }
}

function createSquare(board, row, col) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = `s${row}-${col}`;
    square.style.height = '64px';
    square.style.width = '64px';

    square.addEventListener('click', () => {
        if (localStorage.getItem('active-marker') == 'start') {
            const squares = document.querySelectorAll('.square');
            for (const square of squares) {
                while (square.firstChild) {
                    square.removeChild(square.firstChild);
                }
            }
            const pathText = document.querySelector('.path h2');
            pathText.textContent = '';
                    
            const knightIcon = document.createElement('img');
            knightIcon.src = './assets/chess-knight.png';
            knightIcon.classList.add('knight');

            while (square.firstChild) {
                square.removeChild(square.firstChild);
            }

            square.appendChild(knightIcon);

            localStorage.setItem('start', square.id);

            const endInput = document.querySelector('#end');
            endInput.checked = true;
            localStorage.setItem('active-marker', 'end');

        } else if (localStorage.getItem('active-marker') == 'end') {
            const squares = document.querySelectorAll('.square');
            for (const square of squares) {
                if (square.firstChild && square.firstChild.classList.contains('knight')) {
                    continue;
                }
                
                while (square.firstChild) {
                    square.removeChild(square.firstChild);
                }
            }

            const markerIcon = document.createElement('img');
            markerIcon.src = './assets/map-marker.png';

            while (square.firstChild) {
                square.removeChild(square.firstChild);
            }

            square.appendChild(markerIcon);

            localStorage.setItem('end', square.id);

            const startInput = document.querySelector('#start');
            startInput.checked = true;
            localStorage.setItem('active-marker', 'start');

            const startCoords = [parseInt(localStorage.getItem('start')[1]), parseInt(localStorage.getItem('start')[3])];
            const endCoords = [parseInt(square.id[1]), parseInt(square.id[3])];
            const solutionNode = knightMoves(board, startCoords, endCoords);

            displayPath(solutionNode, board);
        }
    });

    return square;
}

function displayPath(solutionNode, board) {
    const pathList = solutionNode.getPathList();
    for (let i = 0; i < pathList.length; i++) {
        const pathSquare = document.querySelector(`#s${pathList[i][0]}-${pathList[i][1]}`);

        if (i > 0 && i < pathList.length - 1) {
            const marker = document.createElement('img');
            marker.src = './assets/alpha-x.png';
            marker.classList.add('marker');
            pathSquare.appendChild(marker);
        }

        if (i > 0) {
            const pathNumber = document.createElement('p');
            pathNumber.textContent = i;
            pathNumber.classList.add('path-number');
            pathSquare.appendChild(pathNumber);
        }
    }

    const pathText = document.querySelector('.path h2');
    pathText.textContent = `Path: ${solutionNode.toString()}`;

    console.log(`Got to end in ${solutionNode.pathLength()} moves!`, solutionNode.toString());
}

export function registerRadioListeners() {
    localStorage.setItem('active-marker', 'start');
    
    const inputs = document.querySelectorAll('input');
    for (const input of inputs) {
        input.addEventListener('change', () => {
            localStorage.setItem('active-marker', input.id);
        });
    }
}