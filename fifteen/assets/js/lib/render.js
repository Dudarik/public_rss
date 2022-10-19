import { formatTime } from "../helpers/index.js";
import { store } from "../store.js";
import { initGame } from "./initGame.js";

export const renderBoard = () => {
  const bSize = store.gameSettings.currentBoardSize;
  const countCells = bSize * bSize;
  const data = store.gameArray.flat();
  const board = document.getElementById("board");
  const cells = [];
  // board.innerHTML = "";
  console.log(store);
  board.className = "";
  board.classList.add("board", `board_${bSize}_${bSize}`);

  for (let i = 0; i < countCells; i++) {
    const newCell = document.createElement("div");
    newCell.id = `cell_${data[i]}`;
    newCell.classList.add("cell"); //`cell_${bSize}_${bSize}`
    if (data[i] === 0) newCell.classList.add("dropable");
    newCell.innerText = data[i];
    cells.push(newCell);
  }
  board.innerHTML = "";
  board.append(...cells);
};

export const renderMoves = () => {
  const moves = document.querySelector(".moves_count");
  moves.innerText = `Moves: ${store.movesCount}`;
};
export const renderTime = () => {
  const palyTime = document.querySelector(".play_time");
  palyTime.innerText = `Time: ${formatTime(store.playTime)}`;
};

export const initRender = () => {
  initGame();
  renderBoard();
};
