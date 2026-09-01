const prompt = require ("prompt-sync")();

let noteCC = prompt("Contrôle continu : " );
let noteProjet = prompt("Projet : " );
let noteExamen = prompt("Exam final : " );

console.log("Contrôle continu : " + noteCC);
console.log("Projet : " + noteProjet);
console.log("Examen : " + noteExamen);

let noteFinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10

console.log("Note finale : " + noteFinale);