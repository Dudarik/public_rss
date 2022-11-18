import { store } from '../store';
import { birdsData } from '../data';
import { getRandomBirdId } from '../helpers';
import {
  handleRoundPlayerMouseDown,
  handleRoundPlayerPause,
  handleRoundPlayerPlay,
  handleRoundPlayerTimeUpdate,
} from './handlers';

export const getBirdNames = (level = 0) =>
  birdsData[store.settings.language][level].map((item) => item.name);

export const startGame = () => {
  store.currentPoints = 0;
  store.questionPoints = 5;
  store.currentLevel = 1;
  store.lastLevel = store.levels.length - 1;
  store.isInGame = true;
  store.isNextQuestion = false;
  store.isLastQuestion = false;

  setLevel(store.currentLevel);
  getCurrentQuestion(store.currentLevel);
};

export const setLevel = (num) => {
  const $levels = document.querySelectorAll('.game_level');
  $levels.forEach((lvl) => lvl.classList.remove('active_level'));

  store.currentLevel = num;

  $levels[store.currentLevel].classList.add('active_level');
};

export const getCurrentQuestion = async (lvlId) => {
  const currentLevelData = birdsData[store.settings.language][lvlId];

  const $audio = document.querySelector('#round_pleer');
  const $pbar = document.querySelector('#roundpleer_pbar');
  const $playBtn = document.querySelector('#roundpleer_play');
  const $pauseBtn = document.querySelector('#roundpleer_pause');

  store.currentQuestionTarget = currentLevelData[getRandomBirdId()];

  $audio.src = store.currentQuestionTarget.audio;

  $pbar.addEventListener('mousedown', handleRoundPlayerMouseDown);
  $audio.addEventListener('timeupdate', handleRoundPlayerTimeUpdate);
  $playBtn.addEventListener('click', handleRoundPlayerPlay);
  $pauseBtn.addEventListener('click', handleRoundPlayerPause);

  console.log(store);
};

export const setSuccesAnswer = () => {
  store.isNextQuestion = true;
};
