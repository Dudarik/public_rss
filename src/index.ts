// import { api } from './ts/api/api';
import { getCars, updateCar } from './ts/api/apiCars';
import { startStopEngine } from './ts/api/apiEngine';
import { ApiEngineStatus } from './ts/enums/api';
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
  // startStopEngine(1, ApiEngineStatus.Started);
  // await switchCarsEngineToDriveMode(2, ApiEngineStatus.Started);
  // await startStopEngine(2, ApiEngineStatus.Drive);
};

fn();

// let timer: ReturnType<typeof setTimeout>;

document.querySelector('#start')?.addEventListener('click', async () => {
  // console.log(await switchCarsEngineToDriveMode(2, ApiEngineStatus.Started));
  console.log(await startStopEngine(2, ApiEngineStatus.Started));
  console.log(await startStopEngine(2, ApiEngineStatus.Drive));

  // timer = setInterval(drive, 2000);
  // await startStopEngine(2, ApiEngineStatus.Started);
});
document.querySelector('#stop')?.addEventListener('click', async () => {
  await startStopEngine(2, ApiEngineStatus.Stopped);
});
// document.querySelector('#reset')?.addEventListener('click', async () => {
//   await switchCarsEngineToDriveMode(2, ApiEngineStatus.Stopped);
// });
