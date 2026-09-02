const prompt = require("prompt-sync")();

let N = prompt("entrez un nombre N : ");
let X = prompt("entrez in nombre X : ");

console.log("N = ", N);
console.log("X = ", X);

for(let i = 0; i <= N; i++){
    if(i % X == 0){
        console.log(i);
    }
}