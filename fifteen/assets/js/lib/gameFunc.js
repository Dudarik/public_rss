import { store } from "../store.js";
import { renderMoves, renderTime } from "./render.js";

export const stopGame = () => {
  if (store.gameTimerId) clearInterval(store.gameTimerId);

  store.playTime = 0;
  store.movesCount = 0;
  store.gameTimerId = null;
  renderMoves();
  renderTime();
};

export const moveCell = (element, moveTo) => {
  element.classList.add(`move_${moveTo}`);
};
