const burger_menu = document.querySelector(".menu__burger");
const overlay = document.querySelector(".burger__menu_overlay");

console.log(burger_menu);
// if (!burger_menu) return;

burger_menu.addEventListener("click", () => {
  burger_menu.classList.toggle("burger__menu_active");
});

overlay.addEventListener("click", () => {
  burger_menu.classList.remove("burger__menu_active");
});
