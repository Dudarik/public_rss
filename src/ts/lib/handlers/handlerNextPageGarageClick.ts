import { store } from '../../../store';
import { garagePage } from '../../pages/garage/garagePage';
import { initStore } from '../initStore';

export const handlerNextPageGarageClick = async (event: Event) => {
  event.preventDefault();
  console.log('next');

  if (store.currentGaragePage < store.pagesCountGarage) {
    store.currentGaragePage += 1;
    // store.inGame = false;

    await initStore();
    const garagePageHTML = garagePage();
    const main = document.querySelector('#app');

    if (!(main instanceof HTMLElement)) throw new Error(`Can't find main section`);

    main.innerHTML = '';
    main.append(garagePageHTML);
  }
};
