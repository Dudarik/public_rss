import { store } from '../../../store';
import { deleteCar } from '../../api/apiCars';
import { deleteWinner, getWinner } from '../../api/apiWinners';
import { garagePage } from '../../pages/garage/garagePage';

import { initStore } from '../initStore';
import { setWinnersToStore } from '../setWinnersToStore';

export const handlerRemoveCarBtnClick = async (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Remove`);

  const { carId } = target.dataset;

  if (carId) {
    const id = parseInt(carId, 10);

    await deleteCar(id);

    const winner = await getWinner(id);

    if (winner.id !== -1) {
      await deleteWinner(id);
      setWinnersToStore();
    }
    if (store.cars.length === 1 && store.currentGaragePage > 1) {
      store.currentGaragePage -= 1;
    }
  }

  await initStore();

  const app = document.querySelector('#app');

  if (!(app instanceof HTMLElement)) throw new Error(`Can't find button element Main app`);

  app.innerHTML = '';

  app.append(garagePage());
};
