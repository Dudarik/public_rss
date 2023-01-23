export const handlerModalClose = (event: Event) => {
  const { target } = event;

  if (!(target instanceof HTMLButtonElement) && !(target instanceof HTMLDivElement))
    throw new Error(`Can't find close modal button`);

  if (target.id === 'modalClose' || target.id === 'modalOwerlay') {
    const closableModalWindowDiv = target.closest('#modalWindow');
    if (!(closableModalWindowDiv instanceof HTMLDivElement))
      throw new Error(`Can't find main modal DIV`);

    const parent = closableModalWindowDiv.parentElement;
    if (parent instanceof HTMLElement) parent.firstChild?.remove();
    document.body.classList.remove('stop-scrolling');
  }
};
