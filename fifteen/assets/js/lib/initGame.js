import { store } from "../store.js";
import { generateGameArrays } from "./genArrays.js";
import {
  handleBoard,
  handleBoardMouseDown,
  handleBoardMouseUp,
  handlePause,
  handleSelect,
  handleStart,
} from "./handlers.js";
import { isLSAvailabel } from "./localstorage.js";

export const initContainer = () => {
  const newContainer = document.createElement("div");
  newContainer.classList.add("container");
  document.body.innerHTML = "";
  document.body.append(newContainer);
  return newContainer;
};

export const initButtons = () => {
  const options = store.gameSettings.boardSizes;
  // console.log(options);
  const newDiv = document.createElement("div");

  newDiv.classList.add("buttons");

  const newSelect = document.createElement("select");

  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    // console.log(options[i]);
    option.setAttribute("value", options[i]);
    if (options[i] === store.gameSettings.currentBoardSize)
      option.setAttribute("selected", true);
    option.innerText = `${options[i]} X ${options[i]}`;
    newSelect.append(option);
  }

  newSelect.addEventListener("change", handleSelect);

  newDiv.append(newSelect);

  const btnShuffleStart = document.createElement("button");
  const btnSoundOn = document.createElement("button");
  const btnPause = document.createElement("button");
  const btnSave = document.createElement("button");
  const btnResults = document.createElement("button");

  btnShuffleStart.innerText = "Shuffle and start";
  btnSoundOn.innerText = "Sound ON";
  btnPause.innerText = "Pause OFF";
  btnSave.innerText = "Save";
  btnResults.innerText = "Results";

  btnPause.setAttribute("id", "btnpause");

  btnShuffleStart.addEventListener("click", handleStart);
  btnPause.addEventListener("click", handlePause);

  newDiv.append(btnShuffleStart, btnSoundOn, btnPause, btnSave, btnResults);

  return newDiv;
  // const c = document.querySelector(".container");
  // c.append(newDiv);
};

const initStat = (title, value, classlist) => {
  const newDiv = document.createElement("span");
  newDiv.classList.add(...classlist);
  newDiv.innerText = `${title}: ${value}`;
  return newDiv;
};

const initStats = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("stats");
  const moves = initStat("Moves", 0, ["moves_count"]);
  const time = initStat("Time", "00:00:00", ["play_time"]);
  newDiv.append(moves, time);
  return newDiv;
};

const initBoard = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("board");
  newDiv.setAttribute("id", "board");
  newDiv.addEventListener("mousedown", handleBoardMouseDown);
  newDiv.addEventListener("mouseup", handleBoardMouseUp);
  return newDiv;
};

export const initGame = () => {
  store.ls_available = isLSAvailabel();

  if (store.ls_available) generateGameArrays();

  const mainContainer = initContainer();
  mainContainer.append(initButtons(), initStats(), initBoard());
};
