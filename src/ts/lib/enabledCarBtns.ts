import { store } from '../../store';

export const enabledCarBtns = (carId: number) => {
  store.controls[carId].remove?.removeAttribute('disabled');
  store.controls[carId].start?.removeAttribute('disabled');
  store.controls[carId].select?.removeAttribute('disabled');
};
