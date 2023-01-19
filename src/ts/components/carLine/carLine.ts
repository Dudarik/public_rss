import carLineTPL from '../../../templates/carLine.html';
import { Car } from '../../interfaces/cars';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import './carLine.scss';

export const carLine = (car: Car, elems?: Element[]) => {
  const carLineTpl = createHtmlElementFromTpl(carLineTPL);

  const img = carLineTpl.querySelector('#car_img');
  const carName = carLineTpl.querySelector('#car_name');

  if (!(img instanceof SVGElement)) throw new Error("can't find SVG picture");
  if (!(carName instanceof HTMLDivElement)) throw new Error("can't find DIV element for carname");

  img.setAttribute('fill', car.color);
  carName.innerText = car.name;

  if (elems && elems.length > 0) carLineTpl.append(...elems);

  return carLineTpl;
};
