const burger_toggle_button = document.querySelector(".burger__toggle-button");
const overlay = document.querySelector(".burger__menu_overlay");

let scrollY = "0px";
let flagStopScroll = false;

burger_toggle_button.addEventListener("click", () => {
  burger_toggle_button.classList.toggle("burger__menu_active");
  burger_toggle_button.classList.contains("burger__menu_active")
    ? stopScroll()
    : startScroll();
});

overlay.addEventListener("click", () => {
  burger_toggle_button.classList.remove("burger__menu_active");
  startScroll();
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width > 640) {
    burger_toggle_button.classList.remove("burger__menu_active");

    flagStopScroll && startScroll();

    const body = document.body;
    body.style.position = "";
  }

  if (width > 999) {
    const popupOverlay = document.querySelector("#popup_overlay");
    popupOverlay.classList.remove("popup__overlay_active");

    flagStopScroll && startScroll();

    const body = document.body;
    body.style.position = "";
  }
});

export const stopScroll = () => {
  flagStopScroll = true;
  const currentOffsetY =
    document.documentElement.style.getPropertyValue("--scroll-y");
  if (
    parseInt(currentOffsetY) &&
    parseInt(currentOffsetY) !== parseInt(scrollY)
  )
    scrollY = currentOffsetY;

  const body = document.body;
  body.classList.add("body_fixed");

  body.style.top = `-${scrollY}`;
};

export const startScroll = () => {
  flagStopScroll = false;
  const body = document.body;
  const currY = parseInt(scrollY) * -1 + "px"; //body.style.top;
  body.classList.remove("body_fixed");
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(currY || "0") * -1);
};
