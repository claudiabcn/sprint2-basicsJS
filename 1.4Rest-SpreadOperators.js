// 1.4 Rest & Spread operators
console.log("Excercise 4.1");

const array1 = [0, 1, 2, 3, 4, 5];
const array2 = [6, 7, 8];
console.log("New array: " + [...array1, ...array2]);


console.log("Excercise 4.2");

function sum(...all) {
return all.reduce((total, num) => total + num, 0);
}

console.log(sum(1,10,15,20));

//Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2.
// Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
