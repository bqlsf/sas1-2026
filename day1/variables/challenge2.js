const prompt = require("prompt-sync")();
let MAD = prompt("entrez votre buget en MAD : ");
let EUR = MAD / 11;
console.log("Budget en MAD : "+ MAD);
console.log("Budjet en EUR : "+ EUR);