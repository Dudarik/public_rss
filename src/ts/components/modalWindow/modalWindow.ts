import { PropsModalContent } from '../../interfaces/components';
import { createHtmlElementFromTpl } from '../../lib';
import { handlerModalClose } from '../../lib/handlers/handlerModalClose';

import modalWindowTPL from '../../../templates/modalWindow.html';
import './modalWindow.scss';

export const modalWindow = (content: PropsModalContent) => {
  const modalWindowTpl = createHtmlElementFromTpl(modalWindowTPL);

  const { title, text } = content;

  const modalOwerlay = modalWindowTpl.querySelector('#modalOwerlay');
  const modalTitle = modalWindowTpl.querySelector('#modalTitle');
  const modalText = modalWindowTpl.querySelector('#modalText');
  const modalBtnClose = modalWindowTpl.querySelector('#modalClose');

  if (!(modalOwerlay instanceof HTMLDivElement))
    throw new Error(`Can't find close modal overlay DIV`);

  if (!(modalTitle instanceof HTMLElement) || !(modalText instanceof HTMLDivElement))
    throw new Error(`Can't find modal title or text`);

  if (!(modalBtnClose instanceof HTMLButtonElement))
    throw new Error(`Can't find close modal button`);

  modalOwerlay.addEventListener('click', handlerModalClose);
  modalBtnClose.addEventListener('click', handlerModalClose);

  modalTitle.innerText = title;
  modalText.innerHTML = text;

  document.body.classList.add('stop-scrolling');

  return modalWindowTpl;
};
