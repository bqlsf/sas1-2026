const prompt = require("prompt-sync")();
let n = prompt("entrez le nombres de participants : ");

console.log("Nombre de participants : ", n);
for(i = 1 ; i <= n ; i++){
    console.log("Participant " ,i);
}
