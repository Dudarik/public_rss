import { deleteCar } from '../../api/apiCars';
import { garagePage } from '../../pages/garage/garagePage';

import { initStore } from '../initStore';

export const handlerRemoveCarBtnClick = async (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Remove`);

  const { carId } = target.dataset;

  if (carId) await deleteCar(parseInt(carId, 10));

  await initStore();

  const app = document.querySelector('#app');

  if (!(app instanceof HTMLElement)) throw new Error(`Can't find button element Main app`);

  app.innerHTML = '';

  app.append(garagePage());
};
