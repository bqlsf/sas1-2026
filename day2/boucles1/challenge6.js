const prompt = require("prompt-sync")();

let nombre = prompt("entrez un nombre : ");
console.log("Départ : ", nombre);

let i = 0;
while(i <= nombre){
    console.log(nombre);
    nombre--;
}
console.log("Décollage !");