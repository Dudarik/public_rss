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

  // console.log(winners);

  const request = winners.map((winner) => getCar(winner.id));

  const winnersCars = await Promise.all(request);

  // console.log(cars);
  // console.log(winnersCars);
  // console.log(winners);

  store.winnersTable = winners.map((winner) =>
    Object.assign(winner, winnersCars.filter((car) => car.id === winner.id)[0]),
  );
};
