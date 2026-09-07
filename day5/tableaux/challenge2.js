function calculerSomme(tab){
    let somme = 0;
    for(let i = 0; i <tab.length; i ++){
      
         somme = somme +  Number(tab[i]);
    }
    console.log(somme)
}
calculerSomme([1,2 , 11, 15]);