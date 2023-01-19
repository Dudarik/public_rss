import { Car } from './cars';

export interface Store {
  cars: Car[];
  inGame: boolean;
  totalCarsCount: number;
  currentGaragePage: number;
  currentWinnersPage: number;
  winnersTable: Car[];
  carsBrands: string[];
  carsModels: string[];
}
