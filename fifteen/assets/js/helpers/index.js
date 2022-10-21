/**
 * @param {number} min
 * @param {number} max
 *
 * @return {number}
 */

export const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * @param {void}
 * @return {number} from 0 to 3
 */

export const getRandomShift = () => getRandomNum(0, 3);

export const formatTime = (time = 0) => {
  let hours = parseInt(time / 3600, 10);
  let minutes = parseInt((time % 3600) / 60, 10);
  let seconds = parseInt((time % 3600) % 60, 10);

  hours = hours < 10 ? "0" + hours : String(hours);
  minutes = minutes < 10 ? "0" + minutes : String(minutes);
  seconds = seconds < 10 ? "0" + seconds : String(seconds);

  return `${hours}:${minutes}:${seconds}`;
};

export const incrementTimer = (time) => time + 1;

/**
 *
 * @param {[]} arr target array
 * @param {number} zcr zero cell row index
 * @param {number} zcc zero cell column index
 * @param {number} nzcr none zero cell row index
 * @param {number} nzcc none zero cell column index
 */
export const swap = (arr, zcr, zcc, nzcr, nzcc) => {
  // console.log(arr, zcr, zcc, nzcr, nzcc);
  [arr[zcr][zcc], arr[nzcr][nzcc]] = [arr[nzcr][nzcc], arr[zcr][zcc]];
};

/**
 *
 * @param {[]} arr
 * @param {number} shuffleCount custom shuffle count need customShuffle in true
 * @param {boolean} customShuffle default false, need in true if shuffleCount manual
 * @return {[]} shuffled array
 */
export const shuffle = (arr, shuffleCount = 1000, customShuffle = false) => {
  let zcr = arr.length - 1, //zero cell row
    zcc = arr.length - 1; //zero ceel column

  if (!customShuffle) {
    if (arr.length > 5) shuffleCount = 2000;
    if (arr.length === 3) shuffleCount = 100;
  }

  for (let i = 0; i < shuffleCount; i++) {
    switch (getRandomShift()) {
      case 0:
        if (zcr !== 0) swap(arr, zcr, zcc, --zcr, zcc);
        break;
      case 1:
        if (zcr !== arr.length - 1) swap(arr, zcr, zcc, ++zcr, zcc);
        break;
      case 2:
        if (zcc !== 0) swap(arr, zcr, zcc, zcr, --zcc);
        break;
      case 3:
        if (zcc !== arr.length - 1) swap(arr, zcr, zcc, zcr, ++zcc);
        break;
    }
  }
  // console.log(arr);
  return arr;
};

export const isCellShift = (arr, row, col) => {
  const rowShift = [-1, 0, 1, 0];
  const colShift = [0, 1, 0, -1];

  for (let i = 0; i < rowShift.length; i++) {
    if (arr[row + rowShift][col + colShift] === 0) {
      return [row + rowShift, col + colShift];
    }
  }
  return null;
};

// console.log(
//   arr.slice(),
//   zcr,
//   zcc,
//   arr[zcr][zcc],
//   arr[zcr - 1][zcc]
// );
// const t = arr[zcr][zcc];
// arr[zcr][zcc] = arr[zcr - 1][zcc];
// arr[zcr - 1][zcc] = t;

// console.log(
//   arr.slice(),
//   zcr,
//   zcc,
//   arr[zcr][zcc],
//   arr[zcr - 1][zcc]
// );
// }

// [arr[zcr][zcc], arr[--zcr][zcc]] = [arr[--zcr][zcc], arr[zcr][zcc]];
