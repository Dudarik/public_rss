import { BtnOptions } from '../../interfaces/components';
import './button.scss';

export const createButton = (btnName: string, btnOptions: BtnOptions) => {
  const { btnType, handler, carId } = btnOptions;

  const btn = document.createElement('button');

  btn.innerText = btnName;

  btn.classList.add('btn');

  btn.dataset.btnType = btnType;

  if (typeof handler === 'function') btn.addEventListener('click', handler);
  if (carId) {
    btn.dataset.carId = carId.toString();
  }
  return btn;
};
