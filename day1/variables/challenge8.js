const prompt = require("prompt-sync")();

let U = prompt("La tension U en volts : ");
let I = prompt("L'intensité I en ampères :");
let t = prompt("Le temps t en heures : ");

let energie = U * I * t ;

console.log("Tension : " + U + " V");
console.log("Intensité : " + I + " A");
console.log("Temps : " + t + " heures");
console.log("Énergie : " + energie + " Wh");