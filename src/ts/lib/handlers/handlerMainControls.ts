import { BtnTypes } from '../../enums';
import { handlerRemoveCarBtnClick } from './handlerRemoveCarBtnClick';
import { handlerSelectCarBtnClick } from './handlerSelectCarBtnClick';

import { handlerStartOneCarBtnClick } from './handlerStartOneCarBtnClick';
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
      default:
        break;
    }
  }
};
