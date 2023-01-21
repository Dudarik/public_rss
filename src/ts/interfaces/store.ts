import { Car } from './cars';

export interface Store {
  cars: Car[];
  countCars: number;
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
  };
  renderPosition: {
    [id: number]: number;
  };
  inGame: boolean;
  currentGaragePage: number;
  currentWinnersPage: number;
  winnersTable: Car[];
  carsBrands: string[];
  carsModels: string[];
}
