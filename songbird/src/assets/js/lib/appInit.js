import { store } from '../store';
import { handleSwitchLanguage } from './handlers';
import { isLSAvailabel, loadGameSettingsFromLS } from './localstorage';
import { langFunction } from '../language/langFunction';

export const appInit = () => {
  store.settings.isLSAvailabel = isLSAvailabel();

  if (store.settings.isLSAvailabel) loadGameSettingsFromLS();

  console.log(store);

  const langSwitcherBtn = document.querySelector('#lang_switcher');
  langSwitcherBtn.innerText = store.settings.language.toUpperCase();

  langSwitcherBtn.addEventListener('click', handleSwitchLanguage);

  langFunction['mainMenu'](store.settings.language);
  langFunction['main'](store.settings.language);
};
