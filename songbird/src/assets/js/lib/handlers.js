import { formatTime } from '../helpers';
import { changePage } from '../helpers/location';
import { langFunction } from '../language/langFunction';
import { store } from '../store';
import { fillBirdInfo, nextLevel } from './gameFunc';
import { saveGameSettingsToLS } from './localstorage';

const ONE_HUNDRED_PERCENT = 100;
const ONE_SECTOR = 3.6;
const HALF_ROUND = 180;

const stopPlayAllPlayers = () => {
  const $audioPlayers = document.querySelectorAll('audio');
  const $playBtns = document.querySelectorAll('.play_btn');

  $playBtns.forEach((btn) => btn.classList.remove('pause'));
  store.isPlaySound = false;
  $audioPlayers.forEach((player) => {
    player.pause();
    player.currentTime = 0;
  });
};

// =================LANGS===================

export const handleSwitchLanguage = (event) => {
  const lang = store.settings.language;
  if (lang === 'ru') store.settings.language = 'en';
  else store.settings.language = 'ru';

  saveGameSettingsToLS();

  event.target.innerText = store.settings.language.toLocaleUpperCase();

  langFunction[store.currentPage](store.settings.language);
  langFunction['mainMenu'](store.settings.language);
};

//==================ROUND PLAYER===========================

export const handleRoundPlayerMouseDown = (event) => {
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

    // if (store.isPlaySound) $audio.pause();

    let angl = calcAngl(event.clientX, event.clientY, midX, midY);
    event.target.setAttribute(
      'style',
      `--value: ${Math.floor(angl / ONE_SECTOR)}`
    );
    event.target.dataset.seconds = formatTime(Math.floor($audio.currentTime));

    $audio.currentTime =
      ($audio.duration * angl) / ONE_SECTOR / ONE_HUNDRED_PERCENT;
    // if (store.isPlaySound) $audio.play();
  };

  event.target.addEventListener('mousemove', handleMouseMove);
  event.target.addEventListener('click', handleMouseMove);

  document.addEventListener('mouseup', () => {
    event.target.removeEventListener('mousemove', handleMouseMove);
  });

  event.target.addEventListener('mouseup', () => {
    event.target.removeEventListener('mousemove', handleMouseMove);
  });
};

export const handleRoundPlayerTimeUpdate = () => {
  const $audio = document.querySelector('#round_pleer');
  const d = $audio.duration;
  const c = $audio.currentTime;
  const $pbar = document.querySelector('#roundpleer_pbar');

  $pbar.dataset.seconds = formatTime(Math.floor($audio.currentTime));

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
  document.querySelector('#player_volume').value = event.target.value;
  saveGameSettingsToLS();
};

// ====================Player==========================

export const handlePlayerPlay = (event) => {
  const $audio = document.querySelector('#pleer');
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

export const handlePlayerTimeUpdate = () => {
  const $audio = document.querySelector('#pleer');
  const $timer = document.querySelector('#zero_time');

  const d = $audio.duration;
  const c = $audio.currentTime;
  const $pbar = document.querySelector('#player_time');
  // $pbar.dataset.seconds = Math.floor($audio.currentTime);
  const calcTime = Math.floor((ONE_HUNDRED_PERCENT * c) / d);

  $pbar.value = calcTime;
  $timer.innerText = calcTime ? formatTime(calcTime) : '00:00';
};

export const handlePlayerInput = (event) => {
  const $audio = document.querySelector('#pleer');
  $audio.currentTime =
    ($audio.duration / ONE_HUNDRED_PERCENT) * +event.target.value;
};

export const handlePlayerEndAudio = () => {
  const $playBtn = document.querySelector('#player_play');
  $playBtn.classList.remove('pause');
  store.isPlaySound = false;
};

export const handlePlayerSetVolume = (event) => {
  const $audio = document.querySelector('#pleer');

  $audio.volume = event.target.value / ONE_HUNDRED_PERCENT;
};

export const handlePlayerSaveVolumeValue = (event) => {
  store.settings.volume = event.target.value / ONE_HUNDRED_PERCENT;

  console.log(document.querySelector('#round_volume'));
  document.querySelector('#round_volume').value = event.target.value;

  saveGameSettingsToLS();
};
//=====================GAME HANDLERS===================

export const handleChoiceBirdPanelClick = (event) => {
  const target = event.target;

  if (target.tagName !== 'LI') return;

  store.currentClickedBirdId = target.dataset.idBird;
  // console.log(store.currentClickedBirdId, store.currentQuestionTarget.id);

  const $player = document.querySelector('#player');
  const $audio = $player.querySelector('#pleer');
  const endTime = document.querySelector('#audio_duration');

  const $btnPlay = document.querySelector('#player_play');

  $btnPlay.setAttribute('disabled', true);
  $btnPlay.classList.remove('pause');

  setTimeout(() => {
    document.querySelector('#player_time').value = 0;
  }, 20);

  store.settings.language === 'en'
    ? (endTime.innerText = 'Loading...')
    : (endTime.innerText = 'Загрузка...');

  setTimeout(() => {
    $audio.addEventListener('loadedmetadata', (event) => {
      endTime.innerText = formatTime(Math.round(event.target.duration));
      $btnPlay.removeAttribute('disabled');
    });
  }, 0);

  $audio.src = store.currentLevelData[store.currentClickedBirdId - 1].audio;
  $player.classList.add('visible');

  if (!store.isNextQuestion) {
    if (!store.currentLvlChecked.includes(store.currentClickedBirdId)) {
      const $questionPoints = document.querySelector('#question_points');
      store.currentLvlChecked.push(store.currentClickedBirdId);
      store.questionPoints -= 1;

      if (+store.currentClickedBirdId === store.currentQuestionTarget.id) {
        //play music success
        const $gameScore = document.querySelector('#game_score');
        const $targetBirdPhoto = document.querySelector('#target_bird_photo');

        // console.log($targetBirdPhoto);

        const $targetImg = $targetBirdPhoto.querySelector('img');
        const $targetName =
          $targetBirdPhoto.querySelector('.birds_photo_title');

        $targetImg.src = store.currentQuestionTarget.image;
        $targetName.innerText = store.currentQuestionTarget.name;

        store.currentPoints += store.questionPoints;
        store.isNextQuestion = true;

        $gameScore.innerText = store.currentPoints;
        document.querySelector('#next_level_btn').removeAttribute('disabled');

        stopPlayAllPlayers();

        event.target.classList.add('success');
      } else {
        //play music wrong
        $questionPoints.innerText = store.questionPoints - 1;
        event.target.classList.add('wrong');
      }
    }
  }

  fillBirdInfo(target.dataset.idBird);
};

export const handleNextButtonClick = (event) => {
  stopPlayAllPlayers();

  if (!store.isLastQuestion) {
    event.target.setAttribute('disabled', true);
    nextLevel();
    return;
  }
  changePage('results.html');
  history.pushState(null, null, 'results.html');
};
