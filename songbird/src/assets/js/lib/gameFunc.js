import { store } from '../store';
import { birdsData } from '../data';
import { getRandomBirdId } from '../helpers';
import {
  handleRoundPlayerEndAudio,
  handleRoundPlayerMouseDown,
  // handleRoundPlayerPause,
  handleRoundPlayerPlay,
  handleRoundPlayerSaveVolumeValue,
  handleRoundPlayerSetVolume,
  handleRoundPlayerTimeUpdate,
} from './handlers';

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

  setLevel(store.currentLevel);
  getCurrentQuestion(store.currentLevel);
  const $roundVolume = document.querySelector('#round_volume');
  $roundVolume.value = store.settings.volume * 100;
};

export const setLevel = (num) => {
  const $levels = document.querySelectorAll('.game_level');
  $levels.forEach((lvl) => lvl.classList.remove('active_level'));

  store.currentLevel = num;

  $levels[store.currentLevel].classList.add('active_level');
};

const setHandlersToRoundPlayer = () => {
  const $audio = document.querySelector('#round_pleer');
  const $pbar = document.querySelector('#roundpleer_pbar');
  const $playBtn = document.querySelector('#roundpleer_play');
  const $roundVolume = document.querySelector('#round_volume');

  $roundVolume.addEventListener('input', handleRoundPlayerSetVolume);
  $roundVolume.addEventListener('change', handleRoundPlayerSaveVolumeValue);
  $pbar.addEventListener('mousedown', handleRoundPlayerMouseDown);
  $audio.addEventListener('timeupdate', handleRoundPlayerTimeUpdate);
  $audio.addEventListener('ended', handleRoundPlayerEndAudio);
  $playBtn.addEventListener('click', handleRoundPlayerPlay);
};

export const getCurrentQuestion = (lvlId) => {
  store.currentLevelData = birdsData[store.settings.language][lvlId];

  const $audio = document.querySelector('#round_pleer');

  store.currentQuestionTarget = store.currentLevelData[getRandomBirdId()];

  $audio.src = store.currentQuestionTarget.audio;

  setHandlersToRoundPlayer();

  const $panelItems = document.querySelectorAll('.panel_item');

  store.currentLevelData.forEach((item, index) => {
    $panelItems[index].innerText = item.name;
    $panelItems[index].dataset.idBird = item.id;
  });

  console.log(store);
};

export const setSuccesAnswer = () => {
  store.isNextQuestion = true;
};
