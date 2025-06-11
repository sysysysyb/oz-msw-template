import { getItemFromLocalStorage } from "./local.get";
import { setItemToLocalStorage } from "./local.set";

export const localStorageUtils = () => ({
  getItemFromLocalStorage,
  setItemToLocalStorage,
});
