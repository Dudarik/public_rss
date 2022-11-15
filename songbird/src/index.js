// import './assets/js/helpers/location.js';
import './assets/sass/styles.scss';
// const BASE_NAME = '/dudarik-JSFE2022Q3/songbird/';
// https://rolling-scopes-school.github.io/
console.log('working');
console.log(document.referrer);
window.addEventListener('popstate', () => {
  changePage(location.pathname);
});
window.addEventListener('load', () => {
  if (!document.referrer) {
    changePage('main.html');
    history.pushState(null, null, 'main.html');
  }
  if (document.referrer) {
    changePage(document.referrer);
    history.pushState(null, null, document.referrer);
  }
});

const getMenuItems = () => {
  return document.querySelectorAll('.menu_link');
};

const changePage = async (href) => {
  const newPage = await fetch(href)
    .then((response) => response.text())
    .then((text) => {
      const domParcer = new DOMParser();
      const html = domParcer.parseFromString(text, 'text/html');
      return html.querySelector('#page');
    });

  const m = document.querySelector('.main');
  m.innerHTML = '';
  m.append(newPage);
  console.log(newPage);
};

const addHandlersToMenu = (links) => {
  links.forEach((link) => {
    // console.log(link);
    // if (link.id === 'menu_main') return;
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      await changePage(link.href);
      history.pushState(null, null, link.href);
    });
  });
};

addHandlersToMenu(getMenuItems());
