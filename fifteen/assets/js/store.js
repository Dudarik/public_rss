const BOARD_SIZE_3 = 3;
const BOARD_SIZE_4 = 4;
const BOARD_SIZE_5 = 5;
const BOARD_SIZE_6 = 6;
const BOARD_SIZE_7 = 7;
const BOARD_SIZE_8 = 8;

export const store = {
  gameArray: [],
  gameWinArray: [],
  gameSettings: {
    sound: false,
    numbers: true,
    boardSizes: [
      BOARD_SIZE_3,
      BOARD_SIZE_4,
      BOARD_SIZE_5,
      BOARD_SIZE_6,
      BOARD_SIZE_7,
      BOARD_SIZE_8,
    ],
    currentBoardSize: BOARD_SIZE_5,
  },

  ls_available: false,
  ls_key_data: "fifteen_data",
  ls_key_settings: "fifteen_settings",

  records: [],

  playTime: 0,
  movesCount: 0,
  inGame: false,
  gameTimerId: null,

  dragableStartPosX: 0,
  dragableStartPosY: 0,
  dragableEndPosX: 0,
  dragableEndPosY: 0,

  animationDropableTime: 500,

  dropablePosX: 0,
  dropablePosY: 0,
};
