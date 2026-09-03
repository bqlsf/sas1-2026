const scan = require("prompt-sync")();

let montantInitial = Number(scan("entrez votre mantant : "));
let reduction = 0;
let prixFinal = 0;

if(montantInitial < 500){
    reduction;
    prixFinal = montantInitial - reduction;
}else if (montantInitial >= 500 && montantInitial < 1000){
    reduction = 5 / 100;
    prixFinal = montantInitial - reduction;
}else if(montantInitial >= 1000 && montantInitial < 2000){
    reduction = 10 / 100;
    prixFinal = montantInitial - reduction;
}else{
    reduction = 15 / 100;
    prixFinal = montantInitial - reduction;
}


console.log("Montant : ", montantInitial);
console.log("Réduction : ", reduction);
console.log("Total : ", prixFinal);