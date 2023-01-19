import winnersPageTPL from '../../../templates/winnersPage.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './winnersPage.scss';

export const winnersPage = () => createHtmlElementFromTpl(winnersPageTPL);
