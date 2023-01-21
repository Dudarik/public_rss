import { store } from '../../store';
import { driveCar, startEngine } from '../api/apiEngine';
import { ApiResponseStart } from '../interfaces/api/ApiResponseStart';
import { animation } from './animation';

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

    const requestDrive = store.cars.map((car) => driveCar(car.id));

    const winnerId = await Promise.any(requestDrive);

    console.log(winnerId, store.carsRaceTime[winnerId]);

    return requestDrive;
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
    return Promise.reject(new Error('Cant resolve promise'));
  }
};
