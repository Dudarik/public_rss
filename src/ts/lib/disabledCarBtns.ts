import { store } from '../../store';

export const disabledCarBtns = (carId: number) => {
  store.controls[carId].remove?.setAttribute('disabled', 'disabled');
  store.controls[carId].start?.setAttribute('disabled', 'disabled');
  store.controls[carId].select?.setAttribute('disabled', 'disabled');
};
