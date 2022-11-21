import { store } from '../store.js';
import { langFunction } from '../language/langFunction.js';
import { endGame, startGame } from '../lib/gameFunc.js';
import { handleMainPagePlayBtn } from '../lib/handlers.js';
import { renderCards } from '../lib/gallery.js';

export const getMenuItems = () => {
  return document.querySelectorAll('.menu_link');
};

export const changePage = async (href) => {
  const newPage = await fetch(href)
    .then((response) => response.text())
    .then((text) => {
      const domParcer = new DOMParser();
      const html = domParcer.parseFromString(text, 'text/html');
      return html.querySelector('#page');
    });
  // console.log(href);

  let currentPage = [...href].splice(href.lastIndexOf('/') + 1);
  currentPage = currentPage.splice(0, currentPage.lastIndexOf('.')).join('');
  store.currentPage = currentPage;

  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.append(newPage);

  if (currentPage === 'quiz') startGame();
  if (currentPage === 'main')
    document
      .querySelector('#main_btn_play')
      .addEventListener('click', handleMainPagePlayBtn);
  if (currentPage === 'results') endGame();
  if (currentPage === 'gallery') renderCards();

  langFunction[currentPage](store.settings.language);
  // console.log(store);
};

export const addHandlersToMenu = (links) => {
  links.forEach((link) => {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      await changePage(link.href);
      history.pushState(null, null, link.href);
    });
  });
};
