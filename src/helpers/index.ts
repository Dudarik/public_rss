export function checkElem(elem: HTMLElement | null): HTMLElement {
    if (!(elem instanceof HTMLElement)) throw new Error(`${elem} : element null or undefined`);
    return elem;
}
