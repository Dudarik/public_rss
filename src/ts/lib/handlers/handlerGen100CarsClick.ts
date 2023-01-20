import { generateCars } from '../generateCars';

export const handlerGen100CarsClick = async (event: Event) => {
  event.preventDefault();
  generateCars(100);
};
