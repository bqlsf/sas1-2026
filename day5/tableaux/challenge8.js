function supprimerDoublons(tab){

    let newTab = [];

    for(let i = 0; i < tab.length; i++){
        let bool = false;
        for(let j = 0; j < newTab.length; j++){
            if(tab[i] == newTab[j]){
                bool = true;
            }
           
        }
         if (bool == false){
                newTab.push(tab[i]);
            }
    }

    return newTab;
}

console.log(supprimerDoublons([1, 2, 2, 3, 4, 4, 1]));