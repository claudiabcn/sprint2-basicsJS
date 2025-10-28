console.log(`Excercise 1.4`);

function printNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const print = (num) => console.log(`${num}`);
    print(numbers[i]);
  }
}

const nums = [1, 2, 3, 4, 5];
printNumbers(nums);