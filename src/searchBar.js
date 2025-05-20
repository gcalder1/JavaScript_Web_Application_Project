import { searchJokesByCategory } from "./jokeTableLibrary.js";

/*
We're tracking what category the user searches for based on the searchBar's input (searching by clicking
search button or pressing enter)
*/
export const searchBarFunctionality = () => {
    const searchBarInput = document.getElementById("searchBarInput");
    const searchButton = document.getElementById("searchButton");

    const jokeSearch = () => {
        searchJokesByCategory(searchBarInput.value.trim());
    };

    searchButton.addEventListener("click", () => jokeSearch());
    searchBarInput.addEventListener("keyup", (enter) => {
        if(enter.key == "Enter") {
            jokeSearch();
        };
    });
};
