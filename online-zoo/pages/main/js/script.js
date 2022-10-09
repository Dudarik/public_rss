import { store } from "../js/store.js";
import {
  testimonialsProgress,
  testimonialsSliderCards,
  generateRndTestimonialsCards,
  handleProgressBar,
} from "./testimonialsSlider.js";
import {
  handleOpenPopup,
  handleClosePopup,
  popupOverlay,
  popupCard,
} from "./testimonialsPopup.js";
import { generateNewPetsSlide } from "./petsSlider.js";

const PETS_BTN_LEFT = document.querySelector("#pets_button_left");
const PETS_BTN_RIGHT = document.querySelector("#pets_button_right");
const PETS_CAROUSEL = document.querySelector("#slider_carousel");

const PETS_CENTER_SLIDE = document.querySelector(
  ".slider__cards.center__slide"
);
const PETS_LEFT_SLIDE = document.querySelector(".slider__cards.left__slide");
const PETS_RIGHT_SLIDE = document.querySelector(".slider__cards.right__slide");

window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

generateNewPetsSlide(store.petsSliderCardsCount, PETS_CENTER_SLIDE);
generateNewPetsSlide(store.petsSliderCardsCount, PETS_LEFT_SLIDE);
generateNewPetsSlide(store.petsSliderCardsCount, PETS_RIGHT_SLIDE);

generateRndTestimonialsCards(11);

testimonialsProgress.addEventListener("input", handleProgressBar);

popupOverlay.addEventListener("click", handleClosePopup);

popupCard.addEventListener("click", handleClosePopup);

testimonialsSliderCards.addEventListener("click", handleOpenPopup);

// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const addHandlersToButtons = () => {
  PETS_BTN_LEFT.addEventListener("click", handleAnimationLeft);
  PETS_BTN_RIGHT.addEventListener("click", handleAnimationRight);
};

const removeHandlersFromButtons = () => {
  PETS_BTN_LEFT.removeEventListener("click", handleAnimationLeft);
  PETS_BTN_RIGHT.removeEventListener("click", handleAnimationRight);
};

const removeClassesFromCarousel = () => {
  console.log("remove");
  PETS_CAROUSEL.classList.remove("pets__slide_right");
  PETS_CAROUSEL.classList.remove("pets__slide_left");
};

const handleAnimationLeft = () => {
  store.animation_direction = "left";
  removeHandlersFromButtons();
  document.querySelector("#slider_carousel").classList.add("pets__slide_left");
};

const handleAnimationRight = () => {
  store.animation_direction = "right";
  removeHandlersFromButtons();
  document.querySelector("#slider_carousel").classList.add("pets__slide_right");
};

PETS_BTN_LEFT.addEventListener("click", handleAnimationLeft);
PETS_BTN_RIGHT.addEventListener("click", handleAnimationRight);

PETS_CAROUSEL.addEventListener("animationend", () => {
  if (store.animation_direction === "left") {
    PETS_CENTER_SLIDE.innerHTML = PETS_LEFT_SLIDE.innerHTML;
    generateNewPetsSlide(store.petsSliderCardsCount, PETS_LEFT_SLIDE);

    // PETS_CENTER_SLIDE.innerHTML = PETS_RIGHT_SLIDE.innerHTML;
    // generateNewPetsSlide(store.petsSliderCardsCount, PETS_RIGHT_SLIDE);
  }
  if (store.animation_direction === "right") {
    PETS_CENTER_SLIDE.innerHTML = PETS_RIGHT_SLIDE.innerHTML;
    generateNewPetsSlide(store.petsSliderCardsCount, PETS_RIGHT_SLIDE);
    // PETS_CENTER_SLIDE.innerHTML = PETS_LEFT_SLIDE.innerHTML;
    // generateNewPetsSlide(store.petsSliderCardsCount, PETS_LEFT_SLIDE);
  }
  removeClassesFromCarousel();
  addHandlersToButtons();
});
