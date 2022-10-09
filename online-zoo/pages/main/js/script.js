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

document.addEventListener("click", (e) => {
  console.log(e.target);
});

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

const handleAnimationLeft = (event) => {
  store.animation_direction = "left";
  removeHandlersFromButtons();
  document.querySelector("#slider_carousel").classList.add("pets__slide_left");
};

const handleAnimationRight = (event) => {
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

// const animals_db = [
//   {
//     id: 0,
//     name: "ALLIGATORS",
//     location: "Native to South America",
//     image: "alligators.png",
//     icon: "meet-fish_icon.svg",
//   },
//   {
//     id: 1,
//     name: "BEAR",
//     location: "Native to Asia",
//     image: "bear.png",
//     icon: "meet-fish_icon.svg",
//   },
//   {
//     id: 2,
//     name: "CHEETAHS",
//     location: "Native to Africa",
//     image: "cheetahs.png",
//     icon: "meet-fish_icon.svg",
//   },
//   {
//     id: 3,
//     name: "EAGLES",
//     location: "Native to South America",
//     image: "eagles.png",
//     icon: "meet-fish_icon.svg",
//   },
//   {
//     id: 4,
//     name: "ELEPHANTS",
//     location: "Native to South Africa",
//     image: "elephant.png",
//     icon: "banana-bamboo_icon.svg",
//   },
//   {
//     id: 5,
//     name: "GIANT PANDAS",
//     location: "Native to Southwest China",
//     image: "giant_pandas.png",
//     icon: "banana-bamboo_icon.svg",
//   },
//   {
//     id: 6,
//     name: "GORILLAS",
//     location: "Native to Congo",
//     image: "gorillas.png",
//     icon: "banana-bamboo_icon.svg",
//   },
//   {
//     id: 7,
//     name: "GORILLAS",
//     location: "Native to Congo",
//     image: "gorillas2.png",
//     icon: "banana-bamboo_icon.svg",
//   },
//   {
//     id: 8,
//     name: "HORSES",
//     location: "Native to South America",
//     image: "horse.png",
//     icon: "banana-bamboo_icon.svg",
//   },
//   {
//     id: 9,
//     name: "HYENA",
//     location: "Native to Africa",
//     image: "hyena.png",
//     icon: "meet-fish_icon.svg",
//   },
//   {
//     id: 10,
//     name: "JERBOA",
//     location: "Native to Asia west",
//     image: "jerboa.png",
//     icon: "banana-bamboo_icon.svg",
//   },
//   {
//     id: 11,
//     name: "KENGURU",
//     location: "Native to Australia",
//     image: "kenguru.png",
//     icon: "banana-bamboo_icon.svg",
//   },
//   {
//     id: 12,
//     name: "LION",
//     location: "Native to Africa",
//     image: "lion.png",
//     icon: "meet-fish_icon.svg",
//   },

//   {
//     id: 13,
//     name: "OWL",
//     location: "Native to Europe",
//     image: "owl.png",
//     icon: "meet-fish_icon.svg",
//   },
//   {
//     id: 14,
//     name: "PENGUINS",
//     location: "Native to Antarctica",
//     image: "penguins.png",
//     icon: "meet-fish_icon.svg",
//   },
//   {
//     id: 15,
//     name: "PUMA",
//     location: "Native to America",
//     image: "puma.png",
//     icon: "meet-fish_icon.svg",
//   },

//   {
//     id: 16,
//     name: "TWO-TOED SLOTH",
//     location: "Mesoamerica, South America",
//     image: "two-toed_sloth.png",
//     icon: "banana-bamboo_icon.svg",
//   },

//   {
//     id: 17,
//     name: "WOLF",
//     location: "Native to Europe",
//     image: "wolf.png",
//     icon: "meet-fish_icon.svg",
//   },

//   {
//     id: 18,
//     name: "ZUBR",
//     location: "Native to Eastern Europe",
//     image: "zubr.png",
//     icon: "banana-bamboo_icon.svg",
//   },
// ];
// console.log(JSON.stringify(animals_db));

// const testimonialCards = [
//   {
//     id: 0,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar1.png",
//     name: "Vasya Pupkin",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     id: 1,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar2.png",
//     name: "Robert De Niro",
//     localiton: "Germany",
//     dateTime: "Yesterday",
//     body: "Take a walk on the wild side! Become a docent volunteer at the L.A. Zoo. Our docent class offers in-depth zoology, ecology, and conservation training, focusing on the animals and plants at the Zoo. Take a walk on the wild side! Become a docent volunteer at the L.A. Zoo. Our docent class offers in-depth zoology, ecology, and conservation training, focusing on the animals and plants at the Zoo.",
//   },
//   {
//     id: 2,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar3.png",
//     name: "Jack Nicholson",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Let’s Take Flight! Come soar through the Zoo with our avian touring docents on another egg-cellent adventure. Which group of birds REALLY has green and red feathers and why? Which species of bird has the largest eye of any living land animal? Which eagle has the biggest beak (hint: the L.A. Zoo has a mated pair)? Why is Cyrano the scarlet ibis a different color from the others? Which birds seal their mates in trees? Come find out on October 22, and enjoy an autumn morning with the Zoo’s birds. Let’s Take Flight! Come soar through the Zoo with our avian touring docents on another egg-cellent adventure. Which group of birds REALLY has green and red feathers and why? Which species of bird has the largest eye of any living land animal? Which eagle has the biggest beak (hint: the L.A. Zoo has a mated pair)? Why is Cyrano the scarlet ibis a different color from the others? Which birds seal their mates in trees? Come find out on October 22, and enjoy an autumn morning with the Zoo’s birds.",
//   },
//   {
//     id: 3,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_1.png",
//     name: "Meryl Streep",
//     localiton: "Germany",
//     dateTime: "Today",
//     body: "Come hoof it at the Zoo with us! Stride through the Zoo with our hoofstock, hyrax, and elephant touring docents on a fabulous, four-legged, walking safari. Which antelope don’t begin to pant until the temperature exceeds 112 degrees? Which hoofed animal can run 55 mph for up to two hours because it evolved to outrun North American cheetahs? What’s the difference between horns and antlers? What physical movement is impossible for elephants, but fairly easy for many humans? Why do some animals chew their cud? What is a “dassie?” Come find out on November 12, and enjoy an autumn morning with the Zoo’s hoofstock, hyraxes, and elephants.",
//   },
//   {
//     id: 4,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_2.jpg",
//     name: "Isabelle Huppert",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ut ad labore dolore odit voluptate.",
//   },
//   {
//     id: 5,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_3.jpg",
//     name: "Tom Hanks",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Come join us for the Los Angeles Zoo’s autumn quarterly docent-led bird walk. In addition to our year-round residents, this is the time to spot birds that have come south from the Pacific Northwest and western Canada, such as white-crowned sparrows, American goldfinches and yellow-rumped warblers. The walk starts at 8 a.m. before the Zoo opens! We have a limited supply of mini binoculars to borrow, but if you have your own, please bring them, and be ready to spot birds as we “flock” together at the Zoo.",
//   },
//   {
//     id: 6,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_4.png",
//     name: "Elizabeth Taylor",
//     localiton: "Germany",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     id: 7,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_5.jpg",
//     name: "Harrison Ford",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     id: 8,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_6.jpg",
//     name: "Leonardo DiCaprio",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "Come prowl through the Zoo with our touring docents as we enjoy some of nature’s greatest hunters and the well adapted prey who evade them. Which predators lie in wait for an ambush, and which ones chase down each meal? How many ways are there to avoid getting eaten? More than you can imagine! What can an animal’s eyes tell you about its location in the food chain? Come find out on December 10, and enjoy a winter morning with the Zoo’s predators and prey",
//   },
//   {
//     id: 9,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_7.png",
//     name: "Will Smith",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex",
//   },
//   {
//     id: 10,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_8.jpg",
//     name: "Cate Blanchett",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et",
//   },
//   {
//     id: 11,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_9.jpg",
//     name: "Bruce Lee",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut",
//   },
//   {
//     id: 12,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_10.jpg",
//     name: "Kate Winslet",
//     localiton: "Austria",
//     dateTime: "Today",
//     body: "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
//   },
//   {
//     id: 13,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_11.jpg",
//     name: "Sophia Loren",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur",
//   },
//   {
//     id: 14,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_12.jpg",
//     name: "Steve McQueen",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "The best online zoo I’ve met. My son delighted very mucljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
//   },
//   {
//     id: 15,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_13.jpg",
//     name: "Julia Roberts",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     id: 16,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_14.jpg",
//     name: "Morgan Freeman",
//     localiton: "Austria",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
//   {
//     id: 17,
//     avatar: "../../assets/images/desktop/testimonials/avatars/avatar_15.jpg",
//     name: "Helen Mirren",
//     localiton: "France",
//     dateTime: "Yesterday",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea laudantium facere debitis consequuntur ut ad labore dolore odit voluptate.",
//   },
// ];

// console.log(JSON.stringify(testimonialCards));
