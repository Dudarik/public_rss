import mainTPL from '../../../templates/main.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './main.scss';

export const main = (elems?: Element[]) => {
  const mainTpl = createHtmlElementFromTpl(mainTPL);

  if (elems && elems.length > 0) mainTpl.append(...elems);
  return mainTpl;
};
