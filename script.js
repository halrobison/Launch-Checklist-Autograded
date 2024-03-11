// Write your JavaScript code here!

// const faultyItems = document.getElementById("faultyItems");
// const pilotStatus = document.getElementById("pilotStatus"); 
// const copilotStatus = document.getElementById("copilotStatus"); 
// const fuelStatus = document.getElementById("fuelStatus"); 
// const cargoStatus = document.getElementById("cargoStatus"); 

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
        pickPlanet();
        // call addDesitination - which will utilize fetch
        addDestinationInfo(); 
    })

    // add eventListener for button
    let formSubmit = document.getElementById("formSubmit"); 
    formSubmit.addEventListener("click", function(event) {
        let pilotName = document.getElementById("pilotName");
        let copilotName = document.getElementById("copilotName"); 
        let fuelLevel = document.getElementById("fuelLevel"); 
        let cargoMass = document.getElementById("cargoMass"); 
        console.log(document, list, pilotName, copilotName, fuelLevel, cargoMass); 
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
        });
    // then, with button, grab the 4 inputs (pilot, copilot, etc)
    // finally, call  formSubmission - which scriptHelper has!
 });