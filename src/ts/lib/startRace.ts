import { store } from '../../store';
import { driveCar, startEngine } from '../api/apiEngine';
import { createWinner, getWinner, updateWinner } from '../api/apiWinners';

import { ApiResponseStart } from '../interfaces/api/ApiResponseStart';
import { animation } from './animation';
import { msToSec } from './msToSec';
import { setWinnersToStore } from './setWinnersToStore';

export const startRace = async () => {
  try {
    const requestStart = store.cars.map((car) => startEngine(car.id));
    const responseStart: ApiResponseStart[] = await Promise.all(requestStart);

    let paramId = 0;
    store.cars.forEach((car) => {
      store.carsRace[car.id] = true;
      store.carsRaceTime[car.id] =
        responseStart[paramId].distance / responseStart[paramId].velocity;
      animation(store.carsHTML[car.id], store.carsRaceTime[car.id]);
      paramId += 1;
    });

    store.editorCar.btnResetRace?.removeAttribute('disabled');

    const requestDrive = store.cars.map((car) => driveCar(car.id));
    const winnerId = await Promise.any(requestDrive);

    if (winnerId === undefined) {
      store.inGame = false;
      return undefined;
    }
    const winner = await getWinner(winnerId);
    const currWinTime = msToSec(store.carsRaceTime[winnerId]);

    store.lastWinner = { id: winnerId, time: currWinTime };

    if (winner.id === -1) {
      const newWinner = { wins: 1, time: currWinTime, id: winnerId };
      await createWinner(newWinner);
      store.inGame = false;
    } else {
      winner.wins += 1;
      if (winner.time > currWinTime) {
        winner.time = currWinTime;
      }
      await updateWinner(winner);
      store.inGame = false;
    }
    await setWinnersToStore();
    return requestDrive;
  } catch (error) {
    if (error instanceof Error) return 'nobody wins';
    return Promise.reject(new Error('Cant resolve promise'));
  }
};
