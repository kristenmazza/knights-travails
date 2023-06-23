import Node from "./node.js";

export default function knightMoves(root, target) {
  if (!root || !target) return;

  let start = new Node(root);
  let queue = [];
  queue.push(start);

  // Add the starting node's coordinates to the node's path
  start.path.push(start.coordinates);

  while (queue.length > 0) {
    let currentPosition = queue.shift();

    // Find the next available moves for the currentPosition
    const availableMoves = currentPosition.nextAvailableMoves();

    // For each available move, do:
    for (let i = 0; i < availableMoves.length; i++) {
      const move = availableMoves[i];

      // Create a new node for the next available move
      const nextMove = new Node(move);

      // Push the next move into the queue
      queue.push(nextMove);

      // Push the currentPosition's path combined with coordinates of the next move to nextMove's path array
      // to keep track of the path to the target
      nextMove.path.push(...currentPosition.path, move);

      // If the target coordinates equal the next move's coordinates, print the path
      // and return
      if (target[0] === move[0] && target[1] === move[1]) {
        console.log(
          `=> You made it in ${
            nextMove.path.length - 1
          } moves! Here's your path:`
        );
        nextMove.path.forEach((coord) => console.log(coord));
        return nextMove;
      }
    }
  }
}

knightMoves([1, 3], [5, 6]);
// => You made it in 3 moves! Here's your path:
// [ 1, 3 ]
// [ 2, 5 ]
// [ 3, 7 ]
// [ 5, 6 ]

knightMoves([3, 3], [4, 3]);
// => You made it in 3 moves! Here's your path:
// [ 3, 3 ]
// [ 1, 2 ]
// [ 2, 4 ]
// [ 4, 3 ]

knightMoves([0, 0], [7, 7]);
// => You made it in 6 moves! Here's your path:
// [ 0, 0 ]
// [ 1, 2 ]
// [ 0, 4 ]
// [ 1, 6 ]
// [ 3, 7 ]
// [ 5, 6 ]
// [ 7, 7 ]
