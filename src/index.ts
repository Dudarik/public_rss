import { api } from './ts/api/api';
import { GARAGE_URL } from './ts/api/config';

const fn = async () => {
  const b = {
    name: 'New Red Car',
    color: '#ff0000',
  };
  const pCar = {
    name: 'New Patched Car',
    color: '#ffffff',
  };
  const car = await api.post(GARAGE_URL, b);
  console.log(car.id);
  console.log(await api.get(GARAGE_URL));
  await api.put(`${GARAGE_URL}/6`, pCar);
  console.log(await api.get(GARAGE_URL));
};

fn();
