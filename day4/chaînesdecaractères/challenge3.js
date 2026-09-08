function inverserChaine(chaine){
    let newchaine = [];
    let i = 0;

    while(chaine[i]){
        i++;
    }
    
    for(let j = i-1; j >= 0; j-- ){
        newchaine.push(chaine[j]);
    }
    return newchaine;
}

console.log(inverserChaine("hello"))