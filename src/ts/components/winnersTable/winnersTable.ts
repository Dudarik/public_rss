import { store } from '../../../store';
import winnersTableTPL from '../../../templates/winnersTable.html';
import { WinnersCar } from '../../interfaces/cars';
import { createHtmlElementFromTpl } from '../../lib';
import { carSvg } from '../carSvg';

import './winnersTable.scss';

const createWinnerTableRow = (winner: WinnersCar, rowNumber: number) => {
  const tr = document.createElement('tr');

  const tdId = document.createElement('td');
  const tdCarImage = document.createElement('td');
  const tdCarName = document.createElement('td');
  const tdWins = document.createElement('td');
  const tdBestTime = document.createElement('td');

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.innerHTML = carSvg;

  svg.setAttribute('fill', winner.color.toString());
  svg.setAttribute('width', '32px');
  svg.setAttribute('height', '32px');
  svg.setAttribute('viewBox', '0 0 512.000000 512.000000');

  tdId.innerText = rowNumber.toString();
  tdCarImage.append(svg);
  tdCarName.innerText = winner.name;
  tdWins.innerText = winner.wins.toString();
  tdBestTime.innerText = winner.time.toString();

  tr.append(tdId, tdCarImage, tdCarName, tdWins, tdBestTime);
  return tr;
};

export const winnersTable = (elems?: Element[]) => {
  const winnersTableTpl = createHtmlElementFromTpl(winnersTableTPL);

  const tBody = winnersTableTpl.querySelector('#table_winners_body');

  if (!(tBody instanceof HTMLElement)) throw new Error(`Can't find tBody for winners`);

  const winnersHTML = store.winnersTable.map((winner, index) =>
    createWinnerTableRow(winner, index + 1 + 10 * (store.currentWinnersPage - 1)),
  );

  winnersTableTpl.append(...winnersHTML);

  if (elems && elems.length > 0) winnersTableTpl.append(...elems);

  return winnersTableTpl;
};
