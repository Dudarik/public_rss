import { store } from '../../../store';
import infoAndNavTPL from '../../../templates/infoAndNav.html';
import { createHtmlElementFromTpl } from '../../lib';
import './infoAndNav.scss';

export const infoAndNav = () => {
  const infoAndNavTpl = createHtmlElementFromTpl(infoAndNavTPL);

  const countCars = infoAndNavTpl.querySelector('#countCars');
  const currentPage = infoAndNavTpl.querySelector('#currentPage');
  const pages = infoAndNavTpl.querySelector('#pages');

  const btnGaragePrevPage = infoAndNavTpl.querySelector('#btnGaragePrevPage');
  const btnGarageNextPage = infoAndNavTpl.querySelector('#btnGarageNextPage');

  if (
    !(countCars instanceof HTMLSpanElement) ||
    !(currentPage instanceof HTMLSpanElement) ||
    !(pages instanceof HTMLSpanElement)
  )
    throw new Error(`Can't find span for info`);

  if (
    !(btnGaragePrevPage instanceof HTMLButtonElement) ||
    !(btnGarageNextPage instanceof HTMLButtonElement)
  )
    throw new Error(`Can't find buttons for Nav`);

  countCars.innerText = store.countCars.toString();
  currentPage.innerText = store.currentGaragePage.toString();
  pages.innerText = store.pagesCountGarage.toString();

  return infoAndNavTpl;
};
