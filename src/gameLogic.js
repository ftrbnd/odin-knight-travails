import { Node } from "./Node";

export function createBoard(rows, cols) {
    const board = [];
    for (let r = 0; r < rows; r++) {
        board.push([]);
        for (let c = 0; c < cols; c++) {
            board[r].push('_');
        }
    }
    return board;
}

export function knightMoves(board, start, end) { // start = [x, y]; end = [x, y];
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