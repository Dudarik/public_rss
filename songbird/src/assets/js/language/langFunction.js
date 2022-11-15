import { langs } from '../language/langs.js';

export const langFunction = {
  main: () => {},
  quiz: (newLanguage) => {
    const gameLevels = document.querySelectorAll('.game_level');

    gameLevels.forEach((gameLevel) => {
      const levelTitle = gameLevel.dataset.level;
      gameLevel.innerText = langs[newLanguage].gameLevels[levelTitle];
    });
  },
};
