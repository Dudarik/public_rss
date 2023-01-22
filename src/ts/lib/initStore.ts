import { store } from '../../store';
import { getCars } from '../api/apiCars';
import { initButtonsInStore } from './initButtonsInStore';
import { initCarsRace } from './initCarsRace';

export const initStore = async () => {
  const { cars, countCars } = await getCars(store.currentGaragePage, store.carsPerPage);
  store.cars = cars;
  store.countCars = countCars;
  store.pagesCountGarage = Math.ceil(countCars / store.carsPerPage);

  initCarsRace();
  initButtonsInStore();
};
