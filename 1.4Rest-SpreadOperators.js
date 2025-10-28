
console.log("Excercise 4.1");

const array1 = [0, 1, 2, 3, 4, 5];
const array2 = [6, 7, 8];
console.log("New array: " + [...array1, ...array2]);


console.log("Excercise 4.2");

function sum(...all) {
return all.reduce((total, num) => total + num, 0);
}

console.log(sum(1,10,15,20));

