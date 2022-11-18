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

  main: () => {},
  quiz: (newLanguage) => {
    const gameLevels = document.querySelectorAll('.game_level');

    gameLevels.forEach((gameLevel) => {
      const levelTitle = gameLevel.dataset.level;
      gameLevel.innerText = langs[newLanguage].gameLevels[levelTitle];
    });
  },
  results: () => {},
  gallery: () => {},
};
