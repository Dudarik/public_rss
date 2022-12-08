export function checkElem(elem: HTMLElement | EventTarget | null): HTMLElement {
    if (!(elem instanceof HTMLElement)) throw new Error(`${elem} : element null or undefined`);
    return elem;
}

export function checkTplElem(elem: HTMLTemplateElement | null): HTMLTemplateElement {
    if (!(elem instanceof HTMLTemplateElement)) throw new Error(`${elem} : element null or undefined`);
    return elem;
}

export function checkEventTarget(eventTarget: EventTarget | null): EventTarget | HTMLElement {
    if (!(eventTarget instanceof EventTarget)) throw new Error(`${eventTarget} : element null or undefined`);
    if (eventTarget instanceof HTMLElement) return <HTMLElement>eventTarget;
    return eventTarget;
}
