import headerTPL from '../../../templates/header.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './header.scss';

export const header = () => createHtmlElementFromTpl(headerTPL);
