/* eslint-disable import/no-cycle */
import garagePageTPL from '../../../templates/garagePage.html';
import { getCarsLines } from '../../lib/getCarsLines';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './garagePage.scss';

export const garagePage = (elems?: Element[]) => {
  const garagePageTpl = createHtmlElementFromTpl(garagePageTPL);

  const carLinesHTML = getCarsLines();

  garagePageTpl.append(...carLinesHTML);
  if (elems && elems.length > 0) garagePageTpl.append(...elems);

  return garagePageTpl;
};
