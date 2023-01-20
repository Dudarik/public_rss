import { store } from '../../store';
import { carLine } from '../components/carLine/carLine';

export const getCarsLines = () => store.cars.map((car) => carLine(car));
