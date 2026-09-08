function fusionnerTableaux(tab1, tab2){
    let newTab = tab1;
    
    for(let i = 0; i < tab2.length; i++){
            newTab.push(tab2[i])
    
        }
        return newTab;
    }
    console.log(fusionnerTableaux([1, 2], [3, 4]));