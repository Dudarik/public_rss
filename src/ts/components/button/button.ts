import './button.scss';

export const createButton = (handler: EventListener, btnName: string, carId?: number) => {
  const btn = document.createElement('button');

  btn.addEventListener('click', handler);

  btn.innerText = btnName;

  btn.classList.add('btn');

  if (carId) {
    btn.dataset.carId = carId.toString();
  }
  return btn;
};
