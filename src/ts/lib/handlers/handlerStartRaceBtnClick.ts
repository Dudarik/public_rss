import { startRace } from '../startRace';

export const handlerStartRaceBtnClick = async (event: Event) => {
  event.preventDefault();
  const { target } = event;

  if (!(target instanceof HTMLButtonElement)) throw new Error(`Can't find Start button`);

  target.setAttribute('disabled', 'disabled');
  await startRace();
  console.log('StartRace click');
};
