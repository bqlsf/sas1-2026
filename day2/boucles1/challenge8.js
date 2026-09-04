const prompt = require("prompt-sync")();

let nombre = prompt("entrez votre nombre de mossion : " );
console.log("Nombre de mission : " , nombre);

let score = 0;
let i = 1;
while(i <= nombre)
{
score = i * 100;
console.log(`Mission ${i}  → Score : ${score}`)
i++;
}