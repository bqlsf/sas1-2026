const prompt = require ("prompt-sync")();
let duree = prompt("entrez la duree du film en minutes : ");
console.log("Duree : " + duree + " minutes");
/*if(duree <= 120)
    {
    if(duree >= 60 ){
        
    }else if(duree < 60 ){
    console.log(;}

    console.log;

    }*/
if (duree < 60){
    console.log("Categorie : Film metrage")
}else if (duree > 120) {
    console.log ("Categorie : Film long")
} else {
    console.log("Categorie : Film standard");
}