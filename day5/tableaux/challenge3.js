function trouverMax(tab){

    let max = tab[0];
    for(let i = 1 ; i < tab.length; i++){
        if(max < tab[i]){
            max = tab[i];
        }
        }
    console.log(max);
}


trouverMax([1, 10, 9, 5]);