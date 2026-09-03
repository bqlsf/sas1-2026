const scan = require("prompt-sync")();

let couleur = scan(" entrez la couleur : ");


if(couleur == "rouge"){
    console.log("Arrêtez-vous");
}else if ( couleur == "orange"){
    console.log("Ralentissez");
}else if(couleur == "vert"){
    console.log("Vous pouvez passer")
}else{
    console.log("Couleur invalide");
}