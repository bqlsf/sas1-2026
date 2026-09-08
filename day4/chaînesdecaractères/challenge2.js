function compterLettre(chaine, lettre){
    let comptuer = 0;
    let i = 0;
    while(chaine[i]){
        if(chaine[i] == lettre){
            comptuer++;
        }
        i++;
    }
    return comptuer;
}

console.log(compterLettre("javascraipt", "a"))