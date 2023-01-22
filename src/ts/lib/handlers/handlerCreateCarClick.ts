import { store } from '../../../store';
import { createCar } from '../../api/apiCars';
import { garagePage } from '../../pages/garage/garagePage';
import { initStore } from '../initStore';

export const handlerCreateCarClick = async (event: Event) => {
  event.preventDefault();

  const name = store.editorCar.formInputCreate?.value;
  const color = store.editorCar.inputColorCreate?.value;

  if (name && color) await createCar({ name, color });

  await initStore();
  const garagePageHTML = garagePage();
  const main = document.querySelector('#app');

  if (!(main instanceof HTMLElement)) throw new Error(`Can't find main section`);

  main.innerHTML = '';
  main.append(garagePageHTML);
};
