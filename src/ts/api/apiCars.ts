import { ApiMethod } from '../enums/api';
import { ApiCustomConfig, ApiRequestBody } from '../interfaces/api';
import { Car } from '../interfaces/cars';
import { api } from './api';
import { GARAGE_URL } from './config';

export const getCars = async (page: number, limit: number) => {
  const carsUrlQueryString = `${GARAGE_URL}?_page=${page}&_limit=${limit}`;
  const customConfig: ApiCustomConfig = {
    headers: {
      'X-Total-Count': limit.toString(),
    },
  };

  let cars: Car[] = [];

  const request = await api.get(carsUrlQueryString, customConfig);

  if (Array.isArray(request)) cars = Array.from(request);

  return cars;
};

export const getCar = async (id: number) => {
  const carsUrlQueryString = `${GARAGE_URL}/${id}`;
  const request = await api.get(carsUrlQueryString);

  if (!request) throw new Error(`Can't get car with id=${id}`);

  const car: Car = Object(request);

  return car;
};

export const createCar = async (car: Omit<Car, 'id'>) => {
  const request = await api.post(GARAGE_URL, car);

  let newCar: Car = {
    id: -1,
    name: 'unknown',
    color: 'unknown',
  };

  if (typeof request === 'object') newCar = Object(request);

  return newCar;
};

export const deleteCar = async (id: number) => {
  const carsUrlQueryString = `${GARAGE_URL}/${id}`;
  const customConfig = {
    method: ApiMethod.Delete,
  };

  if (await getCar(id)) await api.delete(carsUrlQueryString, customConfig);
};

export const updateCar = async (car: Car) => {
  const carsUrlQueryString = `${GARAGE_URL}/${car.id}`;
  const customConfig = {
    method: ApiMethod.Put,
  };

  const requestBody: ApiRequestBody = { name: car.name, color: car.color, id: car.id.toString() };

  let updCar: Car = {
    id: -1,
    name: 'unknown',
    color: 'unknown',
  };

  if (await getCar(car.id)) {
    const request = await api.put(carsUrlQueryString, requestBody, customConfig);

    if (typeof request === 'object') updCar = Object(request);
  }

  return updCar;
};
