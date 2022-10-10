const burger_toggle_button = document.querySelector(".burger__toggle-button");
const overlay = document.querySelector(".burger__menu_overlay");

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

export const stopScroll = () => {
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  const header = document.querySelector("header");
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
  header.style.top = `${scrollY - window.innerHeight}`;
};

export const startScroll = () => {
  const body = document.body;
  const scrollY = body.style.top;
  const header = document.querySelector("header");
  body.style.position = "static";
  body.style.top = "";
  header.style.top = 0;
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};
