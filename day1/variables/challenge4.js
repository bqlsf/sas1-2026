const prompt = require ("prompt-sync")();

let distance = prompt("entrez votre distance en kilometre : ");
let carburant = prompt(" entrez votre carburant en litres : ");
let consomation = (carburant / distance) * 100 ;
console.log("Distance : " + distance + " km");
console.log("carburant : " + carburant + " Litres");
console.log("Consomation : " + consomation + " L/100km")