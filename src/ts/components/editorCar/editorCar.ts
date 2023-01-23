import { store } from '../../../store';
import editorTPL from '../../../templates/editorCar.html';
import { PropsInfoAndNav } from '../../interfaces/components';
import { createHtmlElementFromTpl } from '../../lib';
import { infoAndNav } from '../infoAndNav/infoAndNav';
import './editorCar.scss';

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

const setEditorBtnElemetsToStore = (elem: Element) => {
  const inputCreate = elem.querySelector('#inputCreate');
  const inputEdit = elem.querySelector('#inputEdit');
  const inputColorCreate = elem.querySelector('#inputColorCreate');
  const inputColorEdit = elem.querySelector('#inputColorEdit');
  const btnEditorUpdate = elem.querySelector('#btnEditorUpdate');
  const btnEditorCreate = elem.querySelector('#btnEditorCreate');

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

  store.editorCar.formInputCreate = inputCreate;
  store.editorCar.formInputEdit = inputEdit;

  store.editorCar.inputColorCreate = inputColorCreate;
  store.editorCar.inputColorEdit = inputColorEdit;

  store.editorCar.btnEditorUpdate = btnEditorUpdate;
  store.editorCar.btnEditorCreate = btnEditorCreate;
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
  setEditorBtnElemetsToStore(editorTpl);

  return editorTpl;
};
