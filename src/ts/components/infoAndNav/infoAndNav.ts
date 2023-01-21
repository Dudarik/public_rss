import { store } from '../../../store';
import infoAndNavTPL from '../../../templates/infoAndNav.html';
import { createHtmlElementFromTpl } from '../../lib';
import './infoAndNav.scss';

export const infoAndNav = () => {
  const infoAndNavTpl = createHtmlElementFromTpl(infoAndNavTPL);

  const countCars = infoAndNavTpl.querySelector('#countCars');
  const currentPage = infoAndNavTpl.querySelector('#currentPage');

  if (!(countCars instanceof HTMLSpanElement) || !(currentPage instanceof HTMLSpanElement))
    throw new Error(`Can't find span for info`);

  countCars.innerText = store.countCars.toString();
  currentPage.innerText = store.currentGaragePage.toString();

  return infoAndNavTpl;
};
