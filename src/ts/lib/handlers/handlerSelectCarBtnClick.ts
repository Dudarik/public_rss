import { store } from '../../../store';

export const handlerSelectCarBtnClick = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Select`);

  const { carId } = target.dataset;

  if (carId) {
    const id = parseInt(carId, 10);
    const car = store.cars.filter((item) => item.id === id)[0];
    store.editorCar.carEditId = id;
    store.editorCar.formInputEdit?.removeAttribute('disabled');

    const { formInputEdit } = store.editorCar;
    const { inputColorEdit } = store.editorCar;

    if (
      !(formInputEdit instanceof HTMLInputElement) ||
      !(inputColorEdit instanceof HTMLInputElement)
    )
      throw new Error(`Can't load form editor`);

    formInputEdit.value = car.name;
    inputColorEdit.value = car.color;

    store.editorCar.inputColorEdit?.removeAttribute('disabled');
    store.editorCar.btnEditorUpdate?.removeAttribute('disabled');
  }
};
