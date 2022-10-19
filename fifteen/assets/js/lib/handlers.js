import { incrementTimer, shuffle } from "../helpers/index.js";
import { store } from "../store.js";
import { renderTime } from "./render.js";

export const handleStart = () => {
  if (store.gameTimerId) {
    clearInterval(store.gameTimerId);
    store.playTime = 0;
  }

  store.gameArray = shuffle(store.gameArray);
  store.inGame = true;

  store.gameTimerId = setInterval(() => {
    store.playTime = incrementTimer(store.playTime);
    renderTime();
  }, 1000);
  store.inGame = true;
};
