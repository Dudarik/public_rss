import { store } from "./store.js";
import { getRandomCardId } from "./helpers.js";
/**
 *
 * @param {number} cardId
 * @returns {HTMLElement}
 */
const generateNewPetsCard = (cardId) => {
  const allCards = store.petsCards;

  const $card_tpl = document.querySelector("#petsSliderCard_tpl");

  const $currentCard = $card_tpl.content.cloneNode(true);

  const pathToImages = {
    desktop: "../../assets/images/desktop/pets/slider/",
    small_desktop: "../../assets/images/small_desktop/pets/slider/",
    tablet: "../../assets/images/tablet/pets/slider/",
    mobile: "../../assets/images/mobile/pets/slider/",
  };

  const BASE_ICON_PATH = "../../assets/icons/cards_icons/";
  const pathToIcons = {
    desktop: BASE_ICON_PATH,
    mobile: BASE_ICON_PATH + "mobile/",
  };

  const $desktop_img = $currentCard.querySelector("#slider_card_desktop_image");
  const $small_desktop_img = $currentCard.querySelector(
    "#slider_card_small_desktop_image"
  );
  const $tablet_img = $currentCard.querySelector("#slider_card_tablet_image");
  const $mobile_img = $currentCard.querySelector("#slider_card_mobile_image");

  const $cardTitle = $currentCard.querySelector(".card__title");
  const $cardSubtitle = $currentCard.querySelector(".card__sub-title");

  const $iconCardBig = $currentCard.querySelector("#icon_card_big");
  const $iconCardSmall = $currentCard.querySelector("#icon_card_small");

  $desktop_img.srcset = pathToImages.desktop + allCards[cardId].image;
  $small_desktop_img.srcset =
    pathToImages.small_desktop + allCards[cardId].image;
  $tablet_img.srcset = pathToImages.tablet + allCards[cardId].image;
  $mobile_img.srcset = pathToImages.mobile + allCards[cardId].image;

  $cardTitle.innerText = allCards[cardId].name;
  $cardSubtitle.innerText = allCards[cardId].location;

  $iconCardBig.srcset = pathToIcons.desktop + allCards[cardId].icon;
  $iconCardSmall.srcset = pathToIcons.mobile + allCards[cardId].icon;
  return $currentCard;
};

/**
 *
 * @param {number} countCards
 * @param {HTMLElement} $slide
 * @returns {void}
 */
export const generateNewPetsSlide = (countCards, $slide) => {
  $slide.innerHTML = "";
  const idsArray = new Array(store.petsCards.length).fill(0).map((_, id) => id);

  for (let i = 0; i < countCards; i++) {
    const cardId = idsArray[getRandomCardId(idsArray.length - 1)];

    idsArray.splice(
      idsArray.findIndex((id) => id === cardId),
      1
    );

    $slide.appendChild(generateNewPetsCard(cardId));
  }
};
