function trierTableau(tab){
    let nombre
    for(let i = 0; i < tab.length; i++){
        for(let j = 0; j < tab.length-1; j++){
            if(tab[j] > tab[j+1]){
                nombre = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = nombre
            }
        }
    }
    return tab;
}

console.log(trierTableau([12, 22, 14, 44]));