function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 20,
        cursor: "",
});
}

function getPoem(event) {
    event.preventDefault()
    let searchPoemElement = document.querySelector("#search-poem");
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let context = "You are an intelligent virtual assistant that has access to many wonderful, heart-warming poems. Please get straight to the poem and do not provide a response unless it is a poem. Please make sure that the poem has a maximum of six lines. Please make sure that each sentence starts in it own line below the first sentence. Please sign '~Saneh🩷' at the end of the poem.";
    let prompt = `Please tell me a poem about ${searchPoemElement.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "⌛Please wait while we generate your poem...";

    axios.get(apiURL).then(displayPoem);
}

let inputElement = document.querySelector(".poem-search");
inputElement.addEventListener("submit", getPoem);