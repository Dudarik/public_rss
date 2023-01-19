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
  const timeStamp = Date.now();

  try {
    const result = await api.patch(carsUrlQueryString, body);
    return result;
  } catch (error) {
    console.log(id, error);
  } finally {
    console.log(Date.now() - timeStamp);
  }
  return undefined;
};
