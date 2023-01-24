import { store } from '../../../store';
import { updateCar } from '../../api/apiCars';
import { garagePage } from '../../pages/garage/garagePage';
import { initStore } from '../initStore';

export const handlerUpdateCarClick = async (event: Event) => {
  event.preventDefault();

  const id = store.editorCar.carEditId;
  const name = store.editorCar.formInputEdit?.value;
  const color = store.editorCar.inputColorEdit?.value;

  store.editorValue.inputColorEdit = '#000000';
  store.editorValue.inputEdit = '';

  if (name && color) await updateCar({ id, name, color });

  await initStore();
  const garagePageHTML = garagePage();
  const main = document.querySelector('#app');

  if (!(main instanceof HTMLElement)) throw new Error(`Can't find main section`);

  main.innerHTML = '';
  main.append(garagePageHTML);
};
