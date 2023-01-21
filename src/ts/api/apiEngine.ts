/* eslint-disable import/prefer-default-export */
import { store } from '../../store';
import { ApiEngineStatus } from '../enums/api';
import { api } from './api';
import { ENGINE_URL } from './config';

export const startStopEngine = async (id: number, engineStatus: ApiEngineStatus) => {
  const carsUrlQueryString = `${ENGINE_URL}?id=${id}&status=${engineStatus}`;
  const body = {
    id: id.toString(),
    status: engineStatus,
  };

  try {
    // console.log(id);

    return await api.patch(carsUrlQueryString, body).then((p) => p.json());
  } catch (error) {
    if (error instanceof Error) {
      // console.log(id, error.message);
      if (error.message === '500') store.carsRace[id] = false;
      return Promise.reject();
    }
  }

  return id;
  // Promise.reject(new Error(`Can't start or stop or drive`));
};

export const startEngine = (id: number) => startStopEngine(id, ApiEngineStatus.Started);

export const stopEngine = (id: number) => startStopEngine(id, ApiEngineStatus.Stopped);

export const driveCar = async (id: number) => {
  const p = await startStopEngine(id, ApiEngineStatus.Drive);

  if (p.success) return id;

  return p;
};
