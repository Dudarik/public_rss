import { store } from '../store';
import { birdsData } from '../data';
import { getRandomBirdId } from '../helpers';
import {
  handleChoiceBirdPanelClick,
  handleMainPagePlayBtn,
  handleMouseMove,
  handleNextButtonClick,
  handlePlayerEndAudio,
  // handlePlayerInput,
  handlePlayerMouseDown,
  handlePlayerPlay,
  handlePlayerSaveVolumeValue,
  handlePlayerSetVolume,
  handlePlayerTimeUpdate,
  handleRoundPlayerEndAudio,
  handleRoundPlayerMouseDown,
  // handleRoundPlayerPause,
  handleRoundPlayerPlay,
  handleRoundPlayerSaveVolumeValue,
  handleRoundPlayerSetVolume,
  handleRoundPlayerTimeUpdate,
} from './handlers';
import { langs } from '../language/langs';

import uncknownBirdImg from '../../../assets/images/unknown_bird_1920.webp';

import audioStartGame from '../../sound/startgame.mp3';
import audioEndGame from '../../sound/wingame.mp3';

// export const getBirdNames = (level = 0) =>
//   birdsData[store.settings.language][level].map((item) => item.name);

const UNCKNOWN_TITLE = '*******';

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

export const setHandlersToPlayer = () => {
  const $audio = document.querySelector('#pleer');

  const $pbar = document.querySelector('#player_time');
  const $playBtn = document.querySelector('#player_play');
  const $playerVolume = document.querySelector('#player_volume');

  $playerVolume.addEventListener('input', handlePlayerSetVolume);
  $playerVolume.addEventListener('change', handlePlayerSaveVolumeValue);

  $audio.addEventListener('ended', handlePlayerEndAudio);
  $audio.addEventListener('timeupdate', handlePlayerTimeUpdate);
  $pbar.addEventListener('input', handleMouseMove);
  $playBtn.addEventListener('click', handlePlayerPlay);

  $pbar.addEventListener('mousedown', handlePlayerMouseDown);

  // $pbar.addEventListener('change', handlePlayerMouseDown);
};

export const setToDefaultQuizPage = () => {
  const $roundPlayer = document.querySelector('#round_pleer');
  const $targetBirdPhoto = document.querySelector('#target_bird_photo');
  const $birdInfo = document.querySelector('#bird_info');

  const $roundPlayerBtnPlay = document.querySelector('#roundpleer_play');

  const $targetBirdPhotoImg = $targetBirdPhoto.querySelector('img');
  const $targetBirdPhotoTitle =
    $targetBirdPhoto.querySelector('.birds_photo_title');

  const $birdInfoName = $birdInfo.querySelector('#bird_name');
  const $birdInfoImg = $birdInfo.querySelector('#birds_photo_img');
  const $birdInfoTitle = $birdInfo.querySelector('#description_title');
  const $birdInfoText = $birdInfo.querySelector('#description_text');

  const $questionPoints = document.querySelector('#question_points');

  $questionPoints.innerText = '5';

  store.isPlaySound = false;
  $roundPlayer.pause();
  $roundPlayer.currentTime = 0;
  $roundPlayerBtnPlay.classList.remove('pause');

  $targetBirdPhotoImg.src = uncknownBirdImg;
  $targetBirdPhotoTitle.innerText = UNCKNOWN_TITLE;

  $birdInfoName.innerText = UNCKNOWN_TITLE;
  $birdInfoImg.src = uncknownBirdImg;
  $birdInfoTitle.innerText = UNCKNOWN_TITLE;
  $birdInfoText.innerText = langs[store.settings.language].quiz.answer.blank;
};

export const startGame = () => {
  store.currentPoints = 0;
  store.questionPoints = 6;
  store.currentLevel = 0;
  store.lastLevel = 5; //store.levels.length - 1;
  store.isInGame = true;
  store.isNextQuestion = false;
  store.isLastQuestion = false;
  store.currentLvlChecked = [];
  store.currentClickedBirdId = -1;

  new Audio(audioStartGame).play();

  setToDefaultQuizPage();
  setLevel(store.currentLevel);
  getCurrentQuestion(store.currentLevel);
  const $roundVolume = document.querySelector('#round_volume');
  $roundVolume.value = store.settings.volume * 100;

  const $playerVolume = document.querySelector('#player_volume');
  $playerVolume.value = store.settings.volume * 100;

  const $nextLevelBtn = document.querySelector('#next_level_btn');
  $nextLevelBtn.addEventListener('click', handleNextButtonClick);

  const $choiceBirdPanel = document.querySelector('#choice_bird_panel');
  $choiceBirdPanel.addEventListener('click', handleChoiceBirdPanelClick);

  setHandlersToRoundPlayer();
  setHandlersToPlayer();
};

export const nextLevel = () => {
  store.questionPoints = 6;
  store.currentLevel += 1;
  store.isNextQuestion = false;
  store.currentLvlChecked = [];
  store.currentClickedBirdId = -1;
  store.isLastQuestion = store.lastLevel === store.currentLevel;

  // console.log(store);
  const $nextBtn = document.querySelector('#next_level_btn');
  if (store.isLastQuestion)
    $nextBtn.innerText =
      store.settings.language === 'en' ? 'Results' : 'Результат';

  setToDefaultQuizPage();
  setLevel(store.currentLevel);
  getCurrentQuestion(store.currentLevel);
};

export const setLevel = (num) => {
  const $levels = document.querySelectorAll('.game_level');
  $levels.forEach((lvl) => lvl.classList.remove('active_level'));

  store.currentLevel = num;

  $levels[store.currentLevel].classList.add('active_level');
};

export const getCurrentQuestion = (lvlId) => {
  store.currentLevelData = birdsData[store.settings.language][lvlId];

  const $audio = document.querySelector('#round_pleer');

  store.currentQuestionTarget = store.currentLevelData[getRandomBirdId()];

  $audio.src = store.currentQuestionTarget.audio;

  const $panelItems = document.querySelectorAll('.panel_item');

  $panelItems.forEach((item) => {
    item.classList.remove('success');
    item.classList.remove('wrong');
  });

  store.currentLevelData.forEach((item, index) => {
    $panelItems[index].innerText = item.name;
    $panelItems[index].dataset.idBird = item.id;
  });

  // console.log(store);
};

export const setSuccesAnswer = () => {
  store.isNextQuestion = true;
};

export const fillBirdInfo = (...args) => {
  const birdInfo = document.querySelector('#bird_info');

  const birdsPhotoImg = birdInfo.querySelector('#birds_photo_img');
  const birdName = birdInfo.querySelector('#bird_name');
  const descriptionTitle = birdInfo.querySelector('#description_title');
  const descriptionText = birdInfo.querySelector('#description_text');

  let curBird = 0;
  // console.log(args);
  if (args.length === 1) curBird = store.currentLevelData[+args[0] - 1];

  if (args.length === 2) curBird = store.galleryData[args[0]][args[1]];

  birdsPhotoImg.src = curBird.image;
  birdName.innerText = curBird.name;
  descriptionTitle.innerText = curBird.species;
  descriptionText.innerText = curBird.description;
};

export const endGame = () => {
  new Audio(audioEndGame).play();
  document
    .querySelector('#result_btn_play')
    .addEventListener('click', handleMainPagePlayBtn);
};
