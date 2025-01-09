function displayPoem(response) {
   console.log(response)
    new Typewriter("#poem", {
        strings: "its you" ,
        autoStart: true,
        delay: 20,
        cursor: "",
});
}

function getPoem(event) {
    event.preventDefault()
    let apiKey = "04d1784de2be03a1bd2o2db8tf6b23e4";
    let context = "You are an intelligent virtual assistant that has access to many wonderful, heart-warming poems. Please make sure that the poem has a miximum lines.";
    let prompt = "Please tell me a poem about the flowers";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "⌛Please wait while we generate your poem...";

    axios.get(apiURL).then(displayPoem);
}