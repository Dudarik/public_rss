import carLineTPL from '../../../templates/carLine.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './carLine.scss';

export const carLine = (elems: Element[]) => {
  const carLineTpl = createHtmlElementFromTpl(carLineTPL);

  if (elems.length > 0) carLineTpl.append(...elems);

  return carLineTpl;
};
