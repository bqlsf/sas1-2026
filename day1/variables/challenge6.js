const prompt = require ("prompt-sync")();
let score1 = prompt("entrez votre score partie 1 : ");
let score2 = prompt("entrez votre score partie 2 : ");
let score3 = prompt("entrez votre score partie 3 : ");
let score4 = prompt("entrez votre score partie 4 : ");

console.log("Partie 1 : " + score1);
console.log("Partie 2 : " + score2);
console.log("Partie 3 : " + score3);
console.log("Partie 4 : " + score4);

score1 = score1 * 1;
score2 = score2 * 1;
score3 = score3 * 1;
score4 = score4 * 1;

let total =( score1 + score2 + score3 + score4 );
let moyen = total / 4 ;

console.log("Score total : " + total);
console.log("Moyenne : " + moyen);