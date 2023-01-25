import { store } from '../../../store';
import { modalWindow } from '../../components/modalWindow/modalWindow';
import { disabledCarBtns } from '../disabledCarBtns';
import { startRace } from '../startRace';

export const handlerStartRaceBtnClick = async (event: Event) => {
  event.preventDefault();

  store.editorCar.btnStartRace?.setAttribute('disabled', 'disabled');

  store.cars.forEach((car) => {
    disabledCarBtns(car.id);
  });

  store.inGame = true;
  const race = await startRace();

  if (store.inGame && (race !== 'nobody wins' || race !== undefined)) {
    const winnerName = store.cars.filter((car) => car.id === store.lastWinner.id)[0].name;
    const modalWindowHTML = modalWindow({
      title: `Congratulations: ${winnerName}`,
      text: `Win in ${store.lastWinner.time} seconds!`,
    });
    document.body.prepend(modalWindowHTML);
  }
};
