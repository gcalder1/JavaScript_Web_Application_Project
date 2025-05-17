import { getActiveCategories } from "./buttonCategoryTracking.js"

/*
Dynamic URL creation - Category-based filter for final fetch URL
*/

let createFetchURL = () => {
    let activeCategories = getActiveCategories();
     console.log("These are the currently active categories:", activeCategories);

    //We can get a joke anytime we want (with or without categories)
    if (activeCategories.length === 0) {
        const anyJokeCategory = "Pun,Spooky,Christmas,Programming,Miscellaneous";
        console.log(anyJokeCategory)
        const filterlessJokeUrl = `https://v2.jokeapi.dev/joke/${anyJokeCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
        console.log(filterlessJokeUrl);
        return filterlessJokeUrl;
    }

    //Joining the different aliases by comma for correct end-point format
    const categoryDynamicUrl = activeCategories.join(",");

    const jokeUrl = `https://v2.jokeapi.dev/joke/${categoryDynamicUrl}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
    console.log(jokeUrl);

    return jokeUrl;

}


/*
Fetch from JokeAPI based on dynamic URL
*/

fetch(createFetchURL())
    .then((jokeContentResponse) => {
        console.log("we got a reponse from jokeAPI");
        console.log(jokeContentResponse.headers.get("content-type"));
        return jokeContentResponse.json();
    })
    .then((jokeData) => {
        console.log("joke data is here");
        console.log(jokeData);
    })
    .catch((error) => {
        console.log("we've got an error", error);
    })
    .finally(() => {
        console.log("now we're showing what we've got to the user...")
    })


//This goes at the end of all of your code//
export { createFetchURL };