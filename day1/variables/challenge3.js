const prompt = require("prompt-sync")();
let GB = prompt("entrez votre capacite en GB : ");
let MB = GB * 1025;
console.log("Stockage : " + GB + "GB");
console.log("Resultat : " + MB + "MB")