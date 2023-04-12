class Node {
    constructor(x, y, prev = null) {
        this.x = x;
        this.y = y;
        this.prev = prev;
    }

    pathLength() {
        let node = this;
        let size = 0;
        while (node.prev) {
            node = node.prev;
            size++;
        }
        return size;
    }

    getPathList() {
        const res = [];
        let node = this;
        while (node) {
            res.push([node.x, node.y]);
            node = node.prev;
        }
        return res.reverse();
    }

    toString() {
        const list = this.getPathList();
        let res = '';
        for (let i = 0; i < list.length; i++) {
            const [x, y] = [list[i][0], list[i][1]];
            res += i == list.length - 1 ? `[${x},${y}]` : `[${x},${y}] -> `;
        }
        return res;
    }
}

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

function game() {
    const board = createBoard(8, 8);
    const start = [4, 1], end = [5, 6];
    console.log('Starting board: ', JSON.parse(JSON.stringify(board)));

    const solutionNode = knightMoves(board, start, end);
    const pathList = solutionNode.getPathList();
    for (let i = 0; i < pathList.length; i++) {
        board[pathList[i][0]][pathList[i][1]] = i;
    }
    console.log(`Got to end in ${solutionNode.pathLength()} moves!`, solutionNode.toString());
    console.log('Final board: ', JSON.parse(JSON.stringify(board)));
}

game();