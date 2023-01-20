import { store } from '../../store';

export const setCarsHtmlToStore = () => {
  for (let i = 0; i < store.cars.length; i += 1) {
    const carId = store.cars[i].id;

    const elem = document.getElementById(`ufo-${carId}`);

    if (!(elem instanceof HTMLDivElement)) throw new Error(`Can't find DIV with id=ufo-${carId}`);
    store.carsHTML[carId] = elem;
  }
};
