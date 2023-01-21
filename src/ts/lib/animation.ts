import { store } from '../../store';

/* eslint-disable no-param-reassign */
export const animation = (elem: HTMLElement, duration: number) => {
  const start = performance.now();

  let carId = -1;
  if (elem.dataset.carId !== undefined) carId = parseInt(elem.dataset.carId, 10);

  requestAnimationFrame(function anim(time) {
    const timeFraction = (time - start) / duration;
    elem.style.transform = `translate(${timeFraction * 90}%)`;

    if (timeFraction < 1 && store.carsRace[carId]) {
      requestAnimationFrame(anim);
    }
  });
};
