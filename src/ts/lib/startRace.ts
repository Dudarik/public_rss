import { store } from '../../store';
import { driveCar, startEngine } from '../api/apiEngine';
import { ApiResponseStart } from '../interfaces/api/ApiResponseStart';
import { animation } from './animation';

export const startRace = async () => {
  try {
    const requestStart = store.cars.map((car) => startEngine(car.id));
    const responseStart: ApiResponseStart[] = await Promise.all(requestStart);

    // const result = responseStart.map((item) => item.json());

    // console.log(responseStart);
    let paramId = 0;
    store.cars.forEach((car) => {
      store.carsRace[car.id] = true;
      animation(
        store.carsHTML[car.id],
        responseStart[paramId].distance / responseStart[paramId].velocity,
      );
      paramId += 1;
    });

    // console.log(result);
    const requestDrive = store.cars.map((car) => driveCar(car.id));
    console.log(await Promise.race(requestDrive));
    return requestDrive;
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
    return Promise.reject(new Error('Cant resolve promise'));
  }
};
