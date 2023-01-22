import { store } from '../../../store';
import { garagePage } from '../../pages/garage/garagePage';
import { initStore } from '../initStore';

export const handlerPrevPageGarageClick = async (event: Event) => {
  event.preventDefault();
  console.log('prev');
  if (store.currentGaragePage > 0) {
    store.currentGaragePage -= 1;

    await initStore();
    const garagePageHTML = garagePage();
    const main = document.querySelector('#app');

    if (!(main instanceof HTMLElement)) throw new Error(`Can't find main section`);

    main.innerHTML = '';
    main.append(garagePageHTML);
  }
};
