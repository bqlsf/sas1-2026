const prompt = require("prompt-sync")();

let choix = Number( prompt("choix : "));

switch(choix){
    case 1:
        console.log(" Affichage de profil");
        break ;
    case 2:
        console.log("Ouverture des paramètres");
        break ;
    case 3:
        console.log("Affichage des notifications");
        break;
    case 4:
        console.log("déconnecte");
        break;
    default :
    console.log("choix invalid");
}