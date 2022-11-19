import {
  getMenuItems,
  addHandlersToMenu,
  changePage,
} from './assets/js/helpers/location';

import { appInit } from './assets/js/lib/appInit';
import { getBirdNames } from '../src/assets/js/lib/gameFunc';

import './assets/sass/styles.scss';

window.addEventListener('popstate', () => {
  changePage(location.pathname);
});

window.addEventListener('load', () => {
  if (document.referrer) {
    let url = document.referrer.split('');
    url = url.splice(0, url.lastIndexOf('/') + 1).join('');

    if (url === location.href) {
      changePage(document.referrer);
      history.pushState(null, null, document.referrer);
      return;
    }
  }
  changePage(location.href + 'main.html');
  history.pushState(null, null, 'main.html');
});

addHandlersToMenu(getMenuItems());
appInit();
