import { BtnTypes } from '../../enums';

export interface BtnOptions {
  btnType?: BtnTypes;
  handler?: EventListener;
  carId?: number;
  disabled?: boolean;
}
