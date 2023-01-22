import winnersPageTPL from '../../../templates/winnersPage.html';
import { winnersTable } from '../../components/winnersTable/winnersTable';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './winnersPage.scss';

export const winnersPage = () => {
  const winnersPageTpl = createHtmlElementFromTpl(winnersPageTPL);

  const winnersTableHTML = winnersTable();

  winnersPageTpl.append(winnersTableHTML);

  return winnersPageTpl;
};
