import footerTPL from '../../../templates/footer.html';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './footer.scss';

export const footer = () => createHtmlElementFromTpl(footerTPL);
