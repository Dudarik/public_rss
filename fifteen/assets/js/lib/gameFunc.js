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
  store.animationDirection = moveTo;
  element.classList.add(`move_${moveTo}`);
};

export const endMoveCell = (element) => {
  // console.log("endmove", element);
  // console.log(store.animationDirection);
  element.classList.remove(`move_${store.animationDirection}`);
  store.animationDirection = null;
};

export const dragndropStart = () => {
  store.dragndrop = true;
  // console.log("dragstart");
};

export const dragndropEnd = () => {
  store.dragndrop = false;
  // console.log("dragend");
};
