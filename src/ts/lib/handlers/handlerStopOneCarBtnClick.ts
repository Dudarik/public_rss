import { store } from '../../../store';
import { enabledCarBtns } from '../enabledCarBtns';

export const handlerStopOneCarBtnClick = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Start`);

  const { carId } = target.dataset;

  if (carId) {
    const id = parseInt(carId, 10);
    store.carsRace[id] = false;

    setTimeout(() => {
      store.carsHTML[id].style.transform = `translate(0)`;
    }, 50);

    enabledCarBtns(id);
  }

  console.log('StopOneCar click');
};
