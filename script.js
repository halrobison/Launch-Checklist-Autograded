// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        // call addDesitination - which will utilize fetch
        // FYI - can't assign a variable and then use .then; it will be one long ask (with a promise, waiting for the response with fetch)
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet,distance, planet.moons, planet.image); 
    })

    // add eventListener for button
    let form = document.querySelector("form"); 
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        let list = document.getElementById("faultyItems");
        let pilotName = document.querySelector('input[name=pilotName]').value;
        let copilotName = document.querySelector("input[name=copilotName").value; 
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value; 
        let cargoMass = document.querySelector("input[name=cargoMass]").value; 
        console.log(document, list, pilotName, copilotName, fuelLevel, cargoMass); 
        // alert("You submitted a form!");
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
        });
    // then, with button, grab the 4 inputs (pilot, copilot, etc)
    // finally, call  formSubmission - which scriptHelper has!
 });