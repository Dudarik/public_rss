import garagePageTPL from '../../../templates/garagePage.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './garagePage.scss';

export const garagePage = (elems: Element[]) => {
  const garagePageTpl = createHtmlElementFromTpl(garagePageTPL);

  if (elems.length > 0) garagePageTpl.append(...elems);

  return garagePageTpl;
};
