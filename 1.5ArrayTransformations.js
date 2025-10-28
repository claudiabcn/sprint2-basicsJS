// 1.5 Array transformations
console.log("Excercise 5.5");

const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const result = numbers
    .filter(num => num >= 10)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);

console.log(result);    
