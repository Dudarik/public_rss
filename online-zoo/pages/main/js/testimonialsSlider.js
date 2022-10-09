import { store } from "./store.js";
import { getRandomCardId } from "./helpers.js";

export const testimonialsProgress = document.querySelector(
  "#testimonials_slider_range"
);

export const testimonialsSliderCards = document.querySelector(
  "#testimonials_slider_cards"
);

/**
 *
 * @param {number} cardId
 * @returns {HTMLElement}
 */

const generateTestimonialsCard = (cardId) => {
  const allCards = store.testimonialCards;

  const $card_tpl = document.querySelector("#testimonialsSliderCard_tpl");

  const $currentCard = $card_tpl.content.cloneNode(true);

  $currentCard
    .querySelector(".slider__card")
    .setAttribute("data-cardid", cardId);

  const $avatar = $currentCard.querySelector(".user-avatar > img");
  const $userName = $currentCard.querySelector(".user-name");
  const $userLoacation = $currentCard.querySelector(".user__location");
  const $dateTimePost = $currentCard.querySelector(".date-time__post");
  const $cardText = $currentCard.querySelector(".card__text");

  $avatar.src = allCards[cardId].avatar;
  $userName.innerText = allCards[cardId].name;
  $userLoacation.innerText = allCards[cardId].localiton;
  $dateTimePost.innerText = allCards[cardId].dateTime;
  $cardText.innerText = allCards[cardId].body;

  return $currentCard;
};
/**
 *
 * @param {number} countCards
 * @return {void} bad practice... in function mutate DOM
 */

export const generateRndTestimonialsCards = (countCards) => {
  const allCards = store.testimonialCards;
  const $testimonialCards = document.querySelector(
    "#testimonials_slider_cards"
  );

  const $cardsArray = [];

  $testimonialCards.innerHTML = "";

  const idsArray = new Array(allCards.length).fill(0).map((_, id) => id);

  for (let i = 0; i < countCards; i++) {
    const cardId = idsArray[getRandomCardId(idsArray.length - 1)];

    idsArray.splice(
      idsArray.findIndex((val) => val === cardId),
      1
    );
    $cardsArray.push(generateTestimonialsCard(cardId));
  }
  $testimonialCards.append(...$cardsArray);
};

export const handleProgressBar = () => {
  const gap = +getComputedStyle(testimonialsSliderCards)
    .gap.slice(7)
    .slice(0, -2);
  const border = 2.7;
  const countCards = 11;
  const cardsWidth = testimonialsSliderCards.getBoundingClientRect().width;
  const oneOffset =
    (cardsWidth - gap * (countCards - 2)) / countCards + gap - border;

  testimonialsSliderCards.style.left = `${
    -1 * oneOffset * testimonialsProgress.value
  }px`;
};
