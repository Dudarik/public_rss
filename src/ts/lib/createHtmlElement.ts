export const createHtmlElementFromTpl = (htmlTpl: string) => {
  const tpl = document.createElement('template');

  tpl.innerHTML = htmlTpl;

  if (!tpl.content.firstElementChild) throw new Error(`Can't create element`);

  return tpl.content.firstElementChild;
};
