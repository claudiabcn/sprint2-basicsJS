console.log(`Excercise 5.5`);

const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const result = numbers
  .filter((number) => number >= 10)
  .map((number) => number * 2)
  .reduce((accumulator, number) => accumulator + number, 0);

console.log(`Result: ${result}`);