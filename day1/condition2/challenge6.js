const scan = require("prompt-sync")();

let numeroDeMois = Number(scan("donne le nombre de mois : "));

let nombredejour2 = 30;
let nombredejour1 = 31;
let nombredejour3 = 29;

switch(numeroDeMois)
{
    case 1:
        console.log("Janvier");
        console.log("le nombre de jours du mois : " + nombredejour1);
        break;
    case 2:
        console.log("février")
          console.log("le nombre de jours du mois : " + nombredejour3);
        break;
    case 3:
        console.log("mars");
          console.log("le nombre de jours du mois : " + nombredejour1);
        break;
    case 4:
        console.log("avril");
          console.log("le nombre de jours du mois : " + nombredejour2);
        break;
    case 5:
        console.log("mai");
          console.log("le nombre de jours du mois : " + nombredejour1);
        break;
    case 6:
        console.log("juin");
          console.log("le nombre de jours du mois : " + nombredejour2);
        break;
    case 7:
        console.log("juillet");
          console.log("le nombre de jours du mois : " + nombredejour1);
        break;
    case 8:
        console.log("aout");
          console.log("le nombre de jours du mois : " + nombredejour1);
        break;
    case 9:
        console.log("septembre");
          console.log("le nombre de jours du mois : " + nombredejour2);
        break;
    case 10:
        console.log("octobre");
          console.log("le nombre de jours du mois : " + nombredejour1);
        break;
    case 11:
        console.log("novembre");
          console.log("le nombre de jours du mois : " + nombredejour2);
        break;
    case 12:
        console.log("decembre");
          console.log("le nombre de jours du mois : " + nombredejour1);
        break;
default :
console.log("entrez un valid numiro");
}