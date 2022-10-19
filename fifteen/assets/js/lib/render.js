import { store } from "../store.js";
export const render = () => {
  const bSize = store.gameSettings.currentBoardSize;
  const data = store.gameArray;
};

export const renderBoard = () => {
  const bSize = store.gameSettings.currentBoardSize;
  const countCells = bSize * bSize;
  const data = store.gameArray.flat();
  const board = document.getElementById("board");
  const cells = [];

  for (let i = 0; i < countCells; i++) {
    const newCell = document.createElement("div");
    newCell.id = `cell_${data[i]}`;
    newCell.classList.add("cell", `cell_${bSize}_${bSize}`);
    newCell.innerText = data[i];
    cells.push(newCell);
  }
  board.innerHTML = "";
  board.append(...cells);
};
