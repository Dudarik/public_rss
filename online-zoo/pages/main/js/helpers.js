/**
 * @param {number} min
 * @param {number} max
 *
 * @return {number}
 */

export const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * @param {number} count - count of cards
 *
 * @return {number}
 */

export const getRandomCardId = (count) => getRandomNum(0, count);

/**
 * @param {void}
 * @returns {number}
 */
export function petsSliderCardsCount() {
  return window.innerWidth > 640 ? 6 : 4;
}
