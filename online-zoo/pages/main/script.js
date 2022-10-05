"use strict";

/**
 * @params
 * @params
 */

const getRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const getRandomCardId = (count) => getRandomNum(0, count);

const testimonialsProgress = document.querySelector(
  "#testimonials_slider_range"
);
const testimonialsSliderCards = document.querySelector(
  "#testimonials_slider_cards"
);

async function getTestimonialsData() {
  const result = await fetch("db_testimonials.json")
    .then((response) => response.json())
    .then((data) => data);
  return result;
}
async function generateRndTestimonialsCards(countCards) {
  const allCards = await getTestimonialsData();

  let renderCards = document.querySelector("#testimonials_slider_cards");

  renderCards.innerHTML = "";

  const idsArray = new Array(allCards.length).fill(0).map((_, id) => id);

  for (let i = 0; i < countCards; i++) {
    console.log(idsArray);
    const cardId = idsArray[getRandomCardId(idsArray.length - 1)];
    console.log(cardId);

    idsArray.splice(
      idsArray.findIndex((val) => val === cardId),
      1
    );
    // console.log(idsArray.slice());

    const card_tpl = document.querySelector("#testimonialsSliderCard_tpl");

    const currentCard = card_tpl.content.cloneNode(true);

    const avatar = currentCard.querySelector(".user-avatar > img");
    const userName = currentCard.querySelector(".user-name");
    const userLoacation = currentCard.querySelector(".user__location");
    const dateTimePost = currentCard.querySelector(".date-time__post");
    const cardText = currentCard.querySelector(".card__text");
    // console.log(userLoacation);

    console.log(allCards[cardId]);
    // console.log(allCards[idsArray[cardId]].avatar);

    avatar.src = allCards[cardId].avatar;
    userName.innerText = allCards[cardId].name;
    userLoacation.innerText = allCards[cardId].localiton;
    dateTimePost.innerText = allCards[cardId].dateTime;
    cardText.innerText = allCards[cardId].body;

    renderCards.appendChild(currentCard);
  }

  // console.log(idsArray);
}
generateRndTestimonialsCards(11);

testimonialsProgress.addEventListener("input", () => {
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
  // console.log(testimonialsProgress.value);
});

// const testimonialCards = [
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar1.png",
//     name: "Vasya Pupkin",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar2.png",
//     name: "Robert De Niro",
//     localiton: "Germany",
//     dateTime: "Yesterday",
//     body: "Take a walk on the wild side! Become a docent volunteer at the L.A. Zoo. Our docent class offers in-depth zoology, ecology, and conservation training, focusing on the animals and plants at the Zoo.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar3.png",
//     name: "Jack Nicholson",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Let’s Take Flight! Come soar through the Zoo with our avian touring docents on another egg-cellent adventure. Which group of birds REALLY has green and red feathers and why? Which species of bird has the largest eye of any living land animal? Which eagle has the biggest beak (hint: the L.A. Zoo has a mated pair)? Why is Cyrano the scarlet ibis a different color from the others? Which birds seal their mates in trees? Come find out on October 22, and enjoy an autumn morning with the Zoo’s birds.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_1.jpg",
//     name: "Meryl Streep",
//     localiton: "Germany",
//     dateTime: "Today",
//     body: "Come hoof it at the Zoo with us! Stride through the Zoo with our hoofstock, hyrax, and elephant touring docents on a fabulous, four-legged, walking safari. Which antelope don’t begin to pant until the temperature exceeds 112 degrees? Which hoofed animal can run 55 mph for up to two hours because it evolved to outrun North American cheetahs? What’s the difference between horns and antlers? What physical movement is impossible for elephants, but fairly easy for many humans? Why do some animals chew their cud? What is a “dassie?” Come find out on November 12, and enjoy an autumn morning with the Zoo’s hoofstock, hyraxes, and elephants.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar2.jpg",
//     name: "Vasya Pupkin",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ut ad labore dolore odit voluptate.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_3.jpg",
//     name: "Tom Hanks",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Come join us for the Los Angeles Zoo’s autumn quarterly docent-led bird walk. In addition to our year-round residents, this is the time to spot birds that have come south from the Pacific Northwest and western Canada, such as white-crowned sparrows, American goldfinches and yellow-rumped warblers. The walk starts at 8 a.m. before the Zoo opens! We have a limited supply of mini binoculars to borrow, but if you have your own, please bring them, and be ready to spot birds as we “flock” together at the Zoo.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_4.png",
//     name: "Elizabeth Taylor",
//     localiton: "Germany",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_5.jpg",
//     name: "Vasya Pupkin",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_6.jpg",
//     name: "Leonardo DiCaprio",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "Come prowl through the Zoo with our touring docents as we enjoy some of nature’s greatest hunters and the well adapted prey who evade them. Which predators lie in wait for an ambush, and which ones chase down each meal? How many ways are there to avoid getting eaten? More than you can imagine! What can an animal’s eyes tell you about its location in the food chain? Come find out on December 10, and enjoy a winter morning with the Zoo’s predators and prey",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_7.png",
//     name: "Vasya Pupkin",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_8.jpg",
//     name: "Cate Blanchett",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_9.jpg",
//     name: "Vasya Pupkin",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_10.jpg",
//     name: "Kate Winslet",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_11.jpg",
//     name: "Sophia Loren",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_12.jpg",
//     name: "Steve McQueen",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "The best online zoo I’ve met. My son delighted very mucljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_13.jpg",
//     name: "Julia Roberts",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_14.png",
//     name: "Morgan Freeman",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     avatar: "../../assets/images/testimonials/avatars/avatar_15.jpg",
//     name: "Helen Mirren",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
// ];
