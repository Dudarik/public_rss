import { formatTime, incrementTimer } from "../helpers/index.js";
import { store } from "../store.js";
import { loadFromLS, saveToLS } from "./localstorage.js";
import { renderMoves, renderTime } from "./render.js";

import soundWinGame from "../../sound/wingame.mp3";

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
  store.movesCount += 1;
  renderMoves();
};

export const checkWin = () => {
  return store.gameArray.flat().join("") === store.gameWinArray.flat().join("");
};

export const onWin = () => {
  clearInterval(store.gameTimerId);
  store.inGame = false;
  // console.log(store.movesCount);
  if (store.gameSettings.sound) new Audio(soundWinGame).play();
  const $popupOverlay = document.querySelector(".popup_overlay");
  const $popupCard = document.querySelector(".popup_card");

  $popupCard.innerHTML = "";

  const victoryDiv = document.createElement("div");
  victoryDiv.classList.add("victory_title");

  $popupCard.innerHTML = `
    <h3 class='victory_title'>!!! VICTORY !!!</h3>
    <div class='victory_subtitle'>Hooray! You solved the puzzle in ${formatTime(
      store.playTime
    )} and ${store.movesCount} moves!</div>
  `;
  const newPopupClose = document.createElement("div");

  newPopupClose.classList.add("close_popup");

  newPopupClose.addEventListener("click", () => {
    $popupOverlay.classList.remove("popup_overlay_active");
  });

  $popupCard.append(newPopupClose);

  if (
    store.movesCount <
    store.records[store.gameSettings.currentBoardSize][9].movesCount
  ) {
    const newinput = document.createElement("input");

    const newDivRec = document.createElement("div");
    newDivRec.classList.add("newrecord_title");

    const newH4 = document.createElement("h4");
    newH4.innerText = "Congratulations! This is a new record!";

    const br = document.createElement("br");

    const newSpan = document.createElement("span");
    newSpan.innerText = "Enter your name:";

    $popupCard.append(newDivRec, newH4, br, newSpan);

    newinput.type = "text";
    newinput.className = "record_name";
    newinput.placeholder = "Input your name here... max 10 symbols";
    newinput.onkeydown = (event) => {
      if (newinput.value.length > 8)
        newinput.value = newinput.value.slice(0, 8);

      if (event.key === "Enter") {
        saveRecord(newinput.value);
        $popupOverlay.classList.remove("popup_overlay_active");
      }
    };
    const savebutton = document.createElement("button");
    savebutton.innerText = "SAVE";
    savebutton.classList.add("btnRecords_save");

    savebutton.addEventListener("click", () => {
      saveRecord(newinput.value);
      $popupOverlay.classList.remove("popup_overlay_active");
    });
    $popupCard.append(newinput, savebutton);
  }
  $popupOverlay.classList.add("popup_overlay_active");
};

export const saveRecord = (name, fakeData = false) => {
  const bSize = store.gameSettings.currentBoardSize;

  let { movesCount, playTime } = store;

  if (fakeData) {
    movesCount = 10000;
    playTime = 4000;
  }

  // console.log(store.records[bSize]);
  // debugger;
  store.records[bSize].push({ name, movesCount, playTime });
  store.records[bSize].sort((a, b) => a.movesCount - b.movesCount);

  store.records[bSize] = store.records[bSize].slice(0, 10);

  // console.log(store.records[bSize]);
  saveToLS(store.ls_key_records, store.records);
};

export const loadRecordsFromLS = () => {
  const lsrec = loadFromLS(store.ls_key_records);
  if (lsrec) store.records = lsrec;
};

export const getRecords = (bSize) => {
  const currRecordsArr = store.records[bSize];

  // const newResTime = document.createElement("div");

  const getStrRecord = (num, name, moves, time) => {
    const newResNumber = document.createElement("div");
    const newResName = document.createElement("div");
    const newResMoves = document.createElement("div");
    const newResTime = document.createElement("div");

    newResNumber.classList.add("records_num");
    newResName.classList.add("records_name");
    newResMoves.classList.add("records_moves");
    newResTime.classList.add("records_time");

    newResNumber.innerText = num;
    newResName.innerText = name;
    newResMoves.innerText = moves;
    newResTime.innerText = time;

    return [newResNumber, newResName, newResMoves, newResTime];
  };

  const retArr = [];

  const headerTable = getStrRecord("№", "NAME", "MOVES", "TIME");
  const newHeadStr = document.createElement("div");

  newHeadStr.classList.add("record_str");
  newHeadStr.append(...headerTable);
  retArr.push(newHeadStr);

  for (let i = 0; i < currRecordsArr.length; i++) {
    const newStr = document.createElement("div");

    newStr.classList.add("record_str");

    const str = getStrRecord(
      i + 1,
      currRecordsArr[i].name,
      currRecordsArr[i].movesCount,
      formatTime(currRecordsArr[i].playTime)
    );

    // newStr.innerText = `${currRecordsArr[i].name} | ${
    //   currRecordsArr[i].movesCount
    // } | ${formatTime(currRecordsArr[i].playTime)}`;
    newStr.append(...str);
    retArr.push(newStr);
    // newRecordTable.append(newStr);
  }
  return retArr;
};

export const saveSettingsToLS = () => {
  const saveSettingsObj = {
    sound: store.gameSettings.sound,
    currentBoardSize: store.gameSettings.currentBoardSize,
  };
  saveToLS(store.ls_key_settings, saveSettingsObj);
};

export const gamePause = () => {
  if (store.gameTimerId) {
    clearInterval(store.gameTimerId);
    store.gameTimerId = null;
  }
};

export const gameResume = () => {
  store.gameTimerId = setInterval(() => {
    store.playTime = incrementTimer(store.playTime);
    renderTime();
  }, 1000);
};
