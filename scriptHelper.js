// Write your helper functions here!

require('cross-fetch/polyfill');

// task 3
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    // when you uncomment this, you may want to return as a template literal - bc think about this being inserted into HTML. will use `` surrounding.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }

 // task 2
 function validateInput(testInput) {
    // will be shorter than formSubmission, just validating the inputs
    // review form validation lesson in text (can copy/paste!)
    // something like: 
    // if (testInput[name] = pilot) {

    // }
    // will return the given phrases AS STRINGS
    // this function will be used in formSubmission
    // when the first part of the function is complete, should pass 2 tests 
    // return "Empty", "Not a number", etc etc 
    let isNumber = "Is a Number"; 
    let notANumber = "Not a Number"; 
    let noInput = "Empty"
    if (testInput === "") {
        return noInput;
    } else if (isNaN(testInput) === false) {
        return isNumber; 
    } else {
        return notANumber;
    }
}
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // will be largest part of code - will be function called upon submission
    // this is where if statements will live - enough fuel? cargo too large? etc
    // remember, validation will utilize the validateInput function!

    // when you need to change text on pilotStatus, you'll have to change the style to visible AND change the text with .innerHTML!
    // for ex: pilotStatus = document.getElementById("pilotstatus"), then pilotstatus.innerHTML, etc etc 
    
}

 // task 3
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
        // where you will fetch all planets an as array 
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    // let planet = {} (bc it will be an object)
    // where random number generator will select planet from planetsReturned array; 
    // return planet; 
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;