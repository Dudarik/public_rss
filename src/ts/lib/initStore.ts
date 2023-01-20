import { store } from '../../store';
import { getCars } from '../api/apiCars';
import { initButtonsInStore } from './initButtonsInStore';
import { initCarsRace } from './initCarsRace';

export const initStore = async () => {
  store.cars = await getCars(0, 7);
  initCarsRace();
  initButtonsInStore();
};
