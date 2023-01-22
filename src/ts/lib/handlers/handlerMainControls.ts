import { BtnTypes } from '../../enums';
import { handlerCreateCarClick } from './handlerCreateCarClick';
import { handlerGen100CarsClick } from './handlerGen100CarsClick';
import { handlerRemoveCarBtnClick } from './handlerRemoveCarBtnClick';
import { handlerResetRaceBtnClick } from './handlerResetRaceBtnClick';
import { handlerSelectCarBtnClick } from './handlerSelectCarBtnClick';

import { handlerStartOneCarBtnClick } from './handlerStartOneCarBtnClick';
import { handlerStartRaceBtnClick } from './handlerStartRaceBtnClick';
import { handlerStopOneCarBtnClick } from './handlerStopOneCarBtnClick';
import { handlerUpdateCarClick } from './handlerUpdateCarClick';

export const handlerMainControls = (event: Event) => {
  const { target } = event;

  if (target instanceof HTMLButtonElement) {
    const { btnType } = target.dataset;
    console.log(btnType);

    switch (btnType) {
      case BtnTypes.BtnStartOne:
        handlerStartOneCarBtnClick(event);
        break;
      case BtnTypes.BtnResetOne:
        handlerStopOneCarBtnClick(event);
        break;
      case BtnTypes.BtnRemoveOne:
        handlerRemoveCarBtnClick(event);
        break;
      case BtnTypes.BtnSelectOne:
        handlerSelectCarBtnClick(event);
        break;
      case BtnTypes.BtnAdd100Cars:
        handlerGen100CarsClick(event);
        break;
      case BtnTypes.BtnStartRace:
        handlerStartRaceBtnClick(event);
        break;
      case BtnTypes.BtnResetRace:
        handlerResetRaceBtnClick(event);
        break;
      case BtnTypes.BtnCreateCar:
        handlerCreateCarClick(event);
        break;
      case BtnTypes.BtnUpdateEdit:
        handlerUpdateCarClick(event);
        break;
      default:
        break;
    }
  }
};
