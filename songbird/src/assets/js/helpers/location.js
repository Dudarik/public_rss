const getMenuItems = () => {
  return document.querySelectorAll('.menu_link');
};

const changePage = async (href) => {
  // const newPage = await fetch(href);

  console.log(newPage);
};

const addHandlersToMenu = (links) => {
  items.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      // changePage(link.href);
      history.pushState(null, null, link.href);
    });
  });
};

console.log(getMenuItems());

export const setLocation = (loc) => {
  history.pushState(null, null, loc);
  location.hash = '#' + loc;
};

const menu_quiz = document.getElementById('menu_quiz');
menu_quiz.addEventListener('click', () => {
  setLocation('quiz');
});
