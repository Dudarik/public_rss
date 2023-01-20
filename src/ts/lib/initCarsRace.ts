import { store } from '../../store';

export const initCarsRace = () => {
  for (let i = 0; i < store.cars.length; i += 1) {
    store.carsRace[store.cars[i].id] = false;
  }
};
