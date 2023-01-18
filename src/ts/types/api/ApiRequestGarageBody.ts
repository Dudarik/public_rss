import { Car } from '../../interfaces/cars';

export type ApiRequestGarageBody = Omit<Car, 'id'>;
