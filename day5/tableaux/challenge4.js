function ajouterALaFin(tab, element){
let lafin = [];
for(i = 0; i < tab.length; i++){
lafin[i] = tab[i];
}
lafin[i] = element;
console.log(lafin);
}
ajouterALaFin([1, 2, 3], 4)