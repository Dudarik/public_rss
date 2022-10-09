import { petsSliderCardsCount } from "./helpers.js";
import { petsCards } from "../db_animals.js";
import { testimonialCards } from "../db_testimonials.js";
// import petsCards from "../db_animals.json" assert { type: "json" };
// import testimonialCards from "../db_testimonials.json" assert { type: "json" };

export const store = {
  testimonialCards,
  petsCards,
  animation_direction: "",
  petsSliderCardsCount: petsSliderCardsCount(),
};
