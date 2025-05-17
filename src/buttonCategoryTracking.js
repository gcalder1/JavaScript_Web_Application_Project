import { createFetchURL } from "./apiFetch.js";

/*
Array Of Objects creation: Respective button elements + Created aliases
*/
const pun = document.getElementById('pun');
const spooky = document.getElementById('spooky');
const christmas = document.getElementById('christmas');
const programming = document.getElementById('programming');
const misc = document.getElementById('misc');

let categories = [
{categoryType: pun, alias: "Pun", context: "A Punny Joke"},
{categoryType: spooky, alias: "Spooky", context: "Spooky Scary Skeletons"},
{categoryType: christmas, alias: "Christmas", context: "Winter and Festive"},
{categoryType: programming, alias: "Programming", context: "Coding Chaos"},
{categoryType: misc, alias: "Miscellaneous", context: "Other"}
];

/*
Button functionality: Visual Animation + Category Selection (Adding/Removing
appropriate classes)
*/
const setUpButtonClick = () => {
    categories.forEach(category => {

        category.categoryType.addEventListener("mouseover", () => {
            category.categoryType.classList.add("categoryButtonHover");
        });

        category.categoryType.addEventListener("mouseout", () => {
            category.categoryType.classList.remove("categoryButtonHover");
        });

        //Listening to a click to determine active or idle category status
        category.categoryType.addEventListener('click', () => {
            
            if (category.categoryType.classList.contains("categoryButtonIdle")) {
                category.categoryType.classList.remove("categoryButtonIdle");
                category.categoryType.classList.add("categoryButtonActive");

                console.log(`${category.alias} has been activated.`);
            } else {
                category.categoryType.classList.add("categoryButtonIdle");
                category.categoryType.classList.remove("categoryButtonActive");
                
                console.log(`${category.alias} has been de-activated.`);
            }
            
        });

        //Checking for active categories and then generating our URL from that
        category.categoryType.addEventListener("click", () => {

            let activeCategories = getActiveCategories();
            console.log(`Updated active categories: ${activeCategories}`);

            let fetchUrl = createFetchURL(activeCategories);
            console.log(`Updated URL: ${fetchUrl}`);
            

        });
    });
}

/*
Array of active buttons by alias names
*/
const getActiveCategories = () => {
    let activeCategoryElements = categories.filter(category => category.categoryType.classList.contains("categoryButtonActive"));
    let activeCategoryAlias = activeCategoryElements.map(category => category.alias);

    return activeCategoryAlias;
}


//This goes at the end of all of your code. Fill with what you're exporting//
export { setUpButtonClick, getActiveCategories, categories };