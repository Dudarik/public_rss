import { garagePage } from '../../pages/garage/garagePage';

export const handlerToGarageClick = (event: Event) => {
  event.preventDefault();

  const app = document.querySelector('#app');

  if (!(app instanceof HTMLElement)) throw new Error('Err');

  app.innerHTML = '';

  const gHTML = garagePage();

  app.append(gHTML);
};
