import { store } from '../../../store';
import { winnersPage } from '../../pages/winners/winnersPage';
import { setWinnersToStore } from '../setWinnersToStore';

export const handlerPrevPageWinnerClick = async (event: Event) => {
  event.preventDefault();
  console.log('next');

  if (store.currentWinnersPage > 1) {
    store.currentWinnersPage -= 1;

    await setWinnersToStore();

    const winnerPageHTML = winnersPage();
    const main = document.querySelector('#app');

    if (!(main instanceof HTMLElement)) throw new Error(`Can't find main section`);

    main.innerHTML = '';
    main.append(winnerPageHTML);
  }
};
