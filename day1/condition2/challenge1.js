const scan = require("prompt-sync")();


let montant = Number(scan(" entrez le montant de la commande : "));
let laivraison = 0;
let totalAPayer = 0;

if(montant < 100){
laivraison = 30;
}else if(montant >= 100 && montant < 300 ){
    laivraison = 20;
}else if( montant >= 300 && montant < 500){
    laivraison = 10;
}else{
    laivraison ;
}

totalAPayer = montant + laivraison;

console.log("Montant commande : ", montant);
console.log("Frais livraison  : ", laivraison);
console.log("Total à payer :  ", totalAPayer);