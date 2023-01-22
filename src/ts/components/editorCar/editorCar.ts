import { store } from '../../../store';
import editorTPL from '../../../templates/editorCar.html';
import { createHtmlElementFromTpl } from '../../lib';
import { infoAndNav } from '../infoAndNav/infoAndNav';
import './editorCar.scss';

const setBtnElemetsToStore = (elem: Element) => {
  const inputCreate = elem.querySelector('#inputCreate');
  const inputEdit = elem.querySelector('#inputEdit');
  const inputColorCreate = elem.querySelector('#inputColorCreate');
  const inputColorEdit = elem.querySelector('#inputColorEdit');
  const btnEditorUpdate = elem.querySelector('#btnEditorUpdate');
  const btnEditorCreate = elem.querySelector('#btnEditorCreate');
  const btnStartRace = elem.querySelector('#btnStartRace');
  const btnResetRace = elem.querySelector('#btnResetRace');

  if (!(inputCreate instanceof HTMLInputElement) || !(inputEdit instanceof HTMLInputElement))
    throw new Error(`Can't find input for editor`);

  if (
    !(inputColorCreate instanceof HTMLInputElement) ||
    !(inputColorEdit instanceof HTMLInputElement)
  )
    throw new Error(`Can't find inputColor for editor`);

  if (
    !(btnEditorUpdate instanceof HTMLButtonElement) ||
    !(btnEditorCreate instanceof HTMLButtonElement)
  )
    throw new Error(`Can't find Create or Update button for editor`);

  if (!(btnStartRace instanceof HTMLButtonElement) || !(btnResetRace instanceof HTMLButtonElement))
    throw new Error(`Can't find Start or Reset button for editor`);

  store.editorCar.formInputCreate = inputCreate;
  store.editorCar.formInputEdit = inputEdit;

  store.editorCar.inputColorCreate = inputColorCreate;
  store.editorCar.inputColorEdit = inputColorEdit;

  store.editorCar.btnEditorUpdate = btnEditorUpdate;
  store.editorCar.btnEditorCreate = btnEditorCreate;

  store.editorCar.btnStartRace = btnStartRace;
  store.editorCar.btnResetRace = btnResetRace;
};

export const editorCar = (elems?: HTMLElement[]) => {
  const editorTpl = createHtmlElementFromTpl(editorTPL);

  if (elems && elems.length > 0) editorTpl.append(...elems);

  const infoAndNavHTML = infoAndNav();

  editorTpl.append(infoAndNavHTML);

  setBtnElemetsToStore(editorTpl);

  return editorTpl;
};
