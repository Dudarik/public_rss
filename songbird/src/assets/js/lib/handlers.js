import { langFunction } from '../language/langFunction';
import { store } from '../store';
import { saveGameSettingsToLS } from './localstorage';

export const handleSwitchLanguage = (event) => {
  const lang = store.settings.language;
  if (lang === 'ru') store.settings.language = 'en';
  else store.settings.language = 'ru';

  saveGameSettingsToLS();

  event.target.innerText = store.settings.language.toLocaleUpperCase();

  langFunction[store.currentPage](store.settings.language);
  langFunction['mainMenu'](store.settings.language);
};
