import { ApiSortWinners, ApiSortWinnersOrder } from '../enums/api';
import { Car, WinnersCar } from './cars';

export interface Store {
  cars: Car[];

  countCars: number;
  countWinners: number;

  carsRaceTime: {
    [id: number]: number;
  };
  carsRace: {
    [id: number]: boolean;
  };
  carsHTML: {
    [id: number]: HTMLDivElement;
  };
  controls: {
    [id: number]: {
      select: HTMLButtonElement | null;
      start: HTMLButtonElement | null;
      remove: HTMLButtonElement | null;
      reset: HTMLButtonElement | null;
    };
  };
  editorCar: {
    carEditId: number;
    formInputCreate: HTMLInputElement | null;
    formInputEdit: HTMLInputElement | null;
    inputColorCreate: HTMLInputElement | null;
    inputColorEdit: HTMLInputElement | null;
    btnEditorUpdate: HTMLButtonElement | null;
    btnEditorCreate: HTMLButtonElement | null;
    btnStartRace: HTMLButtonElement | null;
    btnResetRace: HTMLButtonElement | null;
    btnGaragePrevPage: HTMLButtonElement | null;
    btnGarageNextPage: HTMLButtonElement | null;
  };
  renderPosition: {
    [id: number]: number;
  };
  inGame: boolean;

  currentGaragePage: number;
  pagesCountGarage: number;
  carsPerPage: number;

  currentWinnersPage: number;
  pagesCountWinner: number;
  winnerPerPage: number;
  sortWinners: ApiSortWinners;
  SortOrderWinners: ApiSortWinnersOrder;

  winnersTable: WinnersCar[];
  carsBrands: string[];
  carsModels: string[];
}
