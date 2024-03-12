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
    let formSubmit = this.document.getElementById("formSubmit"); 
    formSubmit.addEventListener("click", function(event) {
        event.preventDefault(); 
        let list = this.document.getElementById("faultyItems");
        let pilotName = this.document.querySelector("input[name=pilotName");
        let copilotName = this.document.querySelector("input[name=copilotName"); 
        let fuelLevel = this.document.querySelector("input[name=fuelLevel]"); 
        let cargoMass = this.document.querySelector("input[name=cargoMass]"); 
        // console.log(document, list, pilotName, copilotName, fuelLevel, cargoMass); 
        // alert("You submitted a form!");
        formSubmission(this.document, list, pilotName, copilotName, fuelLevel, cargoMass);
        });
    // then, with button, grab the 4 inputs (pilot, copilot, etc)
    // finally, call  formSubmission - which scriptHelper has!
 });