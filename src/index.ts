import './assets/scss/main.scss';

import { store } from './store';
import { carLine, footer, header, main } from './ts/components';
import { initStore } from './ts/lib/initStore';

document.addEventListener('DOMContentLoaded', async () => {
  await initStore();

  console.log(store);

  const carLines = store.cars.map((car) => carLine(car));

  document.body.append(header());
  document.body.append(main([...carLines]));
  document.body.append(footer());
});

// import { ApiReturn } from './ts/types/api';
// import { GARAGE_URL } from './ts/api/config';

// let timer: ReturnType<typeof setTimeout>;

// document.querySelector('#start')?.addEventListener('click', async () => {
//   // console.log(await switchCarsEngineToDriveMode(2, ApiEngineStatus.Started));
//   try {
//     const arrSt = await Promise.allSettled([
//       startEngine(1),
//       startEngine(2),
//       startEngine(3),
//       startEngine(4),
//     ]);
//     console.log(arrSt);
//     // const arrDr = await Promise.allSettled([driveCar(1), driveCar(2), driveCar(3), driveCar(4)]);
//     const arrDr = Promise.allSettled([driveCar(1), driveCar(2), driveCar(3), driveCar(4)]);
//     console.log(arrDr);
//     // setInterval(async () => {
//     //   console.log(await arrDr);
//     // }, 1000);
//   } catch (error) {
//     console.log(error);
//   }

//   // timer = setInterval(drive, 2000);
//   // await startStopEngine(2, ApiEngineStatus.Started);
// });
