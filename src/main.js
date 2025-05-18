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
      jokeContainer.showModal();
      displayError();
      console.error(`Couldn't get joke: ${error}`);
    }
  });

  document.getElementById("fetchJokeButton").addEventListener("click", () => {

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
      <div class="close">
        <button id="closeButton">
          Close
        </button>
      </div>
      `
    } else {
      jokeContainer.innerHTML = `
      <p><strong class="labelDecorator">One-liner:</strong> ${jokeData.joke}</p>
      <div class="close">
        <button id="closeButton">
          Close
        </button>
      </div>
      `
    }
}

const displayError = () => {
  const jokeContainer = document.getElementById("currentJoke");
    jokeContainer.innerHTML = `
    <p class="errorMessage"><strong>Error:</strong> We were unable to find a joke
    of that category!</p>
    <div class="close">
      <button id="closeButton">
        Close
      </button>
    </div>

    `
}

/*
Close dialogue
*/

closeContainer.addEventListener("click", () => {
  jokeContainer.close()
})