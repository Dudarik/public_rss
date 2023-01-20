import { store } from '../../../store';
import carLineTPL from '../../../templates/carLine.html';
import { Car } from '../../interfaces/cars';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import {
  handlerRemoveCarBtnClick,
  handlerSelectCarBtnClick,
  handlerStartOneCarBtnClick,
  handlerStopOneCarBtnClick,
} from '../../lib/handlers';
import { createButton } from '../button/button';
import './carLine.scss';

export const carLine = (car: Car, elems?: Element[]) => {
  const carLineTpl = createHtmlElementFromTpl(carLineTPL);

  const img = carLineTpl.querySelector('#car_img');
  const carName = carLineTpl.querySelector('#car_name');
  const carlineControls = carLineTpl.querySelector('#carline_controls');

  store.controls[car.id].select = createButton(handlerSelectCarBtnClick, 'Select', car.id);
  store.controls[car.id].remove = createButton(handlerRemoveCarBtnClick, 'Remove', car.id);
  store.controls[car.id].start = createButton(handlerStartOneCarBtnClick, 'Start', car.id);
  store.controls[car.id].stop = createButton(handlerStopOneCarBtnClick, 'Stop', car.id);

  if (!(img instanceof SVGElement)) throw new Error("can't find SVG picture");
  if (!(carName instanceof HTMLDivElement)) throw new Error("can't find DIV element for carname");
  if (!(carlineControls instanceof HTMLDivElement))
    throw new Error("can't find DIV element for car controls");

  carlineControls.append(
    <Node>store.controls[car.id].select,
    <Node>store.controls[car.id].remove,
    <Node>store.controls[car.id].start,
    <Node>store.controls[car.id].stop,
  );

  console.log(carlineControls);

  img.setAttribute('fill', car.color);
  carName.innerText = car.name;

  if (elems && elems.length > 0) carLineTpl.append(...elems);

  return carLineTpl;
};
