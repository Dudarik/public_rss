import { store } from '../../store';
import { getCars } from '../api/apiCars';
import { initButtonsInStore } from './initButtonsInStore';
import { initCarsRace } from './initCarsRace';

export const initStore = async () => {
  const { cars, countCars } = await getCars(0, 7);
  store.cars = cars;
  store.countCars = countCars;
  initCarsRace();
  initButtonsInStore();
};
