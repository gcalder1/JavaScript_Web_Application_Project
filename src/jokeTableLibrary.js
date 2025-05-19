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

    personalJokeStorage.push(jokeStorageObject);
    updateJokeTable();
    

    // return jokeStorageObject
};

// const exampleJoke = {
//     id: 69420,
//     category: "Misc",
//     type: "single",
//     joke: "Spell PIG backwards."
// }

// console.log("This what the object looks like", saveJoke(exampleJoke));

const updateJokeTable = () => {
    const tableBodyUpdate = document.getElementById("bodyJokes")
    tableBodyUpdate.innerHTML = '';

    personalJokeStorage.forEach(savedJokeData => {
        const tableRow = document.createElement("tr");

        tableRow.innerHTML = `
        <td class="tableData">${savedJokeData.content}</td>
        <td class="tableData">${savedJokeData.category}</td>
        <td class="tableData">${savedJokeData.id}</td>
        `

        tableBodyUpdate.appendChild(tableRow);
    });
};

