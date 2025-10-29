console.log(`Excercise 2.3`);

let number1 = -7;
number1 > 0
  ? console.log(`${number1} is positive`)
  : number1 < 0
  ? console.log(`${number1} is negative`)
  : console.log(`${number1} is zero`);

function findMaximum(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

const result = findMaximum(10, 25, 5);
console.log(`The maximum number is: ${result}`);