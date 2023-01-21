import { store } from '../../../store';
import { enabledCarBtns } from '../enabledCarBtns';

export const handlerResetRaceBtnClick = (event: Event) => {
  event.preventDefault();
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Reset`);

  store.cars.forEach((car) => {
    if (car.id) {
      store.carsRace[car.id] = false;

      setTimeout(() => {
        store.carsHTML[car.id].style.transform = `translate(0)`;
      }, 50);

      enabledCarBtns(car.id);
    }
  });

  store.editorCar.btnResetRace?.setAttribute('disabled', 'disabled');
  store.editorCar.btnStartRace?.removeAttribute('disabled');

  console.log('ResetRace click');
};
