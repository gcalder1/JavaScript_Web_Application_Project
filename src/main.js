import { fetchJoke } from "./apiFetch.js";
import { setUpButtonClick } from "./buttonCategoryTracking.js";
import { searchBarFunctionality } from "./searchBar.js";

const jokeContainer = document.getElementById("currentJoke");

document.addEventListener("DOMContentLoaded", () => {
  setUpButtonClick();
  searchBarFunctionality();

  /*
  Displaying fetched joke depending on fetched joke state
  */
  document.getElementById("fetchJokeButton").addEventListener("click", async () =>{
    try {
      jokeContainer.innerHTML = `<p>Loading...</p>`
      jokeContainer.showModal();

      const joke = await fetchJoke();
      displayJoke(joke);

    } catch (error) {
      jokeContainer.showModal();
      displayError(error);
      console.error(`Couldn't get joke: ${error}`);
    }
  });

  /*
  Close dialogue
  */
  document.addEventListener("click", (close) => {
    if (close.target.id == "closeButton") {
      jokeContainer.close();
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

const displayError = (error) => {
  const jokeContainer = document.getElementById("currentJoke");
    jokeContainer.innerHTML = `
    <p><strong class="errorMessage">Uh Oh!</strong> We were unable to find your
    joke at this time. ${error}!</p>
    <div class="close">
      <button id="closeButton">
        Close
      </button>
    </div>
    `
}

