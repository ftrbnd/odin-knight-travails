export class Node {
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