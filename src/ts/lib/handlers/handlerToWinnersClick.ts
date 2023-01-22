import { winnersPage } from '../../pages/winners/winnersPage';

export const handlerToWinnersClick = (event: Event) => {
  event.preventDefault();

  const app = document.querySelector('#app');

  if (!(app instanceof HTMLElement)) throw new Error('Err');

  app.innerHTML = '';

  const wHTML = winnersPage();

  app.append(wHTML);
};
