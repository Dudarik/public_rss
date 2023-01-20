import { store } from '../../store';

export const initButtonsInStore = () => {
  for (let i = 0; i < store.cars.length; i += 1) {
    store.controls[store.cars[i].id] = { remove: null, reset: null, select: null, start: null };
  }
};
