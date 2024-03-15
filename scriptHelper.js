// Write your helper functions here!

// task 3
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    // when you uncomment this, you may want to return as a template literal - bc think about this being inserted into HTML. will use `` surrounding.
    let missionTarget = document.getElementById("missionTarget"); 
    missionTarget.innerHTML = 
    `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
 }

 // task 2
 function validateInput(testInput) {
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
    
    const launchStatus = document.querySelector("#launchStatus");
    const pilotStatus = document.querySelector('#pilotStatus')
    const copilotStatus = document.querySelector('#copilotStatus')
    const fuelStatus = document.querySelector('#fuelStatus')
    const cargoStatus = document.querySelector('#cargoStatus')
    
    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        alert("Enter valid inputs")
    } else {
        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`
        list.style.visibility = 'visible'
    }

    if (validateInput(fuelLevel) === 'Is a Number') {
        if (Number(fuelLevel) < 10000) {
          launchStatus.style.color = 'red'
          launchStatus.textContent = 'Shuttle Not Ready for Launch'
          fuelStatus.textContent = 'Fuel level too low for launch'
        } else {
          fuelStatus.textContent = 'Fuel level high enough for launch'
        }
      }
    
      if (validateInput(cargoLevel) === 'Is a Number') {
        if (Number(cargoLevel) > 10000) {
          launchStatus.style.color = 'red'
          launchStatus.innerText = 'Shuttle Not Ready for Launch'
          cargoStatus.textContent = 'Cargo mass too heavy for launch'
        } else {
          cargoStatus.textContent = 'Cargo mass low enough for launch'
        }
      }
    
      if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000) {
        list.style.visibility = 'visible'
        launchStatus.textContent = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'green';
      }
}

 // task 3
 async function myFetch() {
    let planetsReturned;
     
    let fetchHelper = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await fetchHelper.json();
 
    return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {}
    // where random number generator will select planet from planetsReturned array; 
    planet = planets[Math.floor(Math.random() * 5)];
    return planet; 
 }
 
 // next 2 lines added as a fix for console bug of module undefined
 // if tests aren't working, remove these
 if (typeof module === 'object') {
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
 }
