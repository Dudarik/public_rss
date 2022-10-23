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
      { name: "AAA", movesCount: 100, playTime: 150 },
      { name: "BBB", movesCount: 150, playTime: 250 },
      { name: "CCC", movesCount: 160, playTime: 350 },
      { name: "DDD", movesCount: 170, playTime: 450 },
      { name: "EEE", movesCount: 200, playTime: 550 },
      { name: "FFF", movesCount: 250, playTime: 650 },
      { name: "GGG", movesCount: 300, playTime: 750 },
      { name: "HHH", movesCount: 350, playTime: 850 },
      { name: "JJJ", movesCount: 400, playTime: 950 },
      { name: "KKK", movesCount: 450, playTime: 1000 },
    ],
    [BOARD_SIZE_4]: [
      { name: "BBB", movesCount: 300, playTime: 500 },
      { name: "CCC", movesCount: 320, playTime: 600 },
      { name: "DDD", movesCount: 330, playTime: 700 },
      { name: "EEE", movesCount: 440, playTime: 800 },
      { name: "FFF", movesCount: 550, playTime: 900 },
      { name: "GGG", movesCount: 660, playTime: 1000 },
      { name: "DDD", movesCount: 770, playTime: 1100 },
      { name: "MMM", movesCount: 880, playTime: 1200 },
      { name: "LOL", movesCount: 890, playTime: 1300 },
      { name: "KEK", movesCount: 900, playTime: 1400 },
    ],
    [BOARD_SIZE_5]: [
      { name: "KKK", movesCount: 500, playTime: 600 },
      { name: "BBB", movesCount: 520, playTime: 700 },
      { name: "LOL", movesCount: 530, playTime: 800 },
      { name: "DDD", movesCount: 540, playTime: 900 },
      { name: "EEE", movesCount: 650, playTime: 1000 },
      { name: "FFF", movesCount: 660, playTime: 1100 },
      { name: "FOX", movesCount: 670, playTime: 1200 },
      { name: "HHH", movesCount: 880, playTime: 1300 },
      { name: "JJJ", movesCount: 990, playTime: 1400 },
      { name: "KKK", movesCount: 999, playTime: 1500 },
    ],
    [BOARD_SIZE_6]: [
      { name: "AAA", movesCount: 900, playTime: 2000 },
      { name: "LOL", movesCount: 920, playTime: 2200 },
      { name: "CCC", movesCount: 930, playTime: 2300 },
      { name: "FOX", movesCount: 940, playTime: 2400 },
      { name: "EEE", movesCount: 1050, playTime: 2500 },
      { name: "FFF", movesCount: 1060, playTime: 2600 },
      { name: "BUG", movesCount: 1170, playTime: 2700 },
      { name: "HHH", movesCount: 1180, playTime: 2800 },
      { name: "KEK", movesCount: 1390, playTime: 2900 },
      { name: "KKK", movesCount: 1600, playTime: 3000 },
    ],
    [BOARD_SIZE_7]: [
      { name: "AAA", movesCount: 1000, playTime: 3000 },
      { name: "BBB", movesCount: 1010, playTime: 3100 },
      { name: "CCC", movesCount: 1730, playTime: 3200 },
      { name: "LEL", movesCount: 1740, playTime: 3300 },
      { name: "EEE", movesCount: 1750, playTime: 3350 },
      { name: "FFF", movesCount: 1760, playTime: 3400 },
      { name: "GGG", movesCount: 1770, playTime: 3450 },
      { name: "VAS", movesCount: 1780, playTime: 3500 },
      { name: "IDA", movesCount: 1790, playTime: 3550 },
      { name: "REA", movesCount: 1853, playTime: 3559 },
    ],
    [BOARD_SIZE_8]: [
      { name: "FOX", movesCount: 2000, playTime: 3000 },
      { name: "LOL", movesCount: 2020, playTime: 3100 },
      { name: "KEK", movesCount: 2030, playTime: 3200 },
      { name: "REA", movesCount: 2040, playTime: 3300 },
      { name: "ALX", movesCount: 2050, playTime: 3400 },
      { name: "MRX", movesCount: 2060, playTime: 3500 },
      { name: "JHO", movesCount: 2070, playTime: 3510 },
      { name: "ING", movesCount: 2080, playTime: 3520 },
      { name: "INP", movesCount: 2090, playTime: 3530 },
      { name: "VOX", movesCount: 9999, playTime: 3540 },
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
