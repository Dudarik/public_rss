import {
  incrementTimer,
  isCellShift,
  shuffle,
  swap,
} from "../helpers/index.js";
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
} from "./gameFunc.js";
import { generateGameArrays } from "./genArrays.js";
import { loadFromLS, saveToLS } from "./localstorage.js";
import { renderBoard, renderMoves, renderTime } from "./render.js";

export const handleStart = () => {
  if (store.inGame) stopGame();
  // debugger;
  // document.querySelector("#btnpause").innerText = "Pause OFF";

  generateGameArrays();

  store.gameArray = shuffle(store.gameArray, 5, true);
  store.movesCount = 0;
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
  // console.log(event.target.value);
  // console.log(store);
  if (store.inGame) stopGame();
  store.gameSettings.currentBoardSize = event.target.value;
  const saveSettingsObj = {
    sound: store.gameSettings.sound,
    currentBoardSize: store.gameSettings.currentBoardSize,
  };
  saveToLS(store.ls_key_settings, saveSettingsObj);
  generateGameArrays();
  renderBoard();
};

// let timeStart = null;

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
  movesIncrement();
  // console.log(store.gameArray.slice());
  endMoveCell(event.target);
  renderBoard();

  if (checkWin()) {
    console.log("win");
    onWin();
  }
  const $board = document.querySelector("#board");
  $board.addEventListener("mouseup", handleBoardMouseUp);
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

  setTimeout(() => {
    if (!store.dragndrop) return;
    const cell = event.target;
    if (!cell || cell.id === "dropable") return;

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

    dragCopy.style.position = "absolute";
    dragCopy.style.zIndex = 1000;
    dragCopy.style.opacity = 0.75;

    store.dragableStartPosX = $cell.getBoundingClientRect().left;
    store.dragableStartPosY = $cell.getBoundingClientRect().top;
    // console.log(store.dragableStartPosX);

    const dndMoveAt = (pageX, pageY) => {
      dragCopy.style.left = pageX - shiftX + "px";
      dragCopy.style.top = pageY - shiftY + "px";
    };

    let currentDroppable = null;

    const enterDroppable = (elem) => {
      store.inDropable = true;
      elem.style.background = "green";
    };

    const leaveDroppable = (elem) => {
      store.inDropable = false;
      elem.style.background = "";
    };

    const handleMouseMove = (event) => {
      dndMoveAt(event.pageX, event.pageY);

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
      // console.log(store);
      if (store.inDropable) {
        const dropable = document.querySelector("#dropable");
        // console.log(
        //   dropable.getBoundingClientRect(),
        //   dragCopy.getBoundingClientRect()
        // );
        store.dragableStartPosX = dropable.getBoundingClientRect().left;
        store.dragableStartPosY = dropable.getBoundingClientRect().top;
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
          const nzcr = $cell.dataset.r;
          const nzcc = $cell.dataset.c;
          const $zero = document.querySelector("#dropable");
          const zcr = $zero.dataset.r;
          const zcc = $zero.dataset.c;

          swap(store.gameArray, zcr, zcc, nzcr, nzcc);

          movesIncrement();

          renderBoard();

          if (checkWin()) {
            console.log("win");
            onWin();
          }

          leaveDroppable(currentDroppable);
        }
      }, store.animationDropableTime);
      // store.inDropable = false;
      document.removeEventListener("mousemove", handleMouseMove);
      dragCopy.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);

    dragCopy.addEventListener("mouseup", handleMouseUp);

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
  console.log("board mouse up", store.dragndrop);
  // if (!store.dragndrop) {
  const cell = event.target;

  if (cell) {
    // const $board = document.querySelector("#board");
    const $cell = document.querySelector(`#${event.target.id}`);

    $cell.addEventListener("transitionend", handleTransitionEnd);

    const shiftSell = isCellShift(
      store.gameArray,
      +cell.dataset.r,
      +cell.dataset.c
    );
    // console.log(shiftSell);
    if (shiftSell) {
      // $board.removeEventListener("mouseup", handleBoardMouseUp);
      moveCell(event.target, shiftSell.direction);
    }
  }
  // }
};

export const handleSaveGame = () => {
  if (!store.ls_available)
    alert(
      "Для того, чтобы сохранения были доступны, включите возможность записи в localstorage! В насатройках вашего браузера!"
    );
  const saveGameObj = {
    gameArray: store.gameArray,
    gameWinArray: store.gameWinArray,
    playTime: store.playTime,
    movesCount: store.movesCount,
    inGame: store.inGame,
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
  const loadGameObj = loadFromLS(store.ls_key_data);
  if (loadGameObj) {
    for (const key in loadGameObj) {
      if (Object.hasOwnProperty.call(loadGameObj, key)) {
        store[key] = loadGameObj[key];
      }
    }
    renderBoard();
    renderMoves();
    renderTime();
  }
};
