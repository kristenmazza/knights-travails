import Knight from "./knight.js";
import Tree from "./tree.js";

let current = [1, 3];
let tree = new Tree(current, [2, 3]);
// console.log(tree.root);
// console.log(tree.buildTree());
// console.log(knight.possibleMoves);
tree.knightMoves();
