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
    sound: true,
    numbers: true,
    boardSizes: [
      BOARD_SIZE_3,
      BOARD_SIZE_4,
      BOARD_SIZE_5,
      BOARD_SIZE_6,
      BOARD_SIZE_7,
      BOARD_SIZE_8,
    ],
    currentBoardSize: BOARD_SIZE_4,
  },

  ls_available: false,
  ls_key_data: "dudarik_fifteen_data",
  ls_key_settings: "dudarik_fifteen_settings",
  ls_key_records: "dudarik_fifteen_records",

  records: {
    [BOARD_SIZE_3]: [
      { name: "AAA", movesCount: 25, playTime: 150 },
      { name: "BBB", movesCount: 35, playTime: 250 },
      { name: "CCC", movesCount: 45, playTime: 350 },
      { name: "DDD", movesCount: 50, playTime: 450 },
      { name: "EEE", movesCount: 60, playTime: 550 },
      { name: "FFF", movesCount: 70, playTime: 650 },
      { name: "GGG", movesCount: 80, playTime: 750 },
      { name: "HHH", movesCount: 90, playTime: 850 },
      { name: "JJJ", movesCount: 100, playTime: 950 },
      { name: "KKK", movesCount: 110, playTime: 1000 },
    ],
    [BOARD_SIZE_4]: [
      { name: "BBB", movesCount: 100, playTime: 500 },
      { name: "CCC", movesCount: 120, playTime: 600 },
      { name: "DDD", movesCount: 130, playTime: 700 },
      { name: "EEE", movesCount: 140, playTime: 800 },
      { name: "FFF", movesCount: 150, playTime: 900 },
      { name: "GGG", movesCount: 160, playTime: 1000 },
      { name: "DDD", movesCount: 170, playTime: 1100 },
      { name: "MMM", movesCount: 180, playTime: 1200 },
      { name: "LOL", movesCount: 190, playTime: 1300 },
      { name: "KEK", movesCount: 200, playTime: 1400 },
    ],
    [BOARD_SIZE_5]: [
      { name: "KKK", movesCount: 300, playTime: 600 },
      { name: "BBB", movesCount: 320, playTime: 700 },
      { name: "LOL", movesCount: 330, playTime: 800 },
      { name: "DDD", movesCount: 340, playTime: 900 },
      { name: "EEE", movesCount: 350, playTime: 1000 },
      { name: "FFF", movesCount: 360, playTime: 1100 },
      { name: "FOX", movesCount: 370, playTime: 1200 },
      { name: "HHH", movesCount: 380, playTime: 1300 },
      { name: "JJJ", movesCount: 390, playTime: 1400 },
      { name: "KKK", movesCount: 400, playTime: 1500 },
    ],
    [BOARD_SIZE_6]: [
      { name: "AAA", movesCount: 500, playTime: 2000 },
      { name: "LOL", movesCount: 520, playTime: 2200 },
      { name: "CCC", movesCount: 530, playTime: 2300 },
      { name: "FOX", movesCount: 540, playTime: 2400 },
      { name: "EEE", movesCount: 550, playTime: 2500 },
      { name: "FFF", movesCount: 560, playTime: 2600 },
      { name: "BUG", movesCount: 570, playTime: 2700 },
      { name: "HHH", movesCount: 580, playTime: 2800 },
      { name: "KEK", movesCount: 590, playTime: 2900 },
      { name: "KKK", movesCount: 500, playTime: 3000 },
    ],
    [BOARD_SIZE_7]: [
      { name: "AAA", movesCount: 700, playTime: 3000 },
      { name: "BBB", movesCount: 710, playTime: 3100 },
      { name: "CCC", movesCount: 730, playTime: 3200 },
      { name: "LEL", movesCount: 740, playTime: 3300 },
      { name: "EEE", movesCount: 750, playTime: 3350 },
      { name: "FFF", movesCount: 760, playTime: 3400 },
      { name: "GGG", movesCount: 770, playTime: 3450 },
      { name: "VAS", movesCount: 780, playTime: 3500 },
      { name: "IDA", movesCount: 790, playTime: 3550 },
      { name: "REA", movesCount: 853, playTime: 3559 },
    ],
    [BOARD_SIZE_8]: [
      { name: "FOX", movesCount: 1000, playTime: 3000 },
      { name: "LOL", movesCount: 1020, playTime: 3100 },
      { name: "KEK", movesCount: 1030, playTime: 3200 },
      { name: "REA", movesCount: 1040, playTime: 3300 },
      { name: "ALX", movesCount: 1050, playTime: 3400 },
      { name: "MRX", movesCount: 1060, playTime: 3500 },
      { name: "JHO", movesCount: 1070, playTime: 3510 },
      { name: "ING", movesCount: 1080, playTime: 3520 },
      { name: "INP", movesCount: 1090, playTime: 3530 },
      { name: "VOX", movesCount: 1100, playTime: 3540 },
    ],
  },

  playTime: 0,
  movesCount: 0,
  inGame: false,
  gameTimerId: null,

  // animationDirection: null,

  // dragndropElement: null,
  cheatMode: false,
  dragndrop: false,
  dragableStartPosX: 0,
  dragableStartPosY: 0,
  dragableEndPosX: 0,
  dragableEndPosY: 0,

  animationDropableTime: 400,

  inDropable: false,
  // dropablePosX: 0,
  // dropablePosY: 0,
};
