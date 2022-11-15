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

  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.append(newPage);
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
