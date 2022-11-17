import { store } from '../store';
import { birdsData } from '../data';

export const getBirdNames = (level = 0) =>
  birdsData[store.settings.language][level].map((item) => item.name);

export const startGame = () => {
  store.currentPoints = 0;
  store.questionPoints = 5;
  store.currentLevel = 0;
  store.lastLevel = store.levels.length - 1;
  store.isInGame = true;
  store.isNextQuestion = false;
  store.isLastQuestion = false;
};
