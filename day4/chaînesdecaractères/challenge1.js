function compterCaracteres(chaine){

    let nombre = 0;
    let i = 0;
    while(chaine[i]){
        nombre++;
        i++;
    } 
    return nombre;
}

console.log(compterCaracteres("kkkkkk"))