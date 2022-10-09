const burger_toggle_button = document.querySelector(".burger__toggle-button");
const overlay = document.querySelector(".burger__menu_overlay");
const body = document.querySelector("body");

burger_toggle_button.addEventListener("click", () => {
  burger_toggle_button.classList.toggle("burger__menu_active");
  body.classList.toggle("burger__stop-scroll");
});

overlay.addEventListener("click", () => {
  burger_toggle_button.classList.remove("burger__menu_active");
  body.classList.remove("burger__stop-scroll");
});
