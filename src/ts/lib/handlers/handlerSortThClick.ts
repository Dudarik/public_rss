import { store } from '../../../store';
import { ApiSortWinners, ApiSortWinnersOrder } from '../../enums/api';
import { createWinnerTableRow } from '../createWinnersTableRow';
import { setWinnersToStore } from '../setWinnersToStore';

export const handlerSortThClick = async (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLElement)) throw new Error(`Can't find sort TH`);

  const sortBy = target.id.slice(5);

  const thToRemoveClass = document.querySelector(`#sort_${store.sortWinners}`);

  if (!(thToRemoveClass instanceof HTMLElement)) throw new Error(`Can't find thToRemoveClass`);

  thToRemoveClass.classList.remove(`sort_${store.SortOrderWinners}`);

  switch (sortBy) {
    case ApiSortWinners.Wins:
      store.sortWinners = ApiSortWinners.Wins;
      break;
    case ApiSortWinners.Time:
      store.sortWinners = ApiSortWinners.Time;
      break;
    default:
      break;
  }

  if (store.SortOrderWinners === ApiSortWinnersOrder.Desc)
    store.SortOrderWinners = ApiSortWinnersOrder.Asc;
  else {
    store.SortOrderWinners = ApiSortWinnersOrder.Desc;
  }

  target.classList.add(`sort_${store.SortOrderWinners}`);

  await setWinnersToStore();

  const winnersTableBody = document.querySelector('#table_winners_body');

  if (!(winnersTableBody instanceof HTMLElement)) throw new Error(`Can't find main section`);

  winnersTableBody.innerHTML = '';

  const winnersHTML = store.winnersTable.map((winner, index) =>
    createWinnerTableRow(winner, index + 1 + 10 * (store.currentWinnersPage - 1)),
  );
  console.log(...winnersHTML);

  winnersTableBody.append(...winnersHTML);
};
