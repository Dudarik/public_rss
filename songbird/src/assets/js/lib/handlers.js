import { langFunction } from '../language/langFunction';
import { store } from '../store';
import { setLanguage } from './render';

export const handleSwitchLanguage = (event) => {
  const lang = store.settings.language;
  if (lang === 'ru') store.settings.language = 'en';
  else store.settings.language = 'ru';
  event.target.innerText = store.settings.language.toLocaleUpperCase();

  langFunction[store.currentPage](store.settings.language);
  setLanguage(store.settings.language);
};
