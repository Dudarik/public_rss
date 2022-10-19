import { store } from "../store.js";
import { isLSAvailabel } from "./localstorage.js";

export const initGame = () => {
  store.ls_available = isLSAvailabel();
  console.log("Game init");
};
