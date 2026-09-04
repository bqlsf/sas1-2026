const scan = require("prompt-sync")();

let base = Number(scan("entrez la base : "));
let exposant = Number(scan("entrez l'exposant : "));

console.log("Base : ", base);
console.log("Exposant : ", exposant);


let i = 0;
let result = 1;
while(i < exposant){
    result = result * base;
    i++;
}
console.log("result : ", result);