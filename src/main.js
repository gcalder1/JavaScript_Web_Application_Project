import { fetchJoke } from "./apiFetch.js";
import { setUpButtonClick } from "./buttonCategoryTracking.js";
import { searchBarFunctionality } from "./searchBar.js";

const jokeContainer = document.getElementById("currentJoke");
const closeContainer = document.getElementById("closeButton");

document.addEventListener("DOMContentLoaded", () => {
  setUpButtonClick();
  searchBarFunctionality();
  /*
  Displaying fetched joke depending on fetched joke state
  */
  document.getElementById("fetchJokeButton").addEventListener("click", async () =>{
    try {
      const joke = await fetchJoke();
      jokeContainer.showModal();
      displayJoke(joke);

    } catch (error) {
      displayError();
      console.error(`Couldn't get joke: ${error}`);
    }
  });
});

/*
Display functions to be called within respective try/catch handlers
*/

const displayJoke = (jokeData) => {
  const jokeContainer = document.getElementById("currentJoke");
    if (jokeData.type === "twopart") {
      jokeContainer.innerHTML = `
      <p><strong class="labelDecorator">Setup:</strong> ${jokeData.setup}</p>
      <p><strong class="labelDecorator">Delivery:</strong> ${jokeData.delivery}</p>
      <button id="closeButton">
        Close
      </button>
      `
    } else {
      jokeContainer.innerHTML = `<p><strong class="labelDecorator>One-liner:</strong> ${jokeData.joke}</p>`
    }
}

const displayError = () => {
  const jokeContainer = document.getElementById("currentJoke");
    jokeContainer.innerHTML = `
    <p class="errorMessage"><strong>Error:</strong> We were unable to find a joke
    of that category!</p>
    `
}

/*
Close dialogue
*/

closeContainer.addEventListener("click", () => {
  jokeContainer.close()
})