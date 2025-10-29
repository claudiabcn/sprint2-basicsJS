console.log("Excercise 5.1");

let numbersArray = [1, 2, 3, 4];
let numbersSquareArray = numbersArray.map(val => val * val);
console.log(`Square array: ${numbersSquareArray}`);

console.log("Excercise 5.2");

let numbersEvenArray = numbersArray.filter(element => element % 2 == 0);
console.log(`Even array: ${numbersEvenArray}`);

console.log("Excercise 5.3");
let numbersArray2 = [1, 10, 8, 11];
let number10 = numbersArray2.find(element => element > 10);
console.log(`Bigger than 10: ${number10}`);

console.log("Excercise 5.4");
let numbersArray3 = [13, 7, 8, 21];
let sumTotal = numbersArray3.reduce((acum, val) => acum + val, 0);
console.log(`Sum total: ${sumTotal}`);