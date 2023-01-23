import { store } from '../../../store';
import { disabledCarBtns } from '../disabledCarBtns';
import { startRace } from '../startRace';

export const handlerStartRaceBtnClick = async (event: Event) => {
  event.preventDefault();
  // const { target } = event;

  // if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find Start button`);

  // target.setAttribute('disabled', 'disabled');
  store.editorCar.btnStartRace?.setAttribute('disabled', 'disabled');

  store.cars.forEach((car) => {
    disabledCarBtns(car.id);
  });

  store.inGame = true;
  await startRace();

  console.log('StartRace click');
};
