import { langs } from '../language/langs';

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

    gameLevels.forEach((gameLevel) => {
      const levelTitle = gameLevel.dataset.level;
      gameLevel.innerText = langs[newLanguage].quiz.gameLevels[levelTitle];
    });

    ctrlElems.forEach((elem) => {
      const title = elem.dataset.quizLang;
      elem.innerText = langs[newLanguage].quiz.controls[title];
    });
  },
  results: () => {},
  gallery: () => {},
};
