const scan = require("prompt-sync")();


let nombre = Number(scan("Saisie : "));
let somme  = 0;
let nombreDesValeur = 0;


while(nombre != 0){
    nombreDesValeur++;
    somme = somme + nombre;
    
    nombre = Number(scan("Saisie : "));
}


console.log("nombre des valeur : ", nombreDesValeur);
console.log("somme : ",somme );