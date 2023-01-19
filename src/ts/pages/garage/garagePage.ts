import garagePageTPL from '../../../templates/garagePage.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './garagePage.scss';

export const garagePage = () => createHtmlElementFromTpl(garagePageTPL);
