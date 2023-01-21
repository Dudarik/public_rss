import { store } from '../../store';
import { createCar } from '../api/apiCars';
import { Car } from '../interfaces/cars';
import { getRandomColor, getRandomFromZero } from './getRandom';

export const generateCars = async (count: number) => {
  if (count < 1) throw new Error(`Can't create Zero car or low`);
  const newCarsArr: Omit<Car, 'id'>[] = [];

  for (let i = 0; i < count; i += 1) {
    const brand = store.carsBrands[getRandomFromZero(store.carsBrands.length - 1)];
    const model = store.carsModels[getRandomFromZero(store.carsModels.length - 1)];
    const color = getRandomColor();

    newCarsArr.push({ name: `${brand} ${model}`, color });
  }

  const request = newCarsArr.map((car) => createCar(car));

  await Promise.allSettled(request);
};
