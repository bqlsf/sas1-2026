const prompt = require("prompt-sync")();

let nombre = prompt("entrez un nombre : ");
console.log("N = ", nombre);

let somme = 0;

for(let i = 0; i <= nombre; i++){
    somme = somme + i;
}
console.log("Somme = ", somme);