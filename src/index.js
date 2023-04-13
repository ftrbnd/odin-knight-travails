import { createBoard, knightMoves } from "./gameLogic";
import { displayBoard, registerRadioListeners } from "./visuals";

function game() {
    const board = createBoard(8, 8);
    displayBoard(board);

    registerRadioListeners();
}

game();