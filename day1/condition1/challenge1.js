const prompt = require("prompt-sync")();
let age = prompt("entrez votre age : " );

if(age >= 18 ){
    console.log("Accès autorisé");
}else
    {
        console.log("Accès refusé");
}