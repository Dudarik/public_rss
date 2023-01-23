import { store } from '../../store';
import { carLine } from '../components/carLine/carLine';

export const getCarsLines = () => store.cars.map((car) => carLine(car));
// if (store.inGame) {
//   console.log('from store');
//   return Object.values(store.carsHTML);
//   // }
//   // console.log('from doc');
//   return store.cars.map((car) => carLine(car));
// };
