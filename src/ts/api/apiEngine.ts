/* eslint-disable import/prefer-default-export */
import { ApiEngineStatus, ApiMethod } from '../enums/api';
import { api } from './api';
import { ENGINE_URL } from './config';

export const startStopEngine = async (id: number, engineStatus: ApiEngineStatus) => {
  const carsUrlQueryString = `${ENGINE_URL}?id=${id}&status=${engineStatus}`;
  const customConfig = {
    method: ApiMethod.Patch,
  };

  const response = await api.patch(carsUrlQueryString, customConfig);

  return response;
};
