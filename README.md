# George Calderon - The Silly Corner

### TKH Innovation Fellowship: Web Development Cohort A - 2025

This project contains the finalized product for the Web Application Project using a random API. Please check below for more information regarding this project, the repository, and it's contents.

* You may view _The Silly Corner_ [here](https://clever-alpaca-c54b17.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/103ad8ed-a8d5-4ec9-921a-16783126838b/deploy-status)](https://app.netlify.com/projects/clever-alpaca-c54b17/deploys)

## About this repository 🔍

### How do you run this project? 📌

_To run this project on your own environment, please make sure you have node.js and NPM installed._ 

* You first want to clone this repository down to your machine via ` git clone https://github.com/gcalder1/JavaScript_Web_Application_Project.git ` within your respective folder.

* Then, you'll want to run your ` npm install ` command to download the necessary dependencies for my project (the only dependency being a dev dependency, _Vite_).

* Finally, once the necessary dependencies are fully downloaded and the project is opened inside of your coding environment, please run ` npm run dev ` to open up a live view of the project in the form of your local development server to see real-time code changes and instant feed back of the web-page's behavior.

### API Choice 📖

This project uses [JokeAPI](https://jokeapi.dev/), a free to use Public API that can be used without an API token, membership, registration or payment. Because this API delivers consistently formatted jokes from a variety over 1000 different jokes, limiting the jokes to only yield SFW (Safe-For-Work) content became the main objective behind the development of my web page.

### Integration of JokeAPI into Web Page 💡

Because JokeAPI is the sole provider of data for this project, my Web Page uses fetch requests for obtaining a variety of jokes limited to 5 Safe-For-Work categories:

* Pun 😂

* Spooky 👻

* Christmas ❄

* Programming 🤖

* Miscellaneous ⚖

Based on whatever is received after the fetch is performed to JokeAPI, we display the appropriate response to the user. 

Once we receive the joke from the JSON object from JokeAPI, we display it to the user in a dialogue pop-up and store certain portions of information from the received data into a storage array, which will be used to display all previously generated jokes.

* The user may interact with the stored jokes information via category input inside of the provided search bar.
    * You may only search for jokes based on the existing categories showed within the display area below the search bar.

### Web Page Features ✨

This Web Page displays fetched joke data to the user in dynamically updated formats (dialogue pop up & real-time populated table) based on certain actions. 

This project, on top of it's organization HTML and functionally based JavaScript choices, shares a focus on it's stylistic decisions.

* Many of the elements (including buttons, table display, and even text) are stylized using vanilla CSS to create:

    *  Various visual animations
    * Color transitions 
    * Document-wide custom orientation of elements to match the user's screensize via media queries

<div style="display: flex; flex-direction: row;">
    <img src="/projectScreenshots/landscapeTheSillyCorner.png" alt="Landscape - TSC" style="width: 45%; height: auto;"/>
    <img src="/projectScreenshots/portraitTheSillyCorner.png" alt="Portrait - TSC" style="width: 25%; height: auto;"/>
    <img src="/projectScreenshots/phoneViewTheSillyCorner.png" alt="Phone View - TSC" style="width: 25%; height: auto;"/>
</div>

## Final Thoughts 📝

### Credits 💼

I would like to give credit to [Negative Space](https://negativespace.co/) and [SVG Repo](https://www.svgrepo.com/) for their amazing collection of free-to-use, copyright-free, and royalty-free materials!

### Contact Me 📩

Feel free to schedule a 1-on-1 with me through [Calendly](https://calendly.com/george-calderon2000/15min)

---

_Thank you for visiting my repo!_

**George Calderon** | [George's GitHub Profile](https://github.com/gcalder1)