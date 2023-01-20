import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import { handlerMainControls } from '../../lib/handlers/handlerMainControls';

import mainTPL from '../../../templates/main.html';
import './main.scss';

export const main = (elems?: Element[]) => {
  const mainTpl = createHtmlElementFromTpl(mainTPL);

  mainTpl.addEventListener('click', handlerMainControls);

  if (elems && elems.length > 0) mainTpl.append(...elems);
  return mainTpl;
};
