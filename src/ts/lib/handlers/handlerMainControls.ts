import { Handlers } from '../../interfaces/components';
import { handlerCreateCarClick } from './handlerCreateCarClick';
import { handlerGen100CarsClick } from './handlerGen100CarsClick';
import { handlerNextPageGarageClick } from './handlerNextPageGarageClick';
import { handlerNextPageWinnerClick } from './handlerNextPageWinnerClick';
import { handlerPrevPageGarageClick } from './handlerPrevPageGarageClick';
import { handlerPrevPageWinnerClick } from './handlerPrevPageWinnerClick';
import { handlerRemoveCarBtnClick } from './handlerRemoveCarBtnClick';
import { handlerResetRaceBtnClick } from './handlerResetRaceBtnClick';
import { handlerSelectCarBtnClick } from './handlerSelectCarBtnClick';

import { handlerStartOneCarBtnClick } from './handlerStartOneCarBtnClick';
import { handlerStartRaceBtnClick } from './handlerStartRaceBtnClick';
import { handlerStopOneCarBtnClick } from './handlerStopOneCarBtnClick';
import { handlerUpdateCarClick } from './handlerUpdateCarClick';

const handlers: Handlers = {
  BtnStartOne: (event: Event) => handlerStartOneCarBtnClick(event),
  BtnResetOne: (event: Event) => handlerStopOneCarBtnClick(event),
  BtnRemoveOne: (event: Event) => handlerRemoveCarBtnClick(event),
  BtnSelectOne: (event: Event) => handlerSelectCarBtnClick(event),
  BtnAdd100Cars: (event: Event) => handlerGen100CarsClick(event),
  BtnStartRace: (event: Event) => handlerStartRaceBtnClick(event),
  BtnResetRace: (event: Event) => handlerResetRaceBtnClick(event),
  BtnCreateCar: (event: Event) => handlerCreateCarClick(event),
  BtnUpdateEdit: (event: Event) => handlerUpdateCarClick(event),
  BtnGarageNextPage: (event: Event) => handlerNextPageGarageClick(event),
  BtnGaragePrevPage: (event: Event) => handlerPrevPageGarageClick(event),
  BtnWinnerNextPage: (event: Event) => handlerNextPageWinnerClick(event),
  BtnWinnerPrevPage: (event: Event) => handlerPrevPageWinnerClick(event),
};

export const handlerMainControls = (event: Event) => {
  const { target } = event;

  if (target instanceof HTMLButtonElement) {
    const { btnType } = target.dataset;

    if (btnType) handlers[btnType](event);
  }
};
