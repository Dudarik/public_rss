import { Car } from './cars';

export interface Store {
  cars: Car[];
  controls: {
    [id: number]: {
      select: HTMLButtonElement | null;
      start: HTMLButtonElement | null;
      remove: HTMLButtonElement | null;
      stop: HTMLButtonElement | null;
    };
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
