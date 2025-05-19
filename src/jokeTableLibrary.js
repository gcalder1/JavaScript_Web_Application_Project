let personalJokeStorage = [];

const saveJoke = (jokeData) => {
    const jokeStorageObject = {
        id: jokeData.id,
        category: jokeData.category,
        type: jokeData.type,
        content: 
        jokeData.type == "twopart" 
        ? `${jokeData.setup} | ${jokeData.delivery}`
        : jokeData.joke
    };

    // return jokeStorageObject
}

// const exampleJoke = {
//     id: 69420,
//     category: "Misc",
//     type: "single",
//     joke: "Spell PIG backwards."
// }

// console.log("This what the object looks like", saveJoke(exampleJoke));