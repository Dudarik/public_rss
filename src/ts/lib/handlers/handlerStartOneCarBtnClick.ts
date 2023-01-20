import { store } from '../../../store';
import { animation } from '../animation';
import { disabledCarBtns } from '../disabledCarBtns';

export const handlerStartOneCarBtnClick = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Start`);

  const ufo = document.querySelector(`#ufo-${target.dataset.carId}`);

  if (!(ufo instanceof HTMLElement)) throw new Error('err');
  const { carId } = target.dataset;

  if (carId) {
    const id = parseInt(carId, 10);
    disabledCarBtns(id);

    store.carsRace[id] = true;

    animation(ufo, 10000);
  }
};
