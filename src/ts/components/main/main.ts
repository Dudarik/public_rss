import mainTPL from '../../../templates/main.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './main.scss';

export const main = () => createHtmlElementFromTpl(mainTPL);
