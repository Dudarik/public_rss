import { store } from '../../../store';
import { stopEngine } from '../../api/apiEngine';
import { enabledCarBtns } from '../enabledCarBtns';

export const handlerResetRaceBtnClick = async (event: Event) => {
  event.preventDefault();
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Reset`);

  store.inGame = false;

  store.cars.forEach(async (car) => {
    if (car.id) {
      await stopEngine(car.id);

      store.carsRace[car.id] = false;

      setTimeout(() => {
        store.carsHTML[car.id].style.transform = `translate(0)`;
      }, 50);

      enabledCarBtns(car.id);
    }
  });
  store.editorCar.btnResetRace?.setAttribute('disabled', 'disabled');
  store.editorCar.btnStartRace?.removeAttribute('disabled');
};
