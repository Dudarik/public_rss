import { store } from "../store.js";
import { gameResume, loadRecordsFromLS } from "./gameFunc.js";
import { generateGameArrays } from "./genArrays.js";
import {
  // handleBoard,
  handleBoardMouseDown,
  handleBoardMouseUp,
  handleCheat,
  handleLoadGame,
  handleRecordClick,
  // handleDocumentMouseMove,
  // handleDocumentMouseUp,
  // handlePause,
  handleSaveGame,
  handleSelect,
  handleSound,
  handleStart,
} from "./handlers.js";
import { isLSAvailabel, loadFromLS } from "./localstorage.js";

export const initContainer = () => {
  const newContainer = document.createElement("div");
  newContainer.classList.add("container");

  const newOverlay = document.createElement("div");
  newOverlay.classList.add("popup_overlay"); //popup_overlay_active
  newOverlay.setAttribute("id", "popup_overlay");

  // const newPopupContent = document.createElement("div");
  // newPopupContent.classList.add("popup_content");

  const newPopupClose = document.createElement("div");
  newPopupClose.classList.add("close_popup");

  const newPopupCard = document.createElement("div");
  newPopupCard.classList.add("popup_card");

  newOverlay.addEventListener("click", (event) => {
    // console.log(event.target);
    if (!(event.target.id === "popup_overlay")) return;
    // testimonialsSliderCards.removeEventListener('click', handleOpenPopup)

    event.stopPropagation();
    event.preventDefault();

    // console.log(event.target.id);

    newOverlay.classList.remove("popup_overlay_active");
    if (store.inGame) gameResume();
  });

  newPopupClose.addEventListener("click", () => {
    newOverlay.classList.remove("popup_overlay_active");
    if (store.inGame) gameResume();
  });

  newPopupCard.append(newPopupClose);

  // newPopupContent.append(newPopupCard);

  newOverlay.append(newPopupCard);

  newContainer.append(newOverlay);

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
      option.selected = true;
    // option.setAttribute("selected", true);
    option.innerText = `${options[i]} X ${options[i]}`;
    newSelect.append(option);
  }

  newSelect.setAttribute("id", "boardsize");

  newSelect.addEventListener("change", handleSelect);

  newDiv.append(newSelect);

  const btnShuffleStart = document.createElement("button");
  const btnSoundOn = document.createElement("button");
  // const btnPause = document.createElement("button");
  const btnSave = document.createElement("button");
  const btnLoad = document.createElement("button");
  const btnResults = document.createElement("button");

  btnShuffleStart.innerText = "Shuffle and start";
  btnSoundOn.innerText = store.gameSettings.sound ? "Sound ON" : "Sound OFF";
  // btnPause.innerText = "Pause OFF";
  btnSave.innerText = "Save";
  btnLoad.innerText = "Load";
  btnResults.innerText = "Results";

  if (!store.gameSettings.sound) btnSoundOn.classList.add("btn_sound_disable");
  // btnPause.setAttribute("id", "btnpause");

  btnShuffleStart.addEventListener("click", handleStart);
  // btnPause.addEventListener("click", handlePause);
  btnSoundOn.addEventListener("click", handleSound);
  btnSave.addEventListener("click", handleSaveGame);
  btnLoad.addEventListener("click", handleLoadGame);
  btnResults.addEventListener("click", handleRecordClick);

  newDiv.append(btnShuffleStart, btnSoundOn, btnSave, btnLoad, btnResults);

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

const initCheatModeCheckbox = () => {
  const labelFor = document.createElement("label");
  labelFor.setAttribute("for", "cheat");
  labelFor.innerText = "cheat mode";
  labelFor.classList.add("cheat_mode");
  labelFor.title =
    "Включи этот режим, чтобы уменшить количество перемешиваний. И нажми старт!";

  const newInput = document.createElement("input");
  newInput.type = "checkbox";
  newInput.id = "cheat";
  newInput.checked = store.cheatMode;
  newInput.addEventListener("change", handleCheat);
  labelFor.append(newInput);
  return labelFor;
};

const initStats = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("stats");
  const moves = initStat("Moves", 0, ["moves_count"]);
  const time = initStat("Time", "00:00", ["play_time"]);
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

  if (store.ls_available) {
    const loadSettingsObj = loadFromLS(store.ls_key_settings);
    if (loadSettingsObj) {
      store.gameSettings.sound = loadSettingsObj.sound;
      store.gameSettings.currentBoardSize = +loadSettingsObj.currentBoardSize;
    }
  }

  loadRecordsFromLS();
  generateGameArrays();

  const mainContainer = initContainer();
  mainContainer.append(
    initButtons(),
    initStats(),
    initBoard(),
    initCheatModeCheckbox()
  );
};
