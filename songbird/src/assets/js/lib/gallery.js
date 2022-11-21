import { store } from '../store';
import { birdsData } from '../data';
import { fillBirdInfo, setHandlersToPlayer } from './gameFunc';
import { formatTime } from '../helpers';

export const renderCards = () => {
  const $tplCard = document.querySelector('#tpl_gallery_card');
  const $birdGallery = document.querySelector('#bird_gallery');
  store.galleryData = birdsData[store.settings.language];
  const cardsData = store.galleryData;

  $birdGallery.innerHTML = '';

  const $galleryArray = [];

  for (let i = 0; i < cardsData.length; i++) {
    for (let j = 0; j < cardsData[i].length; j++) {
      const $cardTpl = $tplCard.content.cloneNode(true);

      const $cardImg = $cardTpl.querySelector('.card_img');
      const $cardTitle = $cardTpl.querySelector('.card_title');

      $cardImg.src = cardsData[i][j].image;
      $cardTitle.dataset.arrayId = i;
      $cardTitle.dataset.cardId = j;
      $cardTitle.append(cardsData[i][j].name);

      $galleryArray.push($cardTpl);
    }
  }
  $birdGallery.append(...$galleryArray);
  setHandlersToGallery();

  if (store.currentClickedBirdId) {
    fillBirdInfo(store.currentClickedBirdId[0], store.currentClickedBirdId[1]);
  }
};

const setHandlersToGallery = () => {
  const $playerVolume = document.querySelector('#player_volume');
  $playerVolume.value = store.settings.volume * 100;

  document
    .querySelector('#bird_gallery')
    .addEventListener('click', handleBirdsCardsClick);
  setHandlersToPlayer();
};

const handleBirdsCardsClick = async (event) => {
  const { arrayId, cardId } = event.target.dataset;

  if (!arrayId || !cardId) return;
  store.currentClickedBirdId = [arrayId, cardId];

  setTimeout(() => {
    document.querySelector('#player_time').value = 0;
  }, 10);

  const $player = document.querySelector('#player');
  const $audio = $player.querySelector('#pleer');
  const $endTime = document.querySelector('#audio_duration');
  const $btnPlay = document.querySelector('#player_play');
  store.isPlaySound2 = false;

  $btnPlay.setAttribute('disabled', true);
  $btnPlay.classList.remove('pause');

  $audio.src = store.galleryData[arrayId][cardId].audio;
  store.settings.language === 'en'
    ? ($endTime.innerText = 'Loading...')
    : ($endTime.innerText = 'Загрузка...');

  $audio.addEventListener('loadedmetadata', async (event) => {
    $endTime.innerText = formatTime(Math.floor(event.target.duration));
    $btnPlay.removeAttribute('disabled');
    $audio.play();
    store.isPlaySound2 = true;
    $btnPlay.classList.add('pause');
    fillBirdInfo(arrayId, cardId);
  });

  $player.classList.add('visible');

  // console.log(arrayId, cardId);
};
