import Node from "./node.js";

export default class Tree {
  constructor(current, target) {
    this.root = new Node(current);
    this.target = target;
  }

  knightMoves(root = this.root, target = this.target) {
    if (root === null) return;

    let queue = [];
    queue.push(root);

    // Add the starting node to the node's path
    root.path.push(root.coordinates);

    while (queue.length > 0) {
      let currentPosition = queue.shift();

      // Find the next available moves for the currentPosition
      const availableMoves = currentPosition.nextAvailableMoves();

      // For each available move, do:
      for (let i = 0; i < availableMoves.length; i++) {
        const move = availableMoves[i];

        // Create a new node for the next available move
        const nextMove = new Node(move);

        // Store the next move in the currentPosition's nextMoves array
        currentPosition.nextMoves.push(nextMove);

        // Push the next move into the queue
        queue.push(nextMove);

        // Push the currentPosition's path and the next move to nextMove's path array
        // to keep track of the path to the target
        nextMove.path.push(...currentPosition.path, move);

        // If the target coordinates equal the next move's coordinates, print the path
        // and return
        if (target[0] === move[0] && target[1] === move[1]) {
          console.log(nextMove.path);
          return nextMove;
        }
      }
    }
  }
}
