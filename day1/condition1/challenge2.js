const prompt = require("prompt-sync")();

let nombre = prompt("entrez un nombre entier : ");
console.log("Nombre : ", nombre);


if(nombre > 0){
    console.log("Le nombre est positif");
}else if(nombre < 0){
    console.log("Le nombre est négatif.")
}else{"le nombre est égal à zéro."}