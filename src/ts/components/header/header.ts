import headerTPL from '../../../templates/header.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import { handlerToGarageClick } from '../../lib/handlers/handlerToGarageClick';
import { handlerToWinnersClick } from '../../lib/handlers/handlerToWinnersClick';
import './header.scss';

export const header = () => {
  const headerTpl = createHtmlElementFromTpl(headerTPL);

  const toWinBtn = headerTpl.querySelector('#btnToWinners');
  const toGarBtn = headerTpl.querySelector('#btnToGarage');

  toWinBtn?.addEventListener('click', handlerToWinnersClick);
  toGarBtn?.addEventListener('click', handlerToGarageClick);
  return headerTpl;
};
