import { api } from './ts/api/api';
import { GARAGE_URL } from './ts/api/config';

const fn = async () => {
  console.log(await api.get(GARAGE_URL));
};

fn();
