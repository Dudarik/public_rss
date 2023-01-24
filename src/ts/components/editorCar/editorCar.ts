import { store } from '../../../store';
import { PropsInfoAndNav } from '../../interfaces/components';
import { createHtmlElementFromTpl } from '../../lib';
import { infoAndNav } from '../infoAndNav/infoAndNav';

import editorTPL from '../../../templates/editorCar.html';
import './editorCar.scss';
import { handlerChangeInputEditor } from '../../lib/handlers/handlerChangeInputEditor';

const setRaceBtnElemetsToStore = (elem: Element) => {
  const btnStartRace = elem.querySelector('#btnStartRace');
  const btnResetRace = elem.querySelector('#btnResetRace');

  if (!(btnStartRace instanceof HTMLButtonElement) || !(btnResetRace instanceof HTMLButtonElement))
    throw new Error(`Can't find Start or Reset button for editor`);

  if (store.inGame) {
    btnStartRace.setAttribute('disabled', 'disabled');
    btnResetRace.removeAttribute('disabled');
  }

  store.editorCar.btnStartRace = btnStartRace;
  store.editorCar.btnResetRace = btnResetRace;
};

const setCreatorElementsToStore = (elem: Element) => {
  const inputCreate = elem.querySelector('#inputCreate');
  const inputColorCreate = elem.querySelector('#inputColorCreate');
  const btnEditorCreate = elem.querySelector('#btnEditorCreate');

  if (!(inputCreate instanceof HTMLInputElement)) throw new Error(`Can't find input for creator`);

  if (!(inputColorCreate instanceof HTMLInputElement))
    throw new Error(`Can't find Create button for creator`);

  if (!(btnEditorCreate instanceof HTMLButtonElement))
    throw new Error(`Can't find Create or Update button for editor`);
  inputCreate.value = store.editorValue.inputCreate.length > 0 ? store.editorValue.inputCreate : '';
  inputColorCreate.value =
    store.editorValue.inputColorCreate.length > 0 ? store.editorValue.inputColorCreate : '#000000';

  inputCreate.addEventListener('change', handlerChangeInputEditor);
  inputColorCreate.addEventListener('change', handlerChangeInputEditor);

  store.editorCar.formInputCreate = inputCreate;
  store.editorCar.inputColorCreate = inputColorCreate;
  store.editorCar.btnEditorCreate = btnEditorCreate;
};

const setEditorElemetsToStore = (elem: Element) => {
  const inputEdit = elem.querySelector('#inputEdit');
  const inputColorEdit = elem.querySelector('#inputColorEdit');
  const btnEditorUpdate = elem.querySelector('#btnEditorUpdate');

  if (!(inputEdit instanceof HTMLInputElement)) throw new Error(`Can't find input for editor`);
  if (!(inputColorEdit instanceof HTMLInputElement))
    throw new Error(`Can't find inputColor for editor`);
  if (!(btnEditorUpdate instanceof HTMLButtonElement))
    throw new Error(`Can't find Create or Update button for editor`);

  if (store.editorValue.inputEdit.length > 0) {
    inputEdit.value = store.editorValue.inputEdit;
    inputColorEdit.value = store.editorValue.inputColorEdit;
  } else {
    inputEdit.setAttribute('disabled', 'disabled');
    inputColorEdit.setAttribute('disabled', 'disabled');
    btnEditorUpdate.setAttribute('disabled', 'disabled');
  }

  inputEdit.addEventListener('focus', handlerChangeInputEditor);
  inputEdit.addEventListener('change', handlerChangeInputEditor);
  inputColorEdit.addEventListener('change', handlerChangeInputEditor);

  store.editorCar.formInputEdit = inputEdit;

  store.editorCar.inputColorEdit = inputColorEdit;
  store.editorCar.btnEditorUpdate = btnEditorUpdate;
};

export const editorCar = (elems?: HTMLElement[]) => {
  const editorTpl = createHtmlElementFromTpl(editorTPL);

  if (elems && elems.length > 0) editorTpl.append(...elems);

  const infoAndNavProps: PropsInfoAndNav = {
    countTitleText: 'Garage',
    storeField: 'countCars',
    storeFieldCurrentPage: 'currentGaragePage',
    storeFieldPages: 'pagesCountGarage',
    btnPrevPageType: 'BtnGaragePrevPage',
    btnNextPageType: 'BtnGarageNextPage',
  };

  const infoAndNavHTML = infoAndNav(infoAndNavProps);

  editorTpl.append(infoAndNavHTML);

  setRaceBtnElemetsToStore(editorTpl);
  setCreatorElementsToStore(editorTpl);
  setEditorElemetsToStore(editorTpl);

  return editorTpl;
};
