export function checkElem(elem: HTMLElement | null): HTMLElement {
    if (!(elem instanceof HTMLElement)) throw new Error(`${elem} : element null or undefined`);
    return elem;
}

export function checkTplElem(elem: HTMLTemplateElement | null): HTMLTemplateElement {
    if (!(elem instanceof HTMLTemplateElement)) throw new Error(`${elem} : element null or undefined`);
    return elem;
}
