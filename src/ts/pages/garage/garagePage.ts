import { getCarsLines } from '../../lib/getCarsLines';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import { editorCar } from '../../components/editorCar/editorCar';

import garagePageTPL from '../../../templates/garagePage.html';
import './garagePage.scss';

export const garagePage = (elems?: Element[]) => {
  const garagePageTpl = createHtmlElementFromTpl(garagePageTPL);

  const editorHTML = editorCar();
  const carLinesHTML = getCarsLines();

  garagePageTpl.append(editorHTML, ...carLinesHTML);

  if (elems && elems.length > 0) garagePageTpl.prepend(...elems);

  return garagePageTpl;
};
