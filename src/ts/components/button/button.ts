import './button.scss';

export const createButton = (handler: EventListener, carId?: number) => {
  const btn = document.createElement('button');

  btn.addEventListener('click', handler);

  btn.classList.add('btn');

  if (carId) {
    btn.dataset.carId = carId.toString();
  }
  return btn;
};
