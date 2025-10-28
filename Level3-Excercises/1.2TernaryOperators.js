console.log("Exercise 2.4");

const numbers = [5, 9, 4, 7, 6];

function evenOrOdd(numbers) {
numbers.forEach(number => {
    const message = number % 2 === 0 ? 'even' : 'odd';
    console.log(`${number} is ${message}`);
});
}

evenOrOdd(numbers);