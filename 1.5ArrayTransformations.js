console.log("Excercise 5.6");
let numbers10 = [11, 12, 13, 14];
numbers10.every(function(num) {
return num>10});

const allGreaterThanTen = numbers10.every(num => num > 10)
console.log("The numbers are greater than 10: " + allGreaterThanTen);

numbers10.some(function(num) {
return num>10});

const someGreaterThanTen = numbers10.some(num => num > 10)
console.log("There are some numbers greater than 10: " + someGreaterThanTen);
