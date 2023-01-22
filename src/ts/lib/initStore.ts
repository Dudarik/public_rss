import { store } from '../../store';
import { getCar, getCars } from '../api/apiCars';
import { getWinners } from '../api/apiWinners';
import { initButtonsInStore } from './initButtonsInStore';
import { initCarsRace } from './initCarsRace';

export const initStore = async () => {
  const { cars, countCars } = await getCars(store.currentGaragePage, store.carsPerPage);
  store.cars = cars;
  store.countCars = countCars;
  store.pagesCountGarage = Math.ceil(countCars / store.carsPerPage);

  const { winners, countWinners } = await getWinners(
    store.currentWinnersPage,
    store.winnerPerPage,
    store.sortWinners,
    store.SortOrderWinners,
  );

  store.countWinners = countWinners;

  const request = winners.map((winner) => getCar(winner.id));

  const winnersCars = await Promise.all(request);

  console.log(cars);
  console.log(winnersCars);
  console.log(winners);

  store.winnersTable = winners.map((winner) =>
    Object.assign(winner, winnersCars.filter((car) => car.id === winner.id)[0]),
  );

  initCarsRace();
  initButtonsInStore();
};
