// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // call addDesitination - which will utilize fetch
    })

    // add eventListener for button
    // then, with button, grab the 4 inputs (pilot, copilot, etc)
    // finally, call  formSubmission - which scriptHelper has!
 });