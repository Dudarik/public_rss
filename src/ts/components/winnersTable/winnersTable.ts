import { store } from '../../../store';

import { handlerSortThClick } from '../../lib/handlers/handlerSortThClick';
import { createWinnerTableRow } from '../../lib/createWinnersTableRow';
import { ApiSortWinners } from '../../enums/api';
import { createHtmlElementFromTpl } from '../../lib';

import winnersTableTPL from '../../../templates/winnersTable.html';
import './winnersTable.scss';

export const winnersTable = (elems?: Element[]) => {
  const winnersTableTpl = createHtmlElementFromTpl(winnersTableTPL);

  const tBody = winnersTableTpl.querySelector('#table_winners_body');
  const sortWins = winnersTableTpl.querySelector('#sort_wins');
  const sortTime = winnersTableTpl.querySelector('#sort_time');

  if (!(sortWins instanceof HTMLTableCellElement) || !(sortTime instanceof HTMLTableCellElement))
    throw new Error(`Can't find TH wins element`);

  if (store.sortWinners === ApiSortWinners.Time)
    sortTime.classList.add(`sort_${store.SortOrderWinners}`);

  if (store.sortWinners === ApiSortWinners.Wins)
    sortWins.classList.add(`sort_${store.SortOrderWinners}`);

  sortWins.addEventListener('click', handlerSortThClick);
  sortTime.addEventListener('click', handlerSortThClick);

  if (!(tBody instanceof HTMLElement)) throw new Error(`Can't find tBody for winners`);

  const winnersHTML = store.winnersTable.map((winner, index) =>
    createWinnerTableRow(winner, index + 1 + 10 * (store.currentWinnersPage - 1)),
  );

  tBody.append(...winnersHTML);

  if (elems && elems.length > 0) winnersTableTpl.append(...elems);

  return winnersTableTpl;
};
