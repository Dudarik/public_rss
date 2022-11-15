import { langs } from '../language/langs.js';

const setMenuLanguage = (menuLinks, newLanguage) => {
  menuLinks.forEach((link) => {
    const linkTitle = link.dataset.menuLink;
    link.innerText = langs[newLanguage].menu[linkTitle];
  });
};

export const setLanguage = (newLanguage) => {
  const mainMenu = document.querySelector('#main_menu');
  const menuItems = mainMenu.querySelectorAll('.menu_link');
  setMenuLanguage(menuItems, newLanguage);
};
