console.log(`Excercise 6.4`);

let person = { name: 'Ona', age: 25, city: 'Barcelona' };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

let numbers = [1, 2, 3, 4, 5, 6];
for (let number of numbers) {
  if (number === 5) {
    break;
  }
  console.log(number);
}