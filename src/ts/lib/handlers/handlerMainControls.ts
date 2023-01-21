import { BtnTypes } from '../../enums';
import { handlerGen100CarsClick } from './handlerGen100CarsClick';
import { handlerRemoveCarBtnClick } from './handlerRemoveCarBtnClick';
import { handlerResetRaceBtnClick } from './handlerResetRaceBtnClick';
import { handlerSelectCarBtnClick } from './handlerSelectCarBtnClick';

import { handlerStartOneCarBtnClick } from './handlerStartOneCarBtnClick';
import { handlerStartRaceBtnClick } from './handlerStartRaceBtnClick';
import { handlerStopOneCarBtnClick } from './handlerStopOneCarBtnClick';

export const handlerMainControls = (event: Event) => {
  const { target } = event;

  if (target instanceof HTMLButtonElement) {
    const { btnType } = target.dataset;

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
      default:
        break;
    }
  }
};
