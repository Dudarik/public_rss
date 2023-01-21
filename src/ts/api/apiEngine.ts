/* eslint-disable import/prefer-default-export */
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
    console.log(id, error);
    return console.log('');
    // Promise.reject(new Error(`Can't start or stop or drive`));
  }
};

export const startEngine = (id: number) => startStopEngine(id, ApiEngineStatus.Started);

export const stopEngine = (id: number) => startStopEngine(id, ApiEngineStatus.Stopped);

export const driveCar = (id: number) => startStopEngine(id, ApiEngineStatus.Drive);
