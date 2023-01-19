import { Car } from './cars';

export interface Store {
  cars: Car[];
  controls: {
    [id: number]: HTMLElement[];
  };
  renderPosition: {
    [id: number]: number;
  };
  inGame: boolean;
  totalCarsCount: number;
  currentGaragePage: number;
  currentWinnersPage: number;
  winnersTable: Car[];
  carsBrands: string[];
  carsModels: string[];
}
