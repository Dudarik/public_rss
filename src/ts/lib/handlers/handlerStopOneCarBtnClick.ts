import { store } from '../../../store';

export const handlerStopOneCarBtnClick = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Start`);

  const { carId } = target.dataset;

  if (carId) {
    store.carsRace[parseInt(carId, 10)] = false;

    setTimeout(() => {
      store.carsHTML[parseInt(carId, 10)].style.transform = `translate(0)`;
    }, 50);
  }

  console.log('StopOneCar click');
};
