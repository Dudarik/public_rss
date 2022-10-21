import {
  incrementTimer,
  isCellShift,
  shuffle,
  swap,
} from "../helpers/index.js";
import { store } from "../store.js";
import { moveCell, endMoveCell, stopGame } from "./gameFunc.js";
import { generateGameArrays } from "./genArrays.js";
import { renderBoard, renderTime } from "./render.js";

export const handleStart = () => {
  if (store.inGame) stopGame();

  document.querySelector("#btnpause").innerText = "Pause OFF";

  console.log(store.gameArray);

  store.gameArray = shuffle(store.gameArray);
  store.inGame = true;
  renderBoard();

  store.gameTimerId = setInterval(() => {
    store.playTime = incrementTimer(store.playTime);
    renderTime();
  }, 1000);
  store.inGame = true;
};

export const handlePause = (event) => {
  if (!store.inGame) return;
  if (store.gameTimerId) {
    clearInterval(store.gameTimerId);
    store.gameTimerId = null;
    // store.inGame = false;
    event.target.innerText = "Pause ON";
  } else {
    store.gameTimerId = setInterval(() => {
      store.playTime = incrementTimer(store.playTime);
      renderTime();
    }, 1000);
    // store.inGame = true;
    event.target.innerText = "Pause OFF";
  }
};

export const handleSelect = (event) => {
  console.log(event.target.value);
  // console.log(store);
  if (store.inGame) stopGame();
  store.gameSettings.currentBoardSize = event.target.value;
  generateGameArrays();
  renderBoard();
};

let timeStart = null;

// const timerId = null;

export const handleBoard = (event) => {
  console.log(event);
};

const handleTransitionEnd = (event) => {
  // console.log("animend");
  const nzcr = event.target.dataset.r;
  const nzcc = event.target.dataset.c;
  const $zero = document.querySelector(".dropable");
  const zcr = $zero.dataset.r;
  const zcc = $zero.dataset.c;

  // console.log(store.gameArray.slice());
  swap(store.gameArray, zcr, zcc, nzcr, nzcc);
  // console.log(store.gameArray.slice());
  endMoveCell(event.target);
  renderBoard();
};

export const handleBoardMouseDown = (event) => {
  const cell = event.target;
  // console.log(event.target);

  timeStart = new Date();
  if (cell) {
    const $cell = document.querySelector(`#${event.target.id}`);
    // console.log($cell);
    $cell.addEventListener("transitionend", handleTransitionEnd);
    // cell.addEventListner("animationend", handleAnimationEnd);
    const shiftSell = isCellShift(
      store.gameArray,
      +cell.dataset.r,
      +cell.dataset.c
    );
    // console.log(shiftSell);
    if (shiftSell) {
      moveCell(event.target, shiftSell.direction);
      removeEventListener("mousedown", handleBoardMouseDown);
    }
  }
};

export const handleBoardMouseUp = (event) => {
  console.log(new Date() - timeStart);
};
