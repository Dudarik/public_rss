import { langFunction } from '../language/langFunction';
import { store } from '../store';
import { fillBirdInfo } from './gameFunc';
import { saveGameSettingsToLS } from './localstorage';

const ONE_HUNDRED_PERCENT = 100;
const ONE_SECTOR = 3.6;
const HALF_ROUND = 180;

export const handleSwitchLanguage = (event) => {
  const lang = store.settings.language;
  if (lang === 'ru') store.settings.language = 'en';
  else store.settings.language = 'ru';

  saveGameSettingsToLS();

  event.target.innerText = store.settings.language.toLocaleUpperCase();

  langFunction[store.currentPage](store.settings.language);
  langFunction['mainMenu'](store.settings.language);
};

export const handleRoundPlayerMouseDown = () => {
  const calcAngl = (x, y, midX, midY) => {
    const arcctg = (x) => Math.PI / 2 - Math.atan(x);

    let angl = (arcctg((midY - y) / (x - midX)) * HALF_ROUND) / Math.PI;

    if (x < midX) angl += HALF_ROUND;

    return angl;
  };

  const $audio = document.querySelector('#round_pleer');

  const handleMouseMove = (event) => {
    if (event.target.id !== 'roundpleer_pbar') return;
    const cords = event.target.getBoundingClientRect();

    const midX = cords.x + cords.width / 2;
    const midY = cords.y + cords.height / 2;

    if (store.isPlaySound) $audio.pause();

    let angl = calcAngl(event.clientX, event.clientY, midX, midY);
    event.target.setAttribute(
      'style',
      `--value: ${Math.floor(angl / ONE_SECTOR)}`
    );
    event.target.dataset.seconds = Math.floor($audio.currentTime);

    $audio.currentTime =
      ($audio.duration * angl) / ONE_SECTOR / ONE_HUNDRED_PERCENT;
    if (store.isPlaySound) $audio.play();
  };

  event.target.addEventListener('mousemove', handleMouseMove);
  event.target.addEventListener('click', handleMouseMove);

  event.target.addEventListener('mouseup', () => {
    event.target.removeEventListener('mousemove', handleMouseMove);
  });
};

export const handleRoundPlayerTimeUpdate = () => {
  const $audio = document.querySelector('#round_pleer');
  const d = $audio.duration;
  const c = $audio.currentTime;
  const $pbar = document.querySelector('#roundpleer_pbar');

  $pbar.dataset.seconds = Math.floor($audio.currentTime);

  $pbar.setAttribute(
    'style',
    `--value: ${Math.floor((ONE_HUNDRED_PERCENT * c) / d)}`
  );
};

export const handleRoundPlayerPlay = (event) => {
  const $audio = document.querySelector('#round_pleer');
  $audio.volume = store.settings.volume;

  if (!store.isPlaySound) {
    $audio.play();
    event.target.classList.add('pause');
    store.isPlaySound = true;
  } else {
    $audio.pause();
    event.target.classList.remove('pause');
    store.isPlaySound = false;
  }
};

export const handleRoundPlayerEndAudio = () => {
  const $playBtn = document.querySelector('#roundpleer_play');
  $playBtn.classList.remove('pause');
  store.isPlaySound = false;
};

export const handleRoundPlayerSetVolume = (event) => {
  const $audio = document.querySelector('#round_pleer');

  $audio.volume = event.target.value / ONE_HUNDRED_PERCENT;
};

export const handleRoundPlayerSaveVolumeValue = (event) => {
  store.settings.volume = event.target.value / ONE_HUNDRED_PERCENT;
  saveGameSettingsToLS();
};

export const handleChoiceBirdPanelClick = (event) => {
  const target = event.target;

  if (target.tagName !== 'LI') return;

  store.currentClickedBirdId = target.dataset.idBird;
  console.log(store.currentClickedBirdId, store.currentQuestionTarget.id);

  if (!store.isNextQuestion) {
    if (!store.currentLvlChecked.includes(store.currentClickedBirdId)) {
      //play music
      store.currentLvlChecked.push(store.currentClickedBirdId);
      store.questionPoints -= 1;

      if (+store.currentClickedBirdId === store.currentQuestionTarget.id) {
        console.log(event.target);
        store.isNextQuestion = true;
        event.target.classList.add('success');
        return;
      }
      event.target.classList.add('wrong');
    }
  }

  fillBirdInfo(target.dataset.idBird);
};
