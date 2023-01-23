import { store } from '../../store';
import { getCar } from '../api/apiCars';
import { getWinners } from '../api/apiWinners';

export const setWinnersToStore = async () => {
  const { winners, countWinners } = await getWinners(
    store.currentWinnersPage,
    store.winnerPerPage,
    store.sortWinners,
    store.SortOrderWinners,
  );

  store.countWinners = countWinners;

  store.pagesCountWinner = Math.ceil(countWinners / store.winnerPerPage);

  const request = winners.map((winner) => getCar(winner.id));

  const winnersCars = await Promise.all(request);

  store.winnersTable = winners.map((winner) =>
    Object.assign(winner, winnersCars.filter((car) => car.id === winner.id)[0]),
  );
};
