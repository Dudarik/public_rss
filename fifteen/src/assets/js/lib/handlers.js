import { isCellShift, shuffle, swap } from "../helpers/index.js";
import { store } from "../store.js";
import {
  moveCell,
  endMoveCell,
  stopGame,
  dragndropStart,
  dragndropEnd,
  movesIncrement,
  checkWin,
  onWin,
  startGame,
  getRecords,
  saveSettingsToLS,
  gameResume,
  gamePause,
} from "./gameFunc.js";
import { generateGameArrays } from "./genArrays.js";
import { loadFromLS, saveToLS } from "./localstorage.js";
import { renderBoard, renderMoves, renderTime } from "./render.js";

import soundMove from "../../sound/move_fiu.mp3";
import soundStartGame from "../../sound/startgame.mp3";
import soundMoveDnd from "../../sound/move_dnd.mp3";

import soundOpenRecords from "../../sound/openrecords.mp3";
import soundSaveGame from "../../sound/savegame.mp3";
import soundSaveNotWork from "../../sound/savenotwork.mp3";
import soundLoadGame from "../../sound/loadgame.mp3";

export const handleStart = () => {
  stopGame();

  generateGameArrays();

  if (store.gameSettings.sound) new Audio(soundStartGame).play();

  if (store.cheatMode) {
    store.gameArray = shuffle(store.gameArray, 10, true);
    if (store.gameArray.flat().join("") === store.gameWinArray.flat().join(""))
      store.gameArray = shuffle(store.gameArray, 10, true);
  } else {
    store.gameArray = shuffle(store.gameArray);
  }
  store.movesCount = 0;
  store.inGame = true;

  renderBoard();

  startGame();
  document.querySelectorAll(".cell").forEach((item) => {
    item.classList.add("start_cell_anim");
  });
  // document
  //   .querySelectorAll(".cell")
  //   .forEach((item) => item.classList.remove("start_cell_anim"));
};

// export const handlePause = (event) => {
//   if (!store.inGame) return;
//   if (store.gameTimerId) {
//     clearInterval(store.gameTimerId);
//     store.gameTimerId = null;
//     // store.inGame = false;
//     event.target.innerText = "Pause ON";
//   } else {
//     store.gameTimerId = setInterval(() => {
//       store.playTime = incrementTimer(store.playTime);
//       renderTime();
//     }, 1000);
//     // store.inGame = true;
//     event.target.innerText = "Pause OFF";
//   }
// };

export const handleSelect = (event) => {
  // console.log(event.target.value);
  // console.log(store);
  stopGame();

  store.gameSettings.currentBoardSize = event.target.value;
  // const saveSettingsObj = {
  //   sound: store.gameSettings.sound,
  //   currentBoardSize: store.gameSettings.currentBoardSize,
  // };
  // saveToLS(store.ls_key_settings, saveSettingsObj);
  saveSettingsToLS();

  generateGameArrays();
  renderBoard();
};

// let timeStart = null;

// const timerId = null;

// export const handleBoard = (event) => {
//   console.log(event);
// };

const handleTransitionEnd = (event) => {
  // console.log("animend");
  const nzcr = event.target.dataset.r;
  const nzcc = event.target.dataset.c;
  const $zero = document.querySelector(".dropable");
  const zcr = $zero.dataset.r;
  const zcc = $zero.dataset.c;

  // console.log("tEND");
  swap(store.gameArray, zcr, zcc, nzcr, nzcc);
  movesIncrement();
  // console.log(store.gameArray.slice());
  endMoveCell(event.target);
  renderBoard();

  if (checkWin()) {
    // console.log("win");
    onWin();
  }
  const $board = document.querySelector("#board");
  $board.addEventListener("pointerup", handleBoardMouseUp);
};

export const handleBoardMouseDown = (event) => {
  // timeStart = new Date();
  // const $board = document.querySelector("#board");
  // console.log(
  //   isCellShift(
  //     store.gameArray,
  //     +event.target.dataset.r,
  //     +event.target.dataset.c
  //   )
  // );
  if (!store.inGame) return;
  if (
    isCellShift(
      store.gameArray,
      +event.target.dataset.r,
      +event.target.dataset.c
    ) === null
  )
    return;

  dragndropStart();
  const b= document.getElementById('board')
  // b.style.touchAction = 'none'


  // console.log(b)
  // console.log(event.pointerId)

  setTimeout(() => {
    if (!store.dragndrop) return;
    const cell = event.target;
    if (!cell || cell.id === "dropable") return;
    b.setPointerCapture(event.pointerId);
    const $cell = document.querySelector(`#${event.target.id}`);

    let shiftX = event.clientX - $cell.getBoundingClientRect().left;
    let shiftY = event.clientY - $cell.getBoundingClientRect().top;

    const dragCopy = document.createElement("div");
    dragCopy.classList.add("cell");
    dragCopy.innerHTML = $cell.innerHTML;
    dragCopy.style.cursor = "grabbing";
    dragCopy.style.width = $cell.getBoundingClientRect().width + "px";
    dragCopy.style.height = $cell.getBoundingClientRect().height + "px";

    document.body.append(dragCopy);

    dragCopy.style.touchAction = 'none'


    dragCopy.style.position = "absolute";
    dragCopy.style.zIndex = 1000;
    dragCopy.style.opacity = 0.75;
    dragCopy.style.fontSize =
      store.gameSettings.currentBoardSize < 6 ? "2rem" : "1rem";

    store.dragableStartPosX = $cell.getBoundingClientRect().left;
    store.dragableStartPosY = $cell.getBoundingClientRect().top;
    // console.log(store.dragableStartPosX);




    const dndMoveAt = (pageX, pageY) => {
      const cellWidth =$cell.getBoundingClientRect().width
      const cellHeight =$cell.getBoundingClientRect().height

      const maxDocX = document.documentElement.clientWidth - cellWidth/2
      const maxDocY = document.documentElement.clientHeight - cellHeight/2
      // const winSize = window.
      // console.log(winSize, '1')
      // console.log(pageX, pageY, maxDocX, maxDocY)
      if (pageX < maxDocX && pageX > cellWidth/2)
      dragCopy.style.left = pageX - shiftX + "px";
      if (pageY < maxDocY && pageY > cellHeight/2)
      dragCopy.style.top = pageY - shiftY + "px";
    };

    let currentDroppable = null;

    const enterDroppable = (elem) => {
      store.inDropable = true;
      elem.style.background = "#e2f5fc";
      elem.style.opacity = 0.2;
    };

    const leaveDroppable = (elem) => {
      store.inDropable = false;
      elem.style.background = "";
      elem.style.opacity = 0;
    };

    const handleMouseMove = (event) => {
      dndMoveAt(event.pageX, event.pageY);
      b.releasePointerCapture(event.pointerId)
      dragCopy.classList.add("displaynone");
      // console.log(dragCopy);
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      dragCopy.classList.remove("displaynone");

      // console.log(elemBelow);

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest("#dropable");
      // console.log(droppableBelow);

      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }

        currentDroppable = droppableBelow;

        if (currentDroppable) {
          enterDroppable(currentDroppable);
        }
      }
    };

    const handleMouseUp = (event) => {
      // console.log("mousseUP");

      const cellDisappears = (event) => {
        event.target.classList.remove("disappears");
      };

      if (store.inDropable) {
        const dropable = document.querySelector("#dropable");
        // console.log(
        //   dropable.getBoundingClientRect(),
        //   dragCopy.getBoundingClientRect()
        // );
        store.dragableStartPosX = dropable.getBoundingClientRect().left;
        store.dragableStartPosY = dropable.getBoundingClientRect().top;
        // console.log($cell);
        $cell.classList.add("disappears");
      }

      store.dragableEndPosX = dragCopy.getBoundingClientRect().left;
      store.dragableEndPosY = dragCopy.getBoundingClientRect().top;

      dragCopy.style.transition = `all ${store.animationDropableTime}ms`;
      dragCopy.style.transform = `translate(${
        store.dragableStartPosX - store.dragableEndPosX
      }px, ${store.dragableStartPosY - store.dragableEndPosY}px)`;
      // console.log(store);

      setTimeout(() => {
        // dragndropEnd();
        dragCopy.remove();

        if (store.inDropable) {
          //-----------------
          // console.log($cell);
          $cell.addEventListener("transitionend", cellDisappears);
          // console.log($cell);
          $cell.removeEventListener("transitionend", cellDisappears);
          // console.log($cell);
          //-------------------
          const nzcr = $cell.dataset.r;
          const nzcc = $cell.dataset.c;
          const $zero = document.querySelector("#dropable");
          const zcr = $zero.dataset.r;
          const zcc = $zero.dataset.c;

          swap(store.gameArray, zcr, zcc, nzcr, nzcc);

          if (store.gameSettings.sound) new Audio(soundMoveDnd).play();
          movesIncrement();

          renderBoard();

          if (checkWin()) {
            // console.log("win");
            onWin();
          }

          leaveDroppable(currentDroppable);
        }
      }, store.animationDropableTime);
      // store.inDropable = false;
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener('pointerup',handleMouseUp)
      dragCopy.removeEventListener("pointerup", handleMouseUp);
    };

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener('pointerup',handleMouseUp)
    dragCopy.addEventListener("pointerup", handleMouseUp);

    // dragCopy.remove();
    dndMoveAt(event.pageX, event.pageY);
    dragndropEnd();
  }, 150);

  // clearTimeout(timerId);
};

// export const handleDocumentMouseMove = (event) => {
//   // console.log(store.dragndrop);
//   // if (store.dragndrop) console.log(new Date() - timeStart);
//   if (!store.dragndrop) return;
// };

// export const handleDocumentMouseUp = (event) => {
//   console.log("document mouse up", store.dragndrop);
//   dragndropEnd(event.target);
// };

export const handleBoardMouseUp = (event) => {
  // console.log(new Date() - timeStart);
  // console.log(store.dragndrop);
  if (!store.inGame) return;
  dragndropEnd();
  // console.log("board mouse up", store.dragndrop);
  // if (!store.dragndrop) {
  const cell = event.target;

  if (cell) {
    // const $board = document.querySelector("#board");
    const $cell = document.querySelector(`#${event.target.id}`);
    // console.log($cell);
    if ($cell.id === "dropable" || $cell.id === "board") return;

    // console.log("no board or dropable");
    $cell.addEventListener("transitionend", handleTransitionEnd);

    const shiftSell = isCellShift(
      store.gameArray,
      +cell.dataset.r,
      +cell.dataset.c
    );
    // console.log(shiftSell);
    if (shiftSell) {
      if (store.gameSettings.sound) new Audio(soundMove).play();
      // $board.removeEventListener("mouseup", handleBoardMouseUp);
      moveCell(event.target, shiftSell.direction);
    }
  }
  // }
};

export const handleSaveNotWork = (event) => {
  event.target.classList.remove("save_not_work");
};

export const handleSaveGame = (event) => {
  if (!store.ls_available)
    alert(
      "Для того, чтобы сохранения были доступны, включите возможность записи в localstorage! В насатройках вашего браузера!"
    );
  if (!store.inGame) {
    if (store.gameSettings.sound) {
      const ssnw = new Audio(soundSaveNotWork);
      ssnw.volume = 0.5;
      ssnw.play();
    }
    event.target.classList.add("save_not_work");
    return;
  }
  if (store.gameSettings.sound) new Audio(soundSaveGame).play();
  const saveGameObj = {
    gameArray: store.gameArray,
    gameWinArray: store.gameWinArray,
    playTime: store.playTime,
    movesCount: store.movesCount,
    inGame: store.inGame,
    gameSettings: {
      currentBoardSize: store.gameSettings.currentBoardSize,
    },
  };
  saveToLS(store.ls_key_data, saveGameObj);
};

export const handleLoadGame = () => {
  if (!store.ls_available) {
    alert(
      "Для того, чтобы сохранения были доступны, включите возможность записи в localstorage! В насатройках вашего браузера!"
    );
    return;
  }
  if (store.gameSettings.sound) new Audio(soundLoadGame).play();
  stopGame();
  const loadGameObj = loadFromLS(store.ls_key_data);
  if (loadGameObj) {
    for (const key in loadGameObj) {
      // console.log(key);
      if (key === "gameSettings") {
        store.gameSettings.currentBoardSize =
          +loadGameObj.gameSettings.currentBoardSize;
        continue;
      }
      if (Object.hasOwnProperty.call(loadGameObj, key)) {
        store[key] = loadGameObj[key];
      }
    }

    const $boardSizeSelect = document.querySelectorAll("#boardsize > option");

    for (let i = 0; i < $boardSizeSelect.length; i++) {
      $boardSizeSelect[i].selected = false;
      if (+$boardSizeSelect[i].value === store.gameSettings.currentBoardSize)
        $boardSizeSelect[i].selected = true;
    }
    // console.log($boardSizeSelect);
    // console.log(store);

    renderBoard();
    renderMoves();
    renderTime();
    startGame();
  }
};

const handleRecordsBtn = (event) => {
  const btnArr = document.querySelectorAll(".btnRecords");
  // console.log(btnArr, event.target.dataset);
  const bSize = event.target.dataset.bSize;

  const $resultTitle = document.querySelector("#restitle");

  const $recordTable = document.querySelector(".record_table");

  $recordTable.innerHTML = "";

  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].classList.remove("btnRecords_active");

    if (btnArr[i].dataset.bSize === bSize) {
      btnArr[i].classList.add("btnRecords_active");
      $resultTitle.innerHTML = `Best of the best ${bSize} X ${bSize}`;
    }
  }

  $recordTable.append(...getRecords(bSize));
};

export const handleRecordClick = () => {
  if (store.gameSettings.sound) {
    // new Audio(soundOpenRecords).play();
    const recordSound = new Audio(soundOpenRecords);
    recordSound.volume = 0.5;
    recordSound.play();
  }

  const $popupOverlay = document.querySelector(".popup_overlay");
  const $popupCard = document.querySelector(".popup_card");

  const newRecordControlPanel = document.createElement("div");
  const bSize = store.gameSettings.currentBoardSize;
  const bSizeArr = store.gameSettings.boardSizes;
  newRecordControlPanel.innerHTML = `<h3 id='restitle'>Best of the best ${bSize} X ${bSize}</h3>`;

  const newPopupClose = document.createElement("div");
  newPopupClose.classList.add("close_popup");
  newPopupClose.addEventListener("click", () => {
    $popupOverlay.classList.remove("popup_overlay_active");
    if (store.inGame) gameResume();
  });
  newRecordControlPanel.append(newPopupClose);

  const btnsRecWrapper = document.createElement("div");
  btnsRecWrapper.classList.add("btn_rec_wrapper");

  for (let i = 0; i < bSizeArr.length; i++) {
    const button = document.createElement("button");
    button.innerText = `${bSizeArr[i]} X ${bSizeArr[i]}`;
    button.addEventListener("click", handleRecordsBtn);
    button.classList.add("btnRecords");
    button.dataset.bSize = bSizeArr[i];
    if (bSizeArr[i] === +bSize) button.classList.add("btnRecords_active");
    btnsRecWrapper.append(button);
  }
  newRecordControlPanel.append(btnsRecWrapper);

  const newRecordTable = document.createElement("div");
  newRecordTable.classList.add("record_table");

  const currRecords = getRecords(bSize);
  newRecordTable.append(...currRecords);

  // console.log(currRecordsArr);

  $popupCard.innerHTML = "";

  $popupCard.append(newRecordControlPanel);
  $popupCard.append(newRecordTable);

  $popupOverlay.classList.add("popup_overlay_active");

  gamePause();
};

export const handleSound = (event) => {
  if (store.gameSettings.sound) {
    store.gameSettings.sound = false;
    event.target.innerText = "Sound OFF";
    event.target.classList.add("btn_sound_disable");
    saveSettingsToLS();
  } else {
    store.gameSettings.sound = true;
    event.target.innerText = "Sound ON";
    event.target.classList.remove("btn_sound_disable");
    saveSettingsToLS();
  }
};

export const handleCheat = (event) => {
  store.cheatMode = event.target.checked;
};
