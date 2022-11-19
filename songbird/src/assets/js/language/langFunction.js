import { birdsData } from '../data';
import { langs } from '../language/langs';
import { fillBirdInfo } from '../lib/gameFunc';
import { store } from '../store';

export const langFunction = {
  mainMenu: (newLanguage) => {
    const mainMenu = document.querySelector('#main_menu');
    const menuLinks = mainMenu.querySelectorAll('.menu_link');

    menuLinks.forEach((link) => {
      const linkTitle = link.dataset.menuLink;
      link.innerText = langs[newLanguage].menu[linkTitle];
    });
  },

  main: (newLanguage) => {
    const mainPageElems = document.querySelectorAll(`[data-main-lang]`);
    mainPageElems.forEach((elem) => {
      const title = elem.dataset.mainLang;
      elem.innerText = langs[newLanguage].main[title];
    });
  },

  quiz: (newLanguage) => {
    const gameLevels = document.querySelectorAll('.game_level');
    const ctrlElems = document.querySelectorAll('[data-quiz-lang]');
    const panelItems = document.querySelectorAll('.panel_item');
    const birdDescription = document.querySelector(
      '[data-quiz-answer-description-text]'
    );

    store.currentLevelData =
      birdsData[store.settings.language][store.currentLevel];

    gameLevels.forEach((gameLevel) => {
      const levelTitle = gameLevel.dataset.level;
      gameLevel.innerText = langs[newLanguage].quiz.gameLevels[levelTitle];
    });

    ctrlElems.forEach((elem) => {
      const title = elem.dataset.quizLang;
      elem.innerText = langs[newLanguage].quiz.controls[title];
    });

    store.currentLevelData.forEach((item, index) => {
      panelItems[index].innerText = item.name;
      panelItems[index].dataset.idBird = item.id;
    });

    if (store.currentClickedBirdId === -1) {
      birdDescription.innerText = langs[newLanguage].quiz.answer.blank;
      return;
    }

    fillBirdInfo(store.currentClickedBirdId);
  },
  results: () => {
    console.log('results');
  },
  gallery: () => {},
};
