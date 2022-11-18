import { store } from '../store.js';
/**
 *
 * @returns {boolean}
 */
export const isLSAvailabel = () => {
  try {
    const t = 'Dudarik_test';
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
  if (!store.settings.isLSAvailabel) return false;

  localStorage.setItem(key, JSON.stringify(data));
  return true;
};
/**
 *
 * @param {string} key
 * @return {object|false}
 */
export const loadFromLS = (key) => {
  if (!store.settings.isLSAvailabel) return false;
  return JSON.parse(localStorage.getItem(key));
};

export const saveGameSettingsToLS = () => {
  console.log(store);
  saveToLS(store.ls_key_settings, store.settings);
};

export const loadGameSettingsFromLS = () => {
  const ls_settings = loadFromLS(store.ls_key_settings);
  if (!ls_settings) return false;

  store.settings = ls_settings;
  return true;
};
