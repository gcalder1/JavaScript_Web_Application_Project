const searchBarFunctionality = () => {
    const searchBarInput = document.getElementById("searchBarInput");
    const searchButton = document.getElementById("searchButton");

    searchBarInput.addEventListener("input", (typingTracker) => {
        const inputTyping = typingTracker.target.value;
        console.log(inputTyping)
    })

    searchButton.addEventListener("click", () => {
        console.log("buttonClicked")
    })
}

export { searchBarFunctionality };