import { store } from "../store.js";

export const generateGameArrays = () => {
  const bSize = store.gameSettings.currentBoardSize;

  store.gameArray = [];
  store.gameWinArray = [];

  for (let i = 0; i < bSize; i++) {
    const row = [];
    for (let j = 0; j < bSize; j++) {
      row.push(i * bSize + j + 1);
    }
    store.gameArray.push(row);
  }
  store.gameArray[bSize - 1][bSize - 1] = 0;
  // console.log(store.gameArray.slice());

  for (let i = 0; i < store.gameArray.length; i++) {
    store.gameWinArray.push([...store.gameArray[i]]);
  }
};
