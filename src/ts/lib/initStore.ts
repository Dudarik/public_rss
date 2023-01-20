import { store } from '../../store';
import { getCars } from '../api/apiCars';

export const initStore = async () => {
  store.cars = await getCars(0, 7);

  for (let i = 0; i < store.cars.length; i += 1) {
    store.controls[store.cars[i].id] = { remove: null, stop: null, select: null, start: null };
  }
  // store.controls = store.cars.map((car) => ({
  //   [car.id]: { remove: null, stop: null, select: null, start: null },
  // }));
};
