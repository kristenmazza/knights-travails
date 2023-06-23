export default class Knight {
  constructor(current) {
    this.possibleMoves = this.nextPossibleMoves(current);
    this.place = current;
    this.previous = null;
    this.distance = null;
  }

  possibleMoves = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
  ];

  nextPossibleMoves(current) {
    let nextPossibleMoves = [];
    this.possibleMoves.forEach((possibleMove) => {
      nextPossibleMoves.push([
        possibleMove[0] + current[0],
        possibleMove[1] + current[1],
      ]);
    });

    const availableMoves = nextPossibleMoves.filter(
      (i) => i[0] >= 0 && i[0] <= 7 && i[1] >= 0 && i[1] <= 7
    );

    return availableMoves;
  }
}
