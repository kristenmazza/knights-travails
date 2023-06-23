const offsetMoves = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

export default class Node {
  constructor(current) {
    this.coordinates = current;
    this.path = [];
  }

  // Returns an array of the next available moves of a node
  nextAvailableMoves() {
    let nextPossibleMoves = [];

    // Creates array of possible moves by offsetting the node's coordinates the 8 different ways a knight can move
    offsetMoves.forEach((offsetMove) => {
      nextPossibleMoves.push([
        offsetMove[0] + this.coordinates[0],
        offsetMove[1] + this.coordinates[1],
      ]);
    });

    // Filters out moves from nextPossibleMoves that are off the 8x8 board
    const availableMoves = nextPossibleMoves.filter(
      (i) => i[0] >= 0 && i[0] <= 7 && i[1] >= 0 && i[1] <= 7
    );

    return availableMoves;
  }
}
