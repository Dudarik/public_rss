import { ApiMethod, ApiSortWinners, ApiSortWinnersOrder } from '../enums/api';
import { ApiCustomConfig, ApiRequestBody } from '../interfaces/api';
import { Winner } from '../interfaces/winners';
import { api } from './api';
import { WINNERS_URL } from './config';

export const getWinners = async (
  page: number,
  limit: number,
  sort: ApiSortWinners,
  order: ApiSortWinnersOrder,
) => {
  const winUrlQueryString = `${WINNERS_URL}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
  const customConfig: ApiCustomConfig = {
    headers: {
      'X-Total-Count': limit.toString(),
    },
  };
  let winners: Winner[] = [];

  const response = await api.get(winUrlQueryString, customConfig);

  const hCoutWinners = response.headers.get('X-Total-Count');

  let countWinners = 0;

  const data = await response.json();

  if (hCoutWinners) countWinners = parseInt(hCoutWinners, 10);

  if (Array.isArray(data)) winners = Array.from(data);

  return {
    countWinners,
    winners,
  };
};

export const getWinner = async (id: number) => {
  const winUrlQueryString = `${WINNERS_URL}/${id}`;

  let winner: Winner = {
    id: -1,
    wins: 0,
    time: 0,
  };

  try {
    const request = await api.get(winUrlQueryString).then((w) => w.json());

    winner = Object(request);
  } catch (error) {
    return winner;
  }

  // if (!request) throw new Error(`Can't get winner with id=${id}`);

  // if (!request) return winner;

  return winner;
};

export const createWinner = async (winner: Omit<Winner, 'id'>) => {
  const request = await api.post(WINNERS_URL, winner);

  let newWinner: Winner = {
    id: -1,
    wins: 0,
    time: 0,
  };

  if (typeof request === 'object') newWinner = Object(request);

  return newWinner;
};

export const deleteWinner = async (id: number) => {
  const winUrlQueryString = `${WINNERS_URL}/${id}`;
  const customConfig = {
    method: ApiMethod.Delete,
  };

  if (await getWinner(id)) await api.delete(winUrlQueryString, customConfig);
};

export const updateWinner = async (winner: Winner) => {
  const carsUrlQueryString = `${WINNERS_URL}/${winner.id}`;
  const customConfig = {
    method: ApiMethod.Put,
  };
  const { wins, time, id } = winner;

  const requestBody: ApiRequestBody = { id, wins, time };

  let updWinner: Winner = {
    time: 0,
    wins: 0,
    id: 0,
  };

  if (await getWinner(winner.id)) {
    const request = await api.put(carsUrlQueryString, requestBody, customConfig);

    if (typeof request === 'object') updWinner = Object(request);
  }

  return updWinner;
};
