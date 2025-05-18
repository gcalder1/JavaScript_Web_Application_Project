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
        if (!jokeResponse.ok) {
            throw new Error("This place does NOT have jokes");
        }

        const apiData = await jokeResponse.json();
        if (apiData.error) {
            throw new Error("Please provide accurate fields for your search")
        }

        console.table(apiData);
        return apiData;
    } catch (error) {
        if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
            throw new Error("Your jokes are unable to be found")
        } else if (error instanceof TypeError && error.message.includes("Cannot read properties of undefined (reading 'type')!")) {
            throw new Error("Please make sure you have the correct API link")
        } else {
            throw error;
        }
    }

}
