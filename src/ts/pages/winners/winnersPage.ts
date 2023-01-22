import winnersPageTPL from '../../../templates/winnersPage.html';
import { infoAndNav } from '../../components/infoAndNav/infoAndNav';
import { winnersTable } from '../../components/winnersTable/winnersTable';
import { PropsInfoAndNav } from '../../interfaces/components/PropsInfoAndNav';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './winnersPage.scss';

export const winnersPage = () => {
  const winnersPageTpl = createHtmlElementFromTpl(winnersPageTPL);

  const winnersTableHTML = winnersTable();

  const infoAndNavProps: PropsInfoAndNav = {
    countTitleText: 'Winners',
    storeField: 'countWinners',
    storeFieldCurrentPage: 'currentWinnersPage',
    storeFieldPages: 'pagesCountWinner',
    btnPrevPageType: 'BtnWinnerPrevPage',
    btnNextPageType: 'BtnWinnerNextPage',
  };

  const infoAndNavHTML = infoAndNav(infoAndNavProps);
  winnersPageTpl.append(infoAndNavHTML, winnersTableHTML);

  return winnersPageTpl;
};
