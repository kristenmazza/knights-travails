import Knight from "./knight.js";

const createBoard = () => {
  let board = [];

  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i].push([i, j]);
    }
  }
  return board;
};

const board = createBoard();

let current = [1, 3];
let knight = new Knight(current);

console.log(knight.possibleMoves);
