const scan = require ("prompt-sync")();

let nombre = scan("entrez le nombre : ");
let factoriale = 1;

for(let i = 1; i <= nombre; i++){
    factoriale = factoriale * i;
}

console.log("N : ", nombre);
console.log(factoriale +"")