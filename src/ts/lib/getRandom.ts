export const getRandomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomFromZero = (max: number) => getRandomNum(0, max);

export const getRandomHexNum = () => getRandomNum(0, 15);

export const getRandomColor = () => {
  const cArr = ['#'];

  for (let i = 0; i < 6; i += 1) {
    cArr.push(getRandomHexNum().toString(16));
  }
  return cArr.join('');
};
