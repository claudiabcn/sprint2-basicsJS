// 1.5 Array transformations
console.log("Excercise 5.1");

const numbersArray = [1, 2, 3, 4];
const numbersSquareArray = numbersArray.map(function (val){
    return val*val; 
});
console.log("Square array: " + numbersSquareArray)

console.log("Excercise 5.2");

const numbersEvenArray = numbersArray.filter(element => element % 2 == 0);
console.log("Even array: " + numbersEvenArray)
    
console.log("Excercise 5.3");
const numbersArray2 = [1, 10 , 8, 11]
const number10 = numbersArray2.find(element => element > 10);
console.log("Bigger than 10: " + number10)

console.log("Excercise 5.4");
const numbersArray3 = [13, 7, 8, 21]
const sumTotal = numbersArray3.reduce((acum, val) => acum + val, 0);
console.log("Sum total: " + sumTotal)


// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.
// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.
// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.
// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.