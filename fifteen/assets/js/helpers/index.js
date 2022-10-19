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
 * @param {[]} arr
 * @return {[]}
 */
export const shuffle = (arr) => {
  return arr;
};
