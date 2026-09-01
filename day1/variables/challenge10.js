const prompt = require("prompt-sync")();

let r = prompt("rayon : ");
let h = prompt("hauteur : ");
const π = 3.14159;

console.log("Rayon : " + r + " m");
console.log("Hauteur : " + h + " m");

let v = π * (r)**2 * h;

console.log("Volume : " + v + " m³")