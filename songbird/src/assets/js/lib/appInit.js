import { store } from '../store';
import { handleSwitchLanguage } from './handlers';
import { setLanguage } from './render';

export const appInit = () => {
  const langSwitcherBtn = document.querySelector('#lang_switcher');
  langSwitcherBtn.addEventListener('click', handleSwitchLanguage);
  setLanguage(store.settings.language);
};
