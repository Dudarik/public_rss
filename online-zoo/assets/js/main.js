const burger_toggle_button = document.querySelector(".burger__toggle-button");
const overlay = document.querySelector(".burger__menu_overlay");

// console.log(burger_toggle_button);
// if (!burger_toggle_button) return;

burger_toggle_button.addEventListener("click", () => {
  burger_toggle_button.classList.toggle("burger__menu_active");
});

overlay.addEventListener("click", () => {
  burger_toggle_button.classList.remove("burger__menu_active");
});
