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
export const setUpButtonClick = () => {
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

            } else {
                category.categoryType.classList.add("categoryButtonIdle");
                category.categoryType.classList.remove("categoryButtonActive");
                
            }
            
            console.log(`${category.alias} status updated. Active categories:`, getActiveCategories());
        });
    });
}

/*
Array of active buttons by alias names
*/
export const getActiveCategories = () => {
    let activeCategoryElements = categories.filter(category => category.categoryType.classList.contains("categoryButtonActive"));
    let activeCategoryAlias = activeCategoryElements.map(category => category.alias);

    return activeCategoryAlias;
}

