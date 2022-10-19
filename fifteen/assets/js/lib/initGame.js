import { store } from "../store.js";
import { isLSAvailabel } from "./localstorage.js";

const generateGameArray = () => {
  const bSize = store.gameSettings.currentBoardSize;

  for (let i = 0; i < bSize; i++) {
    const row = [];
    for (let j = 0; j < bSize; j++) {
      row.push(i * bSize + j + 1);
    }
    store.gameArray.push(row);
  }
  store.gameArray[bSize - 1][bSize - 1] = 0;

  store.gameWinArray = store.gameArray.slice();
};

export const initGame = () => {
  store.ls_available = isLSAvailabel();

  if (store.ls_available) generateGameArray();

  console.log(store);
};
