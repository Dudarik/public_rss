import { store } from '../../../store';
import { BtnTypes } from '../../enums';
import { Car } from '../../interfaces/cars';
import { createHtmlElementFromTpl } from '../../lib/createHtmlElement';
import { createButton } from '../button/button';

import carLineTPL from '../../../templates/carLine.html';
import './carLine.scss';

export const createControlButtons = (carId: number) => {
  store.controls[carId].select = createButton('Select', { btnType: BtnTypes.BtnSelectOne, carId });
  store.controls[carId].remove = createButton('Remove', { btnType: BtnTypes.BtnRemoveOne, carId });
  store.controls[carId].start = createButton('Start', { btnType: BtnTypes.BtnStartOne, carId });
  store.controls[carId].reset = createButton('Reset', { btnType: BtnTypes.BtnResetOne, carId });

  return [
    <Node>store.controls[carId].select,
    <Node>store.controls[carId].remove,
    <Node>store.controls[carId].start,
    <Node>store.controls[carId].reset,
  ];
};

export const carLine = (car: Car, elems?: Element[]) => {
  const carLineTpl = createHtmlElementFromTpl(carLineTPL);

  const img = carLineTpl.querySelector('#car_img');
  const carName = carLineTpl.querySelector('#car_name');
  const carlineControls = carLineTpl.querySelector('#carline_controls');
  const ufo = carLineTpl.querySelector('#ufo');

  if (!(img instanceof SVGElement)) throw new Error("can't find SVG picture");
  if (!(carName instanceof HTMLDivElement)) throw new Error("can't find DIV element for carname");
  if (!(carlineControls instanceof HTMLDivElement))
    throw new Error("can't find DIV element for car controls");
  if (!(ufo instanceof HTMLDivElement)) throw new Error("can't find DIV element for ufo");

  if (!store.inGame) {
    ufo.setAttribute('id', `ufo-${car.id}`);
    ufo.dataset.carId = car.id.toString();
    store.carsHTML[car.id] = ufo;
  } else {
    ufo.innerHTML = '';
    ufo.append(store.carsHTML[car.id]);
  }

  carlineControls.append(...createControlButtons(car.id));

  img.setAttribute('fill', car.color);
  carName.innerText = car.name;

  if (elems && elems.length > 0) carLineTpl.append(...elems);

  return carLineTpl;
};
