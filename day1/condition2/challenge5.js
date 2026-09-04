const scan = require("prompt-sync")();

let point = scan("entrez votre point : ");

if(point < 1000)
    {
    console.log("Bronze");
}
else if (point >= 1000 && point < 2000){
    console.log("Argent");
}
else if (point >= 2000 && point < 3000){
    console.log("Or");
}else if (point >= 3000 && point < 5000){
    console.log("Diamant");
}else if (point >= 5000){
    console.log(" Légende");
}else {
    console.log("unvalid score");
}
