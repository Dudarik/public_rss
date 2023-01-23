import { footer, header } from './ts/components';
import { main } from './ts/components/main/main';
import { initStore } from './ts/lib';
import { garagePage } from './ts/pages/garage/garagePage';

import './assets/scss/main.scss';

document.addEventListener('DOMContentLoaded', async () => {
  await initStore();

  const garageHTML = garagePage();

  document.body.append(header());
  document.body.append(main([garageHTML]));
  document.body.append(footer());
});
