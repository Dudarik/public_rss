export const handlerStartOneCarBtnClick = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Start`);

  const element = document.querySelector(`#ufo-${target.dataset.carId}`);

  if (!(element instanceof HTMLElement)) throw new Error('err');

  console.log(element);
  let start: number;
  let previousTimeStamp: number;

  let done = false;

  function step(timestamp: number) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (!(element instanceof HTMLElement)) throw new Error('err');

    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly 200px
      const count = Math.min(0.1 * elapsed, 200);
      element.style.transform = `translateX(${count}px)`;
      if (count === 200) done = true;
    }

    if (elapsed < 2000) {
      // Stop the animation after 2 seconds
      previousTimeStamp = timestamp;
      if (!done) {
        window.requestAnimationFrame(step);
      }
    }
  }

  window.requestAnimationFrame(step);
  // console.log(event.target);
};
