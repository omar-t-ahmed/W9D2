import View from "./ttt-view.js"
import Game from "../ttt_node/game.js"

document.addEventListener("DOMContentLoaded", () => {
  let figure = document.querySelector("figure");

  let game = new Game();
  let view = new View();
  figure.setupBoard();
});