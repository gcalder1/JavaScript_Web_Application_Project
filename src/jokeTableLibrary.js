let personalJokeStorage = [];

/*
We're storing the data from the fetched joke into our personal library array in the form of an object that
has our necessary data
*/
export const saveJoke = (jokeData) => {
    const jokeStorageObject = {
        id: jokeData.id,
        category: jokeData.category,
        type: jokeData.type,
        content: 
        jokeData.type == "twopart" 
        ? `Set-Up: ${jokeData.setup} | Delivery: ${jokeData.delivery}`
        : `One-Liner: ${jokeData.joke}`
    };

    /*
    We're checking for dupes and ensure jokes of those ID are not passed
    */
    if (!personalJokeStorage.some(joke => joke.id === jokeStorageObject.id)) {
        personalJokeStorage.push(jokeStorageObject);
        updateJokeTable();
    };
    

};

/*
Populating the body of the table with the necessary data from our stored joke library by creating a row that
will fit the individual cells of information
*/
export const updateJokeTable = () => {
    const tableBodyUpdate = document.getElementById("bodyJokes")
    tableBodyUpdate.innerHTML = '';

    personalJokeStorage.forEach(savedJokeData => {
        const tableRow = document.createElement("tr");

        tableRow.innerHTML = `
        <td class="tableData"><strong class="designator">Joke</strong><p class="tableContent">${savedJokeData.content}</p></td>
        <td class="tableData"><strong class="designator">Category</strong><p class="tableContent">${savedJokeData.category}</p></td>
        <td class="tableData"><strong class="designator">ID</strong><p class="tableContent">${savedJokeData.id}</p></td>
        <div class="diamondSeparator">♦</div>
        `

        tableBodyUpdate.appendChild(tableRow);
    });
};


/*
We're changing the rows we can actively see based on what category we search for
*/
export const searchJokesByCategory = category => {
    const tableBody = document.getElementById("bodyJokes");
    const tableRows = tableBody.getElementsByTagName("tr")

    for (let row of tableRows) {
        const categoryCell = row.cells[1].textContent.toLowerCase();
        const searchByCategory = category.toLowerCase();
        if (category === "") {
            row.style.display = ""
        } else if (categoryCell.includes(searchByCategory)) {
            row.style.display = ""
        } else {
            row.style.display = "none"
        };
    };
};