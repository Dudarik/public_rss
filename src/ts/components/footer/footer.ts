import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';

import footerTPL from '../../../templates/footer.html';
import './footer.scss';

export const footer = () => createHtmlElementFromTpl(footerTPL);
