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
    this.nextMoves = [];
    this.path = [];
  }

  nextAvailableMoves() {
    let nextPossibleMoves = [];
    offsetMoves.forEach((offsetMove) => {
      nextPossibleMoves.push([
        offsetMove[0] + this.coordinates[0],
        offsetMove[1] + this.coordinates[1],
      ]);
    });

    const availableMoves = nextPossibleMoves.filter(
      (i) => i[0] >= 0 && i[0] <= 7 && i[1] >= 0 && i[1] <= 7
    );

    return availableMoves;
  }
}
