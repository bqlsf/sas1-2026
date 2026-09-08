function compterVoyelles(chaine)
{
    let i = 0;
    let compteur = 0;

    while(chaine[i]){
        if(chaine[i] == "a" || chaine[i] == "e" || chaine[i] == "i" || chaine[i] == "o" || chaine[i] == "u" || chaine[i] == "y"){
            compteur ++;
        }
        i++;
    }
    return compteur;
}

console.log(compterVoyelles("developpeur"))