import { store } from '../../../store';

export const handlerChangeInputEditor = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLInputElement)) throw new Error(`Can't find input editor element`);

  store.editorValue[target.id] = target.value;
};
