console.log("Excercise 3.1");

function process(numb10, callback) {
    callback(numb10);
}
function message(numb10) {

    console.log(`${numb10} processed`);
}
let numb10 = 55;
process(numb10, message);

console.log("Excercise 3.2");

function calculator(num1, num2, callback) {
    callback(num1, num2);
}
function sum(num1, num2) {

    console.log(`Sum is equal to: ${num1 + num2}`);
}
let num1 = 10;
let num2 = 5;
calculator(num1, num2, sum);