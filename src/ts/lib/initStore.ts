import { store } from '../../store';
import { getCars } from '../api/apiCars';

export const initStore = async () => {
  store.cars = await getCars(0, 7);
};
