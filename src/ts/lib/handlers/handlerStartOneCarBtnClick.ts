import { store } from '../../../store';
import { driveCar, startEngine } from '../../api/apiEngine';
import { ApiResponseStart } from '../../interfaces/api/ApiResponseStart';
import { animation } from '../animation';
import { disabledCarBtns } from '../disabledCarBtns';

export const handlerStartOneCarBtnClick = async (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Start`);

  const ufo = document.querySelector(`#ufo-${target.dataset.carId}`);

  if (!(ufo instanceof HTMLElement)) throw new Error('err');
  const { carId } = target.dataset;

  if (carId) {
    const id = parseInt(carId, 10);
    disabledCarBtns(id);

    const responseStart: ApiResponseStart = await startEngine(id);
    await driveCar(id);

    store.carsRace[id] = true;

    store.carsRaceTime[id] = responseStart.distance / responseStart.velocity;
    animation(ufo, store.carsRaceTime[id]);
  }
};
