import { formatTime, incrementTimer } from "../helpers/index.js";
import { store } from "../store.js";
import { loadFromLS, saveToLS } from "./localstorage.js";
import { renderMoves, renderTime } from "./render.js";

export const startGame = () => {
  store.gameTimerId = setInterval(() => {
    store.playTime = incrementTimer(store.playTime);
    renderTime();
  }, 1000);
  store.inGame = true;
};

export const stopGame = () => {
  if (store.gameTimerId) clearInterval(store.gameTimerId);

  store.inGame = false;
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

export const movesIncrement = () => {
  console.log("incr");
  store.movesCount += 1;
  renderMoves();
};

export const checkWin = () => {
  return store.gameArray.flat().join("") === store.gameWinArray.flat().join("");
};

export const onWin = () => {
  clearInterval(store.gameTimerId);
  store.inGame = false;
  console.log(store.movesCount);

  if (
    store.movesCount <
    store.records[store.gameSettings.currentBoardSize][9].movesCount
  ) {
    const $popupOverlay = document.querySelector(".popup_overlay");
    const $popupCard = document.querySelector(".popup_card");

    const newinput = document.createElement("input");
    newinput.type = "text";
    newinput.className = "name";
    newinput.onchange = () => {
      if (newinput.value > 3) newinput.value = newinput.value.slice(0, 3);
    };
    const savebutton = document.createElement("button");
    savebutton.innerText = "SAVE";
    savebutton.addEventListener("click", () => {
      saveRecord(newinput.value);
      $popupOverlay.classList.remove("popup_overlay_active");
    });
    $popupCard.innerHTML = "";
    $popupCard.append(newinput, savebutton);

    $popupOverlay.classList.add("popup_overlay_active");
  }
};

export const saveRecord = (name) => {
  const bSize = store.gameSettings.currentBoardSize;

  const { movesCount, playTime } = store;

  console.log(store.records[bSize]);
  // debugger;
  store.records[bSize].push({ name, movesCount, playTime });
  store.records[bSize].sort((a, b) => a.movesCount - b.movesCount);

  store.records[bSize] = store.records[bSize].slice(0, 10);

  console.log(store.records[bSize]);
  saveToLS(store.ls_key_records, store.records);
};

export const loadRecordsFromLS = () => {
  const lsrec = loadFromLS(store.ls_key_records);
  if (lsrec) store.records = lsrec;
};

export const getRecords = (bSize) => {
  const currRecordsArr = store.records[bSize];

  const retArr = [];

  for (let i = 0; i < currRecordsArr.length; i++) {
    const newStr = document.createElement("div");

    newStr.classList.add("record_str");
    newStr.innerText = `${currRecordsArr[i].name} | ${
      currRecordsArr[i].movesCount
    } | ${formatTime(currRecordsArr[i].playTime)}`;
    retArr.push(newStr);
    // newRecordTable.append(newStr);
  }
  return retArr;
};
