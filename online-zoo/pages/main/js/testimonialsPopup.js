import { store } from "./store.js";

export const popupOverlay = document.querySelector("#popup_overlay");

export const popupCard = document.querySelector("#popup_card");

export const handleOpenPopup = (event) => {
  if (document.documentElement.clientWidth > 999) return;

  const elem = event.target;

  const closestCard = elem.closest(".slider__card");

  const cardId = closestCard.dataset.cardid;

  if (!closestCard) return;

  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;

  const avatar = popupCard.querySelector(".user-avatar > img");
  const userName = popupCard.querySelector(".user-name");
  const userLoacation = popupCard.querySelector(".user__location");
  const dateTimePost = popupCard.querySelector(".date-time__post");
  const cardText = popupCard.querySelector(".card__text");

  avatar.src = store.testimonialCards[cardId].avatar;
  userName.innerText = store.testimonialCards[cardId].name;
  userLoacation.innerText = store.testimonialCards[cardId].localiton;
  dateTimePost.innerText = store.testimonialCards[cardId].dateTime;
  cardText.innerText = store.testimonialCards[cardId].body;

  popupOverlay.classList.add("popup__overlay_active");
};

export const handleClosePopup = (event) => {
  console.log(event.target);
  if (
    !(
      event.target.id === "close_popup" ||
      event.target.id === "popup_overlay" ||
      event.target.id === "popup_content"
    )
  )
    return;
  // testimonialsSliderCards.removeEventListener('click', handleOpenPopup)

  event.stopPropagation();
  event.preventDefault();

  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  // console.log(event.target.id);

  popupOverlay.classList.remove("popup__overlay_active");
};
