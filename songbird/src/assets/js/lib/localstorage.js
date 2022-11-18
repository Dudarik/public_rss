import { store } from '../store.js';
/**
 *
 * @returns {boolean}
 */
export const isLSAvailabel = () => {
  try {
    const t = 'test';
    localStorage.setItem(t, JSON.stringify(t));
    localStorage.removeItem(t);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
/**
 *
 * @param {string} key
 * @param {JSON} data
 * @return {boolean}
 *
 */
export const saveToLS = (key, data) => {
  if (!store.ls_available) return false;

  localStorage.setItem(key, JSON.stringify(data));
  return true;
};
/**
 *
 * @param {string} key
 * @return {object|false}
 */
export const loadFromLS = (key) => {
  if (!store.ls_available) return false;
  return JSON.parse(localStorage.getItem(key));
};

export const saveGameSettingsToLS = (key) => saveToLS(key, store.settings);

export const loadGameSettingsFromLS = (key) => loadFromLS(key);
