import { carSvg } from '../components/carSvg';
import { WinnersCar } from '../interfaces/cars';

export const createWinnerTableRow = (winner: WinnersCar, rowNumber: number) => {
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

  tdCarName.classList.add('car_name');

  tr.append(tdId, tdCarImage, tdCarName, tdWins, tdBestTime);
  return tr;
};
