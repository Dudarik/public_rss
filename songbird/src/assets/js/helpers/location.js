import { store } from '../store.js';
import { langFunction } from '../language/langFunction.js';

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
  langFunction[currentPage](store.settings.language);
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
