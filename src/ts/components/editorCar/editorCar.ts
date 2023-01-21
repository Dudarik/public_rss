import { store } from '../../../store';
import editorTPL from '../../../templates/editorCar.html';
import { createHtmlElementFromTpl } from '../../lib';
import { infoAndNav } from '../infoAndNav/infoAndNav';
import './editorCar.scss';

export const editorCar = (elems?: HTMLElement[]) => {
  const editorTpl = createHtmlElementFromTpl(editorTPL);

  const inputCreate = editorTpl.querySelector('#inputCreate');
  const inputEdit = editorTpl.querySelector('#inputEdit');
  const inputColorCreate = editorTpl.querySelector('#inputColorCreate');
  const inputColorEdit = editorTpl.querySelector('#inputColorEdit');
  const btnEditorUpdate = editorTpl.querySelector('#btnEditorUpdate');

  if (!(inputCreate instanceof HTMLInputElement) || !(inputEdit instanceof HTMLInputElement))
    throw new Error(`Can't find input for editor`);

  if (
    !(inputColorCreate instanceof HTMLInputElement) ||
    !(inputColorEdit instanceof HTMLInputElement)
  )
    throw new Error(`Can't find inputColor for editor`);

  if (!(btnEditorUpdate instanceof HTMLButtonElement))
    throw new Error(`Can't find Update button for editor`);

  store.editorCar.formInputCreate = inputCreate;
  store.editorCar.formInputEdit = inputEdit;
  store.editorCar.inputColorCreate = inputColorCreate;
  store.editorCar.inputColorEdit = inputColorEdit;
  store.editorCar.btnEditorUpdate = btnEditorUpdate;

  if (elems && elems.length > 0) editorTpl.append(...elems);

  const infoAndNavHTML = infoAndNav();

  editorTpl.append(infoAndNavHTML);

  return editorTpl;
};
