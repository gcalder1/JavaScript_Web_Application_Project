import { getActiveCategories } from "./buttonCategoryTracking.js"

/*
Dynamic URL creation - Category-based filter for final fetch URL
*/

export const generateJokeURL = () => {
    let activeCategories = getActiveCategories();
     console.log("These are the currently active categories:", activeCategories);

    //We can get a joke anytime we want (with or without categories)
    if (activeCategories.length === 0) {
        const anyJokeCategory = "Pun,Spooky,Christmas,Programming,Miscellaneous";
        return `https://v2.jokeapi.dev/joke/${anyJokeCategory}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
    }

    //Joining the different aliases by comma for correct end-point format
    const categoryDynamicUrl = activeCategories.join(",");
    return `https://v2.jokeapi.dev/joke/${categoryDynamicUrl}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
    
}


/*
Fetch from JokeAPI based on dynamic URL created from categories
*/

export const fetchJoke = async () => {
    try{
        const url = generateJokeURL();
        console.log(`We're getting the url from here: ${url}`);

        const jokeResponse = await fetch(url);
        const apiData = await jokeResponse.json();

        console.table(apiData);
        return apiData;
    } catch (error) {
        console.error(`Something went wrong: ${error}`);
        throw error;
    }

}
