import { createFetchURL } from "./apiFetch.js";
import { setUpButtonClick, getActiveCategories } from "./buttonCategoryTracking.js";
import { searchBarFunctionality } from "./searchBar.js";

document.addEventListener("DOMContentLoaded", () => {
  setUpButtonClick();
  getActiveCategories();
  searchBarFunctionality();
  createFetchURL();
})