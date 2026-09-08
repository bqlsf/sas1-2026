function filtrerPairs(tab){
    let nuwTab = [];
    let j = 0;


    for(let i = 0; i < tab.length; i++){
        if (tab[i] %2 == 0){
            nuwTab[j] = tab[i];
            j++;
            }
        }
        return nuwTab;
}

console.log(filtrerPairs([1,2, 3,4,  5,6, 7]));