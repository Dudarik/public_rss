import { garagePage } from '../../pages/garage/garagePage';
import { generateCars } from '../generateCars';
import { initStore } from '../initStore';

export const handlerGen100CarsClick = async (event: Event) => {
  event.preventDefault();
  await generateCars(100);

  await initStore();
  const garagePageHTML = garagePage();
  const main = document.querySelector('#app');

  if (!(main instanceof HTMLElement)) throw new Error(`Can't find main section`);

  main.innerHTML = '';
  main.append(garagePageHTML);
};
