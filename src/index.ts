// import { api } from './ts/api/api';
import { getCars, updateCar } from './ts/api/apiCars';
import { Car } from './ts/interfaces/cars';
// import { GARAGE_URL } from './ts/api/config';

const fn = async () => {
  // const car: Omit<Car, 'id'> = {
  //   name: 'New Red Car',
  //   color: '#ff0000',
  // };
  const pCar = {
    name: 'New Patched Car',
    color: '#ffffff',
    id: 4,
  };
  // const car = await api.post(GARAGE_URL, b);
  // console.log(car.id);
  // console.log(await api.get(GARAGE_URL));
  // await api.put(`${GARAGE_URL}/6`, pCar);
  // console.log(await api.get(GARAGE_URL));
  const cars: Car[] = await getCars(0, 20);
  // await createCar(car);
  // await deleteCar(15);
  await updateCar(pCar);
  console.log(cars);
};

fn();
