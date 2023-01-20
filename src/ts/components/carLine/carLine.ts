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

export const createControlButtons = (id: number) => {
  store.controls[id].select = createButton(handlerSelectCarBtnClick, 'Select', id);
  store.controls[id].remove = createButton(handlerRemoveCarBtnClick, 'Remove', id);
  store.controls[id].start = createButton(handlerStartOneCarBtnClick, 'Start', id);
  store.controls[id].stop = createButton(handlerStopOneCarBtnClick, 'Stop', id);

  return [
    <Node>store.controls[id].select,
    <Node>store.controls[id].remove,
    <Node>store.controls[id].start,
    <Node>store.controls[id].stop,
  ];
};

export const carLine = (car: Car, elems?: Element[]) => {
  const carLineTpl = createHtmlElementFromTpl(carLineTPL);

  const img = carLineTpl.querySelector('#car_img');
  const carName = carLineTpl.querySelector('#car_name');
  const carlineControls = carLineTpl.querySelector('#carline_controls');

  if (!(img instanceof SVGElement)) throw new Error("can't find SVG picture");
  if (!(carName instanceof HTMLDivElement)) throw new Error("can't find DIV element for carname");
  if (!(carlineControls instanceof HTMLDivElement))
    throw new Error("can't find DIV element for car controls");

  carlineControls.append(...createControlButtons(car.id));

  img.setAttribute('fill', car.color);
  carName.innerText = car.name;

  if (elems && elems.length > 0) carLineTpl.append(...elems);

  return carLineTpl;
};
