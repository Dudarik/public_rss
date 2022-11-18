import { langFunction } from '../language/langFunction';
import { store } from '../store';
import { saveGameSettingsToLS } from './localstorage';

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

    let angl = (arcctg((midY - y) / (x - midX)) * 180) / Math.PI;

    if (x < midX) angl += 180;

    return angl;
  };

  const $audio = document.querySelector('#round_pleer');

  const handleMouseMove = (event) => {
    if (event.target.id !== 'roundpleer_pbar') return;
    const cords = event.target.getBoundingClientRect();

    const midX = cords.x + cords.width / 2;
    const midY = cords.y + cords.height / 2;

    if (store.isPlaySound) audio.pause();

    let angl = calcAngl(event.clientX, event.clientY, midX, midY);
    event.target.setAttribute('style', `--value: ${Math.floor(angl / 3.6)}`);
    event.target.dataset.seconds = Math.floor($audio.currentTime);

    $audio.currentTime = ($audio.duration * angl) / 3.6 / 100;
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

  $pbar.setAttribute('style', `--value: ${Math.floor((100 * c) / d)}`);
};

export const handleRoundPlayerPlay = () => {
  const $audio = document.querySelector('#round_pleer');
  $audio.volume = 0.5;
  $audio.play();
};

export const handleRoundPlayerPause = () => {
  const $audio = document.querySelector('#round_pleer');
  $audio.pause();
};
