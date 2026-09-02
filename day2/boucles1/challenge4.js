const prompt = require("prompt-sync")();

let nombre = prompt("entrez un nombre : ");
console.log("Nombre : ", nombre);

let multip = 0;

for(let i = 1; i <= nombre; i++)
{
multip = 7 * i;
console.log(`7 * ${i} = ${multip}`);
}