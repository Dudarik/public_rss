export const store = {
  gameArray: [],
  gameSettings: {
    sound: false,
    numbers: true,
    timerEnable: false,
  },

  ls_available: false,
  ls_key_data: "fifteen_data",
  ls_key_settings: "fifteen_settings",

  records: [],

  playTime: "",
  movesCount: 0,

  dragableStartPosX: 0,
  dragableStartPosY: 0,
  dragableEndPosX: 0,
  dragableEndPosY: 0,

  animationDropableTime: 500,

  dropablePosX: 0,
  dropablePosY: 0,
};
