/* eslint-disable no-param-reassign */
export const animation = (elem: HTMLElement, duration: number, stop = false) => {
  const start = performance.now();
  console.log(elem);

  requestAnimationFrame(function anim(time) {
    const timeFraction = (time - start) / duration;
    elem.style.transform = `translate(${timeFraction * 90}%)`;

    if (timeFraction < 1 && !stop) {
      requestAnimationFrame(anim);
    }
  });
};
