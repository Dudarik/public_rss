import { store } from '../../store';
import { createCar } from '../api/apiCars';
import { getRandomColor, getRandomFromZero } from './getRandom';

export const generateCars = (count: number) => {
  if (count < 1) throw new Error(`Can't create Zero car or low`);

  for (let i = 0; i < count; i += 1) {
    const brand = store.carsBrands[getRandomFromZero(store.carsBrands.length - 1)];
    const model = store.carsModels[getRandomFromZero(store.carsModels.length - 1)];
    const color = getRandomColor();

    createCar({ name: `${brand} ${model}`, color });
  }
};
