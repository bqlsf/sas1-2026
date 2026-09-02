const prompt = require("prompt-sync")();

let nombre = prompt("entrez le nombre : ");

console.log("N = ", nombre);

for(let i = 1; i <= nombre ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}