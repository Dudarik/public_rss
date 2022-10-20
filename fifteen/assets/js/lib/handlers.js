import { incrementTimer, shuffle } from "../helpers/index.js";
import { store } from "../store.js";
import { stopGame } from "./gameFunc.js";
import { generateGameArrays } from "./genArrays.js";
import { renderBoard, renderTime } from "./render.js";

export const handleStart = () => {
  if (store.inGame) stopGame();

  document.querySelector("#btnpause").innerText = "Pause OFF";

  store.gameArray = shuffle(store.gameArray);
  store.inGame = true;

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

export const handleBoard = (event) => {
  console.log(event.target);
};
