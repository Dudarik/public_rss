export const handlerStopOneCarBtnClick = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find button element Start`);

  const element = document.querySelector(`#ufo-${target.dataset.carId}`);

  if (!(element instanceof HTMLElement)) throw new Error('err');

  console.log('StopOneCar click');
};
